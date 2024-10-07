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
    Messages, 
    Conversations, 
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

interface PassthroughAPI<Type> {
    call(options: {
        method: Method;
        path: string;
        data?: any;
        headers?: Record<string, string>;
        queryParams?: Record<string, string>;
    }): Promise<Response<Type>>;
}

export class Resource {
    protected axiosInstance: AxiosInstance;
    protected connectionKey: string;
    protected resourceName: string;

    constructor(axiosInstance: AxiosInstance, connectionKey: string, resourceName: string) {
        this.axiosInstance = axiosInstance;
        this.connectionKey = connectionKey;
        this.resourceName = resourceName;
    }

    protected getRequestHeaders(options?: UnifiedOptions): Record<string, string> {
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

    protected async makeRequestSingle<R>(
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
                ...(url.startsWith('/passthrough') ? { passthrough: response?.data } : response?.data),
                headers: response.headers as Record<string, string>,
                statusCode: statusCode || response.status
            };

            return output;
        } catch (error: any) {
            throw error.response?.data;
        }
    }

    protected async makeRequestList<R>(
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
}

class UnifiedResourceImpl<T> extends Resource implements UnifiedApi<T> {
    async create(object: T, options?: UnifiedOptions): Promise<Response<T>> {
        return this.makeRequestSingle<T>('POST', `/unified/${this.resourceName}`, object, options, undefined, HttpStatusCode.Created);
    }

    async upsert(object: T, options?: UnifiedOptions): Promise<Response<T>> {
        return this.makeRequestSingle<T>('PUT', `/unified/${this.resourceName}`, object, options, undefined, HttpStatusCode.OK);
    }

    async list(filter?: ListFilter, options?: UnifiedOptions): Promise<ListResponse<T>> {
        const queryParams = convertFilterToQueryParams(filter);
        return this.makeRequestList<T>('GET', `/unified/${this.resourceName}`, undefined, options, queryParams, HttpStatusCode.OK);
    }

    async get(id: string, options?: UnifiedOptions): Promise<Response<T>> {
        return this.makeRequestSingle<T>('GET', `/unified/${this.resourceName}/${id}`, undefined, options, undefined, HttpStatusCode.OK);
    }

    async update(id: string, object: T, options?: UnifiedOptions): Promise<Response<T>> {
        return this.makeRequestSingle<T>('PATCH', `/unified/${this.resourceName}/${id}`, object, options, undefined, HttpStatusCode.NoContent);
    }

    async count(options?: UnifiedOptions): Promise<Response<Count>> {
        return this.makeRequestSingle<Count>('GET', `/unified/${this.resourceName}/count`, undefined, options, undefined, HttpStatusCode.OK);
    }

    async delete(id: string, deleteOptions?: DeleteOptions, options?: UnifiedOptions): Promise<Response<T>> {
        return this.makeRequestSingle<T>('DELETE', `/unified/${this.resourceName}/${id}`, undefined, options, {
            ...deleteOptions,
        }, HttpStatusCode.NoContent);
    }
}

class PassthroughResourceImpl<T> extends Resource implements PassthroughAPI<T> {
    async call<T>(options: {
        method: Method;
        path: string;
        data?: any;
        headers?: Record<string, string>;
        queryParams?: Record<string, string>;
    }): Promise<Response<T>> {
        const { method, path, data, headers, queryParams } = options;

        return this.makeRequestSingle<T>(method, `/passthrough/${path}`, data, headers, queryParams);
    }
}

export interface IntegrationOSConfig {
    serverUrl: string
}

export class IntegrationOS {
    public axiosInstance: AxiosInstance;

    constructor(private apiKey: string, options?: IntegrationOSConfig | undefined | null) {
        this.axiosInstance = axios.create({
            baseURL: options?.serverUrl || 'https://api.integrationos.com/v1',
            headers: {
                'x-integrationos-secret': this.apiKey,
                'Content-Type': 'application/json',
            },
        });
    }

    passthrough<T>(connectionKey: string): PassthroughAPI<T> {
        return new PassthroughResourceImpl(this.axiosInstance, connectionKey, 'passthrough');
    }

    events(connectionKey: string) {
        return new UnifiedResourceImpl<Events>(this.axiosInstance, connectionKey, 'events');
    }
    calendars(connectionKey: string) {
        return new UnifiedResourceImpl<Calendars>(this.axiosInstance, connectionKey, 'calendars');
    }
    threads(connectionKey: string) {
        return new UnifiedResourceImpl<Threads>(this.axiosInstance, connectionKey, 'threads');
    }
    drafts(connectionKey: string) {
        return new UnifiedResourceImpl<Drafts>(this.axiosInstance, connectionKey, 'drafts');
    }
    drives(connectionKey: string) {
        return new UnifiedResourceImpl<Drives>(this.axiosInstance, connectionKey, 'drives');
    }
    folders(connectionKey: string) {
        return new UnifiedResourceImpl<Folders>(this.axiosInstance, connectionKey, 'folders');
    }
    files(connectionKey: string) {
        return new UnifiedResourceImpl<Files>(this.axiosInstance, connectionKey, 'files');
    }
    recordings(connectionKey: string) {
        return new UnifiedResourceImpl<Recordings>(this.axiosInstance, connectionKey, 'recordings');
    }
    transcripts(connectionKey: string) {
        return new UnifiedResourceImpl<Transcripts>(this.axiosInstance, connectionKey, 'transcripts');
    }
    tables(connectionKey: string) {
        return new UnifiedResourceImpl<Tables>(this.axiosInstance, connectionKey, 'tables');
    }
    databases(connectionKey: string) {
        return new UnifiedResourceImpl<Databases>(this.axiosInstance, connectionKey, 'databases');
    }
    attributes(connectionKey: string) {
        return new UnifiedResourceImpl<Attributes>(this.axiosInstance, connectionKey, 'attributes');
    }
    records(connectionKey: string) {
        return new UnifiedResourceImpl<Records>(this.axiosInstance, connectionKey, 'records');
    }
    objects(connectionKey: string) {
        return new UnifiedResourceImpl<Objects>(this.axiosInstance, connectionKey, 'objects');
    }
    modifierGroups(connectionKey: string) {
        return new UnifiedResourceImpl<ModifierGroups>(this.axiosInstance, connectionKey, 'modifiergroups');
    }
    locations(connectionKey: string) {
        return new UnifiedResourceImpl<Locations>(this.axiosInstance, connectionKey, 'locations');
    }
    webhooks(connectionKey: string) {
        return new UnifiedResourceImpl<Webhooks>(this.axiosInstance, connectionKey, 'webhooks');
    }
    priceRules(connectionKey: string) {
        return new UnifiedResourceImpl<PriceRules>(this.axiosInstance, connectionKey, 'pricerules');
    }
    discounts(connectionKey: string) {
        return new UnifiedResourceImpl<Discounts>(this.axiosInstance, connectionKey, 'discounts');
    }
    chats(connectionKey: string) {
        return new UnifiedResourceImpl<Chats>(this.axiosInstance, connectionKey, 'chats');
    }
    messages(connectionKey: string) {
        return new UnifiedResourceImpl<Messages>(this.axiosInstance, connectionKey, 'messages');
    }
    conversations(connectionKey: string) {
        return new UnifiedResourceImpl<Conversations>(this.axiosInstance, connectionKey, 'conversations');
    }
    taxRates(connectionKey: string) {
        return new UnifiedResourceImpl<TaxRates>(this.axiosInstance, connectionKey, 'taxrates');
    }
    creditNotes(connectionKey: string) {
        return new UnifiedResourceImpl<CreditNotes>(this.axiosInstance, connectionKey, 'creditnotes');
    }
    expenses(connectionKey: string) {
        return new UnifiedResourceImpl<Expenses>(this.axiosInstance, connectionKey, 'expenses');
    }
    transactions(connectionKey: string) {
        return new UnifiedResourceImpl<Transactions>(this.axiosInstance, connectionKey, 'transactions');
    }
    accounts(connectionKey: string) {
        return new UnifiedResourceImpl<Accounts>(this.axiosInstance, connectionKey, 'accounts');
    }
    purchaseOrders(connectionKey: string) {
        return new UnifiedResourceImpl<PurchaseOrders>(this.axiosInstance, connectionKey, 'purchaseorders');
    }
    refunds(connectionKey: string) {
        return new UnifiedResourceImpl<Refunds>(this.axiosInstance, connectionKey, 'refunds');
    }
    payments(connectionKey: string) {
        return new UnifiedResourceImpl<Payments>(this.axiosInstance, connectionKey, 'payments');
    }
    bills(connectionKey: string) {
        return new UnifiedResourceImpl<Bills>(this.axiosInstance, connectionKey, 'bills');
    }
    vendors(connectionKey: string) {
        return new UnifiedResourceImpl<Vendors>(this.axiosInstance, connectionKey, 'vendors');
    }
    balanceSheets(connectionKey: string) {
        return new UnifiedResourceImpl<BalanceSheets>(this.axiosInstance, connectionKey, 'balancesheets');
    }
    incomeStatements(connectionKey: string) {
        return new UnifiedResourceImpl<IncomeStatements>(this.axiosInstance, connectionKey, 'incomestatements');
    }
    invoices(connectionKey: string) {
        return new UnifiedResourceImpl<Invoices>(this.axiosInstance, connectionKey, 'invoices');
    }
    journalEntries(connectionKey: string) {
        return new UnifiedResourceImpl<JournalEntries>(this.axiosInstance, connectionKey, 'journalentries');
    }
    invoiceItems(connectionKey: string) {
        return new UnifiedResourceImpl<InvoiceItems>(this.axiosInstance, connectionKey, 'invoiceitems');
    }
    tickets(connectionKey: string) {
        return new UnifiedResourceImpl<Tickets>(this.axiosInstance, connectionKey, 'tickets');
    }
    candidates(connectionKey: string) {
        return new UnifiedResourceImpl<Candidates>(this.axiosInstance, connectionKey, 'candidates');
    }
    contacts(connectionKey: string) {
        return new UnifiedResourceImpl<Contacts>(this.axiosInstance, connectionKey, 'contacts');
    }
    jobs(connectionKey: string) {
        return new UnifiedResourceImpl<Jobs>(this.axiosInstance, connectionKey, 'jobs');
    }
    tasks(connectionKey: string) {
        return new UnifiedResourceImpl<Tasks>(this.axiosInstance, connectionKey, 'tasks');
    }
    products(connectionKey: string) {
        return new UnifiedResourceImpl<Products>(this.axiosInstance, connectionKey, 'products');
    }
    orders(connectionKey: string) {
        return new UnifiedResourceImpl<Orders>(this.axiosInstance, connectionKey, 'orders');
    }
    opportunities(connectionKey: string) {
        return new UnifiedResourceImpl<Opportunities>(this.axiosInstance, connectionKey, 'opportunities');
    }
    users(connectionKey: string) {
        return new UnifiedResourceImpl<Users>(this.axiosInstance, connectionKey, 'users');
    }
    categories(connectionKey: string) {
        return new UnifiedResourceImpl<Categories>(this.axiosInstance, connectionKey, 'categories');
    }
    notes(connectionKey: string) {
        return new UnifiedResourceImpl<Notes>(this.axiosInstance, connectionKey, 'notes');
    }
    leads(connectionKey: string) {
        return new UnifiedResourceImpl<Leads>(this.axiosInstance, connectionKey, 'leads');
    }
    companies(connectionKey: string) {
        return new UnifiedResourceImpl<Companies>(this.axiosInstance, connectionKey, 'companies');
    }
    customers(connectionKey: string) {
        return new UnifiedResourceImpl<Customers>(this.axiosInstance, connectionKey, 'customers');
    }
}