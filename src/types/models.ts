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
export const enum Format { Xml = 'xml', Json = 'json' }
export const enum TargetType { ShippingLine = 'shipping-line', LineItem = 'line-item' }
export const enum Status { Expired = 'expired', Scheduled = 'scheduled', Active = 'active' }
export const enum AppliesTo { SpecificItems = 'specific-items', SpecificCategories = 'specific-categories', AllItems = 'all-items' }
export const enum TargetSelection { Entitled = 'entitled', All = 'all' }
export const enum MinimumRequirements { MinimumQuantityOfItems = 'minimum-quantity-of-items', None = 'none', MinimumPurchaseAmount = 'minimum-purchase-amount' }
export const enum TransactionMethod { Atm = 'atm', Mail = 'mail', Online = 'online', BankBranch = 'bank-branch', Mobile = 'mobile', Telephone = 'telephone' }
export const enum SkuValidation { GlobalUnique = 'global-unique', None = 'none', LocalUnique = 'local-unique' }
export const enum AllocationMethod { Each = 'each', Across = 'across' }
export const enum Roles { User = 'user', Admin = 'admin', Moderator = 'moderator' }
export const enum UserRoles { Admin = 'admin', Moderator = 'moderator', User = 'user' }
export const enum Gender { Male = 'male', Female = 'female', Other = 'other', PreferNotToSay = 'prefer not to say' }
export const enum ChannelAvailability { Online = 'online', InStore = 'in-store', AllChannels = 'all-channels', InApp = 'in-app' }
export const enum CustomerEligibility { All = 'all', SpecificCustomerGroups = 'specific-customer-groups', SpecificCustomers = 'specific-customers' }
export const enum AccountType { ExpenseTravelMeals = 'expense::travel-meals', EquityCalledUpShareCapital = 'equity::called-up-share-capital', OtherCurrentLiabilitySalesTaxPayable = 'other-current-liability::sales-tax-payable', AssetPrepaymentsAndAccruedIncome = 'asset::prepayments-and-accrued-income', AssetDepletableAssets = 'asset::depletable-assets', ExpenseDuesSubscriptions = 'expense::dues-subscriptions', OtherIncome = 'other-income', AssetLoansToStockholders = 'asset::loans-to-stockholders', AssetFixedAssetComputers = 'asset::fixed-asset-computers', AssetProvisionsFixedAssets = 'asset::provisions-fixed-assets', RevenueSavingsByTaxScheme = 'revenue::savings-by-tax-scheme', LiabilityDeferredTaxLiabilities = 'liability::deferred-tax-liabilities', OtherCurrentLiabilityRentsInTrustLiability = 'other-current-liability::rents-in-trust-liability', AssetLeaseholdImprovements = 'asset::leasehold-improvements', AssetInventory = 'asset::inventory', ExpenseTravel = 'expense::travel', ExpenseUnappliedCashBillPaymentExpense = 'expense::unapplied-cash-bill-payment-expense', OtherExpenseUtilities = 'other-expense::utilities', AssetCumulativeDepreciationOnIntangibleAssets = 'asset::cumulative-depreciation-on-intangible-assets', LiabilityCreditCard = 'liability::credit-card', AssetRentsHeldInTrust = 'asset::rents-held-in-trust', LiabilityStaffAndRelatedLongTermLiabilityAccounts = 'liability::staff-and-related-long-term-liability-accounts', OtherIncomeLossOnDisposalOfAssets = 'other-income::loss-on-disposal-of-assets', AssetAllowanceForBadDebts = 'asset::allowance-for-bad-debts', ExpenseCostOfLabor = 'expense::cost-of-labor', OtherExpenseVehicleLoan = 'other-expense::vehicle-loan', ExpenseTravelExpensesGeneralAndAdminExpenses = 'expense::travel-expenses-general-and-admin-expenses', RevenueOtherPrimaryIncome = 'revenue::other-primary-income', RevenueNonProfitIncome = 'revenue::non-profit-income', ExpenseIncomeTaxExpense = 'expense::income-tax-expense', LiabilityOtherLongTermProvisions = 'liability::other-long-term-provisions', OtherCurrentLiabilitySundryDebtorsAndCreditors = 'other-current-liability::sundry-debtors-and-creditors', ExpenseOtherRentalCosts = 'expense::other-rental-costs', OtherExpenseExtraordinaryItems = 'other-expense::extraordinary-items', AssetCapitalWip = 'asset::capital-wip', AssetShortTermLoansAndAdvancesToRelatedParties = 'asset::short-term-loans-and-advances-to-related-parties', CostOfGoodsSoldOtherCostsOfServiceCos = 'cost-of-goods-sold::other-costs-of-service-cos', EquityOpeningBalanceEquity = 'equity::opening-balance-equity', OtherCurrentLiabilityTradeAndOtherPayables = 'other-current-liability::trade-and-other-payables', ExpensePayrollExpenses = 'expense::payroll-expenses', OtherIncomeDividendIncome = 'other-income::dividend-income', RevenueSalesWholesale = 'revenue::sales-wholesale', AssetAccumulatedAmortization = 'asset::accumulated-amortization', ExpenseBankCharges = 'expense::bank-charges', AssetRetainage = 'asset::retainage', OtherCurrentLiabilityFederalIncomeTaxPayable = 'other-current-liability::federal-income-tax-payable', ExpenseLegalProfessionalFees = 'expense::legal-professional-fees', LiabilityAccruedVacationPayable = 'liability::accrued-vacation-payable', CostOfGoodsSoldFreightAndDeliveryCost = 'cost-of-goods-sold::freight-and-delivery-cost', EquityEstimatedTaxes = 'equity::estimated-taxes', OtherExpenseRentAndLease = 'other-expense::rent-and-lease', OtherCurrentLiabilityStaffAndRelatedLiabilityAccounts = 'other-current-liability::staff-and-related-liability-accounts', OtherCurrentLiabilityCurrentPortionOfObligationsUnderFinanceLeases = 'other-current-liability::current-portion-of-obligations-under-finance-leases', AssetLandAsset = 'asset::land-asset', AssetLongTermLoansAndAdvancesToRelatedParties = 'asset::long-term-loans-and-advances-to-related-parties', OtherIncomeGainLossOnSaleOfFixedAssets = 'other-income::gain-loss-on-sale-of-fixed-assets', LiabilityDebtsRelatedToParticipatingInterests = 'liability::debts-related-to-participating-interests', OtherExpenseWashAndRoadServices = 'other-expense::wash-and-road-services', OtherCurrentLiabilityDutiesAndTaxes = 'other-current-liability::duties-and-taxes', AssetLoansToOthers = 'asset::loans-to-others', AssetOrganizationalCosts = 'asset::organizational-costs', AssetProvisionsNonCurrentAssets = 'asset::provisions-non-current-assets', ExpenseStaffCosts = 'expense::staff-costs', EquityShareApplicationMoneyPendingAllotment = 'equity::share-application-money-pending-allotment', LiabilityObligationsUnderFinanceLeases = 'liability::obligations-under-finance-leases', ExpenseBadDebts = 'expense::bad-debts', OtherExpenseExceptionalItems = 'other-expense::exceptional-items', ExpenseRentOrLeaseOfBuildings = 'expense::rent-or-lease-of-buildings', LiabilityShareholderNotesPayable = 'liability::shareholder-notes-payable', Equity = 'equity', OtherExpenseVehicleLoanInterest = 'other-expense::vehicle-loan-interest', AssetLongTermInvestments = 'asset::long-term-investments', AssetMoneyMarket = 'asset::money-market', OtherCurrentLiabilityTrustAccountsLiabilities = 'other-current-liability::trust-accounts-liabilities', AssetSavings = 'asset::savings', ExpenseShippingFreightDelivery = 'expense::shipping-freight-delivery', AssetOtherLongTermLoansAndAdvances = 'asset::other-long-term-loans-and-advances', EquityMoneyReceivedAgainstShareWarrants = 'equity::money-received-against-share-warrants', OtherExpenseHomeOffice = 'other-expense::home-office', EquityPartnerDistributions = 'equity::partner-distributions', OtherIncomeOtherInvestmentIncome = 'other-income::other-investment-income', LiabilityGovernmentAndOtherPublicAuthorities = 'liability::government-and-other-public-authorities', ExpenseCommissionsAndFees = 'expense::commissions-and-fees', ExpenseOtherSellingExpenses = 'expense::other-selling-expenses', OtherIncomeUnrealisedLossOnSecuritiesNetOfTax = 'other-income::unrealised-loss-on-securities-net-of-tax', OtherExpenseAmortization = 'other-expense::amortization', LiabilityNotesPayable = 'liability::notes-payable', AssetGlobalTaxDeferred = 'asset::global-tax-deferred', Income = 'income', AssetFurnitureAndFixtures = 'asset::furniture-and-fixtures', AssetFixedAssetCopiers = 'asset::fixed-asset-copiers', ExpenseInterestPaid = 'expense::interest-paid', AssetCashOnHand = 'asset::cash-on-hand', AssetFixedAsset = 'asset::fixed-asset', AssetAvailableForSaleFinancialAssets = 'asset::available-for-sale-financial-assets', ExpenseFinanceCosts = 'expense::finance-costs', OtherIncomeGainLossOnSaleOfInvestments = 'other-income::gain-loss-on-sale-of-investments', RevenueServiceFeeIncome = 'revenue::service-fee-income', ExpenseShippingAndDeliveryExpense = 'expense::shipping-and-delivery-expense', OtherCurrentLiabilityAccruedLiabilities = 'other-current-liability::accrued-liabilities', OtherExpenseHomeOwnerRentalInsurance = 'other-expense::home-owner-rental-insurance', AssetIntangibleAssetsUnderDevelopment = 'asset::intangible-assets-under-development', EquityFunds = 'equity::funds', AssetBalWithGovtAuthorities = 'asset::bal-with-govt-authorities', LiabilityLongTermDebit = 'liability::long-term-debit', AssetLeaseBuyout = 'asset::lease-buyout', LiabilityOutstandingDuesOtherThanMicroSmallEnterprise = 'liability::outstanding-dues-other-than-micro-small-enterprise', OtherExpenseParkingAndTolls = 'other-expense::parking-and-tolls', EquityPartnersEquity = 'equity::partners-equity', RevenueCashReceiptIncome = 'revenue::cash-receipt-income', AssetDevelopmentCosts = 'asset::development-costs', AssetNonCurrentAssets = 'asset::non-current-assets', AssetFixedAssetPhotoVideo = 'asset::fixed-asset-photo-video', CostOfGoodsSoldEquipmentRentalCos = 'cost-of-goods-sold::equipment-rental-cos', OtherCurrentLiabilityDividendsPayable = 'other-current-liability::dividends-payable', ExpenseManagementCompensation = 'expense::management-compensation', OtherExpense = 'other-expense', ExpenseUtilities = 'expense::utilities', OtherIncomeInterestEarned = 'other-income::interest-earned', AssetInvestmentOther = 'asset::investment-other', AssetParticipatingInterests = 'asset::participating-interests', RevenueOwnWorkCapitalized = 'revenue::own-work-capitalized', AssetOtherIntangibleAssets = 'asset::other-intangible-assets', AssetExpenditureAuthorisationsAndLettersOfCredit = 'asset::expenditure-authorisations-and-letters-of-credit', AssetTradeAndOtherReceivables = 'asset::trade-and-other-receivables', OtherExpenseVehicleLease = 'other-expense::vehicle-lease', AssetBuildings = 'asset::buildings', AssetPrepaidExpenses = 'asset::prepaid-expenses', AssetVehicles = 'asset::vehicles', OtherExpensePriorPeriodItems = 'other-expense::prior-period-items', OtherCurrentLiabilityProvisionForWarrantyObligations = 'other-current-liability::provision-for-warranty-obligations', ExpenseExtraordinaryCharges = 'expense::extraordinary-charges', OtherExpenseVehicleInsurance = 'other-expense::vehicle-insurance', OtherCurrentLiabilityProvisionsCurrentLiabilities = 'other-current-liability::provisions-current-liabilities', ExpenseEquipmentRental = 'expense::equipment-rental', AssetFixedAssetOtherToolsEquipment = 'asset::fixed-asset-other-tools-equipment', AssetLicenses = 'asset::licenses', EquityPartnerContributions = 'equity::partner-contributions', ExpenseSundry = 'expense::sundry', AssetGoodwill = 'asset::goodwill', OtherCurrentLiabilityLoanPayable = 'other-current-liability::loan-payable', EquityCommonStock = 'equity::common-stock', AssetOtherEarMarkedBankAccounts = 'asset::other-ear-marked-bank-accounts', EquityAccumulatedOtherComprehensiveIncome = 'equity::accumulated-other-comprehensive-income', OtherExpenseDeferredTaxExpense = 'other-expense::deferred-tax-expense', AssetInvestmentMortgageRealEstateLoans = 'asset::investment-mortgage-real-estate-loans', AssetFixedAssetFurniture = 'asset::fixed-asset-furniture', OtherCurrentLiabilityGlobalTaxPayable = 'other-current-liability::global-tax-payable', EquityRetainedEarnings = 'equity::retained-earnings', OtherCurrentLiabilityStateLocalIncomeTaxPayable = 'other-current-liability::state-local-income-tax-payable', EquityPersonalExpense = 'equity::personal-expense', ExpenseBorrowingCost = 'expense::borrowing-cost', AssetDeferredTax = 'asset::deferred-tax', OtherExpenseOtherVehicleExpenses = 'other-expense::other-vehicle-expenses', AssetAssetsAvailableForSale = 'asset::assets-available-for-sale', CostOfGoodsSoldCostOfLaborCos = 'cost-of-goods-sold::cost-of-labor-cos', ExpenseAdvertisingPromotional = 'expense::advertising-promotional', CostOfGoodsSoldShippingFreightDeliveryCos = 'cost-of-goods-sold::shipping-freight-delivery-cos', AssetTrustAccounts = 'asset::trust-accounts', ExpensePenaltiesSettlements = 'expense::penalties-settlements', AssetOtherAsset = 'asset::other-asset', AssetInvestmentTaxExemptSecurities = 'asset::investment-tax-exempt-securities', ExpenseGlobalTaxExpense = 'expense::global-tax-expense', ExpenseLossOnDiscontinuedOperationsNetOfTax = 'expense::loss-on-discontinued-operations-net-of-tax', RevenueOperatingGrants = 'revenue::operating-grants', AssetInternalTransfers = 'asset::internal-transfers', OtherCurrentLiabilityGlobalTaxSuspense = 'other-current-liability::global-tax-suspense', LiabilityProvisionsNonCurrentLiabilities = 'liability::provisions-non-current-liabilities', OtherExpenseIncomeTaxOtherExpense = 'other-expense::income-tax-other-expense', EquityShareCapital = 'equity::share-capital', OtherCurrentLiability = 'other-current-liability', EquityTreasuryStock = 'equity::treasury-stock', AssetAccumulatedDepreciation = 'asset::accumulated-depreciation', ExpenseSuppliesMaterials = 'expense::supplies-materials', ExpenseOtherBusinessExpenses = 'expense::other-business-expenses', ExpenseAmortizationExpense = 'expense::amortization-expense', AssetSecurityDeposits = 'asset::security-deposits', AssetOtherCurrentAsset = 'asset::other-current-asset', ExpenseTravelExpensesSellingExpense = 'expense::travel-expenses-selling-expense', OtherExpenseTaxRoundoffGainOrLoss = 'other-expense::tax-roundoff-gain-or-loss', AssetOtherCurrentAssets = 'asset::other-current-assets', ExpenseRepairMaintenance = 'expense::repair-maintenance', AssetOtherFixedAssets = 'asset::other-fixed-assets', OtherCurrentLiabilityLineOfCredit = 'other-current-liability::line-of-credit', RevenueDiscountsRefundsGiven = 'revenue::discounts-refunds-given', OtherCurrentLiabilityDirectDepositPayable = 'other-current-liability::direct-deposit-payable', AssetCalledUpShareCapitalNotPaid = 'asset::called-up-share-capital-not-paid', LiabilityOtherLongTermLiabilities = 'liability::other-long-term-liabilities', AssetOtherLongTermInvestments = 'asset::other-long-term-investments', LiabilityBankLoans = 'liability::bank-loans', OtherCurrentLiabilityOtherCurrentLiabilities = 'other-current-liability::other-current-liabilities', OtherExpenseRepairsAndMaintenance = 'other-expense::repairs-and-maintenance', ExpenseExternalServices = 'expense::external-services', ExpensePurchasesRebates = 'expense::purchases-rebates', OtherIncomeTaxExemptInterest = 'other-income::tax-exempt-interest', RevenueRevenueGeneral = 'revenue::revenue-general', AssetAccumulatedDepletion = 'asset::accumulated-depletion', RevenueOtherCurrentOperatingIncome = 'revenue::other-current-operating-income', CostOfGoodsSoldCostOfSales = 'cost-of-goods-sold::cost-of-sales', LiabilityGroupAndAssociates = 'liability::group-and-associates', LiabilityProvisionForLiabilities = 'liability::provision-for-liabilities', LiabilityLongTermEmployeeBenefitObligations = 'liability::long-term-employee-benefit-obligations', AssetGlobalTaxRefund = 'asset::global-tax-refund', AssetMachineryAndEquipment = 'asset::machinery-and-equipment', OtherCurrentLiabilityPayrollTaxPayable = 'other-current-liability::payroll-tax-payable', OtherCurrentLiabilityShortTermBorrowings = 'other-current-liability::short-term-borrowings', ExpenseEntertainmentMeals = 'expense::entertainment-meals', OtherExpenseVehicleRepairs = 'other-expense::vehicle-repairs', LiabilityLiabilitiesRelatedToAssetsHeldForSale = 'liability::liabilities-related-to-assets-held-for-sale', EquityEquityInEarningsOfSubsidiuaries = 'equity::equity-in-earnings-of-subsidiuaries', OtherExpenseMortgageInterest = 'other-expense::mortgage-interest', ExpenseOtherMiscellaneousServiceCost = 'expense::other-miscellaneous-service-cost', ExpenseProjectStudiesSurveysAssessments = 'expense::project-studies-surveys-assessments', OtherExpenseOtherMiscellaneousExpense = 'other-expense::other-miscellaneous-expense', OtherCurrentLiabilityPayrollClearing = 'other-current-liability::payroll-clearing', AssetAssetsHeldForSale = 'asset::assets-held-for-sale', AssetInvestments = 'asset::investments', ExpenseOfficeExpenses = 'expense::office-expenses', CostOfGoodsSold = 'cost-of-goods-sold', RevenueSalesRetail = 'revenue::sales-retail', AssetLoansToOfficers = 'asset::loans-to-officers', AssetEmployeeCashAdvances = 'asset::employee-cash-advances', AssetUndepositedFunds = 'asset::undeposited-funds', EquityInvestmentGrants = 'equity::investment-grants', ExpenseAuto = 'expense::auto', AssetAccumulatedAmortizationOfOtherAssets = 'asset::accumulated-amortization-of-other-assets', ExpenseCharitableContributions = 'expense::charitable-contributions', Liability = 'liability', EquityCapitalReserves = 'equity::capital-reserves', AssetCashAndCashEquivalents = 'asset::cash-and-cash-equivalents', ExpenseDistributionCosts = 'expense::distribution-costs', LiabilityAccrualsAndDeferredIncome = 'liability::accruals-and-deferred-income', EquityDividendDisbursed = 'equity::dividend-disbursed', AssetIntangibleAssets = 'asset::intangible-assets', EquityOtherFreeReserves = 'equity::other-free-reserves', EquityPaidInCapitalOrSurplus = 'equity::paid-in-capital-or-surplus', ExpenseEntertainment = 'expense::entertainment', ExpenseInsurance = 'expense::insurance', CostOfGoodsSoldSuppliesMaterialsCogs = 'cost-of-goods-sold::supplies-materials-cogs', ExpenseOtherExternalServices = 'expense::other-external-services', OtherCurrentLiabilityCurrentTaxLiability = 'other-current-liability::current-tax-liability', OtherCurrentLiabilityPrepaidExpensesPayable = 'other-current-liability::prepaid-expenses-payable', OtherExpenseDepletion = 'other-expense::depletion', OtherExpenseGasAndFuel = 'other-expense::gas-and-fuel', AssetShortTermInvestmentsInRelatedParties = 'asset::short-term-investments-in-related-parties', OtherExpenseExchangeGainOrLoss = 'other-expense::exchange-gain-or-loss', AssetProvisionsCurrentAssets = 'asset::provisions-current-assets', Asset = 'asset', AssetFixedAssetSoftware = 'asset::fixed-asset-software', AssetChecking = 'asset::checking', ExpenseAppropriationsToDepreciation = 'expense::appropriations-to-depreciation', ExpenseOtherCurrentOperatingCharges = 'expense::other-current-operating-charges', LiabilityAccruedLongTermLiabilities = 'liability::accrued-long-term-liabilities', OtherCurrentLiabilityInsurancePayable = 'other-current-liability::insurance-payable', AssetOtherLongTermAssets = 'asset::other-long-term-assets', AssetAssetsInCourseOfConstruction = 'asset::assets-in-course-of-construction', RevenueSalesOfProductIncome = 'revenue::sales-of-product-income', EquityPreferredStock = 'equity::preferred-stock', AssetFixedAssetPhone = 'asset::fixed-asset-phone', LiabilityOutstandingDuesMicroSmallEnterprise = 'liability::outstanding-dues-micro-small-enterprise', AssetBank = 'asset::bank', EquityAccumulatedAdjustment = 'equity::accumulated-adjustment', OtherCurrentLiabilitySocialSecurityAgencies = 'other-current-liability::social-security-agencies', AssetInvestmentUsGovernmentObligations = 'asset::investment-us-government-obligations', LiabilityLongTermLiability = 'liability::long-term-liability', OtherCurrentLiabilityCurrentLiabilities = 'other-current-liability::current-liabilities', OtherExpenseOtherHomeOfficeExpenses = 'other-expense::other-home-office-expenses', OtherIncomeOtherOperatingIncome = 'other-income::other-operating-income', ExpensePromotionalMeals = 'expense::promotional-meals', RevenueUnappliedCashPaymentIncome = 'revenue::unapplied-cash-payment-income', EquityOwnersEquity = 'equity::owners-equity', OtherExpenseVehicle = 'other-expense::vehicle', OtherExpensePenaltiesSettlements = 'other-expense::penalties-settlements', OtherExpenseVehicleRegistration = 'other-expense::vehicle-registration', RevenueIncome = 'revenue::income', OtherIncomeOtherMiscellaneousIncome = 'other-income::other-miscellaneous-income', AccountsReceivable = 'accounts-receivable', Expense = 'expense', LiabilityAccountsPayable = 'liability::accounts-payable', AssetLand = 'asset::land', LiabilityLongTermBorrowings = 'liability::long-term-borrowings', EquityPersonalIncome = 'equity::personal-income', AssetOtherConsumables = 'asset::other-consumables', ExpenseTaxesPaid = 'expense::taxes-paid', OtherCurrentLiabilityCurrentPortionEmployeeBenefitsObligations = 'other-current-liability::current-portion-employee-benefits-obligations', OtherCurrentLiabilityInterestPayables = 'other-current-liability::interest-payables', OtherExpenseDepreciation = 'other-expense::depreciation', OtherExpenseMatCredit = 'other-expense::mat-credit', EquityHealthcare = 'equity::healthcare', ExpenseOfficeGeneralAdministrativeExpenses = 'expense::office-general-administrative-expenses' }
export const enum CustomerSelection { All = 'all', Prerequisite = 'prerequisite' }
export const enum ReceiverRoles { User = 'user', Admin = 'admin', Moderator = 'moderator' }
export const enum Country { Montenegro = 'montenegro', Nepal = 'nepal', Colombia = 'colombia', Vanuatu = 'vanuatu', Mauritius = 'mauritius', Tuvalu = 'tuvalu', Cuba = 'cuba', Israel = 'israel', Lebanon = 'lebanon', Myanmar = 'myanmar', Ukraine = 'ukraine', Iraq = 'iraq', Lesotho = 'lesotho', Seychelles = 'seychelles', Cyprus = 'cyprus', GuineaBissau = 'guinea-bissau', Kuwait = 'kuwait', Belgium = 'belgium', Djibouti = 'djibouti', NewZealand = 'new-zealand', Honduras = 'honduras', PapuaNewGuinea = 'papua-new-guinea', Peru = 'peru', Spain = 'spain', Tunisia = 'tunisia', Uruguay = 'uruguay', Palestine = 'palestine', SaintVincentAndTheGrenadines = 'saint-vincent-and-the-grenadines', Mozambique = 'mozambique', SouthSudan = 'south-sudan', Benin = 'benin', Uganda = 'uganda', Grenada = 'grenada', China = 'china', Jamaica = 'jamaica', CoteDIvoire = 'cote-d-ivoire', SaintKittsAndNevis = 'saint-kitts-and-nevis', Andorra = 'andorra', Fiji = 'fiji', France = 'france', Armenia = 'armenia', Bolivia = 'bolivia', Philippines = 'philippines', Romania = 'romania', Germany = 'germany', Moldova = 'moldova', India = 'india', Uzbekistan = 'uzbekistan', Hungary = 'hungary', Slovakia = 'slovakia', Angola = 'angola', Rwanda = 'rwanda', VaticanCity = 'vatican-city', Afghanistan = 'afghanistan', ElSalvador = 'el-salvador', Georgia = 'georgia', CentralAfricanRepublic = 'central-african-republic', Greece = 'greece', Egypt = 'egypt', Guyana = 'guyana', Mauritania = 'mauritania', Sweden = 'sweden', Bangladesh = 'bangladesh', Netherlands = 'netherlands', Morocco = 'morocco', Japan = 'japan', SriLanka = 'sri-lanka', Senegal = 'senegal', Togo = 'togo', Bahrain = 'bahrain', Gabon = 'gabon', Albania = 'albania', Italy = 'italy', Azerbaijan = 'azerbaijan', Portugal = 'portugal', UnitedArabEmirates = 'united-arab-emirates', SouthAfrica = 'south-africa', Madagascar = 'madagascar', Tajikistan = 'tajikistan', Tanzania = 'tanzania', Micronesia = 'micronesia', Nigeria = 'nigeria', Turkmenistan = 'turkmenistan', Belize = 'belize', EquatorialGuinea = 'equatorial-guinea', BosniaAndHerzegovina = 'bosnia-and-herzegovina', Singapore = 'singapore', Libya = 'libya', Ireland = 'ireland', MarshallIslands = 'marshall-islands', Panama = 'panama', Cambodia = 'cambodia', TimorLeste = 'timor-leste', SaoTomeAndPrincipe = 'sao-tome-and-principe', Estonia = 'estonia', SierraLeone = 'sierra-leone', Dominica = 'dominica', Palau = 'palau', Lithuania = 'lithuania', Mexico = 'mexico', Russia = 'russia', Zambia = 'zambia', SaintLucia = 'saint-lucia', Samoa = 'samoa', Turkey = 'turkey', Belarus = 'belarus', Barbados = 'barbados', Finland = 'finland', Suriname = 'suriname', Mali = 'mali', Croatia = 'croatia', Vietnam = 'vietnam', NorthKorea = 'north-korea', Poland = 'poland', Ethiopia = 'ethiopia', SolomonIslands = 'solomon-islands', Argentina = 'argentina', Canada = 'canada', Kiribati = 'kiribati', Niger = 'niger', Syria = 'syria', Sudan = 'sudan', CaboVerde = 'cabo-verde', Malaysia = 'malaysia', Botswana = 'botswana', Ghana = 'ghana', Kazakhstan = 'kazakhstan', CzechRepublic = 'czech-republic', Denmark = 'denmark', Comoros = 'comoros', Eritrea = 'eritrea', Kyrgyzstan = 'kyrgyzstan', Guinea = 'guinea', Haiti = 'haiti', Liberia = 'liberia', Liechtenstein = 'liechtenstein', Monaco = 'monaco', Mongolia = 'mongolia', DominicanRepublic = 'dominican-republic', BurkinaFaso = 'burkina-faso', Nauru = 'nauru', Latvia = 'latvia', Luxembourg = 'luxembourg', NorthMacedonia = 'north-macedonia', Norway = 'norway', Pakistan = 'pakistan', Chile = 'chile', Iran = 'iran', Namibia = 'namibia', Burundi = 'burundi', Paraguay = 'paraguay', Qatar = 'qatar', SaudiArabia = 'saudi-arabia', Switzerland = 'switzerland', Thailand = 'thailand', UnitedKingdom = 'united-kingdom', Taiwan = 'taiwan', Venezuela = 'venezuela', Gambia = 'gambia', Australia = 'australia', Chad = 'chad', Indonesia = 'indonesia', Kenya = 'kenya', Malawi = 'malawi', Oman = 'oman', SanMarino = 'san-marino', Iceland = 'iceland', Algeria = 'algeria', Maldives = 'maldives', CostaRica = 'costa-rica', Serbia = 'serbia', CongoDemocraticRepublic = 'congo-democratic-republic', Jordan = 'jordan', Slovenia = 'slovenia', Bulgaria = 'bulgaria', Yemen = 'yemen', Eswatini = 'eswatini', Tonga = 'tonga', Nicaragua = 'nicaragua', Brazil = 'brazil', Ecuador = 'ecuador', Malta = 'malta', Bahamas = 'bahamas', Laos = 'laos', Somalia = 'somalia', TrinidadAndTobago = 'trinidad-and-tobago', Austria = 'austria', AntiguaAndBarbuda = 'antigua-and-barbuda', Brunei = 'brunei', Cameroon = 'cameroon', CongoRepublic = 'congo-republic', Guatemala = 'guatemala', SouthKorea = 'south-korea', UnitedStates = 'united-states', Bhutan = 'bhutan', Zimbabwe = 'zimbabwe' }
export const enum GlobalTaxType { Gst = 'gst', Other = 'other', ExciseTax = 'excise-tax', Vat = 'vat', CustomsDuty = 'customs-duty', SalesTax = 'sales-tax', PropertyTax = 'property-tax' }
export const enum JournalEntryStatus { Draft = 'draft', Pending = 'pending', Posted = 'posted', Voided = 'voided', Error = 'error', Corrected = 'corrected' }
export const enum IdentityProvider { Apple = 'apple', Github = 'github', Other = 'other', Microsoft = 'microsoft', Behance = 'behance', Twitter = 'twitter', Whatsapp = 'whatsapp', Yahoo = 'yahoo', Foursquare = 'foursquare', Google = 'google', Facebook = 'facebook', Tiktok = 'tiktok', Pinterest = 'pinterest', Telegram = 'telegram', Snapchat = 'snapchat', Instagram = 'instagram', Reddit = 'reddit', Discord = 'discord', Signal = 'signal', Flickr = 'flickr', Line = 'line', Qq = 'qq', Amazon = 'amazon', Linkedin = 'linkedin', Slack = 'slack', Wechat = 'wechat', Vimeo = 'vimeo', Dribbble = 'dribbble', Paypal = 'paypal', Tumblr = 'tumblr' }
export const enum DayOfWeek { Friday = 'friday', Sunday = 'sunday', Wednesday = 'wednesday', Monday = 'monday', Tuesday = 'tuesday', Thursday = 'thursday', Saturday = 'saturday' }
export const enum AccountEngagementLevel { Unknown = 'unknown', Hot = 'hot', Warm = 'warm', Cold = 'cold' }
export const enum ReviewApprovalStatus { InReview = 'in-review', Rejected = 'rejected', Revised = 'revised', Pending = 'pending', Approved = 'approved' }
export const enum StakeholderType { Other = 'other', Investor = 'investor', Competitor = 'competitor', Vendor = 'vendor', Partner = 'partner', Customer = 'customer' }
export const enum AccountStatus { Pending = 'pending', Suspended = 'suspended', Active = 'active', Closed = 'closed', Inactive = 'inactive' }
export const enum CampaignStatus { Completed = 'completed', Archived = 'archived', Cancelled = 'cancelled', Scheduled = 'scheduled', Active = 'active', Planned = 'planned', Paused = 'paused', Draft = 'draft' }
export const enum CustomerType { B2c = 'b2c', Online = 'online', Wholesale = 'wholesale', B2b = 'b2b', Retail = 'retail', Corporate = 'corporate' }
export const enum AccountingAccountType { ExpenseManagementCompensation = 'expense::management-compensation', ExpenseRepairMaintenance = 'expense::repair-maintenance', OtherCurrentLiabilitySocialSecurityAgencies = 'other-current-liability::social-security-agencies', ExpensePayrollExpenses = 'expense::payroll-expenses', ExpenseLossOnDiscontinuedOperationsNetOfTax = 'expense::loss-on-discontinued-operations-net-of-tax', OtherExpensePenaltiesSettlements = 'other-expense::penalties-settlements', ExpenseLegalProfessionalFees = 'expense::legal-professional-fees', LiabilityProvisionsNonCurrentLiabilities = 'liability::provisions-non-current-liabilities', OtherCurrentLiabilitySundryDebtorsAndCreditors = 'other-current-liability::sundry-debtors-and-creditors', OtherExpenseRentAndLease = 'other-expense::rent-and-lease', RevenueRevenueGeneral = 'revenue::revenue-general', AssetFixedAssetCopiers = 'asset::fixed-asset-copiers', ExpenseShippingFreightDelivery = 'expense::shipping-freight-delivery', AssetOtherEarMarkedBankAccounts = 'asset::other-ear-marked-bank-accounts', OtherIncomeOtherInvestmentIncome = 'other-income::other-investment-income', OtherExpenseOtherHomeOfficeExpenses = 'other-expense::other-home-office-expenses', AssetProvisionsFixedAssets = 'asset::provisions-fixed-assets', OtherCurrentLiabilityStaffAndRelatedLiabilityAccounts = 'other-current-liability::staff-and-related-liability-accounts', AssetRetainage = 'asset::retainage', ExpenseTravelMeals = 'expense::travel-meals', AssetBuildings = 'asset::buildings', LiabilityOutstandingDuesMicroSmallEnterprise = 'liability::outstanding-dues-micro-small-enterprise', EquityEquityInEarningsOfSubsidiuaries = 'equity::equity-in-earnings-of-subsidiuaries', LiabilityDeferredTaxLiabilities = 'liability::deferred-tax-liabilities', AssetParticipatingInterests = 'asset::participating-interests', RevenueOperatingGrants = 'revenue::operating-grants', ExpenseTravel = 'expense::travel', EquityRetainedEarnings = 'equity::retained-earnings', ExpenseEntertainmentMeals = 'expense::entertainment-meals', AssetProvisionsNonCurrentAssets = 'asset::provisions-non-current-assets', ExpenseTaxesPaid = 'expense::taxes-paid', ExpenseUnappliedCashBillPaymentExpense = 'expense::unapplied-cash-bill-payment-expense', AssetAccumulatedAmortizationOfOtherAssets = 'asset::accumulated-amortization-of-other-assets', AssetPrepaymentsAndAccruedIncome = 'asset::prepayments-and-accrued-income', ExpenseCharitableContributions = 'expense::charitable-contributions', RevenueOtherCurrentOperatingIncome = 'revenue::other-current-operating-income', OtherCurrentLiabilityAccruedLiabilities = 'other-current-liability::accrued-liabilities', OtherCurrentLiability = 'other-current-liability', OtherExpenseOtherVehicleExpenses = 'other-expense::other-vehicle-expenses', OtherCurrentLiabilityTrustAccountsLiabilities = 'other-current-liability::trust-accounts-liabilities', AssetLand = 'asset::land', ExpenseOtherMiscellaneousServiceCost = 'expense::other-miscellaneous-service-cost', AssetFixedAssetSoftware = 'asset::fixed-asset-software', EquityPreferredStock = 'equity::preferred-stock', ExpenseAuto = 'expense::auto', LiabilityCreditCard = 'liability::credit-card', OtherIncomeTaxExemptInterest = 'other-income::tax-exempt-interest', AssetAvailableForSaleFinancialAssets = 'asset::available-for-sale-financial-assets', RevenueIncome = 'revenue::income', AssetMachineryAndEquipment = 'asset::machinery-and-equipment', EquityDividendDisbursed = 'equity::dividend-disbursed', AssetOtherLongTermLoansAndAdvances = 'asset::other-long-term-loans-and-advances', AssetOrganizationalCosts = 'asset::organizational-costs', OtherExpenseHomeOwnerRentalInsurance = 'other-expense::home-owner-rental-insurance', AssetLoansToOfficers = 'asset::loans-to-officers', OtherCurrentLiabilityShortTermBorrowings = 'other-current-liability::short-term-borrowings', OtherExpenseOtherMiscellaneousExpense = 'other-expense::other-miscellaneous-expense', RevenueSalesWholesale = 'revenue::sales-wholesale', EquityCalledUpShareCapital = 'equity::called-up-share-capital', AssetUndepositedFunds = 'asset::undeposited-funds', ExpenseOtherExternalServices = 'expense::other-external-services', LiabilityNotesPayable = 'liability::notes-payable', OtherCurrentLiabilityCurrentLiabilities = 'other-current-liability::current-liabilities', AssetNonCurrentAssets = 'asset::non-current-assets', ExpenseAmortizationExpense = 'expense::amortization-expense', ExpenseGlobalTaxExpense = 'expense::global-tax-expense', AssetIntangibleAssets = 'asset::intangible-assets', ExpenseDistributionCosts = 'expense::distribution-costs', AssetCashOnHand = 'asset::cash-on-hand', AssetBank = 'asset::bank', AssetOtherLongTermAssets = 'asset::other-long-term-assets', CostOfGoodsSoldEquipmentRentalCos = 'cost-of-goods-sold::equipment-rental-cos', OtherCurrentLiabilityLoanPayable = 'other-current-liability::loan-payable', OtherExpenseDepreciation = 'other-expense::depreciation', ExpenseEquipmentRental = 'expense::equipment-rental', AssetInternalTransfers = 'asset::internal-transfers', EquityInvestmentGrants = 'equity::investment-grants', ExpensePurchasesRebates = 'expense::purchases-rebates', OtherExpenseIncomeTaxOtherExpense = 'other-expense::income-tax-other-expense', EquityCapitalReserves = 'equity::capital-reserves', CostOfGoodsSoldOtherCostsOfServiceCos = 'cost-of-goods-sold::other-costs-of-service-cos', LiabilityProvisionForLiabilities = 'liability::provision-for-liabilities', LiabilityOtherLongTermProvisions = 'liability::other-long-term-provisions', AssetAssetsHeldForSale = 'asset::assets-held-for-sale', LiabilityDebtsRelatedToParticipatingInterests = 'liability::debts-related-to-participating-interests', OtherExpenseMortgageInterest = 'other-expense::mortgage-interest', EquityEstimatedTaxes = 'equity::estimated-taxes', AssetGlobalTaxRefund = 'asset::global-tax-refund', AssetInvestmentUsGovernmentObligations = 'asset::investment-us-government-obligations', AssetAccumulatedDepreciation = 'asset::accumulated-depreciation', EquityOtherFreeReserves = 'equity::other-free-reserves', LiabilityStaffAndRelatedLongTermLiabilityAccounts = 'liability::staff-and-related-long-term-liability-accounts', OtherCurrentLiabilityCurrentTaxLiability = 'other-current-liability::current-tax-liability', OtherIncomeInterestEarned = 'other-income::interest-earned', OtherExpenseMatCredit = 'other-expense::mat-credit', ExpenseCostOfLabor = 'expense::cost-of-labor', EquityAccumulatedAdjustment = 'equity::accumulated-adjustment', LiabilityAccrualsAndDeferredIncome = 'liability::accruals-and-deferred-income', EquityCommonStock = 'equity::common-stock', OtherIncomeOtherMiscellaneousIncome = 'other-income::other-miscellaneous-income', EquityPartnerDistributions = 'equity::partner-distributions', AssetAssetsAvailableForSale = 'asset::assets-available-for-sale', CostOfGoodsSoldShippingFreightDeliveryCos = 'cost-of-goods-sold::shipping-freight-delivery-cos', OtherCurrentLiabilityInsurancePayable = 'other-current-liability::insurance-payable', CostOfGoodsSoldFreightAndDeliveryCost = 'cost-of-goods-sold::freight-and-delivery-cost', ExpenseOtherCurrentOperatingCharges = 'expense::other-current-operating-charges', OtherCurrentLiabilityDividendsPayable = 'other-current-liability::dividends-payable', ExpenseSuppliesMaterials = 'expense::supplies-materials', AssetCapitalWip = 'asset::capital-wip', OtherCurrentLiabilityPrepaidExpensesPayable = 'other-current-liability::prepaid-expenses-payable', OtherExpenseRepairsAndMaintenance = 'other-expense::repairs-and-maintenance', AssetLicenses = 'asset::licenses', ExpenseInsurance = 'expense::insurance', OtherCurrentLiabilityGlobalTaxPayable = 'other-current-liability::global-tax-payable', AssetFixedAssetOtherToolsEquipment = 'asset::fixed-asset-other-tools-equipment', EquityPersonalIncome = 'equity::personal-income', AssetAssetsInCourseOfConstruction = 'asset::assets-in-course-of-construction', ExpenseOtherSellingExpenses = 'expense::other-selling-expenses', AssetLandAsset = 'asset::land-asset', AssetSecurityDeposits = 'asset::security-deposits', OtherExpenseUtilities = 'other-expense::utilities', ExpenseAdvertisingPromotional = 'expense::advertising-promotional', ExpenseInterestPaid = 'expense::interest-paid', CostOfGoodsSoldCostOfSales = 'cost-of-goods-sold::cost-of-sales', AssetOtherIntangibleAssets = 'asset::other-intangible-assets', AccountsReceivable = 'accounts-receivable', OtherExpenseVehicleLoanInterest = 'other-expense::vehicle-loan-interest', ExpenseBadDebts = 'expense::bad-debts', OtherExpensePriorPeriodItems = 'other-expense::prior-period-items', OtherIncomeLossOnDisposalOfAssets = 'other-income::loss-on-disposal-of-assets', AssetGoodwill = 'asset::goodwill', AssetFixedAssetPhone = 'asset::fixed-asset-phone', ExpenseSundry = 'expense::sundry', LiabilityLongTermLiability = 'liability::long-term-liability', OtherCurrentLiabilityGlobalTaxSuspense = 'other-current-liability::global-tax-suspense', Asset = 'asset', OtherExpenseTaxRoundoffGainOrLoss = 'other-expense::tax-roundoff-gain-or-loss', AssetFixedAsset = 'asset::fixed-asset', AssetOtherConsumables = 'asset::other-consumables', OtherExpenseExchangeGainOrLoss = 'other-expense::exchange-gain-or-loss', AssetGlobalTaxDeferred = 'asset::global-tax-deferred', OtherExpenseVehicleRepairs = 'other-expense::vehicle-repairs', AssetExpenditureAuthorisationsAndLettersOfCredit = 'asset::expenditure-authorisations-and-letters-of-credit', AssetPrepaidExpenses = 'asset::prepaid-expenses', AssetCalledUpShareCapitalNotPaid = 'asset::called-up-share-capital-not-paid', AssetRentsHeldInTrust = 'asset::rents-held-in-trust', OtherCurrentLiabilityDirectDepositPayable = 'other-current-liability::direct-deposit-payable', RevenueCashReceiptIncome = 'revenue::cash-receipt-income', OtherCurrentLiabilityOtherCurrentLiabilities = 'other-current-liability::other-current-liabilities', ExpensePromotionalMeals = 'expense::promotional-meals', Expense = 'expense', AssetInventory = 'asset::inventory', OtherExpenseVehicleLease = 'other-expense::vehicle-lease', AssetOtherCurrentAsset = 'asset::other-current-asset', EquityOwnersEquity = 'equity::owners-equity', EquityTreasuryStock = 'equity::treasury-stock', ExpenseFinanceCosts = 'expense::finance-costs', OtherExpenseVehicleRegistration = 'other-expense::vehicle-registration', EquityShareCapital = 'equity::share-capital', ExpenseOtherBusinessExpenses = 'expense::other-business-expenses', LiabilityAccruedLongTermLiabilities = 'liability::accrued-long-term-liabilities', OtherCurrentLiabilityInterestPayables = 'other-current-liability::interest-payables', AssetTradeAndOtherReceivables = 'asset::trade-and-other-receivables', OtherCurrentLiabilityDutiesAndTaxes = 'other-current-liability::duties-and-taxes', ExpenseIncomeTaxExpense = 'expense::income-tax-expense', EquityPaidInCapitalOrSurplus = 'equity::paid-in-capital-or-surplus', OtherIncomeGainLossOnSaleOfFixedAssets = 'other-income::gain-loss-on-sale-of-fixed-assets', AssetDevelopmentCosts = 'asset::development-costs', ExpenseOfficeGeneralAdministrativeExpenses = 'expense::office-general-administrative-expenses', CostOfGoodsSoldCostOfLaborCos = 'cost-of-goods-sold::cost-of-labor-cos', AssetCashAndCashEquivalents = 'asset::cash-and-cash-equivalents', AssetFixedAssetComputers = 'asset::fixed-asset-computers', AssetMoneyMarket = 'asset::money-market', ExpenseBorrowingCost = 'expense::borrowing-cost', ExpenseOtherRentalCosts = 'expense::other-rental-costs', AssetShortTermInvestmentsInRelatedParties = 'asset::short-term-investments-in-related-parties', LiabilityGovernmentAndOtherPublicAuthorities = 'liability::government-and-other-public-authorities', RevenueOwnWorkCapitalized = 'revenue::own-work-capitalized', AssetIntangibleAssetsUnderDevelopment = 'asset::intangible-assets-under-development', OtherExpenseExceptionalItems = 'other-expense::exceptional-items', OtherIncome = 'other-income', OtherExpenseParkingAndTolls = 'other-expense::parking-and-tolls', AssetInvestmentOther = 'asset::investment-other', RevenueSalesOfProductIncome = 'revenue::sales-of-product-income', LiabilityOtherLongTermLiabilities = 'liability::other-long-term-liabilities', RevenueSalesRetail = 'revenue::sales-retail', AssetAccumulatedAmortization = 'asset::accumulated-amortization', ExpenseRentOrLeaseOfBuildings = 'expense::rent-or-lease-of-buildings', OtherExpenseWashAndRoadServices = 'other-expense::wash-and-road-services', AssetInvestmentMortgageRealEstateLoans = 'asset::investment-mortgage-real-estate-loans', ExpenseShippingAndDeliveryExpense = 'expense::shipping-and-delivery-expense', ExpenseTravelExpensesGeneralAndAdminExpenses = 'expense::travel-expenses-general-and-admin-expenses', OtherCurrentLiabilityPayrollTaxPayable = 'other-current-liability::payroll-tax-payable', AssetFixedAssetFurniture = 'asset::fixed-asset-furniture', EquityHealthcare = 'equity::healthcare', LiabilityGroupAndAssociates = 'liability::group-and-associates', EquityPartnersEquity = 'equity::partners-equity', RevenueDiscountsRefundsGiven = 'revenue::discounts-refunds-given', AssetLongTermLoansAndAdvancesToRelatedParties = 'asset::long-term-loans-and-advances-to-related-parties', AssetSavings = 'asset::savings', AssetShortTermLoansAndAdvancesToRelatedParties = 'asset::short-term-loans-and-advances-to-related-parties', LiabilityAccruedVacationPayable = 'liability::accrued-vacation-payable', AssetAllowanceForBadDebts = 'asset::allowance-for-bad-debts', AssetLoansToOthers = 'asset::loans-to-others', AssetLeaseBuyout = 'asset::lease-buyout', OtherCurrentLiabilityFederalIncomeTaxPayable = 'other-current-liability::federal-income-tax-payable', OtherCurrentLiabilityProvisionsCurrentLiabilities = 'other-current-liability::provisions-current-liabilities', LiabilityShareholderNotesPayable = 'liability::shareholder-notes-payable', RevenueUnappliedCashPaymentIncome = 'revenue::unapplied-cash-payment-income', AssetDepletableAssets = 'asset::depletable-assets', ExpenseEntertainment = 'expense::entertainment', ExpenseAppropriationsToDepreciation = 'expense::appropriations-to-depreciation', ExpenseStaffCosts = 'expense::staff-costs', EquityFunds = 'equity::funds', ExpenseTravelExpensesSellingExpense = 'expense::travel-expenses-selling-expense', EquityOpeningBalanceEquity = 'equity::opening-balance-equity', ExpenseCommissionsAndFees = 'expense::commissions-and-fees', EquityAccumulatedOtherComprehensiveIncome = 'equity::accumulated-other-comprehensive-income', ExpenseExternalServices = 'expense::external-services', RevenueOtherPrimaryIncome = 'revenue::other-primary-income', AssetFurnitureAndFixtures = 'asset::furniture-and-fixtures', EquityShareApplicationMoneyPendingAllotment = 'equity::share-application-money-pending-allotment', OtherExpenseAmortization = 'other-expense::amortization', LiabilityLiabilitiesRelatedToAssetsHeldForSale = 'liability::liabilities-related-to-assets-held-for-sale', LiabilityLongTermEmployeeBenefitObligations = 'liability::long-term-employee-benefit-obligations', AssetEmployeeCashAdvances = 'asset::employee-cash-advances', AssetFixedAssetPhotoVideo = 'asset::fixed-asset-photo-video', AssetOtherLongTermInvestments = 'asset::other-long-term-investments', LiabilityAccountsPayable = 'liability::accounts-payable', OtherCurrentLiabilityTradeAndOtherPayables = 'other-current-liability::trade-and-other-payables', AssetOtherAsset = 'asset::other-asset', EquityPartnerContributions = 'equity::partner-contributions', OtherExpenseVehicleInsurance = 'other-expense::vehicle-insurance', RevenueSavingsByTaxScheme = 'revenue::savings-by-tax-scheme', AssetLoansToStockholders = 'asset::loans-to-stockholders', OtherCurrentLiabilityCurrentPortionOfObligationsUnderFinanceLeases = 'other-current-liability::current-portion-of-obligations-under-finance-leases', EquityMoneyReceivedAgainstShareWarrants = 'equity::money-received-against-share-warrants', OtherIncomeUnrealisedLossOnSecuritiesNetOfTax = 'other-income::unrealised-loss-on-securities-net-of-tax', AssetChecking = 'asset::checking', OtherIncomeGainLossOnSaleOfInvestments = 'other-income::gain-loss-on-sale-of-investments', ExpenseExtraordinaryCharges = 'expense::extraordinary-charges', LiabilityBankLoans = 'liability::bank-loans', OtherCurrentLiabilityPayrollClearing = 'other-current-liability::payroll-clearing', OtherExpenseExtraordinaryItems = 'other-expense::extraordinary-items', OtherExpenseHomeOffice = 'other-expense::home-office', OtherIncomeDividendIncome = 'other-income::dividend-income', OtherIncomeOtherOperatingIncome = 'other-income::other-operating-income', EquityPersonalExpense = 'equity::personal-expense', ExpenseUtilities = 'expense::utilities', AssetBalWithGovtAuthorities = 'asset::bal-with-govt-authorities', AssetLongTermInvestments = 'asset::long-term-investments', ExpenseOfficeExpenses = 'expense::office-expenses', ExpenseProjectStudiesSurveysAssessments = 'expense::project-studies-surveys-assessments', LiabilityLongTermBorrowings = 'liability::long-term-borrowings', AssetOtherFixedAssets = 'asset::other-fixed-assets', OtherCurrentLiabilityCurrentPortionEmployeeBenefitsObligations = 'other-current-liability::current-portion-employee-benefits-obligations', Equity = 'equity', AssetProvisionsCurrentAssets = 'asset::provisions-current-assets', AssetDeferredTax = 'asset::deferred-tax', CostOfGoodsSoldSuppliesMaterialsCogs = 'cost-of-goods-sold::supplies-materials-cogs', AssetTrustAccounts = 'asset::trust-accounts', ExpenseBankCharges = 'expense::bank-charges', AssetInvestments = 'asset::investments', OtherCurrentLiabilityLineOfCredit = 'other-current-liability::line-of-credit', RevenueServiceFeeIncome = 'revenue::service-fee-income', CostOfGoodsSold = 'cost-of-goods-sold', LiabilityLongTermDebit = 'liability::long-term-debit', AssetInvestmentTaxExemptSecurities = 'asset::investment-tax-exempt-securities', AssetLeaseholdImprovements = 'asset::leasehold-improvements', AssetVehicles = 'asset::vehicles', OtherCurrentLiabilityProvisionForWarrantyObligations = 'other-current-liability::provision-for-warranty-obligations', OtherCurrentLiabilitySalesTaxPayable = 'other-current-liability::sales-tax-payable', RevenueNonProfitIncome = 'revenue::non-profit-income', AssetAccumulatedDepletion = 'asset::accumulated-depletion', AssetCumulativeDepreciationOnIntangibleAssets = 'asset::cumulative-depreciation-on-intangible-assets', OtherExpenseGasAndFuel = 'other-expense::gas-and-fuel', LiabilityOutstandingDuesOtherThanMicroSmallEnterprise = 'liability::outstanding-dues-other-than-micro-small-enterprise', OtherCurrentLiabilityRentsInTrustLiability = 'other-current-liability::rents-in-trust-liability', OtherExpenseDepletion = 'other-expense::depletion', OtherExpenseVehicle = 'other-expense::vehicle', AssetOtherCurrentAssets = 'asset::other-current-assets', LiabilityObligationsUnderFinanceLeases = 'liability::obligations-under-finance-leases', OtherCurrentLiabilityStateLocalIncomeTaxPayable = 'other-current-liability::state-local-income-tax-payable', OtherExpense = 'other-expense', ExpenseDuesSubscriptions = 'expense::dues-subscriptions', OtherExpenseVehicleLoan = 'other-expense::vehicle-loan', OtherExpenseDeferredTaxExpense = 'other-expense::deferred-tax-expense' }
export const enum MessageReadStatus { Sent = 'sent', Read = 'read', Delivered = 'delivered', Failed = 'failed', Unsent = 'unsent' }
export const enum MessageContentType { Html = 'html', Image = 'image', Document = 'document', Gif = 'gif', Link = 'link', Voice = 'voice', Text = 'text', File = 'file', Sticker = 'sticker', Video = 'video', Location = 'location', Audio = 'audio', Contact = 'contact' }
export const enum MessageDeliveryStatus { Pending = 'pending', Error = 'error', Delivered = 'delivered', Undeliverable = 'undeliverable', Sent = 'sent', Failed = 'failed', Read = 'read' }
export const enum ReactionType { Sad = 'sad', Bookmark = 'bookmark', Dislike = 'dislike', Wow = 'wow', Interested = 'interested', Laugh = 'laugh', Like = 'like', Love = 'love', Angry = 'angry' }
export const enum SupportTicketPriority { Medium = 'medium', High = 'high', Immediate = 'immediate', Urgent = 'urgent', Low = 'low' }
export const enum IssueLifecycleStatus { Cancelled = 'cancelled', Closed = 'closed', Pending = 'pending', InProgress = 'in-progress', Open = 'open', OnHold = 'on-hold', Waiting = 'waiting', Resolved = 'resolved' }
export const enum SupportQueryType { Task = 'task', Bug = 'bug', Question = 'question', Feedback = 'feedback', Problem = 'problem', FeatureRequest = 'feature-request', Incident = 'incident' }
export const enum OrderStatus { Pending = 'pending', AwaitingPickup = 'awaiting-pickup', Returned = 'returned', Shipped = 'shipped', Cancelled = 'cancelled', Refunded = 'refunded', Abandoned = 'abandoned', OnHold = 'on-hold', Processing = 'processing', AwaitingShipment = 'awaiting-shipment', PartiallyFulfilled = 'partially-fulfilled', Failed = 'failed', Disputed = 'disputed', AwaitingPayment = 'awaiting-payment', Completed = 'completed', Confirmed = 'confirmed', Draft = 'draft', Delivered = 'delivered' }
export const enum DiscountType { VariableAmount = 'variable-amount', BuyOneGetOne = 'buy-one-get-one', FixedAmount = 'fixed-amount', TieredDiscount = 'tiered-discount', UnknownDiscount = 'unknown-discount', ConditionalDiscount = 'conditional-discount', VariablePercentage = 'variable-percentage', Percentage = 'percentage' }
export const enum ImageMimeType { ImageHeic = 'image/heic', ImageWebp = 'image/webp', ImageJpeg = 'image/jpeg', ImageGif = 'image/gif', ImageTiff = 'image/tiff', ImageBmp = 'image/bmp', ImagePng = 'image/png', ImageSvgXml = 'image/svg+xml' }
export const enum FulfillmentStatus { Pending = 'pending', Delivered = 'delivered', Failure = 'failure', Cancelled = 'cancelled', Returned = 'returned', InTransit = 'in-transit' }
export const enum OrderingCriteria { Popularity = 'popularity', PriceDescending = 'price-descending', Rating = 'rating', CreationDate = 'creation-date', Alphabetical = 'alphabetical', Manual = 'manual', PriceAscending = 'price-ascending', Relevance = 'relevance' }
export const enum ChatType { Private = 'private', Public = 'public', Group = 'group' }
export const enum ProductAvailabilityStatus { Discontinued = 'discontinued', InStock = 'in-stock', OutOfStock = 'out-of-stock', BackOrder = 'back-order', PreOrder = 'pre-order' }
export const enum ExpenseApprovalStatus { Approved = 'approved', Denied = 'denied', Cancelled = 'cancelled', Processed = 'processed', New = 'new', Reimbursed = 'reimbursed', Reviewing = 'reviewing', Pending = 'pending' }
export const enum FinancialChargeType { LateFee = 'late-fee', InterestCharge = 'interest-charge', ProcessingFee = 'processing-fee', Commission = 'commission', TransactionFee = 'transaction-fee', Other = 'other', ServiceCharge = 'service-charge' }
export const enum ItemAvailabilityStatus { OutOfStock = 'out-of-stock', Inactive = 'inactive', Discontinued = 'discontinued', Active = 'active' }
export const enum BillingStatus { Pending = 'pending', Authorised = 'authorised', Paid = 'paid', Draft = 'draft', Unpaid = 'unpaid', Overdue = 'overdue', Voided = 'voided', PartiallyPaid = 'partially-paid', Submitted = 'submitted', Deleted = 'deleted' }
export const enum FinancialAccountStatus { Delinquent = 'delinquent', Inactive = 'inactive', Active = 'active', Frozen = 'frozen', Suspended = 'suspended', Closed = 'closed', UnderReview = 'under-review' }
export const enum TransactionStatus { Initiated = 'initiated', Succeeded = 'succeeded', Pending = 'pending', Cancelled = 'cancelled', Error = 'error', Failed = 'failed', InProgress = 'in-progress' }
export const enum InvoiceAdjustmentType { Tax = 'tax', Discount = 'discount', Tip = 'tip', Other = 'other', Shipping = 'shipping' }
export const enum DataType { Binary = 'binary', Number = 'number', Boolean = 'boolean', Date = 'date', Object = 'object', String = 'string', Null = 'null', Undefined = 'undefined', Timestamp = 'timestamp', Json = 'json', Array = 'array', Custom = 'custom' }
export const enum EmploymentType { Internship = 'internship', PartTime = 'part-time', Contract = 'contract', Volunteer = 'volunteer', Freelance = 'freelance', Permanent = 'permanent', Temporary = 'temporary', Seasonal = 'seasonal', FullTime = 'full-time' }
export const enum TimeCycle { SemiAnnually = 'semi-annually', Triennially = 'triennially', Weekly = 'weekly', Minutely = 'minutely', Custom = 'custom', Annually = 'annually', Hourly = 'hourly', SemiMonthly = 'semi-monthly', Biweekly = 'biweekly', Monthly = 'monthly', Daily = 'daily', Quarterly = 'quarterly', Biennially = 'biennially', Secondly = 'secondly', AdHoc = 'ad-hoc' }
export const enum FinancialTrackingCategories { Customer = 'customer', Employee = 'employee', None = 'none', Vendor = 'vendor', Department = 'department', Class = 'class', Division = 'division', Project = 'project', Product = 'product', Location = 'location', Service = 'service', Other = 'other', CostCenter = 'cost-center' }
export const enum CreditNoteStatus { Revised = 'revised', Cancelled = 'cancelled', Draft = 'draft', Issued = 'issued', Applied = 'applied', Void = 'void', Pending = 'pending', Completed = 'completed', Disputed = 'disputed' }
export const enum PaymentTerm { CashInAdvance = 'cash-in-advance', UponCompletion = 'upon-completion', Net60 = 'net-60', Net90 = 'net-90', Prepaid = 'prepaid', Installment = 'installment', Net = 'net', DeferredPayment = 'deferred-payment', CashWithOrder = 'cash-with-order', Net30 = 'net-30', Prepayment = 'prepayment', DueOnReceipt = 'due-on-receipt', CashBeforeShipment = 'cash-before-shipment', DueEndOfMonth = 'due-end-of-month', Custom = 'custom', CashOnDelivery = 'cash-on-delivery' }
export const enum EmploymentAndCandidateStatus { New = 'new', Interviewing = 'interviewing', Active = 'active', Hired = 'hired', Other = 'other', Terminated = 'terminated', Inactive = 'inactive', OfferExtended = 'offer-extended', OnLeave = 'on-leave', NotSelected = 'not-selected', InReview = 'in-review' }
export const enum OrganizationalRole { Manager = 'manager', Supervisor = 'supervisor', Contractor = 'contractor', Other = 'other', Director = 'director', Admin = 'admin', Employee = 'employee' }
export const enum CampaignType { Email = 'email', SearchEngine = 'search-engine', Other = 'other', SocialMedia = 'social-media', Display = 'display' }
export const enum ContactAddressType { Billing = 'billing', Home = 'home', Personal = 'personal', Work = 'work', Business = 'business', Temporary = 'temporary', Other = 'other', Shipping = 'shipping' }
export const enum CustomerStatus { Archived = 'archived', Suspended = 'suspended', Inactive = 'inactive', Pending = 'pending', Active = 'active' }
export const enum SocialPlatform { Youtube = 'youtube', Tiktok = 'tiktok', Snapchat = 'snapchat', Facebook = 'facebook', Reddit = 'reddit', Twitter = 'twitter', Skype = 'skype', X = 'x', Linkedin = 'linkedin', Tumblr = 'tumblr', OtherSocialPlatform = 'other-social-platform', Pinterest = 'pinterest', Instagram = 'instagram' }
export const enum LeadLifecycleStatus { InProcess = 'in-process', BadTiming = 'bad-timing', Unqualified = 'unqualified', AttemptedToContact = 'attempted-to-contact', Converted = 'converted', Connected = 'connected', Open = 'open', Revisited = 'revisited', New = 'new', Lost = 'lost' }
export const enum ConversationStatus { Closed = 'closed', Active = 'active', Deleted = 'deleted', Archived = 'archived', Snoozed = 'snoozed' }
export const enum CommunicationRole { Bot = 'bot', Moderator = 'moderator', Member = 'member', Guest = 'guest', Group = 'group', Admin = 'admin', Service = 'service', Owner = 'owner', Channel = 'channel', User = 'user', System = 'system', Assistant = 'assistant' }
export const enum ParticipantEngagementStatus { Banned = 'banned', Admin = 'admin', Left = 'left', Inactive = 'inactive', Active = 'active', Guest = 'guest', Moderator = 'moderator' }
export const enum ItemEntityStatus { Completed = 'completed', Active = 'active', Suspended = 'suspended', Inactive = 'inactive', Deleted = 'deleted', Pending = 'pending', Archived = 'archived' }
export const enum Currency { SZL = 'szl', MOP = 'mop', UZS = 'uzs', CVE = 'cve', INR = 'inr', UYU = 'uyu', GBP = 'gbp', BSD = 'bsd', CUP = 'cup', CRC = 'crc', XCD = 'xcd', GHS = 'ghs', AFN = 'afn', KRW = 'krw', GIP = 'gip', LBP = 'lbp', YER = 'yer', LRD = 'lrd', BDT = 'bdt', RWF = 'rwf', BTN = 'btn', GTQ = 'gtq', PKR = 'pkr', VES = 'ves', HRK = 'hrk', HNL = 'hnl', MAD = 'mad', BZD = 'bzd', EUR = 'eur', FOK = 'fok', TOP = 'top', AZN = 'azn', BAM = 'bam', BOB = 'bob', NPR = 'npr', GMD = 'gmd', BIF = 'bif', BMD = 'bmd', LYD = 'lyd', CUC = 'cuc', VUV = 'vuv', LKR = 'lkr', MVR = 'mvr', SOS = 'sos', EGP = 'egp', DKK = 'dkk', ERN = 'ern', TZS = 'tzs', JEP = 'jep', CHF = 'chf', DJF = 'djf', IRR = 'irr', MRU = 'mru', MWK = 'mwk', MYR = 'myr', BND = 'bnd', VND = 'vnd', COP = 'cop', FJD = 'fjd', SBD = 'sbd', MXN = 'mxn', CAD = 'cad', KZT = 'kzt', AMD = 'amd', QAR = 'qar', RON = 'ron', GGP = 'ggp', KID = 'kid', CNY = 'cny', JPY = 'jpy', CDF = 'cdf', IQD = 'iqd', RSD = 'rsd', IDR = 'idr', PGK = 'pgk', UGX = 'ugx', MUR = 'mur', BHD = 'bhd', MZN = 'mzn', SYP = 'syp', TWD = 'twd', XDR = 'xdr', CLP = 'clp', JMD = 'jmd', AUD = 'aud', BGN = 'bgn', USD = 'usd', OMR = 'omr', CZK = 'czk', NGN = 'ngn', KES = 'kes', TRY = 'try', ARS = 'ars', GEL = 'gel', TJS = 'tjs', ZMW = 'zmw', BRL = 'brl', WST = 'wst', ZAR = 'zar', SGD = 'sgd', PHP = 'php', MMK = 'mmk', NAD = 'nad', MDL = 'mdl', SCR = 'scr', TND = 'tnd', ILS = 'ils', TVD = 'tvd', BWP = 'bwp', MNT = 'mnt', FKP = 'fkp', MKD = 'mkd', DZD = 'dzd', THB = 'thb', DOP = 'dop', HKD = 'hkd', KMF = 'kmf', NZD = 'nzd', SSP = 'ssp', HTG = 'htg', MGA = 'mga', UAH = 'uah', XOF = 'xof', PEN = 'pen', KYD = 'kyd', TMT = 'tmt', SLL = 'sll', RUB = 'rub', KGS = 'kgs', ISK = 'isk', KWD = 'kwd', SEK = 'sek', AWG = 'awg', NIO = 'nio', GYD = 'gyd', AED = 'aed', ANG = 'ang', NOK = 'nok', LSL = 'lsl', SRD = 'srd', SAR = 'sar', BYN = 'byn', ETB = 'etb', AOA = 'aoa', IMP = 'imp', GNF = 'gnf', PLN = 'pln', SDG = 'sdg', ALL = 'all', TTD = 'ttd', ZWL = 'zwl', PYG = 'pyg', LAK = 'lak', HUF = 'huf', JOD = 'jod', STN = 'stn', BBD = 'bbd', KHR = 'khr', XAF = 'xaf', XPF = 'xpf', KPW = 'kpw', PAB = 'pab', SHP = 'shp' }
export const enum CustomerEligibilityStatus { VipCustomers = 'vip-customers', NewCustomers = 'new-customers', AllCustomers = 'all-customers', ReturningCustomers = 'returning-customers', SpecificConditions = 'specific-conditions', Other = 'other' }
export const enum LifecycleStatus { Suspended = 'suspended', Redeemed = 'redeemed', Expired = 'expired', Active = 'active', Cancelled = 'cancelled', Issued = 'issued' }
export const enum PaymentMethod { Other = 'other', CreditCard = 'credit-card', MobilePayment = 'mobile-payment', MobileWallet = 'mobile-wallet', CashOnDelivery = 'cash-on-delivery', BankTransfer = 'bank-transfer', Check = 'check', Cryptocurrency = 'cryptocurrency', Cash = 'cash', Paypal = 'paypal', DebitCard = 'debit-card' }
export const enum FinancialTransactionStatus { Disputed = 'disputed', Cleared = 'cleared', Cancelled = 'cancelled', Pending = 'pending', Authorized = 'authorized', Refunded = 'refunded', SettlementInProgress = 'settlement-in-progress', Failed = 'failed' }
export const enum AuditOpinionType { Adverse = 'adverse', Unqualified = 'unqualified', Disclaimer = 'disclaimer', Qualified = 'qualified' }
export const enum InventoryStorageType { Warehouse = 'warehouse', RetailStore = 'retail-store', DistributionCenter = 'distribution-center', OnlineMarketplace = 'online-marketplace', DropShipper = 'drop-shipper', Consignment = 'consignment', Other = 'other' }
export const enum ItemCondition { LikeNew = 'like-new', Damaged = 'damaged', OpenBox = 'open-box', New = 'new', Refurbished = 'refurbished', Used = 'used' }
export const enum TransactionType { Payment = 'payment', Withdrawal = 'withdrawal', Transfer = 'transfer', Refund = 'refund', Charge = 'charge', Adjustment = 'adjustment', Deposit = 'deposit', Fee = 'fee' }
export const enum VisibilityScope { Internal = 'internal', Global = 'global', Private = 'private', Web = 'web', App = 'app' }
export const enum PaymentStatus { Cancelled = 'cancelled', Submitted = 'submitted', Processing = 'processing', Voided = 'voided', Failed = 'failed', Disputed = 'disputed', Overdue = 'overdue', Refunded = 'refunded', Paid = 'paid', Partial = 'partial', Authorized = 'authorized', Succeeded = 'succeeded', Error = 'error', Adjusted = 'adjusted', Pending = 'pending', Deleted = 'deleted', PartiallyRefunded = 'partially-refunded', Draft = 'draft' }
export const enum EntityLifecycleStatus { Active = 'active', Draft = 'draft', Preorder = 'preorder', Inactive = 'inactive', Scheduled = 'scheduled', Archived = 'archived', Deleted = 'deleted' }
export const enum TransactionChannel { Telephone = 'telephone', Other = 'other', Mail = 'mail', Atm = 'atm', Mobile = 'mobile', InPerson = 'in-person', BankBranch = 'bank-branch', Online = 'online' }
export const enum FinancialDisputeStatus { Lost = 'lost', NeedsResponse = 'needs-response', Won = 'won', AwaitingEvidence = 'awaiting-evidence', ChargeRefunded = 'charge-refunded', UnderReview = 'under-review', Escalated = 'escalated', Closed = 'closed' }
export const enum ContentVisibility { Private = 'private', Public = 'public', Internal = 'internal', Protected = 'protected', Shared = 'shared' }
export const enum DeviceUsageType { Educational = 'educational', Industrial = 'industrial', Healthcare = 'healthcare', Other = 'other', Business = 'business', Home = 'home', Personal = 'personal' }
export const enum EntityCategory { Task = 'task', User = 'user', Link = 'link', Owner = 'owner', Document = 'document', Other = 'other', Person = 'person', Project = 'project', Message = 'message', Event = 'event' }
export const enum GenderIdentity { PreferNotToSay = 'prefer-not-to-say', Male = 'male', Other = 'other', Female = 'female' }
export const enum CommunicationMethod { Sms = 'sms', PushNotification = 'push-notification', SocialMedia = 'social-media', InstantMessage = 'instant-message', VideoCall = 'video-call', Text = 'text', Other = 'other', Mail = 'mail', InPerson = 'in-person', Email = 'email', Phone = 'phone' }
export const enum FinancialTransactionType { Payment = 'payment', Withdrawal = 'withdrawal', Charge = 'charge', Deposit = 'deposit', Sale = 'sale', Chargeback = 'chargeback', SpendOverpayment = 'spend-overpayment', SpendPrepayment = 'spend-prepayment', Other = 'other', Adjustment = 'adjustment', Transfer = 'transfer', Receive = 'receive', Dividend = 'dividend', ReceiveOverpayment = 'receive-overpayment', Spend = 'spend', Fee = 'fee', Interest = 'interest', ReceivePrepayment = 'receive-prepayment', Refund = 'refund' }
export const enum EmailCategoryType { Promotional = 'promotional', Business = 'business', Governmental = 'governmental', Transactional = 'transactional', Spam = 'spam', Personal = 'personal', Educational = 'educational', Other = 'other' }
export const enum UniversalIdentifierType { Number = 'number', Uuid = 'uuid', String = 'string', Url = 'url', Email = 'email' }
export const enum AccessControlModel { Rbac = 'rbac', Abac = 'abac', Dac = 'dac', Mac = 'mac', None = 'none', Custom = 'custom' }
export const enum ParticipantType { Team = 'team', Group = 'group', ExternalParticipant = 'external-participant', User = 'user', Organization = 'organization' }
export const enum PriorityLevel { High = 'high', Medium = 'medium', Urgent = 'urgent', Elevated = 'elevated', Low = 'low' }
export const enum TaskStatus { Todo = 'todo', InProgress = 'in-progress', Done = 'done', Blocked = 'blocked', OnHold = 'on-hold', Cancelled = 'cancelled' }
export const enum UserStatus { Banned = 'banned', Verified = 'verified', Active = 'active', Deleted = 'deleted', Archived = 'archived', WaitListed = 'wait-listed', Inactive = 'inactive', Suspended = 'suspended', Pending = 'pending' }
export const enum PromotionType { Other = 'other', BuyOneGetOne = 'buy-one-get-one', RewardPoints = 'reward-points', Percentage = 'percentage', FixedAmount = 'fixed-amount', FreeShipping = 'free-shipping' }
export const enum MimeType { ImagePng = 'image/png', ImageJpeg = 'image/jpeg', ImageGif = 'image/gif', ImageWebp = 'image/webp', ImageSvgXml = 'image/svg+xml' }
export const enum PrerequisiteRangeType { ShippingPrice = 'shipping-price', Quantity = 'quantity', Subtotal = 'subtotal' }
export const enum TaxType { Variable = 'variable', Inclusive = 'inclusive', Additive = 'additive' }
export const enum ModifierType { List = 'list', Text = 'text' }
export const enum CardType { Credit = 'credit', UnknownCard = 'unknown-card', Debit = 'debit' }
export const enum PrepaidType { Prepaid = 'prepaid', UnknownPrepaid = 'unknown-prepaid', NotPrepaid = 'not-prepaid' }
export const enum EntryMethod { Keyed = 'keyed', Swiped = 'swiped', OnFile = 'on-file', Emv = 'emv', Contactless = 'contactless' }
export const enum CvvStatus { Rejected = 'rejected', NotChecked = 'not-checked', Accepted = 'accepted' }
export const enum AvcStatus { NotChecked = 'not-checked', Rejected = 'rejected', Accepted = 'accepted' }
export const enum CreditType { Prepayment = 'prepayment', Goodwill = 'goodwill', Customer = 'customer', Supplier = 'supplier', Overpayment = 'overpayment' }
export const enum CallDirection { Inbound = 'inbound', Unknown = 'unknown', Outbound = 'outbound', Conference = 'conference' }
export const enum SpeakerRole { Attendee = 'attendee', Invitee = 'invitee' }
export const enum FileType { Folder = 'folder', Url = 'url', File = 'file' }
export const enum AiToolChoiceType { Auto = 'auto', Any = 'any', None = 'none', Tool = 'tool' }
export const enum ImageType { Base64 = 'base64' }
export const enum ResponseFormatType { Text = 'text', JsonObject = 'json-object', JsonSchema = 'json-schema' }
export const enum ToolCallType { Function = 'function' }
export const enum AiMessagesContentType { ToolUse = 'tool-use', Text = 'text', ToolResult = 'tool-result', Image = 'image' }
export const enum AiRole { Assistant = 'assistant', Tool = 'tool', User = 'user' }
export const enum JsonSchemaType { Function = 'function' }
export const enum EventStatus { Tentative = 'tentative', Confirmed = 'confirmed', Cancelled = 'cancelled' }
export const enum EventVisibility { Confidential = 'confidential', Public = 'public', Private = 'private' }
export const enum EventReminderAction { Popup = 'popup', Email = 'email' }
export const enum EventRuleType { AddDates = 'add-dates', Exclude = 'exclude', ExcludeDates = 'exclude-dates', Repeat = 'repeat' }
export const enum EventFrequency { Monthly = 'monthly', Weekly = 'weekly', Yearly = 'yearly', Daily = 'daily' }
