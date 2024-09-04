import { Resource } from '../src/index';
import axios, { AxiosInstance } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Contacts } from '../src/types/models';

describe('Resource', () => {
    let resource: Resource<Contacts>;
    let mockAxios: MockAdapter;
    let axiosInstance: AxiosInstance;

    beforeEach(() => {
        axiosInstance = axios.create();
        mockAxios = new MockAdapter(axiosInstance);
        resource = new Resource<Contacts>(axiosInstance, 'test-connection-key', 'contacts');
    });

    afterEach(() => {
        mockAxios.reset();
    });

    it('should create a contact', async () => {
        const newContact: Contacts = {
            firstName: 'John',
            lastName: 'Doe'
        };

        const createdContact = { ...newContact, id: '1' };

        mockAxios.onPost('/contacts').reply(201, { unified: createdContact });

        const createResponse = await resource.create(newContact);
        expect(createResponse.unified).toEqual(createdContact);
        expect(createResponse.statusCode).toBe(201);
    });

    it('should retrieve a contact', async () => {
        const contactId = '1';
        const contact = { id: contactId, firstName: 'John', lastName: 'Doe' };

        mockAxios.onGet(`/contacts/${contactId}`).reply(200, { unified: contact });

        const getResponse = await resource.get(contactId);
        expect(getResponse.unified).toEqual(contact);
        expect(getResponse.statusCode).toBe(200);
    });

    it('should update a contact', async () => {
        const contactId = '1';
        const updatedContact: Contacts = {
            id: contactId,
            firstName: 'John',
            lastName: 'Smith'
        };

        mockAxios.onPatch(`/contacts/${contactId}`).reply(204, { unified: updatedContact });

        const updateResponse = await resource.update(contactId, updatedContact);
        expect(updateResponse.unified).toEqual(updatedContact);
        expect(updateResponse.statusCode).toBe(204);
    });

    it('should list contacts', async () => {
        const mockContacts = [
            { id: '1', firstName: 'John', lastName: 'Doe' },
            { id: '2', firstName: 'Jane', lastName: 'Smith' }
        ];

        mockAxios.onGet('/contacts').reply(200, {
            unified: mockContacts,
            pagination: { next: 'nextpage' },
            meta: { total: 2 }
        });

        const listResponse = await resource.list();

        expect(Array.isArray(listResponse.unified)).toBe(true);
        expect(listResponse.unified).toEqual(mockContacts);
        expect(listResponse.pagination).toBeDefined();
        expect(listResponse.meta).toBeDefined();
        expect(listResponse.statusCode).toBe(200);
    });

    it('should delete a contact', async () => {
        const contactId = '1';

        mockAxios.onDelete(`/contacts/${contactId}`).reply(204);

        const deleteResponse = await resource.delete(contactId);
        expect(deleteResponse.statusCode).toBe(204);
    });
});