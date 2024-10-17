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
export const enum TargetSelection { All = 'all', Entitled = 'entitled' }
export const enum Roles { Admin = 'admin', Moderator = 'moderator', User = 'user' }
export const enum SkuValidation { GlobalUnique = 'global-unique', LocalUnique = 'local-unique', None = 'none' }
export const enum Status { Expired = 'expired', Scheduled = 'scheduled', Active = 'active' }
export const enum AllocationMethod { Each = 'each', Across = 'across' }
export const enum CustomerSelection { Prerequisite = 'prerequisite', All = 'all' }
export const enum TransactionMethod { BankBranch = 'bank-branch', Online = 'online', Mail = 'mail', Mobile = 'mobile', Telephone = 'telephone', Atm = 'atm' }
export const enum MinimumRequirements { MinimumPurchaseAmount = 'minimum-purchase-amount', None = 'none', MinimumQuantityOfItems = 'minimum-quantity-of-items' }
export const enum CustomerEligibility { All = 'all', SpecificCustomers = 'specific-customers', SpecificCustomerGroups = 'specific-customer-groups' }
export const enum ChannelAvailability { InStore = 'in-store', Online = 'online', InApp = 'in-app', AllChannels = 'all-channels' }
export const enum AccountType { OtherExpenseHomeOwnerRentalInsurance = 'other-expense::home-owner-rental-insurance', AssetOtherConsumables = 'asset::other-consumables', EquityEquityInEarningsOfSubsidiuaries = 'equity::equity-in-earnings-of-subsidiuaries', LiabilityOutstandingDuesMicroSmallEnterprise = 'liability::outstanding-dues-micro-small-enterprise', AssetFixedAssetCopiers = 'asset::fixed-asset-copiers', EquityCommonStock = 'equity::common-stock', OtherCurrentLiabilityInsurancePayable = 'other-current-liability::insurance-payable', ExpenseTaxesPaid = 'expense::taxes-paid', ExpenseEntertainment = 'expense::entertainment', ExpenseTravel = 'expense::travel', AssetDepletableAssets = 'asset::depletable-assets', OtherIncomeDividendIncome = 'other-income::dividend-income', AssetFixedAssetOtherToolsEquipment = 'asset::fixed-asset-other-tools-equipment', EquityTreasuryStock = 'equity::treasury-stock', OtherCurrentLiabilityTrustAccountsLiabilities = 'other-current-liability::trust-accounts-liabilities', AssetDevelopmentCosts = 'asset::development-costs', AssetLoansToOthers = 'asset::loans-to-others', LiabilityDeferredTaxLiabilities = 'liability::deferred-tax-liabilities', AssetAccumulatedAmortizationOfOtherAssets = 'asset::accumulated-amortization-of-other-assets', EquityInvestmentGrants = 'equity::investment-grants', ExpenseSundry = 'expense::sundry', EquityPartnersEquity = 'equity::partners-equity', OtherExpenseAmortization = 'other-expense::amortization', OtherExpenseVehicle = 'other-expense::vehicle', AssetEmployeeCashAdvances = 'asset::employee-cash-advances', ExpenseOtherSellingExpenses = 'expense::other-selling-expenses', ExpenseInsurance = 'expense::insurance', ExpenseTravelExpensesGeneralAndAdminExpenses = 'expense::travel-expenses-general-and-admin-expenses', OtherExpenseMortgageInterest = 'other-expense::mortgage-interest', OtherCurrentLiabilityCurrentPortionOfObligationsUnderFinanceLeases = 'other-current-liability::current-portion-of-obligations-under-finance-leases', EquityAccumulatedOtherComprehensiveIncome = 'equity::accumulated-other-comprehensive-income', AssetGlobalTaxDeferred = 'asset::global-tax-deferred', ExpenseManagementCompensation = 'expense::management-compensation', AssetFurnitureAndFixtures = 'asset::furniture-and-fixtures', AssetOtherLongTermInvestments = 'asset::other-long-term-investments', LiabilityAccruedLongTermLiabilities = 'liability::accrued-long-term-liabilities', ExpenseUnappliedCashBillPaymentExpense = 'expense::unapplied-cash-bill-payment-expense', OtherCurrentLiabilityAccruedLiabilities = 'other-current-liability::accrued-liabilities', OtherExpenseVehicleLease = 'other-expense::vehicle-lease', OtherExpenseOtherVehicleExpenses = 'other-expense::other-vehicle-expenses', ExpenseShippingAndDeliveryExpense = 'expense::shipping-and-delivery-expense', OtherExpenseTaxRoundoffGainOrLoss = 'other-expense::tax-roundoff-gain-or-loss', OtherCurrentLiability = 'other-current-liability', AssetProvisionsCurrentAssets = 'asset::provisions-current-assets', ExpenseOfficeExpenses = 'expense::office-expenses', OtherExpenseVehicleRegistration = 'other-expense::vehicle-registration', AssetInvestmentMortgageRealEstateLoans = 'asset::investment-mortgage-real-estate-loans', EquityOpeningBalanceEquity = 'equity::opening-balance-equity', EquityPersonalIncome = 'equity::personal-income', EquityShareCapital = 'equity::share-capital', AssetFixedAssetPhone = 'asset::fixed-asset-phone', RevenueIncome = 'revenue::income', RevenueSalesRetail = 'revenue::sales-retail', AssetExpenditureAuthorisationsAndLettersOfCredit = 'asset::expenditure-authorisations-and-letters-of-credit', OtherExpenseVehicleLoanInterest = 'other-expense::vehicle-loan-interest', AssetIntangibleAssetsUnderDevelopment = 'asset::intangible-assets-under-development', EquityAccumulatedAdjustment = 'equity::accumulated-adjustment', ExpenseDistributionCosts = 'expense::distribution-costs', OtherCurrentLiabilityDirectDepositPayable = 'other-current-liability::direct-deposit-payable', AssetAssetsHeldForSale = 'asset::assets-held-for-sale', OtherExpenseDeferredTaxExpense = 'other-expense::deferred-tax-expense', RevenueSalesOfProductIncome = 'revenue::sales-of-product-income', ExpenseBankCharges = 'expense::bank-charges', ExpenseAdvertisingPromotional = 'expense::advertising-promotional', AssetDeferredTax = 'asset::deferred-tax', AssetFixedAssetSoftware = 'asset::fixed-asset-software', OtherExpenseDepreciation = 'other-expense::depreciation', ExpenseUtilities = 'expense::utilities', RevenueOwnWorkCapitalized = 'revenue::own-work-capitalized', ExpenseRepairMaintenance = 'expense::repair-maintenance', OtherCurrentLiabilityCurrentTaxLiability = 'other-current-liability::current-tax-liability', OtherExpenseVehicleInsurance = 'other-expense::vehicle-insurance', AssetMachineryAndEquipment = 'asset::machinery-and-equipment', AssetInvestments = 'asset::investments', AssetLoansToOfficers = 'asset::loans-to-officers', Asset = 'asset', OtherExpenseMatCredit = 'other-expense::mat-credit', OtherCurrentLiabilitySocialSecurityAgencies = 'other-current-liability::social-security-agencies', OtherCurrentLiabilityPrepaidExpensesPayable = 'other-current-liability::prepaid-expenses-payable', LiabilityCreditCard = 'liability::credit-card', OtherCurrentLiabilityRentsInTrustLiability = 'other-current-liability::rents-in-trust-liability', OtherExpensePriorPeriodItems = 'other-expense::prior-period-items', RevenueRevenueGeneral = 'revenue::revenue-general', AssetAccumulatedAmortization = 'asset::accumulated-amortization', AssetSecurityDeposits = 'asset::security-deposits', AssetInvestmentOther = 'asset::investment-other', AssetParticipatingInterests = 'asset::participating-interests', ExpenseTravelMeals = 'expense::travel-meals', LiabilityBankLoans = 'liability::bank-loans', Liability = 'liability', EquityDividendDisbursed = 'equity::dividend-disbursed', LiabilityGovernmentAndOtherPublicAuthorities = 'liability::government-and-other-public-authorities', OtherIncomeOtherMiscellaneousIncome = 'other-income::other-miscellaneous-income', OtherExpenseExchangeGainOrLoss = 'other-expense::exchange-gain-or-loss', OtherIncomeUnrealisedLossOnSecuritiesNetOfTax = 'other-income::unrealised-loss-on-securities-net-of-tax', AssetGlobalTaxRefund = 'asset::global-tax-refund', AssetShortTermLoansAndAdvancesToRelatedParties = 'asset::short-term-loans-and-advances-to-related-parties', AssetCalledUpShareCapitalNotPaid = 'asset::called-up-share-capital-not-paid', AssetLoansToStockholders = 'asset::loans-to-stockholders', RevenueNonProfitIncome = 'revenue::non-profit-income', AssetChecking = 'asset::checking', AssetLeaseholdImprovements = 'asset::leasehold-improvements', AssetOtherAsset = 'asset::other-asset', OtherExpenseDepletion = 'other-expense::depletion', OtherCurrentLiabilityDividendsPayable = 'other-current-liability::dividends-payable', Income = 'income', RevenueUnappliedCashPaymentIncome = 'revenue::unapplied-cash-payment-income', LiabilityAccrualsAndDeferredIncome = 'liability::accruals-and-deferred-income', LiabilityOtherLongTermProvisions = 'liability::other-long-term-provisions', OtherCurrentLiabilityCurrentLiabilities = 'other-current-liability::current-liabilities', LiabilityLiabilitiesRelatedToAssetsHeldForSale = 'liability::liabilities-related-to-assets-held-for-sale', AssetOtherLongTermLoansAndAdvances = 'asset::other-long-term-loans-and-advances', CostOfGoodsSoldEquipmentRentalCos = 'cost-of-goods-sold::equipment-rental-cos', AssetLongTermLoansAndAdvancesToRelatedParties = 'asset::long-term-loans-and-advances-to-related-parties', AssetOtherIntangibleAssets = 'asset::other-intangible-assets', AssetUndepositedFunds = 'asset::undeposited-funds', OtherExpenseRepairsAndMaintenance = 'other-expense::repairs-and-maintenance', AssetMoneyMarket = 'asset::money-market', EquityPreferredStock = 'equity::preferred-stock', CostOfGoodsSoldCostOfSales = 'cost-of-goods-sold::cost-of-sales', ExpenseInterestPaid = 'expense::interest-paid', ExpenseSuppliesMaterials = 'expense::supplies-materials', OtherCurrentLiabilityOtherCurrentLiabilities = 'other-current-liability::other-current-liabilities', AccountsReceivable = 'accounts-receivable', AssetInventory = 'asset::inventory', LiabilityLongTermEmployeeBenefitObligations = 'liability::long-term-employee-benefit-obligations', OtherCurrentLiabilityTradeAndOtherPayables = 'other-current-liability::trade-and-other-payables', AssetShortTermInvestmentsInRelatedParties = 'asset::short-term-investments-in-related-parties', ExpenseLossOnDiscontinuedOperationsNetOfTax = 'expense::loss-on-discontinued-operations-net-of-tax', OtherCurrentLiabilityLineOfCredit = 'other-current-liability::line-of-credit', AssetLicenses = 'asset::licenses', AssetVehicles = 'asset::vehicles', OtherCurrentLiabilityShortTermBorrowings = 'other-current-liability::short-term-borrowings', EquityMoneyReceivedAgainstShareWarrants = 'equity::money-received-against-share-warrants', OtherIncomeGainLossOnSaleOfFixedAssets = 'other-income::gain-loss-on-sale-of-fixed-assets', OtherIncomeTaxExemptInterest = 'other-income::tax-exempt-interest', AssetRetainage = 'asset::retainage', EquityCalledUpShareCapital = 'equity::called-up-share-capital', ExpenseOtherCurrentOperatingCharges = 'expense::other-current-operating-charges', CostOfGoodsSold = 'cost-of-goods-sold', AssetLongTermInvestments = 'asset::long-term-investments', RevenueSavingsByTaxScheme = 'revenue::savings-by-tax-scheme', AssetOtherEarMarkedBankAccounts = 'asset::other-ear-marked-bank-accounts', OtherExpenseUtilities = 'other-expense::utilities', OtherCurrentLiabilityGlobalTaxPayable = 'other-current-liability::global-tax-payable', AssetCapitalWip = 'asset::capital-wip', LiabilityDebtsRelatedToParticipatingInterests = 'liability::debts-related-to-participating-interests', EquityOwnersEquity = 'equity::owners-equity', LiabilityLongTermDebit = 'liability::long-term-debit', OtherExpenseExtraordinaryItems = 'other-expense::extraordinary-items', CostOfGoodsSoldShippingFreightDeliveryCos = 'cost-of-goods-sold::shipping-freight-delivery-cos', ExpenseBadDebts = 'expense::bad-debts', EquityFunds = 'equity::funds', AssetLand = 'asset::land', OtherIncomeInterestEarned = 'other-income::interest-earned', OtherCurrentLiabilityPayrollClearing = 'other-current-liability::payroll-clearing', OtherCurrentLiabilityFederalIncomeTaxPayable = 'other-current-liability::federal-income-tax-payable', AssetOtherFixedAssets = 'asset::other-fixed-assets', OtherCurrentLiabilityProvisionForWarrantyObligations = 'other-current-liability::provision-for-warranty-obligations', ExpenseGlobalTaxExpense = 'expense::global-tax-expense', OtherCurrentLiabilityProvisionsCurrentLiabilities = 'other-current-liability::provisions-current-liabilities', OtherExpense = 'other-expense', OtherIncomeOtherInvestmentIncome = 'other-income::other-investment-income', ExpenseDuesSubscriptions = 'expense::dues-subscriptions', OtherExpenseRentAndLease = 'other-expense::rent-and-lease', ExpenseEquipmentRental = 'expense::equipment-rental', LiabilityLongTermBorrowings = 'liability::long-term-borrowings', AssetCumulativeDepreciationOnIntangibleAssets = 'asset::cumulative-depreciation-on-intangible-assets', OtherExpenseVehicleRepairs = 'other-expense::vehicle-repairs', AssetNonCurrentAssets = 'asset::non-current-assets', AssetBank = 'asset::bank', AssetFixedAssetPhotoVideo = 'asset::fixed-asset-photo-video', CostOfGoodsSoldFreightAndDeliveryCost = 'cost-of-goods-sold::freight-and-delivery-cost', OtherExpenseVehicleLoan = 'other-expense::vehicle-loan', EquityCapitalReserves = 'equity::capital-reserves', ExpenseExtraordinaryCharges = 'expense::extraordinary-charges', AssetBuildings = 'asset::buildings', AssetOrganizationalCosts = 'asset::organizational-costs', ExpensePurchasesRebates = 'expense::purchases-rebates', ExpenseAuto = 'expense::auto', RevenueServiceFeeIncome = 'revenue::service-fee-income', AssetAvailableForSaleFinancialAssets = 'asset::available-for-sale-financial-assets', AssetFixedAsset = 'asset::fixed-asset', AssetInternalTransfers = 'asset::internal-transfers', ExpensePayrollExpenses = 'expense::payroll-expenses', AssetLeaseBuyout = 'asset::lease-buyout', LiabilityShareholderNotesPayable = 'liability::shareholder-notes-payable', EquityPersonalExpense = 'equity::personal-expense', OtherCurrentLiabilityGlobalTaxSuspense = 'other-current-liability::global-tax-suspense', AssetProvisionsFixedAssets = 'asset::provisions-fixed-assets', LiabilityStaffAndRelatedLongTermLiabilityAccounts = 'liability::staff-and-related-long-term-liability-accounts', RevenueCashReceiptIncome = 'revenue::cash-receipt-income', ExpenseShippingFreightDelivery = 'expense::shipping-freight-delivery', OtherCurrentLiabilitySundryDebtorsAndCreditors = 'other-current-liability::sundry-debtors-and-creditors', ExpenseCostOfLabor = 'expense::cost-of-labor', CostOfGoodsSoldCostOfLaborCos = 'cost-of-goods-sold::cost-of-labor-cos', CostOfGoodsSoldOtherCostsOfServiceCos = 'cost-of-goods-sold::other-costs-of-service-cos', AssetInvestmentUsGovernmentObligations = 'asset::investment-us-government-obligations', Equity = 'equity', ExpenseOtherMiscellaneousServiceCost = 'expense::other-miscellaneous-service-cost', ExpenseExternalServices = 'expense::external-services', AssetOtherLongTermAssets = 'asset::other-long-term-assets', OtherCurrentLiabilityStaffAndRelatedLiabilityAccounts = 'other-current-liability::staff-and-related-liability-accounts', AssetAllowanceForBadDebts = 'asset::allowance-for-bad-debts', AssetSavings = 'asset::savings', OtherExpenseExceptionalItems = 'other-expense::exceptional-items', AssetTradeAndOtherReceivables = 'asset::trade-and-other-receivables', EquityOtherFreeReserves = 'equity::other-free-reserves', LiabilityGroupAndAssociates = 'liability::group-and-associates', LiabilityObligationsUnderFinanceLeases = 'liability::obligations-under-finance-leases', RevenueOtherCurrentOperatingIncome = 'revenue::other-current-operating-income', ExpenseAmortizationExpense = 'expense::amortization-expense', LiabilityOtherLongTermLiabilities = 'liability::other-long-term-liabilities', EquityPartnerDistributions = 'equity::partner-distributions', OtherIncomeLossOnDisposalOfAssets = 'other-income::loss-on-disposal-of-assets', AssetRentsHeldInTrust = 'asset::rents-held-in-trust', OtherExpensePenaltiesSettlements = 'other-expense::penalties-settlements', ExpenseOtherRentalCosts = 'expense::other-rental-costs', OtherCurrentLiabilityDutiesAndTaxes = 'other-current-liability::duties-and-taxes', ExpenseRentOrLeaseOfBuildings = 'expense::rent-or-lease-of-buildings', LiabilityAccountsPayable = 'liability::accounts-payable', ExpenseEntertainmentMeals = 'expense::entertainment-meals', OtherExpenseWashAndRoadServices = 'other-expense::wash-and-road-services', AssetAccumulatedDepreciation = 'asset::accumulated-depreciation', ExpenseOtherBusinessExpenses = 'expense::other-business-expenses', AssetIntangibleAssets = 'asset::intangible-assets', OtherCurrentLiabilityLoanPayable = 'other-current-liability::loan-payable', ExpenseAppropriationsToDepreciation = 'expense::appropriations-to-depreciation', LiabilityOutstandingDuesOtherThanMicroSmallEnterprise = 'liability::outstanding-dues-other-than-micro-small-enterprise', OtherCurrentLiabilityCurrentPortionEmployeeBenefitsObligations = 'other-current-liability::current-portion-employee-benefits-obligations', AssetFixedAssetComputers = 'asset::fixed-asset-computers', AssetGoodwill = 'asset::goodwill', AssetProvisionsNonCurrentAssets = 'asset::provisions-non-current-assets', AssetAccumulatedDepletion = 'asset::accumulated-depletion', OtherCurrentLiabilityStateLocalIncomeTaxPayable = 'other-current-liability::state-local-income-tax-payable', AssetCashAndCashEquivalents = 'asset::cash-and-cash-equivalents', OtherCurrentLiabilityInterestPayables = 'other-current-liability::interest-payables', ExpenseTravelExpensesSellingExpense = 'expense::travel-expenses-selling-expense', LiabilityLongTermLiability = 'liability::long-term-liability', ExpenseProjectStudiesSurveysAssessments = 'expense::project-studies-surveys-assessments', AssetOtherCurrentAsset = 'asset::other-current-asset', OtherIncomeOtherOperatingIncome = 'other-income::other-operating-income', RevenueDiscountsRefundsGiven = 'revenue::discounts-refunds-given', ExpenseCharitableContributions = 'expense::charitable-contributions', OtherExpenseIncomeTaxOtherExpense = 'other-expense::income-tax-other-expense', AssetOtherCurrentAssets = 'asset::other-current-assets', OtherExpenseHomeOffice = 'other-expense::home-office', OtherCurrentLiabilitySalesTaxPayable = 'other-current-liability::sales-tax-payable', ExpenseLegalProfessionalFees = 'expense::legal-professional-fees', OtherCurrentLiabilityPayrollTaxPayable = 'other-current-liability::payroll-tax-payable', RevenueOtherPrimaryIncome = 'revenue::other-primary-income', LiabilityProvisionForLiabilities = 'liability::provision-for-liabilities', AssetTrustAccounts = 'asset::trust-accounts', AssetInvestmentTaxExemptSecurities = 'asset::investment-tax-exempt-securities', AssetLandAsset = 'asset::land-asset', ExpenseOtherExternalServices = 'expense::other-external-services', EquityRetainedEarnings = 'equity::retained-earnings', ExpensePenaltiesSettlements = 'expense::penalties-settlements', RevenueOperatingGrants = 'revenue::operating-grants', LiabilityNotesPayable = 'liability::notes-payable', AssetAssetsInCourseOfConstruction = 'asset::assets-in-course-of-construction', LiabilityAccruedVacationPayable = 'liability::accrued-vacation-payable', ExpenseIncomeTaxExpense = 'expense::income-tax-expense', ExpenseOfficeGeneralAdministrativeExpenses = 'expense::office-general-administrative-expenses', OtherIncomeGainLossOnSaleOfInvestments = 'other-income::gain-loss-on-sale-of-investments', AssetAssetsAvailableForSale = 'asset::assets-available-for-sale', AssetPrepaidExpenses = 'asset::prepaid-expenses', EquityPartnerContributions = 'equity::partner-contributions', CostOfGoodsSoldSuppliesMaterialsCogs = 'cost-of-goods-sold::supplies-materials-cogs', AssetCashOnHand = 'asset::cash-on-hand', AssetPrepaymentsAndAccruedIncome = 'asset::prepayments-and-accrued-income', EquityPaidInCapitalOrSurplus = 'equity::paid-in-capital-or-surplus', ExpenseStaffCosts = 'expense::staff-costs', OtherExpenseOtherHomeOfficeExpenses = 'other-expense::other-home-office-expenses', OtherExpenseOtherMiscellaneousExpense = 'other-expense::other-miscellaneous-expense', OtherIncome = 'other-income', RevenueSalesWholesale = 'revenue::sales-wholesale', ExpenseBorrowingCost = 'expense::borrowing-cost', EquityEstimatedTaxes = 'equity::estimated-taxes', ExpenseFinanceCosts = 'expense::finance-costs', OtherExpenseGasAndFuel = 'other-expense::gas-and-fuel', AssetFixedAssetFurniture = 'asset::fixed-asset-furniture', ExpenseCommissionsAndFees = 'expense::commissions-and-fees', Expense = 'expense', OtherExpenseParkingAndTolls = 'other-expense::parking-and-tolls', AssetBalWithGovtAuthorities = 'asset::bal-with-govt-authorities', LiabilityProvisionsNonCurrentLiabilities = 'liability::provisions-non-current-liabilities', EquityHealthcare = 'equity::healthcare', ExpensePromotionalMeals = 'expense::promotional-meals', EquityShareApplicationMoneyPendingAllotment = 'equity::share-application-money-pending-allotment' }
export const enum AppliesTo { AllItems = 'all-items', SpecificCategories = 'specific-categories', SpecificItems = 'specific-items' }
export const enum ReceiverRoles { Admin = 'admin', Moderator = 'moderator', User = 'user' }
export const enum Format { Json = 'json', Xml = 'xml' }
export const enum Gender { Other = 'other', Female = 'female', Male = 'male', PreferNotToSay = 'prefer not to say' }
export const enum TargetType { LineItem = 'line-item', ShippingLine = 'shipping-line' }
export const enum UserRoles { Admin = 'admin', Moderator = 'moderator', User = 'user' }
export const enum Country { Uzbekistan = 'uzbekistan', NewZealand = 'new-zealand', Argentina = 'argentina', Libya = 'libya', Montenegro = 'montenegro', Singapore = 'singapore', PapuaNewGuinea = 'papua-new-guinea', Indonesia = 'indonesia', Poland = 'poland', Armenia = 'armenia', Thailand = 'thailand', Bolivia = 'bolivia', Chad = 'chad', CzechRepublic = 'czech-republic', Latvia = 'latvia', CentralAfricanRepublic = 'central-african-republic', Mauritius = 'mauritius', Romania = 'romania', Togo = 'togo', Angola = 'angola', SanMarino = 'san-marino', Turkey = 'turkey', Denmark = 'denmark', Djibouti = 'djibouti', Zambia = 'zambia', Belgium = 'belgium', Brunei = 'brunei', Greece = 'greece', SouthSudan = 'south-sudan', Iraq = 'iraq', Sweden = 'sweden', Chile = 'chile', SaintVincentAndTheGrenadines = 'saint-vincent-and-the-grenadines', Hungary = 'hungary', Malawi = 'malawi', Sudan = 'sudan', Syria = 'syria', BosniaAndHerzegovina = 'bosnia-and-herzegovina', Luxembourg = 'luxembourg', Lebanon = 'lebanon', Cyprus = 'cyprus', SaintLucia = 'saint-lucia', Netherlands = 'netherlands', Australia = 'australia', Croatia = 'croatia', MarshallIslands = 'marshall-islands', Malta = 'malta', Norway = 'norway', Senegal = 'senegal', TrinidadAndTobago = 'trinidad-and-tobago', Palestine = 'palestine', Kenya = 'kenya', CoteDIvoire = 'cote-d-ivoire', Guatemala = 'guatemala', Mexico = 'mexico', Uganda = 'uganda', Bhutan = 'bhutan', Tuvalu = 'tuvalu', Botswana = 'botswana', SriLanka = 'sri-lanka', Vanuatu = 'vanuatu', Burundi = 'burundi', Ethiopia = 'ethiopia', Belarus = 'belarus', Guyana = 'guyana', CaboVerde = 'cabo-verde', Gabon = 'gabon', Monaco = 'monaco', India = 'india', Azerbaijan = 'azerbaijan', Andorra = 'andorra', Namibia = 'namibia', Paraguay = 'paraguay', SouthKorea = 'south-korea', Nepal = 'nepal', Switzerland = 'switzerland', UnitedKingdom = 'united-kingdom', Kyrgyzstan = 'kyrgyzstan', Uruguay = 'uruguay', Venezuela = 'venezuela', Madagascar = 'madagascar', France = 'france', Iran = 'iran', Italy = 'italy', Laos = 'laos', Nauru = 'nauru', Qatar = 'qatar', Tajikistan = 'tajikistan', Comoros = 'comoros', SierraLeone = 'sierra-leone', Turkmenistan = 'turkmenistan', Kazakhstan = 'kazakhstan', ElSalvador = 'el-salvador', Lesotho = 'lesotho', Haiti = 'haiti', Estonia = 'estonia', BurkinaFaso = 'burkina-faso', Mali = 'mali', DominicanRepublic = 'dominican-republic', Ghana = 'ghana', Malaysia = 'malaysia', Mozambique = 'mozambique', Belize = 'belize', Japan = 'japan', Nicaragua = 'nicaragua', Niger = 'niger', UnitedArabEmirates = 'united-arab-emirates', Yemen = 'yemen', Zimbabwe = 'zimbabwe', Portugal = 'portugal', Bahrain = 'bahrain', Slovenia = 'slovenia', Eritrea = 'eritrea', Dominica = 'dominica', SaintKittsAndNevis = 'saint-kitts-and-nevis', Bahamas = 'bahamas', Liberia = 'liberia', Bulgaria = 'bulgaria', CongoDemocraticRepublic = 'congo-democratic-republic', Oman = 'oman', Myanmar = 'myanmar', Finland = 'finland', Cambodia = 'cambodia', Serbia = 'serbia', Afghanistan = 'afghanistan', Fiji = 'fiji', Barbados = 'barbados', Brazil = 'brazil', China = 'china', Samoa = 'samoa', Suriname = 'suriname', Honduras = 'honduras', SaudiArabia = 'saudi-arabia', CongoRepublic = 'congo-republic', Jordan = 'jordan', Moldova = 'moldova', Nigeria = 'nigeria', AntiguaAndBarbuda = 'antigua-and-barbuda', Bangladesh = 'bangladesh', Guinea = 'guinea', Pakistan = 'pakistan', Seychelles = 'seychelles', Maldives = 'maldives', Palau = 'palau', Jamaica = 'jamaica', SolomonIslands = 'solomon-islands', Austria = 'austria', Philippines = 'philippines', NorthMacedonia = 'north-macedonia', Taiwan = 'taiwan', Kiribati = 'kiribati', Algeria = 'algeria', Canada = 'canada', Cuba = 'cuba', GuineaBissau = 'guinea-bissau', Tunisia = 'tunisia', Colombia = 'colombia', Somalia = 'somalia', Grenada = 'grenada', Spain = 'spain', Tanzania = 'tanzania', SouthAfrica = 'south-africa', VaticanCity = 'vatican-city', Ireland = 'ireland', CostaRica = 'costa-rica', Eswatini = 'eswatini', Iceland = 'iceland', NorthKorea = 'north-korea', Cameroon = 'cameroon', Ecuador = 'ecuador', Micronesia = 'micronesia', Georgia = 'georgia', Germany = 'germany', Albania = 'albania', Gambia = 'gambia', Israel = 'israel', Lithuania = 'lithuania', Morocco = 'morocco', Panama = 'panama', Mauritania = 'mauritania', Rwanda = 'rwanda', Peru = 'peru', TimorLeste = 'timor-leste', Ukraine = 'ukraine', Russia = 'russia', UnitedStates = 'united-states', SaoTomeAndPrincipe = 'sao-tome-and-principe', Benin = 'benin', Liechtenstein = 'liechtenstein', Mongolia = 'mongolia', Tonga = 'tonga', Egypt = 'egypt', Vietnam = 'vietnam', EquatorialGuinea = 'equatorial-guinea', Kuwait = 'kuwait', Slovakia = 'slovakia' }
export const enum GlobalTaxType { Gst = 'gst', Vat = 'vat', ExciseTax = 'excise-tax', PropertyTax = 'property-tax', Other = 'other', CustomsDuty = 'customs-duty', SalesTax = 'sales-tax' }
export const enum JournalEntryStatus { Voided = 'voided', Error = 'error', Draft = 'draft', Corrected = 'corrected', Pending = 'pending', Posted = 'posted' }
export const enum IdentityProvider { Vimeo = 'vimeo', Github = 'github', Wechat = 'wechat', Linkedin = 'linkedin', Microsoft = 'microsoft', Yahoo = 'yahoo', Qq = 'qq', Google = 'google', Whatsapp = 'whatsapp', Pinterest = 'pinterest', Facebook = 'facebook', Discord = 'discord', Tumblr = 'tumblr', Paypal = 'paypal', Telegram = 'telegram', Slack = 'slack', Instagram = 'instagram', Dribbble = 'dribbble', Twitter = 'twitter', Reddit = 'reddit', Line = 'line', Behance = 'behance', Snapchat = 'snapchat', Flickr = 'flickr', Amazon = 'amazon', Foursquare = 'foursquare', Other = 'other', Signal = 'signal', Apple = 'apple', Tiktok = 'tiktok' }
export const enum DayOfWeek { Thursday = 'thursday', Tuesday = 'tuesday', Saturday = 'saturday', Monday = 'monday', Wednesday = 'wednesday', Friday = 'friday', Sunday = 'sunday' }
export const enum AccountEngagementLevel { Cold = 'cold', Hot = 'hot', Warm = 'warm', Unknown = 'unknown' }
export const enum ReviewApprovalStatus { InReview = 'in-review', Pending = 'pending', Revised = 'revised', Approved = 'approved', Rejected = 'rejected' }
export const enum StakeholderType { Investor = 'investor', Competitor = 'competitor', Vendor = 'vendor', Other = 'other', Partner = 'partner', Customer = 'customer' }
export const enum AccountStatus { Suspended = 'suspended', Active = 'active', Inactive = 'inactive', Pending = 'pending', Closed = 'closed' }
export const enum CampaignStatus { Scheduled = 'scheduled', Completed = 'completed', Archived = 'archived', Planned = 'planned', Cancelled = 'cancelled', Paused = 'paused', Active = 'active', Draft = 'draft' }
export const enum CustomerType { Online = 'online', Retail = 'retail', Wholesale = 'wholesale', B2b = 'b2b', B2c = 'b2c', Corporate = 'corporate' }
export const enum AccountingAccountType { AssetAvailableForSaleFinancialAssets = 'asset::available-for-sale-financial-assets', EquityPersonalExpense = 'equity::personal-expense', OtherCurrentLiabilityGlobalTaxPayable = 'other-current-liability::global-tax-payable', ExpensePurchasesRebates = 'expense::purchases-rebates', EquityEquityInEarningsOfSubsidiuaries = 'equity::equity-in-earnings-of-subsidiuaries', OtherExpenseIncomeTaxOtherExpense = 'other-expense::income-tax-other-expense', OtherCurrentLiabilityCurrentTaxLiability = 'other-current-liability::current-tax-liability', ExpenseShippingAndDeliveryExpense = 'expense::shipping-and-delivery-expense', AssetMoneyMarket = 'asset::money-market', EquityTreasuryStock = 'equity::treasury-stock', OtherCurrentLiabilityPayrollTaxPayable = 'other-current-liability::payroll-tax-payable', CostOfGoodsSoldFreightAndDeliveryCost = 'cost-of-goods-sold::freight-and-delivery-cost', AssetBalWithGovtAuthorities = 'asset::bal-with-govt-authorities', AssetFixedAssetPhone = 'asset::fixed-asset-phone', AssetLeaseBuyout = 'asset::lease-buyout', AssetInvestments = 'asset::investments', AssetBuildings = 'asset::buildings', AssetCumulativeDepreciationOnIntangibleAssets = 'asset::cumulative-depreciation-on-intangible-assets', ExpenseEntertainmentMeals = 'expense::entertainment-meals', ExpenseBorrowingCost = 'expense::borrowing-cost', AssetInventory = 'asset::inventory', OtherExpenseHomeOffice = 'other-expense::home-office', LiabilityOutstandingDuesMicroSmallEnterprise = 'liability::outstanding-dues-micro-small-enterprise', LiabilityShareholderNotesPayable = 'liability::shareholder-notes-payable', OtherCurrentLiabilityPayrollClearing = 'other-current-liability::payroll-clearing', RevenueUnappliedCashPaymentIncome = 'revenue::unapplied-cash-payment-income', RevenueCashReceiptIncome = 'revenue::cash-receipt-income', RevenueOtherCurrentOperatingIncome = 'revenue::other-current-operating-income', ExpenseLossOnDiscontinuedOperationsNetOfTax = 'expense::loss-on-discontinued-operations-net-of-tax', AssetUndepositedFunds = 'asset::undeposited-funds', OtherIncomeDividendIncome = 'other-income::dividend-income', CostOfGoodsSoldOtherCostsOfServiceCos = 'cost-of-goods-sold::other-costs-of-service-cos', AssetSecurityDeposits = 'asset::security-deposits', OtherExpensePriorPeriodItems = 'other-expense::prior-period-items', OtherIncomeInterestEarned = 'other-income::interest-earned', AssetPrepaidExpenses = 'asset::prepaid-expenses', OtherExpenseDepletion = 'other-expense::depletion', LiabilityOtherLongTermLiabilities = 'liability::other-long-term-liabilities', LiabilityObligationsUnderFinanceLeases = 'liability::obligations-under-finance-leases', AssetInvestmentUsGovernmentObligations = 'asset::investment-us-government-obligations', OtherExpenseVehicleRepairs = 'other-expense::vehicle-repairs', AccountsReceivable = 'accounts-receivable', AssetVehicles = 'asset::vehicles', EquityPartnersEquity = 'equity::partners-equity', AssetShortTermInvestmentsInRelatedParties = 'asset::short-term-investments-in-related-parties', LiabilityAccruedLongTermLiabilities = 'liability::accrued-long-term-liabilities', OtherExpenseHomeOwnerRentalInsurance = 'other-expense::home-owner-rental-insurance', EquityOpeningBalanceEquity = 'equity::opening-balance-equity', ExpenseBankCharges = 'expense::bank-charges', RevenueOperatingGrants = 'revenue::operating-grants', ExpenseUnappliedCashBillPaymentExpense = 'expense::unapplied-cash-bill-payment-expense', AssetFixedAssetSoftware = 'asset::fixed-asset-software', ExpenseIncomeTaxExpense = 'expense::income-tax-expense', CostOfGoodsSoldEquipmentRentalCos = 'cost-of-goods-sold::equipment-rental-cos', AssetGlobalTaxRefund = 'asset::global-tax-refund', EquityOtherFreeReserves = 'equity::other-free-reserves', EquityCommonStock = 'equity::common-stock', ExpenseRepairMaintenance = 'expense::repair-maintenance', LiabilityGroupAndAssociates = 'liability::group-and-associates', OtherExpenseParkingAndTolls = 'other-expense::parking-and-tolls', OtherCurrentLiabilityCurrentPortionOfObligationsUnderFinanceLeases = 'other-current-liability::current-portion-of-obligations-under-finance-leases', LiabilityCreditCard = 'liability::credit-card', RevenueRevenueGeneral = 'revenue::revenue-general', OtherIncomeOtherOperatingIncome = 'other-income::other-operating-income', AssetInvestmentMortgageRealEstateLoans = 'asset::investment-mortgage-real-estate-loans', OtherCurrentLiabilityRentsInTrustLiability = 'other-current-liability::rents-in-trust-liability', RevenueIncome = 'revenue::income', AssetSavings = 'asset::savings', OtherExpenseOtherVehicleExpenses = 'other-expense::other-vehicle-expenses', AssetDeferredTax = 'asset::deferred-tax', EquityInvestmentGrants = 'equity::investment-grants', EquityAccumulatedOtherComprehensiveIncome = 'equity::accumulated-other-comprehensive-income', OtherExpense = 'other-expense', OtherCurrentLiabilityCurrentPortionEmployeeBenefitsObligations = 'other-current-liability::current-portion-employee-benefits-obligations', ExpenseAuto = 'expense::auto', AssetParticipatingInterests = 'asset::participating-interests', AssetCalledUpShareCapitalNotPaid = 'asset::called-up-share-capital-not-paid', AssetFurnitureAndFixtures = 'asset::furniture-and-fixtures', OtherCurrentLiabilityStaffAndRelatedLiabilityAccounts = 'other-current-liability::staff-and-related-liability-accounts', AssetOtherConsumables = 'asset::other-consumables', AssetMachineryAndEquipment = 'asset::machinery-and-equipment', OtherExpenseWashAndRoadServices = 'other-expense::wash-and-road-services', AssetEmployeeCashAdvances = 'asset::employee-cash-advances', ExpenseShippingFreightDelivery = 'expense::shipping-freight-delivery', AssetAccumulatedAmortization = 'asset::accumulated-amortization', OtherCurrentLiabilityProvisionsCurrentLiabilities = 'other-current-liability::provisions-current-liabilities', ExpenseGlobalTaxExpense = 'expense::global-tax-expense', ExpenseDuesSubscriptions = 'expense::dues-subscriptions', AssetOrganizationalCosts = 'asset::organizational-costs', OtherCurrentLiabilityTradeAndOtherPayables = 'other-current-liability::trade-and-other-payables', AssetFixedAsset = 'asset::fixed-asset', ExpenseAdvertisingPromotional = 'expense::advertising-promotional', ExpenseInsurance = 'expense::insurance', ExpenseSuppliesMaterials = 'expense::supplies-materials', OtherExpenseRentAndLease = 'other-expense::rent-and-lease', OtherExpenseDeferredTaxExpense = 'other-expense::deferred-tax-expense', EquityHealthcare = 'equity::healthcare', OtherExpenseOtherHomeOfficeExpenses = 'other-expense::other-home-office-expenses', AssetAssetsInCourseOfConstruction = 'asset::assets-in-course-of-construction', LiabilityBankLoans = 'liability::bank-loans', OtherIncome = 'other-income', EquityAccumulatedAdjustment = 'equity::accumulated-adjustment', OtherExpenseExchangeGainOrLoss = 'other-expense::exchange-gain-or-loss', AssetFixedAssetFurniture = 'asset::fixed-asset-furniture', AssetBank = 'asset::bank', ExpenseOtherMiscellaneousServiceCost = 'expense::other-miscellaneous-service-cost', LiabilityNotesPayable = 'liability::notes-payable', OtherCurrentLiabilityGlobalTaxSuspense = 'other-current-liability::global-tax-suspense', LiabilityLongTermDebit = 'liability::long-term-debit', ExpenseDistributionCosts = 'expense::distribution-costs', EquityRetainedEarnings = 'equity::retained-earnings', ExpenseManagementCompensation = 'expense::management-compensation', AssetNonCurrentAssets = 'asset::non-current-assets', LiabilityLongTermEmployeeBenefitObligations = 'liability::long-term-employee-benefit-obligations', OtherIncomeGainLossOnSaleOfFixedAssets = 'other-income::gain-loss-on-sale-of-fixed-assets', AssetLicenses = 'asset::licenses', AssetAssetsHeldForSale = 'asset::assets-held-for-sale', OtherExpenseAmortization = 'other-expense::amortization', RevenueDiscountsRefundsGiven = 'revenue::discounts-refunds-given', RevenueSavingsByTaxScheme = 'revenue::savings-by-tax-scheme', CostOfGoodsSoldCostOfLaborCos = 'cost-of-goods-sold::cost-of-labor-cos', AssetFixedAssetPhotoVideo = 'asset::fixed-asset-photo-video', EquityOwnersEquity = 'equity::owners-equity', EquityDividendDisbursed = 'equity::dividend-disbursed', OtherExpenseRepairsAndMaintenance = 'other-expense::repairs-and-maintenance', CostOfGoodsSoldSuppliesMaterialsCogs = 'cost-of-goods-sold::supplies-materials-cogs', AssetProvisionsCurrentAssets = 'asset::provisions-current-assets', ExpenseProjectStudiesSurveysAssessments = 'expense::project-studies-surveys-assessments', AssetGoodwill = 'asset::goodwill', ExpenseInterestPaid = 'expense::interest-paid', OtherCurrentLiabilityOtherCurrentLiabilities = 'other-current-liability::other-current-liabilities', ExpenseTravelExpensesSellingExpense = 'expense::travel-expenses-selling-expense', ExpenseOtherRentalCosts = 'expense::other-rental-costs', ExpenseTravel = 'expense::travel', OtherExpenseVehicle = 'other-expense::vehicle', CostOfGoodsSoldCostOfSales = 'cost-of-goods-sold::cost-of-sales', OtherIncomeOtherMiscellaneousIncome = 'other-income::other-miscellaneous-income', OtherExpenseMortgageInterest = 'other-expense::mortgage-interest', LiabilityProvisionsNonCurrentLiabilities = 'liability::provisions-non-current-liabilities', ExpensePromotionalMeals = 'expense::promotional-meals', OtherCurrentLiabilitySalesTaxPayable = 'other-current-liability::sales-tax-payable', RevenueSalesWholesale = 'revenue::sales-wholesale', Asset = 'asset', EquityCapitalReserves = 'equity::capital-reserves', RevenueNonProfitIncome = 'revenue::non-profit-income', AssetCapitalWip = 'asset::capital-wip', RevenueServiceFeeIncome = 'revenue::service-fee-income', AssetLoansToStockholders = 'asset::loans-to-stockholders', AssetOtherLongTermAssets = 'asset::other-long-term-assets', AssetInvestmentOther = 'asset::investment-other', OtherCurrentLiabilityPrepaidExpensesPayable = 'other-current-liability::prepaid-expenses-payable', AssetOtherCurrentAssets = 'asset::other-current-assets', ExpenseTaxesPaid = 'expense::taxes-paid', OtherCurrentLiability = 'other-current-liability', AssetExpenditureAuthorisationsAndLettersOfCredit = 'asset::expenditure-authorisations-and-letters-of-credit', OtherExpenseVehicleInsurance = 'other-expense::vehicle-insurance', LiabilityGovernmentAndOtherPublicAuthorities = 'liability::government-and-other-public-authorities', AssetOtherCurrentAsset = 'asset::other-current-asset', ExpenseEquipmentRental = 'expense::equipment-rental', OtherCurrentLiabilityCurrentLiabilities = 'other-current-liability::current-liabilities', EquityPreferredStock = 'equity::preferred-stock', OtherCurrentLiabilityFederalIncomeTaxPayable = 'other-current-liability::federal-income-tax-payable', AssetAccumulatedDepletion = 'asset::accumulated-depletion', RevenueSalesRetail = 'revenue::sales-retail', OtherIncomeGainLossOnSaleOfInvestments = 'other-income::gain-loss-on-sale-of-investments', AssetLoansToOthers = 'asset::loans-to-others', OtherCurrentLiabilityShortTermBorrowings = 'other-current-liability::short-term-borrowings', OtherCurrentLiabilityInterestPayables = 'other-current-liability::interest-payables', ExpenseEntertainment = 'expense::entertainment', AssetChecking = 'asset::checking', OtherExpenseGasAndFuel = 'other-expense::gas-and-fuel', OtherIncomeLossOnDisposalOfAssets = 'other-income::loss-on-disposal-of-assets', OtherExpenseVehicleLease = 'other-expense::vehicle-lease', AssetTrustAccounts = 'asset::trust-accounts', ExpenseFinanceCosts = 'expense::finance-costs', LiabilityProvisionForLiabilities = 'liability::provision-for-liabilities', AssetLeaseholdImprovements = 'asset::leasehold-improvements', ExpenseAppropriationsToDepreciation = 'expense::appropriations-to-depreciation', AssetOtherEarMarkedBankAccounts = 'asset::other-ear-marked-bank-accounts', Equity = 'equity', ExpenseCostOfLabor = 'expense::cost-of-labor', AssetDepletableAssets = 'asset::depletable-assets', OtherExpenseVehicleRegistration = 'other-expense::vehicle-registration', LiabilityLiabilitiesRelatedToAssetsHeldForSale = 'liability::liabilities-related-to-assets-held-for-sale', ExpenseOtherSellingExpenses = 'expense::other-selling-expenses', EquityShareApplicationMoneyPendingAllotment = 'equity::share-application-money-pending-allotment', AssetProvisionsNonCurrentAssets = 'asset::provisions-non-current-assets', AssetAllowanceForBadDebts = 'asset::allowance-for-bad-debts', AssetFixedAssetOtherToolsEquipment = 'asset::fixed-asset-other-tools-equipment', OtherExpenseExtraordinaryItems = 'other-expense::extraordinary-items', OtherExpenseUtilities = 'other-expense::utilities', AssetLoansToOfficers = 'asset::loans-to-officers', EquityCalledUpShareCapital = 'equity::called-up-share-capital', AssetIntangibleAssets = 'asset::intangible-assets', AssetAssetsAvailableForSale = 'asset::assets-available-for-sale', EquityPaidInCapitalOrSurplus = 'equity::paid-in-capital-or-surplus', AssetFixedAssetComputers = 'asset::fixed-asset-computers', AssetOtherAsset = 'asset::other-asset', AssetLongTermLoansAndAdvancesToRelatedParties = 'asset::long-term-loans-and-advances-to-related-parties', ExpenseUtilities = 'expense::utilities', LiabilityAccountsPayable = 'liability::accounts-payable', LiabilityOutstandingDuesOtherThanMicroSmallEnterprise = 'liability::outstanding-dues-other-than-micro-small-enterprise', OtherCurrentLiabilityLineOfCredit = 'other-current-liability::line-of-credit', LiabilityDebtsRelatedToParticipatingInterests = 'liability::debts-related-to-participating-interests', AssetIntangibleAssetsUnderDevelopment = 'asset::intangible-assets-under-development', ExpenseStaffCosts = 'expense::staff-costs', OtherCurrentLiabilityStateLocalIncomeTaxPayable = 'other-current-liability::state-local-income-tax-payable', OtherCurrentLiabilityDividendsPayable = 'other-current-liability::dividends-payable', EquityPersonalIncome = 'equity::personal-income', AssetProvisionsFixedAssets = 'asset::provisions-fixed-assets', OtherIncomeTaxExemptInterest = 'other-income::tax-exempt-interest', ExpenseExtraordinaryCharges = 'expense::extraordinary-charges', OtherExpenseMatCredit = 'other-expense::mat-credit', OtherExpenseOtherMiscellaneousExpense = 'other-expense::other-miscellaneous-expense', OtherCurrentLiabilityProvisionForWarrantyObligations = 'other-current-liability::provision-for-warranty-obligations', LiabilityDeferredTaxLiabilities = 'liability::deferred-tax-liabilities', OtherCurrentLiabilityLoanPayable = 'other-current-liability::loan-payable', OtherExpenseTaxRoundoffGainOrLoss = 'other-expense::tax-roundoff-gain-or-loss', AssetCashAndCashEquivalents = 'asset::cash-and-cash-equivalents', RevenueOtherPrimaryIncome = 'revenue::other-primary-income', AssetOtherLongTermInvestments = 'asset::other-long-term-investments', ExpenseOfficeGeneralAdministrativeExpenses = 'expense::office-general-administrative-expenses', EquityPartnerContributions = 'equity::partner-contributions', AssetGlobalTaxDeferred = 'asset::global-tax-deferred', OtherCurrentLiabilityInsurancePayable = 'other-current-liability::insurance-payable', OtherIncomeUnrealisedLossOnSecuritiesNetOfTax = 'other-income::unrealised-loss-on-securities-net-of-tax', EquityPartnerDistributions = 'equity::partner-distributions', EquityEstimatedTaxes = 'equity::estimated-taxes', EquityMoneyReceivedAgainstShareWarrants = 'equity::money-received-against-share-warrants', OtherExpenseDepreciation = 'other-expense::depreciation', LiabilityAccrualsAndDeferredIncome = 'liability::accruals-and-deferred-income', LiabilityLongTermBorrowings = 'liability::long-term-borrowings', AssetInvestmentTaxExemptSecurities = 'asset::investment-tax-exempt-securities', ExpensePayrollExpenses = 'expense::payroll-expenses', AssetLand = 'asset::land', AssetPrepaymentsAndAccruedIncome = 'asset::prepayments-and-accrued-income', LiabilityLongTermLiability = 'liability::long-term-liability', AssetDevelopmentCosts = 'asset::development-costs', AssetFixedAssetCopiers = 'asset::fixed-asset-copiers', AssetLongTermInvestments = 'asset::long-term-investments', EquityFunds = 'equity::funds', ExpenseCommissionsAndFees = 'expense::commissions-and-fees', AssetRentsHeldInTrust = 'asset::rents-held-in-trust', OtherExpenseVehicleLoanInterest = 'other-expense::vehicle-loan-interest', AssetOtherFixedAssets = 'asset::other-fixed-assets', LiabilityStaffAndRelatedLongTermLiabilityAccounts = 'liability::staff-and-related-long-term-liability-accounts', OtherCurrentLiabilityDirectDepositPayable = 'other-current-liability::direct-deposit-payable', OtherCurrentLiabilityAccruedLiabilities = 'other-current-liability::accrued-liabilities', AssetOtherIntangibleAssets = 'asset::other-intangible-assets', Expense = 'expense', ExpenseSundry = 'expense::sundry', OtherCurrentLiabilitySocialSecurityAgencies = 'other-current-liability::social-security-agencies', OtherIncomeOtherInvestmentIncome = 'other-income::other-investment-income', ExpenseBadDebts = 'expense::bad-debts', AssetCashOnHand = 'asset::cash-on-hand', ExpenseOfficeExpenses = 'expense::office-expenses', EquityShareCapital = 'equity::share-capital', OtherExpenseVehicleLoan = 'other-expense::vehicle-loan', ExpenseRentOrLeaseOfBuildings = 'expense::rent-or-lease-of-buildings', CostOfGoodsSoldShippingFreightDeliveryCos = 'cost-of-goods-sold::shipping-freight-delivery-cos', OtherCurrentLiabilityTrustAccountsLiabilities = 'other-current-liability::trust-accounts-liabilities', ExpenseCharitableContributions = 'expense::charitable-contributions', AssetInternalTransfers = 'asset::internal-transfers', RevenueOwnWorkCapitalized = 'revenue::own-work-capitalized', ExpenseExternalServices = 'expense::external-services', OtherCurrentLiabilityDutiesAndTaxes = 'other-current-liability::duties-and-taxes', ExpenseTravelMeals = 'expense::travel-meals', AssetOtherLongTermLoansAndAdvances = 'asset::other-long-term-loans-and-advances', AssetAccumulatedDepreciation = 'asset::accumulated-depreciation', AssetAccumulatedAmortizationOfOtherAssets = 'asset::accumulated-amortization-of-other-assets', ExpenseOtherCurrentOperatingCharges = 'expense::other-current-operating-charges', AssetLandAsset = 'asset::land-asset', AssetShortTermLoansAndAdvancesToRelatedParties = 'asset::short-term-loans-and-advances-to-related-parties', ExpenseLegalProfessionalFees = 'expense::legal-professional-fees', ExpenseOtherExternalServices = 'expense::other-external-services', ExpenseTravelExpensesGeneralAndAdminExpenses = 'expense::travel-expenses-general-and-admin-expenses', ExpenseOtherBusinessExpenses = 'expense::other-business-expenses', LiabilityAccruedVacationPayable = 'liability::accrued-vacation-payable', OtherExpenseExceptionalItems = 'other-expense::exceptional-items', LiabilityOtherLongTermProvisions = 'liability::other-long-term-provisions', RevenueSalesOfProductIncome = 'revenue::sales-of-product-income', CostOfGoodsSold = 'cost-of-goods-sold', OtherCurrentLiabilitySundryDebtorsAndCreditors = 'other-current-liability::sundry-debtors-and-creditors', AssetTradeAndOtherReceivables = 'asset::trade-and-other-receivables', AssetRetainage = 'asset::retainage', ExpenseAmortizationExpense = 'expense::amortization-expense', OtherExpensePenaltiesSettlements = 'other-expense::penalties-settlements' }
export const enum MessageReadStatus { Read = 'read', Delivered = 'delivered', Unsent = 'unsent', Failed = 'failed', Sent = 'sent' }
export const enum MessageContentType { Voice = 'voice', Video = 'video', Document = 'document', Gif = 'gif', Image = 'image', Location = 'location', Text = 'text', Sticker = 'sticker', Link = 'link', Html = 'html', File = 'file', Contact = 'contact', Audio = 'audio' }
export const enum MessageDeliveryStatus { Sent = 'sent', Read = 'read', Error = 'error', Undeliverable = 'undeliverable', Failed = 'failed', Pending = 'pending', Delivered = 'delivered' }
export const enum ReactionType { Like = 'like', Laugh = 'laugh', Sad = 'sad', Angry = 'angry', Wow = 'wow', Interested = 'interested', Dislike = 'dislike', Love = 'love', Bookmark = 'bookmark' }
export const enum SupportTicketPriority { Medium = 'medium', Low = 'low', High = 'high', Urgent = 'urgent', Immediate = 'immediate' }
export const enum IssueLifecycleStatus { Pending = 'pending', OnHold = 'on-hold', Resolved = 'resolved', Waiting = 'waiting', Closed = 'closed', Open = 'open', Cancelled = 'cancelled', InProgress = 'in-progress' }
export const enum SupportQueryType { Bug = 'bug', FeatureRequest = 'feature-request', Incident = 'incident', Problem = 'problem', Feedback = 'feedback', Task = 'task', Question = 'question' }
export const enum OrderStatus { Confirmed = 'confirmed', AwaitingPayment = 'awaiting-payment', Delivered = 'delivered', Completed = 'completed', Cancelled = 'cancelled', Refunded = 'refunded', AwaitingPickup = 'awaiting-pickup', Returned = 'returned', PartiallyFulfilled = 'partially-fulfilled', Shipped = 'shipped', Disputed = 'disputed', Pending = 'pending', Abandoned = 'abandoned', Failed = 'failed', Draft = 'draft', OnHold = 'on-hold', Processing = 'processing', AwaitingShipment = 'awaiting-shipment' }
export const enum DiscountType { Percentage = 'percentage', BuyOneGetOne = 'buy-one-get-one', UnknownDiscount = 'unknown-discount', ConditionalDiscount = 'conditional-discount', TieredDiscount = 'tiered-discount', FixedAmount = 'fixed-amount', VariableAmount = 'variable-amount', VariablePercentage = 'variable-percentage' }
export const enum ImageMimeType { ImageGif = 'image/gif', ImageSvgXml = 'image/svg+xml', ImageJpeg = 'image/jpeg', ImageWebp = 'image/webp', ImageTiff = 'image/tiff', ImageHeic = 'image/heic', ImagePng = 'image/png', ImageBmp = 'image/bmp' }
export const enum FulfillmentStatus { Pending = 'pending', Delivered = 'delivered', Failure = 'failure', InTransit = 'in-transit', Cancelled = 'cancelled', Returned = 'returned' }
export const enum OrderingCriteria { PriceDescending = 'price-descending', Rating = 'rating', Manual = 'manual', Alphabetical = 'alphabetical', CreationDate = 'creation-date', Popularity = 'popularity', PriceAscending = 'price-ascending', Relevance = 'relevance' }
export const enum ChatType { Group = 'group', Private = 'private', Public = 'public' }
export const enum ProductAvailabilityStatus { OutOfStock = 'out-of-stock', PreOrder = 'pre-order', InStock = 'in-stock', Discontinued = 'discontinued', BackOrder = 'back-order' }
export const enum ExpenseApprovalStatus { Cancelled = 'cancelled', Processed = 'processed', Approved = 'approved', Pending = 'pending', Reviewing = 'reviewing', Denied = 'denied', Reimbursed = 'reimbursed', New = 'new' }
export const enum FinancialChargeType { Commission = 'commission', InterestCharge = 'interest-charge', Other = 'other', ProcessingFee = 'processing-fee', ServiceCharge = 'service-charge', LateFee = 'late-fee', TransactionFee = 'transaction-fee' }
export const enum ItemAvailabilityStatus { Active = 'active', Inactive = 'inactive', OutOfStock = 'out-of-stock', Discontinued = 'discontinued' }
export const enum BillingStatus { Pending = 'pending', Overdue = 'overdue', PartiallyPaid = 'partially-paid', Draft = 'draft', Voided = 'voided', Deleted = 'deleted', Submitted = 'submitted', Authorised = 'authorised', Unpaid = 'unpaid', Paid = 'paid' }
export const enum FinancialAccountStatus { Suspended = 'suspended', Delinquent = 'delinquent', Frozen = 'frozen', Active = 'active', Inactive = 'inactive', Closed = 'closed', UnderReview = 'under-review' }
export const enum TransactionStatus { Cancelled = 'cancelled', Initiated = 'initiated', Succeeded = 'succeeded', InProgress = 'in-progress', Pending = 'pending', Failed = 'failed', Error = 'error' }
export const enum InvoiceAdjustmentType { Tax = 'tax', Shipping = 'shipping', Discount = 'discount', Tip = 'tip', Other = 'other' }
export const enum DataType { Binary = 'binary', Date = 'date', Object = 'object', Json = 'json', Timestamp = 'timestamp', Undefined = 'undefined', Custom = 'custom', Boolean = 'boolean', Number = 'number', Array = 'array', Null = 'null', String = 'string' }
export const enum EmploymentType { Contract = 'contract', Volunteer = 'volunteer', PartTime = 'part-time', Internship = 'internship', Permanent = 'permanent', Seasonal = 'seasonal', FullTime = 'full-time', Temporary = 'temporary', Freelance = 'freelance' }
export const enum TimeCycle { AdHoc = 'ad-hoc', Quarterly = 'quarterly', Biennially = 'biennially', Minutely = 'minutely', Biweekly = 'biweekly', SemiMonthly = 'semi-monthly', Secondly = 'secondly', Monthly = 'monthly', Weekly = 'weekly', Daily = 'daily', SemiAnnually = 'semi-annually', Triennially = 'triennially', Custom = 'custom', Hourly = 'hourly', Annually = 'annually' }
export const enum FinancialTrackingCategories { Customer = 'customer', None = 'none', Project = 'project', Class = 'class', CostCenter = 'cost-center', Division = 'division', Other = 'other', Employee = 'employee', Service = 'service', Vendor = 'vendor', Location = 'location', Product = 'product', Department = 'department' }
export const enum CreditNoteStatus { Draft = 'draft', Void = 'void', Disputed = 'disputed', Pending = 'pending', Cancelled = 'cancelled', Revised = 'revised', Applied = 'applied', Issued = 'issued', Completed = 'completed' }
export const enum PaymentTerm { CashOnDelivery = 'cash-on-delivery', Net90 = 'net-90', Installment = 'installment', Net = 'net', CashWithOrder = 'cash-with-order', CashBeforeShipment = 'cash-before-shipment', Net30 = 'net-30', DueOnReceipt = 'due-on-receipt', DueEndOfMonth = 'due-end-of-month', Net60 = 'net-60', CashInAdvance = 'cash-in-advance', DeferredPayment = 'deferred-payment', Prepayment = 'prepayment', Prepaid = 'prepaid', UponCompletion = 'upon-completion', Custom = 'custom' }
export const enum EmploymentAndCandidateStatus { OnLeave = 'on-leave', Other = 'other', Interviewing = 'interviewing', Active = 'active', Terminated = 'terminated', New = 'new', Hired = 'hired', NotSelected = 'not-selected', OfferExtended = 'offer-extended', Inactive = 'inactive', InReview = 'in-review' }
export const enum OrganizationalRole { Director = 'director', Manager = 'manager', Supervisor = 'supervisor', Contractor = 'contractor', Other = 'other', Employee = 'employee', Admin = 'admin' }
export const enum CampaignType { Display = 'display', Other = 'other', Email = 'email', SocialMedia = 'social-media', SearchEngine = 'search-engine' }
export const enum ContactAddressType { Home = 'home', Billing = 'billing', Other = 'other', Personal = 'personal', Shipping = 'shipping', Business = 'business', Temporary = 'temporary', Work = 'work' }
export const enum CustomerStatus { Suspended = 'suspended', Active = 'active', Pending = 'pending', Inactive = 'inactive', Archived = 'archived' }
export const enum SocialPlatform { Tumblr = 'tumblr', Skype = 'skype', Facebook = 'facebook', Pinterest = 'pinterest', Snapchat = 'snapchat', X = 'x', Linkedin = 'linkedin', Instagram = 'instagram', Tiktok = 'tiktok', Twitter = 'twitter', Youtube = 'youtube', Reddit = 'reddit', OtherSocialPlatform = 'other-social-platform' }
export const enum LeadLifecycleStatus { InProcess = 'in-process', Connected = 'connected', Converted = 'converted', BadTiming = 'bad-timing', Unqualified = 'unqualified', AttemptedToContact = 'attempted-to-contact', New = 'new', Lost = 'lost', Revisited = 'revisited', Open = 'open' }
export const enum ConversationStatus { Active = 'active', Deleted = 'deleted', Closed = 'closed', Archived = 'archived', Snoozed = 'snoozed' }
export const enum CommunicationRole { Bot = 'bot', Moderator = 'moderator', Admin = 'admin', Guest = 'guest', Member = 'member', Group = 'group', Owner = 'owner', Service = 'service', System = 'system', Assistant = 'assistant', User = 'user', Channel = 'channel' }
export const enum ParticipantEngagementStatus { Left = 'left', Guest = 'guest', Admin = 'admin', Active = 'active', Moderator = 'moderator', Inactive = 'inactive', Banned = 'banned' }
export const enum ItemEntityStatus { Inactive = 'inactive', Active = 'active', Deleted = 'deleted', Pending = 'pending', Archived = 'archived', Suspended = 'suspended', Completed = 'completed' }
export const enum Currency { CVE = 'cve', LKR = 'lkr', CZK = 'czk', KPW = 'kpw', KZT = 'kzt', CHF = 'chf', GNF = 'gnf', BAM = 'bam', GIP = 'gip', YER = 'yer', TZS = 'tzs', ERN = 'ern', GTQ = 'gtq', NZD = 'nzd', ARS = 'ars', RON = 'ron', SZL = 'szl', TMT = 'tmt', XOF = 'xof', MAD = 'mad', PLN = 'pln', SBD = 'sbd', MDL = 'mdl', MMK = 'mmk', PAB = 'pab', BTN = 'btn', PYG = 'pyg', TTD = 'ttd', NPR = 'npr', XCD = 'xcd', ZAR = 'zar', MXN = 'mxn', CRC = 'crc', DZD = 'dzd', MVR = 'mvr', RSD = 'rsd', SYP = 'syp', ZMW = 'zmw', MYR = 'myr', BSD = 'bsd', BGN = 'bgn', ETB = 'etb', AWG = 'awg', BDT = 'bdt', COP = 'cop', SHP = 'shp', BRL = 'brl', HRK = 'hrk', JPY = 'jpy', SLL = 'sll', UAH = 'uah', AED = 'aed', SSP = 'ssp', TND = 'tnd', LRD = 'lrd', SAR = 'sar', TRY = 'try', CUP = 'cup', KYD = 'kyd', BZD = 'bzd', KRW = 'krw', ILS = 'ils', KID = 'kid', LSL = 'lsl', DOP = 'dop', GEL = 'gel', BYN = 'byn', THB = 'thb', BIF = 'bif', CLP = 'clp', MWK = 'mwk', SEK = 'sek', AFN = 'afn', IQD = 'iqd', KMF = 'kmf', LBP = 'lbp', CDF = 'cdf', MKD = 'mkd', XDR = 'xdr', BOB = 'bob', ALL = 'all', KHR = 'khr', PGK = 'pgk', EGP = 'egp', HNL = 'hnl', KWD = 'kwd', TVD = 'tvd', FJD = 'fjd', WST = 'wst', XAF = 'xaf', AMD = 'amd', NGN = 'ngn', AOA = 'aoa', BMD = 'bmd', MZN = 'mzn', SCR = 'scr', SDG = 'sdg', SRD = 'srd', IMP = 'imp', CAD = 'cad', STN = 'stn', HKD = 'hkd', MRU = 'mru', TJS = 'tjs', BBD = 'bbd', DJF = 'djf', BND = 'bnd', CNY = 'cny', DKK = 'dkk', EUR = 'eur', KGS = 'kgs', RWF = 'rwf', JMD = 'jmd', TOP = 'top', TWD = 'twd', AZN = 'azn', ISK = 'isk', GMD = 'gmd', JOD = 'jod', IRR = 'irr', MNT = 'mnt', UGX = 'ugx', UZS = 'uzs', IDR = 'idr', ANG = 'ang', RUB = 'rub', SGD = 'sgd', OMR = 'omr', INR = 'inr', LAK = 'lak', FOK = 'fok', VUV = 'vuv', KES = 'kes', LYD = 'lyd', QAR = 'qar', PEN = 'pen', CUC = 'cuc', GGP = 'ggp', MOP = 'mop', HTG = 'htg', MGA = 'mga', PKR = 'pkr', GHS = 'ghs', SOS = 'sos', VND = 'vnd', HUF = 'huf', NIO = 'nio', UYU = 'uyu', GYD = 'gyd', PHP = 'php', USD = 'usd', XPF = 'xpf', NAD = 'nad', BHD = 'bhd', GBP = 'gbp', JEP = 'jep', MUR = 'mur', AUD = 'aud', NOK = 'nok', ZWL = 'zwl', BWP = 'bwp', FKP = 'fkp', VES = 'ves' }
export const enum CustomerEligibilityStatus { VipCustomers = 'vip-customers', SpecificConditions = 'specific-conditions', Other = 'other', ReturningCustomers = 'returning-customers', AllCustomers = 'all-customers', NewCustomers = 'new-customers' }
export const enum LifecycleStatus { Issued = 'issued', Suspended = 'suspended', Active = 'active', Cancelled = 'cancelled', Redeemed = 'redeemed', Expired = 'expired' }
export const enum PaymentMethod { Cryptocurrency = 'cryptocurrency', Paypal = 'paypal', BankTransfer = 'bank-transfer', Cash = 'cash', CreditCard = 'credit-card', CashOnDelivery = 'cash-on-delivery', MobilePayment = 'mobile-payment', Other = 'other', Check = 'check', DebitCard = 'debit-card', MobileWallet = 'mobile-wallet' }
export const enum FinancialTransactionStatus { Cancelled = 'cancelled', Pending = 'pending', SettlementInProgress = 'settlement-in-progress', Disputed = 'disputed', Cleared = 'cleared', Authorized = 'authorized', Refunded = 'refunded', Failed = 'failed' }
export const enum AuditOpinionType { Qualified = 'qualified', Disclaimer = 'disclaimer', Adverse = 'adverse', Unqualified = 'unqualified' }
export const enum InventoryStorageType { Other = 'other', RetailStore = 'retail-store', DropShipper = 'drop-shipper', Consignment = 'consignment', Warehouse = 'warehouse', DistributionCenter = 'distribution-center', OnlineMarketplace = 'online-marketplace' }
export const enum ItemCondition { Refurbished = 'refurbished', New = 'new', LikeNew = 'like-new', OpenBox = 'open-box', Damaged = 'damaged', Used = 'used' }
export const enum TransactionType { Charge = 'charge', Transfer = 'transfer', Fee = 'fee', Deposit = 'deposit', Payment = 'payment', Withdrawal = 'withdrawal', Refund = 'refund', Adjustment = 'adjustment' }
export const enum VisibilityScope { Internal = 'internal', Global = 'global', App = 'app', Private = 'private', Web = 'web' }
export const enum PaymentStatus { Processing = 'processing', Adjusted = 'adjusted', Succeeded = 'succeeded', Pending = 'pending', PartiallyRefunded = 'partially-refunded', Error = 'error', Failed = 'failed', Refunded = 'refunded', Disputed = 'disputed', Overdue = 'overdue', Partial = 'partial', Voided = 'voided', Cancelled = 'cancelled', Submitted = 'submitted', Draft = 'draft', Authorized = 'authorized', Paid = 'paid', Deleted = 'deleted' }
export const enum EntityLifecycleStatus { Archived = 'archived', Draft = 'draft', Deleted = 'deleted', Active = 'active', Preorder = 'preorder', Inactive = 'inactive', Scheduled = 'scheduled' }
export const enum TransactionChannel { Online = 'online', InPerson = 'in-person', Atm = 'atm', Mail = 'mail', Telephone = 'telephone', Other = 'other', Mobile = 'mobile', BankBranch = 'bank-branch' }
export const enum FinancialDisputeStatus { Lost = 'lost', UnderReview = 'under-review', NeedsResponse = 'needs-response', ChargeRefunded = 'charge-refunded', Escalated = 'escalated', Closed = 'closed', AwaitingEvidence = 'awaiting-evidence', Won = 'won' }
export const enum ContentVisibility { Private = 'private', Shared = 'shared', Internal = 'internal', Protected = 'protected', Public = 'public' }
export const enum DeviceUsageType { Industrial = 'industrial', Personal = 'personal', Educational = 'educational', Other = 'other', Healthcare = 'healthcare', Home = 'home', Business = 'business' }
export const enum EntityCategory { Link = 'link', Person = 'person', Event = 'event', Owner = 'owner', User = 'user', Task = 'task', Other = 'other', Message = 'message', Project = 'project', Document = 'document' }
export const enum GenderIdentity { Female = 'female', Other = 'other', PreferNotToSay = 'prefer-not-to-say', Male = 'male' }
export const enum CommunicationMethod { VideoCall = 'video-call', Phone = 'phone', Mail = 'mail', Sms = 'sms', Other = 'other', Email = 'email', Text = 'text', SocialMedia = 'social-media', InstantMessage = 'instant-message', PushNotification = 'push-notification', InPerson = 'in-person' }
export const enum FinancialTransactionType { Deposit = 'deposit', Dividend = 'dividend', Chargeback = 'chargeback', Withdrawal = 'withdrawal', Receive = 'receive', ReceiveOverpayment = 'receive-overpayment', SpendPrepayment = 'spend-prepayment', Interest = 'interest', SpendOverpayment = 'spend-overpayment', Refund = 'refund', Transfer = 'transfer', Payment = 'payment', Charge = 'charge', Sale = 'sale', Other = 'other', Fee = 'fee', Spend = 'spend', Adjustment = 'adjustment', ReceivePrepayment = 'receive-prepayment' }
export const enum EmailCategoryType { Spam = 'spam', Governmental = 'governmental', Educational = 'educational', Business = 'business', Personal = 'personal', Other = 'other', Transactional = 'transactional', Promotional = 'promotional' }
export const enum UniversalIdentifierType { Number = 'number', Url = 'url', Email = 'email', String = 'string', Uuid = 'uuid' }
export const enum AccessControlModel { Mac = 'mac', None = 'none', Rbac = 'rbac', Abac = 'abac', Custom = 'custom', Dac = 'dac' }
export const enum ParticipantType { Team = 'team', ExternalParticipant = 'external-participant', User = 'user', Group = 'group', Organization = 'organization' }
export const enum PriorityLevel { Elevated = 'elevated', Urgent = 'urgent', Low = 'low', High = 'high', Medium = 'medium' }
export const enum TaskStatus { Blocked = 'blocked', OnHold = 'on-hold', Cancelled = 'cancelled', Done = 'done', Todo = 'todo', InProgress = 'in-progress' }
export const enum UserStatus { Pending = 'pending', Active = 'active', Banned = 'banned', Deleted = 'deleted', Suspended = 'suspended', WaitListed = 'wait-listed', Verified = 'verified', Inactive = 'inactive', Archived = 'archived' }
export const enum PromotionType { Percentage = 'percentage', FixedAmount = 'fixed-amount', Other = 'other', RewardPoints = 'reward-points', BuyOneGetOne = 'buy-one-get-one', FreeShipping = 'free-shipping' }
export const enum MimeType { ImageGif = 'image/gif', ImageJpeg = 'image/jpeg', ImagePng = 'image/png', ImageWebp = 'image/webp', ImageSvgXml = 'image/svg+xml' }
export const enum PrerequisiteRangeType { ShippingPrice = 'shipping-price', Quantity = 'quantity', Subtotal = 'subtotal' }
export const enum TaxType { Inclusive = 'inclusive', Additive = 'additive', Variable = 'variable' }
export const enum ModifierType { Text = 'text', List = 'list' }
export const enum CardType { UnknownCard = 'unknown-card', Debit = 'debit', Credit = 'credit' }
export const enum PrepaidType { NotPrepaid = 'not-prepaid', UnknownPrepaid = 'unknown-prepaid', Prepaid = 'prepaid' }
export const enum EntryMethod { Emv = 'emv', OnFile = 'on-file', Swiped = 'swiped', Contactless = 'contactless', Keyed = 'keyed' }
export const enum CvvStatus { Rejected = 'rejected', NotChecked = 'not-checked', Accepted = 'accepted' }
export const enum AvcStatus { NotChecked = 'not-checked', Rejected = 'rejected', Accepted = 'accepted' }
export const enum CreditType { Goodwill = 'goodwill', Supplier = 'supplier', Prepayment = 'prepayment', Customer = 'customer', Overpayment = 'overpayment' }
export const enum CallDirection { Conference = 'conference', Unknown = 'unknown', Inbound = 'inbound', Outbound = 'outbound' }
export const enum SpeakerRole { Attendee = 'attendee', Invitee = 'invitee' }
export const enum FileType { Folder = 'folder', File = 'file', Url = 'url' }
export const enum AiToolChoiceType { Auto = 'auto', Any = 'any', Tool = 'tool', None = 'none' }
export const enum ImageType { Base64 = 'base64' }
export const enum ResponseFormatType { JsonSchema = 'json-schema', JsonObject = 'json-object', Text = 'text' }
export const enum ToolCallType { Function = 'function' }
export const enum AiMessagesContentType { Text = 'text', Image = 'image', ToolResult = 'tool-result', ToolUse = 'tool-use' }
export const enum AiRole { Tool = 'tool', User = 'user', Assistant = 'assistant' }
export const enum JsonSchemaType { Function = 'function' }
export const enum EventStatus { Confirmed = 'confirmed', Cancelled = 'cancelled', Tentative = 'tentative' }
export const enum EventVisibility { Private = 'private', Confidential = 'confidential', Public = 'public' }
export const enum EventReminderAction { Popup = 'popup', Email = 'email' }
export const enum EventRuleType { AddDates = 'add-dates', ExcludeDates = 'exclude-dates', Repeat = 'repeat', Exclude = 'exclude' }
export const enum EventFrequency { Yearly = 'yearly', Daily = 'daily', Weekly = 'weekly', Monthly = 'monthly' }
