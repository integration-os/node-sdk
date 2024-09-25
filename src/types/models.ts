// This file is auto-generated. Do not edit it manually.

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
export const enum AllocationMethod { Across = 'across', Each = 'each' }
export const enum Format { Xml = 'xml', Json = 'json' }
export const enum AppliesTo { AllItems = 'all-items', SpecificItems = 'specific-items', SpecificCategories = 'specific-categories' }
export const enum Status { Active = 'active', Scheduled = 'scheduled', Expired = 'expired' }
export const enum TransactionMethod { BankBranch = 'bank-branch', Mail = 'mail', Telephone = 'telephone', Atm = 'atm', Mobile = 'mobile', Online = 'online' }
export const enum CustomerSelection { Prerequisite = 'prerequisite', All = 'all' }
export const enum Roles { User = 'user', Admin = 'admin', Moderator = 'moderator' }
export const enum TargetSelection { Entitled = 'entitled', All = 'all' }
export const enum SkuValidation { GlobalUnique = 'global-unique', LocalUnique = 'local-unique', None = 'none' }
export const enum MinimumRequirements { None = 'none', MinimumPurchaseAmount = 'minimum-purchase-amount', MinimumQuantityOfItems = 'minimum-quantity-of-items' }
export const enum Gender { Male = 'male', PreferNotToSay = 'prefer not to say', Female = 'female', Other = 'other' }
export const enum ChannelAvailability { Online = 'online', InStore = 'in-store', AllChannels = 'all-channels', InApp = 'in-app' }
export const enum CustomerEligibility { All = 'all', SpecificCustomerGroups = 'specific-customer-groups', SpecificCustomers = 'specific-customers' }
export const enum TargetType { ShippingLine = 'shipping-line', LineItem = 'line-item' }
export const enum AccountType { OtherExpenseRentAndLease = 'other-expense::rent-and-lease', AssetFixedAssetFurniture = 'asset::fixed-asset-furniture', AssetFixedAssetComputers = 'asset::fixed-asset-computers', AssetFixedAssetPhotoVideo = 'asset::fixed-asset-photo-video', LiabilityLongTermLiability = 'liability::long-term-liability', OtherIncomeUnrealisedLossOnSecuritiesNetOfTax = 'other-income::unrealised-loss-on-securities-net-of-tax', OtherCurrentLiabilityProvisionsCurrentLiabilities = 'other-current-liability::provisions-current-liabilities', OtherCurrentLiabilityCurrentPortionOfObligationsUnderFinanceLeases = 'other-current-liability::current-portion-of-obligations-under-finance-leases', AssetBuildings = 'asset::buildings', OtherExpenseExtraordinaryItems = 'other-expense::extraordinary-items', AssetOtherLongTermAssets = 'asset::other-long-term-assets', OtherExpenseTaxRoundoffGainOrLoss = 'other-expense::tax-roundoff-gain-or-loss', ExpenseGlobalTaxExpense = 'expense::global-tax-expense', EquityShareCapital = 'equity::share-capital', AssetOtherCurrentAsset = 'asset::other-current-asset', OtherCurrentLiabilityDutiesAndTaxes = 'other-current-liability::duties-and-taxes', EquityTreasuryStock = 'equity::treasury-stock', ExpenseManagementCompensation = 'expense::management-compensation', AssetOtherIntangibleAssets = 'asset::other-intangible-assets', CostOfGoodsSoldCostOfLaborCos = 'cost-of-goods-sold::cost-of-labor-cos', AssetEmployeeCashAdvances = 'asset::employee-cash-advances', AssetOtherConsumables = 'asset::other-consumables', LiabilityObligationsUnderFinanceLeases = 'liability::obligations-under-finance-leases', AssetSavings = 'asset::savings', OtherExpenseExchangeGainOrLoss = 'other-expense::exchange-gain-or-loss', OtherExpenseOtherHomeOfficeExpenses = 'other-expense::other-home-office-expenses', AssetShortTermLoansAndAdvancesToRelatedParties = 'asset::short-term-loans-and-advances-to-related-parties', RevenueSavingsByTaxScheme = 'revenue::savings-by-tax-scheme', AssetAccumulatedAmortizationOfOtherAssets = 'asset::accumulated-amortization-of-other-assets', AssetFixedAssetSoftware = 'asset::fixed-asset-software', ExpenseFinanceCosts = 'expense::finance-costs', LiabilityShareholderNotesPayable = 'liability::shareholder-notes-payable', OtherExpenseVehicleLoanInterest = 'other-expense::vehicle-loan-interest', OtherExpenseVehicleInsurance = 'other-expense::vehicle-insurance', EquityAccumulatedAdjustment = 'equity::accumulated-adjustment', AssetFixedAssetCopiers = 'asset::fixed-asset-copiers', EquityEstimatedTaxes = 'equity::estimated-taxes', OtherCurrentLiabilityDirectDepositPayable = 'other-current-liability::direct-deposit-payable', AssetLongTermLoansAndAdvancesToRelatedParties = 'asset::long-term-loans-and-advances-to-related-parties', AssetDeferredTax = 'asset::deferred-tax', ExpenseOtherBusinessExpenses = 'expense::other-business-expenses', LiabilityOtherLongTermProvisions = 'liability::other-long-term-provisions', LiabilityStaffAndRelatedLongTermLiabilityAccounts = 'liability::staff-and-related-long-term-liability-accounts', OtherCurrentLiabilityStateLocalIncomeTaxPayable = 'other-current-liability::state-local-income-tax-payable', OtherIncomeDividendIncome = 'other-income::dividend-income', OtherIncomeGainLossOnSaleOfInvestments = 'other-income::gain-loss-on-sale-of-investments', AssetBalWithGovtAuthorities = 'asset::bal-with-govt-authorities', RevenueServiceFeeIncome = 'revenue::service-fee-income', OtherCurrentLiabilityInterestPayables = 'other-current-liability::interest-payables', OtherIncomeOtherMiscellaneousIncome = 'other-income::other-miscellaneous-income', OtherCurrentLiabilityPrepaidExpensesPayable = 'other-current-liability::prepaid-expenses-payable', AssetTradeAndOtherReceivables = 'asset::trade-and-other-receivables', OtherCurrentLiabilityFederalIncomeTaxPayable = 'other-current-liability::federal-income-tax-payable', LiabilityBankLoans = 'liability::bank-loans', AssetCalledUpShareCapitalNotPaid = 'asset::called-up-share-capital-not-paid', AssetLongTermInvestments = 'asset::long-term-investments', ExpenseUnappliedCashBillPaymentExpense = 'expense::unapplied-cash-bill-payment-expense', OtherCurrentLiabilityOtherCurrentLiabilities = 'other-current-liability::other-current-liabilities', OtherExpenseVehicleRegistration = 'other-expense::vehicle-registration', ExpenseOtherMiscellaneousServiceCost = 'expense::other-miscellaneous-service-cost', AssetOtherLongTermInvestments = 'asset::other-long-term-investments', ExpenseShippingAndDeliveryExpense = 'expense::shipping-and-delivery-expense', CostOfGoodsSoldOtherCostsOfServiceCos = 'cost-of-goods-sold::other-costs-of-service-cos', ExpenseExtraordinaryCharges = 'expense::extraordinary-charges', EquityMoneyReceivedAgainstShareWarrants = 'equity::money-received-against-share-warrants', ExpenseCommissionsAndFees = 'expense::commissions-and-fees', RevenueRevenueGeneral = 'revenue::revenue-general', OtherCurrentLiabilitySundryDebtorsAndCreditors = 'other-current-liability::sundry-debtors-and-creditors', LiabilityAccrualsAndDeferredIncome = 'liability::accruals-and-deferred-income', AssetPrepaymentsAndAccruedIncome = 'asset::prepayments-and-accrued-income', AssetInvestmentOther = 'asset::investment-other', EquityAccumulatedOtherComprehensiveIncome = 'equity::accumulated-other-comprehensive-income', ExpensePromotionalMeals = 'expense::promotional-meals', RevenueUnappliedCashPaymentIncome = 'revenue::unapplied-cash-payment-income', LiabilityProvisionsNonCurrentLiabilities = 'liability::provisions-non-current-liabilities', OtherExpenseIncomeTaxOtherExpense = 'other-expense::income-tax-other-expense', AssetInternalTransfers = 'asset::internal-transfers', AssetOrganizationalCosts = 'asset::organizational-costs', OtherIncomeInterestEarned = 'other-income::interest-earned', OtherCurrentLiabilityCurrentPortionEmployeeBenefitsObligations = 'other-current-liability::current-portion-employee-benefits-obligations', OtherExpenseMatCredit = 'other-expense::mat-credit', AssetDevelopmentCosts = 'asset::development-costs', OtherCurrentLiabilityDividendsPayable = 'other-current-liability::dividends-payable', AssetOtherEarMarkedBankAccounts = 'asset::other-ear-marked-bank-accounts', OtherExpenseMortgageInterest = 'other-expense::mortgage-interest', Asset = 'asset', CostOfGoodsSoldCostOfSales = 'cost-of-goods-sold::cost-of-sales', AssetInvestments = 'asset::investments', ExpenseBadDebts = 'expense::bad-debts', Expense = 'expense', OtherCurrentLiabilityCurrentLiabilities = 'other-current-liability::current-liabilities', OtherCurrentLiabilityGlobalTaxSuspense = 'other-current-liability::global-tax-suspense', AssetChecking = 'asset::checking', ExpenseBankCharges = 'expense::bank-charges', AssetAccumulatedDepreciation = 'asset::accumulated-depreciation', AssetOtherAsset = 'asset::other-asset', ExpenseTaxesPaid = 'expense::taxes-paid', EquityPersonalIncome = 'equity::personal-income', AssetAccumulatedDepletion = 'asset::accumulated-depletion', LiabilityAccountsPayable = 'liability::accounts-payable', AssetExpenditureAuthorisationsAndLettersOfCredit = 'asset::expenditure-authorisations-and-letters-of-credit', AssetCumulativeDepreciationOnIntangibleAssets = 'asset::cumulative-depreciation-on-intangible-assets', AssetOtherLongTermLoansAndAdvances = 'asset::other-long-term-loans-and-advances', OtherCurrentLiabilityStaffAndRelatedLiabilityAccounts = 'other-current-liability::staff-and-related-liability-accounts', OtherExpenseExceptionalItems = 'other-expense::exceptional-items', OtherExpenseRepairsAndMaintenance = 'other-expense::repairs-and-maintenance', LiabilityProvisionForLiabilities = 'liability::provision-for-liabilities', AssetAvailableForSaleFinancialAssets = 'asset::available-for-sale-financial-assets', OtherExpenseDepletion = 'other-expense::depletion', AssetUndepositedFunds = 'asset::undeposited-funds', EquityPersonalExpense = 'equity::personal-expense', ExpenseInsurance = 'expense::insurance', ExpenseTravelMeals = 'expense::travel-meals', OtherExpenseVehicle = 'other-expense::vehicle', LiabilityOutstandingDuesMicroSmallEnterprise = 'liability::outstanding-dues-micro-small-enterprise', AssetMoneyMarket = 'asset::money-market', OtherCurrentLiabilityTradeAndOtherPayables = 'other-current-liability::trade-and-other-payables', EquityHealthcare = 'equity::healthcare', OtherIncomeOtherOperatingIncome = 'other-income::other-operating-income', AssetInvestmentMortgageRealEstateLoans = 'asset::investment-mortgage-real-estate-loans', OtherExpenseOtherVehicleExpenses = 'other-expense::other-vehicle-expenses', AssetFurnitureAndFixtures = 'asset::furniture-and-fixtures', AssetLeaseBuyout = 'asset::lease-buyout', ExpenseBorrowingCost = 'expense::borrowing-cost', OtherCurrentLiability = 'other-current-liability', AssetAssetsAvailableForSale = 'asset::assets-available-for-sale', EquityPreferredStock = 'equity::preferred-stock', ExpenseInterestPaid = 'expense::interest-paid', AssetParticipatingInterests = 'asset::participating-interests', OtherExpenseOtherMiscellaneousExpense = 'other-expense::other-miscellaneous-expense', LiabilityAccruedLongTermLiabilities = 'liability::accrued-long-term-liabilities', OtherExpensePenaltiesSettlements = 'other-expense::penalties-settlements', AccountsReceivable = 'accounts-receivable', OtherCurrentLiabilityGlobalTaxPayable = 'other-current-liability::global-tax-payable', ExpenseTravelExpensesGeneralAndAdminExpenses = 'expense::travel-expenses-general-and-admin-expenses', ExpenseOfficeGeneralAdministrativeExpenses = 'expense::office-general-administrative-expenses', AssetInvestmentTaxExemptSecurities = 'asset::investment-tax-exempt-securities', AssetCashAndCashEquivalents = 'asset::cash-and-cash-equivalents', AssetBank = 'asset::bank', ExpenseAdvertisingPromotional = 'expense::advertising-promotional', ExpenseLossOnDiscontinuedOperationsNetOfTax = 'expense::loss-on-discontinued-operations-net-of-tax', ExpenseRentOrLeaseOfBuildings = 'expense::rent-or-lease-of-buildings', LiabilityCreditCard = 'liability::credit-card', OtherExpenseHomeOffice = 'other-expense::home-office', OtherExpenseHomeOwnerRentalInsurance = 'other-expense::home-owner-rental-insurance', Liability = 'liability', OtherExpenseVehicleRepairs = 'other-expense::vehicle-repairs', ExpenseTravel = 'expense::travel', OtherIncomeLossOnDisposalOfAssets = 'other-income::loss-on-disposal-of-assets', ExpenseDuesSubscriptions = 'expense::dues-subscriptions', OtherCurrentLiabilityLineOfCredit = 'other-current-liability::line-of-credit', AssetLoansToOthers = 'asset::loans-to-others', AssetFixedAssetOtherToolsEquipment = 'asset::fixed-asset-other-tools-equipment', ExpenseAmortizationExpense = 'expense::amortization-expense', OtherExpenseUtilities = 'other-expense::utilities', LiabilityDebtsRelatedToParticipatingInterests = 'liability::debts-related-to-participating-interests', ExpenseCharitableContributions = 'expense::charitable-contributions', ExpenseEntertainmentMeals = 'expense::entertainment-meals', EquityFunds = 'equity::funds', AssetRetainage = 'asset::retainage', OtherExpenseWashAndRoadServices = 'other-expense::wash-and-road-services', AssetInventory = 'asset::inventory', EquityPartnerDistributions = 'equity::partner-distributions', ExpenseOtherExternalServices = 'expense::other-external-services', OtherCurrentLiabilityTrustAccountsLiabilities = 'other-current-liability::trust-accounts-liabilities', ExpenseIncomeTaxExpense = 'expense::income-tax-expense', EquityOtherFreeReserves = 'equity::other-free-reserves', AssetVehicles = 'asset::vehicles', AssetLand = 'asset::land', CostOfGoodsSoldEquipmentRentalCos = 'cost-of-goods-sold::equipment-rental-cos', OtherExpenseDeferredTaxExpense = 'other-expense::deferred-tax-expense', AssetCapitalWip = 'asset::capital-wip', AssetProvisionsCurrentAssets = 'asset::provisions-current-assets', AssetLicenses = 'asset::licenses', RevenueDiscountsRefundsGiven = 'revenue::discounts-refunds-given', RevenueOtherCurrentOperatingIncome = 'revenue::other-current-operating-income', CostOfGoodsSoldFreightAndDeliveryCost = 'cost-of-goods-sold::freight-and-delivery-cost', EquityInvestmentGrants = 'equity::investment-grants', ExpenseTravelExpensesSellingExpense = 'expense::travel-expenses-selling-expense', AssetCashOnHand = 'asset::cash-on-hand', OtherExpenseVehicleLoan = 'other-expense::vehicle-loan', AssetInvestmentUsGovernmentObligations = 'asset::investment-us-government-obligations', ExpenseRepairMaintenance = 'expense::repair-maintenance', OtherCurrentLiabilitySocialSecurityAgencies = 'other-current-liability::social-security-agencies', RevenueOwnWorkCapitalized = 'revenue::own-work-capitalized', EquityPartnersEquity = 'equity::partners-equity', LiabilityLiabilitiesRelatedToAssetsHeldForSale = 'liability::liabilities-related-to-assets-held-for-sale', OtherExpenseParkingAndTolls = 'other-expense::parking-and-tolls', OtherIncome = 'other-income', AssetGlobalTaxRefund = 'asset::global-tax-refund', ExpenseOtherSellingExpenses = 'expense::other-selling-expenses', OtherCurrentLiabilityPayrollTaxPayable = 'other-current-liability::payroll-tax-payable', AssetDepletableAssets = 'asset::depletable-assets', AssetLoansToOfficers = 'asset::loans-to-officers', LiabilityNotesPayable = 'liability::notes-payable', AssetLeaseholdImprovements = 'asset::leasehold-improvements', AssetOtherCurrentAssets = 'asset::other-current-assets', ExpenseOtherRentalCosts = 'expense::other-rental-costs', RevenueNonProfitIncome = 'revenue::non-profit-income', AssetFixedAssetPhone = 'asset::fixed-asset-phone', LiabilityLongTermBorrowings = 'liability::long-term-borrowings', OtherCurrentLiabilityPayrollClearing = 'other-current-liability::payroll-clearing', AssetAccumulatedAmortization = 'asset::accumulated-amortization', OtherExpenseGasAndFuel = 'other-expense::gas-and-fuel', EquityCapitalReserves = 'equity::capital-reserves', OtherIncomeOtherInvestmentIncome = 'other-income::other-investment-income', EquityCommonStock = 'equity::common-stock', OtherExpenseVehicleLease = 'other-expense::vehicle-lease', CostOfGoodsSoldShippingFreightDeliveryCos = 'cost-of-goods-sold::shipping-freight-delivery-cos', EquityRetainedEarnings = 'equity::retained-earnings', ExpenseEntertainment = 'expense::entertainment', OtherExpense = 'other-expense', RevenueSalesOfProductIncome = 'revenue::sales-of-product-income', EquityShareApplicationMoneyPendingAllotment = 'equity::share-application-money-pending-allotment', ExpenseAuto = 'expense::auto', LiabilityLongTermEmployeeBenefitObligations = 'liability::long-term-employee-benefit-obligations', RevenueCashReceiptIncome = 'revenue::cash-receipt-income', AssetFixedAsset = 'asset::fixed-asset', LiabilityLongTermDebit = 'liability::long-term-debit', OtherCurrentLiabilityLoanPayable = 'other-current-liability::loan-payable', LiabilityGroupAndAssociates = 'liability::group-and-associates', OtherCurrentLiabilityRentsInTrustLiability = 'other-current-liability::rents-in-trust-liability', ExpenseOfficeExpenses = 'expense::office-expenses', AssetRentsHeldInTrust = 'asset::rents-held-in-trust', RevenueOperatingGrants = 'revenue::operating-grants', ExpenseSuppliesMaterials = 'expense::supplies-materials', ExpenseAppropriationsToDepreciation = 'expense::appropriations-to-depreciation', EquityEquityInEarningsOfSubsidiuaries = 'equity::equity-in-earnings-of-subsidiuaries', LiabilityDeferredTaxLiabilities = 'liability::deferred-tax-liabilities', OtherIncomeGainLossOnSaleOfFixedAssets = 'other-income::gain-loss-on-sale-of-fixed-assets', LiabilityAccruedVacationPayable = 'liability::accrued-vacation-payable', AssetShortTermInvestmentsInRelatedParties = 'asset::short-term-investments-in-related-parties', EquityDividendDisbursed = 'equity::dividend-disbursed', AssetIntangibleAssets = 'asset::intangible-assets', EquityPartnerContributions = 'equity::partner-contributions', ExpenseUtilities = 'expense::utilities', LiabilityOutstandingDuesOtherThanMicroSmallEnterprise = 'liability::outstanding-dues-other-than-micro-small-enterprise', OtherCurrentLiabilityShortTermBorrowings = 'other-current-liability::short-term-borrowings', EquityOwnersEquity = 'equity::owners-equity', ExpenseCostOfLabor = 'expense::cost-of-labor', ExpenseLegalProfessionalFees = 'expense::legal-professional-fees', OtherCurrentLiabilityInsurancePayable = 'other-current-liability::insurance-payable', AssetGoodwill = 'asset::goodwill', AssetMachineryAndEquipment = 'asset::machinery-and-equipment', AssetProvisionsNonCurrentAssets = 'asset::provisions-non-current-assets', AssetNonCurrentAssets = 'asset::non-current-assets', AssetTrustAccounts = 'asset::trust-accounts', ExpensePayrollExpenses = 'expense::payroll-expenses', ExpenseOtherCurrentOperatingCharges = 'expense::other-current-operating-charges', ExpensePenaltiesSettlements = 'expense::penalties-settlements', AssetGlobalTaxDeferred = 'asset::global-tax-deferred', OtherCurrentLiabilitySalesTaxPayable = 'other-current-liability::sales-tax-payable', RevenueSalesWholesale = 'revenue::sales-wholesale', RevenueOtherPrimaryIncome = 'revenue::other-primary-income', AssetAssetsHeldForSale = 'asset::assets-held-for-sale', AssetAssetsInCourseOfConstruction = 'asset::assets-in-course-of-construction', AssetLoansToStockholders = 'asset::loans-to-stockholders', LiabilityGovernmentAndOtherPublicAuthorities = 'liability::government-and-other-public-authorities', ExpenseEquipmentRental = 'expense::equipment-rental', Income = 'income', AssetProvisionsFixedAssets = 'asset::provisions-fixed-assets', OtherExpenseAmortization = 'other-expense::amortization', ExpenseDistributionCosts = 'expense::distribution-costs', Equity = 'equity', LiabilityOtherLongTermLiabilities = 'liability::other-long-term-liabilities', AssetLandAsset = 'asset::land-asset', EquityPaidInCapitalOrSurplus = 'equity::paid-in-capital-or-surplus', ExpenseProjectStudiesSurveysAssessments = 'expense::project-studies-surveys-assessments', ExpenseShippingFreightDelivery = 'expense::shipping-freight-delivery', OtherIncomeTaxExemptInterest = 'other-income::tax-exempt-interest', ExpensePurchasesRebates = 'expense::purchases-rebates', OtherCurrentLiabilityAccruedLiabilities = 'other-current-liability::accrued-liabilities', AssetPrepaidExpenses = 'asset::prepaid-expenses', OtherCurrentLiabilityCurrentTaxLiability = 'other-current-liability::current-tax-liability', AssetIntangibleAssetsUnderDevelopment = 'asset::intangible-assets-under-development', ExpenseStaffCosts = 'expense::staff-costs', ExpenseExternalServices = 'expense::external-services', EquityOpeningBalanceEquity = 'equity::opening-balance-equity', OtherCurrentLiabilityProvisionForWarrantyObligations = 'other-current-liability::provision-for-warranty-obligations', RevenueIncome = 'revenue::income', CostOfGoodsSoldSuppliesMaterialsCogs = 'cost-of-goods-sold::supplies-materials-cogs', OtherExpenseDepreciation = 'other-expense::depreciation', CostOfGoodsSold = 'cost-of-goods-sold', EquityCalledUpShareCapital = 'equity::called-up-share-capital', RevenueSalesRetail = 'revenue::sales-retail', AssetAllowanceForBadDebts = 'asset::allowance-for-bad-debts', OtherExpensePriorPeriodItems = 'other-expense::prior-period-items', AssetSecurityDeposits = 'asset::security-deposits', ExpenseSundry = 'expense::sundry', AssetOtherFixedAssets = 'asset::other-fixed-assets' }
export const enum Country { Chad = 'chad', Serbia = 'serbia', Guyana = 'guyana', Switzerland = 'switzerland', Mozambique = 'mozambique', Kyrgyzstan = 'kyrgyzstan', Angola = 'angola', CostaRica = 'costa-rica', Paraguay = 'paraguay', Greece = 'greece', Comoros = 'comoros', Andorra = 'andorra', Brazil = 'brazil', China = 'china', Djibouti = 'djibouti', SouthAfrica = 'south-africa', Philippines = 'philippines', Mauritius = 'mauritius', Turkey = 'turkey', Estonia = 'estonia', Mauritania = 'mauritania', Rwanda = 'rwanda', Eritrea = 'eritrea', Uzbekistan = 'uzbekistan', Luxembourg = 'luxembourg', Malaysia = 'malaysia', Fiji = 'fiji', Palestine = 'palestine', Suriname = 'suriname', Morocco = 'morocco', Dominica = 'dominica', Jamaica = 'jamaica', Benin = 'benin', SaintKittsAndNevis = 'saint-kitts-and-nevis', Monaco = 'monaco', Ecuador = 'ecuador', NorthMacedonia = 'north-macedonia', Belgium = 'belgium', Lesotho = 'lesotho', Oman = 'oman', Libya = 'libya', UnitedArabEmirates = 'united-arab-emirates', Afghanistan = 'afghanistan', Egypt = 'egypt', CentralAfricanRepublic = 'central-african-republic', Guatemala = 'guatemala', Georgia = 'georgia', Kazakhstan = 'kazakhstan', Slovakia = 'slovakia', Pakistan = 'pakistan', NewZealand = 'new-zealand', Burundi = 'burundi', Myanmar = 'myanmar', Iran = 'iran', Qatar = 'qatar', ElSalvador = 'el-salvador', Romania = 'romania', SaoTomeAndPrincipe = 'sao-tome-and-principe', Zimbabwe = 'zimbabwe', Latvia = 'latvia', Maldives = 'maldives', Seychelles = 'seychelles', Cuba = 'cuba', CongoDemocraticRepublic = 'congo-democratic-republic', Malta = 'malta', Italy = 'italy', Lithuania = 'lithuania', Canada = 'canada', Kiribati = 'kiribati', Moldova = 'moldova', Tuvalu = 'tuvalu', SouthSudan = 'south-sudan', Mali = 'mali', Finland = 'finland', DominicanRepublic = 'dominican-republic', Jordan = 'jordan', Cameroon = 'cameroon', SaintLucia = 'saint-lucia', TimorLeste = 'timor-leste', Micronesia = 'micronesia', Spain = 'spain', CaboVerde = 'cabo-verde', Belarus = 'belarus', Ireland = 'ireland', Portugal = 'portugal', Colombia = 'colombia', Slovenia = 'slovenia', Nepal = 'nepal', Kuwait = 'kuwait', PapuaNewGuinea = 'papua-new-guinea', Peru = 'peru', Thailand = 'thailand', Tanzania = 'tanzania', Armenia = 'armenia', Lebanon = 'lebanon', SierraLeone = 'sierra-leone', Vanuatu = 'vanuatu', Azerbaijan = 'azerbaijan', Turkmenistan = 'turkmenistan', Bolivia = 'bolivia', Grenada = 'grenada', Kenya = 'kenya', Brunei = 'brunei', Bangladesh = 'bangladesh', CzechRepublic = 'czech-republic', Bhutan = 'bhutan', BosniaAndHerzegovina = 'bosnia-and-herzegovina', Nicaragua = 'nicaragua', Norway = 'norway', Japan = 'japan', Ghana = 'ghana', AntiguaAndBarbuda = 'antigua-and-barbuda', Haiti = 'haiti', UnitedKingdom = 'united-kingdom', Montenegro = 'montenegro', Albania = 'albania', Bahrain = 'bahrain', Uruguay = 'uruguay', SanMarino = 'san-marino', Tajikistan = 'tajikistan', Panama = 'panama', Ukraine = 'ukraine', Samoa = 'samoa', Liberia = 'liberia', Senegal = 'senegal', NorthKorea = 'north-korea', Madagascar = 'madagascar', Chile = 'chile', Indonesia = 'indonesia', Taiwan = 'taiwan', VaticanCity = 'vatican-city', Argentina = 'argentina', Australia = 'australia', France = 'france', Syria = 'syria', Honduras = 'honduras', Croatia = 'croatia', Togo = 'togo', Botswana = 'botswana', Niger = 'niger', UnitedStates = 'united-states', Ethiopia = 'ethiopia', Gambia = 'gambia', GuineaBissau = 'guinea-bissau', Israel = 'israel', Denmark = 'denmark', Palau = 'palau', Poland = 'poland', SaudiArabia = 'saudi-arabia', Russia = 'russia', CoteDIvoire = 'cote-d-ivoire', Iceland = 'iceland', Cambodia = 'cambodia', Somalia = 'somalia', Bahamas = 'bahamas', Iraq = 'iraq', Liechtenstein = 'liechtenstein', SolomonIslands = 'solomon-islands', SriLanka = 'sri-lanka', Sweden = 'sweden', Tonga = 'tonga', Sudan = 'sudan', Hungary = 'hungary', TrinidadAndTobago = 'trinidad-and-tobago', Tunisia = 'tunisia', Uganda = 'uganda', Zambia = 'zambia', Singapore = 'singapore', Mongolia = 'mongolia', MarshallIslands = 'marshall-islands', EquatorialGuinea = 'equatorial-guinea', Eswatini = 'eswatini', Namibia = 'namibia', Bulgaria = 'bulgaria', Yemen = 'yemen', Venezuela = 'venezuela', Vietnam = 'vietnam', Nauru = 'nauru', Belize = 'belize', Cyprus = 'cyprus', Gabon = 'gabon', India = 'india', Laos = 'laos', SaintVincentAndTheGrenadines = 'saint-vincent-and-the-grenadines', CongoRepublic = 'congo-republic', Netherlands = 'netherlands', Austria = 'austria', Barbados = 'barbados', Algeria = 'algeria', SouthKorea = 'south-korea', Malawi = 'malawi', BurkinaFaso = 'burkina-faso', Germany = 'germany', Mexico = 'mexico', Guinea = 'guinea', Nigeria = 'nigeria' }
export const enum GlobalTaxType { SalesTax = 'sales-tax', PropertyTax = 'property-tax', Other = 'other', Vat = 'vat', Gst = 'gst', ExciseTax = 'excise-tax', CustomsDuty = 'customs-duty' }
export const enum IdentityProvider { Tiktok = 'tiktok', Dribbble = 'dribbble', Facebook = 'facebook', Discord = 'discord', Linkedin = 'linkedin', Reddit = 'reddit', Slack = 'slack', Github = 'github', Vimeo = 'vimeo', Apple = 'apple', Google = 'google', Microsoft = 'microsoft', Pinterest = 'pinterest', Foursquare = 'foursquare', Whatsapp = 'whatsapp', Qq = 'qq', Behance = 'behance', Signal = 'signal', Amazon = 'amazon', Snapchat = 'snapchat', Tumblr = 'tumblr', Flickr = 'flickr', Telegram = 'telegram', Yahoo = 'yahoo', Line = 'line', Instagram = 'instagram', Other = 'other', Paypal = 'paypal', Wechat = 'wechat', Twitter = 'twitter' }
export const enum AccountEngagementLevel { Cold = 'cold', Hot = 'hot', Warm = 'warm', Unknown = 'unknown' }
export const enum ReviewApprovalStatus { Revised = 'revised', Approved = 'approved', Pending = 'pending', Rejected = 'rejected', InReview = 'in-review' }
export const enum StakeholderType { Customer = 'customer', Competitor = 'competitor', Investor = 'investor', Partner = 'partner', Vendor = 'vendor', Other = 'other' }
export const enum AccountStatus { Inactive = 'inactive', Suspended = 'suspended', Pending = 'pending', Active = 'active', Closed = 'closed' }
export const enum CampaignStatus { Completed = 'completed', Archived = 'archived', Cancelled = 'cancelled', Draft = 'draft', Active = 'active', Planned = 'planned', Scheduled = 'scheduled', Paused = 'paused' }
export const enum CustomerType { B2c = 'b2c', Online = 'online', Retail = 'retail', B2b = 'b2b', Wholesale = 'wholesale', Corporate = 'corporate' }
export const enum MessageContentType { Contact = 'contact', Video = 'video', File = 'file', Location = 'location', Html = 'html', Text = 'text', Image = 'image', Audio = 'audio', Voice = 'voice', Document = 'document', Sticker = 'sticker', Link = 'link', Gif = 'gif' }
export const enum ReactionType { Bookmark = 'bookmark', Dislike = 'dislike', Laugh = 'laugh', Like = 'like', Sad = 'sad', Interested = 'interested', Angry = 'angry', Love = 'love', Wow = 'wow' }
export const enum SupportTicketPriority { Urgent = 'urgent', High = 'high', Medium = 'medium', Low = 'low', Immediate = 'immediate' }
export const enum IssueLifecycleStatus { Open = 'open', Pending = 'pending', Resolved = 'resolved', InProgress = 'in-progress', Cancelled = 'cancelled', OnHold = 'on-hold', Closed = 'closed' }
export const enum OrderStatus { Completed = 'completed', Pending = 'pending', Shipped = 'shipped', Returned = 'returned', AwaitingPayment = 'awaiting-payment', Delivered = 'delivered', Confirmed = 'confirmed', AwaitingPickup = 'awaiting-pickup', Refunded = 'refunded', Disputed = 'disputed', Failed = 'failed', Abandoned = 'abandoned', PartiallyFulfilled = 'partially-fulfilled', Processing = 'processing', Cancelled = 'cancelled', AwaitingShipment = 'awaiting-shipment', OnHold = 'on-hold', Draft = 'draft' }
export const enum DiscountType { FixedAmount = 'fixed-amount', BuyOneGetOne = 'buy-one-get-one', TieredDiscount = 'tiered-discount', ConditionalDiscount = 'conditional-discount', VariablePercentage = 'variable-percentage', Percentage = 'percentage', VariableAmount = 'variable-amount', UnknownDiscount = 'unknown-discount' }
export const enum FulfillmentStatus { Cancelled = 'cancelled', Returned = 'returned', Pending = 'pending', InTransit = 'in-transit', Failure = 'failure', Delivered = 'delivered' }
export const enum ProductAvailabilityStatus { OutOfStock = 'out-of-stock', Discontinued = 'discontinued', BackOrder = 'back-order', PreOrder = 'pre-order', InStock = 'in-stock' }
export const enum ExpenseApprovalStatus { Reviewing = 'reviewing', Denied = 'denied', Approved = 'approved', New = 'new', Processed = 'processed', Cancelled = 'cancelled', Pending = 'pending', Reimbursed = 'reimbursed' }
export const enum FinancialChargeType { ProcessingFee = 'processing-fee', LateFee = 'late-fee', Commission = 'commission', TransactionFee = 'transaction-fee', ServiceCharge = 'service-charge', Other = 'other', InterestCharge = 'interest-charge' }
export const enum BillingStatus { Overdue = 'overdue', PartiallyPaid = 'partially-paid', Paid = 'paid', Unpaid = 'unpaid', Submitted = 'submitted', Voided = 'voided', Draft = 'draft', Pending = 'pending', Deleted = 'deleted', Authorised = 'authorised' }
export const enum InvoiceAdjustmentType { Discount = 'discount', Tax = 'tax', Shipping = 'shipping', Tip = 'tip', Other = 'other' }
export const enum DataType { Custom = 'custom', Binary = 'binary', Date = 'date', Json = 'json', Boolean = 'boolean', Array = 'array', String = 'string', Number = 'number', Undefined = 'undefined', Object = 'object', Timestamp = 'timestamp', Null = 'null' }
export const enum EmploymentType { Internship = 'internship', Permanent = 'permanent', PartTime = 'part-time', FullTime = 'full-time', Freelance = 'freelance', Contract = 'contract', Volunteer = 'volunteer', Temporary = 'temporary', Seasonal = 'seasonal' }
export const enum TimeCycle { AdHoc = 'ad-hoc', Quarterly = 'quarterly', Annually = 'annually', Hourly = 'hourly', Daily = 'daily', SemiMonthly = 'semi-monthly', Weekly = 'weekly', Biweekly = 'biweekly', Monthly = 'monthly', Secondly = 'secondly', SemiAnnually = 'semi-annually', Biennially = 'biennially', Custom = 'custom', Triennially = 'triennially', Minutely = 'minutely' }
export const enum FinancialTrackingCategories { Product = 'product', Service = 'service', None = 'none', Division = 'division', Location = 'location', Project = 'project', Customer = 'customer', CostCenter = 'cost-center', Class = 'class', Department = 'department', Employee = 'employee', Other = 'other', Vendor = 'vendor' }
export const enum CampaignType { SocialMedia = 'social-media', Display = 'display', SearchEngine = 'search-engine', Other = 'other', Email = 'email' }
export const enum ContactAddressType { Billing = 'billing', Work = 'work', Home = 'home', Business = 'business', Personal = 'personal', Temporary = 'temporary', Other = 'other', Shipping = 'shipping' }
export const enum LeadLifecycleStatus { Open = 'open', Unqualified = 'unqualified', Connected = 'connected', New = 'new', InProcess = 'in-process', Converted = 'converted', AttemptedToContact = 'attempted-to-contact', BadTiming = 'bad-timing', Revisited = 'revisited', Lost = 'lost' }
export const enum ParticipantEngagementStatus { Inactive = 'inactive', Banned = 'banned', Active = 'active', Guest = 'guest', Left = 'left', Admin = 'admin', Moderator = 'moderator' }
export const enum ItemEntityStatus { Inactive = 'inactive', Suspended = 'suspended', Active = 'active', Archived = 'archived', Pending = 'pending', Deleted = 'deleted', Completed = 'completed' }
export const enum Currency { INR = 'inr', EGP = 'egp', HTG = 'htg', VES = 'ves', AUD = 'aud', ISK = 'isk', ERN = 'ern', DOP = 'dop', FOK = 'fok', DZD = 'dzd', IDR = 'idr', GMD = 'gmd', CAD = 'cad', MRU = 'mru', SOS = 'sos', XOF = 'xof', XPF = 'xpf', ARS = 'ars', AFN = 'afn', BOB = 'bob', PAB = 'pab', ANG = 'ang', KES = 'kes', TWD = 'twd', KID = 'kid', XCD = 'xcd', AED = 'aed', CHF = 'chf', KWD = 'kwd', NZD = 'nzd', KMF = 'kmf', IQD = 'iqd', ALL = 'all', AOA = 'aoa', HNL = 'hnl', BND = 'bnd', TND = 'tnd', MXN = 'mxn', KGS = 'kgs', LYD = 'lyd', MYR = 'myr', SRD = 'srd', SCR = 'scr', CNY = 'cny', SZL = 'szl', JMD = 'jmd', XAF = 'xaf', XDR = 'xdr', CLP = 'clp', CRC = 'crc', MZN = 'mzn', CDF = 'cdf', GHS = 'ghs', CUC = 'cuc', NAD = 'nad', NIO = 'nio', PYG = 'pyg', SBD = 'sbd', IRR = 'irr', MOP = 'mop', BTN = 'btn', JOD = 'jod', BYN = 'byn', CZK = 'czk', KHR = 'khr', NOK = 'nok', TOP = 'top', SAR = 'sar', SSP = 'ssp', UYU = 'uyu', PLN = 'pln', BZD = 'bzd', LRD = 'lrd', ZAR = 'zar', VND = 'vnd', BIF = 'bif', BGN = 'bgn', UAH = 'uah', JPY = 'jpy', MWK = 'mwk', KYD = 'kyd', MDL = 'mdl', MMK = 'mmk', GTQ = 'gtq', BMD = 'bmd', LKR = 'lkr', UGX = 'ugx', BBD = 'bbd', KRW = 'krw', DKK = 'dkk', ZWL = 'zwl', HRK = 'hrk', PEN = 'pen', BHD = 'bhd', IMP = 'imp', RWF = 'rwf', JEP = 'jep', EUR = 'eur', SLL = 'sll', WST = 'wst', USD = 'usd', YER = 'yer', PHP = 'php', GEL = 'gel', LSL = 'lsl', MUR = 'mur', TMT = 'tmt', BRL = 'brl', GGP = 'ggp', GYD = 'gyd', HKD = 'hkd', GNF = 'gnf', PKR = 'pkr', RSD = 'rsd', VUV = 'vuv', THB = 'thb', AZN = 'azn', SDG = 'sdg', BWP = 'bwp', DJF = 'djf', FKP = 'fkp', PGK = 'pgk', ETB = 'etb', OMR = 'omr', COP = 'cop', TRY = 'try', CUP = 'cup', LAK = 'lak', MNT = 'mnt', MAD = 'mad', MKD = 'mkd', KZT = 'kzt', BDT = 'bdt', STN = 'stn', SHP = 'shp', MGA = 'mga', FJD = 'fjd', GBP = 'gbp', LBP = 'lbp', ILS = 'ils', QAR = 'qar', TZS = 'tzs', RON = 'ron', CVE = 'cve', GIP = 'gip', SEK = 'sek', SYP = 'syp', TTD = 'ttd', UZS = 'uzs', TJS = 'tjs', KPW = 'kpw', HUF = 'huf', BSD = 'bsd', BAM = 'bam', TVD = 'tvd', NGN = 'ngn', MVR = 'mvr', ZMW = 'zmw', RUB = 'rub', AWG = 'awg', AMD = 'amd', SGD = 'sgd', NPR = 'npr' }
export const enum CustomerEligibilityStatus { AllCustomers = 'all-customers', ReturningCustomers = 'returning-customers', NewCustomers = 'new-customers', SpecificConditions = 'specific-conditions', VipCustomers = 'vip-customers', Other = 'other' }
export const enum ItemCondition { OpenBox = 'open-box', Damaged = 'damaged', Used = 'used', LikeNew = 'like-new', Refurbished = 'refurbished', New = 'new' }
export const enum TransactionType { Adjustment = 'adjustment', Payment = 'payment', Withdrawal = 'withdrawal', Deposit = 'deposit', Fee = 'fee', Transfer = 'transfer', Refund = 'refund', Charge = 'charge' }
export const enum EntityLifecycleStatus { Draft = 'draft', Preorder = 'preorder', Active = 'active', Deleted = 'deleted', Archived = 'archived', Inactive = 'inactive', Scheduled = 'scheduled' }
export const enum JournalEntryStatus { Error = 'error', Voided = 'voided', Corrected = 'corrected', Pending = 'pending', Draft = 'draft', Posted = 'posted' }
export const enum DayOfWeek { Wednesday = 'wednesday', Saturday = 'saturday', Monday = 'monday', Tuesday = 'tuesday', Friday = 'friday', Thursday = 'thursday', Sunday = 'sunday' }
export const enum AccountingAccountType { ExpensePromotionalMeals = 'expense::promotional-meals', AssetEmployeeCashAdvances = 'asset::employee-cash-advances', AssetCapitalWip = 'asset::capital-wip', AssetBuildings = 'asset::buildings', AssetBank = 'asset::bank', AssetFixedAssetFurniture = 'asset::fixed-asset-furniture', ExpenseOfficeExpenses = 'expense::office-expenses', OtherCurrentLiabilityCurrentLiabilities = 'other-current-liability::current-liabilities', EquityEquityInEarningsOfSubsidiuaries = 'equity::equity-in-earnings-of-subsidiuaries', RevenueSavingsByTaxScheme = 'revenue::savings-by-tax-scheme', OtherCurrentLiabilityTrustAccountsLiabilities = 'other-current-liability::trust-accounts-liabilities', OtherIncomeTaxExemptInterest = 'other-income::tax-exempt-interest', OtherCurrentLiabilityStaffAndRelatedLiabilityAccounts = 'other-current-liability::staff-and-related-liability-accounts', OtherExpenseGasAndFuel = 'other-expense::gas-and-fuel', AssetInternalTransfers = 'asset::internal-transfers', ExpenseGlobalTaxExpense = 'expense::global-tax-expense', ExpenseDuesSubscriptions = 'expense::dues-subscriptions', RevenueSalesRetail = 'revenue::sales-retail', OtherIncomeGainLossOnSaleOfInvestments = 'other-income::gain-loss-on-sale-of-investments', AssetSecurityDeposits = 'asset::security-deposits', ExpenseAppropriationsToDepreciation = 'expense::appropriations-to-depreciation', OtherExpenseOtherMiscellaneousExpense = 'other-expense::other-miscellaneous-expense', ExpenseEquipmentRental = 'expense::equipment-rental', AssetTradeAndOtherReceivables = 'asset::trade-and-other-receivables', OtherExpenseDepreciation = 'other-expense::depreciation', OtherExpense = 'other-expense', AssetOtherConsumables = 'asset::other-consumables', CostOfGoodsSoldSuppliesMaterialsCogs = 'cost-of-goods-sold::supplies-materials-cogs', AssetMachineryAndEquipment = 'asset::machinery-and-equipment', OtherCurrentLiabilityLineOfCredit = 'other-current-liability::line-of-credit', LiabilityStaffAndRelatedLongTermLiabilityAccounts = 'liability::staff-and-related-long-term-liability-accounts', AssetLoansToStockholders = 'asset::loans-to-stockholders', OtherCurrentLiabilitySundryDebtorsAndCreditors = 'other-current-liability::sundry-debtors-and-creditors', AssetFixedAssetPhone = 'asset::fixed-asset-phone', LiabilityProvisionsNonCurrentLiabilities = 'liability::provisions-non-current-liabilities', LiabilityLongTermLiability = 'liability::long-term-liability', AssetVehicles = 'asset::vehicles', AssetAccumulatedDepreciation = 'asset::accumulated-depreciation', Equity = 'equity', RevenueDiscountsRefundsGiven = 'revenue::discounts-refunds-given', AssetLoansToOfficers = 'asset::loans-to-officers', AccountsReceivable = 'accounts-receivable', AssetAccumulatedAmortization = 'asset::accumulated-amortization', AssetOtherIntangibleAssets = 'asset::other-intangible-assets', AssetParticipatingInterests = 'asset::participating-interests', ExpensePurchasesRebates = 'expense::purchases-rebates', EquityMoneyReceivedAgainstShareWarrants = 'equity::money-received-against-share-warrants', OtherExpenseMortgageInterest = 'other-expense::mortgage-interest', AssetOtherCurrentAsset = 'asset::other-current-asset', AssetInvestmentOther = 'asset::investment-other', AssetFixedAssetComputers = 'asset::fixed-asset-computers', ExpenseOtherExternalServices = 'expense::other-external-services', OtherExpenseExtraordinaryItems = 'other-expense::extraordinary-items', OtherCurrentLiabilityDirectDepositPayable = 'other-current-liability::direct-deposit-payable', OtherExpensePenaltiesSettlements = 'other-expense::penalties-settlements', Asset = 'asset', OtherExpensePriorPeriodItems = 'other-expense::prior-period-items', ExpenseTaxesPaid = 'expense::taxes-paid', OtherIncomeUnrealisedLossOnSecuritiesNetOfTax = 'other-income::unrealised-loss-on-securities-net-of-tax', AssetAvailableForSaleFinancialAssets = 'asset::available-for-sale-financial-assets', OtherExpenseAmortization = 'other-expense::amortization', LiabilityLongTermEmployeeBenefitObligations = 'liability::long-term-employee-benefit-obligations', OtherIncomeLossOnDisposalOfAssets = 'other-income::loss-on-disposal-of-assets', AssetLandAsset = 'asset::land-asset', OtherExpenseVehicleInsurance = 'other-expense::vehicle-insurance', ExpenseDistributionCosts = 'expense::distribution-costs', CostOfGoodsSoldEquipmentRentalCos = 'cost-of-goods-sold::equipment-rental-cos', AssetDepletableAssets = 'asset::depletable-assets', ExpenseStaffCosts = 'expense::staff-costs', ExpenseShippingAndDeliveryExpense = 'expense::shipping-and-delivery-expense', AssetInventory = 'asset::inventory', OtherCurrentLiabilityFederalIncomeTaxPayable = 'other-current-liability::federal-income-tax-payable', EquityPreferredStock = 'equity::preferred-stock', ExpenseInterestPaid = 'expense::interest-paid', AssetAccumulatedDepletion = 'asset::accumulated-depletion', ExpenseUtilities = 'expense::utilities', AssetPrepaymentsAndAccruedIncome = 'asset::prepayments-and-accrued-income', OtherExpenseVehicleLease = 'other-expense::vehicle-lease', OtherExpenseDepletion = 'other-expense::depletion', AssetDeferredTax = 'asset::deferred-tax', AssetLongTermLoansAndAdvancesToRelatedParties = 'asset::long-term-loans-and-advances-to-related-parties', OtherExpenseVehicleRegistration = 'other-expense::vehicle-registration', AssetFixedAsset = 'asset::fixed-asset', LiabilityOutstandingDuesOtherThanMicroSmallEnterprise = 'liability::outstanding-dues-other-than-micro-small-enterprise', EquityOwnersEquity = 'equity::owners-equity', ExpenseOtherBusinessExpenses = 'expense::other-business-expenses', EquityHealthcare = 'equity::healthcare', EquityTreasuryStock = 'equity::treasury-stock', ExpenseRepairMaintenance = 'expense::repair-maintenance', ExpenseTravelExpensesSellingExpense = 'expense::travel-expenses-selling-expense', AssetAssetsInCourseOfConstruction = 'asset::assets-in-course-of-construction', LiabilityGroupAndAssociates = 'liability::group-and-associates', ExpenseEntertainmentMeals = 'expense::entertainment-meals', ExpenseLossOnDiscontinuedOperationsNetOfTax = 'expense::loss-on-discontinued-operations-net-of-tax', AssetBalWithGovtAuthorities = 'asset::bal-with-govt-authorities', RevenueUnappliedCashPaymentIncome = 'revenue::unapplied-cash-payment-income', AssetInvestmentMortgageRealEstateLoans = 'asset::investment-mortgage-real-estate-loans', AssetFurnitureAndFixtures = 'asset::furniture-and-fixtures', OtherExpenseUtilities = 'other-expense::utilities', OtherExpenseIncomeTaxOtherExpense = 'other-expense::income-tax-other-expense', LiabilityShareholderNotesPayable = 'liability::shareholder-notes-payable', OtherCurrentLiabilityInsurancePayable = 'other-current-liability::insurance-payable', AssetAssetsHeldForSale = 'asset::assets-held-for-sale', EquityShareCapital = 'equity::share-capital', OtherExpenseHomeOffice = 'other-expense::home-office', LiabilityNotesPayable = 'liability::notes-payable', AssetDevelopmentCosts = 'asset::development-costs', AssetFixedAssetPhotoVideo = 'asset::fixed-asset-photo-video', EquityRetainedEarnings = 'equity::retained-earnings', AssetChecking = 'asset::checking', AssetUndepositedFunds = 'asset::undeposited-funds', OtherExpenseRentAndLease = 'other-expense::rent-and-lease', OtherCurrentLiabilityProvisionForWarrantyObligations = 'other-current-liability::provision-for-warranty-obligations', CostOfGoodsSoldFreightAndDeliveryCost = 'cost-of-goods-sold::freight-and-delivery-cost', ExpenseOfficeGeneralAdministrativeExpenses = 'expense::office-general-administrative-expenses', RevenueOtherPrimaryIncome = 'revenue::other-primary-income', OtherCurrentLiabilityPrepaidExpensesPayable = 'other-current-liability::prepaid-expenses-payable', EquityPartnersEquity = 'equity::partners-equity', LiabilityBankLoans = 'liability::bank-loans', OtherExpenseOtherVehicleExpenses = 'other-expense::other-vehicle-expenses', EquityPartnerContributions = 'equity::partner-contributions', ExpenseOtherCurrentOperatingCharges = 'expense::other-current-operating-charges', AssetExpenditureAuthorisationsAndLettersOfCredit = 'asset::expenditure-authorisations-and-letters-of-credit', AssetTrustAccounts = 'asset::trust-accounts', LiabilityObligationsUnderFinanceLeases = 'liability::obligations-under-finance-leases', RevenueIncome = 'revenue::income', CostOfGoodsSoldCostOfSales = 'cost-of-goods-sold::cost-of-sales', AssetOtherCurrentAssets = 'asset::other-current-assets', AssetIntangibleAssets = 'asset::intangible-assets', OtherExpenseVehicleLoanInterest = 'other-expense::vehicle-loan-interest', CostOfGoodsSoldShippingFreightDeliveryCos = 'cost-of-goods-sold::shipping-freight-delivery-cos', RevenueSalesWholesale = 'revenue::sales-wholesale', EquityPersonalIncome = 'equity::personal-income', OtherCurrentLiabilityAccruedLiabilities = 'other-current-liability::accrued-liabilities', AssetProvisionsNonCurrentAssets = 'asset::provisions-non-current-assets', EquityInvestmentGrants = 'equity::investment-grants', AssetSavings = 'asset::savings', AssetOtherAsset = 'asset::other-asset', ExpenseExternalServices = 'expense::external-services', ExpenseTravelExpensesGeneralAndAdminExpenses = 'expense::travel-expenses-general-and-admin-expenses', OtherExpenseWashAndRoadServices = 'other-expense::wash-and-road-services', RevenueCashReceiptIncome = 'revenue::cash-receipt-income', OtherIncome = 'other-income', RevenueOwnWorkCapitalized = 'revenue::own-work-capitalized', ExpenseTravel = 'expense::travel', AssetMoneyMarket = 'asset::money-market', OtherCurrentLiabilityTradeAndOtherPayables = 'other-current-liability::trade-and-other-payables', ExpenseCommissionsAndFees = 'expense::commissions-and-fees', OtherCurrentLiabilityInterestPayables = 'other-current-liability::interest-payables', AssetLeaseBuyout = 'asset::lease-buyout', LiabilityAccruedVacationPayable = 'liability::accrued-vacation-payable', ExpenseProjectStudiesSurveysAssessments = 'expense::project-studies-surveys-assessments', EquityOpeningBalanceEquity = 'equity::opening-balance-equity', OtherCurrentLiabilityShortTermBorrowings = 'other-current-liability::short-term-borrowings', CostOfGoodsSoldOtherCostsOfServiceCos = 'cost-of-goods-sold::other-costs-of-service-cos', OtherIncomeOtherMiscellaneousIncome = 'other-income::other-miscellaneous-income', AssetAccumulatedAmortizationOfOtherAssets = 'asset::accumulated-amortization-of-other-assets', EquityPaidInCapitalOrSurplus = 'equity::paid-in-capital-or-surplus', AssetAllowanceForBadDebts = 'asset::allowance-for-bad-debts', AssetLand = 'asset::land', LiabilityOtherLongTermLiabilities = 'liability::other-long-term-liabilities', AssetInvestmentTaxExemptSecurities = 'asset::investment-tax-exempt-securities', AssetLeaseholdImprovements = 'asset::leasehold-improvements', EquityCalledUpShareCapital = 'equity::called-up-share-capital', OtherCurrentLiabilityGlobalTaxPayable = 'other-current-liability::global-tax-payable', OtherIncomeInterestEarned = 'other-income::interest-earned', EquityPartnerDistributions = 'equity::partner-distributions', ExpenseInsurance = 'expense::insurance', LiabilityAccrualsAndDeferredIncome = 'liability::accruals-and-deferred-income', ExpenseOtherRentalCosts = 'expense::other-rental-costs', AssetPrepaidExpenses = 'asset::prepaid-expenses', OtherCurrentLiability = 'other-current-liability', LiabilityAccruedLongTermLiabilities = 'liability::accrued-long-term-liabilities', AssetFixedAssetCopiers = 'asset::fixed-asset-copiers', CostOfGoodsSoldCostOfLaborCos = 'cost-of-goods-sold::cost-of-labor-cos', AssetAssetsAvailableForSale = 'asset::assets-available-for-sale', ExpenseBorrowingCost = 'expense::borrowing-cost', RevenueOperatingGrants = 'revenue::operating-grants', AssetOtherLongTermAssets = 'asset::other-long-term-assets', OtherCurrentLiabilityCurrentPortionEmployeeBenefitsObligations = 'other-current-liability::current-portion-employee-benefits-obligations', EquityPersonalExpense = 'equity::personal-expense', ExpenseAmortizationExpense = 'expense::amortization-expense', OtherExpenseExceptionalItems = 'other-expense::exceptional-items', AssetProvisionsCurrentAssets = 'asset::provisions-current-assets', EquityFunds = 'equity::funds', AssetGlobalTaxDeferred = 'asset::global-tax-deferred', OtherCurrentLiabilityStateLocalIncomeTaxPayable = 'other-current-liability::state-local-income-tax-payable', ExpenseRentOrLeaseOfBuildings = 'expense::rent-or-lease-of-buildings', LiabilityGovernmentAndOtherPublicAuthorities = 'liability::government-and-other-public-authorities', AssetProvisionsFixedAssets = 'asset::provisions-fixed-assets', Expense = 'expense', RevenueServiceFeeIncome = 'revenue::service-fee-income', LiabilityAccountsPayable = 'liability::accounts-payable', OtherIncomeDividendIncome = 'other-income::dividend-income', LiabilityProvisionForLiabilities = 'liability::provision-for-liabilities', OtherCurrentLiabilityCurrentPortionOfObligationsUnderFinanceLeases = 'other-current-liability::current-portion-of-obligations-under-finance-leases', ExpenseAuto = 'expense::auto', LiabilityCreditCard = 'liability::credit-card', OtherIncomeOtherInvestmentIncome = 'other-income::other-investment-income', AssetOtherLongTermLoansAndAdvances = 'asset::other-long-term-loans-and-advances', AssetGlobalTaxRefund = 'asset::global-tax-refund', AssetIntangibleAssetsUnderDevelopment = 'asset::intangible-assets-under-development', ExpenseShippingFreightDelivery = 'expense::shipping-freight-delivery', EquityEstimatedTaxes = 'equity::estimated-taxes', ExpenseTravelMeals = 'expense::travel-meals', CostOfGoodsSold = 'cost-of-goods-sold', OtherIncomeGainLossOnSaleOfFixedAssets = 'other-income::gain-loss-on-sale-of-fixed-assets', LiabilityOutstandingDuesMicroSmallEnterprise = 'liability::outstanding-dues-micro-small-enterprise', AssetInvestmentUsGovernmentObligations = 'asset::investment-us-government-obligations', OtherExpenseVehicleLoan = 'other-expense::vehicle-loan', LiabilityDeferredTaxLiabilities = 'liability::deferred-tax-liabilities', OtherExpenseHomeOwnerRentalInsurance = 'other-expense::home-owner-rental-insurance', AssetShortTermLoansAndAdvancesToRelatedParties = 'asset::short-term-loans-and-advances-to-related-parties', EquityCommonStock = 'equity::common-stock', EquityShareApplicationMoneyPendingAllotment = 'equity::share-application-money-pending-allotment', ExpenseManagementCompensation = 'expense::management-compensation', ExpenseFinanceCosts = 'expense::finance-costs', ExpenseCharitableContributions = 'expense::charitable-contributions', RevenueRevenueGeneral = 'revenue::revenue-general', RevenueOtherCurrentOperatingIncome = 'revenue::other-current-operating-income', AssetRentsHeldInTrust = 'asset::rents-held-in-trust', OtherCurrentLiabilityDutiesAndTaxes = 'other-current-liability::duties-and-taxes', ExpenseOtherSellingExpenses = 'expense::other-selling-expenses', ExpenseLegalProfessionalFees = 'expense::legal-professional-fees', ExpenseExtraordinaryCharges = 'expense::extraordinary-charges', OtherCurrentLiabilityPayrollTaxPayable = 'other-current-liability::payroll-tax-payable', OtherCurrentLiabilityProvisionsCurrentLiabilities = 'other-current-liability::provisions-current-liabilities', OtherCurrentLiabilitySalesTaxPayable = 'other-current-liability::sales-tax-payable', OtherExpenseExchangeGainOrLoss = 'other-expense::exchange-gain-or-loss', ExpenseEntertainment = 'expense::entertainment', EquityOtherFreeReserves = 'equity::other-free-reserves', OtherExpenseRepairsAndMaintenance = 'other-expense::repairs-and-maintenance', AssetLoansToOthers = 'asset::loans-to-others', AssetInvestments = 'asset::investments', AssetFixedAssetOtherToolsEquipment = 'asset::fixed-asset-other-tools-equipment', AssetCumulativeDepreciationOnIntangibleAssets = 'asset::cumulative-depreciation-on-intangible-assets', LiabilityLiabilitiesRelatedToAssetsHeldForSale = 'liability::liabilities-related-to-assets-held-for-sale', EquityAccumulatedAdjustment = 'equity::accumulated-adjustment', AssetOrganizationalCosts = 'asset::organizational-costs', OtherCurrentLiabilityLoanPayable = 'other-current-liability::loan-payable', AssetLongTermInvestments = 'asset::long-term-investments', ExpenseUnappliedCashBillPaymentExpense = 'expense::unapplied-cash-bill-payment-expense', OtherCurrentLiabilityDividendsPayable = 'other-current-liability::dividends-payable', OtherCurrentLiabilityRentsInTrustLiability = 'other-current-liability::rents-in-trust-liability', AssetOtherLongTermInvestments = 'asset::other-long-term-investments', EquityDividendDisbursed = 'equity::dividend-disbursed', ExpensePayrollExpenses = 'expense::payroll-expenses', ExpenseSundry = 'expense::sundry', LiabilityOtherLongTermProvisions = 'liability::other-long-term-provisions', AssetShortTermInvestmentsInRelatedParties = 'asset::short-term-investments-in-related-parties', ExpenseIncomeTaxExpense = 'expense::income-tax-expense', ExpenseBankCharges = 'expense::bank-charges', OtherExpenseVehicleRepairs = 'other-expense::vehicle-repairs', AssetCashOnHand = 'asset::cash-on-hand', OtherExpenseDeferredTaxExpense = 'other-expense::deferred-tax-expense', LiabilityDebtsRelatedToParticipatingInterests = 'liability::debts-related-to-participating-interests', AssetGoodwill = 'asset::goodwill', OtherCurrentLiabilityGlobalTaxSuspense = 'other-current-liability::global-tax-suspense', AssetFixedAssetSoftware = 'asset::fixed-asset-software', OtherExpenseMatCredit = 'other-expense::mat-credit', ExpenseCostOfLabor = 'expense::cost-of-labor', AssetOtherEarMarkedBankAccounts = 'asset::other-ear-marked-bank-accounts', OtherCurrentLiabilityCurrentTaxLiability = 'other-current-liability::current-tax-liability', OtherExpenseParkingAndTolls = 'other-expense::parking-and-tolls', OtherExpenseOtherHomeOfficeExpenses = 'other-expense::other-home-office-expenses', RevenueNonProfitIncome = 'revenue::non-profit-income', AssetCashAndCashEquivalents = 'asset::cash-and-cash-equivalents', EquityAccumulatedOtherComprehensiveIncome = 'equity::accumulated-other-comprehensive-income', ExpenseSuppliesMaterials = 'expense::supplies-materials', OtherExpenseTaxRoundoffGainOrLoss = 'other-expense::tax-roundoff-gain-or-loss', OtherCurrentLiabilitySocialSecurityAgencies = 'other-current-liability::social-security-agencies', AssetNonCurrentAssets = 'asset::non-current-assets', AssetRetainage = 'asset::retainage', EquityCapitalReserves = 'equity::capital-reserves', OtherCurrentLiabilityOtherCurrentLiabilities = 'other-current-liability::other-current-liabilities', ExpenseBadDebts = 'expense::bad-debts', AssetOtherFixedAssets = 'asset::other-fixed-assets', ExpenseAdvertisingPromotional = 'expense::advertising-promotional', OtherExpenseVehicle = 'other-expense::vehicle', LiabilityLongTermBorrowings = 'liability::long-term-borrowings', ExpenseOtherMiscellaneousServiceCost = 'expense::other-miscellaneous-service-cost', OtherIncomeOtherOperatingIncome = 'other-income::other-operating-income', LiabilityLongTermDebit = 'liability::long-term-debit', OtherCurrentLiabilityPayrollClearing = 'other-current-liability::payroll-clearing', RevenueSalesOfProductIncome = 'revenue::sales-of-product-income', AssetCalledUpShareCapitalNotPaid = 'asset::called-up-share-capital-not-paid', AssetLicenses = 'asset::licenses' }
export const enum MessageReadStatus { Unsent = 'unsent', Read = 'read', Failed = 'failed', Delivered = 'delivered', Sent = 'sent' }
export const enum MessageDeliveryStatus { Delivered = 'delivered', Pending = 'pending', Error = 'error', Read = 'read', Undeliverable = 'undeliverable', Sent = 'sent', Failed = 'failed' }
export const enum SupportQueryType { Bug = 'bug', Task = 'task', Incident = 'incident', Question = 'question', Problem = 'problem', FeatureRequest = 'feature-request', Feedback = 'feedback' }
export const enum ImageMimeType { ImageGif = 'image/gif', ImageTiff = 'image/tiff', ImageSvgXml = 'image/svg+xml', ImageHeic = 'image/heic', ImageWebp = 'image/webp', ImageJpeg = 'image/jpeg', ImageBmp = 'image/bmp', ImagePng = 'image/png' }
export const enum OrderingCriteria { Rating = 'rating', CreationDate = 'creation-date', PriceAscending = 'price-ascending', Alphabetical = 'alphabetical', Popularity = 'popularity', Manual = 'manual', PriceDescending = 'price-descending', Relevance = 'relevance' }
export const enum ChatType { Group = 'group', Private = 'private', Public = 'public' }
export const enum ItemAvailabilityStatus { Active = 'active', OutOfStock = 'out-of-stock', Discontinued = 'discontinued', Inactive = 'inactive' }
export const enum FinancialAccountStatus { Closed = 'closed', Delinquent = 'delinquent', Frozen = 'frozen', Suspended = 'suspended', Active = 'active', Inactive = 'inactive', UnderReview = 'under-review' }
export const enum TransactionStatus { Failed = 'failed', Pending = 'pending', Succeeded = 'succeeded', Initiated = 'initiated', Cancelled = 'cancelled', InProgress = 'in-progress', Error = 'error' }
export const enum CreditNoteStatus { Revised = 'revised', Draft = 'draft', Applied = 'applied', Pending = 'pending', Void = 'void', Cancelled = 'cancelled', Issued = 'issued', Disputed = 'disputed', Completed = 'completed' }
export const enum PaymentTerm { DueOnReceipt = 'due-on-receipt', DueEndOfMonth = 'due-end-of-month', CashInAdvance = 'cash-in-advance', Net90 = 'net-90', DeferredPayment = 'deferred-payment', UponCompletion = 'upon-completion', Prepaid = 'prepaid', Installment = 'installment', CashOnDelivery = 'cash-on-delivery', Net = 'net', CashWithOrder = 'cash-with-order', Prepayment = 'prepayment', Net60 = 'net-60', CashBeforeShipment = 'cash-before-shipment', Custom = 'custom', Net30 = 'net-30' }
export const enum EmploymentAndCandidateStatus { Hired = 'hired', NotSelected = 'not-selected', Other = 'other', Terminated = 'terminated', InReview = 'in-review', Active = 'active', Inactive = 'inactive', New = 'new', OfferExtended = 'offer-extended', Interviewing = 'interviewing', OnLeave = 'on-leave' }
export const enum OrganizationalRole { Other = 'other', Admin = 'admin', Manager = 'manager', Employee = 'employee', Contractor = 'contractor', Director = 'director', Supervisor = 'supervisor' }
export const enum CustomerStatus { Suspended = 'suspended', Active = 'active', Inactive = 'inactive', Pending = 'pending', Archived = 'archived' }
export const enum SocialPlatform { Tiktok = 'tiktok', Youtube = 'youtube', Tumblr = 'tumblr', OtherSocialPlatform = 'other-social-platform', Skype = 'skype', X = 'x', Instagram = 'instagram', Pinterest = 'pinterest', Twitter = 'twitter', Snapchat = 'snapchat', Facebook = 'facebook', Reddit = 'reddit', Linkedin = 'linkedin' }
export const enum ConversationStatus { Deleted = 'deleted', Archived = 'archived', Active = 'active' }
export const enum CommunicationRole { Guest = 'guest', Assistant = 'assistant', Moderator = 'moderator', Service = 'service', Member = 'member', Bot = 'bot', System = 'system', User = 'user', Admin = 'admin', Group = 'group', Owner = 'owner', Channel = 'channel' }
export const enum LifecycleStatus { Issued = 'issued', Active = 'active', Expired = 'expired', Redeemed = 'redeemed', Suspended = 'suspended', Cancelled = 'cancelled' }
export const enum PaymentMethod { CashOnDelivery = 'cash-on-delivery', BankTransfer = 'bank-transfer', Check = 'check', MobileWallet = 'mobile-wallet', MobilePayment = 'mobile-payment', Paypal = 'paypal', Cryptocurrency = 'cryptocurrency', Cash = 'cash', CreditCard = 'credit-card', DebitCard = 'debit-card', Other = 'other' }
export const enum FinancialTransactionStatus { Pending = 'pending', Cleared = 'cleared', Failed = 'failed', Cancelled = 'cancelled', Authorized = 'authorized', SettlementInProgress = 'settlement-in-progress', Disputed = 'disputed', Refunded = 'refunded' }
export const enum AuditOpinionType { Adverse = 'adverse', Qualified = 'qualified', Unqualified = 'unqualified', Disclaimer = 'disclaimer' }
export const enum InventoryStorageType { DistributionCenter = 'distribution-center', RetailStore = 'retail-store', DropShipper = 'drop-shipper', OnlineMarketplace = 'online-marketplace', Consignment = 'consignment', Other = 'other', Warehouse = 'warehouse' }
export const enum VisibilityScope { Internal = 'internal', Private = 'private', Global = 'global', App = 'app', Web = 'web' }
export const enum PaymentStatus { Partial = 'partial', Processing = 'processing', Failed = 'failed', Paid = 'paid', Voided = 'voided', Deleted = 'deleted', Adjusted = 'adjusted', Cancelled = 'cancelled', PartiallyRefunded = 'partially-refunded', Submitted = 'submitted', Succeeded = 'succeeded', Disputed = 'disputed', Draft = 'draft', Authorized = 'authorized', Error = 'error', Overdue = 'overdue', Refunded = 'refunded', Pending = 'pending' }
export const enum TransactionChannel { Other = 'other', Online = 'online', Mail = 'mail', Mobile = 'mobile', InPerson = 'in-person', Atm = 'atm', Telephone = 'telephone', BankBranch = 'bank-branch' }
export const enum FinancialDisputeStatus { NeedsResponse = 'needs-response', Closed = 'closed', Won = 'won', Lost = 'lost', UnderReview = 'under-review', AwaitingEvidence = 'awaiting-evidence', Escalated = 'escalated', ChargeRefunded = 'charge-refunded' }
export const enum DeviceUsageType { Educational = 'educational', Business = 'business', Healthcare = 'healthcare', Home = 'home', Industrial = 'industrial', Other = 'other', Personal = 'personal' }
export const enum FinancialTransactionType { Deposit = 'deposit', Chargeback = 'chargeback', Charge = 'charge', Transfer = 'transfer', Receive = 'receive', Refund = 'refund', Dividend = 'dividend', SpendPrepayment = 'spend-prepayment', Adjustment = 'adjustment', ReceiveOverpayment = 'receive-overpayment', Other = 'other', Interest = 'interest', Fee = 'fee', Spend = 'spend', ReceivePrepayment = 'receive-prepayment', Withdrawal = 'withdrawal', Sale = 'sale', Payment = 'payment', SpendOverpayment = 'spend-overpayment' }
export const enum AccessControlModel { None = 'none', Abac = 'abac', Rbac = 'rbac', Mac = 'mac', Dac = 'dac', Custom = 'custom' }
export const enum ParticipantType { Group = 'group', User = 'user', Team = 'team', Organization = 'organization', ExternalParticipant = 'external-participant' }
export const enum PriorityLevel { Low = 'low', Medium = 'medium', High = 'high', Urgent = 'urgent', Elevated = 'elevated' }
export const enum PrerequisiteRangeType { ShippingPrice = 'shipping-price', Quantity = 'quantity', Subtotal = 'subtotal' }
export const enum ContentVisibility { Internal = 'internal', Public = 'public', Private = 'private', Shared = 'shared', Protected = 'protected' }
export const enum EntityCategory { Project = 'project', User = 'user', Document = 'document', Person = 'person', Message = 'message', Link = 'link', Task = 'task', Event = 'event', Owner = 'owner', Other = 'other' }
export const enum GenderIdentity { Female = 'female', PreferNotToSay = 'prefer-not-to-say', Male = 'male', Other = 'other' }
export const enum CommunicationMethod { PushNotification = 'push-notification', InstantMessage = 'instant-message', Sms = 'sms', Email = 'email', Text = 'text', Phone = 'phone', Mail = 'mail', InPerson = 'in-person', VideoCall = 'video-call', SocialMedia = 'social-media', Other = 'other' }
export const enum EmailCategoryType { Transactional = 'transactional', Governmental = 'governmental', Spam = 'spam', Business = 'business', Educational = 'educational', Other = 'other', Promotional = 'promotional', Personal = 'personal' }
export const enum UniversalIdentifierType { Uuid = 'uuid', Url = 'url', Number = 'number', Email = 'email', String = 'string' }
export const enum TaskStatus { Cancelled = 'cancelled', Done = 'done', Blocked = 'blocked', InProgress = 'in-progress', Todo = 'todo', OnHold = 'on-hold' }
export const enum UserStatus { Inactive = 'inactive', Verified = 'verified', Suspended = 'suspended', Active = 'active', Banned = 'banned', Pending = 'pending', WaitListed = 'wait-listed', Archived = 'archived', Deleted = 'deleted' }
export const enum PromotionType { Percentage = 'percentage', RewardPoints = 'reward-points', Other = 'other', FreeShipping = 'free-shipping', BuyOneGetOne = 'buy-one-get-one', FixedAmount = 'fixed-amount' }
export const enum MimeType { ImagePng = 'image/png', ImageGif = 'image/gif', ImageSvgXml = 'image/svg+xml', ImageWebp = 'image/webp', ImageJpeg = 'image/jpeg' }
export const enum TaxType { Inclusive = 'inclusive', Additive = 'additive', Variable = 'variable' }
export const enum ModifierType { List = 'list', Text = 'text' }
export const enum CardType { UnknownCard = 'unknown-card', Credit = 'credit', Debit = 'debit' }
export const enum PrepaidType { Prepaid = 'prepaid', UnknownPrepaid = 'unknown-prepaid', NotPrepaid = 'not-prepaid' }
export const enum EntryMethod { Contactless = 'contactless', Emv = 'emv', Swiped = 'swiped', Keyed = 'keyed', OnFile = 'on-file' }
export const enum CvvStatus { Rejected = 'rejected', NotChecked = 'not-checked', Accepted = 'accepted' }
export const enum AvcStatus { Accepted = 'accepted', Rejected = 'rejected', NotChecked = 'not-checked' }
export const enum CreditType { Customer = 'customer', Goodwill = 'goodwill', Prepayment = 'prepayment', Supplier = 'supplier', Overpayment = 'overpayment' }
export const enum CallDirection { Conference = 'conference', Unknown = 'unknown', Outbound = 'outbound', Inbound = 'inbound' }
export const enum SpeakerRole { Invitee = 'invitee', Attendee = 'attendee' }
export const enum FileType { File = 'file', Folder = 'folder', Url = 'url' }
export const enum AiToolChoiceType { Tool = 'tool', Any = 'any', None = 'none', Auto = 'auto' }
export const enum ImageType { Base64 = 'base64' }
export const enum ResponseFormatType { JsonObject = 'json-object', JsonSchema = 'json-schema', Text = 'text' }
export const enum ToolCallType { Function = 'function' }
export const enum AiMessagesContentType { Text = 'text', ToolResult = 'tool-result', ToolUse = 'tool-use', Image = 'image' }
export const enum AiRole { Assistant = 'assistant', Tool = 'tool', User = 'user' }
export const enum JsonSchemaType { Function = 'function' }
export const enum EventStatus { Cancelled = 'cancelled', Tentative = 'tentative', Confirmed = 'confirmed' }
export const enum EventVisibility { Public = 'public', Private = 'private', Confidential = 'confidential' }
export const enum EventReminderAction { Popup = 'popup', Email = 'email' }
export const enum EventRuleType { Repeat = 'repeat', ExcludeDates = 'exclude-dates', AddDates = 'add-dates', Exclude = 'exclude' }
export const enum EventFrequency { Yearly = 'yearly', Weekly = 'weekly', Monthly = 'monthly', Daily = 'daily' }
