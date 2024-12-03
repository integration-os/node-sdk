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
export const enum UserRoles { User = 'user', Moderator = 'moderator', Admin = 'admin' }
export const enum Status { Scheduled = 'scheduled', Active = 'active', Expired = 'expired' }
export const enum AllocationMethod { Across = 'across', Each = 'each' }
export const enum ReceiverRoles { Admin = 'admin', Moderator = 'moderator', User = 'user' }
export const enum AccountType { ExpenseProjectStudiesSurveysAssessments = 'expense::project-studies-surveys-assessments', AssetGlobalTaxDeferred = 'asset::global-tax-deferred', AssetCashAndCashEquivalents = 'asset::cash-and-cash-equivalents', AssetGlobalTaxRefund = 'asset::global-tax-refund', CostOfGoodsSoldEquipmentRentalCos = 'cost-of-goods-sold::equipment-rental-cos', EquityPartnerDistributions = 'equity::partner-distributions', LiabilityLongTermBorrowings = 'liability::long-term-borrowings', RevenueUnappliedCashPaymentIncome = 'revenue::unapplied-cash-payment-income', AssetOtherConsumables = 'asset::other-consumables', ExpenseCostOfLabor = 'expense::cost-of-labor', AssetPrepaymentsAndAccruedIncome = 'asset::prepayments-and-accrued-income', ExpenseInsurance = 'expense::insurance', RevenueSavingsByTaxScheme = 'revenue::savings-by-tax-scheme', EquityPartnersEquity = 'equity::partners-equity', OtherExpense = 'other-expense', AssetRentsHeldInTrust = 'asset::rents-held-in-trust', LiabilityStaffAndRelatedLongTermLiabilityAccounts = 'liability::staff-and-related-long-term-liability-accounts', OtherCurrentLiabilityStateLocalIncomeTaxPayable = 'other-current-liability::state-local-income-tax-payable', AssetOtherLongTermLoansAndAdvances = 'asset::other-long-term-loans-and-advances', AssetAssetsHeldForSale = 'asset::assets-held-for-sale', AssetInvestmentUsGovernmentObligations = 'asset::investment-us-government-obligations', OtherExpenseExchangeGainOrLoss = 'other-expense::exchange-gain-or-loss', AssetInventory = 'asset::inventory', OtherExpenseParkingAndTolls = 'other-expense::parking-and-tolls', OtherIncomeOtherInvestmentIncome = 'other-income::other-investment-income', RevenueOtherCurrentOperatingIncome = 'revenue::other-current-operating-income', OtherCurrentLiabilityInterestPayables = 'other-current-liability::interest-payables', ExpenseBadDebts = 'expense::bad-debts', LiabilityObligationsUnderFinanceLeases = 'liability::obligations-under-finance-leases', AssetFixedAssetPhone = 'asset::fixed-asset-phone', LiabilityOutstandingDuesMicroSmallEnterprise = 'liability::outstanding-dues-micro-small-enterprise', RevenueServiceFeeIncome = 'revenue::service-fee-income', OtherExpenseOtherVehicleExpenses = 'other-expense::other-vehicle-expenses', ExpenseAppropriationsToDepreciation = 'expense::appropriations-to-depreciation', AssetLandAsset = 'asset::land-asset', ExpenseOtherRentalCosts = 'expense::other-rental-costs', Expense = 'expense', OtherExpenseVehicleLoanInterest = 'other-expense::vehicle-loan-interest', OtherCurrentLiabilityInsurancePayable = 'other-current-liability::insurance-payable', OtherCurrentLiabilityProvisionForWarrantyObligations = 'other-current-liability::provision-for-warranty-obligations', ExpenseUtilities = 'expense::utilities', ExpenseOtherCurrentOperatingCharges = 'expense::other-current-operating-charges', AssetAccumulatedAmortization = 'asset::accumulated-amortization', ExpenseOtherMiscellaneousServiceCost = 'expense::other-miscellaneous-service-cost', ExpenseCommissionsAndFees = 'expense::commissions-and-fees', AssetMachineryAndEquipment = 'asset::machinery-and-equipment', ExpenseAuto = 'expense::auto', OtherIncomeUnrealisedLossOnSecuritiesNetOfTax = 'other-income::unrealised-loss-on-securities-net-of-tax', OtherExpenseHomeOffice = 'other-expense::home-office', ExpenseBankCharges = 'expense::bank-charges', ExpenseUnappliedCashBillPaymentExpense = 'expense::unapplied-cash-bill-payment-expense', RevenueDiscountsRefundsGiven = 'revenue::discounts-refunds-given', EquityRetainedEarnings = 'equity::retained-earnings', EquityOwnersEquity = 'equity::owners-equity', CostOfGoodsSold = 'cost-of-goods-sold', AccountsReceivable = 'accounts-receivable', ExpenseShippingAndDeliveryExpense = 'expense::shipping-and-delivery-expense', LiabilityOtherLongTermProvisions = 'liability::other-long-term-provisions', OtherCurrentLiabilityPayrollTaxPayable = 'other-current-liability::payroll-tax-payable', AssetBank = 'asset::bank', OtherCurrentLiabilityLineOfCredit = 'other-current-liability::line-of-credit', AssetPrepaidExpenses = 'asset::prepaid-expenses', RevenueSalesRetail = 'revenue::sales-retail', AssetIntangibleAssetsUnderDevelopment = 'asset::intangible-assets-under-development', OtherExpenseWashAndRoadServices = 'other-expense::wash-and-road-services', AssetLoansToOthers = 'asset::loans-to-others', ExpenseShippingFreightDelivery = 'expense::shipping-freight-delivery', AssetShortTermLoansAndAdvancesToRelatedParties = 'asset::short-term-loans-and-advances-to-related-parties', LiabilityOtherLongTermLiabilities = 'liability::other-long-term-liabilities', AssetChecking = 'asset::checking', OtherCurrentLiabilityCurrentLiabilities = 'other-current-liability::current-liabilities', AssetLand = 'asset::land', OtherCurrentLiabilityDividendsPayable = 'other-current-liability::dividends-payable', LiabilityGovernmentAndOtherPublicAuthorities = 'liability::government-and-other-public-authorities', EquityShareCapital = 'equity::share-capital', AssetNonCurrentAssets = 'asset::non-current-assets', OtherCurrentLiabilityRentsInTrustLiability = 'other-current-liability::rents-in-trust-liability', OtherExpenseDepletion = 'other-expense::depletion', ExpenseDistributionCosts = 'expense::distribution-costs', ExpenseEquipmentRental = 'expense::equipment-rental', ExpenseSundry = 'expense::sundry', OtherIncomeInterestEarned = 'other-income::interest-earned', AssetOtherCurrentAssets = 'asset::other-current-assets', EquityPreferredStock = 'equity::preferred-stock', EquityTreasuryStock = 'equity::treasury-stock', ExpensePromotionalMeals = 'expense::promotional-meals', OtherExpenseHomeOwnerRentalInsurance = 'other-expense::home-owner-rental-insurance', OtherExpenseOtherMiscellaneousExpense = 'other-expense::other-miscellaneous-expense', CostOfGoodsSoldCostOfLaborCos = 'cost-of-goods-sold::cost-of-labor-cos', ExpenseFinanceCosts = 'expense::finance-costs', OtherIncomeGainLossOnSaleOfFixedAssets = 'other-income::gain-loss-on-sale-of-fixed-assets', OtherCurrentLiabilityShortTermBorrowings = 'other-current-liability::short-term-borrowings', EquityCommonStock = 'equity::common-stock', AssetFixedAssetComputers = 'asset::fixed-asset-computers', AssetFixedAssetFurniture = 'asset::fixed-asset-furniture', EquityAccumulatedOtherComprehensiveIncome = 'equity::accumulated-other-comprehensive-income', AssetTrustAccounts = 'asset::trust-accounts', ExpenseTravelExpensesGeneralAndAdminExpenses = 'expense::travel-expenses-general-and-admin-expenses', ExpenseTaxesPaid = 'expense::taxes-paid', AssetParticipatingInterests = 'asset::participating-interests', ExpenseBorrowingCost = 'expense::borrowing-cost', OtherCurrentLiabilityProvisionsCurrentLiabilities = 'other-current-liability::provisions-current-liabilities', AssetInvestmentMortgageRealEstateLoans = 'asset::investment-mortgage-real-estate-loans', ExpenseIncomeTaxExpense = 'expense::income-tax-expense', EquityEstimatedTaxes = 'equity::estimated-taxes', OtherCurrentLiabilityCurrentPortionOfObligationsUnderFinanceLeases = 'other-current-liability::current-portion-of-obligations-under-finance-leases', CostOfGoodsSoldOtherCostsOfServiceCos = 'cost-of-goods-sold::other-costs-of-service-cos', AssetMoneyMarket = 'asset::money-market', EquityMoneyReceivedAgainstShareWarrants = 'equity::money-received-against-share-warrants', ExpenseExtraordinaryCharges = 'expense::extraordinary-charges', AssetCumulativeDepreciationOnIntangibleAssets = 'asset::cumulative-depreciation-on-intangible-assets', OtherExpensePenaltiesSettlements = 'other-expense::penalties-settlements', RevenueIncome = 'revenue::income', OtherExpenseAmortization = 'other-expense::amortization', LiabilityCreditCard = 'liability::credit-card', AssetRetainage = 'asset::retainage', AssetBalWithGovtAuthorities = 'asset::bal-with-govt-authorities', ExpenseExternalServices = 'expense::external-services', OtherExpensePriorPeriodItems = 'other-expense::prior-period-items', OtherExpenseVehicleInsurance = 'other-expense::vehicle-insurance', AssetOtherAsset = 'asset::other-asset', AssetInternalTransfers = 'asset::internal-transfers', AssetAccumulatedAmortizationOfOtherAssets = 'asset::accumulated-amortization-of-other-assets', AssetAssetsInCourseOfConstruction = 'asset::assets-in-course-of-construction', LiabilityAccountsPayable = 'liability::accounts-payable', LiabilityProvisionForLiabilities = 'liability::provision-for-liabilities', OtherIncomeDividendIncome = 'other-income::dividend-income', EquityOtherFreeReserves = 'equity::other-free-reserves', RevenueSalesWholesale = 'revenue::sales-wholesale', AssetProvisionsNonCurrentAssets = 'asset::provisions-non-current-assets', AssetLongTermLoansAndAdvancesToRelatedParties = 'asset::long-term-loans-and-advances-to-related-parties', AssetOtherCurrentAsset = 'asset::other-current-asset', OtherCurrentLiabilityOtherCurrentLiabilities = 'other-current-liability::other-current-liabilities', AssetLoansToStockholders = 'asset::loans-to-stockholders', EquityInvestmentGrants = 'equity::investment-grants', AssetEmployeeCashAdvances = 'asset::employee-cash-advances', OtherExpenseDeferredTaxExpense = 'other-expense::deferred-tax-expense', ExpenseOtherExternalServices = 'expense::other-external-services', AssetCapitalWip = 'asset::capital-wip', LiabilityBankLoans = 'liability::bank-loans', EquityCalledUpShareCapital = 'equity::called-up-share-capital', AssetProvisionsFixedAssets = 'asset::provisions-fixed-assets', EquityOpeningBalanceEquity = 'equity::opening-balance-equity', OtherExpenseTaxRoundoffGainOrLoss = 'other-expense::tax-roundoff-gain-or-loss', LiabilityNotesPayable = 'liability::notes-payable', OtherCurrentLiabilityDutiesAndTaxes = 'other-current-liability::duties-and-taxes', OtherExpenseVehicleLease = 'other-expense::vehicle-lease', LiabilityOutstandingDuesOtherThanMicroSmallEnterprise = 'liability::outstanding-dues-other-than-micro-small-enterprise', OtherCurrentLiabilityDirectDepositPayable = 'other-current-liability::direct-deposit-payable', AssetDeferredTax = 'asset::deferred-tax', ExpenseSuppliesMaterials = 'expense::supplies-materials', LiabilityLongTermEmployeeBenefitObligations = 'liability::long-term-employee-benefit-obligations', CostOfGoodsSoldShippingFreightDeliveryCos = 'cost-of-goods-sold::shipping-freight-delivery-cos', AssetLicenses = 'asset::licenses', EquityShareApplicationMoneyPendingAllotment = 'equity::share-application-money-pending-allotment', OtherExpenseMortgageInterest = 'other-expense::mortgage-interest', AssetFixedAssetPhotoVideo = 'asset::fixed-asset-photo-video', OtherCurrentLiabilityLoanPayable = 'other-current-liability::loan-payable', ExpenseGlobalTaxExpense = 'expense::global-tax-expense', OtherExpenseRepairsAndMaintenance = 'other-expense::repairs-and-maintenance', AssetProvisionsCurrentAssets = 'asset::provisions-current-assets', OtherExpenseVehicle = 'other-expense::vehicle', EquityDividendDisbursed = 'equity::dividend-disbursed', OtherCurrentLiabilityCurrentPortionEmployeeBenefitsObligations = 'other-current-liability::current-portion-employee-benefits-obligations', AssetAllowanceForBadDebts = 'asset::allowance-for-bad-debts', ExpenseOfficeGeneralAdministrativeExpenses = 'expense::office-general-administrative-expenses', OtherCurrentLiabilitySundryDebtorsAndCreditors = 'other-current-liability::sundry-debtors-and-creditors', EquityPartnerContributions = 'equity::partner-contributions', ExpensePurchasesRebates = 'expense::purchases-rebates', AssetFixedAssetCopiers = 'asset::fixed-asset-copiers', OtherCurrentLiabilitySocialSecurityAgencies = 'other-current-liability::social-security-agencies', OtherExpenseVehicleRepairs = 'other-expense::vehicle-repairs', AssetShortTermInvestmentsInRelatedParties = 'asset::short-term-investments-in-related-parties', LiabilityAccruedLongTermLiabilities = 'liability::accrued-long-term-liabilities', OtherIncomeTaxExemptInterest = 'other-income::tax-exempt-interest', AssetSavings = 'asset::savings', Liability = 'liability', AssetFixedAsset = 'asset::fixed-asset', LiabilityShareholderNotesPayable = 'liability::shareholder-notes-payable', OtherCurrentLiabilityStaffAndRelatedLiabilityAccounts = 'other-current-liability::staff-and-related-liability-accounts', ExpenseEntertainment = 'expense::entertainment', EquityPaidInCapitalOrSurplus = 'equity::paid-in-capital-or-surplus', AssetFixedAssetOtherToolsEquipment = 'asset::fixed-asset-other-tools-equipment', AssetOtherEarMarkedBankAccounts = 'asset::other-ear-marked-bank-accounts', LiabilityDebtsRelatedToParticipatingInterests = 'liability::debts-related-to-participating-interests', OtherExpenseVehicleRegistration = 'other-expense::vehicle-registration', ExpenseTravelMeals = 'expense::travel-meals', RevenueCashReceiptIncome = 'revenue::cash-receipt-income', AssetOrganizationalCosts = 'asset::organizational-costs', CostOfGoodsSoldSuppliesMaterialsCogs = 'cost-of-goods-sold::supplies-materials-cogs', OtherExpenseDepreciation = 'other-expense::depreciation', OtherCurrentLiabilityTradeAndOtherPayables = 'other-current-liability::trade-and-other-payables', ExpenseStaffCosts = 'expense::staff-costs', OtherExpenseMatCredit = 'other-expense::mat-credit', ExpenseRepairMaintenance = 'expense::repair-maintenance', OtherExpenseIncomeTaxOtherExpense = 'other-expense::income-tax-other-expense', AssetOtherLongTermInvestments = 'asset::other-long-term-investments', AssetDevelopmentCosts = 'asset::development-costs', RevenueRevenueGeneral = 'revenue::revenue-general', OtherExpenseRentAndLease = 'other-expense::rent-and-lease', OtherCurrentLiabilityTrustAccountsLiabilities = 'other-current-liability::trust-accounts-liabilities', ExpenseLossOnDiscontinuedOperationsNetOfTax = 'expense::loss-on-discontinued-operations-net-of-tax', EquityFunds = 'equity::funds', AssetAssetsAvailableForSale = 'asset::assets-available-for-sale', EquityPersonalIncome = 'equity::personal-income', ExpenseAmortizationExpense = 'expense::amortization-expense', EquityPersonalExpense = 'equity::personal-expense', OtherCurrentLiabilitySalesTaxPayable = 'other-current-liability::sales-tax-payable', OtherExpenseOtherHomeOfficeExpenses = 'other-expense::other-home-office-expenses', LiabilityGroupAndAssociates = 'liability::group-and-associates', OtherIncome = 'other-income', LiabilityAccruedVacationPayable = 'liability::accrued-vacation-payable', AssetLoansToOfficers = 'asset::loans-to-officers', AssetCashOnHand = 'asset::cash-on-hand', ExpenseAdvertisingPromotional = 'expense::advertising-promotional', RevenueNonProfitIncome = 'revenue::non-profit-income', ExpenseOtherBusinessExpenses = 'expense::other-business-expenses', EquityCapitalReserves = 'equity::capital-reserves', OtherCurrentLiabilityFederalIncomeTaxPayable = 'other-current-liability::federal-income-tax-payable', AssetInvestmentOther = 'asset::investment-other', AssetExpenditureAuthorisationsAndLettersOfCredit = 'asset::expenditure-authorisations-and-letters-of-credit', AssetLeaseBuyout = 'asset::lease-buyout', AssetFixedAssetSoftware = 'asset::fixed-asset-software', AssetDepletableAssets = 'asset::depletable-assets', ExpenseTravel = 'expense::travel', AssetCalledUpShareCapitalNotPaid = 'asset::called-up-share-capital-not-paid', OtherCurrentLiabilityGlobalTaxPayable = 'other-current-liability::global-tax-payable', OtherExpenseGasAndFuel = 'other-expense::gas-and-fuel', AssetBuildings = 'asset::buildings', Equity = 'equity', LiabilityAccrualsAndDeferredIncome = 'liability::accruals-and-deferred-income', OtherCurrentLiabilityCurrentTaxLiability = 'other-current-liability::current-tax-liability', RevenueOperatingGrants = 'revenue::operating-grants', AssetAvailableForSaleFinancialAssets = 'asset::available-for-sale-financial-assets', LiabilityDeferredTaxLiabilities = 'liability::deferred-tax-liabilities', AssetUndepositedFunds = 'asset::undeposited-funds', ExpenseDuesSubscriptions = 'expense::dues-subscriptions', OtherCurrentLiabilityGlobalTaxSuspense = 'other-current-liability::global-tax-suspense', OtherExpenseUtilities = 'other-expense::utilities', LiabilityLongTermLiability = 'liability::long-term-liability', RevenueSalesOfProductIncome = 'revenue::sales-of-product-income', CostOfGoodsSoldCostOfSales = 'cost-of-goods-sold::cost-of-sales', AssetLongTermInvestments = 'asset::long-term-investments', AssetAccumulatedDepletion = 'asset::accumulated-depletion', AssetOtherLongTermAssets = 'asset::other-long-term-assets', ExpensePenaltiesSettlements = 'expense::penalties-settlements', LiabilityProvisionsNonCurrentLiabilities = 'liability::provisions-non-current-liabilities', ExpenseEntertainmentMeals = 'expense::entertainment-meals', AssetVehicles = 'asset::vehicles', CostOfGoodsSoldFreightAndDeliveryCost = 'cost-of-goods-sold::freight-and-delivery-cost', ExpenseOtherSellingExpenses = 'expense::other-selling-expenses', LiabilityLiabilitiesRelatedToAssetsHeldForSale = 'liability::liabilities-related-to-assets-held-for-sale', OtherCurrentLiabilityAccruedLiabilities = 'other-current-liability::accrued-liabilities', ExpensePayrollExpenses = 'expense::payroll-expenses', ExpenseInterestPaid = 'expense::interest-paid', OtherCurrentLiabilityPrepaidExpensesPayable = 'other-current-liability::prepaid-expenses-payable', OtherCurrentLiability = 'other-current-liability', OtherIncomeOtherMiscellaneousIncome = 'other-income::other-miscellaneous-income', AssetSecurityDeposits = 'asset::security-deposits', ExpenseCharitableContributions = 'expense::charitable-contributions', AssetGoodwill = 'asset::goodwill', AssetTradeAndOtherReceivables = 'asset::trade-and-other-receivables', RevenueOtherPrimaryIncome = 'revenue::other-primary-income', OtherExpenseExtraordinaryItems = 'other-expense::extraordinary-items', ExpenseManagementCompensation = 'expense::management-compensation', OtherExpenseExceptionalItems = 'other-expense::exceptional-items', AssetIntangibleAssets = 'asset::intangible-assets', EquityHealthcare = 'equity::healthcare', OtherIncomeGainLossOnSaleOfInvestments = 'other-income::gain-loss-on-sale-of-investments', AssetOtherFixedAssets = 'asset::other-fixed-assets', AssetOtherIntangibleAssets = 'asset::other-intangible-assets', ExpenseLegalProfessionalFees = 'expense::legal-professional-fees', AssetAccumulatedDepreciation = 'asset::accumulated-depreciation', LiabilityLongTermDebit = 'liability::long-term-debit', EquityEquityInEarningsOfSubsidiuaries = 'equity::equity-in-earnings-of-subsidiuaries', ExpenseRentOrLeaseOfBuildings = 'expense::rent-or-lease-of-buildings', OtherExpenseVehicleLoan = 'other-expense::vehicle-loan', OtherIncomeOtherOperatingIncome = 'other-income::other-operating-income', ExpenseOfficeExpenses = 'expense::office-expenses', RevenueOwnWorkCapitalized = 'revenue::own-work-capitalized', AssetLeaseholdImprovements = 'asset::leasehold-improvements', EquityAccumulatedAdjustment = 'equity::accumulated-adjustment', OtherCurrentLiabilityPayrollClearing = 'other-current-liability::payroll-clearing', Asset = 'asset', OtherIncomeLossOnDisposalOfAssets = 'other-income::loss-on-disposal-of-assets', ExpenseTravelExpensesSellingExpense = 'expense::travel-expenses-selling-expense', Income = 'income', AssetFurnitureAndFixtures = 'asset::furniture-and-fixtures', AssetInvestmentTaxExemptSecurities = 'asset::investment-tax-exempt-securities', AssetInvestments = 'asset::investments' }
export const enum TargetType { LineItem = 'line-item', ShippingLine = 'shipping-line' }
export const enum AppliesTo { SpecificCategories = 'specific-categories', AllItems = 'all-items', SpecificItems = 'specific-items' }
export const enum Gender { Other = 'other', Female = 'female', PreferNotToSay = 'prefer not to say', Male = 'male' }
export const enum ChannelAvailability { Online = 'online', InApp = 'in-app', InStore = 'in-store', AllChannels = 'all-channels' }
export const enum MinimumRequirements { None = 'none', MinimumPurchaseAmount = 'minimum-purchase-amount', MinimumQuantityOfItems = 'minimum-quantity-of-items' }
export const enum CustomerEligibility { SpecificCustomers = 'specific-customers', SpecificCustomerGroups = 'specific-customer-groups', All = 'all' }
export const enum TransactionMethod { Mobile = 'mobile', Online = 'online', Atm = 'atm', BankBranch = 'bank-branch', Telephone = 'telephone', Mail = 'mail' }
export const enum Format { Json = 'json', Xml = 'xml' }
export const enum SkuValidation { LocalUnique = 'local-unique', None = 'none', GlobalUnique = 'global-unique' }
export const enum Roles { User = 'user', Admin = 'admin', Moderator = 'moderator' }
export const enum CustomerSelection { All = 'all', Prerequisite = 'prerequisite' }
export const enum TargetSelection { All = 'all', Entitled = 'entitled' }
export const enum VisibilityScope { Internal = 'internal', Web = 'web', Global = 'global', App = 'app', Private = 'private' }
export const enum UserStatus { Banned = 'banned', Suspended = 'suspended', Archived = 'archived', WaitListed = 'wait-listed', Active = 'active', Pending = 'pending', Verified = 'verified', Inactive = 'inactive', Deleted = 'deleted' }
export const enum UniversalIdentifierType { Url = 'url', Number = 'number', String = 'string', Uuid = 'uuid', Email = 'email' }
export const enum TransactionType { Charge = 'charge', Refund = 'refund', Deposit = 'deposit', Withdrawal = 'withdrawal', Adjustment = 'adjustment', Payment = 'payment', Transfer = 'transfer', Fee = 'fee' }
export const enum TransactionStatus { Pending = 'pending', Cancelled = 'cancelled', InProgress = 'in-progress', Initiated = 'initiated', Error = 'error', Succeeded = 'succeeded', Failed = 'failed' }
export const enum TransactionChannel { InPerson = 'in-person', Telephone = 'telephone', Atm = 'atm', Online = 'online', BankBranch = 'bank-branch', Mail = 'mail', Mobile = 'mobile', Other = 'other' }
export const enum ToolCallType { Function = 'function' }
export const enum TimeCycle { Daily = 'daily', Weekly = 'weekly', AdHoc = 'ad-hoc', Monthly = 'monthly', Hourly = 'hourly', Quarterly = 'quarterly', Custom = 'custom', Biennially = 'biennially', Biweekly = 'biweekly', Annually = 'annually', SemiMonthly = 'semi-monthly', Minutely = 'minutely', Triennially = 'triennially', SemiAnnually = 'semi-annually', Secondly = 'secondly' }
export const enum TaxType { Additive = 'additive', Variable = 'variable', Inclusive = 'inclusive' }
export const enum TaskStatus { Cancelled = 'cancelled', Todo = 'todo', Done = 'done', InProgress = 'in-progress', Blocked = 'blocked', OnHold = 'on-hold' }
export const enum TableType { External = 'external', MaterializedView = 'materialized-view', Snapshot = 'snapshot', View = 'view', Table = 'table' }
export const enum SupportTicketPriority { Low = 'low', Immediate = 'immediate', High = 'high', Medium = 'medium', Urgent = 'urgent' }
export const enum SupportQueryType { Feedback = 'feedback', Bug = 'bug', Problem = 'problem', Incident = 'incident', FeatureRequest = 'feature-request', Task = 'task', Question = 'question' }
export const enum StakeholderType { Vendor = 'vendor', Investor = 'investor', Competitor = 'competitor', Other = 'other', Customer = 'customer', Partner = 'partner' }
export const enum SpeakerRole { Attendee = 'attendee', Invitee = 'invitee' }
export const enum SocialPlatform { Linkedin = 'linkedin', Snapchat = 'snapchat', Reddit = 'reddit', Facebook = 'facebook', X = 'x', Pinterest = 'pinterest', Youtube = 'youtube', Twitter = 'twitter', Tiktok = 'tiktok', Skype = 'skype', Instagram = 'instagram', Tumblr = 'tumblr', OtherSocialPlatform = 'other-social-platform' }
export const enum ReviewApprovalStatus { Revised = 'revised', Approved = 'approved', Rejected = 'rejected', Pending = 'pending', InReview = 'in-review' }
export const enum ResponseFormatType { Text = 'text', JsonSchema = 'json-schema', JsonObject = 'json-object' }
export const enum ReactionType { Laugh = 'laugh', Angry = 'angry', Love = 'love', Bookmark = 'bookmark', Interested = 'interested', Wow = 'wow', Like = 'like', Dislike = 'dislike', Sad = 'sad' }
export const enum PromotionType { Other = 'other', BuyOneGetOne = 'buy-one-get-one', Percentage = 'percentage', RewardPoints = 'reward-points', FreeShipping = 'free-shipping', FixedAmount = 'fixed-amount' }
export const enum ProductAvailabilityStatus { InStock = 'in-stock', OutOfStock = 'out-of-stock', BackOrder = 'back-order', PreOrder = 'pre-order', Discontinued = 'discontinued' }
export const enum PriorityLevel { Low = 'low', Urgent = 'urgent', Medium = 'medium', Elevated = 'elevated', High = 'high' }
export const enum PrerequisiteRangeType { Subtotal = 'subtotal', Quantity = 'quantity', ShippingPrice = 'shipping-price' }
export const enum PrepaidType { NotPrepaid = 'not-prepaid', Prepaid = 'prepaid', UnknownPrepaid = 'unknown-prepaid' }
export const enum PaymentTerm { CashOnDelivery = 'cash-on-delivery', Installment = 'installment', CashWithOrder = 'cash-with-order', DeferredPayment = 'deferred-payment', CashBeforeShipment = 'cash-before-shipment', Custom = 'custom', CashInAdvance = 'cash-in-advance', Prepaid = 'prepaid', DueOnReceipt = 'due-on-receipt', Net = 'net', Net60 = 'net-60', Net90 = 'net-90', Net30 = 'net-30', UponCompletion = 'upon-completion', DueEndOfMonth = 'due-end-of-month', Prepayment = 'prepayment' }
export const enum PaymentStatus { Succeeded = 'succeeded', Overdue = 'overdue', Partial = 'partial', Paid = 'paid', Submitted = 'submitted', Cancelled = 'cancelled', Authorized = 'authorized', Refunded = 'refunded', PartiallyRefunded = 'partially-refunded', Error = 'error', Pending = 'pending', Disputed = 'disputed', Voided = 'voided', Deleted = 'deleted', Draft = 'draft', Adjusted = 'adjusted', Failed = 'failed', Processing = 'processing' }
export const enum PaymentMethod { CreditCard = 'credit-card', MobileWallet = 'mobile-wallet', Other = 'other', Paypal = 'paypal', Cash = 'cash', BankTransfer = 'bank-transfer', Check = 'check', DebitCard = 'debit-card', Cryptocurrency = 'cryptocurrency', CashOnDelivery = 'cash-on-delivery', MobilePayment = 'mobile-payment' }
export const enum ParticipantType { Team = 'team', Organization = 'organization', User = 'user', ExternalParticipant = 'external-participant', Group = 'group' }
export const enum ParticipantEngagementStatus { Inactive = 'inactive', Left = 'left', Active = 'active', Banned = 'banned', Admin = 'admin', Guest = 'guest', Moderator = 'moderator' }
export const enum OrganizationalRole { Supervisor = 'supervisor', Contractor = 'contractor', Other = 'other', Director = 'director', Manager = 'manager', Admin = 'admin', Employee = 'employee' }
export const enum OrderingCriteria { Alphabetical = 'alphabetical', Relevance = 'relevance', PriceDescending = 'price-descending', PriceAscending = 'price-ascending', Rating = 'rating', CreationDate = 'creation-date', Manual = 'manual', Popularity = 'popularity' }
export const enum OrderStatus { Shipped = 'shipped', Delivered = 'delivered', Disputed = 'disputed', AwaitingPayment = 'awaiting-payment', AwaitingShipment = 'awaiting-shipment', Refunded = 'refunded', Completed = 'completed', Returned = 'returned', Pending = 'pending', Cancelled = 'cancelled', Abandoned = 'abandoned', Processing = 'processing', AwaitingPickup = 'awaiting-pickup', Failed = 'failed', Confirmed = 'confirmed', Draft = 'draft', OnHold = 'on-hold', PartiallyFulfilled = 'partially-fulfilled' }
export const enum ModifierType { Text = 'text', List = 'list' }
export const enum MimeType { ImageSvgXml = 'image/svg+xml', ImageJpeg = 'image/jpeg', ImageWebp = 'image/webp', ImagePng = 'image/png', ImageGif = 'image/gif' }
export const enum MessageReadStatus { Delivered = 'delivered', Sent = 'sent', Unsent = 'unsent', Failed = 'failed', Read = 'read' }
export const enum MessageDeliveryStatus { Error = 'error', Read = 'read', Delivered = 'delivered', Pending = 'pending', Undeliverable = 'undeliverable', Failed = 'failed', Sent = 'sent' }
export const enum MessageContentType { Html = 'html', Audio = 'audio', Link = 'link', Text = 'text', Image = 'image', File = 'file', Location = 'location', Sticker = 'sticker', Gif = 'gif', Document = 'document', Video = 'video', Contact = 'contact', Voice = 'voice' }
export const enum LifecycleStatus { Suspended = 'suspended', Cancelled = 'cancelled', Issued = 'issued', Active = 'active', Redeemed = 'redeemed', Expired = 'expired' }
export const enum LeadLifecycleStatus { Open = 'open', Revisited = 'revisited', InProcess = 'in-process', New = 'new', Converted = 'converted', BadTiming = 'bad-timing', Unqualified = 'unqualified', AttemptedToContact = 'attempted-to-contact', Connected = 'connected', Lost = 'lost' }
export const enum JsonSchemaType { Function = 'function' }
export const enum JournalEntryStatus { Posted = 'posted', Pending = 'pending', Voided = 'voided', Error = 'error', Draft = 'draft', Corrected = 'corrected' }
export const enum ItemEntityStatus { Active = 'active', Inactive = 'inactive', Pending = 'pending', Archived = 'archived', Suspended = 'suspended', Completed = 'completed', Deleted = 'deleted' }
export const enum ItemCondition { Refurbished = 'refurbished', OpenBox = 'open-box', Damaged = 'damaged', Used = 'used', New = 'new', LikeNew = 'like-new' }
export const enum ItemAvailabilityStatus { Discontinued = 'discontinued', OutOfStock = 'out-of-stock', Inactive = 'inactive', Active = 'active' }
export const enum IssueLifecycleStatus { OnHold = 'on-hold', Resolved = 'resolved', Open = 'open', Waiting = 'waiting', InProgress = 'in-progress', Pending = 'pending', Closed = 'closed', Cancelled = 'cancelled' }
export const enum InvoiceAdjustmentType { Tip = 'tip', Other = 'other', Discount = 'discount', Tax = 'tax', Shipping = 'shipping' }
export const enum InventoryStorageType { DropShipper = 'drop-shipper', OnlineMarketplace = 'online-marketplace', Consignment = 'consignment', Other = 'other', Warehouse = 'warehouse', RetailStore = 'retail-store', DistributionCenter = 'distribution-center' }
export const enum ImageType { Base64 = 'base64' }
export const enum ImageMimeType { ImageGif = 'image/gif', ImageJpeg = 'image/jpeg', ImageSvgXml = 'image/svg+xml', ImagePng = 'image/png', ImageWebp = 'image/webp', ImageBmp = 'image/bmp', ImageHeic = 'image/heic', ImageTiff = 'image/tiff' }
export const enum IdentityProvider { Pinterest = 'pinterest', Facebook = 'facebook', Behance = 'behance', Tumblr = 'tumblr', Instagram = 'instagram', Linkedin = 'linkedin', Slack = 'slack', Twitter = 'twitter', Line = 'line', Qq = 'qq', Foursquare = 'foursquare', Microsoft = 'microsoft', Apple = 'apple', Google = 'google', Yahoo = 'yahoo', Discord = 'discord', Whatsapp = 'whatsapp', Signal = 'signal', Paypal = 'paypal', Other = 'other', Github = 'github', Amazon = 'amazon', Tiktok = 'tiktok', Dribbble = 'dribbble', Telegram = 'telegram', Flickr = 'flickr', Snapchat = 'snapchat', Vimeo = 'vimeo', Reddit = 'reddit', Wechat = 'wechat' }
export const enum GlobalTaxType { Other = 'other', ExciseTax = 'excise-tax', CustomsDuty = 'customs-duty', SalesTax = 'sales-tax', Gst = 'gst', PropertyTax = 'property-tax', Vat = 'vat' }
export const enum GenderIdentity { Male = 'male', Other = 'other', Female = 'female', PreferNotToSay = 'prefer-not-to-say' }
export const enum FulfillmentStatus { Failure = 'failure', Returned = 'returned', Delivered = 'delivered', Cancelled = 'cancelled', Pending = 'pending', InTransit = 'in-transit' }
export const enum FinancialTransactionType { Adjustment = 'adjustment', Transfer = 'transfer', Deposit = 'deposit', Payment = 'payment', Chargeback = 'chargeback', ReceiveOverpayment = 'receive-overpayment', SpendPrepayment = 'spend-prepayment', Withdrawal = 'withdrawal', Dividend = 'dividend', SpendOverpayment = 'spend-overpayment', Sale = 'sale', Other = 'other', Refund = 'refund', Charge = 'charge', Interest = 'interest', Spend = 'spend', ReceivePrepayment = 'receive-prepayment', Fee = 'fee', Receive = 'receive' }
export const enum FinancialTransactionStatus { Authorized = 'authorized', Cleared = 'cleared', SettlementInProgress = 'settlement-in-progress', Failed = 'failed', Cancelled = 'cancelled', Disputed = 'disputed', Refunded = 'refunded', Pending = 'pending' }
export const enum FinancialTrackingCategories { None = 'none', Class = 'class', Vendor = 'vendor', Customer = 'customer', Service = 'service', Department = 'department', Division = 'division', Project = 'project', Employee = 'employee', Product = 'product', CostCenter = 'cost-center', Other = 'other', Location = 'location' }
export const enum FinancialDisputeStatus { Escalated = 'escalated', ChargeRefunded = 'charge-refunded', UnderReview = 'under-review', AwaitingEvidence = 'awaiting-evidence', Won = 'won', NeedsResponse = 'needs-response', Closed = 'closed', Lost = 'lost' }
export const enum FinancialChargeType { LateFee = 'late-fee', ProcessingFee = 'processing-fee', Other = 'other', InterestCharge = 'interest-charge', Commission = 'commission', TransactionFee = 'transaction-fee', ServiceCharge = 'service-charge' }
export const enum FinancialAccountStatus { Delinquent = 'delinquent', Inactive = 'inactive', Active = 'active', Frozen = 'frozen', UnderReview = 'under-review', Closed = 'closed', Suspended = 'suspended' }
export const enum FileType { Folder = 'folder', File = 'file', Url = 'url' }
export const enum ExpenseApprovalStatus { Reviewing = 'reviewing', Cancelled = 'cancelled', Processed = 'processed', Pending = 'pending', Approved = 'approved', New = 'new', Denied = 'denied', Reimbursed = 'reimbursed' }
export const enum EventVisibility { Confidential = 'confidential', Public = 'public', Private = 'private' }
export const enum EventStatus { Confirmed = 'confirmed', Tentative = 'tentative', Cancelled = 'cancelled' }
export const enum EventRuleType { ExcludeDates = 'exclude-dates', Exclude = 'exclude', Repeat = 'repeat', AddDates = 'add-dates' }
export const enum EventReminderAction { Popup = 'popup', Email = 'email' }
export const enum EventFrequency { Weekly = 'weekly', Monthly = 'monthly', Yearly = 'yearly', Daily = 'daily' }
export const enum EntryMethod { Emv = 'emv', OnFile = 'on-file', Swiped = 'swiped', Contactless = 'contactless', Keyed = 'keyed' }
export const enum EntityLifecycleStatus { Scheduled = 'scheduled', Deleted = 'deleted', Preorder = 'preorder', Archived = 'archived', Draft = 'draft', Inactive = 'inactive', Active = 'active' }
export const enum EntityCategory { Project = 'project', Owner = 'owner', Other = 'other', Document = 'document', Person = 'person', Message = 'message', User = 'user', Link = 'link', Task = 'task', Event = 'event' }
export const enum EmploymentType { FullTime = 'full-time', Volunteer = 'volunteer', Internship = 'internship', PartTime = 'part-time', Permanent = 'permanent', Freelance = 'freelance', Contract = 'contract', Temporary = 'temporary', Seasonal = 'seasonal' }
export const enum EmploymentAndCandidateStatus { Terminated = 'terminated', Other = 'other', Interviewing = 'interviewing', Inactive = 'inactive', OfferExtended = 'offer-extended', Active = 'active', New = 'new', InReview = 'in-review', Hired = 'hired', NotSelected = 'not-selected', OnLeave = 'on-leave' }
export const enum EmailCategoryType { Governmental = 'governmental', Personal = 'personal', Promotional = 'promotional', Business = 'business', Other = 'other', Transactional = 'transactional', Spam = 'spam', Educational = 'educational' }
export const enum DiscountType { TieredDiscount = 'tiered-discount', VariablePercentage = 'variable-percentage', VariableAmount = 'variable-amount', UnknownDiscount = 'unknown-discount', Percentage = 'percentage', ConditionalDiscount = 'conditional-discount', FixedAmount = 'fixed-amount', BuyOneGetOne = 'buy-one-get-one' }
export const enum DeviceUsageType { Industrial = 'industrial', Personal = 'personal', Healthcare = 'healthcare', Business = 'business', Home = 'home', Other = 'other', Educational = 'educational' }
export const enum DayOfWeek { Monday = 'monday', Sunday = 'sunday', Tuesday = 'tuesday', Friday = 'friday', Wednesday = 'wednesday', Saturday = 'saturday', Thursday = 'thursday' }
export const enum DatabaseType { Default = 'default', Linked = 'linked', Public = 'public', External = 'external' }
export const enum DataType { Custom = 'custom', Timestamp = 'timestamp', Binary = 'binary', Json = 'json', String = 'string', Array = 'array', Number = 'number', Null = 'null', Undefined = 'undefined', Date = 'date', Boolean = 'boolean', Object = 'object' }
export const enum CvvStatus { NotChecked = 'not-checked', Rejected = 'rejected', Accepted = 'accepted' }
export const enum CustomerType { B2c = 'b2c', B2b = 'b2b', Wholesale = 'wholesale', Retail = 'retail', Corporate = 'corporate', Online = 'online' }
export const enum CustomerStatus { Pending = 'pending', Active = 'active', Suspended = 'suspended', Inactive = 'inactive', Archived = 'archived' }
export const enum CustomerEligibilityStatus { ReturningCustomers = 'returning-customers', VipCustomers = 'vip-customers', SpecificConditions = 'specific-conditions', NewCustomers = 'new-customers', AllCustomers = 'all-customers', Other = 'other' }
export const enum Currency { SSP = 'ssp', AFN = 'afn', PGK = 'pgk', BHD = 'bhd', BOB = 'bob', DOP = 'dop', BYN = 'byn', JPY = 'jpy', AWG = 'awg', HRK = 'hrk', PEN = 'pen', BIF = 'bif', SOS = 'sos', SZL = 'szl', KRW = 'krw', LBP = 'lbp', TJS = 'tjs', IRR = 'irr', MMK = 'mmk', LYD = 'lyd', SDG = 'sdg', VES = 'ves', CHF = 'chf', IDR = 'idr', RSD = 'rsd', IMP = 'imp', BWP = 'bwp', SBD = 'sbd', KWD = 'kwd', XAF = 'xaf', XDR = 'xdr', EUR = 'eur', FJD = 'fjd', RWF = 'rwf', ANG = 'ang', ISK = 'isk', LKR = 'lkr', MXN = 'mxn', NOK = 'nok', AUD = 'aud', VND = 'vnd', SAR = 'sar', GNF = 'gnf', TMT = 'tmt', CRC = 'crc', DZD = 'dzd', NIO = 'nio', NPR = 'npr', AMD = 'amd', ZMW = 'zmw', AOA = 'aoa', UZS = 'uzs', RUB = 'rub', TWD = 'twd', LSL = 'lsl', DJF = 'djf', PLN = 'pln', SCR = 'scr', TND = 'tnd', HNL = 'hnl', XCD = 'xcd', THB = 'thb', GHS = 'ghs', HTG = 'htg', CAD = 'cad', JOD = 'jod', KES = 'kes', PHP = 'php', ILS = 'ils', TOP = 'top', LAK = 'lak', ZAR = 'zar', PKR = 'pkr', TRY = 'try', MGA = 'mga', XOF = 'xof', BSD = 'bsd', CUC = 'cuc', ERN = 'ern', SEK = 'sek', NZD = 'nzd', UAH = 'uah', MOP = 'mop', IQD = 'iqd', VUV = 'vuv', ETB = 'etb', ZWL = 'zwl', TZS = 'tzs', KHR = 'khr', SGD = 'sgd', NAD = 'nad', AZN = 'azn', JMD = 'jmd', MDL = 'mdl', LRD = 'lrd', MKD = 'mkd', GGP = 'ggp', HUF = 'huf', SYP = 'syp', BBD = 'bbd', BDT = 'bdt', BND = 'bnd', GTQ = 'gtq', ARS = 'ars', MRU = 'mru', KYD = 'kyd', SHP = 'shp', EGP = 'egp', SRD = 'srd', JEP = 'jep', OMR = 'omr', COP = 'cop', BGN = 'bgn', KZT = 'kzt', TVD = 'tvd', ALL = 'all', YER = 'yer', GMD = 'gmd', XPF = 'xpf', KGS = 'kgs', CDF = 'cdf', AED = 'aed', BMD = 'bmd', BRL = 'brl', CUP = 'cup', CZK = 'czk', GBP = 'gbp', GYD = 'gyd', HKD = 'hkd', TTD = 'ttd', USD = 'usd', WST = 'wst', PYG = 'pyg', BAM = 'bam', NGN = 'ngn', GIP = 'gip', INR = 'inr', KID = 'kid', MVR = 'mvr', BZD = 'bzd', RON = 'ron', CVE = 'cve', CNY = 'cny', SLL = 'sll', KMF = 'kmf', MUR = 'mur', MYR = 'myr', STN = 'stn', BTN = 'btn', UGX = 'ugx', QAR = 'qar', CLP = 'clp', DKK = 'dkk', GEL = 'gel', MWK = 'mwk', UYU = 'uyu', FOK = 'fok', FKP = 'fkp', KPW = 'kpw', MAD = 'mad', MNT = 'mnt', MZN = 'mzn', PAB = 'pab' }
export const enum CreditType { Supplier = 'supplier', Prepayment = 'prepayment', Goodwill = 'goodwill', Overpayment = 'overpayment', Customer = 'customer' }
export const enum CreditNoteStatus { Revised = 'revised', Draft = 'draft', Applied = 'applied', Disputed = 'disputed', Void = 'void', Completed = 'completed', Issued = 'issued', Pending = 'pending', Cancelled = 'cancelled' }
export const enum Country { Cuba = 'cuba', Gabon = 'gabon', Botswana = 'botswana', Malawi = 'malawi', Syria = 'syria', NewZealand = 'new-zealand', Georgia = 'georgia', Philippines = 'philippines', Canada = 'canada', SierraLeone = 'sierra-leone', Mauritius = 'mauritius', Bangladesh = 'bangladesh', Honduras = 'honduras', Tajikistan = 'tajikistan', Tanzania = 'tanzania', Monaco = 'monaco', Bulgaria = 'bulgaria', Turkey = 'turkey', Tuvalu = 'tuvalu', China = 'china', Algeria = 'algeria', Benin = 'benin', Japan = 'japan', Mozambique = 'mozambique', TrinidadAndTobago = 'trinidad-and-tobago', Ukraine = 'ukraine', EquatorialGuinea = 'equatorial-guinea', Ethiopia = 'ethiopia', MarshallIslands = 'marshall-islands', Brunei = 'brunei', Thailand = 'thailand', Argentina = 'argentina', Ecuador = 'ecuador', Barbados = 'barbados', Belize = 'belize', CongoDemocraticRepublic = 'congo-democratic-republic', Ghana = 'ghana', Iceland = 'iceland', Qatar = 'qatar', TimorLeste = 'timor-leste', Luxembourg = 'luxembourg', Cameroon = 'cameroon', SouthSudan = 'south-sudan', Myanmar = 'myanmar', Italy = 'italy', Poland = 'poland', VaticanCity = 'vatican-city', Denmark = 'denmark', Estonia = 'estonia', Morocco = 'morocco', Rwanda = 'rwanda', Zimbabwe = 'zimbabwe', Colombia = 'colombia', Jordan = 'jordan', Seychelles = 'seychelles', Vietnam = 'vietnam', Niger = 'niger', Bahamas = 'bahamas', Brazil = 'brazil', Bolivia = 'bolivia', Netherlands = 'netherlands', SaudiArabia = 'saudi-arabia', SolomonIslands = 'solomon-islands', Uruguay = 'uruguay', UnitedArabEmirates = 'united-arab-emirates', Armenia = 'armenia', Norway = 'norway', Micronesia = 'micronesia', Russia = 'russia', Sweden = 'sweden', Yemen = 'yemen', Haiti = 'haiti', Mali = 'mali', UnitedStates = 'united-states', Namibia = 'namibia', Cambodia = 'cambodia', Guyana = 'guyana', Germany = 'germany', Slovakia = 'slovakia', Chad = 'chad', Belgium = 'belgium', Eritrea = 'eritrea', Kiribati = 'kiribati', Nigeria = 'nigeria', Oman = 'oman', SaoTomeAndPrincipe = 'sao-tome-and-principe', Tunisia = 'tunisia', Austria = 'austria', Hungary = 'hungary', Tonga = 'tonga', Libya = 'libya', Bahrain = 'bahrain', GuineaBissau = 'guinea-bissau', Malta = 'malta', Guatemala = 'guatemala', Panama = 'panama', SaintVincentAndTheGrenadines = 'saint-vincent-and-the-grenadines', Sudan = 'sudan', Liberia = 'liberia', BurkinaFaso = 'burkina-faso', Switzerland = 'switzerland', Egypt = 'egypt', Chile = 'chile', Gambia = 'gambia', CentralAfricanRepublic = 'central-african-republic', Senegal = 'senegal', Albania = 'albania', Pakistan = 'pakistan', SaintLucia = 'saint-lucia', Greece = 'greece', Lithuania = 'lithuania', Kenya = 'kenya', Maldives = 'maldives', Montenegro = 'montenegro', NorthKorea = 'north-korea', Malaysia = 'malaysia', Romania = 'romania', Somalia = 'somalia', Andorra = 'andorra', CaboVerde = 'cabo-verde', Guinea = 'guinea', SanMarino = 'san-marino', Taiwan = 'taiwan', Singapore = 'singapore', Angola = 'angola', Australia = 'australia', BosniaAndHerzegovina = 'bosnia-and-herzegovina', Djibouti = 'djibouti', Bhutan = 'bhutan', CoteDIvoire = 'cote-d-ivoire', Iraq = 'iraq', Samoa = 'samoa', Palau = 'palau', SriLanka = 'sri-lanka', Dominica = 'dominica', SaintKittsAndNevis = 'saint-kitts-and-nevis', Iran = 'iran', ElSalvador = 'el-salvador', CzechRepublic = 'czech-republic', Lebanon = 'lebanon', Suriname = 'suriname', Eswatini = 'eswatini', Nicaragua = 'nicaragua', Mongolia = 'mongolia', Afghanistan = 'afghanistan', CongoRepublic = 'congo-republic', NorthMacedonia = 'north-macedonia', Togo = 'togo', Turkmenistan = 'turkmenistan', Uganda = 'uganda', Venezuela = 'venezuela', Zambia = 'zambia', Paraguay = 'paraguay', Portugal = 'portugal', Ireland = 'ireland', Palestine = 'palestine', SouthKorea = 'south-korea', UnitedKingdom = 'united-kingdom', Finland = 'finland', France = 'france', CostaRica = 'costa-rica', AntiguaAndBarbuda = 'antigua-and-barbuda', Kazakhstan = 'kazakhstan', Kyrgyzstan = 'kyrgyzstan', Peru = 'peru', Nauru = 'nauru', Cyprus = 'cyprus', Liechtenstein = 'liechtenstein', Fiji = 'fiji', Mauritania = 'mauritania', Moldova = 'moldova', Indonesia = 'indonesia', Vanuatu = 'vanuatu', Burundi = 'burundi', Belarus = 'belarus', Azerbaijan = 'azerbaijan', Jamaica = 'jamaica', Madagascar = 'madagascar', Nepal = 'nepal', DominicanRepublic = 'dominican-republic', Spain = 'spain', Comoros = 'comoros', Latvia = 'latvia', Grenada = 'grenada', SouthAfrica = 'south-africa', Lesotho = 'lesotho', India = 'india', Uzbekistan = 'uzbekistan', Croatia = 'croatia', Israel = 'israel', Kuwait = 'kuwait', Laos = 'laos', Mexico = 'mexico', PapuaNewGuinea = 'papua-new-guinea', Slovenia = 'slovenia', Serbia = 'serbia' }
export const enum ConversationStatus { Snoozed = 'snoozed', Active = 'active', Archived = 'archived', Deleted = 'deleted', Closed = 'closed' }
export const enum ContentVisibility { Shared = 'shared', Protected = 'protected', Private = 'private', Internal = 'internal', Public = 'public' }
export const enum ContactAddressType { Work = 'work', Shipping = 'shipping', Temporary = 'temporary', Billing = 'billing', Personal = 'personal', Other = 'other', Business = 'business', Home = 'home' }
export const enum CommunicationRole { Owner = 'owner', Channel = 'channel', Guest = 'guest', Group = 'group', Admin = 'admin', Moderator = 'moderator', Service = 'service', User = 'user', Member = 'member', Bot = 'bot', System = 'system', Assistant = 'assistant' }
export const enum CommunicationMethod { InstantMessage = 'instant-message', Mail = 'mail', Sms = 'sms', Other = 'other', Text = 'text', Phone = 'phone', InPerson = 'in-person', SocialMedia = 'social-media', PushNotification = 'push-notification', VideoCall = 'video-call', Email = 'email' }
export const enum ChatType { Private = 'private', Group = 'group', Public = 'public' }
export const enum CardType { Credit = 'credit', Debit = 'debit', UnknownCard = 'unknown-card' }
export const enum CampaignType { SocialMedia = 'social-media', SearchEngine = 'search-engine', Email = 'email', Display = 'display', Other = 'other' }
export const enum CampaignStatus { Scheduled = 'scheduled', Completed = 'completed', Draft = 'draft', Paused = 'paused', Active = 'active', Cancelled = 'cancelled', Archived = 'archived', Planned = 'planned' }
export const enum CallDirection { Inbound = 'inbound', Conference = 'conference', Unknown = 'unknown', Outbound = 'outbound' }
export const enum BillingStatus { Authorised = 'authorised', Voided = 'voided', Overdue = 'overdue', Paid = 'paid', Unpaid = 'unpaid', Deleted = 'deleted', Draft = 'draft', PartiallyPaid = 'partially-paid', Pending = 'pending', Submitted = 'submitted' }
export const enum AvcStatus { Accepted = 'accepted', Rejected = 'rejected', NotChecked = 'not-checked' }
export const enum AuditOpinionType { Disclaimer = 'disclaimer', Unqualified = 'unqualified', Adverse = 'adverse', Qualified = 'qualified' }
export const enum AiToolChoiceType { Auto = 'auto', None = 'none', Any = 'any', Tool = 'tool' }
export const enum AiRole { User = 'user', Assistant = 'assistant', Tool = 'tool' }
export const enum AiMessagesContentType { ToolUse = 'tool-use', ToolResult = 'tool-result', Text = 'text', Image = 'image' }
export const enum AccountingAccountType { AssetLoansToStockholders = 'asset::loans-to-stockholders', AssetOtherFixedAssets = 'asset::other-fixed-assets', AssetOtherLongTermAssets = 'asset::other-long-term-assets', Asset = 'asset', AssetAccumulatedDepletion = 'asset::accumulated-depletion', AssetBalWithGovtAuthorities = 'asset::bal-with-govt-authorities', AssetCalledUpShareCapitalNotPaid = 'asset::called-up-share-capital-not-paid', CostOfGoodsSoldSuppliesMaterialsCogs = 'cost-of-goods-sold::supplies-materials-cogs', OtherCurrentLiabilityLoanPayable = 'other-current-liability::loan-payable', AssetLeaseBuyout = 'asset::lease-buyout', ExpenseDuesSubscriptions = 'expense::dues-subscriptions', AssetFixedAssetPhone = 'asset::fixed-asset-phone', AssetGlobalTaxDeferred = 'asset::global-tax-deferred', RevenueUnappliedCashPaymentIncome = 'revenue::unapplied-cash-payment-income', AssetSavings = 'asset::savings', AssetLoansToOfficers = 'asset::loans-to-officers', EquityOwnersEquity = 'equity::owners-equity', OtherExpenseVehicleRegistration = 'other-expense::vehicle-registration', ExpenseBadDebts = 'expense::bad-debts', ExpenseTravelMeals = 'expense::travel-meals', RevenueNonProfitIncome = 'revenue::non-profit-income', AssetAssetsInCourseOfConstruction = 'asset::assets-in-course-of-construction', AssetFixedAssetSoftware = 'asset::fixed-asset-software', ExpenseProjectStudiesSurveysAssessments = 'expense::project-studies-surveys-assessments', OtherCurrentLiabilityAccruedLiabilities = 'other-current-liability::accrued-liabilities', EquityEquityInEarningsOfSubsidiuaries = 'equity::equity-in-earnings-of-subsidiuaries', ExpenseBankCharges = 'expense::bank-charges', OtherExpenseWashAndRoadServices = 'other-expense::wash-and-road-services', AssetOtherLongTermInvestments = 'asset::other-long-term-investments', ExpenseEntertainmentMeals = 'expense::entertainment-meals', ExpensePurchasesRebates = 'expense::purchases-rebates', LiabilityStaffAndRelatedLongTermLiabilityAccounts = 'liability::staff-and-related-long-term-liability-accounts', OtherCurrentLiabilityInsurancePayable = 'other-current-liability::insurance-payable', RevenueRevenueGeneral = 'revenue::revenue-general', EquityAccumulatedOtherComprehensiveIncome = 'equity::accumulated-other-comprehensive-income', AccountsReceivable = 'accounts-receivable', LiabilityObligationsUnderFinanceLeases = 'liability::obligations-under-finance-leases', RevenueSalesOfProductIncome = 'revenue::sales-of-product-income', LiabilityAccrualsAndDeferredIncome = 'liability::accruals-and-deferred-income', AssetInvestments = 'asset::investments', OtherExpenseVehicle = 'other-expense::vehicle', AssetCashAndCashEquivalents = 'asset::cash-and-cash-equivalents', AssetLeaseholdImprovements = 'asset::leasehold-improvements', AssetChecking = 'asset::checking', AssetDepletableAssets = 'asset::depletable-assets', AssetNonCurrentAssets = 'asset::non-current-assets', OtherCurrentLiabilityLineOfCredit = 'other-current-liability::line-of-credit', OtherCurrentLiabilitySundryDebtorsAndCreditors = 'other-current-liability::sundry-debtors-and-creditors', AssetShortTermInvestmentsInRelatedParties = 'asset::short-term-investments-in-related-parties', LiabilityProvisionForLiabilities = 'liability::provision-for-liabilities', OtherExpenseMatCredit = 'other-expense::mat-credit', EquityPartnerContributions = 'equity::partner-contributions', OtherExpenseDeferredTaxExpense = 'other-expense::deferred-tax-expense', OtherExpensePriorPeriodItems = 'other-expense::prior-period-items', ExpenseLegalProfessionalFees = 'expense::legal-professional-fees', ExpenseBorrowingCost = 'expense::borrowing-cost', OtherExpensePenaltiesSettlements = 'other-expense::penalties-settlements', OtherCurrentLiabilityShortTermBorrowings = 'other-current-liability::short-term-borrowings', OtherExpenseExchangeGainOrLoss = 'other-expense::exchange-gain-or-loss', RevenueSavingsByTaxScheme = 'revenue::savings-by-tax-scheme', OtherCurrentLiabilityPrepaidExpensesPayable = 'other-current-liability::prepaid-expenses-payable', LiabilityAccruedVacationPayable = 'liability::accrued-vacation-payable', OtherExpenseOtherVehicleExpenses = 'other-expense::other-vehicle-expenses', AssetInternalTransfers = 'asset::internal-transfers', ExpenseFinanceCosts = 'expense::finance-costs', AssetFixedAssetFurniture = 'asset::fixed-asset-furniture', AssetAccumulatedAmortization = 'asset::accumulated-amortization', AssetIntangibleAssetsUnderDevelopment = 'asset::intangible-assets-under-development', AssetOtherEarMarkedBankAccounts = 'asset::other-ear-marked-bank-accounts', LiabilityOutstandingDuesMicroSmallEnterprise = 'liability::outstanding-dues-micro-small-enterprise', CostOfGoodsSoldOtherCostsOfServiceCos = 'cost-of-goods-sold::other-costs-of-service-cos', AssetMoneyMarket = 'asset::money-market', OtherCurrentLiabilityStaffAndRelatedLiabilityAccounts = 'other-current-liability::staff-and-related-liability-accounts', ExpenseAuto = 'expense::auto', OtherExpenseDepletion = 'other-expense::depletion', AssetLoansToOthers = 'asset::loans-to-others', OtherExpenseVehicleLoan = 'other-expense::vehicle-loan', EquityPreferredStock = 'equity::preferred-stock', ExpenseOtherCurrentOperatingCharges = 'expense::other-current-operating-charges', AssetAccumulatedDepreciation = 'asset::accumulated-depreciation', AssetFixedAsset = 'asset::fixed-asset', OtherCurrentLiabilityCurrentLiabilities = 'other-current-liability::current-liabilities', RevenueOwnWorkCapitalized = 'revenue::own-work-capitalized', AssetLicenses = 'asset::licenses', AssetShortTermLoansAndAdvancesToRelatedParties = 'asset::short-term-loans-and-advances-to-related-parties', OtherCurrentLiabilityGlobalTaxSuspense = 'other-current-liability::global-tax-suspense', AssetAllowanceForBadDebts = 'asset::allowance-for-bad-debts', OtherIncomeInterestEarned = 'other-income::interest-earned', OtherCurrentLiabilityProvisionForWarrantyObligations = 'other-current-liability::provision-for-warranty-obligations', AssetInventory = 'asset::inventory', ExpenseEntertainment = 'expense::entertainment', AssetLongTermInvestments = 'asset::long-term-investments', OtherExpenseVehicleLease = 'other-expense::vehicle-lease', AssetOtherCurrentAssets = 'asset::other-current-assets', OtherIncomeLossOnDisposalOfAssets = 'other-income::loss-on-disposal-of-assets', EquityPartnerDistributions = 'equity::partner-distributions', OtherExpenseTaxRoundoffGainOrLoss = 'other-expense::tax-roundoff-gain-or-loss', LiabilityBankLoans = 'liability::bank-loans', OtherCurrentLiabilityDirectDepositPayable = 'other-current-liability::direct-deposit-payable', EquityPartnersEquity = 'equity::partners-equity', ExpenseInsurance = 'expense::insurance', ExpenseExternalServices = 'expense::external-services', ExpenseShippingFreightDelivery = 'expense::shipping-freight-delivery', AssetUndepositedFunds = 'asset::undeposited-funds', ExpenseTravelExpensesSellingExpense = 'expense::travel-expenses-selling-expense', Equity = 'equity', OtherCurrentLiabilityStateLocalIncomeTaxPayable = 'other-current-liability::state-local-income-tax-payable', ExpenseUnappliedCashBillPaymentExpense = 'expense::unapplied-cash-bill-payment-expense', OtherExpenseHomeOffice = 'other-expense::home-office', EquityAccumulatedAdjustment = 'equity::accumulated-adjustment', OtherCurrentLiabilitySalesTaxPayable = 'other-current-liability::sales-tax-payable', AssetTradeAndOtherReceivables = 'asset::trade-and-other-receivables', OtherExpenseRentAndLease = 'other-expense::rent-and-lease', AssetFurnitureAndFixtures = 'asset::furniture-and-fixtures', EquityCapitalReserves = 'equity::capital-reserves', OtherExpenseExtraordinaryItems = 'other-expense::extraordinary-items', ExpenseDistributionCosts = 'expense::distribution-costs', OtherCurrentLiabilityPayrollClearing = 'other-current-liability::payroll-clearing', EquityInvestmentGrants = 'equity::investment-grants', OtherCurrentLiabilitySocialSecurityAgencies = 'other-current-liability::social-security-agencies', OtherCurrentLiabilityGlobalTaxPayable = 'other-current-liability::global-tax-payable', OtherExpenseIncomeTaxOtherExpense = 'other-expense::income-tax-other-expense', OtherCurrentLiabilityProvisionsCurrentLiabilities = 'other-current-liability::provisions-current-liabilities', OtherCurrentLiabilityCurrentPortionOfObligationsUnderFinanceLeases = 'other-current-liability::current-portion-of-obligations-under-finance-leases', ExpenseAppropriationsToDepreciation = 'expense::appropriations-to-depreciation', EquityDividendDisbursed = 'equity::dividend-disbursed', EquityOtherFreeReserves = 'equity::other-free-reserves', AssetMachineryAndEquipment = 'asset::machinery-and-equipment', ExpenseOfficeExpenses = 'expense::office-expenses', LiabilityNotesPayable = 'liability::notes-payable', AssetSecurityDeposits = 'asset::security-deposits', AssetProvisionsNonCurrentAssets = 'asset::provisions-non-current-assets', AssetProvisionsCurrentAssets = 'asset::provisions-current-assets', ExpenseInterestPaid = 'expense::interest-paid', OtherExpenseParkingAndTolls = 'other-expense::parking-and-tolls', LiabilityLiabilitiesRelatedToAssetsHeldForSale = 'liability::liabilities-related-to-assets-held-for-sale', AssetDeferredTax = 'asset::deferred-tax', EquityMoneyReceivedAgainstShareWarrants = 'equity::money-received-against-share-warrants', ExpenseStaffCosts = 'expense::staff-costs', AssetProvisionsFixedAssets = 'asset::provisions-fixed-assets', OtherIncomeOtherInvestmentIncome = 'other-income::other-investment-income', AssetOtherConsumables = 'asset::other-consumables', OtherExpenseExceptionalItems = 'other-expense::exceptional-items', RevenueSalesRetail = 'revenue::sales-retail', OtherIncomeGainLossOnSaleOfFixedAssets = 'other-income::gain-loss-on-sale-of-fixed-assets', LiabilityLongTermEmployeeBenefitObligations = 'liability::long-term-employee-benefit-obligations', AssetFixedAssetOtherToolsEquipment = 'asset::fixed-asset-other-tools-equipment', AssetOtherAsset = 'asset::other-asset', EquityShareCapital = 'equity::share-capital', OtherExpense = 'other-expense', EquityPaidInCapitalOrSurplus = 'equity::paid-in-capital-or-surplus', ExpenseShippingAndDeliveryExpense = 'expense::shipping-and-delivery-expense', RevenueOtherCurrentOperatingIncome = 'revenue::other-current-operating-income', OtherExpenseRepairsAndMaintenance = 'other-expense::repairs-and-maintenance', OtherExpenseMortgageInterest = 'other-expense::mortgage-interest', AssetPrepaymentsAndAccruedIncome = 'asset::prepayments-and-accrued-income', EquityCalledUpShareCapital = 'equity::called-up-share-capital', ExpenseOtherExternalServices = 'expense::other-external-services', OtherCurrentLiabilityDutiesAndTaxes = 'other-current-liability::duties-and-taxes', LiabilityLongTermLiability = 'liability::long-term-liability', AssetGoodwill = 'asset::goodwill', OtherExpenseHomeOwnerRentalInsurance = 'other-expense::home-owner-rental-insurance', AssetOtherLongTermLoansAndAdvances = 'asset::other-long-term-loans-and-advances', AssetLongTermLoansAndAdvancesToRelatedParties = 'asset::long-term-loans-and-advances-to-related-parties', ExpenseCommissionsAndFees = 'expense::commissions-and-fees', RevenueOperatingGrants = 'revenue::operating-grants', OtherIncome = 'other-income', OtherExpenseGasAndFuel = 'other-expense::gas-and-fuel', OtherCurrentLiabilityPayrollTaxPayable = 'other-current-liability::payroll-tax-payable', CostOfGoodsSoldFreightAndDeliveryCost = 'cost-of-goods-sold::freight-and-delivery-cost', LiabilityOtherLongTermProvisions = 'liability::other-long-term-provisions', OtherIncomeDividendIncome = 'other-income::dividend-income', EquityTreasuryStock = 'equity::treasury-stock', EquityRetainedEarnings = 'equity::retained-earnings', ExpenseLossOnDiscontinuedOperationsNetOfTax = 'expense::loss-on-discontinued-operations-net-of-tax', AssetFixedAssetPhotoVideo = 'asset::fixed-asset-photo-video', AssetParticipatingInterests = 'asset::participating-interests', AssetRentsHeldInTrust = 'asset::rents-held-in-trust', CostOfGoodsSoldCostOfSales = 'cost-of-goods-sold::cost-of-sales', RevenueIncome = 'revenue::income', AssetOrganizationalCosts = 'asset::organizational-costs', RevenueDiscountsRefundsGiven = 'revenue::discounts-refunds-given', EquityPersonalExpense = 'equity::personal-expense', AssetFixedAssetCopiers = 'asset::fixed-asset-copiers', EquityPersonalIncome = 'equity::personal-income', ExpenseOtherRentalCosts = 'expense::other-rental-costs', OtherExpenseDepreciation = 'other-expense::depreciation', ExpenseOtherMiscellaneousServiceCost = 'expense::other-miscellaneous-service-cost', ExpenseTaxesPaid = 'expense::taxes-paid', CostOfGoodsSoldCostOfLaborCos = 'cost-of-goods-sold::cost-of-labor-cos', ExpenseManagementCompensation = 'expense::management-compensation', AssetOtherIntangibleAssets = 'asset::other-intangible-assets', CostOfGoodsSoldEquipmentRentalCos = 'cost-of-goods-sold::equipment-rental-cos', LiabilityLongTermBorrowings = 'liability::long-term-borrowings', OtherCurrentLiabilityDividendsPayable = 'other-current-liability::dividends-payable', EquityFunds = 'equity::funds', ExpenseSundry = 'expense::sundry', RevenueOtherPrimaryIncome = 'revenue::other-primary-income', LiabilityAccountsPayable = 'liability::accounts-payable', AssetInvestmentMortgageRealEstateLoans = 'asset::investment-mortgage-real-estate-loans', LiabilityGroupAndAssociates = 'liability::group-and-associates', EquityEstimatedTaxes = 'equity::estimated-taxes', OtherIncomeOtherMiscellaneousIncome = 'other-income::other-miscellaneous-income', EquityShareApplicationMoneyPendingAllotment = 'equity::share-application-money-pending-allotment', AssetInvestmentOther = 'asset::investment-other', AssetEmployeeCashAdvances = 'asset::employee-cash-advances', OtherCurrentLiabilityCurrentTaxLiability = 'other-current-liability::current-tax-liability', ExpenseAdvertisingPromotional = 'expense::advertising-promotional', ExpensePromotionalMeals = 'expense::promotional-meals', OtherCurrentLiabilityTradeAndOtherPayables = 'other-current-liability::trade-and-other-payables', RevenueCashReceiptIncome = 'revenue::cash-receipt-income', AssetFixedAssetComputers = 'asset::fixed-asset-computers', OtherExpenseVehicleRepairs = 'other-expense::vehicle-repairs', AssetLand = 'asset::land', ExpenseSuppliesMaterials = 'expense::supplies-materials', ExpenseIncomeTaxExpense = 'expense::income-tax-expense', OtherExpenseUtilities = 'other-expense::utilities', OtherCurrentLiabilityTrustAccountsLiabilities = 'other-current-liability::trust-accounts-liabilities', CostOfGoodsSoldShippingFreightDeliveryCos = 'cost-of-goods-sold::shipping-freight-delivery-cos', AssetCapitalWip = 'asset::capital-wip', OtherCurrentLiability = 'other-current-liability', LiabilityOtherLongTermLiabilities = 'liability::other-long-term-liabilities', LiabilityShareholderNotesPayable = 'liability::shareholder-notes-payable', EquityOpeningBalanceEquity = 'equity::opening-balance-equity', ExpenseCharitableContributions = 'expense::charitable-contributions', AssetBank = 'asset::bank', CostOfGoodsSold = 'cost-of-goods-sold', ExpenseUtilities = 'expense::utilities', OtherCurrentLiabilityOtherCurrentLiabilities = 'other-current-liability::other-current-liabilities', ExpenseOtherBusinessExpenses = 'expense::other-business-expenses', AssetAssetsAvailableForSale = 'asset::assets-available-for-sale', AssetLandAsset = 'asset::land-asset', Expense = 'expense', ExpenseRentOrLeaseOfBuildings = 'expense::rent-or-lease-of-buildings', LiabilityDeferredTaxLiabilities = 'liability::deferred-tax-liabilities', OtherExpenseOtherHomeOfficeExpenses = 'other-expense::other-home-office-expenses', OtherIncomeGainLossOnSaleOfInvestments = 'other-income::gain-loss-on-sale-of-investments', AssetInvestmentTaxExemptSecurities = 'asset::investment-tax-exempt-securities', AssetCumulativeDepreciationOnIntangibleAssets = 'asset::cumulative-depreciation-on-intangible-assets', LiabilityProvisionsNonCurrentLiabilities = 'liability::provisions-non-current-liabilities', AssetInvestmentUsGovernmentObligations = 'asset::investment-us-government-obligations', AssetAccumulatedAmortizationOfOtherAssets = 'asset::accumulated-amortization-of-other-assets', AssetDevelopmentCosts = 'asset::development-costs', EquityHealthcare = 'equity::healthcare', ExpenseOtherSellingExpenses = 'expense::other-selling-expenses', AssetVehicles = 'asset::vehicles', ExpenseAmortizationExpense = 'expense::amortization-expense', OtherExpenseVehicleInsurance = 'other-expense::vehicle-insurance', OtherExpenseOtherMiscellaneousExpense = 'other-expense::other-miscellaneous-expense', OtherIncomeTaxExemptInterest = 'other-income::tax-exempt-interest', OtherIncomeUnrealisedLossOnSecuritiesNetOfTax = 'other-income::unrealised-loss-on-securities-net-of-tax', AssetAssetsHeldForSale = 'asset::assets-held-for-sale', AssetCashOnHand = 'asset::cash-on-hand', AssetGlobalTaxRefund = 'asset::global-tax-refund', AssetIntangibleAssets = 'asset::intangible-assets', AssetRetainage = 'asset::retainage', ExpenseTravel = 'expense::travel', LiabilityDebtsRelatedToParticipatingInterests = 'liability::debts-related-to-participating-interests', ExpenseGlobalTaxExpense = 'expense::global-tax-expense', AssetExpenditureAuthorisationsAndLettersOfCredit = 'asset::expenditure-authorisations-and-letters-of-credit', OtherCurrentLiabilityInterestPayables = 'other-current-liability::interest-payables', OtherExpenseVehicleLoanInterest = 'other-expense::vehicle-loan-interest', AssetPrepaidExpenses = 'asset::prepaid-expenses', ExpenseExtraordinaryCharges = 'expense::extraordinary-charges', OtherCurrentLiabilityRentsInTrustLiability = 'other-current-liability::rents-in-trust-liability', EquityCommonStock = 'equity::common-stock', ExpensePayrollExpenses = 'expense::payroll-expenses', ExpenseTravelExpensesGeneralAndAdminExpenses = 'expense::travel-expenses-general-and-admin-expenses', ExpenseRepairMaintenance = 'expense::repair-maintenance', ExpenseOfficeGeneralAdministrativeExpenses = 'expense::office-general-administrative-expenses', RevenueSalesWholesale = 'revenue::sales-wholesale', ExpenseEquipmentRental = 'expense::equipment-rental', LiabilityOutstandingDuesOtherThanMicroSmallEnterprise = 'liability::outstanding-dues-other-than-micro-small-enterprise', LiabilityAccruedLongTermLiabilities = 'liability::accrued-long-term-liabilities', LiabilityLongTermDebit = 'liability::long-term-debit', ExpenseCostOfLabor = 'expense::cost-of-labor', OtherIncomeOtherOperatingIncome = 'other-income::other-operating-income', AssetBuildings = 'asset::buildings', RevenueServiceFeeIncome = 'revenue::service-fee-income', OtherExpenseAmortization = 'other-expense::amortization', OtherCurrentLiabilityFederalIncomeTaxPayable = 'other-current-liability::federal-income-tax-payable', LiabilityGovernmentAndOtherPublicAuthorities = 'liability::government-and-other-public-authorities', AssetOtherCurrentAsset = 'asset::other-current-asset', AssetTrustAccounts = 'asset::trust-accounts', OtherCurrentLiabilityCurrentPortionEmployeeBenefitsObligations = 'other-current-liability::current-portion-employee-benefits-obligations', AssetAvailableForSaleFinancialAssets = 'asset::available-for-sale-financial-assets', LiabilityCreditCard = 'liability::credit-card' }
export const enum AccountStatus { Closed = 'closed', Suspended = 'suspended', Pending = 'pending', Active = 'active', Inactive = 'inactive' }
export const enum AccountEngagementLevel { Unknown = 'unknown', Cold = 'cold', Hot = 'hot', Warm = 'warm' }
export const enum AccessControlModel { None = 'none', Mac = 'mac', Rbac = 'rbac', Dac = 'dac', Custom = 'custom', Abac = 'abac' }
