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
export interface JsonSchema { name?: string;
    schema?: unknown;
    commonModel?: string;
    strict?: boolean;
    description?: string }
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
export interface AiMessages { role?: string;
    finishReason?: string;
    refusal?: string;
    index?: number;
    content?: AiMessagesContent[];
    toolCalls?: ToolCalls[];
    name?: string;
    commonModel?: string }
export interface Chats { system?: string[];
    userId?: string;
    topP?: number;
    tools?: JsonSchema[];
    logitBias?: unknown;
    objectType?: string;
    commonModel?: string;
    topK?: number;
    temperature?: number;
    stopSequences?: string[];
    model?: string;
    seed?: number;
    usage?: AiUsage;
    frequencyPenalty?: number;
    numberOfCompletions?: number;
    enableParallelToolCalls?: boolean;
    id?: string;
    responseFormat?: ResponseFormat;
    presencePenalty?: number;
    createdAt?: string;
    systemFingerprint?: string;
    modifyToken?: string;
    toolChoice?: AiToolChoice;
    maxTokens?: number;
    messages?: AiMessages[] }
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
export const enum AllocationMethod { Across = 'across', Each = 'each' }
export const enum TargetType { LineItem = 'line-item', ShippingLine = 'shipping-line' }
export const enum Status { Scheduled = 'scheduled', Expired = 'expired', Active = 'active' }
export const enum AppliesTo { SpecificItems = 'specific-items', SpecificCategories = 'specific-categories', AllItems = 'all-items' }
export const enum CustomerEligibility { SpecificCustomerGroups = 'specific-customer-groups', SpecificCustomers = 'specific-customers', All = 'all' }
export const enum TransactionMethod { Mobile = 'mobile', Telephone = 'telephone', Online = 'online', Atm = 'atm', BankBranch = 'bank-branch', Mail = 'mail' }
export const enum SkuValidation { None = 'none', GlobalUnique = 'global-unique', LocalUnique = 'local-unique' }
export const enum MinimumRequirements { MinimumPurchaseAmount = 'minimum-purchase-amount', None = 'none', MinimumQuantityOfItems = 'minimum-quantity-of-items' }
export const enum CustomerSelection { All = 'all', Prerequisite = 'prerequisite' }
export const enum TargetSelection { All = 'all', Entitled = 'entitled' }
export const enum ChannelAvailability { AllChannels = 'all-channels', InStore = 'in-store', Online = 'online', InApp = 'in-app' }
export const enum Gender { Male = 'male', Female = 'female', Other = 'other', PreferNotToSay = 'prefer not to say' }
export const enum Roles { Admin = 'admin', Moderator = 'moderator', User = 'user' }
export const enum AccountType { EquityCapitalReserves = 'equity::capital-reserves', AssetIntangibleAssetsUnderDevelopment = 'asset::intangible-assets-under-development', OtherExpensePriorPeriodItems = 'other-expense::prior-period-items', AssetAssetsAvailableForSale = 'asset::assets-available-for-sale', AssetOtherCurrentAsset = 'asset::other-current-asset', RevenueRevenueGeneral = 'revenue::revenue-general', AssetLongTermInvestments = 'asset::long-term-investments', CostOfGoodsSoldFreightAndDeliveryCost = 'cost-of-goods-sold::freight-and-delivery-cost', ExpenseAmortizationExpense = 'expense::amortization-expense', AssetInternalTransfers = 'asset::internal-transfers', OtherExpenseAmortization = 'other-expense::amortization', RevenueIncome = 'revenue::income', AssetRetainage = 'asset::retainage', OtherCurrentLiabilityPrepaidExpensesPayable = 'other-current-liability::prepaid-expenses-payable', AssetFixedAssetFurniture = 'asset::fixed-asset-furniture', OtherCurrentLiabilityLoanPayable = 'other-current-liability::loan-payable', EquityOpeningBalanceEquity = 'equity::opening-balance-equity', OtherCurrentLiabilityDividendsPayable = 'other-current-liability::dividends-payable', OtherCurrentLiabilityProvisionForWarrantyObligations = 'other-current-liability::provision-for-warranty-obligations', LiabilityAccrualsAndDeferredIncome = 'liability::accruals-and-deferred-income', OtherCurrentLiabilityOtherCurrentLiabilities = 'other-current-liability::other-current-liabilities', OtherCurrentLiabilityTradeAndOtherPayables = 'other-current-liability::trade-and-other-payables', OtherExpenseExchangeGainOrLoss = 'other-expense::exchange-gain-or-loss', OtherCurrentLiabilityAccruedLiabilities = 'other-current-liability::accrued-liabilities', EquityEquityInEarningsOfSubsidiuaries = 'equity::equity-in-earnings-of-subsidiuaries', LiabilityCreditCard = 'liability::credit-card', AssetNonCurrentAssets = 'asset::non-current-assets', AssetGlobalTaxDeferred = 'asset::global-tax-deferred', EquityPersonalIncome = 'equity::personal-income', LiabilityAccruedVacationPayable = 'liability::accrued-vacation-payable', RevenueDiscountsRefundsGiven = 'revenue::discounts-refunds-given', LiabilityLongTermEmployeeBenefitObligations = 'liability::long-term-employee-benefit-obligations', AssetGlobalTaxRefund = 'asset::global-tax-refund', OtherCurrentLiabilityLineOfCredit = 'other-current-liability::line-of-credit', OtherCurrentLiabilityFederalIncomeTaxPayable = 'other-current-liability::federal-income-tax-payable', OtherExpenseVehicle = 'other-expense::vehicle', EquityEstimatedTaxes = 'equity::estimated-taxes', AssetOtherLongTermLoansAndAdvances = 'asset::other-long-term-loans-and-advances', OtherCurrentLiabilityPayrollTaxPayable = 'other-current-liability::payroll-tax-payable', EquityPersonalExpense = 'equity::personal-expense', OtherExpenseWashAndRoadServices = 'other-expense::wash-and-road-services', EquityAccumulatedOtherComprehensiveIncome = 'equity::accumulated-other-comprehensive-income', AssetLandAsset = 'asset::land-asset', AssetDevelopmentCosts = 'asset::development-costs', ExpenseOtherBusinessExpenses = 'expense::other-business-expenses', AssetAccumulatedAmortization = 'asset::accumulated-amortization', AssetAssetsInCourseOfConstruction = 'asset::assets-in-course-of-construction', OtherExpenseOtherHomeOfficeExpenses = 'other-expense::other-home-office-expenses', AssetCashAndCashEquivalents = 'asset::cash-and-cash-equivalents', OtherExpenseParkingAndTolls = 'other-expense::parking-and-tolls', LiabilityProvisionForLiabilities = 'liability::provision-for-liabilities', LiabilityLongTermLiability = 'liability::long-term-liability', ExpenseEquipmentRental = 'expense::equipment-rental', LiabilityOutstandingDuesMicroSmallEnterprise = 'liability::outstanding-dues-micro-small-enterprise', AssetPrepaymentsAndAccruedIncome = 'asset::prepayments-and-accrued-income', ExpenseEntertainment = 'expense::entertainment', AssetCalledUpShareCapitalNotPaid = 'asset::called-up-share-capital-not-paid', EquityPreferredStock = 'equity::preferred-stock', AssetLoansToOfficers = 'asset::loans-to-officers', ExpenseRentOrLeaseOfBuildings = 'expense::rent-or-lease-of-buildings', AssetProvisionsCurrentAssets = 'asset::provisions-current-assets', ExpenseTravelExpensesSellingExpense = 'expense::travel-expenses-selling-expense', OtherCurrentLiability = 'other-current-liability', ExpenseLossOnDiscontinuedOperationsNetOfTax = 'expense::loss-on-discontinued-operations-net-of-tax', OtherExpenseDepletion = 'other-expense::depletion', OtherExpenseRepairsAndMaintenance = 'other-expense::repairs-and-maintenance', AssetTradeAndOtherReceivables = 'asset::trade-and-other-receivables', ExpenseRepairMaintenance = 'expense::repair-maintenance', ExpenseExternalServices = 'expense::external-services', ExpenseBankCharges = 'expense::bank-charges', ExpenseOtherCurrentOperatingCharges = 'expense::other-current-operating-charges', ExpenseUtilities = 'expense::utilities', OtherCurrentLiabilitySocialSecurityAgencies = 'other-current-liability::social-security-agencies', OtherExpenseExtraordinaryItems = 'other-expense::extraordinary-items', ExpenseOtherSellingExpenses = 'expense::other-selling-expenses', OtherIncomeGainLossOnSaleOfFixedAssets = 'other-income::gain-loss-on-sale-of-fixed-assets', AssetPrepaidExpenses = 'asset::prepaid-expenses', AssetOtherCurrentAssets = 'asset::other-current-assets', OtherExpenseUtilities = 'other-expense::utilities', EquityFunds = 'equity::funds', AssetGoodwill = 'asset::goodwill', CostOfGoodsSold = 'cost-of-goods-sold', AssetAccumulatedAmortizationOfOtherAssets = 'asset::accumulated-amortization-of-other-assets', EquityOtherFreeReserves = 'equity::other-free-reserves', EquityShareApplicationMoneyPendingAllotment = 'equity::share-application-money-pending-allotment', LiabilityShareholderNotesPayable = 'liability::shareholder-notes-payable', OtherExpenseOtherMiscellaneousExpense = 'other-expense::other-miscellaneous-expense', OtherExpense = 'other-expense', RevenueSalesWholesale = 'revenue::sales-wholesale', OtherExpenseGasAndFuel = 'other-expense::gas-and-fuel', AssetIntangibleAssets = 'asset::intangible-assets', ExpenseTravelExpensesGeneralAndAdminExpenses = 'expense::travel-expenses-general-and-admin-expenses', CostOfGoodsSoldShippingFreightDeliveryCos = 'cost-of-goods-sold::shipping-freight-delivery-cos', EquityMoneyReceivedAgainstShareWarrants = 'equity::money-received-against-share-warrants', LiabilityBankLoans = 'liability::bank-loans', OtherExpenseRentAndLease = 'other-expense::rent-and-lease', AssetExpenditureAuthorisationsAndLettersOfCredit = 'asset::expenditure-authorisations-and-letters-of-credit', CostOfGoodsSoldSuppliesMaterialsCogs = 'cost-of-goods-sold::supplies-materials-cogs', RevenueSalesRetail = 'revenue::sales-retail', AssetInvestmentMortgageRealEstateLoans = 'asset::investment-mortgage-real-estate-loans', AssetAccumulatedDepreciation = 'asset::accumulated-depreciation', AssetRentsHeldInTrust = 'asset::rents-held-in-trust', ExpenseFinanceCosts = 'expense::finance-costs', RevenueOtherCurrentOperatingIncome = 'revenue::other-current-operating-income', OtherCurrentLiabilityGlobalTaxPayable = 'other-current-liability::global-tax-payable', Equity = 'equity', AssetLeaseBuyout = 'asset::lease-buyout', AssetOtherAsset = 'asset::other-asset', OtherCurrentLiabilityDutiesAndTaxes = 'other-current-liability::duties-and-taxes', LiabilityGovernmentAndOtherPublicAuthorities = 'liability::government-and-other-public-authorities', AssetFurnitureAndFixtures = 'asset::furniture-and-fixtures', AssetFixedAssetPhotoVideo = 'asset::fixed-asset-photo-video', AssetInvestmentUsGovernmentObligations = 'asset::investment-us-government-obligations', AssetCumulativeDepreciationOnIntangibleAssets = 'asset::cumulative-depreciation-on-intangible-assets', ExpenseOfficeGeneralAdministrativeExpenses = 'expense::office-general-administrative-expenses', AssetOtherConsumables = 'asset::other-consumables', OtherCurrentLiabilityCurrentLiabilities = 'other-current-liability::current-liabilities', ExpenseOtherMiscellaneousServiceCost = 'expense::other-miscellaneous-service-cost', ExpenseCostOfLabor = 'expense::cost-of-labor', OtherExpenseHomeOffice = 'other-expense::home-office', OtherIncome = 'other-income', LiabilityProvisionsNonCurrentLiabilities = 'liability::provisions-non-current-liabilities', EquityTreasuryStock = 'equity::treasury-stock', AssetParticipatingInterests = 'asset::participating-interests', Expense = 'expense', CostOfGoodsSoldCostOfLaborCos = 'cost-of-goods-sold::cost-of-labor-cos', ExpenseOtherExternalServices = 'expense::other-external-services', OtherIncomeInterestEarned = 'other-income::interest-earned', AssetLand = 'asset::land', LiabilityStaffAndRelatedLongTermLiabilityAccounts = 'liability::staff-and-related-long-term-liability-accounts', AssetFixedAssetOtherToolsEquipment = 'asset::fixed-asset-other-tools-equipment', AssetProvisionsNonCurrentAssets = 'asset::provisions-non-current-assets', ExpenseProjectStudiesSurveysAssessments = 'expense::project-studies-surveys-assessments', ExpensePurchasesRebates = 'expense::purchases-rebates', EquityPartnersEquity = 'equity::partners-equity', AssetLoansToOthers = 'asset::loans-to-others', AssetVehicles = 'asset::vehicles', OtherExpenseVehicleInsurance = 'other-expense::vehicle-insurance', OtherIncomeDividendIncome = 'other-income::dividend-income', OtherExpenseVehicleRepairs = 'other-expense::vehicle-repairs', OtherCurrentLiabilityProvisionsCurrentLiabilities = 'other-current-liability::provisions-current-liabilities', ExpenseOfficeExpenses = 'expense::office-expenses', AssetFixedAssetComputers = 'asset::fixed-asset-computers', ExpenseCharitableContributions = 'expense::charitable-contributions', ExpenseSundry = 'expense::sundry', ExpensePromotionalMeals = 'expense::promotional-meals', LiabilityAccountsPayable = 'liability::accounts-payable', AssetAccumulatedDepletion = 'asset::accumulated-depletion', AssetOrganizationalCosts = 'asset::organizational-costs', AssetSecurityDeposits = 'asset::security-deposits', EquityShareCapital = 'equity::share-capital', ExpenseGlobalTaxExpense = 'expense::global-tax-expense', OtherCurrentLiabilityDirectDepositPayable = 'other-current-liability::direct-deposit-payable', AssetMachineryAndEquipment = 'asset::machinery-and-equipment', Asset = 'asset', RevenueNonProfitIncome = 'revenue::non-profit-income', LiabilityDebtsRelatedToParticipatingInterests = 'liability::debts-related-to-participating-interests', OtherCurrentLiabilityShortTermBorrowings = 'other-current-liability::short-term-borrowings', OtherExpenseTaxRoundoffGainOrLoss = 'other-expense::tax-roundoff-gain-or-loss', LiabilityDeferredTaxLiabilities = 'liability::deferred-tax-liabilities', AssetTrustAccounts = 'asset::trust-accounts', OtherExpenseMatCredit = 'other-expense::mat-credit', AssetAllowanceForBadDebts = 'asset::allowance-for-bad-debts', Liability = 'liability', RevenueUnappliedCashPaymentIncome = 'revenue::unapplied-cash-payment-income', RevenueOtherPrimaryIncome = 'revenue::other-primary-income', LiabilityLiabilitiesRelatedToAssetsHeldForSale = 'liability::liabilities-related-to-assets-held-for-sale', LiabilityNotesPayable = 'liability::notes-payable', OtherExpenseDepreciation = 'other-expense::depreciation', AccountsReceivable = 'accounts-receivable', EquityCalledUpShareCapital = 'equity::called-up-share-capital', AssetBank = 'asset::bank', LiabilityLongTermDebit = 'liability::long-term-debit', LiabilityOtherLongTermProvisions = 'liability::other-long-term-provisions', AssetOtherLongTermAssets = 'asset::other-long-term-assets', OtherIncomeLossOnDisposalOfAssets = 'other-income::loss-on-disposal-of-assets', ExpenseIncomeTaxExpense = 'expense::income-tax-expense', EquityAccumulatedAdjustment = 'equity::accumulated-adjustment', ExpenseShippingAndDeliveryExpense = 'expense::shipping-and-delivery-expense', OtherCurrentLiabilitySundryDebtorsAndCreditors = 'other-current-liability::sundry-debtors-and-creditors', ExpenseUnappliedCashBillPaymentExpense = 'expense::unapplied-cash-bill-payment-expense', AssetOtherFixedAssets = 'asset::other-fixed-assets', ExpenseDuesSubscriptions = 'expense::dues-subscriptions', ExpenseShippingFreightDelivery = 'expense::shipping-freight-delivery', OtherCurrentLiabilityStaffAndRelatedLiabilityAccounts = 'other-current-liability::staff-and-related-liability-accounts', OtherCurrentLiabilityPayrollClearing = 'other-current-liability::payroll-clearing', ExpenseInsurance = 'expense::insurance', ExpenseAuto = 'expense::auto', CostOfGoodsSoldEquipmentRentalCos = 'cost-of-goods-sold::equipment-rental-cos', OtherCurrentLiabilityCurrentPortionEmployeeBenefitsObligations = 'other-current-liability::current-portion-employee-benefits-obligations', AssetInvestmentTaxExemptSecurities = 'asset::investment-tax-exempt-securities', AssetDepletableAssets = 'asset::depletable-assets', EquityCommonStock = 'equity::common-stock', OtherExpenseVehicleLoanInterest = 'other-expense::vehicle-loan-interest', OtherCurrentLiabilityInsurancePayable = 'other-current-liability::insurance-payable', OtherIncomeTaxExemptInterest = 'other-income::tax-exempt-interest', Income = 'income', OtherIncomeOtherInvestmentIncome = 'other-income::other-investment-income', LiabilityObligationsUnderFinanceLeases = 'liability::obligations-under-finance-leases', AssetInventory = 'asset::inventory', EquityPartnerContributions = 'equity::partner-contributions', OtherIncomeGainLossOnSaleOfInvestments = 'other-income::gain-loss-on-sale-of-investments', AssetFixedAsset = 'asset::fixed-asset', AssetSavings = 'asset::savings', ExpenseCommissionsAndFees = 'expense::commissions-and-fees', EquityPartnerDistributions = 'equity::partner-distributions', ExpenseExtraordinaryCharges = 'expense::extraordinary-charges', ExpenseAdvertisingPromotional = 'expense::advertising-promotional', CostOfGoodsSoldCostOfSales = 'cost-of-goods-sold::cost-of-sales', ExpenseDistributionCosts = 'expense::distribution-costs', OtherExpenseVehicleLoan = 'other-expense::vehicle-loan', OtherExpenseMortgageInterest = 'other-expense::mortgage-interest', AssetShortTermInvestmentsInRelatedParties = 'asset::short-term-investments-in-related-parties', AssetShortTermLoansAndAdvancesToRelatedParties = 'asset::short-term-loans-and-advances-to-related-parties', ExpenseLegalProfessionalFees = 'expense::legal-professional-fees', ExpenseBorrowingCost = 'expense::borrowing-cost', AssetMoneyMarket = 'asset::money-market', ExpenseTaxesPaid = 'expense::taxes-paid', LiabilityOtherLongTermLiabilities = 'liability::other-long-term-liabilities', OtherIncomeUnrealisedLossOnSecuritiesNetOfTax = 'other-income::unrealised-loss-on-securities-net-of-tax', AssetOtherEarMarkedBankAccounts = 'asset::other-ear-marked-bank-accounts', OtherCurrentLiabilitySalesTaxPayable = 'other-current-liability::sales-tax-payable', OtherExpenseVehicleRegistration = 'other-expense::vehicle-registration', AssetLeaseholdImprovements = 'asset::leasehold-improvements', AssetCashOnHand = 'asset::cash-on-hand', ExpenseStaffCosts = 'expense::staff-costs', AssetFixedAssetCopiers = 'asset::fixed-asset-copiers', ExpenseManagementCompensation = 'expense::management-compensation', ExpenseAppropriationsToDepreciation = 'expense::appropriations-to-depreciation', OtherCurrentLiabilityCurrentPortionOfObligationsUnderFinanceLeases = 'other-current-liability::current-portion-of-obligations-under-finance-leases', CostOfGoodsSoldOtherCostsOfServiceCos = 'cost-of-goods-sold::other-costs-of-service-cos', EquityDividendDisbursed = 'equity::dividend-disbursed', OtherCurrentLiabilityRentsInTrustLiability = 'other-current-liability::rents-in-trust-liability', AssetDeferredTax = 'asset::deferred-tax', OtherExpensePenaltiesSettlements = 'other-expense::penalties-settlements', RevenueServiceFeeIncome = 'revenue::service-fee-income', AssetEmployeeCashAdvances = 'asset::employee-cash-advances', AssetChecking = 'asset::checking', AssetLongTermLoansAndAdvancesToRelatedParties = 'asset::long-term-loans-and-advances-to-related-parties', EquityPaidInCapitalOrSurplus = 'equity::paid-in-capital-or-surplus', ExpensePayrollExpenses = 'expense::payroll-expenses', RevenueSavingsByTaxScheme = 'revenue::savings-by-tax-scheme', EquityInvestmentGrants = 'equity::investment-grants', ExpenseInterestPaid = 'expense::interest-paid', OtherExpenseVehicleLease = 'other-expense::vehicle-lease', AssetOtherIntangibleAssets = 'asset::other-intangible-assets', AssetLicenses = 'asset::licenses', ExpenseOtherRentalCosts = 'expense::other-rental-costs', AssetAssetsHeldForSale = 'asset::assets-held-for-sale', AssetBuildings = 'asset::buildings', AssetFixedAssetPhone = 'asset::fixed-asset-phone', OtherCurrentLiabilityGlobalTaxSuspense = 'other-current-liability::global-tax-suspense', EquityOwnersEquity = 'equity::owners-equity', OtherCurrentLiabilityTrustAccountsLiabilities = 'other-current-liability::trust-accounts-liabilities', OtherIncomeOtherMiscellaneousIncome = 'other-income::other-miscellaneous-income', AssetAvailableForSaleFinancialAssets = 'asset::available-for-sale-financial-assets', OtherExpenseExceptionalItems = 'other-expense::exceptional-items', EquityHealthcare = 'equity::healthcare', RevenueCashReceiptIncome = 'revenue::cash-receipt-income', RevenueOwnWorkCapitalized = 'revenue::own-work-capitalized', RevenueSalesOfProductIncome = 'revenue::sales-of-product-income', AssetUndepositedFunds = 'asset::undeposited-funds', OtherCurrentLiabilityCurrentTaxLiability = 'other-current-liability::current-tax-liability', RevenueOperatingGrants = 'revenue::operating-grants', ExpenseTravelMeals = 'expense::travel-meals', LiabilityLongTermBorrowings = 'liability::long-term-borrowings', ExpensePenaltiesSettlements = 'expense::penalties-settlements', OtherExpenseIncomeTaxOtherExpense = 'other-expense::income-tax-other-expense', AssetBalWithGovtAuthorities = 'asset::bal-with-govt-authorities', OtherIncomeOtherOperatingIncome = 'other-income::other-operating-income', AssetInvestments = 'asset::investments', OtherCurrentLiabilityInterestPayables = 'other-current-liability::interest-payables', AssetFixedAssetSoftware = 'asset::fixed-asset-software', OtherExpenseHomeOwnerRentalInsurance = 'other-expense::home-owner-rental-insurance', OtherExpenseOtherVehicleExpenses = 'other-expense::other-vehicle-expenses', AssetCapitalWip = 'asset::capital-wip', ExpenseSuppliesMaterials = 'expense::supplies-materials', OtherCurrentLiabilityStateLocalIncomeTaxPayable = 'other-current-liability::state-local-income-tax-payable', AssetOtherLongTermInvestments = 'asset::other-long-term-investments', LiabilityAccruedLongTermLiabilities = 'liability::accrued-long-term-liabilities', LiabilityGroupAndAssociates = 'liability::group-and-associates', EquityRetainedEarnings = 'equity::retained-earnings', AssetLoansToStockholders = 'asset::loans-to-stockholders', LiabilityOutstandingDuesOtherThanMicroSmallEnterprise = 'liability::outstanding-dues-other-than-micro-small-enterprise', AssetInvestmentOther = 'asset::investment-other', AssetProvisionsFixedAssets = 'asset::provisions-fixed-assets', OtherExpenseDeferredTaxExpense = 'other-expense::deferred-tax-expense', ExpenseBadDebts = 'expense::bad-debts', ExpenseTravel = 'expense::travel', ExpenseEntertainmentMeals = 'expense::entertainment-meals' }
export const enum Format { Xml = 'xml', Json = 'json' }
export const enum Country { Jamaica = 'jamaica', Montenegro = 'montenegro', Nicaragua = 'nicaragua', NorthKorea = 'north-korea', Somalia = 'somalia', Suriname = 'suriname', Togo = 'togo', Angola = 'angola', Bahrain = 'bahrain', CoteDIvoire = 'cote-d-ivoire', Luxembourg = 'luxembourg', Georgia = 'georgia', Madagascar = 'madagascar', SriLanka = 'sri-lanka', Iraq = 'iraq', Chad = 'chad', Canada = 'canada', Jordan = 'jordan', Mauritania = 'mauritania', Bhutan = 'bhutan', Turkmenistan = 'turkmenistan', Andorra = 'andorra', Iran = 'iran', Rwanda = 'rwanda', Cyprus = 'cyprus', Uganda = 'uganda', Latvia = 'latvia', Netherlands = 'netherlands', Mexico = 'mexico', Sweden = 'sweden', Seychelles = 'seychelles', Azerbaijan = 'azerbaijan', AntiguaAndBarbuda = 'antigua-and-barbuda', Bolivia = 'bolivia', Philippines = 'philippines', Thailand = 'thailand', Ethiopia = 'ethiopia', Israel = 'israel', SaoTomeAndPrincipe = 'sao-tome-and-principe', MarshallIslands = 'marshall-islands', Benin = 'benin', Tuvalu = 'tuvalu', Italy = 'italy', Iceland = 'iceland', Libya = 'libya', NewZealand = 'new-zealand', Romania = 'romania', Belize = 'belize', Lesotho = 'lesotho', Algeria = 'algeria', Serbia = 'serbia', Ukraine = 'ukraine', Slovenia = 'slovenia', UnitedKingdom = 'united-kingdom', Panama = 'panama', Uzbekistan = 'uzbekistan', Ecuador = 'ecuador', Eritrea = 'eritrea', PapuaNewGuinea = 'papua-new-guinea', Barbados = 'barbados', CzechRepublic = 'czech-republic', SaintLucia = 'saint-lucia', Morocco = 'morocco', Oman = 'oman', SierraLeone = 'sierra-leone', Honduras = 'honduras', UnitedArabEmirates = 'united-arab-emirates', Niger = 'niger', Argentina = 'argentina', SolomonIslands = 'solomon-islands', Hungary = 'hungary', SaudiArabia = 'saudi-arabia', Tajikistan = 'tajikistan', CaboVerde = 'cabo-verde', Switzerland = 'switzerland', Lebanon = 'lebanon', Bangladesh = 'bangladesh', Lithuania = 'lithuania', EquatorialGuinea = 'equatorial-guinea', Afghanistan = 'afghanistan', CongoDemocraticRepublic = 'congo-democratic-republic', Spain = 'spain', Malta = 'malta', Myanmar = 'myanmar', Cambodia = 'cambodia', Gambia = 'gambia', Greece = 'greece', Namibia = 'namibia', Guatemala = 'guatemala', Nauru = 'nauru', Peru = 'peru', CongoRepublic = 'congo-republic', Bahamas = 'bahamas', Belarus = 'belarus', Fiji = 'fiji', Finland = 'finland', Chile = 'chile', Cuba = 'cuba', Australia = 'australia', India = 'india', Malawi = 'malawi', Mozambique = 'mozambique', Palau = 'palau', Paraguay = 'paraguay', Ghana = 'ghana', Nepal = 'nepal', DominicanRepublic = 'dominican-republic', Singapore = 'singapore', SouthKorea = 'south-korea', Grenada = 'grenada', Sudan = 'sudan', Taiwan = 'taiwan', Tanzania = 'tanzania', BosniaAndHerzegovina = 'bosnia-and-herzegovina', Kyrgyzstan = 'kyrgyzstan', Poland = 'poland', Uruguay = 'uruguay', SaintKittsAndNevis = 'saint-kitts-and-nevis', Armenia = 'armenia', France = 'france', GuineaBissau = 'guinea-bissau', Egypt = 'egypt', Guyana = 'guyana', Indonesia = 'indonesia', Kazakhstan = 'kazakhstan', Qatar = 'qatar', Venezuela = 'venezuela', Croatia = 'croatia', Maldives = 'maldives', Malaysia = 'malaysia', Palestine = 'palestine', Albania = 'albania', Austria = 'austria', CentralAfricanRepublic = 'central-african-republic', Moldova = 'moldova', SaintVincentAndTheGrenadines = 'saint-vincent-and-the-grenadines', Yemen = 'yemen', TimorLeste = 'timor-leste', Ireland = 'ireland', Kuwait = 'kuwait', Zimbabwe = 'zimbabwe', Senegal = 'senegal', Eswatini = 'eswatini', Bulgaria = 'bulgaria', Guinea = 'guinea', Mali = 'mali', Gabon = 'gabon', Vietnam = 'vietnam', Norway = 'norway', Japan = 'japan', Kenya = 'kenya', Brazil = 'brazil', SanMarino = 'san-marino', Turkey = 'turkey', Slovakia = 'slovakia', Belgium = 'belgium', Haiti = 'haiti', Micronesia = 'micronesia', Denmark = 'denmark', Kiribati = 'kiribati', Monaco = 'monaco', Burundi = 'burundi', Mongolia = 'mongolia', Germany = 'germany', Nigeria = 'nigeria', Botswana = 'botswana', NorthMacedonia = 'north-macedonia', Tonga = 'tonga', VaticanCity = 'vatican-city', CostaRica = 'costa-rica', TrinidadAndTobago = 'trinidad-and-tobago', Comoros = 'comoros', Laos = 'laos', Syria = 'syria', China = 'china', SouthAfrica = 'south-africa', SouthSudan = 'south-sudan', UnitedStates = 'united-states', Brunei = 'brunei', Russia = 'russia', Samoa = 'samoa', Portugal = 'portugal', Tunisia = 'tunisia', Pakistan = 'pakistan', Zambia = 'zambia', Liechtenstein = 'liechtenstein', Estonia = 'estonia', Mauritius = 'mauritius', Liberia = 'liberia', Vanuatu = 'vanuatu', Djibouti = 'djibouti', Dominica = 'dominica', BurkinaFaso = 'burkina-faso', Cameroon = 'cameroon', Colombia = 'colombia', ElSalvador = 'el-salvador' }
export const enum GlobalTaxType { Vat = 'vat', Gst = 'gst', CustomsDuty = 'customs-duty', PropertyTax = 'property-tax', ExciseTax = 'excise-tax', Other = 'other', SalesTax = 'sales-tax' }
export const enum IdentityProvider { Flickr = 'flickr', Pinterest = 'pinterest', Snapchat = 'snapchat', Paypal = 'paypal', Amazon = 'amazon', Google = 'google', Dribbble = 'dribbble', Reddit = 'reddit', Slack = 'slack', Github = 'github', Discord = 'discord', Facebook = 'facebook', Linkedin = 'linkedin', Behance = 'behance', Line = 'line', Whatsapp = 'whatsapp', Other = 'other', Apple = 'apple', Wechat = 'wechat', Tumblr = 'tumblr', Qq = 'qq', Instagram = 'instagram', Telegram = 'telegram', Vimeo = 'vimeo', Foursquare = 'foursquare', Microsoft = 'microsoft', Twitter = 'twitter', Signal = 'signal', Tiktok = 'tiktok', Yahoo = 'yahoo' }
export const enum AccountEngagementLevel { Unknown = 'unknown', Warm = 'warm', Cold = 'cold', Hot = 'hot' }
export const enum ReviewApprovalStatus { Revised = 'revised', Pending = 'pending', Rejected = 'rejected', InReview = 'in-review', Approved = 'approved' }
export const enum StakeholderType { Partner = 'partner', Customer = 'customer', Vendor = 'vendor', Other = 'other', Competitor = 'competitor', Investor = 'investor' }
export const enum AccountStatus { Inactive = 'inactive', Pending = 'pending', Closed = 'closed', Suspended = 'suspended', Active = 'active' }
export const enum CampaignStatus { Cancelled = 'cancelled', Archived = 'archived', Completed = 'completed', Scheduled = 'scheduled', Draft = 'draft', Planned = 'planned', Paused = 'paused', Active = 'active' }
export const enum CustomerType { Online = 'online', Corporate = 'corporate', B2b = 'b2b', B2c = 'b2c', Retail = 'retail', Wholesale = 'wholesale' }
export const enum MessageContentType { Html = 'html', Contact = 'contact', Sticker = 'sticker', Audio = 'audio', Image = 'image', Link = 'link', File = 'file', Text = 'text', Video = 'video', Document = 'document', Location = 'location', Gif = 'gif', Voice = 'voice' }
export const enum ReactionType { Like = 'like', Bookmark = 'bookmark', Love = 'love', Angry = 'angry', Interested = 'interested', Sad = 'sad', Dislike = 'dislike', Laugh = 'laugh', Wow = 'wow' }
export const enum SupportTicketPriority { High = 'high', Medium = 'medium', Urgent = 'urgent', Low = 'low', Immediate = 'immediate' }
export const enum IssueLifecycleStatus { Pending = 'pending', Open = 'open', Resolved = 'resolved', Cancelled = 'cancelled', InProgress = 'in-progress', Closed = 'closed', OnHold = 'on-hold' }
export const enum OrderStatus { AwaitingPickup = 'awaiting-pickup', Returned = 'returned', Pending = 'pending', Shipped = 'shipped', PartiallyFulfilled = 'partially-fulfilled', AwaitingPayment = 'awaiting-payment', AwaitingShipment = 'awaiting-shipment', Abandoned = 'abandoned', Cancelled = 'cancelled', Confirmed = 'confirmed', Refunded = 'refunded', Draft = 'draft', OnHold = 'on-hold', Disputed = 'disputed', Processing = 'processing', Delivered = 'delivered', Failed = 'failed', Completed = 'completed' }
export const enum DiscountType { VariablePercentage = 'variable-percentage', UnknownDiscount = 'unknown-discount', VariableAmount = 'variable-amount', Percentage = 'percentage', BuyOneGetOne = 'buy-one-get-one', ConditionalDiscount = 'conditional-discount', TieredDiscount = 'tiered-discount', FixedAmount = 'fixed-amount' }
export const enum FulfillmentStatus { Cancelled = 'cancelled', Returned = 'returned', Failure = 'failure', Delivered = 'delivered', Pending = 'pending', InTransit = 'in-transit' }
export const enum ProductAvailabilityStatus { OutOfStock = 'out-of-stock', PreOrder = 'pre-order', Discontinued = 'discontinued', BackOrder = 'back-order', InStock = 'in-stock' }
export const enum ExpenseApprovalStatus { Approved = 'approved', Cancelled = 'cancelled', Reimbursed = 'reimbursed', Pending = 'pending', Reviewing = 'reviewing', Processed = 'processed', New = 'new', Denied = 'denied' }
export const enum FinancialChargeType { LateFee = 'late-fee', ProcessingFee = 'processing-fee', Commission = 'commission', TransactionFee = 'transaction-fee', InterestCharge = 'interest-charge', Other = 'other', ServiceCharge = 'service-charge' }
export const enum BillingStatus { Draft = 'draft', Paid = 'paid', Pending = 'pending', Overdue = 'overdue', PartiallyPaid = 'partially-paid', Deleted = 'deleted', Authorised = 'authorised', Submitted = 'submitted', Unpaid = 'unpaid', Voided = 'voided' }
export const enum InvoiceAdjustmentType { Discount = 'discount', Shipping = 'shipping', Tax = 'tax', Other = 'other', Tip = 'tip' }
export const enum DataType { Boolean = 'boolean', Date = 'date', Number = 'number', Object = 'object', Null = 'null', String = 'string', Json = 'json', Binary = 'binary', Timestamp = 'timestamp', Custom = 'custom', Undefined = 'undefined', Array = 'array' }
export const enum EmploymentType { Internship = 'internship', PartTime = 'part-time', Seasonal = 'seasonal', Contract = 'contract', Temporary = 'temporary', Permanent = 'permanent', Freelance = 'freelance', FullTime = 'full-time', Volunteer = 'volunteer' }
export const enum TimeCycle { SemiMonthly = 'semi-monthly', Hourly = 'hourly', Daily = 'daily', Biweekly = 'biweekly', Annually = 'annually', Minutely = 'minutely', Custom = 'custom', Monthly = 'monthly', Quarterly = 'quarterly', Weekly = 'weekly', Triennially = 'triennially', SemiAnnually = 'semi-annually', Biennially = 'biennially', AdHoc = 'ad-hoc', Secondly = 'secondly' }
export const enum FinancialTrackingCategories { None = 'none', Project = 'project', CostCenter = 'cost-center', Division = 'division', Vendor = 'vendor', Product = 'product', Other = 'other', Customer = 'customer', Employee = 'employee', Location = 'location', Service = 'service', Department = 'department', Class = 'class' }
export const enum CampaignType { Other = 'other', Display = 'display', Email = 'email', SocialMedia = 'social-media', SearchEngine = 'search-engine' }
export const enum ContactAddressType { Temporary = 'temporary', Business = 'business', Home = 'home', Work = 'work', Shipping = 'shipping', Personal = 'personal', Other = 'other', Billing = 'billing' }
export const enum LeadLifecycleStatus { Connected = 'connected', InProcess = 'in-process', Revisited = 'revisited', Open = 'open', Unqualified = 'unqualified', BadTiming = 'bad-timing', Lost = 'lost', New = 'new', AttemptedToContact = 'attempted-to-contact', Converted = 'converted' }
export const enum ParticipantEngagementStatus { Active = 'active', Inactive = 'inactive', Moderator = 'moderator', Admin = 'admin', Banned = 'banned', Left = 'left', Guest = 'guest' }
export const enum ItemEntityStatus { Completed = 'completed', Active = 'active', Inactive = 'inactive', Archived = 'archived', Pending = 'pending', Suspended = 'suspended', Deleted = 'deleted' }
export const enum Currency { NOK = 'nok', RON = 'ron', MZN = 'mzn', SYP = 'syp', KWD = 'kwd', PYG = 'pyg', QAR = 'qar', PHP = 'php', BBD = 'bbd', FJD = 'fjd', GGP = 'ggp', SBD = 'sbd', PEN = 'pen', AUD = 'aud', HTG = 'htg', ARS = 'ars', RWF = 'rwf', UZS = 'uzs', VND = 'vnd', GMD = 'gmd', WST = 'wst', KID = 'kid', NPR = 'npr', TMT = 'tmt', TZS = 'tzs', BRL = 'brl', ISK = 'isk', MDL = 'mdl', SHP = 'shp', XPF = 'xpf', GEL = 'gel', NZD = 'nzd', MOP = 'mop', EUR = 'eur', CUC = 'cuc', STN = 'stn', CUP = 'cup', KMF = 'kmf', PAB = 'pab', OMR = 'omr', THB = 'thb', AED = 'aed', XDR = 'xdr', AFN = 'afn', TVD = 'tvd', USD = 'usd', AZN = 'azn', LRD = 'lrd', SZL = 'szl', UYU = 'uyu', BAM = 'bam', DKK = 'dkk', KYD = 'kyd', MNT = 'mnt', NIO = 'nio', PLN = 'pln', BOB = 'bob', MUR = 'mur', SAR = 'sar', GTQ = 'gtq', TND = 'tnd', MVR = 'mvr', CLP = 'clp', CHF = 'chf', HNL = 'hnl', EGP = 'egp', JMD = 'jmd', JPY = 'jpy', LYD = 'lyd', KZT = 'kzt', MXN = 'mxn', RUB = 'rub', TOP = 'top', UGX = 'ugx', HRK = 'hrk', SOS = 'sos', ETB = 'etb', BHD = 'bhd', FOK = 'fok', RSD = 'rsd', HKD = 'hkd', BIF = 'bif', BSD = 'bsd', COP = 'cop', DJF = 'djf', LBP = 'lbp', IDR = 'idr', NAD = 'nad', NGN = 'ngn', SLL = 'sll', TTD = 'ttd', KRW = 'krw', SCR = 'scr', SRD = 'srd', LSL = 'lsl', ALL = 'all', SEK = 'sek', VES = 'ves', BDT = 'bdt', XCD = 'xcd', YER = 'yer', AWG = 'awg', TJS = 'tjs', BMD = 'bmd', MAD = 'mad', JOD = 'jod', VUV = 'vuv', BZD = 'bzd', CDF = 'cdf', CVE = 'cve', GIP = 'gip', CAD = 'cad', INR = 'inr', XAF = 'xaf', KGS = 'kgs', FKP = 'fkp', MWK = 'mwk', LAK = 'lak', BTN = 'btn', AOA = 'aoa', PGK = 'pgk', BGN = 'bgn', TWD = 'twd', IRR = 'irr', TRY = 'try', ZAR = 'zar', JEP = 'jep', SGD = 'sgd', XOF = 'xof', AMD = 'amd', MYR = 'myr', BWP = 'bwp', KHR = 'khr', ANG = 'ang', ZWL = 'zwl', IQD = 'iqd', MMK = 'mmk', SDG = 'sdg', BND = 'bnd', GNF = 'gnf', HUF = 'huf', KES = 'kes', DOP = 'dop', ZMW = 'zmw', DZD = 'dzd', BYN = 'byn', UAH = 'uah', LKR = 'lkr', GBP = 'gbp', CRC = 'crc', ILS = 'ils', ERN = 'ern', KPW = 'kpw', GHS = 'ghs', CNY = 'cny', IMP = 'imp', MGA = 'mga', PKR = 'pkr', SSP = 'ssp', MRU = 'mru', CZK = 'czk', GYD = 'gyd', MKD = 'mkd' }
export const enum CustomerEligibilityStatus { AllCustomers = 'all-customers', ReturningCustomers = 'returning-customers', NewCustomers = 'new-customers', VipCustomers = 'vip-customers', Other = 'other', SpecificConditions = 'specific-conditions' }
export const enum ItemCondition { Damaged = 'damaged', Used = 'used', New = 'new', Refurbished = 'refurbished', LikeNew = 'like-new', OpenBox = 'open-box' }
export const enum TransactionType { Transfer = 'transfer', Payment = 'payment', Deposit = 'deposit', Charge = 'charge', Withdrawal = 'withdrawal', Fee = 'fee', Refund = 'refund', Adjustment = 'adjustment' }
export const enum EntityLifecycleStatus { Scheduled = 'scheduled', Archived = 'archived', Active = 'active', Preorder = 'preorder', Inactive = 'inactive', Draft = 'draft', Deleted = 'deleted' }
export const enum JournalEntryStatus { Corrected = 'corrected', Draft = 'draft', Pending = 'pending', Error = 'error', Voided = 'voided', Posted = 'posted' }
export const enum DayOfWeek { Tuesday = 'tuesday', Wednesday = 'wednesday', Friday = 'friday', Saturday = 'saturday', Sunday = 'sunday', Thursday = 'thursday', Monday = 'monday' }
export const enum AccountingAccountType { AssetSavings = 'asset::savings', LiabilityOutstandingDuesOtherThanMicroSmallEnterprise = 'liability::outstanding-dues-other-than-micro-small-enterprise', EquityShareApplicationMoneyPendingAllotment = 'equity::share-application-money-pending-allotment', LiabilityShareholderNotesPayable = 'liability::shareholder-notes-payable', ExpenseShippingFreightDelivery = 'expense::shipping-freight-delivery', AssetFurnitureAndFixtures = 'asset::furniture-and-fixtures', EquityFunds = 'equity::funds', AssetChecking = 'asset::checking', LiabilityProvisionsNonCurrentLiabilities = 'liability::provisions-non-current-liabilities', EquityPersonalIncome = 'equity::personal-income', OtherCurrentLiabilityProvisionsCurrentLiabilities = 'other-current-liability::provisions-current-liabilities', AssetCashAndCashEquivalents = 'asset::cash-and-cash-equivalents', ExpenseOtherMiscellaneousServiceCost = 'expense::other-miscellaneous-service-cost', AssetRetainage = 'asset::retainage', AssetCapitalWip = 'asset::capital-wip', LiabilityDeferredTaxLiabilities = 'liability::deferred-tax-liabilities', LiabilityAccountsPayable = 'liability::accounts-payable', ExpenseAppropriationsToDepreciation = 'expense::appropriations-to-depreciation', EquityCommonStock = 'equity::common-stock', AssetAccumulatedAmortizationOfOtherAssets = 'asset::accumulated-amortization-of-other-assets', OtherIncomeGainLossOnSaleOfInvestments = 'other-income::gain-loss-on-sale-of-investments', AssetSecurityDeposits = 'asset::security-deposits', CostOfGoodsSoldShippingFreightDeliveryCos = 'cost-of-goods-sold::shipping-freight-delivery-cos', OtherExpenseExceptionalItems = 'other-expense::exceptional-items', ExpenseEntertainmentMeals = 'expense::entertainment-meals', OtherCurrentLiabilityDirectDepositPayable = 'other-current-liability::direct-deposit-payable', EquityHealthcare = 'equity::healthcare', LiabilityLongTermBorrowings = 'liability::long-term-borrowings', RevenueNonProfitIncome = 'revenue::non-profit-income', RevenueUnappliedCashPaymentIncome = 'revenue::unapplied-cash-payment-income', EquityPartnerDistributions = 'equity::partner-distributions', ExpenseFinanceCosts = 'expense::finance-costs', LiabilityObligationsUnderFinanceLeases = 'liability::obligations-under-finance-leases', AssetMoneyMarket = 'asset::money-market', LiabilityLongTermDebit = 'liability::long-term-debit', LiabilityCreditCard = 'liability::credit-card', RevenueRevenueGeneral = 'revenue::revenue-general', LiabilityGovernmentAndOtherPublicAuthorities = 'liability::government-and-other-public-authorities', AssetOtherLongTermAssets = 'asset::other-long-term-assets', OtherIncomeOtherMiscellaneousIncome = 'other-income::other-miscellaneous-income', RevenueSalesWholesale = 'revenue::sales-wholesale', AssetOtherEarMarkedBankAccounts = 'asset::other-ear-marked-bank-accounts', AssetFixedAssetCopiers = 'asset::fixed-asset-copiers', AssetAssetsHeldForSale = 'asset::assets-held-for-sale', ExpensePromotionalMeals = 'expense::promotional-meals', AssetLeaseholdImprovements = 'asset::leasehold-improvements', EquityCapitalReserves = 'equity::capital-reserves', ExpenseDistributionCosts = 'expense::distribution-costs', ExpenseTravelExpensesGeneralAndAdminExpenses = 'expense::travel-expenses-general-and-admin-expenses', OtherExpenseMortgageInterest = 'other-expense::mortgage-interest', AssetProvisionsCurrentAssets = 'asset::provisions-current-assets', OtherExpenseRentAndLease = 'other-expense::rent-and-lease', ExpenseOfficeExpenses = 'expense::office-expenses', CostOfGoodsSoldCostOfSales = 'cost-of-goods-sold::cost-of-sales', LiabilityStaffAndRelatedLongTermLiabilityAccounts = 'liability::staff-and-related-long-term-liability-accounts', OtherCurrentLiabilityDividendsPayable = 'other-current-liability::dividends-payable', AssetGlobalTaxRefund = 'asset::global-tax-refund', ExpenseAmortizationExpense = 'expense::amortization-expense', OtherCurrentLiabilityPayrollClearing = 'other-current-liability::payroll-clearing', OtherCurrentLiabilityCurrentPortionEmployeeBenefitsObligations = 'other-current-liability::current-portion-employee-benefits-obligations', AssetBuildings = 'asset::buildings', OtherExpenseDepreciation = 'other-expense::depreciation', AssetBank = 'asset::bank', AssetLeaseBuyout = 'asset::lease-buyout', LiabilityOtherLongTermLiabilities = 'liability::other-long-term-liabilities', ExpensePayrollExpenses = 'expense::payroll-expenses', ExpenseProjectStudiesSurveysAssessments = 'expense::project-studies-surveys-assessments', AssetLandAsset = 'asset::land-asset', OtherCurrentLiabilitySocialSecurityAgencies = 'other-current-liability::social-security-agencies', AssetInvestmentUsGovernmentObligations = 'asset::investment-us-government-obligations', OtherCurrentLiabilityGlobalTaxPayable = 'other-current-liability::global-tax-payable', OtherCurrentLiabilityLoanPayable = 'other-current-liability::loan-payable', RevenueOperatingGrants = 'revenue::operating-grants', LiabilityAccrualsAndDeferredIncome = 'liability::accruals-and-deferred-income', OtherCurrentLiabilityInterestPayables = 'other-current-liability::interest-payables', Equity = 'equity', CostOfGoodsSoldCostOfLaborCos = 'cost-of-goods-sold::cost-of-labor-cos', EquityPaidInCapitalOrSurplus = 'equity::paid-in-capital-or-surplus', ExpenseCostOfLabor = 'expense::cost-of-labor', ExpenseSundry = 'expense::sundry', AssetUndepositedFunds = 'asset::undeposited-funds', EquityAccumulatedOtherComprehensiveIncome = 'equity::accumulated-other-comprehensive-income', AssetDepletableAssets = 'asset::depletable-assets', OtherExpenseWashAndRoadServices = 'other-expense::wash-and-road-services', OtherCurrentLiabilityLineOfCredit = 'other-current-liability::line-of-credit', OtherExpenseVehicleRegistration = 'other-expense::vehicle-registration', OtherExpenseDeferredTaxExpense = 'other-expense::deferred-tax-expense', OtherCurrentLiabilityStaffAndRelatedLiabilityAccounts = 'other-current-liability::staff-and-related-liability-accounts', RevenueServiceFeeIncome = 'revenue::service-fee-income', RevenueCashReceiptIncome = 'revenue::cash-receipt-income', AssetOrganizationalCosts = 'asset::organizational-costs', OtherExpenseVehicle = 'other-expense::vehicle', OtherExpensePenaltiesSettlements = 'other-expense::penalties-settlements', OtherExpenseVehicleInsurance = 'other-expense::vehicle-insurance', LiabilityGroupAndAssociates = 'liability::group-and-associates', ExpenseInsurance = 'expense::insurance', CostOfGoodsSoldEquipmentRentalCos = 'cost-of-goods-sold::equipment-rental-cos', AssetAssetsAvailableForSale = 'asset::assets-available-for-sale', OtherCurrentLiabilityGlobalTaxSuspense = 'other-current-liability::global-tax-suspense', AssetRentsHeldInTrust = 'asset::rents-held-in-trust', EquityMoneyReceivedAgainstShareWarrants = 'equity::money-received-against-share-warrants', AssetShortTermLoansAndAdvancesToRelatedParties = 'asset::short-term-loans-and-advances-to-related-parties', AssetInvestmentOther = 'asset::investment-other', AssetMachineryAndEquipment = 'asset::machinery-and-equipment', EquityCalledUpShareCapital = 'equity::called-up-share-capital', AssetLoansToStockholders = 'asset::loans-to-stockholders', Expense = 'expense', OtherCurrentLiabilityPayrollTaxPayable = 'other-current-liability::payroll-tax-payable', AssetAvailableForSaleFinancialAssets = 'asset::available-for-sale-financial-assets', ExpenseStaffCosts = 'expense::staff-costs', RevenueIncome = 'revenue::income', OtherIncomeInterestEarned = 'other-income::interest-earned', ExpenseOtherBusinessExpenses = 'expense::other-business-expenses', AssetOtherAsset = 'asset::other-asset', AssetLongTermInvestments = 'asset::long-term-investments', RevenueSalesRetail = 'revenue::sales-retail', OtherIncomeOtherInvestmentIncome = 'other-income::other-investment-income', ExpenseRentOrLeaseOfBuildings = 'expense::rent-or-lease-of-buildings', OtherExpenseUtilities = 'other-expense::utilities', ExpenseExternalServices = 'expense::external-services', RevenueOtherPrimaryIncome = 'revenue::other-primary-income', OtherCurrentLiabilitySalesTaxPayable = 'other-current-liability::sales-tax-payable', AccountsReceivable = 'accounts-receivable', OtherExpenseMatCredit = 'other-expense::mat-credit', AssetAllowanceForBadDebts = 'asset::allowance-for-bad-debts', LiabilityLongTermEmployeeBenefitObligations = 'liability::long-term-employee-benefit-obligations', EquityRetainedEarnings = 'equity::retained-earnings', ExpenseAdvertisingPromotional = 'expense::advertising-promotional', AssetLand = 'asset::land', AssetGoodwill = 'asset::goodwill', ExpenseManagementCompensation = 'expense::management-compensation', AssetOtherIntangibleAssets = 'asset::other-intangible-assets', CostOfGoodsSoldOtherCostsOfServiceCos = 'cost-of-goods-sold::other-costs-of-service-cos', OtherExpenseVehicleLease = 'other-expense::vehicle-lease', AssetOtherConsumables = 'asset::other-consumables', AssetTrustAccounts = 'asset::trust-accounts', EquityDividendDisbursed = 'equity::dividend-disbursed', AssetAssetsInCourseOfConstruction = 'asset::assets-in-course-of-construction', ExpenseRepairMaintenance = 'expense::repair-maintenance', OtherCurrentLiabilityRentsInTrustLiability = 'other-current-liability::rents-in-trust-liability', OtherExpenseHomeOwnerRentalInsurance = 'other-expense::home-owner-rental-insurance', OtherCurrentLiabilityTradeAndOtherPayables = 'other-current-liability::trade-and-other-payables', ExpenseEquipmentRental = 'expense::equipment-rental', CostOfGoodsSoldSuppliesMaterialsCogs = 'cost-of-goods-sold::supplies-materials-cogs', AssetParticipatingInterests = 'asset::participating-interests', LiabilityProvisionForLiabilities = 'liability::provision-for-liabilities', OtherCurrentLiabilityStateLocalIncomeTaxPayable = 'other-current-liability::state-local-income-tax-payable', ExpenseBadDebts = 'expense::bad-debts', OtherExpenseExtraordinaryItems = 'other-expense::extraordinary-items', OtherCurrentLiabilitySundryDebtorsAndCreditors = 'other-current-liability::sundry-debtors-and-creditors', EquityEstimatedTaxes = 'equity::estimated-taxes', LiabilityNotesPayable = 'liability::notes-payable', OtherCurrentLiabilityPrepaidExpensesPayable = 'other-current-liability::prepaid-expenses-payable', LiabilityDebtsRelatedToParticipatingInterests = 'liability::debts-related-to-participating-interests', OtherCurrentLiabilityShortTermBorrowings = 'other-current-liability::short-term-borrowings', AssetOtherCurrentAssets = 'asset::other-current-assets', AssetAccumulatedDepreciation = 'asset::accumulated-depreciation', AssetFixedAssetComputers = 'asset::fixed-asset-computers', AssetIntangibleAssets = 'asset::intangible-assets', AssetLicenses = 'asset::licenses', ExpenseTravel = 'expense::travel', OtherExpenseIncomeTaxOtherExpense = 'other-expense::income-tax-other-expense', AssetShortTermInvestmentsInRelatedParties = 'asset::short-term-investments-in-related-parties', EquityOtherFreeReserves = 'equity::other-free-reserves', ExpenseEntertainment = 'expense::entertainment', ExpenseOtherRentalCosts = 'expense::other-rental-costs', OtherExpenseHomeOffice = 'other-expense::home-office', OtherExpenseVehicleLoanInterest = 'other-expense::vehicle-loan-interest', OtherIncomeDividendIncome = 'other-income::dividend-income', AssetProvisionsFixedAssets = 'asset::provisions-fixed-assets', AssetDevelopmentCosts = 'asset::development-costs', OtherExpensePriorPeriodItems = 'other-expense::prior-period-items', ExpenseOtherExternalServices = 'expense::other-external-services', AssetInvestmentMortgageRealEstateLoans = 'asset::investment-mortgage-real-estate-loans', AssetAccumulatedDepletion = 'asset::accumulated-depletion', EquityPersonalExpense = 'equity::personal-expense', ExpensePurchasesRebates = 'expense::purchases-rebates', OtherCurrentLiabilityInsurancePayable = 'other-current-liability::insurance-payable', EquityPartnersEquity = 'equity::partners-equity', AssetCashOnHand = 'asset::cash-on-hand', OtherCurrentLiabilityCurrentLiabilities = 'other-current-liability::current-liabilities', RevenueOwnWorkCapitalized = 'revenue::own-work-capitalized', OtherIncomeLossOnDisposalOfAssets = 'other-income::loss-on-disposal-of-assets', LiabilityAccruedVacationPayable = 'liability::accrued-vacation-payable', AssetInternalTransfers = 'asset::internal-transfers', AssetEmployeeCashAdvances = 'asset::employee-cash-advances', OtherExpenseOtherHomeOfficeExpenses = 'other-expense::other-home-office-expenses', AssetNonCurrentAssets = 'asset::non-current-assets', EquityOpeningBalanceEquity = 'equity::opening-balance-equity', AssetOtherCurrentAsset = 'asset::other-current-asset', OtherExpenseParkingAndTolls = 'other-expense::parking-and-tolls', EquityTreasuryStock = 'equity::treasury-stock', AssetCumulativeDepreciationOnIntangibleAssets = 'asset::cumulative-depreciation-on-intangible-assets', OtherCurrentLiabilityTrustAccountsLiabilities = 'other-current-liability::trust-accounts-liabilities', OtherExpenseVehicleLoan = 'other-expense::vehicle-loan', RevenueDiscountsRefundsGiven = 'revenue::discounts-refunds-given', AssetFixedAssetOtherToolsEquipment = 'asset::fixed-asset-other-tools-equipment', ExpenseLegalProfessionalFees = 'expense::legal-professional-fees', AssetFixedAsset = 'asset::fixed-asset', OtherExpenseDepletion = 'other-expense::depletion', CostOfGoodsSoldFreightAndDeliveryCost = 'cost-of-goods-sold::freight-and-delivery-cost', OtherCurrentLiabilityFederalIncomeTaxPayable = 'other-current-liability::federal-income-tax-payable', OtherExpenseOtherMiscellaneousExpense = 'other-expense::other-miscellaneous-expense', AssetLongTermLoansAndAdvancesToRelatedParties = 'asset::long-term-loans-and-advances-to-related-parties', EquityShareCapital = 'equity::share-capital', ExpenseUtilities = 'expense::utilities', OtherCurrentLiabilityProvisionForWarrantyObligations = 'other-current-liability::provision-for-warranty-obligations', CostOfGoodsSold = 'cost-of-goods-sold', ExpenseSuppliesMaterials = 'expense::supplies-materials', OtherCurrentLiabilityOtherCurrentLiabilities = 'other-current-liability::other-current-liabilities', EquityAccumulatedAdjustment = 'equity::accumulated-adjustment', AssetInventory = 'asset::inventory', ExpenseExtraordinaryCharges = 'expense::extraordinary-charges', AssetBalWithGovtAuthorities = 'asset::bal-with-govt-authorities', ExpenseShippingAndDeliveryExpense = 'expense::shipping-and-delivery-expense', OtherExpenseExchangeGainOrLoss = 'other-expense::exchange-gain-or-loss', LiabilityBankLoans = 'liability::bank-loans', OtherCurrentLiabilityAccruedLiabilities = 'other-current-liability::accrued-liabilities', AssetFixedAssetPhone = 'asset::fixed-asset-phone', EquityInvestmentGrants = 'equity::investment-grants', ExpenseLossOnDiscontinuedOperationsNetOfTax = 'expense::loss-on-discontinued-operations-net-of-tax', RevenueSalesOfProductIncome = 'revenue::sales-of-product-income', ExpenseOtherSellingExpenses = 'expense::other-selling-expenses', AssetFixedAssetSoftware = 'asset::fixed-asset-software', OtherExpenseOtherVehicleExpenses = 'other-expense::other-vehicle-expenses', AssetFixedAssetFurniture = 'asset::fixed-asset-furniture', ExpenseTravelExpensesSellingExpense = 'expense::travel-expenses-selling-expense', OtherExpenseTaxRoundoffGainOrLoss = 'other-expense::tax-roundoff-gain-or-loss', AssetExpenditureAuthorisationsAndLettersOfCredit = 'asset::expenditure-authorisations-and-letters-of-credit', AssetInvestments = 'asset::investments', AssetOtherFixedAssets = 'asset::other-fixed-assets', OtherExpenseRepairsAndMaintenance = 'other-expense::repairs-and-maintenance', ExpenseIncomeTaxExpense = 'expense::income-tax-expense', OtherIncomeOtherOperatingIncome = 'other-income::other-operating-income', OtherIncomeUnrealisedLossOnSecuritiesNetOfTax = 'other-income::unrealised-loss-on-securities-net-of-tax', ExpenseOfficeGeneralAdministrativeExpenses = 'expense::office-general-administrative-expenses', AssetGlobalTaxDeferred = 'asset::global-tax-deferred', AssetFixedAssetPhotoVideo = 'asset::fixed-asset-photo-video', ExpenseTaxesPaid = 'expense::taxes-paid', OtherExpense = 'other-expense', OtherIncomeTaxExemptInterest = 'other-income::tax-exempt-interest', ExpenseGlobalTaxExpense = 'expense::global-tax-expense', ExpenseTravelMeals = 'expense::travel-meals', OtherIncomeGainLossOnSaleOfFixedAssets = 'other-income::gain-loss-on-sale-of-fixed-assets', OtherExpenseGasAndFuel = 'other-expense::gas-and-fuel', EquityOwnersEquity = 'equity::owners-equity', AssetProvisionsNonCurrentAssets = 'asset::provisions-non-current-assets', LiabilityAccruedLongTermLiabilities = 'liability::accrued-long-term-liabilities', LiabilityLiabilitiesRelatedToAssetsHeldForSale = 'liability::liabilities-related-to-assets-held-for-sale', ExpenseAuto = 'expense::auto', ExpenseBorrowingCost = 'expense::borrowing-cost', AssetPrepaymentsAndAccruedIncome = 'asset::prepayments-and-accrued-income', OtherCurrentLiabilityCurrentTaxLiability = 'other-current-liability::current-tax-liability', EquityPreferredStock = 'equity::preferred-stock', AssetDeferredTax = 'asset::deferred-tax', AssetOtherLongTermLoansAndAdvances = 'asset::other-long-term-loans-and-advances', ExpenseCharitableContributions = 'expense::charitable-contributions', AssetAccumulatedAmortization = 'asset::accumulated-amortization', LiabilityOtherLongTermProvisions = 'liability::other-long-term-provisions', AssetIntangibleAssetsUnderDevelopment = 'asset::intangible-assets-under-development', AssetInvestmentTaxExemptSecurities = 'asset::investment-tax-exempt-securities', ExpenseDuesSubscriptions = 'expense::dues-subscriptions', AssetLoansToOfficers = 'asset::loans-to-officers', ExpenseInterestPaid = 'expense::interest-paid', EquityEquityInEarningsOfSubsidiuaries = 'equity::equity-in-earnings-of-subsidiuaries', RevenueOtherCurrentOperatingIncome = 'revenue::other-current-operating-income', OtherIncome = 'other-income', OtherExpenseVehicleRepairs = 'other-expense::vehicle-repairs', LiabilityOutstandingDuesMicroSmallEnterprise = 'liability::outstanding-dues-micro-small-enterprise', AssetLoansToOthers = 'asset::loans-to-others', ExpenseOtherCurrentOperatingCharges = 'expense::other-current-operating-charges', OtherCurrentLiabilityCurrentPortionOfObligationsUnderFinanceLeases = 'other-current-liability::current-portion-of-obligations-under-finance-leases', OtherCurrentLiabilityDutiesAndTaxes = 'other-current-liability::duties-and-taxes', OtherCurrentLiability = 'other-current-liability', RevenueSavingsByTaxScheme = 'revenue::savings-by-tax-scheme', AssetOtherLongTermInvestments = 'asset::other-long-term-investments', AssetPrepaidExpenses = 'asset::prepaid-expenses', AssetVehicles = 'asset::vehicles', ExpenseBankCharges = 'expense::bank-charges', OtherExpenseAmortization = 'other-expense::amortization', EquityPartnerContributions = 'equity::partner-contributions', AssetTradeAndOtherReceivables = 'asset::trade-and-other-receivables', ExpenseCommissionsAndFees = 'expense::commissions-and-fees', ExpenseUnappliedCashBillPaymentExpense = 'expense::unapplied-cash-bill-payment-expense', LiabilityLongTermLiability = 'liability::long-term-liability', AssetCalledUpShareCapitalNotPaid = 'asset::called-up-share-capital-not-paid', Asset = 'asset' }
export const enum MessageReadStatus { Unsent = 'unsent', Read = 'read', Failed = 'failed', Sent = 'sent', Delivered = 'delivered' }
export const enum MessageDeliveryStatus { Pending = 'pending', Read = 'read', Undeliverable = 'undeliverable', Sent = 'sent', Delivered = 'delivered', Error = 'error', Failed = 'failed' }
export const enum SupportQueryType { Feedback = 'feedback', Incident = 'incident', Problem = 'problem', Bug = 'bug', Task = 'task', FeatureRequest = 'feature-request', Question = 'question' }
export const enum ImageMimeType { ImagePng = 'image/png', ImageWebp = 'image/webp', ImageJpeg = 'image/jpeg', ImageSvgXml = 'image/svg+xml', ImageBmp = 'image/bmp', ImageGif = 'image/gif', ImageHeic = 'image/heic', ImageTiff = 'image/tiff' }
export const enum OrderingCriteria { CreationDate = 'creation-date', Relevance = 'relevance', Alphabetical = 'alphabetical', Popularity = 'popularity', PriceDescending = 'price-descending', Manual = 'manual', Rating = 'rating', PriceAscending = 'price-ascending' }
export const enum ChatType { Private = 'private', Public = 'public', Group = 'group' }
export const enum ItemAvailabilityStatus { OutOfStock = 'out-of-stock', Active = 'active', Inactive = 'inactive', Discontinued = 'discontinued' }
export const enum FinancialAccountStatus { Inactive = 'inactive', Frozen = 'frozen', Suspended = 'suspended', Active = 'active', Closed = 'closed', UnderReview = 'under-review', Delinquent = 'delinquent' }
export const enum TransactionStatus { Initiated = 'initiated', InProgress = 'in-progress', Error = 'error', Failed = 'failed', Pending = 'pending', Succeeded = 'succeeded', Cancelled = 'cancelled' }
export const enum CreditNoteStatus { Pending = 'pending', Applied = 'applied', Completed = 'completed', Cancelled = 'cancelled', Disputed = 'disputed', Revised = 'revised', Draft = 'draft', Issued = 'issued', Void = 'void' }
export const enum PaymentTerm { Net60 = 'net-60', DeferredPayment = 'deferred-payment', CashWithOrder = 'cash-with-order', UponCompletion = 'upon-completion', CashBeforeShipment = 'cash-before-shipment', CashOnDelivery = 'cash-on-delivery', Installment = 'installment', Net90 = 'net-90', CashInAdvance = 'cash-in-advance', Prepayment = 'prepayment', DueOnReceipt = 'due-on-receipt', Prepaid = 'prepaid', Custom = 'custom', Net = 'net', DueEndOfMonth = 'due-end-of-month', Net30 = 'net-30' }
export const enum EmploymentAndCandidateStatus { Interviewing = 'interviewing', Hired = 'hired', NotSelected = 'not-selected', Other = 'other', Inactive = 'inactive', New = 'new', OnLeave = 'on-leave', InReview = 'in-review', OfferExtended = 'offer-extended', Active = 'active', Terminated = 'terminated' }
export const enum OrganizationalRole { Supervisor = 'supervisor', Employee = 'employee', Director = 'director', Manager = 'manager', Contractor = 'contractor', Admin = 'admin', Other = 'other' }
export const enum CustomerStatus { Active = 'active', Archived = 'archived', Inactive = 'inactive', Pending = 'pending', Suspended = 'suspended' }
export const enum SocialPlatform { Youtube = 'youtube', Tiktok = 'tiktok', X = 'x', Tumblr = 'tumblr', Twitter = 'twitter', Skype = 'skype', Facebook = 'facebook', Linkedin = 'linkedin', Pinterest = 'pinterest', Snapchat = 'snapchat', Reddit = 'reddit', OtherSocialPlatform = 'other-social-platform', Instagram = 'instagram' }
export const enum ConversationStatus { Deleted = 'deleted', Active = 'active', Archived = 'archived' }
export const enum CommunicationRole { Member = 'member', Assistant = 'assistant', System = 'system', Owner = 'owner', Channel = 'channel', Moderator = 'moderator', User = 'user', Admin = 'admin', Group = 'group', Bot = 'bot', Service = 'service', Guest = 'guest' }
export const enum LifecycleStatus { Redeemed = 'redeemed', Expired = 'expired', Cancelled = 'cancelled', Suspended = 'suspended', Issued = 'issued', Active = 'active' }
export const enum PaymentMethod { CashOnDelivery = 'cash-on-delivery', Other = 'other', Check = 'check', BankTransfer = 'bank-transfer', MobilePayment = 'mobile-payment', DebitCard = 'debit-card', MobileWallet = 'mobile-wallet', Paypal = 'paypal', CreditCard = 'credit-card', Cryptocurrency = 'cryptocurrency', Cash = 'cash' }
export const enum FinancialTransactionStatus { Cancelled = 'cancelled', Failed = 'failed', Authorized = 'authorized', Disputed = 'disputed', SettlementInProgress = 'settlement-in-progress', Refunded = 'refunded', Cleared = 'cleared', Pending = 'pending' }
export const enum AuditOpinionType { Unqualified = 'unqualified', Disclaimer = 'disclaimer', Adverse = 'adverse', Qualified = 'qualified' }
export const enum InventoryStorageType { DistributionCenter = 'distribution-center', Other = 'other', DropShipper = 'drop-shipper', RetailStore = 'retail-store', OnlineMarketplace = 'online-marketplace', Consignment = 'consignment', Warehouse = 'warehouse' }
export const enum VisibilityScope { Private = 'private', App = 'app', Global = 'global', Web = 'web', Internal = 'internal' }
export const enum PaymentStatus { PartiallyRefunded = 'partially-refunded', Adjusted = 'adjusted', Cancelled = 'cancelled', Overdue = 'overdue', Partial = 'partial', Deleted = 'deleted', Pending = 'pending', Disputed = 'disputed', Authorized = 'authorized', Draft = 'draft', Voided = 'voided', Failed = 'failed', Processing = 'processing', Succeeded = 'succeeded', Paid = 'paid', Refunded = 'refunded', Submitted = 'submitted', Error = 'error' }
export const enum TransactionChannel { Mobile = 'mobile', BankBranch = 'bank-branch', Telephone = 'telephone', Online = 'online', Mail = 'mail', InPerson = 'in-person', Atm = 'atm', Other = 'other' }
export const enum FinancialDisputeStatus { Won = 'won', AwaitingEvidence = 'awaiting-evidence', Closed = 'closed', UnderReview = 'under-review', Lost = 'lost', Escalated = 'escalated', ChargeRefunded = 'charge-refunded', NeedsResponse = 'needs-response' }
export const enum DeviceUsageType { Healthcare = 'healthcare', Personal = 'personal', Industrial = 'industrial', Home = 'home', Educational = 'educational', Business = 'business', Other = 'other' }
export const enum FinancialTransactionType { Charge = 'charge', Payment = 'payment', Chargeback = 'chargeback', Dividend = 'dividend', SpendOverpayment = 'spend-overpayment', Withdrawal = 'withdrawal', ReceiveOverpayment = 'receive-overpayment', Deposit = 'deposit', Sale = 'sale', Adjustment = 'adjustment', Receive = 'receive', SpendPrepayment = 'spend-prepayment', Spend = 'spend', Other = 'other', ReceivePrepayment = 'receive-prepayment', Refund = 'refund', Transfer = 'transfer', Fee = 'fee', Interest = 'interest' }
export const enum AccessControlModel { Abac = 'abac', Dac = 'dac', Rbac = 'rbac', Mac = 'mac', Custom = 'custom', None = 'none' }
export const enum ParticipantType { Group = 'group', User = 'user', Organization = 'organization', ExternalParticipant = 'external-participant', Team = 'team' }
export const enum PriorityLevel { Urgent = 'urgent', Elevated = 'elevated', Low = 'low', Medium = 'medium', High = 'high' }
export const enum PrerequisiteRangeType { ShippingPrice = 'shipping-price', Subtotal = 'subtotal', Quantity = 'quantity' }
export const enum ContentVisibility { Internal = 'internal', Private = 'private', Public = 'public', Shared = 'shared', Protected = 'protected' }
export const enum EntityCategory { Other = 'other', Event = 'event', Task = 'task', User = 'user', Message = 'message', Link = 'link', Owner = 'owner', Project = 'project', Document = 'document', Person = 'person' }
export const enum GenderIdentity { Male = 'male', PreferNotToSay = 'prefer-not-to-say', Other = 'other', Female = 'female' }
export const enum CommunicationMethod { Sms = 'sms', Mail = 'mail', Phone = 'phone', InPerson = 'in-person', VideoCall = 'video-call', Other = 'other', Email = 'email', Text = 'text', SocialMedia = 'social-media', PushNotification = 'push-notification', InstantMessage = 'instant-message' }
export const enum EmailCategoryType { Other = 'other', Educational = 'educational', Personal = 'personal', Transactional = 'transactional', Governmental = 'governmental', Business = 'business', Spam = 'spam', Promotional = 'promotional' }
export const enum UniversalIdentifierType { Number = 'number', Url = 'url', Email = 'email', Uuid = 'uuid', String = 'string' }
export const enum TaskStatus { Done = 'done', OnHold = 'on-hold', InProgress = 'in-progress', Blocked = 'blocked', Todo = 'todo', Cancelled = 'cancelled' }
export const enum UserStatus { WaitListed = 'wait-listed', Archived = 'archived', Active = 'active', Banned = 'banned', Deleted = 'deleted', Suspended = 'suspended', Inactive = 'inactive', Pending = 'pending', Verified = 'verified' }
export const enum PromotionType { BuyOneGetOne = 'buy-one-get-one', FreeShipping = 'free-shipping', RewardPoints = 'reward-points', Other = 'other', FixedAmount = 'fixed-amount', Percentage = 'percentage' }
export const enum MimeType { ImageJpeg = 'image/jpeg', ImageGif = 'image/gif', ImageWebp = 'image/webp', ImagePng = 'image/png', ImageSvgXml = 'image/svg+xml' }
export const enum TaxType { Inclusive = 'inclusive', Additive = 'additive', Variable = 'variable' }
export const enum ModifierType { List = 'list', Text = 'text' }
export const enum CardType { Credit = 'credit', Debit = 'debit', UnknownCard = 'unknown-card' }
export const enum PrepaidType { Prepaid = 'prepaid', NotPrepaid = 'not-prepaid', UnknownPrepaid = 'unknown-prepaid' }
export const enum EntryMethod { Keyed = 'keyed', Swiped = 'swiped', Contactless = 'contactless', Emv = 'emv', OnFile = 'on-file' }
export const enum CvvStatus { Rejected = 'rejected', Accepted = 'accepted', NotChecked = 'not-checked' }
export const enum AvcStatus { Rejected = 'rejected', Accepted = 'accepted', NotChecked = 'not-checked' }
export const enum CreditType { Overpayment = 'overpayment', Customer = 'customer', Prepayment = 'prepayment', Goodwill = 'goodwill', Supplier = 'supplier' }
export const enum CallDirection { Unknown = 'unknown', Conference = 'conference', Outbound = 'outbound', Inbound = 'inbound' }
export const enum SpeakerRole { Attendee = 'attendee', Invitee = 'invitee' }
export const enum FileType { Folder = 'folder', Url = 'url', File = 'file' }
export const enum AiToolChoiceType { Auto = 'auto', Any = 'any', Tool = 'tool', None = 'none' }
export const enum ImageType { Base64 = 'base64' }
export const enum ResponseFormatType { JsonObject = 'json-object', JsonSchema = 'json-schema', Text = 'text' }
export const enum ToolCallType { Function = 'function' }
export const enum AiMessagesContentType { Image = 'image', ToolUse = 'tool-use', Text = 'text', ToolResult = 'tool-result' }
