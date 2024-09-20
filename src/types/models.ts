// This file is auto-generated. Do not edit it manually.

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
export interface Events { organizer?: Users;
    location?: string;
    description?: string;
    attendees?: Users[];
    title?: string;
    createdAt?: string;
    updatedAt?: string;
    modifyToken?: string;
    deleted?: boolean;
    startDate?: string;
    timeZone?: string;
    id?: string;
    endDate?: string;
    commonModel?: string }
export interface Calendars { timeZone?: string;
    type?: string;
    title?: string;
    description?: string;
    location?: string;
    deleted?: boolean;
    modifyToken?: string;
    updatedAt?: string;
    id?: string;
    createdAt?: string;
    commonModel?: string }
export interface Threads { createdAt?: string;
    commonModel?: string;
    lastHistoryId?: string;
    snippet?: string;
    deleted?: boolean;
    messages?: Messages[];
    lastMessageId?: string;
    tags?: KeyValues[];
    id?: string;
    updatedAt?: string;
    modifyToken?: string }
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
export interface Drives { name?: string;
    id?: string;
    description?: string;
    updatedAt?: string;
    createdAt?: string;
    commonModel?: string }
export interface Folders { id?: string;
    path?: string;
    updatedAt?: string;
    modifyToken?: string;
    commonModel?: string;
    name?: string;
    description?: string;
    parent?: ParentFolders;
    size?: number;
    downloadable?: boolean;
    createdAt?: string;
    owner?: FileOwners;
    permissions?: Permissions }
export interface Files { permissions?: Permissions;
    content?: string;
    path?: string;
    updatedAt?: string;
    mimeType?: string;
    exportable?: boolean;
    downloadable?: boolean;
    parent?: ParentFolders;
    commonModel?: string;
    size?: number;
    modifyToken?: string;
    owner?: FileOwners;
    id?: string;
    type?: FileType;
    name?: string;
    description?: string;
    downloadUrl?: string;
    exportFormats?: string;
    createdAt?: string;
    extension?: string }
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
export interface Recordings { files?: Attachments[];
    name?: string;
    updatedAt?: string;
    accountId?: string;
    callType?: CallDirection;
    duration?: number;
    endTime?: string;
    topic?: string;
    createdAt?: string;
    modifyToken?: string;
    hostId?: string;
    id?: string;
    password?: string;
    commonModel?: string;
    participants?: Speakers[];
    description?: string;
    startTime?: string;
    fileSize?: number }
export interface Transcripts { createdAt?: string;
    updatedAt?: string;
    modifyToken?: string;
    speakerId?: string;
    id?: string;
    sentences?: Sentences[];
    topic?: string;
    speakerName?: string;
    commonModel?: string;
    meetingId?: string }
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
export interface Attributes { name?: string;
    slug?: string;
    required?: boolean;
    unique?: boolean;
    customTypeDetails?: Metadata[];
    updatedAt?: string;
    createdAt?: string;
    id?: string;
    description?: string;
    modifyToken?: string;
    dataType?: DataType;
    commonModel?: string }
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
export interface Webhooks { commonModel?: string;
    updatedAt?: string;
    modifyToken?: string;
    format?: Format;
    objects?: string[];
    address?: string;
    id?: string;
    events?: string[];
    createdAt?: string;
    isDeleted?: boolean }
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
export interface Chats { enableParallelToolCalls?: boolean;
    logitBias?: unknown;
    id?: string;
    model?: string;
    topP?: number;
    tools?: JsonSchema[];
    frequencyPenalty?: number;
    createdAt?: string;
    temperature?: number;
    commonModel?: string;
    toolChoice?: AiToolChoice;
    topK?: number;
    systemFingerprint?: string;
    maxTokens?: number;
    numberOfCompletions?: number;
    presencePenalty?: number;
    modifyToken?: string;
    messages?: AiMessages[];
    usage?: AiUsage;
    systemMessage?: string;
    userId?: string;
    seed?: number;
    responseFormat?: ResponseFormat;
    objectType?: string;
    stopSequences?: string[] }
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
export interface Accounts { createdAt?: string;
    allowPayments?: boolean;
    active?: boolean;
    deleted?: boolean;
    showInExpenses?: boolean;
    notes?: string;
    id?: string;
    currency?: Currency;
    transactions?: Transactions[];
    overdraftLimit?: number;
    name?: string;
    taxType?: string;
    accountNumber?: string;
    description?: string;
    modifyToken?: string;
    interestRate?: number;
    commonModel?: string;
    updatedAt?: string;
    accountCode?: string;
    status?: FinancialAccountStatus;
    balance?: number;
    closedAt?: string;
    title?: string;
    branch?: string;
    accountType?: AccountType;
    owner?: Customers;
    overdraftProtection?: boolean }
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
export interface Refunds { status?: TransactionStatus;
    currency?: Currency;
    reason?: string;
    commonModel?: string;
    amount?: number;
    id?: string;
    createdAt?: string;
    modifyToken?: string;
    updatedAt?: string;
    paymentId?: string }
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
export interface Invoices { issuedDate?: string;
    subtotal?: number;
    id?: string;
    billingAddress?: Addresses;
    discountTotal?: number;
    terms?: string;
    discountPercentage?: number;
    shippingAddress?: Addresses;
    total?: number;
    createdAt?: string;
    active?: boolean;
    header?: string;
    updatedAt?: string;
    commonModel?: string;
    customer?: Customers;
    invoicePayments?: InvoicePayments[];
    status?: PaymentStatus;
    vatName?: string;
    transactionDate?: string;
    modifyToken?: string;
    dueDate?: string;
    balanceDue?: number;
    attachments?: Attachments[];
    notes?: string;
    metadata?: Metadata[];
    exchangeRate?: number;
    invoiceNumber?: string;
    adjustments?: InvoiceAdjustments[];
    paymentTerms?: PaymentTerms;
    items?: InvoiceItems[];
    reference?: Entity;
    vatNumber?: string;
    deleted?: boolean;
    footer?: string;
    currency?: Currency;
    taxTotal?: number;
    paidAmount?: number }
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
export interface InvoiceItems { tags?: string[];
    customFields?: CustomAttributes[];
    price?: number;
    updatedAt?: string;
    variants?: Variants[];
    isbn?: string;
    name?: string;
    upc?: string;
    createdAt?: string;
    imageUrl?: string;
    options?: ProductOptions[];
    commonModel?: string;
    currency?: Currency;
    dimensions?: Dimensions;
    discount?: number;
    gallery?: Images[];
    deletedAt?: string;
    active?: boolean;
    modifyToken?: string;
    inventoryStatus?: ProductAvailabilityStatus;
    weight?: number;
    rating?: number;
    quantity?: number;
    ratingCount?: number;
    brand?: string;
    reviews?: RatingsReviews[];
    description?: string;
    isAvailable?: boolean;
    availabilityDate?: string;
    condition?: ItemCondition;
    inventoryQuantity?: number;
    ean?: string;
    mpn?: string;
    onSale?: boolean;
    id?: string;
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
export interface Contacts { company?: string;
    address?: Addresses;
    code?: string;
    birthday?: string;
    notes?: Notes;
    tags?: string[];
    isActive?: boolean;
    emails?: Emails[];
    phones?: Phones[];
    customFields?: CustomAttributes[];
    createdAt?: string;
    addresses?: Addresses[];
    firstName?: string;
    defaultPhone?: string;
    relationship?: string;
    socialProfiles?: SocialProfiles[];
    modifyToken?: string;
    note?: string;
    commonModel?: string;
    lastName?: string;
    defaultEmail?: string;
    updatedAt?: string;
    websites?: string[];
    id?: string;
    leadId?: string }
export interface Jobs { jobTrainingProvided?: boolean;
    jobStartDate?: string;
    educationRequirements?: string;
    jobShifts?: string[];
    benefits?: string[];
    qualifications?: string;
    responsibilities?: string;
    employmentType?: EmploymentType;
    occupationalCategory?: string;
    workFromHome?: boolean;
    industry?: string;
    jobTrialPeriod?: string;
    languagesSpoken?: string[];
    updatedAt?: string;
    experienceRequirements?: string;
    commonModel?: string;
    skills?: string[];
    salaryCurrency?: string;
    workHours?: string;
    modifyToken?: string;
    company?: Companies;
    validUntil?: string;
    baseSalary?: Salaries;
    createdAt?: string;
    jobLocationType?: string;
    incentives?: string;
    applicationDeadline?: string;
    remote?: boolean;
    jobImmediateStart?: boolean;
    jobFlexibleHours?: boolean;
    jobBenefits?: string;
    description?: string;
    id?: string;
    title?: string;
    incentiveCompensation?: string;
    location?: Addresses;
    employmentUnit?: EmploymentUnits }
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
export interface Products { variants?: Variants[];
    reference?: Entity;
    vendor?: string;
    customFields?: CustomAttributes[];
    createdAt?: string;
    prices?: Prices[];
    title?: string;
    code?: string;
    taxes?: Taxes[];
    modifyToken?: string;
    id?: string;
    skuValidation?: SkuValidation;
    commonModel?: string;
    brand?: Brands;
    inventoryLocation?: InventoryLocations;
    type?: string;
    relatedProducts?: string[];
    options?: ProductOptions[];
    description?: string;
    publishedAt?: string;
    tags?: string[];
    availableForSale?: boolean;
    dimensions?: Dimensions;
    weightUnit?: string;
    images?: Images[];
    accountIds?: KeyValues[];
    status?: EntityLifecycleStatus;
    inventoryQuantity?: number;
    localizations?: Localizations[];
    isDownloadable?: boolean;
    weight?: number;
    categories?: string[];
    slug?: string;
    metaTitle?: string;
    downloadFiles?: Attachments[];
    updatedAt?: string;
    manufacturerName?: string;
    metaDescription?: string;
    seoKeywords?: string[];
    sku?: string }
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
export interface Categories { name?: string;
    modifyToken?: string;
    tags?: string[];
    image?: string;
    parentId?: string;
    updatedAt?: string;
    id?: string;
    createdAt?: string;
    commonModel?: string }
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
export interface Companies { createdAt?: string;
    reference?: Entity;
    id?: string;
    legalName?: string;
    additionalContacts?: Contacts[];
    address?: Addresses;
    parentCompanyId?: string;
    dunsNumber?: string;
    numberOfEmployees?: number;
    regulatoryStatus?: string;
    domain?: string;
    stockSymbol?: string;
    incorporationDate?: string;
    updatedAt?: string;
    incorporationCountry?: string;
    defaultPhone?: string;
    phones?: Phones[];
    socialProfiles?: SocialProfiles[];
    revenueCurrency?: string;
    customFields?: CustomAttributes[];
    emails?: Emails[];
    defaultEmail?: string;
    type?: string;
    website?: string;
    modifyToken?: string;
    description?: string;
    revenue?: number;
    companyNumber?: string;
    commonModel?: string;
    logo?: string;
    industry?: string;
    taxId?: string;
    tags?: string[];
    name?: string;
    foundedDate?: string }
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
export const enum MinimumRequirements { MinimumQuantityOfItems = 'minimum-quantity-of-items', None = 'none', MinimumPurchaseAmount = 'minimum-purchase-amount' }
export const enum TargetSelection { Entitled = 'entitled', All = 'all' }
export const enum Status { Scheduled = 'scheduled', Expired = 'expired', Active = 'active' }
export const enum AppliesTo { SpecificCategories = 'specific-categories', SpecificItems = 'specific-items', AllItems = 'all-items' }
export const enum ChannelAvailability { Online = 'online', InApp = 'in-app', AllChannels = 'all-channels', InStore = 'in-store' }
export const enum CustomerSelection { All = 'all', Prerequisite = 'prerequisite' }
export const enum TransactionMethod { Atm = 'atm', Online = 'online', Telephone = 'telephone', BankBranch = 'bank-branch', Mobile = 'mobile', Mail = 'mail' }
export const enum CustomerEligibility { SpecificCustomers = 'specific-customers', SpecificCustomerGroups = 'specific-customer-groups', All = 'all' }
export const enum AllocationMethod { Across = 'across', Each = 'each' }
export const enum TargetType { LineItem = 'line-item', ShippingLine = 'shipping-line' }
export const enum SkuValidation { LocalUnique = 'local-unique', GlobalUnique = 'global-unique', None = 'none' }
export const enum Roles { User = 'user', Admin = 'admin', Moderator = 'moderator' }
export const enum Format { Xml = 'xml', Json = 'json' }
export const enum Gender { Male = 'male', Other = 'other', PreferNotToSay = 'prefer not to say', Female = 'female' }
export const enum AccountType { LiabilityAccrualsAndDeferredIncome = 'liability::accruals-and-deferred-income', EquityCommonStock = 'equity::common-stock', EquityPaidInCapitalOrSurplus = 'equity::paid-in-capital-or-surplus', ExpenseOtherBusinessExpenses = 'expense::other-business-expenses', AssetLeaseBuyout = 'asset::lease-buyout', LiabilityShareholderNotesPayable = 'liability::shareholder-notes-payable', AssetSecurityDeposits = 'asset::security-deposits', ExpenseCharitableContributions = 'expense::charitable-contributions', ExpenseTravelExpensesSellingExpense = 'expense::travel-expenses-selling-expense', ExpenseTaxesPaid = 'expense::taxes-paid', OtherCurrentLiabilityCurrentTaxLiability = 'other-current-liability::current-tax-liability', LiabilityAccountsPayable = 'liability::accounts-payable', OtherExpenseExtraordinaryItems = 'other-expense::extraordinary-items', RevenueSalesWholesale = 'revenue::sales-wholesale', ExpenseShippingAndDeliveryExpense = 'expense::shipping-and-delivery-expense', LiabilityLongTermLiability = 'liability::long-term-liability', ExpenseInsurance = 'expense::insurance', OtherExpenseHomeOwnerRentalInsurance = 'other-expense::home-owner-rental-insurance', ExpenseExternalServices = 'expense::external-services', ExpenseCostOfLabor = 'expense::cost-of-labor', EquityDividendDisbursed = 'equity::dividend-disbursed', LiabilityAccruedVacationPayable = 'liability::accrued-vacation-payable', ExpenseAdvertisingPromotional = 'expense::advertising-promotional', AssetFixedAssetPhone = 'asset::fixed-asset-phone', AssetInvestmentTaxExemptSecurities = 'asset::investment-tax-exempt-securities', ExpenseManagementCompensation = 'expense::management-compensation', OtherExpenseExceptionalItems = 'other-expense::exceptional-items', OtherCurrentLiabilityGlobalTaxSuspense = 'other-current-liability::global-tax-suspense', AssetInvestmentOther = 'asset::investment-other', OtherExpenseOtherHomeOfficeExpenses = 'other-expense::other-home-office-expenses', ExpenseLegalProfessionalFees = 'expense::legal-professional-fees', LiabilityBankLoans = 'liability::bank-loans', ExpenseRentOrLeaseOfBuildings = 'expense::rent-or-lease-of-buildings', OtherCurrentLiabilityProvisionsCurrentLiabilities = 'other-current-liability::provisions-current-liabilities', OtherExpenseDepletion = 'other-expense::depletion', AssetOtherAsset = 'asset::other-asset', OtherCurrentLiabilityCurrentLiabilities = 'other-current-liability::current-liabilities', AssetCapitalWip = 'asset::capital-wip', AssetMoneyMarket = 'asset::money-market', ExpenseEntertainmentMeals = 'expense::entertainment-meals', OtherExpenseVehicleLoanInterest = 'other-expense::vehicle-loan-interest', AccountsReceivable = 'accounts-receivable', CostOfGoodsSoldEquipmentRentalCos = 'cost-of-goods-sold::equipment-rental-cos', AssetFixedAssetPhotoVideo = 'asset::fixed-asset-photo-video', EquityFunds = 'equity::funds', AssetFixedAssetOtherToolsEquipment = 'asset::fixed-asset-other-tools-equipment', AssetLandAsset = 'asset::land-asset', OtherCurrentLiabilityRentsInTrustLiability = 'other-current-liability::rents-in-trust-liability', ExpenseAmortizationExpense = 'expense::amortization-expense', ExpenseOtherMiscellaneousServiceCost = 'expense::other-miscellaneous-service-cost', AssetProvisionsNonCurrentAssets = 'asset::provisions-non-current-assets', ExpenseOtherRentalCosts = 'expense::other-rental-costs', OtherCurrentLiabilitySocialSecurityAgencies = 'other-current-liability::social-security-agencies', AssetLoansToStockholders = 'asset::loans-to-stockholders', ExpensePromotionalMeals = 'expense::promotional-meals', RevenueSalesRetail = 'revenue::sales-retail', AssetFixedAssetCopiers = 'asset::fixed-asset-copiers', LiabilityLiabilitiesRelatedToAssetsHeldForSale = 'liability::liabilities-related-to-assets-held-for-sale', OtherCurrentLiabilityDividendsPayable = 'other-current-liability::dividends-payable', OtherCurrentLiabilityTrustAccountsLiabilities = 'other-current-liability::trust-accounts-liabilities', AssetAllowanceForBadDebts = 'asset::allowance-for-bad-debts', ExpenseLossOnDiscontinuedOperationsNetOfTax = 'expense::loss-on-discontinued-operations-net-of-tax', CostOfGoodsSoldFreightAndDeliveryCost = 'cost-of-goods-sold::freight-and-delivery-cost', ExpenseTravelMeals = 'expense::travel-meals', OtherCurrentLiabilityCurrentPortionEmployeeBenefitsObligations = 'other-current-liability::current-portion-employee-benefits-obligations', AssetAccumulatedDepletion = 'asset::accumulated-depletion', AssetGlobalTaxDeferred = 'asset::global-tax-deferred', EquityOtherFreeReserves = 'equity::other-free-reserves', ExpenseTravelExpensesGeneralAndAdminExpenses = 'expense::travel-expenses-general-and-admin-expenses', AssetDeferredTax = 'asset::deferred-tax', OtherCurrentLiabilityProvisionForWarrantyObligations = 'other-current-liability::provision-for-warranty-obligations', OtherIncomeGainLossOnSaleOfInvestments = 'other-income::gain-loss-on-sale-of-investments', ExpenseOtherExternalServices = 'expense::other-external-services', AssetNonCurrentAssets = 'asset::non-current-assets', AssetInternalTransfers = 'asset::internal-transfers', OtherExpenseMortgageInterest = 'other-expense::mortgage-interest', OtherExpenseVehicleLease = 'other-expense::vehicle-lease', AssetLand = 'asset::land', OtherExpenseIncomeTaxOtherExpense = 'other-expense::income-tax-other-expense', AssetUndepositedFunds = 'asset::undeposited-funds', LiabilityOtherLongTermProvisions = 'liability::other-long-term-provisions', OtherExpenseUtilities = 'other-expense::utilities', AssetOrganizationalCosts = 'asset::organizational-costs', ExpenseGlobalTaxExpense = 'expense::global-tax-expense', AssetFurnitureAndFixtures = 'asset::furniture-and-fixtures', AssetLicenses = 'asset::licenses', OtherExpenseOtherVehicleExpenses = 'other-expense::other-vehicle-expenses', Asset = 'asset', AssetOtherLongTermLoansAndAdvances = 'asset::other-long-term-loans-and-advances', OtherIncomeDividendIncome = 'other-income::dividend-income', LiabilityAccruedLongTermLiabilities = 'liability::accrued-long-term-liabilities', AssetTrustAccounts = 'asset::trust-accounts', EquityAccumulatedAdjustment = 'equity::accumulated-adjustment', ExpensePenaltiesSettlements = 'expense::penalties-settlements', AssetOtherLongTermInvestments = 'asset::other-long-term-investments', OtherExpenseVehicle = 'other-expense::vehicle', Income = 'income', EquityCapitalReserves = 'equity::capital-reserves', ExpenseEntertainment = 'expense::entertainment', AssetInvestments = 'asset::investments', AssetIntangibleAssetsUnderDevelopment = 'asset::intangible-assets-under-development', OtherCurrentLiability = 'other-current-liability', OtherExpenseWashAndRoadServices = 'other-expense::wash-and-road-services', ExpenseFinanceCosts = 'expense::finance-costs', EquityPartnerDistributions = 'equity::partner-distributions', OtherExpenseOtherMiscellaneousExpense = 'other-expense::other-miscellaneous-expense', AssetPrepaymentsAndAccruedIncome = 'asset::prepayments-and-accrued-income', OtherExpenseRepairsAndMaintenance = 'other-expense::repairs-and-maintenance', OtherIncomeOtherMiscellaneousIncome = 'other-income::other-miscellaneous-income', AssetParticipatingInterests = 'asset::participating-interests', ExpenseDistributionCosts = 'expense::distribution-costs', Expense = 'expense', OtherCurrentLiabilitySalesTaxPayable = 'other-current-liability::sales-tax-payable', AssetCumulativeDepreciationOnIntangibleAssets = 'asset::cumulative-depreciation-on-intangible-assets', AssetGoodwill = 'asset::goodwill', AssetIntangibleAssets = 'asset::intangible-assets', LiabilityGroupAndAssociates = 'liability::group-and-associates', EquityShareApplicationMoneyPendingAllotment = 'equity::share-application-money-pending-allotment', AssetPrepaidExpenses = 'asset::prepaid-expenses', AssetProvisionsCurrentAssets = 'asset::provisions-current-assets', OtherExpenseHomeOffice = 'other-expense::home-office', OtherExpenseMatCredit = 'other-expense::mat-credit', AssetCashOnHand = 'asset::cash-on-hand', AssetProvisionsFixedAssets = 'asset::provisions-fixed-assets', OtherCurrentLiabilitySundryDebtorsAndCreditors = 'other-current-liability::sundry-debtors-and-creditors', AssetSavings = 'asset::savings', OtherExpensePriorPeriodItems = 'other-expense::prior-period-items', RevenueOwnWorkCapitalized = 'revenue::own-work-capitalized', OtherIncomeLossOnDisposalOfAssets = 'other-income::loss-on-disposal-of-assets', RevenueOtherCurrentOperatingIncome = 'revenue::other-current-operating-income', EquityPersonalIncome = 'equity::personal-income', AssetDevelopmentCosts = 'asset::development-costs', RevenueNonProfitIncome = 'revenue::non-profit-income', ExpenseBadDebts = 'expense::bad-debts', ExpenseSuppliesMaterials = 'expense::supplies-materials', EquityCalledUpShareCapital = 'equity::called-up-share-capital', LiabilityLongTermDebit = 'liability::long-term-debit', RevenueSalesOfProductIncome = 'revenue::sales-of-product-income', AssetFixedAssetComputers = 'asset::fixed-asset-computers', LiabilityCreditCard = 'liability::credit-card', LiabilityProvisionForLiabilities = 'liability::provision-for-liabilities', AssetOtherIntangibleAssets = 'asset::other-intangible-assets', OtherCurrentLiabilityLoanPayable = 'other-current-liability::loan-payable', CostOfGoodsSold = 'cost-of-goods-sold', OtherCurrentLiabilityDirectDepositPayable = 'other-current-liability::direct-deposit-payable', RevenueServiceFeeIncome = 'revenue::service-fee-income', ExpenseAuto = 'expense::auto', AssetGlobalTaxRefund = 'asset::global-tax-refund', EquityPersonalExpense = 'equity::personal-expense', OtherCurrentLiabilityFederalIncomeTaxPayable = 'other-current-liability::federal-income-tax-payable', AssetLongTermLoansAndAdvancesToRelatedParties = 'asset::long-term-loans-and-advances-to-related-parties', LiabilityOutstandingDuesOtherThanMicroSmallEnterprise = 'liability::outstanding-dues-other-than-micro-small-enterprise', LiabilityNotesPayable = 'liability::notes-payable', LiabilityObligationsUnderFinanceLeases = 'liability::obligations-under-finance-leases', Liability = 'liability', LiabilityLongTermEmployeeBenefitObligations = 'liability::long-term-employee-benefit-obligations', AssetAccumulatedAmortizationOfOtherAssets = 'asset::accumulated-amortization-of-other-assets', AssetOtherCurrentAssets = 'asset::other-current-assets', EquityTreasuryStock = 'equity::treasury-stock', LiabilityLongTermBorrowings = 'liability::long-term-borrowings', RevenueDiscountsRefundsGiven = 'revenue::discounts-refunds-given', OtherExpenseVehicleRepairs = 'other-expense::vehicle-repairs', OtherIncomeTaxExemptInterest = 'other-income::tax-exempt-interest', ExpenseExtraordinaryCharges = 'expense::extraordinary-charges', LiabilityDebtsRelatedToParticipatingInterests = 'liability::debts-related-to-participating-interests', RevenueCashReceiptIncome = 'revenue::cash-receipt-income', OtherCurrentLiabilityStaffAndRelatedLiabilityAccounts = 'other-current-liability::staff-and-related-liability-accounts', OtherIncomeUnrealisedLossOnSecuritiesNetOfTax = 'other-income::unrealised-loss-on-securities-net-of-tax', RevenueUnappliedCashPaymentIncome = 'revenue::unapplied-cash-payment-income', AssetChecking = 'asset::checking', AssetInventory = 'asset::inventory', OtherCurrentLiabilityLineOfCredit = 'other-current-liability::line-of-credit', AssetCalledUpShareCapitalNotPaid = 'asset::called-up-share-capital-not-paid', AssetMachineryAndEquipment = 'asset::machinery-and-equipment', ExpensePurchasesRebates = 'expense::purchases-rebates', AssetBank = 'asset::bank', OtherIncomeOtherOperatingIncome = 'other-income::other-operating-income', EquityRetainedEarnings = 'equity::retained-earnings', AssetAssetsHeldForSale = 'asset::assets-held-for-sale', OtherExpenseTaxRoundoffGainOrLoss = 'other-expense::tax-roundoff-gain-or-loss', ExpenseOtherSellingExpenses = 'expense::other-selling-expenses', OtherExpenseExchangeGainOrLoss = 'other-expense::exchange-gain-or-loss', AssetTradeAndOtherReceivables = 'asset::trade-and-other-receivables', ExpenseOfficeGeneralAdministrativeExpenses = 'expense::office-general-administrative-expenses', OtherCurrentLiabilityPrepaidExpensesPayable = 'other-current-liability::prepaid-expenses-payable', ExpenseProjectStudiesSurveysAssessments = 'expense::project-studies-surveys-assessments', OtherExpenseGasAndFuel = 'other-expense::gas-and-fuel', OtherIncomeInterestEarned = 'other-income::interest-earned', OtherIncome = 'other-income', LiabilityGovernmentAndOtherPublicAuthorities = 'liability::government-and-other-public-authorities', EquityMoneyReceivedAgainstShareWarrants = 'equity::money-received-against-share-warrants', CostOfGoodsSoldOtherCostsOfServiceCos = 'cost-of-goods-sold::other-costs-of-service-cos', ExpenseDuesSubscriptions = 'expense::dues-subscriptions', ExpenseSundry = 'expense::sundry', AssetVehicles = 'asset::vehicles', OtherExpenseParkingAndTolls = 'other-expense::parking-and-tolls', AssetFixedAssetSoftware = 'asset::fixed-asset-software', ExpenseCommissionsAndFees = 'expense::commissions-and-fees', AssetCashAndCashEquivalents = 'asset::cash-and-cash-equivalents', ExpenseEquipmentRental = 'expense::equipment-rental', AssetRentsHeldInTrust = 'asset::rents-held-in-trust', ExpenseAppropriationsToDepreciation = 'expense::appropriations-to-depreciation', LiabilityDeferredTaxLiabilities = 'liability::deferred-tax-liabilities', LiabilityProvisionsNonCurrentLiabilities = 'liability::provisions-non-current-liabilities', OtherCurrentLiabilityDutiesAndTaxes = 'other-current-liability::duties-and-taxes', OtherExpenseVehicleLoan = 'other-expense::vehicle-loan', OtherExpenseVehicleRegistration = 'other-expense::vehicle-registration', AssetLongTermInvestments = 'asset::long-term-investments', OtherExpenseDepreciation = 'other-expense::depreciation', AssetAccumulatedDepreciation = 'asset::accumulated-depreciation', EquityOwnersEquity = 'equity::owners-equity', ExpenseIncomeTaxExpense = 'expense::income-tax-expense', AssetDepletableAssets = 'asset::depletable-assets', ExpensePayrollExpenses = 'expense::payroll-expenses', LiabilityStaffAndRelatedLongTermLiabilityAccounts = 'liability::staff-and-related-long-term-liability-accounts', EquityHealthcare = 'equity::healthcare', CostOfGoodsSoldCostOfLaborCos = 'cost-of-goods-sold::cost-of-labor-cos', EquityInvestmentGrants = 'equity::investment-grants', OtherCurrentLiabilityOtherCurrentLiabilities = 'other-current-liability::other-current-liabilities', AssetFixedAssetFurniture = 'asset::fixed-asset-furniture', OtherIncomeOtherInvestmentIncome = 'other-income::other-investment-income', OtherCurrentLiabilityShortTermBorrowings = 'other-current-liability::short-term-borrowings', EquityPartnerContributions = 'equity::partner-contributions', RevenueSavingsByTaxScheme = 'revenue::savings-by-tax-scheme', EquityEstimatedTaxes = 'equity::estimated-taxes', AssetBuildings = 'asset::buildings', AssetOtherConsumables = 'asset::other-consumables', AssetRetainage = 'asset::retainage', OtherCurrentLiabilityCurrentPortionOfObligationsUnderFinanceLeases = 'other-current-liability::current-portion-of-obligations-under-finance-leases', LiabilityOtherLongTermLiabilities = 'liability::other-long-term-liabilities', AssetExpenditureAuthorisationsAndLettersOfCredit = 'asset::expenditure-authorisations-and-letters-of-credit', EquityPartnersEquity = 'equity::partners-equity', OtherCurrentLiabilityGlobalTaxPayable = 'other-current-liability::global-tax-payable', OtherExpensePenaltiesSettlements = 'other-expense::penalties-settlements', AssetAvailableForSaleFinancialAssets = 'asset::available-for-sale-financial-assets', OtherExpense = 'other-expense', ExpenseBorrowingCost = 'expense::borrowing-cost', OtherExpenseVehicleInsurance = 'other-expense::vehicle-insurance', AssetAccumulatedAmortization = 'asset::accumulated-amortization', OtherExpenseDeferredTaxExpense = 'other-expense::deferred-tax-expense', CostOfGoodsSoldCostOfSales = 'cost-of-goods-sold::cost-of-sales', ExpenseShippingFreightDelivery = 'expense::shipping-freight-delivery', EquityAccumulatedOtherComprehensiveIncome = 'equity::accumulated-other-comprehensive-income', AssetBalWithGovtAuthorities = 'asset::bal-with-govt-authorities', AssetFixedAsset = 'asset::fixed-asset', AssetAssetsInCourseOfConstruction = 'asset::assets-in-course-of-construction', OtherCurrentLiabilityInterestPayables = 'other-current-liability::interest-payables', AssetLeaseholdImprovements = 'asset::leasehold-improvements', OtherCurrentLiabilityPayrollTaxPayable = 'other-current-liability::payroll-tax-payable', AssetOtherFixedAssets = 'asset::other-fixed-assets', RevenueIncome = 'revenue::income', AssetOtherLongTermAssets = 'asset::other-long-term-assets', ExpenseOfficeExpenses = 'expense::office-expenses', AssetShortTermInvestmentsInRelatedParties = 'asset::short-term-investments-in-related-parties', Equity = 'equity', AssetInvestmentMortgageRealEstateLoans = 'asset::investment-mortgage-real-estate-loans', CostOfGoodsSoldSuppliesMaterialsCogs = 'cost-of-goods-sold::supplies-materials-cogs', ExpenseInterestPaid = 'expense::interest-paid', ExpenseStaffCosts = 'expense::staff-costs', OtherExpenseAmortization = 'other-expense::amortization', RevenueOperatingGrants = 'revenue::operating-grants', AssetLoansToOfficers = 'asset::loans-to-officers', CostOfGoodsSoldShippingFreightDeliveryCos = 'cost-of-goods-sold::shipping-freight-delivery-cos', OtherCurrentLiabilityPayrollClearing = 'other-current-liability::payroll-clearing', OtherCurrentLiabilityStateLocalIncomeTaxPayable = 'other-current-liability::state-local-income-tax-payable', ExpenseUtilities = 'expense::utilities', OtherCurrentLiabilityInsurancePayable = 'other-current-liability::insurance-payable', OtherCurrentLiabilityAccruedLiabilities = 'other-current-liability::accrued-liabilities', OtherCurrentLiabilityTradeAndOtherPayables = 'other-current-liability::trade-and-other-payables', AssetEmployeeCashAdvances = 'asset::employee-cash-advances', AssetInvestmentUsGovernmentObligations = 'asset::investment-us-government-obligations', AssetOtherCurrentAsset = 'asset::other-current-asset', EquityShareCapital = 'equity::share-capital', ExpenseBankCharges = 'expense::bank-charges', ExpenseOtherCurrentOperatingCharges = 'expense::other-current-operating-charges', AssetOtherEarMarkedBankAccounts = 'asset::other-ear-marked-bank-accounts', ExpenseRepairMaintenance = 'expense::repair-maintenance', ExpenseTravel = 'expense::travel', OtherIncomeGainLossOnSaleOfFixedAssets = 'other-income::gain-loss-on-sale-of-fixed-assets', RevenueOtherPrimaryIncome = 'revenue::other-primary-income', EquityPreferredStock = 'equity::preferred-stock', EquityEquityInEarningsOfSubsidiuaries = 'equity::equity-in-earnings-of-subsidiuaries', AssetLoansToOthers = 'asset::loans-to-others', RevenueRevenueGeneral = 'revenue::revenue-general', LiabilityOutstandingDuesMicroSmallEnterprise = 'liability::outstanding-dues-micro-small-enterprise', EquityOpeningBalanceEquity = 'equity::opening-balance-equity', ExpenseUnappliedCashBillPaymentExpense = 'expense::unapplied-cash-bill-payment-expense', OtherExpenseRentAndLease = 'other-expense::rent-and-lease', AssetShortTermLoansAndAdvancesToRelatedParties = 'asset::short-term-loans-and-advances-to-related-parties', AssetAssetsAvailableForSale = 'asset::assets-available-for-sale' }
export const enum Country { Algeria = 'algeria', Comoros = 'comoros', Thailand = 'thailand', Bahamas = 'bahamas', Fiji = 'fiji', Luxembourg = 'luxembourg', Slovakia = 'slovakia', Tonga = 'tonga', SierraLeone = 'sierra-leone', Uganda = 'uganda', Romania = 'romania', TrinidadAndTobago = 'trinidad-and-tobago', UnitedArabEmirates = 'united-arab-emirates', Vietnam = 'vietnam', SouthKorea = 'south-korea', TimorLeste = 'timor-leste', Nauru = 'nauru', Croatia = 'croatia', Singapore = 'singapore', Eswatini = 'eswatini', Nigeria = 'nigeria', Indonesia = 'indonesia', Namibia = 'namibia', SouthAfrica = 'south-africa', Hungary = 'hungary', Argentina = 'argentina', PapuaNewGuinea = 'papua-new-guinea', Djibouti = 'djibouti', Honduras = 'honduras', Iraq = 'iraq', BosniaAndHerzegovina = 'bosnia-and-herzegovina', Paraguay = 'paraguay', Yemen = 'yemen', Finland = 'finland', Libya = 'libya', Gabon = 'gabon', Iran = 'iran', Afghanistan = 'afghanistan', Maldives = 'maldives', DominicanRepublic = 'dominican-republic', Bhutan = 'bhutan', SaoTomeAndPrincipe = 'sao-tome-and-principe', NewZealand = 'new-zealand', Dominica = 'dominica', Kiribati = 'kiribati', Benin = 'benin', Oman = 'oman', Lithuania = 'lithuania', UnitedKingdom = 'united-kingdom', Montenegro = 'montenegro', Mongolia = 'mongolia', Qatar = 'qatar', Cyprus = 'cyprus', Syria = 'syria', Madagascar = 'madagascar', Switzerland = 'switzerland', VaticanCity = 'vatican-city', CzechRepublic = 'czech-republic', Ecuador = 'ecuador', Morocco = 'morocco', Malawi = 'malawi', Malaysia = 'malaysia', Myanmar = 'myanmar', SolomonIslands = 'solomon-islands', Japan = 'japan', Laos = 'laos', Armenia = 'armenia', Canada = 'canada', EquatorialGuinea = 'equatorial-guinea', Monaco = 'monaco', Guyana = 'guyana', Cambodia = 'cambodia', Somalia = 'somalia', Ethiopia = 'ethiopia', Moldova = 'moldova', Kuwait = 'kuwait', Serbia = 'serbia', Angola = 'angola', Barbados = 'barbados', CentralAfricanRepublic = 'central-african-republic', Chile = 'chile', India = 'india', Poland = 'poland', Nepal = 'nepal', Palestine = 'palestine', Tajikistan = 'tajikistan', Guinea = 'guinea', Pakistan = 'pakistan', Turkey = 'turkey', Turkmenistan = 'turkmenistan', Vanuatu = 'vanuatu', Zambia = 'zambia', Taiwan = 'taiwan', Seychelles = 'seychelles', CongoDemocraticRepublic = 'congo-democratic-republic', Uruguay = 'uruguay', Russia = 'russia', Tanzania = 'tanzania', Germany = 'germany', Ghana = 'ghana', CostaRica = 'costa-rica', Azerbaijan = 'azerbaijan', SaintKittsAndNevis = 'saint-kitts-and-nevis', Mauritania = 'mauritania', Jamaica = 'jamaica', Haiti = 'haiti', Rwanda = 'rwanda', China = 'china', Tunisia = 'tunisia', Albania = 'albania', CaboVerde = 'cabo-verde', Australia = 'australia', Iceland = 'iceland', Jordan = 'jordan', Kyrgyzstan = 'kyrgyzstan', Tuvalu = 'tuvalu', BurkinaFaso = 'burkina-faso', Guatemala = 'guatemala', Ukraine = 'ukraine', Bahrain = 'bahrain', MarshallIslands = 'marshall-islands', AntiguaAndBarbuda = 'antigua-and-barbuda', Andorra = 'andorra', Belgium = 'belgium', CongoRepublic = 'congo-republic', SaintVincentAndTheGrenadines = 'saint-vincent-and-the-grenadines', Lesotho = 'lesotho', Netherlands = 'netherlands', SaintLucia = 'saint-lucia', Suriname = 'suriname', GuineaBissau = 'guinea-bissau', Gambia = 'gambia', Sweden = 'sweden', Belize = 'belize', Estonia = 'estonia', Belarus = 'belarus', Burundi = 'burundi', Lebanon = 'lebanon', Grenada = 'grenada', Chad = 'chad', Malta = 'malta', Panama = 'panama', Austria = 'austria', Senegal = 'senegal', SriLanka = 'sri-lanka', Israel = 'israel', Togo = 'togo', Venezuela = 'venezuela', CoteDIvoire = 'cote-d-ivoire', Zimbabwe = 'zimbabwe', Kazakhstan = 'kazakhstan', Kenya = 'kenya', Uzbekistan = 'uzbekistan', Portugal = 'portugal', Bulgaria = 'bulgaria', Latvia = 'latvia', Liberia = 'liberia', Mauritius = 'mauritius', Mali = 'mali', Botswana = 'botswana', Cuba = 'cuba', Brazil = 'brazil', Denmark = 'denmark', ElSalvador = 'el-salvador', Eritrea = 'eritrea', Peru = 'peru', Brunei = 'brunei', Niger = 'niger', NorthMacedonia = 'north-macedonia', Mozambique = 'mozambique', Cameroon = 'cameroon', France = 'france', Bangladesh = 'bangladesh', Georgia = 'georgia', Italy = 'italy', Bolivia = 'bolivia', Egypt = 'egypt', Colombia = 'colombia', Liechtenstein = 'liechtenstein', Nicaragua = 'nicaragua', Philippines = 'philippines', SanMarino = 'san-marino', Greece = 'greece', Mexico = 'mexico', Slovenia = 'slovenia', SouthSudan = 'south-sudan', Sudan = 'sudan', UnitedStates = 'united-states', Palau = 'palau', NorthKorea = 'north-korea', Ireland = 'ireland', Micronesia = 'micronesia', Norway = 'norway', Samoa = 'samoa', SaudiArabia = 'saudi-arabia', Spain = 'spain' }
export const enum GlobalTaxType { CustomsDuty = 'customs-duty', SalesTax = 'sales-tax', PropertyTax = 'property-tax', Gst = 'gst', Vat = 'vat', Other = 'other', ExciseTax = 'excise-tax' }
export const enum IdentityProvider { Pinterest = 'pinterest', Signal = 'signal', Github = 'github', Tumblr = 'tumblr', Apple = 'apple', Reddit = 'reddit', Twitter = 'twitter', Dribbble = 'dribbble', Line = 'line', Microsoft = 'microsoft', Flickr = 'flickr', Instagram = 'instagram', Snapchat = 'snapchat', Linkedin = 'linkedin', Foursquare = 'foursquare', Telegram = 'telegram', Facebook = 'facebook', Paypal = 'paypal', Behance = 'behance', Whatsapp = 'whatsapp', Discord = 'discord', Slack = 'slack', Amazon = 'amazon', Yahoo = 'yahoo', Vimeo = 'vimeo', Google = 'google', Tiktok = 'tiktok', Wechat = 'wechat', Qq = 'qq', Other = 'other' }
export const enum AccountEngagementLevel { Cold = 'cold', Warm = 'warm', Unknown = 'unknown', Hot = 'hot' }
export const enum ReviewApprovalStatus { Pending = 'pending', InReview = 'in-review', Approved = 'approved', Rejected = 'rejected', Revised = 'revised' }
export const enum StakeholderType { Vendor = 'vendor', Competitor = 'competitor', Customer = 'customer', Partner = 'partner', Other = 'other', Investor = 'investor' }
export const enum AccountStatus { Inactive = 'inactive', Suspended = 'suspended', Closed = 'closed', Pending = 'pending', Active = 'active' }
export const enum CampaignStatus { Planned = 'planned', Active = 'active', Paused = 'paused', Cancelled = 'cancelled', Archived = 'archived', Completed = 'completed', Scheduled = 'scheduled', Draft = 'draft' }
export const enum CustomerType { Retail = 'retail', B2b = 'b2b', Wholesale = 'wholesale', B2c = 'b2c', Online = 'online', Corporate = 'corporate' }
export const enum MessageContentType { Location = 'location', Voice = 'voice', Link = 'link', Image = 'image', Contact = 'contact', Text = 'text', Video = 'video', Audio = 'audio', Gif = 'gif', Sticker = 'sticker', Html = 'html', File = 'file', Document = 'document' }
export const enum ReactionType { Wow = 'wow', Like = 'like', Laugh = 'laugh', Sad = 'sad', Interested = 'interested', Angry = 'angry', Love = 'love', Dislike = 'dislike', Bookmark = 'bookmark' }
export const enum SupportTicketPriority { Medium = 'medium', Urgent = 'urgent', Immediate = 'immediate', Low = 'low', High = 'high' }
export const enum IssueLifecycleStatus { InProgress = 'in-progress', Open = 'open', Pending = 'pending', OnHold = 'on-hold', Resolved = 'resolved', Cancelled = 'cancelled', Closed = 'closed' }
export const enum OrderStatus { Refunded = 'refunded', PartiallyFulfilled = 'partially-fulfilled', Completed = 'completed', AwaitingPickup = 'awaiting-pickup', Abandoned = 'abandoned', Pending = 'pending', Processing = 'processing', Draft = 'draft', AwaitingShipment = 'awaiting-shipment', Shipped = 'shipped', Confirmed = 'confirmed', AwaitingPayment = 'awaiting-payment', Delivered = 'delivered', Returned = 'returned', Disputed = 'disputed', OnHold = 'on-hold', Failed = 'failed', Cancelled = 'cancelled' }
export const enum DiscountType { TieredDiscount = 'tiered-discount', VariablePercentage = 'variable-percentage', ConditionalDiscount = 'conditional-discount', UnknownDiscount = 'unknown-discount', FixedAmount = 'fixed-amount', Percentage = 'percentage', VariableAmount = 'variable-amount', BuyOneGetOne = 'buy-one-get-one' }
export const enum FulfillmentStatus { Failure = 'failure', Pending = 'pending', Cancelled = 'cancelled', Returned = 'returned', Delivered = 'delivered', InTransit = 'in-transit' }
export const enum ProductAvailabilityStatus { OutOfStock = 'out-of-stock', BackOrder = 'back-order', PreOrder = 'pre-order', InStock = 'in-stock', Discontinued = 'discontinued' }
export const enum ExpenseApprovalStatus { Reimbursed = 'reimbursed', Cancelled = 'cancelled', Approved = 'approved', Pending = 'pending', Denied = 'denied', Reviewing = 'reviewing', Processed = 'processed', New = 'new' }
export const enum FinancialChargeType { ProcessingFee = 'processing-fee', Commission = 'commission', Other = 'other', ServiceCharge = 'service-charge', LateFee = 'late-fee', InterestCharge = 'interest-charge', TransactionFee = 'transaction-fee' }
export const enum BillingStatus { PartiallyPaid = 'partially-paid', Deleted = 'deleted', Draft = 'draft', Authorised = 'authorised', Submitted = 'submitted', Overdue = 'overdue', Pending = 'pending', Voided = 'voided', Unpaid = 'unpaid', Paid = 'paid' }
export const enum InvoiceAdjustmentType { Other = 'other', Tip = 'tip', Discount = 'discount', Tax = 'tax', Shipping = 'shipping' }
export const enum DataType { Null = 'null', Undefined = 'undefined', Binary = 'binary', Boolean = 'boolean', Json = 'json', Number = 'number', Date = 'date', Array = 'array', Object = 'object', Custom = 'custom', Timestamp = 'timestamp', String = 'string' }
export const enum EmploymentType { Volunteer = 'volunteer', PartTime = 'part-time', Contract = 'contract', Temporary = 'temporary', Internship = 'internship', Seasonal = 'seasonal', Freelance = 'freelance', Permanent = 'permanent', FullTime = 'full-time' }
export const enum TimeCycle { Daily = 'daily', Secondly = 'secondly', Weekly = 'weekly', Biweekly = 'biweekly', Quarterly = 'quarterly', Triennially = 'triennially', Hourly = 'hourly', Annually = 'annually', AdHoc = 'ad-hoc', SemiAnnually = 'semi-annually', SemiMonthly = 'semi-monthly', Minutely = 'minutely', Biennially = 'biennially', Custom = 'custom', Monthly = 'monthly' }
export const enum FinancialTrackingCategories { Service = 'service', Division = 'division', Department = 'department', Location = 'location', CostCenter = 'cost-center', Vendor = 'vendor', Class = 'class', Employee = 'employee', Other = 'other', Product = 'product', None = 'none', Project = 'project', Customer = 'customer' }
export const enum CampaignType { Email = 'email', Other = 'other', SearchEngine = 'search-engine', Display = 'display', SocialMedia = 'social-media' }
export const enum ContactAddressType { Personal = 'personal', Shipping = 'shipping', Business = 'business', Home = 'home', Billing = 'billing', Temporary = 'temporary', Work = 'work', Other = 'other' }
export const enum LeadLifecycleStatus { Open = 'open', AttemptedToContact = 'attempted-to-contact', Connected = 'connected', Lost = 'lost', New = 'new', Revisited = 'revisited', Converted = 'converted', Unqualified = 'unqualified', BadTiming = 'bad-timing', InProcess = 'in-process' }
export const enum ParticipantEngagementStatus { Active = 'active', Banned = 'banned', Admin = 'admin', Guest = 'guest', Left = 'left', Inactive = 'inactive', Moderator = 'moderator' }
export const enum ItemEntityStatus { Active = 'active', Suspended = 'suspended', Deleted = 'deleted', Completed = 'completed', Inactive = 'inactive', Pending = 'pending', Archived = 'archived' }
export const enum Currency { ZAR = 'zar', NPR = 'npr', CAD = 'cad', LAK = 'lak', ZMW = 'zmw', KMF = 'kmf', MMK = 'mmk', RSD = 'rsd', LRD = 'lrd', DJF = 'djf', CRC = 'crc', CUC = 'cuc', KPW = 'kpw', RUB = 'rub', SCR = 'scr', OMR = 'omr', AMD = 'amd', AWG = 'awg', AFN = 'afn', PGK = 'pgk', TOP = 'top', IQD = 'iqd', KYD = 'kyd', BGN = 'bgn', SSP = 'ssp', CUP = 'cup', MKD = 'mkd', TMT = 'tmt', BMD = 'bmd', INR = 'inr', TWD = 'twd', GIP = 'gip', SLL = 'sll', YER = 'yer', NAD = 'nad', IRR = 'irr', CNY = 'cny', MOP = 'mop', HKD = 'hkd', ARS = 'ars', SBD = 'sbd', PAB = 'pab', UYU = 'uyu', VES = 'ves', FJD = 'fjd', CVE = 'cve', KZT = 'kzt', JOD = 'jod', MDL = 'mdl', GBP = 'gbp', QAR = 'qar', KGS = 'kgs', LBP = 'lbp', LKR = 'lkr', GMD = 'gmd', HUF = 'huf', FKP = 'fkp', BIF = 'bif', BOB = 'bob', ETB = 'etb', THB = 'thb', SRD = 'srd', RWF = 'rwf', LYD = 'lyd', CHF = 'chf', CZK = 'czk', HRK = 'hrk', MZN = 'mzn', NZD = 'nzd', UAH = 'uah', VUV = 'vuv', MNT = 'mnt', SDG = 'sdg', GHS = 'ghs', BND = 'bnd', IMP = 'imp', VND = 'vnd', GEL = 'gel', KES = 'kes', ZWL = 'zwl', XOF = 'xof', SOS = 'sos', NOK = 'nok', TRY = 'try', BHD = 'bhd', LSL = 'lsl', UGX = 'ugx', FOK = 'fok', GGP = 'ggp', XCD = 'xcd', KWD = 'kwd', SGD = 'sgd', NGN = 'ngn', SZL = 'szl', TVD = 'tvd', XPF = 'xpf', HTG = 'htg', CLP = 'clp', HNL = 'hnl', TTD = 'ttd', DZD = 'dzd', MAD = 'mad', MRU = 'mru', MGA = 'mga', UZS = 'uzs', ILS = 'ils', ALL = 'all', BYN = 'byn', DKK = 'dkk', JEP = 'jep', TZS = 'tzs', BAM = 'bam', TJS = 'tjs', KRW = 'krw', SHP = 'shp', MWK = 'mwk', SEK = 'sek', ISK = 'isk', PKR = 'pkr', WST = 'wst', AED = 'aed', STN = 'stn', USD = 'usd', BDT = 'bdt', EGP = 'egp', TND = 'tnd', CDF = 'cdf', MXN = 'mxn', PLN = 'pln', ANG = 'ang', SAR = 'sar', NIO = 'nio', GTQ = 'gtq', PHP = 'php', PYG = 'pyg', EUR = 'eur', AZN = 'azn', JPY = 'jpy', KHR = 'khr', MVR = 'mvr', XDR = 'xdr', RON = 'ron', IDR = 'idr', BRL = 'brl', DOP = 'dop', ERN = 'ern', AUD = 'aud', JMD = 'jmd', MYR = 'myr', AOA = 'aoa', PEN = 'pen', XAF = 'xaf', COP = 'cop', GNF = 'gnf', GYD = 'gyd', BBD = 'bbd', MUR = 'mur', SYP = 'syp', BWP = 'bwp', BSD = 'bsd', BZD = 'bzd', KID = 'kid', BTN = 'btn' }
export const enum CustomerEligibilityStatus { NewCustomers = 'new-customers', ReturningCustomers = 'returning-customers', Other = 'other', AllCustomers = 'all-customers', VipCustomers = 'vip-customers', SpecificConditions = 'specific-conditions' }
export const enum ItemCondition { Used = 'used', OpenBox = 'open-box', LikeNew = 'like-new', Damaged = 'damaged', Refurbished = 'refurbished', New = 'new' }
export const enum TransactionType { Refund = 'refund', Charge = 'charge', Adjustment = 'adjustment', Transfer = 'transfer', Withdrawal = 'withdrawal', Deposit = 'deposit', Payment = 'payment', Fee = 'fee' }
export const enum EntityLifecycleStatus { Scheduled = 'scheduled', Active = 'active', Archived = 'archived', Preorder = 'preorder', Draft = 'draft', Deleted = 'deleted', Inactive = 'inactive' }
export const enum JournalEntryStatus { Error = 'error', Pending = 'pending', Posted = 'posted', Draft = 'draft', Voided = 'voided', Corrected = 'corrected' }
export const enum DayOfWeek { Sunday = 'sunday', Monday = 'monday', Tuesday = 'tuesday', Thursday = 'thursday', Wednesday = 'wednesday', Friday = 'friday', Saturday = 'saturday' }
export const enum AccountingAccountType { ExpenseBorrowingCost = 'expense::borrowing-cost', EquityCapitalReserves = 'equity::capital-reserves', EquityInvestmentGrants = 'equity::investment-grants', RevenueUnappliedCashPaymentIncome = 'revenue::unapplied-cash-payment-income', ExpenseLegalProfessionalFees = 'expense::legal-professional-fees', AssetOrganizationalCosts = 'asset::organizational-costs', ExpenseOtherRentalCosts = 'expense::other-rental-costs', AssetCashAndCashEquivalents = 'asset::cash-and-cash-equivalents', AssetLoansToStockholders = 'asset::loans-to-stockholders', EquityPersonalIncome = 'equity::personal-income', OtherExpensePenaltiesSettlements = 'other-expense::penalties-settlements', OtherExpensePriorPeriodItems = 'other-expense::prior-period-items', LiabilityDebtsRelatedToParticipatingInterests = 'liability::debts-related-to-participating-interests', EquityMoneyReceivedAgainstShareWarrants = 'equity::money-received-against-share-warrants', ExpenseExtraordinaryCharges = 'expense::extraordinary-charges', LiabilityOtherLongTermProvisions = 'liability::other-long-term-provisions', AssetDeferredTax = 'asset::deferred-tax', OtherIncome = 'other-income', OtherIncomeLossOnDisposalOfAssets = 'other-income::loss-on-disposal-of-assets', OtherIncomeOtherOperatingIncome = 'other-income::other-operating-income', AssetOtherIntangibleAssets = 'asset::other-intangible-assets', ExpenseOfficeExpenses = 'expense::office-expenses', ExpenseTravelMeals = 'expense::travel-meals', ExpenseEntertainmentMeals = 'expense::entertainment-meals', OtherExpenseOtherHomeOfficeExpenses = 'other-expense::other-home-office-expenses', AssetLongTermLoansAndAdvancesToRelatedParties = 'asset::long-term-loans-and-advances-to-related-parties', AssetOtherEarMarkedBankAccounts = 'asset::other-ear-marked-bank-accounts', OtherExpenseRentAndLease = 'other-expense::rent-and-lease', AssetAccumulatedDepreciation = 'asset::accumulated-depreciation', EquityAccumulatedAdjustment = 'equity::accumulated-adjustment', LiabilityOutstandingDuesMicroSmallEnterprise = 'liability::outstanding-dues-micro-small-enterprise', AssetLand = 'asset::land', AssetBuildings = 'asset::buildings', LiabilityCreditCard = 'liability::credit-card', ExpenseEquipmentRental = 'expense::equipment-rental', LiabilityLongTermEmployeeBenefitObligations = 'liability::long-term-employee-benefit-obligations', ExpenseUnappliedCashBillPaymentExpense = 'expense::unapplied-cash-bill-payment-expense', LiabilityProvisionForLiabilities = 'liability::provision-for-liabilities', OtherCurrentLiability = 'other-current-liability', OtherCurrentLiabilityPayrollClearing = 'other-current-liability::payroll-clearing', AssetOtherCurrentAsset = 'asset::other-current-asset', AssetFixedAssetOtherToolsEquipment = 'asset::fixed-asset-other-tools-equipment', ExpenseLossOnDiscontinuedOperationsNetOfTax = 'expense::loss-on-discontinued-operations-net-of-tax', OtherExpenseRepairsAndMaintenance = 'other-expense::repairs-and-maintenance', OtherExpenseDeferredTaxExpense = 'other-expense::deferred-tax-expense', AssetMoneyMarket = 'asset::money-market', LiabilityLongTermDebit = 'liability::long-term-debit', OtherCurrentLiabilityDutiesAndTaxes = 'other-current-liability::duties-and-taxes', RevenueServiceFeeIncome = 'revenue::service-fee-income', OtherIncomeGainLossOnSaleOfInvestments = 'other-income::gain-loss-on-sale-of-investments', AccountsReceivable = 'accounts-receivable', RevenueSalesRetail = 'revenue::sales-retail', AssetAssetsAvailableForSale = 'asset::assets-available-for-sale', AssetInternalTransfers = 'asset::internal-transfers', OtherCurrentLiabilityTrustAccountsLiabilities = 'other-current-liability::trust-accounts-liabilities', AssetCumulativeDepreciationOnIntangibleAssets = 'asset::cumulative-depreciation-on-intangible-assets', LiabilityLongTermBorrowings = 'liability::long-term-borrowings', OtherCurrentLiabilityTradeAndOtherPayables = 'other-current-liability::trade-and-other-payables', AssetShortTermLoansAndAdvancesToRelatedParties = 'asset::short-term-loans-and-advances-to-related-parties', OtherExpenseAmortization = 'other-expense::amortization', LiabilityProvisionsNonCurrentLiabilities = 'liability::provisions-non-current-liabilities', AssetAvailableForSaleFinancialAssets = 'asset::available-for-sale-financial-assets', AssetOtherLongTermInvestments = 'asset::other-long-term-investments', RevenueOtherPrimaryIncome = 'revenue::other-primary-income', CostOfGoodsSoldFreightAndDeliveryCost = 'cost-of-goods-sold::freight-and-delivery-cost', AssetOtherCurrentAssets = 'asset::other-current-assets', OtherExpenseMatCredit = 'other-expense::mat-credit', LiabilityLiabilitiesRelatedToAssetsHeldForSale = 'liability::liabilities-related-to-assets-held-for-sale', AssetOtherAsset = 'asset::other-asset', ExpenseTaxesPaid = 'expense::taxes-paid', EquityCommonStock = 'equity::common-stock', AssetProvisionsNonCurrentAssets = 'asset::provisions-non-current-assets', ExpenseShippingFreightDelivery = 'expense::shipping-freight-delivery', AssetRetainage = 'asset::retainage', CostOfGoodsSold = 'cost-of-goods-sold', ExpenseInsurance = 'expense::insurance', ExpenseDistributionCosts = 'expense::distribution-costs', AssetInvestmentOther = 'asset::investment-other', OtherCurrentLiabilityInsurancePayable = 'other-current-liability::insurance-payable', CostOfGoodsSoldCostOfLaborCos = 'cost-of-goods-sold::cost-of-labor-cos', OtherExpense = 'other-expense', AssetDevelopmentCosts = 'asset::development-costs', AssetProvisionsCurrentAssets = 'asset::provisions-current-assets', ExpenseOtherCurrentOperatingCharges = 'expense::other-current-operating-charges', EquityPartnerDistributions = 'equity::partner-distributions', EquityEquityInEarningsOfSubsidiuaries = 'equity::equity-in-earnings-of-subsidiuaries', OtherExpenseExtraordinaryItems = 'other-expense::extraordinary-items', OtherCurrentLiabilityCurrentPortionOfObligationsUnderFinanceLeases = 'other-current-liability::current-portion-of-obligations-under-finance-leases', ExpenseEntertainment = 'expense::entertainment', OtherCurrentLiabilitySalesTaxPayable = 'other-current-liability::sales-tax-payable', AssetFurnitureAndFixtures = 'asset::furniture-and-fixtures', ExpenseRentOrLeaseOfBuildings = 'expense::rent-or-lease-of-buildings', LiabilityStaffAndRelatedLongTermLiabilityAccounts = 'liability::staff-and-related-long-term-liability-accounts', AssetFixedAssetCopiers = 'asset::fixed-asset-copiers', RevenueDiscountsRefundsGiven = 'revenue::discounts-refunds-given', Expense = 'expense', AssetBank = 'asset::bank', AssetTrustAccounts = 'asset::trust-accounts', OtherIncomeOtherMiscellaneousIncome = 'other-income::other-miscellaneous-income', AssetNonCurrentAssets = 'asset::non-current-assets', ExpenseAuto = 'expense::auto', Equity = 'equity', OtherExpenseVehicleLease = 'other-expense::vehicle-lease', OtherExpenseOtherVehicleExpenses = 'other-expense::other-vehicle-expenses', AssetOtherFixedAssets = 'asset::other-fixed-assets', ExpenseOtherSellingExpenses = 'expense::other-selling-expenses', OtherCurrentLiabilityLoanPayable = 'other-current-liability::loan-payable', OtherCurrentLiabilityCurrentPortionEmployeeBenefitsObligations = 'other-current-liability::current-portion-employee-benefits-obligations', AssetEmployeeCashAdvances = 'asset::employee-cash-advances', OtherCurrentLiabilityCurrentLiabilities = 'other-current-liability::current-liabilities', OtherExpenseParkingAndTolls = 'other-expense::parking-and-tolls', AssetFixedAssetSoftware = 'asset::fixed-asset-software', AssetFixedAssetComputers = 'asset::fixed-asset-computers', OtherExpenseIncomeTaxOtherExpense = 'other-expense::income-tax-other-expense', RevenueSalesWholesale = 'revenue::sales-wholesale', OtherCurrentLiabilityDividendsPayable = 'other-current-liability::dividends-payable', AssetParticipatingInterests = 'asset::participating-interests', EquityEstimatedTaxes = 'equity::estimated-taxes', LiabilityAccrualsAndDeferredIncome = 'liability::accruals-and-deferred-income', OtherCurrentLiabilityProvisionsCurrentLiabilities = 'other-current-liability::provisions-current-liabilities', EquityShareApplicationMoneyPendingAllotment = 'equity::share-application-money-pending-allotment', ExpenseTravel = 'expense::travel', AssetPrepaidExpenses = 'asset::prepaid-expenses', OtherExpenseDepreciation = 'other-expense::depreciation', LiabilityAccruedVacationPayable = 'liability::accrued-vacation-payable', ExpenseBankCharges = 'expense::bank-charges', AssetCalledUpShareCapitalNotPaid = 'asset::called-up-share-capital-not-paid', OtherIncomeDividendIncome = 'other-income::dividend-income', EquityFunds = 'equity::funds', EquityPaidInCapitalOrSurplus = 'equity::paid-in-capital-or-surplus', LiabilityGroupAndAssociates = 'liability::group-and-associates', OtherExpenseExchangeGainOrLoss = 'other-expense::exchange-gain-or-loss', OtherCurrentLiabilityOtherCurrentLiabilities = 'other-current-liability::other-current-liabilities', OtherCurrentLiabilityGlobalTaxSuspense = 'other-current-liability::global-tax-suspense', AssetLongTermInvestments = 'asset::long-term-investments', AssetLicenses = 'asset::licenses', ExpenseCommissionsAndFees = 'expense::commissions-and-fees', EquityPartnerContributions = 'equity::partner-contributions', AssetLoansToOthers = 'asset::loans-to-others', EquityPartnersEquity = 'equity::partners-equity', OtherExpenseWashAndRoadServices = 'other-expense::wash-and-road-services', OtherCurrentLiabilityGlobalTaxPayable = 'other-current-liability::global-tax-payable', ExpenseAmortizationExpense = 'expense::amortization-expense', CostOfGoodsSoldShippingFreightDeliveryCos = 'cost-of-goods-sold::shipping-freight-delivery-cos', AssetFixedAsset = 'asset::fixed-asset', AssetSecurityDeposits = 'asset::security-deposits', AssetCapitalWip = 'asset::capital-wip', OtherExpenseHomeOwnerRentalInsurance = 'other-expense::home-owner-rental-insurance', CostOfGoodsSoldSuppliesMaterialsCogs = 'cost-of-goods-sold::supplies-materials-cogs', AssetProvisionsFixedAssets = 'asset::provisions-fixed-assets', OtherCurrentLiabilityStaffAndRelatedLiabilityAccounts = 'other-current-liability::staff-and-related-liability-accounts', RevenueCashReceiptIncome = 'revenue::cash-receipt-income', EquityPreferredStock = 'equity::preferred-stock', AssetFixedAssetPhotoVideo = 'asset::fixed-asset-photo-video', AssetFixedAssetPhone = 'asset::fixed-asset-phone', ExpensePurchasesRebates = 'expense::purchases-rebates', LiabilityObligationsUnderFinanceLeases = 'liability::obligations-under-finance-leases', AssetInvestments = 'asset::investments', AssetOtherLongTermLoansAndAdvances = 'asset::other-long-term-loans-and-advances', ExpenseRepairMaintenance = 'expense::repair-maintenance', OtherExpenseTaxRoundoffGainOrLoss = 'other-expense::tax-roundoff-gain-or-loss', ExpenseCostOfLabor = 'expense::cost-of-labor', ExpenseOtherExternalServices = 'expense::other-external-services', AssetRentsHeldInTrust = 'asset::rents-held-in-trust', AssetAssetsHeldForSale = 'asset::assets-held-for-sale', OtherCurrentLiabilityDirectDepositPayable = 'other-current-liability::direct-deposit-payable', EquityTreasuryStock = 'equity::treasury-stock', OtherIncomeOtherInvestmentIncome = 'other-income::other-investment-income', AssetIntangibleAssetsUnderDevelopment = 'asset::intangible-assets-under-development', AssetAccumulatedDepletion = 'asset::accumulated-depletion', AssetOtherLongTermAssets = 'asset::other-long-term-assets', AssetShortTermInvestmentsInRelatedParties = 'asset::short-term-investments-in-related-parties', RevenueOtherCurrentOperatingIncome = 'revenue::other-current-operating-income', LiabilityGovernmentAndOtherPublicAuthorities = 'liability::government-and-other-public-authorities', LiabilityBankLoans = 'liability::bank-loans', EquityAccumulatedOtherComprehensiveIncome = 'equity::accumulated-other-comprehensive-income', OtherCurrentLiabilityFederalIncomeTaxPayable = 'other-current-liability::federal-income-tax-payable', AssetAllowanceForBadDebts = 'asset::allowance-for-bad-debts', ExpenseTravelExpensesSellingExpense = 'expense::travel-expenses-selling-expense', OtherExpenseExceptionalItems = 'other-expense::exceptional-items', AssetUndepositedFunds = 'asset::undeposited-funds', Asset = 'asset', OtherExpenseDepletion = 'other-expense::depletion', AssetGoodwill = 'asset::goodwill', OtherExpenseVehicleRepairs = 'other-expense::vehicle-repairs', LiabilityOtherLongTermLiabilities = 'liability::other-long-term-liabilities', ExpenseInterestPaid = 'expense::interest-paid', AssetLeaseBuyout = 'asset::lease-buyout', OtherExpenseHomeOffice = 'other-expense::home-office', OtherExpenseVehicleInsurance = 'other-expense::vehicle-insurance', ExpenseFinanceCosts = 'expense::finance-costs', EquityHealthcare = 'equity::healthcare', AssetExpenditureAuthorisationsAndLettersOfCredit = 'asset::expenditure-authorisations-and-letters-of-credit', EquityPersonalExpense = 'equity::personal-expense', ExpenseIncomeTaxExpense = 'expense::income-tax-expense', OtherCurrentLiabilityPayrollTaxPayable = 'other-current-liability::payroll-tax-payable', ExpensePayrollExpenses = 'expense::payroll-expenses', AssetIntangibleAssets = 'asset::intangible-assets', OtherIncomeTaxExemptInterest = 'other-income::tax-exempt-interest', OtherExpenseGasAndFuel = 'other-expense::gas-and-fuel', OtherIncomeGainLossOnSaleOfFixedAssets = 'other-income::gain-loss-on-sale-of-fixed-assets', AssetInventory = 'asset::inventory', OtherCurrentLiabilityPrepaidExpensesPayable = 'other-current-liability::prepaid-expenses-payable', LiabilityDeferredTaxLiabilities = 'liability::deferred-tax-liabilities', OtherIncomeUnrealisedLossOnSecuritiesNetOfTax = 'other-income::unrealised-loss-on-securities-net-of-tax', ExpenseProjectStudiesSurveysAssessments = 'expense::project-studies-surveys-assessments', EquityCalledUpShareCapital = 'equity::called-up-share-capital', AssetGlobalTaxRefund = 'asset::global-tax-refund', OtherExpenseVehicleRegistration = 'other-expense::vehicle-registration', RevenueOperatingGrants = 'revenue::operating-grants', AssetVehicles = 'asset::vehicles', CostOfGoodsSoldCostOfSales = 'cost-of-goods-sold::cost-of-sales', OtherExpenseMortgageInterest = 'other-expense::mortgage-interest', AssetInvestmentUsGovernmentObligations = 'asset::investment-us-government-obligations', RevenueNonProfitIncome = 'revenue::non-profit-income', EquityRetainedEarnings = 'equity::retained-earnings', ExpenseOtherMiscellaneousServiceCost = 'expense::other-miscellaneous-service-cost', OtherCurrentLiabilityCurrentTaxLiability = 'other-current-liability::current-tax-liability', LiabilityShareholderNotesPayable = 'liability::shareholder-notes-payable', ExpenseBadDebts = 'expense::bad-debts', AssetPrepaymentsAndAccruedIncome = 'asset::prepayments-and-accrued-income', ExpenseStaffCosts = 'expense::staff-costs', LiabilityLongTermLiability = 'liability::long-term-liability', OtherExpenseVehicle = 'other-expense::vehicle', LiabilityAccountsPayable = 'liability::accounts-payable', ExpenseUtilities = 'expense::utilities', ExpenseAppropriationsToDepreciation = 'expense::appropriations-to-depreciation', EquityOtherFreeReserves = 'equity::other-free-reserves', EquityOwnersEquity = 'equity::owners-equity', ExpenseGlobalTaxExpense = 'expense::global-tax-expense', AssetInvestmentMortgageRealEstateLoans = 'asset::investment-mortgage-real-estate-loans', ExpenseShippingAndDeliveryExpense = 'expense::shipping-and-delivery-expense', OtherExpenseVehicleLoanInterest = 'other-expense::vehicle-loan-interest', LiabilityOutstandingDuesOtherThanMicroSmallEnterprise = 'liability::outstanding-dues-other-than-micro-small-enterprise', RevenueOwnWorkCapitalized = 'revenue::own-work-capitalized', ExpenseExternalServices = 'expense::external-services', AssetFixedAssetFurniture = 'asset::fixed-asset-furniture', ExpenseOtherBusinessExpenses = 'expense::other-business-expenses', AssetGlobalTaxDeferred = 'asset::global-tax-deferred', AssetLeaseholdImprovements = 'asset::leasehold-improvements', AssetInvestmentTaxExemptSecurities = 'asset::investment-tax-exempt-securities', OtherCurrentLiabilitySundryDebtorsAndCreditors = 'other-current-liability::sundry-debtors-and-creditors', AssetLandAsset = 'asset::land-asset', ExpenseSuppliesMaterials = 'expense::supplies-materials', AssetSavings = 'asset::savings', ExpenseAdvertisingPromotional = 'expense::advertising-promotional', AssetMachineryAndEquipment = 'asset::machinery-and-equipment', OtherCurrentLiabilityShortTermBorrowings = 'other-current-liability::short-term-borrowings', ExpenseOfficeGeneralAdministrativeExpenses = 'expense::office-general-administrative-expenses', ExpenseTravelExpensesGeneralAndAdminExpenses = 'expense::travel-expenses-general-and-admin-expenses', EquityShareCapital = 'equity::share-capital', ExpenseSundry = 'expense::sundry', AssetChecking = 'asset::checking', RevenueSavingsByTaxScheme = 'revenue::savings-by-tax-scheme', AssetAccumulatedAmortization = 'asset::accumulated-amortization', AssetAssetsInCourseOfConstruction = 'asset::assets-in-course-of-construction', AssetTradeAndOtherReceivables = 'asset::trade-and-other-receivables', AssetBalWithGovtAuthorities = 'asset::bal-with-govt-authorities', ExpenseCharitableContributions = 'expense::charitable-contributions', CostOfGoodsSoldOtherCostsOfServiceCos = 'cost-of-goods-sold::other-costs-of-service-cos', EquityOpeningBalanceEquity = 'equity::opening-balance-equity', CostOfGoodsSoldEquipmentRentalCos = 'cost-of-goods-sold::equipment-rental-cos', OtherExpenseVehicleLoan = 'other-expense::vehicle-loan', ExpenseManagementCompensation = 'expense::management-compensation', RevenueIncome = 'revenue::income', OtherExpenseUtilities = 'other-expense::utilities', OtherCurrentLiabilityLineOfCredit = 'other-current-liability::line-of-credit', EquityDividendDisbursed = 'equity::dividend-disbursed', RevenueSalesOfProductIncome = 'revenue::sales-of-product-income', AssetOtherConsumables = 'asset::other-consumables', AssetAccumulatedAmortizationOfOtherAssets = 'asset::accumulated-amortization-of-other-assets', RevenueRevenueGeneral = 'revenue::revenue-general', ExpensePromotionalMeals = 'expense::promotional-meals', OtherExpenseOtherMiscellaneousExpense = 'other-expense::other-miscellaneous-expense', OtherCurrentLiabilityStateLocalIncomeTaxPayable = 'other-current-liability::state-local-income-tax-payable', OtherIncomeInterestEarned = 'other-income::interest-earned', LiabilityNotesPayable = 'liability::notes-payable', OtherCurrentLiabilityInterestPayables = 'other-current-liability::interest-payables', AssetDepletableAssets = 'asset::depletable-assets', LiabilityAccruedLongTermLiabilities = 'liability::accrued-long-term-liabilities', OtherCurrentLiabilitySocialSecurityAgencies = 'other-current-liability::social-security-agencies', OtherCurrentLiabilityRentsInTrustLiability = 'other-current-liability::rents-in-trust-liability', ExpenseDuesSubscriptions = 'expense::dues-subscriptions', AssetCashOnHand = 'asset::cash-on-hand', AssetLoansToOfficers = 'asset::loans-to-officers', OtherCurrentLiabilityAccruedLiabilities = 'other-current-liability::accrued-liabilities', OtherCurrentLiabilityProvisionForWarrantyObligations = 'other-current-liability::provision-for-warranty-obligations' }
export const enum MessageReadStatus { Unsent = 'unsent', Read = 'read', Sent = 'sent', Delivered = 'delivered', Failed = 'failed' }
export const enum MessageDeliveryStatus { Read = 'read', Pending = 'pending', Failed = 'failed', Delivered = 'delivered', Error = 'error', Sent = 'sent', Undeliverable = 'undeliverable' }
export const enum SupportQueryType { Problem = 'problem', Bug = 'bug', Incident = 'incident', Question = 'question', Feedback = 'feedback', FeatureRequest = 'feature-request', Task = 'task' }
export const enum ImageMimeType { ImagePng = 'image/png', ImageGif = 'image/gif', ImageSvgXml = 'image/svg+xml', ImageHeic = 'image/heic', ImageJpeg = 'image/jpeg', ImageWebp = 'image/webp', ImageBmp = 'image/bmp', ImageTiff = 'image/tiff' }
export const enum OrderingCriteria { PriceDescending = 'price-descending', Popularity = 'popularity', CreationDate = 'creation-date', Relevance = 'relevance', Alphabetical = 'alphabetical', PriceAscending = 'price-ascending', Manual = 'manual', Rating = 'rating' }
export const enum ChatType { Private = 'private', Public = 'public', Group = 'group' }
export const enum ItemAvailabilityStatus { Discontinued = 'discontinued', OutOfStock = 'out-of-stock', Active = 'active', Inactive = 'inactive' }
export const enum FinancialAccountStatus { UnderReview = 'under-review', Active = 'active', Delinquent = 'delinquent', Suspended = 'suspended', Closed = 'closed', Frozen = 'frozen', Inactive = 'inactive' }
export const enum TransactionStatus { Succeeded = 'succeeded', Cancelled = 'cancelled', Error = 'error', Initiated = 'initiated', InProgress = 'in-progress', Failed = 'failed', Pending = 'pending' }
export const enum CreditNoteStatus { Applied = 'applied', Issued = 'issued', Cancelled = 'cancelled', Draft = 'draft', Revised = 'revised', Disputed = 'disputed', Completed = 'completed', Void = 'void', Pending = 'pending' }
export const enum PaymentTerm { Net = 'net', Prepayment = 'prepayment', Net60 = 'net-60', Prepaid = 'prepaid', DeferredPayment = 'deferred-payment', DueOnReceipt = 'due-on-receipt', UponCompletion = 'upon-completion', CashWithOrder = 'cash-with-order', CashInAdvance = 'cash-in-advance', CashBeforeShipment = 'cash-before-shipment', Installment = 'installment', CashOnDelivery = 'cash-on-delivery', Custom = 'custom', Net30 = 'net-30', Net90 = 'net-90', DueEndOfMonth = 'due-end-of-month' }
export const enum EmploymentAndCandidateStatus { Active = 'active', Interviewing = 'interviewing', Hired = 'hired', New = 'new', OfferExtended = 'offer-extended', OnLeave = 'on-leave', InReview = 'in-review', NotSelected = 'not-selected', Other = 'other', Terminated = 'terminated', Inactive = 'inactive' }
export const enum OrganizationalRole { Admin = 'admin', Other = 'other', Manager = 'manager', Employee = 'employee', Director = 'director', Supervisor = 'supervisor', Contractor = 'contractor' }
export const enum CustomerStatus { Pending = 'pending', Inactive = 'inactive', Active = 'active', Suspended = 'suspended', Archived = 'archived' }
export const enum SocialPlatform { Twitter = 'twitter', Instagram = 'instagram', X = 'x', Reddit = 'reddit', Snapchat = 'snapchat', Skype = 'skype', Pinterest = 'pinterest', OtherSocialPlatform = 'other-social-platform', Tumblr = 'tumblr', Facebook = 'facebook', Tiktok = 'tiktok', Youtube = 'youtube', Linkedin = 'linkedin' }
export const enum ConversationStatus { Active = 'active', Archived = 'archived', Deleted = 'deleted' }
export const enum CommunicationRole { Group = 'group', Channel = 'channel', User = 'user', Bot = 'bot', Guest = 'guest', Admin = 'admin', Owner = 'owner', System = 'system', Assistant = 'assistant', Service = 'service', Moderator = 'moderator', Member = 'member' }
export const enum LifecycleStatus { Suspended = 'suspended', Cancelled = 'cancelled', Expired = 'expired', Active = 'active', Issued = 'issued', Redeemed = 'redeemed' }
export const enum PaymentMethod { Cash = 'cash', Other = 'other', Check = 'check', Cryptocurrency = 'cryptocurrency', DebitCard = 'debit-card', MobilePayment = 'mobile-payment', CreditCard = 'credit-card', BankTransfer = 'bank-transfer', MobileWallet = 'mobile-wallet', Paypal = 'paypal', CashOnDelivery = 'cash-on-delivery' }
export const enum FinancialTransactionStatus { Failed = 'failed', Refunded = 'refunded', SettlementInProgress = 'settlement-in-progress', Cancelled = 'cancelled', Pending = 'pending', Authorized = 'authorized', Cleared = 'cleared', Disputed = 'disputed' }
export const enum AuditOpinionType { Qualified = 'qualified', Adverse = 'adverse', Disclaimer = 'disclaimer', Unqualified = 'unqualified' }
export const enum InventoryStorageType { Consignment = 'consignment', Other = 'other', OnlineMarketplace = 'online-marketplace', Warehouse = 'warehouse', RetailStore = 'retail-store', DistributionCenter = 'distribution-center', DropShipper = 'drop-shipper' }
export const enum VisibilityScope { Global = 'global', App = 'app', Internal = 'internal', Web = 'web', Private = 'private' }
export const enum PaymentStatus { Disputed = 'disputed', Error = 'error', Succeeded = 'succeeded', PartiallyRefunded = 'partially-refunded', Voided = 'voided', Failed = 'failed', Draft = 'draft', Deleted = 'deleted', Pending = 'pending', Refunded = 'refunded', Cancelled = 'cancelled', Paid = 'paid', Adjusted = 'adjusted', Overdue = 'overdue', Processing = 'processing', Partial = 'partial', Submitted = 'submitted', Authorized = 'authorized' }
export const enum TransactionChannel { BankBranch = 'bank-branch', Mobile = 'mobile', InPerson = 'in-person', Atm = 'atm', Online = 'online', Mail = 'mail', Telephone = 'telephone', Other = 'other' }
export const enum FinancialDisputeStatus { NeedsResponse = 'needs-response', Escalated = 'escalated', AwaitingEvidence = 'awaiting-evidence', Closed = 'closed', ChargeRefunded = 'charge-refunded', Won = 'won', UnderReview = 'under-review', Lost = 'lost' }
export const enum DeviceUsageType { Other = 'other', Business = 'business', Home = 'home', Personal = 'personal', Educational = 'educational', Industrial = 'industrial', Healthcare = 'healthcare' }
export const enum FinancialTransactionType { Withdrawal = 'withdrawal', Adjustment = 'adjustment', Chargeback = 'chargeback', Deposit = 'deposit', Payment = 'payment', Charge = 'charge', Receive = 'receive', Refund = 'refund', Sale = 'sale', Other = 'other', Fee = 'fee', Interest = 'interest', Dividend = 'dividend', ReceivePrepayment = 'receive-prepayment', SpendOverpayment = 'spend-overpayment', SpendPrepayment = 'spend-prepayment', Transfer = 'transfer', ReceiveOverpayment = 'receive-overpayment', Spend = 'spend' }
export const enum AccessControlModel { Rbac = 'rbac', Dac = 'dac', Custom = 'custom', None = 'none', Mac = 'mac', Abac = 'abac' }
export const enum ParticipantType { User = 'user', Group = 'group', Team = 'team', ExternalParticipant = 'external-participant', Organization = 'organization' }
export const enum PriorityLevel { Elevated = 'elevated', Low = 'low', Medium = 'medium', High = 'high', Urgent = 'urgent' }
export const enum PrerequisiteRangeType { Subtotal = 'subtotal', Quantity = 'quantity', ShippingPrice = 'shipping-price' }
export const enum ContentVisibility { Internal = 'internal', Protected = 'protected', Shared = 'shared', Private = 'private', Public = 'public' }
export const enum EntityCategory { Person = 'person', Message = 'message', Link = 'link', Project = 'project', Task = 'task', Event = 'event', Document = 'document', User = 'user', Owner = 'owner', Other = 'other' }
export const enum GenderIdentity { Male = 'male', Other = 'other', Female = 'female', PreferNotToSay = 'prefer-not-to-say' }
export const enum CommunicationMethod { SocialMedia = 'social-media', Phone = 'phone', Other = 'other', PushNotification = 'push-notification', Text = 'text', Email = 'email', Mail = 'mail', Sms = 'sms', InstantMessage = 'instant-message', VideoCall = 'video-call', InPerson = 'in-person' }
export const enum EmailCategoryType { Business = 'business', Spam = 'spam', Governmental = 'governmental', Transactional = 'transactional', Educational = 'educational', Other = 'other', Personal = 'personal', Promotional = 'promotional' }
export const enum UniversalIdentifierType { String = 'string', Number = 'number', Email = 'email', Uuid = 'uuid', Url = 'url' }
export const enum TaskStatus { Cancelled = 'cancelled', InProgress = 'in-progress', Todo = 'todo', OnHold = 'on-hold', Done = 'done', Blocked = 'blocked' }
export const enum UserStatus { Deleted = 'deleted', Inactive = 'inactive', WaitListed = 'wait-listed', Pending = 'pending', Verified = 'verified', Banned = 'banned', Archived = 'archived', Suspended = 'suspended', Active = 'active' }
export const enum PromotionType { FreeShipping = 'free-shipping', RewardPoints = 'reward-points', Percentage = 'percentage', BuyOneGetOne = 'buy-one-get-one', FixedAmount = 'fixed-amount', Other = 'other' }
export const enum MimeType { ImageGif = 'image/gif', ImageSvgXml = 'image/svg+xml', ImagePng = 'image/png', ImageWebp = 'image/webp', ImageJpeg = 'image/jpeg' }
export const enum TaxType { Inclusive = 'inclusive', Additive = 'additive', Variable = 'variable' }
export const enum ModifierType { List = 'list', Text = 'text' }
export const enum CardType { UnknownCard = 'unknown-card', Credit = 'credit', Debit = 'debit' }
export const enum PrepaidType { UnknownPrepaid = 'unknown-prepaid', Prepaid = 'prepaid', NotPrepaid = 'not-prepaid' }
export const enum EntryMethod { Emv = 'emv', Keyed = 'keyed', OnFile = 'on-file', Contactless = 'contactless', Swiped = 'swiped' }
export const enum CvvStatus { Accepted = 'accepted', NotChecked = 'not-checked', Rejected = 'rejected' }
export const enum AvcStatus { Accepted = 'accepted', NotChecked = 'not-checked', Rejected = 'rejected' }
export const enum CreditType { Supplier = 'supplier', Goodwill = 'goodwill', Customer = 'customer', Prepayment = 'prepayment', Overpayment = 'overpayment' }
export const enum CallDirection { Unknown = 'unknown', Conference = 'conference', Outbound = 'outbound', Inbound = 'inbound' }
export const enum SpeakerRole { Attendee = 'attendee', Invitee = 'invitee' }
export const enum FileType { Url = 'url', File = 'file', Folder = 'folder' }
export const enum AiToolChoiceType { Any = 'any', Auto = 'auto', Tool = 'tool', None = 'none' }
export const enum ImageType { Base64 = 'base64' }
export const enum ResponseFormatType { JsonObject = 'json-object', JsonSchema = 'json-schema', Text = 'text' }
export const enum ToolCallType { Function = 'function' }
export const enum AiMessagesContentType { Image = 'image', ToolResult = 'tool-result', ToolUse = 'tool-use', Text = 'text' }
export const enum AiRole { Assistant = 'assistant', User = 'user', Tool = 'tool' }
export const enum JsonSchemaType { Function = 'function' }
