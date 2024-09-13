import axios, { AxiosInstance, Method } from 'axios';
import { UnifiedOptions, Response, ListFilter, ListResponse, Count, DeleteOptions, HttpStatusCode } from './types/';
import { convertFilterToQueryParams } from './utils';

export * from './types/generic';
export * from './types/models';

import { 
    Events, 
    Calendars, 
    Threads, 
    Drafts, 
    Drives, 
    Folders, 
    Files, 
    Recordings, 
    Transcripts, 
    Tables, 
    Databases, 
    Attributes, 
    Records, 
    Objects, 
    ModifierGroups, 
    Locations, 
    Webhooks, 
    PriceRules, 
    Discounts, 
    Chats, 
    Conversations, 
    Messages, 
    TaxRates, 
    CreditNotes, 
    Expenses, 
    Transactions, 
    Accounts, 
    PurchaseOrders, 
    Refunds, 
    Payments, 
    Bills, 
    Vendors, 
    BalanceSheets, 
    IncomeStatements, 
    Invoices, 
    JournalEntries, 
    InvoiceItems, 
    Tickets, 
    Candidates, 
    Contacts, 
    Jobs, 
    Tasks, 
    Products, 
    Orders, 
    Opportunities, 
    Users, 
    Categories, 
    Notes, 
    Leads, 
    Companies, 
    Customers
} from './types/';

interface UnifiedApi<Type> {
    create(object: Type, options?: UnifiedOptions | undefined | null): Promise<Response<Type>>;
    list(filter?: ListFilter | undefined | null, options?: UnifiedOptions | undefined | null): Promise<ListResponse<Type>>;
    get(id: string, options?: UnifiedOptions | undefined | null): Promise<Response<Type>>;
    update(id: string, object: Type, options?: UnifiedOptions | undefined | null): Promise<Response<Type>>;
    count(options?: UnifiedOptions | undefined | null): Promise<Response<Count>>;
    delete(id: string, deleteOptions?: DeleteOptions | undefined | null, options?: UnifiedOptions | undefined | null): Promise<Response<Type>>;
}

export class Resource<T> implements UnifiedApi<T> {
    private axiosInstance: AxiosInstance;
    private connectionKey: string;
    private resourceName: string;

    constructor(axiosInstance: AxiosInstance, connectionKey: string, resourceName: string) {
        this.axiosInstance = axiosInstance;
        this.connectionKey = connectionKey;
        this.resourceName = resourceName;
    }

    private getRequestHeaders(options?: UnifiedOptions): Record<string, string> {
        const headers: Record<string, string> = {};
        const excludedKeys = ['common', 'delete', 'get', 'head', 'post', 'put', 'patch'];

        for (const [key, value] of Object.entries(this.axiosInstance.defaults.headers)) {
            if (!excludedKeys.includes(key) && typeof value === 'string') {
                headers[key] = value;
            }
        }

        headers['x-integrationos-connection-key'] = this.connectionKey;
        Object.assign(headers, options?.passthroughHeaders);

        return headers;
    }

    private async makeRequestSingle<R>(
        method: string, 
        url: string, 
        data?: any, 
        options?: UnifiedOptions, 
        queryParams?: Record<string, string>, 
        statusCode?: number
    ): Promise<Response<R>> {
        try {
            const response = await this.axiosInstance.request({
                method: method as Method,
                url,
                data,
                headers: this.getRequestHeaders(options),
                params: { ...queryParams, ...options?.passthroughQuery }
            });

            const output = {
                ...response?.data,
                headers: response.headers as Record<string, string>,
                statusCode: statusCode || response.status
            };

            return output;
        } catch (error: any) {
            throw error.response?.data;
        }
    }

    private async makeRequestList<R>(
        method: string, 
        url: string, 
        data?: any, 
        options?: UnifiedOptions, 
        queryParams?: Record<string, string>, 
        statusCode?: number
    ): Promise<ListResponse<R>> {
        try {
            const response = await this.axiosInstance.request({
                method: method as Method,
                url,
                data,
                headers: this.getRequestHeaders(options),
                params: { ...queryParams, ...options?.passthroughQuery }
            });

            const output = {
                ...response?.data,
                headers: response.headers as Record<string, string>,
                statusCode: statusCode || response.status
            };

            return output;
        } catch (error: any) {
            throw error.response?.data;
        }
    }

    async create(object: T, options?: UnifiedOptions): Promise<Response<T>> {
        return this.makeRequestSingle<T>('POST', `/${this.resourceName}`, object, options, undefined, HttpStatusCode.Created);
    }

    async upsert(object: T, options?: UnifiedOptions): Promise<Response<T>> {
        return this.makeRequestSingle<T>('PUT', `/${this.resourceName}`, object, options, undefined, HttpStatusCode.OK);
    }

    async list(filter?: ListFilter, options?: UnifiedOptions): Promise<ListResponse<T>> {
        const queryParams = convertFilterToQueryParams(filter);
        return this.makeRequestList<T>('GET', `/${this.resourceName}`, undefined, options, queryParams, HttpStatusCode.OK);
    }

    async get(id: string, options?: UnifiedOptions): Promise<Response<T>> {
        return this.makeRequestSingle<T>('GET', `/${this.resourceName}/${id}`, undefined, options, undefined, HttpStatusCode.OK);
    }

    async update(id: string, object: T, options?: UnifiedOptions): Promise<Response<T>> {
        return this.makeRequestSingle<T>('PATCH', `/${this.resourceName}/${id}`, object, options, undefined, HttpStatusCode.NoContent);
    }

    async count(options?: UnifiedOptions): Promise<Response<Count>> {
        return this.makeRequestSingle<Count>('GET', `/${this.resourceName}/count`, undefined, options, undefined, HttpStatusCode.OK);
    }

    async delete(id: string, deleteOptions?: DeleteOptions, options?: UnifiedOptions): Promise<Response<T>> {
        return this.makeRequestSingle<T>('DELETE', `/${this.resourceName}/${id}`, undefined, options, {
            ...deleteOptions,
        }, HttpStatusCode.NoContent);
    }
}

export interface IntegrationOSConfig {
    serverUrl: string
}

export class IntegrationOS {
    private axiosInstance: AxiosInstance;

    constructor(private apiKey: string, options?: IntegrationOSConfig | undefined | null) {
        this.axiosInstance = axios.create({
            baseURL: options?.serverUrl || 'https://api.integrationos.com/v1/unified',
            headers: {
                'x-integrationos-secret': this.apiKey,
                'Content-Type': 'application/json',
            },
        });
    }

    events(connectionKey: string) {
        return new Resource<Events>(this.axiosInstance, connectionKey, 'events');
    }
    calendars(connectionKey: string) {
        return new Resource<Calendars>(this.axiosInstance, connectionKey, 'calendars');
    }
    threads(connectionKey: string) {
        return new Resource<Threads>(this.axiosInstance, connectionKey, 'threads');
    }
    drafts(connectionKey: string) {
        return new Resource<Drafts>(this.axiosInstance, connectionKey, 'drafts');
    }
    drives(connectionKey: string) {
        return new Resource<Drives>(this.axiosInstance, connectionKey, 'drives');
    }
    folders(connectionKey: string) {
        return new Resource<Folders>(this.axiosInstance, connectionKey, 'folders');
    }
    files(connectionKey: string) {
        return new Resource<Files>(this.axiosInstance, connectionKey, 'files');
    }
    recordings(connectionKey: string) {
        return new Resource<Recordings>(this.axiosInstance, connectionKey, 'recordings');
    }
    transcripts(connectionKey: string) {
        return new Resource<Transcripts>(this.axiosInstance, connectionKey, 'transcripts');
    }
    tables(connectionKey: string) {
        return new Resource<Tables>(this.axiosInstance, connectionKey, 'tables');
    }
    databases(connectionKey: string) {
        return new Resource<Databases>(this.axiosInstance, connectionKey, 'databases');
    }
    attributes(connectionKey: string) {
        return new Resource<Attributes>(this.axiosInstance, connectionKey, 'attributes');
    }
    records(connectionKey: string) {
        return new Resource<Records>(this.axiosInstance, connectionKey, 'records');
    }
    objects(connectionKey: string) {
        return new Resource<Objects>(this.axiosInstance, connectionKey, 'objects');
    }
    modifierGroups(connectionKey: string) {
        return new Resource<ModifierGroups>(this.axiosInstance, connectionKey, 'modifiergroups');
    }
    locations(connectionKey: string) {
        return new Resource<Locations>(this.axiosInstance, connectionKey, 'locations');
    }
    webhooks(connectionKey: string) {
        return new Resource<Webhooks>(this.axiosInstance, connectionKey, 'webhooks');
    }
    priceRules(connectionKey: string) {
        return new Resource<PriceRules>(this.axiosInstance, connectionKey, 'pricerules');
    }
    discounts(connectionKey: string) {
        return new Resource<Discounts>(this.axiosInstance, connectionKey, 'discounts');
    }
    chats(connectionKey: string) {
        return new Resource<Chats>(this.axiosInstance, connectionKey, 'chats');
    }
    conversations(connectionKey: string) {
        return new Resource<Conversations>(this.axiosInstance, connectionKey, 'conversations');
    }
    messages(connectionKey: string) {
        return new Resource<Messages>(this.axiosInstance, connectionKey, 'messages');
    }
    taxRates(connectionKey: string) {
        return new Resource<TaxRates>(this.axiosInstance, connectionKey, 'taxrates');
    }
    creditNotes(connectionKey: string) {
        return new Resource<CreditNotes>(this.axiosInstance, connectionKey, 'creditnotes');
    }
    expenses(connectionKey: string) {
        return new Resource<Expenses>(this.axiosInstance, connectionKey, 'expenses');
    }
    transactions(connectionKey: string) {
        return new Resource<Transactions>(this.axiosInstance, connectionKey, 'transactions');
    }
    accounts(connectionKey: string) {
        return new Resource<Accounts>(this.axiosInstance, connectionKey, 'accounts');
    }
    purchaseOrders(connectionKey: string) {
        return new Resource<PurchaseOrders>(this.axiosInstance, connectionKey, 'purchaseorders');
    }
    refunds(connectionKey: string) {
        return new Resource<Refunds>(this.axiosInstance, connectionKey, 'refunds');
    }
    payments(connectionKey: string) {
        return new Resource<Payments>(this.axiosInstance, connectionKey, 'payments');
    }
    bills(connectionKey: string) {
        return new Resource<Bills>(this.axiosInstance, connectionKey, 'bills');
    }
    vendors(connectionKey: string) {
        return new Resource<Vendors>(this.axiosInstance, connectionKey, 'vendors');
    }
    balanceSheets(connectionKey: string) {
        return new Resource<BalanceSheets>(this.axiosInstance, connectionKey, 'balancesheets');
    }
    incomeStatements(connectionKey: string) {
        return new Resource<IncomeStatements>(this.axiosInstance, connectionKey, 'incomestatements');
    }
    invoices(connectionKey: string) {
        return new Resource<Invoices>(this.axiosInstance, connectionKey, 'invoices');
    }
    journalEntries(connectionKey: string) {
        return new Resource<JournalEntries>(this.axiosInstance, connectionKey, 'journalentries');
    }
    invoiceItems(connectionKey: string) {
        return new Resource<InvoiceItems>(this.axiosInstance, connectionKey, 'invoiceitems');
    }
    tickets(connectionKey: string) {
        return new Resource<Tickets>(this.axiosInstance, connectionKey, 'tickets');
    }
    candidates(connectionKey: string) {
        return new Resource<Candidates>(this.axiosInstance, connectionKey, 'candidates');
    }
    contacts(connectionKey: string) {
        return new Resource<Contacts>(this.axiosInstance, connectionKey, 'contacts');
    }
    jobs(connectionKey: string) {
        return new Resource<Jobs>(this.axiosInstance, connectionKey, 'jobs');
    }
    tasks(connectionKey: string) {
        return new Resource<Tasks>(this.axiosInstance, connectionKey, 'tasks');
    }
    products(connectionKey: string) {
        return new Resource<Products>(this.axiosInstance, connectionKey, 'products');
    }
    orders(connectionKey: string) {
        return new Resource<Orders>(this.axiosInstance, connectionKey, 'orders');
    }
    opportunities(connectionKey: string) {
        return new Resource<Opportunities>(this.axiosInstance, connectionKey, 'opportunities');
    }
    users(connectionKey: string) {
        return new Resource<Users>(this.axiosInstance, connectionKey, 'users');
    }
    categories(connectionKey: string) {
        return new Resource<Categories>(this.axiosInstance, connectionKey, 'categories');
    }
    notes(connectionKey: string) {
        return new Resource<Notes>(this.axiosInstance, connectionKey, 'notes');
    }
    leads(connectionKey: string) {
        return new Resource<Leads>(this.axiosInstance, connectionKey, 'leads');
    }
    companies(connectionKey: string) {
        return new Resource<Companies>(this.axiosInstance, connectionKey, 'companies');
    }
    customers(connectionKey: string) {
        return new Resource<Customers>(this.axiosInstance, connectionKey, 'customers');
    }
}