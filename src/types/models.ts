// This file is auto-generated. Do not edit it manually.

export interface EntryPoints {
    type?: string;
    name?: string;
    pin?: string;
    commonModel?: string;
    uri?: string;
    id?: string
}
export interface EventReminders {
    action?: EventReminderAction;
    commonModel?: string;
    minutes?: number
}
export interface EventRules {
    isAllDay?: boolean;
    isMultiDay?: boolean;
    commonModel?: string;
    locked?: boolean;
    guestsCanModify?: boolean;
    canAddSelf?: boolean;
    guestsCanInvite?: boolean
}
export interface EventRecurrenceRules {
    id?: string;
    dates?: string[];
    commonModel?: string;
    frequency?: EventFrequency;
    until?: string;
    byDay?: string;
    type?: EventRuleType;
    count?: number;
    byMonthDay?: number;
    interval?: number;
    byMonth?: number
}
export interface EventRecurrences {
    id?: string;
    rules?: EventRecurrenceRules[];
    commonModel?: string
}
export interface ToolResultContent {
    type?: AiMessagesContentType;
    text?: string[];
    commonModel?: string;
    image?: Images
}
export interface ToolCalls {
    commonModel?: string;
    id?: string;
    modifyToken?: string;
    type?: ToolCallType;
    function?: unknown
}
export interface ResponseFormat {
    schema?: JsonSchema;
    commonModel?: string;
    type?: ResponseFormatType
}
export interface JsonSchema {
    schema?: unknown;
    type?: JsonSchemaType;
    commonModel?: string;
    name?: string;
    description?: string;
    strict?: boolean
}
export interface AiToolChoice {
    commonModel?: string;
    name?: string;
    type?: AiToolChoiceType
}
export interface AiMessagesContent {
    text?: string;
    isError?: boolean;
    commonModel?: string;
    type?: AiMessagesContentType;
    id?: string;
    modifyToken?: string;
    name?: string;
    toolUseId?: string;
    image?: Images;
    toolResultContent?: ToolResultContent[]
}
export interface Events {
    recurrence?: EventRecurrences;
    deleted?: boolean;
    endDate?: string;
    commonModel?: string;
    attendees?: Users[];
    rules?: EventRules;
    id?: string;
    entryPoints?: EntryPoints[];
    updatedAt?: string;
    timeZone?: string;
    organizer?: Users;
    status?: EventStatus;
    createdAt?: string;
    modifyToken?: string;
    location?: string;
    attachments?: Attachments[];
    visibility?: EventVisibility;
    link?: string;
    title?: string;
    startDate?: string;
    reminders?: EventReminders[];
    description?: string
}
export interface Calendars {
    deleted?: boolean;
    timeZone?: string;
    updatedAt?: string;
    id?: string;
    commonModel?: string;
    description?: string;
    title?: string;
    location?: string;
    createdAt?: string;
    modifyToken?: string;
    type?: string
}
export interface Threads {
    deleted?: boolean;
    snippet?: string;
    tags?: KeyValues[];
    commonModel?: string;
    modifyToken?: string;
    lastMessageId?: string;
    id?: string;
    messages?: Messages[];
    lastHistoryId?: string;
    createdAt?: string;
    updatedAt?: string
}
export interface Drafts {
    priority?: PriorityLevel;
    timestamp?: string;
    updatedAt?: string;
    createdAt?: string;
    commonModel?: string;
    threadId?: string;
    bcc?: string;
    recipientEmails?: string[];
    messageId?: string;
    senderEmail?: string;
    senderId?: string;
    id?: string;
    type?: MessageContentType;
    subject?: string;
    chatId?: string;
    cc?: string;
    templateId?: string;
    metadata?: Metadata[];
    modifyToken?: string;
    tags?: KeyValues[];
    content?: string;
    reference?: Entity;
    receiverId?: string;
    attachments?: Attachments[];
    replyToMessageId?: string;
    trackingSettings?: KeyValues[]
}
export interface Drives {
    description?: string;
    createdAt?: string;
    id?: string;
    updatedAt?: string;
    name?: string;
    commonModel?: string
}
export interface Folders {
    size?: number;
    id?: string;
    permissions?: Permissions;
    commonModel?: string;
    parent?: ParentFolders;
    downloadable?: boolean;
    path?: string;
    description?: string;
    createdAt?: string;
    name?: string;
    owner?: FileOwners;
    updatedAt?: string;
    modifyToken?: string
}
export interface Files {
    permissions?: Permissions;
    parent?: ParentFolders;
    owner?: FileOwners;
    size?: number;
    downloadUrl?: string;
    modifyToken?: string;
    exportFormats?: string;
    id?: string;
    mimeType?: string;
    commonModel?: string;
    content?: string;
    updatedAt?: string;
    downloadable?: boolean;
    name?: string;
    exportable?: boolean;
    path?: string;
    extension?: string;
    createdAt?: string;
    description?: string;
    type?: FileType
}
export interface FileOwners {
    email?: string;
    id?: string;
    createdAt?: string;
    name?: string;
    updatedAt?: string;
    commonModel?: string
}
export interface ParentFolders {
    commonModel?: string;
    id?: string;
    createdAt?: string;
    name?: string;
    updatedAt?: string
}
export interface Speakers {
    email?: string;
    commonModel?: string;
    speakerId?: string;
    title?: string;
    role?: SpeakerRole;
    id?: string;
    name?: string;
    userId?: string
}
export interface Recordings {
    duration?: number;
    id?: string;
    accountId?: string;
    description?: string;
    modifyToken?: string;
    commonModel?: string;
    topic?: string;
    createdAt?: string;
    callType?: CallDirection;
    fileSize?: number;
    password?: string;
    files?: Attachments[];
    hostId?: string;
    name?: string;
    endTime?: string;
    startTime?: string;
    participants?: Speakers[];
    updatedAt?: string
}
export interface Transcripts {
    speakerName?: string;
    createdAt?: string;
    topic?: string;
    speakerId?: string;
    sentences?: Sentences[];
    commonModel?: string;
    updatedAt?: string;
    meetingId?: string;
    modifyToken?: string;
    id?: string
}
export interface Sentences {
    speakerId?: string;
    endTime?: string;
    commonModel?: string;
    startTime?: string;
    updatedAt?: string;
    speakerName?: string;
    createdAt?: string;
    sentence?: string;
    modifyToken?: string;
    id?: string
}
export interface Tables {
    commonModel?: string;
    id?: string;
    fields?: Attributes[];
    createdAt?: string;
    description?: string;
    slug?: string;
    name?: string;
    updatedAt?: string;
    modifyToken?: string
}
export interface Databases {
    permissionLevel?: string;
    title?: string;
    region?: string;
    tables?: Tables[];
    name?: string;
    id?: string;
    updatedAt?: string;
    active?: boolean;
    url?: string;
    modifyToken?: string;
    commonModel?: string;
    createdAt?: string;
    deleted?: boolean;
    description?: string;
    organizationId?: string
}
export interface Attributes {
    unique?: boolean;
    customTypeDetails?: Metadata[];
    modifyToken?: string;
    updatedAt?: string;
    slug?: string;
    commonModel?: string;
    required?: boolean;
    description?: string;
    createdAt?: string;
    id?: string;
    name?: string;
    dataType?: DataType
}
export interface Records {
    entity?: unknown;
    createdAt?: string;
    commonModel?: string;
    updatedAt?: string;
    modifyToken?: string;
    id?: string
}
export interface Objects {
    modifyToken?: string;
    createdAt?: string;
    name?: string;
    singularNoun?: string;
    updatedAt?: string;
    commonModel?: string;
    pluralNoun?: string;
    custom?: boolean;
    slug?: string;
    id?: string
}
export interface CardDetails {
    capturedAt?: string;
    id?: string;
    statementDescription?: string;
    authorizedAt?: string;
    modifyToken?: string;
    expiryMonth?: string;
    type?: CardType;
    bin?: string;
    createdAt?: string;
    fingerprint?: string;
    deleted?: boolean;
    avcStatus?: AvcStatus;
    commonModel?: string;
    updatedAt?: string;
    brand?: string;
    lastFour?: string;
    status?: string;
    expiryYear?: string;
    cvvStatus?: CvvStatus;
    prepaidType?: PrepaidType;
    active?: boolean;
    entryMethod?: EntryMethod
}
export interface Modifiers {
    name?: string;
    quantity?: number;
    originalPrice?: number;
    currency?: Currency;
    customerNote?: string;
    linePrice?: number;
    commonModel?: string;
    createdAt?: string;
    updatedAt?: string;
    id?: string;
    deleted?: boolean;
    groupId?: string;
    active?: boolean;
    modifyToken?: string
}
export interface ModifierGroups {
    description?: string;
    updatedAt?: string;
    deleted?: boolean;
    modifyToken?: string;
    id?: string;
    type?: ModifierType;
    modifiers?: Modifiers[];
    name?: string;
    createdAt?: string;
    active?: boolean;
    commonModel?: string
}
export interface InvoicePayments {
    commonModel?: string;
    updatedAt?: string;
    date?: string;
    createdAt?: string;
    modifyToken?: string;
    id?: string;
    amount?: number
}
export interface Locations {
    tags?: string[];
    businessName?: string;
    socialProfiles?: SocialProfiles[];
    updatedAt?: string;
    active?: boolean;
    phones?: Phones[];
    address?: Addresses;
    domain?: string;
    name?: string;
    commonModel?: string;
    countryCode?: string;
    currency?: Currency;
    merchantCategoryCode?: string;
    modifyToken?: string;
    website?: string;
    description?: string;
    emails?: Emails[];
    businessHours?: BusinessHours[];
    numberOfEmployees?: number;
    type?: string;
    defaultEmail?: string;
    customFields?: CustomAttributes[];
    createdAt?: string;
    locationNumber?: string;
    merchantId?: string;
    timezone?: string;
    id?: string;
    defaultPhone?: string
}
export interface CurrencyDetails {
    value?: number;
    commonModel?: string;
    id?: string;
    currency?: Currency
}
export interface UsageLimitExpirations {
    commonModel?: string;
    limit?: number;
    expirationDate?: string
}
export interface Webhooks {
    events?: string[];
    objects?: string[];
    format?: Format;
    address?: string;
    updatedAt?: string;
    commonModel?: string;
    createdAt?: string;
    isDeleted?: boolean;
    id?: string;
    modifyToken?: string
}
export interface PrerequisiteRanges {
    greaterThanOrEqualTo?: number;
    lessThanOrEqualTo?: number;
    commonModel?: string;
    type?: PrerequisiteRangeType
}
export interface PriceRules {
    commonModel?: string;
    title?: string;
    priority?: number;
    usageLimit?: number;
    prerequisiteRanges?: PrerequisiteRanges;
    currency?: string;
    startDate?: string;
    endDate?: string;
    customerSelection?: CustomerSelection;
    entitledProductIds?: string[];
    description?: string;
    prerequisiteVariantIds?: string[];
    modifyToken?: string;
    excludedProductIds?: string[];
    prerequisiteCollectionIds?: string[];
    entitledCollectionIds?: string[];
    targetSelection?: TargetSelection;
    targetType?: TargetType;
    allocationMethod?: AllocationMethod;
    updatedAt?: string;
    excludedVariantIds?: string[];
    prerequisiteQuantity?: number;
    entitledVariantIds?: string[];
    value?: number;
    entitledCountryIds?: string[];
    id?: string;
    valueType?: DiscountType;
    createdAt?: string;
    allocationLimit?: number;
    prerequisiteCustomerIds?: string[];
    entitledQuantity?: number;
    active?: boolean;
    deleted?: boolean;
    oncePerCustomer?: boolean;
    excludedCollectionIds?: string[];
    prerequisiteSavedSearchIds?: string[];
    prerequisiteProductIds?: string[]
}
export interface Discounts {
    usageLimitExpirations?: UsageLimitExpirations;
    description?: string;
    minimumQuantityOfItems?: number;
    channelAvailability?: ChannelAvailability;
    id?: string;
    usageLimitPerCustomer?: number;
    appliesTo?: AppliesTo;
    stackable?: boolean;
    customerEligibility?: CustomerEligibility;
    updatedAt?: string;
    exclusions?: string[];
    minimumPurchaseAmount?: number;
    startDate?: string;
    value?: number;
    commonModel?: string;
    currency?: string;
    createdAt?: string;
    timesUsed?: number;
    customFields?: CustomAttributes[];
    title?: string;
    usageLimit?: number;
    modifyToken?: string;
    active?: boolean;
    code?: string;
    minimumRequirements?: MinimumRequirements;
    endDate?: string;
    status?: Status;
    deleted?: boolean;
    type?: DiscountType
}
export interface AiUsage {
    promptTokens?: number;
    completionTokens?: number;
    totalTokens?: number;
    commonModel?: string
}
export interface AiMessages {
    content?: AiMessagesContent[];
    commonModel?: string;
    name?: string;
    refusal?: string;
    toolCalls?: ToolCalls[];
    role?: AiRole;
    index?: number;
    finishReason?: string
}
export interface Chats {
    numberOfCompletions?: number;
    topK?: number;
    modifyToken?: string;
    seed?: number;
    messages?: AiMessages[];
    responseFormat?: ResponseFormat;
    tools?: JsonSchema[];
    presencePenalty?: number;
    createdAt?: string;
    logitBias?: unknown;
    model?: string;
    objectType?: string;
    usage?: AiUsage;
    maxTokens?: number;
    temperature?: number;
    enableParallelToolCalls?: boolean;
    stopSequences?: string[];
    id?: string;
    systemFingerprint?: string;
    commonModel?: string;
    userId?: string;
    toolChoice?: AiToolChoice;
    systemMessage?: string;
    frequencyPenalty?: number;
    topP?: number
}
export interface TaxDetails {
    rate?: number;
    currency?: Currency;
    name?: string;
    commonModel?: string;
    region?: string;
    amount?: number;
    jurisdiction?: string;
    category?: string;
    expirationDate?: string;
    taxCode?: string;
    updatedAt?: string;
    country?: string;
    effectiveDate?: string;
    id?: string;
    taxRegistrationNumber?: string;
    details?: string;
    isTaxIncludedInPrice?: boolean;
    active?: boolean;
    deleted?: boolean;
    createdAt?: string
}
export interface Evidence {
    refundPolicyDisclosure?: string;
    uncategorizedFile?: string;
    shippingCarrier?: string;
    customerSignature?: string;
    serviceDate?: string;
    productDescription?: string;
    commonModel?: string;
    cancellationPolicyDisclosure?: string;
    uncategorizedText?: string;
    refundPolicy?: string;
    shippingDate?: string;
    duplicateChargeDocumentation?: string;
    shippingTrackingNumber?: string;
    accessActivityLog?: string;
    shippingAddress?: string;
    refundRefusalExplanation?: string;
    serviceDocumentation?: string;
    billingAddress?: string;
    customerName?: string;
    customerPurchaseIp?: string;
    receipt?: string;
    duplicateChargeId?: string;
    duplicateChargeExplanation?: string;
    cancellationPolicy?: string;
    cancellationRebuttal?: string;
    customerCommunication?: string;
    customerEmailAddress?: string;
    shippingDocumentation?: string
}
export interface Disputes {
    version?: string;
    id?: string;
    evidence?: Evidence;
    created?: string;
    charge?: string;
    amount?: number;
    reason?: string;
    notes?: string;
    active?: boolean;
    transactionId?: string;
    customerId?: string;
    updated?: string;
    chargeRefundable?: boolean;
    commonModel?: string;
    status?: FinancialDisputeStatus;
    currency?: Currency;
    metadata?: Metadata;
    deleted?: boolean
}
export interface Reactions {
    commonModel?: string;
    messageId?: string;
    type?: ReactionType;
    userId?: string;
    chatId?: string;
    createdAt?: string
}
export interface Participants {
    joinedAt?: string;
    commonModel?: string;
    displayName?: string;
    type?: CommunicationRole;
    status?: ParticipantEngagementStatus;
    userId?: string
}
export interface Messages {
    chatId?: string;
    createdAt?: string;
    messageType?: string;
    id?: string;
    senderEmail?: string;
    bcc?: string;
    replyToMessageId?: string;
    deleted?: boolean;
    type?: MessageContentType;
    trackingSettings?: KeyValues[];
    cc?: string;
    senderId?: string;
    metadata?: Metadata[];
    priority?: PriorityLevel;
    updatedAt?: string;
    modifyToken?: string;
    receiverId?: string;
    attachments?: Attachments[];
    historyId?: string;
    content?: string;
    deliveryStatus?: MessageDeliveryStatus;
    reactions?: Reactions[];
    commonModel?: string;
    active?: boolean;
    receiverRoles?: ReceiverRoles[];
    threadId?: string;
    readStatus?: MessageReadStatus;
    subject?: string;
    timestamp?: string;
    reference?: Entity;
    medium?: string;
    recipientEmails?: string[];
    templateId?: string;
    tags?: KeyValues[]
}
export interface Conversations {
    type?: ChatType;
    lastMessage?: Messages;
    status?: ConversationStatus;
    unreadCount?: number;
    messages?: Messages[];
    modifyToken?: string;
    lastReadMessageId?: string;
    commonModel?: string;
    id?: string;
    comments?: Comments[];
    metadata?: string;
    isRead?: boolean;
    participants?: Participants[];
    updatedAt?: string;
    title?: string;
    customFields?: CustomAttributes[];
    createdAt?: string;
    isPinned?: boolean
}
export interface ShareholderEquityDetails {
    commonModel?: string;
    accumulatedOtherComprehensiveIncome?: number;
    commonStock?: number;
    retainedEarnings?: number;
    treasuryStock?: number;
    preferredStock?: number
}
export interface IncomeTaxExpenseDetails {
    commonModel?: string;
    currentIncomeTax?: number;
    deferredIncomeTax?: number;
    taxAllowanceCredit?: number
}
export interface OperatingExpensesDetails {
    salesGeneralAndAdministrativeExpenses?: number;
    commonModel?: string;
    otherOperatingExpenses?: number;
    researchAndDevelopmentExpenses?: number
}
export interface RevenueDetails {
    salesRevenue?: number;
    serviceRevenue?: number;
    otherRevenue?: number;
    commonModel?: string
}
export interface ShippingItem {
    productName?: string;
    sku?: string;
    dimensions?: Dimensions;
    id?: string;
    weight?: number;
    productId?: string;
    commonModel?: string;
    weightUnit?: string;
    value?: number;
    quantity?: number
}
export interface BillingDetails {
    createdAt?: string;
    email?: string;
    active?: boolean;
    additionalAttributes?: CustomAttributes[];
    address?: Addresses;
    customerId?: string;
    phoneNumber?: string;
    isDeleted?: boolean;
    note?: string;
    vatId?: string;
    language?: string;
    fullName?: string;
    currency?: Currency;
    updatedAt?: string;
    paymentTerms?: PaymentTerm;
    commonModel?: string;
    id?: string;
    defaultPaymentMethod?: PaymentMethods;
    companyName?: string
}
export interface PaymentTerms {
    minimumPayment?: number;
    currencyFormatting?: string;
    lastUpdatedDate?: string;
    createdAt?: string;
    commonModel?: string;
    interestRate?: number;
    createdDate?: string;
    gracePeriodDays?: number;
    discountRate?: number;
    discountDays?: number;
    notes?: string;
    description?: string;
    penaltyRate?: number;
    countrySpecificTerms?: string[];
    type?: PaymentTerm;
    updatedAt?: string;
    id?: string;
    allowedMethods?: string[];
    languageSupport?: string[];
    isDeleted?: boolean;
    isActive?: boolean;
    dueDays?: number;
    currencyCode?: string;
    permittedClientClasses?: string[]
}
export interface InvoiceAdjustments {
    updatedAt?: string;
    active?: boolean;
    amount?: number;
    deleted?: boolean;
    type?: InvoiceAdjustmentType;
    id?: string;
    appliedToInvoiceItemId?: string;
    metadata?: Metadata;
    commonModel?: string;
    description?: string;
    createdAt?: string;
    currency?: Currency
}
export interface TaxRates {
    modifyToken?: string;
    percentage?: number;
    compound?: boolean;
    commonModel?: string;
    displayRate?: string;
    createdAt?: string;
    name?: string;
    region?: string;
    currency?: Currency;
    taxProvider?: string;
    taxType?: string;
    active?: boolean;
    shippingIncluded?: boolean;
    deleted?: boolean;
    taxNumber?: string;
    id?: string;
    taxComponents?: TaxLines[];
    country?: string;
    customFields?: CustomAttributes[];
    description?: string;
    updatedAt?: string;
    reportTaxType?: string;
    applicableItems?: string[]
}
export interface CreditNoteLines {
    account?: string;
    product?: Products;
    quantity?: number;
    commonModel?: string;
    customFields?: CustomAttributes[];
    id?: string;
    description?: string;
    taxRate?: number;
    unitPrice?: number;
    total?: number
}
export interface CreditNotes {
    createdAt?: string;
    active?: boolean;
    dueDate?: string;
    id?: string;
    billingAddress?: Addresses;
    creditType?: CreditType;
    vatName?: string;
    shippingAddress?: Addresses;
    vatNumber?: string;
    customer?: Customers;
    modifyToken?: string;
    updatedAt?: string;
    discounts?: number[];
    taxAmount?: number;
    status?: CreditNoteStatus;
    adjustment?: number;
    deleted?: boolean;
    metadata?: Metadata;
    issuedDate?: string;
    payments?: Payments[];
    lines?: CreditNoteLines[];
    taxRate?: number;
    commonModel?: string;
    reason?: string;
    companyId?: string;
    attachments?: Attachments[];
    description?: string;
    amount?: number;
    companyName?: string;
    number?: string;
    currency?: Currency;
    memo?: string
}
export interface ExpenseCategories {
    description?: string;
    id?: string;
    name?: string;
    commonModel?: string
}
export interface Expenses {
    commonModel?: string;
    merchant?: string;
    tags?: string[];
    description?: string;
    dateIncurred?: string;
    lineItems?: Items[];
    deleted?: boolean;
    updatedAt?: string;
    paymentMethod?: PaymentMethods;
    receiptUrls?: string[];
    active?: boolean;
    status?: ExpenseApprovalStatus;
    reportId?: string;
    location?: Addresses;
    tax?: Taxes[];
    transactionId?: string;
    createdByUserId?: string;
    accountId?: string;
    attachments?: Attachments[];
    createdAt?: string;
    id?: string;
    note?: string;
    approvedByUserId?: string;
    amount?: number;
    currencyCode?: string;
    modifyToken?: string;
    category?: ExpenseCategories;
    customFields?: CustomAttributes[]
}
export interface Transactions {
    foreignCurrency?: CurrencyDetails;
    deleted?: boolean;
    orderId?: string;
    amount?: number;
    description?: string;
    transactionCategory?: TransactionType;
    shipping?: ShippingDetails;
    dispute?: Disputes;
    date?: string;
    refund?: Refunds;
    updatedAt?: string;
    commonModel?: string;
    recipient?: Customers;
    taxExempt?: boolean;
    taxAmount?: number;
    accountCode?: string;
    checkNumber?: string;
    exchangeRate?: number;
    id?: string;
    paymentMethod?: PaymentMethods;
    accountId?: string;
    createdAt?: string;
    modifyToken?: string;
    status?: FinancialTransactionStatus;
    invoiceId?: string;
    attachments?: Attachments[];
    tags?: string[];
    type?: FinancialTransactionType;
    sender?: Customers;
    items?: Items[];
    transactionMethod?: TransactionMethod;
    paymentIntent?: string;
    currency?: Currency;
    metadata?: Metadata;
    accountName?: string;
    contact?: Contacts;
    billingDetails?: BillingDetails;
    applicationFee?: number
}
export interface PurchaseOrderLineItems {
    unitOfMeasure?: string;
    totalPrice?: number;
    discount?: number;
    productId?: string;
    quantity?: number;
    id?: string;
    deliveryDate?: string;
    SKU?: string;
    description?: string;
    unitPrice?: number;
    commonModel?: string
}
export interface Accounts {
    accountNumber?: string;
    title?: string;
    accountCode?: string;
    accountType?: AccountType;
    overdraftProtection?: boolean;
    branch?: string;
    active?: boolean;
    description?: string;
    taxType?: string;
    showInExpenses?: boolean;
    owner?: Customers;
    notes?: string;
    balance?: number;
    deleted?: boolean;
    allowPayments?: boolean;
    modifyToken?: string;
    status?: FinancialAccountStatus;
    name?: string;
    overdraftLimit?: number;
    createdAt?: string;
    commonModel?: string;
    id?: string;
    closedAt?: string;
    currency?: Currency;
    transactions?: Transactions[];
    interestRate?: number;
    updatedAt?: string
}
export interface PurchaseOrders {
    createdAt?: string;
    deleted?: boolean;
    lineItems?: PurchaseOrderLineItems[];
    id?: string;
    expectedDeliveryDate?: string;
    shippingCosts?: number;
    active?: boolean;
    commonModel?: string;
    shipTo?: Addresses;
    currency?: Currency;
    paymentTerms?: string;
    attachments?: Attachments[];
    subtotal?: number;
    updatedAt?: string;
    modifyToken?: string;
    notes?: string;
    accountId?: string;
    total?: number;
    status?: OrderStatus;
    vendor?: Vendors;
    orderDate?: string;
    orderNumber?: string;
    billTo?: Addresses;
    taxes?: number
}
export interface AdditionalCharges {
    createdAt?: string;
    amount?: number;
    description?: string;
    type?: FinancialChargeType;
    commonModel?: string;
    updatedAt?: string;
    id?: string
}
export interface Refunds {
    currency?: Currency;
    createdAt?: string;
    modifyToken?: string;
    amount?: number;
    commonModel?: string;
    id?: string;
    status?: TransactionStatus;
    paymentId?: string;
    reason?: string;
    updatedAt?: string
}
export interface Payments {
    refund?: Refunds;
    cardDetails?: CardDetails;
    updatedAt?: string;
    transactionId?: string;
    createdAt?: string;
    status?: PaymentStatus;
    commonModel?: string;
    billingDetails?: BillingDetails;
    id?: string;
    orderId?: string;
    paymentMethod?: PaymentMethods;
    receiptEmail?: string;
    webhookUrl?: string;
    paymentCaptureMethod?: string;
    description?: string;
    date?: string;
    amount?: number;
    currency?: Currency;
    deleted?: boolean;
    paymentIntent?: string;
    customer?: Customers;
    modifyToken?: string;
    shippingDetails?: ShippingDetails;
    paymentProcessor?: string;
    journalId?: string;
    active?: boolean;
    invoice?: Invoices;
    tip?: number;
    notes?: string;
    metadata?: Metadata
}
export interface Bills {
    id?: string;
    lineItems?: Items[];
    dueDate?: string;
    active?: boolean;
    terms?: string;
    invoiceNumber?: string;
    notes?: string;
    issueDate?: string;
    customFields?: CustomAttributes[];
    commonModel?: string;
    vendor?: Vendors;
    updatedAt?: string;
    currencyCode?: string;
    status?: BillingStatus;
    amountPaid?: number;
    createdAt?: string;
    modifyToken?: string;
    attachments?: Attachments[];
    amountDue?: number;
    deleted?: boolean;
    amountRemaining?: number;
    customer?: Customers
}
export interface Vendors {
    commonModel?: string;
    overdueBalance?: number;
    companyName?: string;
    deleted?: boolean;
    outstandingBalance?: number;
    id?: string;
    address?: Addresses;
    note?: string;
    modifyToken?: string;
    updatedAt?: string;
    accountNumber?: string;
    currencyCode?: string;
    website?: string;
    tax?: Taxes[];
    contactEmail?: string;
    customFields?: CustomAttributes[];
    contactName?: string;
    contactPhone?: string;
    active?: boolean;
    is1099?: boolean;
    createdAt?: string
}
export interface AuditInformation {
    notes?: string;
    auditOpinion?: AuditOpinionType;
    auditorName?: string;
    auditDate?: string;
    commonModel?: string
}
export interface BalanceSheets {
    treasuryStock?: number;
    minorityInterest?: number;
    id?: string;
    currentLiabilities?: number;
    longTermDebt?: number;
    notesPayable?: number;
    taxLiabilities?: number;
    retainedEarnings?: number;
    accountsReceivable?: number;
    otherCurrentAssets?: number;
    updatedAt?: string;
    active?: boolean;
    shortTermInvestments?: number;
    intangibleAssets?: number;
    accountSummary?: KeyValues[];
    cashAndCashEquivalents?: number;
    balanceDate?: string;
    preferredStock?: number;
    nonCurrentLiabilities?: number;
    currency?: Currency;
    accruedLiabilities?: number;
    prepaidExpenses?: number;
    shortTermDebt?: number;
    otherNonCurrentLiabilities?: number;
    totalLiabilitiesAndEquity?: number;
    deferredRevenue?: number;
    createdAt?: string;
    equity?: number;
    otherCurrentLiabilities?: number;
    commonStock?: number;
    nonCurrentAssets?: number;
    commonModel?: string;
    fixedAssets?: number;
    propertyPlantEquipment?: number;
    accumulatedDepreciation?: number;
    inventory?: number;
    stockholdersEquity?: number;
    currentAssets?: number;
    currentPortionOfLongTermDebt?: number;
    totalLiabilities?: number;
    notes?: string;
    auditInfo?: AuditInformation;
    deleted?: boolean;
    modifyToken?: string;
    customFields?: CustomAttributes[];
    otherNonCurrentAssets?: number;
    additionalPaidInCapital?: number;
    totalAssets?: number;
    accountsPayable?: number
}
export interface IncomeStatements {
    operatingExpenses?: OperatingExpensesDetails;
    accountSummary?: KeyValues[];
    netIncome?: number;
    createdAt?: string;
    id?: string;
    interestExpense?: number;
    shareholderEquity?: ShareholderEquityDetails;
    grossProfit?: number;
    operatingIncome?: number;
    depreciationAndAmortization?: number;
    incomeTaxExpense?: IncomeTaxExpenseDetails;
    updatedAt?: string;
    currency?: Currency;
    commonModel?: string;
    revenue?: RevenueDetails;
    period?: string;
    costOfGoodsSold?: number;
    ebitda?: number;
    modifyToken?: string;
    exchangeRate?: number;
    incomeBeforeTax?: number;
    profitMargins?: number
}
export interface Invoices {
    dueDate?: string;
    exchangeRate?: number;
    currency?: Currency;
    balanceDue?: number;
    vatNumber?: string;
    invoiceNumber?: string;
    paymentTerms?: PaymentTerms;
    modifyToken?: string;
    invoicePayments?: InvoicePayments[];
    discountPercentage?: number;
    active?: boolean;
    notes?: string;
    taxTotal?: number;
    status?: PaymentStatus;
    footer?: string;
    reference?: Entity;
    metadata?: Metadata[];
    createdAt?: string;
    paidAmount?: number;
    updatedAt?: string;
    discountTotal?: number;
    terms?: string;
    subtotal?: number;
    vatName?: string;
    customer?: Customers;
    billingAddress?: Addresses;
    commonModel?: string;
    transactionDate?: string;
    items?: InvoiceItems[];
    attachments?: Attachments[];
    adjustments?: InvoiceAdjustments[];
    shippingAddress?: Addresses;
    deleted?: boolean;
    id?: string;
    total?: number;
    issuedDate?: string;
    header?: string
}
export interface JournalEntries {
    commonModel?: string;
    id?: string;
    reference?: string;
    name?: string;
    date?: string;
    description?: string;
    status?: JournalEntryStatus;
    attachments?: Attachments[];
    currency?: Currency;
    totalAmount?: number;
    type?: string;
    memo?: string;
    isReconciled?: boolean;
    lineItems?: JournalEntryLines[];
    createdAt?: string;
    updatedAt?: string;
    active?: boolean;
    entryNumber?: string;
    modifyToken?: string;
    updatedBy?: string;
    deleted?: boolean;
    createdBy?: string;
    exchangeRate?: number
}
export interface JournalEntryLines {
    credit?: number;
    tracking?: FinancialTrackingCategories;
    id?: string;
    description?: string;
    commonModel?: string;
    accountId?: string;
    quantity?: number;
    taxCode?: string;
    debit?: number;
    taxAmount?: number;
    amount?: number
}
export interface InvoiceItems {
    dimensions?: Dimensions;
    createdAt?: string;
    tags?: string[];
    options?: ProductOptions[];
    discount?: number;
    inventoryStatus?: ProductAvailabilityStatus;
    brand?: string;
    mpn?: string;
    id?: string;
    variants?: Variants[];
    isbn?: string;
    weight?: number;
    name?: string;
    availabilityDate?: string;
    condition?: ItemCondition;
    isAvailable?: boolean;
    commonModel?: string;
    onSale?: boolean;
    rating?: number;
    active?: boolean;
    deletedAt?: string;
    modifyToken?: string;
    gallery?: Images[];
    inventoryQuantity?: number;
    customFields?: CustomAttributes[];
    updatedAt?: string;
    ean?: string;
    quantity?: number;
    upc?: string;
    currency?: Currency;
    price?: number;
    reviews?: RatingsReviews[];
    description?: string;
    imageUrl?: string;
    ratingCount?: number;
    sku?: string
}
export interface Tickets {
    status?: IssueLifecycleStatus;
    commonModel?: string;
    title?: string;
    reporter?: Contacts;
    dueDate?: string;
    attachments?: Attachments[];
    createdAt?: string;
    category?: Categories;
    description?: string;
    assignee?: Users;
    companyId?: string;
    admin?: Users;
    priority?: SupportTicketPriority;
    notes?: Notes[];
    modifyToken?: string;
    tags?: string[];
    comments?: Comments[];
    customFields?: CustomAttributes[];
    typeId?: string;
    type?: SupportQueryType;
    id?: string;
    updatedAt?: string
}
export interface WorkExperiences {
    description?: string;
    commonModel?: string;
    position?: string;
    endDate?: string;
    startDate?: string;
    company?: string
}
export interface Educations {
    fieldOfStudy?: string;
    gpa?: number;
    institution?: string;
    startDate?: string;
    degree?: string;
    endDate?: string;
    commonModel?: string
}
export interface References {
    company?: string;
    name?: string;
    relationship?: string;
    position?: string;
    commonModel?: string;
    email?: string;
    phoneNumber?: string
}
export interface Candidates {
    phoneNumber?: string;
    certifications?: string[];
    skills?: string[];
    educations?: Educations[];
    availability?: string;
    modifyToken?: string;
    lastName?: string;
    updatedAt?: string;
    firstName?: string;
    coverLetter?: Attachments;
    profilePicture?: Images;
    resume?: Attachments;
    workExperiences?: WorkExperiences[];
    notes?: Notes[];
    email?: string;
    references?: References[];
    role?: string;
    languages?: string[];
    jobId?: string;
    customFields?: CustomAttributes[];
    socialProfiles?: SocialProfiles[];
    id?: string;
    websites?: string[];
    status?: EmploymentAndCandidateStatus;
    commonModel?: string;
    preferredWorkLocation?: string;
    createdAt?: string
}
export interface Contacts {
    defaultEmail?: string;
    birthday?: string;
    roles?: Roles[];
    address?: Addresses;
    lastName?: string;
    addresses?: Addresses[];
    phones?: Phones[];
    customFields?: CustomAttributes[];
    updatedAt?: string;
    leadId?: string;
    notes?: Notes;
    commonModel?: string;
    createdAt?: string;
    tags?: string[];
    defaultPhone?: string;
    websites?: string[];
    company?: string;
    id?: string;
    isActive?: boolean;
    modifyToken?: string;
    socialProfiles?: SocialProfiles[];
    code?: string;
    emails?: Emails[];
    relationship?: string;
    note?: string;
    firstName?: string
}
export interface Jobs {
    createdAt?: string;
    jobBenefits?: string;
    occupationalCategory?: string;
    incentives?: string;
    benefits?: string[];
    title?: string;
    baseSalary?: Salaries;
    employmentType?: EmploymentType;
    jobShifts?: string[];
    applicationDeadline?: string;
    location?: Addresses;
    experienceRequirements?: string;
    jobLocationType?: string;
    jobImmediateStart?: boolean;
    id?: string;
    jobStartDate?: string;
    company?: Companies;
    jobFlexibleHours?: boolean;
    employmentUnit?: EmploymentUnits;
    jobTrialPeriod?: string;
    educationRequirements?: string;
    commonModel?: string;
    salaryCurrency?: string;
    responsibilities?: string;
    updatedAt?: string;
    incentiveCompensation?: string;
    modifyToken?: string;
    qualifications?: string;
    description?: string;
    workFromHome?: boolean;
    remote?: boolean;
    languagesSpoken?: string[];
    validUntil?: string;
    skills?: string[];
    industry?: string;
    jobTrainingProvided?: boolean;
    workHours?: string
}
export interface Salaries {
    paymentPeriod?: TimeCycle;
    commonModel?: string;
    currency?: Currency;
    value?: number
}
export interface HiringOrganizations {
    locations?: Addresses[];
    industry?: string;
    description?: string;
    commonModel?: string;
    name?: string;
    size?: string
}
export interface EmploymentUnits {
    description?: string;
    commonModel?: string;
    name?: string
}
export interface TimeSession {
    closeTime?: string;
    commonModel?: string;
    openTime?: string
}
export interface UserOrGroup {
    displayName?: string;
    identifier?: string;
    commonModel?: string;
    type?: ParticipantType
}
export interface Permissions {
    identifierType?: UniversalIdentifierType;
    commonModel?: string;
    accessControlType?: AccessControlModel;
    roles?: string[];
    canDelete?: string[];
    canView?: string[];
    canEdit?: string[];
    assigneeDetails?: UserOrGroup
}
export interface Phones {
    commonModel?: string;
    country?: string;
    countryCode?: string;
    phone?: string;
    type?: DeviceUsageType
}
export interface Emails {
    type?: EmailCategoryType;
    commonModel?: string;
    email?: string
}
export interface Entity {
    entityId?: string;
    commonModel?: string;
    entityType?: EntityCategory;
    attributes?: string[];
    value?: string
}
export interface Notifications {
    recipient?: Users;
    customFields?: CustomAttributes[];
    message?: string;
    createdAt?: string;
    deleted?: boolean;
    active?: boolean;
    attachments?: Attachments[];
    status?: string;
    priority?: PriorityLevel;
    channel?: string;
    notificationId?: string;
    type?: string;
    commonModel?: string;
    title?: string;
    updatedAt?: string
}
export interface Comments {
    deleted?: boolean;
    parentId?: string;
    flagged?: boolean;
    text?: string;
    commonModel?: string;
    attachments?: Attachments[];
    metadata?: Metadata[];
    author?: Users;
    likes?: number;
    createdAt?: string;
    updatedAt?: string;
    commentId?: string;
    active?: boolean
}
export interface Metadata {
    entityId?: string;
    id?: string;
    key?: string;
    value?: string;
    commonModel?: string;
    type?: DataType;
    valueParsingRequired?: boolean;
    entityType?: string;
    createdAt?: string;
    updatedAt?: string
}
export interface Tasks {
    subTaskIds?: string[];
    relatedToTaskId?: string[];
    repeat?: string;
    attachments?: Attachments[];
    customFields?: CustomAttributes[];
    watchers?: Users[];
    assignee?: Users;
    id?: string;
    completionPercentage?: number;
    dueTimezone?: string;
    dependOnTaskIds?: string[];
    modifyToken?: string;
    parentTaskId?: string;
    notifications?: Notifications[];
    timeLogged?: string;
    labels?: string[];
    comments?: Comments[];
    status?: TaskStatus;
    commonModel?: string;
    title?: string;
    createdBy?: Users;
    timeEstimate?: string;
    description?: string;
    dueDate?: string;
    priority?: PriorityLevel;
    updatedAt?: string;
    createdAt?: string
}
export interface Stores {
    email?: string;
    storeArea?: number;
    manager?: Staff;
    features?: string[];
    createdAt?: string;
    timezone?: string;
    description?: string;
    phone?: string;
    latitude?: number;
    name?: string;
    logoUrl?: string;
    paymentMethods?: string[];
    isOperating?: boolean;
    currency?: Currency;
    ratings?: RatingsReviews;
    id?: string;
    owner?: Users;
    updatedAt?: string;
    address?: Addresses;
    socialProfiles?: SocialProfiles[];
    category?: string;
    websiteUrl?: string;
    language?: string;
    commonModel?: string;
    country?: string;
    relatedStores?: Stores[];
    longitude?: number;
    countryCode?: string;
    businessHours?: BusinessHours[]
}
export interface Staff {
    firstName?: string;
    dateOfBirth?: string;
    role?: OrganizationalRole;
    commonModel?: string;
    active?: boolean;
    id?: string;
    createdAt?: string;
    lastName?: string;
    status?: EmploymentAndCandidateStatus;
    phone?: string;
    storeID?: string;
    addresses?: Addresses;
    gender?: string;
    updatedAt?: string;
    deleted?: boolean;
    position?: string;
    photoUrl?: string;
    email?: string;
    customFields?: CustomAttributes[]
}
export interface RatingsReviews {
    updatedAt?: string;
    metadata?: Metadata;
    deleted?: boolean;
    status?: ReviewApprovalStatus;
    commonModel?: string;
    locale?: string;
    active?: boolean;
    storeID?: string;
    review?: string;
    reviewerName?: string;
    rating?: number;
    id?: string;
    createdAt?: string;
    verifiedPurchase?: boolean
}
export interface ProductOptions {
    values?: string[];
    name?: string;
    createdAt?: string;
    updatedAt?: string;
    id?: string;
    productId?: number;
    commonModel?: string
}
export interface Taxes {
    country?: string;
    customFields?: CustomAttributes[];
    taxable?: boolean;
    commonModel?: string;
    type?: TaxType;
    category?: string;
    amount?: number;
    description?: string;
    currency?: Currency;
    updatedAt?: string;
    createdAt?: string;
    name?: string;
    region?: string;
    deleted?: boolean;
    id?: string;
    code?: string;
    jurisdiction?: string;
    active?: boolean;
    rate?: number
}
export interface InventoryLocations {
    type?: InventoryStorageType;
    isActive?: boolean;
    locationId?: string;
    createdAt?: string;
    updatedAt?: string;
    address?: Addresses;
    commonModel?: string;
    quantity?: number;
    name?: string;
    contactInformation?: Contacts[];
    operationalHours?: string;
    deleted?: boolean
}
export interface Prices {
    type?: string;
    commonModel?: string;
    amount?: number;
    currency?: Currency
}
export interface Variants {
    deleted?: boolean;
    id?: string;
    barcode?: string;
    isDefault?: boolean;
    sku?: string;
    requiresShipping?: boolean;
    dimensions?: Dimensions;
    compareAtPrice?: number;
    weightUnit?: string;
    taxable?: boolean;
    commonModel?: string;
    title?: string;
    productId?: string;
    price?: number;
    modifyToken?: string;
    active?: boolean;
    weight?: number;
    inventoryQuantity?: number;
    updatedAt?: string;
    status?: ItemAvailabilityStatus;
    imageId?: number;
    createdAt?: string
}
export interface Dimensions {
    commonModel?: string;
    width?: number;
    length?: number;
    height?: number
}
export interface Products {
    localizations?: Localizations[];
    commonModel?: string;
    downloadFiles?: Attachments[];
    seoKeywords?: string[];
    accountIds?: KeyValues[];
    manufacturerName?: string;
    availableForSale?: boolean;
    modifyToken?: string;
    weightUnit?: string;
    skuValidation?: SkuValidation;
    images?: Images[];
    metaTitle?: string;
    inventoryQuantity?: number;
    categories?: string[];
    title?: string;
    tags?: string[];
    sku?: string;
    inventoryLocation?: InventoryLocations;
    publishedAt?: string;
    status?: EntityLifecycleStatus;
    description?: string;
    vendor?: string;
    brand?: Brands;
    dimensions?: Dimensions;
    id?: string;
    slug?: string;
    customFields?: CustomAttributes[];
    updatedAt?: string;
    code?: string;
    options?: ProductOptions[];
    variants?: Variants[];
    relatedProducts?: string[];
    isDownloadable?: boolean;
    weight?: number;
    reference?: Entity;
    prices?: Prices[];
    type?: string;
    metaDescription?: string;
    createdAt?: string;
    taxes?: Taxes[]
}
export interface Orders {
    trackingInfo?: string;
    currency?: Currency;
    paymentMethods?: string[];
    status?: OrderStatus;
    tip?: number;
    subTotal?: number;
    storeLocationId?: string;
    total?: number;
    billingAddress?: Addresses;
    customerId?: string;
    shippingId?: string;
    discounts?: Discounts[];
    tags?: string[];
    commonModel?: string;
    createdAt?: string;
    updatedAt?: string;
    shippingCost?: number;
    orderNumber?: string;
    reference?: Entity;
    tax?: number;
    paymentStatus?: PaymentStatus;
    shippingMethod?: string;
    shippingAddress?: Addresses;
    id?: string;
    note?: string;
    items?: Items[];
    modifyToken?: string;
    taxes?: Taxes[]
}
export interface Opportunities {
    closeDate?: string;
    currency?: Currency;
    contacts?: Contacts[];
    id?: string;
    tags?: string[];
    stage?: string;
    commonModel?: string;
    leadId?: string;
    companyId?: string;
    updatedAt?: string;
    probability?: number;
    owner?: Users;
    attachments?: Attachments[];
    description?: string;
    lostReason?: string;
    campaign?: Campaigns;
    modifyToken?: string;
    isClosed?: boolean;
    amount?: number;
    nextStep?: string;
    entity?: Entity;
    leadSource?: string;
    customFields?: CustomAttributes[];
    notes?: string[];
    companyName?: string;
    type?: string;
    isWon?: boolean;
    title?: string;
    createdAt?: string
}
export interface PaymentMethods {
    type?: PaymentMethod;
    details?: string;
    isDefault?: boolean;
    commonModel?: string;
    id?: string
}
export interface SSO {
    deleted?: boolean;
    createdAt?: string;
    tokenType?: string;
    expiresIn?: number;
    commonModel?: string;
    active?: boolean;
    accessToken?: string;
    provider?: IdentityProvider;
    providerUserId?: string;
    refreshToken?: string;
    expiryDate?: string;
    profileUrl?: string;
    scopes?: string[];
    updatedAt?: string
}
export interface Preferences {
    commonModel?: string;
    timeZone?: string;
    language?: string;
    currency?: Currency;
    id?: string;
    communications?: CommunicationMethod
}
export interface Users {
    createdAt?: string;
    modifyToken?: string;
    email?: string;
    gender?: Gender;
    updatedAt?: string;
    isActive?: boolean;
    sso?: SSO[];
    password?: string;
    lastName?: string;
    bio?: string;
    profilePicture?: Images;
    roles?: Roles[];
    paymentMethods?: PaymentMethods;
    dateOfBirth?: string;
    username?: string;
    commonModel?: string;
    id?: string;
    middleName?: string;
    addresses?: Addresses[];
    firstName?: string;
    phoneNumber?: string;
    preferences?: Preferences;
    website?: string;
    lastLogin?: string;
    socialProfiles?: SocialProfiles[];
    status?: UserStatus;
    coverPhoto?: Images
}
export interface Categories {
    tags?: string[];
    commonModel?: string;
    image?: string;
    name?: string;
    updatedAt?: string;
    createdAt?: string;
    id?: string;
    modifyToken?: string;
    parentId?: string
}
export interface Notes {
    createdAt?: string;
    priority?: PriorityLevel;
    author?: Users;
    modifyToken?: string;
    id?: string;
    content?: string;
    url?: string;
    updatedAt?: string;
    reminder?: string;
    attachments?: Attachments[];
    visibility?: ContentVisibility;
    color?: string;
    lastAccessed?: string;
    title?: string;
    metadata?: string[];
    tags?: string[];
    commonModel?: string;
    sharedWith?: Users[]
}
export interface LeadSource {
    commonModel?: string;
    sourceId?: string;
    details?: string;
    sourceName?: string
}
export interface TransactionDetails {
    transactionId?: string;
    commonModel?: string;
    status?: string;
    amount?: number
}
export interface Leads {
    leadStatus?: LeadLifecycleStatus;
    lastName?: string;
    companyId?: string;
    leadSource?: LeadSource;
    updatedAt?: string;
    notes?: Notes[];
    phones?: Phones[];
    middleName?: string;
    name?: string;
    modifyToken?: string;
    entity?: Entity;
    numberOfEmployees?: number;
    industry?: string;
    defaultPhone?: string;
    preferredContactMethod?: CommunicationMethod;
    firstName?: string;
    id?: string;
    website?: string;
    jobTitle?: string;
    commonModel?: string;
    emails?: Emails[];
    annualRevenue?: number;
    addresses?: Addresses[];
    createdAt?: string;
    customFields?: CustomAttributes[];
    socialProfiles?: SocialProfiles[];
    defaultEmail?: string;
    companyName?: string;
    opportunities?: Opportunities[]
}
export interface FulfillmentReceipts {
    paymentMethod?: PaymentMethod;
    updatedAt?: string;
    authorization?: string;
    currency?: Currency;
    status?: OrderStatus;
    deleted?: boolean;
    transactionDetails?: TransactionDetails;
    createdAt?: string;
    commonModel?: string;
    customerInfo?: Customers;
    testCase?: boolean;
    amount?: number;
    active?: boolean;
    fulfillmentId?: string;
    id?: string
}
export interface FulfillmentItems {
    imageUrl?: string;
    updatedAt?: string;
    fulfillmentId?: string;
    sku?: string;
    orderId?: string;
    price?: number;
    weight?: number;
    weightUnit?: string;
    taxable?: boolean;
    customAttributes?: CustomAttributes;
    status?: OrderStatus;
    deleted?: boolean;
    title?: string;
    commonModel?: string;
    variantId?: string;
    productId?: string;
    quantity?: number;
    variantTitle?: string;
    requiresShipping?: boolean;
    dimensions?: Dimensions;
    createdAt?: string;
    id?: string;
    description?: string;
    active?: boolean
}
export interface Fulfillments {
    trackingNumber?: string;
    expectedDelivery?: string;
    currency?: Currency;
    id?: string;
    address?: Addresses;
    items?: FulfillmentItems[];
    totalPrice?: number;
    updatedAt?: string;
    commonModel?: string;
    carrier?: string;
    lineItems?: Items[];
    createdAt?: string;
    orderId?: string;
    service?: string;
    metadata?: Metadata;
    notes?: string;
    shipmentDate?: string;
    status?: FulfillmentStatus;
    trackingUrls?: string[];
    receipt?: FulfillmentReceipts
}
export interface CustomAttributes {
    fieldName?: string;
    fieldValue?: string;
    fieldType?: DataType;
    commonModel?: string;
    id?: string
}
export interface Companies {
    stockSymbol?: string;
    taxId?: string;
    commonModel?: string;
    defaultPhone?: string;
    description?: string;
    website?: string;
    modifyToken?: string;
    regulatoryStatus?: string;
    createdAt?: string;
    industry?: string;
    updatedAt?: string;
    foundedDate?: string;
    logo?: string;
    reference?: Entity;
    emails?: Emails[];
    parentCompanyId?: string;
    incorporationDate?: string;
    revenue?: number;
    additionalContacts?: Contacts[];
    legalName?: string;
    type?: string;
    domain?: string;
    id?: string;
    dunsNumber?: string;
    defaultEmail?: string;
    numberOfEmployees?: number;
    name?: string;
    address?: Addresses;
    socialProfiles?: SocialProfiles[];
    incorporationCountry?: string;
    customFields?: CustomAttributes[];
    companyNumber?: string;
    phones?: Phones[];
    revenueCurrency?: string;
    tags?: string[]
}
export interface Localizations {
    title?: string;
    description?: string;
    metaTitle?: string;
    commonModel?: string;
    locale?: string;
    metaDescription?: string
}
export interface KeyValues {
    value?: string;
    commonModel?: string;
    key?: string
}
export interface SocialProfiles {
    createdAt?: string;
    displayName?: string;
    additionalInfo?: Metadata;
    url?: string;
    avatarUrl?: string;
    commonModel?: string;
    username?: string;
    active?: boolean;
    email?: string;
    type?: SocialPlatform;
    updatedAt?: string;
    deleted?: boolean
}
export interface Customers {
    preferredContactMethod?: CommunicationMethod;
    middleName?: string;
    updatedAt?: string;
    socialProfiles?: SocialProfiles[];
    companyId?: string;
    defaultAddress?: Addresses;
    reference?: Entity;
    customerType?: CustomerType;
    loyaltyProgramMembership?: string;
    tags?: string[];
    jobTitle?: string;
    phones?: Phones[];
    modifyToken?: string;
    currency?: Currency;
    customFields?: CustomAttributes[];
    firstName?: string;
    fullName?: string;
    lastName?: string;
    notes?: string;
    status?: CustomerStatus;
    id?: string;
    company?: string;
    createdAt?: string;
    email?: string;
    dateOfBirth?: string;
    commonModel?: string;
    addresses?: Addresses[];
    phoneNumber?: string;
    metadata?: string;
    emails?: Emails[];
    source?: string;
    customerNumber?: string;
    title?: string;
    customerSegment?: string
}
export interface TaxLines {
    deleted?: boolean;
    isCompound?: boolean;
    isInclusive?: boolean;
    isNonRecoverable?: boolean;
    updatedAt?: string;
    rate?: number;
    commonModel?: string;
    name?: string;
    taxCode?: string;
    metadata?: Metadata;
    active?: boolean;
    id?: string;
    title?: string;
    createdAt?: string;
    price?: number
}
export interface Images {
    active?: boolean;
    altText?: string;
    width?: number;
    mimeType?: ImageMimeType;
    title?: string;
    commonModel?: string;
    thumbnailSrc?: string;
    deleted?: boolean;
    createdAt?: string;
    id?: string;
    updatedAt?: string;
    src?: string;
    tags?: string[];
    data?: string;
    height?: number;
    caption?: string;
    type?: ImageType
}
export interface GiftCards {
    cardNumber?: string;
    associatedUser?: Users;
    balance?: number;
    active?: boolean;
    commonModel?: string;
    expirationDate?: string;
    createdAt?: string;
    currency?: Currency;
    status?: LifecycleStatus;
    amountUsed?: number;
    issuedBy?: string;
    deleted?: boolean;
    updatedAt?: string;
    purchasedBy?: string;
    metadata?: string;
    id?: string
}
export interface Promotions {
    eligibleItems?: string[];
    limitPerCustomer?: number;
    commonModel?: string;
    usageLimit?: number;
    code?: string;
    customerEligibility?: CustomerEligibilityStatus;
    minimumPurchaseAmount?: number;
    termsAndConditions?: string;
    currency?: Currency;
    type?: PromotionType;
    endDate?: string;
    description?: string;
    updatedAt?: string;
    deleted?: boolean;
    active?: boolean;
    createdAt?: string;
    discountType?: DiscountType;
    discountValue?: number;
    startDate?: string
}
export interface PaymentDetails {
    currency?: Currency;
    updatedAt?: string;
    commonModel?: string;
    active?: boolean;
    refunded?: boolean;
    deleted?: boolean;
    paymentGateway?: string;
    status?: string;
    amount?: number;
    billingAddress?: Addresses;
    createdAt?: string;
    method?: string;
    transactionId?: string
}
export interface ShippingDetails {
    trackingNumber?: string;
    address?: Addresses;
    createdAt?: string;
    updatedAt?: string;
    price?: number;
    signatureRequired?: boolean;
    active?: boolean;
    insurance?: boolean;
    deleted?: boolean;
    estimatedDelivery?: string;
    method?: string;
    provider?: string;
    commonModel?: string
}
export interface PerformanceMetrics {
    conversionRate?: number;
    commonModel?: string;
    clicks?: number;
    impressions?: number;
    spend?: number;
    costPerConversion?: number;
    costPerClick?: number;
    returnOnInvestment?: number;
    conversions?: number
}
export interface Carts {
    updatedAt?: string;
    totalPrice?: number;
    token?: string;
    note?: string;
    attributes?: string[];
    items?: Items[];
    promotions?: Promotions[];
    messages?: string[];
    discountCodes?: string[];
    commonModel?: string;
    itemCount?: number;
    buyerIdentity?: Customers;
    totalWeight?: number;
    state?: OrderStatus;
    originalTotalPrice?: number;
    giftCards?: GiftCards[];
    id?: string;
    shippingDetails?: ShippingDetails;
    currency?: Currency;
    createdAt?: string;
    paymentDetails?: PaymentDetails;
    version?: string
}
export interface Items {
    accountName?: string;
    modifiers?: Modifiers[];
    title?: string;
    discountLines?: Discounts[];
    updatedAt?: string;
    weightUnit?: string;
    requiresShipping?: boolean;
    weight?: number;
    commonModel?: string;
    image?: Images;
    variantId?: string;
    variantTitle?: string;
    createdAt?: string;
    discount?: number;
    fulfillableQuantity?: number;
    linePrice?: number;
    shippingId?: string;
    originalPrice?: number;
    price?: number;
    discountedPrice?: number;
    taxLines?: TaxLines[];
    taxable?: boolean;
    tax?: number;
    description?: string;
    parentId?: string;
    accountId?: string;
    quantity?: number;
    sku?: string;
    deleted?: boolean;
    currency?: Currency;
    active?: boolean;
    productId?: string;
    id?: string
}
export interface Campaigns {
    active?: boolean;
    budget?: number;
    createdAt?: string;
    id?: string;
    type?: CampaignType;
    endDate?: string;
    startDate?: string;
    targetAudience?: string;
    deleted?: boolean;
    status?: CampaignStatus;
    tags?: string[];
    commonModel?: string;
    performanceMetrics?: PerformanceMetrics;
    channels?: string[];
    name?: string;
    updatedAt?: string;
    creativeAssets?: Attachments
}
export interface Attachments {
    fileSize?: number;
    permissions?: Permissions;
    updatedAt?: string;
    id?: string;
    fileType?: string;
    url?: string;
    associatedWith?: Entity;
    thumbnailUrl?: string;
    content?: string;
    commonModel?: string;
    previewUrl?: string;
    fileName?: string;
    createdAt?: string;
    metadata?: Metadata
}
export interface BusinessHours {
    sessions?: TimeSession[];
    timeZone?: string;
    active?: boolean;
    id?: string;
    dayOfWeek?: DayOfWeek;
    updatedAt?: string;
    deleted?: boolean;
    commonModel?: string;
    createdAt?: string;
    storeID?: string;
    closed?: boolean
}
export interface Brands {
    established?: string;
    commonModel?: string;
    createdAt?: string;
    updatedAt?: string;
    website?: string;
    id?: string;
    name?: string;
    logo?: string;
    description?: string;
    status?: ItemEntityStatus;
    customFields?: CustomAttributes[];
    country?: string
}
export interface GeoCoordinates {
    altitude?: number;
    latitude?: number;
    longitude?: number;
    commonModel?: string;
    heading?: number;
    timestamp?: string;
    altitudeAccuracy?: number;
    accuracy?: number;
    speed?: number
}
export interface Addresses {
    city?: string;
    firstName?: string;
    phone?: string;
    street?: string;
    id?: string;
    middleName?: string;
    lastName?: string;
    companyName?: string;
    province?: string;
    contactId?: string;
    name?: string;
    subdivisionCode?: string;
    customFields?: CustomAttributes[];
    postalCode?: string;
    postalCodeExtension?: string;
    accountId?: string;
    email?: string;
    region?: string;
    country?: string;
    countryCode?: string;
    commonModel?: string;
    type?: ContactAddressType;
    geoLocation?: GeoCoordinates;
    addressLine2?: string
}
export interface CRMAccounts {
    annualRevenue?: number;
    name?: string;
    commonModel?: string;
    phone?: string;
    website?: string;
    shippingAddress?: Addresses;
    email?: string;
    numberOfEmployees?: number;
    createdAt?: string;
    status?: AccountStatus;
    customFields?: CustomAttributes[];
    tags?: string[];
    ownerId?: string;
    id?: string;
    industry?: string;
    billingAddress?: Addresses;
    accountType?: StakeholderType;
    rating?: AccountEngagementLevel;
    updatedAt?: string
}
export const enum Format { Xml = 'xml', Json = 'json' }
export const enum CustomerEligibility { All = 'all', SpecificCustomers = 'specific-customers', SpecificCustomerGroups = 'specific-customer-groups' }
export const enum AllocationMethod { Across = 'across', Each = 'each' }
export const enum ReceiverRoles { Admin = 'admin', User = 'user', Moderator = 'moderator' }
export const enum Roles { User = 'user', Admin = 'admin', Moderator = 'moderator' }
export const enum AccountType { LiabilityGovernmentAndOtherPublicAuthorities = 'liability::government-and-other-public-authorities', OtherCurrentLiabilityCurrentTaxLiability = 'other-current-liability::current-tax-liability', RevenueCashReceiptIncome = 'revenue::cash-receipt-income', AssetFixedAssetPhotoVideo = 'asset::fixed-asset-photo-video', RevenueIncome = 'revenue::income', OtherIncomeGainLossOnSaleOfFixedAssets = 'other-income::gain-loss-on-sale-of-fixed-assets', OtherIncomeOtherOperatingIncome = 'other-income::other-operating-income', EquityEstimatedTaxes = 'equity::estimated-taxes', AssetGlobalTaxDeferred = 'asset::global-tax-deferred', EquityOtherFreeReserves = 'equity::other-free-reserves', AssetVehicles = 'asset::vehicles', ExpenseOtherRentalCosts = 'expense::other-rental-costs', ExpenseLossOnDiscontinuedOperationsNetOfTax = 'expense::loss-on-discontinued-operations-net-of-tax', LiabilityProvisionForLiabilities = 'liability::provision-for-liabilities', ExpensePurchasesRebates = 'expense::purchases-rebates', OtherExpenseIncomeTaxOtherExpense = 'other-expense::income-tax-other-expense', AssetLicenses = 'asset::licenses', AssetLoansToOfficers = 'asset::loans-to-officers', LiabilityLiabilitiesRelatedToAssetsHeldForSale = 'liability::liabilities-related-to-assets-held-for-sale', OtherCurrentLiabilityProvisionForWarrantyObligations = 'other-current-liability::provision-for-warranty-obligations', RevenueNonProfitIncome = 'revenue::non-profit-income', OtherExpenseGasAndFuel = 'other-expense::gas-and-fuel', CostOfGoodsSold = 'cost-of-goods-sold', AssetPrepaidExpenses = 'asset::prepaid-expenses', OtherCurrentLiabilityTradeAndOtherPayables = 'other-current-liability::trade-and-other-payables', AssetIntangibleAssetsUnderDevelopment = 'asset::intangible-assets-under-development', EquityHealthcare = 'equity::healthcare', AssetCashAndCashEquivalents = 'asset::cash-and-cash-equivalents', AssetParticipatingInterests = 'asset::participating-interests', EquityOpeningBalanceEquity = 'equity::opening-balance-equity', EquityPartnersEquity = 'equity::partners-equity', AssetTrustAccounts = 'asset::trust-accounts', LiabilityNotesPayable = 'liability::notes-payable', OtherCurrentLiabilityGlobalTaxSuspense = 'other-current-liability::global-tax-suspense', AssetInventory = 'asset::inventory', ExpenseAppropriationsToDepreciation = 'expense::appropriations-to-depreciation', OtherCurrentLiabilityPayrollClearing = 'other-current-liability::payroll-clearing', OtherCurrentLiabilityRentsInTrustLiability = 'other-current-liability::rents-in-trust-liability', AssetFixedAssetComputers = 'asset::fixed-asset-computers', CostOfGoodsSoldCostOfSales = 'cost-of-goods-sold::cost-of-sales', CostOfGoodsSoldShippingFreightDeliveryCos = 'cost-of-goods-sold::shipping-freight-delivery-cos', OtherIncome = 'other-income', OtherIncomeUnrealisedLossOnSecuritiesNetOfTax = 'other-income::unrealised-loss-on-securities-net-of-tax', AssetDeferredTax = 'asset::deferred-tax', Asset = 'asset', OtherCurrentLiabilityLoanPayable = 'other-current-liability::loan-payable', OtherExpenseVehicleInsurance = 'other-expense::vehicle-insurance', AssetOtherLongTermLoansAndAdvances = 'asset::other-long-term-loans-and-advances', AssetRetainage = 'asset::retainage', OtherExpenseVehicleRepairs = 'other-expense::vehicle-repairs', RevenueRevenueGeneral = 'revenue::revenue-general', EquityShareCapital = 'equity::share-capital', LiabilityAccruedLongTermLiabilities = 'liability::accrued-long-term-liabilities', LiabilityDebtsRelatedToParticipatingInterests = 'liability::debts-related-to-participating-interests', ExpenseAmortizationExpense = 'expense::amortization-expense', OtherIncomeTaxExemptInterest = 'other-income::tax-exempt-interest', AssetOtherIntangibleAssets = 'asset::other-intangible-assets', AssetAssetsHeldForSale = 'asset::assets-held-for-sale', LiabilityAccountsPayable = 'liability::accounts-payable', OtherExpenseVehicleRegistration = 'other-expense::vehicle-registration', AssetAccumulatedDepletion = 'asset::accumulated-depletion', ExpensePenaltiesSettlements = 'expense::penalties-settlements', ExpenseTravelMeals = 'expense::travel-meals', OtherExpenseParkingAndTolls = 'other-expense::parking-and-tolls', EquityShareApplicationMoneyPendingAllotment = 'equity::share-application-money-pending-allotment', ExpenseCharitableContributions = 'expense::charitable-contributions', CostOfGoodsSoldOtherCostsOfServiceCos = 'cost-of-goods-sold::other-costs-of-service-cos', AssetCumulativeDepreciationOnIntangibleAssets = 'asset::cumulative-depreciation-on-intangible-assets', AssetAssetsAvailableForSale = 'asset::assets-available-for-sale', EquityAccumulatedOtherComprehensiveIncome = 'equity::accumulated-other-comprehensive-income', OtherCurrentLiabilityLineOfCredit = 'other-current-liability::line-of-credit', OtherCurrentLiabilityPrepaidExpensesPayable = 'other-current-liability::prepaid-expenses-payable', AssetOtherEarMarkedBankAccounts = 'asset::other-ear-marked-bank-accounts', ExpenseTravelExpensesSellingExpense = 'expense::travel-expenses-selling-expense', EquityOwnersEquity = 'equity::owners-equity', ExpenseLegalProfessionalFees = 'expense::legal-professional-fees', OtherCurrentLiabilitySundryDebtorsAndCreditors = 'other-current-liability::sundry-debtors-and-creditors', RevenueSalesOfProductIncome = 'revenue::sales-of-product-income', LiabilityShareholderNotesPayable = 'liability::shareholder-notes-payable', AssetAccumulatedAmortization = 'asset::accumulated-amortization', RevenueOtherCurrentOperatingIncome = 'revenue::other-current-operating-income', RevenueOperatingGrants = 'revenue::operating-grants', AssetRentsHeldInTrust = 'asset::rents-held-in-trust', OtherExpenseExceptionalItems = 'other-expense::exceptional-items', OtherExpenseExchangeGainOrLoss = 'other-expense::exchange-gain-or-loss', ExpenseBorrowingCost = 'expense::borrowing-cost', AssetBalWithGovtAuthorities = 'asset::bal-with-govt-authorities', AssetGlobalTaxRefund = 'asset::global-tax-refund', OtherExpenseRepairsAndMaintenance = 'other-expense::repairs-and-maintenance', Liability = 'liability', ExpenseInterestPaid = 'expense::interest-paid', EquityPersonalExpense = 'equity::personal-expense', ExpenseProjectStudiesSurveysAssessments = 'expense::project-studies-surveys-assessments', ExpensePayrollExpenses = 'expense::payroll-expenses', ExpenseOtherSellingExpenses = 'expense::other-selling-expenses', OtherExpenseRentAndLease = 'other-expense::rent-and-lease', AssetInternalTransfers = 'asset::internal-transfers', AssetAllowanceForBadDebts = 'asset::allowance-for-bad-debts', ExpenseGlobalTaxExpense = 'expense::global-tax-expense', AssetMachineryAndEquipment = 'asset::machinery-and-equipment', EquityInvestmentGrants = 'equity::investment-grants', OtherExpenseOtherVehicleExpenses = 'other-expense::other-vehicle-expenses', LiabilityLongTermLiability = 'liability::long-term-liability', ExpenseSuppliesMaterials = 'expense::supplies-materials', ExpenseEntertainmentMeals = 'expense::entertainment-meals', LiabilityLongTermBorrowings = 'liability::long-term-borrowings', OtherExpensePenaltiesSettlements = 'other-expense::penalties-settlements', RevenueSavingsByTaxScheme = 'revenue::savings-by-tax-scheme', AssetInvestmentTaxExemptSecurities = 'asset::investment-tax-exempt-securities', ExpenseFinanceCosts = 'expense::finance-costs', RevenueSalesRetail = 'revenue::sales-retail', AssetOrganizationalCosts = 'asset::organizational-costs', AssetLandAsset = 'asset::land-asset', OtherIncomeLossOnDisposalOfAssets = 'other-income::loss-on-disposal-of-assets', OtherCurrentLiabilitySocialSecurityAgencies = 'other-current-liability::social-security-agencies', EquityCalledUpShareCapital = 'equity::called-up-share-capital', OtherCurrentLiabilityTrustAccountsLiabilities = 'other-current-liability::trust-accounts-liabilities', OtherExpenseExtraordinaryItems = 'other-expense::extraordinary-items', AssetOtherCurrentAssets = 'asset::other-current-assets', AssetAccumulatedDepreciation = 'asset::accumulated-depreciation', ExpenseStaffCosts = 'expense::staff-costs', OtherExpenseOtherHomeOfficeExpenses = 'other-expense::other-home-office-expenses', ExpenseExtraordinaryCharges = 'expense::extraordinary-charges', AssetOtherConsumables = 'asset::other-consumables', LiabilityStaffAndRelatedLongTermLiabilityAccounts = 'liability::staff-and-related-long-term-liability-accounts', AssetShortTermInvestmentsInRelatedParties = 'asset::short-term-investments-in-related-parties', ExpensePromotionalMeals = 'expense::promotional-meals', AssetCapitalWip = 'asset::capital-wip', LiabilityOtherLongTermProvisions = 'liability::other-long-term-provisions', LiabilityOutstandingDuesOtherThanMicroSmallEnterprise = 'liability::outstanding-dues-other-than-micro-small-enterprise', AssetDevelopmentCosts = 'asset::development-costs', AssetAvailableForSaleFinancialAssets = 'asset::available-for-sale-financial-assets', EquityAccumulatedAdjustment = 'equity::accumulated-adjustment', OtherIncomeOtherMiscellaneousIncome = 'other-income::other-miscellaneous-income', AssetEmployeeCashAdvances = 'asset::employee-cash-advances', Equity = 'equity', AssetNonCurrentAssets = 'asset::non-current-assets', AssetAccumulatedAmortizationOfOtherAssets = 'asset::accumulated-amortization-of-other-assets', OtherCurrentLiabilityGlobalTaxPayable = 'other-current-liability::global-tax-payable', EquityEquityInEarningsOfSubsidiuaries = 'equity::equity-in-earnings-of-subsidiuaries', AssetInvestmentMortgageRealEstateLoans = 'asset::investment-mortgage-real-estate-loans', OtherCurrentLiabilityCurrentLiabilities = 'other-current-liability::current-liabilities', OtherCurrentLiabilityCurrentPortionEmployeeBenefitsObligations = 'other-current-liability::current-portion-employee-benefits-obligations', OtherExpenseDepreciation = 'other-expense::depreciation', RevenueOtherPrimaryIncome = 'revenue::other-primary-income', LiabilityLongTermDebit = 'liability::long-term-debit', AssetFixedAssetSoftware = 'asset::fixed-asset-software', OtherExpenseHomeOffice = 'other-expense::home-office', AssetOtherCurrentAsset = 'asset::other-current-asset', ExpenseSundry = 'expense::sundry', ExpenseExternalServices = 'expense::external-services', AssetProvisionsNonCurrentAssets = 'asset::provisions-non-current-assets', AssetLongTermInvestments = 'asset::long-term-investments', AssetDepletableAssets = 'asset::depletable-assets', OtherExpenseVehicleLease = 'other-expense::vehicle-lease', OtherExpenseVehicleLoan = 'other-expense::vehicle-loan', CostOfGoodsSoldEquipmentRentalCos = 'cost-of-goods-sold::equipment-rental-cos', AssetProvisionsFixedAssets = 'asset::provisions-fixed-assets', OtherExpenseMatCredit = 'other-expense::mat-credit', AssetChecking = 'asset::checking', ExpenseCostOfLabor = 'expense::cost-of-labor', OtherExpenseVehicleLoanInterest = 'other-expense::vehicle-loan-interest', LiabilityDeferredTaxLiabilities = 'liability::deferred-tax-liabilities', LiabilityGroupAndAssociates = 'liability::group-and-associates', AssetLeaseBuyout = 'asset::lease-buyout', AssetOtherLongTermAssets = 'asset::other-long-term-assets', ExpenseInsurance = 'expense::insurance', ExpenseTravel = 'expense::travel', OtherCurrentLiabilitySalesTaxPayable = 'other-current-liability::sales-tax-payable', ExpenseBadDebts = 'expense::bad-debts', LiabilityAccrualsAndDeferredIncome = 'liability::accruals-and-deferred-income', LiabilityObligationsUnderFinanceLeases = 'liability::obligations-under-finance-leases', AssetLongTermLoansAndAdvancesToRelatedParties = 'asset::long-term-loans-and-advances-to-related-parties', OtherExpenseTaxRoundoffGainOrLoss = 'other-expense::tax-roundoff-gain-or-loss', OtherExpense = 'other-expense', EquityPartnerDistributions = 'equity::partner-distributions', AssetSecurityDeposits = 'asset::security-deposits', OtherCurrentLiabilityAccruedLiabilities = 'other-current-liability::accrued-liabilities', OtherCurrentLiabilityCurrentPortionOfObligationsUnderFinanceLeases = 'other-current-liability::current-portion-of-obligations-under-finance-leases', ExpenseOfficeExpenses = 'expense::office-expenses', ExpenseAuto = 'expense::auto', ExpenseRepairMaintenance = 'expense::repair-maintenance', LiabilityAccruedVacationPayable = 'liability::accrued-vacation-payable', OtherExpenseMortgageInterest = 'other-expense::mortgage-interest', OtherCurrentLiabilityOtherCurrentLiabilities = 'other-current-liability::other-current-liabilities', CostOfGoodsSoldFreightAndDeliveryCost = 'cost-of-goods-sold::freight-and-delivery-cost', OtherCurrentLiabilityPayrollTaxPayable = 'other-current-liability::payroll-tax-payable', AssetExpenditureAuthorisationsAndLettersOfCredit = 'asset::expenditure-authorisations-and-letters-of-credit', ExpenseOtherCurrentOperatingCharges = 'expense::other-current-operating-charges', OtherCurrentLiabilityStateLocalIncomeTaxPayable = 'other-current-liability::state-local-income-tax-payable', AssetPrepaymentsAndAccruedIncome = 'asset::prepayments-and-accrued-income', AssetMoneyMarket = 'asset::money-market', ExpenseAdvertisingPromotional = 'expense::advertising-promotional', RevenueOwnWorkCapitalized = 'revenue::own-work-capitalized', OtherExpenseDeferredTaxExpense = 'other-expense::deferred-tax-expense', AssetBank = 'asset::bank', ExpenseShippingFreightDelivery = 'expense::shipping-freight-delivery', ExpenseCommissionsAndFees = 'expense::commissions-and-fees', AssetFurnitureAndFixtures = 'asset::furniture-and-fixtures', Income = 'income', EquityCommonStock = 'equity::common-stock', AssetGoodwill = 'asset::goodwill', EquityPartnerContributions = 'equity::partner-contributions', ExpenseIncomeTaxExpense = 'expense::income-tax-expense', LiabilityLongTermEmployeeBenefitObligations = 'liability::long-term-employee-benefit-obligations', OtherCurrentLiabilityInterestPayables = 'other-current-liability::interest-payables', LiabilityProvisionsNonCurrentLiabilities = 'liability::provisions-non-current-liabilities', OtherExpenseDepletion = 'other-expense::depletion', OtherIncomeDividendIncome = 'other-income::dividend-income', RevenueServiceFeeIncome = 'revenue::service-fee-income', AssetTradeAndOtherReceivables = 'asset::trade-and-other-receivables', ExpenseUnappliedCashBillPaymentExpense = 'expense::unapplied-cash-bill-payment-expense', AssetFixedAssetOtherToolsEquipment = 'asset::fixed-asset-other-tools-equipment', AssetOtherLongTermInvestments = 'asset::other-long-term-investments', OtherExpensePriorPeriodItems = 'other-expense::prior-period-items', OtherCurrentLiabilityDutiesAndTaxes = 'other-current-liability::duties-and-taxes', AssetOtherAsset = 'asset::other-asset', AssetInvestmentOther = 'asset::investment-other', ExpenseOtherExternalServices = 'expense::other-external-services', AssetAssetsInCourseOfConstruction = 'asset::assets-in-course-of-construction', LiabilityOtherLongTermLiabilities = 'liability::other-long-term-liabilities', OtherIncomeOtherInvestmentIncome = 'other-income::other-investment-income', AssetCashOnHand = 'asset::cash-on-hand', AssetLoansToOthers = 'asset::loans-to-others', OtherIncomeInterestEarned = 'other-income::interest-earned', ExpenseBankCharges = 'expense::bank-charges', EquityDividendDisbursed = 'equity::dividend-disbursed', ExpenseManagementCompensation = 'expense::management-compensation', AssetLeaseholdImprovements = 'asset::leasehold-improvements', AssetOtherFixedAssets = 'asset::other-fixed-assets', LiabilityBankLoans = 'liability::bank-loans', OtherExpenseUtilities = 'other-expense::utilities', AssetFixedAssetPhone = 'asset::fixed-asset-phone', AssetProvisionsCurrentAssets = 'asset::provisions-current-assets', EquityTreasuryStock = 'equity::treasury-stock', OtherExpenseHomeOwnerRentalInsurance = 'other-expense::home-owner-rental-insurance', EquityPersonalIncome = 'equity::personal-income', AssetFixedAssetCopiers = 'asset::fixed-asset-copiers', AssetCalledUpShareCapitalNotPaid = 'asset::called-up-share-capital-not-paid', EquityCapitalReserves = 'equity::capital-reserves', EquityPaidInCapitalOrSurplus = 'equity::paid-in-capital-or-surplus', ExpenseDistributionCosts = 'expense::distribution-costs', OtherCurrentLiabilityFederalIncomeTaxPayable = 'other-current-liability::federal-income-tax-payable', EquityRetainedEarnings = 'equity::retained-earnings', AssetIntangibleAssets = 'asset::intangible-assets', OtherExpenseVehicle = 'other-expense::vehicle', OtherExpenseOtherMiscellaneousExpense = 'other-expense::other-miscellaneous-expense', EquityPreferredStock = 'equity::preferred-stock', OtherCurrentLiabilityInsurancePayable = 'other-current-liability::insurance-payable', RevenueDiscountsRefundsGiven = 'revenue::discounts-refunds-given', ExpenseTravelExpensesGeneralAndAdminExpenses = 'expense::travel-expenses-general-and-admin-expenses', EquityFunds = 'equity::funds', ExpenseEntertainment = 'expense::entertainment', OtherCurrentLiabilityProvisionsCurrentLiabilities = 'other-current-liability::provisions-current-liabilities', OtherIncomeGainLossOnSaleOfInvestments = 'other-income::gain-loss-on-sale-of-investments', ExpenseEquipmentRental = 'expense::equipment-rental', CostOfGoodsSoldSuppliesMaterialsCogs = 'cost-of-goods-sold::supplies-materials-cogs', ExpenseRentOrLeaseOfBuildings = 'expense::rent-or-lease-of-buildings', ExpenseShippingAndDeliveryExpense = 'expense::shipping-and-delivery-expense', OtherExpenseWashAndRoadServices = 'other-expense::wash-and-road-services', AssetLand = 'asset::land', RevenueSalesWholesale = 'revenue::sales-wholesale', Expense = 'expense', OtherCurrentLiability = 'other-current-liability', AssetBuildings = 'asset::buildings', AssetLoansToStockholders = 'asset::loans-to-stockholders', AssetInvestments = 'asset::investments', ExpenseOfficeGeneralAdministrativeExpenses = 'expense::office-general-administrative-expenses', ExpenseOtherBusinessExpenses = 'expense::other-business-expenses', OtherCurrentLiabilityStaffAndRelatedLiabilityAccounts = 'other-current-liability::staff-and-related-liability-accounts', OtherCurrentLiabilityDividendsPayable = 'other-current-liability::dividends-payable', OtherCurrentLiabilityDirectDepositPayable = 'other-current-liability::direct-deposit-payable', ExpenseDuesSubscriptions = 'expense::dues-subscriptions', LiabilityCreditCard = 'liability::credit-card', EquityMoneyReceivedAgainstShareWarrants = 'equity::money-received-against-share-warrants', LiabilityOutstandingDuesMicroSmallEnterprise = 'liability::outstanding-dues-micro-small-enterprise', RevenueUnappliedCashPaymentIncome = 'revenue::unapplied-cash-payment-income', AssetUndepositedFunds = 'asset::undeposited-funds', ExpenseUtilities = 'expense::utilities', AccountsReceivable = 'accounts-receivable', AssetFixedAssetFurniture = 'asset::fixed-asset-furniture', AssetSavings = 'asset::savings', ExpenseTaxesPaid = 'expense::taxes-paid', OtherCurrentLiabilityShortTermBorrowings = 'other-current-liability::short-term-borrowings', OtherExpenseAmortization = 'other-expense::amortization', AssetFixedAsset = 'asset::fixed-asset', AssetShortTermLoansAndAdvancesToRelatedParties = 'asset::short-term-loans-and-advances-to-related-parties', CostOfGoodsSoldCostOfLaborCos = 'cost-of-goods-sold::cost-of-labor-cos', AssetInvestmentUsGovernmentObligations = 'asset::investment-us-government-obligations', ExpenseOtherMiscellaneousServiceCost = 'expense::other-miscellaneous-service-cost' }
export const enum TargetSelection { Entitled = 'entitled', All = 'all' }
export const enum MinimumRequirements { MinimumPurchaseAmount = 'minimum-purchase-amount', MinimumQuantityOfItems = 'minimum-quantity-of-items', None = 'none' }
export const enum CustomerSelection { Prerequisite = 'prerequisite', All = 'all' }
export const enum Status { Expired = 'expired', Active = 'active', Scheduled = 'scheduled' }
export const enum SkuValidation { None = 'none', GlobalUnique = 'global-unique', LocalUnique = 'local-unique' }
export const enum TargetType { ShippingLine = 'shipping-line', LineItem = 'line-item' }
export const enum Gender { Other = 'other', Male = 'male', PreferNotToSay = 'prefer not to say', Female = 'female' }
export const enum TransactionMethod { BankBranch = 'bank-branch', Atm = 'atm', Mail = 'mail', Online = 'online', Mobile = 'mobile', Telephone = 'telephone' }
export const enum ChannelAvailability { Online = 'online', InStore = 'in-store', AllChannels = 'all-channels', InApp = 'in-app' }
export const enum AppliesTo { SpecificItems = 'specific-items', SpecificCategories = 'specific-categories', AllItems = 'all-items' }
export const enum Country { Burundi = 'burundi', Kenya = 'kenya', SouthKorea = 'south-korea', CoteDIvoire = 'cote-d-ivoire', PapuaNewGuinea = 'papua-new-guinea', Jamaica = 'jamaica', Madagascar = 'madagascar', Brazil = 'brazil', Gabon = 'gabon', Angola = 'angola', Greece = 'greece', Mozambique = 'mozambique', Netherlands = 'netherlands', Tonga = 'tonga', Finland = 'finland', Germany = 'germany', Turkmenistan = 'turkmenistan', Uzbekistan = 'uzbekistan', Thailand = 'thailand', Lesotho = 'lesotho', Eswatini = 'eswatini', Laos = 'laos', Lebanon = 'lebanon', Paraguay = 'paraguay', CentralAfricanRepublic = 'central-african-republic', Italy = 'italy', Serbia = 'serbia', BosniaAndHerzegovina = 'bosnia-and-herzegovina', Dominica = 'dominica', Iran = 'iran', Cyprus = 'cyprus', Slovenia = 'slovenia', Tajikistan = 'tajikistan', SaintKittsAndNevis = 'saint-kitts-and-nevis', SanMarino = 'san-marino', Guatemala = 'guatemala', Yemen = 'yemen', Luxembourg = 'luxembourg', Switzerland = 'switzerland', Armenia = 'armenia', Algeria = 'algeria', AntiguaAndBarbuda = 'antigua-and-barbuda', Bhutan = 'bhutan', Andorra = 'andorra', China = 'china', Comoros = 'comoros', Kiribati = 'kiribati', Lithuania = 'lithuania', Mauritania = 'mauritania', Benin = 'benin', Montenegro = 'montenegro', Pakistan = 'pakistan', Palau = 'palau', Honduras = 'honduras', Qatar = 'qatar', NorthKorea = 'north-korea', Jordan = 'jordan', Norway = 'norway', Singapore = 'singapore', Uganda = 'uganda', Togo = 'togo', UnitedArabEmirates = 'united-arab-emirates', VaticanCity = 'vatican-city', Rwanda = 'rwanda', Samoa = 'samoa', SaintVincentAndTheGrenadines = 'saint-vincent-and-the-grenadines', Guinea = 'guinea', Cuba = 'cuba', Taiwan = 'taiwan', Indonesia = 'indonesia', Turkey = 'turkey', Israel = 'israel', Kuwait = 'kuwait', Nepal = 'nepal', Grenada = 'grenada', MarshallIslands = 'marshall-islands', Latvia = 'latvia', Uruguay = 'uruguay', Bahamas = 'bahamas', CongoRepublic = 'congo-republic', Botswana = 'botswana', Russia = 'russia', Spain = 'spain', Poland = 'poland', Zambia = 'zambia', Slovakia = 'slovakia', Niger = 'niger', Chile = 'chile', Nicaragua = 'nicaragua', Djibouti = 'djibouti', NewZealand = 'new-zealand', Eritrea = 'eritrea', Panama = 'panama', France = 'france', Belize = 'belize', Bolivia = 'bolivia', Bulgaria = 'bulgaria', Ecuador = 'ecuador', Kyrgyzstan = 'kyrgyzstan', Barbados = 'barbados', Egypt = 'egypt', Malaysia = 'malaysia', Mongolia = 'mongolia', Palestine = 'palestine', CzechRepublic = 'czech-republic', Maldives = 'maldives', SaintLucia = 'saint-lucia', Seychelles = 'seychelles', CostaRica = 'costa-rica', Mexico = 'mexico', SouthSudan = 'south-sudan', Canada = 'canada', Sudan = 'sudan', Syria = 'syria', Georgia = 'georgia', Tuvalu = 'tuvalu', Haiti = 'haiti', Iraq = 'iraq', Ukraine = 'ukraine', UnitedKingdom = 'united-kingdom', Ethiopia = 'ethiopia', Micronesia = 'micronesia', Belarus = 'belarus', SaudiArabia = 'saudi-arabia', Austria = 'austria', Colombia = 'colombia', DominicanRepublic = 'dominican-republic', Portugal = 'portugal', SaoTomeAndPrincipe = 'sao-tome-and-principe', UnitedStates = 'united-states', Kazakhstan = 'kazakhstan', Zimbabwe = 'zimbabwe', TrinidadAndTobago = 'trinidad-and-tobago', Japan = 'japan', Azerbaijan = 'azerbaijan', Namibia = 'namibia', Croatia = 'croatia', Bahrain = 'bahrain', GuineaBissau = 'guinea-bissau', Chad = 'chad', Mali = 'mali', Ghana = 'ghana', Libya = 'libya', Iceland = 'iceland', Cambodia = 'cambodia', Ireland = 'ireland', Tunisia = 'tunisia', CaboVerde = 'cabo-verde', Guyana = 'guyana', Mauritius = 'mauritius', CongoDemocraticRepublic = 'congo-democratic-republic', Oman = 'oman', ElSalvador = 'el-salvador', SriLanka = 'sri-lanka', Fiji = 'fiji', EquatorialGuinea = 'equatorial-guinea', SouthAfrica = 'south-africa', Argentina = 'argentina', Sweden = 'sweden', Vanuatu = 'vanuatu', Brunei = 'brunei', BurkinaFaso = 'burkina-faso', Liechtenstein = 'liechtenstein', Albania = 'albania', SierraLeone = 'sierra-leone', Senegal = 'senegal', Morocco = 'morocco', Gambia = 'gambia', Belgium = 'belgium', Venezuela = 'venezuela', Nauru = 'nauru', Hungary = 'hungary', Denmark = 'denmark', Somalia = 'somalia', Tanzania = 'tanzania', Liberia = 'liberia', Malta = 'malta', Philippines = 'philippines', NorthMacedonia = 'north-macedonia', Afghanistan = 'afghanistan', SolomonIslands = 'solomon-islands', Romania = 'romania', Suriname = 'suriname', TimorLeste = 'timor-leste', Vietnam = 'vietnam', Cameroon = 'cameroon', Malawi = 'malawi', Estonia = 'estonia', Monaco = 'monaco', Australia = 'australia', Peru = 'peru', Myanmar = 'myanmar', Bangladesh = 'bangladesh', India = 'india', Moldova = 'moldova', Nigeria = 'nigeria' }
export const enum GlobalTaxType { PropertyTax = 'property-tax', Other = 'other', SalesTax = 'sales-tax', Vat = 'vat', Gst = 'gst', ExciseTax = 'excise-tax', CustomsDuty = 'customs-duty' }
export const enum JournalEntryStatus { Pending = 'pending', Posted = 'posted', Voided = 'voided', Draft = 'draft', Error = 'error', Corrected = 'corrected' }
export const enum IdentityProvider { Github = 'github', Signal = 'signal', Facebook = 'facebook', Behance = 'behance', Microsoft = 'microsoft', Whatsapp = 'whatsapp', Foursquare = 'foursquare', Pinterest = 'pinterest', Tumblr = 'tumblr', Wechat = 'wechat', Dribbble = 'dribbble', Line = 'line', Instagram = 'instagram', Flickr = 'flickr', Linkedin = 'linkedin', Vimeo = 'vimeo', Amazon = 'amazon', Slack = 'slack', Google = 'google', Qq = 'qq', Reddit = 'reddit', Paypal = 'paypal', Yahoo = 'yahoo', Tiktok = 'tiktok', Other = 'other', Snapchat = 'snapchat', Apple = 'apple', Twitter = 'twitter', Discord = 'discord', Telegram = 'telegram' }
export const enum DayOfWeek { Friday = 'friday', Monday = 'monday', Thursday = 'thursday', Saturday = 'saturday', Sunday = 'sunday', Tuesday = 'tuesday', Wednesday = 'wednesday' }
export const enum AccountEngagementLevel { Warm = 'warm', Unknown = 'unknown', Hot = 'hot', Cold = 'cold' }
export const enum ReviewApprovalStatus { InReview = 'in-review', Approved = 'approved', Pending = 'pending', Revised = 'revised', Rejected = 'rejected' }
export const enum StakeholderType { Customer = 'customer', Competitor = 'competitor', Investor = 'investor', Vendor = 'vendor', Partner = 'partner', Other = 'other' }
export const enum AccountStatus { Pending = 'pending', Inactive = 'inactive', Active = 'active', Suspended = 'suspended', Closed = 'closed' }
export const enum CampaignStatus { Scheduled = 'scheduled', Planned = 'planned', Active = 'active', Draft = 'draft', Cancelled = 'cancelled', Archived = 'archived', Paused = 'paused', Completed = 'completed' }
export const enum CustomerType { B2b = 'b2b', Retail = 'retail', Online = 'online', Wholesale = 'wholesale', Corporate = 'corporate', B2c = 'b2c' }
export const enum AccountingAccountType { ExpenseAdvertisingPromotional = 'expense::advertising-promotional', ExpenseInterestPaid = 'expense::interest-paid', AssetOtherConsumables = 'asset::other-consumables', ExpenseEquipmentRental = 'expense::equipment-rental', OtherExpenseWashAndRoadServices = 'other-expense::wash-and-road-services', AssetOtherCurrentAsset = 'asset::other-current-asset', AssetParticipatingInterests = 'asset::participating-interests', OtherExpenseUtilities = 'other-expense::utilities', EquityCapitalReserves = 'equity::capital-reserves', ExpenseUnappliedCashBillPaymentExpense = 'expense::unapplied-cash-bill-payment-expense', LiabilityLiabilitiesRelatedToAssetsHeldForSale = 'liability::liabilities-related-to-assets-held-for-sale', OtherCurrentLiabilityGlobalTaxSuspense = 'other-current-liability::global-tax-suspense', LiabilityProvisionsNonCurrentLiabilities = 'liability::provisions-non-current-liabilities', Asset = 'asset', AssetLeaseholdImprovements = 'asset::leasehold-improvements', OtherCurrentLiabilityGlobalTaxPayable = 'other-current-liability::global-tax-payable', RevenueOtherPrimaryIncome = 'revenue::other-primary-income', RevenueIncome = 'revenue::income', AssetMoneyMarket = 'asset::money-market', EquityHealthcare = 'equity::healthcare', EquityPersonalIncome = 'equity::personal-income', OtherCurrentLiabilityPrepaidExpensesPayable = 'other-current-liability::prepaid-expenses-payable', OtherCurrentLiabilitySundryDebtorsAndCreditors = 'other-current-liability::sundry-debtors-and-creditors', AssetGlobalTaxDeferred = 'asset::global-tax-deferred', AssetOtherCurrentAssets = 'asset::other-current-assets', OtherExpenseParkingAndTolls = 'other-expense::parking-and-tolls', OtherCurrentLiabilityTrustAccountsLiabilities = 'other-current-liability::trust-accounts-liabilities', AssetCapitalWip = 'asset::capital-wip', AssetGoodwill = 'asset::goodwill', EquityCalledUpShareCapital = 'equity::called-up-share-capital', ExpenseOfficeExpenses = 'expense::office-expenses', CostOfGoodsSold = 'cost-of-goods-sold', LiabilityLongTermBorrowings = 'liability::long-term-borrowings', LiabilityDebtsRelatedToParticipatingInterests = 'liability::debts-related-to-participating-interests', AssetIntangibleAssetsUnderDevelopment = 'asset::intangible-assets-under-development', LiabilityShareholderNotesPayable = 'liability::shareholder-notes-payable', LiabilityOutstandingDuesOtherThanMicroSmallEnterprise = 'liability::outstanding-dues-other-than-micro-small-enterprise', ExpenseExternalServices = 'expense::external-services', LiabilityBankLoans = 'liability::bank-loans', OtherCurrentLiabilityCurrentTaxLiability = 'other-current-liability::current-tax-liability', OtherCurrentLiabilityProvisionsCurrentLiabilities = 'other-current-liability::provisions-current-liabilities', OtherIncomeOtherInvestmentIncome = 'other-income::other-investment-income', OtherIncomeInterestEarned = 'other-income::interest-earned', AssetLongTermInvestments = 'asset::long-term-investments', AssetExpenditureAuthorisationsAndLettersOfCredit = 'asset::expenditure-authorisations-and-letters-of-credit', OtherIncomeOtherOperatingIncome = 'other-income::other-operating-income', OtherCurrentLiabilityCurrentLiabilities = 'other-current-liability::current-liabilities', ExpenseCharitableContributions = 'expense::charitable-contributions', EquityPartnersEquity = 'equity::partners-equity', AssetIntangibleAssets = 'asset::intangible-assets', AssetOrganizationalCosts = 'asset::organizational-costs', EquityOtherFreeReserves = 'equity::other-free-reserves', LiabilityObligationsUnderFinanceLeases = 'liability::obligations-under-finance-leases', AssetAssetsHeldForSale = 'asset::assets-held-for-sale', AssetProvisionsNonCurrentAssets = 'asset::provisions-non-current-assets', ExpenseProjectStudiesSurveysAssessments = 'expense::project-studies-surveys-assessments', ExpenseLegalProfessionalFees = 'expense::legal-professional-fees', RevenueOtherCurrentOperatingIncome = 'revenue::other-current-operating-income', OtherCurrentLiabilityProvisionForWarrantyObligations = 'other-current-liability::provision-for-warranty-obligations', CostOfGoodsSoldFreightAndDeliveryCost = 'cost-of-goods-sold::freight-and-delivery-cost', AssetInvestmentTaxExemptSecurities = 'asset::investment-tax-exempt-securities', AssetAccumulatedDepletion = 'asset::accumulated-depletion', ExpenseDistributionCosts = 'expense::distribution-costs', OtherExpensePenaltiesSettlements = 'other-expense::penalties-settlements', OtherExpenseGasAndFuel = 'other-expense::gas-and-fuel', ExpenseLossOnDiscontinuedOperationsNetOfTax = 'expense::loss-on-discontinued-operations-net-of-tax', OtherExpenseRepairsAndMaintenance = 'other-expense::repairs-and-maintenance', LiabilityAccrualsAndDeferredIncome = 'liability::accruals-and-deferred-income', LiabilityDeferredTaxLiabilities = 'liability::deferred-tax-liabilities', OtherCurrentLiabilityPayrollTaxPayable = 'other-current-liability::payroll-tax-payable', AccountsReceivable = 'accounts-receivable', EquityShareApplicationMoneyPendingAllotment = 'equity::share-application-money-pending-allotment', OtherCurrentLiabilityAccruedLiabilities = 'other-current-liability::accrued-liabilities', ExpensePurchasesRebates = 'expense::purchases-rebates', AssetTradeAndOtherReceivables = 'asset::trade-and-other-receivables', OtherExpenseVehicleRepairs = 'other-expense::vehicle-repairs', OtherExpenseDepletion = 'other-expense::depletion', OtherExpenseExtraordinaryItems = 'other-expense::extraordinary-items', OtherExpenseHomeOwnerRentalInsurance = 'other-expense::home-owner-rental-insurance', ExpenseSuppliesMaterials = 'expense::supplies-materials', OtherCurrentLiabilitySocialSecurityAgencies = 'other-current-liability::social-security-agencies', RevenueOwnWorkCapitalized = 'revenue::own-work-capitalized', OtherIncomeDividendIncome = 'other-income::dividend-income', AssetOtherLongTermInvestments = 'asset::other-long-term-investments', OtherCurrentLiabilityLineOfCredit = 'other-current-liability::line-of-credit', OtherIncomeLossOnDisposalOfAssets = 'other-income::loss-on-disposal-of-assets', AssetInventory = 'asset::inventory', AssetInvestmentOther = 'asset::investment-other', EquityPartnerContributions = 'equity::partner-contributions', ExpenseOtherExternalServices = 'expense::other-external-services', OtherCurrentLiabilityLoanPayable = 'other-current-liability::loan-payable', AssetInvestmentMortgageRealEstateLoans = 'asset::investment-mortgage-real-estate-loans', ExpenseUtilities = 'expense::utilities', OtherCurrentLiabilityCurrentPortionOfObligationsUnderFinanceLeases = 'other-current-liability::current-portion-of-obligations-under-finance-leases', AssetOtherLongTermLoansAndAdvances = 'asset::other-long-term-loans-and-advances', LiabilityOtherLongTermProvisions = 'liability::other-long-term-provisions', RevenueSavingsByTaxScheme = 'revenue::savings-by-tax-scheme', AssetAllowanceForBadDebts = 'asset::allowance-for-bad-debts', AssetInternalTransfers = 'asset::internal-transfers', ExpenseDuesSubscriptions = 'expense::dues-subscriptions', CostOfGoodsSoldCostOfSales = 'cost-of-goods-sold::cost-of-sales', OtherIncome = 'other-income', AssetFurnitureAndFixtures = 'asset::furniture-and-fixtures', AssetFixedAsset = 'asset::fixed-asset', LiabilityGroupAndAssociates = 'liability::group-and-associates', CostOfGoodsSoldOtherCostsOfServiceCos = 'cost-of-goods-sold::other-costs-of-service-cos', LiabilityLongTermEmployeeBenefitObligations = 'liability::long-term-employee-benefit-obligations', AssetLoansToStockholders = 'asset::loans-to-stockholders', EquityOwnersEquity = 'equity::owners-equity', OtherExpenseTaxRoundoffGainOrLoss = 'other-expense::tax-roundoff-gain-or-loss', AssetOtherFixedAssets = 'asset::other-fixed-assets', AssetOtherLongTermAssets = 'asset::other-long-term-assets', AssetShortTermLoansAndAdvancesToRelatedParties = 'asset::short-term-loans-and-advances-to-related-parties', AssetMachineryAndEquipment = 'asset::machinery-and-equipment', OtherCurrentLiabilityStaffAndRelatedLiabilityAccounts = 'other-current-liability::staff-and-related-liability-accounts', AssetVehicles = 'asset::vehicles', AssetProvisionsFixedAssets = 'asset::provisions-fixed-assets', AssetFixedAssetOtherToolsEquipment = 'asset::fixed-asset-other-tools-equipment', ExpensePayrollExpenses = 'expense::payroll-expenses', AssetChecking = 'asset::checking', AssetPrepaidExpenses = 'asset::prepaid-expenses', AssetAccumulatedDepreciation = 'asset::accumulated-depreciation', OtherCurrentLiabilityInsurancePayable = 'other-current-liability::insurance-payable', OtherCurrentLiabilityDutiesAndTaxes = 'other-current-liability::duties-and-taxes', RevenueNonProfitIncome = 'revenue::non-profit-income', AssetCashOnHand = 'asset::cash-on-hand', AssetRetainage = 'asset::retainage', OtherExpenseDepreciation = 'other-expense::depreciation', OtherCurrentLiabilitySalesTaxPayable = 'other-current-liability::sales-tax-payable', AssetFixedAssetPhotoVideo = 'asset::fixed-asset-photo-video', OtherExpenseVehicle = 'other-expense::vehicle', OtherCurrentLiability = 'other-current-liability', ExpenseTravelExpensesSellingExpense = 'expense::travel-expenses-selling-expense', ExpenseOfficeGeneralAdministrativeExpenses = 'expense::office-general-administrative-expenses', OtherIncomeUnrealisedLossOnSecuritiesNetOfTax = 'other-income::unrealised-loss-on-securities-net-of-tax', ExpenseTravelExpensesGeneralAndAdminExpenses = 'expense::travel-expenses-general-and-admin-expenses', OtherExpenseExchangeGainOrLoss = 'other-expense::exchange-gain-or-loss', RevenueCashReceiptIncome = 'revenue::cash-receipt-income', AssetLandAsset = 'asset::land-asset', AssetSecurityDeposits = 'asset::security-deposits', AssetOtherAsset = 'asset::other-asset', AssetCashAndCashEquivalents = 'asset::cash-and-cash-equivalents', ExpenseCostOfLabor = 'expense::cost-of-labor', EquityPaidInCapitalOrSurplus = 'equity::paid-in-capital-or-surplus', OtherExpenseVehicleInsurance = 'other-expense::vehicle-insurance', AssetProvisionsCurrentAssets = 'asset::provisions-current-assets', AssetLongTermLoansAndAdvancesToRelatedParties = 'asset::long-term-loans-and-advances-to-related-parties', AssetPrepaymentsAndAccruedIncome = 'asset::prepayments-and-accrued-income', ExpenseShippingAndDeliveryExpense = 'expense::shipping-and-delivery-expense', ExpenseIncomeTaxExpense = 'expense::income-tax-expense', AssetAssetsAvailableForSale = 'asset::assets-available-for-sale', Expense = 'expense', EquityEquityInEarningsOfSubsidiuaries = 'equity::equity-in-earnings-of-subsidiuaries', OtherCurrentLiabilityPayrollClearing = 'other-current-liability::payroll-clearing', ExpenseEntertainmentMeals = 'expense::entertainment-meals', RevenueSalesRetail = 'revenue::sales-retail', CostOfGoodsSoldCostOfLaborCos = 'cost-of-goods-sold::cost-of-labor-cos', OtherExpenseMatCredit = 'other-expense::mat-credit', OtherExpenseOtherMiscellaneousExpense = 'other-expense::other-miscellaneous-expense', RevenueRevenueGeneral = 'revenue::revenue-general', ExpenseBankCharges = 'expense::bank-charges', ExpenseTravelMeals = 'expense::travel-meals', OtherExpenseVehicleLease = 'other-expense::vehicle-lease', AssetBank = 'asset::bank', EquityFunds = 'equity::funds', AssetOtherEarMarkedBankAccounts = 'asset::other-ear-marked-bank-accounts', CostOfGoodsSoldShippingFreightDeliveryCos = 'cost-of-goods-sold::shipping-freight-delivery-cos', ExpenseGlobalTaxExpense = 'expense::global-tax-expense', EquityPartnerDistributions = 'equity::partner-distributions', LiabilityGovernmentAndOtherPublicAuthorities = 'liability::government-and-other-public-authorities', ExpenseAuto = 'expense::auto', AssetFixedAssetComputers = 'asset::fixed-asset-computers', ExpenseSundry = 'expense::sundry', CostOfGoodsSoldSuppliesMaterialsCogs = 'cost-of-goods-sold::supplies-materials-cogs', AssetEmployeeCashAdvances = 'asset::employee-cash-advances', EquityOpeningBalanceEquity = 'equity::opening-balance-equity', ExpensePromotionalMeals = 'expense::promotional-meals', OtherExpenseOtherHomeOfficeExpenses = 'other-expense::other-home-office-expenses', OtherExpenseIncomeTaxOtherExpense = 'other-expense::income-tax-other-expense', LiabilityLongTermDebit = 'liability::long-term-debit', RevenueOperatingGrants = 'revenue::operating-grants', OtherCurrentLiabilityShortTermBorrowings = 'other-current-liability::short-term-borrowings', ExpenseOtherMiscellaneousServiceCost = 'expense::other-miscellaneous-service-cost', LiabilityNotesPayable = 'liability::notes-payable', OtherCurrentLiabilityInterestPayables = 'other-current-liability::interest-payables', EquityShareCapital = 'equity::share-capital', EquityEstimatedTaxes = 'equity::estimated-taxes', ExpenseOtherCurrentOperatingCharges = 'expense::other-current-operating-charges', ExpenseOtherSellingExpenses = 'expense::other-selling-expenses', OtherCurrentLiabilityCurrentPortionEmployeeBenefitsObligations = 'other-current-liability::current-portion-employee-benefits-obligations', RevenueUnappliedCashPaymentIncome = 'revenue::unapplied-cash-payment-income', LiabilityCreditCard = 'liability::credit-card', AssetFixedAssetSoftware = 'asset::fixed-asset-software', EquityAccumulatedOtherComprehensiveIncome = 'equity::accumulated-other-comprehensive-income', ExpenseRepairMaintenance = 'expense::repair-maintenance', OtherCurrentLiabilityRentsInTrustLiability = 'other-current-liability::rents-in-trust-liability', AssetCumulativeDepreciationOnIntangibleAssets = 'asset::cumulative-depreciation-on-intangible-assets', ExpenseInsurance = 'expense::insurance', AssetAccumulatedAmortization = 'asset::accumulated-amortization', AssetDevelopmentCosts = 'asset::development-costs', ExpenseOtherBusinessExpenses = 'expense::other-business-expenses', LiabilityProvisionForLiabilities = 'liability::provision-for-liabilities', OtherExpenseMortgageInterest = 'other-expense::mortgage-interest', ExpenseAppropriationsToDepreciation = 'expense::appropriations-to-depreciation', AssetInvestments = 'asset::investments', ExpenseTravel = 'expense::travel', AssetBuildings = 'asset::buildings', ExpenseEntertainment = 'expense::entertainment', OtherIncomeGainLossOnSaleOfFixedAssets = 'other-income::gain-loss-on-sale-of-fixed-assets', OtherCurrentLiabilityOtherCurrentLiabilities = 'other-current-liability::other-current-liabilities', LiabilityAccountsPayable = 'liability::accounts-payable', AssetLoansToOfficers = 'asset::loans-to-officers', AssetBalWithGovtAuthorities = 'asset::bal-with-govt-authorities', AssetNonCurrentAssets = 'asset::non-current-assets', EquityTreasuryStock = 'equity::treasury-stock', LiabilityAccruedLongTermLiabilities = 'liability::accrued-long-term-liabilities', OtherCurrentLiabilityDirectDepositPayable = 'other-current-liability::direct-deposit-payable', AssetAssetsInCourseOfConstruction = 'asset::assets-in-course-of-construction', AssetFixedAssetFurniture = 'asset::fixed-asset-furniture', AssetSavings = 'asset::savings', EquityPersonalExpense = 'equity::personal-expense', OtherCurrentLiabilityFederalIncomeTaxPayable = 'other-current-liability::federal-income-tax-payable', AssetAvailableForSaleFinancialAssets = 'asset::available-for-sale-financial-assets', AssetFixedAssetPhone = 'asset::fixed-asset-phone', EquityPreferredStock = 'equity::preferred-stock', ExpenseShippingFreightDelivery = 'expense::shipping-freight-delivery', RevenueServiceFeeIncome = 'revenue::service-fee-income', ExpenseManagementCompensation = 'expense::management-compensation', ExpenseOtherRentalCosts = 'expense::other-rental-costs', Equity = 'equity', ExpenseAmortizationExpense = 'expense::amortization-expense', LiabilityOutstandingDuesMicroSmallEnterprise = 'liability::outstanding-dues-micro-small-enterprise', OtherExpenseHomeOffice = 'other-expense::home-office', LiabilityAccruedVacationPayable = 'liability::accrued-vacation-payable', ExpenseTaxesPaid = 'expense::taxes-paid', AssetGlobalTaxRefund = 'asset::global-tax-refund', LiabilityStaffAndRelatedLongTermLiabilityAccounts = 'liability::staff-and-related-long-term-liability-accounts', AssetInvestmentUsGovernmentObligations = 'asset::investment-us-government-obligations', AssetLoansToOthers = 'asset::loans-to-others', OtherExpensePriorPeriodItems = 'other-expense::prior-period-items', OtherExpenseDeferredTaxExpense = 'other-expense::deferred-tax-expense', EquityInvestmentGrants = 'equity::investment-grants', AssetTrustAccounts = 'asset::trust-accounts', EquityAccumulatedAdjustment = 'equity::accumulated-adjustment', OtherExpenseVehicleLoan = 'other-expense::vehicle-loan', AssetRentsHeldInTrust = 'asset::rents-held-in-trust', AssetCalledUpShareCapitalNotPaid = 'asset::called-up-share-capital-not-paid', AssetLand = 'asset::land', AssetLicenses = 'asset::licenses', EquityCommonStock = 'equity::common-stock', OtherExpenseVehicleLoanInterest = 'other-expense::vehicle-loan-interest', ExpenseBadDebts = 'expense::bad-debts', OtherCurrentLiabilityTradeAndOtherPayables = 'other-current-liability::trade-and-other-payables', OtherIncomeTaxExemptInterest = 'other-income::tax-exempt-interest', OtherIncomeGainLossOnSaleOfInvestments = 'other-income::gain-loss-on-sale-of-investments', OtherExpenseOtherVehicleExpenses = 'other-expense::other-vehicle-expenses', AssetShortTermInvestmentsInRelatedParties = 'asset::short-term-investments-in-related-parties', ExpenseFinanceCosts = 'expense::finance-costs', OtherExpense = 'other-expense', OtherExpenseAmortization = 'other-expense::amortization', CostOfGoodsSoldEquipmentRentalCos = 'cost-of-goods-sold::equipment-rental-cos', OtherCurrentLiabilityStateLocalIncomeTaxPayable = 'other-current-liability::state-local-income-tax-payable', ExpenseStaffCosts = 'expense::staff-costs', OtherExpenseExceptionalItems = 'other-expense::exceptional-items', ExpenseRentOrLeaseOfBuildings = 'expense::rent-or-lease-of-buildings', AssetDepletableAssets = 'asset::depletable-assets', EquityRetainedEarnings = 'equity::retained-earnings', OtherIncomeOtherMiscellaneousIncome = 'other-income::other-miscellaneous-income', AssetUndepositedFunds = 'asset::undeposited-funds', EquityDividendDisbursed = 'equity::dividend-disbursed', OtherExpenseRentAndLease = 'other-expense::rent-and-lease', OtherCurrentLiabilityDividendsPayable = 'other-current-liability::dividends-payable', AssetAccumulatedAmortizationOfOtherAssets = 'asset::accumulated-amortization-of-other-assets', AssetDeferredTax = 'asset::deferred-tax', LiabilityLongTermLiability = 'liability::long-term-liability', OtherExpenseVehicleRegistration = 'other-expense::vehicle-registration', AssetLeaseBuyout = 'asset::lease-buyout', RevenueSalesWholesale = 'revenue::sales-wholesale', AssetFixedAssetCopiers = 'asset::fixed-asset-copiers', ExpenseBorrowingCost = 'expense::borrowing-cost', ExpenseExtraordinaryCharges = 'expense::extraordinary-charges', RevenueDiscountsRefundsGiven = 'revenue::discounts-refunds-given', ExpenseCommissionsAndFees = 'expense::commissions-and-fees', LiabilityOtherLongTermLiabilities = 'liability::other-long-term-liabilities', RevenueSalesOfProductIncome = 'revenue::sales-of-product-income', EquityMoneyReceivedAgainstShareWarrants = 'equity::money-received-against-share-warrants', AssetOtherIntangibleAssets = 'asset::other-intangible-assets' }
export const enum MessageReadStatus { Failed = 'failed', Read = 'read', Unsent = 'unsent', Delivered = 'delivered', Sent = 'sent' }
export const enum MessageContentType { File = 'file', Location = 'location', Audio = 'audio', Contact = 'contact', Document = 'document', Sticker = 'sticker', Voice = 'voice', Html = 'html', Link = 'link', Text = 'text', Gif = 'gif', Image = 'image', Video = 'video' }
export const enum MessageDeliveryStatus { Error = 'error', Undeliverable = 'undeliverable', Failed = 'failed', Sent = 'sent', Delivered = 'delivered', Pending = 'pending', Read = 'read' }
export const enum ReactionType { Laugh = 'laugh', Like = 'like', Interested = 'interested', Love = 'love', Sad = 'sad', Wow = 'wow', Dislike = 'dislike', Bookmark = 'bookmark', Angry = 'angry' }
export const enum SupportTicketPriority { Low = 'low', Urgent = 'urgent', High = 'high', Immediate = 'immediate', Medium = 'medium' }
export const enum IssueLifecycleStatus { OnHold = 'on-hold', InProgress = 'in-progress', Resolved = 'resolved', Cancelled = 'cancelled', Waiting = 'waiting', Closed = 'closed', Pending = 'pending', Open = 'open' }
export const enum SupportQueryType { Task = 'task', FeatureRequest = 'feature-request', Question = 'question', Problem = 'problem', Feedback = 'feedback', Incident = 'incident', Bug = 'bug' }
export const enum OrderStatus { Disputed = 'disputed', Draft = 'draft', PartiallyFulfilled = 'partially-fulfilled', OnHold = 'on-hold', AwaitingShipment = 'awaiting-shipment', Processing = 'processing', Pending = 'pending', Delivered = 'delivered', Cancelled = 'cancelled', Confirmed = 'confirmed', Refunded = 'refunded', AwaitingPayment = 'awaiting-payment', Shipped = 'shipped', Abandoned = 'abandoned', Returned = 'returned', Failed = 'failed', Completed = 'completed', AwaitingPickup = 'awaiting-pickup' }
export const enum DiscountType { Percentage = 'percentage', TieredDiscount = 'tiered-discount', VariablePercentage = 'variable-percentage', BuyOneGetOne = 'buy-one-get-one', FixedAmount = 'fixed-amount', ConditionalDiscount = 'conditional-discount', VariableAmount = 'variable-amount', UnknownDiscount = 'unknown-discount' }
export const enum ImageMimeType { ImageTiff = 'image/tiff', ImagePng = 'image/png', ImageHeic = 'image/heic', ImageWebp = 'image/webp', ImageSvgXml = 'image/svg+xml', ImageJpeg = 'image/jpeg', ImageGif = 'image/gif', ImageBmp = 'image/bmp' }
export const enum FulfillmentStatus { Cancelled = 'cancelled', Failure = 'failure', Pending = 'pending', Delivered = 'delivered', Returned = 'returned', InTransit = 'in-transit' }
export const enum OrderingCriteria { Popularity = 'popularity', Alphabetical = 'alphabetical', PriceDescending = 'price-descending', Rating = 'rating', Relevance = 'relevance', PriceAscending = 'price-ascending', CreationDate = 'creation-date', Manual = 'manual' }
export const enum ChatType { Group = 'group', Public = 'public', Private = 'private' }
export const enum ProductAvailabilityStatus { PreOrder = 'pre-order', Discontinued = 'discontinued', OutOfStock = 'out-of-stock', InStock = 'in-stock', BackOrder = 'back-order' }
export const enum ExpenseApprovalStatus { Reimbursed = 'reimbursed', Reviewing = 'reviewing', Approved = 'approved', Pending = 'pending', Denied = 'denied', New = 'new', Processed = 'processed', Cancelled = 'cancelled' }
export const enum FinancialChargeType { TransactionFee = 'transaction-fee', LateFee = 'late-fee', ServiceCharge = 'service-charge', ProcessingFee = 'processing-fee', InterestCharge = 'interest-charge', Commission = 'commission', Other = 'other' }
export const enum ItemAvailabilityStatus { OutOfStock = 'out-of-stock', Discontinued = 'discontinued', Active = 'active', Inactive = 'inactive' }
export const enum BillingStatus { Deleted = 'deleted', Overdue = 'overdue', Voided = 'voided', Unpaid = 'unpaid', PartiallyPaid = 'partially-paid', Submitted = 'submitted', Authorised = 'authorised', Draft = 'draft', Paid = 'paid', Pending = 'pending' }
export const enum FinancialAccountStatus { Active = 'active', Frozen = 'frozen', Closed = 'closed', Suspended = 'suspended', Inactive = 'inactive', UnderReview = 'under-review', Delinquent = 'delinquent' }
export const enum TransactionStatus { Failed = 'failed', Error = 'error', Cancelled = 'cancelled', Initiated = 'initiated', Pending = 'pending', InProgress = 'in-progress', Succeeded = 'succeeded' }
export const enum InvoiceAdjustmentType { Tip = 'tip', Discount = 'discount', Other = 'other', Shipping = 'shipping', Tax = 'tax' }
export const enum DataType { Json = 'json', Number = 'number', Array = 'array', String = 'string', Timestamp = 'timestamp', Binary = 'binary', Null = 'null', Boolean = 'boolean', Undefined = 'undefined', Custom = 'custom', Date = 'date', Object = 'object' }
export const enum EmploymentType { PartTime = 'part-time', Freelance = 'freelance', Volunteer = 'volunteer', Internship = 'internship', FullTime = 'full-time', Seasonal = 'seasonal', Permanent = 'permanent', Contract = 'contract', Temporary = 'temporary' }
export const enum TimeCycle { Custom = 'custom', Minutely = 'minutely', Weekly = 'weekly', Biweekly = 'biweekly', Daily = 'daily', SemiMonthly = 'semi-monthly', SemiAnnually = 'semi-annually', Annually = 'annually', Biennially = 'biennially', Secondly = 'secondly', Monthly = 'monthly', AdHoc = 'ad-hoc', Triennially = 'triennially', Hourly = 'hourly', Quarterly = 'quarterly' }
export const enum FinancialTrackingCategories { Customer = 'customer', Class = 'class', Other = 'other', None = 'none', Service = 'service', Project = 'project', Department = 'department', Division = 'division', Employee = 'employee', CostCenter = 'cost-center', Product = 'product', Vendor = 'vendor', Location = 'location' }
export const enum CreditNoteStatus { Cancelled = 'cancelled', Pending = 'pending', Draft = 'draft', Issued = 'issued', Void = 'void', Completed = 'completed', Disputed = 'disputed', Applied = 'applied', Revised = 'revised' }
export const enum PaymentTerm { Installment = 'installment', DueOnReceipt = 'due-on-receipt', Custom = 'custom', Net90 = 'net-90', Net = 'net', Prepayment = 'prepayment', Net60 = 'net-60', DueEndOfMonth = 'due-end-of-month', CashInAdvance = 'cash-in-advance', Prepaid = 'prepaid', CashOnDelivery = 'cash-on-delivery', UponCompletion = 'upon-completion', CashBeforeShipment = 'cash-before-shipment', DeferredPayment = 'deferred-payment', Net30 = 'net-30', CashWithOrder = 'cash-with-order' }
export const enum EmploymentAndCandidateStatus { Other = 'other', Interviewing = 'interviewing', Hired = 'hired', Active = 'active', NotSelected = 'not-selected', Inactive = 'inactive', OnLeave = 'on-leave', Terminated = 'terminated', InReview = 'in-review', New = 'new', OfferExtended = 'offer-extended' }
export const enum OrganizationalRole { Supervisor = 'supervisor', Contractor = 'contractor', Admin = 'admin', Employee = 'employee', Director = 'director', Other = 'other', Manager = 'manager' }
export const enum CampaignType { SearchEngine = 'search-engine', Other = 'other', Email = 'email', SocialMedia = 'social-media', Display = 'display' }
export const enum ContactAddressType { Billing = 'billing', Personal = 'personal', Shipping = 'shipping', Home = 'home', Other = 'other', Business = 'business', Temporary = 'temporary', Work = 'work' }
export const enum CustomerStatus { Active = 'active', Inactive = 'inactive', Pending = 'pending', Suspended = 'suspended', Archived = 'archived' }
export const enum SocialPlatform { Twitter = 'twitter', Linkedin = 'linkedin', Pinterest = 'pinterest', Youtube = 'youtube', Snapchat = 'snapchat', OtherSocialPlatform = 'other-social-platform', Instagram = 'instagram', Skype = 'skype', X = 'x', Reddit = 'reddit', Facebook = 'facebook', Tiktok = 'tiktok', Tumblr = 'tumblr' }
export const enum LeadLifecycleStatus { Converted = 'converted', BadTiming = 'bad-timing', Lost = 'lost', Open = 'open', AttemptedToContact = 'attempted-to-contact', InProcess = 'in-process', Revisited = 'revisited', Connected = 'connected', New = 'new', Unqualified = 'unqualified' }
export const enum ConversationStatus { Archived = 'archived', Closed = 'closed', Snoozed = 'snoozed', Active = 'active', Deleted = 'deleted' }
export const enum CommunicationRole { Channel = 'channel', Bot = 'bot', Admin = 'admin', Member = 'member', Group = 'group', Moderator = 'moderator', Service = 'service', User = 'user', Guest = 'guest', Owner = 'owner', System = 'system', Assistant = 'assistant' }
export const enum ParticipantEngagementStatus { Left = 'left', Banned = 'banned', Admin = 'admin', Guest = 'guest', Moderator = 'moderator', Active = 'active', Inactive = 'inactive' }
export const enum ItemEntityStatus { Pending = 'pending', Suspended = 'suspended', Deleted = 'deleted', Completed = 'completed', Active = 'active', Archived = 'archived', Inactive = 'inactive' }
export const enum Currency { GYD = 'gyd', ERN = 'ern', SRD = 'srd', CLP = 'clp', SBD = 'sbd', BZD = 'bzd', CVE = 'cve', UZS = 'uzs', JOD = 'jod', NAD = 'nad', TZS = 'tzs', AED = 'aed', GHS = 'ghs', RUB = 'rub', KYD = 'kyd', NGN = 'ngn', MZN = 'mzn', PLN = 'pln', THB = 'thb', LBP = 'lbp', BAM = 'bam', BDT = 'bdt', BGN = 'bgn', IRR = 'irr', KMF = 'kmf', NPR = 'npr', FOK = 'fok', GMD = 'gmd', TJS = 'tjs', CAD = 'cad', BWP = 'bwp', BYN = 'byn', AWG = 'awg', RSD = 'rsd', LAK = 'lak', JMD = 'jmd', TVD = 'tvd', TWD = 'twd', XAF = 'xaf', HRK = 'hrk', COP = 'cop', ZWL = 'zwl', HTG = 'htg', SLL = 'sll', CHF = 'chf', BOB = 'bob', CUC = 'cuc', VES = 'ves', KZT = 'kzt', DOP = 'dop', KHR = 'khr', AZN = 'azn', LRD = 'lrd', LSL = 'lsl', MXN = 'mxn', ZMW = 'zmw', IQD = 'iqd', CDF = 'cdf', KES = 'kes', MAD = 'mad', PGK = 'pgk', EUR = 'eur', IDR = 'idr', NIO = 'nio', SAR = 'sar', SYP = 'syp', UYU = 'uyu', CUP = 'cup', DZD = 'dzd', PKR = 'pkr', SOS = 'sos', ANG = 'ang', MDL = 'mdl', VND = 'vnd', WST = 'wst', XPF = 'xpf', GIP = 'gip', AUD = 'aud', LKR = 'lkr', OMR = 'omr', SCR = 'scr', PEN = 'pen', MRU = 'mru', GTQ = 'gtq', STN = 'stn', SSP = 'ssp', ARS = 'ars', ISK = 'isk', VUV = 'vuv', XDR = 'xdr', MUR = 'mur', KID = 'kid', YER = 'yer', NZD = 'nzd', UAH = 'uah', ZAR = 'zar', MYR = 'myr', MOP = 'mop', QAR = 'qar', TMT = 'tmt', CZK = 'czk', PYG = 'pyg', KPW = 'kpw', JEP = 'jep', EGP = 'egp', ILS = 'ils', MGA = 'mga', SGD = 'sgd', NOK = 'nok', XOF = 'xof', HNL = 'hnl', AFN = 'afn', FKP = 'fkp', HKD = 'hkd', FJD = 'fjd', AOA = 'aoa', CRC = 'crc', BND = 'bnd', PHP = 'php', SEK = 'sek', TOP = 'top', DKK = 'dkk', HUF = 'huf', KWD = 'kwd', RON = 'ron', SZL = 'szl', UGX = 'ugx', KGS = 'kgs', GGP = 'ggp', RWF = 'rwf', PAB = 'pab', BMD = 'bmd', GEL = 'gel', IMP = 'imp', BSD = 'bsd', LYD = 'lyd', BBD = 'bbd', BHD = 'bhd', DJF = 'djf', MKD = 'mkd', MMK = 'mmk', GNF = 'gnf', SDG = 'sdg', XCD = 'xcd', ALL = 'all', AMD = 'amd', BTN = 'btn', INR = 'inr', SHP = 'shp', GBP = 'gbp', TND = 'tnd', TTD = 'ttd', ETB = 'etb', USD = 'usd', JPY = 'jpy', TRY = 'try', MNT = 'mnt', MWK = 'mwk', MVR = 'mvr', BIF = 'bif', KRW = 'krw', BRL = 'brl', CNY = 'cny' }
export const enum CustomerEligibilityStatus { ReturningCustomers = 'returning-customers', AllCustomers = 'all-customers', Other = 'other', NewCustomers = 'new-customers', VipCustomers = 'vip-customers', SpecificConditions = 'specific-conditions' }
export const enum LifecycleStatus { Cancelled = 'cancelled', Expired = 'expired', Active = 'active', Redeemed = 'redeemed', Issued = 'issued', Suspended = 'suspended' }
export const enum PaymentMethod { BankTransfer = 'bank-transfer', CreditCard = 'credit-card', DebitCard = 'debit-card', Cash = 'cash', Cryptocurrency = 'cryptocurrency', Other = 'other', Check = 'check', MobileWallet = 'mobile-wallet', Paypal = 'paypal', CashOnDelivery = 'cash-on-delivery', MobilePayment = 'mobile-payment' }
export const enum FinancialTransactionStatus { Cancelled = 'cancelled', Failed = 'failed', Disputed = 'disputed', Refunded = 'refunded', SettlementInProgress = 'settlement-in-progress', Pending = 'pending', Authorized = 'authorized', Cleared = 'cleared' }
export const enum AuditOpinionType { Unqualified = 'unqualified', Qualified = 'qualified', Disclaimer = 'disclaimer', Adverse = 'adverse' }
export const enum InventoryStorageType { OnlineMarketplace = 'online-marketplace', DistributionCenter = 'distribution-center', DropShipper = 'drop-shipper', Other = 'other', Warehouse = 'warehouse', Consignment = 'consignment', RetailStore = 'retail-store' }
export const enum ItemCondition { OpenBox = 'open-box', LikeNew = 'like-new', New = 'new', Refurbished = 'refurbished', Used = 'used', Damaged = 'damaged' }
export const enum TransactionType { Withdrawal = 'withdrawal', Deposit = 'deposit', Refund = 'refund', Fee = 'fee', Charge = 'charge', Adjustment = 'adjustment', Payment = 'payment', Transfer = 'transfer' }
export const enum VisibilityScope { Private = 'private', Internal = 'internal', App = 'app', Web = 'web', Global = 'global' }
export const enum PaymentStatus { Disputed = 'disputed', Draft = 'draft', Cancelled = 'cancelled', Processing = 'processing', Refunded = 'refunded', Overdue = 'overdue', Succeeded = 'succeeded', Voided = 'voided', Submitted = 'submitted', Failed = 'failed', Paid = 'paid', Deleted = 'deleted', Pending = 'pending', Authorized = 'authorized', Partial = 'partial', Error = 'error', PartiallyRefunded = 'partially-refunded', Adjusted = 'adjusted' }
export const enum EntityLifecycleStatus { Deleted = 'deleted', Inactive = 'inactive', Scheduled = 'scheduled', Archived = 'archived', Active = 'active', Preorder = 'preorder', Draft = 'draft' }
export const enum TransactionChannel { InPerson = 'in-person', BankBranch = 'bank-branch', Mail = 'mail', Telephone = 'telephone', Other = 'other', Online = 'online', Atm = 'atm', Mobile = 'mobile' }
export const enum FinancialDisputeStatus { Closed = 'closed', ChargeRefunded = 'charge-refunded', Won = 'won', Lost = 'lost', AwaitingEvidence = 'awaiting-evidence', UnderReview = 'under-review', NeedsResponse = 'needs-response', Escalated = 'escalated' }
export const enum ContentVisibility { Protected = 'protected', Private = 'private', Internal = 'internal', Shared = 'shared', Public = 'public' }
export const enum DeviceUsageType { Other = 'other', Business = 'business', Educational = 'educational', Personal = 'personal', Industrial = 'industrial', Healthcare = 'healthcare', Home = 'home' }
export const enum EntityCategory { Project = 'project', Document = 'document', Link = 'link', Person = 'person', Other = 'other', Task = 'task', Message = 'message', User = 'user', Owner = 'owner', Event = 'event' }
export const enum GenderIdentity { Other = 'other', PreferNotToSay = 'prefer-not-to-say', Male = 'male', Female = 'female' }
export const enum CommunicationMethod { PushNotification = 'push-notification', InstantMessage = 'instant-message', SocialMedia = 'social-media', VideoCall = 'video-call', Text = 'text', Mail = 'mail', Email = 'email', Phone = 'phone', Sms = 'sms', Other = 'other', InPerson = 'in-person' }
export const enum FinancialTransactionType { ReceiveOverpayment = 'receive-overpayment', Deposit = 'deposit', Withdrawal = 'withdrawal', Transfer = 'transfer', Adjustment = 'adjustment', Other = 'other', Dividend = 'dividend', Payment = 'payment', Charge = 'charge', Spend = 'spend', Sale = 'sale', Refund = 'refund', Chargeback = 'chargeback', Receive = 'receive', ReceivePrepayment = 'receive-prepayment', SpendOverpayment = 'spend-overpayment', SpendPrepayment = 'spend-prepayment', Interest = 'interest', Fee = 'fee' }
export const enum EmailCategoryType { Other = 'other', Promotional = 'promotional', Personal = 'personal', Educational = 'educational', Spam = 'spam', Transactional = 'transactional', Governmental = 'governmental', Business = 'business' }
export const enum UniversalIdentifierType { String = 'string', Email = 'email', Uuid = 'uuid', Number = 'number', Url = 'url' }
export const enum AccessControlModel { Dac = 'dac', Custom = 'custom', Rbac = 'rbac', None = 'none', Mac = 'mac', Abac = 'abac' }
export const enum ParticipantType { Team = 'team', User = 'user', Group = 'group', ExternalParticipant = 'external-participant', Organization = 'organization' }
export const enum PriorityLevel { Medium = 'medium', Low = 'low', Urgent = 'urgent', Elevated = 'elevated', High = 'high' }
export const enum TaskStatus { Blocked = 'blocked', Todo = 'todo', Cancelled = 'cancelled', Done = 'done', OnHold = 'on-hold', InProgress = 'in-progress' }
export const enum UserStatus { Archived = 'archived', WaitListed = 'wait-listed', Suspended = 'suspended', Active = 'active', Banned = 'banned', Deleted = 'deleted', Inactive = 'inactive', Pending = 'pending', Verified = 'verified' }
export const enum PromotionType { FixedAmount = 'fixed-amount', RewardPoints = 'reward-points', Percentage = 'percentage', FreeShipping = 'free-shipping', BuyOneGetOne = 'buy-one-get-one', Other = 'other' }
export const enum MimeType { ImagePng = 'image/png', ImageJpeg = 'image/jpeg', ImageWebp = 'image/webp', ImageSvgXml = 'image/svg+xml', ImageGif = 'image/gif' }
export const enum PrerequisiteRangeType { Subtotal = 'subtotal', Quantity = 'quantity', ShippingPrice = 'shipping-price' }
export const enum TaxType { Additive = 'additive', Variable = 'variable', Inclusive = 'inclusive' }
export const enum ModifierType { List = 'list', Text = 'text' }
export const enum CardType { Debit = 'debit', UnknownCard = 'unknown-card', Credit = 'credit' }
export const enum PrepaidType { Prepaid = 'prepaid', UnknownPrepaid = 'unknown-prepaid', NotPrepaid = 'not-prepaid' }
export const enum EntryMethod { Contactless = 'contactless', Keyed = 'keyed', OnFile = 'on-file', Swiped = 'swiped', Emv = 'emv' }
export const enum CvvStatus { Accepted = 'accepted', Rejected = 'rejected', NotChecked = 'not-checked' }
export const enum AvcStatus { Accepted = 'accepted', Rejected = 'rejected', NotChecked = 'not-checked' }
export const enum CreditType { Goodwill = 'goodwill', Overpayment = 'overpayment', Supplier = 'supplier', Prepayment = 'prepayment', Customer = 'customer' }
export const enum CallDirection { Inbound = 'inbound', Outbound = 'outbound', Conference = 'conference', Unknown = 'unknown' }
export const enum SpeakerRole { Attendee = 'attendee', Invitee = 'invitee' }
export const enum FileType { File = 'file', Folder = 'folder', Url = 'url' }
export const enum AiToolChoiceType { Auto = 'auto', Any = 'any', Tool = 'tool', None = 'none' }
export const enum ImageType { Base64 = 'base64' }
export const enum ResponseFormatType { JsonObject = 'json-object', JsonSchema = 'json-schema', Text = 'text' }
export const enum ToolCallType { Function = 'function' }
export const enum AiMessagesContentType { ToolUse = 'tool-use', Text = 'text', Image = 'image', ToolResult = 'tool-result' }
export const enum AiRole { User = 'user', Tool = 'tool', Assistant = 'assistant' }
export const enum JsonSchemaType { Function = 'function' }
export const enum EventStatus { Tentative = 'tentative', Confirmed = 'confirmed', Cancelled = 'cancelled' }
export const enum EventVisibility { Public = 'public', Private = 'private', Confidential = 'confidential' }
export const enum EventReminderAction { Email = 'email', Popup = 'popup' }
export const enum EventRuleType { ExcludeDates = 'exclude-dates', Repeat = 'repeat', AddDates = 'add-dates', Exclude = 'exclude' }
export const enum EventFrequency { Monthly = 'monthly', Yearly = 'yearly', Daily = 'daily', Weekly = 'weekly' }
