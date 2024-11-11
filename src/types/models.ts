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
export interface Payments { refund?: Refunds;
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
    metadata?: Metadata }
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
export const enum TargetType { LineItem = 'line-item', ShippingLine = 'shipping-line' }
export const enum ChannelAvailability { InStore = 'in-store', AllChannels = 'all-channels', Online = 'online', InApp = 'in-app' }
export const enum Format { Xml = 'xml', Json = 'json' }
export const enum AppliesTo { SpecificCategories = 'specific-categories', AllItems = 'all-items', SpecificItems = 'specific-items' }
export const enum AccountType { AssetAccumulatedDepletion = 'asset::accumulated-depletion', RevenueNonProfitIncome = 'revenue::non-profit-income', OtherCurrentLiabilityStateLocalIncomeTaxPayable = 'other-current-liability::state-local-income-tax-payable', ExpenseProjectStudiesSurveysAssessments = 'expense::project-studies-surveys-assessments', EquityOtherFreeReserves = 'equity::other-free-reserves', ExpenseStaffCosts = 'expense::staff-costs', ExpenseUtilities = 'expense::utilities', OtherExpenseExchangeGainOrLoss = 'other-expense::exchange-gain-or-loss', OtherExpenseGasAndFuel = 'other-expense::gas-and-fuel', OtherExpenseParkingAndTolls = 'other-expense::parking-and-tolls', OtherExpenseRepairsAndMaintenance = 'other-expense::repairs-and-maintenance', AssetLandAsset = 'asset::land-asset', RevenueSalesOfProductIncome = 'revenue::sales-of-product-income', AssetMachineryAndEquipment = 'asset::machinery-and-equipment', AssetOrganizationalCosts = 'asset::organizational-costs', LiabilityAccountsPayable = 'liability::accounts-payable', AssetDepletableAssets = 'asset::depletable-assets', RevenueSalesRetail = 'revenue::sales-retail', EquityRetainedEarnings = 'equity::retained-earnings', AssetShortTermLoansAndAdvancesToRelatedParties = 'asset::short-term-loans-and-advances-to-related-parties', RevenueCashReceiptIncome = 'revenue::cash-receipt-income', ExpenseBadDebts = 'expense::bad-debts', LiabilityProvisionForLiabilities = 'liability::provision-for-liabilities', AssetCumulativeDepreciationOnIntangibleAssets = 'asset::cumulative-depreciation-on-intangible-assets', ExpensePromotionalMeals = 'expense::promotional-meals', CostOfGoodsSoldEquipmentRentalCos = 'cost-of-goods-sold::equipment-rental-cos', CostOfGoodsSoldCostOfLaborCos = 'cost-of-goods-sold::cost-of-labor-cos', OtherExpenseExtraordinaryItems = 'other-expense::extraordinary-items', ExpenseCostOfLabor = 'expense::cost-of-labor', ExpenseEntertainmentMeals = 'expense::entertainment-meals', CostOfGoodsSoldSuppliesMaterialsCogs = 'cost-of-goods-sold::supplies-materials-cogs', LiabilityNotesPayable = 'liability::notes-payable', LiabilityOutstandingDuesOtherThanMicroSmallEnterprise = 'liability::outstanding-dues-other-than-micro-small-enterprise', AssetOtherConsumables = 'asset::other-consumables', LiabilityLongTermBorrowings = 'liability::long-term-borrowings', EquityHealthcare = 'equity::healthcare', AssetVehicles = 'asset::vehicles', LiabilityOtherLongTermLiabilities = 'liability::other-long-term-liabilities', EquityCalledUpShareCapital = 'equity::called-up-share-capital', OtherCurrentLiabilityStaffAndRelatedLiabilityAccounts = 'other-current-liability::staff-and-related-liability-accounts', ExpenseOtherCurrentOperatingCharges = 'expense::other-current-operating-charges', ExpenseSundry = 'expense::sundry', OtherCurrentLiabilityAccruedLiabilities = 'other-current-liability::accrued-liabilities', EquityCommonStock = 'equity::common-stock', OtherCurrentLiabilityInterestPayables = 'other-current-liability::interest-payables', OtherExpenseMortgageInterest = 'other-expense::mortgage-interest', EquityPersonalIncome = 'equity::personal-income', OtherExpenseVehicleLease = 'other-expense::vehicle-lease', AssetAccumulatedDepreciation = 'asset::accumulated-depreciation', AssetRentsHeldInTrust = 'asset::rents-held-in-trust', AssetSecurityDeposits = 'asset::security-deposits', AssetLeaseBuyout = 'asset::lease-buyout', AssetFixedAssetCopiers = 'asset::fixed-asset-copiers', LiabilityDebtsRelatedToParticipatingInterests = 'liability::debts-related-to-participating-interests', AssetFixedAssetPhotoVideo = 'asset::fixed-asset-photo-video', Income = 'income', EquityCapitalReserves = 'equity::capital-reserves', LiabilityGroupAndAssociates = 'liability::group-and-associates', RevenueOperatingGrants = 'revenue::operating-grants', AssetOtherEarMarkedBankAccounts = 'asset::other-ear-marked-bank-accounts', OtherExpenseOtherMiscellaneousExpense = 'other-expense::other-miscellaneous-expense', OtherCurrentLiabilityPayrollTaxPayable = 'other-current-liability::payroll-tax-payable', CostOfGoodsSoldOtherCostsOfServiceCos = 'cost-of-goods-sold::other-costs-of-service-cos', AssetCapitalWip = 'asset::capital-wip', ExpenseRentOrLeaseOfBuildings = 'expense::rent-or-lease-of-buildings', OtherCurrentLiabilitySundryDebtorsAndCreditors = 'other-current-liability::sundry-debtors-and-creditors', OtherExpenseDepletion = 'other-expense::depletion', ExpenseFinanceCosts = 'expense::finance-costs', LiabilityAccruedLongTermLiabilities = 'liability::accrued-long-term-liabilities', OtherCurrentLiabilityCurrentLiabilities = 'other-current-liability::current-liabilities', AssetParticipatingInterests = 'asset::participating-interests', OtherCurrentLiabilityGlobalTaxPayable = 'other-current-liability::global-tax-payable', RevenueRevenueGeneral = 'revenue::revenue-general', AssetUndepositedFunds = 'asset::undeposited-funds', OtherExpenseOtherHomeOfficeExpenses = 'other-expense::other-home-office-expenses', Equity = 'equity', LiabilityLongTermDebit = 'liability::long-term-debit', AssetShortTermInvestmentsInRelatedParties = 'asset::short-term-investments-in-related-parties', ExpenseOtherBusinessExpenses = 'expense::other-business-expenses', LiabilityOutstandingDuesMicroSmallEnterprise = 'liability::outstanding-dues-micro-small-enterprise', AssetCalledUpShareCapitalNotPaid = 'asset::called-up-share-capital-not-paid', RevenueSavingsByTaxScheme = 'revenue::savings-by-tax-scheme', OtherExpenseVehicleRegistration = 'other-expense::vehicle-registration', LiabilityOtherLongTermProvisions = 'liability::other-long-term-provisions', AssetGlobalTaxRefund = 'asset::global-tax-refund', AssetOtherLongTermLoansAndAdvances = 'asset::other-long-term-loans-and-advances', ExpenseRepairMaintenance = 'expense::repair-maintenance', OtherExpenseDepreciation = 'other-expense::depreciation', AccountsReceivable = 'accounts-receivable', ExpensePurchasesRebates = 'expense::purchases-rebates', ExpenseTravelMeals = 'expense::travel-meals', ExpenseBankCharges = 'expense::bank-charges', AssetDevelopmentCosts = 'asset::development-costs', AssetInvestments = 'asset::investments', Asset = 'asset', ExpenseDuesSubscriptions = 'expense::dues-subscriptions', OtherCurrentLiabilitySocialSecurityAgencies = 'other-current-liability::social-security-agencies', LiabilityBankLoans = 'liability::bank-loans', AssetTradeAndOtherReceivables = 'asset::trade-and-other-receivables', AssetProvisionsNonCurrentAssets = 'asset::provisions-non-current-assets', AssetAccumulatedAmortizationOfOtherAssets = 'asset::accumulated-amortization-of-other-assets', OtherIncomeInterestEarned = 'other-income::interest-earned', OtherCurrentLiabilityShortTermBorrowings = 'other-current-liability::short-term-borrowings', AssetDeferredTax = 'asset::deferred-tax', AssetIntangibleAssets = 'asset::intangible-assets', AssetInvestmentOther = 'asset::investment-other', AssetLand = 'asset::land', LiabilityCreditCard = 'liability::credit-card', AssetPrepaymentsAndAccruedIncome = 'asset::prepayments-and-accrued-income', OtherExpenseWashAndRoadServices = 'other-expense::wash-and-road-services', OtherCurrentLiabilityLoanPayable = 'other-current-liability::loan-payable', OtherCurrentLiabilityDividendsPayable = 'other-current-liability::dividends-payable', AssetExpenditureAuthorisationsAndLettersOfCredit = 'asset::expenditure-authorisations-and-letters-of-credit', EquityAccumulatedOtherComprehensiveIncome = 'equity::accumulated-other-comprehensive-income', ExpenseUnappliedCashBillPaymentExpense = 'expense::unapplied-cash-bill-payment-expense', AssetAssetsInCourseOfConstruction = 'asset::assets-in-course-of-construction', OtherExpenseOtherVehicleExpenses = 'other-expense::other-vehicle-expenses', RevenueOtherPrimaryIncome = 'revenue::other-primary-income', EquityPartnersEquity = 'equity::partners-equity', ExpenseCommissionsAndFees = 'expense::commissions-and-fees', ExpenseOfficeExpenses = 'expense::office-expenses', ExpenseSuppliesMaterials = 'expense::supplies-materials', LiabilityLongTermEmployeeBenefitObligations = 'liability::long-term-employee-benefit-obligations', OtherExpenseRentAndLease = 'other-expense::rent-and-lease', AssetMoneyMarket = 'asset::money-market', OtherIncome = 'other-income', AssetAllowanceForBadDebts = 'asset::allowance-for-bad-debts', AssetEmployeeCashAdvances = 'asset::employee-cash-advances', AssetFixedAsset = 'asset::fixed-asset', ExpenseOtherSellingExpenses = 'expense::other-selling-expenses', OtherExpenseHomeOffice = 'other-expense::home-office', EquityDividendDisbursed = 'equity::dividend-disbursed', ExpenseOtherRentalCosts = 'expense::other-rental-costs', OtherExpenseExceptionalItems = 'other-expense::exceptional-items', OtherExpenseMatCredit = 'other-expense::mat-credit', ExpenseInsurance = 'expense::insurance', ExpenseTaxesPaid = 'expense::taxes-paid', LiabilityLiabilitiesRelatedToAssetsHeldForSale = 'liability::liabilities-related-to-assets-held-for-sale', AssetLoansToOfficers = 'asset::loans-to-officers', LiabilityObligationsUnderFinanceLeases = 'liability::obligations-under-finance-leases', AssetOtherAsset = 'asset::other-asset', OtherExpenseVehicleRepairs = 'other-expense::vehicle-repairs', OtherIncomeTaxExemptInterest = 'other-income::tax-exempt-interest', AssetLoansToStockholders = 'asset::loans-to-stockholders', AssetOtherFixedAssets = 'asset::other-fixed-assets', ExpenseDistributionCosts = 'expense::distribution-costs', OtherCurrentLiabilityCurrentPortionOfObligationsUnderFinanceLeases = 'other-current-liability::current-portion-of-obligations-under-finance-leases', OtherExpenseAmortization = 'other-expense::amortization', OtherExpenseDeferredTaxExpense = 'other-expense::deferred-tax-expense', AssetLeaseholdImprovements = 'asset::leasehold-improvements', AssetLoansToOthers = 'asset::loans-to-others', AssetOtherCurrentAssets = 'asset::other-current-assets', ExpenseEntertainment = 'expense::entertainment', ExpenseEquipmentRental = 'expense::equipment-rental', AssetGoodwill = 'asset::goodwill', EquityEquityInEarningsOfSubsidiuaries = 'equity::equity-in-earnings-of-subsidiuaries', OtherCurrentLiabilityPrepaidExpensesPayable = 'other-current-liability::prepaid-expenses-payable', RevenueDiscountsRefundsGiven = 'revenue::discounts-refunds-given', ExpenseAmortizationExpense = 'expense::amortization-expense', LiabilityAccruedVacationPayable = 'liability::accrued-vacation-payable', EquityFunds = 'equity::funds', EquityAccumulatedAdjustment = 'equity::accumulated-adjustment', EquityPartnerContributions = 'equity::partner-contributions', OtherExpenseVehicleInsurance = 'other-expense::vehicle-insurance', OtherIncomeGainLossOnSaleOfFixedAssets = 'other-income::gain-loss-on-sale-of-fixed-assets', ExpenseAdvertisingPromotional = 'expense::advertising-promotional', EquityInvestmentGrants = 'equity::investment-grants', ExpenseOtherExternalServices = 'expense::other-external-services', OtherCurrentLiabilityGlobalTaxSuspense = 'other-current-liability::global-tax-suspense', OtherIncomeUnrealisedLossOnSecuritiesNetOfTax = 'other-income::unrealised-loss-on-securities-net-of-tax', AssetFixedAssetFurniture = 'asset::fixed-asset-furniture', OtherExpenseVehicle = 'other-expense::vehicle', AssetBank = 'asset::bank', AssetFixedAssetOtherToolsEquipment = 'asset::fixed-asset-other-tools-equipment', ExpenseIncomeTaxExpense = 'expense::income-tax-expense', Expense = 'expense', AssetNonCurrentAssets = 'asset::non-current-assets', OtherCurrentLiabilityPayrollClearing = 'other-current-liability::payroll-clearing', OtherCurrentLiabilityTrustAccountsLiabilities = 'other-current-liability::trust-accounts-liabilities', AssetFixedAssetSoftware = 'asset::fixed-asset-software', OtherExpensePenaltiesSettlements = 'other-expense::penalties-settlements', ExpenseTravel = 'expense::travel', OtherCurrentLiabilityCurrentPortionEmployeeBenefitsObligations = 'other-current-liability::current-portion-employee-benefits-obligations', OtherExpenseVehicleLoan = 'other-expense::vehicle-loan', LiabilityDeferredTaxLiabilities = 'liability::deferred-tax-liabilities', RevenueOwnWorkCapitalized = 'revenue::own-work-capitalized', AssetProvisionsFixedAssets = 'asset::provisions-fixed-assets', ExpenseTravelExpensesSellingExpense = 'expense::travel-expenses-selling-expense', ExpenseCharitableContributions = 'expense::charitable-contributions', OtherCurrentLiabilityOtherCurrentLiabilities = 'other-current-liability::other-current-liabilities', CostOfGoodsSoldShippingFreightDeliveryCos = 'cost-of-goods-sold::shipping-freight-delivery-cos', AssetOtherLongTermInvestments = 'asset::other-long-term-investments', OtherIncomeGainLossOnSaleOfInvestments = 'other-income::gain-loss-on-sale-of-investments', ExpenseAppropriationsToDepreciation = 'expense::appropriations-to-depreciation', AssetIntangibleAssetsUnderDevelopment = 'asset::intangible-assets-under-development', ExpenseLegalProfessionalFees = 'expense::legal-professional-fees', LiabilityShareholderNotesPayable = 'liability::shareholder-notes-payable', EquityPaidInCapitalOrSurplus = 'equity::paid-in-capital-or-surplus', OtherCurrentLiabilityRentsInTrustLiability = 'other-current-liability::rents-in-trust-liability', OtherExpense = 'other-expense', AssetLicenses = 'asset::licenses', LiabilityLongTermLiability = 'liability::long-term-liability', AssetBuildings = 'asset::buildings', LiabilityAccrualsAndDeferredIncome = 'liability::accruals-and-deferred-income', ExpenseInterestPaid = 'expense::interest-paid', OtherExpenseVehicleLoanInterest = 'other-expense::vehicle-loan-interest', AssetBalWithGovtAuthorities = 'asset::bal-with-govt-authorities', ExpenseManagementCompensation = 'expense::management-compensation', RevenueIncome = 'revenue::income', EquityOpeningBalanceEquity = 'equity::opening-balance-equity', EquityEstimatedTaxes = 'equity::estimated-taxes', OtherCurrentLiabilityCurrentTaxLiability = 'other-current-liability::current-tax-liability', OtherCurrentLiabilitySalesTaxPayable = 'other-current-liability::sales-tax-payable', AssetFurnitureAndFixtures = 'asset::furniture-and-fixtures', RevenueUnappliedCashPaymentIncome = 'revenue::unapplied-cash-payment-income', CostOfGoodsSoldCostOfSales = 'cost-of-goods-sold::cost-of-sales', ExpenseAuto = 'expense::auto', ExpenseTravelExpensesGeneralAndAdminExpenses = 'expense::travel-expenses-general-and-admin-expenses', AssetInvestmentUsGovernmentObligations = 'asset::investment-us-government-obligations', LiabilityStaffAndRelatedLongTermLiabilityAccounts = 'liability::staff-and-related-long-term-liability-accounts', EquityPartnerDistributions = 'equity::partner-distributions', OtherCurrentLiabilityLineOfCredit = 'other-current-liability::line-of-credit', OtherCurrentLiabilityTradeAndOtherPayables = 'other-current-liability::trade-and-other-payables', OtherIncomeOtherMiscellaneousIncome = 'other-income::other-miscellaneous-income', AssetAssetsHeldForSale = 'asset::assets-held-for-sale', AssetAssetsAvailableForSale = 'asset::assets-available-for-sale', AssetOtherIntangibleAssets = 'asset::other-intangible-assets', AssetPrepaidExpenses = 'asset::prepaid-expenses', ExpenseLossOnDiscontinuedOperationsNetOfTax = 'expense::loss-on-discontinued-operations-net-of-tax', ExpenseShippingFreightDelivery = 'expense::shipping-freight-delivery', OtherIncomeLossOnDisposalOfAssets = 'other-income::loss-on-disposal-of-assets', ExpenseShippingAndDeliveryExpense = 'expense::shipping-and-delivery-expense', OtherIncomeDividendIncome = 'other-income::dividend-income', AssetLongTermLoansAndAdvancesToRelatedParties = 'asset::long-term-loans-and-advances-to-related-parties', ExpenseOtherMiscellaneousServiceCost = 'expense::other-miscellaneous-service-cost', CostOfGoodsSold = 'cost-of-goods-sold', RevenueServiceFeeIncome = 'revenue::service-fee-income', AssetCashAndCashEquivalents = 'asset::cash-and-cash-equivalents', RevenueOtherCurrentOperatingIncome = 'revenue::other-current-operating-income', AssetTrustAccounts = 'asset::trust-accounts', EquityMoneyReceivedAgainstShareWarrants = 'equity::money-received-against-share-warrants', OtherExpenseIncomeTaxOtherExpense = 'other-expense::income-tax-other-expense', OtherExpensePriorPeriodItems = 'other-expense::prior-period-items', LiabilityGovernmentAndOtherPublicAuthorities = 'liability::government-and-other-public-authorities', EquityOwnersEquity = 'equity::owners-equity', AssetProvisionsCurrentAssets = 'asset::provisions-current-assets', AssetChecking = 'asset::checking', Liability = 'liability', AssetLongTermInvestments = 'asset::long-term-investments', EquityShareApplicationMoneyPendingAllotment = 'equity::share-application-money-pending-allotment', ExpensePayrollExpenses = 'expense::payroll-expenses', AssetInternalTransfers = 'asset::internal-transfers', OtherIncomeOtherInvestmentIncome = 'other-income::other-investment-income', OtherCurrentLiabilityProvisionForWarrantyObligations = 'other-current-liability::provision-for-warranty-obligations', OtherExpenseHomeOwnerRentalInsurance = 'other-expense::home-owner-rental-insurance', AssetCashOnHand = 'asset::cash-on-hand', AssetFixedAssetComputers = 'asset::fixed-asset-computers', ExpensePenaltiesSettlements = 'expense::penalties-settlements', AssetGlobalTaxDeferred = 'asset::global-tax-deferred', AssetInvestmentTaxExemptSecurities = 'asset::investment-tax-exempt-securities', AssetOtherLongTermAssets = 'asset::other-long-term-assets', OtherCurrentLiabilityDutiesAndTaxes = 'other-current-liability::duties-and-taxes', AssetInventory = 'asset::inventory', AssetAccumulatedAmortization = 'asset::accumulated-amortization', ExpenseBorrowingCost = 'expense::borrowing-cost', EquityPersonalExpense = 'equity::personal-expense', OtherCurrentLiability = 'other-current-liability', ExpenseGlobalTaxExpense = 'expense::global-tax-expense', EquityPreferredStock = 'equity::preferred-stock', ExpenseExternalServices = 'expense::external-services', ExpenseOfficeGeneralAdministrativeExpenses = 'expense::office-general-administrative-expenses', LiabilityProvisionsNonCurrentLiabilities = 'liability::provisions-non-current-liabilities', OtherCurrentLiabilityInsurancePayable = 'other-current-liability::insurance-payable', RevenueSalesWholesale = 'revenue::sales-wholesale', AssetAvailableForSaleFinancialAssets = 'asset::available-for-sale-financial-assets', AssetSavings = 'asset::savings', OtherCurrentLiabilityDirectDepositPayable = 'other-current-liability::direct-deposit-payable', OtherExpenseTaxRoundoffGainOrLoss = 'other-expense::tax-roundoff-gain-or-loss', ExpenseExtraordinaryCharges = 'expense::extraordinary-charges', EquityShareCapital = 'equity::share-capital', AssetFixedAssetPhone = 'asset::fixed-asset-phone', EquityTreasuryStock = 'equity::treasury-stock', AssetInvestmentMortgageRealEstateLoans = 'asset::investment-mortgage-real-estate-loans', AssetOtherCurrentAsset = 'asset::other-current-asset', OtherIncomeOtherOperatingIncome = 'other-income::other-operating-income', AssetRetainage = 'asset::retainage', OtherCurrentLiabilityFederalIncomeTaxPayable = 'other-current-liability::federal-income-tax-payable', CostOfGoodsSoldFreightAndDeliveryCost = 'cost-of-goods-sold::freight-and-delivery-cost', OtherCurrentLiabilityProvisionsCurrentLiabilities = 'other-current-liability::provisions-current-liabilities', OtherExpenseUtilities = 'other-expense::utilities' }
export const enum UserRoles { User = 'user', Moderator = 'moderator', Admin = 'admin' }
export const enum CustomerEligibility { SpecificCustomers = 'specific-customers', SpecificCustomerGroups = 'specific-customer-groups', All = 'all' }
export const enum Status { Scheduled = 'scheduled', Expired = 'expired', Active = 'active' }
export const enum SkuValidation { None = 'none', GlobalUnique = 'global-unique', LocalUnique = 'local-unique' }
export const enum Roles { Moderator = 'moderator', User = 'user', Admin = 'admin' }
export const enum CustomerSelection { Prerequisite = 'prerequisite', All = 'all' }
export const enum MinimumRequirements { MinimumQuantityOfItems = 'minimum-quantity-of-items', MinimumPurchaseAmount = 'minimum-purchase-amount', None = 'none' }
export const enum Gender { Male = 'male', Other = 'other', PreferNotToSay = 'prefer not to say', Female = 'female' }
export const enum AllocationMethod { Across = 'across', Each = 'each' }
export const enum TransactionMethod { Mail = 'mail', Atm = 'atm', BankBranch = 'bank-branch', Mobile = 'mobile', Online = 'online', Telephone = 'telephone' }
export const enum ReceiverRoles { User = 'user', Moderator = 'moderator', Admin = 'admin' }
export const enum TargetSelection { All = 'all', Entitled = 'entitled' }
export const enum Country { Portugal = 'portugal', Somalia = 'somalia', Tuvalu = 'tuvalu', Italy = 'italy', Oman = 'oman', Eswatini = 'eswatini', Sudan = 'sudan', Nicaragua = 'nicaragua', Israel = 'israel', Chile = 'chile', Germany = 'germany', Liberia = 'liberia', SaintVincentAndTheGrenadines = 'saint-vincent-and-the-grenadines', SriLanka = 'sri-lanka', Syria = 'syria', Bolivia = 'bolivia', Togo = 'togo', Uganda = 'uganda', Mozambique = 'mozambique', Cyprus = 'cyprus', Albania = 'albania', Ecuador = 'ecuador', Slovenia = 'slovenia', Argentina = 'argentina', Malta = 'malta', Mexico = 'mexico', SouthAfrica = 'south-africa', Djibouti = 'djibouti', Brunei = 'brunei', Jamaica = 'jamaica', Croatia = 'croatia', France = 'france', Japan = 'japan', Senegal = 'senegal', Mauritania = 'mauritania', Barbados = 'barbados', Botswana = 'botswana', Uruguay = 'uruguay', Mauritius = 'mauritius', Bahrain = 'bahrain', Malaysia = 'malaysia', Montenegro = 'montenegro', Kenya = 'kenya', CoteDIvoire = 'cote-d-ivoire', Azerbaijan = 'azerbaijan', Afghanistan = 'afghanistan', Fiji = 'fiji', India = 'india', Palau = 'palau', Belize = 'belize', Micronesia = 'micronesia', Bangladesh = 'bangladesh', CostaRica = 'costa-rica', Colombia = 'colombia', Morocco = 'morocco', Benin = 'benin', Grenada = 'grenada', Haiti = 'haiti', Paraguay = 'paraguay', Laos = 'laos', Moldova = 'moldova', NorthMacedonia = 'north-macedonia', Canada = 'canada', Kiribati = 'kiribati', Cambodia = 'cambodia', Myanmar = 'myanmar', Bhutan = 'bhutan', SaintKittsAndNevis = 'saint-kitts-and-nevis', SierraLeone = 'sierra-leone', SouthSudan = 'south-sudan', UnitedKingdom = 'united-kingdom', Vietnam = 'vietnam', Zambia = 'zambia', Palestine = 'palestine', Bahamas = 'bahamas', Vanuatu = 'vanuatu', EquatorialGuinea = 'equatorial-guinea', CzechRepublic = 'czech-republic', Ethiopia = 'ethiopia', Guatemala = 'guatemala', Philippines = 'philippines', SanMarino = 'san-marino', Brazil = 'brazil', Chad = 'chad', Austria = 'austria', Andorra = 'andorra', Liechtenstein = 'liechtenstein', CongoDemocraticRepublic = 'congo-democratic-republic', Angola = 'angola', Maldives = 'maldives', Norway = 'norway', Venezuela = 'venezuela', Georgia = 'georgia', Estonia = 'estonia', Honduras = 'honduras', Slovakia = 'slovakia', Suriname = 'suriname', Poland = 'poland', Nigeria = 'nigeria', Burundi = 'burundi', Egypt = 'egypt', Nauru = 'nauru', Romania = 'romania', NewZealand = 'new-zealand', SaoTomeAndPrincipe = 'sao-tome-and-principe', Singapore = 'singapore', BurkinaFaso = 'burkina-faso', UnitedStates = 'united-states', SouthKorea = 'south-korea', GuineaBissau = 'guinea-bissau', Mongolia = 'mongolia', Dominica = 'dominica', Mali = 'mali', Tonga = 'tonga', Iceland = 'iceland', Kuwait = 'kuwait', Lebanon = 'lebanon', Monaco = 'monaco', Peru = 'peru', SolomonIslands = 'solomon-islands', Rwanda = 'rwanda', Latvia = 'latvia', Australia = 'australia', Tajikistan = 'tajikistan', Indonesia = 'indonesia', TrinidadAndTobago = 'trinidad-and-tobago', Uzbekistan = 'uzbekistan', Lesotho = 'lesotho', PapuaNewGuinea = 'papua-new-guinea', Algeria = 'algeria', CaboVerde = 'cabo-verde', China = 'china', Armenia = 'armenia', Iran = 'iran', Thailand = 'thailand', Samoa = 'samoa', Belarus = 'belarus', Libya = 'libya', Malawi = 'malawi', UnitedArabEmirates = 'united-arab-emirates', Pakistan = 'pakistan', TimorLeste = 'timor-leste', ElSalvador = 'el-salvador', Cuba = 'cuba', Denmark = 'denmark', Russia = 'russia', Guinea = 'guinea', Kyrgyzstan = 'kyrgyzstan', Switzerland = 'switzerland', Eritrea = 'eritrea', Guyana = 'guyana', Iraq = 'iraq', Bulgaria = 'bulgaria', CongoRepublic = 'congo-republic', Kazakhstan = 'kazakhstan', Serbia = 'serbia', AntiguaAndBarbuda = 'antigua-and-barbuda', BosniaAndHerzegovina = 'bosnia-and-herzegovina', Comoros = 'comoros', Jordan = 'jordan', MarshallIslands = 'marshall-islands', Panama = 'panama', Namibia = 'namibia', Niger = 'niger', Luxembourg = 'luxembourg', SaudiArabia = 'saudi-arabia', CentralAfricanRepublic = 'central-african-republic', Cameroon = 'cameroon', Seychelles = 'seychelles', Ghana = 'ghana', Nepal = 'nepal', Sweden = 'sweden', Hungary = 'hungary', Spain = 'spain', Turkey = 'turkey', Turkmenistan = 'turkmenistan', VaticanCity = 'vatican-city', NorthKorea = 'north-korea', Finland = 'finland', Yemen = 'yemen', Qatar = 'qatar', Belgium = 'belgium', Netherlands = 'netherlands', Zimbabwe = 'zimbabwe', SaintLucia = 'saint-lucia', Tanzania = 'tanzania', Gabon = 'gabon', DominicanRepublic = 'dominican-republic', Greece = 'greece', Madagascar = 'madagascar', Tunisia = 'tunisia', Ukraine = 'ukraine', Gambia = 'gambia', Lithuania = 'lithuania', Taiwan = 'taiwan', Ireland = 'ireland' }
export const enum GlobalTaxType { CustomsDuty = 'customs-duty', SalesTax = 'sales-tax', ExciseTax = 'excise-tax', PropertyTax = 'property-tax', Gst = 'gst', Other = 'other', Vat = 'vat' }
export const enum JournalEntryStatus { Corrected = 'corrected', Posted = 'posted', Voided = 'voided', Error = 'error', Pending = 'pending', Draft = 'draft' }
export const enum IdentityProvider { Yahoo = 'yahoo', Google = 'google', Vimeo = 'vimeo', Behance = 'behance', Slack = 'slack', Paypal = 'paypal', Foursquare = 'foursquare', Microsoft = 'microsoft', Whatsapp = 'whatsapp', Signal = 'signal', Linkedin = 'linkedin', Pinterest = 'pinterest', Telegram = 'telegram', Facebook = 'facebook', Tiktok = 'tiktok', Reddit = 'reddit', Amazon = 'amazon', Snapchat = 'snapchat', Tumblr = 'tumblr', Discord = 'discord', Other = 'other', Apple = 'apple', Flickr = 'flickr', Qq = 'qq', Wechat = 'wechat', Dribbble = 'dribbble', Line = 'line', Twitter = 'twitter', Instagram = 'instagram', Github = 'github' }
export const enum DayOfWeek { Monday = 'monday', Tuesday = 'tuesday', Wednesday = 'wednesday', Friday = 'friday', Thursday = 'thursday', Saturday = 'saturday', Sunday = 'sunday' }
export const enum AccountEngagementLevel { Cold = 'cold', Warm = 'warm', Unknown = 'unknown', Hot = 'hot' }
export const enum ReviewApprovalStatus { Approved = 'approved', InReview = 'in-review', Revised = 'revised', Rejected = 'rejected', Pending = 'pending' }
export const enum StakeholderType { Vendor = 'vendor', Customer = 'customer', Other = 'other', Competitor = 'competitor', Investor = 'investor', Partner = 'partner' }
export const enum AccountStatus { Pending = 'pending', Suspended = 'suspended', Active = 'active', Inactive = 'inactive', Closed = 'closed' }
export const enum CampaignStatus { Paused = 'paused', Cancelled = 'cancelled', Archived = 'archived', Draft = 'draft', Scheduled = 'scheduled', Planned = 'planned', Active = 'active', Completed = 'completed' }
export const enum CustomerType { Retail = 'retail', B2b = 'b2b', Wholesale = 'wholesale', Corporate = 'corporate', B2c = 'b2c', Online = 'online' }
export const enum AccountingAccountType { OtherCurrentLiabilityPrepaidExpensesPayable = 'other-current-liability::prepaid-expenses-payable', OtherExpenseAmortization = 'other-expense::amortization', ExpensePayrollExpenses = 'expense::payroll-expenses', ExpenseBorrowingCost = 'expense::borrowing-cost', ExpenseBankCharges = 'expense::bank-charges', OtherCurrentLiabilityCurrentTaxLiability = 'other-current-liability::current-tax-liability', RevenueSalesRetail = 'revenue::sales-retail', AssetLand = 'asset::land', EquityAccumulatedAdjustment = 'equity::accumulated-adjustment', OtherExpenseOtherVehicleExpenses = 'other-expense::other-vehicle-expenses', OtherCurrentLiabilityDirectDepositPayable = 'other-current-liability::direct-deposit-payable', AccountsReceivable = 'accounts-receivable', OtherCurrentLiabilityCurrentPortionEmployeeBenefitsObligations = 'other-current-liability::current-portion-employee-benefits-obligations', RevenueIncome = 'revenue::income', AssetShortTermLoansAndAdvancesToRelatedParties = 'asset::short-term-loans-and-advances-to-related-parties', AssetAvailableForSaleFinancialAssets = 'asset::available-for-sale-financial-assets', LiabilityOutstandingDuesOtherThanMicroSmallEnterprise = 'liability::outstanding-dues-other-than-micro-small-enterprise', ExpenseOtherCurrentOperatingCharges = 'expense::other-current-operating-charges', AssetInvestments = 'asset::investments', OtherExpenseVehicleLoan = 'other-expense::vehicle-loan', LiabilityGovernmentAndOtherPublicAuthorities = 'liability::government-and-other-public-authorities', AssetAssetsInCourseOfConstruction = 'asset::assets-in-course-of-construction', AssetAssetsHeldForSale = 'asset::assets-held-for-sale', LiabilityAccruedLongTermLiabilities = 'liability::accrued-long-term-liabilities', AssetOtherLongTermAssets = 'asset::other-long-term-assets', ExpenseAuto = 'expense::auto', OtherExpenseMatCredit = 'other-expense::mat-credit', AssetOtherEarMarkedBankAccounts = 'asset::other-ear-marked-bank-accounts', AssetBalWithGovtAuthorities = 'asset::bal-with-govt-authorities', OtherCurrentLiabilityInsurancePayable = 'other-current-liability::insurance-payable', RevenueUnappliedCashPaymentIncome = 'revenue::unapplied-cash-payment-income', AssetBuildings = 'asset::buildings', AssetIntangibleAssetsUnderDevelopment = 'asset::intangible-assets-under-development', EquityOpeningBalanceEquity = 'equity::opening-balance-equity', AssetAllowanceForBadDebts = 'asset::allowance-for-bad-debts', EquityPartnerDistributions = 'equity::partner-distributions', AssetLeaseholdImprovements = 'asset::leasehold-improvements', ExpenseFinanceCosts = 'expense::finance-costs', EquityPartnersEquity = 'equity::partners-equity', ExpenseDistributionCosts = 'expense::distribution-costs', ExpenseUnappliedCashBillPaymentExpense = 'expense::unapplied-cash-bill-payment-expense', ExpenseIncomeTaxExpense = 'expense::income-tax-expense', ExpenseTravelExpensesGeneralAndAdminExpenses = 'expense::travel-expenses-general-and-admin-expenses', LiabilityAccountsPayable = 'liability::accounts-payable', LiabilityDeferredTaxLiabilities = 'liability::deferred-tax-liabilities', AssetFixedAssetPhotoVideo = 'asset::fixed-asset-photo-video', ExpenseOtherMiscellaneousServiceCost = 'expense::other-miscellaneous-service-cost', OtherCurrentLiabilityStaffAndRelatedLiabilityAccounts = 'other-current-liability::staff-and-related-liability-accounts', RevenueDiscountsRefundsGiven = 'revenue::discounts-refunds-given', OtherIncomeLossOnDisposalOfAssets = 'other-income::loss-on-disposal-of-assets', AssetOtherIntangibleAssets = 'asset::other-intangible-assets', AssetRetainage = 'asset::retainage', AssetOtherCurrentAsset = 'asset::other-current-asset', AssetLoansToStockholders = 'asset::loans-to-stockholders', OtherIncome = 'other-income', EquityMoneyReceivedAgainstShareWarrants = 'equity::money-received-against-share-warrants', CostOfGoodsSold = 'cost-of-goods-sold', AssetInvestmentUsGovernmentObligations = 'asset::investment-us-government-obligations', EquityPreferredStock = 'equity::preferred-stock', ExpenseOtherExternalServices = 'expense::other-external-services', AssetPrepaidExpenses = 'asset::prepaid-expenses', ExpensePurchasesRebates = 'expense::purchases-rebates', OtherExpenseExchangeGainOrLoss = 'other-expense::exchange-gain-or-loss', AssetFurnitureAndFixtures = 'asset::furniture-and-fixtures', AssetOtherFixedAssets = 'asset::other-fixed-assets', EquityHealthcare = 'equity::healthcare', ExpenseOfficeGeneralAdministrativeExpenses = 'expense::office-general-administrative-expenses', AssetLoansToOthers = 'asset::loans-to-others', LiabilityProvisionForLiabilities = 'liability::provision-for-liabilities', OtherCurrentLiabilityAccruedLiabilities = 'other-current-liability::accrued-liabilities', RevenueServiceFeeIncome = 'revenue::service-fee-income', OtherIncomeDividendIncome = 'other-income::dividend-income', LiabilityOtherLongTermLiabilities = 'liability::other-long-term-liabilities', EquityCalledUpShareCapital = 'equity::called-up-share-capital', OtherCurrentLiabilityDividendsPayable = 'other-current-liability::dividends-payable', ExpenseTaxesPaid = 'expense::taxes-paid', AssetDevelopmentCosts = 'asset::development-costs', EquityOtherFreeReserves = 'equity::other-free-reserves', EquityFunds = 'equity::funds', ExpenseOtherSellingExpenses = 'expense::other-selling-expenses', OtherIncomeGainLossOnSaleOfInvestments = 'other-income::gain-loss-on-sale-of-investments', OtherCurrentLiabilityProvisionForWarrantyObligations = 'other-current-liability::provision-for-warranty-obligations', AssetAccumulatedDepreciation = 'asset::accumulated-depreciation', LiabilityStaffAndRelatedLongTermLiabilityAccounts = 'liability::staff-and-related-long-term-liability-accounts', RevenueRevenueGeneral = 'revenue::revenue-general', OtherCurrentLiabilitySocialSecurityAgencies = 'other-current-liability::social-security-agencies', ExpenseInterestPaid = 'expense::interest-paid', EquityCapitalReserves = 'equity::capital-reserves', AssetLicenses = 'asset::licenses', EquityPartnerContributions = 'equity::partner-contributions', AssetTrustAccounts = 'asset::trust-accounts', OtherExpenseVehicle = 'other-expense::vehicle', OtherExpenseTaxRoundoffGainOrLoss = 'other-expense::tax-roundoff-gain-or-loss', OtherExpenseDeferredTaxExpense = 'other-expense::deferred-tax-expense', OtherCurrentLiabilityTradeAndOtherPayables = 'other-current-liability::trade-and-other-payables', RevenueSavingsByTaxScheme = 'revenue::savings-by-tax-scheme', OtherCurrentLiabilityStateLocalIncomeTaxPayable = 'other-current-liability::state-local-income-tax-payable', LiabilityBankLoans = 'liability::bank-loans', AssetLeaseBuyout = 'asset::lease-buyout', OtherCurrentLiabilityPayrollTaxPayable = 'other-current-liability::payroll-tax-payable', LiabilityCreditCard = 'liability::credit-card', OtherExpenseVehicleLoanInterest = 'other-expense::vehicle-loan-interest', OtherExpense = 'other-expense', OtherExpenseVehicleRegistration = 'other-expense::vehicle-registration', OtherCurrentLiabilityCurrentPortionOfObligationsUnderFinanceLeases = 'other-current-liability::current-portion-of-obligations-under-finance-leases', LiabilityShareholderNotesPayable = 'liability::shareholder-notes-payable', RevenueSalesWholesale = 'revenue::sales-wholesale', OtherExpenseExceptionalItems = 'other-expense::exceptional-items', ExpenseShippingAndDeliveryExpense = 'expense::shipping-and-delivery-expense', OtherExpenseGasAndFuel = 'other-expense::gas-and-fuel', LiabilityProvisionsNonCurrentLiabilities = 'liability::provisions-non-current-liabilities', OtherIncomeOtherMiscellaneousIncome = 'other-income::other-miscellaneous-income', ExpenseAmortizationExpense = 'expense::amortization-expense', AssetIntangibleAssets = 'asset::intangible-assets', AssetCashAndCashEquivalents = 'asset::cash-and-cash-equivalents', ExpenseRentOrLeaseOfBuildings = 'expense::rent-or-lease-of-buildings', OtherExpenseIncomeTaxOtherExpense = 'other-expense::income-tax-other-expense', ExpenseManagementCompensation = 'expense::management-compensation', OtherExpenseOtherMiscellaneousExpense = 'other-expense::other-miscellaneous-expense', AssetDeferredTax = 'asset::deferred-tax', AssetUndepositedFunds = 'asset::undeposited-funds', OtherExpenseDepletion = 'other-expense::depletion', LiabilityGroupAndAssociates = 'liability::group-and-associates', ExpenseExtraordinaryCharges = 'expense::extraordinary-charges', OtherCurrentLiabilityCurrentLiabilities = 'other-current-liability::current-liabilities', OtherCurrentLiability = 'other-current-liability', ExpenseLossOnDiscontinuedOperationsNetOfTax = 'expense::loss-on-discontinued-operations-net-of-tax', AssetCumulativeDepreciationOnIntangibleAssets = 'asset::cumulative-depreciation-on-intangible-assets', ExpenseInsurance = 'expense::insurance', RevenueOperatingGrants = 'revenue::operating-grants', AssetInvestmentMortgageRealEstateLoans = 'asset::investment-mortgage-real-estate-loans', EquityInvestmentGrants = 'equity::investment-grants', AssetInventory = 'asset::inventory', ExpenseDuesSubscriptions = 'expense::dues-subscriptions', AssetOtherCurrentAssets = 'asset::other-current-assets', AssetAssetsAvailableForSale = 'asset::assets-available-for-sale', OtherExpenseWashAndRoadServices = 'other-expense::wash-and-road-services', ExpenseUtilities = 'expense::utilities', ExpenseProjectStudiesSurveysAssessments = 'expense::project-studies-surveys-assessments', AssetGlobalTaxDeferred = 'asset::global-tax-deferred', LiabilityLongTermLiability = 'liability::long-term-liability', RevenueSalesOfProductIncome = 'revenue::sales-of-product-income', AssetSecurityDeposits = 'asset::security-deposits', RevenueCashReceiptIncome = 'revenue::cash-receipt-income', AssetGlobalTaxRefund = 'asset::global-tax-refund', LiabilityOutstandingDuesMicroSmallEnterprise = 'liability::outstanding-dues-micro-small-enterprise', OtherIncomeTaxExemptInterest = 'other-income::tax-exempt-interest', ExpenseRepairMaintenance = 'expense::repair-maintenance', ExpenseEntertainmentMeals = 'expense::entertainment-meals', OtherExpenseRepairsAndMaintenance = 'other-expense::repairs-and-maintenance', Asset = 'asset', ExpenseBadDebts = 'expense::bad-debts', AssetVehicles = 'asset::vehicles', LiabilityLongTermDebit = 'liability::long-term-debit', EquityRetainedEarnings = 'equity::retained-earnings', OtherCurrentLiabilityLoanPayable = 'other-current-liability::loan-payable', AssetOtherLongTermInvestments = 'asset::other-long-term-investments', AssetLandAsset = 'asset::land-asset', EquityPersonalIncome = 'equity::personal-income', AssetLoansToOfficers = 'asset::loans-to-officers', LiabilityLongTermEmployeeBenefitObligations = 'liability::long-term-employee-benefit-obligations', OtherIncomeInterestEarned = 'other-income::interest-earned', ExpenseAdvertisingPromotional = 'expense::advertising-promotional', AssetGoodwill = 'asset::goodwill', EquityAccumulatedOtherComprehensiveIncome = 'equity::accumulated-other-comprehensive-income', ExpenseTravelExpensesSellingExpense = 'expense::travel-expenses-selling-expense', AssetFixedAssetFurniture = 'asset::fixed-asset-furniture', AssetFixedAsset = 'asset::fixed-asset', OtherCurrentLiabilityRentsInTrustLiability = 'other-current-liability::rents-in-trust-liability', OtherCurrentLiabilityFederalIncomeTaxPayable = 'other-current-liability::federal-income-tax-payable', OtherCurrentLiabilitySalesTaxPayable = 'other-current-liability::sales-tax-payable', OtherIncomeGainLossOnSaleOfFixedAssets = 'other-income::gain-loss-on-sale-of-fixed-assets', EquityTreasuryStock = 'equity::treasury-stock', OtherCurrentLiabilityOtherCurrentLiabilities = 'other-current-liability::other-current-liabilities', AssetProvisionsFixedAssets = 'asset::provisions-fixed-assets', AssetSavings = 'asset::savings', AssetFixedAssetPhone = 'asset::fixed-asset-phone', AssetMoneyMarket = 'asset::money-market', CostOfGoodsSoldOtherCostsOfServiceCos = 'cost-of-goods-sold::other-costs-of-service-cos', OtherIncomeUnrealisedLossOnSecuritiesNetOfTax = 'other-income::unrealised-loss-on-securities-net-of-tax', AssetProvisionsNonCurrentAssets = 'asset::provisions-non-current-assets', RevenueOwnWorkCapitalized = 'revenue::own-work-capitalized', AssetAccumulatedAmortization = 'asset::accumulated-amortization', AssetShortTermInvestmentsInRelatedParties = 'asset::short-term-investments-in-related-parties', CostOfGoodsSoldSuppliesMaterialsCogs = 'cost-of-goods-sold::supplies-materials-cogs', AssetFixedAssetCopiers = 'asset::fixed-asset-copiers', AssetInvestmentTaxExemptSecurities = 'asset::investment-tax-exempt-securities', ExpenseAppropriationsToDepreciation = 'expense::appropriations-to-depreciation', ExpenseOtherBusinessExpenses = 'expense::other-business-expenses', AssetParticipatingInterests = 'asset::participating-interests', AssetRentsHeldInTrust = 'asset::rents-held-in-trust', EquityDividendDisbursed = 'equity::dividend-disbursed', AssetOtherLongTermLoansAndAdvances = 'asset::other-long-term-loans-and-advances', AssetProvisionsCurrentAssets = 'asset::provisions-current-assets', ExpensePromotionalMeals = 'expense::promotional-meals', LiabilityNotesPayable = 'liability::notes-payable', AssetExpenditureAuthorisationsAndLettersOfCredit = 'asset::expenditure-authorisations-and-letters-of-credit', ExpenseTravel = 'expense::travel', LiabilityAccruedVacationPayable = 'liability::accrued-vacation-payable', AssetFixedAssetComputers = 'asset::fixed-asset-computers', OtherCurrentLiabilityDutiesAndTaxes = 'other-current-liability::duties-and-taxes', AssetTradeAndOtherReceivables = 'asset::trade-and-other-receivables', AssetNonCurrentAssets = 'asset::non-current-assets', OtherExpenseVehicleInsurance = 'other-expense::vehicle-insurance', CostOfGoodsSoldShippingFreightDeliveryCos = 'cost-of-goods-sold::shipping-freight-delivery-cos', ExpenseOfficeExpenses = 'expense::office-expenses', CostOfGoodsSoldCostOfLaborCos = 'cost-of-goods-sold::cost-of-labor-cos', AssetLongTermInvestments = 'asset::long-term-investments', OtherExpenseParkingAndTolls = 'other-expense::parking-and-tolls', EquityPersonalExpense = 'equity::personal-expense', OtherCurrentLiabilityPayrollClearing = 'other-current-liability::payroll-clearing', OtherIncomeOtherInvestmentIncome = 'other-income::other-investment-income', AssetCapitalWip = 'asset::capital-wip', LiabilityLiabilitiesRelatedToAssetsHeldForSale = 'liability::liabilities-related-to-assets-held-for-sale', OtherExpenseExtraordinaryItems = 'other-expense::extraordinary-items', OtherExpenseUtilities = 'other-expense::utilities', OtherCurrentLiabilityGlobalTaxSuspense = 'other-current-liability::global-tax-suspense', ExpenseStaffCosts = 'expense::staff-costs', ExpenseCostOfLabor = 'expense::cost-of-labor', AssetBank = 'asset::bank', LiabilityOtherLongTermProvisions = 'liability::other-long-term-provisions', ExpenseEquipmentRental = 'expense::equipment-rental', AssetDepletableAssets = 'asset::depletable-assets', AssetLongTermLoansAndAdvancesToRelatedParties = 'asset::long-term-loans-and-advances-to-related-parties', AssetFixedAssetSoftware = 'asset::fixed-asset-software', LiabilityLongTermBorrowings = 'liability::long-term-borrowings', AssetMachineryAndEquipment = 'asset::machinery-and-equipment', AssetInvestmentOther = 'asset::investment-other', RevenueOtherPrimaryIncome = 'revenue::other-primary-income', ExpenseGlobalTaxExpense = 'expense::global-tax-expense', CostOfGoodsSoldCostOfSales = 'cost-of-goods-sold::cost-of-sales', OtherExpenseOtherHomeOfficeExpenses = 'other-expense::other-home-office-expenses', AssetAccumulatedAmortizationOfOtherAssets = 'asset::accumulated-amortization-of-other-assets', AssetChecking = 'asset::checking', EquityOwnersEquity = 'equity::owners-equity', EquityShareCapital = 'equity::share-capital', AssetCashOnHand = 'asset::cash-on-hand', AssetEmployeeCashAdvances = 'asset::employee-cash-advances', OtherCurrentLiabilityTrustAccountsLiabilities = 'other-current-liability::trust-accounts-liabilities', Expense = 'expense', LiabilityAccrualsAndDeferredIncome = 'liability::accruals-and-deferred-income', AssetInternalTransfers = 'asset::internal-transfers', OtherIncomeOtherOperatingIncome = 'other-income::other-operating-income', EquityPaidInCapitalOrSurplus = 'equity::paid-in-capital-or-surplus', ExpenseEntertainment = 'expense::entertainment', ExpenseTravelMeals = 'expense::travel-meals', Equity = 'equity', OtherExpenseHomeOwnerRentalInsurance = 'other-expense::home-owner-rental-insurance', ExpenseCommissionsAndFees = 'expense::commissions-and-fees', AssetCalledUpShareCapitalNotPaid = 'asset::called-up-share-capital-not-paid', ExpenseOtherRentalCosts = 'expense::other-rental-costs', OtherExpenseHomeOffice = 'other-expense::home-office', OtherExpenseRentAndLease = 'other-expense::rent-and-lease', CostOfGoodsSoldFreightAndDeliveryCost = 'cost-of-goods-sold::freight-and-delivery-cost', LiabilityDebtsRelatedToParticipatingInterests = 'liability::debts-related-to-participating-interests', RevenueOtherCurrentOperatingIncome = 'revenue::other-current-operating-income', OtherExpenseVehicleRepairs = 'other-expense::vehicle-repairs', AssetOrganizationalCosts = 'asset::organizational-costs', OtherExpenseVehicleLease = 'other-expense::vehicle-lease', OtherCurrentLiabilityLineOfCredit = 'other-current-liability::line-of-credit', OtherCurrentLiabilitySundryDebtorsAndCreditors = 'other-current-liability::sundry-debtors-and-creditors', OtherExpenseDepreciation = 'other-expense::depreciation', AssetOtherConsumables = 'asset::other-consumables', OtherExpensePenaltiesSettlements = 'other-expense::penalties-settlements', ExpenseShippingFreightDelivery = 'expense::shipping-freight-delivery', EquityShareApplicationMoneyPendingAllotment = 'equity::share-application-money-pending-allotment', ExpenseSundry = 'expense::sundry', LiabilityObligationsUnderFinanceLeases = 'liability::obligations-under-finance-leases', AssetPrepaymentsAndAccruedIncome = 'asset::prepayments-and-accrued-income', OtherExpensePriorPeriodItems = 'other-expense::prior-period-items', ExpenseLegalProfessionalFees = 'expense::legal-professional-fees', OtherCurrentLiabilityShortTermBorrowings = 'other-current-liability::short-term-borrowings', EquityEstimatedTaxes = 'equity::estimated-taxes', ExpenseSuppliesMaterials = 'expense::supplies-materials', OtherCurrentLiabilityProvisionsCurrentLiabilities = 'other-current-liability::provisions-current-liabilities', ExpenseExternalServices = 'expense::external-services', AssetFixedAssetOtherToolsEquipment = 'asset::fixed-asset-other-tools-equipment', OtherCurrentLiabilityGlobalTaxPayable = 'other-current-liability::global-tax-payable', ExpenseCharitableContributions = 'expense::charitable-contributions', EquityCommonStock = 'equity::common-stock', CostOfGoodsSoldEquipmentRentalCos = 'cost-of-goods-sold::equipment-rental-cos', EquityEquityInEarningsOfSubsidiuaries = 'equity::equity-in-earnings-of-subsidiuaries', AssetOtherAsset = 'asset::other-asset', RevenueNonProfitIncome = 'revenue::non-profit-income', OtherCurrentLiabilityInterestPayables = 'other-current-liability::interest-payables', OtherExpenseMortgageInterest = 'other-expense::mortgage-interest', AssetAccumulatedDepletion = 'asset::accumulated-depletion' }
export const enum MessageReadStatus { Read = 'read', Failed = 'failed', Sent = 'sent', Unsent = 'unsent', Delivered = 'delivered' }
export const enum MessageContentType { Location = 'location', Link = 'link', Video = 'video', Gif = 'gif', Image = 'image', Audio = 'audio', Voice = 'voice', Contact = 'contact', Document = 'document', File = 'file', Text = 'text', Sticker = 'sticker', Html = 'html' }
export const enum MessageDeliveryStatus { Delivered = 'delivered', Sent = 'sent', Read = 'read', Failed = 'failed', Pending = 'pending', Error = 'error', Undeliverable = 'undeliverable' }
export const enum ReactionType { Angry = 'angry', Laugh = 'laugh', Bookmark = 'bookmark', Interested = 'interested', Sad = 'sad', Like = 'like', Dislike = 'dislike', Love = 'love', Wow = 'wow' }
export const enum SupportTicketPriority { Urgent = 'urgent', Medium = 'medium', Low = 'low', High = 'high', Immediate = 'immediate' }
export const enum IssueLifecycleStatus { OnHold = 'on-hold', Cancelled = 'cancelled', InProgress = 'in-progress', Resolved = 'resolved', Pending = 'pending', Open = 'open', Closed = 'closed', Waiting = 'waiting' }
export const enum SupportQueryType { FeatureRequest = 'feature-request', Task = 'task', Feedback = 'feedback', Problem = 'problem', Incident = 'incident', Question = 'question', Bug = 'bug' }
export const enum OrderStatus { Returned = 'returned', AwaitingShipment = 'awaiting-shipment', Refunded = 'refunded', Pending = 'pending', Completed = 'completed', PartiallyFulfilled = 'partially-fulfilled', OnHold = 'on-hold', AwaitingPayment = 'awaiting-payment', AwaitingPickup = 'awaiting-pickup', Disputed = 'disputed', Confirmed = 'confirmed', Cancelled = 'cancelled', Failed = 'failed', Draft = 'draft', Abandoned = 'abandoned', Delivered = 'delivered', Processing = 'processing', Shipped = 'shipped' }
export const enum DiscountType { ConditionalDiscount = 'conditional-discount', VariablePercentage = 'variable-percentage', BuyOneGetOne = 'buy-one-get-one', Percentage = 'percentage', VariableAmount = 'variable-amount', UnknownDiscount = 'unknown-discount', FixedAmount = 'fixed-amount', TieredDiscount = 'tiered-discount' }
export const enum ImageMimeType { ImageSvgXml = 'image/svg+xml', ImageJpeg = 'image/jpeg', ImageBmp = 'image/bmp', ImageTiff = 'image/tiff', ImagePng = 'image/png', ImageGif = 'image/gif', ImageHeic = 'image/heic', ImageWebp = 'image/webp' }
export const enum FulfillmentStatus { Failure = 'failure', Delivered = 'delivered', Cancelled = 'cancelled', Returned = 'returned', Pending = 'pending', InTransit = 'in-transit' }
export const enum OrderingCriteria { PriceDescending = 'price-descending', Manual = 'manual', Popularity = 'popularity', Alphabetical = 'alphabetical', PriceAscending = 'price-ascending', Rating = 'rating', CreationDate = 'creation-date', Relevance = 'relevance' }
export const enum ChatType { Group = 'group', Private = 'private', Public = 'public' }
export const enum ProductAvailabilityStatus { BackOrder = 'back-order', OutOfStock = 'out-of-stock', Discontinued = 'discontinued', InStock = 'in-stock', PreOrder = 'pre-order' }
export const enum ExpenseApprovalStatus { New = 'new', Processed = 'processed', Pending = 'pending', Reimbursed = 'reimbursed', Cancelled = 'cancelled', Denied = 'denied', Reviewing = 'reviewing', Approved = 'approved' }
export const enum FinancialChargeType { Other = 'other', ProcessingFee = 'processing-fee', InterestCharge = 'interest-charge', ServiceCharge = 'service-charge', Commission = 'commission', LateFee = 'late-fee', TransactionFee = 'transaction-fee' }
export const enum ItemAvailabilityStatus { Active = 'active', Inactive = 'inactive', OutOfStock = 'out-of-stock', Discontinued = 'discontinued' }
export const enum BillingStatus { Submitted = 'submitted', Overdue = 'overdue', Draft = 'draft', Unpaid = 'unpaid', Paid = 'paid', Voided = 'voided', Deleted = 'deleted', Authorised = 'authorised', Pending = 'pending', PartiallyPaid = 'partially-paid' }
export const enum FinancialAccountStatus { Frozen = 'frozen', Delinquent = 'delinquent', UnderReview = 'under-review', Closed = 'closed', Suspended = 'suspended', Inactive = 'inactive', Active = 'active' }
export const enum TransactionStatus { InProgress = 'in-progress', Succeeded = 'succeeded', Cancelled = 'cancelled', Initiated = 'initiated', Error = 'error', Pending = 'pending', Failed = 'failed' }
export const enum InvoiceAdjustmentType { Other = 'other', Discount = 'discount', Tax = 'tax', Tip = 'tip', Shipping = 'shipping' }
export const enum DataType { Date = 'date', String = 'string', Object = 'object', Null = 'null', Undefined = 'undefined', Binary = 'binary', Array = 'array', Boolean = 'boolean', Custom = 'custom', Json = 'json', Timestamp = 'timestamp', Number = 'number' }
export const enum EmploymentType { PartTime = 'part-time', FullTime = 'full-time', Temporary = 'temporary', Seasonal = 'seasonal', Permanent = 'permanent', Volunteer = 'volunteer', Internship = 'internship', Contract = 'contract', Freelance = 'freelance' }
export const enum TimeCycle { Custom = 'custom', Minutely = 'minutely', Daily = 'daily', SemiAnnually = 'semi-annually', Monthly = 'monthly', Quarterly = 'quarterly', Annually = 'annually', Triennially = 'triennially', Weekly = 'weekly', Secondly = 'secondly', Biennially = 'biennially', Biweekly = 'biweekly', SemiMonthly = 'semi-monthly', Hourly = 'hourly', AdHoc = 'ad-hoc' }
export const enum FinancialTrackingCategories { None = 'none', Vendor = 'vendor', Location = 'location', Product = 'product', Other = 'other', Division = 'division', Department = 'department', Project = 'project', CostCenter = 'cost-center', Customer = 'customer', Employee = 'employee', Class = 'class', Service = 'service' }
export const enum CreditNoteStatus { Applied = 'applied', Pending = 'pending', Completed = 'completed', Revised = 'revised', Cancelled = 'cancelled', Draft = 'draft', Void = 'void', Disputed = 'disputed', Issued = 'issued' }
export const enum PaymentTerm { DueOnReceipt = 'due-on-receipt', DeferredPayment = 'deferred-payment', Prepayment = 'prepayment', Custom = 'custom', CashBeforeShipment = 'cash-before-shipment', DueEndOfMonth = 'due-end-of-month', Installment = 'installment', Net90 = 'net-90', Net = 'net', Net60 = 'net-60', CashWithOrder = 'cash-with-order', Net30 = 'net-30', Prepaid = 'prepaid', UponCompletion = 'upon-completion', CashOnDelivery = 'cash-on-delivery', CashInAdvance = 'cash-in-advance' }
export const enum EmploymentAndCandidateStatus { New = 'new', Hired = 'hired', NotSelected = 'not-selected', Interviewing = 'interviewing', Other = 'other', OfferExtended = 'offer-extended', InReview = 'in-review', OnLeave = 'on-leave', Active = 'active', Terminated = 'terminated', Inactive = 'inactive' }
export const enum OrganizationalRole { Other = 'other', Admin = 'admin', Manager = 'manager', Director = 'director', Employee = 'employee', Supervisor = 'supervisor', Contractor = 'contractor' }
export const enum CampaignType { Other = 'other', Display = 'display', SocialMedia = 'social-media', Email = 'email', SearchEngine = 'search-engine' }
export const enum ContactAddressType { Other = 'other', Personal = 'personal', Shipping = 'shipping', Temporary = 'temporary', Home = 'home', Business = 'business', Billing = 'billing', Work = 'work' }
export const enum CustomerStatus { Inactive = 'inactive', Pending = 'pending', Active = 'active', Archived = 'archived', Suspended = 'suspended' }
export const enum SocialPlatform { Tiktok = 'tiktok', Facebook = 'facebook', Twitter = 'twitter', Reddit = 'reddit', Skype = 'skype', X = 'x', Tumblr = 'tumblr', Linkedin = 'linkedin', Pinterest = 'pinterest', OtherSocialPlatform = 'other-social-platform', Youtube = 'youtube', Snapchat = 'snapchat', Instagram = 'instagram' }
export const enum LeadLifecycleStatus { New = 'new', Converted = 'converted', Open = 'open', Unqualified = 'unqualified', Connected = 'connected', AttemptedToContact = 'attempted-to-contact', BadTiming = 'bad-timing', Lost = 'lost', InProcess = 'in-process', Revisited = 'revisited' }
export const enum ConversationStatus { Archived = 'archived', Deleted = 'deleted', Active = 'active', Closed = 'closed', Snoozed = 'snoozed' }
export const enum CommunicationRole { Group = 'group', Assistant = 'assistant', Bot = 'bot', System = 'system', Admin = 'admin', Service = 'service', Owner = 'owner', Channel = 'channel', User = 'user', Member = 'member', Moderator = 'moderator', Guest = 'guest' }
export const enum ParticipantEngagementStatus { Admin = 'admin', Inactive = 'inactive', Moderator = 'moderator', Banned = 'banned', Active = 'active', Guest = 'guest', Left = 'left' }
export const enum ItemEntityStatus { Inactive = 'inactive', Archived = 'archived', Completed = 'completed', Pending = 'pending', Active = 'active', Suspended = 'suspended', Deleted = 'deleted' }
export const enum Currency { PEN = 'pen', AED = 'aed', MYR = 'myr', BOB = 'bob', MVR = 'mvr', BGN = 'bgn', CUC = 'cuc', IQD = 'iqd', MOP = 'mop', GMD = 'gmd', PGK = 'pgk', ISK = 'isk', TWD = 'twd', BZD = 'bzd', KRW = 'krw', TMT = 'tmt', PYG = 'pyg', VND = 'vnd', GGP = 'ggp', XCD = 'xcd', ILS = 'ils', CZK = 'czk', GIP = 'gip', YER = 'yer', TND = 'tnd', SCR = 'scr', MZN = 'mzn', ALL = 'all', RWF = 'rwf', BWP = 'bwp', HTG = 'htg', KGS = 'kgs', GHS = 'ghs', LBP = 'lbp', PAB = 'pab', HKD = 'hkd', AFN = 'afn', COP = 'cop', JPY = 'jpy', LKR = 'lkr', AWG = 'awg', SGD = 'sgd', TRY = 'try', XAF = 'xaf', DOP = 'dop', KWD = 'kwd', BIF = 'bif', CAD = 'cad', NOK = 'nok', HUF = 'huf', RON = 'ron', TOP = 'top', JMD = 'jmd', BAM = 'bam', FJD = 'fjd', TVD = 'tvd', LYD = 'lyd', GNF = 'gnf', KZT = 'kzt', LAK = 'lak', NIO = 'nio', KMF = 'kmf', KYD = 'kyd', NPR = 'npr', SRD = 'srd', UYU = 'uyu', BDT = 'bdt', INR = 'inr', VES = 'ves', RUB = 'rub', HRK = 'hrk', XOF = 'xof', ANG = 'ang', BTN = 'btn', CNY = 'cny', GEL = 'gel', GTQ = 'gtq', MDL = 'mdl', IMP = 'imp', SHP = 'shp', FKP = 'fkp', KPW = 'kpw', SSP = 'ssp', SZL = 'szl', KID = 'kid', CLP = 'clp', DKK = 'dkk', MWK = 'mwk', NGN = 'ngn', STN = 'stn', AUD = 'aud', HNL = 'hnl', MRU = 'mru', ZWL = 'zwl', USD = 'usd', LSL = 'lsl', MUR = 'mur', MXN = 'mxn', CDF = 'cdf', KHR = 'khr', NAD = 'nad', BYN = 'byn', LRD = 'lrd', UZS = 'uzs', IRR = 'irr', THB = 'thb', XDR = 'xdr', AZN = 'azn', VUV = 'vuv', ERN = 'ern', AOA = 'aoa', BND = 'bnd', DZD = 'dzd', SOS = 'sos', DJF = 'djf', EGP = 'egp', QAR = 'qar', SYP = 'syp', SEK = 'sek', JEP = 'jep', GBP = 'gbp', SAR = 'sar', IDR = 'idr', BRL = 'brl', SLL = 'sll', TTD = 'ttd', UGX = 'ugx', WST = 'wst', XPF = 'xpf', ETB = 'etb', EUR = 'eur', FOK = 'fok', OMR = 'omr', CVE = 'cve', MGA = 'mga', MKD = 'mkd', TZS = 'tzs', ZAR = 'zar', MMK = 'mmk', BMD = 'bmd', GYD = 'gyd', MAD = 'mad', NZD = 'nzd', CRC = 'crc', PHP = 'php', BBD = 'bbd', BSD = 'bsd', KES = 'kes', RSD = 'rsd', SBD = 'sbd', JOD = 'jod', SDG = 'sdg', ZMW = 'zmw', AMD = 'amd', CHF = 'chf', CUP = 'cup', PLN = 'pln', TJS = 'tjs', ARS = 'ars', BHD = 'bhd', PKR = 'pkr', UAH = 'uah', MNT = 'mnt' }
export const enum CustomerEligibilityStatus { NewCustomers = 'new-customers', AllCustomers = 'all-customers', SpecificConditions = 'specific-conditions', Other = 'other', VipCustomers = 'vip-customers', ReturningCustomers = 'returning-customers' }
export const enum LifecycleStatus { Issued = 'issued', Cancelled = 'cancelled', Active = 'active', Redeemed = 'redeemed', Expired = 'expired', Suspended = 'suspended' }
export const enum PaymentMethod { Cryptocurrency = 'cryptocurrency', CashOnDelivery = 'cash-on-delivery', CreditCard = 'credit-card', BankTransfer = 'bank-transfer', DebitCard = 'debit-card', MobileWallet = 'mobile-wallet', Other = 'other', Cash = 'cash', MobilePayment = 'mobile-payment', Paypal = 'paypal', Check = 'check' }
export const enum FinancialTransactionStatus { Refunded = 'refunded', Cancelled = 'cancelled', Pending = 'pending', Failed = 'failed', Cleared = 'cleared', Authorized = 'authorized', Disputed = 'disputed', SettlementInProgress = 'settlement-in-progress' }
export const enum AuditOpinionType { Unqualified = 'unqualified', Disclaimer = 'disclaimer', Adverse = 'adverse', Qualified = 'qualified' }
export const enum InventoryStorageType { Consignment = 'consignment', DropShipper = 'drop-shipper', DistributionCenter = 'distribution-center', OnlineMarketplace = 'online-marketplace', Other = 'other', Warehouse = 'warehouse', RetailStore = 'retail-store' }
export const enum ItemCondition { LikeNew = 'like-new', Damaged = 'damaged', New = 'new', OpenBox = 'open-box', Used = 'used', Refurbished = 'refurbished' }
export const enum TransactionType { Fee = 'fee', Payment = 'payment', Withdrawal = 'withdrawal', Transfer = 'transfer', Refund = 'refund', Adjustment = 'adjustment', Charge = 'charge', Deposit = 'deposit' }
export const enum VisibilityScope { Internal = 'internal', Private = 'private', Web = 'web', Global = 'global', App = 'app' }
export const enum PaymentStatus { Submitted = 'submitted', Draft = 'draft', Cancelled = 'cancelled', Voided = 'voided', Overdue = 'overdue', Pending = 'pending', Failed = 'failed', Error = 'error', Adjusted = 'adjusted', Partial = 'partial', Refunded = 'refunded', Disputed = 'disputed', Deleted = 'deleted', Authorized = 'authorized', Processing = 'processing', Succeeded = 'succeeded', PartiallyRefunded = 'partially-refunded', Paid = 'paid' }
export const enum EntityLifecycleStatus { Scheduled = 'scheduled', Archived = 'archived', Inactive = 'inactive', Active = 'active', Draft = 'draft', Preorder = 'preorder', Deleted = 'deleted' }
export const enum TransactionChannel { Other = 'other', BankBranch = 'bank-branch', Mail = 'mail', Mobile = 'mobile', Online = 'online', InPerson = 'in-person', Telephone = 'telephone', Atm = 'atm' }
export const enum FinancialDisputeStatus { UnderReview = 'under-review', Won = 'won', NeedsResponse = 'needs-response', Lost = 'lost', Closed = 'closed', Escalated = 'escalated', AwaitingEvidence = 'awaiting-evidence', ChargeRefunded = 'charge-refunded' }
export const enum ContentVisibility { Shared = 'shared', Private = 'private', Internal = 'internal', Protected = 'protected', Public = 'public' }
export const enum DeviceUsageType { Business = 'business', Educational = 'educational', Healthcare = 'healthcare', Other = 'other', Home = 'home', Personal = 'personal', Industrial = 'industrial' }
export const enum EntityCategory { Owner = 'owner', Other = 'other', User = 'user', Document = 'document', Event = 'event', Person = 'person', Link = 'link', Task = 'task', Message = 'message', Project = 'project' }
export const enum GenderIdentity { PreferNotToSay = 'prefer-not-to-say', Female = 'female', Other = 'other', Male = 'male' }
export const enum CommunicationMethod { Other = 'other', Text = 'text', VideoCall = 'video-call', Sms = 'sms', InPerson = 'in-person', PushNotification = 'push-notification', Phone = 'phone', Email = 'email', InstantMessage = 'instant-message', SocialMedia = 'social-media', Mail = 'mail' }
export const enum FinancialTransactionType { ReceiveOverpayment = 'receive-overpayment', Refund = 'refund', Chargeback = 'chargeback', Adjustment = 'adjustment', Deposit = 'deposit', Dividend = 'dividend', SpendPrepayment = 'spend-prepayment', Other = 'other', Receive = 'receive', SpendOverpayment = 'spend-overpayment', Fee = 'fee', ReceivePrepayment = 'receive-prepayment', Charge = 'charge', Withdrawal = 'withdrawal', Spend = 'spend', Payment = 'payment', Interest = 'interest', Transfer = 'transfer', Sale = 'sale' }
export const enum EmailCategoryType { Governmental = 'governmental', Spam = 'spam', Business = 'business', Promotional = 'promotional', Personal = 'personal', Other = 'other', Transactional = 'transactional', Educational = 'educational' }
export const enum UniversalIdentifierType { Uuid = 'uuid', Number = 'number', Url = 'url', Email = 'email', String = 'string' }
export const enum AccessControlModel { Mac = 'mac', Custom = 'custom', Rbac = 'rbac', None = 'none', Dac = 'dac', Abac = 'abac' }
export const enum ParticipantType { Group = 'group', Organization = 'organization', ExternalParticipant = 'external-participant', Team = 'team', User = 'user' }
export const enum PriorityLevel { Low = 'low', Urgent = 'urgent', Elevated = 'elevated', Medium = 'medium', High = 'high' }
export const enum TaskStatus { Done = 'done', Blocked = 'blocked', InProgress = 'in-progress', Todo = 'todo', OnHold = 'on-hold', Cancelled = 'cancelled' }
export const enum UserStatus { Suspended = 'suspended', Inactive = 'inactive', Banned = 'banned', Archived = 'archived', Verified = 'verified', WaitListed = 'wait-listed', Pending = 'pending', Active = 'active', Deleted = 'deleted' }
export const enum PromotionType { FreeShipping = 'free-shipping', FixedAmount = 'fixed-amount', Other = 'other', RewardPoints = 'reward-points', Percentage = 'percentage', BuyOneGetOne = 'buy-one-get-one' }
export const enum MimeType { ImagePng = 'image/png', ImageSvgXml = 'image/svg+xml', ImageJpeg = 'image/jpeg', ImageGif = 'image/gif', ImageWebp = 'image/webp' }
export const enum PrerequisiteRangeType { Quantity = 'quantity', Subtotal = 'subtotal', ShippingPrice = 'shipping-price' }
export const enum TaxType { Inclusive = 'inclusive', Additive = 'additive', Variable = 'variable' }
export const enum ModifierType { List = 'list', Text = 'text' }
export const enum CardType { Debit = 'debit', Credit = 'credit', UnknownCard = 'unknown-card' }
export const enum PrepaidType { Prepaid = 'prepaid', UnknownPrepaid = 'unknown-prepaid', NotPrepaid = 'not-prepaid' }
export const enum EntryMethod { Keyed = 'keyed', Swiped = 'swiped', OnFile = 'on-file', Contactless = 'contactless', Emv = 'emv' }
export const enum CvvStatus { NotChecked = 'not-checked', Accepted = 'accepted', Rejected = 'rejected' }
export const enum AvcStatus { Accepted = 'accepted', Rejected = 'rejected', NotChecked = 'not-checked' }
export const enum CreditType { Overpayment = 'overpayment', Goodwill = 'goodwill', Supplier = 'supplier', Prepayment = 'prepayment', Customer = 'customer' }
export const enum CallDirection { Unknown = 'unknown', Conference = 'conference', Inbound = 'inbound', Outbound = 'outbound' }
export const enum SpeakerRole { Invitee = 'invitee', Attendee = 'attendee' }
export const enum FileType { File = 'file', Folder = 'folder', Url = 'url' }
export const enum AiToolChoiceType { Auto = 'auto', Any = 'any', None = 'none', Tool = 'tool' }
export const enum ImageType { Base64 = 'base64' }
export const enum ResponseFormatType { JsonSchema = 'json-schema', Text = 'text', JsonObject = 'json-object' }
export const enum ToolCallType { Function = 'function' }
export const enum AiMessagesContentType { Image = 'image', ToolUse = 'tool-use', Text = 'text', ToolResult = 'tool-result' }
export const enum AiRole { User = 'user', Assistant = 'assistant', Tool = 'tool' }
export const enum JsonSchemaType { Function = 'function' }
export const enum EventStatus { Cancelled = 'cancelled', Tentative = 'tentative', Confirmed = 'confirmed' }
export const enum EventVisibility { Confidential = 'confidential', Public = 'public', Private = 'private' }
export const enum EventReminderAction { Email = 'email', Popup = 'popup' }
export const enum EventRuleType { Exclude = 'exclude', ExcludeDates = 'exclude-dates', Repeat = 'repeat', AddDates = 'add-dates' }
export const enum EventFrequency { Monthly = 'monthly', Weekly = 'weekly', Daily = 'daily', Yearly = 'yearly' }
export const enum TableType { External = 'external', MaterializedView = 'materialized-view', Snapshot = 'snapshot', Table = 'table', View = 'view' }
export const enum DatabaseType { External = 'external', Default = 'default', Public = 'public', Linked = 'linked' }
