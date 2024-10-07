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
    participants?: Participants[];
    lastMessage?: Messages;
    isPinned?: boolean;
    updatedAt?: string;
    status?: ConversationStatus;
    createdAt?: string;
    isRead?: boolean;
    comments?: Comments[];
    messages?: Messages[];
    type?: ChatType;
    commonModel?: string;
    title?: string;
    unreadCount?: number;
    lastReadMessageId?: string;
    modifyToken?: string;
    metadata?: string;
    id?: string
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
    relationship?: string;
    socialProfiles?: SocialProfiles[];
    code?: string;
    id?: string;
    defaultEmail?: string;
    phones?: Phones[];
    tags?: string[];
    createdAt?: string;
    notes?: Notes;
    emails?: Emails[];
    birthday?: string;
    isActive?: boolean;
    defaultPhone?: string;
    roles?: Roles[];
    customFields?: CustomAttributes[];
    addresses?: Addresses[];
    websites?: string[];
    note?: string;
    lastName?: string;
    company?: string;
    commonModel?: string;
    address?: Addresses;
    firstName?: string;
    updatedAt?: string;
    modifyToken?: string;
    leadId?: string
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
    incorporationCountry?: string;
    incorporationDate?: string;
    taxId?: string;
    reference?: Entity;
    address?: Addresses;
    updatedAt?: string;
    socialProfiles?: SocialProfiles[];
    phones?: Phones[];
    type?: string;
    logo?: string;
    customFields?: CustomAttributes[];
    modifyToken?: string;
    tags?: string[];
    industry?: string;
    foundedDate?: string;
    additionalContacts?: Contacts[];
    name?: string;
    revenueCurrency?: string;
    defaultEmail?: string;
    createdAt?: string;
    companyNumber?: string;
    website?: string;
    domain?: string;
    commonModel?: string;
    id?: string;
    defaultPhone?: string;
    legalName?: string;
    numberOfEmployees?: number;
    revenue?: number;
    emails?: Emails[];
    description?: string;
    parentCompanyId?: string;
    regulatoryStatus?: string;
    dunsNumber?: string
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
export const enum MinimumRequirements { MinimumPurchaseAmount = 'minimum-purchase-amount', MinimumQuantityOfItems = 'minimum-quantity-of-items', None = 'none' }
export const enum AllocationMethod { Across = 'across', Each = 'each' }
export const enum Gender { Other = 'other', PreferNotToSay = 'prefer not to say', Female = 'female', Male = 'male' }
export const enum SkuValidation { None = 'none', GlobalUnique = 'global-unique', LocalUnique = 'local-unique' }
export const enum TargetSelection { All = 'all', Entitled = 'entitled' }
export const enum ChannelAvailability { AllChannels = 'all-channels', Online = 'online', InStore = 'in-store', InApp = 'in-app' }
export const enum ReceiverRoles { Admin = 'admin', Moderator = 'moderator', User = 'user' }
export const enum TargetType { ShippingLine = 'shipping-line', LineItem = 'line-item' }
export const enum TransactionMethod { Online = 'online', Telephone = 'telephone', Mobile = 'mobile', Mail = 'mail', BankBranch = 'bank-branch', Atm = 'atm' }
export const enum CustomerSelection { All = 'all', Prerequisite = 'prerequisite' }
export const enum Format { Xml = 'xml', Json = 'json' }
export const enum Status { Active = 'active', Expired = 'expired', Scheduled = 'scheduled' }
export const enum Roles { User = 'user', Admin = 'admin', Moderator = 'moderator' }
export const enum AppliesTo { SpecificItems = 'specific-items', SpecificCategories = 'specific-categories', AllItems = 'all-items' }
export const enum CustomerEligibility { All = 'all', SpecificCustomers = 'specific-customers', SpecificCustomerGroups = 'specific-customer-groups' }
export const enum AccountType { ExpenseShippingFreightDelivery = 'expense::shipping-freight-delivery', OtherCurrentLiabilityDirectDepositPayable = 'other-current-liability::direct-deposit-payable', AssetOtherFixedAssets = 'asset::other-fixed-assets', RevenueOwnWorkCapitalized = 'revenue::own-work-capitalized', OtherCurrentLiabilityAccruedLiabilities = 'other-current-liability::accrued-liabilities', AssetLongTermInvestments = 'asset::long-term-investments', AssetCashOnHand = 'asset::cash-on-hand', AssetFixedAssetPhotoVideo = 'asset::fixed-asset-photo-video', OtherExpensePenaltiesSettlements = 'other-expense::penalties-settlements', OtherIncomeDividendIncome = 'other-income::dividend-income', LiabilityShareholderNotesPayable = 'liability::shareholder-notes-payable', OtherExpenseRepairsAndMaintenance = 'other-expense::repairs-and-maintenance', OtherIncomeOtherMiscellaneousIncome = 'other-income::other-miscellaneous-income', OtherCurrentLiabilitySundryDebtorsAndCreditors = 'other-current-liability::sundry-debtors-and-creditors', AssetShortTermLoansAndAdvancesToRelatedParties = 'asset::short-term-loans-and-advances-to-related-parties', AssetInternalTransfers = 'asset::internal-transfers', EquityOpeningBalanceEquity = 'equity::opening-balance-equity', RevenueRevenueGeneral = 'revenue::revenue-general', AssetTradeAndOtherReceivables = 'asset::trade-and-other-receivables', AssetOtherIntangibleAssets = 'asset::other-intangible-assets', AssetDevelopmentCosts = 'asset::development-costs', OtherExpenseWashAndRoadServices = 'other-expense::wash-and-road-services', LiabilityOtherLongTermLiabilities = 'liability::other-long-term-liabilities', AssetLeaseBuyout = 'asset::lease-buyout', OtherCurrentLiabilityGlobalTaxSuspense = 'other-current-liability::global-tax-suspense', OtherExpenseDeferredTaxExpense = 'other-expense::deferred-tax-expense', RevenueServiceFeeIncome = 'revenue::service-fee-income', ExpensePurchasesRebates = 'expense::purchases-rebates', AssetPrepaidExpenses = 'asset::prepaid-expenses', LiabilityNotesPayable = 'liability::notes-payable', OtherExpenseExtraordinaryItems = 'other-expense::extraordinary-items', AssetProvisionsFixedAssets = 'asset::provisions-fixed-assets', EquityCalledUpShareCapital = 'equity::called-up-share-capital', AssetAccumulatedAmortization = 'asset::accumulated-amortization', Asset = 'asset', EquityTreasuryStock = 'equity::treasury-stock', OtherCurrentLiabilityPrepaidExpensesPayable = 'other-current-liability::prepaid-expenses-payable', OtherIncome = 'other-income', ExpenseInsurance = 'expense::insurance', AssetInvestments = 'asset::investments', ExpenseCharitableContributions = 'expense::charitable-contributions', CostOfGoodsSoldEquipmentRentalCos = 'cost-of-goods-sold::equipment-rental-cos', AssetFixedAssetPhone = 'asset::fixed-asset-phone', EquityPaidInCapitalOrSurplus = 'equity::paid-in-capital-or-surplus', ExpenseCostOfLabor = 'expense::cost-of-labor', ExpenseLegalProfessionalFees = 'expense::legal-professional-fees', ExpenseShippingAndDeliveryExpense = 'expense::shipping-and-delivery-expense', AssetSecurityDeposits = 'asset::security-deposits', AssetOtherConsumables = 'asset::other-consumables', AssetCashAndCashEquivalents = 'asset::cash-and-cash-equivalents', AssetRetainage = 'asset::retainage', ExpenseOtherRentalCosts = 'expense::other-rental-costs', OtherIncomeTaxExemptInterest = 'other-income::tax-exempt-interest', RevenueDiscountsRefundsGiven = 'revenue::discounts-refunds-given', OtherExpenseOtherVehicleExpenses = 'other-expense::other-vehicle-expenses', AssetCumulativeDepreciationOnIntangibleAssets = 'asset::cumulative-depreciation-on-intangible-assets', RevenueNonProfitIncome = 'revenue::non-profit-income', AssetIntangibleAssetsUnderDevelopment = 'asset::intangible-assets-under-development', AssetLoansToOthers = 'asset::loans-to-others', EquityHealthcare = 'equity::healthcare', AssetAccumulatedDepletion = 'asset::accumulated-depletion', AssetVehicles = 'asset::vehicles', EquityRetainedEarnings = 'equity::retained-earnings', LiabilityAccruedLongTermLiabilities = 'liability::accrued-long-term-liabilities', OtherExpenseHomeOffice = 'other-expense::home-office', OtherExpenseVehicleLease = 'other-expense::vehicle-lease', AssetMachineryAndEquipment = 'asset::machinery-and-equipment', CostOfGoodsSoldSuppliesMaterialsCogs = 'cost-of-goods-sold::supplies-materials-cogs', ExpensePayrollExpenses = 'expense::payroll-expenses', AssetBank = 'asset::bank', AssetAssetsHeldForSale = 'asset::assets-held-for-sale', AssetPrepaymentsAndAccruedIncome = 'asset::prepayments-and-accrued-income', ExpenseBankCharges = 'expense::bank-charges', OtherExpenseIncomeTaxOtherExpense = 'other-expense::income-tax-other-expense', OtherExpense = 'other-expense', OtherExpenseHomeOwnerRentalInsurance = 'other-expense::home-owner-rental-insurance', AssetIntangibleAssets = 'asset::intangible-assets', LiabilityOtherLongTermProvisions = 'liability::other-long-term-provisions', EquityDividendDisbursed = 'equity::dividend-disbursed', OtherCurrentLiabilityCurrentTaxLiability = 'other-current-liability::current-tax-liability', AssetExpenditureAuthorisationsAndLettersOfCredit = 'asset::expenditure-authorisations-and-letters-of-credit', AssetTrustAccounts = 'asset::trust-accounts', ExpenseTravelMeals = 'expense::travel-meals', ExpenseDuesSubscriptions = 'expense::dues-subscriptions', ExpenseOtherCurrentOperatingCharges = 'expense::other-current-operating-charges', ExpenseAdvertisingPromotional = 'expense::advertising-promotional', AssetNonCurrentAssets = 'asset::non-current-assets', ExpenseProjectStudiesSurveysAssessments = 'expense::project-studies-surveys-assessments', AssetDeferredTax = 'asset::deferred-tax', OtherCurrentLiabilityCurrentPortionEmployeeBenefitsObligations = 'other-current-liability::current-portion-employee-benefits-obligations', OtherExpenseVehicleInsurance = 'other-expense::vehicle-insurance', AssetOtherEarMarkedBankAccounts = 'asset::other-ear-marked-bank-accounts', EquityAccumulatedAdjustment = 'equity::accumulated-adjustment', AssetLicenses = 'asset::licenses', AssetFixedAssetCopiers = 'asset::fixed-asset-copiers', OtherCurrentLiabilityDividendsPayable = 'other-current-liability::dividends-payable', LiabilityBankLoans = 'liability::bank-loans', CostOfGoodsSoldOtherCostsOfServiceCos = 'cost-of-goods-sold::other-costs-of-service-cos', LiabilityObligationsUnderFinanceLeases = 'liability::obligations-under-finance-leases', RevenueCashReceiptIncome = 'revenue::cash-receipt-income', OtherExpenseDepletion = 'other-expense::depletion', RevenueSalesRetail = 'revenue::sales-retail', AssetGlobalTaxDeferred = 'asset::global-tax-deferred', AssetParticipatingInterests = 'asset::participating-interests', AssetInventory = 'asset::inventory', OtherCurrentLiabilityOtherCurrentLiabilities = 'other-current-liability::other-current-liabilities', AssetLand = 'asset::land', AssetOtherLongTermInvestments = 'asset::other-long-term-investments', OtherExpenseAmortization = 'other-expense::amortization', OtherIncomeOtherOperatingIncome = 'other-income::other-operating-income', OtherCurrentLiabilityLineOfCredit = 'other-current-liability::line-of-credit', OtherIncomeUnrealisedLossOnSecuritiesNetOfTax = 'other-income::unrealised-loss-on-securities-net-of-tax', EquityOwnersEquity = 'equity::owners-equity', LiabilityLongTermBorrowings = 'liability::long-term-borrowings', AssetBuildings = 'asset::buildings', AssetInvestmentTaxExemptSecurities = 'asset::investment-tax-exempt-securities', OtherCurrentLiabilityProvisionForWarrantyObligations = 'other-current-liability::provision-for-warranty-obligations', OtherExpenseExceptionalItems = 'other-expense::exceptional-items', ExpenseOtherMiscellaneousServiceCost = 'expense::other-miscellaneous-service-cost', ExpenseTravelExpensesSellingExpense = 'expense::travel-expenses-selling-expense', LiabilityGovernmentAndOtherPublicAuthorities = 'liability::government-and-other-public-authorities', AssetAvailableForSaleFinancialAssets = 'asset::available-for-sale-financial-assets', OtherCurrentLiabilityLoanPayable = 'other-current-liability::loan-payable', AssetLandAsset = 'asset::land-asset', ExpenseStaffCosts = 'expense::staff-costs', ExpenseTravel = 'expense::travel', OtherExpensePriorPeriodItems = 'other-expense::prior-period-items', LiabilityStaffAndRelatedLongTermLiabilityAccounts = 'liability::staff-and-related-long-term-liability-accounts', AssetAllowanceForBadDebts = 'asset::allowance-for-bad-debts', ExpenseUnappliedCashBillPaymentExpense = 'expense::unapplied-cash-bill-payment-expense', AssetFixedAsset = 'asset::fixed-asset', AssetAccumulatedDepreciation = 'asset::accumulated-depreciation', ExpenseOfficeGeneralAdministrativeExpenses = 'expense::office-general-administrative-expenses', Expense = 'expense', OtherCurrentLiabilityStateLocalIncomeTaxPayable = 'other-current-liability::state-local-income-tax-payable', Liability = 'liability', ExpenseGlobalTaxExpense = 'expense::global-tax-expense', AssetBalWithGovtAuthorities = 'asset::bal-with-govt-authorities', EquityShareCapital = 'equity::share-capital', AssetUndepositedFunds = 'asset::undeposited-funds', ExpenseAuto = 'expense::auto', AssetInvestmentUsGovernmentObligations = 'asset::investment-us-government-obligations', ExpenseDistributionCosts = 'expense::distribution-costs', LiabilityLongTermEmployeeBenefitObligations = 'liability::long-term-employee-benefit-obligations', AssetInvestmentOther = 'asset::investment-other', AssetFixedAssetFurniture = 'asset::fixed-asset-furniture', AssetEmployeeCashAdvances = 'asset::employee-cash-advances', OtherIncomeInterestEarned = 'other-income::interest-earned', OtherExpenseDepreciation = 'other-expense::depreciation', RevenueSavingsByTaxScheme = 'revenue::savings-by-tax-scheme', AssetRentsHeldInTrust = 'asset::rents-held-in-trust', OtherCurrentLiability = 'other-current-liability', Income = 'income', ExpenseOtherBusinessExpenses = 'expense::other-business-expenses', RevenueOtherPrimaryIncome = 'revenue::other-primary-income', RevenueUnappliedCashPaymentIncome = 'revenue::unapplied-cash-payment-income', LiabilityGroupAndAssociates = 'liability::group-and-associates', Equity = 'equity', AssetCapitalWip = 'asset::capital-wip', OtherCurrentLiabilityPayrollTaxPayable = 'other-current-liability::payroll-tax-payable', OtherIncomeGainLossOnSaleOfInvestments = 'other-income::gain-loss-on-sale-of-investments', OtherExpenseVehicleRepairs = 'other-expense::vehicle-repairs', EquityAccumulatedOtherComprehensiveIncome = 'equity::accumulated-other-comprehensive-income', ExpenseAmortizationExpense = 'expense::amortization-expense', LiabilityProvisionsNonCurrentLiabilities = 'liability::provisions-non-current-liabilities', AssetInvestmentMortgageRealEstateLoans = 'asset::investment-mortgage-real-estate-loans', OtherCurrentLiabilityInterestPayables = 'other-current-liability::interest-payables', LiabilityLongTermDebit = 'liability::long-term-debit', AssetFixedAssetOtherToolsEquipment = 'asset::fixed-asset-other-tools-equipment', LiabilityOutstandingDuesMicroSmallEnterprise = 'liability::outstanding-dues-micro-small-enterprise', OtherExpenseOtherHomeOfficeExpenses = 'other-expense::other-home-office-expenses', AssetChecking = 'asset::checking', AccountsReceivable = 'accounts-receivable', ExpenseFinanceCosts = 'expense::finance-costs', CostOfGoodsSoldCostOfSales = 'cost-of-goods-sold::cost-of-sales', EquityOtherFreeReserves = 'equity::other-free-reserves', CostOfGoodsSoldShippingFreightDeliveryCos = 'cost-of-goods-sold::shipping-freight-delivery-cos', LiabilityAccountsPayable = 'liability::accounts-payable', EquityPartnersEquity = 'equity::partners-equity', ExpenseBorrowingCost = 'expense::borrowing-cost', OtherExpenseUtilities = 'other-expense::utilities', AssetProvisionsNonCurrentAssets = 'asset::provisions-non-current-assets', AssetFixedAssetComputers = 'asset::fixed-asset-computers', ExpenseTravelExpensesGeneralAndAdminExpenses = 'expense::travel-expenses-general-and-admin-expenses', RevenueIncome = 'revenue::income', AssetAssetsAvailableForSale = 'asset::assets-available-for-sale', AssetLoansToStockholders = 'asset::loans-to-stockholders', EquityPersonalIncome = 'equity::personal-income', AssetOrganizationalCosts = 'asset::organizational-costs', OtherCurrentLiabilitySocialSecurityAgencies = 'other-current-liability::social-security-agencies', CostOfGoodsSold = 'cost-of-goods-sold', ExpenseRepairMaintenance = 'expense::repair-maintenance', AssetGoodwill = 'asset::goodwill', LiabilityAccrualsAndDeferredIncome = 'liability::accruals-and-deferred-income', OtherCurrentLiabilityCurrentPortionOfObligationsUnderFinanceLeases = 'other-current-liability::current-portion-of-obligations-under-finance-leases', OtherCurrentLiabilityFederalIncomeTaxPayable = 'other-current-liability::federal-income-tax-payable', ExpenseUtilities = 'expense::utilities', OtherExpenseOtherMiscellaneousExpense = 'other-expense::other-miscellaneous-expense', OtherExpenseVehicle = 'other-expense::vehicle', AssetLeaseholdImprovements = 'asset::leasehold-improvements', OtherIncomeOtherInvestmentIncome = 'other-income::other-investment-income', AssetLoansToOfficers = 'asset::loans-to-officers', OtherCurrentLiabilityRentsInTrustLiability = 'other-current-liability::rents-in-trust-liability', OtherExpenseExchangeGainOrLoss = 'other-expense::exchange-gain-or-loss', EquityCommonStock = 'equity::common-stock', EquityPartnerDistributions = 'equity::partner-distributions', LiabilityLongTermLiability = 'liability::long-term-liability', RevenueOtherCurrentOperatingIncome = 'revenue::other-current-operating-income', EquityInvestmentGrants = 'equity::investment-grants', OtherExpenseMatCredit = 'other-expense::mat-credit', OtherCurrentLiabilityTrustAccountsLiabilities = 'other-current-liability::trust-accounts-liabilities', ExpenseIncomeTaxExpense = 'expense::income-tax-expense', ExpenseSundry = 'expense::sundry', ExpenseLossOnDiscontinuedOperationsNetOfTax = 'expense::loss-on-discontinued-operations-net-of-tax', LiabilityProvisionForLiabilities = 'liability::provision-for-liabilities', AssetMoneyMarket = 'asset::money-market', AssetFixedAssetSoftware = 'asset::fixed-asset-software', EquityEquityInEarningsOfSubsidiuaries = 'equity::equity-in-earnings-of-subsidiuaries', ExpenseEquipmentRental = 'expense::equipment-rental', OtherExpenseMortgageInterest = 'other-expense::mortgage-interest', LiabilityOutstandingDuesOtherThanMicroSmallEnterprise = 'liability::outstanding-dues-other-than-micro-small-enterprise', ExpenseOtherSellingExpenses = 'expense::other-selling-expenses', ExpensePenaltiesSettlements = 'expense::penalties-settlements', LiabilityDebtsRelatedToParticipatingInterests = 'liability::debts-related-to-participating-interests', OtherCurrentLiabilityCurrentLiabilities = 'other-current-liability::current-liabilities', ExpenseEntertainment = 'expense::entertainment', OtherExpenseRentAndLease = 'other-expense::rent-and-lease', ExpenseEntertainmentMeals = 'expense::entertainment-meals', AssetSavings = 'asset::savings', OtherIncomeGainLossOnSaleOfFixedAssets = 'other-income::gain-loss-on-sale-of-fixed-assets', EquityPersonalExpense = 'equity::personal-expense', AssetOtherLongTermAssets = 'asset::other-long-term-assets', AssetProvisionsCurrentAssets = 'asset::provisions-current-assets', CostOfGoodsSoldFreightAndDeliveryCost = 'cost-of-goods-sold::freight-and-delivery-cost', AssetFurnitureAndFixtures = 'asset::furniture-and-fixtures', EquityMoneyReceivedAgainstShareWarrants = 'equity::money-received-against-share-warrants', ExpenseOfficeExpenses = 'expense::office-expenses', ExpenseSuppliesMaterials = 'expense::supplies-materials', LiabilityDeferredTaxLiabilities = 'liability::deferred-tax-liabilities', LiabilityLiabilitiesRelatedToAssetsHeldForSale = 'liability::liabilities-related-to-assets-held-for-sale', EquityPartnerContributions = 'equity::partner-contributions', OtherCurrentLiabilityTradeAndOtherPayables = 'other-current-liability::trade-and-other-payables', OtherExpenseVehicleLoanInterest = 'other-expense::vehicle-loan-interest', EquityPreferredStock = 'equity::preferred-stock', AssetOtherCurrentAsset = 'asset::other-current-asset', OtherCurrentLiabilityPayrollClearing = 'other-current-liability::payroll-clearing', AssetCalledUpShareCapitalNotPaid = 'asset::called-up-share-capital-not-paid', ExpenseInterestPaid = 'expense::interest-paid', OtherCurrentLiabilityStaffAndRelatedLiabilityAccounts = 'other-current-liability::staff-and-related-liability-accounts', AssetLongTermLoansAndAdvancesToRelatedParties = 'asset::long-term-loans-and-advances-to-related-parties', AssetShortTermInvestmentsInRelatedParties = 'asset::short-term-investments-in-related-parties', ExpenseExternalServices = 'expense::external-services', LiabilityAccruedVacationPayable = 'liability::accrued-vacation-payable', OtherCurrentLiabilityGlobalTaxPayable = 'other-current-liability::global-tax-payable', OtherCurrentLiabilityShortTermBorrowings = 'other-current-liability::short-term-borrowings', OtherExpenseGasAndFuel = 'other-expense::gas-and-fuel', ExpenseBadDebts = 'expense::bad-debts', AssetAssetsInCourseOfConstruction = 'asset::assets-in-course-of-construction', CostOfGoodsSoldCostOfLaborCos = 'cost-of-goods-sold::cost-of-labor-cos', ExpenseCommissionsAndFees = 'expense::commissions-and-fees', EquityShareApplicationMoneyPendingAllotment = 'equity::share-application-money-pending-allotment', AssetGlobalTaxRefund = 'asset::global-tax-refund', AssetOtherAsset = 'asset::other-asset', OtherCurrentLiabilityProvisionsCurrentLiabilities = 'other-current-liability::provisions-current-liabilities', OtherExpenseTaxRoundoffGainOrLoss = 'other-expense::tax-roundoff-gain-or-loss', OtherExpenseVehicleLoan = 'other-expense::vehicle-loan', OtherExpenseVehicleRegistration = 'other-expense::vehicle-registration', AssetAccumulatedAmortizationOfOtherAssets = 'asset::accumulated-amortization-of-other-assets', RevenueOperatingGrants = 'revenue::operating-grants', OtherCurrentLiabilityInsurancePayable = 'other-current-liability::insurance-payable', ExpensePromotionalMeals = 'expense::promotional-meals', ExpenseOtherExternalServices = 'expense::other-external-services', OtherCurrentLiabilitySalesTaxPayable = 'other-current-liability::sales-tax-payable', AssetDepletableAssets = 'asset::depletable-assets', EquityEstimatedTaxes = 'equity::estimated-taxes', ExpenseManagementCompensation = 'expense::management-compensation', ExpenseRentOrLeaseOfBuildings = 'expense::rent-or-lease-of-buildings', ExpenseTaxesPaid = 'expense::taxes-paid', LiabilityCreditCard = 'liability::credit-card', OtherExpenseParkingAndTolls = 'other-expense::parking-and-tolls', EquityCapitalReserves = 'equity::capital-reserves', OtherCurrentLiabilityDutiesAndTaxes = 'other-current-liability::duties-and-taxes', RevenueSalesOfProductIncome = 'revenue::sales-of-product-income', ExpenseAppropriationsToDepreciation = 'expense::appropriations-to-depreciation', ExpenseExtraordinaryCharges = 'expense::extraordinary-charges', RevenueSalesWholesale = 'revenue::sales-wholesale', AssetOtherCurrentAssets = 'asset::other-current-assets', OtherIncomeLossOnDisposalOfAssets = 'other-income::loss-on-disposal-of-assets', EquityFunds = 'equity::funds', AssetOtherLongTermLoansAndAdvances = 'asset::other-long-term-loans-and-advances' }
export const enum Country { Afghanistan = 'afghanistan', DominicanRepublic = 'dominican-republic', AntiguaAndBarbuda = 'antigua-and-barbuda', Namibia = 'namibia', Netherlands = 'netherlands', CoteDIvoire = 'cote-d-ivoire', Mauritania = 'mauritania', Botswana = 'botswana', Pakistan = 'pakistan', Palestine = 'palestine', Nepal = 'nepal', Panama = 'panama', SaintLucia = 'saint-lucia', Djibouti = 'djibouti', India = 'india', Indonesia = 'indonesia', Iraq = 'iraq', Rwanda = 'rwanda', Senegal = 'senegal', SriLanka = 'sri-lanka', CentralAfricanRepublic = 'central-african-republic', TrinidadAndTobago = 'trinidad-and-tobago', Turkmenistan = 'turkmenistan', Ukraine = 'ukraine', Venezuela = 'venezuela', CostaRica = 'costa-rica', Fiji = 'fiji', Malawi = 'malawi', Zimbabwe = 'zimbabwe', SierraLeone = 'sierra-leone', NewZealand = 'new-zealand', Brazil = 'brazil', Malaysia = 'malaysia', Ireland = 'ireland', Sweden = 'sweden', Taiwan = 'taiwan', TimorLeste = 'timor-leste', France = 'france', MarshallIslands = 'marshall-islands', Togo = 'togo', Lebanon = 'lebanon', Liberia = 'liberia', Argentina = 'argentina', Guinea = 'guinea', Azerbaijan = 'azerbaijan', Peru = 'peru', Uruguay = 'uruguay', Bangladesh = 'bangladesh', CaboVerde = 'cabo-verde', Ecuador = 'ecuador', Algeria = 'algeria', GuineaBissau = 'guinea-bissau', Kiribati = 'kiribati', VaticanCity = 'vatican-city', Dominica = 'dominica', SouthAfrica = 'south-africa', Israel = 'israel', Guatemala = 'guatemala', Liechtenstein = 'liechtenstein', Mauritius = 'mauritius', Philippines = 'philippines', Qatar = 'qatar', Ethiopia = 'ethiopia', Jamaica = 'jamaica', Zambia = 'zambia', Moldova = 'moldova', Nauru = 'nauru', SaoTomeAndPrincipe = 'sao-tome-and-principe', Vietnam = 'vietnam', Mongolia = 'mongolia', Egypt = 'egypt', CongoDemocraticRepublic = 'congo-democratic-republic', Nigeria = 'nigeria', Turkey = 'turkey', Haiti = 'haiti', Vanuatu = 'vanuatu', Honduras = 'honduras', Mexico = 'mexico', Syria = 'syria', Albania = 'albania', Japan = 'japan', Hungary = 'hungary', Kuwait = 'kuwait', SolomonIslands = 'solomon-islands', Austria = 'austria', UnitedStates = 'united-states', NorthKorea = 'north-korea', Singapore = 'singapore', SanMarino = 'san-marino', Greece = 'greece', Nicaragua = 'nicaragua', Bahamas = 'bahamas', Palau = 'palau', Iran = 'iran', Cameroon = 'cameroon', Eritrea = 'eritrea', Seychelles = 'seychelles', Italy = 'italy', Belarus = 'belarus', Bolivia = 'bolivia', Bulgaria = 'bulgaria', Morocco = 'morocco', Romania = 'romania', Kyrgyzstan = 'kyrgyzstan', Malta = 'malta', Norway = 'norway', PapuaNewGuinea = 'papua-new-guinea', SaudiArabia = 'saudi-arabia', Spain = 'spain', Tonga = 'tonga', Colombia = 'colombia', Poland = 'poland', Thailand = 'thailand', Latvia = 'latvia', Cuba = 'cuba', Suriname = 'suriname', UnitedArabEmirates = 'united-arab-emirates', Iceland = 'iceland', NorthMacedonia = 'north-macedonia', Uganda = 'uganda', Mozambique = 'mozambique', Yemen = 'yemen', Belgium = 'belgium', SaintVincentAndTheGrenadines = 'saint-vincent-and-the-grenadines', Angola = 'angola', Somalia = 'somalia', Libya = 'libya', Tuvalu = 'tuvalu', Uzbekistan = 'uzbekistan', ElSalvador = 'el-salvador', Andorra = 'andorra', Gabon = 'gabon', Slovakia = 'slovakia', Montenegro = 'montenegro', Serbia = 'serbia', SouthKorea = 'south-korea', Armenia = 'armenia', Switzerland = 'switzerland', CongoRepublic = 'congo-republic', Croatia = 'croatia', Estonia = 'estonia', Cyprus = 'cyprus', Burundi = 'burundi', Micronesia = 'micronesia', Bahrain = 'bahrain', CzechRepublic = 'czech-republic', Samoa = 'samoa', Mali = 'mali', Kazakhstan = 'kazakhstan', Bhutan = 'bhutan', Lithuania = 'lithuania', Russia = 'russia', Australia = 'australia', SaintKittsAndNevis = 'saint-kitts-and-nevis', Canada = 'canada', Monaco = 'monaco', Cambodia = 'cambodia', Benin = 'benin', Kenya = 'kenya', Chad = 'chad', Laos = 'laos', Guyana = 'guyana', Georgia = 'georgia', Comoros = 'comoros', UnitedKingdom = 'united-kingdom', Lesotho = 'lesotho', Tajikistan = 'tajikistan', Barbados = 'barbados', Brunei = 'brunei', Madagascar = 'madagascar', Paraguay = 'paraguay', Gambia = 'gambia', Jordan = 'jordan', BurkinaFaso = 'burkina-faso', Tunisia = 'tunisia', Slovenia = 'slovenia', China = 'china', SouthSudan = 'south-sudan', Belize = 'belize', Niger = 'niger', Portugal = 'portugal', Denmark = 'denmark', Eswatini = 'eswatini', Ghana = 'ghana', Maldives = 'maldives', Sudan = 'sudan', Tanzania = 'tanzania', EquatorialGuinea = 'equatorial-guinea', Chile = 'chile', Germany = 'germany', Grenada = 'grenada', Myanmar = 'myanmar', BosniaAndHerzegovina = 'bosnia-and-herzegovina', Oman = 'oman', Finland = 'finland', Luxembourg = 'luxembourg' }
export const enum GlobalTaxType { CustomsDuty = 'customs-duty', PropertyTax = 'property-tax', ExciseTax = 'excise-tax', Gst = 'gst', SalesTax = 'sales-tax', Other = 'other', Vat = 'vat' }
export const enum JournalEntryStatus { Draft = 'draft', Pending = 'pending', Voided = 'voided', Error = 'error', Corrected = 'corrected', Posted = 'posted' }
export const enum IdentityProvider { Whatsapp = 'whatsapp', Signal = 'signal', Qq = 'qq', Line = 'line', Other = 'other', Paypal = 'paypal', Foursquare = 'foursquare', Github = 'github', Yahoo = 'yahoo', Google = 'google', Telegram = 'telegram', Discord = 'discord', Pinterest = 'pinterest', Tiktok = 'tiktok', Vimeo = 'vimeo', Wechat = 'wechat', Tumblr = 'tumblr', Amazon = 'amazon', Behance = 'behance', Microsoft = 'microsoft', Dribbble = 'dribbble', Reddit = 'reddit', Facebook = 'facebook', Linkedin = 'linkedin', Twitter = 'twitter', Snapchat = 'snapchat', Slack = 'slack', Apple = 'apple', Instagram = 'instagram', Flickr = 'flickr' }
export const enum DayOfWeek { Tuesday = 'tuesday', Saturday = 'saturday', Friday = 'friday', Sunday = 'sunday', Monday = 'monday', Wednesday = 'wednesday', Thursday = 'thursday' }
export const enum AccountEngagementLevel { Unknown = 'unknown', Cold = 'cold', Warm = 'warm', Hot = 'hot' }
export const enum ReviewApprovalStatus { Revised = 'revised', Pending = 'pending', InReview = 'in-review', Approved = 'approved', Rejected = 'rejected' }
export const enum StakeholderType { Customer = 'customer', Other = 'other', Competitor = 'competitor', Partner = 'partner', Investor = 'investor', Vendor = 'vendor' }
export const enum AccountStatus { Pending = 'pending', Suspended = 'suspended', Active = 'active', Inactive = 'inactive', Closed = 'closed' }
export const enum CampaignStatus { Draft = 'draft', Scheduled = 'scheduled', Completed = 'completed', Archived = 'archived', Cancelled = 'cancelled', Paused = 'paused', Planned = 'planned', Active = 'active' }
export const enum CustomerType { Online = 'online', B2b = 'b2b', B2c = 'b2c', Wholesale = 'wholesale', Retail = 'retail', Corporate = 'corporate' }
export const enum AccountingAccountType { AssetSecurityDeposits = 'asset::security-deposits', EquityShareCapital = 'equity::share-capital', CostOfGoodsSoldShippingFreightDeliveryCos = 'cost-of-goods-sold::shipping-freight-delivery-cos', LiabilityProvisionForLiabilities = 'liability::provision-for-liabilities', EquityHealthcare = 'equity::healthcare', OtherCurrentLiabilityProvisionsCurrentLiabilities = 'other-current-liability::provisions-current-liabilities', AssetInvestments = 'asset::investments', ExpenseProjectStudiesSurveysAssessments = 'expense::project-studies-surveys-assessments', AssetOtherLongTermInvestments = 'asset::other-long-term-investments', AssetLeaseBuyout = 'asset::lease-buyout', AssetMoneyMarket = 'asset::money-market', ExpenseTravelMeals = 'expense::travel-meals', ExpenseEntertainment = 'expense::entertainment', OtherExpenseExchangeGainOrLoss = 'other-expense::exchange-gain-or-loss', AssetChecking = 'asset::checking', AssetCashAndCashEquivalents = 'asset::cash-and-cash-equivalents', OtherCurrentLiabilityRentsInTrustLiability = 'other-current-liability::rents-in-trust-liability', EquityPartnerContributions = 'equity::partner-contributions', RevenueIncome = 'revenue::income', OtherExpenseOtherMiscellaneousExpense = 'other-expense::other-miscellaneous-expense', OtherExpenseOtherVehicleExpenses = 'other-expense::other-vehicle-expenses', OtherIncomeUnrealisedLossOnSecuritiesNetOfTax = 'other-income::unrealised-loss-on-securities-net-of-tax', ExpenseIncomeTaxExpense = 'expense::income-tax-expense', OtherExpenseIncomeTaxOtherExpense = 'other-expense::income-tax-other-expense', AssetAvailableForSaleFinancialAssets = 'asset::available-for-sale-financial-assets', ExpenseOtherBusinessExpenses = 'expense::other-business-expenses', EquityPartnerDistributions = 'equity::partner-distributions', ExpenseDuesSubscriptions = 'expense::dues-subscriptions', AssetMachineryAndEquipment = 'asset::machinery-and-equipment', ExpenseExternalServices = 'expense::external-services', OtherExpenseVehicleLease = 'other-expense::vehicle-lease', OtherExpenseVehicleRepairs = 'other-expense::vehicle-repairs', AssetOtherConsumables = 'asset::other-consumables', ExpenseInterestPaid = 'expense::interest-paid', OtherCurrentLiabilityAccruedLiabilities = 'other-current-liability::accrued-liabilities', AssetLand = 'asset::land', ExpensePromotionalMeals = 'expense::promotional-meals', AssetCalledUpShareCapitalNotPaid = 'asset::called-up-share-capital-not-paid', ExpenseStaffCosts = 'expense::staff-costs', RevenueUnappliedCashPaymentIncome = 'revenue::unapplied-cash-payment-income', ExpensePurchasesRebates = 'expense::purchases-rebates', OtherExpenseVehicleLoan = 'other-expense::vehicle-loan', LiabilityOutstandingDuesOtherThanMicroSmallEnterprise = 'liability::outstanding-dues-other-than-micro-small-enterprise', OtherExpenseHomeOffice = 'other-expense::home-office', AssetInternalTransfers = 'asset::internal-transfers', OtherCurrentLiabilityStaffAndRelatedLiabilityAccounts = 'other-current-liability::staff-and-related-liability-accounts', OtherIncomeOtherInvestmentIncome = 'other-income::other-investment-income', ExpenseOtherExternalServices = 'expense::other-external-services', ExpenseTravelExpensesGeneralAndAdminExpenses = 'expense::travel-expenses-general-and-admin-expenses', EquityOpeningBalanceEquity = 'equity::opening-balance-equity', AssetSavings = 'asset::savings', AssetIntangibleAssets = 'asset::intangible-assets', OtherExpenseMatCredit = 'other-expense::mat-credit', OtherCurrentLiabilityInterestPayables = 'other-current-liability::interest-payables', AssetPrepaidExpenses = 'asset::prepaid-expenses', Asset = 'asset', ExpenseRepairMaintenance = 'expense::repair-maintenance', OtherIncomeOtherMiscellaneousIncome = 'other-income::other-miscellaneous-income', AssetOtherFixedAssets = 'asset::other-fixed-assets', AssetAssetsAvailableForSale = 'asset::assets-available-for-sale', ExpenseFinanceCosts = 'expense::finance-costs', OtherCurrentLiabilityTrustAccountsLiabilities = 'other-current-liability::trust-accounts-liabilities', AssetFixedAssetComputers = 'asset::fixed-asset-computers', AssetIntangibleAssetsUnderDevelopment = 'asset::intangible-assets-under-development', OtherCurrentLiabilityTradeAndOtherPayables = 'other-current-liability::trade-and-other-payables', OtherExpenseVehicleRegistration = 'other-expense::vehicle-registration', RevenueOtherCurrentOperatingIncome = 'revenue::other-current-operating-income', AssetAccumulatedAmortizationOfOtherAssets = 'asset::accumulated-amortization-of-other-assets', AssetFixedAssetOtherToolsEquipment = 'asset::fixed-asset-other-tools-equipment', ExpenseEntertainmentMeals = 'expense::entertainment-meals', ExpenseLegalProfessionalFees = 'expense::legal-professional-fees', RevenueNonProfitIncome = 'revenue::non-profit-income', AssetFixedAsset = 'asset::fixed-asset', LiabilityGroupAndAssociates = 'liability::group-and-associates', OtherExpenseGasAndFuel = 'other-expense::gas-and-fuel', AssetFixedAssetPhone = 'asset::fixed-asset-phone', OtherCurrentLiabilityPayrollClearing = 'other-current-liability::payroll-clearing', AssetUndepositedFunds = 'asset::undeposited-funds', AssetFurnitureAndFixtures = 'asset::furniture-and-fixtures', ExpenseTaxesPaid = 'expense::taxes-paid', AssetAllowanceForBadDebts = 'asset::allowance-for-bad-debts', AssetEmployeeCashAdvances = 'asset::employee-cash-advances', ExpenseSundry = 'expense::sundry', RevenueSalesOfProductIncome = 'revenue::sales-of-product-income', OtherIncome = 'other-income', AccountsReceivable = 'accounts-receivable', ExpenseCommissionsAndFees = 'expense::commissions-and-fees', ExpenseAmortizationExpense = 'expense::amortization-expense', OtherCurrentLiabilityPayrollTaxPayable = 'other-current-liability::payroll-tax-payable', AssetParticipatingInterests = 'asset::participating-interests', EquityShareApplicationMoneyPendingAllotment = 'equity::share-application-money-pending-allotment', OtherCurrentLiabilityLineOfCredit = 'other-current-liability::line-of-credit', AssetOrganizationalCosts = 'asset::organizational-costs', OtherCurrentLiabilityProvisionForWarrantyObligations = 'other-current-liability::provision-for-warranty-obligations', OtherIncomeGainLossOnSaleOfInvestments = 'other-income::gain-loss-on-sale-of-investments', AssetLongTermInvestments = 'asset::long-term-investments', AssetAccumulatedDepreciation = 'asset::accumulated-depreciation', AssetRentsHeldInTrust = 'asset::rents-held-in-trust', Expense = 'expense', ExpenseAppropriationsToDepreciation = 'expense::appropriations-to-depreciation', AssetInvestmentUsGovernmentObligations = 'asset::investment-us-government-obligations', EquityTreasuryStock = 'equity::treasury-stock', LiabilityOutstandingDuesMicroSmallEnterprise = 'liability::outstanding-dues-micro-small-enterprise', AssetLeaseholdImprovements = 'asset::leasehold-improvements', ExpenseOtherRentalCosts = 'expense::other-rental-costs', OtherCurrentLiabilityCurrentLiabilities = 'other-current-liability::current-liabilities', ExpenseBankCharges = 'expense::bank-charges', EquityMoneyReceivedAgainstShareWarrants = 'equity::money-received-against-share-warrants', EquityAccumulatedOtherComprehensiveIncome = 'equity::accumulated-other-comprehensive-income', LiabilityLongTermDebit = 'liability::long-term-debit', RevenueRevenueGeneral = 'revenue::revenue-general', AssetFixedAssetFurniture = 'asset::fixed-asset-furniture', AssetAccumulatedDepletion = 'asset::accumulated-depletion', AssetOtherCurrentAssets = 'asset::other-current-assets', OtherCurrentLiabilityGlobalTaxPayable = 'other-current-liability::global-tax-payable', LiabilityLongTermLiability = 'liability::long-term-liability', OtherIncomeTaxExemptInterest = 'other-income::tax-exempt-interest', AssetDeferredTax = 'asset::deferred-tax', AssetFixedAssetCopiers = 'asset::fixed-asset-copiers', EquityRetainedEarnings = 'equity::retained-earnings', AssetBank = 'asset::bank', ExpenseShippingAndDeliveryExpense = 'expense::shipping-and-delivery-expense', AssetOtherLongTermAssets = 'asset::other-long-term-assets', EquityInvestmentGrants = 'equity::investment-grants', OtherExpenseExceptionalItems = 'other-expense::exceptional-items', AssetProvisionsFixedAssets = 'asset::provisions-fixed-assets', OtherExpenseExtraordinaryItems = 'other-expense::extraordinary-items', ExpenseRentOrLeaseOfBuildings = 'expense::rent-or-lease-of-buildings', LiabilityOtherLongTermLiabilities = 'liability::other-long-term-liabilities', OtherCurrentLiabilitySocialSecurityAgencies = 'other-current-liability::social-security-agencies', OtherCurrentLiabilityInsurancePayable = 'other-current-liability::insurance-payable', RevenueOperatingGrants = 'revenue::operating-grants', ExpenseOfficeExpenses = 'expense::office-expenses', LiabilityAccountsPayable = 'liability::accounts-payable', ExpensePayrollExpenses = 'expense::payroll-expenses', ExpenseUnappliedCashBillPaymentExpense = 'expense::unapplied-cash-bill-payment-expense', OtherExpenseAmortization = 'other-expense::amortization', AssetLoansToOfficers = 'asset::loans-to-officers', AssetGoodwill = 'asset::goodwill', EquityCapitalReserves = 'equity::capital-reserves', LiabilityProvisionsNonCurrentLiabilities = 'liability::provisions-non-current-liabilities', OtherCurrentLiabilityCurrentTaxLiability = 'other-current-liability::current-tax-liability', AssetOtherEarMarkedBankAccounts = 'asset::other-ear-marked-bank-accounts', ExpenseAdvertisingPromotional = 'expense::advertising-promotional', RevenueSalesWholesale = 'revenue::sales-wholesale', ExpenseUtilities = 'expense::utilities', LiabilityLiabilitiesRelatedToAssetsHeldForSale = 'liability::liabilities-related-to-assets-held-for-sale', AssetPrepaymentsAndAccruedIncome = 'asset::prepayments-and-accrued-income', AssetBuildings = 'asset::buildings', EquityDividendDisbursed = 'equity::dividend-disbursed', OtherExpensePriorPeriodItems = 'other-expense::prior-period-items', OtherExpenseParkingAndTolls = 'other-expense::parking-and-tolls', OtherIncomeLossOnDisposalOfAssets = 'other-income::loss-on-disposal-of-assets', AssetProvisionsNonCurrentAssets = 'asset::provisions-non-current-assets', OtherExpenseHomeOwnerRentalInsurance = 'other-expense::home-owner-rental-insurance', AssetInvestmentMortgageRealEstateLoans = 'asset::investment-mortgage-real-estate-loans', AssetOtherIntangibleAssets = 'asset::other-intangible-assets', EquityPartnersEquity = 'equity::partners-equity', CostOfGoodsSoldEquipmentRentalCos = 'cost-of-goods-sold::equipment-rental-cos', LiabilityGovernmentAndOtherPublicAuthorities = 'liability::government-and-other-public-authorities', OtherCurrentLiabilityGlobalTaxSuspense = 'other-current-liability::global-tax-suspense', AssetTrustAccounts = 'asset::trust-accounts', RevenueOwnWorkCapitalized = 'revenue::own-work-capitalized', OtherIncomeInterestEarned = 'other-income::interest-earned', OtherExpenseWashAndRoadServices = 'other-expense::wash-and-road-services', AssetLandAsset = 'asset::land-asset', AssetAssetsInCourseOfConstruction = 'asset::assets-in-course-of-construction', AssetVehicles = 'asset::vehicles', OtherExpenseOtherHomeOfficeExpenses = 'other-expense::other-home-office-expenses', ExpenseSuppliesMaterials = 'expense::supplies-materials', OtherExpenseDeferredTaxExpense = 'other-expense::deferred-tax-expense', OtherCurrentLiabilityCurrentPortionOfObligationsUnderFinanceLeases = 'other-current-liability::current-portion-of-obligations-under-finance-leases', OtherCurrentLiabilityPrepaidExpensesPayable = 'other-current-liability::prepaid-expenses-payable', RevenueSalesRetail = 'revenue::sales-retail', CostOfGoodsSold = 'cost-of-goods-sold', EquityFunds = 'equity::funds', OtherExpenseDepreciation = 'other-expense::depreciation', AssetProvisionsCurrentAssets = 'asset::provisions-current-assets', LiabilityStaffAndRelatedLongTermLiabilityAccounts = 'liability::staff-and-related-long-term-liability-accounts', AssetInvestmentTaxExemptSecurities = 'asset::investment-tax-exempt-securities', OtherExpenseUtilities = 'other-expense::utilities', AssetCapitalWip = 'asset::capital-wip', LiabilityShareholderNotesPayable = 'liability::shareholder-notes-payable', ExpenseOtherMiscellaneousServiceCost = 'expense::other-miscellaneous-service-cost', ExpenseCharitableContributions = 'expense::charitable-contributions', CostOfGoodsSoldCostOfLaborCos = 'cost-of-goods-sold::cost-of-labor-cos', OtherCurrentLiabilitySundryDebtorsAndCreditors = 'other-current-liability::sundry-debtors-and-creditors', AssetInventory = 'asset::inventory', AssetLicenses = 'asset::licenses', OtherIncomeGainLossOnSaleOfFixedAssets = 'other-income::gain-loss-on-sale-of-fixed-assets', ExpenseGlobalTaxExpense = 'expense::global-tax-expense', AssetOtherCurrentAsset = 'asset::other-current-asset', OtherExpensePenaltiesSettlements = 'other-expense::penalties-settlements', OtherCurrentLiabilityDirectDepositPayable = 'other-current-liability::direct-deposit-payable', ExpenseEquipmentRental = 'expense::equipment-rental', CostOfGoodsSoldSuppliesMaterialsCogs = 'cost-of-goods-sold::supplies-materials-cogs', OtherCurrentLiabilityDutiesAndTaxes = 'other-current-liability::duties-and-taxes', RevenueDiscountsRefundsGiven = 'revenue::discounts-refunds-given', OtherExpenseVehicleInsurance = 'other-expense::vehicle-insurance', EquityPersonalExpense = 'equity::personal-expense', OtherCurrentLiabilityStateLocalIncomeTaxPayable = 'other-current-liability::state-local-income-tax-payable', AssetAssetsHeldForSale = 'asset::assets-held-for-sale', EquityOwnersEquity = 'equity::owners-equity', AssetLoansToStockholders = 'asset::loans-to-stockholders', ExpenseBadDebts = 'expense::bad-debts', LiabilityDebtsRelatedToParticipatingInterests = 'liability::debts-related-to-participating-interests', LiabilityAccruedLongTermLiabilities = 'liability::accrued-long-term-liabilities', LiabilityLongTermEmployeeBenefitObligations = 'liability::long-term-employee-benefit-obligations', LiabilityDeferredTaxLiabilities = 'liability::deferred-tax-liabilities', EquityPreferredStock = 'equity::preferred-stock', ExpenseTravel = 'expense::travel', ExpenseOtherCurrentOperatingCharges = 'expense::other-current-operating-charges', AssetCashOnHand = 'asset::cash-on-hand', OtherCurrentLiabilityCurrentPortionEmployeeBenefitsObligations = 'other-current-liability::current-portion-employee-benefits-obligations', ExpenseBorrowingCost = 'expense::borrowing-cost', ExpenseManagementCompensation = 'expense::management-compensation', OtherExpenseVehicle = 'other-expense::vehicle', OtherCurrentLiabilityDividendsPayable = 'other-current-liability::dividends-payable', LiabilityObligationsUnderFinanceLeases = 'liability::obligations-under-finance-leases', ExpenseCostOfLabor = 'expense::cost-of-labor', AssetFixedAssetPhotoVideo = 'asset::fixed-asset-photo-video', LiabilityAccrualsAndDeferredIncome = 'liability::accruals-and-deferred-income', AssetLoansToOthers = 'asset::loans-to-others', AssetInvestmentOther = 'asset::investment-other', EquityOtherFreeReserves = 'equity::other-free-reserves', AssetGlobalTaxRefund = 'asset::global-tax-refund', ExpenseLossOnDiscontinuedOperationsNetOfTax = 'expense::loss-on-discontinued-operations-net-of-tax', OtherCurrentLiability = 'other-current-liability', ExpenseShippingFreightDelivery = 'expense::shipping-freight-delivery', OtherCurrentLiabilityShortTermBorrowings = 'other-current-liability::short-term-borrowings', AssetOtherAsset = 'asset::other-asset', Equity = 'equity', RevenueOtherPrimaryIncome = 'revenue::other-primary-income', AssetOtherLongTermLoansAndAdvances = 'asset::other-long-term-loans-and-advances', EquityEstimatedTaxes = 'equity::estimated-taxes', AssetAccumulatedAmortization = 'asset::accumulated-amortization', ExpenseInsurance = 'expense::insurance', OtherExpenseRepairsAndMaintenance = 'other-expense::repairs-and-maintenance', RevenueSavingsByTaxScheme = 'revenue::savings-by-tax-scheme', AssetBalWithGovtAuthorities = 'asset::bal-with-govt-authorities', OtherIncomeOtherOperatingIncome = 'other-income::other-operating-income', AssetNonCurrentAssets = 'asset::non-current-assets', OtherExpenseDepletion = 'other-expense::depletion', AssetDevelopmentCosts = 'asset::development-costs', ExpenseDistributionCosts = 'expense::distribution-costs', LiabilityOtherLongTermProvisions = 'liability::other-long-term-provisions', AssetExpenditureAuthorisationsAndLettersOfCredit = 'asset::expenditure-authorisations-and-letters-of-credit', EquityCalledUpShareCapital = 'equity::called-up-share-capital', OtherExpenseMortgageInterest = 'other-expense::mortgage-interest', ExpenseOtherSellingExpenses = 'expense::other-selling-expenses', EquityPaidInCapitalOrSurplus = 'equity::paid-in-capital-or-surplus', OtherCurrentLiabilityOtherCurrentLiabilities = 'other-current-liability::other-current-liabilities', OtherCurrentLiabilityFederalIncomeTaxPayable = 'other-current-liability::federal-income-tax-payable', AssetGlobalTaxDeferred = 'asset::global-tax-deferred', LiabilityBankLoans = 'liability::bank-loans', AssetShortTermLoansAndAdvancesToRelatedParties = 'asset::short-term-loans-and-advances-to-related-parties', AssetLongTermLoansAndAdvancesToRelatedParties = 'asset::long-term-loans-and-advances-to-related-parties', ExpenseAuto = 'expense::auto', OtherExpense = 'other-expense', AssetShortTermInvestmentsInRelatedParties = 'asset::short-term-investments-in-related-parties', ExpenseTravelExpensesSellingExpense = 'expense::travel-expenses-selling-expense', ExpenseOfficeGeneralAdministrativeExpenses = 'expense::office-general-administrative-expenses', CostOfGoodsSoldFreightAndDeliveryCost = 'cost-of-goods-sold::freight-and-delivery-cost', LiabilityCreditCard = 'liability::credit-card', RevenueCashReceiptIncome = 'revenue::cash-receipt-income', OtherExpenseTaxRoundoffGainOrLoss = 'other-expense::tax-roundoff-gain-or-loss', EquityAccumulatedAdjustment = 'equity::accumulated-adjustment', CostOfGoodsSoldCostOfSales = 'cost-of-goods-sold::cost-of-sales', OtherIncomeDividendIncome = 'other-income::dividend-income', EquityPersonalIncome = 'equity::personal-income', AssetFixedAssetSoftware = 'asset::fixed-asset-software', AssetRetainage = 'asset::retainage', LiabilityAccruedVacationPayable = 'liability::accrued-vacation-payable', OtherCurrentLiabilityLoanPayable = 'other-current-liability::loan-payable', RevenueServiceFeeIncome = 'revenue::service-fee-income', EquityCommonStock = 'equity::common-stock', OtherExpenseVehicleLoanInterest = 'other-expense::vehicle-loan-interest', AssetDepletableAssets = 'asset::depletable-assets', CostOfGoodsSoldOtherCostsOfServiceCos = 'cost-of-goods-sold::other-costs-of-service-cos', LiabilityLongTermBorrowings = 'liability::long-term-borrowings', EquityEquityInEarningsOfSubsidiuaries = 'equity::equity-in-earnings-of-subsidiuaries', AssetCumulativeDepreciationOnIntangibleAssets = 'asset::cumulative-depreciation-on-intangible-assets', ExpenseExtraordinaryCharges = 'expense::extraordinary-charges', AssetTradeAndOtherReceivables = 'asset::trade-and-other-receivables', OtherExpenseRentAndLease = 'other-expense::rent-and-lease', LiabilityNotesPayable = 'liability::notes-payable', OtherCurrentLiabilitySalesTaxPayable = 'other-current-liability::sales-tax-payable' }
export const enum MessageReadStatus { Unsent = 'unsent', Delivered = 'delivered', Failed = 'failed', Sent = 'sent', Read = 'read' }
export const enum MessageContentType { Link = 'link', Html = 'html', Location = 'location', Contact = 'contact', Audio = 'audio', Document = 'document', File = 'file', Text = 'text', Image = 'image', Sticker = 'sticker', Gif = 'gif', Video = 'video', Voice = 'voice' }
export const enum MessageDeliveryStatus { Undeliverable = 'undeliverable', Pending = 'pending', Delivered = 'delivered', Error = 'error', Sent = 'sent', Read = 'read', Failed = 'failed' }
export const enum ReactionType { Like = 'like', Laugh = 'laugh', Angry = 'angry', Love = 'love', Interested = 'interested', Dislike = 'dislike', Sad = 'sad', Wow = 'wow', Bookmark = 'bookmark' }
export const enum SupportTicketPriority { High = 'high', Immediate = 'immediate', Medium = 'medium', Low = 'low', Urgent = 'urgent' }
export const enum IssueLifecycleStatus { Open = 'open', Cancelled = 'cancelled', InProgress = 'in-progress', Waiting = 'waiting', Resolved = 'resolved', Closed = 'closed', Pending = 'pending', OnHold = 'on-hold' }
export const enum SupportQueryType { FeatureRequest = 'feature-request', Feedback = 'feedback', Problem = 'problem', Question = 'question', Incident = 'incident', Task = 'task', Bug = 'bug' }
export const enum OrderStatus { Draft = 'draft', OnHold = 'on-hold', Returned = 'returned', Confirmed = 'confirmed', Failed = 'failed', Cancelled = 'cancelled', Abandoned = 'abandoned', PartiallyFulfilled = 'partially-fulfilled', Disputed = 'disputed', Delivered = 'delivered', AwaitingShipment = 'awaiting-shipment', Shipped = 'shipped', AwaitingPayment = 'awaiting-payment', Refunded = 'refunded', Processing = 'processing', Completed = 'completed', AwaitingPickup = 'awaiting-pickup', Pending = 'pending' }
export const enum DiscountType { VariablePercentage = 'variable-percentage', FixedAmount = 'fixed-amount', ConditionalDiscount = 'conditional-discount', Percentage = 'percentage', BuyOneGetOne = 'buy-one-get-one', VariableAmount = 'variable-amount', TieredDiscount = 'tiered-discount', UnknownDiscount = 'unknown-discount' }
export const enum ImageMimeType { ImageBmp = 'image/bmp', ImageJpeg = 'image/jpeg', ImageWebp = 'image/webp', ImageHeic = 'image/heic', ImageGif = 'image/gif', ImageSvgXml = 'image/svg+xml', ImageTiff = 'image/tiff', ImagePng = 'image/png' }
export const enum FulfillmentStatus { InTransit = 'in-transit', Failure = 'failure', Cancelled = 'cancelled', Delivered = 'delivered', Returned = 'returned', Pending = 'pending' }
export const enum OrderingCriteria { Popularity = 'popularity', PriceAscending = 'price-ascending', CreationDate = 'creation-date', PriceDescending = 'price-descending', Rating = 'rating', Manual = 'manual', Alphabetical = 'alphabetical', Relevance = 'relevance' }
export const enum ChatType { Private = 'private', Public = 'public', Group = 'group' }
export const enum ProductAvailabilityStatus { InStock = 'in-stock', Discontinued = 'discontinued', OutOfStock = 'out-of-stock', BackOrder = 'back-order', PreOrder = 'pre-order' }
export const enum ExpenseApprovalStatus { New = 'new', Pending = 'pending', Denied = 'denied', Cancelled = 'cancelled', Approved = 'approved', Processed = 'processed', Reimbursed = 'reimbursed', Reviewing = 'reviewing' }
export const enum FinancialChargeType { ServiceCharge = 'service-charge', LateFee = 'late-fee', TransactionFee = 'transaction-fee', ProcessingFee = 'processing-fee', Commission = 'commission', InterestCharge = 'interest-charge', Other = 'other' }
export const enum ItemAvailabilityStatus { Discontinued = 'discontinued', Inactive = 'inactive', Active = 'active', OutOfStock = 'out-of-stock' }
export const enum BillingStatus { Unpaid = 'unpaid', Authorised = 'authorised', Draft = 'draft', Overdue = 'overdue', Pending = 'pending', Deleted = 'deleted', Submitted = 'submitted', Paid = 'paid', PartiallyPaid = 'partially-paid', Voided = 'voided' }
export const enum FinancialAccountStatus { Active = 'active', Frozen = 'frozen', Inactive = 'inactive', UnderReview = 'under-review', Delinquent = 'delinquent', Closed = 'closed', Suspended = 'suspended' }
export const enum TransactionStatus { Pending = 'pending', InProgress = 'in-progress', Succeeded = 'succeeded', Failed = 'failed', Error = 'error', Cancelled = 'cancelled', Initiated = 'initiated' }
export const enum InvoiceAdjustmentType { Discount = 'discount', Tax = 'tax', Shipping = 'shipping', Other = 'other', Tip = 'tip' }
export const enum DataType { Date = 'date', Boolean = 'boolean', Null = 'null', Json = 'json', Array = 'array', Object = 'object', Binary = 'binary', Timestamp = 'timestamp', String = 'string', Custom = 'custom', Number = 'number', Undefined = 'undefined' }
export const enum EmploymentType { Seasonal = 'seasonal', Permanent = 'permanent', Internship = 'internship', Temporary = 'temporary', PartTime = 'part-time', FullTime = 'full-time', Volunteer = 'volunteer', Contract = 'contract', Freelance = 'freelance' }
export const enum TimeCycle { AdHoc = 'ad-hoc', Quarterly = 'quarterly', Minutely = 'minutely', Custom = 'custom', SemiMonthly = 'semi-monthly', Biweekly = 'biweekly', Hourly = 'hourly', Weekly = 'weekly', Daily = 'daily', Secondly = 'secondly', SemiAnnually = 'semi-annually', Monthly = 'monthly', Annually = 'annually', Biennially = 'biennially', Triennially = 'triennially' }
export const enum FinancialTrackingCategories { Class = 'class', Customer = 'customer', Other = 'other', Location = 'location', Division = 'division', Department = 'department', Employee = 'employee', CostCenter = 'cost-center', Vendor = 'vendor', Service = 'service', Project = 'project', Product = 'product', None = 'none' }
export const enum CreditNoteStatus { Disputed = 'disputed', Draft = 'draft', Void = 'void', Issued = 'issued', Applied = 'applied', Pending = 'pending', Completed = 'completed', Revised = 'revised', Cancelled = 'cancelled' }
export const enum PaymentTerm { Custom = 'custom', CashInAdvance = 'cash-in-advance', Installment = 'installment', UponCompletion = 'upon-completion', CashBeforeShipment = 'cash-before-shipment', DueOnReceipt = 'due-on-receipt', CashWithOrder = 'cash-with-order', Net30 = 'net-30', Prepaid = 'prepaid', CashOnDelivery = 'cash-on-delivery', DeferredPayment = 'deferred-payment', Prepayment = 'prepayment', Net60 = 'net-60', DueEndOfMonth = 'due-end-of-month', Net90 = 'net-90', Net = 'net' }
export const enum EmploymentAndCandidateStatus { OnLeave = 'on-leave', New = 'new', NotSelected = 'not-selected', Inactive = 'inactive', Active = 'active', Hired = 'hired', InReview = 'in-review', OfferExtended = 'offer-extended', Interviewing = 'interviewing', Other = 'other', Terminated = 'terminated' }
export const enum OrganizationalRole { Contractor = 'contractor', Supervisor = 'supervisor', Admin = 'admin', Employee = 'employee', Director = 'director', Other = 'other', Manager = 'manager' }
export const enum CampaignType { Other = 'other', SearchEngine = 'search-engine', Email = 'email', SocialMedia = 'social-media', Display = 'display' }
export const enum ContactAddressType { Billing = 'billing', Temporary = 'temporary', Home = 'home', Other = 'other', Business = 'business', Personal = 'personal', Work = 'work', Shipping = 'shipping' }
export const enum CustomerStatus { Suspended = 'suspended', Inactive = 'inactive', Archived = 'archived', Pending = 'pending', Active = 'active' }
export const enum SocialPlatform { Tumblr = 'tumblr', Snapchat = 'snapchat', Pinterest = 'pinterest', Instagram = 'instagram', Tiktok = 'tiktok', Reddit = 'reddit', Skype = 'skype', Twitter = 'twitter', Facebook = 'facebook', Linkedin = 'linkedin', Youtube = 'youtube', X = 'x', OtherSocialPlatform = 'other-social-platform' }
export const enum LeadLifecycleStatus { BadTiming = 'bad-timing', Revisited = 'revisited', Lost = 'lost', AttemptedToContact = 'attempted-to-contact', New = 'new', Open = 'open', Converted = 'converted', InProcess = 'in-process', Unqualified = 'unqualified', Connected = 'connected' }
export const enum ConversationStatus { Deleted = 'deleted', Active = 'active', Archived = 'archived' }
export const enum CommunicationRole { Group = 'group', Admin = 'admin', Channel = 'channel', Assistant = 'assistant', Member = 'member', Moderator = 'moderator', Service = 'service', Owner = 'owner', Bot = 'bot', System = 'system', Guest = 'guest', User = 'user' }
export const enum ParticipantEngagementStatus { Guest = 'guest', Banned = 'banned', Inactive = 'inactive', Left = 'left', Moderator = 'moderator', Active = 'active', Admin = 'admin' }
export const enum ItemEntityStatus { Deleted = 'deleted', Suspended = 'suspended', Pending = 'pending', Completed = 'completed', Active = 'active', Archived = 'archived', Inactive = 'inactive' }
export const enum Currency { LYD = 'lyd', TWD = 'twd', BHD = 'bhd', HRK = 'hrk', TVD = 'tvd', HTG = 'htg', DKK = 'dkk', ERN = 'ern', HNL = 'hnl', SAR = 'sar', BYN = 'byn', LSL = 'lsl', IDR = 'idr', COP = 'cop', VES = 'ves', BDT = 'bdt', ARS = 'ars', MYR = 'myr', TOP = 'top', ETB = 'etb', FOK = 'fok', KMF = 'kmf', SOS = 'sos', NAD = 'nad', CDF = 'cdf', STN = 'stn', HUF = 'huf', MKD = 'mkd', CAD = 'cad', MWK = 'mwk', UAH = 'uah', ILS = 'ils', KRW = 'krw', MGA = 'mga', NZD = 'nzd', SDG = 'sdg', XCD = 'xcd', MOP = 'mop', JOD = 'jod', BZD = 'bzd', KPW = 'kpw', ALL = 'all', GHS = 'ghs', NPR = 'npr', RON = 'ron', SEK = 'sek', RSD = 'rsd', GYD = 'gyd', SHP = 'shp', TND = 'tnd', YER = 'yer', LAK = 'lak', KGS = 'kgs', ISK = 'isk', CVE = 'cve', MVR = 'mvr', MXN = 'mxn', XDR = 'xdr', WST = 'wst', GEL = 'gel', SRD = 'srd', IQD = 'iqd', ZMW = 'zmw', MZN = 'mzn', BMD = 'bmd', MUR = 'mur', XOF = 'xof', BGN = 'bgn', BOB = 'bob', BSD = 'bsd', GNF = 'gnf', IMP = 'imp', GMD = 'gmd', JEP = 'jep', KHR = 'khr', MMK = 'mmk', FJD = 'fjd', KWD = 'kwd', SZL = 'szl', GGP = 'ggp', SYP = 'syp', CUP = 'cup', LBP = 'lbp', TRY = 'try', TJS = 'tjs', BBD = 'bbd', PLN = 'pln', JPY = 'jpy', NGN = 'ngn', UYU = 'uyu', BRL = 'brl', BTN = 'btn', EGP = 'egp', GBP = 'gbp', IRR = 'irr', BAM = 'bam', RUB = 'rub', PYG = 'pyg', AED = 'aed', RWF = 'rwf', TZS = 'tzs', NIO = 'nio', AZN = 'azn', HKD = 'hkd', THB = 'thb', CHF = 'chf', CLP = 'clp', CUC = 'cuc', FKP = 'fkp', VND = 'vnd', PGK = 'pgk', SGD = 'sgd', SCR = 'scr', DOP = 'dop', PEN = 'pen', SLL = 'sll', CZK = 'czk', ANG = 'ang', SSP = 'ssp', KYD = 'kyd', KZT = 'kzt', MRU = 'mru', BND = 'bnd', LRD = 'lrd', PAB = 'pab', MDL = 'mdl', AWG = 'awg', MAD = 'mad', CNY = 'cny', TMT = 'tmt', XAF = 'xaf', AFN = 'afn', XPF = 'xpf', AMD = 'amd', BWP = 'bwp', OMR = 'omr', VUV = 'vuv', ZWL = 'zwl', KES = 'kes', JMD = 'jmd', ZAR = 'zar', PKR = 'pkr', GIP = 'gip', AUD = 'aud', EUR = 'eur', NOK = 'nok', GTQ = 'gtq', BIF = 'bif', CRC = 'crc', DJF = 'djf', KID = 'kid', LKR = 'lkr', PHP = 'php', UGX = 'ugx', DZD = 'dzd', UZS = 'uzs', QAR = 'qar', AOA = 'aoa', MNT = 'mnt', TTD = 'ttd', USD = 'usd', INR = 'inr', SBD = 'sbd' }
export const enum CustomerEligibilityStatus { NewCustomers = 'new-customers', VipCustomers = 'vip-customers', ReturningCustomers = 'returning-customers', SpecificConditions = 'specific-conditions', AllCustomers = 'all-customers', Other = 'other' }
export const enum LifecycleStatus { Active = 'active', Issued = 'issued', Redeemed = 'redeemed', Expired = 'expired', Suspended = 'suspended', Cancelled = 'cancelled' }
export const enum PaymentMethod { Paypal = 'paypal', Check = 'check', MobilePayment = 'mobile-payment', MobileWallet = 'mobile-wallet', BankTransfer = 'bank-transfer', Other = 'other', CashOnDelivery = 'cash-on-delivery', CreditCard = 'credit-card', Cryptocurrency = 'cryptocurrency', DebitCard = 'debit-card', Cash = 'cash' }
export const enum FinancialTransactionStatus { Cleared = 'cleared', Disputed = 'disputed', SettlementInProgress = 'settlement-in-progress', Cancelled = 'cancelled', Pending = 'pending', Authorized = 'authorized', Failed = 'failed', Refunded = 'refunded' }
export const enum AuditOpinionType { Adverse = 'adverse', Qualified = 'qualified', Disclaimer = 'disclaimer', Unqualified = 'unqualified' }
export const enum InventoryStorageType { Consignment = 'consignment', Other = 'other', RetailStore = 'retail-store', Warehouse = 'warehouse', DistributionCenter = 'distribution-center', DropShipper = 'drop-shipper', OnlineMarketplace = 'online-marketplace' }
export const enum ItemCondition { Damaged = 'damaged', New = 'new', Used = 'used', LikeNew = 'like-new', Refurbished = 'refurbished', OpenBox = 'open-box' }
export const enum TransactionType { Withdrawal = 'withdrawal', Charge = 'charge', Payment = 'payment', Refund = 'refund', Deposit = 'deposit', Transfer = 'transfer', Adjustment = 'adjustment', Fee = 'fee' }
export const enum VisibilityScope { Internal = 'internal', Global = 'global', App = 'app', Private = 'private', Web = 'web' }
export const enum PaymentStatus { Pending = 'pending', Processing = 'processing', Overdue = 'overdue', Refunded = 'refunded', Disputed = 'disputed', Authorized = 'authorized', Draft = 'draft', PartiallyRefunded = 'partially-refunded', Submitted = 'submitted', Paid = 'paid', Adjusted = 'adjusted', Partial = 'partial', Error = 'error', Voided = 'voided', Deleted = 'deleted', Cancelled = 'cancelled', Succeeded = 'succeeded', Failed = 'failed' }
export const enum EntityLifecycleStatus { Active = 'active', Archived = 'archived', Draft = 'draft', Inactive = 'inactive', Scheduled = 'scheduled', Deleted = 'deleted', Preorder = 'preorder' }
export const enum TransactionChannel { Atm = 'atm', Mobile = 'mobile', BankBranch = 'bank-branch', Telephone = 'telephone', Online = 'online', Mail = 'mail', InPerson = 'in-person', Other = 'other' }
export const enum FinancialDisputeStatus { NeedsResponse = 'needs-response', Won = 'won', Escalated = 'escalated', ChargeRefunded = 'charge-refunded', AwaitingEvidence = 'awaiting-evidence', Lost = 'lost', Closed = 'closed', UnderReview = 'under-review' }
export const enum ContentVisibility { Private = 'private', Public = 'public', Internal = 'internal', Shared = 'shared', Protected = 'protected' }
export const enum DeviceUsageType { Other = 'other', Personal = 'personal', Business = 'business', Educational = 'educational', Industrial = 'industrial', Healthcare = 'healthcare', Home = 'home' }
export const enum EntityCategory { User = 'user', Project = 'project', Document = 'document', Task = 'task', Event = 'event', Person = 'person', Owner = 'owner', Link = 'link', Other = 'other', Message = 'message' }
export const enum GenderIdentity { PreferNotToSay = 'prefer-not-to-say', Female = 'female', Male = 'male', Other = 'other' }
export const enum CommunicationMethod { Other = 'other', Sms = 'sms', Text = 'text', InPerson = 'in-person', PushNotification = 'push-notification', SocialMedia = 'social-media', Email = 'email', Phone = 'phone', VideoCall = 'video-call', Mail = 'mail', InstantMessage = 'instant-message' }
export const enum FinancialTransactionType { Dividend = 'dividend', Deposit = 'deposit', Payment = 'payment', SpendOverpayment = 'spend-overpayment', Receive = 'receive', Fee = 'fee', Refund = 'refund', ReceiveOverpayment = 'receive-overpayment', Charge = 'charge', ReceivePrepayment = 'receive-prepayment', Other = 'other', Sale = 'sale', Transfer = 'transfer', Spend = 'spend', Adjustment = 'adjustment', Chargeback = 'chargeback', Interest = 'interest', Withdrawal = 'withdrawal', SpendPrepayment = 'spend-prepayment' }
export const enum EmailCategoryType { Spam = 'spam', Personal = 'personal', Business = 'business', Promotional = 'promotional', Transactional = 'transactional', Educational = 'educational', Governmental = 'governmental', Other = 'other' }
export const enum UniversalIdentifierType { Uuid = 'uuid', String = 'string', Url = 'url', Email = 'email', Number = 'number' }
export const enum AccessControlModel { Custom = 'custom', None = 'none', Dac = 'dac', Rbac = 'rbac', Abac = 'abac', Mac = 'mac' }
export const enum ParticipantType { User = 'user', Team = 'team', Organization = 'organization', ExternalParticipant = 'external-participant', Group = 'group' }
export const enum PriorityLevel { Urgent = 'urgent', Elevated = 'elevated', Low = 'low', Medium = 'medium', High = 'high' }
export const enum TaskStatus { Blocked = 'blocked', InProgress = 'in-progress', Cancelled = 'cancelled', Todo = 'todo', OnHold = 'on-hold', Done = 'done' }
export const enum UserStatus { Pending = 'pending', Active = 'active', Inactive = 'inactive', Suspended = 'suspended', WaitListed = 'wait-listed', Verified = 'verified', Banned = 'banned', Archived = 'archived', Deleted = 'deleted' }
export const enum PromotionType { FreeShipping = 'free-shipping', Other = 'other', BuyOneGetOne = 'buy-one-get-one', RewardPoints = 'reward-points', Percentage = 'percentage', FixedAmount = 'fixed-amount' }
export const enum MimeType { ImageSvgXml = 'image/svg+xml', ImagePng = 'image/png', ImageWebp = 'image/webp', ImageJpeg = 'image/jpeg', ImageGif = 'image/gif' }
export const enum PrerequisiteRangeType { Subtotal = 'subtotal', ShippingPrice = 'shipping-price', Quantity = 'quantity' }
export const enum TaxType { Additive = 'additive', Inclusive = 'inclusive', Variable = 'variable' }
export const enum ModifierType { Text = 'text', List = 'list' }
export const enum CardType { Credit = 'credit', Debit = 'debit', UnknownCard = 'unknown-card' }
export const enum PrepaidType { NotPrepaid = 'not-prepaid', Prepaid = 'prepaid', UnknownPrepaid = 'unknown-prepaid' }
export const enum EntryMethod { Contactless = 'contactless', Keyed = 'keyed', OnFile = 'on-file', Swiped = 'swiped', Emv = 'emv' }
export const enum CvvStatus { Rejected = 'rejected', NotChecked = 'not-checked', Accepted = 'accepted' }
export const enum AvcStatus { NotChecked = 'not-checked', Accepted = 'accepted', Rejected = 'rejected' }
export const enum CreditType { Supplier = 'supplier', Overpayment = 'overpayment', Goodwill = 'goodwill', Customer = 'customer', Prepayment = 'prepayment' }
export const enum CallDirection { Outbound = 'outbound', Conference = 'conference', Unknown = 'unknown', Inbound = 'inbound' }
export const enum SpeakerRole { Invitee = 'invitee', Attendee = 'attendee' }
export const enum FileType { File = 'file', Url = 'url', Folder = 'folder' }
export const enum AiToolChoiceType { Tool = 'tool', Auto = 'auto', Any = 'any', None = 'none' }
export const enum ImageType { Base64 = 'base64' }
export const enum ResponseFormatType { JsonSchema = 'json-schema', Text = 'text', JsonObject = 'json-object' }
export const enum ToolCallType { Function = 'function' }
export const enum AiMessagesContentType { Image = 'image', Text = 'text', ToolUse = 'tool-use', ToolResult = 'tool-result' }
export const enum AiRole { Tool = 'tool', User = 'user', Assistant = 'assistant' }
export const enum JsonSchemaType { Function = 'function' }
export const enum EventStatus { Confirmed = 'confirmed', Tentative = 'tentative', Cancelled = 'cancelled' }
export const enum EventVisibility { Private = 'private', Public = 'public', Confidential = 'confidential' }
export const enum EventReminderAction { Email = 'email', Popup = 'popup' }
export const enum EventRuleType { Repeat = 'repeat', Exclude = 'exclude', ExcludeDates = 'exclude-dates', AddDates = 'add-dates' }
export const enum EventFrequency { Monthly = 'monthly', Daily = 'daily', Yearly = 'yearly', Weekly = 'weekly' }
