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
export interface Transactions { foreignCurrency?: CurrencyDetails;
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
    applicationFee?: number }
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
export const enum Gender { Other = 'other', Male = 'male', Female = 'female', PreferNotToSay = 'prefer not to say' }
export const enum ChannelAvailability { Online = 'online', InStore = 'in-store', InApp = 'in-app', AllChannels = 'all-channels' }
export const enum MinimumRequirements { MinimumQuantityOfItems = 'minimum-quantity-of-items', None = 'none', MinimumPurchaseAmount = 'minimum-purchase-amount' }
export const enum AppliesTo { SpecificItems = 'specific-items', SpecificCategories = 'specific-categories', AllItems = 'all-items' }
export const enum CustomerEligibility { SpecificCustomerGroups = 'specific-customer-groups', SpecificCustomers = 'specific-customers', All = 'all' }
export const enum AccountType { AssetInvestmentUsGovernmentObligations = 'asset::investment-us-government-obligations', AssetLandAsset = 'asset::land-asset', ExpenseTravelExpensesSellingExpense = 'expense::travel-expenses-selling-expense', AssetInvestments = 'asset::investments', AssetVehicles = 'asset::vehicles', Income = 'income', AssetDepletableAssets = 'asset::depletable-assets', EquityOwnersEquity = 'equity::owners-equity', ExpenseEntertainmentMeals = 'expense::entertainment-meals', LiabilityAccruedVacationPayable = 'liability::accrued-vacation-payable', AssetCapitalWip = 'asset::capital-wip', OtherExpenseAmortization = 'other-expense::amortization', AssetProvisionsCurrentAssets = 'asset::provisions-current-assets', AssetTradeAndOtherReceivables = 'asset::trade-and-other-receivables', Asset = 'asset', AssetOtherLongTermInvestments = 'asset::other-long-term-investments', AssetEmployeeCashAdvances = 'asset::employee-cash-advances', ExpenseTaxesPaid = 'expense::taxes-paid', OtherCurrentLiabilityOtherCurrentLiabilities = 'other-current-liability::other-current-liabilities', EquityAccumulatedOtherComprehensiveIncome = 'equity::accumulated-other-comprehensive-income', RevenueServiceFeeIncome = 'revenue::service-fee-income', ExpenseDistributionCosts = 'expense::distribution-costs', OtherExpenseOtherVehicleExpenses = 'other-expense::other-vehicle-expenses', OtherCurrentLiabilityProvisionsCurrentLiabilities = 'other-current-liability::provisions-current-liabilities', OtherExpenseVehicleLease = 'other-expense::vehicle-lease', OtherExpensePriorPeriodItems = 'other-expense::prior-period-items', OtherIncomeGainLossOnSaleOfFixedAssets = 'other-income::gain-loss-on-sale-of-fixed-assets', RevenueIncome = 'revenue::income', EquityAccumulatedAdjustment = 'equity::accumulated-adjustment', AssetBank = 'asset::bank', EquityOpeningBalanceEquity = 'equity::opening-balance-equity', OtherExpenseTaxRoundoffGainOrLoss = 'other-expense::tax-roundoff-gain-or-loss', AssetMoneyMarket = 'asset::money-market', EquityMoneyReceivedAgainstShareWarrants = 'equity::money-received-against-share-warrants', AssetIntangibleAssets = 'asset::intangible-assets', RevenueRevenueGeneral = 'revenue::revenue-general', AssetLand = 'asset::land', EquityShareCapital = 'equity::share-capital', OtherCurrentLiabilityRentsInTrustLiability = 'other-current-liability::rents-in-trust-liability', EquityDividendDisbursed = 'equity::dividend-disbursed', OtherExpenseRentAndLease = 'other-expense::rent-and-lease', OtherExpenseHomeOffice = 'other-expense::home-office', OtherExpenseUtilities = 'other-expense::utilities', OtherCurrentLiabilitySocialSecurityAgencies = 'other-current-liability::social-security-agencies', RevenueSavingsByTaxScheme = 'revenue::savings-by-tax-scheme', AssetPrepaidExpenses = 'asset::prepaid-expenses', EquityPartnerDistributions = 'equity::partner-distributions', LiabilityStaffAndRelatedLongTermLiabilityAccounts = 'liability::staff-and-related-long-term-liability-accounts', AssetGlobalTaxRefund = 'asset::global-tax-refund', RevenueSalesOfProductIncome = 'revenue::sales-of-product-income', RevenueOtherPrimaryIncome = 'revenue::other-primary-income', AssetTrustAccounts = 'asset::trust-accounts', ExpenseOfficeGeneralAdministrativeExpenses = 'expense::office-general-administrative-expenses', LiabilityShareholderNotesPayable = 'liability::shareholder-notes-payable', OtherCurrentLiabilityLineOfCredit = 'other-current-liability::line-of-credit', LiabilityProvisionForLiabilities = 'liability::provision-for-liabilities', ExpenseLegalProfessionalFees = 'expense::legal-professional-fees', ExpenseOfficeExpenses = 'expense::office-expenses', ExpenseAuto = 'expense::auto', OtherCurrentLiabilitySalesTaxPayable = 'other-current-liability::sales-tax-payable', ExpenseUnappliedCashBillPaymentExpense = 'expense::unapplied-cash-bill-payment-expense', EquityRetainedEarnings = 'equity::retained-earnings', ExpenseCharitableContributions = 'expense::charitable-contributions', LiabilityGovernmentAndOtherPublicAuthorities = 'liability::government-and-other-public-authorities', OtherIncome = 'other-income', ExpenseIncomeTaxExpense = 'expense::income-tax-expense', AssetFixedAssetFurniture = 'asset::fixed-asset-furniture', AssetLongTermInvestments = 'asset::long-term-investments', OtherIncomeUnrealisedLossOnSecuritiesNetOfTax = 'other-income::unrealised-loss-on-securities-net-of-tax', LiabilityAccruedLongTermLiabilities = 'liability::accrued-long-term-liabilities', OtherCurrentLiabilityStateLocalIncomeTaxPayable = 'other-current-liability::state-local-income-tax-payable', ExpenseCostOfLabor = 'expense::cost-of-labor', OtherExpenseWashAndRoadServices = 'other-expense::wash-and-road-services', OtherExpenseDepletion = 'other-expense::depletion', AssetAllowanceForBadDebts = 'asset::allowance-for-bad-debts', ExpenseStaffCosts = 'expense::staff-costs', OtherIncomeOtherOperatingIncome = 'other-income::other-operating-income', LiabilityBankLoans = 'liability::bank-loans', OtherCurrentLiabilityTradeAndOtherPayables = 'other-current-liability::trade-and-other-payables', OtherCurrentLiabilityTrustAccountsLiabilities = 'other-current-liability::trust-accounts-liabilities', CostOfGoodsSoldEquipmentRentalCos = 'cost-of-goods-sold::equipment-rental-cos', CostOfGoodsSoldSuppliesMaterialsCogs = 'cost-of-goods-sold::supplies-materials-cogs', ExpenseEntertainment = 'expense::entertainment', RevenueUnappliedCashPaymentIncome = 'revenue::unapplied-cash-payment-income', OtherExpenseOtherHomeOfficeExpenses = 'other-expense::other-home-office-expenses', AssetGoodwill = 'asset::goodwill', ExpenseEquipmentRental = 'expense::equipment-rental', OtherCurrentLiabilityCurrentTaxLiability = 'other-current-liability::current-tax-liability', AssetOrganizationalCosts = 'asset::organizational-costs', OtherCurrentLiabilityFederalIncomeTaxPayable = 'other-current-liability::federal-income-tax-payable', ExpenseAppropriationsToDepreciation = 'expense::appropriations-to-depreciation', OtherCurrentLiabilityGlobalTaxPayable = 'other-current-liability::global-tax-payable', AssetLeaseholdImprovements = 'asset::leasehold-improvements', AssetCalledUpShareCapitalNotPaid = 'asset::called-up-share-capital-not-paid', AssetOtherCurrentAssets = 'asset::other-current-assets', ExpenseOtherExternalServices = 'expense::other-external-services', AssetRetainage = 'asset::retainage', EquityOtherFreeReserves = 'equity::other-free-reserves', OtherExpenseMatCredit = 'other-expense::mat-credit', ExpenseOtherSellingExpenses = 'expense::other-selling-expenses', LiabilityOutstandingDuesOtherThanMicroSmallEnterprise = 'liability::outstanding-dues-other-than-micro-small-enterprise', OtherCurrentLiability = 'other-current-liability', EquityTreasuryStock = 'equity::treasury-stock', AssetFixedAsset = 'asset::fixed-asset', LiabilityAccountsPayable = 'liability::accounts-payable', OtherCurrentLiabilityCurrentLiabilities = 'other-current-liability::current-liabilities', OtherExpenseExtraordinaryItems = 'other-expense::extraordinary-items', OtherExpenseVehicleLoan = 'other-expense::vehicle-loan', ExpenseOtherMiscellaneousServiceCost = 'expense::other-miscellaneous-service-cost', OtherExpenseExceptionalItems = 'other-expense::exceptional-items', OtherExpenseVehicle = 'other-expense::vehicle', AssetParticipatingInterests = 'asset::participating-interests', Equity = 'equity', RevenueSalesWholesale = 'revenue::sales-wholesale', ExpenseDuesSubscriptions = 'expense::dues-subscriptions', OtherExpenseDeferredTaxExpense = 'other-expense::deferred-tax-expense', EquityShareApplicationMoneyPendingAllotment = 'equity::share-application-money-pending-allotment', AssetSavings = 'asset::savings', OtherExpenseVehicleLoanInterest = 'other-expense::vehicle-loan-interest', AssetOtherConsumables = 'asset::other-consumables', EquityEstimatedTaxes = 'equity::estimated-taxes', RevenueNonProfitIncome = 'revenue::non-profit-income', LiabilityGroupAndAssociates = 'liability::group-and-associates', EquityPaidInCapitalOrSurplus = 'equity::paid-in-capital-or-surplus', AssetLongTermLoansAndAdvancesToRelatedParties = 'asset::long-term-loans-and-advances-to-related-parties', LiabilityAccrualsAndDeferredIncome = 'liability::accruals-and-deferred-income', AssetFixedAssetCopiers = 'asset::fixed-asset-copiers', OtherCurrentLiabilityLoanPayable = 'other-current-liability::loan-payable', LiabilityNotesPayable = 'liability::notes-payable', ExpensePayrollExpenses = 'expense::payroll-expenses', AssetExpenditureAuthorisationsAndLettersOfCredit = 'asset::expenditure-authorisations-and-letters-of-credit', OtherCurrentLiabilityCurrentPortionEmployeeBenefitsObligations = 'other-current-liability::current-portion-employee-benefits-obligations', AssetLoansToOfficers = 'asset::loans-to-officers', LiabilityLiabilitiesRelatedToAssetsHeldForSale = 'liability::liabilities-related-to-assets-held-for-sale', AssetCashOnHand = 'asset::cash-on-hand', AssetInvestmentOther = 'asset::investment-other', AssetRentsHeldInTrust = 'asset::rents-held-in-trust', OtherCurrentLiabilityDutiesAndTaxes = 'other-current-liability::duties-and-taxes', OtherExpenseExchangeGainOrLoss = 'other-expense::exchange-gain-or-loss', AssetInventory = 'asset::inventory', AssetMachineryAndEquipment = 'asset::machinery-and-equipment', AssetOtherFixedAssets = 'asset::other-fixed-assets', ExpenseOtherCurrentOperatingCharges = 'expense::other-current-operating-charges', RevenueOwnWorkCapitalized = 'revenue::own-work-capitalized', LiabilityOutstandingDuesMicroSmallEnterprise = 'liability::outstanding-dues-micro-small-enterprise', AccountsReceivable = 'accounts-receivable', ExpenseBankCharges = 'expense::bank-charges', AssetBalWithGovtAuthorities = 'asset::bal-with-govt-authorities', Expense = 'expense', RevenueDiscountsRefundsGiven = 'revenue::discounts-refunds-given', OtherExpenseVehicleRepairs = 'other-expense::vehicle-repairs', RevenueCashReceiptIncome = 'revenue::cash-receipt-income', OtherIncomeTaxExemptInterest = 'other-income::tax-exempt-interest', AssetUndepositedFunds = 'asset::undeposited-funds', EquityCalledUpShareCapital = 'equity::called-up-share-capital', ExpenseBorrowingCost = 'expense::borrowing-cost', ExpenseCommissionsAndFees = 'expense::commissions-and-fees', ExpenseFinanceCosts = 'expense::finance-costs', EquityPartnerContributions = 'equity::partner-contributions', ExpenseLossOnDiscontinuedOperationsNetOfTax = 'expense::loss-on-discontinued-operations-net-of-tax', AssetInternalTransfers = 'asset::internal-transfers', AssetChecking = 'asset::checking', LiabilityProvisionsNonCurrentLiabilities = 'liability::provisions-non-current-liabilities', ExpenseAdvertisingPromotional = 'expense::advertising-promotional', ExpenseInsurance = 'expense::insurance', ExpenseOtherBusinessExpenses = 'expense::other-business-expenses', AssetDeferredTax = 'asset::deferred-tax', ExpenseShippingAndDeliveryExpense = 'expense::shipping-and-delivery-expense', OtherExpenseParkingAndTolls = 'other-expense::parking-and-tolls', ExpenseInterestPaid = 'expense::interest-paid', OtherIncomeDividendIncome = 'other-income::dividend-income', AssetProvisionsFixedAssets = 'asset::provisions-fixed-assets', CostOfGoodsSoldOtherCostsOfServiceCos = 'cost-of-goods-sold::other-costs-of-service-cos', ExpenseProjectStudiesSurveysAssessments = 'expense::project-studies-surveys-assessments', AssetOtherAsset = 'asset::other-asset', ExpenseTravelExpensesGeneralAndAdminExpenses = 'expense::travel-expenses-general-and-admin-expenses', AssetOtherLongTermLoansAndAdvances = 'asset::other-long-term-loans-and-advances', OtherCurrentLiabilityInsurancePayable = 'other-current-liability::insurance-payable', OtherCurrentLiabilityPayrollTaxPayable = 'other-current-liability::payroll-tax-payable', OtherCurrentLiabilityPrepaidExpensesPayable = 'other-current-liability::prepaid-expenses-payable', OtherExpenseMortgageInterest = 'other-expense::mortgage-interest', OtherExpensePenaltiesSettlements = 'other-expense::penalties-settlements', AssetFixedAssetSoftware = 'asset::fixed-asset-software', AssetLoansToOthers = 'asset::loans-to-others', ExpenseTravelMeals = 'expense::travel-meals', AssetIntangibleAssetsUnderDevelopment = 'asset::intangible-assets-under-development', OtherIncomeOtherInvestmentIncome = 'other-income::other-investment-income', AssetShortTermInvestmentsInRelatedParties = 'asset::short-term-investments-in-related-parties', LiabilityLongTermEmployeeBenefitObligations = 'liability::long-term-employee-benefit-obligations', EquityPartnersEquity = 'equity::partners-equity', OtherCurrentLiabilityInterestPayables = 'other-current-liability::interest-payables', AssetInvestmentMortgageRealEstateLoans = 'asset::investment-mortgage-real-estate-loans', OtherExpenseGasAndFuel = 'other-expense::gas-and-fuel', AssetOtherCurrentAsset = 'asset::other-current-asset', OtherExpenseVehicleInsurance = 'other-expense::vehicle-insurance', AssetOtherEarMarkedBankAccounts = 'asset::other-ear-marked-bank-accounts', OtherCurrentLiabilityGlobalTaxSuspense = 'other-current-liability::global-tax-suspense', AssetNonCurrentAssets = 'asset::non-current-assets', OtherCurrentLiabilityDirectDepositPayable = 'other-current-liability::direct-deposit-payable', OtherExpenseOtherMiscellaneousExpense = 'other-expense::other-miscellaneous-expense', AssetLeaseBuyout = 'asset::lease-buyout', AssetPrepaymentsAndAccruedIncome = 'asset::prepayments-and-accrued-income', ExpenseSuppliesMaterials = 'expense::supplies-materials', LiabilityLongTermDebit = 'liability::long-term-debit', LiabilityDeferredTaxLiabilities = 'liability::deferred-tax-liabilities', LiabilityLongTermLiability = 'liability::long-term-liability', OtherCurrentLiabilityStaffAndRelatedLiabilityAccounts = 'other-current-liability::staff-and-related-liability-accounts', AssetAccumulatedDepreciation = 'asset::accumulated-depreciation', AssetAssetsAvailableForSale = 'asset::assets-available-for-sale', OtherExpenseRepairsAndMaintenance = 'other-expense::repairs-and-maintenance', LiabilityOtherLongTermLiabilities = 'liability::other-long-term-liabilities', AssetDevelopmentCosts = 'asset::development-costs', ExpenseSundry = 'expense::sundry', ExpenseUtilities = 'expense::utilities', CostOfGoodsSoldFreightAndDeliveryCost = 'cost-of-goods-sold::freight-and-delivery-cost', AssetSecurityDeposits = 'asset::security-deposits', OtherCurrentLiabilitySundryDebtorsAndCreditors = 'other-current-liability::sundry-debtors-and-creditors', OtherExpenseDepreciation = 'other-expense::depreciation', EquityCapitalReserves = 'equity::capital-reserves', OtherExpenseVehicleRegistration = 'other-expense::vehicle-registration', OtherIncomeGainLossOnSaleOfInvestments = 'other-income::gain-loss-on-sale-of-investments', ExpenseRepairMaintenance = 'expense::repair-maintenance', ExpenseBadDebts = 'expense::bad-debts', RevenueSalesRetail = 'revenue::sales-retail', AssetCashAndCashEquivalents = 'asset::cash-and-cash-equivalents', CostOfGoodsSoldCostOfLaborCos = 'cost-of-goods-sold::cost-of-labor-cos', AssetAvailableForSaleFinancialAssets = 'asset::available-for-sale-financial-assets', OtherCurrentLiabilityCurrentPortionOfObligationsUnderFinanceLeases = 'other-current-liability::current-portion-of-obligations-under-finance-leases', ExpensePenaltiesSettlements = 'expense::penalties-settlements', RevenueOtherCurrentOperatingIncome = 'revenue::other-current-operating-income', AssetFixedAssetPhone = 'asset::fixed-asset-phone', ExpenseManagementCompensation = 'expense::management-compensation', AssetFixedAssetOtherToolsEquipment = 'asset::fixed-asset-other-tools-equipment', AssetShortTermLoansAndAdvancesToRelatedParties = 'asset::short-term-loans-and-advances-to-related-parties', OtherIncomeLossOnDisposalOfAssets = 'other-income::loss-on-disposal-of-assets', LiabilityDebtsRelatedToParticipatingInterests = 'liability::debts-related-to-participating-interests', LiabilityLongTermBorrowings = 'liability::long-term-borrowings', AssetAssetsInCourseOfConstruction = 'asset::assets-in-course-of-construction', ExpenseExtraordinaryCharges = 'expense::extraordinary-charges', CostOfGoodsSold = 'cost-of-goods-sold', EquityEquityInEarningsOfSubsidiuaries = 'equity::equity-in-earnings-of-subsidiuaries', OtherIncomeInterestEarned = 'other-income::interest-earned', CostOfGoodsSoldCostOfSales = 'cost-of-goods-sold::cost-of-sales', ExpenseRentOrLeaseOfBuildings = 'expense::rent-or-lease-of-buildings', AssetLoansToStockholders = 'asset::loans-to-stockholders', CostOfGoodsSoldShippingFreightDeliveryCos = 'cost-of-goods-sold::shipping-freight-delivery-cos', RevenueOperatingGrants = 'revenue::operating-grants', AssetAccumulatedAmortization = 'asset::accumulated-amortization', OtherCurrentLiabilityDividendsPayable = 'other-current-liability::dividends-payable', EquityFunds = 'equity::funds', OtherIncomeOtherMiscellaneousIncome = 'other-income::other-miscellaneous-income', AssetProvisionsNonCurrentAssets = 'asset::provisions-non-current-assets', AssetInvestmentTaxExemptSecurities = 'asset::investment-tax-exempt-securities', ExpenseGlobalTaxExpense = 'expense::global-tax-expense', LiabilityObligationsUnderFinanceLeases = 'liability::obligations-under-finance-leases', AssetOtherIntangibleAssets = 'asset::other-intangible-assets', AssetFixedAssetComputers = 'asset::fixed-asset-computers', AssetLicenses = 'asset::licenses', ExpensePurchasesRebates = 'expense::purchases-rebates', Liability = 'liability', OtherExpenseIncomeTaxOtherExpense = 'other-expense::income-tax-other-expense', EquityCommonStock = 'equity::common-stock', OtherCurrentLiabilityShortTermBorrowings = 'other-current-liability::short-term-borrowings', AssetAccumulatedAmortizationOfOtherAssets = 'asset::accumulated-amortization-of-other-assets', ExpenseExternalServices = 'expense::external-services', ExpensePromotionalMeals = 'expense::promotional-meals', AssetGlobalTaxDeferred = 'asset::global-tax-deferred', LiabilityCreditCard = 'liability::credit-card', OtherCurrentLiabilityProvisionForWarrantyObligations = 'other-current-liability::provision-for-warranty-obligations', AssetAssetsHeldForSale = 'asset::assets-held-for-sale', EquityInvestmentGrants = 'equity::investment-grants', OtherCurrentLiabilityAccruedLiabilities = 'other-current-liability::accrued-liabilities', AssetCumulativeDepreciationOnIntangibleAssets = 'asset::cumulative-depreciation-on-intangible-assets', EquityPersonalIncome = 'equity::personal-income', OtherCurrentLiabilityPayrollClearing = 'other-current-liability::payroll-clearing', OtherExpense = 'other-expense', AssetOtherLongTermAssets = 'asset::other-long-term-assets', EquityHealthcare = 'equity::healthcare', AssetBuildings = 'asset::buildings', ExpenseAmortizationExpense = 'expense::amortization-expense', AssetFixedAssetPhotoVideo = 'asset::fixed-asset-photo-video', ExpenseShippingFreightDelivery = 'expense::shipping-freight-delivery', OtherExpenseHomeOwnerRentalInsurance = 'other-expense::home-owner-rental-insurance', AssetFurnitureAndFixtures = 'asset::furniture-and-fixtures', EquityPreferredStock = 'equity::preferred-stock', AssetAccumulatedDepletion = 'asset::accumulated-depletion', EquityPersonalExpense = 'equity::personal-expense', ExpenseTravel = 'expense::travel', ExpenseOtherRentalCosts = 'expense::other-rental-costs', LiabilityOtherLongTermProvisions = 'liability::other-long-term-provisions' }
export const enum UserRoles { Admin = 'admin', User = 'user', Moderator = 'moderator' }
export const enum CustomerSelection { Prerequisite = 'prerequisite', All = 'all' }
export const enum ReceiverRoles { Admin = 'admin', Moderator = 'moderator', User = 'user' }
export const enum TargetType { ShippingLine = 'shipping-line', LineItem = 'line-item' }
export const enum SkuValidation { GlobalUnique = 'global-unique', None = 'none', LocalUnique = 'local-unique' }
export const enum AllocationMethod { Each = 'each', Across = 'across' }
export const enum Status { Expired = 'expired', Scheduled = 'scheduled', Active = 'active' }
export const enum TargetSelection { Entitled = 'entitled', All = 'all' }
export const enum TransactionMethod { BankBranch = 'bank-branch', Telephone = 'telephone', Mail = 'mail', Mobile = 'mobile', Atm = 'atm', Online = 'online' }
export const enum Format { Xml = 'xml', Json = 'json' }
export const enum Roles { Moderator = 'moderator', User = 'user', Admin = 'admin' }
export const enum Country { Yemen = 'yemen', Austria = 'austria', CentralAfricanRepublic = 'central-african-republic', Estonia = 'estonia', Lesotho = 'lesotho', Algeria = 'algeria', Georgia = 'georgia', Palestine = 'palestine', Haiti = 'haiti', Jordan = 'jordan', CongoDemocraticRepublic = 'congo-democratic-republic', Peru = 'peru', Belarus = 'belarus', Guinea = 'guinea', Bangladesh = 'bangladesh', Colombia = 'colombia', Suriname = 'suriname', Bahrain = 'bahrain', Pakistan = 'pakistan', Denmark = 'denmark', Poland = 'poland', Turkmenistan = 'turkmenistan', Moldova = 'moldova', Nauru = 'nauru', Australia = 'australia', Gabon = 'gabon', EquatorialGuinea = 'equatorial-guinea', Nigeria = 'nigeria', AntiguaAndBarbuda = 'antigua-and-barbuda', Germany = 'germany', Micronesia = 'micronesia', NewZealand = 'new-zealand', Philippines = 'philippines', BurkinaFaso = 'burkina-faso', Barbados = 'barbados', Belize = 'belize', Indonesia = 'indonesia', Guatemala = 'guatemala', Mali = 'mali', Ghana = 'ghana', Montenegro = 'montenegro', Oman = 'oman', Senegal = 'senegal', SaintVincentAndTheGrenadines = 'saint-vincent-and-the-grenadines', Ukraine = 'ukraine', TimorLeste = 'timor-leste', Namibia = 'namibia', Hungary = 'hungary', Kazakhstan = 'kazakhstan', Lithuania = 'lithuania', UnitedArabEmirates = 'united-arab-emirates', Eritrea = 'eritrea', Sudan = 'sudan', Vanuatu = 'vanuatu', Croatia = 'croatia', Gambia = 'gambia', Singapore = 'singapore', France = 'france', Mauritania = 'mauritania', NorthMacedonia = 'north-macedonia', Tanzania = 'tanzania', Grenada = 'grenada', ElSalvador = 'el-salvador', Cameroon = 'cameroon', Iran = 'iran', MarshallIslands = 'marshall-islands', China = 'china', Italy = 'italy', Malaysia = 'malaysia', SouthAfrica = 'south-africa', Comoros = 'comoros', Uruguay = 'uruguay', Bhutan = 'bhutan', Romania = 'romania', Ireland = 'ireland', Kenya = 'kenya', Myanmar = 'myanmar', SaintLucia = 'saint-lucia', SouthKorea = 'south-korea', Belgium = 'belgium', Rwanda = 'rwanda', BosniaAndHerzegovina = 'bosnia-and-herzegovina', Nepal = 'nepal', Samoa = 'samoa', Azerbaijan = 'azerbaijan', Taiwan = 'taiwan', Zambia = 'zambia', Chad = 'chad', Spain = 'spain', GuineaBissau = 'guinea-bissau', Angola = 'angola', CzechRepublic = 'czech-republic', UnitedKingdom = 'united-kingdom', Bahamas = 'bahamas', SanMarino = 'san-marino', Chile = 'chile', Madagascar = 'madagascar', Afghanistan = 'afghanistan', CoteDIvoire = 'cote-d-ivoire', Portugal = 'portugal', Brazil = 'brazil', Albania = 'albania', Cuba = 'cuba', Mauritius = 'mauritius', Norway = 'norway', Niger = 'niger', Armenia = 'armenia', Israel = 'israel', Cyprus = 'cyprus', Fiji = 'fiji', Jamaica = 'jamaica', Tonga = 'tonga', Botswana = 'botswana', Argentina = 'argentina', Sweden = 'sweden', Brunei = 'brunei', Thailand = 'thailand', NorthKorea = 'north-korea', Djibouti = 'djibouti', Morocco = 'morocco', Qatar = 'qatar', Netherlands = 'netherlands', Palau = 'palau', CostaRica = 'costa-rica', Egypt = 'egypt', Finland = 'finland', Malta = 'malta', Mozambique = 'mozambique', Japan = 'japan', SaoTomeAndPrincipe = 'sao-tome-and-principe', Switzerland = 'switzerland', Tuvalu = 'tuvalu', Luxembourg = 'luxembourg', Iceland = 'iceland', CongoRepublic = 'congo-republic', Zimbabwe = 'zimbabwe', Russia = 'russia', Nicaragua = 'nicaragua', Bulgaria = 'bulgaria', Ethiopia = 'ethiopia', Maldives = 'maldives', Mexico = 'mexico', Iraq = 'iraq', Lebanon = 'lebanon', Monaco = 'monaco', Panama = 'panama', Laos = 'laos', Serbia = 'serbia', Slovakia = 'slovakia', India = 'india', PapuaNewGuinea = 'papua-new-guinea', Burundi = 'burundi', Libya = 'libya', Bolivia = 'bolivia', Kuwait = 'kuwait', Seychelles = 'seychelles', SierraLeone = 'sierra-leone', Slovenia = 'slovenia', SolomonIslands = 'solomon-islands', SouthSudan = 'south-sudan', SriLanka = 'sri-lanka', TrinidadAndTobago = 'trinidad-and-tobago', Canada = 'canada', Dominica = 'dominica', Guyana = 'guyana', Kiribati = 'kiribati', Cambodia = 'cambodia', Eswatini = 'eswatini', Honduras = 'honduras', Malawi = 'malawi', SaintKittsAndNevis = 'saint-kitts-and-nevis', Tunisia = 'tunisia', Latvia = 'latvia', Mongolia = 'mongolia', Greece = 'greece', Syria = 'syria', CaboVerde = 'cabo-verde', DominicanRepublic = 'dominican-republic', Togo = 'togo', Paraguay = 'paraguay', Somalia = 'somalia', Uganda = 'uganda', Venezuela = 'venezuela', VaticanCity = 'vatican-city', Benin = 'benin', Liechtenstein = 'liechtenstein', Kyrgyzstan = 'kyrgyzstan', Tajikistan = 'tajikistan', Turkey = 'turkey', Liberia = 'liberia', SaudiArabia = 'saudi-arabia', UnitedStates = 'united-states', Andorra = 'andorra', Ecuador = 'ecuador', Uzbekistan = 'uzbekistan', Vietnam = 'vietnam' }
export const enum GlobalTaxType { Vat = 'vat', Gst = 'gst', ExciseTax = 'excise-tax', CustomsDuty = 'customs-duty', Other = 'other', PropertyTax = 'property-tax', SalesTax = 'sales-tax' }
export const enum JournalEntryStatus { Voided = 'voided', Corrected = 'corrected', Posted = 'posted', Draft = 'draft', Pending = 'pending', Error = 'error' }
export const enum IdentityProvider { Other = 'other', Amazon = 'amazon', Snapchat = 'snapchat', Pinterest = 'pinterest', Line = 'line', Telegram = 'telegram', Qq = 'qq', Paypal = 'paypal', Github = 'github', Tumblr = 'tumblr', Google = 'google', Tiktok = 'tiktok', Reddit = 'reddit', Apple = 'apple', Instagram = 'instagram', Yahoo = 'yahoo', Flickr = 'flickr', Behance = 'behance', Whatsapp = 'whatsapp', Facebook = 'facebook', Slack = 'slack', Wechat = 'wechat', Twitter = 'twitter', Microsoft = 'microsoft', Signal = 'signal', Discord = 'discord', Linkedin = 'linkedin', Vimeo = 'vimeo', Foursquare = 'foursquare', Dribbble = 'dribbble' }
export const enum DayOfWeek { Monday = 'monday', Wednesday = 'wednesday', Thursday = 'thursday', Saturday = 'saturday', Friday = 'friday', Sunday = 'sunday', Tuesday = 'tuesday' }
export const enum AccountEngagementLevel { Unknown = 'unknown', Warm = 'warm', Hot = 'hot', Cold = 'cold' }
export const enum ReviewApprovalStatus { Pending = 'pending', Approved = 'approved', Rejected = 'rejected', Revised = 'revised', InReview = 'in-review' }
export const enum StakeholderType { Investor = 'investor', Competitor = 'competitor', Other = 'other', Partner = 'partner', Vendor = 'vendor', Customer = 'customer' }
export const enum AccountStatus { Suspended = 'suspended', Active = 'active', Closed = 'closed', Inactive = 'inactive', Pending = 'pending' }
export const enum CampaignStatus { Active = 'active', Planned = 'planned', Completed = 'completed', Paused = 'paused', Scheduled = 'scheduled', Archived = 'archived', Cancelled = 'cancelled', Draft = 'draft' }
export const enum CustomerType { Wholesale = 'wholesale', Corporate = 'corporate', B2c = 'b2c', Retail = 'retail', Online = 'online', B2b = 'b2b' }
export const enum AccountingAccountType { AssetFixedAssetPhotoVideo = 'asset::fixed-asset-photo-video', ExpenseOtherBusinessExpenses = 'expense::other-business-expenses', RevenueSalesRetail = 'revenue::sales-retail', AssetFixedAssetOtherToolsEquipment = 'asset::fixed-asset-other-tools-equipment', OtherIncomeGainLossOnSaleOfFixedAssets = 'other-income::gain-loss-on-sale-of-fixed-assets', LiabilityAccountsPayable = 'liability::accounts-payable', EquityPaidInCapitalOrSurplus = 'equity::paid-in-capital-or-surplus', OtherCurrentLiabilityCurrentTaxLiability = 'other-current-liability::current-tax-liability', OtherExpense = 'other-expense', AssetCashAndCashEquivalents = 'asset::cash-and-cash-equivalents', AssetGlobalTaxRefund = 'asset::global-tax-refund', OtherIncomeUnrealisedLossOnSecuritiesNetOfTax = 'other-income::unrealised-loss-on-securities-net-of-tax', AssetUndepositedFunds = 'asset::undeposited-funds', OtherExpenseMatCredit = 'other-expense::mat-credit', RevenueOtherPrimaryIncome = 'revenue::other-primary-income', OtherCurrentLiabilityShortTermBorrowings = 'other-current-liability::short-term-borrowings', LiabilityDeferredTaxLiabilities = 'liability::deferred-tax-liabilities', RevenueOwnWorkCapitalized = 'revenue::own-work-capitalized', EquityPersonalIncome = 'equity::personal-income', LiabilityLongTermDebit = 'liability::long-term-debit', AssetLoansToOfficers = 'asset::loans-to-officers', AssetFixedAssetFurniture = 'asset::fixed-asset-furniture', AssetShortTermInvestmentsInRelatedParties = 'asset::short-term-investments-in-related-parties', AssetLeaseholdImprovements = 'asset::leasehold-improvements', AssetRetainage = 'asset::retainage', AssetAllowanceForBadDebts = 'asset::allowance-for-bad-debts', ExpenseBorrowingCost = 'expense::borrowing-cost', AssetOtherLongTermInvestments = 'asset::other-long-term-investments', ExpenseTravel = 'expense::travel', OtherCurrentLiabilityStateLocalIncomeTaxPayable = 'other-current-liability::state-local-income-tax-payable', EquityOwnersEquity = 'equity::owners-equity', OtherExpenseRentAndLease = 'other-expense::rent-and-lease', CostOfGoodsSoldEquipmentRentalCos = 'cost-of-goods-sold::equipment-rental-cos', ExpenseAmortizationExpense = 'expense::amortization-expense', OtherExpenseDepreciation = 'other-expense::depreciation', OtherCurrentLiabilityRentsInTrustLiability = 'other-current-liability::rents-in-trust-liability', OtherIncomeDividendIncome = 'other-income::dividend-income', OtherExpenseTaxRoundoffGainOrLoss = 'other-expense::tax-roundoff-gain-or-loss', ExpenseProjectStudiesSurveysAssessments = 'expense::project-studies-surveys-assessments', LiabilityCreditCard = 'liability::credit-card', OtherExpensePenaltiesSettlements = 'other-expense::penalties-settlements', EquityPartnersEquity = 'equity::partners-equity', EquityPersonalExpense = 'equity::personal-expense', RevenueServiceFeeIncome = 'revenue::service-fee-income', CostOfGoodsSoldShippingFreightDeliveryCos = 'cost-of-goods-sold::shipping-freight-delivery-cos', AssetLand = 'asset::land', CostOfGoodsSoldCostOfLaborCos = 'cost-of-goods-sold::cost-of-labor-cos', EquityHealthcare = 'equity::healthcare', LiabilityAccrualsAndDeferredIncome = 'liability::accruals-and-deferred-income', AssetLongTermInvestments = 'asset::long-term-investments', ExpenseTravelMeals = 'expense::travel-meals', AssetAccumulatedDepreciation = 'asset::accumulated-depreciation', ExpenseCommissionsAndFees = 'expense::commissions-and-fees', OtherCurrentLiabilityPayrollClearing = 'other-current-liability::payroll-clearing', AssetOtherCurrentAssets = 'asset::other-current-assets', AssetGoodwill = 'asset::goodwill', ExpenseExtraordinaryCharges = 'expense::extraordinary-charges', ExpenseShippingFreightDelivery = 'expense::shipping-freight-delivery', AssetInvestmentOther = 'asset::investment-other', OtherExpenseVehicleInsurance = 'other-expense::vehicle-insurance', OtherCurrentLiabilityDividendsPayable = 'other-current-liability::dividends-payable', AssetShortTermLoansAndAdvancesToRelatedParties = 'asset::short-term-loans-and-advances-to-related-parties', ExpenseTravelExpensesGeneralAndAdminExpenses = 'expense::travel-expenses-general-and-admin-expenses', EquityEquityInEarningsOfSubsidiuaries = 'equity::equity-in-earnings-of-subsidiuaries', EquityMoneyReceivedAgainstShareWarrants = 'equity::money-received-against-share-warrants', ExpenseRentOrLeaseOfBuildings = 'expense::rent-or-lease-of-buildings', ExpensePurchasesRebates = 'expense::purchases-rebates', EquityShareApplicationMoneyPendingAllotment = 'equity::share-application-money-pending-allotment', LiabilityObligationsUnderFinanceLeases = 'liability::obligations-under-finance-leases', OtherCurrentLiabilitySalesTaxPayable = 'other-current-liability::sales-tax-payable', AssetInvestmentUsGovernmentObligations = 'asset::investment-us-government-obligations', AssetOtherEarMarkedBankAccounts = 'asset::other-ear-marked-bank-accounts', AssetAccumulatedAmortizationOfOtherAssets = 'asset::accumulated-amortization-of-other-assets', Asset = 'asset', OtherExpenseVehicleLoanInterest = 'other-expense::vehicle-loan-interest', OtherExpenseUtilities = 'other-expense::utilities', AssetCapitalWip = 'asset::capital-wip', ExpenseShippingAndDeliveryExpense = 'expense::shipping-and-delivery-expense', OtherExpenseIncomeTaxOtherExpense = 'other-expense::income-tax-other-expense', AssetDepletableAssets = 'asset::depletable-assets', AssetParticipatingInterests = 'asset::participating-interests', AssetProvisionsCurrentAssets = 'asset::provisions-current-assets', EquityTreasuryStock = 'equity::treasury-stock', ExpenseIncomeTaxExpense = 'expense::income-tax-expense', OtherExpensePriorPeriodItems = 'other-expense::prior-period-items', LiabilityGovernmentAndOtherPublicAuthorities = 'liability::government-and-other-public-authorities', ExpensePayrollExpenses = 'expense::payroll-expenses', OtherCurrentLiabilityDirectDepositPayable = 'other-current-liability::direct-deposit-payable', OtherCurrentLiabilityInsurancePayable = 'other-current-liability::insurance-payable', AssetFixedAssetSoftware = 'asset::fixed-asset-software', OtherCurrentLiabilitySundryDebtorsAndCreditors = 'other-current-liability::sundry-debtors-and-creditors', AssetDevelopmentCosts = 'asset::development-costs', AssetFixedAssetCopiers = 'asset::fixed-asset-copiers', LiabilityBankLoans = 'liability::bank-loans', LiabilityLongTermEmployeeBenefitObligations = 'liability::long-term-employee-benefit-obligations', LiabilityDebtsRelatedToParticipatingInterests = 'liability::debts-related-to-participating-interests', ExpenseOtherRentalCosts = 'expense::other-rental-costs', ExpenseOtherSellingExpenses = 'expense::other-selling-expenses', OtherCurrentLiabilityStaffAndRelatedLiabilityAccounts = 'other-current-liability::staff-and-related-liability-accounts', LiabilityLongTermBorrowings = 'liability::long-term-borrowings', ExpenseAppropriationsToDepreciation = 'expense::appropriations-to-depreciation', OtherCurrentLiabilityProvisionForWarrantyObligations = 'other-current-liability::provision-for-warranty-obligations', OtherIncomeGainLossOnSaleOfInvestments = 'other-income::gain-loss-on-sale-of-investments', AssetTradeAndOtherReceivables = 'asset::trade-and-other-receivables', OtherExpenseExtraordinaryItems = 'other-expense::extraordinary-items', ExpenseCharitableContributions = 'expense::charitable-contributions', AssetNonCurrentAssets = 'asset::non-current-assets', OtherIncomeOtherOperatingIncome = 'other-income::other-operating-income', AssetOrganizationalCosts = 'asset::organizational-costs', AssetAssetsHeldForSale = 'asset::assets-held-for-sale', AssetLandAsset = 'asset::land-asset', ExpenseLossOnDiscontinuedOperationsNetOfTax = 'expense::loss-on-discontinued-operations-net-of-tax', AssetTrustAccounts = 'asset::trust-accounts', AssetOtherLongTermAssets = 'asset::other-long-term-assets', AssetEmployeeCashAdvances = 'asset::employee-cash-advances', AssetLongTermLoansAndAdvancesToRelatedParties = 'asset::long-term-loans-and-advances-to-related-parties', ExpenseInterestPaid = 'expense::interest-paid', OtherExpenseVehicleRepairs = 'other-expense::vehicle-repairs', OtherCurrentLiability = 'other-current-liability', ExpenseDuesSubscriptions = 'expense::dues-subscriptions', ExpenseOfficeExpenses = 'expense::office-expenses', ExpenseEntertainmentMeals = 'expense::entertainment-meals', AssetSavings = 'asset::savings', AssetFixedAssetComputers = 'asset::fixed-asset-computers', OtherCurrentLiabilityTradeAndOtherPayables = 'other-current-liability::trade-and-other-payables', ExpenseTravelExpensesSellingExpense = 'expense::travel-expenses-selling-expense', EquityPreferredStock = 'equity::preferred-stock', ExpenseGlobalTaxExpense = 'expense::global-tax-expense', RevenueCashReceiptIncome = 'revenue::cash-receipt-income', OtherIncomeLossOnDisposalOfAssets = 'other-income::loss-on-disposal-of-assets', AssetCashOnHand = 'asset::cash-on-hand', ExpenseBadDebts = 'expense::bad-debts', LiabilityOtherLongTermLiabilities = 'liability::other-long-term-liabilities', LiabilityProvisionForLiabilities = 'liability::provision-for-liabilities', AssetInvestments = 'asset::investments', EquityShareCapital = 'equity::share-capital', ExpenseOfficeGeneralAdministrativeExpenses = 'expense::office-general-administrative-expenses', RevenueOtherCurrentOperatingIncome = 'revenue::other-current-operating-income', EquityOpeningBalanceEquity = 'equity::opening-balance-equity', AssetRentsHeldInTrust = 'asset::rents-held-in-trust', AssetInvestmentMortgageRealEstateLoans = 'asset::investment-mortgage-real-estate-loans', AssetAccumulatedDepletion = 'asset::accumulated-depletion', RevenueSalesWholesale = 'revenue::sales-wholesale', OtherCurrentLiabilityPrepaidExpensesPayable = 'other-current-liability::prepaid-expenses-payable', EquityPartnerContributions = 'equity::partner-contributions', EquityEstimatedTaxes = 'equity::estimated-taxes', ExpenseExternalServices = 'expense::external-services', AssetCalledUpShareCapitalNotPaid = 'asset::called-up-share-capital-not-paid', ExpenseOtherCurrentOperatingCharges = 'expense::other-current-operating-charges', AssetAvailableForSaleFinancialAssets = 'asset::available-for-sale-financial-assets', AssetPrepaidExpenses = 'asset::prepaid-expenses', OtherExpenseRepairsAndMaintenance = 'other-expense::repairs-and-maintenance', OtherCurrentLiabilitySocialSecurityAgencies = 'other-current-liability::social-security-agencies', AssetLoansToOthers = 'asset::loans-to-others', OtherExpenseAmortization = 'other-expense::amortization', OtherExpenseMortgageInterest = 'other-expense::mortgage-interest', RevenueDiscountsRefundsGiven = 'revenue::discounts-refunds-given', RevenueUnappliedCashPaymentIncome = 'revenue::unapplied-cash-payment-income', LiabilityAccruedLongTermLiabilities = 'liability::accrued-long-term-liabilities', OtherIncomeOtherMiscellaneousIncome = 'other-income::other-miscellaneous-income', AssetMoneyMarket = 'asset::money-market', AssetIntangibleAssets = 'asset::intangible-assets', AssetPrepaymentsAndAccruedIncome = 'asset::prepayments-and-accrued-income', EquityRetainedEarnings = 'equity::retained-earnings', EquityInvestmentGrants = 'equity::investment-grants', OtherExpenseDepletion = 'other-expense::depletion', LiabilityProvisionsNonCurrentLiabilities = 'liability::provisions-non-current-liabilities', AssetAccumulatedAmortization = 'asset::accumulated-amortization', OtherExpenseWashAndRoadServices = 'other-expense::wash-and-road-services', OtherCurrentLiabilityCurrentLiabilities = 'other-current-liability::current-liabilities', OtherIncomeInterestEarned = 'other-income::interest-earned', OtherIncomeTaxExemptInterest = 'other-income::tax-exempt-interest', OtherExpenseHomeOwnerRentalInsurance = 'other-expense::home-owner-rental-insurance', OtherCurrentLiabilityGlobalTaxSuspense = 'other-current-liability::global-tax-suspense', ExpenseLegalProfessionalFees = 'expense::legal-professional-fees', ExpenseAuto = 'expense::auto', AssetBuildings = 'asset::buildings', AssetInventory = 'asset::inventory', AssetAssetsAvailableForSale = 'asset::assets-available-for-sale', AssetOtherCurrentAsset = 'asset::other-current-asset', AssetOtherLongTermLoansAndAdvances = 'asset::other-long-term-loans-and-advances', AssetInternalTransfers = 'asset::internal-transfers', AssetSecurityDeposits = 'asset::security-deposits', ExpenseTaxesPaid = 'expense::taxes-paid', RevenueSavingsByTaxScheme = 'revenue::savings-by-tax-scheme', AssetCumulativeDepreciationOnIntangibleAssets = 'asset::cumulative-depreciation-on-intangible-assets', EquityAccumulatedAdjustment = 'equity::accumulated-adjustment', CostOfGoodsSoldSuppliesMaterialsCogs = 'cost-of-goods-sold::supplies-materials-cogs', AssetDeferredTax = 'asset::deferred-tax', ExpenseSundry = 'expense::sundry', AssetBalWithGovtAuthorities = 'asset::bal-with-govt-authorities', OtherCurrentLiabilityGlobalTaxPayable = 'other-current-liability::global-tax-payable', ExpenseEntertainment = 'expense::entertainment', OtherExpenseOtherHomeOfficeExpenses = 'other-expense::other-home-office-expenses', AssetInvestmentTaxExemptSecurities = 'asset::investment-tax-exempt-securities', RevenueIncome = 'revenue::income', AssetLicenses = 'asset::licenses', LiabilityGroupAndAssociates = 'liability::group-and-associates', ExpenseDistributionCosts = 'expense::distribution-costs', OtherCurrentLiabilityCurrentPortionEmployeeBenefitsObligations = 'other-current-liability::current-portion-employee-benefits-obligations', OtherCurrentLiabilityLineOfCredit = 'other-current-liability::line-of-credit', OtherIncomeOtherInvestmentIncome = 'other-income::other-investment-income', AccountsReceivable = 'accounts-receivable', OtherCurrentLiabilityOtherCurrentLiabilities = 'other-current-liability::other-current-liabilities', AssetOtherConsumables = 'asset::other-consumables', OtherCurrentLiabilityDutiesAndTaxes = 'other-current-liability::duties-and-taxes', OtherCurrentLiabilityProvisionsCurrentLiabilities = 'other-current-liability::provisions-current-liabilities', RevenueOperatingGrants = 'revenue::operating-grants', AssetLoansToStockholders = 'asset::loans-to-stockholders', RevenueSalesOfProductIncome = 'revenue::sales-of-product-income', ExpenseUnappliedCashBillPaymentExpense = 'expense::unapplied-cash-bill-payment-expense', ExpenseOtherMiscellaneousServiceCost = 'expense::other-miscellaneous-service-cost', ExpenseSuppliesMaterials = 'expense::supplies-materials', EquityPartnerDistributions = 'equity::partner-distributions', OtherExpenseVehicleLease = 'other-expense::vehicle-lease', OtherCurrentLiabilityAccruedLiabilities = 'other-current-liability::accrued-liabilities', AssetIntangibleAssetsUnderDevelopment = 'asset::intangible-assets-under-development', LiabilityOutstandingDuesMicroSmallEnterprise = 'liability::outstanding-dues-micro-small-enterprise', AssetProvisionsNonCurrentAssets = 'asset::provisions-non-current-assets', LiabilityStaffAndRelatedLongTermLiabilityAccounts = 'liability::staff-and-related-long-term-liability-accounts', AssetOtherFixedAssets = 'asset::other-fixed-assets', ExpensePromotionalMeals = 'expense::promotional-meals', LiabilityNotesPayable = 'liability::notes-payable', OtherExpenseExchangeGainOrLoss = 'other-expense::exchange-gain-or-loss', ExpenseInsurance = 'expense::insurance', LiabilityOutstandingDuesOtherThanMicroSmallEnterprise = 'liability::outstanding-dues-other-than-micro-small-enterprise', AssetAssetsInCourseOfConstruction = 'asset::assets-in-course-of-construction', OtherCurrentLiabilityPayrollTaxPayable = 'other-current-liability::payroll-tax-payable', AssetBank = 'asset::bank', AssetChecking = 'asset::checking', ExpenseEquipmentRental = 'expense::equipment-rental', ExpenseStaffCosts = 'expense::staff-costs', AssetLeaseBuyout = 'asset::lease-buyout', AssetOtherIntangibleAssets = 'asset::other-intangible-assets', ExpenseOtherExternalServices = 'expense::other-external-services', ExpenseManagementCompensation = 'expense::management-compensation', LiabilityLiabilitiesRelatedToAssetsHeldForSale = 'liability::liabilities-related-to-assets-held-for-sale', OtherExpenseHomeOffice = 'other-expense::home-office', OtherExpenseVehicleRegistration = 'other-expense::vehicle-registration', LiabilityAccruedVacationPayable = 'liability::accrued-vacation-payable', CostOfGoodsSoldFreightAndDeliveryCost = 'cost-of-goods-sold::freight-and-delivery-cost', OtherExpenseVehicleLoan = 'other-expense::vehicle-loan', OtherExpenseGasAndFuel = 'other-expense::gas-and-fuel', AssetProvisionsFixedAssets = 'asset::provisions-fixed-assets', OtherIncome = 'other-income', ExpenseFinanceCosts = 'expense::finance-costs', ExpenseRepairMaintenance = 'expense::repair-maintenance', ExpenseUtilities = 'expense::utilities', LiabilityOtherLongTermProvisions = 'liability::other-long-term-provisions', Equity = 'equity', CostOfGoodsSold = 'cost-of-goods-sold', AssetFurnitureAndFixtures = 'asset::furniture-and-fixtures', AssetOtherAsset = 'asset::other-asset', OtherExpenseOtherMiscellaneousExpense = 'other-expense::other-miscellaneous-expense', EquityDividendDisbursed = 'equity::dividend-disbursed', RevenueNonProfitIncome = 'revenue::non-profit-income', OtherExpenseDeferredTaxExpense = 'other-expense::deferred-tax-expense', OtherCurrentLiabilityTrustAccountsLiabilities = 'other-current-liability::trust-accounts-liabilities', EquityCalledUpShareCapital = 'equity::called-up-share-capital', ExpenseCostOfLabor = 'expense::cost-of-labor', EquityFunds = 'equity::funds', Expense = 'expense', AssetFixedAssetPhone = 'asset::fixed-asset-phone', CostOfGoodsSoldCostOfSales = 'cost-of-goods-sold::cost-of-sales', LiabilityLongTermLiability = 'liability::long-term-liability', RevenueRevenueGeneral = 'revenue::revenue-general', AssetFixedAsset = 'asset::fixed-asset', EquityOtherFreeReserves = 'equity::other-free-reserves', AssetVehicles = 'asset::vehicles', OtherCurrentLiabilityFederalIncomeTaxPayable = 'other-current-liability::federal-income-tax-payable', OtherExpenseExceptionalItems = 'other-expense::exceptional-items', AssetMachineryAndEquipment = 'asset::machinery-and-equipment', LiabilityShareholderNotesPayable = 'liability::shareholder-notes-payable', OtherCurrentLiabilityInterestPayables = 'other-current-liability::interest-payables', OtherExpenseOtherVehicleExpenses = 'other-expense::other-vehicle-expenses', ExpenseBankCharges = 'expense::bank-charges', OtherExpenseVehicle = 'other-expense::vehicle', OtherCurrentLiabilityCurrentPortionOfObligationsUnderFinanceLeases = 'other-current-liability::current-portion-of-obligations-under-finance-leases', AssetExpenditureAuthorisationsAndLettersOfCredit = 'asset::expenditure-authorisations-and-letters-of-credit', EquityAccumulatedOtherComprehensiveIncome = 'equity::accumulated-other-comprehensive-income', OtherCurrentLiabilityLoanPayable = 'other-current-liability::loan-payable', ExpenseAdvertisingPromotional = 'expense::advertising-promotional', EquityCommonStock = 'equity::common-stock', EquityCapitalReserves = 'equity::capital-reserves', OtherExpenseParkingAndTolls = 'other-expense::parking-and-tolls', AssetGlobalTaxDeferred = 'asset::global-tax-deferred', CostOfGoodsSoldOtherCostsOfServiceCos = 'cost-of-goods-sold::other-costs-of-service-cos' }
export const enum MessageReadStatus { Unsent = 'unsent', Sent = 'sent', Delivered = 'delivered', Read = 'read', Failed = 'failed' }
export const enum MessageContentType { Video = 'video', Image = 'image', Location = 'location', Audio = 'audio', Sticker = 'sticker', File = 'file', Document = 'document', Voice = 'voice', Html = 'html', Contact = 'contact', Text = 'text', Link = 'link', Gif = 'gif' }
export const enum MessageDeliveryStatus { Pending = 'pending', Undeliverable = 'undeliverable', Sent = 'sent', Error = 'error', Failed = 'failed', Delivered = 'delivered', Read = 'read' }
export const enum ReactionType { Laugh = 'laugh', Sad = 'sad', Dislike = 'dislike', Like = 'like', Wow = 'wow', Bookmark = 'bookmark', Angry = 'angry', Love = 'love', Interested = 'interested' }
export const enum SupportTicketPriority { Low = 'low', High = 'high', Urgent = 'urgent', Medium = 'medium', Immediate = 'immediate' }
export const enum IssueLifecycleStatus { OnHold = 'on-hold', Waiting = 'waiting', Open = 'open', Pending = 'pending', Cancelled = 'cancelled', Resolved = 'resolved', InProgress = 'in-progress', Closed = 'closed' }
export const enum SupportQueryType { Question = 'question', Problem = 'problem', Feedback = 'feedback', Bug = 'bug', Task = 'task', Incident = 'incident', FeatureRequest = 'feature-request' }
export const enum OrderStatus { OnHold = 'on-hold', Confirmed = 'confirmed', Draft = 'draft', Delivered = 'delivered', Processing = 'processing', AwaitingShipment = 'awaiting-shipment', Returned = 'returned', Refunded = 'refunded', Shipped = 'shipped', Cancelled = 'cancelled', PartiallyFulfilled = 'partially-fulfilled', Pending = 'pending', Disputed = 'disputed', Abandoned = 'abandoned', AwaitingPayment = 'awaiting-payment', Failed = 'failed', AwaitingPickup = 'awaiting-pickup', Completed = 'completed' }
export const enum DiscountType { UnknownDiscount = 'unknown-discount', FixedAmount = 'fixed-amount', ConditionalDiscount = 'conditional-discount', Percentage = 'percentage', VariableAmount = 'variable-amount', BuyOneGetOne = 'buy-one-get-one', TieredDiscount = 'tiered-discount', VariablePercentage = 'variable-percentage' }
export const enum ImageMimeType { ImageJpeg = 'image/jpeg', ImageWebp = 'image/webp', ImageSvgXml = 'image/svg+xml', ImageHeic = 'image/heic', ImageGif = 'image/gif', ImagePng = 'image/png', ImageBmp = 'image/bmp', ImageTiff = 'image/tiff' }
export const enum FulfillmentStatus { Pending = 'pending', Cancelled = 'cancelled', Returned = 'returned', Delivered = 'delivered', Failure = 'failure', InTransit = 'in-transit' }
export const enum OrderingCriteria { Manual = 'manual', CreationDate = 'creation-date', PriceAscending = 'price-ascending', Alphabetical = 'alphabetical', PriceDescending = 'price-descending', Popularity = 'popularity', Relevance = 'relevance', Rating = 'rating' }
export const enum ChatType { Public = 'public', Private = 'private', Group = 'group' }
export const enum ProductAvailabilityStatus { Discontinued = 'discontinued', PreOrder = 'pre-order', BackOrder = 'back-order', InStock = 'in-stock', OutOfStock = 'out-of-stock' }
export const enum ExpenseApprovalStatus { New = 'new', Approved = 'approved', Processed = 'processed', Reviewing = 'reviewing', Denied = 'denied', Cancelled = 'cancelled', Pending = 'pending', Reimbursed = 'reimbursed' }
export const enum FinancialChargeType { Commission = 'commission', ServiceCharge = 'service-charge', TransactionFee = 'transaction-fee', Other = 'other', LateFee = 'late-fee', InterestCharge = 'interest-charge', ProcessingFee = 'processing-fee' }
export const enum ItemAvailabilityStatus { Inactive = 'inactive', OutOfStock = 'out-of-stock', Active = 'active', Discontinued = 'discontinued' }
export const enum BillingStatus { Deleted = 'deleted', Authorised = 'authorised', Submitted = 'submitted', Pending = 'pending', PartiallyPaid = 'partially-paid', Draft = 'draft', Paid = 'paid', Unpaid = 'unpaid', Voided = 'voided', Overdue = 'overdue' }
export const enum FinancialAccountStatus { Delinquent = 'delinquent', Suspended = 'suspended', Closed = 'closed', Frozen = 'frozen', Inactive = 'inactive', Active = 'active', UnderReview = 'under-review' }
export const enum TransactionStatus { Pending = 'pending', Failed = 'failed', Error = 'error', InProgress = 'in-progress', Cancelled = 'cancelled', Succeeded = 'succeeded', Initiated = 'initiated' }
export const enum InvoiceAdjustmentType { Shipping = 'shipping', Other = 'other', Tip = 'tip', Discount = 'discount', Tax = 'tax' }
export const enum DataType { Date = 'date', Json = 'json', Timestamp = 'timestamp', Number = 'number', Undefined = 'undefined', Null = 'null', Binary = 'binary', Object = 'object', Custom = 'custom', String = 'string', Array = 'array', Boolean = 'boolean' }
export const enum EmploymentType { FullTime = 'full-time', Temporary = 'temporary', PartTime = 'part-time', Contract = 'contract', Volunteer = 'volunteer', Freelance = 'freelance', Permanent = 'permanent', Seasonal = 'seasonal', Internship = 'internship' }
export const enum TimeCycle { Hourly = 'hourly', SemiMonthly = 'semi-monthly', AdHoc = 'ad-hoc', Monthly = 'monthly', Annually = 'annually', Weekly = 'weekly', Secondly = 'secondly', Minutely = 'minutely', Daily = 'daily', SemiAnnually = 'semi-annually', Quarterly = 'quarterly', Biennially = 'biennially', Biweekly = 'biweekly', Triennially = 'triennially', Custom = 'custom' }
export const enum FinancialTrackingCategories { CostCenter = 'cost-center', None = 'none', Customer = 'customer', Class = 'class', Project = 'project', Service = 'service', Location = 'location', Product = 'product', Other = 'other', Vendor = 'vendor', Department = 'department', Division = 'division', Employee = 'employee' }
export const enum CreditNoteStatus { Disputed = 'disputed', Revised = 'revised', Pending = 'pending', Cancelled = 'cancelled', Applied = 'applied', Draft = 'draft', Issued = 'issued', Void = 'void', Completed = 'completed' }
export const enum PaymentTerm { Net60 = 'net-60', UponCompletion = 'upon-completion', CashWithOrder = 'cash-with-order', DueOnReceipt = 'due-on-receipt', Installment = 'installment', DeferredPayment = 'deferred-payment', Prepayment = 'prepayment', CashInAdvance = 'cash-in-advance', DueEndOfMonth = 'due-end-of-month', Net30 = 'net-30', Prepaid = 'prepaid', CashOnDelivery = 'cash-on-delivery', Net90 = 'net-90', Custom = 'custom', CashBeforeShipment = 'cash-before-shipment', Net = 'net' }
export const enum EmploymentAndCandidateStatus { Hired = 'hired', Terminated = 'terminated', New = 'new', Active = 'active', OnLeave = 'on-leave', InReview = 'in-review', Interviewing = 'interviewing', OfferExtended = 'offer-extended', NotSelected = 'not-selected', Inactive = 'inactive', Other = 'other' }
export const enum OrganizationalRole { Director = 'director', Supervisor = 'supervisor', Other = 'other', Admin = 'admin', Manager = 'manager', Contractor = 'contractor', Employee = 'employee' }
export const enum CampaignType { Display = 'display', Email = 'email', Other = 'other', SearchEngine = 'search-engine', SocialMedia = 'social-media' }
export const enum ContactAddressType { Other = 'other', Business = 'business', Home = 'home', Personal = 'personal', Billing = 'billing', Shipping = 'shipping', Work = 'work', Temporary = 'temporary' }
export const enum CustomerStatus { Active = 'active', Suspended = 'suspended', Pending = 'pending', Inactive = 'inactive', Archived = 'archived' }
export const enum SocialPlatform { Facebook = 'facebook', Twitter = 'twitter', X = 'x', Youtube = 'youtube', Reddit = 'reddit', Tiktok = 'tiktok', Pinterest = 'pinterest', Skype = 'skype', Linkedin = 'linkedin', Instagram = 'instagram', Snapchat = 'snapchat', Tumblr = 'tumblr', OtherSocialPlatform = 'other-social-platform' }
export const enum LeadLifecycleStatus { Lost = 'lost', InProcess = 'in-process', BadTiming = 'bad-timing', Unqualified = 'unqualified', New = 'new', Revisited = 'revisited', Converted = 'converted', Connected = 'connected', AttemptedToContact = 'attempted-to-contact', Open = 'open' }
export const enum ConversationStatus { Snoozed = 'snoozed', Deleted = 'deleted', Closed = 'closed', Archived = 'archived', Active = 'active' }
export const enum CommunicationRole { Service = 'service', Moderator = 'moderator', System = 'system', Admin = 'admin', Member = 'member', Guest = 'guest', Group = 'group', User = 'user', Bot = 'bot', Assistant = 'assistant', Owner = 'owner', Channel = 'channel' }
export const enum ParticipantEngagementStatus { Inactive = 'inactive', Admin = 'admin', Moderator = 'moderator', Left = 'left', Active = 'active', Guest = 'guest', Banned = 'banned' }
export const enum ItemEntityStatus { Archived = 'archived', Completed = 'completed', Active = 'active', Deleted = 'deleted', Pending = 'pending', Suspended = 'suspended', Inactive = 'inactive' }
export const enum Currency { CNY = 'cny', JOD = 'jod', JPY = 'jpy', BIF = 'bif', BBD = 'bbd', MZN = 'mzn', PAB = 'pab', GIP = 'gip', WST = 'wst', LYD = 'lyd', JMD = 'jmd', PHP = 'php', UGX = 'ugx', ZWL = 'zwl', AMD = 'amd', HTG = 'htg', CUP = 'cup', ISK = 'isk', KPW = 'kpw', RWF = 'rwf', XAF = 'xaf', KWD = 'kwd', CDF = 'cdf', LAK = 'lak', LBP = 'lbp', DJF = 'djf', RUB = 'rub', SAR = 'sar', HRK = 'hrk', GEL = 'gel', GYD = 'gyd', BTN = 'btn', PYG = 'pyg', CLP = 'clp', ANG = 'ang', BND = 'bnd', BGN = 'bgn', SHP = 'shp', BSD = 'bsd', BMD = 'bmd', RSD = 'rsd', QAR = 'qar', USD = 'usd', AOA = 'aoa', EGP = 'egp', SZL = 'szl', LSL = 'lsl', UAH = 'uah', XPF = 'xpf', ERN = 'ern', ETB = 'etb', VES = 'ves', AED = 'aed', MAD = 'mad', BZD = 'bzd', CZK = 'czk', EUR = 'eur', MGA = 'mga', VND = 'vnd', GNF = 'gnf', XOF = 'xof', CVE = 'cve', GBP = 'gbp', KGS = 'kgs', SBD = 'sbd', TJS = 'tjs', GGP = 'ggp', GHS = 'ghs', LKR = 'lkr', IRR = 'irr', NZD = 'nzd', MUR = 'mur', CUC = 'cuc', HUF = 'huf', BOB = 'bob', XCD = 'xcd', SSP = 'ssp', ZMW = 'zmw', SYP = 'syp', MOP = 'mop', TOP = 'top', MWK = 'mwk', KYD = 'kyd', CHF = 'chf', UYU = 'uyu', INR = 'inr', NGN = 'ngn', CAD = 'cad', AZN = 'azn', DZD = 'dzd', IDR = 'idr', KMF = 'kmf', DKK = 'dkk', NPR = 'npr', NOK = 'nok', OMR = 'omr', BYN = 'byn', IQD = 'iqd', JEP = 'jep', KZT = 'kzt', MDL = 'mdl', TMT = 'tmt', AFN = 'afn', PEN = 'pen', NIO = 'nio', MMK = 'mmk', XDR = 'xdr', GMD = 'gmd', SEK = 'sek', GTQ = 'gtq', NAD = 'nad', MRU = 'mru', SLL = 'sll', TVD = 'tvd', BDT = 'bdt', VUV = 'vuv', THB = 'thb', YER = 'yer', BHD = 'bhd', KES = 'kes', AUD = 'aud', KHR = 'khr', TND = 'tnd', TZS = 'tzs', KRW = 'krw', HKD = 'hkd', MKD = 'mkd', CRC = 'crc', COP = 'cop', TRY = 'try', ALL = 'all', BRL = 'brl', SGD = 'sgd', SOS = 'sos', PGK = 'pgk', ZAR = 'zar', SCR = 'scr', MVR = 'mvr', SRD = 'srd', SDG = 'sdg', PKR = 'pkr', KID = 'kid', LRD = 'lrd', AWG = 'awg', STN = 'stn', UZS = 'uzs', MYR = 'myr', TTD = 'ttd', BWP = 'bwp', FKP = 'fkp', IMP = 'imp', MNT = 'mnt', RON = 'ron', DOP = 'dop', FJD = 'fjd', HNL = 'hnl', ILS = 'ils', BAM = 'bam', MXN = 'mxn', PLN = 'pln', TWD = 'twd', FOK = 'fok', ARS = 'ars' }
export const enum CustomerEligibilityStatus { SpecificConditions = 'specific-conditions', AllCustomers = 'all-customers', Other = 'other', NewCustomers = 'new-customers', ReturningCustomers = 'returning-customers', VipCustomers = 'vip-customers' }
export const enum LifecycleStatus { Active = 'active', Suspended = 'suspended', Cancelled = 'cancelled', Expired = 'expired', Redeemed = 'redeemed', Issued = 'issued' }
export const enum PaymentMethod { MobileWallet = 'mobile-wallet', Cash = 'cash', MobilePayment = 'mobile-payment', DebitCard = 'debit-card', Paypal = 'paypal', Other = 'other', Cryptocurrency = 'cryptocurrency', CashOnDelivery = 'cash-on-delivery', Check = 'check', BankTransfer = 'bank-transfer', CreditCard = 'credit-card' }
export const enum FinancialTransactionStatus { Cancelled = 'cancelled', SettlementInProgress = 'settlement-in-progress', Failed = 'failed', Disputed = 'disputed', Authorized = 'authorized', Cleared = 'cleared', Refunded = 'refunded', Pending = 'pending' }
export const enum AuditOpinionType { Unqualified = 'unqualified', Adverse = 'adverse', Qualified = 'qualified', Disclaimer = 'disclaimer' }
export const enum InventoryStorageType { Warehouse = 'warehouse', OnlineMarketplace = 'online-marketplace', Consignment = 'consignment', DistributionCenter = 'distribution-center', DropShipper = 'drop-shipper', Other = 'other', RetailStore = 'retail-store' }
export const enum ItemCondition { Used = 'used', LikeNew = 'like-new', New = 'new', Refurbished = 'refurbished', OpenBox = 'open-box', Damaged = 'damaged' }
export const enum TransactionType { Payment = 'payment', Refund = 'refund', Adjustment = 'adjustment', Fee = 'fee', Deposit = 'deposit', Charge = 'charge', Transfer = 'transfer', Withdrawal = 'withdrawal' }
export const enum VisibilityScope { Private = 'private', Internal = 'internal', Web = 'web', App = 'app', Global = 'global' }
export const enum PaymentStatus { Submitted = 'submitted', PartiallyRefunded = 'partially-refunded', Deleted = 'deleted', Pending = 'pending', Succeeded = 'succeeded', Paid = 'paid', Cancelled = 'cancelled', Error = 'error', Adjusted = 'adjusted', Processing = 'processing', Partial = 'partial', Authorized = 'authorized', Failed = 'failed', Refunded = 'refunded', Draft = 'draft', Disputed = 'disputed', Overdue = 'overdue', Voided = 'voided' }
export const enum EntityLifecycleStatus { Scheduled = 'scheduled', Preorder = 'preorder', Inactive = 'inactive', Archived = 'archived', Draft = 'draft', Deleted = 'deleted', Active = 'active' }
export const enum TransactionChannel { Mail = 'mail', Atm = 'atm', BankBranch = 'bank-branch', Online = 'online', Mobile = 'mobile', Telephone = 'telephone', InPerson = 'in-person', Other = 'other' }
export const enum FinancialDisputeStatus { Lost = 'lost', NeedsResponse = 'needs-response', UnderReview = 'under-review', Won = 'won', Closed = 'closed', AwaitingEvidence = 'awaiting-evidence', Escalated = 'escalated', ChargeRefunded = 'charge-refunded' }
export const enum ContentVisibility { Public = 'public', Shared = 'shared', Internal = 'internal', Protected = 'protected', Private = 'private' }
export const enum DeviceUsageType { Home = 'home', Industrial = 'industrial', Other = 'other', Personal = 'personal', Business = 'business', Educational = 'educational', Healthcare = 'healthcare' }
export const enum EntityCategory { User = 'user', Person = 'person', Link = 'link', Event = 'event', Owner = 'owner', Project = 'project', Other = 'other', Task = 'task', Message = 'message', Document = 'document' }
export const enum GenderIdentity { PreferNotToSay = 'prefer-not-to-say', Male = 'male', Other = 'other', Female = 'female' }
export const enum CommunicationMethod { Email = 'email', InstantMessage = 'instant-message', PushNotification = 'push-notification', InPerson = 'in-person', Text = 'text', Sms = 'sms', SocialMedia = 'social-media', Phone = 'phone', VideoCall = 'video-call', Other = 'other', Mail = 'mail' }
export const enum FinancialTransactionType { SpendOverpayment = 'spend-overpayment', Adjustment = 'adjustment', Chargeback = 'chargeback', Transfer = 'transfer', Dividend = 'dividend', Other = 'other', Deposit = 'deposit', SpendPrepayment = 'spend-prepayment', Withdrawal = 'withdrawal', Interest = 'interest', ReceiveOverpayment = 'receive-overpayment', Payment = 'payment', ReceivePrepayment = 'receive-prepayment', Receive = 'receive', Sale = 'sale', Refund = 'refund', Fee = 'fee', Spend = 'spend', Charge = 'charge' }
export const enum EmailCategoryType { Spam = 'spam', Governmental = 'governmental', Business = 'business', Personal = 'personal', Promotional = 'promotional', Other = 'other', Educational = 'educational', Transactional = 'transactional' }
export const enum UniversalIdentifierType { Uuid = 'uuid', Email = 'email', Number = 'number', Url = 'url', String = 'string' }
export const enum AccessControlModel { Mac = 'mac', Abac = 'abac', Rbac = 'rbac', Custom = 'custom', None = 'none', Dac = 'dac' }
export const enum ParticipantType { Group = 'group', Team = 'team', Organization = 'organization', ExternalParticipant = 'external-participant', User = 'user' }
export const enum PriorityLevel { Elevated = 'elevated', Low = 'low', Medium = 'medium', High = 'high', Urgent = 'urgent' }
export const enum TaskStatus { Todo = 'todo', Done = 'done', InProgress = 'in-progress', Blocked = 'blocked', Cancelled = 'cancelled', OnHold = 'on-hold' }
export const enum UserStatus { Inactive = 'inactive', Pending = 'pending', Active = 'active', Banned = 'banned', Deleted = 'deleted', Verified = 'verified', Archived = 'archived', Suspended = 'suspended', WaitListed = 'wait-listed' }
export const enum PromotionType { BuyOneGetOne = 'buy-one-get-one', RewardPoints = 'reward-points', Percentage = 'percentage', FixedAmount = 'fixed-amount', FreeShipping = 'free-shipping', Other = 'other' }
export const enum MimeType { ImageJpeg = 'image/jpeg', ImagePng = 'image/png', ImageGif = 'image/gif', ImageSvgXml = 'image/svg+xml', ImageWebp = 'image/webp' }
export const enum PrerequisiteRangeType { Quantity = 'quantity', Subtotal = 'subtotal', ShippingPrice = 'shipping-price' }
export const enum TaxType { Inclusive = 'inclusive', Additive = 'additive', Variable = 'variable' }
export const enum ModifierType { List = 'list', Text = 'text' }
export const enum CardType { Credit = 'credit', Debit = 'debit', UnknownCard = 'unknown-card' }
export const enum PrepaidType { NotPrepaid = 'not-prepaid', UnknownPrepaid = 'unknown-prepaid', Prepaid = 'prepaid' }
export const enum EntryMethod { OnFile = 'on-file', Contactless = 'contactless', Keyed = 'keyed', Swiped = 'swiped', Emv = 'emv' }
export const enum CvvStatus { Rejected = 'rejected', Accepted = 'accepted', NotChecked = 'not-checked' }
export const enum AvcStatus { Accepted = 'accepted', Rejected = 'rejected', NotChecked = 'not-checked' }
export const enum CreditType { Goodwill = 'goodwill', Customer = 'customer', Overpayment = 'overpayment', Prepayment = 'prepayment', Supplier = 'supplier' }
export const enum CallDirection { Unknown = 'unknown', Outbound = 'outbound', Conference = 'conference', Inbound = 'inbound' }
export const enum SpeakerRole { Invitee = 'invitee', Attendee = 'attendee' }
export const enum FileType { Folder = 'folder', Url = 'url', File = 'file' }
export const enum AiToolChoiceType { Any = 'any', Auto = 'auto', Tool = 'tool', None = 'none' }
export const enum ImageType { Base64 = 'base64' }
export const enum ResponseFormatType { Text = 'text', JsonObject = 'json-object', JsonSchema = 'json-schema' }
export const enum ToolCallType { Function = 'function' }
export const enum AiMessagesContentType { Image = 'image', Text = 'text', ToolResult = 'tool-result', ToolUse = 'tool-use' }
export const enum AiRole { Assistant = 'assistant', User = 'user', Tool = 'tool' }
export const enum JsonSchemaType { Function = 'function' }
export const enum EventStatus { Confirmed = 'confirmed', Tentative = 'tentative', Cancelled = 'cancelled' }
export const enum EventVisibility { Confidential = 'confidential', Public = 'public', Private = 'private' }
export const enum EventReminderAction { Popup = 'popup', Email = 'email' }
export const enum EventRuleType { Repeat = 'repeat', ExcludeDates = 'exclude-dates', Exclude = 'exclude', AddDates = 'add-dates' }
export const enum EventFrequency { Weekly = 'weekly', Monthly = 'monthly', Daily = 'daily', Yearly = 'yearly' }
