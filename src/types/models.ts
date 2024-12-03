// This file is auto-generated. Do not edit it manually.

export interface Projects { modifyToken?: string;
    commonModel?: string;
    friendlyName?: string;
    name?: string;
    createdAt?: string;
    updatedAt?: string;
    id?: string }
export interface EntryPoints { type?: string;
    name?: string;
    pin?: string;
    commonModel?: string;
    uri?: string;
    id?: string }
export interface EventReminders { action?: EventReminderAction;
    commonModel?: string;
    minutes?: number }
export interface EventRules { isAllDay?: boolean;
    isMultiDay?: boolean;
    commonModel?: string;
    locked?: boolean;
    guestsCanModify?: boolean;
    canAddSelf?: boolean;
    guestsCanInvite?: boolean }
export interface EventRecurrenceRules { id?: string;
    dates?: string[];
    commonModel?: string;
    frequency?: EventFrequency;
    until?: string;
    byDay?: string;
    type?: EventRuleType;
    count?: number;
    byMonthDay?: number;
    interval?: number;
    byMonth?: number }
export interface EventRecurrences { id?: string;
    rules?: EventRecurrenceRules[];
    commonModel?: string }
export interface ToolResultContent { type?: AiMessagesContentType;
    text?: string[];
    commonModel?: string;
    image?: Images }
export interface ToolCalls { commonModel?: string;
    id?: string;
    modifyToken?: string;
    type?: ToolCallType;
    function?: unknown }
export interface ResponseFormat { schema?: JsonSchema;
    commonModel?: string;
    type?: ResponseFormatType }
export interface JsonSchema { schema?: unknown;
    type?: JsonSchemaType;
    commonModel?: string;
    name?: string;
    description?: string;
    strict?: boolean }
export interface AiToolChoice { commonModel?: string;
    name?: string;
    type?: AiToolChoiceType }
export interface AiMessagesContent { text?: string;
    isError?: boolean;
    commonModel?: string;
    type?: AiMessagesContentType;
    id?: string;
    modifyToken?: string;
    name?: string;
    toolUseId?: string;
    image?: Images;
    toolResultContent?: ToolResultContent[] }
export interface Events { recurrence?: EventRecurrences;
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
    description?: string }
export interface Calendars { deleted?: boolean;
    timeZone?: string;
    updatedAt?: string;
    id?: string;
    commonModel?: string;
    description?: string;
    title?: string;
    location?: string;
    createdAt?: string;
    modifyToken?: string;
    type?: string }
export interface Threads { deleted?: boolean;
    snippet?: string;
    tags?: KeyValues[];
    commonModel?: string;
    modifyToken?: string;
    lastMessageId?: string;
    id?: string;
    messages?: Messages[];
    lastHistoryId?: string;
    createdAt?: string;
    updatedAt?: string }
export interface Drafts { priority?: PriorityLevel;
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
    trackingSettings?: KeyValues[] }
export interface Drives { description?: string;
    createdAt?: string;
    id?: string;
    updatedAt?: string;
    name?: string;
    commonModel?: string }
export interface Folders { size?: number;
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
    modifyToken?: string }
export interface Files { permissions?: Permissions;
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
    type?: FileType }
export interface FileOwners { email?: string;
    id?: string;
    createdAt?: string;
    name?: string;
    updatedAt?: string;
    commonModel?: string }
export interface ParentFolders { commonModel?: string;
    id?: string;
    createdAt?: string;
    name?: string;
    updatedAt?: string }
export interface Speakers { email?: string;
    commonModel?: string;
    speakerId?: string;
    title?: string;
    role?: SpeakerRole;
    id?: string;
    name?: string;
    userId?: string }
export interface Recordings { duration?: number;
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
    updatedAt?: string }
export interface Transcripts { speakerName?: string;
    createdAt?: string;
    topic?: string;
    speakerId?: string;
    sentences?: Sentences[];
    commonModel?: string;
    updatedAt?: string;
    meetingId?: string;
    modifyToken?: string;
    id?: string }
export interface Sentences { speakerId?: string;
    endTime?: string;
    commonModel?: string;
    startTime?: string;
    updatedAt?: string;
    speakerName?: string;
    createdAt?: string;
    sentence?: string;
    modifyToken?: string;
    id?: string }
export interface Tables { name?: string;
    id?: string;
    expiresIn?: string;
    commonModel?: string;
    projectId?: string;
    fields?: Attributes[];
    description?: string;
    region?: string;
    modifyToken?: string;
    type?: TableType;
    url?: string;
    databaseId?: string;
    createdAt?: string;
    updatedAt?: string;
    slug?: string }
export interface Databases { region?: string;
    url?: string;
    deleted?: boolean;
    active?: boolean;
    name?: string;
    projectId?: string;
    modifyToken?: string;
    permissionLevel?: string;
    type?: DatabaseType;
    commonModel?: string;
    updatedAt?: string;
    createdAt?: string;
    description?: string;
    organizationId?: string;
    title?: string;
    tables?: Tables[];
    id?: string;
    tablesExpiresIn?: string }
export interface Attributes { slug?: string;
    name?: string;
    nullable?: boolean;
    updatedAt?: string;
    dataType?: DataType;
    commonModel?: string;
    unique?: boolean;
    customTypeDetails?: Metadata[];
    repeated?: boolean;
    modifyToken?: string;
    createdAt?: string;
    id?: string;
    required?: boolean;
    description?: string }
export interface Records { entity?: unknown;
    createdAt?: string;
    commonModel?: string;
    updatedAt?: string;
    modifyToken?: string;
    id?: string }
export interface Objects { modifyToken?: string;
    createdAt?: string;
    name?: string;
    singularNoun?: string;
    updatedAt?: string;
    commonModel?: string;
    pluralNoun?: string;
    custom?: boolean;
    slug?: string;
    id?: string }
export interface CardDetails { capturedAt?: string;
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
    entryMethod?: EntryMethod }
export interface Modifiers { name?: string;
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
    modifyToken?: string }
export interface ModifierGroups { description?: string;
    updatedAt?: string;
    deleted?: boolean;
    modifyToken?: string;
    id?: string;
    type?: ModifierType;
    modifiers?: Modifiers[];
    name?: string;
    createdAt?: string;
    active?: boolean;
    commonModel?: string }
export interface InvoicePayments { commonModel?: string;
    updatedAt?: string;
    date?: string;
    createdAt?: string;
    modifyToken?: string;
    id?: string;
    amount?: number }
export interface Locations { tags?: string[];
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
    defaultPhone?: string }
export interface CurrencyDetails { value?: number;
    commonModel?: string;
    id?: string;
    currency?: Currency }
export interface UsageLimitExpirations { commonModel?: string;
    limit?: number;
    expirationDate?: string }
export interface Webhooks { events?: string[];
    objects?: string[];
    format?: Format;
    address?: string;
    updatedAt?: string;
    commonModel?: string;
    createdAt?: string;
    isDeleted?: boolean;
    id?: string;
    modifyToken?: string }
export interface PrerequisiteRanges { greaterThanOrEqualTo?: number;
    lessThanOrEqualTo?: number;
    commonModel?: string;
    type?: PrerequisiteRangeType }
export interface PriceRules { commonModel?: string;
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
    prerequisiteProductIds?: string[] }
export interface Discounts { usageLimitExpirations?: UsageLimitExpirations;
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
    type?: DiscountType }
export interface AiUsage { promptTokens?: number;
    completionTokens?: number;
    totalTokens?: number;
    commonModel?: string }
export interface AiMessages { content?: AiMessagesContent[];
    commonModel?: string;
    name?: string;
    refusal?: string;
    toolCalls?: ToolCalls[];
    role?: AiRole;
    index?: number;
    finishReason?: string }
export interface Chats { numberOfCompletions?: number;
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
    topP?: number }
export interface TaxDetails { rate?: number;
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
    createdAt?: string }
export interface Evidence { refundPolicyDisclosure?: string;
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
    shippingDocumentation?: string }
export interface Disputes { version?: string;
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
    deleted?: boolean }
export interface Reactions { commonModel?: string;
    messageId?: string;
    type?: ReactionType;
    userId?: string;
    chatId?: string;
    createdAt?: string }
export interface Participants { joinedAt?: string;
    commonModel?: string;
    displayName?: string;
    type?: CommunicationRole;
    status?: ParticipantEngagementStatus;
    userId?: string }
export interface Messages { chatId?: string;
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
    tags?: KeyValues[] }
export interface Conversations { type?: ChatType;
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
    isPinned?: boolean }
export interface ShareholderEquityDetails { commonModel?: string;
    accumulatedOtherComprehensiveIncome?: number;
    commonStock?: number;
    retainedEarnings?: number;
    treasuryStock?: number;
    preferredStock?: number }
export interface IncomeTaxExpenseDetails { commonModel?: string;
    currentIncomeTax?: number;
    deferredIncomeTax?: number;
    taxAllowanceCredit?: number }
export interface OperatingExpensesDetails { salesGeneralAndAdministrativeExpenses?: number;
    commonModel?: string;
    otherOperatingExpenses?: number;
    researchAndDevelopmentExpenses?: number }
export interface RevenueDetails { salesRevenue?: number;
    serviceRevenue?: number;
    otherRevenue?: number;
    commonModel?: string }
export interface ShippingItem { productName?: string;
    sku?: string;
    dimensions?: Dimensions;
    id?: string;
    weight?: number;
    productId?: string;
    commonModel?: string;
    weightUnit?: string;
    value?: number;
    quantity?: number }
export interface BillingDetails { createdAt?: string;
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
    companyName?: string }
export interface PaymentTerms { minimumPayment?: number;
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
    permittedClientClasses?: string[] }
export interface InvoiceAdjustments { updatedAt?: string;
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
    currency?: Currency }
export interface TaxRates { modifyToken?: string;
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
    applicableItems?: string[] }
export interface CreditNoteLines { account?: string;
    product?: Products;
    quantity?: number;
    commonModel?: string;
    customFields?: CustomAttributes[];
    id?: string;
    description?: string;
    taxRate?: number;
    unitPrice?: number;
    total?: number }
export interface CreditNotes { createdAt?: string;
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
    memo?: string }
export interface ExpenseCategories { description?: string;
    id?: string;
    name?: string;
    commonModel?: string }
export interface Expenses { commonModel?: string;
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
    customFields?: CustomAttributes[] }
export interface Transactions { metadata?: Metadata;
    id?: string;
    commonModel?: string;
    recipient?: Customers;
    tags?: string[];
    sender?: Customers;
    exchangeRate?: number;
    shipping?: ShippingDetails;
    description?: string;
    billingDetails?: BillingDetails;
    taxExempt?: boolean;
    accountName?: string;
    dispute?: Disputes;
    deleted?: boolean;
    status?: FinancialTransactionStatus;
    invoiceId?: string;
    contact?: Contacts;
    attachments?: Attachments[];
    updatedAt?: string;
    accountCode?: string;
    checkNumber?: string;
    debitAmount?: number;
    orderId?: string;
    taxAmount?: number;
    date?: string;
    paymentIntent?: string;
    modifyToken?: string;
    transactionCategory?: TransactionType;
    accountId?: string;
    paymentMethod?: PaymentMethods;
    currency?: Currency;
    items?: Items[];
    transactionMethod?: TransactionMethod;
    applicationFee?: number;
    creditAmount?: number;
    amount?: number;
    type?: FinancialTransactionType;
    foreignCurrency?: CurrencyDetails;
    createdAt?: string;
    refund?: Refunds }
export interface PurchaseOrderLineItems { unitOfMeasure?: string;
    totalPrice?: number;
    discount?: number;
    productId?: string;
    quantity?: number;
    id?: string;
    deliveryDate?: string;
    SKU?: string;
    description?: string;
    unitPrice?: number;
    commonModel?: string }
export interface Accounts { accountNumber?: string;
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
    updatedAt?: string }
export interface PurchaseOrders { createdAt?: string;
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
    taxes?: number }
export interface AdditionalCharges { createdAt?: string;
    amount?: number;
    description?: string;
    type?: FinancialChargeType;
    commonModel?: string;
    updatedAt?: string;
    id?: string }
export interface Refunds { currency?: Currency;
    createdAt?: string;
    modifyToken?: string;
    amount?: number;
    commonModel?: string;
    id?: string;
    status?: TransactionStatus;
    paymentId?: string;
    reason?: string;
    updatedAt?: string }
export interface Payments { cardDetails?: CardDetails;
    customer?: Customers;
    receiptEmail?: string;
    paymentProcessor?: string;
    billingDetails?: BillingDetails;
    tip?: number;
    id?: string;
    currency?: Currency;
    paymentCaptureMethod?: string;
    commonModel?: string;
    paymentIntent?: string;
    updatedAt?: string;
    active?: boolean;
    refund?: Refunds;
    modifyToken?: string;
    date?: string;
    shippingDetails?: ShippingDetails;
    journalId?: string;
    createdAt?: string;
    webhookUrl?: string;
    paymentMethod?: PaymentMethods;
    storeLocationId?: string;
    metadata?: Metadata;
    amount?: number;
    transactionId?: string;
    deleted?: boolean;
    orderId?: string;
    invoice?: Invoices;
    status?: PaymentStatus;
    description?: string;
    notes?: string }
export interface Bills { id?: string;
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
    customer?: Customers }
export interface Vendors { commonModel?: string;
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
    createdAt?: string }
export interface AuditInformation { notes?: string;
    auditOpinion?: AuditOpinionType;
    auditorName?: string;
    auditDate?: string;
    commonModel?: string }
export interface BalanceSheets { treasuryStock?: number;
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
    accountsPayable?: number }
export interface IncomeStatements { operatingExpenses?: OperatingExpensesDetails;
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
    profitMargins?: number }
export interface Invoices { dueDate?: string;
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
    header?: string }
export interface JournalEntries { commonModel?: string;
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
    exchangeRate?: number }
export interface JournalEntryLines { credit?: number;
    tracking?: FinancialTrackingCategories;
    id?: string;
    description?: string;
    commonModel?: string;
    accountId?: string;
    quantity?: number;
    taxCode?: string;
    debit?: number;
    taxAmount?: number;
    amount?: number }
export interface InvoiceItems { dimensions?: Dimensions;
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
    sku?: string }
export interface Tickets { status?: IssueLifecycleStatus;
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
    updatedAt?: string }
export interface WorkExperiences { description?: string;
    commonModel?: string;
    position?: string;
    endDate?: string;
    startDate?: string;
    company?: string }
export interface Educations { fieldOfStudy?: string;
    gpa?: number;
    institution?: string;
    startDate?: string;
    degree?: string;
    endDate?: string;
    commonModel?: string }
export interface References { company?: string;
    name?: string;
    relationship?: string;
    position?: string;
    commonModel?: string;
    email?: string;
    phoneNumber?: string }
export interface Candidates { phoneNumber?: string;
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
    createdAt?: string }
export interface Contacts { defaultPhone?: string;
    modifyToken?: string;
    isActive?: boolean;
    emails?: Emails[];
    leadId?: string;
    addresses?: Addresses[];
    relationship?: string;
    updatedAt?: string;
    code?: string;
    birthday?: string;
    firstName?: string;
    userRoles?: UserRoles[];
    lastName?: string;
    commonModel?: string;
    phones?: Phones[];
    note?: string;
    defaultEmail?: string;
    company?: string;
    address?: Addresses;
    notes?: Notes;
    tags?: string[];
    id?: string;
    websites?: string[];
    customFields?: CustomAttributes[];
    createdAt?: string;
    socialProfiles?: SocialProfiles[] }
export interface Jobs { createdAt?: string;
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
    workHours?: string }
export interface Salaries { paymentPeriod?: TimeCycle;
    commonModel?: string;
    currency?: Currency;
    value?: number }
export interface HiringOrganizations { locations?: Addresses[];
    industry?: string;
    description?: string;
    commonModel?: string;
    name?: string;
    size?: string }
export interface EmploymentUnits { description?: string;
    commonModel?: string;
    name?: string }
export interface TimeSession { closeTime?: string;
    commonModel?: string;
    openTime?: string }
export interface UserOrGroup { displayName?: string;
    identifier?: string;
    commonModel?: string;
    type?: ParticipantType }
export interface Permissions { identifierType?: UniversalIdentifierType;
    commonModel?: string;
    accessControlType?: AccessControlModel;
    roles?: string[];
    canDelete?: string[];
    canView?: string[];
    canEdit?: string[];
    assigneeDetails?: UserOrGroup }
export interface Phones { commonModel?: string;
    country?: string;
    countryCode?: string;
    phone?: string;
    type?: DeviceUsageType }
export interface Emails { type?: EmailCategoryType;
    commonModel?: string;
    email?: string }
export interface Entity { entityId?: string;
    commonModel?: string;
    entityType?: EntityCategory;
    attributes?: string[];
    value?: string }
export interface Notifications { recipient?: Users;
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
    updatedAt?: string }
export interface Comments { deleted?: boolean;
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
    active?: boolean }
export interface Metadata { entityId?: string;
    id?: string;
    key?: string;
    value?: string;
    commonModel?: string;
    type?: DataType;
    valueParsingRequired?: boolean;
    entityType?: string;
    createdAt?: string;
    updatedAt?: string }
export interface Tasks { subTaskIds?: string[];
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
    createdAt?: string }
export interface Stores { email?: string;
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
    businessHours?: BusinessHours[] }
export interface Staff { firstName?: string;
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
    customFields?: CustomAttributes[] }
export interface RatingsReviews { updatedAt?: string;
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
    verifiedPurchase?: boolean }
export interface ProductOptions { values?: string[];
    name?: string;
    createdAt?: string;
    updatedAt?: string;
    id?: string;
    productId?: number;
    commonModel?: string }
export interface Taxes { country?: string;
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
    rate?: number }
export interface InventoryLocations { type?: InventoryStorageType;
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
    deleted?: boolean }
export interface Prices { type?: string;
    commonModel?: string;
    amount?: number;
    currency?: Currency }
export interface Variants { deleted?: boolean;
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
    createdAt?: string }
export interface Dimensions { commonModel?: string;
    width?: number;
    length?: number;
    height?: number }
export interface Products { localizations?: Localizations[];
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
    taxes?: Taxes[] }
export interface Orders { trackingInfo?: string;
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
    taxes?: Taxes[] }
export interface Opportunities { closeDate?: string;
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
    createdAt?: string }
export interface PaymentMethods { type?: PaymentMethod;
    details?: string;
    isDefault?: boolean;
    commonModel?: string;
    id?: string }
export interface SSO { deleted?: boolean;
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
    updatedAt?: string }
export interface Preferences { commonModel?: string;
    timeZone?: string;
    language?: string;
    currency?: Currency;
    id?: string;
    communications?: CommunicationMethod }
export interface Users { createdAt?: string;
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
    coverPhoto?: Images }
export interface Categories { tags?: string[];
    commonModel?: string;
    image?: string;
    name?: string;
    updatedAt?: string;
    createdAt?: string;
    id?: string;
    modifyToken?: string;
    parentId?: string }
export interface Notes { createdAt?: string;
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
    sharedWith?: Users[] }
export interface LeadSource { commonModel?: string;
    sourceId?: string;
    details?: string;
    sourceName?: string }
export interface TransactionDetails { transactionId?: string;
    commonModel?: string;
    status?: string;
    amount?: number }
export interface Leads { leadStatus?: LeadLifecycleStatus;
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
    opportunities?: Opportunities[] }
export interface FulfillmentReceipts { paymentMethod?: PaymentMethod;
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
    id?: string }
export interface FulfillmentItems { imageUrl?: string;
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
    active?: boolean }
export interface Fulfillments { trackingNumber?: string;
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
    receipt?: FulfillmentReceipts }
export interface CustomAttributes { fieldName?: string;
    fieldValue?: string;
    fieldType?: DataType;
    commonModel?: string;
    id?: string }
export interface Companies { stockSymbol?: string;
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
    tags?: string[] }
export interface Localizations { title?: string;
    description?: string;
    metaTitle?: string;
    commonModel?: string;
    locale?: string;
    metaDescription?: string }
export interface KeyValues { value?: string;
    commonModel?: string;
    key?: string }
export interface SocialProfiles { createdAt?: string;
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
    deleted?: boolean }
export interface Customers { preferredContactMethod?: CommunicationMethod;
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
    customerSegment?: string }
export interface TaxLines { deleted?: boolean;
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
    price?: number }
export interface Images { active?: boolean;
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
    type?: ImageType }
export interface GiftCards { cardNumber?: string;
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
    id?: string }
export interface Promotions { eligibleItems?: string[];
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
    startDate?: string }
export interface PaymentDetails { currency?: Currency;
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
    transactionId?: string }
export interface ShippingDetails { trackingNumber?: string;
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
    commonModel?: string }
export interface PerformanceMetrics { conversionRate?: number;
    commonModel?: string;
    clicks?: number;
    impressions?: number;
    spend?: number;
    costPerConversion?: number;
    costPerClick?: number;
    returnOnInvestment?: number;
    conversions?: number }
export interface Carts { updatedAt?: string;
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
    version?: string }
export interface Items { accountName?: string;
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
    id?: string }
export interface Campaigns { active?: boolean;
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
    creativeAssets?: Attachments }
export interface Attachments { fileSize?: number;
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
    metadata?: Metadata }
export interface BusinessHours { sessions?: TimeSession[];
    timeZone?: string;
    active?: boolean;
    id?: string;
    dayOfWeek?: DayOfWeek;
    updatedAt?: string;
    deleted?: boolean;
    commonModel?: string;
    createdAt?: string;
    storeID?: string;
    closed?: boolean }
export interface Brands { established?: string;
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
    country?: string }
export interface GeoCoordinates { altitude?: number;
    latitude?: number;
    longitude?: number;
    commonModel?: string;
    heading?: number;
    timestamp?: string;
    altitudeAccuracy?: number;
    accuracy?: number;
    speed?: number }
export interface Addresses { city?: string;
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
    addressLine2?: string }
export interface CRMAccounts { annualRevenue?: number;
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
    updatedAt?: string }
export const enum TargetType { ShippingLine = 'shipping-line', LineItem = 'line-item' }
export const enum AllocationMethod { Each = 'each', Across = 'across' }
export const enum AppliesTo { AllItems = 'all-items', SpecificItems = 'specific-items', SpecificCategories = 'specific-categories' }
export const enum CustomerEligibility { SpecificCustomerGroups = 'specific-customer-groups', All = 'all', SpecificCustomers = 'specific-customers' }
export const enum Format { Xml = 'xml', Json = 'json' }
export const enum MinimumRequirements { None = 'none', MinimumPurchaseAmount = 'minimum-purchase-amount', MinimumQuantityOfItems = 'minimum-quantity-of-items' }
export const enum Status { Scheduled = 'scheduled', Expired = 'expired', Active = 'active' }
export const enum TransactionMethod { BankBranch = 'bank-branch', Mail = 'mail', Online = 'online', Mobile = 'mobile', Telephone = 'telephone', Atm = 'atm' }
export const enum TargetSelection { All = 'all', Entitled = 'entitled' }
export const enum AccountType { CostOfGoodsSoldSuppliesMaterialsCogs = 'cost-of-goods-sold::supplies-materials-cogs', OtherIncomeGainLossOnSaleOfFixedAssets = 'other-income::gain-loss-on-sale-of-fixed-assets', CostOfGoodsSoldShippingFreightDeliveryCos = 'cost-of-goods-sold::shipping-freight-delivery-cos', RevenueOtherPrimaryIncome = 'revenue::other-primary-income', OtherCurrentLiabilityGlobalTaxPayable = 'other-current-liability::global-tax-payable', ExpenseInsurance = 'expense::insurance', AssetAvailableForSaleFinancialAssets = 'asset::available-for-sale-financial-assets', AccountsReceivable = 'accounts-receivable', EquityEstimatedTaxes = 'equity::estimated-taxes', Liability = 'liability', OtherExpenseGasAndFuel = 'other-expense::gas-and-fuel', LiabilityNotesPayable = 'liability::notes-payable', AssetFixedAssetPhotoVideo = 'asset::fixed-asset-photo-video', ExpenseAdvertisingPromotional = 'expense::advertising-promotional', OtherExpenseParkingAndTolls = 'other-expense::parking-and-tolls', ExpenseDistributionCosts = 'expense::distribution-costs', LiabilityAccruedVacationPayable = 'liability::accrued-vacation-payable', OtherCurrentLiabilityOtherCurrentLiabilities = 'other-current-liability::other-current-liabilities', ExpenseOtherBusinessExpenses = 'expense::other-business-expenses', AssetAccumulatedDepletion = 'asset::accumulated-depletion', AssetOtherConsumables = 'asset::other-consumables', AssetRetainage = 'asset::retainage', LiabilityLongTermLiability = 'liability::long-term-liability', EquityPersonalExpense = 'equity::personal-expense', AssetDeferredTax = 'asset::deferred-tax', ExpenseExtraordinaryCharges = 'expense::extraordinary-charges', RevenueSalesWholesale = 'revenue::sales-wholesale', AssetDevelopmentCosts = 'asset::development-costs', OtherCurrentLiabilityCurrentLiabilities = 'other-current-liability::current-liabilities', AssetShortTermInvestmentsInRelatedParties = 'asset::short-term-investments-in-related-parties', RevenueOperatingGrants = 'revenue::operating-grants', AssetVehicles = 'asset::vehicles', AssetAssetsHeldForSale = 'asset::assets-held-for-sale', OtherExpensePenaltiesSettlements = 'other-expense::penalties-settlements', LiabilityLiabilitiesRelatedToAssetsHeldForSale = 'liability::liabilities-related-to-assets-held-for-sale', OtherCurrentLiabilityInterestPayables = 'other-current-liability::interest-payables', AssetFixedAssetSoftware = 'asset::fixed-asset-software', AssetLicenses = 'asset::licenses', AssetOtherLongTermInvestments = 'asset::other-long-term-investments', LiabilityLongTermEmployeeBenefitObligations = 'liability::long-term-employee-benefit-obligations', EquityEquityInEarningsOfSubsidiuaries = 'equity::equity-in-earnings-of-subsidiuaries', ExpenseOtherSellingExpenses = 'expense::other-selling-expenses', ExpenseShippingAndDeliveryExpense = 'expense::shipping-and-delivery-expense', LiabilityOtherLongTermProvisions = 'liability::other-long-term-provisions', AssetOtherEarMarkedBankAccounts = 'asset::other-ear-marked-bank-accounts', ExpenseOtherMiscellaneousServiceCost = 'expense::other-miscellaneous-service-cost', OtherCurrentLiabilityStateLocalIncomeTaxPayable = 'other-current-liability::state-local-income-tax-payable', OtherCurrentLiability = 'other-current-liability', AssetCapitalWip = 'asset::capital-wip', OtherExpenseDeferredTaxExpense = 'other-expense::deferred-tax-expense', RevenueOtherCurrentOperatingIncome = 'revenue::other-current-operating-income', RevenueSalesRetail = 'revenue::sales-retail', ExpenseCostOfLabor = 'expense::cost-of-labor', OtherCurrentLiabilityCurrentPortionOfObligationsUnderFinanceLeases = 'other-current-liability::current-portion-of-obligations-under-finance-leases', AssetBuildings = 'asset::buildings', CostOfGoodsSoldCostOfLaborCos = 'cost-of-goods-sold::cost-of-labor-cos', OtherExpenseMatCredit = 'other-expense::mat-credit', OtherIncomeOtherInvestmentIncome = 'other-income::other-investment-income', OtherExpenseAmortization = 'other-expense::amortization', AssetInternalTransfers = 'asset::internal-transfers', ExpensePenaltiesSettlements = 'expense::penalties-settlements', AssetLoansToStockholders = 'asset::loans-to-stockholders', LiabilityShareholderNotesPayable = 'liability::shareholder-notes-payable', OtherExpenseOtherHomeOfficeExpenses = 'other-expense::other-home-office-expenses', OtherExpense = 'other-expense', ExpenseGlobalTaxExpense = 'expense::global-tax-expense', ExpenseExternalServices = 'expense::external-services', EquityPartnersEquity = 'equity::partners-equity', OtherCurrentLiabilitySundryDebtorsAndCreditors = 'other-current-liability::sundry-debtors-and-creditors', OtherIncomeGainLossOnSaleOfInvestments = 'other-income::gain-loss-on-sale-of-investments', OtherCurrentLiabilityDirectDepositPayable = 'other-current-liability::direct-deposit-payable', RevenueRevenueGeneral = 'revenue::revenue-general', AssetInvestmentTaxExemptSecurities = 'asset::investment-tax-exempt-securities', AssetAccumulatedAmortization = 'asset::accumulated-amortization', AssetMachineryAndEquipment = 'asset::machinery-and-equipment', EquityFunds = 'equity::funds', OtherIncomeTaxExemptInterest = 'other-income::tax-exempt-interest', OtherCurrentLiabilityPayrollClearing = 'other-current-liability::payroll-clearing', OtherExpenseVehicleRepairs = 'other-expense::vehicle-repairs', RevenueCashReceiptIncome = 'revenue::cash-receipt-income', LiabilityAccrualsAndDeferredIncome = 'liability::accruals-and-deferred-income', ExpenseBadDebts = 'expense::bad-debts', OtherIncomeLossOnDisposalOfAssets = 'other-income::loss-on-disposal-of-assets', EquityDividendDisbursed = 'equity::dividend-disbursed', Expense = 'expense', OtherIncome = 'other-income', AssetFixedAssetPhone = 'asset::fixed-asset-phone', AssetLeaseBuyout = 'asset::lease-buyout', EquityPreferredStock = 'equity::preferred-stock', OtherCurrentLiabilityFederalIncomeTaxPayable = 'other-current-liability::federal-income-tax-payable', AssetOtherIntangibleAssets = 'asset::other-intangible-assets', ExpenseAuto = 'expense::auto', ExpenseProjectStudiesSurveysAssessments = 'expense::project-studies-surveys-assessments', OtherCurrentLiabilityGlobalTaxSuspense = 'other-current-liability::global-tax-suspense', EquityOpeningBalanceEquity = 'equity::opening-balance-equity', ExpenseEntertainment = 'expense::entertainment', AssetUndepositedFunds = 'asset::undeposited-funds', CostOfGoodsSoldCostOfSales = 'cost-of-goods-sold::cost-of-sales', AssetLand = 'asset::land', EquityPartnerDistributions = 'equity::partner-distributions', OtherExpenseExchangeGainOrLoss = 'other-expense::exchange-gain-or-loss', AssetDepletableAssets = 'asset::depletable-assets', LiabilityOutstandingDuesOtherThanMicroSmallEnterprise = 'liability::outstanding-dues-other-than-micro-small-enterprise', OtherCurrentLiabilityStaffAndRelatedLiabilityAccounts = 'other-current-liability::staff-and-related-liability-accounts', LiabilityBankLoans = 'liability::bank-loans', AssetRentsHeldInTrust = 'asset::rents-held-in-trust', OtherCurrentLiabilityTradeAndOtherPayables = 'other-current-liability::trade-and-other-payables', OtherExpenseVehicle = 'other-expense::vehicle', OtherExpenseUtilities = 'other-expense::utilities', EquityHealthcare = 'equity::healthcare', ExpenseInterestPaid = 'expense::interest-paid', EquityCommonStock = 'equity::common-stock', ExpenseOfficeGeneralAdministrativeExpenses = 'expense::office-general-administrative-expenses', AssetEmployeeCashAdvances = 'asset::employee-cash-advances', AssetGlobalTaxDeferred = 'asset::global-tax-deferred', AssetOtherLongTermLoansAndAdvances = 'asset::other-long-term-loans-and-advances', EquityAccumulatedOtherComprehensiveIncome = 'equity::accumulated-other-comprehensive-income', OtherExpenseIncomeTaxOtherExpense = 'other-expense::income-tax-other-expense', ExpenseFinanceCosts = 'expense::finance-costs', CostOfGoodsSoldOtherCostsOfServiceCos = 'cost-of-goods-sold::other-costs-of-service-cos', LiabilityAccruedLongTermLiabilities = 'liability::accrued-long-term-liabilities', AssetPrepaymentsAndAccruedIncome = 'asset::prepayments-and-accrued-income', ExpenseShippingFreightDelivery = 'expense::shipping-freight-delivery', EquityInvestmentGrants = 'equity::investment-grants', OtherIncomeUnrealisedLossOnSecuritiesNetOfTax = 'other-income::unrealised-loss-on-securities-net-of-tax', ExpenseAppropriationsToDepreciation = 'expense::appropriations-to-depreciation', AssetCashOnHand = 'asset::cash-on-hand', OtherCurrentLiabilityProvisionForWarrantyObligations = 'other-current-liability::provision-for-warranty-obligations', OtherCurrentLiabilityRentsInTrustLiability = 'other-current-liability::rents-in-trust-liability', AssetFixedAssetCopiers = 'asset::fixed-asset-copiers', LiabilityOtherLongTermLiabilities = 'liability::other-long-term-liabilities', CostOfGoodsSoldEquipmentRentalCos = 'cost-of-goods-sold::equipment-rental-cos', OtherCurrentLiabilityPayrollTaxPayable = 'other-current-liability::payroll-tax-payable', OtherExpenseMortgageInterest = 'other-expense::mortgage-interest', OtherCurrentLiabilityAccruedLiabilities = 'other-current-liability::accrued-liabilities', OtherCurrentLiabilityInsurancePayable = 'other-current-liability::insurance-payable', AssetInvestments = 'asset::investments', ExpenseEntertainmentMeals = 'expense::entertainment-meals', AssetInvestmentUsGovernmentObligations = 'asset::investment-us-government-obligations', OtherCurrentLiabilitySalesTaxPayable = 'other-current-liability::sales-tax-payable', RevenueIncome = 'revenue::income', AssetSavings = 'asset::savings', AssetAssetsInCourseOfConstruction = 'asset::assets-in-course-of-construction', OtherExpenseVehicleInsurance = 'other-expense::vehicle-insurance', RevenueOwnWorkCapitalized = 'revenue::own-work-capitalized', LiabilityProvisionForLiabilities = 'liability::provision-for-liabilities', OtherCurrentLiabilityTrustAccountsLiabilities = 'other-current-liability::trust-accounts-liabilities', OtherExpenseOtherVehicleExpenses = 'other-expense::other-vehicle-expenses', LiabilityDeferredTaxLiabilities = 'liability::deferred-tax-liabilities', AssetBalWithGovtAuthorities = 'asset::bal-with-govt-authorities', AssetOtherLongTermAssets = 'asset::other-long-term-assets', RevenueSavingsByTaxScheme = 'revenue::savings-by-tax-scheme', AssetLongTermInvestments = 'asset::long-term-investments', EquityShareCapital = 'equity::share-capital', ExpenseBorrowingCost = 'expense::borrowing-cost', ExpenseTravelExpensesSellingExpense = 'expense::travel-expenses-selling-expense', ExpenseSundry = 'expense::sundry', Equity = 'equity', ExpenseCharitableContributions = 'expense::charitable-contributions', OtherExpenseRepairsAndMaintenance = 'other-expense::repairs-and-maintenance', EquityMoneyReceivedAgainstShareWarrants = 'equity::money-received-against-share-warrants', LiabilityAccountsPayable = 'liability::accounts-payable', LiabilityDebtsRelatedToParticipatingInterests = 'liability::debts-related-to-participating-interests', AssetAssetsAvailableForSale = 'asset::assets-available-for-sale', AssetLandAsset = 'asset::land-asset', EquityOwnersEquity = 'equity::owners-equity', EquityShareApplicationMoneyPendingAllotment = 'equity::share-application-money-pending-allotment', ExpenseLegalProfessionalFees = 'expense::legal-professional-fees', AssetLoansToOfficers = 'asset::loans-to-officers', LiabilityProvisionsNonCurrentLiabilities = 'liability::provisions-non-current-liabilities', ExpenseBankCharges = 'expense::bank-charges', AssetGoodwill = 'asset::goodwill', ExpenseEquipmentRental = 'expense::equipment-rental', AssetChecking = 'asset::checking', ExpensePurchasesRebates = 'expense::purchases-rebates', OtherExpenseOtherMiscellaneousExpense = 'other-expense::other-miscellaneous-expense', AssetIntangibleAssets = 'asset::intangible-assets', AssetGlobalTaxRefund = 'asset::global-tax-refund', AssetCumulativeDepreciationOnIntangibleAssets = 'asset::cumulative-depreciation-on-intangible-assets', AssetLongTermLoansAndAdvancesToRelatedParties = 'asset::long-term-loans-and-advances-to-related-parties', AssetTradeAndOtherReceivables = 'asset::trade-and-other-receivables', LiabilityLongTermBorrowings = 'liability::long-term-borrowings', OtherExpenseVehicleLoanInterest = 'other-expense::vehicle-loan-interest', EquityRetainedEarnings = 'equity::retained-earnings', ExpenseTaxesPaid = 'expense::taxes-paid', OtherExpenseWashAndRoadServices = 'other-expense::wash-and-road-services', OtherExpenseTaxRoundoffGainOrLoss = 'other-expense::tax-roundoff-gain-or-loss', OtherExpenseVehicleLoan = 'other-expense::vehicle-loan', AssetProvisionsNonCurrentAssets = 'asset::provisions-non-current-assets', OtherCurrentLiabilityLoanPayable = 'other-current-liability::loan-payable', EquityPaidInCapitalOrSurplus = 'equity::paid-in-capital-or-surplus', AssetFixedAsset = 'asset::fixed-asset', AssetInvestmentOther = 'asset::investment-other', ExpenseOfficeExpenses = 'expense::office-expenses', AssetBank = 'asset::bank', RevenueDiscountsRefundsGiven = 'revenue::discounts-refunds-given', AssetSecurityDeposits = 'asset::security-deposits', OtherExpenseExceptionalItems = 'other-expense::exceptional-items', OtherExpenseExtraordinaryItems = 'other-expense::extraordinary-items', AssetIntangibleAssetsUnderDevelopment = 'asset::intangible-assets-under-development', AssetAccumulatedAmortizationOfOtherAssets = 'asset::accumulated-amortization-of-other-assets', OtherCurrentLiabilityShortTermBorrowings = 'other-current-liability::short-term-borrowings', OtherExpenseHomeOwnerRentalInsurance = 'other-expense::home-owner-rental-insurance', AssetOtherFixedAssets = 'asset::other-fixed-assets', CostOfGoodsSold = 'cost-of-goods-sold', ExpenseIncomeTaxExpense = 'expense::income-tax-expense', CostOfGoodsSoldFreightAndDeliveryCost = 'cost-of-goods-sold::freight-and-delivery-cost', EquityCalledUpShareCapital = 'equity::called-up-share-capital', EquityCapitalReserves = 'equity::capital-reserves', AssetProvisionsCurrentAssets = 'asset::provisions-current-assets', EquityPersonalIncome = 'equity::personal-income', ExpenseCommissionsAndFees = 'expense::commissions-and-fees', ExpenseManagementCompensation = 'expense::management-compensation', ExpenseRentOrLeaseOfBuildings = 'expense::rent-or-lease-of-buildings', AssetInvestmentMortgageRealEstateLoans = 'asset::investment-mortgage-real-estate-loans', LiabilityObligationsUnderFinanceLeases = 'liability::obligations-under-finance-leases', LiabilityOutstandingDuesMicroSmallEnterprise = 'liability::outstanding-dues-micro-small-enterprise', AssetOtherAsset = 'asset::other-asset', ExpenseAmortizationExpense = 'expense::amortization-expense', AssetParticipatingInterests = 'asset::participating-interests', ExpenseUnappliedCashBillPaymentExpense = 'expense::unapplied-cash-bill-payment-expense', LiabilityStaffAndRelatedLongTermLiabilityAccounts = 'liability::staff-and-related-long-term-liability-accounts', EquityAccumulatedAdjustment = 'equity::accumulated-adjustment', AssetMoneyMarket = 'asset::money-market', AssetPrepaidExpenses = 'asset::prepaid-expenses', OtherIncomeOtherMiscellaneousIncome = 'other-income::other-miscellaneous-income', AssetCalledUpShareCapitalNotPaid = 'asset::called-up-share-capital-not-paid', ExpenseRepairMaintenance = 'expense::repair-maintenance', ExpenseUtilities = 'expense::utilities', OtherCurrentLiabilityPrepaidExpensesPayable = 'other-current-liability::prepaid-expenses-payable', AssetLeaseholdImprovements = 'asset::leasehold-improvements', AssetLoansToOthers = 'asset::loans-to-others', AssetProvisionsFixedAssets = 'asset::provisions-fixed-assets', AssetFixedAssetOtherToolsEquipment = 'asset::fixed-asset-other-tools-equipment', AssetShortTermLoansAndAdvancesToRelatedParties = 'asset::short-term-loans-and-advances-to-related-parties', ExpenseLossOnDiscontinuedOperationsNetOfTax = 'expense::loss-on-discontinued-operations-net-of-tax', ExpenseTravel = 'expense::travel', OtherIncomeInterestEarned = 'other-income::interest-earned', AssetOtherCurrentAssets = 'asset::other-current-assets', OtherIncomeOtherOperatingIncome = 'other-income::other-operating-income', Asset = 'asset', ExpensePromotionalMeals = 'expense::promotional-meals', ExpenseStaffCosts = 'expense::staff-costs', OtherExpenseHomeOffice = 'other-expense::home-office', EquityPartnerContributions = 'equity::partner-contributions', ExpenseSuppliesMaterials = 'expense::supplies-materials', ExpenseDuesSubscriptions = 'expense::dues-subscriptions', OtherExpenseVehicleLease = 'other-expense::vehicle-lease', OtherCurrentLiabilitySocialSecurityAgencies = 'other-current-liability::social-security-agencies', LiabilityGroupAndAssociates = 'liability::group-and-associates', OtherCurrentLiabilityProvisionsCurrentLiabilities = 'other-current-liability::provisions-current-liabilities', OtherIncomeDividendIncome = 'other-income::dividend-income', OtherExpenseRentAndLease = 'other-expense::rent-and-lease', EquityOtherFreeReserves = 'equity::other-free-reserves', OtherCurrentLiabilityDutiesAndTaxes = 'other-current-liability::duties-and-taxes', AssetInventory = 'asset::inventory', AssetNonCurrentAssets = 'asset::non-current-assets', AssetAllowanceForBadDebts = 'asset::allowance-for-bad-debts', AssetOrganizationalCosts = 'asset::organizational-costs', LiabilityLongTermDebit = 'liability::long-term-debit', AssetOtherCurrentAsset = 'asset::other-current-asset', AssetTrustAccounts = 'asset::trust-accounts', OtherExpensePriorPeriodItems = 'other-expense::prior-period-items', OtherCurrentLiabilityCurrentPortionEmployeeBenefitsObligations = 'other-current-liability::current-portion-employee-benefits-obligations', ExpenseOtherRentalCosts = 'expense::other-rental-costs', ExpensePayrollExpenses = 'expense::payroll-expenses', AssetCashAndCashEquivalents = 'asset::cash-and-cash-equivalents', EquityTreasuryStock = 'equity::treasury-stock', LiabilityGovernmentAndOtherPublicAuthorities = 'liability::government-and-other-public-authorities', AssetAccumulatedDepreciation = 'asset::accumulated-depreciation', OtherExpenseDepletion = 'other-expense::depletion', RevenueNonProfitIncome = 'revenue::non-profit-income', OtherCurrentLiabilityCurrentTaxLiability = 'other-current-liability::current-tax-liability', RevenueSalesOfProductIncome = 'revenue::sales-of-product-income', RevenueServiceFeeIncome = 'revenue::service-fee-income', RevenueUnappliedCashPaymentIncome = 'revenue::unapplied-cash-payment-income', AssetFurnitureAndFixtures = 'asset::furniture-and-fixtures', ExpenseTravelMeals = 'expense::travel-meals', LiabilityCreditCard = 'liability::credit-card', AssetExpenditureAuthorisationsAndLettersOfCredit = 'asset::expenditure-authorisations-and-letters-of-credit', ExpenseOtherExternalServices = 'expense::other-external-services', AssetFixedAssetFurniture = 'asset::fixed-asset-furniture', ExpenseTravelExpensesGeneralAndAdminExpenses = 'expense::travel-expenses-general-and-admin-expenses', OtherCurrentLiabilityLineOfCredit = 'other-current-liability::line-of-credit', ExpenseOtherCurrentOperatingCharges = 'expense::other-current-operating-charges', AssetFixedAssetComputers = 'asset::fixed-asset-computers', OtherCurrentLiabilityDividendsPayable = 'other-current-liability::dividends-payable', OtherExpenseDepreciation = 'other-expense::depreciation', OtherExpenseVehicleRegistration = 'other-expense::vehicle-registration', Income = 'income' }
export const enum Gender { PreferNotToSay = 'prefer not to say', Other = 'other', Male = 'male', Female = 'female' }
export const enum ReceiverRoles { Admin = 'admin', User = 'user', Moderator = 'moderator' }
export const enum CustomerSelection { All = 'all', Prerequisite = 'prerequisite' }
export const enum SkuValidation { GlobalUnique = 'global-unique', LocalUnique = 'local-unique', None = 'none' }
export const enum UserRoles { Admin = 'admin', User = 'user', Moderator = 'moderator' }
export const enum Roles { User = 'user', Admin = 'admin', Moderator = 'moderator' }
export const enum ChannelAvailability { InApp = 'in-app', InStore = 'in-store', AllChannels = 'all-channels', Online = 'online' }
export const enum VisibilityScope { Global = 'global', App = 'app', Private = 'private', Internal = 'internal', Web = 'web' }
export const enum UserStatus { Verified = 'verified', Active = 'active', Suspended = 'suspended', Banned = 'banned', Archived = 'archived', Deleted = 'deleted', WaitListed = 'wait-listed', Inactive = 'inactive', Pending = 'pending' }
export const enum UniversalIdentifierType { Uuid = 'uuid', Number = 'number', Email = 'email', Url = 'url', String = 'string' }
export const enum TransactionType { Withdrawal = 'withdrawal', Payment = 'payment', Refund = 'refund', Fee = 'fee', Deposit = 'deposit', Transfer = 'transfer', Adjustment = 'adjustment', Charge = 'charge' }
export const enum TransactionStatus { Initiated = 'initiated', InProgress = 'in-progress', Pending = 'pending', Failed = 'failed', Cancelled = 'cancelled', Error = 'error', Succeeded = 'succeeded' }
export const enum TransactionChannel { Mobile = 'mobile', BankBranch = 'bank-branch', Telephone = 'telephone', Atm = 'atm', InPerson = 'in-person', Online = 'online', Other = 'other', Mail = 'mail' }
export const enum ToolCallType { Function = 'function' }
export const enum TimeCycle { Triennially = 'triennially', Secondly = 'secondly', Hourly = 'hourly', Biweekly = 'biweekly', SemiMonthly = 'semi-monthly', Quarterly = 'quarterly', Monthly = 'monthly', Annually = 'annually', Biennially = 'biennially', Daily = 'daily', SemiAnnually = 'semi-annually', Custom = 'custom', Minutely = 'minutely', AdHoc = 'ad-hoc', Weekly = 'weekly' }
export const enum TaxType { Variable = 'variable', Inclusive = 'inclusive', Additive = 'additive' }
export const enum TaskStatus { Blocked = 'blocked', Cancelled = 'cancelled', Done = 'done', InProgress = 'in-progress', Todo = 'todo', OnHold = 'on-hold' }
export const enum TableType { Snapshot = 'snapshot', Table = 'table', View = 'view', External = 'external', MaterializedView = 'materialized-view' }
export const enum SupportTicketPriority { Immediate = 'immediate', Low = 'low', High = 'high', Urgent = 'urgent', Medium = 'medium' }
export const enum SupportQueryType { FeatureRequest = 'feature-request', Feedback = 'feedback', Bug = 'bug', Problem = 'problem', Task = 'task', Question = 'question', Incident = 'incident' }
export const enum StakeholderType { Customer = 'customer', Investor = 'investor', Competitor = 'competitor', Vendor = 'vendor', Partner = 'partner', Other = 'other' }
export const enum SpeakerRole { Invitee = 'invitee', Attendee = 'attendee' }
export const enum SocialPlatform { Reddit = 'reddit', OtherSocialPlatform = 'other-social-platform', Instagram = 'instagram', Tiktok = 'tiktok', Snapchat = 'snapchat', Facebook = 'facebook', Pinterest = 'pinterest', Twitter = 'twitter', Linkedin = 'linkedin', Youtube = 'youtube', Tumblr = 'tumblr', Skype = 'skype', X = 'x' }
export const enum ReviewApprovalStatus { InReview = 'in-review', Approved = 'approved', Rejected = 'rejected', Pending = 'pending', Revised = 'revised' }
export const enum ResponseFormatType { JsonObject = 'json-object', Text = 'text', JsonSchema = 'json-schema' }
export const enum ReactionType { Dislike = 'dislike', Angry = 'angry', Wow = 'wow', Like = 'like', Laugh = 'laugh', Bookmark = 'bookmark', Sad = 'sad', Interested = 'interested', Love = 'love' }
export const enum PromotionType { Other = 'other', Percentage = 'percentage', FreeShipping = 'free-shipping', BuyOneGetOne = 'buy-one-get-one', RewardPoints = 'reward-points', FixedAmount = 'fixed-amount' }
export const enum ProductAvailabilityStatus { InStock = 'in-stock', BackOrder = 'back-order', OutOfStock = 'out-of-stock', PreOrder = 'pre-order', Discontinued = 'discontinued' }
export const enum PriorityLevel { High = 'high', Medium = 'medium', Urgent = 'urgent', Low = 'low', Elevated = 'elevated' }
export const enum PrerequisiteRangeType { ShippingPrice = 'shipping-price', Subtotal = 'subtotal', Quantity = 'quantity' }
export const enum PrepaidType { Prepaid = 'prepaid', NotPrepaid = 'not-prepaid', UnknownPrepaid = 'unknown-prepaid' }
export const enum PaymentTerm { Prepayment = 'prepayment', Custom = 'custom', DueEndOfMonth = 'due-end-of-month', Prepaid = 'prepaid', Installment = 'installment', Net = 'net', Net90 = 'net-90', DueOnReceipt = 'due-on-receipt', CashInAdvance = 'cash-in-advance', Net60 = 'net-60', CashBeforeShipment = 'cash-before-shipment', UponCompletion = 'upon-completion', CashWithOrder = 'cash-with-order', DeferredPayment = 'deferred-payment', Net30 = 'net-30', CashOnDelivery = 'cash-on-delivery' }
export const enum PaymentStatus { Overdue = 'overdue', Error = 'error', Authorized = 'authorized', Submitted = 'submitted', Paid = 'paid', Refunded = 'refunded', Deleted = 'deleted', Voided = 'voided', Adjusted = 'adjusted', Partial = 'partial', PartiallyRefunded = 'partially-refunded', Pending = 'pending', Disputed = 'disputed', Failed = 'failed', Draft = 'draft', Processing = 'processing', Cancelled = 'cancelled', Succeeded = 'succeeded' }
export const enum PaymentMethod { DebitCard = 'debit-card', CreditCard = 'credit-card', MobileWallet = 'mobile-wallet', Paypal = 'paypal', Cash = 'cash', Cryptocurrency = 'cryptocurrency', MobilePayment = 'mobile-payment', CashOnDelivery = 'cash-on-delivery', Other = 'other', BankTransfer = 'bank-transfer', Check = 'check' }
export const enum ParticipantType { Group = 'group', Organization = 'organization', User = 'user', Team = 'team', ExternalParticipant = 'external-participant' }
export const enum ParticipantEngagementStatus { Guest = 'guest', Active = 'active', Inactive = 'inactive', Banned = 'banned', Left = 'left', Admin = 'admin', Moderator = 'moderator' }
export const enum OrganizationalRole { Director = 'director', Contractor = 'contractor', Employee = 'employee', Other = 'other', Manager = 'manager', Supervisor = 'supervisor', Admin = 'admin' }
export const enum OrderingCriteria { PriceAscending = 'price-ascending', CreationDate = 'creation-date', Manual = 'manual', Popularity = 'popularity', PriceDescending = 'price-descending', Relevance = 'relevance', Rating = 'rating', Alphabetical = 'alphabetical' }
export const enum OrderStatus { AwaitingPayment = 'awaiting-payment', Cancelled = 'cancelled', Shipped = 'shipped', Draft = 'draft', Pending = 'pending', Refunded = 'refunded', AwaitingPickup = 'awaiting-pickup', Failed = 'failed', Confirmed = 'confirmed', Processing = 'processing', PartiallyFulfilled = 'partially-fulfilled', Abandoned = 'abandoned', Returned = 'returned', AwaitingShipment = 'awaiting-shipment', Disputed = 'disputed', Delivered = 'delivered', Completed = 'completed', OnHold = 'on-hold' }
export const enum ModifierType { Text = 'text', List = 'list' }
export const enum MimeType { ImagePng = 'image/png', ImageGif = 'image/gif', ImageSvgXml = 'image/svg+xml', ImageWebp = 'image/webp', ImageJpeg = 'image/jpeg' }
export const enum MessageReadStatus { Delivered = 'delivered', Unsent = 'unsent', Sent = 'sent', Failed = 'failed', Read = 'read' }
export const enum MessageDeliveryStatus { Pending = 'pending', Error = 'error', Undeliverable = 'undeliverable', Delivered = 'delivered', Sent = 'sent', Read = 'read', Failed = 'failed' }
export const enum MessageContentType { Html = 'html', Video = 'video', File = 'file', Link = 'link', Location = 'location', Sticker = 'sticker', Image = 'image', Voice = 'voice', Text = 'text', Audio = 'audio', Document = 'document', Gif = 'gif', Contact = 'contact' }
export const enum LifecycleStatus { Issued = 'issued', Active = 'active', Expired = 'expired', Suspended = 'suspended', Cancelled = 'cancelled', Redeemed = 'redeemed' }
export const enum LeadLifecycleStatus { New = 'new', Unqualified = 'unqualified', InProcess = 'in-process', Converted = 'converted', Open = 'open', AttemptedToContact = 'attempted-to-contact', Connected = 'connected', Revisited = 'revisited', BadTiming = 'bad-timing', Lost = 'lost' }
export const enum JsonSchemaType { Function = 'function' }
export const enum JournalEntryStatus { Draft = 'draft', Posted = 'posted', Voided = 'voided', Error = 'error', Pending = 'pending', Corrected = 'corrected' }
export const enum ItemEntityStatus { Archived = 'archived', Suspended = 'suspended', Deleted = 'deleted', Inactive = 'inactive', Pending = 'pending', Completed = 'completed', Active = 'active' }
export const enum ItemCondition { Used = 'used', New = 'new', Refurbished = 'refurbished', LikeNew = 'like-new', OpenBox = 'open-box', Damaged = 'damaged' }
export const enum ItemAvailabilityStatus { OutOfStock = 'out-of-stock', Active = 'active', Discontinued = 'discontinued', Inactive = 'inactive' }
export const enum IssueLifecycleStatus { InProgress = 'in-progress', Resolved = 'resolved', Pending = 'pending', Closed = 'closed', Waiting = 'waiting', OnHold = 'on-hold', Cancelled = 'cancelled', Open = 'open' }
export const enum InvoiceAdjustmentType { Tip = 'tip', Shipping = 'shipping', Discount = 'discount', Other = 'other', Tax = 'tax' }
export const enum InventoryStorageType { RetailStore = 'retail-store', DistributionCenter = 'distribution-center', DropShipper = 'drop-shipper', Consignment = 'consignment', Other = 'other', OnlineMarketplace = 'online-marketplace', Warehouse = 'warehouse' }
export const enum ImageType { Base64 = 'base64' }
export const enum ImageMimeType { ImageSvgXml = 'image/svg+xml', ImageJpeg = 'image/jpeg', ImageBmp = 'image/bmp', ImageHeic = 'image/heic', ImageGif = 'image/gif', ImageWebp = 'image/webp', ImageTiff = 'image/tiff', ImagePng = 'image/png' }
export const enum IdentityProvider { Paypal = 'paypal', Reddit = 'reddit', Github = 'github', Tiktok = 'tiktok', Signal = 'signal', Flickr = 'flickr', Slack = 'slack', Microsoft = 'microsoft', Amazon = 'amazon', Linkedin = 'linkedin', Foursquare = 'foursquare', Discord = 'discord', Snapchat = 'snapchat', Google = 'google', Twitter = 'twitter', Instagram = 'instagram', Pinterest = 'pinterest', Tumblr = 'tumblr', Behance = 'behance', Line = 'line', Other = 'other', Yahoo = 'yahoo', Telegram = 'telegram', Dribbble = 'dribbble', Vimeo = 'vimeo', Wechat = 'wechat', Qq = 'qq', Apple = 'apple', Whatsapp = 'whatsapp', Facebook = 'facebook' }
export const enum GlobalTaxType { SalesTax = 'sales-tax', ExciseTax = 'excise-tax', PropertyTax = 'property-tax', Other = 'other', Vat = 'vat', Gst = 'gst', CustomsDuty = 'customs-duty' }
export const enum GenderIdentity { Other = 'other', PreferNotToSay = 'prefer-not-to-say', Male = 'male', Female = 'female' }
export const enum FulfillmentStatus { Returned = 'returned', Pending = 'pending', Failure = 'failure', Cancelled = 'cancelled', InTransit = 'in-transit', Delivered = 'delivered' }
export const enum FinancialTransactionType { Payment = 'payment', Withdrawal = 'withdrawal', Deposit = 'deposit', Chargeback = 'chargeback', ReceiveOverpayment = 'receive-overpayment', Interest = 'interest', Transfer = 'transfer', Fee = 'fee', Dividend = 'dividend', Refund = 'refund', Receive = 'receive', ReceivePrepayment = 'receive-prepayment', Spend = 'spend', SpendOverpayment = 'spend-overpayment', Other = 'other', Charge = 'charge', Adjustment = 'adjustment', Sale = 'sale', SpendPrepayment = 'spend-prepayment' }
export const enum FinancialTransactionStatus { SettlementInProgress = 'settlement-in-progress', Failed = 'failed', Refunded = 'refunded', Authorized = 'authorized', Disputed = 'disputed', Pending = 'pending', Cancelled = 'cancelled', Cleared = 'cleared' }
export const enum FinancialTrackingCategories { Class = 'class', Product = 'product', Department = 'department', None = 'none', Other = 'other', Project = 'project', CostCenter = 'cost-center', Service = 'service', Location = 'location', Division = 'division', Customer = 'customer', Employee = 'employee', Vendor = 'vendor' }
export const enum FinancialDisputeStatus { Lost = 'lost', Closed = 'closed', Escalated = 'escalated', NeedsResponse = 'needs-response', AwaitingEvidence = 'awaiting-evidence', ChargeRefunded = 'charge-refunded', UnderReview = 'under-review', Won = 'won' }
export const enum FinancialChargeType { LateFee = 'late-fee', InterestCharge = 'interest-charge', TransactionFee = 'transaction-fee', Other = 'other', ServiceCharge = 'service-charge', ProcessingFee = 'processing-fee', Commission = 'commission' }
export const enum FinancialAccountStatus { Suspended = 'suspended', Closed = 'closed', Frozen = 'frozen', Active = 'active', UnderReview = 'under-review', Inactive = 'inactive', Delinquent = 'delinquent' }
export const enum FileType { Url = 'url', Folder = 'folder', File = 'file' }
export const enum ExpenseApprovalStatus { Cancelled = 'cancelled', Pending = 'pending', Approved = 'approved', Denied = 'denied', Reimbursed = 'reimbursed', Processed = 'processed', New = 'new', Reviewing = 'reviewing' }
export const enum EventVisibility { Private = 'private', Confidential = 'confidential', Public = 'public' }
export const enum EventStatus { Tentative = 'tentative', Cancelled = 'cancelled', Confirmed = 'confirmed' }
export const enum EventRuleType { ExcludeDates = 'exclude-dates', Repeat = 'repeat', Exclude = 'exclude', AddDates = 'add-dates' }
export const enum EventReminderAction { Popup = 'popup', Email = 'email' }
export const enum EventFrequency { Weekly = 'weekly', Monthly = 'monthly', Daily = 'daily', Yearly = 'yearly' }
export const enum EntryMethod { Emv = 'emv', Swiped = 'swiped', Keyed = 'keyed', OnFile = 'on-file', Contactless = 'contactless' }
export const enum EntityLifecycleStatus { Active = 'active', Preorder = 'preorder', Draft = 'draft', Archived = 'archived', Deleted = 'deleted', Inactive = 'inactive', Scheduled = 'scheduled' }
export const enum EntityCategory { Message = 'message', Task = 'task', Event = 'event', Project = 'project', User = 'user', Other = 'other', Link = 'link', Person = 'person', Owner = 'owner', Document = 'document' }
export const enum EmploymentType { Permanent = 'permanent', PartTime = 'part-time', Volunteer = 'volunteer', Internship = 'internship', FullTime = 'full-time', Freelance = 'freelance', Temporary = 'temporary', Seasonal = 'seasonal', Contract = 'contract' }
export const enum EmploymentAndCandidateStatus { Inactive = 'inactive', Hired = 'hired', Terminated = 'terminated', Interviewing = 'interviewing', OfferExtended = 'offer-extended', OnLeave = 'on-leave', Other = 'other', Active = 'active', InReview = 'in-review', NotSelected = 'not-selected', New = 'new' }
export const enum EmailCategoryType { Educational = 'educational', Governmental = 'governmental', Other = 'other', Spam = 'spam', Business = 'business', Transactional = 'transactional', Promotional = 'promotional', Personal = 'personal' }
export const enum DiscountType { ConditionalDiscount = 'conditional-discount', Percentage = 'percentage', FixedAmount = 'fixed-amount', UnknownDiscount = 'unknown-discount', VariablePercentage = 'variable-percentage', BuyOneGetOne = 'buy-one-get-one', TieredDiscount = 'tiered-discount', VariableAmount = 'variable-amount' }
export const enum DeviceUsageType { Home = 'home', Other = 'other', Industrial = 'industrial', Educational = 'educational', Healthcare = 'healthcare', Personal = 'personal', Business = 'business' }
export const enum DayOfWeek { Sunday = 'sunday', Saturday = 'saturday', Monday = 'monday', Friday = 'friday', Wednesday = 'wednesday', Tuesday = 'tuesday', Thursday = 'thursday' }
export const enum DatabaseType { External = 'external', Public = 'public', Default = 'default', Linked = 'linked' }
export const enum DataType { Object = 'object', Custom = 'custom', String = 'string', Json = 'json', Boolean = 'boolean', Date = 'date', Null = 'null', Undefined = 'undefined', Number = 'number', Binary = 'binary', Array = 'array', Timestamp = 'timestamp' }
export const enum CvvStatus { Rejected = 'rejected', NotChecked = 'not-checked', Accepted = 'accepted' }
export const enum CustomerType { Wholesale = 'wholesale', Online = 'online', B2c = 'b2c', B2b = 'b2b', Corporate = 'corporate', Retail = 'retail' }
export const enum CustomerStatus { Active = 'active', Archived = 'archived', Pending = 'pending', Inactive = 'inactive', Suspended = 'suspended' }
export const enum CustomerEligibilityStatus { VipCustomers = 'vip-customers', Other = 'other', SpecificConditions = 'specific-conditions', NewCustomers = 'new-customers', ReturningCustomers = 'returning-customers', AllCustomers = 'all-customers' }
export const enum Currency { MYR = 'myr', CHF = 'chf', EGP = 'egp', MUR = 'mur', TOP = 'top', IDR = 'idr', CVE = 'cve', GIP = 'gip', GNF = 'gnf', PHP = 'php', ANG = 'ang', BWP = 'bwp', BYN = 'byn', CLP = 'clp', CZK = 'czk', FJD = 'fjd', DZD = 'dzd', GYD = 'gyd', KHR = 'khr', MOP = 'mop', GTQ = 'gtq', NPR = 'npr', PAB = 'pab', PLN = 'pln', PYG = 'pyg', QAR = 'qar', SCR = 'scr', GMD = 'gmd', MNT = 'mnt', AUD = 'aud', HTG = 'htg', AMD = 'amd', SEK = 'sek', VES = 'ves', KPW = 'kpw', CDF = 'cdf', GHS = 'ghs', UGX = 'ugx', AFN = 'afn', VUV = 'vuv', XDR = 'xdr', ZMW = 'zmw', BRL = 'brl', UYU = 'uyu', IQD = 'iqd', BDT = 'bdt', ERN = 'ern', JEP = 'jep', TRY = 'try', XCD = 'xcd', LKR = 'lkr', DKK = 'dkk', LSL = 'lsl', SBD = 'sbd', SRD = 'srd', ILS = 'ils', BND = 'bnd', MGA = 'mga', SSP = 'ssp', NOK = 'nok', PKR = 'pkr', KZT = 'kzt', MAD = 'mad', SOS = 'sos', HNL = 'hnl', FKP = 'fkp', AZN = 'azn', SGD = 'sgd', JOD = 'jod', NAD = 'nad', LBP = 'lbp', SHP = 'shp', THB = 'thb', UAH = 'uah', ALL = 'all', KYD = 'kyd', BTN = 'btn', COP = 'cop', PEN = 'pen', CNY = 'cny', KMF = 'kmf', KRW = 'krw', DJF = 'djf', BGN = 'bgn', KID = 'kid', LRD = 'lrd', SDG = 'sdg', RON = 'ron', SZL = 'szl', MMK = 'mmk', TTD = 'ttd', LYD = 'lyd', IRR = 'irr', USD = 'usd', XPF = 'xpf', AED = 'aed', JPY = 'jpy', OMR = 'omr', ETB = 'etb', NIO = 'nio', MXN = 'mxn', RUB = 'rub', ZWL = 'zwl', TND = 'tnd', INR = 'inr', TZS = 'tzs', VND = 'vnd', XAF = 'xaf', TWD = 'twd', HRK = 'hrk', HUF = 'huf', YER = 'yer', BZD = 'bzd', KGS = 'kgs', AOA = 'aoa', CUP = 'cup', PGK = 'pgk', MDL = 'mdl', EUR = 'eur', JMD = 'jmd', GGP = 'ggp', BHD = 'bhd', KWD = 'kwd', SAR = 'sar', KES = 'kes', STN = 'stn', GEL = 'gel', MZN = 'mzn', MKD = 'mkd', BMD = 'bmd', RSD = 'rsd', NGN = 'ngn', FOK = 'fok', AWG = 'awg', TJS = 'tjs', TMT = 'tmt', ARS = 'ars', DOP = 'dop', IMP = 'imp', UZS = 'uzs', ISK = 'isk', MRU = 'mru', GBP = 'gbp', SYP = 'syp', TVD = 'tvd', WST = 'wst', RWF = 'rwf', MVR = 'mvr', NZD = 'nzd', BAM = 'bam', BBD = 'bbd', MWK = 'mwk', BSD = 'bsd', BOB = 'bob', CAD = 'cad', CUC = 'cuc', HKD = 'hkd', CRC = 'crc', BIF = 'bif', SLL = 'sll', ZAR = 'zar', LAK = 'lak', XOF = 'xof' }
export const enum CreditType { Overpayment = 'overpayment', Customer = 'customer', Prepayment = 'prepayment', Goodwill = 'goodwill', Supplier = 'supplier' }
export const enum CreditNoteStatus { Void = 'void', Cancelled = 'cancelled', Draft = 'draft', Failed = 'failed', Succeeded = 'succeeded', Pending = 'pending', Disputed = 'disputed', Error = 'error', Applied = 'applied', Issued = 'issued', Completed = 'completed', Partial = 'partial', Paid = 'paid', Submitted = 'submitted', Revised = 'revised' }
export const enum Country { Ireland = 'ireland', Japan = 'japan', Paraguay = 'paraguay', Hungary = 'hungary', Poland = 'poland', CaboVerde = 'cabo-verde', SouthKorea = 'south-korea', Ecuador = 'ecuador', EquatorialGuinea = 'equatorial-guinea', Tanzania = 'tanzania', Laos = 'laos', Libya = 'libya', Guyana = 'guyana', Ukraine = 'ukraine', Colombia = 'colombia', Guinea = 'guinea', Nigeria = 'nigeria', Mali = 'mali', Iceland = 'iceland', Somalia = 'somalia', Georgia = 'georgia', Djibouti = 'djibouti', Fiji = 'fiji', CzechRepublic = 'czech-republic', Mozambique = 'mozambique', NorthKorea = 'north-korea', Pakistan = 'pakistan', Cameroon = 'cameroon', Taiwan = 'taiwan', Italy = 'italy', Panama = 'panama', Cuba = 'cuba', Argentina = 'argentina', GuineaBissau = 'guinea-bissau', Luxembourg = 'luxembourg', Niger = 'niger', Gabon = 'gabon', Australia = 'australia', Lesotho = 'lesotho', NorthMacedonia = 'north-macedonia', TimorLeste = 'timor-leste', Palau = 'palau', Singapore = 'singapore', Kenya = 'kenya', VaticanCity = 'vatican-city', Namibia = 'namibia', PapuaNewGuinea = 'papua-new-guinea', Malawi = 'malawi', India = 'india', Nauru = 'nauru', Andorra = 'andorra', Egypt = 'egypt', Bangladesh = 'bangladesh', BurkinaFaso = 'burkina-faso', Philippines = 'philippines', Slovakia = 'slovakia', SaintVincentAndTheGrenadines = 'saint-vincent-and-the-grenadines', Bulgaria = 'bulgaria', TrinidadAndTobago = 'trinidad-and-tobago', Burundi = 'burundi', Zimbabwe = 'zimbabwe', Eritrea = 'eritrea', Oman = 'oman', Romania = 'romania', Liberia = 'liberia', Comoros = 'comoros', Samoa = 'samoa', DominicanRepublic = 'dominican-republic', SanMarino = 'san-marino', Slovenia = 'slovenia', Switzerland = 'switzerland', Montenegro = 'montenegro', Thailand = 'thailand', Norway = 'norway', Armenia = 'armenia', Bolivia = 'bolivia', Liechtenstein = 'liechtenstein', CongoDemocraticRepublic = 'congo-democratic-republic', UnitedKingdom = 'united-kingdom', Estonia = 'estonia', Algeria = 'algeria', Jamaica = 'jamaica', NewZealand = 'new-zealand', SouthAfrica = 'south-africa', SriLanka = 'sri-lanka', Tajikistan = 'tajikistan', Belarus = 'belarus', Malaysia = 'malaysia', CoteDIvoire = 'cote-d-ivoire', Albania = 'albania', Denmark = 'denmark', France = 'france', Uzbekistan = 'uzbekistan', Azerbaijan = 'azerbaijan', BosniaAndHerzegovina = 'bosnia-and-herzegovina', Kiribati = 'kiribati', Zambia = 'zambia', Finland = 'finland', Iraq = 'iraq', AntiguaAndBarbuda = 'antigua-and-barbuda', Benin = 'benin', Kyrgyzstan = 'kyrgyzstan', Maldives = 'maldives', Malta = 'malta', Nicaragua = 'nicaragua', SierraLeone = 'sierra-leone', Honduras = 'honduras', Dominica = 'dominica', Chad = 'chad', SolomonIslands = 'solomon-islands', Chile = 'chile', CongoRepublic = 'congo-republic', Portugal = 'portugal', Spain = 'spain', China = 'china', Gambia = 'gambia', Jordan = 'jordan', Syria = 'syria', Guatemala = 'guatemala', MarshallIslands = 'marshall-islands', Myanmar = 'myanmar', Kuwait = 'kuwait', Latvia = 'latvia', Netherlands = 'netherlands', Senegal = 'senegal', Monaco = 'monaco', Palestine = 'palestine', Tonga = 'tonga', Turkey = 'turkey', UnitedStates = 'united-states', Vanuatu = 'vanuatu', Venezuela = 'venezuela', Seychelles = 'seychelles', Russia = 'russia', Yemen = 'yemen', Moldova = 'moldova', Ethiopia = 'ethiopia', CentralAfricanRepublic = 'central-african-republic', Indonesia = 'indonesia', Brazil = 'brazil', Serbia = 'serbia', Qatar = 'qatar', Sudan = 'sudan', Vietnam = 'vietnam', Barbados = 'barbados', Germany = 'germany', Croatia = 'croatia', Greece = 'greece', Israel = 'israel', Madagascar = 'madagascar', SaoTomeAndPrincipe = 'sao-tome-and-principe', Iran = 'iran', Peru = 'peru', Austria = 'austria', Canada = 'canada', Bahamas = 'bahamas', Bahrain = 'bahrain', SouthSudan = 'south-sudan', Sweden = 'sweden', Mauritania = 'mauritania', Mexico = 'mexico', Bhutan = 'bhutan', Belgium = 'belgium', Kazakhstan = 'kazakhstan', ElSalvador = 'el-salvador', SaintKittsAndNevis = 'saint-kitts-and-nevis', Cyprus = 'cyprus', Botswana = 'botswana', Lebanon = 'lebanon', Ghana = 'ghana', Turkmenistan = 'turkmenistan', SaintLucia = 'saint-lucia', Uganda = 'uganda', Uruguay = 'uruguay', Eswatini = 'eswatini', Haiti = 'haiti', Brunei = 'brunei', UnitedArabEmirates = 'united-arab-emirates', Morocco = 'morocco', Suriname = 'suriname', Afghanistan = 'afghanistan', Belize = 'belize', Grenada = 'grenada', Lithuania = 'lithuania', Mauritius = 'mauritius', Micronesia = 'micronesia', CostaRica = 'costa-rica', Nepal = 'nepal', Rwanda = 'rwanda', Tunisia = 'tunisia', Cambodia = 'cambodia', Angola = 'angola', Mongolia = 'mongolia', Tuvalu = 'tuvalu', SaudiArabia = 'saudi-arabia', Togo = 'togo' }
export const enum ConversationStatus { Active = 'active', Closed = 'closed', Snoozed = 'snoozed', Deleted = 'deleted', Archived = 'archived' }
export const enum ContentVisibility { Private = 'private', Internal = 'internal', Shared = 'shared', Public = 'public', Protected = 'protected' }
export const enum ContactAddressType { Business = 'business', Personal = 'personal', Temporary = 'temporary', Other = 'other', Home = 'home', Billing = 'billing', Shipping = 'shipping', Work = 'work' }
export const enum CommunicationRole { User = 'user', Moderator = 'moderator', Member = 'member', Group = 'group', System = 'system', Guest = 'guest', Bot = 'bot', Assistant = 'assistant', Admin = 'admin', Owner = 'owner', Channel = 'channel', Service = 'service' }
export const enum CommunicationMethod { Email = 'email', SocialMedia = 'social-media', InstantMessage = 'instant-message', InPerson = 'in-person', Text = 'text', Sms = 'sms', Mail = 'mail', PushNotification = 'push-notification', Other = 'other', Phone = 'phone', VideoCall = 'video-call' }
export const enum ChatType { Group = 'group', Public = 'public', Private = 'private' }
export const enum CardType { Credit = 'credit', Debit = 'debit', UnknownCard = 'unknown-card' }
export const enum CampaignType { SocialMedia = 'social-media', Display = 'display', SearchEngine = 'search-engine', Other = 'other', Email = 'email' }
export const enum CampaignStatus { Cancelled = 'cancelled', Archived = 'archived', Scheduled = 'scheduled', Paused = 'paused', Planned = 'planned', Completed = 'completed', Active = 'active', Draft = 'draft' }
export const enum CallDirection { Unknown = 'unknown', Conference = 'conference', Inbound = 'inbound', Outbound = 'outbound' }
export const enum BillingStatus { Overdue = 'overdue', Deleted = 'deleted', Voided = 'voided', Succeeded = 'succeeded', Failed = 'failed', Unpaid = 'unpaid', PartiallyPaid = 'partially-paid', Pending = 'pending', Paid = 'paid', Processing = 'processing', Draft = 'draft', Disputed = 'disputed', Error = 'error', Authorised = 'authorised', Submitted = 'submitted' }
export const enum AvcStatus { Rejected = 'rejected', NotChecked = 'not-checked', Accepted = 'accepted' }
export const enum AuditOpinionType { Adverse = 'adverse', Qualified = 'qualified', Unqualified = 'unqualified', Disclaimer = 'disclaimer' }
export const enum AiToolChoiceType { None = 'none', Auto = 'auto', Any = 'any', Tool = 'tool' }
export const enum AiRole { Tool = 'tool', User = 'user', Assistant = 'assistant' }
export const enum AiMessagesContentType { ToolResult = 'tool-result', Image = 'image', ToolUse = 'tool-use', Text = 'text' }
export const enum AccountingAccountType { OtherExpenseExchangeGainOrLoss = 'other-expense::exchange-gain-or-loss', OtherCurrentLiabilityCurrentLiabilities = 'other-current-liability::current-liabilities', EquityTreasuryStock = 'equity::treasury-stock', ExpenseUtilities = 'expense::utilities', OtherCurrentLiabilitySocialSecurityAgencies = 'other-current-liability::social-security-agencies', ExpenseOtherCurrentOperatingCharges = 'expense::other-current-operating-charges', AssetOtherCurrentAssets = 'asset::other-current-assets', RevenueOwnWorkCapitalized = 'revenue::own-work-capitalized', AssetOtherAsset = 'asset::other-asset', AssetInvestmentMortgageRealEstateLoans = 'asset::investment-mortgage-real-estate-loans', OtherExpenseUtilities = 'other-expense::utilities', LiabilityOtherLongTermProvisions = 'liability::other-long-term-provisions', OtherCurrentLiabilitySalesTaxPayable = 'other-current-liability::sales-tax-payable', OtherExpenseMortgageInterest = 'other-expense::mortgage-interest', RevenueOperatingGrants = 'revenue::operating-grants', OtherCurrentLiabilityPayrollTaxPayable = 'other-current-liability::payroll-tax-payable', AssetFixedAssetPhotoVideo = 'asset::fixed-asset-photo-video', AssetSavings = 'asset::savings', ExpenseStaffCosts = 'expense::staff-costs', OtherExpenseVehicleLoan = 'other-expense::vehicle-loan', OtherCurrentLiabilityProvisionForWarrantyObligations = 'other-current-liability::provision-for-warranty-obligations', OtherCurrentLiabilityTradeAndOtherPayables = 'other-current-liability::trade-and-other-payables', AssetShortTermLoansAndAdvancesToRelatedParties = 'asset::short-term-loans-and-advances-to-related-parties', LiabilityAccrualsAndDeferredIncome = 'liability::accruals-and-deferred-income', RevenueRevenueGeneral = 'revenue::revenue-general', AssetOtherLongTermLoansAndAdvances = 'asset::other-long-term-loans-and-advances', ExpenseCommissionsAndFees = 'expense::commissions-and-fees', OtherIncomeGainLossOnSaleOfFixedAssets = 'other-income::gain-loss-on-sale-of-fixed-assets', EquityPaidInCapitalOrSurplus = 'equity::paid-in-capital-or-surplus', AssetFixedAssetCopiers = 'asset::fixed-asset-copiers', OtherCurrentLiabilityInterestPayables = 'other-current-liability::interest-payables', OtherCurrentLiabilityShortTermBorrowings = 'other-current-liability::short-term-borrowings', ExpenseRepairMaintenance = 'expense::repair-maintenance', LiabilityGovernmentAndOtherPublicAuthorities = 'liability::government-and-other-public-authorities', AssetGlobalTaxDeferred = 'asset::global-tax-deferred', AssetLongTermInvestments = 'asset::long-term-investments', ExpenseCharitableContributions = 'expense::charitable-contributions', LiabilityGroupAndAssociates = 'liability::group-and-associates', EquityDividendDisbursed = 'equity::dividend-disbursed', OtherExpenseParkingAndTolls = 'other-expense::parking-and-tolls', ExpenseAmortizationExpense = 'expense::amortization-expense', ExpenseOtherRentalCosts = 'expense::other-rental-costs', AssetBalWithGovtAuthorities = 'asset::bal-with-govt-authorities', AssetIntangibleAssetsUnderDevelopment = 'asset::intangible-assets-under-development', OtherIncomeInterestEarned = 'other-income::interest-earned', OtherCurrentLiabilityLineOfCredit = 'other-current-liability::line-of-credit', AccountsReceivable = 'accounts-receivable', EquityPersonalExpense = 'equity::personal-expense', OtherExpenseRepairsAndMaintenance = 'other-expense::repairs-and-maintenance', ExpenseTravelExpensesGeneralAndAdminExpenses = 'expense::travel-expenses-general-and-admin-expenses', AssetAssetsAvailableForSale = 'asset::assets-available-for-sale', AssetOtherLongTermAssets = 'asset::other-long-term-assets', RevenueDiscountsRefundsGiven = 'revenue::discounts-refunds-given', ExpenseOfficeGeneralAdministrativeExpenses = 'expense::office-general-administrative-expenses', ExpenseFinanceCosts = 'expense::finance-costs', OtherCurrentLiabilityDirectDepositPayable = 'other-current-liability::direct-deposit-payable', ExpenseTaxesPaid = 'expense::taxes-paid', OtherCurrentLiabilityLoanPayable = 'other-current-liability::loan-payable', ExpenseBankCharges = 'expense::bank-charges', RevenueOtherCurrentOperatingIncome = 'revenue::other-current-operating-income', EquityCalledUpShareCapital = 'equity::called-up-share-capital', OtherIncomeDividendIncome = 'other-income::dividend-income', OtherIncomeOtherOperatingIncome = 'other-income::other-operating-income', AssetTrustAccounts = 'asset::trust-accounts', AssetIntangibleAssets = 'asset::intangible-assets', AssetChecking = 'asset::checking', AssetMoneyMarket = 'asset::money-market', AssetOtherFixedAssets = 'asset::other-fixed-assets', AssetLeaseBuyout = 'asset::lease-buyout', AssetAccumulatedAmortizationOfOtherAssets = 'asset::accumulated-amortization-of-other-assets', CostOfGoodsSoldShippingFreightDeliveryCos = 'cost-of-goods-sold::shipping-freight-delivery-cos', AssetAllowanceForBadDebts = 'asset::allowance-for-bad-debts', EquityEstimatedTaxes = 'equity::estimated-taxes', EquityFunds = 'equity::funds', AssetFixedAsset = 'asset::fixed-asset', CostOfGoodsSoldSuppliesMaterialsCogs = 'cost-of-goods-sold::supplies-materials-cogs', AssetInvestmentTaxExemptSecurities = 'asset::investment-tax-exempt-securities', LiabilityAccountsPayable = 'liability::accounts-payable', LiabilityAccruedVacationPayable = 'liability::accrued-vacation-payable', OtherExpenseExtraordinaryItems = 'other-expense::extraordinary-items', LiabilityOutstandingDuesMicroSmallEnterprise = 'liability::outstanding-dues-micro-small-enterprise', AssetInvestmentOther = 'asset::investment-other', ExpenseTravel = 'expense::travel', LiabilityProvisionsNonCurrentLiabilities = 'liability::provisions-non-current-liabilities', OtherIncomeOtherInvestmentIncome = 'other-income::other-investment-income', ExpenseOtherSellingExpenses = 'expense::other-selling-expenses', AssetInternalTransfers = 'asset::internal-transfers', AssetFixedAssetFurniture = 'asset::fixed-asset-furniture', OtherExpensePenaltiesSettlements = 'other-expense::penalties-settlements', OtherExpensePriorPeriodItems = 'other-expense::prior-period-items', AssetBuildings = 'asset::buildings', LiabilityObligationsUnderFinanceLeases = 'liability::obligations-under-finance-leases', AssetRetainage = 'asset::retainage', ExpensePurchasesRebates = 'expense::purchases-rebates', RevenueServiceFeeIncome = 'revenue::service-fee-income', AssetFixedAssetOtherToolsEquipment = 'asset::fixed-asset-other-tools-equipment', OtherCurrentLiabilityRentsInTrustLiability = 'other-current-liability::rents-in-trust-liability', RevenueSavingsByTaxScheme = 'revenue::savings-by-tax-scheme', AssetProvisionsNonCurrentAssets = 'asset::provisions-non-current-assets', ExpenseDuesSubscriptions = 'expense::dues-subscriptions', OtherCurrentLiabilityCurrentPortionEmployeeBenefitsObligations = 'other-current-liability::current-portion-employee-benefits-obligations', OtherIncomeGainLossOnSaleOfInvestments = 'other-income::gain-loss-on-sale-of-investments', ExpenseShippingAndDeliveryExpense = 'expense::shipping-and-delivery-expense', EquityPartnersEquity = 'equity::partners-equity', OtherExpenseRentAndLease = 'other-expense::rent-and-lease', OtherExpenseHomeOffice = 'other-expense::home-office', OtherCurrentLiabilityDutiesAndTaxes = 'other-current-liability::duties-and-taxes', AssetProvisionsFixedAssets = 'asset::provisions-fixed-assets', OtherExpense = 'other-expense', OtherCurrentLiabilityProvisionsCurrentLiabilities = 'other-current-liability::provisions-current-liabilities', EquityOwnersEquity = 'equity::owners-equity', OtherExpenseVehicleInsurance = 'other-expense::vehicle-insurance', OtherExpenseDeferredTaxExpense = 'other-expense::deferred-tax-expense', OtherCurrentLiabilityPrepaidExpensesPayable = 'other-current-liability::prepaid-expenses-payable', ExpenseOtherBusinessExpenses = 'expense::other-business-expenses', EquityInvestmentGrants = 'equity::investment-grants', LiabilityDebtsRelatedToParticipatingInterests = 'liability::debts-related-to-participating-interests', OtherExpenseVehicleRepairs = 'other-expense::vehicle-repairs', AssetNonCurrentAssets = 'asset::non-current-assets', ExpenseTravelExpensesSellingExpense = 'expense::travel-expenses-selling-expense', OtherCurrentLiabilityGlobalTaxSuspense = 'other-current-liability::global-tax-suspense', LiabilityLongTermLiability = 'liability::long-term-liability', AssetMachineryAndEquipment = 'asset::machinery-and-equipment', AssetAssetsInCourseOfConstruction = 'asset::assets-in-course-of-construction', AssetOtherIntangibleAssets = 'asset::other-intangible-assets', ExpenseSundry = 'expense::sundry', LiabilityOtherLongTermLiabilities = 'liability::other-long-term-liabilities', LiabilityLongTermBorrowings = 'liability::long-term-borrowings', OtherExpenseVehicleRegistration = 'other-expense::vehicle-registration', OtherCurrentLiabilityTrustAccountsLiabilities = 'other-current-liability::trust-accounts-liabilities', AssetCapitalWip = 'asset::capital-wip', EquityAccumulatedOtherComprehensiveIncome = 'equity::accumulated-other-comprehensive-income', EquityOtherFreeReserves = 'equity::other-free-reserves', OtherCurrentLiabilityCurrentPortionOfObligationsUnderFinanceLeases = 'other-current-liability::current-portion-of-obligations-under-finance-leases', AssetSecurityDeposits = 'asset::security-deposits', OtherCurrentLiabilitySundryDebtorsAndCreditors = 'other-current-liability::sundry-debtors-and-creditors', ExpenseDistributionCosts = 'expense::distribution-costs', EquityCapitalReserves = 'equity::capital-reserves', EquityEquityInEarningsOfSubsidiuaries = 'equity::equity-in-earnings-of-subsidiuaries', ExpenseRentOrLeaseOfBuildings = 'expense::rent-or-lease-of-buildings', ExpenseOtherExternalServices = 'expense::other-external-services', AssetShortTermInvestmentsInRelatedParties = 'asset::short-term-investments-in-related-parties', ExpenseShippingFreightDelivery = 'expense::shipping-freight-delivery', OtherExpenseVehicleLoanInterest = 'other-expense::vehicle-loan-interest', AssetOtherEarMarkedBankAccounts = 'asset::other-ear-marked-bank-accounts', OtherExpenseAmortization = 'other-expense::amortization', RevenueIncome = 'revenue::income', Expense = 'expense', EquityOpeningBalanceEquity = 'equity::opening-balance-equity', EquityShareCapital = 'equity::share-capital', AssetLeaseholdImprovements = 'asset::leasehold-improvements', AssetFixedAssetComputers = 'asset::fixed-asset-computers', OtherExpenseWashAndRoadServices = 'other-expense::wash-and-road-services', ExpenseLossOnDiscontinuedOperationsNetOfTax = 'expense::loss-on-discontinued-operations-net-of-tax', EquityPersonalIncome = 'equity::personal-income', OtherExpenseTaxRoundoffGainOrLoss = 'other-expense::tax-roundoff-gain-or-loss', RevenueOtherPrimaryIncome = 'revenue::other-primary-income', LiabilityProvisionForLiabilities = 'liability::provision-for-liabilities', RevenueCashReceiptIncome = 'revenue::cash-receipt-income', CostOfGoodsSoldOtherCostsOfServiceCos = 'cost-of-goods-sold::other-costs-of-service-cos', OtherCurrentLiabilityPayrollClearing = 'other-current-liability::payroll-clearing', OtherExpenseIncomeTaxOtherExpense = 'other-expense::income-tax-other-expense', EquityMoneyReceivedAgainstShareWarrants = 'equity::money-received-against-share-warrants', CostOfGoodsSoldCostOfSales = 'cost-of-goods-sold::cost-of-sales', OtherIncome = 'other-income', ExpenseSuppliesMaterials = 'expense::supplies-materials', AssetAssetsHeldForSale = 'asset::assets-held-for-sale', ExpensePayrollExpenses = 'expense::payroll-expenses', OtherCurrentLiabilityGlobalTaxPayable = 'other-current-liability::global-tax-payable', OtherCurrentLiabilityFederalIncomeTaxPayable = 'other-current-liability::federal-income-tax-payable', LiabilityNotesPayable = 'liability::notes-payable', ExpenseBadDebts = 'expense::bad-debts', AssetCalledUpShareCapitalNotPaid = 'asset::called-up-share-capital-not-paid', AssetFurnitureAndFixtures = 'asset::furniture-and-fixtures', OtherCurrentLiability = 'other-current-liability', LiabilityOutstandingDuesOtherThanMicroSmallEnterprise = 'liability::outstanding-dues-other-than-micro-small-enterprise', ExpenseBorrowingCost = 'expense::borrowing-cost', ExpenseInsurance = 'expense::insurance', AssetLoansToOthers = 'asset::loans-to-others', OtherIncomeTaxExemptInterest = 'other-income::tax-exempt-interest', OtherCurrentLiabilityDividendsPayable = 'other-current-liability::dividends-payable', AssetLicenses = 'asset::licenses', OtherIncomeUnrealisedLossOnSecuritiesNetOfTax = 'other-income::unrealised-loss-on-securities-net-of-tax', AssetRentsHeldInTrust = 'asset::rents-held-in-trust', ExpenseEquipmentRental = 'expense::equipment-rental', ExpenseOfficeExpenses = 'expense::office-expenses', ExpenseUnappliedCashBillPaymentExpense = 'expense::unapplied-cash-bill-payment-expense', EquityShareApplicationMoneyPendingAllotment = 'equity::share-application-money-pending-allotment', ExpenseAdvertisingPromotional = 'expense::advertising-promotional', LiabilityAccruedLongTermLiabilities = 'liability::accrued-long-term-liabilities', EquityAccumulatedAdjustment = 'equity::accumulated-adjustment', OtherExpenseDepletion = 'other-expense::depletion', OtherCurrentLiabilityOtherCurrentLiabilities = 'other-current-liability::other-current-liabilities', AssetAccumulatedDepletion = 'asset::accumulated-depletion', CostOfGoodsSold = 'cost-of-goods-sold', OtherCurrentLiabilityCurrentTaxLiability = 'other-current-liability::current-tax-liability', RevenueUnappliedCashPaymentIncome = 'revenue::unapplied-cash-payment-income', AssetAccumulatedDepreciation = 'asset::accumulated-depreciation', AssetLand = 'asset::land', EquityHealthcare = 'equity::healthcare', AssetOtherLongTermInvestments = 'asset::other-long-term-investments', AssetPrepaidExpenses = 'asset::prepaid-expenses', AssetAccumulatedAmortization = 'asset::accumulated-amortization', ExpenseAppropriationsToDepreciation = 'expense::appropriations-to-depreciation', OtherExpenseVehicle = 'other-expense::vehicle', LiabilityLongTermEmployeeBenefitObligations = 'liability::long-term-employee-benefit-obligations', OtherExpenseVehicleLease = 'other-expense::vehicle-lease', Asset = 'asset', AssetInvestments = 'asset::investments', LiabilityStaffAndRelatedLongTermLiabilityAccounts = 'liability::staff-and-related-long-term-liability-accounts', ExpenseAuto = 'expense::auto', AssetAvailableForSaleFinancialAssets = 'asset::available-for-sale-financial-assets', LiabilityBankLoans = 'liability::bank-loans', OtherCurrentLiabilityStateLocalIncomeTaxPayable = 'other-current-liability::state-local-income-tax-payable', AssetOtherConsumables = 'asset::other-consumables', ExpenseTravelMeals = 'expense::travel-meals', ExpenseIncomeTaxExpense = 'expense::income-tax-expense', ExpenseExternalServices = 'expense::external-services', CostOfGoodsSoldEquipmentRentalCos = 'cost-of-goods-sold::equipment-rental-cos', EquityCommonStock = 'equity::common-stock', ExpenseCostOfLabor = 'expense::cost-of-labor', RevenueSalesWholesale = 'revenue::sales-wholesale', OtherCurrentLiabilityStaffAndRelatedLiabilityAccounts = 'other-current-liability::staff-and-related-liability-accounts', RevenueNonProfitIncome = 'revenue::non-profit-income', AssetExpenditureAuthorisationsAndLettersOfCredit = 'asset::expenditure-authorisations-and-letters-of-credit', OtherExpenseDepreciation = 'other-expense::depreciation', AssetLoansToOfficers = 'asset::loans-to-officers', ExpenseManagementCompensation = 'expense::management-compensation', AssetPrepaymentsAndAccruedIncome = 'asset::prepayments-and-accrued-income', ExpenseExtraordinaryCharges = 'expense::extraordinary-charges', LiabilityCreditCard = 'liability::credit-card', CostOfGoodsSoldCostOfLaborCos = 'cost-of-goods-sold::cost-of-labor-cos', AssetOtherCurrentAsset = 'asset::other-current-asset', AssetOrganizationalCosts = 'asset::organizational-costs', AssetLongTermLoansAndAdvancesToRelatedParties = 'asset::long-term-loans-and-advances-to-related-parties', ExpensePromotionalMeals = 'expense::promotional-meals', RevenueSalesOfProductIncome = 'revenue::sales-of-product-income', CostOfGoodsSoldFreightAndDeliveryCost = 'cost-of-goods-sold::freight-and-delivery-cost', OtherExpenseExceptionalItems = 'other-expense::exceptional-items', AssetCumulativeDepreciationOnIntangibleAssets = 'asset::cumulative-depreciation-on-intangible-assets', AssetCashOnHand = 'asset::cash-on-hand', AssetEmployeeCashAdvances = 'asset::employee-cash-advances', EquityPartnerContributions = 'equity::partner-contributions', EquityPartnerDistributions = 'equity::partner-distributions', ExpenseProjectStudiesSurveysAssessments = 'expense::project-studies-surveys-assessments', AssetInventory = 'asset::inventory', OtherExpenseGasAndFuel = 'other-expense::gas-and-fuel', OtherCurrentLiabilityAccruedLiabilities = 'other-current-liability::accrued-liabilities', ExpenseInterestPaid = 'expense::interest-paid', ExpenseLegalProfessionalFees = 'expense::legal-professional-fees', LiabilityShareholderNotesPayable = 'liability::shareholder-notes-payable', AssetTradeAndOtherReceivables = 'asset::trade-and-other-receivables', OtherExpenseMatCredit = 'other-expense::mat-credit', OtherExpenseOtherMiscellaneousExpense = 'other-expense::other-miscellaneous-expense', EquityRetainedEarnings = 'equity::retained-earnings', AssetFixedAssetSoftware = 'asset::fixed-asset-software', OtherIncomeOtherMiscellaneousIncome = 'other-income::other-miscellaneous-income', RevenueSalesRetail = 'revenue::sales-retail', LiabilityLongTermDebit = 'liability::long-term-debit', AssetInvestmentUsGovernmentObligations = 'asset::investment-us-government-obligations', AssetProvisionsCurrentAssets = 'asset::provisions-current-assets', OtherIncomeLossOnDisposalOfAssets = 'other-income::loss-on-disposal-of-assets', ExpenseOtherMiscellaneousServiceCost = 'expense::other-miscellaneous-service-cost', ExpenseEntertainmentMeals = 'expense::entertainment-meals', AssetLoansToStockholders = 'asset::loans-to-stockholders', OtherExpenseHomeOwnerRentalInsurance = 'other-expense::home-owner-rental-insurance', AssetUndepositedFunds = 'asset::undeposited-funds', AssetDeferredTax = 'asset::deferred-tax', ExpenseGlobalTaxExpense = 'expense::global-tax-expense', LiabilityLiabilitiesRelatedToAssetsHeldForSale = 'liability::liabilities-related-to-assets-held-for-sale', AssetBank = 'asset::bank', Equity = 'equity', AssetDevelopmentCosts = 'asset::development-costs', AssetGlobalTaxRefund = 'asset::global-tax-refund', OtherExpenseOtherVehicleExpenses = 'other-expense::other-vehicle-expenses', AssetCashAndCashEquivalents = 'asset::cash-and-cash-equivalents', OtherExpenseOtherHomeOfficeExpenses = 'other-expense::other-home-office-expenses', AssetParticipatingInterests = 'asset::participating-interests', AssetGoodwill = 'asset::goodwill', AssetDepletableAssets = 'asset::depletable-assets', AssetLandAsset = 'asset::land-asset', LiabilityDeferredTaxLiabilities = 'liability::deferred-tax-liabilities', AssetVehicles = 'asset::vehicles', OtherCurrentLiabilityInsurancePayable = 'other-current-liability::insurance-payable', AssetFixedAssetPhone = 'asset::fixed-asset-phone', ExpenseEntertainment = 'expense::entertainment', EquityPreferredStock = 'equity::preferred-stock' }
export const enum AccountStatus { Pending = 'pending', Inactive = 'inactive', Closed = 'closed', Suspended = 'suspended', Active = 'active' }
export const enum AccountEngagementLevel { Hot = 'hot', Warm = 'warm', Cold = 'cold', Unknown = 'unknown' }
export const enum AccessControlModel { Rbac = 'rbac', Custom = 'custom', Abac = 'abac', Dac = 'dac', Mac = 'mac', None = 'none' }
