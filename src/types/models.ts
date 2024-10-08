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
export interface Contacts { relationship?: string;
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
    userRoles?: UserRoles[];
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
    leadId?: string }
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
export const enum CustomerSelection { Prerequisite = 'prerequisite', All = 'all' }
export const enum Format { Json = 'json', Xml = 'xml' }
export const enum ChannelAvailability { Online = 'online', InApp = 'in-app', InStore = 'in-store', AllChannels = 'all-channels' }
export const enum Status { Scheduled = 'scheduled', Active = 'active', Expired = 'expired' }
export const enum AccountType { OtherIncomeDividendIncome = 'other-income::dividend-income', OtherExpenseHomeOwnerRentalInsurance = 'other-expense::home-owner-rental-insurance', EquityDividendDisbursed = 'equity::dividend-disbursed', ExpenseShippingFreightDelivery = 'expense::shipping-freight-delivery', LiabilityAccrualsAndDeferredIncome = 'liability::accruals-and-deferred-income', LiabilityOutstandingDuesMicroSmallEnterprise = 'liability::outstanding-dues-micro-small-enterprise', ExpenseTravel = 'expense::travel', LiabilityBankLoans = 'liability::bank-loans', OtherCurrentLiabilityStateLocalIncomeTaxPayable = 'other-current-liability::state-local-income-tax-payable', OtherExpenseRentAndLease = 'other-expense::rent-and-lease', OtherIncomeLossOnDisposalOfAssets = 'other-income::loss-on-disposal-of-assets', OtherCurrentLiabilityDutiesAndTaxes = 'other-current-liability::duties-and-taxes', ExpenseDuesSubscriptions = 'expense::dues-subscriptions', ExpenseOfficeGeneralAdministrativeExpenses = 'expense::office-general-administrative-expenses', OtherIncomeOtherMiscellaneousIncome = 'other-income::other-miscellaneous-income', LiabilityProvisionsNonCurrentLiabilities = 'liability::provisions-non-current-liabilities', AssetIntangibleAssets = 'asset::intangible-assets', OtherExpenseDepletion = 'other-expense::depletion', Asset = 'asset', ExpenseGlobalTaxExpense = 'expense::global-tax-expense', EquityAccumulatedOtherComprehensiveIncome = 'equity::accumulated-other-comprehensive-income', ExpenseTravelExpensesSellingExpense = 'expense::travel-expenses-selling-expense', RevenueOperatingGrants = 'revenue::operating-grants', EquityInvestmentGrants = 'equity::investment-grants', ExpensePurchasesRebates = 'expense::purchases-rebates', AssetAccumulatedAmortizationOfOtherAssets = 'asset::accumulated-amortization-of-other-assets', EquityPartnerContributions = 'equity::partner-contributions', LiabilityGroupAndAssociates = 'liability::group-and-associates', RevenueCashReceiptIncome = 'revenue::cash-receipt-income', OtherExpenseGasAndFuel = 'other-expense::gas-and-fuel', OtherCurrentLiabilityShortTermBorrowings = 'other-current-liability::short-term-borrowings', OtherExpenseWashAndRoadServices = 'other-expense::wash-and-road-services', OtherIncome = 'other-income', AssetIntangibleAssetsUnderDevelopment = 'asset::intangible-assets-under-development', AssetOrganizationalCosts = 'asset::organizational-costs', Liability = 'liability', OtherExpenseVehicleLease = 'other-expense::vehicle-lease', ExpenseInsurance = 'expense::insurance', RevenueSalesWholesale = 'revenue::sales-wholesale', AssetAllowanceForBadDebts = 'asset::allowance-for-bad-debts', AssetFurnitureAndFixtures = 'asset::furniture-and-fixtures', ExpenseTravelMeals = 'expense::travel-meals', EquityEstimatedTaxes = 'equity::estimated-taxes', OtherCurrentLiabilitySundryDebtorsAndCreditors = 'other-current-liability::sundry-debtors-and-creditors', AssetOtherCurrentAssets = 'asset::other-current-assets', AssetMoneyMarket = 'asset::money-market', ExpenseProjectStudiesSurveysAssessments = 'expense::project-studies-surveys-assessments', OtherCurrentLiabilityGlobalTaxPayable = 'other-current-liability::global-tax-payable', OtherCurrentLiabilityGlobalTaxSuspense = 'other-current-liability::global-tax-suspense', OtherCurrentLiability = 'other-current-liability', OtherExpenseDepreciation = 'other-expense::depreciation', EquityPreferredStock = 'equity::preferred-stock', AssetProvisionsNonCurrentAssets = 'asset::provisions-non-current-assets', EquityPersonalExpense = 'equity::personal-expense', OtherExpenseExtraordinaryItems = 'other-expense::extraordinary-items', AssetOtherLongTermAssets = 'asset::other-long-term-assets', OtherCurrentLiabilityCurrentPortionOfObligationsUnderFinanceLeases = 'other-current-liability::current-portion-of-obligations-under-finance-leases', AssetPrepaymentsAndAccruedIncome = 'asset::prepayments-and-accrued-income', AssetProvisionsCurrentAssets = 'asset::provisions-current-assets', ExpenseAdvertisingPromotional = 'expense::advertising-promotional', ExpenseOtherSellingExpenses = 'expense::other-selling-expenses', OtherIncomeInterestEarned = 'other-income::interest-earned', CostOfGoodsSoldFreightAndDeliveryCost = 'cost-of-goods-sold::freight-and-delivery-cost', AssetLoansToOfficers = 'asset::loans-to-officers', ExpenseBorrowingCost = 'expense::borrowing-cost', CostOfGoodsSold = 'cost-of-goods-sold', AssetSavings = 'asset::savings', ExpenseEquipmentRental = 'expense::equipment-rental', LiabilityAccruedLongTermLiabilities = 'liability::accrued-long-term-liabilities', LiabilityLongTermLiability = 'liability::long-term-liability', OtherIncomeUnrealisedLossOnSecuritiesNetOfTax = 'other-income::unrealised-loss-on-securities-net-of-tax', Expense = 'expense', CostOfGoodsSoldEquipmentRentalCos = 'cost-of-goods-sold::equipment-rental-cos', OtherExpenseMatCredit = 'other-expense::mat-credit', OtherCurrentLiabilityRentsInTrustLiability = 'other-current-liability::rents-in-trust-liability', AssetLoansToOthers = 'asset::loans-to-others', ExpenseInterestPaid = 'expense::interest-paid', OtherCurrentLiabilityProvisionsCurrentLiabilities = 'other-current-liability::provisions-current-liabilities', AssetVehicles = 'asset::vehicles', AssetOtherConsumables = 'asset::other-consumables', AssetCashAndCashEquivalents = 'asset::cash-and-cash-equivalents', OtherCurrentLiabilityTrustAccountsLiabilities = 'other-current-liability::trust-accounts-liabilities', AssetUndepositedFunds = 'asset::undeposited-funds', LiabilityOutstandingDuesOtherThanMicroSmallEnterprise = 'liability::outstanding-dues-other-than-micro-small-enterprise', OtherExpenseExchangeGainOrLoss = 'other-expense::exchange-gain-or-loss', RevenueNonProfitIncome = 'revenue::non-profit-income', AssetFixedAssetSoftware = 'asset::fixed-asset-software', AssetPrepaidExpenses = 'asset::prepaid-expenses', ExpenseCostOfLabor = 'expense::cost-of-labor', AssetFixedAssetOtherToolsEquipment = 'asset::fixed-asset-other-tools-equipment', EquityOpeningBalanceEquity = 'equity::opening-balance-equity', ExpenseCharitableContributions = 'expense::charitable-contributions', OtherCurrentLiabilityPrepaidExpensesPayable = 'other-current-liability::prepaid-expenses-payable', AssetInvestmentUsGovernmentObligations = 'asset::investment-us-government-obligations', OtherExpenseMortgageInterest = 'other-expense::mortgage-interest', OtherExpenseVehicleRegistration = 'other-expense::vehicle-registration', AssetRentsHeldInTrust = 'asset::rents-held-in-trust', LiabilityLongTermBorrowings = 'liability::long-term-borrowings', AssetBuildings = 'asset::buildings', AssetCashOnHand = 'asset::cash-on-hand', OtherCurrentLiabilitySalesTaxPayable = 'other-current-liability::sales-tax-payable', LiabilityLiabilitiesRelatedToAssetsHeldForSale = 'liability::liabilities-related-to-assets-held-for-sale', RevenueSalesRetail = 'revenue::sales-retail', AssetOtherIntangibleAssets = 'asset::other-intangible-assets', AccountsReceivable = 'accounts-receivable', ExpenseDistributionCosts = 'expense::distribution-costs', AssetLicenses = 'asset::licenses', CostOfGoodsSoldShippingFreightDeliveryCos = 'cost-of-goods-sold::shipping-freight-delivery-cos', ExpenseOtherRentalCosts = 'expense::other-rental-costs', AssetFixedAssetPhone = 'asset::fixed-asset-phone', AssetAccumulatedDepreciation = 'asset::accumulated-depreciation', AssetLeaseBuyout = 'asset::lease-buyout', AssetAccumulatedAmortization = 'asset::accumulated-amortization', AssetLandAsset = 'asset::land-asset', AssetOtherAsset = 'asset::other-asset', LiabilityShareholderNotesPayable = 'liability::shareholder-notes-payable', RevenueOtherCurrentOperatingIncome = 'revenue::other-current-operating-income', OtherExpenseParkingAndTolls = 'other-expense::parking-and-tolls', ExpenseAppropriationsToDepreciation = 'expense::appropriations-to-depreciation', EquityMoneyReceivedAgainstShareWarrants = 'equity::money-received-against-share-warrants', RevenueServiceFeeIncome = 'revenue::service-fee-income', ExpenseOtherExternalServices = 'expense::other-external-services', ExpenseTaxesPaid = 'expense::taxes-paid', OtherExpenseVehicle = 'other-expense::vehicle', AssetShortTermLoansAndAdvancesToRelatedParties = 'asset::short-term-loans-and-advances-to-related-parties', OtherCurrentLiabilityProvisionForWarrantyObligations = 'other-current-liability::provision-for-warranty-obligations', AssetParticipatingInterests = 'asset::participating-interests', AssetBank = 'asset::bank', AssetOtherEarMarkedBankAccounts = 'asset::other-ear-marked-bank-accounts', RevenueSavingsByTaxScheme = 'revenue::savings-by-tax-scheme', EquityPartnerDistributions = 'equity::partner-distributions', EquityCapitalReserves = 'equity::capital-reserves', AssetOtherFixedAssets = 'asset::other-fixed-assets', OtherCurrentLiabilityStaffAndRelatedLiabilityAccounts = 'other-current-liability::staff-and-related-liability-accounts', AssetChecking = 'asset::checking', OtherIncomeGainLossOnSaleOfInvestments = 'other-income::gain-loss-on-sale-of-investments', EquityTreasuryStock = 'equity::treasury-stock', ExpenseAuto = 'expense::auto', ExpenseExtraordinaryCharges = 'expense::extraordinary-charges', OtherExpensePenaltiesSettlements = 'other-expense::penalties-settlements', ExpenseEntertainment = 'expense::entertainment', OtherCurrentLiabilityInsurancePayable = 'other-current-liability::insurance-payable', OtherExpenseIncomeTaxOtherExpense = 'other-expense::income-tax-other-expense', RevenueOtherPrimaryIncome = 'revenue::other-primary-income', AssetEmployeeCashAdvances = 'asset::employee-cash-advances', EquityAccumulatedAdjustment = 'equity::accumulated-adjustment', LiabilityAccountsPayable = 'liability::accounts-payable', EquityShareCapital = 'equity::share-capital', AssetInternalTransfers = 'asset::internal-transfers', AssetInvestmentTaxExemptSecurities = 'asset::investment-tax-exempt-securities', RevenueSalesOfProductIncome = 'revenue::sales-of-product-income', AssetFixedAssetCopiers = 'asset::fixed-asset-copiers', RevenueRevenueGeneral = 'revenue::revenue-general', EquityShareApplicationMoneyPendingAllotment = 'equity::share-application-money-pending-allotment', ExpenseOtherMiscellaneousServiceCost = 'expense::other-miscellaneous-service-cost', EquityOwnersEquity = 'equity::owners-equity', ExpensePenaltiesSettlements = 'expense::penalties-settlements', Income = 'income', LiabilityGovernmentAndOtherPublicAuthorities = 'liability::government-and-other-public-authorities', LiabilityOtherLongTermProvisions = 'liability::other-long-term-provisions', AssetLongTermInvestments = 'asset::long-term-investments', OtherExpenseDeferredTaxExpense = 'other-expense::deferred-tax-expense', ExpenseUtilities = 'expense::utilities', LiabilityNotesPayable = 'liability::notes-payable', ExpenseShippingAndDeliveryExpense = 'expense::shipping-and-delivery-expense', AssetGlobalTaxDeferred = 'asset::global-tax-deferred', ExpenseBankCharges = 'expense::bank-charges', RevenueDiscountsRefundsGiven = 'revenue::discounts-refunds-given', OtherCurrentLiabilityCurrentPortionEmployeeBenefitsObligations = 'other-current-liability::current-portion-employee-benefits-obligations', OtherExpense = 'other-expense', OtherCurrentLiabilityLineOfCredit = 'other-current-liability::line-of-credit', AssetOtherCurrentAsset = 'asset::other-current-asset', AssetBalWithGovtAuthorities = 'asset::bal-with-govt-authorities', ExpenseOtherCurrentOperatingCharges = 'expense::other-current-operating-charges', LiabilityLongTermDebit = 'liability::long-term-debit', ExpenseCommissionsAndFees = 'expense::commissions-and-fees', ExpensePromotionalMeals = 'expense::promotional-meals', OtherExpenseAmortization = 'other-expense::amortization', RevenueIncome = 'revenue::income', ExpenseIncomeTaxExpense = 'expense::income-tax-expense', AssetInvestmentOther = 'asset::investment-other', OtherIncomeOtherOperatingIncome = 'other-income::other-operating-income', ExpenseRepairMaintenance = 'expense::repair-maintenance', AssetCapitalWip = 'asset::capital-wip', AssetSecurityDeposits = 'asset::security-deposits', LiabilityProvisionForLiabilities = 'liability::provision-for-liabilities', LiabilityOtherLongTermLiabilities = 'liability::other-long-term-liabilities', AssetExpenditureAuthorisationsAndLettersOfCredit = 'asset::expenditure-authorisations-and-letters-of-credit', LiabilityStaffAndRelatedLongTermLiabilityAccounts = 'liability::staff-and-related-long-term-liability-accounts', EquityCommonStock = 'equity::common-stock', AssetFixedAssetFurniture = 'asset::fixed-asset-furniture', AssetInvestmentMortgageRealEstateLoans = 'asset::investment-mortgage-real-estate-loans', AssetMachineryAndEquipment = 'asset::machinery-and-equipment', OtherIncomeTaxExemptInterest = 'other-income::tax-exempt-interest', OtherCurrentLiabilityOtherCurrentLiabilities = 'other-current-liability::other-current-liabilities', OtherCurrentLiabilitySocialSecurityAgencies = 'other-current-liability::social-security-agencies', OtherExpenseOtherMiscellaneousExpense = 'other-expense::other-miscellaneous-expense', AssetAssetsHeldForSale = 'asset::assets-held-for-sale', ExpenseOtherBusinessExpenses = 'expense::other-business-expenses', AssetOtherLongTermLoansAndAdvances = 'asset::other-long-term-loans-and-advances', AssetCumulativeDepreciationOnIntangibleAssets = 'asset::cumulative-depreciation-on-intangible-assets', AssetAssetsInCourseOfConstruction = 'asset::assets-in-course-of-construction', AssetTrustAccounts = 'asset::trust-accounts', ExpenseBadDebts = 'expense::bad-debts', ExpenseSundry = 'expense::sundry', ExpenseUnappliedCashBillPaymentExpense = 'expense::unapplied-cash-bill-payment-expense', CostOfGoodsSoldCostOfSales = 'cost-of-goods-sold::cost-of-sales', AssetDepletableAssets = 'asset::depletable-assets', AssetInvestments = 'asset::investments', AssetAssetsAvailableForSale = 'asset::assets-available-for-sale', OtherCurrentLiabilityCurrentLiabilities = 'other-current-liability::current-liabilities', OtherExpensePriorPeriodItems = 'other-expense::prior-period-items', OtherExpenseExceptionalItems = 'other-expense::exceptional-items', LiabilityAccruedVacationPayable = 'liability::accrued-vacation-payable', OtherExpenseVehicleRepairs = 'other-expense::vehicle-repairs', LiabilityLongTermEmployeeBenefitObligations = 'liability::long-term-employee-benefit-obligations', OtherIncomeOtherInvestmentIncome = 'other-income::other-investment-income', ExpenseEntertainmentMeals = 'expense::entertainment-meals', AssetLoansToStockholders = 'asset::loans-to-stockholders', AssetLand = 'asset::land', AssetDevelopmentCosts = 'asset::development-costs', OtherExpenseHomeOffice = 'other-expense::home-office', AssetGlobalTaxRefund = 'asset::global-tax-refund', EquityFunds = 'equity::funds', OtherCurrentLiabilityTradeAndOtherPayables = 'other-current-liability::trade-and-other-payables', AssetFixedAssetComputers = 'asset::fixed-asset-computers', ExpenseSuppliesMaterials = 'expense::supplies-materials', ExpenseLegalProfessionalFees = 'expense::legal-professional-fees', EquityPartnersEquity = 'equity::partners-equity', AssetFixedAsset = 'asset::fixed-asset', AssetGoodwill = 'asset::goodwill', RevenueOwnWorkCapitalized = 'revenue::own-work-capitalized', AssetTradeAndOtherReceivables = 'asset::trade-and-other-receivables', AssetAccumulatedDepletion = 'asset::accumulated-depletion', CostOfGoodsSoldOtherCostsOfServiceCos = 'cost-of-goods-sold::other-costs-of-service-cos', EquityHealthcare = 'equity::healthcare', EquityOtherFreeReserves = 'equity::other-free-reserves', AssetOtherLongTermInvestments = 'asset::other-long-term-investments', LiabilityCreditCard = 'liability::credit-card', OtherCurrentLiabilityPayrollTaxPayable = 'other-current-liability::payroll-tax-payable', OtherCurrentLiabilityDividendsPayable = 'other-current-liability::dividends-payable', Equity = 'equity', AssetNonCurrentAssets = 'asset::non-current-assets', OtherCurrentLiabilityCurrentTaxLiability = 'other-current-liability::current-tax-liability', ExpenseStaffCosts = 'expense::staff-costs', AssetFixedAssetPhotoVideo = 'asset::fixed-asset-photo-video', ExpenseLossOnDiscontinuedOperationsNetOfTax = 'expense::loss-on-discontinued-operations-net-of-tax', OtherCurrentLiabilityFederalIncomeTaxPayable = 'other-current-liability::federal-income-tax-payable', OtherExpenseOtherHomeOfficeExpenses = 'other-expense::other-home-office-expenses', EquityEquityInEarningsOfSubsidiuaries = 'equity::equity-in-earnings-of-subsidiuaries', OtherExpenseRepairsAndMaintenance = 'other-expense::repairs-and-maintenance', OtherExpenseVehicleLoanInterest = 'other-expense::vehicle-loan-interest', RevenueUnappliedCashPaymentIncome = 'revenue::unapplied-cash-payment-income', AssetLongTermLoansAndAdvancesToRelatedParties = 'asset::long-term-loans-and-advances-to-related-parties', ExpenseRentOrLeaseOfBuildings = 'expense::rent-or-lease-of-buildings', AssetDeferredTax = 'asset::deferred-tax', OtherCurrentLiabilityInterestPayables = 'other-current-liability::interest-payables', AssetAvailableForSaleFinancialAssets = 'asset::available-for-sale-financial-assets', AssetCalledUpShareCapitalNotPaid = 'asset::called-up-share-capital-not-paid', OtherIncomeGainLossOnSaleOfFixedAssets = 'other-income::gain-loss-on-sale-of-fixed-assets', OtherExpenseTaxRoundoffGainOrLoss = 'other-expense::tax-roundoff-gain-or-loss', AssetProvisionsFixedAssets = 'asset::provisions-fixed-assets', ExpenseTravelExpensesGeneralAndAdminExpenses = 'expense::travel-expenses-general-and-admin-expenses', LiabilityDebtsRelatedToParticipatingInterests = 'liability::debts-related-to-participating-interests', ExpenseExternalServices = 'expense::external-services', ExpensePayrollExpenses = 'expense::payroll-expenses', OtherCurrentLiabilityAccruedLiabilities = 'other-current-liability::accrued-liabilities', EquityCalledUpShareCapital = 'equity::called-up-share-capital', OtherCurrentLiabilityPayrollClearing = 'other-current-liability::payroll-clearing', AssetInventory = 'asset::inventory', EquityPersonalIncome = 'equity::personal-income', ExpenseFinanceCosts = 'expense::finance-costs', AssetLeaseholdImprovements = 'asset::leasehold-improvements', OtherExpenseUtilities = 'other-expense::utilities', AssetRetainage = 'asset::retainage', CostOfGoodsSoldCostOfLaborCos = 'cost-of-goods-sold::cost-of-labor-cos', ExpenseManagementCompensation = 'expense::management-compensation', LiabilityDeferredTaxLiabilities = 'liability::deferred-tax-liabilities', OtherCurrentLiabilityDirectDepositPayable = 'other-current-liability::direct-deposit-payable', LiabilityObligationsUnderFinanceLeases = 'liability::obligations-under-finance-leases', OtherExpenseVehicleInsurance = 'other-expense::vehicle-insurance', EquityPaidInCapitalOrSurplus = 'equity::paid-in-capital-or-surplus', EquityRetainedEarnings = 'equity::retained-earnings', CostOfGoodsSoldSuppliesMaterialsCogs = 'cost-of-goods-sold::supplies-materials-cogs', OtherExpenseVehicleLoan = 'other-expense::vehicle-loan', AssetShortTermInvestmentsInRelatedParties = 'asset::short-term-investments-in-related-parties', ExpenseOfficeExpenses = 'expense::office-expenses', OtherCurrentLiabilityLoanPayable = 'other-current-liability::loan-payable', OtherExpenseOtherVehicleExpenses = 'other-expense::other-vehicle-expenses', ExpenseAmortizationExpense = 'expense::amortization-expense' }
export const enum TargetSelection { All = 'all', Entitled = 'entitled' }
export const enum MinimumRequirements { MinimumQuantityOfItems = 'minimum-quantity-of-items', MinimumPurchaseAmount = 'minimum-purchase-amount', None = 'none' }
export const enum SkuValidation { None = 'none', GlobalUnique = 'global-unique', LocalUnique = 'local-unique' }
export const enum Roles { User = 'user', Moderator = 'moderator', Admin = 'admin' }
export const enum AllocationMethod { Each = 'each', Across = 'across' }
export const enum AppliesTo { SpecificCategories = 'specific-categories', SpecificItems = 'specific-items', AllItems = 'all-items' }
export const enum TransactionMethod { Telephone = 'telephone', BankBranch = 'bank-branch', Atm = 'atm', Online = 'online', Mail = 'mail', Mobile = 'mobile' }
export const enum UserRoles { User = 'user', Moderator = 'moderator', Admin = 'admin' }
export const enum TargetType { LineItem = 'line-item', ShippingLine = 'shipping-line' }
export const enum ReceiverRoles { Moderator = 'moderator', User = 'user', Admin = 'admin' }
export const enum CustomerEligibility { All = 'all', SpecificCustomers = 'specific-customers', SpecificCustomerGroups = 'specific-customer-groups' }
export const enum Gender { PreferNotToSay = 'prefer not to say', Male = 'male', Other = 'other', Female = 'female' }
export const enum Country { Peru = 'peru', Morocco = 'morocco', Chad = 'chad', Mauritania = 'mauritania', SaoTomeAndPrincipe = 'sao-tome-and-principe', NewZealand = 'new-zealand', CongoRepublic = 'congo-republic', Latvia = 'latvia', Lesotho = 'lesotho', SriLanka = 'sri-lanka', Niger = 'niger', Cambodia = 'cambodia', Dominica = 'dominica', Argentina = 'argentina', Mali = 'mali', Bahrain = 'bahrain', Poland = 'poland', Albania = 'albania', Thailand = 'thailand', PapuaNewGuinea = 'papua-new-guinea', Singapore = 'singapore', Tanzania = 'tanzania', Ukraine = 'ukraine', Montenegro = 'montenegro', CoteDIvoire = 'cote-d-ivoire', Afghanistan = 'afghanistan', Iceland = 'iceland', Belgium = 'belgium', Somalia = 'somalia', Paraguay = 'paraguay', Italy = 'italy', Taiwan = 'taiwan', Libya = 'libya', Grenada = 'grenada', Tunisia = 'tunisia', Portugal = 'portugal', UnitedKingdom = 'united-kingdom', Eswatini = 'eswatini', Lebanon = 'lebanon', Austria = 'austria', Malawi = 'malawi', Moldova = 'moldova', Djibouti = 'djibouti', Kyrgyzstan = 'kyrgyzstan', Palau = 'palau', SouthSudan = 'south-sudan', Tajikistan = 'tajikistan', VaticanCity = 'vatican-city', CaboVerde = 'cabo-verde', Benin = 'benin', Liberia = 'liberia', Rwanda = 'rwanda', Sweden = 'sweden', Nicaragua = 'nicaragua', Australia = 'australia', DominicanRepublic = 'dominican-republic', Algeria = 'algeria', Zimbabwe = 'zimbabwe', Gambia = 'gambia', SaintLucia = 'saint-lucia', Indonesia = 'indonesia', Samoa = 'samoa', Yemen = 'yemen', Iraq = 'iraq', Andorra = 'andorra', CongoDemocraticRepublic = 'congo-democratic-republic', CostaRica = 'costa-rica', France = 'france', Greece = 'greece', GuineaBissau = 'guinea-bissau', Malta = 'malta', SouthKorea = 'south-korea', Jamaica = 'jamaica', TimorLeste = 'timor-leste', Togo = 'togo', Tuvalu = 'tuvalu', Russia = 'russia', Slovenia = 'slovenia', Colombia = 'colombia', Haiti = 'haiti', Ethiopia = 'ethiopia', Bahamas = 'bahamas', Kuwait = 'kuwait', SanMarino = 'san-marino', UnitedStates = 'united-states', Seychelles = 'seychelles', Georgia = 'georgia', ElSalvador = 'el-salvador', Turkey = 'turkey', Azerbaijan = 'azerbaijan', Panama = 'panama', Eritrea = 'eritrea', Israel = 'israel', Myanmar = 'myanmar', TrinidadAndTobago = 'trinidad-and-tobago', China = 'china', Denmark = 'denmark', SaintKittsAndNevis = 'saint-kitts-and-nevis', Barbados = 'barbados', Malaysia = 'malaysia', UnitedArabEmirates = 'united-arab-emirates', EquatorialGuinea = 'equatorial-guinea', Uzbekistan = 'uzbekistan', Bolivia = 'bolivia', Mauritius = 'mauritius', Nigeria = 'nigeria', Ireland = 'ireland', Fiji = 'fiji', SaudiArabia = 'saudi-arabia', Turkmenistan = 'turkmenistan', Sudan = 'sudan', Suriname = 'suriname', Germany = 'germany', Oman = 'oman', Vietnam = 'vietnam', Uruguay = 'uruguay', Gabon = 'gabon', Brazil = 'brazil', Syria = 'syria', Mozambique = 'mozambique', Cyprus = 'cyprus', SierraLeone = 'sierra-leone', Vanuatu = 'vanuatu', Philippines = 'philippines', AntiguaAndBarbuda = 'antigua-and-barbuda', Serbia = 'serbia', Guatemala = 'guatemala', CzechRepublic = 'czech-republic', MarshallIslands = 'marshall-islands', Madagascar = 'madagascar', Nauru = 'nauru', SolomonIslands = 'solomon-islands', CentralAfricanRepublic = 'central-african-republic', Belize = 'belize', Namibia = 'namibia', Kenya = 'kenya', Iran = 'iran', SaintVincentAndTheGrenadines = 'saint-vincent-and-the-grenadines', Finland = 'finland', Liechtenstein = 'liechtenstein', SouthAfrica = 'south-africa', Uganda = 'uganda', Comoros = 'comoros', Pakistan = 'pakistan', Bhutan = 'bhutan', Ecuador = 'ecuador', Laos = 'laos', BurkinaFaso = 'burkina-faso', Burundi = 'burundi', Japan = 'japan', Monaco = 'monaco', Egypt = 'egypt', Brunei = 'brunei', Guyana = 'guyana', Nepal = 'nepal', Norway = 'norway', BosniaAndHerzegovina = 'bosnia-and-herzegovina', Chile = 'chile', Palestine = 'palestine', Ghana = 'ghana', Belarus = 'belarus', Maldives = 'maldives', Guinea = 'guinea', Croatia = 'croatia', Qatar = 'qatar', Honduras = 'honduras', Senegal = 'senegal', Slovakia = 'slovakia', Spain = 'spain', Switzerland = 'switzerland', Zambia = 'zambia', Netherlands = 'netherlands', Jordan = 'jordan', Mexico = 'mexico', Luxembourg = 'luxembourg', Estonia = 'estonia', India = 'india', Bangladesh = 'bangladesh', Armenia = 'armenia', Kiribati = 'kiribati', Lithuania = 'lithuania', Micronesia = 'micronesia', Mongolia = 'mongolia', Cuba = 'cuba', Canada = 'canada', Kazakhstan = 'kazakhstan', Romania = 'romania', Venezuela = 'venezuela', Hungary = 'hungary', Angola = 'angola', Cameroon = 'cameroon', Botswana = 'botswana', NorthKorea = 'north-korea', NorthMacedonia = 'north-macedonia', Bulgaria = 'bulgaria', Tonga = 'tonga' }
export const enum GlobalTaxType { Vat = 'vat', ExciseTax = 'excise-tax', Gst = 'gst', SalesTax = 'sales-tax', CustomsDuty = 'customs-duty', PropertyTax = 'property-tax', Other = 'other' }
export const enum JournalEntryStatus { Posted = 'posted', Draft = 'draft', Voided = 'voided', Pending = 'pending', Error = 'error', Corrected = 'corrected' }
export const enum IdentityProvider { Instagram = 'instagram', Foursquare = 'foursquare', Whatsapp = 'whatsapp', Google = 'google', Dribbble = 'dribbble', Slack = 'slack', Wechat = 'wechat', Tiktok = 'tiktok', Yahoo = 'yahoo', Line = 'line', Reddit = 'reddit', Apple = 'apple', Flickr = 'flickr', Snapchat = 'snapchat', Twitter = 'twitter', Telegram = 'telegram', Other = 'other', Qq = 'qq', Behance = 'behance', Vimeo = 'vimeo', Discord = 'discord', Linkedin = 'linkedin', Amazon = 'amazon', Facebook = 'facebook', Github = 'github', Signal = 'signal', Pinterest = 'pinterest', Paypal = 'paypal', Tumblr = 'tumblr', Microsoft = 'microsoft' }
export const enum DayOfWeek { Wednesday = 'wednesday', Tuesday = 'tuesday', Friday = 'friday', Monday = 'monday', Saturday = 'saturday', Thursday = 'thursday', Sunday = 'sunday' }
export const enum AccountEngagementLevel { Unknown = 'unknown', Hot = 'hot', Cold = 'cold', Warm = 'warm' }
export const enum ReviewApprovalStatus { InReview = 'in-review', Pending = 'pending', Approved = 'approved', Revised = 'revised', Rejected = 'rejected' }
export const enum StakeholderType { Investor = 'investor', Customer = 'customer', Competitor = 'competitor', Partner = 'partner', Vendor = 'vendor', Other = 'other' }
export const enum AccountStatus { Active = 'active', Pending = 'pending', Inactive = 'inactive', Closed = 'closed', Suspended = 'suspended' }
export const enum CampaignStatus { Archived = 'archived', Draft = 'draft', Scheduled = 'scheduled', Paused = 'paused', Active = 'active', Completed = 'completed', Planned = 'planned', Cancelled = 'cancelled' }
export const enum CustomerType { Corporate = 'corporate', B2b = 'b2b', Retail = 'retail', Online = 'online', B2c = 'b2c', Wholesale = 'wholesale' }
export const enum AccountingAccountType { EquityEquityInEarningsOfSubsidiuaries = 'equity::equity-in-earnings-of-subsidiuaries', AssetShortTermLoansAndAdvancesToRelatedParties = 'asset::short-term-loans-and-advances-to-related-parties', AssetLand = 'asset::land', OtherExpenseTaxRoundoffGainOrLoss = 'other-expense::tax-roundoff-gain-or-loss', RevenueUnappliedCashPaymentIncome = 'revenue::unapplied-cash-payment-income', EquityOtherFreeReserves = 'equity::other-free-reserves', LiabilityGovernmentAndOtherPublicAuthorities = 'liability::government-and-other-public-authorities', OtherIncomeUnrealisedLossOnSecuritiesNetOfTax = 'other-income::unrealised-loss-on-securities-net-of-tax', AssetLeaseBuyout = 'asset::lease-buyout', EquityCommonStock = 'equity::common-stock', AssetFixedAssetComputers = 'asset::fixed-asset-computers', OtherExpenseVehicleLoanInterest = 'other-expense::vehicle-loan-interest', Equity = 'equity', LiabilityDebtsRelatedToParticipatingInterests = 'liability::debts-related-to-participating-interests', AssetProvisionsNonCurrentAssets = 'asset::provisions-non-current-assets', AssetCashAndCashEquivalents = 'asset::cash-and-cash-equivalents', OtherExpenseMortgageInterest = 'other-expense::mortgage-interest', EquityCalledUpShareCapital = 'equity::called-up-share-capital', ExpenseTravelExpensesSellingExpense = 'expense::travel-expenses-selling-expense', AssetBalWithGovtAuthorities = 'asset::bal-with-govt-authorities', EquityPersonalIncome = 'equity::personal-income', OtherExpenseDepletion = 'other-expense::depletion', AssetAccumulatedAmortizationOfOtherAssets = 'asset::accumulated-amortization-of-other-assets', ExpenseCharitableContributions = 'expense::charitable-contributions', AssetFurnitureAndFixtures = 'asset::furniture-and-fixtures', OtherCurrentLiabilityInsurancePayable = 'other-current-liability::insurance-payable', AssetMachineryAndEquipment = 'asset::machinery-and-equipment', OtherCurrentLiabilitySalesTaxPayable = 'other-current-liability::sales-tax-payable', OtherCurrentLiabilityCurrentPortionOfObligationsUnderFinanceLeases = 'other-current-liability::current-portion-of-obligations-under-finance-leases', AssetFixedAssetOtherToolsEquipment = 'asset::fixed-asset-other-tools-equipment', OtherCurrentLiabilityLoanPayable = 'other-current-liability::loan-payable', AssetExpenditureAuthorisationsAndLettersOfCredit = 'asset::expenditure-authorisations-and-letters-of-credit', CostOfGoodsSoldOtherCostsOfServiceCos = 'cost-of-goods-sold::other-costs-of-service-cos', LiabilityAccruedLongTermLiabilities = 'liability::accrued-long-term-liabilities', OtherCurrentLiabilityCurrentTaxLiability = 'other-current-liability::current-tax-liability', OtherExpense = 'other-expense', LiabilityOtherLongTermLiabilities = 'liability::other-long-term-liabilities', AssetInvestmentTaxExemptSecurities = 'asset::investment-tax-exempt-securities', ExpenseEquipmentRental = 'expense::equipment-rental', ExpenseAuto = 'expense::auto', LiabilityAccrualsAndDeferredIncome = 'liability::accruals-and-deferred-income', CostOfGoodsSoldCostOfSales = 'cost-of-goods-sold::cost-of-sales', OtherCurrentLiabilityRentsInTrustLiability = 'other-current-liability::rents-in-trust-liability', OtherCurrentLiabilityOtherCurrentLiabilities = 'other-current-liability::other-current-liabilities', RevenueIncome = 'revenue::income', ExpenseEntertainment = 'expense::entertainment', ExpenseAppropriationsToDepreciation = 'expense::appropriations-to-depreciation', OtherExpenseMatCredit = 'other-expense::mat-credit', OtherIncomeInterestEarned = 'other-income::interest-earned', OtherExpenseWashAndRoadServices = 'other-expense::wash-and-road-services', EquityMoneyReceivedAgainstShareWarrants = 'equity::money-received-against-share-warrants', LiabilityProvisionForLiabilities = 'liability::provision-for-liabilities', OtherExpenseOtherVehicleExpenses = 'other-expense::other-vehicle-expenses', ExpenseOtherBusinessExpenses = 'expense::other-business-expenses', OtherExpenseVehicleLoan = 'other-expense::vehicle-loan', ExpenseRentOrLeaseOfBuildings = 'expense::rent-or-lease-of-buildings', AssetInvestmentMortgageRealEstateLoans = 'asset::investment-mortgage-real-estate-loans', AssetOrganizationalCosts = 'asset::organizational-costs', OtherExpenseRentAndLease = 'other-expense::rent-and-lease', OtherExpenseParkingAndTolls = 'other-expense::parking-and-tolls', LiabilityDeferredTaxLiabilities = 'liability::deferred-tax-liabilities', AssetLandAsset = 'asset::land-asset', AssetLicenses = 'asset::licenses', ExpenseTaxesPaid = 'expense::taxes-paid', AssetDeferredTax = 'asset::deferred-tax', EquityHealthcare = 'equity::healthcare', AssetFixedAssetFurniture = 'asset::fixed-asset-furniture', ExpenseInterestPaid = 'expense::interest-paid', ExpenseSundry = 'expense::sundry', OtherExpenseAmortization = 'other-expense::amortization', EquityShareCapital = 'equity::share-capital', LiabilityShareholderNotesPayable = 'liability::shareholder-notes-payable', OtherExpenseVehicleRegistration = 'other-expense::vehicle-registration', LiabilityObligationsUnderFinanceLeases = 'liability::obligations-under-finance-leases', LiabilityOtherLongTermProvisions = 'liability::other-long-term-provisions', AssetAllowanceForBadDebts = 'asset::allowance-for-bad-debts', LiabilityAccountsPayable = 'liability::accounts-payable', OtherIncomeOtherInvestmentIncome = 'other-income::other-investment-income', ExpenseOfficeGeneralAdministrativeExpenses = 'expense::office-general-administrative-expenses', AssetEmployeeCashAdvances = 'asset::employee-cash-advances', ExpenseOtherExternalServices = 'expense::other-external-services', ExpenseRepairMaintenance = 'expense::repair-maintenance', ExpenseDuesSubscriptions = 'expense::dues-subscriptions', ExpenseTravel = 'expense::travel', RevenueCashReceiptIncome = 'revenue::cash-receipt-income', AssetProvisionsFixedAssets = 'asset::provisions-fixed-assets', ExpenseFinanceCosts = 'expense::finance-costs', OtherIncome = 'other-income', ExpenseOtherRentalCosts = 'expense::other-rental-costs', Expense = 'expense', AssetPrepaidExpenses = 'asset::prepaid-expenses', AssetGoodwill = 'asset::goodwill', AssetInvestmentUsGovernmentObligations = 'asset::investment-us-government-obligations', AssetRentsHeldInTrust = 'asset::rents-held-in-trust', LiabilityNotesPayable = 'liability::notes-payable', LiabilityBankLoans = 'liability::bank-loans', EquityShareApplicationMoneyPendingAllotment = 'equity::share-application-money-pending-allotment', ExpenseIncomeTaxExpense = 'expense::income-tax-expense', OtherCurrentLiabilityShortTermBorrowings = 'other-current-liability::short-term-borrowings', ExpensePromotionalMeals = 'expense::promotional-meals', OtherExpenseDepreciation = 'other-expense::depreciation', OtherExpensePenaltiesSettlements = 'other-expense::penalties-settlements', AssetInternalTransfers = 'asset::internal-transfers', AssetMoneyMarket = 'asset::money-market', AssetInventory = 'asset::inventory', AssetLoansToOfficers = 'asset::loans-to-officers', AssetUndepositedFunds = 'asset::undeposited-funds', EquityPartnersEquity = 'equity::partners-equity', ExpenseExternalServices = 'expense::external-services', ExpenseLegalProfessionalFees = 'expense::legal-professional-fees', LiabilityGroupAndAssociates = 'liability::group-and-associates', CostOfGoodsSoldEquipmentRentalCos = 'cost-of-goods-sold::equipment-rental-cos', OtherCurrentLiabilityAccruedLiabilities = 'other-current-liability::accrued-liabilities', RevenueSalesOfProductIncome = 'revenue::sales-of-product-income', OtherCurrentLiabilityGlobalTaxSuspense = 'other-current-liability::global-tax-suspense', OtherIncomeDividendIncome = 'other-income::dividend-income', EquityAccumulatedAdjustment = 'equity::accumulated-adjustment', ExpenseOtherMiscellaneousServiceCost = 'expense::other-miscellaneous-service-cost', AccountsReceivable = 'accounts-receivable', OtherExpenseRepairsAndMaintenance = 'other-expense::repairs-and-maintenance', EquityTreasuryStock = 'equity::treasury-stock', EquityDividendDisbursed = 'equity::dividend-disbursed', AssetOtherEarMarkedBankAccounts = 'asset::other-ear-marked-bank-accounts', ExpenseAmortizationExpense = 'expense::amortization-expense', ExpenseShippingAndDeliveryExpense = 'expense::shipping-and-delivery-expense', LiabilityOutstandingDuesOtherThanMicroSmallEnterprise = 'liability::outstanding-dues-other-than-micro-small-enterprise', OtherCurrentLiabilityDividendsPayable = 'other-current-liability::dividends-payable', AssetSavings = 'asset::savings', ExpenseExtraordinaryCharges = 'expense::extraordinary-charges', RevenueOtherPrimaryIncome = 'revenue::other-primary-income', ExpenseAdvertisingPromotional = 'expense::advertising-promotional', OtherExpensePriorPeriodItems = 'other-expense::prior-period-items', ExpenseBorrowingCost = 'expense::borrowing-cost', EquityOpeningBalanceEquity = 'equity::opening-balance-equity', OtherIncomeOtherMiscellaneousIncome = 'other-income::other-miscellaneous-income', OtherIncomeGainLossOnSaleOfFixedAssets = 'other-income::gain-loss-on-sale-of-fixed-assets', EquityOwnersEquity = 'equity::owners-equity', ExpenseOtherCurrentOperatingCharges = 'expense::other-current-operating-charges', AssetAssetsHeldForSale = 'asset::assets-held-for-sale', OtherExpenseOtherHomeOfficeExpenses = 'other-expense::other-home-office-expenses', OtherCurrentLiabilityTrustAccountsLiabilities = 'other-current-liability::trust-accounts-liabilities', AssetOtherIntangibleAssets = 'asset::other-intangible-assets', ExpenseOtherSellingExpenses = 'expense::other-selling-expenses', AssetChecking = 'asset::checking', AssetAccumulatedDepreciation = 'asset::accumulated-depreciation', AssetIntangibleAssets = 'asset::intangible-assets', AssetCapitalWip = 'asset::capital-wip', AssetDepletableAssets = 'asset::depletable-assets', OtherCurrentLiabilityLineOfCredit = 'other-current-liability::line-of-credit', EquityRetainedEarnings = 'equity::retained-earnings', CostOfGoodsSoldFreightAndDeliveryCost = 'cost-of-goods-sold::freight-and-delivery-cost', ExpenseStaffCosts = 'expense::staff-costs', AssetIntangibleAssetsUnderDevelopment = 'asset::intangible-assets-under-development', OtherCurrentLiabilityPayrollClearing = 'other-current-liability::payroll-clearing', OtherCurrentLiabilityPrepaidExpensesPayable = 'other-current-liability::prepaid-expenses-payable', LiabilityLongTermDebit = 'liability::long-term-debit', AssetAssetsInCourseOfConstruction = 'asset::assets-in-course-of-construction', ExpenseEntertainmentMeals = 'expense::entertainment-meals', OtherExpenseExtraordinaryItems = 'other-expense::extraordinary-items', LiabilityCreditCard = 'liability::credit-card', ExpenseTravelExpensesGeneralAndAdminExpenses = 'expense::travel-expenses-general-and-admin-expenses', OtherCurrentLiabilityDutiesAndTaxes = 'other-current-liability::duties-and-taxes', Asset = 'asset', AssetRetainage = 'asset::retainage', OtherExpenseOtherMiscellaneousExpense = 'other-expense::other-miscellaneous-expense', OtherExpenseDeferredTaxExpense = 'other-expense::deferred-tax-expense', AssetFixedAssetPhone = 'asset::fixed-asset-phone', AssetOtherCurrentAsset = 'asset::other-current-asset', EquityPreferredStock = 'equity::preferred-stock', AssetOtherAsset = 'asset::other-asset', OtherExpenseGasAndFuel = 'other-expense::gas-and-fuel', AssetTrustAccounts = 'asset::trust-accounts', RevenueSalesWholesale = 'revenue::sales-wholesale', ExpenseGlobalTaxExpense = 'expense::global-tax-expense', AssetOtherConsumables = 'asset::other-consumables', AssetAccumulatedDepletion = 'asset::accumulated-depletion', OtherCurrentLiabilityFederalIncomeTaxPayable = 'other-current-liability::federal-income-tax-payable', CostOfGoodsSoldSuppliesMaterialsCogs = 'cost-of-goods-sold::supplies-materials-cogs', AssetAvailableForSaleFinancialAssets = 'asset::available-for-sale-financial-assets', AssetBank = 'asset::bank', EquityAccumulatedOtherComprehensiveIncome = 'equity::accumulated-other-comprehensive-income', LiabilityLiabilitiesRelatedToAssetsHeldForSale = 'liability::liabilities-related-to-assets-held-for-sale', RevenueNonProfitIncome = 'revenue::non-profit-income', ExpenseBadDebts = 'expense::bad-debts', AssetLeaseholdImprovements = 'asset::leasehold-improvements', AssetGlobalTaxDeferred = 'asset::global-tax-deferred', OtherCurrentLiabilityStaffAndRelatedLiabilityAccounts = 'other-current-liability::staff-and-related-liability-accounts', RevenueSalesRetail = 'revenue::sales-retail', EquityInvestmentGrants = 'equity::investment-grants', ExpenseCostOfLabor = 'expense::cost-of-labor', AssetInvestments = 'asset::investments', RevenueOtherCurrentOperatingIncome = 'revenue::other-current-operating-income', EquityPaidInCapitalOrSurplus = 'equity::paid-in-capital-or-surplus', EquityPartnerDistributions = 'equity::partner-distributions', ExpenseUnappliedCashBillPaymentExpense = 'expense::unapplied-cash-bill-payment-expense', OtherCurrentLiabilityStateLocalIncomeTaxPayable = 'other-current-liability::state-local-income-tax-payable', OtherExpenseVehicle = 'other-expense::vehicle', AssetBuildings = 'asset::buildings', OtherCurrentLiabilitySocialSecurityAgencies = 'other-current-liability::social-security-agencies', OtherCurrentLiabilitySundryDebtorsAndCreditors = 'other-current-liability::sundry-debtors-and-creditors', LiabilityStaffAndRelatedLongTermLiabilityAccounts = 'liability::staff-and-related-long-term-liability-accounts', AssetGlobalTaxRefund = 'asset::global-tax-refund', OtherCurrentLiability = 'other-current-liability', LiabilityAccruedVacationPayable = 'liability::accrued-vacation-payable', ExpenseOfficeExpenses = 'expense::office-expenses', AssetCumulativeDepreciationOnIntangibleAssets = 'asset::cumulative-depreciation-on-intangible-assets', CostOfGoodsSoldCostOfLaborCos = 'cost-of-goods-sold::cost-of-labor-cos', EquityEstimatedTaxes = 'equity::estimated-taxes', AssetLongTermLoansAndAdvancesToRelatedParties = 'asset::long-term-loans-and-advances-to-related-parties', ExpenseCommissionsAndFees = 'expense::commissions-and-fees', ExpenseSuppliesMaterials = 'expense::supplies-materials', AssetLoansToOthers = 'asset::loans-to-others', AssetInvestmentOther = 'asset::investment-other', OtherExpenseHomeOwnerRentalInsurance = 'other-expense::home-owner-rental-insurance', OtherCurrentLiabilityTradeAndOtherPayables = 'other-current-liability::trade-and-other-payables', ExpenseTravelMeals = 'expense::travel-meals', AssetOtherLongTermAssets = 'asset::other-long-term-assets', AssetPrepaymentsAndAccruedIncome = 'asset::prepayments-and-accrued-income', AssetFixedAssetCopiers = 'asset::fixed-asset-copiers', EquityFunds = 'equity::funds', OtherExpenseVehicleInsurance = 'other-expense::vehicle-insurance', AssetProvisionsCurrentAssets = 'asset::provisions-current-assets', AssetCashOnHand = 'asset::cash-on-hand', AssetDevelopmentCosts = 'asset::development-costs', EquityCapitalReserves = 'equity::capital-reserves', RevenueRevenueGeneral = 'revenue::revenue-general', OtherExpenseHomeOffice = 'other-expense::home-office', AssetFixedAssetSoftware = 'asset::fixed-asset-software', OtherCurrentLiabilityPayrollTaxPayable = 'other-current-liability::payroll-tax-payable', AssetOtherCurrentAssets = 'asset::other-current-assets', AssetVehicles = 'asset::vehicles', RevenueOwnWorkCapitalized = 'revenue::own-work-capitalized', AssetFixedAsset = 'asset::fixed-asset', ExpenseUtilities = 'expense::utilities', AssetOtherLongTermInvestments = 'asset::other-long-term-investments', EquityPartnerContributions = 'equity::partner-contributions', AssetOtherFixedAssets = 'asset::other-fixed-assets', RevenueSavingsByTaxScheme = 'revenue::savings-by-tax-scheme', ExpensePurchasesRebates = 'expense::purchases-rebates', RevenueOperatingGrants = 'revenue::operating-grants', OtherIncomeOtherOperatingIncome = 'other-income::other-operating-income', LiabilityOutstandingDuesMicroSmallEnterprise = 'liability::outstanding-dues-micro-small-enterprise', OtherExpenseVehicleLease = 'other-expense::vehicle-lease', OtherIncomeTaxExemptInterest = 'other-income::tax-exempt-interest', AssetLongTermInvestments = 'asset::long-term-investments', AssetAccumulatedAmortization = 'asset::accumulated-amortization', OtherCurrentLiabilityInterestPayables = 'other-current-liability::interest-payables', LiabilityLongTermBorrowings = 'liability::long-term-borrowings', LiabilityLongTermEmployeeBenefitObligations = 'liability::long-term-employee-benefit-obligations', ExpenseLossOnDiscontinuedOperationsNetOfTax = 'expense::loss-on-discontinued-operations-net-of-tax', OtherCurrentLiabilityDirectDepositPayable = 'other-current-liability::direct-deposit-payable', OtherCurrentLiabilityProvisionsCurrentLiabilities = 'other-current-liability::provisions-current-liabilities', ExpenseDistributionCosts = 'expense::distribution-costs', RevenueDiscountsRefundsGiven = 'revenue::discounts-refunds-given', AssetNonCurrentAssets = 'asset::non-current-assets', ExpensePayrollExpenses = 'expense::payroll-expenses', EquityPersonalExpense = 'equity::personal-expense', OtherCurrentLiabilityGlobalTaxPayable = 'other-current-liability::global-tax-payable', AssetSecurityDeposits = 'asset::security-deposits', AssetTradeAndOtherReceivables = 'asset::trade-and-other-receivables', ExpenseBankCharges = 'expense::bank-charges', OtherIncomeLossOnDisposalOfAssets = 'other-income::loss-on-disposal-of-assets', OtherCurrentLiabilityCurrentLiabilities = 'other-current-liability::current-liabilities', OtherCurrentLiabilityCurrentPortionEmployeeBenefitsObligations = 'other-current-liability::current-portion-employee-benefits-obligations', AssetLoansToStockholders = 'asset::loans-to-stockholders', AssetCalledUpShareCapitalNotPaid = 'asset::called-up-share-capital-not-paid', ExpenseInsurance = 'expense::insurance', AssetShortTermInvestmentsInRelatedParties = 'asset::short-term-investments-in-related-parties', CostOfGoodsSoldShippingFreightDeliveryCos = 'cost-of-goods-sold::shipping-freight-delivery-cos', OtherExpenseExceptionalItems = 'other-expense::exceptional-items', ExpenseProjectStudiesSurveysAssessments = 'expense::project-studies-surveys-assessments', LiabilityProvisionsNonCurrentLiabilities = 'liability::provisions-non-current-liabilities', OtherExpenseVehicleRepairs = 'other-expense::vehicle-repairs', OtherIncomeGainLossOnSaleOfInvestments = 'other-income::gain-loss-on-sale-of-investments', ExpenseShippingFreightDelivery = 'expense::shipping-freight-delivery', AssetOtherLongTermLoansAndAdvances = 'asset::other-long-term-loans-and-advances', AssetParticipatingInterests = 'asset::participating-interests', ExpenseManagementCompensation = 'expense::management-compensation', OtherCurrentLiabilityProvisionForWarrantyObligations = 'other-current-liability::provision-for-warranty-obligations', OtherExpenseUtilities = 'other-expense::utilities', AssetAssetsAvailableForSale = 'asset::assets-available-for-sale', CostOfGoodsSold = 'cost-of-goods-sold', OtherExpenseIncomeTaxOtherExpense = 'other-expense::income-tax-other-expense', LiabilityLongTermLiability = 'liability::long-term-liability', AssetFixedAssetPhotoVideo = 'asset::fixed-asset-photo-video', RevenueServiceFeeIncome = 'revenue::service-fee-income', OtherExpenseExchangeGainOrLoss = 'other-expense::exchange-gain-or-loss' }
export const enum MessageReadStatus { Unsent = 'unsent', Delivered = 'delivered', Read = 'read', Sent = 'sent', Failed = 'failed' }
export const enum MessageContentType { Video = 'video', Document = 'document', Gif = 'gif', Text = 'text', Voice = 'voice', Html = 'html', Image = 'image', Contact = 'contact', File = 'file', Sticker = 'sticker', Audio = 'audio', Link = 'link', Location = 'location' }
export const enum MessageDeliveryStatus { Failed = 'failed', Error = 'error', Read = 'read', Pending = 'pending', Delivered = 'delivered', Undeliverable = 'undeliverable', Sent = 'sent' }
export const enum ReactionType { Like = 'like', Wow = 'wow', Dislike = 'dislike', Sad = 'sad', Bookmark = 'bookmark', Interested = 'interested', Angry = 'angry', Laugh = 'laugh', Love = 'love' }
export const enum SupportTicketPriority { Low = 'low', Medium = 'medium', High = 'high', Urgent = 'urgent', Immediate = 'immediate' }
export const enum IssueLifecycleStatus { Open = 'open', Pending = 'pending', InProgress = 'in-progress', Closed = 'closed', Resolved = 'resolved', OnHold = 'on-hold', Waiting = 'waiting', Cancelled = 'cancelled' }
export const enum SupportQueryType { Task = 'task', Bug = 'bug', Question = 'question', Incident = 'incident', Problem = 'problem', FeatureRequest = 'feature-request', Feedback = 'feedback' }
export const enum OrderStatus { Processing = 'processing', AwaitingPayment = 'awaiting-payment', AwaitingShipment = 'awaiting-shipment', Delivered = 'delivered', Disputed = 'disputed', Draft = 'draft', Confirmed = 'confirmed', AwaitingPickup = 'awaiting-pickup', Shipped = 'shipped', Cancelled = 'cancelled', Completed = 'completed', Abandoned = 'abandoned', OnHold = 'on-hold', Failed = 'failed', Returned = 'returned', Refunded = 'refunded', Pending = 'pending', PartiallyFulfilled = 'partially-fulfilled' }
export const enum DiscountType { VariableAmount = 'variable-amount', Percentage = 'percentage', BuyOneGetOne = 'buy-one-get-one', VariablePercentage = 'variable-percentage', ConditionalDiscount = 'conditional-discount', FixedAmount = 'fixed-amount', UnknownDiscount = 'unknown-discount', TieredDiscount = 'tiered-discount' }
export const enum ImageMimeType { ImageGif = 'image/gif', ImageSvgXml = 'image/svg+xml', ImageBmp = 'image/bmp', ImageTiff = 'image/tiff', ImagePng = 'image/png', ImageWebp = 'image/webp', ImageHeic = 'image/heic', ImageJpeg = 'image/jpeg' }
export const enum FulfillmentStatus { Cancelled = 'cancelled', Pending = 'pending', InTransit = 'in-transit', Returned = 'returned', Delivered = 'delivered', Failure = 'failure' }
export const enum OrderingCriteria { PriceAscending = 'price-ascending', Manual = 'manual', PriceDescending = 'price-descending', Alphabetical = 'alphabetical', Rating = 'rating', Popularity = 'popularity', Relevance = 'relevance', CreationDate = 'creation-date' }
export const enum ChatType { Group = 'group', Private = 'private', Public = 'public' }
export const enum ProductAvailabilityStatus { OutOfStock = 'out-of-stock', Discontinued = 'discontinued', PreOrder = 'pre-order', InStock = 'in-stock', BackOrder = 'back-order' }
export const enum ExpenseApprovalStatus { Processed = 'processed', Pending = 'pending', Approved = 'approved', Cancelled = 'cancelled', New = 'new', Reviewing = 'reviewing', Denied = 'denied', Reimbursed = 'reimbursed' }
export const enum FinancialChargeType { ServiceCharge = 'service-charge', LateFee = 'late-fee', Other = 'other', TransactionFee = 'transaction-fee', InterestCharge = 'interest-charge', ProcessingFee = 'processing-fee', Commission = 'commission' }
export const enum ItemAvailabilityStatus { Discontinued = 'discontinued', OutOfStock = 'out-of-stock', Inactive = 'inactive', Active = 'active' }
export const enum BillingStatus { Overdue = 'overdue', PartiallyPaid = 'partially-paid', Pending = 'pending', Paid = 'paid', Draft = 'draft', Voided = 'voided', Submitted = 'submitted', Authorised = 'authorised', Unpaid = 'unpaid', Deleted = 'deleted' }
export const enum FinancialAccountStatus { Active = 'active', Closed = 'closed', Frozen = 'frozen', Inactive = 'inactive', UnderReview = 'under-review', Delinquent = 'delinquent', Suspended = 'suspended' }
export const enum TransactionStatus { Pending = 'pending', Cancelled = 'cancelled', Succeeded = 'succeeded', Error = 'error', InProgress = 'in-progress', Initiated = 'initiated', Failed = 'failed' }
export const enum InvoiceAdjustmentType { Other = 'other', Tip = 'tip', Tax = 'tax', Discount = 'discount', Shipping = 'shipping' }
export const enum DataType { Custom = 'custom', Binary = 'binary', Date = 'date', Undefined = 'undefined', String = 'string', Timestamp = 'timestamp', Array = 'array', Object = 'object', Null = 'null', Number = 'number', Boolean = 'boolean', Json = 'json' }
export const enum EmploymentType { Internship = 'internship', Freelance = 'freelance', Volunteer = 'volunteer', Permanent = 'permanent', FullTime = 'full-time', Contract = 'contract', Temporary = 'temporary', PartTime = 'part-time', Seasonal = 'seasonal' }
export const enum TimeCycle { AdHoc = 'ad-hoc', Custom = 'custom', Monthly = 'monthly', Quarterly = 'quarterly', Weekly = 'weekly', SemiMonthly = 'semi-monthly', SemiAnnually = 'semi-annually', Secondly = 'secondly', Biweekly = 'biweekly', Triennially = 'triennially', Hourly = 'hourly', Biennially = 'biennially', Minutely = 'minutely', Daily = 'daily', Annually = 'annually' }
export const enum FinancialTrackingCategories { Service = 'service', Other = 'other', Location = 'location', Employee = 'employee', Class = 'class', Project = 'project', Department = 'department', None = 'none', Division = 'division', CostCenter = 'cost-center', Customer = 'customer', Vendor = 'vendor', Product = 'product' }
export const enum CreditNoteStatus { Draft = 'draft', Issued = 'issued', Disputed = 'disputed', Void = 'void', Pending = 'pending', Cancelled = 'cancelled', Completed = 'completed', Revised = 'revised', Applied = 'applied' }
export const enum PaymentTerm { CashOnDelivery = 'cash-on-delivery', Custom = 'custom', CashBeforeShipment = 'cash-before-shipment', Installment = 'installment', DueOnReceipt = 'due-on-receipt', Net30 = 'net-30', Net = 'net', CashWithOrder = 'cash-with-order', Prepaid = 'prepaid', Prepayment = 'prepayment', CashInAdvance = 'cash-in-advance', DeferredPayment = 'deferred-payment', Net90 = 'net-90', DueEndOfMonth = 'due-end-of-month', Net60 = 'net-60', UponCompletion = 'upon-completion' }
export const enum EmploymentAndCandidateStatus { InReview = 'in-review', New = 'new', Interviewing = 'interviewing', OfferExtended = 'offer-extended', Hired = 'hired', Other = 'other', Active = 'active', NotSelected = 'not-selected', Inactive = 'inactive', OnLeave = 'on-leave', Terminated = 'terminated' }
export const enum OrganizationalRole { Director = 'director', Manager = 'manager', Employee = 'employee', Supervisor = 'supervisor', Contractor = 'contractor', Other = 'other', Admin = 'admin' }
export const enum CampaignType { SocialMedia = 'social-media', Display = 'display', SearchEngine = 'search-engine', Other = 'other', Email = 'email' }
export const enum ContactAddressType { Personal = 'personal', Work = 'work', Other = 'other', Business = 'business', Shipping = 'shipping', Temporary = 'temporary', Billing = 'billing', Home = 'home' }
export const enum CustomerStatus { Inactive = 'inactive', Active = 'active', Archived = 'archived', Pending = 'pending', Suspended = 'suspended' }
export const enum SocialPlatform { Snapchat = 'snapchat', Tumblr = 'tumblr', X = 'x', Skype = 'skype', Tiktok = 'tiktok', OtherSocialPlatform = 'other-social-platform', Facebook = 'facebook', Twitter = 'twitter', Reddit = 'reddit', Linkedin = 'linkedin', Youtube = 'youtube', Instagram = 'instagram', Pinterest = 'pinterest' }
export const enum LeadLifecycleStatus { Converted = 'converted', New = 'new', Lost = 'lost', Open = 'open', AttemptedToContact = 'attempted-to-contact', Connected = 'connected', BadTiming = 'bad-timing', Unqualified = 'unqualified', InProcess = 'in-process', Revisited = 'revisited' }
export const enum ConversationStatus { Archived = 'archived', Closed = 'closed', Deleted = 'deleted', Active = 'active', Snoozed = 'snoozed' }
export const enum CommunicationRole { User = 'user', Moderator = 'moderator', Member = 'member', Bot = 'bot', Admin = 'admin', Group = 'group', Channel = 'channel', System = 'system', Guest = 'guest', Assistant = 'assistant', Owner = 'owner', Service = 'service' }
export const enum ParticipantEngagementStatus { Moderator = 'moderator', Banned = 'banned', Guest = 'guest', Active = 'active', Inactive = 'inactive', Admin = 'admin', Left = 'left' }
export const enum ItemEntityStatus { Active = 'active', Pending = 'pending', Deleted = 'deleted', Inactive = 'inactive', Archived = 'archived', Suspended = 'suspended', Completed = 'completed' }
export const enum Currency { RON = 'ron', STN = 'stn', SYP = 'syp', KHR = 'khr', PHP = 'php', BYN = 'byn', SSP = 'ssp', EUR = 'eur', LBP = 'lbp', TND = 'tnd', JEP = 'jep', TOP = 'top', TRY = 'try', MRU = 'mru', UAH = 'uah', UGX = 'ugx', MGA = 'mga', USD = 'usd', WST = 'wst', JPY = 'jpy', PGK = 'pgk', BIF = 'bif', DKK = 'dkk', PYG = 'pyg', KWD = 'kwd', TJS = 'tjs', FOK = 'fok', GGP = 'ggp', NIO = 'nio', NZD = 'nzd', IDR = 'idr', MXN = 'mxn', SCR = 'scr', FJD = 'fjd', DJF = 'djf', JMD = 'jmd', RWF = 'rwf', AZN = 'azn', GTQ = 'gtq', XPF = 'xpf', TMT = 'tmt', CRC = 'crc', GEL = 'gel', MZN = 'mzn', KPW = 'kpw', KGS = 'kgs', SDG = 'sdg', HNL = 'hnl', LYD = 'lyd', AUD = 'aud', AED = 'aed', MOP = 'mop', CLP = 'clp', VES = 'ves', COP = 'cop', KYD = 'kyd', QAR = 'qar', SZL = 'szl', TZS = 'tzs', KRW = 'krw', BHD = 'bhd', XAF = 'xaf', AMD = 'amd', XCD = 'xcd', LSL = 'lsl', TTD = 'ttd', ISK = 'isk', ZMW = 'zmw', AWG = 'awg', IQD = 'iqd', TWD = 'twd', XOF = 'xof', GIP = 'gip', ZWL = 'zwl', ANG = 'ang', GBP = 'gbp', RUB = 'rub', ALL = 'all', BND = 'bnd', HUF = 'huf', BRL = 'brl', BTN = 'btn', ILS = 'ils', CUC = 'cuc', MVR = 'mvr', SLL = 'sll', CVE = 'cve', SRD = 'srd', UYU = 'uyu', ARS = 'ars', ERN = 'ern', HKD = 'hkd', BAM = 'bam', IMP = 'imp', KID = 'kid', NOK = 'nok', PKR = 'pkr', JOD = 'jod', SBD = 'sbd', SGD = 'sgd', TVD = 'tvd', INR = 'inr', NGN = 'ngn', PLN = 'pln', EGP = 'egp', UZS = 'uzs', MAD = 'mad', BGN = 'bgn', VUV = 'vuv', NAD = 'nad', DOP = 'dop', RSD = 'rsd', XDR = 'xdr', CHF = 'chf', LAK = 'lak', YER = 'yer', PAB = 'pab', HTG = 'htg', SOS = 'sos', BOB = 'bob', THB = 'thb', CZK = 'czk', BZD = 'bzd', MKD = 'mkd', NPR = 'npr', SAR = 'sar', ZAR = 'zar', DZD = 'dzd', HRK = 'hrk', KES = 'kes', CDF = 'cdf', LKR = 'lkr', GHS = 'ghs', MMK = 'mmk', MWK = 'mwk', SEK = 'sek', SHP = 'shp', MDL = 'mdl', AOA = 'aoa', OMR = 'omr', FKP = 'fkp', IRR = 'irr', MYR = 'myr', PEN = 'pen', VND = 'vnd', GYD = 'gyd', BWP = 'bwp', CAD = 'cad', BBD = 'bbd', BDT = 'bdt', CNY = 'cny', CUP = 'cup', ETB = 'etb', GMD = 'gmd', GNF = 'gnf', LRD = 'lrd', MNT = 'mnt', KMF = 'kmf', KZT = 'kzt', AFN = 'afn', MUR = 'mur', BSD = 'bsd', BMD = 'bmd' }
export const enum CustomerEligibilityStatus { AllCustomers = 'all-customers', NewCustomers = 'new-customers', SpecificConditions = 'specific-conditions', ReturningCustomers = 'returning-customers', VipCustomers = 'vip-customers', Other = 'other' }
export const enum LifecycleStatus { Issued = 'issued', Cancelled = 'cancelled', Active = 'active', Suspended = 'suspended', Redeemed = 'redeemed', Expired = 'expired' }
export const enum PaymentMethod { CashOnDelivery = 'cash-on-delivery', CreditCard = 'credit-card', Cash = 'cash', DebitCard = 'debit-card', MobilePayment = 'mobile-payment', Other = 'other', BankTransfer = 'bank-transfer', Cryptocurrency = 'cryptocurrency', MobileWallet = 'mobile-wallet', Paypal = 'paypal', Check = 'check' }
export const enum FinancialTransactionStatus { Pending = 'pending', Authorized = 'authorized', SettlementInProgress = 'settlement-in-progress', Cleared = 'cleared', Cancelled = 'cancelled', Refunded = 'refunded', Failed = 'failed', Disputed = 'disputed' }
export const enum AuditOpinionType { Disclaimer = 'disclaimer', Qualified = 'qualified', Adverse = 'adverse', Unqualified = 'unqualified' }
export const enum InventoryStorageType { Consignment = 'consignment', Warehouse = 'warehouse', DistributionCenter = 'distribution-center', DropShipper = 'drop-shipper', RetailStore = 'retail-store', OnlineMarketplace = 'online-marketplace', Other = 'other' }
export const enum ItemCondition { LikeNew = 'like-new', OpenBox = 'open-box', New = 'new', Refurbished = 'refurbished', Used = 'used', Damaged = 'damaged' }
export const enum TransactionType { Adjustment = 'adjustment', Charge = 'charge', Deposit = 'deposit', Withdrawal = 'withdrawal', Refund = 'refund', Payment = 'payment', Fee = 'fee', Transfer = 'transfer' }
export const enum VisibilityScope { App = 'app', Global = 'global', Internal = 'internal', Private = 'private', Web = 'web' }
export const enum PaymentStatus { Authorized = 'authorized', Succeeded = 'succeeded', Cancelled = 'cancelled', PartiallyRefunded = 'partially-refunded', Error = 'error', Refunded = 'refunded', Partial = 'partial', Draft = 'draft', Submitted = 'submitted', Pending = 'pending', Paid = 'paid', Failed = 'failed', Deleted = 'deleted', Adjusted = 'adjusted', Overdue = 'overdue', Disputed = 'disputed', Voided = 'voided', Processing = 'processing' }
export const enum EntityLifecycleStatus { Inactive = 'inactive', Scheduled = 'scheduled', Deleted = 'deleted', Active = 'active', Preorder = 'preorder', Archived = 'archived', Draft = 'draft' }
export const enum TransactionChannel { Mail = 'mail', InPerson = 'in-person', BankBranch = 'bank-branch', Online = 'online', Atm = 'atm', Telephone = 'telephone', Other = 'other', Mobile = 'mobile' }
export const enum FinancialDisputeStatus { NeedsResponse = 'needs-response', ChargeRefunded = 'charge-refunded', Won = 'won', Escalated = 'escalated', Closed = 'closed', UnderReview = 'under-review', Lost = 'lost', AwaitingEvidence = 'awaiting-evidence' }
export const enum ContentVisibility { Protected = 'protected', Shared = 'shared', Private = 'private', Public = 'public', Internal = 'internal' }
export const enum DeviceUsageType { Home = 'home', Business = 'business', Other = 'other', Educational = 'educational', Industrial = 'industrial', Personal = 'personal', Healthcare = 'healthcare' }
export const enum EntityCategory { Message = 'message', Task = 'task', Person = 'person', Link = 'link', Other = 'other', User = 'user', Event = 'event', Project = 'project', Owner = 'owner', Document = 'document' }
export const enum GenderIdentity { Male = 'male', Female = 'female', PreferNotToSay = 'prefer-not-to-say', Other = 'other' }
export const enum CommunicationMethod { InstantMessage = 'instant-message', VideoCall = 'video-call', Other = 'other', Text = 'text', Mail = 'mail', SocialMedia = 'social-media', Phone = 'phone', Email = 'email', InPerson = 'in-person', PushNotification = 'push-notification', Sms = 'sms' }
export const enum FinancialTransactionType { SpendOverpayment = 'spend-overpayment', SpendPrepayment = 'spend-prepayment', Adjustment = 'adjustment', Interest = 'interest', Payment = 'payment', ReceiveOverpayment = 'receive-overpayment', Withdrawal = 'withdrawal', Fee = 'fee', Transfer = 'transfer', Refund = 'refund', Sale = 'sale', Receive = 'receive', Deposit = 'deposit', Dividend = 'dividend', Charge = 'charge', Chargeback = 'chargeback', ReceivePrepayment = 'receive-prepayment', Spend = 'spend', Other = 'other' }
export const enum EmailCategoryType { Educational = 'educational', Transactional = 'transactional', Personal = 'personal', Spam = 'spam', Business = 'business', Other = 'other', Promotional = 'promotional', Governmental = 'governmental' }
export const enum UniversalIdentifierType { Number = 'number', Email = 'email', String = 'string', Url = 'url', Uuid = 'uuid' }
export const enum AccessControlModel { None = 'none', Rbac = 'rbac', Abac = 'abac', Dac = 'dac', Mac = 'mac', Custom = 'custom' }
export const enum ParticipantType { Team = 'team', User = 'user', ExternalParticipant = 'external-participant', Group = 'group', Organization = 'organization' }
export const enum PriorityLevel { Low = 'low', High = 'high', Urgent = 'urgent', Elevated = 'elevated', Medium = 'medium' }
export const enum TaskStatus { Todo = 'todo', InProgress = 'in-progress', Done = 'done', OnHold = 'on-hold', Blocked = 'blocked', Cancelled = 'cancelled' }
export const enum UserStatus { Inactive = 'inactive', Active = 'active', WaitListed = 'wait-listed', Verified = 'verified', Archived = 'archived', Banned = 'banned', Deleted = 'deleted', Pending = 'pending', Suspended = 'suspended' }
export const enum PromotionType { RewardPoints = 'reward-points', BuyOneGetOne = 'buy-one-get-one', Percentage = 'percentage', FixedAmount = 'fixed-amount', FreeShipping = 'free-shipping', Other = 'other' }
export const enum MimeType { ImageGif = 'image/gif', ImagePng = 'image/png', ImageWebp = 'image/webp', ImageSvgXml = 'image/svg+xml', ImageJpeg = 'image/jpeg' }
export const enum PrerequisiteRangeType { Quantity = 'quantity', Subtotal = 'subtotal', ShippingPrice = 'shipping-price' }
export const enum TaxType { Variable = 'variable', Inclusive = 'inclusive', Additive = 'additive' }
export const enum ModifierType { Text = 'text', List = 'list' }
export const enum CardType { Debit = 'debit', UnknownCard = 'unknown-card', Credit = 'credit' }
export const enum PrepaidType { Prepaid = 'prepaid', NotPrepaid = 'not-prepaid', UnknownPrepaid = 'unknown-prepaid' }
export const enum EntryMethod { Contactless = 'contactless', Swiped = 'swiped', Emv = 'emv', OnFile = 'on-file', Keyed = 'keyed' }
export const enum CvvStatus { NotChecked = 'not-checked', Rejected = 'rejected', Accepted = 'accepted' }
export const enum AvcStatus { Accepted = 'accepted', NotChecked = 'not-checked', Rejected = 'rejected' }
export const enum CreditType { Supplier = 'supplier', Prepayment = 'prepayment', Overpayment = 'overpayment', Goodwill = 'goodwill', Customer = 'customer' }
export const enum CallDirection { Outbound = 'outbound', Unknown = 'unknown', Conference = 'conference', Inbound = 'inbound' }
export const enum SpeakerRole { Invitee = 'invitee', Attendee = 'attendee' }
export const enum FileType { Folder = 'folder', File = 'file', Url = 'url' }
export const enum AiToolChoiceType { None = 'none', Tool = 'tool', Auto = 'auto', Any = 'any' }
export const enum ImageType { Base64 = 'base64' }
export const enum ResponseFormatType { JsonSchema = 'json-schema', JsonObject = 'json-object', Text = 'text' }
export const enum ToolCallType { Function = 'function' }
export const enum AiMessagesContentType { ToolResult = 'tool-result', Image = 'image', Text = 'text', ToolUse = 'tool-use' }
export const enum AiRole { Assistant = 'assistant', Tool = 'tool', User = 'user' }
export const enum JsonSchemaType { Function = 'function' }
export const enum EventStatus { Confirmed = 'confirmed', Cancelled = 'cancelled', Tentative = 'tentative' }
export const enum EventVisibility { Private = 'private', Public = 'public', Confidential = 'confidential' }
export const enum EventReminderAction { Email = 'email', Popup = 'popup' }
export const enum EventRuleType { AddDates = 'add-dates', Repeat = 'repeat', ExcludeDates = 'exclude-dates', Exclude = 'exclude' }
export const enum EventFrequency { Daily = 'daily', Weekly = 'weekly', Yearly = 'yearly', Monthly = 'monthly' }
