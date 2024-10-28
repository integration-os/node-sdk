// This file is auto-generated. Do not edit it manually.

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
export interface Tables { commonModel?: string;
    id?: string;
    fields?: Attributes[];
    createdAt?: string;
    description?: string;
    slug?: string;
    name?: string;
    updatedAt?: string;
    modifyToken?: string }
export interface Databases { permissionLevel?: string;
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
    organizationId?: string }
export interface Attributes { unique?: boolean;
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
    dataType?: DataType }
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
export const enum AppliesTo { SpecificItems = 'specific-items', SpecificCategories = 'specific-categories', AllItems = 'all-items' }
export const enum CustomerSelection { All = 'all', Prerequisite = 'prerequisite' }
export const enum Status { Expired = 'expired', Scheduled = 'scheduled', Active = 'active' }
export const enum Roles { Admin = 'admin', User = 'user', Moderator = 'moderator' }
export const enum Format { Json = 'json', Xml = 'xml' }
export const enum SkuValidation { GlobalUnique = 'global-unique', LocalUnique = 'local-unique', None = 'none' }
export const enum TargetSelection { Entitled = 'entitled', All = 'all' }
export const enum UserRoles { Admin = 'admin', Moderator = 'moderator', User = 'user' }
export const enum MinimumRequirements { None = 'none', MinimumPurchaseAmount = 'minimum-purchase-amount', MinimumQuantityOfItems = 'minimum-quantity-of-items' }
export const enum CustomerEligibility { SpecificCustomers = 'specific-customers', SpecificCustomerGroups = 'specific-customer-groups', All = 'all' }
export const enum ReceiverRoles { User = 'user', Moderator = 'moderator', Admin = 'admin' }
export const enum AccountType { AssetProvisionsFixedAssets = 'asset::provisions-fixed-assets', AssetAssetsAvailableForSale = 'asset::assets-available-for-sale', ExpenseAmortizationExpense = 'expense::amortization-expense', OtherExpenseWashAndRoadServices = 'other-expense::wash-and-road-services', EquityCapitalReserves = 'equity::capital-reserves', AssetOtherCurrentAsset = 'asset::other-current-asset', OtherIncomeInterestEarned = 'other-income::interest-earned', AssetAccumulatedDepletion = 'asset::accumulated-depletion', AssetSecurityDeposits = 'asset::security-deposits', ExpenseOtherMiscellaneousServiceCost = 'expense::other-miscellaneous-service-cost', ExpenseIncomeTaxExpense = 'expense::income-tax-expense', AssetFurnitureAndFixtures = 'asset::furniture-and-fixtures', OtherExpenseUtilities = 'other-expense::utilities', AssetLongTermLoansAndAdvancesToRelatedParties = 'asset::long-term-loans-and-advances-to-related-parties', AssetOtherEarMarkedBankAccounts = 'asset::other-ear-marked-bank-accounts', LiabilityLongTermEmployeeBenefitObligations = 'liability::long-term-employee-benefit-obligations', LiabilityOtherLongTermProvisions = 'liability::other-long-term-provisions', AssetFixedAsset = 'asset::fixed-asset', OtherExpenseIncomeTaxOtherExpense = 'other-expense::income-tax-other-expense', AssetChecking = 'asset::checking', AssetIntangibleAssetsUnderDevelopment = 'asset::intangible-assets-under-development', EquityOtherFreeReserves = 'equity::other-free-reserves', OtherCurrentLiabilityDutiesAndTaxes = 'other-current-liability::duties-and-taxes', ExpenseOtherSellingExpenses = 'expense::other-selling-expenses', EquityHealthcare = 'equity::healthcare', OtherCurrentLiabilityCurrentTaxLiability = 'other-current-liability::current-tax-liability', LiabilityProvisionsNonCurrentLiabilities = 'liability::provisions-non-current-liabilities', OtherCurrentLiability = 'other-current-liability', LiabilityLongTermLiability = 'liability::long-term-liability', OtherExpenseDepletion = 'other-expense::depletion', EquityPersonalExpense = 'equity::personal-expense', OtherExpensePenaltiesSettlements = 'other-expense::penalties-settlements', ExpenseEntertainment = 'expense::entertainment', AssetShortTermInvestmentsInRelatedParties = 'asset::short-term-investments-in-related-parties', OtherCurrentLiabilityLineOfCredit = 'other-current-liability::line-of-credit', AssetCapitalWip = 'asset::capital-wip', AssetGlobalTaxRefund = 'asset::global-tax-refund', AssetLand = 'asset::land', RevenueOtherCurrentOperatingIncome = 'revenue::other-current-operating-income', OtherCurrentLiabilityGlobalTaxSuspense = 'other-current-liability::global-tax-suspense', ExpenseOtherBusinessExpenses = 'expense::other-business-expenses', AssetPrepaidExpenses = 'asset::prepaid-expenses', AssetInvestments = 'asset::investments', AssetPrepaymentsAndAccruedIncome = 'asset::prepayments-and-accrued-income', CostOfGoodsSoldShippingFreightDeliveryCos = 'cost-of-goods-sold::shipping-freight-delivery-cos', ExpenseUtilities = 'expense::utilities', OtherExpenseTaxRoundoffGainOrLoss = 'other-expense::tax-roundoff-gain-or-loss', AccountsReceivable = 'accounts-receivable', LiabilityOtherLongTermLiabilities = 'liability::other-long-term-liabilities', LiabilityShareholderNotesPayable = 'liability::shareholder-notes-payable', OtherCurrentLiabilityRentsInTrustLiability = 'other-current-liability::rents-in-trust-liability', AssetLeaseholdImprovements = 'asset::leasehold-improvements', AssetRentsHeldInTrust = 'asset::rents-held-in-trust', LiabilityObligationsUnderFinanceLeases = 'liability::obligations-under-finance-leases', ExpenseExtraordinaryCharges = 'expense::extraordinary-charges', AssetMachineryAndEquipment = 'asset::machinery-and-equipment', OtherIncomeUnrealisedLossOnSecuritiesNetOfTax = 'other-income::unrealised-loss-on-securities-net-of-tax', RevenueOtherPrimaryIncome = 'revenue::other-primary-income', AssetRetainage = 'asset::retainage', LiabilityStaffAndRelatedLongTermLiabilityAccounts = 'liability::staff-and-related-long-term-liability-accounts', ExpenseInterestPaid = 'expense::interest-paid', AssetLeaseBuyout = 'asset::lease-buyout', ExpenseTravel = 'expense::travel', AssetInvestmentOther = 'asset::investment-other', RevenueServiceFeeIncome = 'revenue::service-fee-income', OtherExpenseRepairsAndMaintenance = 'other-expense::repairs-and-maintenance', EquityDividendDisbursed = 'equity::dividend-disbursed', ExpenseOfficeGeneralAdministrativeExpenses = 'expense::office-general-administrative-expenses', CostOfGoodsSold = 'cost-of-goods-sold', ExpenseCommissionsAndFees = 'expense::commissions-and-fees', AssetAssetsInCourseOfConstruction = 'asset::assets-in-course-of-construction', LiabilityCreditCard = 'liability::credit-card', AssetFixedAssetComputers = 'asset::fixed-asset-computers', EquityCalledUpShareCapital = 'equity::called-up-share-capital', OtherCurrentLiabilityStaffAndRelatedLiabilityAccounts = 'other-current-liability::staff-and-related-liability-accounts', OtherCurrentLiabilityAccruedLiabilities = 'other-current-liability::accrued-liabilities', OtherExpenseMatCredit = 'other-expense::mat-credit', RevenueNonProfitIncome = 'revenue::non-profit-income', OtherCurrentLiabilityTradeAndOtherPayables = 'other-current-liability::trade-and-other-payables', OtherExpenseHomeOwnerRentalInsurance = 'other-expense::home-owner-rental-insurance', OtherCurrentLiabilityProvisionsCurrentLiabilities = 'other-current-liability::provisions-current-liabilities', EquityOwnersEquity = 'equity::owners-equity', ExpenseRepairMaintenance = 'expense::repair-maintenance', OtherCurrentLiabilityPayrollTaxPayable = 'other-current-liability::payroll-tax-payable', AssetAssetsHeldForSale = 'asset::assets-held-for-sale', AssetAccumulatedAmortization = 'asset::accumulated-amortization', ExpenseOtherCurrentOperatingCharges = 'expense::other-current-operating-charges', AssetProvisionsCurrentAssets = 'asset::provisions-current-assets', OtherExpenseOtherHomeOfficeExpenses = 'other-expense::other-home-office-expenses', OtherCurrentLiabilitySundryDebtorsAndCreditors = 'other-current-liability::sundry-debtors-and-creditors', AssetOtherCurrentAssets = 'asset::other-current-assets', AssetFixedAssetPhone = 'asset::fixed-asset-phone', ExpenseShippingFreightDelivery = 'expense::shipping-freight-delivery', OtherCurrentLiabilityCurrentPortionOfObligationsUnderFinanceLeases = 'other-current-liability::current-portion-of-obligations-under-finance-leases', Liability = 'liability', ExpenseOtherExternalServices = 'expense::other-external-services', AssetFixedAssetPhotoVideo = 'asset::fixed-asset-photo-video', AssetInvestmentUsGovernmentObligations = 'asset::investment-us-government-obligations', OtherCurrentLiabilityStateLocalIncomeTaxPayable = 'other-current-liability::state-local-income-tax-payable', OtherExpenseExchangeGainOrLoss = 'other-expense::exchange-gain-or-loss', AssetEmployeeCashAdvances = 'asset::employee-cash-advances', ExpenseSuppliesMaterials = 'expense::supplies-materials', EquityEstimatedTaxes = 'equity::estimated-taxes', AssetMoneyMarket = 'asset::money-market', OtherIncomeGainLossOnSaleOfFixedAssets = 'other-income::gain-loss-on-sale-of-fixed-assets', AssetCalledUpShareCapitalNotPaid = 'asset::called-up-share-capital-not-paid', AssetBank = 'asset::bank', LiabilityLongTermDebit = 'liability::long-term-debit', AssetUndepositedFunds = 'asset::undeposited-funds', EquityPartnerContributions = 'equity::partner-contributions', CostOfGoodsSoldOtherCostsOfServiceCos = 'cost-of-goods-sold::other-costs-of-service-cos', CostOfGoodsSoldSuppliesMaterialsCogs = 'cost-of-goods-sold::supplies-materials-cogs', EquityPartnerDistributions = 'equity::partner-distributions', ExpenseAdvertisingPromotional = 'expense::advertising-promotional', CostOfGoodsSoldEquipmentRentalCos = 'cost-of-goods-sold::equipment-rental-cos', OtherExpenseVehicleLoan = 'other-expense::vehicle-loan', AssetCashOnHand = 'asset::cash-on-hand', AssetDevelopmentCosts = 'asset::development-costs', OtherCurrentLiabilityDirectDepositPayable = 'other-current-liability::direct-deposit-payable', OtherExpenseDeferredTaxExpense = 'other-expense::deferred-tax-expense', OtherIncomeDividendIncome = 'other-income::dividend-income', ExpenseDistributionCosts = 'expense::distribution-costs', EquityShareApplicationMoneyPendingAllotment = 'equity::share-application-money-pending-allotment', LiabilityGroupAndAssociates = 'liability::group-and-associates', AssetLoansToStockholders = 'asset::loans-to-stockholders', OtherExpense = 'other-expense', OtherExpenseDepreciation = 'other-expense::depreciation', OtherCurrentLiabilityInterestPayables = 'other-current-liability::interest-payables', CostOfGoodsSoldFreightAndDeliveryCost = 'cost-of-goods-sold::freight-and-delivery-cost', EquityPersonalIncome = 'equity::personal-income', AssetGlobalTaxDeferred = 'asset::global-tax-deferred', AssetOtherLongTermAssets = 'asset::other-long-term-assets', ExpenseOtherRentalCosts = 'expense::other-rental-costs', LiabilityDeferredTaxLiabilities = 'liability::deferred-tax-liabilities', OtherCurrentLiabilityOtherCurrentLiabilities = 'other-current-liability::other-current-liabilities', ExpenseAuto = 'expense::auto', ExpensePenaltiesSettlements = 'expense::penalties-settlements', ExpenseTaxesPaid = 'expense::taxes-paid', AssetLoansToOthers = 'asset::loans-to-others', OtherExpenseRentAndLease = 'other-expense::rent-and-lease', OtherCurrentLiabilityShortTermBorrowings = 'other-current-liability::short-term-borrowings', OtherIncomeOtherMiscellaneousIncome = 'other-income::other-miscellaneous-income', Equity = 'equity', AssetOtherIntangibleAssets = 'asset::other-intangible-assets', ExpenseDuesSubscriptions = 'expense::dues-subscriptions', Income = 'income', LiabilityBankLoans = 'liability::bank-loans', ExpenseUnappliedCashBillPaymentExpense = 'expense::unapplied-cash-bill-payment-expense', AssetIntangibleAssets = 'asset::intangible-assets', ExpenseManagementCompensation = 'expense::management-compensation', EquityAccumulatedAdjustment = 'equity::accumulated-adjustment', EquityCommonStock = 'equity::common-stock', OtherCurrentLiabilityFederalIncomeTaxPayable = 'other-current-liability::federal-income-tax-payable', OtherCurrentLiabilitySocialSecurityAgencies = 'other-current-liability::social-security-agencies', AssetNonCurrentAssets = 'asset::non-current-assets', LiabilityAccrualsAndDeferredIncome = 'liability::accruals-and-deferred-income', LiabilityAccountsPayable = 'liability::accounts-payable', ExpenseExternalServices = 'expense::external-services', AssetLicenses = 'asset::licenses', ExpensePayrollExpenses = 'expense::payroll-expenses', ExpenseBorrowingCost = 'expense::borrowing-cost', OtherCurrentLiabilityInsurancePayable = 'other-current-liability::insurance-payable', OtherIncomeOtherInvestmentIncome = 'other-income::other-investment-income', LiabilityLiabilitiesRelatedToAssetsHeldForSale = 'liability::liabilities-related-to-assets-held-for-sale', AssetInventory = 'asset::inventory', AssetAvailableForSaleFinancialAssets = 'asset::available-for-sale-financial-assets', AssetTradeAndOtherReceivables = 'asset::trade-and-other-receivables', OtherCurrentLiabilityProvisionForWarrantyObligations = 'other-current-liability::provision-for-warranty-obligations', OtherExpenseExceptionalItems = 'other-expense::exceptional-items', OtherIncomeTaxExemptInterest = 'other-income::tax-exempt-interest', RevenueOperatingGrants = 'revenue::operating-grants', OtherExpenseOtherVehicleExpenses = 'other-expense::other-vehicle-expenses', RevenueRevenueGeneral = 'revenue::revenue-general', LiabilityLongTermBorrowings = 'liability::long-term-borrowings', ExpenseEntertainmentMeals = 'expense::entertainment-meals', RevenueSavingsByTaxScheme = 'revenue::savings-by-tax-scheme', LiabilityOutstandingDuesMicroSmallEnterprise = 'liability::outstanding-dues-micro-small-enterprise', ExpenseLossOnDiscontinuedOperationsNetOfTax = 'expense::loss-on-discontinued-operations-net-of-tax', OtherExpenseHomeOffice = 'other-expense::home-office', ExpenseFinanceCosts = 'expense::finance-costs', AssetOtherAsset = 'asset::other-asset', AssetDeferredTax = 'asset::deferred-tax', EquityEquityInEarningsOfSubsidiuaries = 'equity::equity-in-earnings-of-subsidiuaries', OtherIncome = 'other-income', AssetAccumulatedAmortizationOfOtherAssets = 'asset::accumulated-amortization-of-other-assets', AssetInvestmentTaxExemptSecurities = 'asset::investment-tax-exempt-securities', ExpensePurchasesRebates = 'expense::purchases-rebates', ExpenseTravelMeals = 'expense::travel-meals', OtherCurrentLiabilityTrustAccountsLiabilities = 'other-current-liability::trust-accounts-liabilities', ExpenseTravelExpensesGeneralAndAdminExpenses = 'expense::travel-expenses-general-and-admin-expenses', LiabilityAccruedVacationPayable = 'liability::accrued-vacation-payable', AssetFixedAssetFurniture = 'asset::fixed-asset-furniture', ExpenseStaffCosts = 'expense::staff-costs', OtherCurrentLiabilityPrepaidExpensesPayable = 'other-current-liability::prepaid-expenses-payable', OtherCurrentLiabilitySalesTaxPayable = 'other-current-liability::sales-tax-payable', ExpenseOfficeExpenses = 'expense::office-expenses', AssetOtherLongTermLoansAndAdvances = 'asset::other-long-term-loans-and-advances', EquityInvestmentGrants = 'equity::investment-grants', OtherExpenseParkingAndTolls = 'other-expense::parking-and-tolls', OtherExpensePriorPeriodItems = 'other-expense::prior-period-items', AssetOtherLongTermInvestments = 'asset::other-long-term-investments', LiabilityGovernmentAndOtherPublicAuthorities = 'liability::government-and-other-public-authorities', OtherIncomeOtherOperatingIncome = 'other-income::other-operating-income', AssetFixedAssetSoftware = 'asset::fixed-asset-software', EquityFunds = 'equity::funds', OtherCurrentLiabilityGlobalTaxPayable = 'other-current-liability::global-tax-payable', EquityMoneyReceivedAgainstShareWarrants = 'equity::money-received-against-share-warrants', ExpenseLegalProfessionalFees = 'expense::legal-professional-fees', ExpenseProjectStudiesSurveysAssessments = 'expense::project-studies-surveys-assessments', AssetLandAsset = 'asset::land-asset', EquityTreasuryStock = 'equity::treasury-stock', AssetProvisionsNonCurrentAssets = 'asset::provisions-non-current-assets', CostOfGoodsSoldCostOfLaborCos = 'cost-of-goods-sold::cost-of-labor-cos', EquityOpeningBalanceEquity = 'equity::opening-balance-equity', ExpenseInsurance = 'expense::insurance', AssetCumulativeDepreciationOnIntangibleAssets = 'asset::cumulative-depreciation-on-intangible-assets', AssetInvestmentMortgageRealEstateLoans = 'asset::investment-mortgage-real-estate-loans', OtherIncomeGainLossOnSaleOfInvestments = 'other-income::gain-loss-on-sale-of-investments', OtherCurrentLiabilityLoanPayable = 'other-current-liability::loan-payable', CostOfGoodsSoldCostOfSales = 'cost-of-goods-sold::cost-of-sales', ExpenseCharitableContributions = 'expense::charitable-contributions', LiabilityAccruedLongTermLiabilities = 'liability::accrued-long-term-liabilities', OtherCurrentLiabilityCurrentPortionEmployeeBenefitsObligations = 'other-current-liability::current-portion-employee-benefits-obligations', RevenueSalesOfProductIncome = 'revenue::sales-of-product-income', LiabilityProvisionForLiabilities = 'liability::provision-for-liabilities', Asset = 'asset', OtherIncomeLossOnDisposalOfAssets = 'other-income::loss-on-disposal-of-assets', OtherExpenseMortgageInterest = 'other-expense::mortgage-interest', ExpenseBadDebts = 'expense::bad-debts', LiabilityNotesPayable = 'liability::notes-payable', EquityPartnersEquity = 'equity::partners-equity', ExpenseCostOfLabor = 'expense::cost-of-labor', AssetFixedAssetCopiers = 'asset::fixed-asset-copiers', OtherExpenseVehicleRegistration = 'other-expense::vehicle-registration', RevenueUnappliedCashPaymentIncome = 'revenue::unapplied-cash-payment-income', AssetOtherFixedAssets = 'asset::other-fixed-assets', AssetBalWithGovtAuthorities = 'asset::bal-with-govt-authorities', OtherExpenseExtraordinaryItems = 'other-expense::extraordinary-items', RevenueSalesWholesale = 'revenue::sales-wholesale', ExpenseSundry = 'expense::sundry', AssetBuildings = 'asset::buildings', ExpenseGlobalTaxExpense = 'expense::global-tax-expense', EquityPreferredStock = 'equity::preferred-stock', EquityAccumulatedOtherComprehensiveIncome = 'equity::accumulated-other-comprehensive-income', Expense = 'expense', AssetDepletableAssets = 'asset::depletable-assets', OtherExpenseVehicleLease = 'other-expense::vehicle-lease', RevenueSalesRetail = 'revenue::sales-retail', AssetCashAndCashEquivalents = 'asset::cash-and-cash-equivalents', AssetOrganizationalCosts = 'asset::organizational-costs', AssetVehicles = 'asset::vehicles', AssetTrustAccounts = 'asset::trust-accounts', ExpenseRentOrLeaseOfBuildings = 'expense::rent-or-lease-of-buildings', LiabilityOutstandingDuesOtherThanMicroSmallEnterprise = 'liability::outstanding-dues-other-than-micro-small-enterprise', ExpenseBankCharges = 'expense::bank-charges', OtherExpenseOtherMiscellaneousExpense = 'other-expense::other-miscellaneous-expense', OtherExpenseVehicleRepairs = 'other-expense::vehicle-repairs', OtherCurrentLiabilityCurrentLiabilities = 'other-current-liability::current-liabilities', RevenueDiscountsRefundsGiven = 'revenue::discounts-refunds-given', RevenueOwnWorkCapitalized = 'revenue::own-work-capitalized', AssetAccumulatedDepreciation = 'asset::accumulated-depreciation', OtherExpenseVehicleInsurance = 'other-expense::vehicle-insurance', OtherExpenseVehicleLoanInterest = 'other-expense::vehicle-loan-interest', ExpensePromotionalMeals = 'expense::promotional-meals', ExpenseShippingAndDeliveryExpense = 'expense::shipping-and-delivery-expense', OtherExpenseGasAndFuel = 'other-expense::gas-and-fuel', EquityRetainedEarnings = 'equity::retained-earnings', AssetGoodwill = 'asset::goodwill', LiabilityDebtsRelatedToParticipatingInterests = 'liability::debts-related-to-participating-interests', AssetFixedAssetOtherToolsEquipment = 'asset::fixed-asset-other-tools-equipment', AssetLoansToOfficers = 'asset::loans-to-officers', AssetParticipatingInterests = 'asset::participating-interests', AssetAllowanceForBadDebts = 'asset::allowance-for-bad-debts', AssetOtherConsumables = 'asset::other-consumables', ExpenseTravelExpensesSellingExpense = 'expense::travel-expenses-selling-expense', EquityShareCapital = 'equity::share-capital', OtherExpenseAmortization = 'other-expense::amortization', EquityPaidInCapitalOrSurplus = 'equity::paid-in-capital-or-surplus', AssetExpenditureAuthorisationsAndLettersOfCredit = 'asset::expenditure-authorisations-and-letters-of-credit', AssetSavings = 'asset::savings', OtherCurrentLiabilityDividendsPayable = 'other-current-liability::dividends-payable', RevenueCashReceiptIncome = 'revenue::cash-receipt-income', AssetShortTermLoansAndAdvancesToRelatedParties = 'asset::short-term-loans-and-advances-to-related-parties', ExpenseAppropriationsToDepreciation = 'expense::appropriations-to-depreciation', AssetInternalTransfers = 'asset::internal-transfers', OtherCurrentLiabilityPayrollClearing = 'other-current-liability::payroll-clearing', RevenueIncome = 'revenue::income', AssetLongTermInvestments = 'asset::long-term-investments', OtherExpenseVehicle = 'other-expense::vehicle', ExpenseEquipmentRental = 'expense::equipment-rental' }
export const enum Gender { Other = 'other', PreferNotToSay = 'prefer not to say', Female = 'female', Male = 'male' }
export const enum ChannelAvailability { InApp = 'in-app', Online = 'online', InStore = 'in-store', AllChannels = 'all-channels' }
export const enum TransactionMethod { Telephone = 'telephone', Mobile = 'mobile', BankBranch = 'bank-branch', Online = 'online', Atm = 'atm', Mail = 'mail' }
export const enum AllocationMethod { Each = 'each', Across = 'across' }
export const enum Country { Luxembourg = 'luxembourg', Madagascar = 'madagascar', Samoa = 'samoa', Pakistan = 'pakistan', SouthKorea = 'south-korea', Thailand = 'thailand', Uruguay = 'uruguay', Zimbabwe = 'zimbabwe', Ecuador = 'ecuador', Maldives = 'maldives', Turkmenistan = 'turkmenistan', Jamaica = 'jamaica', Liberia = 'liberia', Bolivia = 'bolivia', Syria = 'syria', Taiwan = 'taiwan', Greece = 'greece', Kuwait = 'kuwait', Malawi = 'malawi', Tunisia = 'tunisia', Singapore = 'singapore', Kyrgyzstan = 'kyrgyzstan', Vanuatu = 'vanuatu', MarshallIslands = 'marshall-islands', Ghana = 'ghana', Lithuania = 'lithuania', Iran = 'iran', Mauritius = 'mauritius', Nepal = 'nepal', Lesotho = 'lesotho', Tanzania = 'tanzania', UnitedStates = 'united-states', BosniaAndHerzegovina = 'bosnia-and-herzegovina', BurkinaFaso = 'burkina-faso', Nauru = 'nauru', Barbados = 'barbados', Sweden = 'sweden', SouthAfrica = 'south-africa', Uzbekistan = 'uzbekistan', Belize = 'belize', Canada = 'canada', CostaRica = 'costa-rica', Djibouti = 'djibouti', Zambia = 'zambia', Italy = 'italy', Gabon = 'gabon', Tajikistan = 'tajikistan', Brunei = 'brunei', Monaco = 'monaco', Oman = 'oman', GuineaBissau = 'guinea-bissau', Guyana = 'guyana', Malaysia = 'malaysia', Romania = 'romania', SaintKittsAndNevis = 'saint-kitts-and-nevis', Kenya = 'kenya', CongoRepublic = 'congo-republic', Hungary = 'hungary', SaoTomeAndPrincipe = 'sao-tome-and-principe', Spain = 'spain', Suriname = 'suriname', Senegal = 'senegal', Georgia = 'georgia', Burundi = 'burundi', Bahrain = 'bahrain', Brazil = 'brazil', Japan = 'japan', Norway = 'norway', CaboVerde = 'cabo-verde', SierraLeone = 'sierra-leone', Argentina = 'argentina', Panama = 'panama', Denmark = 'denmark', Jordan = 'jordan', Austria = 'austria', Kiribati = 'kiribati', SouthSudan = 'south-sudan', SaudiArabia = 'saudi-arabia', Honduras = 'honduras', Niger = 'niger', Armenia = 'armenia', Eswatini = 'eswatini', Montenegro = 'montenegro', SanMarino = 'san-marino', Peru = 'peru', TrinidadAndTobago = 'trinidad-and-tobago', Venezuela = 'venezuela', Iraq = 'iraq', Chile = 'chile', Namibia = 'namibia', Gambia = 'gambia', SaintVincentAndTheGrenadines = 'saint-vincent-and-the-grenadines', Slovenia = 'slovenia', Indonesia = 'indonesia', Iceland = 'iceland', Nigeria = 'nigeria', SriLanka = 'sri-lanka', Cuba = 'cuba', Libya = 'libya', Tuvalu = 'tuvalu', UnitedArabEmirates = 'united-arab-emirates', Micronesia = 'micronesia', Myanmar = 'myanmar', Comoros = 'comoros', Andorra = 'andorra', UnitedKingdom = 'united-kingdom', Eritrea = 'eritrea', CoteDIvoire = 'cote-d-ivoire', Russia = 'russia', Serbia = 'serbia', CentralAfricanRepublic = 'central-african-republic', Bhutan = 'bhutan', Egypt = 'egypt', Lebanon = 'lebanon', Poland = 'poland', SaintLucia = 'saint-lucia', Afghanistan = 'afghanistan', Botswana = 'botswana', NorthMacedonia = 'north-macedonia', Vietnam = 'vietnam', Ukraine = 'ukraine', Switzerland = 'switzerland', Togo = 'togo', Haiti = 'haiti', Albania = 'albania', Mauritania = 'mauritania', NewZealand = 'new-zealand', France = 'france', Uganda = 'uganda', Grenada = 'grenada', Benin = 'benin', Somalia = 'somalia', Cameroon = 'cameroon', Fiji = 'fiji', Azerbaijan = 'azerbaijan', Bahamas = 'bahamas', Netherlands = 'netherlands', TimorLeste = 'timor-leste', Ireland = 'ireland', Cyprus = 'cyprus', India = 'india', Chad = 'chad', Australia = 'australia', Kazakhstan = 'kazakhstan', Mexico = 'mexico', Turkey = 'turkey', Portugal = 'portugal', CzechRepublic = 'czech-republic', Croatia = 'croatia', Nicaragua = 'nicaragua', Philippines = 'philippines', Rwanda = 'rwanda', Bulgaria = 'bulgaria', Seychelles = 'seychelles', DominicanRepublic = 'dominican-republic', EquatorialGuinea = 'equatorial-guinea', CongoDemocraticRepublic = 'congo-democratic-republic', Germany = 'germany', Malta = 'malta', Moldova = 'moldova', PapuaNewGuinea = 'papua-new-guinea', Yemen = 'yemen', Belgium = 'belgium', Liechtenstein = 'liechtenstein', Estonia = 'estonia', Dominica = 'dominica', China = 'china', Guatemala = 'guatemala', Latvia = 'latvia', Guinea = 'guinea', Mozambique = 'mozambique', Palau = 'palau', Finland = 'finland', ElSalvador = 'el-salvador', Bangladesh = 'bangladesh', Ethiopia = 'ethiopia', Mali = 'mali', Morocco = 'morocco', Slovakia = 'slovakia', Tonga = 'tonga', Algeria = 'algeria', NorthKorea = 'north-korea', Qatar = 'qatar', VaticanCity = 'vatican-city', Palestine = 'palestine', AntiguaAndBarbuda = 'antigua-and-barbuda', Angola = 'angola', Belarus = 'belarus', Colombia = 'colombia', Laos = 'laos', Israel = 'israel', Mongolia = 'mongolia', Paraguay = 'paraguay', SolomonIslands = 'solomon-islands', Sudan = 'sudan', Cambodia = 'cambodia' }
export const enum GlobalTaxType { Vat = 'vat', ExciseTax = 'excise-tax', Other = 'other', Gst = 'gst', SalesTax = 'sales-tax', CustomsDuty = 'customs-duty', PropertyTax = 'property-tax' }
export const enum JournalEntryStatus { Voided = 'voided', Posted = 'posted', Corrected = 'corrected', Draft = 'draft', Pending = 'pending', Error = 'error' }
export const enum IdentityProvider { Tiktok = 'tiktok', Vimeo = 'vimeo', Apple = 'apple', Behance = 'behance', Yahoo = 'yahoo', Microsoft = 'microsoft', Google = 'google', Amazon = 'amazon', Paypal = 'paypal', Tumblr = 'tumblr', Foursquare = 'foursquare', Dribbble = 'dribbble', Slack = 'slack', Discord = 'discord', Whatsapp = 'whatsapp', Telegram = 'telegram', Facebook = 'facebook', Snapchat = 'snapchat', Other = 'other', Instagram = 'instagram', Reddit = 'reddit', Signal = 'signal', Pinterest = 'pinterest', Wechat = 'wechat', Github = 'github', Flickr = 'flickr', Line = 'line', Qq = 'qq', Twitter = 'twitter', Linkedin = 'linkedin' }
export const enum DayOfWeek { Sunday = 'sunday', Wednesday = 'wednesday', Thursday = 'thursday', Friday = 'friday', Saturday = 'saturday', Monday = 'monday', Tuesday = 'tuesday' }
export const enum AccountEngagementLevel { Unknown = 'unknown', Hot = 'hot', Cold = 'cold', Warm = 'warm' }
export const enum ReviewApprovalStatus { InReview = 'in-review', Pending = 'pending', Approved = 'approved', Rejected = 'rejected', Revised = 'revised' }
export const enum StakeholderType { Customer = 'customer', Vendor = 'vendor', Partner = 'partner', Investor = 'investor', Competitor = 'competitor', Other = 'other' }
export const enum AccountStatus { Pending = 'pending', Closed = 'closed', Suspended = 'suspended', Inactive = 'inactive', Active = 'active' }
export const enum CampaignStatus { Cancelled = 'cancelled', Scheduled = 'scheduled', Paused = 'paused', Archived = 'archived', Active = 'active', Completed = 'completed', Planned = 'planned', Draft = 'draft' }
export const enum CustomerType { Wholesale = 'wholesale', Online = 'online', Retail = 'retail', B2c = 'b2c', B2b = 'b2b', Corporate = 'corporate' }
export const enum AccountingAccountType { OtherExpenseOtherHomeOfficeExpenses = 'other-expense::other-home-office-expenses', OtherCurrentLiabilityRentsInTrustLiability = 'other-current-liability::rents-in-trust-liability', OtherExpenseRentAndLease = 'other-expense::rent-and-lease', AssetDepletableAssets = 'asset::depletable-assets', AssetExpenditureAuthorisationsAndLettersOfCredit = 'asset::expenditure-authorisations-and-letters-of-credit', OtherExpenseHomeOffice = 'other-expense::home-office', LiabilityLongTermLiability = 'liability::long-term-liability', OtherExpenseOtherVehicleExpenses = 'other-expense::other-vehicle-expenses', LiabilityGroupAndAssociates = 'liability::group-and-associates', LiabilityObligationsUnderFinanceLeases = 'liability::obligations-under-finance-leases', ExpenseOtherExternalServices = 'expense::other-external-services', OtherIncomeInterestEarned = 'other-income::interest-earned', OtherIncomeOtherMiscellaneousIncome = 'other-income::other-miscellaneous-income', OtherIncomeUnrealisedLossOnSecuritiesNetOfTax = 'other-income::unrealised-loss-on-securities-net-of-tax', AssetLoansToStockholders = 'asset::loans-to-stockholders', AssetAssetsHeldForSale = 'asset::assets-held-for-sale', AssetFixedAssetOtherToolsEquipment = 'asset::fixed-asset-other-tools-equipment', AssetInternalTransfers = 'asset::internal-transfers', EquityCalledUpShareCapital = 'equity::called-up-share-capital', OtherExpenseUtilities = 'other-expense::utilities', ExpenseExtraordinaryCharges = 'expense::extraordinary-charges', RevenueSalesOfProductIncome = 'revenue::sales-of-product-income', LiabilityNotesPayable = 'liability::notes-payable', CostOfGoodsSoldCostOfLaborCos = 'cost-of-goods-sold::cost-of-labor-cos', AssetAllowanceForBadDebts = 'asset::allowance-for-bad-debts', OtherExpenseDeferredTaxExpense = 'other-expense::deferred-tax-expense', AssetAccumulatedAmortization = 'asset::accumulated-amortization', OtherCurrentLiability = 'other-current-liability', OtherCurrentLiabilityLineOfCredit = 'other-current-liability::line-of-credit', AssetFixedAssetPhotoVideo = 'asset::fixed-asset-photo-video', AssetInvestments = 'asset::investments', AssetIntangibleAssets = 'asset::intangible-assets', ExpenseUtilities = 'expense::utilities', OtherExpenseGasAndFuel = 'other-expense::gas-and-fuel', RevenueOtherPrimaryIncome = 'revenue::other-primary-income', OtherIncomeOtherOperatingIncome = 'other-income::other-operating-income', AssetCashAndCashEquivalents = 'asset::cash-and-cash-equivalents', LiabilityAccrualsAndDeferredIncome = 'liability::accruals-and-deferred-income', EquityDividendDisbursed = 'equity::dividend-disbursed', LiabilityBankLoans = 'liability::bank-loans', OtherIncome = 'other-income', OtherExpenseMortgageInterest = 'other-expense::mortgage-interest', AssetFixedAsset = 'asset::fixed-asset', OtherExpenseVehicleInsurance = 'other-expense::vehicle-insurance', OtherCurrentLiabilityDirectDepositPayable = 'other-current-liability::direct-deposit-payable', LiabilityAccountsPayable = 'liability::accounts-payable', OtherExpenseVehicleRepairs = 'other-expense::vehicle-repairs', RevenueUnappliedCashPaymentIncome = 'revenue::unapplied-cash-payment-income', AssetShortTermInvestmentsInRelatedParties = 'asset::short-term-investments-in-related-parties', AssetOtherIntangibleAssets = 'asset::other-intangible-assets', AccountsReceivable = 'accounts-receivable', OtherExpensePenaltiesSettlements = 'other-expense::penalties-settlements', ExpenseOtherMiscellaneousServiceCost = 'expense::other-miscellaneous-service-cost', LiabilityAccruedVacationPayable = 'liability::accrued-vacation-payable', ExpenseLossOnDiscontinuedOperationsNetOfTax = 'expense::loss-on-discontinued-operations-net-of-tax', LiabilityStaffAndRelatedLongTermLiabilityAccounts = 'liability::staff-and-related-long-term-liability-accounts', OtherExpenseRepairsAndMaintenance = 'other-expense::repairs-and-maintenance', AssetInvestmentTaxExemptSecurities = 'asset::investment-tax-exempt-securities', AssetFixedAssetFurniture = 'asset::fixed-asset-furniture', ExpenseAppropriationsToDepreciation = 'expense::appropriations-to-depreciation', AssetOrganizationalCosts = 'asset::organizational-costs', ExpenseUnappliedCashBillPaymentExpense = 'expense::unapplied-cash-bill-payment-expense', AssetLeaseBuyout = 'asset::lease-buyout', ExpenseManagementCompensation = 'expense::management-compensation', AssetPrepaymentsAndAccruedIncome = 'asset::prepayments-and-accrued-income', OtherCurrentLiabilityFederalIncomeTaxPayable = 'other-current-liability::federal-income-tax-payable', OtherCurrentLiabilitySalesTaxPayable = 'other-current-liability::sales-tax-payable', LiabilityOtherLongTermLiabilities = 'liability::other-long-term-liabilities', AssetProvisionsNonCurrentAssets = 'asset::provisions-non-current-assets', LiabilityLongTermBorrowings = 'liability::long-term-borrowings', OtherCurrentLiabilityTrustAccountsLiabilities = 'other-current-liability::trust-accounts-liabilities', OtherCurrentLiabilityCurrentPortionEmployeeBenefitsObligations = 'other-current-liability::current-portion-employee-benefits-obligations', LiabilityDebtsRelatedToParticipatingInterests = 'liability::debts-related-to-participating-interests', ExpenseAuto = 'expense::auto', AssetProvisionsCurrentAssets = 'asset::provisions-current-assets', AssetShortTermLoansAndAdvancesToRelatedParties = 'asset::short-term-loans-and-advances-to-related-parties', ExpenseDistributionCosts = 'expense::distribution-costs', OtherCurrentLiabilityDividendsPayable = 'other-current-liability::dividends-payable', OtherCurrentLiabilityProvisionsCurrentLiabilities = 'other-current-liability::provisions-current-liabilities', EquityPersonalIncome = 'equity::personal-income', LiabilityProvisionForLiabilities = 'liability::provision-for-liabilities', ExpensePromotionalMeals = 'expense::promotional-meals', AssetSecurityDeposits = 'asset::security-deposits', ExpenseStaffCosts = 'expense::staff-costs', AssetDeferredTax = 'asset::deferred-tax', OtherExpenseVehicleRegistration = 'other-expense::vehicle-registration', CostOfGoodsSoldShippingFreightDeliveryCos = 'cost-of-goods-sold::shipping-freight-delivery-cos', AssetOtherLongTermLoansAndAdvances = 'asset::other-long-term-loans-and-advances', AssetProvisionsFixedAssets = 'asset::provisions-fixed-assets', LiabilityLongTermEmployeeBenefitObligations = 'liability::long-term-employee-benefit-obligations', OtherIncomeOtherInvestmentIncome = 'other-income::other-investment-income', AssetAvailableForSaleFinancialAssets = 'asset::available-for-sale-financial-assets', RevenueServiceFeeIncome = 'revenue::service-fee-income', RevenueCashReceiptIncome = 'revenue::cash-receipt-income', ExpenseTravelExpensesGeneralAndAdminExpenses = 'expense::travel-expenses-general-and-admin-expenses', OtherExpenseVehicleLease = 'other-expense::vehicle-lease', AssetIntangibleAssetsUnderDevelopment = 'asset::intangible-assets-under-development', AssetInventory = 'asset::inventory', AssetAccumulatedAmortizationOfOtherAssets = 'asset::accumulated-amortization-of-other-assets', AssetFixedAssetComputers = 'asset::fixed-asset-computers', OtherCurrentLiabilityOtherCurrentLiabilities = 'other-current-liability::other-current-liabilities', OtherCurrentLiabilityShortTermBorrowings = 'other-current-liability::short-term-borrowings', RevenueIncome = 'revenue::income', OtherCurrentLiabilityStateLocalIncomeTaxPayable = 'other-current-liability::state-local-income-tax-payable', AssetOtherCurrentAssets = 'asset::other-current-assets', AssetOtherFixedAssets = 'asset::other-fixed-assets', AssetGlobalTaxDeferred = 'asset::global-tax-deferred', OtherExpenseIncomeTaxOtherExpense = 'other-expense::income-tax-other-expense', EquityOwnersEquity = 'equity::owners-equity', AssetAccumulatedDepreciation = 'asset::accumulated-depreciation', ExpenseOfficeGeneralAdministrativeExpenses = 'expense::office-general-administrative-expenses', EquityCommonStock = 'equity::common-stock', ExpenseTravel = 'expense::travel', OtherCurrentLiabilitySundryDebtorsAndCreditors = 'other-current-liability::sundry-debtors-and-creditors', AssetOtherConsumables = 'asset::other-consumables', AssetInvestmentOther = 'asset::investment-other', OtherExpenseExchangeGainOrLoss = 'other-expense::exchange-gain-or-loss', AssetDevelopmentCosts = 'asset::development-costs', ExpenseSundry = 'expense::sundry', OtherCurrentLiabilityPrepaidExpensesPayable = 'other-current-liability::prepaid-expenses-payable', AssetMachineryAndEquipment = 'asset::machinery-and-equipment', AssetBalWithGovtAuthorities = 'asset::bal-with-govt-authorities', OtherCurrentLiabilityInsurancePayable = 'other-current-liability::insurance-payable', OtherExpenseDepreciation = 'other-expense::depreciation', ExpensePayrollExpenses = 'expense::payroll-expenses', LiabilityCreditCard = 'liability::credit-card', RevenueNonProfitIncome = 'revenue::non-profit-income', AssetCumulativeDepreciationOnIntangibleAssets = 'asset::cumulative-depreciation-on-intangible-assets', OtherCurrentLiabilityAccruedLiabilities = 'other-current-liability::accrued-liabilities', Expense = 'expense', CostOfGoodsSoldEquipmentRentalCos = 'cost-of-goods-sold::equipment-rental-cos', OtherCurrentLiabilityCurrentPortionOfObligationsUnderFinanceLeases = 'other-current-liability::current-portion-of-obligations-under-finance-leases', AssetNonCurrentAssets = 'asset::non-current-assets', OtherCurrentLiabilityCurrentLiabilities = 'other-current-liability::current-liabilities', OtherExpenseMatCredit = 'other-expense::mat-credit', RevenueDiscountsRefundsGiven = 'revenue::discounts-refunds-given', ExpenseShippingAndDeliveryExpense = 'expense::shipping-and-delivery-expense', RevenueOtherCurrentOperatingIncome = 'revenue::other-current-operating-income', ExpenseOtherSellingExpenses = 'expense::other-selling-expenses', LiabilityOutstandingDuesOtherThanMicroSmallEnterprise = 'liability::outstanding-dues-other-than-micro-small-enterprise', AssetBank = 'asset::bank', ExpenseAdvertisingPromotional = 'expense::advertising-promotional', AssetFurnitureAndFixtures = 'asset::furniture-and-fixtures', ExpenseEntertainmentMeals = 'expense::entertainment-meals', OtherCurrentLiabilityDutiesAndTaxes = 'other-current-liability::duties-and-taxes', AssetGlobalTaxRefund = 'asset::global-tax-refund', AssetParticipatingInterests = 'asset::participating-interests', EquityPaidInCapitalOrSurplus = 'equity::paid-in-capital-or-surplus', ExpenseCommissionsAndFees = 'expense::commissions-and-fees', AssetLongTermInvestments = 'asset::long-term-investments', CostOfGoodsSold = 'cost-of-goods-sold', AssetCashOnHand = 'asset::cash-on-hand', OtherCurrentLiabilityGlobalTaxSuspense = 'other-current-liability::global-tax-suspense', AssetFixedAssetCopiers = 'asset::fixed-asset-copiers', AssetLicenses = 'asset::licenses', Asset = 'asset', OtherCurrentLiabilityPayrollTaxPayable = 'other-current-liability::payroll-tax-payable', ExpenseSuppliesMaterials = 'expense::supplies-materials', ExpenseShippingFreightDelivery = 'expense::shipping-freight-delivery', LiabilityDeferredTaxLiabilities = 'liability::deferred-tax-liabilities', ExpenseTravelMeals = 'expense::travel-meals', RevenueRevenueGeneral = 'revenue::revenue-general', ExpenseRepairMaintenance = 'expense::repair-maintenance', ExpenseGlobalTaxExpense = 'expense::global-tax-expense', ExpenseTaxesPaid = 'expense::taxes-paid', AssetLoansToOfficers = 'asset::loans-to-officers', EquityCapitalReserves = 'equity::capital-reserves', ExpenseInsurance = 'expense::insurance', AssetAssetsInCourseOfConstruction = 'asset::assets-in-course-of-construction', LiabilityLongTermDebit = 'liability::long-term-debit', EquityPartnerContributions = 'equity::partner-contributions', EquityRetainedEarnings = 'equity::retained-earnings', AssetLand = 'asset::land', ExpenseEquipmentRental = 'expense::equipment-rental', CostOfGoodsSoldSuppliesMaterialsCogs = 'cost-of-goods-sold::supplies-materials-cogs', AssetGoodwill = 'asset::goodwill', ExpenseBadDebts = 'expense::bad-debts', OtherCurrentLiabilitySocialSecurityAgencies = 'other-current-liability::social-security-agencies', ExpenseProjectStudiesSurveysAssessments = 'expense::project-studies-surveys-assessments', AssetEmployeeCashAdvances = 'asset::employee-cash-advances', AssetOtherEarMarkedBankAccounts = 'asset::other-ear-marked-bank-accounts', EquityOpeningBalanceEquity = 'equity::opening-balance-equity', AssetFixedAssetSoftware = 'asset::fixed-asset-software', EquityEstimatedTaxes = 'equity::estimated-taxes', EquityFunds = 'equity::funds', OtherCurrentLiabilityGlobalTaxPayable = 'other-current-liability::global-tax-payable', OtherCurrentLiabilityProvisionForWarrantyObligations = 'other-current-liability::provision-for-warranty-obligations', RevenueOwnWorkCapitalized = 'revenue::own-work-capitalized', EquityMoneyReceivedAgainstShareWarrants = 'equity::money-received-against-share-warrants', LiabilityLiabilitiesRelatedToAssetsHeldForSale = 'liability::liabilities-related-to-assets-held-for-sale', AssetLandAsset = 'asset::land-asset', AssetInvestmentUsGovernmentObligations = 'asset::investment-us-government-obligations', OtherCurrentLiabilityTradeAndOtherPayables = 'other-current-liability::trade-and-other-payables', ExpenseTravelExpensesSellingExpense = 'expense::travel-expenses-selling-expense', ExpenseIncomeTaxExpense = 'expense::income-tax-expense', RevenueSavingsByTaxScheme = 'revenue::savings-by-tax-scheme', CostOfGoodsSoldFreightAndDeliveryCost = 'cost-of-goods-sold::freight-and-delivery-cost', RevenueSalesRetail = 'revenue::sales-retail', ExpenseCostOfLabor = 'expense::cost-of-labor', ExpensePurchasesRebates = 'expense::purchases-rebates', AssetSavings = 'asset::savings', EquityPreferredStock = 'equity::preferred-stock', ExpenseInterestPaid = 'expense::interest-paid', EquityPartnerDistributions = 'equity::partner-distributions', LiabilityProvisionsNonCurrentLiabilities = 'liability::provisions-non-current-liabilities', AssetAccumulatedDepletion = 'asset::accumulated-depletion', OtherExpenseAmortization = 'other-expense::amortization', AssetTrustAccounts = 'asset::trust-accounts', AssetLongTermLoansAndAdvancesToRelatedParties = 'asset::long-term-loans-and-advances-to-related-parties', EquityHealthcare = 'equity::healthcare', ExpenseDuesSubscriptions = 'expense::dues-subscriptions', OtherExpenseVehicle = 'other-expense::vehicle', OtherExpenseExceptionalItems = 'other-expense::exceptional-items', EquityOtherFreeReserves = 'equity::other-free-reserves', ExpenseExternalServices = 'expense::external-services', OtherExpenseVehicleLoan = 'other-expense::vehicle-loan', EquityPersonalExpense = 'equity::personal-expense', EquityPartnersEquity = 'equity::partners-equity', OtherExpenseVehicleLoanInterest = 'other-expense::vehicle-loan-interest', EquityEquityInEarningsOfSubsidiuaries = 'equity::equity-in-earnings-of-subsidiuaries', OtherIncomeDividendIncome = 'other-income::dividend-income', AssetCapitalWip = 'asset::capital-wip', ExpenseBankCharges = 'expense::bank-charges', OtherExpenseTaxRoundoffGainOrLoss = 'other-expense::tax-roundoff-gain-or-loss', OtherExpense = 'other-expense', ExpenseOfficeExpenses = 'expense::office-expenses', OtherExpenseHomeOwnerRentalInsurance = 'other-expense::home-owner-rental-insurance', AssetChecking = 'asset::checking', ExpenseOtherBusinessExpenses = 'expense::other-business-expenses', ExpenseEntertainment = 'expense::entertainment', AssetUndepositedFunds = 'asset::undeposited-funds', EquityShareApplicationMoneyPendingAllotment = 'equity::share-application-money-pending-allotment', LiabilityGovernmentAndOtherPublicAuthorities = 'liability::government-and-other-public-authorities', AssetMoneyMarket = 'asset::money-market', OtherCurrentLiabilityInterestPayables = 'other-current-liability::interest-payables', ExpenseBorrowingCost = 'expense::borrowing-cost', ExpenseCharitableContributions = 'expense::charitable-contributions', EquityAccumulatedAdjustment = 'equity::accumulated-adjustment', OtherCurrentLiabilityStaffAndRelatedLiabilityAccounts = 'other-current-liability::staff-and-related-liability-accounts', ExpenseLegalProfessionalFees = 'expense::legal-professional-fees', OtherExpenseDepletion = 'other-expense::depletion', RevenueSalesWholesale = 'revenue::sales-wholesale', OtherIncomeGainLossOnSaleOfFixedAssets = 'other-income::gain-loss-on-sale-of-fixed-assets', AssetPrepaidExpenses = 'asset::prepaid-expenses', ExpenseOtherCurrentOperatingCharges = 'expense::other-current-operating-charges', OtherExpensePriorPeriodItems = 'other-expense::prior-period-items', AssetRentsHeldInTrust = 'asset::rents-held-in-trust', AssetCalledUpShareCapitalNotPaid = 'asset::called-up-share-capital-not-paid', AssetVehicles = 'asset::vehicles', OtherExpenseExtraordinaryItems = 'other-expense::extraordinary-items', ExpenseOtherRentalCosts = 'expense::other-rental-costs', OtherCurrentLiabilityLoanPayable = 'other-current-liability::loan-payable', AssetOtherAsset = 'asset::other-asset', AssetAssetsAvailableForSale = 'asset::assets-available-for-sale', AssetTradeAndOtherReceivables = 'asset::trade-and-other-receivables', ExpenseRentOrLeaseOfBuildings = 'expense::rent-or-lease-of-buildings', OtherIncomeTaxExemptInterest = 'other-income::tax-exempt-interest', OtherIncomeLossOnDisposalOfAssets = 'other-income::loss-on-disposal-of-assets', EquityAccumulatedOtherComprehensiveIncome = 'equity::accumulated-other-comprehensive-income', AssetOtherLongTermInvestments = 'asset::other-long-term-investments', AssetOtherCurrentAsset = 'asset::other-current-asset', OtherExpenseOtherMiscellaneousExpense = 'other-expense::other-miscellaneous-expense', LiabilityOutstandingDuesMicroSmallEnterprise = 'liability::outstanding-dues-micro-small-enterprise', EquityShareCapital = 'equity::share-capital', AssetFixedAssetPhone = 'asset::fixed-asset-phone', OtherCurrentLiabilityPayrollClearing = 'other-current-liability::payroll-clearing', RevenueOperatingGrants = 'revenue::operating-grants', OtherIncomeGainLossOnSaleOfInvestments = 'other-income::gain-loss-on-sale-of-investments', Equity = 'equity', ExpenseFinanceCosts = 'expense::finance-costs', CostOfGoodsSoldOtherCostsOfServiceCos = 'cost-of-goods-sold::other-costs-of-service-cos', LiabilityAccruedLongTermLiabilities = 'liability::accrued-long-term-liabilities', OtherCurrentLiabilityCurrentTaxLiability = 'other-current-liability::current-tax-liability', AssetLoansToOthers = 'asset::loans-to-others', AssetLeaseholdImprovements = 'asset::leasehold-improvements', EquityInvestmentGrants = 'equity::investment-grants', AssetInvestmentMortgageRealEstateLoans = 'asset::investment-mortgage-real-estate-loans', LiabilityShareholderNotesPayable = 'liability::shareholder-notes-payable', OtherExpenseParkingAndTolls = 'other-expense::parking-and-tolls', AssetRetainage = 'asset::retainage', EquityTreasuryStock = 'equity::treasury-stock', OtherExpenseWashAndRoadServices = 'other-expense::wash-and-road-services', AssetBuildings = 'asset::buildings', LiabilityOtherLongTermProvisions = 'liability::other-long-term-provisions', AssetOtherLongTermAssets = 'asset::other-long-term-assets', ExpenseAmortizationExpense = 'expense::amortization-expense', CostOfGoodsSoldCostOfSales = 'cost-of-goods-sold::cost-of-sales' }
export const enum MessageReadStatus { Read = 'read', Delivered = 'delivered', Unsent = 'unsent', Sent = 'sent', Failed = 'failed' }
export const enum MessageContentType { Gif = 'gif', Link = 'link', Html = 'html', Video = 'video', Sticker = 'sticker', Voice = 'voice', Audio = 'audio', Image = 'image', File = 'file', Location = 'location', Contact = 'contact', Text = 'text', Document = 'document' }
export const enum MessageDeliveryStatus { Read = 'read', Sent = 'sent', Failed = 'failed', Undeliverable = 'undeliverable', Delivered = 'delivered', Error = 'error', Pending = 'pending' }
export const enum ReactionType { Dislike = 'dislike', Laugh = 'laugh', Angry = 'angry', Love = 'love', Bookmark = 'bookmark', Sad = 'sad', Wow = 'wow', Like = 'like', Interested = 'interested' }
export const enum SupportTicketPriority { High = 'high', Medium = 'medium', Low = 'low', Urgent = 'urgent', Immediate = 'immediate' }
export const enum IssueLifecycleStatus { OnHold = 'on-hold', Resolved = 'resolved', Open = 'open', Pending = 'pending', InProgress = 'in-progress', Waiting = 'waiting', Cancelled = 'cancelled', Closed = 'closed' }
export const enum SupportQueryType { Feedback = 'feedback', Question = 'question', Problem = 'problem', Incident = 'incident', Bug = 'bug', FeatureRequest = 'feature-request', Task = 'task' }
export const enum OrderStatus { Completed = 'completed', Confirmed = 'confirmed', Pending = 'pending', Returned = 'returned', Cancelled = 'cancelled', Failed = 'failed', Abandoned = 'abandoned', Draft = 'draft', AwaitingShipment = 'awaiting-shipment', OnHold = 'on-hold', AwaitingPickup = 'awaiting-pickup', Delivered = 'delivered', AwaitingPayment = 'awaiting-payment', Processing = 'processing', Disputed = 'disputed', PartiallyFulfilled = 'partially-fulfilled', Refunded = 'refunded', Shipped = 'shipped' }
export const enum DiscountType { FixedAmount = 'fixed-amount', VariableAmount = 'variable-amount', TieredDiscount = 'tiered-discount', VariablePercentage = 'variable-percentage', Percentage = 'percentage', BuyOneGetOne = 'buy-one-get-one', ConditionalDiscount = 'conditional-discount', UnknownDiscount = 'unknown-discount' }
export const enum ImageMimeType { ImageTiff = 'image/tiff', ImagePng = 'image/png', ImageSvgXml = 'image/svg+xml', ImageGif = 'image/gif', ImageHeic = 'image/heic', ImageJpeg = 'image/jpeg', ImageWebp = 'image/webp', ImageBmp = 'image/bmp' }
export const enum FulfillmentStatus { Delivered = 'delivered', Cancelled = 'cancelled', Returned = 'returned', Pending = 'pending', InTransit = 'in-transit', Failure = 'failure' }
export const enum OrderingCriteria { Alphabetical = 'alphabetical', PriceAscending = 'price-ascending', Relevance = 'relevance', CreationDate = 'creation-date', Manual = 'manual', Popularity = 'popularity', PriceDescending = 'price-descending', Rating = 'rating' }
export const enum ChatType { Private = 'private', Group = 'group', Public = 'public' }
export const enum ProductAvailabilityStatus { BackOrder = 'back-order', PreOrder = 'pre-order', Discontinued = 'discontinued', OutOfStock = 'out-of-stock', InStock = 'in-stock' }
export const enum ExpenseApprovalStatus { Pending = 'pending', Cancelled = 'cancelled', Processed = 'processed', Approved = 'approved', Reimbursed = 'reimbursed', Denied = 'denied', New = 'new', Reviewing = 'reviewing' }
export const enum FinancialChargeType { ProcessingFee = 'processing-fee', Other = 'other', Commission = 'commission', LateFee = 'late-fee', TransactionFee = 'transaction-fee', InterestCharge = 'interest-charge', ServiceCharge = 'service-charge' }
export const enum ItemAvailabilityStatus { Inactive = 'inactive', Discontinued = 'discontinued', Active = 'active', OutOfStock = 'out-of-stock' }
export const enum BillingStatus { Paid = 'paid', Overdue = 'overdue', PartiallyPaid = 'partially-paid', Submitted = 'submitted', Authorised = 'authorised', Unpaid = 'unpaid', Voided = 'voided', Deleted = 'deleted', Draft = 'draft', Pending = 'pending' }
export const enum FinancialAccountStatus { UnderReview = 'under-review', Delinquent = 'delinquent', Frozen = 'frozen', Active = 'active', Closed = 'closed', Suspended = 'suspended', Inactive = 'inactive' }
export const enum TransactionStatus { Failed = 'failed', Pending = 'pending', Cancelled = 'cancelled', Succeeded = 'succeeded', InProgress = 'in-progress', Error = 'error', Initiated = 'initiated' }
export const enum InvoiceAdjustmentType { Tip = 'tip', Other = 'other', Tax = 'tax', Discount = 'discount', Shipping = 'shipping' }
export const enum DataType { Timestamp = 'timestamp', String = 'string', Date = 'date', Undefined = 'undefined', Binary = 'binary', Null = 'null', Json = 'json', Custom = 'custom', Array = 'array', Boolean = 'boolean', Object = 'object', Number = 'number' }
export const enum EmploymentType { PartTime = 'part-time', Contract = 'contract', Volunteer = 'volunteer', Internship = 'internship', Permanent = 'permanent', Temporary = 'temporary', FullTime = 'full-time', Seasonal = 'seasonal', Freelance = 'freelance' }
export const enum TimeCycle { Biweekly = 'biweekly', Triennially = 'triennially', Weekly = 'weekly', Hourly = 'hourly', Monthly = 'monthly', Biennially = 'biennially', Daily = 'daily', SemiMonthly = 'semi-monthly', AdHoc = 'ad-hoc', Custom = 'custom', Quarterly = 'quarterly', Minutely = 'minutely', Annually = 'annually', Secondly = 'secondly', SemiAnnually = 'semi-annually' }
export const enum FinancialTrackingCategories { CostCenter = 'cost-center', Division = 'division', Vendor = 'vendor', Other = 'other', Location = 'location', Product = 'product', Customer = 'customer', None = 'none', Employee = 'employee', Service = 'service', Department = 'department', Class = 'class', Project = 'project' }
export const enum CreditNoteStatus { Cancelled = 'cancelled', Applied = 'applied', Disputed = 'disputed', Pending = 'pending', Draft = 'draft', Void = 'void', Issued = 'issued', Completed = 'completed', Revised = 'revised' }
export const enum PaymentTerm { Prepaid = 'prepaid', DeferredPayment = 'deferred-payment', Net60 = 'net-60', Net30 = 'net-30', Custom = 'custom', DueOnReceipt = 'due-on-receipt', CashBeforeShipment = 'cash-before-shipment', CashInAdvance = 'cash-in-advance', Net = 'net', DueEndOfMonth = 'due-end-of-month', CashOnDelivery = 'cash-on-delivery', UponCompletion = 'upon-completion', Net90 = 'net-90', Prepayment = 'prepayment', CashWithOrder = 'cash-with-order', Installment = 'installment' }
export const enum EmploymentAndCandidateStatus { Inactive = 'inactive', OfferExtended = 'offer-extended', Terminated = 'terminated', Hired = 'hired', OnLeave = 'on-leave', New = 'new', InReview = 'in-review', NotSelected = 'not-selected', Interviewing = 'interviewing', Active = 'active', Other = 'other' }
export const enum OrganizationalRole { Admin = 'admin', Employee = 'employee', Contractor = 'contractor', Other = 'other', Supervisor = 'supervisor', Director = 'director', Manager = 'manager' }
export const enum CampaignType { SearchEngine = 'search-engine', SocialMedia = 'social-media', Display = 'display', Other = 'other', Email = 'email' }
export const enum ContactAddressType { Personal = 'personal', Other = 'other', Shipping = 'shipping', Billing = 'billing', Temporary = 'temporary', Work = 'work', Business = 'business', Home = 'home' }
export const enum CustomerStatus { Inactive = 'inactive', Active = 'active', Archived = 'archived', Pending = 'pending', Suspended = 'suspended' }
export const enum SocialPlatform { Pinterest = 'pinterest', Facebook = 'facebook', Youtube = 'youtube', Reddit = 'reddit', Instagram = 'instagram', Snapchat = 'snapchat', Tumblr = 'tumblr', Twitter = 'twitter', Skype = 'skype', OtherSocialPlatform = 'other-social-platform', Tiktok = 'tiktok', X = 'x', Linkedin = 'linkedin' }
export const enum LeadLifecycleStatus { BadTiming = 'bad-timing', Revisited = 'revisited', New = 'new', Converted = 'converted', Unqualified = 'unqualified', Connected = 'connected', Lost = 'lost', InProcess = 'in-process', Open = 'open', AttemptedToContact = 'attempted-to-contact' }
export const enum ConversationStatus { Active = 'active', Archived = 'archived', Snoozed = 'snoozed', Deleted = 'deleted', Closed = 'closed' }
export const enum CommunicationRole { Service = 'service', Assistant = 'assistant', Group = 'group', Admin = 'admin', Guest = 'guest', Bot = 'bot', Member = 'member', System = 'system', Owner = 'owner', User = 'user', Channel = 'channel', Moderator = 'moderator' }
export const enum ParticipantEngagementStatus { Left = 'left', Active = 'active', Banned = 'banned', Inactive = 'inactive', Moderator = 'moderator', Guest = 'guest', Admin = 'admin' }
export const enum ItemEntityStatus { Suspended = 'suspended', Deleted = 'deleted', Completed = 'completed', Inactive = 'inactive', Archived = 'archived', Active = 'active', Pending = 'pending' }
export const enum Currency { RUB = 'rub', AFN = 'afn', ALL = 'all', XCD = 'xcd', BDT = 'bdt', HUF = 'huf', BBD = 'bbd', KYD = 'kyd', ARS = 'ars', SCR = 'scr', CRC = 'crc', KWD = 'kwd', HTG = 'htg', PYG = 'pyg', IRR = 'irr', HKD = 'hkd', KRW = 'krw', RWF = 'rwf', XPF = 'xpf', YER = 'yer', DKK = 'dkk', NGN = 'ngn', MUR = 'mur', NAD = 'nad', IQD = 'iqd', ERN = 'ern', NZD = 'nzd', BIF = 'bif', PGK = 'pgk', TZS = 'tzs', JOD = 'jod', MAD = 'mad', LYD = 'lyd', MMK = 'mmk', CDF = 'cdf', BTN = 'btn', TND = 'tnd', XAF = 'xaf', BYN = 'byn', MVR = 'mvr', BRL = 'brl', GYD = 'gyd', DJF = 'djf', GMD = 'gmd', BAM = 'bam', MGA = 'mga', PLN = 'pln', TOP = 'top', TRY = 'try', UZS = 'uzs', KID = 'kid', KZT = 'kzt', TTD = 'ttd', CUP = 'cup', EUR = 'eur', JEP = 'jep', THB = 'thb', GBP = 'gbp', SZL = 'szl', GIP = 'gip', AMD = 'amd', UYU = 'uyu', PKR = 'pkr', BWP = 'bwp', TWD = 'twd', CUC = 'cuc', NPR = 'npr', NIO = 'nio', GNF = 'gnf', JPY = 'jpy', TMT = 'tmt', SOS = 'sos', PEN = 'pen', AOA = 'aoa', EGP = 'egp', DOP = 'dop', CZK = 'czk', BMD = 'bmd', KGS = 'kgs', VND = 'vnd', UGX = 'ugx', KHR = 'khr', LAK = 'lak', CNY = 'cny', IDR = 'idr', LKR = 'lkr', MRU = 'mru', NOK = 'nok', SGD = 'sgd', MNT = 'mnt', WST = 'wst', BSD = 'bsd', KMF = 'kmf', ETB = 'etb', SYP = 'syp', MZN = 'mzn', VES = 'ves', ZAR = 'zar', INR = 'inr', ILS = 'ils', AWG = 'awg', MYR = 'myr', CVE = 'cve', MDL = 'mdl', SRD = 'srd', ZWL = 'zwl', SBD = 'sbd', KES = 'kes', TJS = 'tjs', CHF = 'chf', COP = 'cop', FJD = 'fjd', LBP = 'lbp', PAB = 'pab', XDR = 'xdr', AED = 'aed', RSD = 'rsd', SLL = 'sll', BHD = 'bhd', ANG = 'ang', GTQ = 'gtq', FOK = 'fok', CLP = 'clp', OMR = 'omr', ISK = 'isk', PHP = 'php', CAD = 'cad', GEL = 'gel', HNL = 'hnl', BOB = 'bob', UAH = 'uah', MWK = 'mwk', IMP = 'imp', DZD = 'dzd', GHS = 'ghs', SHP = 'shp', SSP = 'ssp', STN = 'stn', VUV = 'vuv', ZMW = 'zmw', SDG = 'sdg', USD = 'usd', AUD = 'aud', BND = 'bnd', JMD = 'jmd', RON = 'ron', SEK = 'sek', MKD = 'mkd', MOP = 'mop', BZD = 'bzd', FKP = 'fkp', AZN = 'azn', KPW = 'kpw', BGN = 'bgn', LRD = 'lrd', LSL = 'lsl', SAR = 'sar', TVD = 'tvd', XOF = 'xof', GGP = 'ggp', MXN = 'mxn', QAR = 'qar', HRK = 'hrk' }
export const enum CustomerEligibilityStatus { VipCustomers = 'vip-customers', AllCustomers = 'all-customers', NewCustomers = 'new-customers', SpecificConditions = 'specific-conditions', Other = 'other', ReturningCustomers = 'returning-customers' }
export const enum LifecycleStatus { Active = 'active', Suspended = 'suspended', Cancelled = 'cancelled', Expired = 'expired', Redeemed = 'redeemed', Issued = 'issued' }
export const enum PaymentMethod { MobilePayment = 'mobile-payment', CashOnDelivery = 'cash-on-delivery', CreditCard = 'credit-card', MobileWallet = 'mobile-wallet', DebitCard = 'debit-card', Paypal = 'paypal', Cash = 'cash', BankTransfer = 'bank-transfer', Other = 'other', Check = 'check', Cryptocurrency = 'cryptocurrency' }
export const enum FinancialTransactionStatus { Failed = 'failed', Refunded = 'refunded', Authorized = 'authorized', Disputed = 'disputed', Cleared = 'cleared', Cancelled = 'cancelled', Pending = 'pending', SettlementInProgress = 'settlement-in-progress' }
export const enum AuditOpinionType { Unqualified = 'unqualified', Qualified = 'qualified', Disclaimer = 'disclaimer', Adverse = 'adverse' }
export const enum InventoryStorageType { DropShipper = 'drop-shipper', OnlineMarketplace = 'online-marketplace', Other = 'other', DistributionCenter = 'distribution-center', Consignment = 'consignment', RetailStore = 'retail-store', Warehouse = 'warehouse' }
export const enum ItemCondition { Used = 'used', OpenBox = 'open-box', LikeNew = 'like-new', Damaged = 'damaged', Refurbished = 'refurbished', New = 'new' }
export const enum TransactionType { Withdrawal = 'withdrawal', Adjustment = 'adjustment', Fee = 'fee', Deposit = 'deposit', Charge = 'charge', Refund = 'refund', Payment = 'payment', Transfer = 'transfer' }
export const enum VisibilityScope { Internal = 'internal', Global = 'global', Private = 'private', Web = 'web', App = 'app' }
export const enum PaymentStatus { Failed = 'failed', Submitted = 'submitted', Draft = 'draft', Voided = 'voided', Error = 'error', Adjusted = 'adjusted', Paid = 'paid', Processing = 'processing', PartiallyRefunded = 'partially-refunded', Cancelled = 'cancelled', Overdue = 'overdue', Refunded = 'refunded', Pending = 'pending', Disputed = 'disputed', Succeeded = 'succeeded', Deleted = 'deleted', Partial = 'partial', Authorized = 'authorized' }
export const enum EntityLifecycleStatus { Scheduled = 'scheduled', Active = 'active', Preorder = 'preorder', Draft = 'draft', Deleted = 'deleted', Archived = 'archived', Inactive = 'inactive' }
export const enum TransactionChannel { InPerson = 'in-person', Atm = 'atm', Mobile = 'mobile', Other = 'other', Online = 'online', BankBranch = 'bank-branch', Mail = 'mail', Telephone = 'telephone' }
export const enum FinancialDisputeStatus { NeedsResponse = 'needs-response', Closed = 'closed', Lost = 'lost', Escalated = 'escalated', UnderReview = 'under-review', ChargeRefunded = 'charge-refunded', AwaitingEvidence = 'awaiting-evidence', Won = 'won' }
export const enum ContentVisibility { Private = 'private', Shared = 'shared', Protected = 'protected', Internal = 'internal', Public = 'public' }
export const enum DeviceUsageType { Educational = 'educational', Personal = 'personal', Home = 'home', Other = 'other', Business = 'business', Industrial = 'industrial', Healthcare = 'healthcare' }
export const enum EntityCategory { User = 'user', Event = 'event', Person = 'person', Other = 'other', Link = 'link', Message = 'message', Document = 'document', Task = 'task', Project = 'project', Owner = 'owner' }
export const enum GenderIdentity { Male = 'male', PreferNotToSay = 'prefer-not-to-say', Other = 'other', Female = 'female' }
export const enum CommunicationMethod { Email = 'email', SocialMedia = 'social-media', Other = 'other', Text = 'text', Phone = 'phone', Sms = 'sms', VideoCall = 'video-call', Mail = 'mail', PushNotification = 'push-notification', InstantMessage = 'instant-message', InPerson = 'in-person' }
export const enum FinancialTransactionType { Withdrawal = 'withdrawal', Transfer = 'transfer', Refund = 'refund', Charge = 'charge', Receive = 'receive', Other = 'other', Fee = 'fee', Payment = 'payment', Chargeback = 'chargeback', Spend = 'spend', ReceiveOverpayment = 'receive-overpayment', Dividend = 'dividend', Sale = 'sale', ReceivePrepayment = 'receive-prepayment', Adjustment = 'adjustment', SpendOverpayment = 'spend-overpayment', SpendPrepayment = 'spend-prepayment', Interest = 'interest', Deposit = 'deposit' }
export const enum EmailCategoryType { Personal = 'personal', Educational = 'educational', Promotional = 'promotional', Spam = 'spam', Transactional = 'transactional', Governmental = 'governmental', Business = 'business', Other = 'other' }
export const enum UniversalIdentifierType { Email = 'email', Number = 'number', Uuid = 'uuid', Url = 'url', String = 'string' }
export const enum AccessControlModel { Custom = 'custom', Dac = 'dac', Mac = 'mac', None = 'none', Abac = 'abac', Rbac = 'rbac' }
export const enum ParticipantType { User = 'user', Organization = 'organization', Group = 'group', ExternalParticipant = 'external-participant', Team = 'team' }
export const enum PriorityLevel { High = 'high', Low = 'low', Medium = 'medium', Urgent = 'urgent', Elevated = 'elevated' }
export const enum TaskStatus { Todo = 'todo', Cancelled = 'cancelled', Blocked = 'blocked', Done = 'done', OnHold = 'on-hold', InProgress = 'in-progress' }
export const enum UserStatus { Archived = 'archived', Inactive = 'inactive', Deleted = 'deleted', Verified = 'verified', Suspended = 'suspended', Pending = 'pending', Active = 'active', WaitListed = 'wait-listed', Banned = 'banned' }
export const enum PromotionType { BuyOneGetOne = 'buy-one-get-one', FixedAmount = 'fixed-amount', RewardPoints = 'reward-points', FreeShipping = 'free-shipping', Other = 'other', Percentage = 'percentage' }
export const enum MimeType { ImageSvgXml = 'image/svg+xml', ImageWebp = 'image/webp', ImageGif = 'image/gif', ImagePng = 'image/png', ImageJpeg = 'image/jpeg' }
export const enum PrerequisiteRangeType { Subtotal = 'subtotal', Quantity = 'quantity', ShippingPrice = 'shipping-price' }
export const enum TaxType { Additive = 'additive', Inclusive = 'inclusive', Variable = 'variable' }
export const enum ModifierType { List = 'list', Text = 'text' }
export const enum CardType { UnknownCard = 'unknown-card', Debit = 'debit', Credit = 'credit' }
export const enum PrepaidType { Prepaid = 'prepaid', UnknownPrepaid = 'unknown-prepaid', NotPrepaid = 'not-prepaid' }
export const enum EntryMethod { OnFile = 'on-file', Contactless = 'contactless', Emv = 'emv', Keyed = 'keyed', Swiped = 'swiped' }
export const enum CvvStatus { Accepted = 'accepted', Rejected = 'rejected', NotChecked = 'not-checked' }
export const enum AvcStatus { NotChecked = 'not-checked', Rejected = 'rejected', Accepted = 'accepted' }
export const enum CreditType { Overpayment = 'overpayment', Goodwill = 'goodwill', Customer = 'customer', Prepayment = 'prepayment', Supplier = 'supplier' }
export const enum CallDirection { Conference = 'conference', Inbound = 'inbound', Unknown = 'unknown', Outbound = 'outbound' }
export const enum SpeakerRole { Attendee = 'attendee', Invitee = 'invitee' }
export const enum FileType { Folder = 'folder', File = 'file', Url = 'url' }
export const enum AiToolChoiceType { Tool = 'tool', Any = 'any', Auto = 'auto', None = 'none' }
export const enum ImageType { Base64 = 'base64' }
export const enum ResponseFormatType { JsonSchema = 'json-schema', Text = 'text', JsonObject = 'json-object' }
export const enum ToolCallType { Function = 'function' }
export const enum AiMessagesContentType { ToolUse = 'tool-use', ToolResult = 'tool-result', Image = 'image', Text = 'text' }
export const enum AiRole { Tool = 'tool', User = 'user', Assistant = 'assistant' }
export const enum JsonSchemaType { Function = 'function' }
export const enum EventStatus { Cancelled = 'cancelled', Confirmed = 'confirmed', Tentative = 'tentative' }
export const enum EventVisibility { Confidential = 'confidential', Public = 'public', Private = 'private' }
export const enum EventReminderAction { Email = 'email', Popup = 'popup' }
export const enum EventRuleType { ExcludeDates = 'exclude-dates', Exclude = 'exclude', Repeat = 'repeat', AddDates = 'add-dates' }
export const enum EventFrequency { Monthly = 'monthly', Daily = 'daily', Weekly = 'weekly', Yearly = 'yearly' }
