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
export interface Conversations { type?: ChatType;
    id?: string;
    commonModel?: string;
    lastMessage?: Messages;
    metadata?: string;
    participants?: Participants[];
    status?: ConversationStatus;
    updatedAt?: string;
    lastReadMessageId?: string;
    unreadCount?: number;
    createdAt?: string;
    modifyToken?: string;
    title?: string;
    isPinned?: boolean;
    messages?: Messages[] }
export interface Messages { modifyToken?: string;
    historyId?: string;
    updatedAt?: string;
    reference?: Entity;
    chatId?: string;
    recipientEmails?: string[];
    commonModel?: string;
    type?: MessageContentType;
    cc?: string;
    tags?: KeyValues[];
    timestamp?: string;
    deleted?: boolean;
    trackingSettings?: KeyValues[];
    threadId?: string;
    templateId?: string;
    metadata?: Metadata[];
    content?: string;
    createdAt?: string;
    attachments?: Attachments[];
    senderId?: string;
    id?: string;
    replyToMessageId?: string;
    senderEmail?: string;
    active?: boolean;
    reactions?: Reactions[];
    priority?: PriorityLevel;
    bcc?: string;
    readStatus?: MessageReadStatus;
    receiverId?: string;
    subject?: string;
    deliveryStatus?: MessageDeliveryStatus }
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
export interface Tickets { type?: SupportQueryType;
    tags?: string[];
    modifyToken?: string;
    title?: string;
    description?: string;
    createdAt?: string;
    commonModel?: string;
    priority?: SupportTicketPriority;
    updatedAt?: string;
    comments?: Comments[];
    notes?: Notes[];
    customFields?: CustomAttributes[];
    attachments?: Attachments[];
    id?: string;
    status?: IssueLifecycleStatus;
    assignee?: Users;
    reporter?: Contacts;
    dueDate?: string }
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
    code?: string;
    commonModel?: string;
    socialProfiles?: SocialProfiles[];
    isActive?: boolean;
    firstName?: string;
    emails?: Emails[];
    customFields?: CustomAttributes[];
    updatedAt?: string;
    modifyToken?: string;
    id?: string;
    notes?: Notes;
    address?: Addresses;
    tags?: string[];
    websites?: string[];
    birthday?: string;
    defaultEmail?: string;
    lastName?: string;
    createdAt?: string;
    company?: string;
    defaultPhone?: string;
    addresses?: Addresses[];
    note?: string;
    phones?: Phones[];
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
export interface Emails { type?: EmailCategoryType;
    commonModel?: string;
    email?: string }
export interface Phones { commonModel?: string;
    country?: string;
    countryCode?: string;
    phone?: string;
    type?: DeviceUsageType }
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
export interface Comments { author?: Users;
    parentId?: string;
    commonModel?: string;
    text?: string;
    updatedAt?: string;
    deleted?: boolean;
    commentId?: string;
    createdAt?: string;
    flagged?: boolean;
    likes?: number;
    metadata?: Metadata[];
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
export interface Notes { modifyToken?: string;
    createdAt?: string;
    id?: string;
    lastAccessed?: string;
    commonModel?: string;
    updatedAt?: string;
    priority?: PriorityLevel;
    title?: string;
    sharedWith?: Users[];
    content?: string;
    color?: string;
    tags?: string[];
    reminder?: string;
    author?: Users;
    attachments?: Attachments[];
    metadata?: string[];
    visibility?: ContentVisibility }
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
    dunsNumber?: string }
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
export interface PerformanceMetrics { conversionRate?: number;
    commonModel?: string;
    clicks?: number;
    impressions?: number;
    spend?: number;
    costPerConversion?: number;
    costPerClick?: number;
    returnOnInvestment?: number;
    conversions?: number }
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
export const enum CustomerEligibility { SpecificCustomerGroups = 'specific-customer-groups', SpecificCustomers = 'specific-customers', All = 'all' }
export const enum Format { Xml = 'xml', Json = 'json' }
export const enum Gender { Other = 'other', Female = 'female', Male = 'male', PreferNotToSay = 'prefer not to say' }
export const enum ChannelAvailability { AllChannels = 'all-channels', InStore = 'in-store', Online = 'online', InApp = 'in-app' }
export const enum SkuValidation { None = 'none', LocalUnique = 'local-unique', GlobalUnique = 'global-unique' }
export const enum CustomerSelection { All = 'all', Prerequisite = 'prerequisite' }
export const enum AccountType { AssetOtherIntangibleAssets = 'asset::other-intangible-assets', OtherIncomeOtherOperatingIncome = 'other-income::other-operating-income', AssetTradeAndOtherReceivables = 'asset::trade-and-other-receivables', AssetPrepaymentsAndAccruedIncome = 'asset::prepayments-and-accrued-income', AssetGlobalTaxRefund = 'asset::global-tax-refund', EquityCalledUpShareCapital = 'equity::called-up-share-capital', OtherCurrentLiabilityCurrentPortionEmployeeBenefitsObligations = 'other-current-liability::current-portion-employee-benefits-obligations', AssetAccumulatedDepletion = 'asset::accumulated-depletion', OtherCurrentLiabilityCurrentTaxLiability = 'other-current-liability::current-tax-liability', OtherExpenseParkingAndTolls = 'other-expense::parking-and-tolls', ExpenseOtherSellingExpenses = 'expense::other-selling-expenses', OtherExpenseRepairsAndMaintenance = 'other-expense::repairs-and-maintenance', ExpenseShippingAndDeliveryExpense = 'expense::shipping-and-delivery-expense', OtherIncomeLossOnDisposalOfAssets = 'other-income::loss-on-disposal-of-assets', AssetLand = 'asset::land', LiabilityAccountsPayable = 'liability::accounts-payable', EquityInvestmentGrants = 'equity::investment-grants', CostOfGoodsSoldSuppliesMaterialsCogs = 'cost-of-goods-sold::supplies-materials-cogs', LiabilityAccrualsAndDeferredIncome = 'liability::accruals-and-deferred-income', OtherCurrentLiabilitySalesTaxPayable = 'other-current-liability::sales-tax-payable', RevenueSavingsByTaxScheme = 'revenue::savings-by-tax-scheme', LiabilityLongTermEmployeeBenefitObligations = 'liability::long-term-employee-benefit-obligations', OtherCurrentLiabilityAccruedLiabilities = 'other-current-liability::accrued-liabilities', AssetLoansToOfficers = 'asset::loans-to-officers', LiabilityDebtsRelatedToParticipatingInterests = 'liability::debts-related-to-participating-interests', AssetFixedAssetPhotoVideo = 'asset::fixed-asset-photo-video', OtherExpenseMortgageInterest = 'other-expense::mortgage-interest', RevenueRevenueGeneral = 'revenue::revenue-general', AssetDeferredTax = 'asset::deferred-tax', ExpenseAmortizationExpense = 'expense::amortization-expense', OtherCurrentLiabilityShortTermBorrowings = 'other-current-liability::short-term-borrowings', OtherExpenseHomeOffice = 'other-expense::home-office', ExpenseTravelExpensesGeneralAndAdminExpenses = 'expense::travel-expenses-general-and-admin-expenses', AssetRetainage = 'asset::retainage', LiabilityOtherLongTermLiabilities = 'liability::other-long-term-liabilities', ExpenseSuppliesMaterials = 'expense::supplies-materials', AssetLandAsset = 'asset::land-asset', OtherExpenseOtherVehicleExpenses = 'other-expense::other-vehicle-expenses', AssetFixedAssetFurniture = 'asset::fixed-asset-furniture', ExpensePromotionalMeals = 'expense::promotional-meals', LiabilityStaffAndRelatedLongTermLiabilityAccounts = 'liability::staff-and-related-long-term-liability-accounts', CostOfGoodsSoldShippingFreightDeliveryCos = 'cost-of-goods-sold::shipping-freight-delivery-cos', LiabilityNotesPayable = 'liability::notes-payable', OtherIncomeGainLossOnSaleOfFixedAssets = 'other-income::gain-loss-on-sale-of-fixed-assets', OtherExpenseMatCredit = 'other-expense::mat-credit', LiabilityGovernmentAndOtherPublicAuthorities = 'liability::government-and-other-public-authorities', ExpenseEquipmentRental = 'expense::equipment-rental', ExpenseOtherBusinessExpenses = 'expense::other-business-expenses', EquityPartnerDistributions = 'equity::partner-distributions', EquityPreferredStock = 'equity::preferred-stock', EquityCapitalReserves = 'equity::capital-reserves', AssetLongTermInvestments = 'asset::long-term-investments', AssetChecking = 'asset::checking', OtherCurrentLiabilityCurrentLiabilities = 'other-current-liability::current-liabilities', ExpenseEntertainment = 'expense::entertainment', OtherCurrentLiabilityCurrentPortionOfObligationsUnderFinanceLeases = 'other-current-liability::current-portion-of-obligations-under-finance-leases', OtherCurrentLiabilityGlobalTaxPayable = 'other-current-liability::global-tax-payable', OtherIncomeInterestEarned = 'other-income::interest-earned', RevenueNonProfitIncome = 'revenue::non-profit-income', OtherExpenseVehicleLoan = 'other-expense::vehicle-loan', CostOfGoodsSoldFreightAndDeliveryCost = 'cost-of-goods-sold::freight-and-delivery-cost', ExpenseProjectStudiesSurveysAssessments = 'expense::project-studies-surveys-assessments', OtherCurrentLiabilityLoanPayable = 'other-current-liability::loan-payable', EquityTreasuryStock = 'equity::treasury-stock', AssetExpenditureAuthorisationsAndLettersOfCredit = 'asset::expenditure-authorisations-and-letters-of-credit', AssetCashOnHand = 'asset::cash-on-hand', LiabilityProvisionForLiabilities = 'liability::provision-for-liabilities', AssetCumulativeDepreciationOnIntangibleAssets = 'asset::cumulative-depreciation-on-intangible-assets', CostOfGoodsSold = 'cost-of-goods-sold', ExpenseDistributionCosts = 'expense::distribution-costs', AssetOtherEarMarkedBankAccounts = 'asset::other-ear-marked-bank-accounts', LiabilityOutstandingDuesMicroSmallEnterprise = 'liability::outstanding-dues-micro-small-enterprise', ExpenseBorrowingCost = 'expense::borrowing-cost', OtherExpenseDeferredTaxExpense = 'other-expense::deferred-tax-expense', AssetOtherCurrentAsset = 'asset::other-current-asset', OtherCurrentLiabilityProvisionForWarrantyObligations = 'other-current-liability::provision-for-warranty-obligations', OtherExpenseOtherHomeOfficeExpenses = 'other-expense::other-home-office-expenses', ExpenseLossOnDiscontinuedOperationsNetOfTax = 'expense::loss-on-discontinued-operations-net-of-tax', ExpenseTravelExpensesSellingExpense = 'expense::travel-expenses-selling-expense', LiabilityDeferredTaxLiabilities = 'liability::deferred-tax-liabilities', AssetInvestmentTaxExemptSecurities = 'asset::investment-tax-exempt-securities', AssetAllowanceForBadDebts = 'asset::allowance-for-bad-debts', EquityRetainedEarnings = 'equity::retained-earnings', EquityHealthcare = 'equity::healthcare', AssetDepletableAssets = 'asset::depletable-assets', AssetDevelopmentCosts = 'asset::development-costs', OtherExpenseOtherMiscellaneousExpense = 'other-expense::other-miscellaneous-expense', EquityShareCapital = 'equity::share-capital', EquityOwnersEquity = 'equity::owners-equity', RevenueCashReceiptIncome = 'revenue::cash-receipt-income', AssetMachineryAndEquipment = 'asset::machinery-and-equipment', AssetOtherFixedAssets = 'asset::other-fixed-assets', OtherCurrentLiabilityGlobalTaxSuspense = 'other-current-liability::global-tax-suspense', EquityShareApplicationMoneyPendingAllotment = 'equity::share-application-money-pending-allotment', OtherCurrentLiabilityDirectDepositPayable = 'other-current-liability::direct-deposit-payable', EquityPersonalIncome = 'equity::personal-income', AssetOtherLongTermInvestments = 'asset::other-long-term-investments', ExpenseGlobalTaxExpense = 'expense::global-tax-expense', OtherExpenseVehicleInsurance = 'other-expense::vehicle-insurance', OtherIncomeOtherMiscellaneousIncome = 'other-income::other-miscellaneous-income', OtherIncome = 'other-income', OtherCurrentLiabilityFederalIncomeTaxPayable = 'other-current-liability::federal-income-tax-payable', EquityAccumulatedOtherComprehensiveIncome = 'equity::accumulated-other-comprehensive-income', OtherExpenseUtilities = 'other-expense::utilities', Income = 'income', OtherIncomeTaxExemptInterest = 'other-income::tax-exempt-interest', ExpenseAuto = 'expense::auto', OtherIncomeDividendIncome = 'other-income::dividend-income', RevenueOperatingGrants = 'revenue::operating-grants', ExpenseOtherMiscellaneousServiceCost = 'expense::other-miscellaneous-service-cost', ExpenseCharitableContributions = 'expense::charitable-contributions', LiabilityGroupAndAssociates = 'liability::group-and-associates', ExpenseOtherExternalServices = 'expense::other-external-services', AssetInvestmentMortgageRealEstateLoans = 'asset::investment-mortgage-real-estate-loans', LiabilityProvisionsNonCurrentLiabilities = 'liability::provisions-non-current-liabilities', AssetSavings = 'asset::savings', ExpenseExternalServices = 'expense::external-services', OtherIncomeOtherInvestmentIncome = 'other-income::other-investment-income', OtherIncomeUnrealisedLossOnSecuritiesNetOfTax = 'other-income::unrealised-loss-on-securities-net-of-tax', LiabilityLongTermBorrowings = 'liability::long-term-borrowings', RevenueOwnWorkCapitalized = 'revenue::own-work-capitalized', OtherCurrentLiabilityStateLocalIncomeTaxPayable = 'other-current-liability::state-local-income-tax-payable', CostOfGoodsSoldEquipmentRentalCos = 'cost-of-goods-sold::equipment-rental-cos', AssetPrepaidExpenses = 'asset::prepaid-expenses', ExpenseDuesSubscriptions = 'expense::dues-subscriptions', RevenueUnappliedCashPaymentIncome = 'revenue::unapplied-cash-payment-income', Equity = 'equity', AssetBuildings = 'asset::buildings', OtherExpenseIncomeTaxOtherExpense = 'other-expense::income-tax-other-expense', AssetCalledUpShareCapitalNotPaid = 'asset::called-up-share-capital-not-paid', EquityOpeningBalanceEquity = 'equity::opening-balance-equity', OtherExpenseGasAndFuel = 'other-expense::gas-and-fuel', ExpenseInterestPaid = 'expense::interest-paid', ExpenseEntertainmentMeals = 'expense::entertainment-meals', OtherCurrentLiabilityTrustAccountsLiabilities = 'other-current-liability::trust-accounts-liabilities', ExpenseTravel = 'expense::travel', AssetFixedAssetCopiers = 'asset::fixed-asset-copiers', ExpenseCostOfLabor = 'expense::cost-of-labor', AssetAvailableForSaleFinancialAssets = 'asset::available-for-sale-financial-assets', AssetGoodwill = 'asset::goodwill', AssetLongTermLoansAndAdvancesToRelatedParties = 'asset::long-term-loans-and-advances-to-related-parties', AssetShortTermInvestmentsInRelatedParties = 'asset::short-term-investments-in-related-parties', LiabilityOtherLongTermProvisions = 'liability::other-long-term-provisions', OtherExpenseHomeOwnerRentalInsurance = 'other-expense::home-owner-rental-insurance', OtherCurrentLiabilitySocialSecurityAgencies = 'other-current-liability::social-security-agencies', AssetBalWithGovtAuthorities = 'asset::bal-with-govt-authorities', AssetFixedAssetComputers = 'asset::fixed-asset-computers', OtherCurrentLiabilityInsurancePayable = 'other-current-liability::insurance-payable', AssetFurnitureAndFixtures = 'asset::furniture-and-fixtures', AssetLoansToStockholders = 'asset::loans-to-stockholders', ExpenseBadDebts = 'expense::bad-debts', ExpenseFinanceCosts = 'expense::finance-costs', AssetLicenses = 'asset::licenses', AccountsReceivable = 'accounts-receivable', AssetParticipatingInterests = 'asset::participating-interests', AssetFixedAssetSoftware = 'asset::fixed-asset-software', AssetInvestmentOther = 'asset::investment-other', AssetLoansToOthers = 'asset::loans-to-others', CostOfGoodsSoldOtherCostsOfServiceCos = 'cost-of-goods-sold::other-costs-of-service-cos', ExpenseInsurance = 'expense::insurance', ExpenseLegalProfessionalFees = 'expense::legal-professional-fees', CostOfGoodsSoldCostOfSales = 'cost-of-goods-sold::cost-of-sales', ExpenseManagementCompensation = 'expense::management-compensation', ExpenseOfficeExpenses = 'expense::office-expenses', LiabilityAccruedLongTermLiabilities = 'liability::accrued-long-term-liabilities', LiabilityCreditCard = 'liability::credit-card', AssetOtherAsset = 'asset::other-asset', LiabilityObligationsUnderFinanceLeases = 'liability::obligations-under-finance-leases', Liability = 'liability', ExpenseExtraordinaryCharges = 'expense::extraordinary-charges', OtherCurrentLiabilityInterestPayables = 'other-current-liability::interest-payables', OtherCurrentLiabilityTradeAndOtherPayables = 'other-current-liability::trade-and-other-payables', AssetFixedAsset = 'asset::fixed-asset', OtherExpenseDepletion = 'other-expense::depletion', OtherExpensePriorPeriodItems = 'other-expense::prior-period-items', OtherExpenseRentAndLease = 'other-expense::rent-and-lease', OtherExpenseVehicleLoanInterest = 'other-expense::vehicle-loan-interest', AssetIntangibleAssets = 'asset::intangible-assets', AssetProvisionsFixedAssets = 'asset::provisions-fixed-assets', AssetOrganizationalCosts = 'asset::organizational-costs', AssetInvestmentUsGovernmentObligations = 'asset::investment-us-government-obligations', OtherCurrentLiability = 'other-current-liability', AssetAccumulatedAmortization = 'asset::accumulated-amortization', OtherExpenseAmortization = 'other-expense::amortization', LiabilityShareholderNotesPayable = 'liability::shareholder-notes-payable', OtherCurrentLiabilityPrepaidExpensesPayable = 'other-current-liability::prepaid-expenses-payable', ExpenseTaxesPaid = 'expense::taxes-paid', RevenueSalesRetail = 'revenue::sales-retail', AssetAccumulatedAmortizationOfOtherAssets = 'asset::accumulated-amortization-of-other-assets', EquityPartnerContributions = 'equity::partner-contributions', AssetFixedAssetPhone = 'asset::fixed-asset-phone', AssetLeaseBuyout = 'asset::lease-buyout', EquityAccumulatedAdjustment = 'equity::accumulated-adjustment', ExpenseOfficeGeneralAdministrativeExpenses = 'expense::office-general-administrative-expenses', ExpensePurchasesRebates = 'expense::purchases-rebates', OtherExpenseTaxRoundoffGainOrLoss = 'other-expense::tax-roundoff-gain-or-loss', AssetAssetsInCourseOfConstruction = 'asset::assets-in-course-of-construction', AssetInventory = 'asset::inventory', ExpenseTravelMeals = 'expense::travel-meals', RevenueOtherPrimaryIncome = 'revenue::other-primary-income', EquityOtherFreeReserves = 'equity::other-free-reserves', RevenueSalesWholesale = 'revenue::sales-wholesale', ExpenseRepairMaintenance = 'expense::repair-maintenance', OtherExpenseExceptionalItems = 'other-expense::exceptional-items', RevenueDiscountsRefundsGiven = 'revenue::discounts-refunds-given', ExpenseAdvertisingPromotional = 'expense::advertising-promotional', AssetRentsHeldInTrust = 'asset::rents-held-in-trust', ExpenseStaffCosts = 'expense::staff-costs', OtherExpenseVehicleLease = 'other-expense::vehicle-lease', ExpenseShippingFreightDelivery = 'expense::shipping-freight-delivery', AssetShortTermLoansAndAdvancesToRelatedParties = 'asset::short-term-loans-and-advances-to-related-parties', LiabilityLongTermLiability = 'liability::long-term-liability', OtherCurrentLiabilityLineOfCredit = 'other-current-liability::line-of-credit', OtherCurrentLiabilityPayrollClearing = 'other-current-liability::payroll-clearing', OtherExpensePenaltiesSettlements = 'other-expense::penalties-settlements', AssetCapitalWip = 'asset::capital-wip', OtherIncomeGainLossOnSaleOfInvestments = 'other-income::gain-loss-on-sale-of-investments', RevenueSalesOfProductIncome = 'revenue::sales-of-product-income', EquityPersonalExpense = 'equity::personal-expense', ExpenseAppropriationsToDepreciation = 'expense::appropriations-to-depreciation', EquityPartnersEquity = 'equity::partners-equity', EquityFunds = 'equity::funds', ExpenseOtherCurrentOperatingCharges = 'expense::other-current-operating-charges', ExpenseUtilities = 'expense::utilities', ExpenseRentOrLeaseOfBuildings = 'expense::rent-or-lease-of-buildings', OtherCurrentLiabilityStaffAndRelatedLiabilityAccounts = 'other-current-liability::staff-and-related-liability-accounts', OtherCurrentLiabilityDividendsPayable = 'other-current-liability::dividends-payable', ExpenseBankCharges = 'expense::bank-charges', AssetFixedAssetOtherToolsEquipment = 'asset::fixed-asset-other-tools-equipment', AssetLeaseholdImprovements = 'asset::leasehold-improvements', ExpenseSundry = 'expense::sundry', OtherCurrentLiabilityDutiesAndTaxes = 'other-current-liability::duties-and-taxes', AssetAssetsHeldForSale = 'asset::assets-held-for-sale', EquityEstimatedTaxes = 'equity::estimated-taxes', OtherExpenseVehicleRepairs = 'other-expense::vehicle-repairs', LiabilityBankLoans = 'liability::bank-loans', AssetAssetsAvailableForSale = 'asset::assets-available-for-sale', EquityDividendDisbursed = 'equity::dividend-disbursed', AssetUndepositedFunds = 'asset::undeposited-funds', OtherExpenseWashAndRoadServices = 'other-expense::wash-and-road-services', ExpenseUnappliedCashBillPaymentExpense = 'expense::unapplied-cash-bill-payment-expense', AssetGlobalTaxDeferred = 'asset::global-tax-deferred', OtherCurrentLiabilityRentsInTrustLiability = 'other-current-liability::rents-in-trust-liability', OtherCurrentLiabilityProvisionsCurrentLiabilities = 'other-current-liability::provisions-current-liabilities', Expense = 'expense', AssetEmployeeCashAdvances = 'asset::employee-cash-advances', OtherExpense = 'other-expense', AssetOtherCurrentAssets = 'asset::other-current-assets', CostOfGoodsSoldCostOfLaborCos = 'cost-of-goods-sold::cost-of-labor-cos', AssetBank = 'asset::bank', LiabilityOutstandingDuesOtherThanMicroSmallEnterprise = 'liability::outstanding-dues-other-than-micro-small-enterprise', ExpenseIncomeTaxExpense = 'expense::income-tax-expense', OtherExpenseDepreciation = 'other-expense::depreciation', OtherExpenseVehicle = 'other-expense::vehicle', AssetOtherLongTermAssets = 'asset::other-long-term-assets', OtherExpenseExtraordinaryItems = 'other-expense::extraordinary-items', EquityPaidInCapitalOrSurplus = 'equity::paid-in-capital-or-surplus', EquityEquityInEarningsOfSubsidiuaries = 'equity::equity-in-earnings-of-subsidiuaries', AssetMoneyMarket = 'asset::money-market', AssetInternalTransfers = 'asset::internal-transfers', AssetTrustAccounts = 'asset::trust-accounts', EquityCommonStock = 'equity::common-stock', AssetNonCurrentAssets = 'asset::non-current-assets', ExpenseCommissionsAndFees = 'expense::commissions-and-fees', AssetCashAndCashEquivalents = 'asset::cash-and-cash-equivalents', ExpenseOtherRentalCosts = 'expense::other-rental-costs', LiabilityAccruedVacationPayable = 'liability::accrued-vacation-payable', AssetSecurityDeposits = 'asset::security-deposits', LiabilityLongTermDebit = 'liability::long-term-debit', OtherCurrentLiabilityOtherCurrentLiabilities = 'other-current-liability::other-current-liabilities', AssetVehicles = 'asset::vehicles', Asset = 'asset', AssetAccumulatedDepreciation = 'asset::accumulated-depreciation', OtherCurrentLiabilityPayrollTaxPayable = 'other-current-liability::payroll-tax-payable', ExpensePayrollExpenses = 'expense::payroll-expenses', RevenueIncome = 'revenue::income', RevenueOtherCurrentOperatingIncome = 'revenue::other-current-operating-income', RevenueServiceFeeIncome = 'revenue::service-fee-income', EquityMoneyReceivedAgainstShareWarrants = 'equity::money-received-against-share-warrants', ExpensePenaltiesSettlements = 'expense::penalties-settlements', AssetInvestments = 'asset::investments', AssetProvisionsCurrentAssets = 'asset::provisions-current-assets', AssetProvisionsNonCurrentAssets = 'asset::provisions-non-current-assets', OtherExpenseExchangeGainOrLoss = 'other-expense::exchange-gain-or-loss', LiabilityLiabilitiesRelatedToAssetsHeldForSale = 'liability::liabilities-related-to-assets-held-for-sale', OtherExpenseVehicleRegistration = 'other-expense::vehicle-registration', AssetOtherLongTermLoansAndAdvances = 'asset::other-long-term-loans-and-advances', AssetOtherConsumables = 'asset::other-consumables', OtherCurrentLiabilitySundryDebtorsAndCreditors = 'other-current-liability::sundry-debtors-and-creditors', AssetIntangibleAssetsUnderDevelopment = 'asset::intangible-assets-under-development' }
export const enum TransactionMethod { Mobile = 'mobile', Atm = 'atm', Online = 'online', Telephone = 'telephone', Mail = 'mail', BankBranch = 'bank-branch' }
export const enum AllocationMethod { Across = 'across', Each = 'each' }
export const enum MinimumRequirements { MinimumQuantityOfItems = 'minimum-quantity-of-items', None = 'none', MinimumPurchaseAmount = 'minimum-purchase-amount' }
export const enum AppliesTo { SpecificItems = 'specific-items', AllItems = 'all-items', SpecificCategories = 'specific-categories' }
export const enum TargetType { LineItem = 'line-item', ShippingLine = 'shipping-line' }
export const enum Status { Active = 'active', Scheduled = 'scheduled', Expired = 'expired' }
export const enum TargetSelection { All = 'all', Entitled = 'entitled' }
export const enum Roles { Moderator = 'moderator', User = 'user', Admin = 'admin' }
export const enum Country { Kenya = 'kenya', Luxembourg = 'luxembourg', Vietnam = 'vietnam', Guyana = 'guyana', Thailand = 'thailand', Bolivia = 'bolivia', Laos = 'laos', Ireland = 'ireland', SaintKittsAndNevis = 'saint-kitts-and-nevis', Guinea = 'guinea', Iceland = 'iceland', Liberia = 'liberia', Oman = 'oman', SouthSudan = 'south-sudan', Ukraine = 'ukraine', Somalia = 'somalia', Philippines = 'philippines', Albania = 'albania', Argentina = 'argentina', Bulgaria = 'bulgaria', Iraq = 'iraq', Angola = 'angola', Indonesia = 'indonesia', DominicanRepublic = 'dominican-republic', Taiwan = 'taiwan', Malawi = 'malawi', Haiti = 'haiti', UnitedKingdom = 'united-kingdom', Tonga = 'tonga', Eritrea = 'eritrea', Grenada = 'grenada', Canada = 'canada', Sudan = 'sudan', Comoros = 'comoros', Peru = 'peru', Latvia = 'latvia', Mali = 'mali', NewZealand = 'new-zealand', Cambodia = 'cambodia', ElSalvador = 'el-salvador', Panama = 'panama', Myanmar = 'myanmar', Vanuatu = 'vanuatu', Belize = 'belize', Finland = 'finland', Switzerland = 'switzerland', Yemen = 'yemen', EquatorialGuinea = 'equatorial-guinea', Hungary = 'hungary', SierraLeone = 'sierra-leone', Singapore = 'singapore', CaboVerde = 'cabo-verde', Monaco = 'monaco', Austria = 'austria', UnitedStates = 'united-states', Bhutan = 'bhutan', Malta = 'malta', Brazil = 'brazil', MarshallIslands = 'marshall-islands', Gabon = 'gabon', Niger = 'niger', Turkmenistan = 'turkmenistan', SanMarino = 'san-marino', Palestine = 'palestine', CongoDemocraticRepublic = 'congo-democratic-republic', Liechtenstein = 'liechtenstein', Ecuador = 'ecuador', Mauritania = 'mauritania', Paraguay = 'paraguay', Denmark = 'denmark', Australia = 'australia', Ghana = 'ghana', SouthAfrica = 'south-africa', Madagascar = 'madagascar', Iran = 'iran', Nigeria = 'nigeria', Namibia = 'namibia', Palau = 'palau', GuineaBissau = 'guinea-bissau', Kuwait = 'kuwait', Morocco = 'morocco', Zimbabwe = 'zimbabwe', Netherlands = 'netherlands', Bangladesh = 'bangladesh', Pakistan = 'pakistan', Senegal = 'senegal', Eswatini = 'eswatini', India = 'india', Georgia = 'georgia', Croatia = 'croatia', Italy = 'italy', SaintVincentAndTheGrenadines = 'saint-vincent-and-the-grenadines', Slovakia = 'slovakia', Nauru = 'nauru', Japan = 'japan', Armenia = 'armenia', CentralAfricanRepublic = 'central-african-republic', Israel = 'israel', Kazakhstan = 'kazakhstan', Belarus = 'belarus', Dominica = 'dominica', Burundi = 'burundi', CzechRepublic = 'czech-republic', Lesotho = 'lesotho', Bahamas = 'bahamas', Gambia = 'gambia', Kyrgyzstan = 'kyrgyzstan', Montenegro = 'montenegro', Samoa = 'samoa', SaoTomeAndPrincipe = 'sao-tome-and-principe', Syria = 'syria', Portugal = 'portugal', Belgium = 'belgium', Tanzania = 'tanzania', Ethiopia = 'ethiopia', China = 'china', Norway = 'norway', Zambia = 'zambia', Andorra = 'andorra', Brunei = 'brunei', Estonia = 'estonia', Kiribati = 'kiribati', Azerbaijan = 'azerbaijan', Fiji = 'fiji', Micronesia = 'micronesia', Egypt = 'egypt', Mauritius = 'mauritius', AntiguaAndBarbuda = 'antigua-and-barbuda', Benin = 'benin', NorthMacedonia = 'north-macedonia', Romania = 'romania', Bahrain = 'bahrain', Cyprus = 'cyprus', Jamaica = 'jamaica', Mongolia = 'mongolia', Qatar = 'qatar', CostaRica = 'costa-rica', SouthKorea = 'south-korea', SriLanka = 'sri-lanka', TrinidadAndTobago = 'trinidad-and-tobago', Tunisia = 'tunisia', UnitedArabEmirates = 'united-arab-emirates', Cameroon = 'cameroon', Uzbekistan = 'uzbekistan', CongoRepublic = 'congo-republic', Germany = 'germany', Moldova = 'moldova', Spain = 'spain', SolomonIslands = 'solomon-islands', Tuvalu = 'tuvalu', Seychelles = 'seychelles', Libya = 'libya', Algeria = 'algeria', Suriname = 'suriname', Botswana = 'botswana', Cuba = 'cuba', Malaysia = 'malaysia', Poland = 'poland', Slovenia = 'slovenia', Tajikistan = 'tajikistan', Nepal = 'nepal', Uruguay = 'uruguay', Maldives = 'maldives', Afghanistan = 'afghanistan', CoteDIvoire = 'cote-d-ivoire', Chile = 'chile', Barbados = 'barbados', Djibouti = 'djibouti', Guatemala = 'guatemala', Jordan = 'jordan', NorthKorea = 'north-korea', Russia = 'russia', SaintLucia = 'saint-lucia', France = 'france', Greece = 'greece', BosniaAndHerzegovina = 'bosnia-and-herzegovina', Honduras = 'honduras', Lithuania = 'lithuania', PapuaNewGuinea = 'papua-new-guinea', Colombia = 'colombia', SaudiArabia = 'saudi-arabia', Sweden = 'sweden', TimorLeste = 'timor-leste', Togo = 'togo', Chad = 'chad', BurkinaFaso = 'burkina-faso', Lebanon = 'lebanon', Mozambique = 'mozambique', Turkey = 'turkey', Serbia = 'serbia', Uganda = 'uganda', Mexico = 'mexico', Rwanda = 'rwanda', Nicaragua = 'nicaragua', VaticanCity = 'vatican-city', Venezuela = 'venezuela' }
export const enum GlobalTaxType { CustomsDuty = 'customs-duty', SalesTax = 'sales-tax', PropertyTax = 'property-tax', Other = 'other', ExciseTax = 'excise-tax', Vat = 'vat', Gst = 'gst' }
export const enum IdentityProvider { Wechat = 'wechat', Discord = 'discord', Microsoft = 'microsoft', Yahoo = 'yahoo', Tumblr = 'tumblr', Google = 'google', Behance = 'behance', Dribbble = 'dribbble', Other = 'other', Paypal = 'paypal', Foursquare = 'foursquare', Tiktok = 'tiktok', Snapchat = 'snapchat', Reddit = 'reddit', Amazon = 'amazon', Whatsapp = 'whatsapp', Telegram = 'telegram', Signal = 'signal', Line = 'line', Apple = 'apple', Qq = 'qq', Vimeo = 'vimeo', Twitter = 'twitter', Flickr = 'flickr', Pinterest = 'pinterest', Github = 'github', Facebook = 'facebook', Instagram = 'instagram', Linkedin = 'linkedin', Slack = 'slack' }
export const enum AccountEngagementLevel { Cold = 'cold', Hot = 'hot', Warm = 'warm', Unknown = 'unknown' }
export const enum ReviewApprovalStatus { Rejected = 'rejected', Revised = 'revised', InReview = 'in-review', Approved = 'approved', Pending = 'pending' }
export const enum StakeholderType { Investor = 'investor', Competitor = 'competitor', Vendor = 'vendor', Customer = 'customer', Other = 'other', Partner = 'partner' }
export const enum AccountStatus { Pending = 'pending', Suspended = 'suspended', Closed = 'closed', Active = 'active', Inactive = 'inactive' }
export const enum CampaignStatus { Paused = 'paused', Scheduled = 'scheduled', Planned = 'planned', Completed = 'completed', Archived = 'archived', Cancelled = 'cancelled', Active = 'active', Draft = 'draft' }
export const enum CustomerType { Online = 'online', Retail = 'retail', B2b = 'b2b', Corporate = 'corporate', Wholesale = 'wholesale', B2c = 'b2c' }
export const enum MessageContentType { Contact = 'contact', Image = 'image', Audio = 'audio', Voice = 'voice', Sticker = 'sticker', Video = 'video', File = 'file', Location = 'location', Text = 'text', Link = 'link', Document = 'document', Gif = 'gif', Html = 'html' }
export const enum ReactionType { Laugh = 'laugh', Angry = 'angry', Like = 'like', Dislike = 'dislike', Sad = 'sad', Love = 'love', Interested = 'interested', Bookmark = 'bookmark', Wow = 'wow' }
export const enum SupportTicketPriority { Medium = 'medium', High = 'high', Low = 'low', Urgent = 'urgent', Immediate = 'immediate' }
export const enum IssueLifecycleStatus { Closed = 'closed', Open = 'open', Pending = 'pending', InProgress = 'in-progress', OnHold = 'on-hold', Resolved = 'resolved', Cancelled = 'cancelled' }
export const enum OrderStatus { Delivered = 'delivered', Returned = 'returned', Processing = 'processing', OnHold = 'on-hold', AwaitingShipment = 'awaiting-shipment', Shipped = 'shipped', Cancelled = 'cancelled', Abandoned = 'abandoned', Confirmed = 'confirmed', Pending = 'pending', AwaitingPayment = 'awaiting-payment', AwaitingPickup = 'awaiting-pickup', PartiallyFulfilled = 'partially-fulfilled', Failed = 'failed', Refunded = 'refunded', Draft = 'draft', Disputed = 'disputed', Completed = 'completed' }
export const enum DiscountType { VariablePercentage = 'variable-percentage', UnknownDiscount = 'unknown-discount', Percentage = 'percentage', FixedAmount = 'fixed-amount', BuyOneGetOne = 'buy-one-get-one', TieredDiscount = 'tiered-discount', ConditionalDiscount = 'conditional-discount', VariableAmount = 'variable-amount' }
export const enum FulfillmentStatus { Pending = 'pending', Failure = 'failure', InTransit = 'in-transit', Cancelled = 'cancelled', Returned = 'returned', Delivered = 'delivered' }
export const enum ProductAvailabilityStatus { OutOfStock = 'out-of-stock', PreOrder = 'pre-order', InStock = 'in-stock', BackOrder = 'back-order', Discontinued = 'discontinued' }
export const enum ExpenseApprovalStatus { Approved = 'approved', Reimbursed = 'reimbursed', Cancelled = 'cancelled', Processed = 'processed', Reviewing = 'reviewing', Pending = 'pending', New = 'new', Denied = 'denied' }
export const enum FinancialChargeType { Other = 'other', LateFee = 'late-fee', InterestCharge = 'interest-charge', ProcessingFee = 'processing-fee', TransactionFee = 'transaction-fee', Commission = 'commission', ServiceCharge = 'service-charge' }
export const enum BillingStatus { Paid = 'paid', PartiallyPaid = 'partially-paid', Unpaid = 'unpaid', Overdue = 'overdue', Deleted = 'deleted', Draft = 'draft', Submitted = 'submitted', Authorised = 'authorised', Voided = 'voided', Pending = 'pending' }
export const enum InvoiceAdjustmentType { Shipping = 'shipping', Tip = 'tip', Discount = 'discount', Tax = 'tax', Other = 'other' }
export const enum DataType { Timestamp = 'timestamp', Custom = 'custom', Undefined = 'undefined', String = 'string', Null = 'null', Binary = 'binary', Object = 'object', Date = 'date', Json = 'json', Array = 'array', Number = 'number', Boolean = 'boolean' }
export const enum EmploymentType { PartTime = 'part-time', FullTime = 'full-time', Temporary = 'temporary', Volunteer = 'volunteer', Seasonal = 'seasonal', Freelance = 'freelance', Internship = 'internship', Contract = 'contract', Permanent = 'permanent' }
export const enum TimeCycle { Weekly = 'weekly', Custom = 'custom', Monthly = 'monthly', Secondly = 'secondly', Hourly = 'hourly', Biweekly = 'biweekly', Quarterly = 'quarterly', Annually = 'annually', Biennially = 'biennially', Triennially = 'triennially', Daily = 'daily', AdHoc = 'ad-hoc', Minutely = 'minutely', SemiMonthly = 'semi-monthly', SemiAnnually = 'semi-annually' }
export const enum FinancialTrackingCategories { Project = 'project', Employee = 'employee', Service = 'service', Customer = 'customer', Location = 'location', Other = 'other', None = 'none', Product = 'product', Vendor = 'vendor', CostCenter = 'cost-center', Class = 'class', Department = 'department', Division = 'division' }
export const enum CampaignType { SocialMedia = 'social-media', SearchEngine = 'search-engine', Display = 'display', Other = 'other', Email = 'email' }
export const enum ContactAddressType { Other = 'other', Shipping = 'shipping', Home = 'home', Work = 'work', Personal = 'personal', Temporary = 'temporary', Business = 'business', Billing = 'billing' }
export const enum LeadLifecycleStatus { Unqualified = 'unqualified', Revisited = 'revisited', New = 'new', Lost = 'lost', InProcess = 'in-process', Converted = 'converted', Connected = 'connected', BadTiming = 'bad-timing', Open = 'open', AttemptedToContact = 'attempted-to-contact' }
export const enum ParticipantEngagementStatus { Active = 'active', Left = 'left', Inactive = 'inactive', Banned = 'banned', Admin = 'admin', Guest = 'guest', Moderator = 'moderator' }
export const enum ItemEntityStatus { Deleted = 'deleted', Completed = 'completed', Suspended = 'suspended', Inactive = 'inactive', Archived = 'archived', Pending = 'pending', Active = 'active' }
export const enum Currency { XCD = 'xcd', LKR = 'lkr', FOK = 'fok', CRC = 'crc', GHS = 'ghs', GNF = 'gnf', BIF = 'bif', VES = 'ves', CAD = 'cad', BZD = 'bzd', GBP = 'gbp', MXN = 'mxn', NZD = 'nzd', AZN = 'azn', DJF = 'djf', FKP = 'fkp', CLP = 'clp', PEN = 'pen', SOS = 'sos', THB = 'thb', ISK = 'isk', KID = 'kid', FJD = 'fjd', SAR = 'sar', SBD = 'sbd', TND = 'tnd', TWD = 'twd', UGX = 'ugx', PGK = 'pgk', MOP = 'mop', BGN = 'bgn', KES = 'kes', CDF = 'cdf', KPW = 'kpw', XDR = 'xdr', EUR = 'eur', BDT = 'bdt', MGA = 'mga', TMT = 'tmt', TRY = 'try', INR = 'inr', USD = 'usd', GYD = 'gyd', NAD = 'nad', BYN = 'byn', RON = 'ron', BSD = 'bsd', SHP = 'shp', AED = 'aed', XOF = 'xof', YER = 'yer', SSP = 'ssp', NOK = 'nok', CVE = 'cve', GTQ = 'gtq', MYR = 'myr', HKD = 'hkd', IMP = 'imp', RUB = 'rub', SEK = 'sek', MKD = 'mkd', HRK = 'hrk', AMD = 'amd', CHF = 'chf', ERN = 'ern', TTD = 'ttd', DOP = 'dop', ZMW = 'zmw', XPF = 'xpf', BND = 'bnd', TOP = 'top', HNL = 'hnl', ANG = 'ang', SYP = 'syp', TVD = 'tvd', AOA = 'aoa', MMK = 'mmk', QAR = 'qar', HTG = 'htg', KGS = 'kgs', MRU = 'mru', MVR = 'mvr', SRD = 'srd', LRD = 'lrd', ALL = 'all', PHP = 'php', BAM = 'bam', GGP = 'ggp', PLN = 'pln', VND = 'vnd', LSL = 'lsl', VUV = 'vuv', ILS = 'ils', CZK = 'czk', JOD = 'jod', MAD = 'mad', GEL = 'gel', COP = 'cop', KMF = 'kmf', SCR = 'scr', SLL = 'sll', IRR = 'irr', KYD = 'kyd', GIP = 'gip', LAK = 'lak', MZN = 'mzn', PAB = 'pab', WST = 'wst', KRW = 'krw', BWP = 'bwp', IQD = 'iqd', JPY = 'jpy', MUR = 'mur', IDR = 'idr', BMD = 'bmd', MWK = 'mwk', ETB = 'etb', RWF = 'rwf', HUF = 'huf', DZD = 'dzd', UZS = 'uzs', BOB = 'bob', BHD = 'bhd', BTN = 'btn', JMD = 'jmd', NIO = 'nio', PKR = 'pkr', SDG = 'sdg', MNT = 'mnt', EGP = 'egp', OMR = 'omr', BRL = 'brl', NGN = 'ngn', NPR = 'npr', RSD = 'rsd', TJS = 'tjs', UAH = 'uah', AWG = 'awg', UYU = 'uyu', LBP = 'lbp', XAF = 'xaf', TZS = 'tzs', AFN = 'afn', MDL = 'mdl', BBD = 'bbd', KWD = 'kwd', JEP = 'jep', LYD = 'lyd', CUC = 'cuc', AUD = 'aud', GMD = 'gmd', CNY = 'cny', SGD = 'sgd', DKK = 'dkk', SZL = 'szl', ZWL = 'zwl', KHR = 'khr', ARS = 'ars', PYG = 'pyg', CUP = 'cup', ZAR = 'zar', STN = 'stn', KZT = 'kzt' }
export const enum CustomerEligibilityStatus { AllCustomers = 'all-customers', SpecificConditions = 'specific-conditions', NewCustomers = 'new-customers', VipCustomers = 'vip-customers', Other = 'other', ReturningCustomers = 'returning-customers' }
export const enum ItemCondition { New = 'new', Refurbished = 'refurbished', LikeNew = 'like-new', OpenBox = 'open-box', Used = 'used', Damaged = 'damaged' }
export const enum TransactionType { Charge = 'charge', Withdrawal = 'withdrawal', Payment = 'payment', Transfer = 'transfer', Adjustment = 'adjustment', Fee = 'fee', Refund = 'refund', Deposit = 'deposit' }
export const enum EntityLifecycleStatus { Active = 'active', Preorder = 'preorder', Archived = 'archived', Inactive = 'inactive', Scheduled = 'scheduled', Draft = 'draft', Deleted = 'deleted' }
export const enum JournalEntryStatus { Posted = 'posted', Error = 'error', Draft = 'draft', Voided = 'voided', Pending = 'pending', Corrected = 'corrected' }
export const enum DayOfWeek { Saturday = 'saturday', Tuesday = 'tuesday', Friday = 'friday', Wednesday = 'wednesday', Sunday = 'sunday', Thursday = 'thursday', Monday = 'monday' }
export const enum AccountingAccountType { AssetDeferredTax = 'asset::deferred-tax', OtherCurrentLiabilityLineOfCredit = 'other-current-liability::line-of-credit', OtherIncomeTaxExemptInterest = 'other-income::tax-exempt-interest', LiabilityStaffAndRelatedLongTermLiabilityAccounts = 'liability::staff-and-related-long-term-liability-accounts', OtherExpenseOtherHomeOfficeExpenses = 'other-expense::other-home-office-expenses', AssetGlobalTaxDeferred = 'asset::global-tax-deferred', OtherCurrentLiabilitySalesTaxPayable = 'other-current-liability::sales-tax-payable', ExpenseOtherExternalServices = 'expense::other-external-services', ExpenseOtherRentalCosts = 'expense::other-rental-costs', AssetAvailableForSaleFinancialAssets = 'asset::available-for-sale-financial-assets', OtherCurrentLiabilityInterestPayables = 'other-current-liability::interest-payables', AssetAccumulatedAmortization = 'asset::accumulated-amortization', ExpenseEntertainment = 'expense::entertainment', AssetUndepositedFunds = 'asset::undeposited-funds', OtherExpenseMortgageInterest = 'other-expense::mortgage-interest', AssetPrepaidExpenses = 'asset::prepaid-expenses', ExpenseAdvertisingPromotional = 'expense::advertising-promotional', OtherExpensePenaltiesSettlements = 'other-expense::penalties-settlements', ExpenseLegalProfessionalFees = 'expense::legal-professional-fees', OtherExpenseGasAndFuel = 'other-expense::gas-and-fuel', EquityPartnerContributions = 'equity::partner-contributions', AssetNonCurrentAssets = 'asset::non-current-assets', ExpenseOtherMiscellaneousServiceCost = 'expense::other-miscellaneous-service-cost', OtherCurrentLiabilityCurrentPortionEmployeeBenefitsObligations = 'other-current-liability::current-portion-employee-benefits-obligations', AssetCashAndCashEquivalents = 'asset::cash-and-cash-equivalents', CostOfGoodsSoldCostOfSales = 'cost-of-goods-sold::cost-of-sales', RevenueOperatingGrants = 'revenue::operating-grants', EquityEstimatedTaxes = 'equity::estimated-taxes', AssetLongTermLoansAndAdvancesToRelatedParties = 'asset::long-term-loans-and-advances-to-related-parties', RevenueOtherPrimaryIncome = 'revenue::other-primary-income', EquityPreferredStock = 'equity::preferred-stock', RevenueSalesRetail = 'revenue::sales-retail', RevenueSalesWholesale = 'revenue::sales-wholesale', LiabilityOtherLongTermProvisions = 'liability::other-long-term-provisions', OtherExpenseParkingAndTolls = 'other-expense::parking-and-tolls', OtherCurrentLiabilityProvisionsCurrentLiabilities = 'other-current-liability::provisions-current-liabilities', RevenueSalesOfProductIncome = 'revenue::sales-of-product-income', ExpenseUnappliedCashBillPaymentExpense = 'expense::unapplied-cash-bill-payment-expense', LiabilityLongTermDebit = 'liability::long-term-debit', LiabilityGroupAndAssociates = 'liability::group-and-associates', OtherCurrentLiabilityDividendsPayable = 'other-current-liability::dividends-payable', EquityOtherFreeReserves = 'equity::other-free-reserves', OtherIncomeGainLossOnSaleOfFixedAssets = 'other-income::gain-loss-on-sale-of-fixed-assets', LiabilityShareholderNotesPayable = 'liability::shareholder-notes-payable', OtherCurrentLiabilityProvisionForWarrantyObligations = 'other-current-liability::provision-for-warranty-obligations', AssetTrustAccounts = 'asset::trust-accounts', LiabilityNotesPayable = 'liability::notes-payable', OtherExpenseTaxRoundoffGainOrLoss = 'other-expense::tax-roundoff-gain-or-loss', LiabilityAccrualsAndDeferredIncome = 'liability::accruals-and-deferred-income', OtherExpenseExtraordinaryItems = 'other-expense::extraordinary-items', AssetInvestmentOther = 'asset::investment-other', AssetIntangibleAssetsUnderDevelopment = 'asset::intangible-assets-under-development', EquityPartnersEquity = 'equity::partners-equity', AssetChecking = 'asset::checking', EquityMoneyReceivedAgainstShareWarrants = 'equity::money-received-against-share-warrants', ExpenseRepairMaintenance = 'expense::repair-maintenance', OtherExpenseDepreciation = 'other-expense::depreciation', AssetIntangibleAssets = 'asset::intangible-assets', AssetLicenses = 'asset::licenses', ExpenseOfficeGeneralAdministrativeExpenses = 'expense::office-general-administrative-expenses', CostOfGoodsSoldEquipmentRentalCos = 'cost-of-goods-sold::equipment-rental-cos', OtherExpenseHomeOwnerRentalInsurance = 'other-expense::home-owner-rental-insurance', OtherExpenseExceptionalItems = 'other-expense::exceptional-items', ExpenseTaxesPaid = 'expense::taxes-paid', OtherCurrentLiabilityPrepaidExpensesPayable = 'other-current-liability::prepaid-expenses-payable', AssetGoodwill = 'asset::goodwill', OtherCurrentLiabilityStateLocalIncomeTaxPayable = 'other-current-liability::state-local-income-tax-payable', ExpenseCommissionsAndFees = 'expense::commissions-and-fees', OtherExpenseVehicleRegistration = 'other-expense::vehicle-registration', ExpenseEntertainmentMeals = 'expense::entertainment-meals', ExpenseCostOfLabor = 'expense::cost-of-labor', OtherExpenseRepairsAndMaintenance = 'other-expense::repairs-and-maintenance', EquityPersonalExpense = 'equity::personal-expense', CostOfGoodsSoldOtherCostsOfServiceCos = 'cost-of-goods-sold::other-costs-of-service-cos', OtherIncomeGainLossOnSaleOfInvestments = 'other-income::gain-loss-on-sale-of-investments', ExpenseEquipmentRental = 'expense::equipment-rental', AssetRentsHeldInTrust = 'asset::rents-held-in-trust', AssetEmployeeCashAdvances = 'asset::employee-cash-advances', AssetLand = 'asset::land', ExpenseTravelExpensesSellingExpense = 'expense::travel-expenses-selling-expense', ExpensePayrollExpenses = 'expense::payroll-expenses', AssetProvisionsFixedAssets = 'asset::provisions-fixed-assets', OtherExpenseVehicleLease = 'other-expense::vehicle-lease', AssetSavings = 'asset::savings', ExpenseCharitableContributions = 'expense::charitable-contributions', OtherExpenseVehicleRepairs = 'other-expense::vehicle-repairs', OtherExpenseOtherMiscellaneousExpense = 'other-expense::other-miscellaneous-expense', ExpenseRentOrLeaseOfBuildings = 'expense::rent-or-lease-of-buildings', OtherCurrentLiability = 'other-current-liability', AssetProvisionsNonCurrentAssets = 'asset::provisions-non-current-assets', ExpenseFinanceCosts = 'expense::finance-costs', ExpenseOtherCurrentOperatingCharges = 'expense::other-current-operating-charges', AssetGlobalTaxRefund = 'asset::global-tax-refund', AssetOtherIntangibleAssets = 'asset::other-intangible-assets', AssetOtherEarMarkedBankAccounts = 'asset::other-ear-marked-bank-accounts', OtherExpensePriorPeriodItems = 'other-expense::prior-period-items', LiabilityGovernmentAndOtherPublicAuthorities = 'liability::government-and-other-public-authorities', OtherCurrentLiabilityFederalIncomeTaxPayable = 'other-current-liability::federal-income-tax-payable', RevenueNonProfitIncome = 'revenue::non-profit-income', LiabilityOtherLongTermLiabilities = 'liability::other-long-term-liabilities', ExpenseTravel = 'expense::travel', Asset = 'asset', AssetLoansToOthers = 'asset::loans-to-others', ExpenseOtherBusinessExpenses = 'expense::other-business-expenses', ExpenseAmortizationExpense = 'expense::amortization-expense', OtherCurrentLiabilityShortTermBorrowings = 'other-current-liability::short-term-borrowings', OtherIncomeOtherMiscellaneousIncome = 'other-income::other-miscellaneous-income', ExpenseStaffCosts = 'expense::staff-costs', OtherCurrentLiabilityAccruedLiabilities = 'other-current-liability::accrued-liabilities', AssetInvestmentTaxExemptSecurities = 'asset::investment-tax-exempt-securities', AssetOrganizationalCosts = 'asset::organizational-costs', ExpenseUtilities = 'expense::utilities', AssetCumulativeDepreciationOnIntangibleAssets = 'asset::cumulative-depreciation-on-intangible-assets', EquityShareCapital = 'equity::share-capital', EquityAccumulatedAdjustment = 'equity::accumulated-adjustment', OtherCurrentLiabilityPayrollClearing = 'other-current-liability::payroll-clearing', AssetParticipatingInterests = 'asset::participating-interests', OtherExpenseIncomeTaxOtherExpense = 'other-expense::income-tax-other-expense', ExpenseTravelMeals = 'expense::travel-meals', LiabilityDeferredTaxLiabilities = 'liability::deferred-tax-liabilities', OtherCurrentLiabilitySocialSecurityAgencies = 'other-current-liability::social-security-agencies', ExpenseDistributionCosts = 'expense::distribution-costs', LiabilityProvisionsNonCurrentLiabilities = 'liability::provisions-non-current-liabilities', AssetOtherLongTermInvestments = 'asset::other-long-term-investments', ExpenseManagementCompensation = 'expense::management-compensation', AssetCalledUpShareCapitalNotPaid = 'asset::called-up-share-capital-not-paid', LiabilityDebtsRelatedToParticipatingInterests = 'liability::debts-related-to-participating-interests', OtherExpenseVehicle = 'other-expense::vehicle', AssetAssetsHeldForSale = 'asset::assets-held-for-sale', RevenueIncome = 'revenue::income', RevenueOwnWorkCapitalized = 'revenue::own-work-capitalized', AssetInvestmentUsGovernmentObligations = 'asset::investment-us-government-obligations', Expense = 'expense', AssetFixedAssetFurniture = 'asset::fixed-asset-furniture', ExpenseShippingFreightDelivery = 'expense::shipping-freight-delivery', LiabilityLongTermLiability = 'liability::long-term-liability', ExpenseExtraordinaryCharges = 'expense::extraordinary-charges', LiabilityAccountsPayable = 'liability::accounts-payable', RevenueCashReceiptIncome = 'revenue::cash-receipt-income', AssetFixedAssetSoftware = 'asset::fixed-asset-software', AssetPrepaymentsAndAccruedIncome = 'asset::prepayments-and-accrued-income', AssetOtherCurrentAsset = 'asset::other-current-asset', AssetLeaseholdImprovements = 'asset::leasehold-improvements', LiabilityOutstandingDuesOtherThanMicroSmallEnterprise = 'liability::outstanding-dues-other-than-micro-small-enterprise', LiabilityLongTermBorrowings = 'liability::long-term-borrowings', OtherCurrentLiabilityLoanPayable = 'other-current-liability::loan-payable', OtherCurrentLiabilityOtherCurrentLiabilities = 'other-current-liability::other-current-liabilities', RevenueServiceFeeIncome = 'revenue::service-fee-income', ExpenseLossOnDiscontinuedOperationsNetOfTax = 'expense::loss-on-discontinued-operations-net-of-tax', OtherExpenseAmortization = 'other-expense::amortization', AssetFixedAssetCopiers = 'asset::fixed-asset-copiers', ExpensePurchasesRebates = 'expense::purchases-rebates', AssetLandAsset = 'asset::land-asset', AssetOtherFixedAssets = 'asset::other-fixed-assets', OtherIncomeInterestEarned = 'other-income::interest-earned', AssetAssetsInCourseOfConstruction = 'asset::assets-in-course-of-construction', EquityOpeningBalanceEquity = 'equity::opening-balance-equity', AssetOtherAsset = 'asset::other-asset', OtherExpense = 'other-expense', OtherCurrentLiabilityRentsInTrustLiability = 'other-current-liability::rents-in-trust-liability', AssetOtherCurrentAssets = 'asset::other-current-assets', OtherExpenseRentAndLease = 'other-expense::rent-and-lease', AssetDepletableAssets = 'asset::depletable-assets', OtherExpenseUtilities = 'other-expense::utilities', ExpenseBadDebts = 'expense::bad-debts', AssetFixedAssetPhone = 'asset::fixed-asset-phone', OtherCurrentLiabilityGlobalTaxPayable = 'other-current-liability::global-tax-payable', EquityOwnersEquity = 'equity::owners-equity', ExpenseInsurance = 'expense::insurance', OtherExpenseDeferredTaxExpense = 'other-expense::deferred-tax-expense', EquityAccumulatedOtherComprehensiveIncome = 'equity::accumulated-other-comprehensive-income', OtherIncomeLossOnDisposalOfAssets = 'other-income::loss-on-disposal-of-assets', AssetMachineryAndEquipment = 'asset::machinery-and-equipment', EquityCapitalReserves = 'equity::capital-reserves', ExpenseTravelExpensesGeneralAndAdminExpenses = 'expense::travel-expenses-general-and-admin-expenses', LiabilityAccruedLongTermLiabilities = 'liability::accrued-long-term-liabilities', LiabilityOutstandingDuesMicroSmallEnterprise = 'liability::outstanding-dues-micro-small-enterprise', OtherCurrentLiabilityStaffAndRelatedLiabilityAccounts = 'other-current-liability::staff-and-related-liability-accounts', AssetBank = 'asset::bank', AssetLoansToOfficers = 'asset::loans-to-officers', AssetShortTermInvestmentsInRelatedParties = 'asset::short-term-investments-in-related-parties', AssetAccumulatedAmortizationOfOtherAssets = 'asset::accumulated-amortization-of-other-assets', LiabilityAccruedVacationPayable = 'liability::accrued-vacation-payable', CostOfGoodsSoldFreightAndDeliveryCost = 'cost-of-goods-sold::freight-and-delivery-cost', LiabilityProvisionForLiabilities = 'liability::provision-for-liabilities', OtherExpenseVehicleLoanInterest = 'other-expense::vehicle-loan-interest', EquityPartnerDistributions = 'equity::partner-distributions', EquityHealthcare = 'equity::healthcare', ExpenseIncomeTaxExpense = 'expense::income-tax-expense', LiabilityObligationsUnderFinanceLeases = 'liability::obligations-under-finance-leases', ExpenseInterestPaid = 'expense::interest-paid', LiabilityCreditCard = 'liability::credit-card', OtherCurrentLiabilityTradeAndOtherPayables = 'other-current-liability::trade-and-other-payables', AssetLongTermInvestments = 'asset::long-term-investments', OtherIncomeOtherOperatingIncome = 'other-income::other-operating-income', EquityTreasuryStock = 'equity::treasury-stock', OtherCurrentLiabilityCurrentLiabilities = 'other-current-liability::current-liabilities', AssetBalWithGovtAuthorities = 'asset::bal-with-govt-authorities', ExpenseExternalServices = 'expense::external-services', AssetInventory = 'asset::inventory', EquityPaidInCapitalOrSurplus = 'equity::paid-in-capital-or-surplus', RevenueRevenueGeneral = 'revenue::revenue-general', EquityFunds = 'equity::funds', ExpenseDuesSubscriptions = 'expense::dues-subscriptions', AssetInvestmentMortgageRealEstateLoans = 'asset::investment-mortgage-real-estate-loans', EquityCommonStock = 'equity::common-stock', OtherIncomeUnrealisedLossOnSecuritiesNetOfTax = 'other-income::unrealised-loss-on-securities-net-of-tax', AssetAllowanceForBadDebts = 'asset::allowance-for-bad-debts', OtherCurrentLiabilityGlobalTaxSuspense = 'other-current-liability::global-tax-suspense', AssetVehicles = 'asset::vehicles', AssetMoneyMarket = 'asset::money-market', CostOfGoodsSoldShippingFreightDeliveryCos = 'cost-of-goods-sold::shipping-freight-delivery-cos', AssetCapitalWip = 'asset::capital-wip', AssetInvestments = 'asset::investments', OtherExpenseVehicleInsurance = 'other-expense::vehicle-insurance', AssetFixedAsset = 'asset::fixed-asset', AssetFixedAssetPhotoVideo = 'asset::fixed-asset-photo-video', ExpenseBankCharges = 'expense::bank-charges', EquityCalledUpShareCapital = 'equity::called-up-share-capital', OtherExpenseOtherVehicleExpenses = 'other-expense::other-vehicle-expenses', ExpenseProjectStudiesSurveysAssessments = 'expense::project-studies-surveys-assessments', AssetInternalTransfers = 'asset::internal-transfers', AssetProvisionsCurrentAssets = 'asset::provisions-current-assets', CostOfGoodsSoldSuppliesMaterialsCogs = 'cost-of-goods-sold::supplies-materials-cogs', OtherCurrentLiabilityDirectDepositPayable = 'other-current-liability::direct-deposit-payable', OtherIncomeDividendIncome = 'other-income::dividend-income', OtherCurrentLiabilityCurrentPortionOfObligationsUnderFinanceLeases = 'other-current-liability::current-portion-of-obligations-under-finance-leases', AssetOtherConsumables = 'asset::other-consumables', EquityPersonalIncome = 'equity::personal-income', ExpenseOfficeExpenses = 'expense::office-expenses', OtherExpenseVehicleLoan = 'other-expense::vehicle-loan', AssetShortTermLoansAndAdvancesToRelatedParties = 'asset::short-term-loans-and-advances-to-related-parties', CostOfGoodsSoldCostOfLaborCos = 'cost-of-goods-sold::cost-of-labor-cos', LiabilityLiabilitiesRelatedToAssetsHeldForSale = 'liability::liabilities-related-to-assets-held-for-sale', OtherCurrentLiabilityTrustAccountsLiabilities = 'other-current-liability::trust-accounts-liabilities', AssetDevelopmentCosts = 'asset::development-costs', ExpenseOtherSellingExpenses = 'expense::other-selling-expenses', AssetBuildings = 'asset::buildings', ExpenseAppropriationsToDepreciation = 'expense::appropriations-to-depreciation', AssetFixedAssetOtherToolsEquipment = 'asset::fixed-asset-other-tools-equipment', AssetFurnitureAndFixtures = 'asset::furniture-and-fixtures', ExpensePromotionalMeals = 'expense::promotional-meals', ExpenseShippingAndDeliveryExpense = 'expense::shipping-and-delivery-expense', CostOfGoodsSold = 'cost-of-goods-sold', OtherCurrentLiabilityDutiesAndTaxes = 'other-current-liability::duties-and-taxes', AssetSecurityDeposits = 'asset::security-deposits', AssetFixedAssetComputers = 'asset::fixed-asset-computers', AssetOtherLongTermLoansAndAdvances = 'asset::other-long-term-loans-and-advances', RevenueSavingsByTaxScheme = 'revenue::savings-by-tax-scheme', AssetAssetsAvailableForSale = 'asset::assets-available-for-sale', RevenueUnappliedCashPaymentIncome = 'revenue::unapplied-cash-payment-income', RevenueOtherCurrentOperatingIncome = 'revenue::other-current-operating-income', ExpenseGlobalTaxExpense = 'expense::global-tax-expense', EquityShareApplicationMoneyPendingAllotment = 'equity::share-application-money-pending-allotment', LiabilityBankLoans = 'liability::bank-loans', EquityRetainedEarnings = 'equity::retained-earnings', AssetExpenditureAuthorisationsAndLettersOfCredit = 'asset::expenditure-authorisations-and-letters-of-credit', AssetOtherLongTermAssets = 'asset::other-long-term-assets', AssetRetainage = 'asset::retainage', ExpenseSuppliesMaterials = 'expense::supplies-materials', EquityEquityInEarningsOfSubsidiuaries = 'equity::equity-in-earnings-of-subsidiuaries', RevenueDiscountsRefundsGiven = 'revenue::discounts-refunds-given', AccountsReceivable = 'accounts-receivable', OtherCurrentLiabilityPayrollTaxPayable = 'other-current-liability::payroll-tax-payable', OtherIncomeOtherInvestmentIncome = 'other-income::other-investment-income', OtherExpenseExchangeGainOrLoss = 'other-expense::exchange-gain-or-loss', EquityInvestmentGrants = 'equity::investment-grants', AssetLeaseBuyout = 'asset::lease-buyout', ExpenseAuto = 'expense::auto', OtherCurrentLiabilitySundryDebtorsAndCreditors = 'other-current-liability::sundry-debtors-and-creditors', OtherIncome = 'other-income', AssetAccumulatedDepreciation = 'asset::accumulated-depreciation', OtherExpenseWashAndRoadServices = 'other-expense::wash-and-road-services', OtherCurrentLiabilityInsurancePayable = 'other-current-liability::insurance-payable', OtherExpenseDepletion = 'other-expense::depletion', LiabilityLongTermEmployeeBenefitObligations = 'liability::long-term-employee-benefit-obligations', EquityDividendDisbursed = 'equity::dividend-disbursed', ExpenseBorrowingCost = 'expense::borrowing-cost', OtherCurrentLiabilityCurrentTaxLiability = 'other-current-liability::current-tax-liability', ExpenseSundry = 'expense::sundry', AssetLoansToStockholders = 'asset::loans-to-stockholders', AssetCashOnHand = 'asset::cash-on-hand', AssetAccumulatedDepletion = 'asset::accumulated-depletion', OtherExpenseHomeOffice = 'other-expense::home-office', OtherExpenseMatCredit = 'other-expense::mat-credit', Equity = 'equity', AssetTradeAndOtherReceivables = 'asset::trade-and-other-receivables' }
export const enum MessageReadStatus { Unsent = 'unsent', Delivered = 'delivered', Sent = 'sent', Read = 'read', Failed = 'failed' }
export const enum MessageDeliveryStatus { Failed = 'failed', Error = 'error', Delivered = 'delivered', Pending = 'pending', Sent = 'sent', Read = 'read', Undeliverable = 'undeliverable' }
export const enum SupportQueryType { Question = 'question', FeatureRequest = 'feature-request', Feedback = 'feedback', Task = 'task', Problem = 'problem', Incident = 'incident', Bug = 'bug' }
export const enum ImageMimeType { ImageGif = 'image/gif', ImagePng = 'image/png', ImageHeic = 'image/heic', ImageWebp = 'image/webp', ImageTiff = 'image/tiff', ImageBmp = 'image/bmp', ImageSvgXml = 'image/svg+xml', ImageJpeg = 'image/jpeg' }
export const enum OrderingCriteria { Manual = 'manual', CreationDate = 'creation-date', Relevance = 'relevance', PriceAscending = 'price-ascending', Alphabetical = 'alphabetical', Rating = 'rating', PriceDescending = 'price-descending', Popularity = 'popularity' }
export const enum ChatType { Group = 'group', Private = 'private', Public = 'public' }
export const enum ItemAvailabilityStatus { OutOfStock = 'out-of-stock', Discontinued = 'discontinued', Inactive = 'inactive', Active = 'active' }
export const enum FinancialAccountStatus { Delinquent = 'delinquent', Inactive = 'inactive', Active = 'active', Closed = 'closed', Frozen = 'frozen', Suspended = 'suspended', UnderReview = 'under-review' }
export const enum TransactionStatus { Initiated = 'initiated', Succeeded = 'succeeded', Failed = 'failed', InProgress = 'in-progress', Cancelled = 'cancelled', Pending = 'pending', Error = 'error' }
export const enum CreditNoteStatus { Applied = 'applied', Draft = 'draft', Void = 'void', Pending = 'pending', Cancelled = 'cancelled', Completed = 'completed', Revised = 'revised', Issued = 'issued', Disputed = 'disputed' }
export const enum PaymentTerm { UponCompletion = 'upon-completion', Custom = 'custom', Installment = 'installment', Prepayment = 'prepayment', Prepaid = 'prepaid', CashBeforeShipment = 'cash-before-shipment', DueOnReceipt = 'due-on-receipt', CashOnDelivery = 'cash-on-delivery', Net30 = 'net-30', DueEndOfMonth = 'due-end-of-month', CashWithOrder = 'cash-with-order', Net60 = 'net-60', CashInAdvance = 'cash-in-advance', Net = 'net', Net90 = 'net-90', DeferredPayment = 'deferred-payment' }
export const enum EmploymentAndCandidateStatus { Interviewing = 'interviewing', Other = 'other', Terminated = 'terminated', New = 'new', OfferExtended = 'offer-extended', Hired = 'hired', Inactive = 'inactive', OnLeave = 'on-leave', InReview = 'in-review', NotSelected = 'not-selected', Active = 'active' }
export const enum OrganizationalRole { Other = 'other', Contractor = 'contractor', Admin = 'admin', Manager = 'manager', Employee = 'employee', Director = 'director', Supervisor = 'supervisor' }
export const enum CustomerStatus { Archived = 'archived', Active = 'active', Inactive = 'inactive', Suspended = 'suspended', Pending = 'pending' }
export const enum SocialPlatform { Linkedin = 'linkedin', Skype = 'skype', Tiktok = 'tiktok', Snapchat = 'snapchat', OtherSocialPlatform = 'other-social-platform', Reddit = 'reddit', Facebook = 'facebook', Pinterest = 'pinterest', Youtube = 'youtube', Tumblr = 'tumblr', X = 'x', Twitter = 'twitter', Instagram = 'instagram' }
export const enum ConversationStatus { Active = 'active', Deleted = 'deleted', Archived = 'archived' }
export const enum CommunicationRole { Service = 'service', Moderator = 'moderator', System = 'system', Owner = 'owner', Group = 'group', Bot = 'bot', User = 'user', Assistant = 'assistant', Member = 'member', Guest = 'guest', Admin = 'admin', Channel = 'channel' }
export const enum LifecycleStatus { Expired = 'expired', Cancelled = 'cancelled', Suspended = 'suspended', Issued = 'issued', Active = 'active', Redeemed = 'redeemed' }
export const enum PaymentMethod { Cash = 'cash', BankTransfer = 'bank-transfer', Paypal = 'paypal', CreditCard = 'credit-card', Cryptocurrency = 'cryptocurrency', Check = 'check', DebitCard = 'debit-card', MobileWallet = 'mobile-wallet', CashOnDelivery = 'cash-on-delivery', MobilePayment = 'mobile-payment', Other = 'other' }
export const enum FinancialTransactionStatus { Pending = 'pending', Cleared = 'cleared', Failed = 'failed', Cancelled = 'cancelled', Disputed = 'disputed', Refunded = 'refunded', SettlementInProgress = 'settlement-in-progress', Authorized = 'authorized' }
export const enum AuditOpinionType { Adverse = 'adverse', Qualified = 'qualified', Disclaimer = 'disclaimer', Unqualified = 'unqualified' }
export const enum InventoryStorageType { Warehouse = 'warehouse', RetailStore = 'retail-store', OnlineMarketplace = 'online-marketplace', Consignment = 'consignment', DropShipper = 'drop-shipper', Other = 'other', DistributionCenter = 'distribution-center' }
export const enum VisibilityScope { Internal = 'internal', Global = 'global', Web = 'web', Private = 'private', App = 'app' }
export const enum PaymentStatus { Disputed = 'disputed', Succeeded = 'succeeded', Paid = 'paid', Refunded = 'refunded', Adjusted = 'adjusted', Voided = 'voided', Error = 'error', Authorized = 'authorized', Draft = 'draft', Partial = 'partial', Processing = 'processing', Overdue = 'overdue', Pending = 'pending', Deleted = 'deleted', PartiallyRefunded = 'partially-refunded', Submitted = 'submitted', Cancelled = 'cancelled', Failed = 'failed' }
export const enum TransactionChannel { Telephone = 'telephone', InPerson = 'in-person', BankBranch = 'bank-branch', Mail = 'mail', Atm = 'atm', Online = 'online', Mobile = 'mobile', Other = 'other' }
export const enum FinancialDisputeStatus { NeedsResponse = 'needs-response', ChargeRefunded = 'charge-refunded', AwaitingEvidence = 'awaiting-evidence', Lost = 'lost', UnderReview = 'under-review', Won = 'won', Closed = 'closed', Escalated = 'escalated' }
export const enum DeviceUsageType { Other = 'other', Industrial = 'industrial', Home = 'home', Business = 'business', Healthcare = 'healthcare', Personal = 'personal', Educational = 'educational' }
export const enum FinancialTransactionType { Transfer = 'transfer', Spend = 'spend', SpendPrepayment = 'spend-prepayment', ReceivePrepayment = 'receive-prepayment', Payment = 'payment', Adjustment = 'adjustment', Interest = 'interest', Fee = 'fee', Receive = 'receive', ReceiveOverpayment = 'receive-overpayment', Sale = 'sale', Deposit = 'deposit', Refund = 'refund', Dividend = 'dividend', Chargeback = 'chargeback', Other = 'other', SpendOverpayment = 'spend-overpayment', Charge = 'charge', Withdrawal = 'withdrawal' }
export const enum AccessControlModel { None = 'none', Mac = 'mac', Dac = 'dac', Rbac = 'rbac', Abac = 'abac', Custom = 'custom' }
export const enum ParticipantType { ExternalParticipant = 'external-participant', Team = 'team', User = 'user', Group = 'group', Organization = 'organization' }
export const enum PriorityLevel { Medium = 'medium', Low = 'low', High = 'high', Urgent = 'urgent', Elevated = 'elevated' }
export const enum PrerequisiteRangeType { Subtotal = 'subtotal', ShippingPrice = 'shipping-price', Quantity = 'quantity' }
export const enum ContentVisibility { Shared = 'shared', Protected = 'protected', Private = 'private', Internal = 'internal', Public = 'public' }
export const enum EntityCategory { Event = 'event', Task = 'task', Link = 'link', Person = 'person', Owner = 'owner', Other = 'other', User = 'user', Document = 'document', Message = 'message', Project = 'project' }
export const enum GenderIdentity { PreferNotToSay = 'prefer-not-to-say', Female = 'female', Male = 'male', Other = 'other' }
export const enum CommunicationMethod { Mail = 'mail', Phone = 'phone', Text = 'text', Email = 'email', PushNotification = 'push-notification', InstantMessage = 'instant-message', VideoCall = 'video-call', Sms = 'sms', Other = 'other', InPerson = 'in-person', SocialMedia = 'social-media' }
export const enum EmailCategoryType { Transactional = 'transactional', Educational = 'educational', Personal = 'personal', Business = 'business', Promotional = 'promotional', Spam = 'spam', Other = 'other', Governmental = 'governmental' }
export const enum UniversalIdentifierType { Url = 'url', Number = 'number', String = 'string', Email = 'email', Uuid = 'uuid' }
export const enum TaskStatus { Done = 'done', Blocked = 'blocked', OnHold = 'on-hold', Todo = 'todo', InProgress = 'in-progress', Cancelled = 'cancelled' }
export const enum UserStatus { Banned = 'banned', Archived = 'archived', WaitListed = 'wait-listed', Deleted = 'deleted', Suspended = 'suspended', Active = 'active', Verified = 'verified', Pending = 'pending', Inactive = 'inactive' }
export const enum PromotionType { FreeShipping = 'free-shipping', FixedAmount = 'fixed-amount', BuyOneGetOne = 'buy-one-get-one', RewardPoints = 'reward-points', Percentage = 'percentage', Other = 'other' }
export const enum MimeType { ImageJpeg = 'image/jpeg', ImageWebp = 'image/webp', ImageGif = 'image/gif', ImageSvgXml = 'image/svg+xml', ImagePng = 'image/png' }
export const enum TaxType { Additive = 'additive', Inclusive = 'inclusive', Variable = 'variable' }
export const enum ModifierType { Text = 'text', List = 'list' }
export const enum CardType { Credit = 'credit', UnknownCard = 'unknown-card', Debit = 'debit' }
export const enum PrepaidType { UnknownPrepaid = 'unknown-prepaid', Prepaid = 'prepaid', NotPrepaid = 'not-prepaid' }
export const enum EntryMethod { OnFile = 'on-file', Swiped = 'swiped', Keyed = 'keyed', Contactless = 'contactless', Emv = 'emv' }
export const enum CvvStatus { Rejected = 'rejected', NotChecked = 'not-checked', Accepted = 'accepted' }
export const enum AvcStatus { Accepted = 'accepted', NotChecked = 'not-checked', Rejected = 'rejected' }
export const enum CreditType { Supplier = 'supplier', Prepayment = 'prepayment', Customer = 'customer', Goodwill = 'goodwill', Overpayment = 'overpayment' }
export const enum CallDirection { Unknown = 'unknown', Inbound = 'inbound', Outbound = 'outbound', Conference = 'conference' }
export const enum SpeakerRole { Attendee = 'attendee', Invitee = 'invitee' }
export const enum FileType { Url = 'url', File = 'file', Folder = 'folder' }
export const enum AiToolChoiceType { Any = 'any', Tool = 'tool', Auto = 'auto', None = 'none' }
export const enum ImageType { Base64 = 'base64' }
export const enum ResponseFormatType { Text = 'text', JsonSchema = 'json-schema', JsonObject = 'json-object' }
export const enum ToolCallType { Function = 'function' }
export const enum AiMessagesContentType { Text = 'text', ToolResult = 'tool-result', Image = 'image', ToolUse = 'tool-use' }
export const enum AiRole { Tool = 'tool', User = 'user', Assistant = 'assistant' }
export const enum JsonSchemaType { Function = 'function' }
export const enum EventStatus { Tentative = 'tentative', Cancelled = 'cancelled', Confirmed = 'confirmed' }
export const enum EventVisibility { Private = 'private', Confidential = 'confidential', Public = 'public' }
export const enum EventReminderAction { Email = 'email', Popup = 'popup' }
export const enum EventRuleType { Exclude = 'exclude', AddDates = 'add-dates', Repeat = 'repeat', ExcludeDates = 'exclude-dates' }
export const enum EventFrequency { Yearly = 'yearly', Weekly = 'weekly', Daily = 'daily', Monthly = 'monthly' }
