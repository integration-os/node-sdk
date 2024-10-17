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
export const enum CustomerSelection { Prerequisite = 'prerequisite', All = 'all' }
export const enum UserRoles { Moderator = 'moderator', User = 'user', Admin = 'admin' }
export const enum Gender { PreferNotToSay = 'prefer not to say', Other = 'other', Female = 'female', Male = 'male' }
export const enum Format { Json = 'json', Xml = 'xml' }
export const enum AccountType { OtherCurrentLiabilityCurrentTaxLiability = 'other-current-liability::current-tax-liability', LiabilityOutstandingDuesOtherThanMicroSmallEnterprise = 'liability::outstanding-dues-other-than-micro-small-enterprise', AssetFixedAssetCopiers = 'asset::fixed-asset-copiers', LiabilityDeferredTaxLiabilities = 'liability::deferred-tax-liabilities', EquityPartnersEquity = 'equity::partners-equity', CostOfGoodsSold = 'cost-of-goods-sold', LiabilityCreditCard = 'liability::credit-card', CostOfGoodsSoldOtherCostsOfServiceCos = 'cost-of-goods-sold::other-costs-of-service-cos', RevenueSalesRetail = 'revenue::sales-retail', RevenueServiceFeeIncome = 'revenue::service-fee-income', ExpenseOtherBusinessExpenses = 'expense::other-business-expenses', AssetFixedAssetOtherToolsEquipment = 'asset::fixed-asset-other-tools-equipment', ExpenseBorrowingCost = 'expense::borrowing-cost', ExpenseTravelExpensesSellingExpense = 'expense::travel-expenses-selling-expense', CostOfGoodsSoldSuppliesMaterialsCogs = 'cost-of-goods-sold::supplies-materials-cogs', LiabilityDebtsRelatedToParticipatingInterests = 'liability::debts-related-to-participating-interests', OtherExpenseDeferredTaxExpense = 'other-expense::deferred-tax-expense', OtherExpenseDepletion = 'other-expense::depletion', OtherExpenseVehicleRepairs = 'other-expense::vehicle-repairs', EquityCalledUpShareCapital = 'equity::called-up-share-capital', RevenueSavingsByTaxScheme = 'revenue::savings-by-tax-scheme', ExpensePromotionalMeals = 'expense::promotional-meals', ExpenseStaffCosts = 'expense::staff-costs', ExpenseOtherExternalServices = 'expense::other-external-services', AssetInvestmentTaxExemptSecurities = 'asset::investment-tax-exempt-securities', ExpenseDuesSubscriptions = 'expense::dues-subscriptions', AssetLicenses = 'asset::licenses', ExpenseInterestPaid = 'expense::interest-paid', EquityCapitalReserves = 'equity::capital-reserves', LiabilityBankLoans = 'liability::bank-loans', LiabilityProvisionForLiabilities = 'liability::provision-for-liabilities', LiabilityGroupAndAssociates = 'liability::group-and-associates', AssetGlobalTaxRefund = 'asset::global-tax-refund', OtherCurrentLiabilitySocialSecurityAgencies = 'other-current-liability::social-security-agencies', LiabilityAccruedLongTermLiabilities = 'liability::accrued-long-term-liabilities', Equity = 'equity', LiabilityOutstandingDuesMicroSmallEnterprise = 'liability::outstanding-dues-micro-small-enterprise', AssetOtherEarMarkedBankAccounts = 'asset::other-ear-marked-bank-accounts', OtherExpenseMortgageInterest = 'other-expense::mortgage-interest', EquityShareApplicationMoneyPendingAllotment = 'equity::share-application-money-pending-allotment', OtherCurrentLiabilityRentsInTrustLiability = 'other-current-liability::rents-in-trust-liability', AssetCapitalWip = 'asset::capital-wip', AssetDepletableAssets = 'asset::depletable-assets', AssetOtherLongTermAssets = 'asset::other-long-term-assets', ExpenseCostOfLabor = 'expense::cost-of-labor', ExpenseSundry = 'expense::sundry', EquityCommonStock = 'equity::common-stock', EquityInvestmentGrants = 'equity::investment-grants', EquityPersonalIncome = 'equity::personal-income', AssetFixedAssetComputers = 'asset::fixed-asset-computers', AssetLoansToOthers = 'asset::loans-to-others', ExpenseLegalProfessionalFees = 'expense::legal-professional-fees', LiabilityOtherLongTermLiabilities = 'liability::other-long-term-liabilities', OtherCurrentLiabilityProvisionForWarrantyObligations = 'other-current-liability::provision-for-warranty-obligations', AssetCashOnHand = 'asset::cash-on-hand', AssetInvestmentOther = 'asset::investment-other', AssetOtherLongTermLoansAndAdvances = 'asset::other-long-term-loans-and-advances', OtherCurrentLiabilitySundryDebtorsAndCreditors = 'other-current-liability::sundry-debtors-and-creditors', ExpenseExternalServices = 'expense::external-services', OtherExpenseMatCredit = 'other-expense::mat-credit', AssetLeaseBuyout = 'asset::lease-buyout', OtherCurrentLiabilityGlobalTaxPayable = 'other-current-liability::global-tax-payable', EquityPartnerContributions = 'equity::partner-contributions', LiabilityLongTermLiability = 'liability::long-term-liability', AssetIntangibleAssetsUnderDevelopment = 'asset::intangible-assets-under-development', OtherCurrentLiabilityStaffAndRelatedLiabilityAccounts = 'other-current-liability::staff-and-related-liability-accounts', AssetGoodwill = 'asset::goodwill', AssetPrepaidExpenses = 'asset::prepaid-expenses', EquityAccumulatedOtherComprehensiveIncome = 'equity::accumulated-other-comprehensive-income', OtherCurrentLiabilityPrepaidExpensesPayable = 'other-current-liability::prepaid-expenses-payable', OtherCurrentLiability = 'other-current-liability', RevenueSalesOfProductIncome = 'revenue::sales-of-product-income', AssetMoneyMarket = 'asset::money-market', AssetOrganizationalCosts = 'asset::organizational-costs', ExpenseTravel = 'expense::travel', OtherIncomeGainLossOnSaleOfInvestments = 'other-income::gain-loss-on-sale-of-investments', EquityDividendDisbursed = 'equity::dividend-disbursed', OtherIncomeGainLossOnSaleOfFixedAssets = 'other-income::gain-loss-on-sale-of-fixed-assets', LiabilityOtherLongTermProvisions = 'liability::other-long-term-provisions', RevenueRevenueGeneral = 'revenue::revenue-general', AssetInvestmentMortgageRealEstateLoans = 'asset::investment-mortgage-real-estate-loans', OtherExpenseDepreciation = 'other-expense::depreciation', LiabilityShareholderNotesPayable = 'liability::shareholder-notes-payable', ExpenseRepairMaintenance = 'expense::repair-maintenance', AssetInvestmentUsGovernmentObligations = 'asset::investment-us-government-obligations', AssetPrepaymentsAndAccruedIncome = 'asset::prepayments-and-accrued-income', ExpenseTravelMeals = 'expense::travel-meals', OtherCurrentLiabilityDirectDepositPayable = 'other-current-liability::direct-deposit-payable', RevenueCashReceiptIncome = 'revenue::cash-receipt-income', OtherCurrentLiabilitySalesTaxPayable = 'other-current-liability::sales-tax-payable', AssetAssetsInCourseOfConstruction = 'asset::assets-in-course-of-construction', AssetBank = 'asset::bank', AssetChecking = 'asset::checking', AssetInvestments = 'asset::investments', ExpenseBankCharges = 'expense::bank-charges', ExpenseUnappliedCashBillPaymentExpense = 'expense::unapplied-cash-bill-payment-expense', EquityPartnerDistributions = 'equity::partner-distributions', AssetFixedAsset = 'asset::fixed-asset', OtherIncomeTaxExemptInterest = 'other-income::tax-exempt-interest', EquityPaidInCapitalOrSurplus = 'equity::paid-in-capital-or-surplus', OtherCurrentLiabilityPayrollTaxPayable = 'other-current-liability::payroll-tax-payable', LiabilityLongTermEmployeeBenefitObligations = 'liability::long-term-employee-benefit-obligations', CostOfGoodsSoldFreightAndDeliveryCost = 'cost-of-goods-sold::freight-and-delivery-cost', OtherIncomeInterestEarned = 'other-income::interest-earned', ExpenseAmortizationExpense = 'expense::amortization-expense', RevenueSalesWholesale = 'revenue::sales-wholesale', Expense = 'expense', OtherCurrentLiabilityPayrollClearing = 'other-current-liability::payroll-clearing', OtherCurrentLiabilityTradeAndOtherPayables = 'other-current-liability::trade-and-other-payables', OtherExpenseRentAndLease = 'other-expense::rent-and-lease', ExpenseGlobalTaxExpense = 'expense::global-tax-expense', LiabilityGovernmentAndOtherPublicAuthorities = 'liability::government-and-other-public-authorities', OtherCurrentLiabilityFederalIncomeTaxPayable = 'other-current-liability::federal-income-tax-payable', ExpenseDistributionCosts = 'expense::distribution-costs', CostOfGoodsSoldEquipmentRentalCos = 'cost-of-goods-sold::equipment-rental-cos', ExpenseProjectStudiesSurveysAssessments = 'expense::project-studies-surveys-assessments', EquityTreasuryStock = 'equity::treasury-stock', OtherIncome = 'other-income', ExpenseAdvertisingPromotional = 'expense::advertising-promotional', OtherExpenseTaxRoundoffGainOrLoss = 'other-expense::tax-roundoff-gain-or-loss', AssetAllowanceForBadDebts = 'asset::allowance-for-bad-debts', AssetDevelopmentCosts = 'asset::development-costs', LiabilityAccruedVacationPayable = 'liability::accrued-vacation-payable', OtherExpenseUtilities = 'other-expense::utilities', AssetLoansToOfficers = 'asset::loans-to-officers', AssetOtherLongTermInvestments = 'asset::other-long-term-investments', AssetLeaseholdImprovements = 'asset::leasehold-improvements', AssetExpenditureAuthorisationsAndLettersOfCredit = 'asset::expenditure-authorisations-and-letters-of-credit', AssetInternalTransfers = 'asset::internal-transfers', OtherIncomeOtherOperatingIncome = 'other-income::other-operating-income', ExpenseOtherSellingExpenses = 'expense::other-selling-expenses', AssetProvisionsCurrentAssets = 'asset::provisions-current-assets', AssetFurnitureAndFixtures = 'asset::furniture-and-fixtures', AssetAssetsHeldForSale = 'asset::assets-held-for-sale', AssetProvisionsFixedAssets = 'asset::provisions-fixed-assets', EquityMoneyReceivedAgainstShareWarrants = 'equity::money-received-against-share-warrants', LiabilityNotesPayable = 'liability::notes-payable', EquityPreferredStock = 'equity::preferred-stock', LiabilityProvisionsNonCurrentLiabilities = 'liability::provisions-non-current-liabilities', OtherCurrentLiabilityStateLocalIncomeTaxPayable = 'other-current-liability::state-local-income-tax-payable', Asset = 'asset', AssetFixedAssetFurniture = 'asset::fixed-asset-furniture', ExpenseShippingFreightDelivery = 'expense::shipping-freight-delivery', LiabilityAccountsPayable = 'liability::accounts-payable', LiabilityLongTermDebit = 'liability::long-term-debit', OtherCurrentLiabilityCurrentPortionEmployeeBenefitsObligations = 'other-current-liability::current-portion-employee-benefits-obligations', AssetCalledUpShareCapitalNotPaid = 'asset::called-up-share-capital-not-paid', AssetOtherConsumables = 'asset::other-consumables', EquityOtherFreeReserves = 'equity::other-free-reserves', EquityPersonalExpense = 'equity::personal-expense', Income = 'income', EquityAccumulatedAdjustment = 'equity::accumulated-adjustment', AssetLandAsset = 'asset::land-asset', OtherExpenseGasAndFuel = 'other-expense::gas-and-fuel', OtherCurrentLiabilityAccruedLiabilities = 'other-current-liability::accrued-liabilities', AssetOtherCurrentAsset = 'asset::other-current-asset', EquityFunds = 'equity::funds', ExpenseOfficeGeneralAdministrativeExpenses = 'expense::office-general-administrative-expenses', OtherExpenseHomeOwnerRentalInsurance = 'other-expense::home-owner-rental-insurance', ExpenseBadDebts = 'expense::bad-debts', AssetShortTermInvestmentsInRelatedParties = 'asset::short-term-investments-in-related-parties', OtherExpenseOtherHomeOfficeExpenses = 'other-expense::other-home-office-expenses', AssetOtherIntangibleAssets = 'asset::other-intangible-assets', AssetFixedAssetPhone = 'asset::fixed-asset-phone', ExpenseFinanceCosts = 'expense::finance-costs', OtherCurrentLiabilityShortTermBorrowings = 'other-current-liability::short-term-borrowings', AssetLongTermInvestments = 'asset::long-term-investments', AssetEmployeeCashAdvances = 'asset::employee-cash-advances', AssetSavings = 'asset::savings', OtherExpenseVehicle = 'other-expense::vehicle', ExpenseCommissionsAndFees = 'expense::commissions-and-fees', Liability = 'liability', OtherCurrentLiabilityInsurancePayable = 'other-current-liability::insurance-payable', OtherCurrentLiabilityLoanPayable = 'other-current-liability::loan-payable', AssetShortTermLoansAndAdvancesToRelatedParties = 'asset::short-term-loans-and-advances-to-related-parties', OtherIncomeDividendIncome = 'other-income::dividend-income', OtherExpenseExtraordinaryItems = 'other-expense::extraordinary-items', RevenueOperatingGrants = 'revenue::operating-grants', AssetVehicles = 'asset::vehicles', AssetRentsHeldInTrust = 'asset::rents-held-in-trust', OtherExpenseExchangeGainOrLoss = 'other-expense::exchange-gain-or-loss', OtherExpenseHomeOffice = 'other-expense::home-office', ExpenseEntertainmentMeals = 'expense::entertainment-meals', AssetParticipatingInterests = 'asset::participating-interests', LiabilityAccrualsAndDeferredIncome = 'liability::accruals-and-deferred-income', OtherExpenseVehicleRegistration = 'other-expense::vehicle-registration', ExpenseEntertainment = 'expense::entertainment', OtherIncomeOtherMiscellaneousIncome = 'other-income::other-miscellaneous-income', AssetAccumulatedDepreciation = 'asset::accumulated-depreciation', EquityOpeningBalanceEquity = 'equity::opening-balance-equity', ExpenseAuto = 'expense::auto', AssetAccumulatedAmortization = 'asset::accumulated-amortization', ExpenseOfficeExpenses = 'expense::office-expenses', OtherCurrentLiabilityDividendsPayable = 'other-current-liability::dividends-payable', OtherExpensePenaltiesSettlements = 'other-expense::penalties-settlements', OtherExpenseWashAndRoadServices = 'other-expense::wash-and-road-services', OtherIncomeUnrealisedLossOnSecuritiesNetOfTax = 'other-income::unrealised-loss-on-securities-net-of-tax', OtherExpenseOtherVehicleExpenses = 'other-expense::other-vehicle-expenses', EquityHealthcare = 'equity::healthcare', EquityEquityInEarningsOfSubsidiuaries = 'equity::equity-in-earnings-of-subsidiuaries', ExpenseTaxesPaid = 'expense::taxes-paid', AssetCumulativeDepreciationOnIntangibleAssets = 'asset::cumulative-depreciation-on-intangible-assets', AssetTradeAndOtherReceivables = 'asset::trade-and-other-receivables', LiabilityStaffAndRelatedLongTermLiabilityAccounts = 'liability::staff-and-related-long-term-liability-accounts', AssetCashAndCashEquivalents = 'asset::cash-and-cash-equivalents', EquityRetainedEarnings = 'equity::retained-earnings', AssetInventory = 'asset::inventory', CostOfGoodsSoldCostOfSales = 'cost-of-goods-sold::cost-of-sales', EquityShareCapital = 'equity::share-capital', OtherCurrentLiabilityCurrentLiabilities = 'other-current-liability::current-liabilities', OtherCurrentLiabilityCurrentPortionOfObligationsUnderFinanceLeases = 'other-current-liability::current-portion-of-obligations-under-finance-leases', OtherExpenseVehicleLease = 'other-expense::vehicle-lease', ExpenseEquipmentRental = 'expense::equipment-rental', AssetDeferredTax = 'asset::deferred-tax', AssetLongTermLoansAndAdvancesToRelatedParties = 'asset::long-term-loans-and-advances-to-related-parties', ExpenseRentOrLeaseOfBuildings = 'expense::rent-or-lease-of-buildings', OtherExpenseOtherMiscellaneousExpense = 'other-expense::other-miscellaneous-expense', OtherExpenseExceptionalItems = 'other-expense::exceptional-items', OtherExpenseIncomeTaxOtherExpense = 'other-expense::income-tax-other-expense', CostOfGoodsSoldShippingFreightDeliveryCos = 'cost-of-goods-sold::shipping-freight-delivery-cos', ExpenseLossOnDiscontinuedOperationsNetOfTax = 'expense::loss-on-discontinued-operations-net-of-tax', ExpenseOtherRentalCosts = 'expense::other-rental-costs', ExpenseUtilities = 'expense::utilities', LiabilityLiabilitiesRelatedToAssetsHeldForSale = 'liability::liabilities-related-to-assets-held-for-sale', ExpenseOtherCurrentOperatingCharges = 'expense::other-current-operating-charges', AssetSecurityDeposits = 'asset::security-deposits', OtherExpenseVehicleLoan = 'other-expense::vehicle-loan', RevenueOtherCurrentOperatingIncome = 'revenue::other-current-operating-income', AssetAccumulatedDepletion = 'asset::accumulated-depletion', ExpenseIncomeTaxExpense = 'expense::income-tax-expense', OtherExpensePriorPeriodItems = 'other-expense::prior-period-items', AccountsReceivable = 'accounts-receivable', EquityEstimatedTaxes = 'equity::estimated-taxes', OtherCurrentLiabilityProvisionsCurrentLiabilities = 'other-current-liability::provisions-current-liabilities', OtherExpenseAmortization = 'other-expense::amortization', LiabilityLongTermBorrowings = 'liability::long-term-borrowings', AssetOtherFixedAssets = 'asset::other-fixed-assets', AssetAssetsAvailableForSale = 'asset::assets-available-for-sale', OtherCurrentLiabilityTrustAccountsLiabilities = 'other-current-liability::trust-accounts-liabilities', AssetLand = 'asset::land', ExpensePayrollExpenses = 'expense::payroll-expenses', AssetRetainage = 'asset::retainage', AssetUndepositedFunds = 'asset::undeposited-funds', OtherExpenseRepairsAndMaintenance = 'other-expense::repairs-and-maintenance', OtherExpenseVehicleInsurance = 'other-expense::vehicle-insurance', AssetBuildings = 'asset::buildings', ExpenseShippingAndDeliveryExpense = 'expense::shipping-and-delivery-expense', ExpenseCharitableContributions = 'expense::charitable-contributions', OtherIncomeLossOnDisposalOfAssets = 'other-income::loss-on-disposal-of-assets', RevenueUnappliedCashPaymentIncome = 'revenue::unapplied-cash-payment-income', OtherExpenseParkingAndTolls = 'other-expense::parking-and-tolls', LiabilityObligationsUnderFinanceLeases = 'liability::obligations-under-finance-leases', ExpenseAppropriationsToDepreciation = 'expense::appropriations-to-depreciation', ExpenseInsurance = 'expense::insurance', AssetLoansToStockholders = 'asset::loans-to-stockholders', OtherExpenseVehicleLoanInterest = 'other-expense::vehicle-loan-interest', OtherCurrentLiabilityDutiesAndTaxes = 'other-current-liability::duties-and-taxes', OtherCurrentLiabilityGlobalTaxSuspense = 'other-current-liability::global-tax-suspense', AssetNonCurrentAssets = 'asset::non-current-assets', OtherExpense = 'other-expense', OtherCurrentLiabilityOtherCurrentLiabilities = 'other-current-liability::other-current-liabilities', AssetGlobalTaxDeferred = 'asset::global-tax-deferred', AssetProvisionsNonCurrentAssets = 'asset::provisions-non-current-assets', EquityOwnersEquity = 'equity::owners-equity', ExpenseSuppliesMaterials = 'expense::supplies-materials', OtherCurrentLiabilityInterestPayables = 'other-current-liability::interest-payables', RevenueNonProfitIncome = 'revenue::non-profit-income', RevenueOwnWorkCapitalized = 'revenue::own-work-capitalized', ExpenseExtraordinaryCharges = 'expense::extraordinary-charges', AssetIntangibleAssets = 'asset::intangible-assets', AssetAccumulatedAmortizationOfOtherAssets = 'asset::accumulated-amortization-of-other-assets', ExpenseManagementCompensation = 'expense::management-compensation', AssetFixedAssetPhotoVideo = 'asset::fixed-asset-photo-video', AssetOtherAsset = 'asset::other-asset', AssetTrustAccounts = 'asset::trust-accounts', ExpenseOtherMiscellaneousServiceCost = 'expense::other-miscellaneous-service-cost', RevenueIncome = 'revenue::income', OtherIncomeOtherInvestmentIncome = 'other-income::other-investment-income', AssetFixedAssetSoftware = 'asset::fixed-asset-software', ExpenseTravelExpensesGeneralAndAdminExpenses = 'expense::travel-expenses-general-and-admin-expenses', CostOfGoodsSoldCostOfLaborCos = 'cost-of-goods-sold::cost-of-labor-cos', AssetOtherCurrentAssets = 'asset::other-current-assets', ExpensePenaltiesSettlements = 'expense::penalties-settlements', RevenueOtherPrimaryIncome = 'revenue::other-primary-income', ExpensePurchasesRebates = 'expense::purchases-rebates', AssetAvailableForSaleFinancialAssets = 'asset::available-for-sale-financial-assets', AssetBalWithGovtAuthorities = 'asset::bal-with-govt-authorities', OtherCurrentLiabilityLineOfCredit = 'other-current-liability::line-of-credit', RevenueDiscountsRefundsGiven = 'revenue::discounts-refunds-given', AssetMachineryAndEquipment = 'asset::machinery-and-equipment' }
export const enum ChannelAvailability { InApp = 'in-app', Online = 'online', InStore = 'in-store', AllChannels = 'all-channels' }
export const enum AllocationMethod { Across = 'across', Each = 'each' }
export const enum Status { Active = 'active', Expired = 'expired', Scheduled = 'scheduled' }
export const enum ReceiverRoles { User = 'user', Admin = 'admin', Moderator = 'moderator' }
export const enum AppliesTo { AllItems = 'all-items', SpecificItems = 'specific-items', SpecificCategories = 'specific-categories' }
export const enum CustomerEligibility { SpecificCustomers = 'specific-customers', SpecificCustomerGroups = 'specific-customer-groups', All = 'all' }
export const enum TargetSelection { All = 'all', Entitled = 'entitled' }
export const enum TargetType { LineItem = 'line-item', ShippingLine = 'shipping-line' }
export const enum Roles { Admin = 'admin', User = 'user', Moderator = 'moderator' }
export const enum MinimumRequirements { None = 'none', MinimumPurchaseAmount = 'minimum-purchase-amount', MinimumQuantityOfItems = 'minimum-quantity-of-items' }
export const enum SkuValidation { LocalUnique = 'local-unique', GlobalUnique = 'global-unique', None = 'none' }
export const enum TransactionMethod { Atm = 'atm', Mail = 'mail', Telephone = 'telephone', Mobile = 'mobile', Online = 'online', BankBranch = 'bank-branch' }
export const enum Country { Chile = 'chile', France = 'france', Slovenia = 'slovenia', Latvia = 'latvia', Iran = 'iran', Bolivia = 'bolivia', Peru = 'peru', Ethiopia = 'ethiopia', Serbia = 'serbia', MarshallIslands = 'marshall-islands', SolomonIslands = 'solomon-islands', Brazil = 'brazil', Gabon = 'gabon', Haiti = 'haiti', Syria = 'syria', UnitedKingdom = 'united-kingdom', Jordan = 'jordan', Botswana = 'botswana', China = 'china', Qatar = 'qatar', Georgia = 'georgia', Vietnam = 'vietnam', Cuba = 'cuba', Kiribati = 'kiribati', Austria = 'austria', Yemen = 'yemen', CongoDemocraticRepublic = 'congo-democratic-republic', EquatorialGuinea = 'equatorial-guinea', Montenegro = 'montenegro', Singapore = 'singapore', Honduras = 'honduras', Kazakhstan = 'kazakhstan', BosniaAndHerzegovina = 'bosnia-and-herzegovina', Brunei = 'brunei', Eswatini = 'eswatini', Kyrgyzstan = 'kyrgyzstan', Laos = 'laos', Angola = 'angola', Turkmenistan = 'turkmenistan', VaticanCity = 'vatican-city', BurkinaFaso = 'burkina-faso', Gambia = 'gambia', Zambia = 'zambia', GuineaBissau = 'guinea-bissau', Ecuador = 'ecuador', Libya = 'libya', Turkey = 'turkey', Croatia = 'croatia', SaintVincentAndTheGrenadines = 'saint-vincent-and-the-grenadines', Colombia = 'colombia', Guinea = 'guinea', Nauru = 'nauru', Benin = 'benin', Belarus = 'belarus', Netherlands = 'netherlands', Suriname = 'suriname', SouthSudan = 'south-sudan', Cambodia = 'cambodia', Mozambique = 'mozambique', Panama = 'panama', Lesotho = 'lesotho', Poland = 'poland', India = 'india', Lithuania = 'lithuania', Bulgaria = 'bulgaria', DominicanRepublic = 'dominican-republic', Myanmar = 'myanmar', PapuaNewGuinea = 'papua-new-guinea', Maldives = 'maldives', CzechRepublic = 'czech-republic', Senegal = 'senegal', Portugal = 'portugal', SierraLeone = 'sierra-leone', Azerbaijan = 'azerbaijan', UnitedArabEmirates = 'united-arab-emirates', Eritrea = 'eritrea', Fiji = 'fiji', Moldova = 'moldova', Kuwait = 'kuwait', Zimbabwe = 'zimbabwe', Ghana = 'ghana', Hungary = 'hungary', Somalia = 'somalia', Indonesia = 'indonesia', CentralAfricanRepublic = 'central-african-republic', Cameroon = 'cameroon', Palestine = 'palestine', SaintLucia = 'saint-lucia', Tanzania = 'tanzania', Belize = 'belize', Bhutan = 'bhutan', Togo = 'togo', Tuvalu = 'tuvalu', UnitedStates = 'united-states', Belgium = 'belgium', Bahamas = 'bahamas', CongoRepublic = 'congo-republic', Malaysia = 'malaysia', Burundi = 'burundi', NewZealand = 'new-zealand', NorthKorea = 'north-korea', Estonia = 'estonia', Iceland = 'iceland', Paraguay = 'paraguay', CaboVerde = 'cabo-verde', Italy = 'italy', SriLanka = 'sri-lanka', Jamaica = 'jamaica', Morocco = 'morocco', Samoa = 'samoa', Oman = 'oman', Spain = 'spain', Algeria = 'algeria', Denmark = 'denmark', Greece = 'greece', Nicaragua = 'nicaragua', Niger = 'niger', Pakistan = 'pakistan', Norway = 'norway', Philippines = 'philippines', Mauritius = 'mauritius', Egypt = 'egypt', AntiguaAndBarbuda = 'antigua-and-barbuda', Grenada = 'grenada', Mali = 'mali', Switzerland = 'switzerland', Argentina = 'argentina', Australia = 'australia', Canada = 'canada', Kenya = 'kenya', Namibia = 'namibia', Uruguay = 'uruguay', Tajikistan = 'tajikistan', Vanuatu = 'vanuatu', Djibouti = 'djibouti', Japan = 'japan', Bahrain = 'bahrain', Bangladesh = 'bangladesh', Liberia = 'liberia', ElSalvador = 'el-salvador', Malawi = 'malawi', Monaco = 'monaco', Mauritania = 'mauritania', Uzbekistan = 'uzbekistan', Seychelles = 'seychelles', Germany = 'germany', SouthKorea = 'south-korea', Afghanistan = 'afghanistan', Tunisia = 'tunisia', Comoros = 'comoros', Ireland = 'ireland', Nepal = 'nepal', Barbados = 'barbados', Albania = 'albania', Finland = 'finland', Micronesia = 'micronesia', Lebanon = 'lebanon', Guyana = 'guyana', SaudiArabia = 'saudi-arabia', Israel = 'israel', SouthAfrica = 'south-africa', TimorLeste = 'timor-leste', CoteDIvoire = 'cote-d-ivoire', SaoTomeAndPrincipe = 'sao-tome-and-principe', Sudan = 'sudan', Iraq = 'iraq', Mongolia = 'mongolia', Uganda = 'uganda', Madagascar = 'madagascar', Dominica = 'dominica', Romania = 'romania', Ukraine = 'ukraine', SaintKittsAndNevis = 'saint-kitts-and-nevis', CostaRica = 'costa-rica', Sweden = 'sweden', Taiwan = 'taiwan', Thailand = 'thailand', Mexico = 'mexico', SanMarino = 'san-marino', Tonga = 'tonga', Palau = 'palau', Venezuela = 'venezuela', Luxembourg = 'luxembourg', TrinidadAndTobago = 'trinidad-and-tobago', Liechtenstein = 'liechtenstein', Guatemala = 'guatemala', Russia = 'russia', Chad = 'chad', Malta = 'malta', Nigeria = 'nigeria', NorthMacedonia = 'north-macedonia', Rwanda = 'rwanda', Cyprus = 'cyprus', Slovakia = 'slovakia', Andorra = 'andorra', Armenia = 'armenia' }
export const enum GlobalTaxType { CustomsDuty = 'customs-duty', Vat = 'vat', PropertyTax = 'property-tax', Other = 'other', Gst = 'gst', ExciseTax = 'excise-tax', SalesTax = 'sales-tax' }
export const enum JournalEntryStatus { Pending = 'pending', Draft = 'draft', Error = 'error', Posted = 'posted', Voided = 'voided', Corrected = 'corrected' }
export const enum IdentityProvider { Whatsapp = 'whatsapp', Paypal = 'paypal', Foursquare = 'foursquare', Telegram = 'telegram', Line = 'line', Slack = 'slack', Dribbble = 'dribbble', Tiktok = 'tiktok', Google = 'google', Amazon = 'amazon', Twitter = 'twitter', Other = 'other', Pinterest = 'pinterest', Tumblr = 'tumblr', Flickr = 'flickr', Behance = 'behance', Reddit = 'reddit', Linkedin = 'linkedin', Discord = 'discord', Apple = 'apple', Facebook = 'facebook', Qq = 'qq', Github = 'github', Microsoft = 'microsoft', Wechat = 'wechat', Yahoo = 'yahoo', Instagram = 'instagram', Snapchat = 'snapchat', Vimeo = 'vimeo', Signal = 'signal' }
export const enum DayOfWeek { Thursday = 'thursday', Friday = 'friday', Sunday = 'sunday', Tuesday = 'tuesday', Wednesday = 'wednesday', Saturday = 'saturday', Monday = 'monday' }
export const enum AccountEngagementLevel { Unknown = 'unknown', Warm = 'warm', Hot = 'hot', Cold = 'cold' }
export const enum ReviewApprovalStatus { Pending = 'pending', Approved = 'approved', Revised = 'revised', InReview = 'in-review', Rejected = 'rejected' }
export const enum StakeholderType { Other = 'other', Competitor = 'competitor', Partner = 'partner', Investor = 'investor', Customer = 'customer', Vendor = 'vendor' }
export const enum AccountStatus { Active = 'active', Closed = 'closed', Pending = 'pending', Suspended = 'suspended', Inactive = 'inactive' }
export const enum CampaignStatus { Paused = 'paused', Archived = 'archived', Active = 'active', Completed = 'completed', Draft = 'draft', Scheduled = 'scheduled', Planned = 'planned', Cancelled = 'cancelled' }
export const enum CustomerType { Corporate = 'corporate', Wholesale = 'wholesale', Retail = 'retail', Online = 'online', B2b = 'b2b', B2c = 'b2c' }
export const enum AccountingAccountType { ExpensePayrollExpenses = 'expense::payroll-expenses', CostOfGoodsSoldEquipmentRentalCos = 'cost-of-goods-sold::equipment-rental-cos', AssetParticipatingInterests = 'asset::participating-interests', AssetPrepaidExpenses = 'asset::prepaid-expenses', CostOfGoodsSoldCostOfLaborCos = 'cost-of-goods-sold::cost-of-labor-cos', EquityFunds = 'equity::funds', AssetProvisionsNonCurrentAssets = 'asset::provisions-non-current-assets', OtherExpenseHomeOffice = 'other-expense::home-office', OtherExpenseVehicleLease = 'other-expense::vehicle-lease', ExpenseEntertainmentMeals = 'expense::entertainment-meals', AssetAssetsInCourseOfConstruction = 'asset::assets-in-course-of-construction', RevenueOperatingGrants = 'revenue::operating-grants', AssetAccumulatedDepletion = 'asset::accumulated-depletion', AssetProvisionsFixedAssets = 'asset::provisions-fixed-assets', OtherExpenseGasAndFuel = 'other-expense::gas-and-fuel', OtherExpenseVehicle = 'other-expense::vehicle', AssetDeferredTax = 'asset::deferred-tax', ExpenseExtraordinaryCharges = 'expense::extraordinary-charges', ExpenseSundry = 'expense::sundry', OtherExpensePriorPeriodItems = 'other-expense::prior-period-items', LiabilityBankLoans = 'liability::bank-loans', ExpenseCharitableContributions = 'expense::charitable-contributions', OtherExpenseOtherMiscellaneousExpense = 'other-expense::other-miscellaneous-expense', ExpenseShippingAndDeliveryExpense = 'expense::shipping-and-delivery-expense', AssetRentsHeldInTrust = 'asset::rents-held-in-trust', OtherIncomeUnrealisedLossOnSecuritiesNetOfTax = 'other-income::unrealised-loss-on-securities-net-of-tax', OtherExpenseExchangeGainOrLoss = 'other-expense::exchange-gain-or-loss', LiabilityLongTermLiability = 'liability::long-term-liability', AssetLongTermLoansAndAdvancesToRelatedParties = 'asset::long-term-loans-and-advances-to-related-parties', LiabilityOtherLongTermProvisions = 'liability::other-long-term-provisions', LiabilityAccruedVacationPayable = 'liability::accrued-vacation-payable', AssetChecking = 'asset::checking', ExpenseEquipmentRental = 'expense::equipment-rental', RevenueSalesOfProductIncome = 'revenue::sales-of-product-income', AssetLicenses = 'asset::licenses', LiabilityCreditCard = 'liability::credit-card', AssetLoansToStockholders = 'asset::loans-to-stockholders', AssetAccumulatedAmortization = 'asset::accumulated-amortization', ExpenseTravelExpensesGeneralAndAdminExpenses = 'expense::travel-expenses-general-and-admin-expenses', OtherCurrentLiabilityInsurancePayable = 'other-current-liability::insurance-payable', OtherCurrentLiabilityDutiesAndTaxes = 'other-current-liability::duties-and-taxes', OtherIncomeOtherMiscellaneousIncome = 'other-income::other-miscellaneous-income', OtherCurrentLiabilityProvisionForWarrantyObligations = 'other-current-liability::provision-for-warranty-obligations', ExpenseOtherMiscellaneousServiceCost = 'expense::other-miscellaneous-service-cost', RevenueCashReceiptIncome = 'revenue::cash-receipt-income', AssetMoneyMarket = 'asset::money-market', RevenueRevenueGeneral = 'revenue::revenue-general', ExpenseOtherRentalCosts = 'expense::other-rental-costs', OtherExpenseHomeOwnerRentalInsurance = 'other-expense::home-owner-rental-insurance', EquityPartnerContributions = 'equity::partner-contributions', OtherExpenseExceptionalItems = 'other-expense::exceptional-items', AssetEmployeeCashAdvances = 'asset::employee-cash-advances', LiabilityOutstandingDuesOtherThanMicroSmallEnterprise = 'liability::outstanding-dues-other-than-micro-small-enterprise', Expense = 'expense', AssetGlobalTaxRefund = 'asset::global-tax-refund', ExpenseLegalProfessionalFees = 'expense::legal-professional-fees', AssetOtherLongTermInvestments = 'asset::other-long-term-investments', AssetAssetsAvailableForSale = 'asset::assets-available-for-sale', EquityMoneyReceivedAgainstShareWarrants = 'equity::money-received-against-share-warrants', EquityHealthcare = 'equity::healthcare', OtherExpenseVehicleRepairs = 'other-expense::vehicle-repairs', LiabilityGroupAndAssociates = 'liability::group-and-associates', OtherExpenseDeferredTaxExpense = 'other-expense::deferred-tax-expense', AssetLand = 'asset::land', ExpenseUtilities = 'expense::utilities', LiabilityProvisionsNonCurrentLiabilities = 'liability::provisions-non-current-liabilities', ExpenseInterestPaid = 'expense::interest-paid', LiabilityAccountsPayable = 'liability::accounts-payable', EquityPartnerDistributions = 'equity::partner-distributions', ExpenseTravelExpensesSellingExpense = 'expense::travel-expenses-selling-expense', OtherIncomeOtherOperatingIncome = 'other-income::other-operating-income', ExpenseFinanceCosts = 'expense::finance-costs', AssetOtherConsumables = 'asset::other-consumables', LiabilityNotesPayable = 'liability::notes-payable', AssetDepletableAssets = 'asset::depletable-assets', EquityDividendDisbursed = 'equity::dividend-disbursed', AssetBalWithGovtAuthorities = 'asset::bal-with-govt-authorities', AssetFixedAssetOtherToolsEquipment = 'asset::fixed-asset-other-tools-equipment', EquityInvestmentGrants = 'equity::investment-grants', ExpenseDuesSubscriptions = 'expense::dues-subscriptions', OtherCurrentLiabilityOtherCurrentLiabilities = 'other-current-liability::other-current-liabilities', EquityRetainedEarnings = 'equity::retained-earnings', ExpenseTravelMeals = 'expense::travel-meals', AssetOtherAsset = 'asset::other-asset', ExpenseExternalServices = 'expense::external-services', OtherExpense = 'other-expense', OtherExpenseTaxRoundoffGainOrLoss = 'other-expense::tax-roundoff-gain-or-loss', LiabilityGovernmentAndOtherPublicAuthorities = 'liability::government-and-other-public-authorities', AssetLoansToOfficers = 'asset::loans-to-officers', AssetAccumulatedAmortizationOfOtherAssets = 'asset::accumulated-amortization-of-other-assets', OtherExpenseOtherHomeOfficeExpenses = 'other-expense::other-home-office-expenses', AssetBuildings = 'asset::buildings', AssetOtherIntangibleAssets = 'asset::other-intangible-assets', ExpenseSuppliesMaterials = 'expense::supplies-materials', OtherExpenseIncomeTaxOtherExpense = 'other-expense::income-tax-other-expense', OtherCurrentLiabilityCurrentLiabilities = 'other-current-liability::current-liabilities', LiabilityObligationsUnderFinanceLeases = 'liability::obligations-under-finance-leases', EquityCalledUpShareCapital = 'equity::called-up-share-capital', AssetFixedAssetPhone = 'asset::fixed-asset-phone', AssetFixedAssetFurniture = 'asset::fixed-asset-furniture', LiabilityShareholderNotesPayable = 'liability::shareholder-notes-payable', ExpenseRepairMaintenance = 'expense::repair-maintenance', ExpensePromotionalMeals = 'expense::promotional-meals', OtherCurrentLiabilitySocialSecurityAgencies = 'other-current-liability::social-security-agencies', AssetOrganizationalCosts = 'asset::organizational-costs', OtherExpenseUtilities = 'other-expense::utilities', OtherIncome = 'other-income', AssetOtherEarMarkedBankAccounts = 'asset::other-ear-marked-bank-accounts', CostOfGoodsSoldShippingFreightDeliveryCos = 'cost-of-goods-sold::shipping-freight-delivery-cos', OtherCurrentLiabilityStateLocalIncomeTaxPayable = 'other-current-liability::state-local-income-tax-payable', OtherExpenseVehicleInsurance = 'other-expense::vehicle-insurance', AssetInternalTransfers = 'asset::internal-transfers', AssetFixedAsset = 'asset::fixed-asset', AssetOtherLongTermAssets = 'asset::other-long-term-assets', EquityAccumulatedAdjustment = 'equity::accumulated-adjustment', OtherCurrentLiabilityShortTermBorrowings = 'other-current-liability::short-term-borrowings', ExpenseUnappliedCashBillPaymentExpense = 'expense::unapplied-cash-bill-payment-expense', AssetShortTermInvestmentsInRelatedParties = 'asset::short-term-investments-in-related-parties', AssetTrustAccounts = 'asset::trust-accounts', EquityPaidInCapitalOrSurplus = 'equity::paid-in-capital-or-surplus', OtherCurrentLiabilityGlobalTaxPayable = 'other-current-liability::global-tax-payable', AssetPrepaymentsAndAccruedIncome = 'asset::prepayments-and-accrued-income', OtherExpensePenaltiesSettlements = 'other-expense::penalties-settlements', AssetFixedAssetPhotoVideo = 'asset::fixed-asset-photo-video', AssetOtherCurrentAssets = 'asset::other-current-assets', EquityAccumulatedOtherComprehensiveIncome = 'equity::accumulated-other-comprehensive-income', OtherCurrentLiabilityGlobalTaxSuspense = 'other-current-liability::global-tax-suspense', AssetLeaseBuyout = 'asset::lease-buyout', OtherCurrentLiabilityCurrentPortionEmployeeBenefitsObligations = 'other-current-liability::current-portion-employee-benefits-obligations', RevenueSalesRetail = 'revenue::sales-retail', LiabilityAccrualsAndDeferredIncome = 'liability::accruals-and-deferred-income', ExpensePurchasesRebates = 'expense::purchases-rebates', LiabilityAccruedLongTermLiabilities = 'liability::accrued-long-term-liabilities', ExpenseAuto = 'expense::auto', AssetIntangibleAssetsUnderDevelopment = 'asset::intangible-assets-under-development', EquityEstimatedTaxes = 'equity::estimated-taxes', ExpenseStaffCosts = 'expense::staff-costs', ExpenseManagementCompensation = 'expense::management-compensation', Equity = 'equity', AssetLoansToOthers = 'asset::loans-to-others', ExpenseAmortizationExpense = 'expense::amortization-expense', ExpenseDistributionCosts = 'expense::distribution-costs', AssetOtherLongTermLoansAndAdvances = 'asset::other-long-term-loans-and-advances', OtherExpenseRentAndLease = 'other-expense::rent-and-lease', EquityShareApplicationMoneyPendingAllotment = 'equity::share-application-money-pending-allotment', OtherExpenseOtherVehicleExpenses = 'other-expense::other-vehicle-expenses', OtherExpenseMortgageInterest = 'other-expense::mortgage-interest', AssetOtherFixedAssets = 'asset::other-fixed-assets', LiabilityProvisionForLiabilities = 'liability::provision-for-liabilities', OtherCurrentLiabilitySalesTaxPayable = 'other-current-liability::sales-tax-payable', OtherCurrentLiabilityRentsInTrustLiability = 'other-current-liability::rents-in-trust-liability', OtherIncomeLossOnDisposalOfAssets = 'other-income::loss-on-disposal-of-assets', AssetShortTermLoansAndAdvancesToRelatedParties = 'asset::short-term-loans-and-advances-to-related-parties', RevenueUnappliedCashPaymentIncome = 'revenue::unapplied-cash-payment-income', AssetInvestmentOther = 'asset::investment-other', AssetTradeAndOtherReceivables = 'asset::trade-and-other-receivables', AssetLeaseholdImprovements = 'asset::leasehold-improvements', EquityPartnersEquity = 'equity::partners-equity', AssetNonCurrentAssets = 'asset::non-current-assets', AssetCumulativeDepreciationOnIntangibleAssets = 'asset::cumulative-depreciation-on-intangible-assets', ExpenseBadDebts = 'expense::bad-debts', ExpenseOfficeExpenses = 'expense::office-expenses', OtherExpenseVehicleRegistration = 'other-expense::vehicle-registration', OtherCurrentLiabilityDirectDepositPayable = 'other-current-liability::direct-deposit-payable', AssetVehicles = 'asset::vehicles', AssetInventory = 'asset::inventory', OtherCurrentLiabilityPayrollClearing = 'other-current-liability::payroll-clearing', ExpenseProjectStudiesSurveysAssessments = 'expense::project-studies-surveys-assessments', EquityPreferredStock = 'equity::preferred-stock', AssetGlobalTaxDeferred = 'asset::global-tax-deferred', RevenueIncome = 'revenue::income', RevenueOwnWorkCapitalized = 'revenue::own-work-capitalized', ExpenseOtherSellingExpenses = 'expense::other-selling-expenses', CostOfGoodsSoldFreightAndDeliveryCost = 'cost-of-goods-sold::freight-and-delivery-cost', AssetBank = 'asset::bank', ExpenseEntertainment = 'expense::entertainment', RevenueOtherCurrentOperatingIncome = 'revenue::other-current-operating-income', OtherExpenseMatCredit = 'other-expense::mat-credit', AssetAccumulatedDepreciation = 'asset::accumulated-depreciation', EquityTreasuryStock = 'equity::treasury-stock', OtherCurrentLiability = 'other-current-liability', OtherCurrentLiabilityPayrollTaxPayable = 'other-current-liability::payroll-tax-payable', CostOfGoodsSoldOtherCostsOfServiceCos = 'cost-of-goods-sold::other-costs-of-service-cos', OtherIncomeOtherInvestmentIncome = 'other-income::other-investment-income', AssetLongTermInvestments = 'asset::long-term-investments', ExpenseTravel = 'expense::travel', ExpenseBorrowingCost = 'expense::borrowing-cost', CostOfGoodsSold = 'cost-of-goods-sold', ExpenseOtherBusinessExpenses = 'expense::other-business-expenses', OtherExpenseVehicleLoanInterest = 'other-expense::vehicle-loan-interest', CostOfGoodsSoldCostOfSales = 'cost-of-goods-sold::cost-of-sales', RevenueDiscountsRefundsGiven = 'revenue::discounts-refunds-given', LiabilityOtherLongTermLiabilities = 'liability::other-long-term-liabilities', OtherIncomeGainLossOnSaleOfInvestments = 'other-income::gain-loss-on-sale-of-investments', OtherExpenseVehicleLoan = 'other-expense::vehicle-loan', AssetAllowanceForBadDebts = 'asset::allowance-for-bad-debts', AssetFixedAssetCopiers = 'asset::fixed-asset-copiers', AssetCapitalWip = 'asset::capital-wip', ExpenseLossOnDiscontinuedOperationsNetOfTax = 'expense::loss-on-discontinued-operations-net-of-tax', OtherCurrentLiabilityLineOfCredit = 'other-current-liability::line-of-credit', OtherCurrentLiabilityAccruedLiabilities = 'other-current-liability::accrued-liabilities', ExpenseOfficeGeneralAdministrativeExpenses = 'expense::office-general-administrative-expenses', LiabilityOutstandingDuesMicroSmallEnterprise = 'liability::outstanding-dues-micro-small-enterprise', RevenueServiceFeeIncome = 'revenue::service-fee-income', OtherExpenseParkingAndTolls = 'other-expense::parking-and-tolls', AssetAssetsHeldForSale = 'asset::assets-held-for-sale', OtherCurrentLiabilityPrepaidExpensesPayable = 'other-current-liability::prepaid-expenses-payable', OtherCurrentLiabilityFederalIncomeTaxPayable = 'other-current-liability::federal-income-tax-payable', OtherCurrentLiabilityProvisionsCurrentLiabilities = 'other-current-liability::provisions-current-liabilities', OtherIncomeDividendIncome = 'other-income::dividend-income', OtherIncomeTaxExemptInterest = 'other-income::tax-exempt-interest', AssetInvestmentMortgageRealEstateLoans = 'asset::investment-mortgage-real-estate-loans', AssetInvestmentUsGovernmentObligations = 'asset::investment-us-government-obligations', AssetRetainage = 'asset::retainage', AssetUndepositedFunds = 'asset::undeposited-funds', AssetExpenditureAuthorisationsAndLettersOfCredit = 'asset::expenditure-authorisations-and-letters-of-credit', AssetLandAsset = 'asset::land-asset', OtherExpenseExtraordinaryItems = 'other-expense::extraordinary-items', AssetSavings = 'asset::savings', OtherCurrentLiabilityStaffAndRelatedLiabilityAccounts = 'other-current-liability::staff-and-related-liability-accounts', ExpenseRentOrLeaseOfBuildings = 'expense::rent-or-lease-of-buildings', ExpenseTaxesPaid = 'expense::taxes-paid', OtherIncomeInterestEarned = 'other-income::interest-earned', AssetCashAndCashEquivalents = 'asset::cash-and-cash-equivalents', Asset = 'asset', AccountsReceivable = 'accounts-receivable', ExpenseAppropriationsToDepreciation = 'expense::appropriations-to-depreciation', ExpenseIncomeTaxExpense = 'expense::income-tax-expense', CostOfGoodsSoldSuppliesMaterialsCogs = 'cost-of-goods-sold::supplies-materials-cogs', LiabilityStaffAndRelatedLongTermLiabilityAccounts = 'liability::staff-and-related-long-term-liability-accounts', LiabilityLongTermDebit = 'liability::long-term-debit', OtherCurrentLiabilityCurrentPortionOfObligationsUnderFinanceLeases = 'other-current-liability::current-portion-of-obligations-under-finance-leases', LiabilityLongTermBorrowings = 'liability::long-term-borrowings', ExpenseGlobalTaxExpense = 'expense::global-tax-expense', AssetFurnitureAndFixtures = 'asset::furniture-and-fixtures', ExpenseCostOfLabor = 'expense::cost-of-labor', AssetSecurityDeposits = 'asset::security-deposits', OtherCurrentLiabilitySundryDebtorsAndCreditors = 'other-current-liability::sundry-debtors-and-creditors', AssetInvestments = 'asset::investments', AssetCashOnHand = 'asset::cash-on-hand', EquityPersonalIncome = 'equity::personal-income', OtherIncomeGainLossOnSaleOfFixedAssets = 'other-income::gain-loss-on-sale-of-fixed-assets', EquityCommonStock = 'equity::common-stock', EquityPersonalExpense = 'equity::personal-expense', ExpenseShippingFreightDelivery = 'expense::shipping-freight-delivery', EquityEquityInEarningsOfSubsidiuaries = 'equity::equity-in-earnings-of-subsidiuaries', EquityCapitalReserves = 'equity::capital-reserves', RevenueSavingsByTaxScheme = 'revenue::savings-by-tax-scheme', RevenueOtherPrimaryIncome = 'revenue::other-primary-income', AssetDevelopmentCosts = 'asset::development-costs', OtherExpenseWashAndRoadServices = 'other-expense::wash-and-road-services', LiabilityLongTermEmployeeBenefitObligations = 'liability::long-term-employee-benefit-obligations', EquityOpeningBalanceEquity = 'equity::opening-balance-equity', OtherCurrentLiabilityTrustAccountsLiabilities = 'other-current-liability::trust-accounts-liabilities', AssetProvisionsCurrentAssets = 'asset::provisions-current-assets', AssetAvailableForSaleFinancialAssets = 'asset::available-for-sale-financial-assets', OtherCurrentLiabilityDividendsPayable = 'other-current-liability::dividends-payable', OtherExpenseRepairsAndMaintenance = 'other-expense::repairs-and-maintenance', RevenueNonProfitIncome = 'revenue::non-profit-income', EquityOtherFreeReserves = 'equity::other-free-reserves', ExpenseAdvertisingPromotional = 'expense::advertising-promotional', AssetInvestmentTaxExemptSecurities = 'asset::investment-tax-exempt-securities', OtherExpenseDepletion = 'other-expense::depletion', AssetCalledUpShareCapitalNotPaid = 'asset::called-up-share-capital-not-paid', AssetIntangibleAssets = 'asset::intangible-assets', AssetMachineryAndEquipment = 'asset::machinery-and-equipment', OtherCurrentLiabilityCurrentTaxLiability = 'other-current-liability::current-tax-liability', LiabilityDeferredTaxLiabilities = 'liability::deferred-tax-liabilities', AssetGoodwill = 'asset::goodwill', OtherCurrentLiabilityInterestPayables = 'other-current-liability::interest-payables', ExpenseCommissionsAndFees = 'expense::commissions-and-fees', ExpenseOtherCurrentOperatingCharges = 'expense::other-current-operating-charges', OtherExpenseAmortization = 'other-expense::amortization', ExpenseOtherExternalServices = 'expense::other-external-services', AssetFixedAssetComputers = 'asset::fixed-asset-computers', OtherCurrentLiabilityLoanPayable = 'other-current-liability::loan-payable', LiabilityDebtsRelatedToParticipatingInterests = 'liability::debts-related-to-participating-interests', AssetFixedAssetSoftware = 'asset::fixed-asset-software', EquityShareCapital = 'equity::share-capital', AssetOtherCurrentAsset = 'asset::other-current-asset', RevenueSalesWholesale = 'revenue::sales-wholesale', EquityOwnersEquity = 'equity::owners-equity', ExpenseBankCharges = 'expense::bank-charges', OtherExpenseDepreciation = 'other-expense::depreciation', OtherCurrentLiabilityTradeAndOtherPayables = 'other-current-liability::trade-and-other-payables', LiabilityLiabilitiesRelatedToAssetsHeldForSale = 'liability::liabilities-related-to-assets-held-for-sale', ExpenseInsurance = 'expense::insurance' }
export const enum MessageReadStatus { Read = 'read', Failed = 'failed', Delivered = 'delivered', Unsent = 'unsent', Sent = 'sent' }
export const enum MessageContentType { Sticker = 'sticker', Contact = 'contact', Video = 'video', Html = 'html', File = 'file', Link = 'link', Document = 'document', Voice = 'voice', Text = 'text', Location = 'location', Audio = 'audio', Gif = 'gif', Image = 'image' }
export const enum MessageDeliveryStatus { Undeliverable = 'undeliverable', Failed = 'failed', Pending = 'pending', Sent = 'sent', Delivered = 'delivered', Error = 'error', Read = 'read' }
export const enum ReactionType { Laugh = 'laugh', Bookmark = 'bookmark', Love = 'love', Sad = 'sad', Wow = 'wow', Like = 'like', Angry = 'angry', Dislike = 'dislike', Interested = 'interested' }
export const enum SupportTicketPriority { Immediate = 'immediate', Low = 'low', High = 'high', Medium = 'medium', Urgent = 'urgent' }
export const enum IssueLifecycleStatus { Waiting = 'waiting', Resolved = 'resolved', Cancelled = 'cancelled', Open = 'open', Closed = 'closed', OnHold = 'on-hold', InProgress = 'in-progress', Pending = 'pending' }
export const enum SupportQueryType { Feedback = 'feedback', Incident = 'incident', Task = 'task', Problem = 'problem', Bug = 'bug', FeatureRequest = 'feature-request', Question = 'question' }
export const enum OrderStatus { AwaitingPayment = 'awaiting-payment', AwaitingShipment = 'awaiting-shipment', Draft = 'draft', Confirmed = 'confirmed', Pending = 'pending', Processing = 'processing', AwaitingPickup = 'awaiting-pickup', Completed = 'completed', OnHold = 'on-hold', Delivered = 'delivered', Refunded = 'refunded', Cancelled = 'cancelled', PartiallyFulfilled = 'partially-fulfilled', Shipped = 'shipped', Returned = 'returned', Failed = 'failed', Abandoned = 'abandoned', Disputed = 'disputed' }
export const enum DiscountType { TieredDiscount = 'tiered-discount', FixedAmount = 'fixed-amount', ConditionalDiscount = 'conditional-discount', VariableAmount = 'variable-amount', BuyOneGetOne = 'buy-one-get-one', VariablePercentage = 'variable-percentage', Percentage = 'percentage', UnknownDiscount = 'unknown-discount' }
export const enum ImageMimeType { ImageTiff = 'image/tiff', ImagePng = 'image/png', ImageJpeg = 'image/jpeg', ImageWebp = 'image/webp', ImageGif = 'image/gif', ImageHeic = 'image/heic', ImageSvgXml = 'image/svg+xml', ImageBmp = 'image/bmp' }
export const enum FulfillmentStatus { Returned = 'returned', Pending = 'pending', Delivered = 'delivered', InTransit = 'in-transit', Failure = 'failure', Cancelled = 'cancelled' }
export const enum OrderingCriteria { CreationDate = 'creation-date', Manual = 'manual', Popularity = 'popularity', PriceAscending = 'price-ascending', Rating = 'rating', PriceDescending = 'price-descending', Relevance = 'relevance', Alphabetical = 'alphabetical' }
export const enum ChatType { Public = 'public', Private = 'private', Group = 'group' }
export const enum ProductAvailabilityStatus { InStock = 'in-stock', BackOrder = 'back-order', Discontinued = 'discontinued', OutOfStock = 'out-of-stock', PreOrder = 'pre-order' }
export const enum ExpenseApprovalStatus { Cancelled = 'cancelled', New = 'new', Processed = 'processed', Reviewing = 'reviewing', Pending = 'pending', Approved = 'approved', Reimbursed = 'reimbursed', Denied = 'denied' }
export const enum FinancialChargeType { Commission = 'commission', LateFee = 'late-fee', Other = 'other', TransactionFee = 'transaction-fee', ServiceCharge = 'service-charge', InterestCharge = 'interest-charge', ProcessingFee = 'processing-fee' }
export const enum ItemAvailabilityStatus { Inactive = 'inactive', Discontinued = 'discontinued', OutOfStock = 'out-of-stock', Active = 'active' }
export const enum BillingStatus { Overdue = 'overdue', Unpaid = 'unpaid', Submitted = 'submitted', Authorised = 'authorised', Pending = 'pending', Deleted = 'deleted', Voided = 'voided', Paid = 'paid', Draft = 'draft', PartiallyPaid = 'partially-paid' }
export const enum FinancialAccountStatus { Active = 'active', Closed = 'closed', Frozen = 'frozen', Suspended = 'suspended', Inactive = 'inactive', UnderReview = 'under-review', Delinquent = 'delinquent' }
export const enum TransactionStatus { Failed = 'failed', InProgress = 'in-progress', Cancelled = 'cancelled', Error = 'error', Initiated = 'initiated', Pending = 'pending', Succeeded = 'succeeded' }
export const enum InvoiceAdjustmentType { Tip = 'tip', Other = 'other', Tax = 'tax', Discount = 'discount', Shipping = 'shipping' }
export const enum DataType { Date = 'date', Object = 'object', Boolean = 'boolean', Binary = 'binary', Null = 'null', Number = 'number', Timestamp = 'timestamp', Custom = 'custom', Undefined = 'undefined', Json = 'json', String = 'string', Array = 'array' }
export const enum EmploymentType { Internship = 'internship', Seasonal = 'seasonal', Permanent = 'permanent', FullTime = 'full-time', Temporary = 'temporary', Freelance = 'freelance', PartTime = 'part-time', Volunteer = 'volunteer', Contract = 'contract' }
export const enum TimeCycle { Biennially = 'biennially', Biweekly = 'biweekly', Custom = 'custom', Hourly = 'hourly', Monthly = 'monthly', Quarterly = 'quarterly', Annually = 'annually', Minutely = 'minutely', SemiMonthly = 'semi-monthly', SemiAnnually = 'semi-annually', Triennially = 'triennially', Daily = 'daily', Weekly = 'weekly', Secondly = 'secondly', AdHoc = 'ad-hoc' }
export const enum FinancialTrackingCategories { Department = 'department', Employee = 'employee', Project = 'project', Division = 'division', Class = 'class', Customer = 'customer', Vendor = 'vendor', Service = 'service', Other = 'other', CostCenter = 'cost-center', None = 'none', Product = 'product', Location = 'location' }
export const enum CreditNoteStatus { Revised = 'revised', Applied = 'applied', Void = 'void', Issued = 'issued', Pending = 'pending', Completed = 'completed', Disputed = 'disputed', Draft = 'draft', Cancelled = 'cancelled' }
export const enum PaymentTerm { DueEndOfMonth = 'due-end-of-month', Prepayment = 'prepayment', Installment = 'installment', DueOnReceipt = 'due-on-receipt', Net60 = 'net-60', UponCompletion = 'upon-completion', CashWithOrder = 'cash-with-order', DeferredPayment = 'deferred-payment', Net = 'net', Custom = 'custom', Net30 = 'net-30', CashBeforeShipment = 'cash-before-shipment', CashOnDelivery = 'cash-on-delivery', Net90 = 'net-90', CashInAdvance = 'cash-in-advance', Prepaid = 'prepaid' }
export const enum EmploymentAndCandidateStatus { OnLeave = 'on-leave', Active = 'active', Interviewing = 'interviewing', New = 'new', OfferExtended = 'offer-extended', Hired = 'hired', Inactive = 'inactive', InReview = 'in-review', NotSelected = 'not-selected', Terminated = 'terminated', Other = 'other' }
export const enum OrganizationalRole { Employee = 'employee', Contractor = 'contractor', Manager = 'manager', Director = 'director', Supervisor = 'supervisor', Other = 'other', Admin = 'admin' }
export const enum CampaignType { Display = 'display', Email = 'email', Other = 'other', SocialMedia = 'social-media', SearchEngine = 'search-engine' }
export const enum ContactAddressType { Billing = 'billing', Personal = 'personal', Home = 'home', Other = 'other', Temporary = 'temporary', Business = 'business', Shipping = 'shipping', Work = 'work' }
export const enum CustomerStatus { Pending = 'pending', Inactive = 'inactive', Archived = 'archived', Suspended = 'suspended', Active = 'active' }
export const enum SocialPlatform { X = 'x', Tiktok = 'tiktok', Youtube = 'youtube', Instagram = 'instagram', Reddit = 'reddit', Snapchat = 'snapchat', Linkedin = 'linkedin', Pinterest = 'pinterest', Tumblr = 'tumblr', Twitter = 'twitter', Skype = 'skype', OtherSocialPlatform = 'other-social-platform', Facebook = 'facebook' }
export const enum LeadLifecycleStatus { Connected = 'connected', BadTiming = 'bad-timing', Converted = 'converted', Unqualified = 'unqualified', Lost = 'lost', Open = 'open', AttemptedToContact = 'attempted-to-contact', New = 'new', Revisited = 'revisited', InProcess = 'in-process' }
export const enum ConversationStatus { Archived = 'archived', Closed = 'closed', Snoozed = 'snoozed', Active = 'active', Deleted = 'deleted' }
export const enum CommunicationRole { System = 'system', Moderator = 'moderator', Owner = 'owner', User = 'user', Guest = 'guest', Group = 'group', Admin = 'admin', Service = 'service', Assistant = 'assistant', Member = 'member', Bot = 'bot', Channel = 'channel' }
export const enum ParticipantEngagementStatus { Inactive = 'inactive', Banned = 'banned', Active = 'active', Admin = 'admin', Guest = 'guest', Left = 'left', Moderator = 'moderator' }
export const enum ItemEntityStatus { Archived = 'archived', Active = 'active', Suspended = 'suspended', Inactive = 'inactive', Pending = 'pending', Deleted = 'deleted', Completed = 'completed' }
export const enum Currency { PKR = 'pkr', DJF = 'djf', VES = 'ves', SDG = 'sdg', IMP = 'imp', LYD = 'lyd', MDL = 'mdl', LSL = 'lsl', MYR = 'myr', ERN = 'ern', IQD = 'iqd', CNY = 'cny', FJD = 'fjd', KMF = 'kmf', KZT = 'kzt', MZN = 'mzn', USD = 'usd', XAF = 'xaf', GHS = 'ghs', HUF = 'huf', PGK = 'pgk', BIF = 'bif', SHP = 'shp', MWK = 'mwk', AOA = 'aoa', KPW = 'kpw', SLL = 'sll', XPF = 'xpf', MNT = 'mnt', BYN = 'byn', CDF = 'cdf', MKD = 'mkd', TND = 'tnd', XCD = 'xcd', STN = 'stn', NOK = 'nok', KES = 'kes', DOP = 'dop', LRD = 'lrd', SYP = 'syp', GMD = 'gmd', JOD = 'jod', KYD = 'kyd', UAH = 'uah', VUV = 'vuv', GNF = 'gnf', PHP = 'php', CZK = 'czk', IDR = 'idr', ZAR = 'zar', SRD = 'srd', TVD = 'tvd', MVR = 'mvr', EGP = 'egp', HNL = 'hnl', BHD = 'bhd', GGP = 'ggp', COP = 'cop', KRW = 'krw', KWD = 'kwd', MXN = 'mxn', ALL = 'all', PEN = 'pen', KID = 'kid', AZN = 'azn', UGX = 'ugx', ISK = 'isk', SAR = 'sar', CVE = 'cve', GBP = 'gbp', BWP = 'bwp', PAB = 'pab', DKK = 'dkk', MMK = 'mmk', NAD = 'nad', CUP = 'cup', SSP = 'ssp', PLN = 'pln', MGA = 'mga', TJS = 'tjs', BDT = 'bdt', CHF = 'chf', GYD = 'gyd', AMD = 'amd', BOB = 'bob', XDR = 'xdr', TWD = 'twd', MUR = 'mur', SGD = 'sgd', FKP = 'fkp', HKD = 'hkd', ANG = 'ang', LKR = 'lkr', BBD = 'bbd', ILS = 'ils', BGN = 'bgn', CRC = 'crc', EUR = 'eur', SBD = 'sbd', SZL = 'szl', RWF = 'rwf', BRL = 'brl', QAR = 'qar', BAM = 'bam', BZD = 'bzd', IRR = 'irr', OMR = 'omr', KHR = 'khr', SCR = 'scr', CUC = 'cuc', NGN = 'ngn', AUD = 'aud', KGS = 'kgs', SOS = 'sos', DZD = 'dzd', CLP = 'clp', RSD = 'rsd', NZD = 'nzd', MOP = 'mop', JMD = 'jmd', LAK = 'lak', INR = 'inr', WST = 'wst', BSD = 'bsd', BMD = 'bmd', GIP = 'gip', UYU = 'uyu', HRK = 'hrk', THB = 'thb', HTG = 'htg', JPY = 'jpy', ARS = 'ars', LBP = 'lbp', NPR = 'npr', ZWL = 'zwl', AED = 'aed', MAD = 'mad', TOP = 'top', MRU = 'mru', GEL = 'gel', SEK = 'sek', TMT = 'tmt', PYG = 'pyg', TRY = 'try', UZS = 'uzs', VND = 'vnd', CAD = 'cad', XOF = 'xof', ZMW = 'zmw', AFN = 'afn', AWG = 'awg', JEP = 'jep', TZS = 'tzs', BTN = 'btn', GTQ = 'gtq', RON = 'ron', RUB = 'rub', YER = 'yer', FOK = 'fok', NIO = 'nio', BND = 'bnd', TTD = 'ttd', ETB = 'etb' }
export const enum CustomerEligibilityStatus { AllCustomers = 'all-customers', ReturningCustomers = 'returning-customers', NewCustomers = 'new-customers', SpecificConditions = 'specific-conditions', Other = 'other', VipCustomers = 'vip-customers' }
export const enum LifecycleStatus { Expired = 'expired', Active = 'active', Redeemed = 'redeemed', Suspended = 'suspended', Cancelled = 'cancelled', Issued = 'issued' }
export const enum PaymentMethod { BankTransfer = 'bank-transfer', MobileWallet = 'mobile-wallet', Other = 'other', Cash = 'cash', DebitCard = 'debit-card', Check = 'check', CreditCard = 'credit-card', MobilePayment = 'mobile-payment', Paypal = 'paypal', CashOnDelivery = 'cash-on-delivery', Cryptocurrency = 'cryptocurrency' }
export const enum FinancialTransactionStatus { Cancelled = 'cancelled', Pending = 'pending', Failed = 'failed', Cleared = 'cleared', Refunded = 'refunded', SettlementInProgress = 'settlement-in-progress', Disputed = 'disputed', Authorized = 'authorized' }
export const enum AuditOpinionType { Qualified = 'qualified', Unqualified = 'unqualified', Disclaimer = 'disclaimer', Adverse = 'adverse' }
export const enum InventoryStorageType { RetailStore = 'retail-store', DistributionCenter = 'distribution-center', DropShipper = 'drop-shipper', Warehouse = 'warehouse', Consignment = 'consignment', OnlineMarketplace = 'online-marketplace', Other = 'other' }
export const enum ItemCondition { OpenBox = 'open-box', Damaged = 'damaged', Refurbished = 'refurbished', Used = 'used', New = 'new', LikeNew = 'like-new' }
export const enum TransactionType { Deposit = 'deposit', Transfer = 'transfer', Fee = 'fee', Withdrawal = 'withdrawal', Refund = 'refund', Adjustment = 'adjustment', Charge = 'charge', Payment = 'payment' }
export const enum VisibilityScope { Global = 'global', Internal = 'internal', Web = 'web', App = 'app', Private = 'private' }
export const enum PaymentStatus { Disputed = 'disputed', Overdue = 'overdue', PartiallyRefunded = 'partially-refunded', Deleted = 'deleted', Processing = 'processing', Paid = 'paid', Partial = 'partial', Pending = 'pending', Adjusted = 'adjusted', Refunded = 'refunded', Error = 'error', Failed = 'failed', Voided = 'voided', Authorized = 'authorized', Cancelled = 'cancelled', Draft = 'draft', Submitted = 'submitted', Succeeded = 'succeeded' }
export const enum EntityLifecycleStatus { Draft = 'draft', Deleted = 'deleted', Scheduled = 'scheduled', Archived = 'archived', Inactive = 'inactive', Active = 'active', Preorder = 'preorder' }
export const enum TransactionChannel { Online = 'online', Telephone = 'telephone', InPerson = 'in-person', Atm = 'atm', Mail = 'mail', Other = 'other', BankBranch = 'bank-branch', Mobile = 'mobile' }
export const enum FinancialDisputeStatus { AwaitingEvidence = 'awaiting-evidence', Lost = 'lost', UnderReview = 'under-review', Won = 'won', Closed = 'closed', Escalated = 'escalated', ChargeRefunded = 'charge-refunded', NeedsResponse = 'needs-response' }
export const enum ContentVisibility { Public = 'public', Internal = 'internal', Protected = 'protected', Shared = 'shared', Private = 'private' }
export const enum DeviceUsageType { Other = 'other', Healthcare = 'healthcare', Educational = 'educational', Personal = 'personal', Business = 'business', Industrial = 'industrial', Home = 'home' }
export const enum EntityCategory { Message = 'message', Task = 'task', Document = 'document', Person = 'person', User = 'user', Other = 'other', Event = 'event', Link = 'link', Project = 'project', Owner = 'owner' }
export const enum GenderIdentity { Male = 'male', Female = 'female', Other = 'other', PreferNotToSay = 'prefer-not-to-say' }
export const enum CommunicationMethod { PushNotification = 'push-notification', Sms = 'sms', SocialMedia = 'social-media', InstantMessage = 'instant-message', Phone = 'phone', Other = 'other', Text = 'text', InPerson = 'in-person', VideoCall = 'video-call', Email = 'email', Mail = 'mail' }
export const enum FinancialTransactionType { Spend = 'spend', Deposit = 'deposit', ReceiveOverpayment = 'receive-overpayment', Dividend = 'dividend', Transfer = 'transfer', Payment = 'payment', Refund = 'refund', ReceivePrepayment = 'receive-prepayment', Chargeback = 'chargeback', Receive = 'receive', SpendPrepayment = 'spend-prepayment', Other = 'other', Fee = 'fee', Charge = 'charge', SpendOverpayment = 'spend-overpayment', Adjustment = 'adjustment', Sale = 'sale', Interest = 'interest', Withdrawal = 'withdrawal' }
export const enum EmailCategoryType { Business = 'business', Governmental = 'governmental', Spam = 'spam', Promotional = 'promotional', Other = 'other', Educational = 'educational', Personal = 'personal', Transactional = 'transactional' }
export const enum UniversalIdentifierType { String = 'string', Url = 'url', Email = 'email', Uuid = 'uuid', Number = 'number' }
export const enum AccessControlModel { Rbac = 'rbac', Mac = 'mac', Custom = 'custom', None = 'none', Abac = 'abac', Dac = 'dac' }
export const enum ParticipantType { User = 'user', Team = 'team', Organization = 'organization', ExternalParticipant = 'external-participant', Group = 'group' }
export const enum PriorityLevel { Medium = 'medium', Elevated = 'elevated', Urgent = 'urgent', High = 'high', Low = 'low' }
export const enum TaskStatus { OnHold = 'on-hold', Done = 'done', InProgress = 'in-progress', Todo = 'todo', Blocked = 'blocked', Cancelled = 'cancelled' }
export const enum UserStatus { Active = 'active', Deleted = 'deleted', Suspended = 'suspended', WaitListed = 'wait-listed', Verified = 'verified', Banned = 'banned', Archived = 'archived', Inactive = 'inactive', Pending = 'pending' }
export const enum PromotionType { FixedAmount = 'fixed-amount', FreeShipping = 'free-shipping', Percentage = 'percentage', BuyOneGetOne = 'buy-one-get-one', RewardPoints = 'reward-points', Other = 'other' }
export const enum MimeType { ImageJpeg = 'image/jpeg', ImageSvgXml = 'image/svg+xml', ImageWebp = 'image/webp', ImageGif = 'image/gif', ImagePng = 'image/png' }
export const enum PrerequisiteRangeType { ShippingPrice = 'shipping-price', Subtotal = 'subtotal', Quantity = 'quantity' }
export const enum TaxType { Additive = 'additive', Variable = 'variable', Inclusive = 'inclusive' }
export const enum ModifierType { Text = 'text', List = 'list' }
export const enum CardType { UnknownCard = 'unknown-card', Credit = 'credit', Debit = 'debit' }
export const enum PrepaidType { NotPrepaid = 'not-prepaid', Prepaid = 'prepaid', UnknownPrepaid = 'unknown-prepaid' }
export const enum EntryMethod { OnFile = 'on-file', Contactless = 'contactless', Swiped = 'swiped', Emv = 'emv', Keyed = 'keyed' }
export const enum CvvStatus { Accepted = 'accepted', Rejected = 'rejected', NotChecked = 'not-checked' }
export const enum AvcStatus { Accepted = 'accepted', Rejected = 'rejected', NotChecked = 'not-checked' }
export const enum CreditType { Supplier = 'supplier', Overpayment = 'overpayment', Customer = 'customer', Prepayment = 'prepayment', Goodwill = 'goodwill' }
export const enum CallDirection { Conference = 'conference', Inbound = 'inbound', Unknown = 'unknown', Outbound = 'outbound' }
export const enum SpeakerRole { Invitee = 'invitee', Attendee = 'attendee' }
export const enum FileType { Folder = 'folder', File = 'file', Url = 'url' }
export const enum AiToolChoiceType { None = 'none', Any = 'any', Auto = 'auto', Tool = 'tool' }
export const enum ImageType { Base64 = 'base64' }
export const enum ResponseFormatType { JsonSchema = 'json-schema', JsonObject = 'json-object', Text = 'text' }
export const enum ToolCallType { Function = 'function' }
export const enum AiMessagesContentType { ToolResult = 'tool-result', ToolUse = 'tool-use', Text = 'text', Image = 'image' }
export const enum AiRole { User = 'user', Tool = 'tool', Assistant = 'assistant' }
export const enum JsonSchemaType { Function = 'function' }
export const enum EventStatus { Confirmed = 'confirmed', Cancelled = 'cancelled', Tentative = 'tentative' }
export const enum EventVisibility { Public = 'public', Private = 'private', Confidential = 'confidential' }
export const enum EventReminderAction { Email = 'email', Popup = 'popup' }
export const enum EventRuleType { Exclude = 'exclude', AddDates = 'add-dates', ExcludeDates = 'exclude-dates', Repeat = 'repeat' }
export const enum EventFrequency { Monthly = 'monthly', Weekly = 'weekly', Daily = 'daily', Yearly = 'yearly' }
