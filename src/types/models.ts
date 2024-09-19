// This file is auto-generated. Do not edit it manually.

export interface ToolResultContent { image?: Images;
    text?: string[];
    type?: AiMessagesContentType;
    CommonModel?: string }
export interface ToolCalls { modifyToken?: string;
    CommonModel?: string;
    function?: unknown;
    id?: string;
    type?: ToolCallType }
export interface ResponseFormat { CommonModel?: string;
    schema?: JsonSchema;
    type?: ResponseFormatType }
export interface JsonSchema { strict?: boolean;
    name?: string;
    schema?: unknown;
    description?: string;
    CommonModel?: string }
export interface AiToolChoice { CommonModel?: string;
    type?: AiToolChoiceType;
    name?: string }
export interface AiMessagesContent { id?: string;
    toolUseId?: string;
    modifyToken?: string;
    toolResultContent?: ToolResultContent[];
    type?: AiMessagesContentType;
    isError?: boolean;
    text?: string;
    image?: Images;
    CommonModel?: string;
    name?: string }
export interface Events { id?: string;
    modifyToken?: string;
    deleted?: boolean;
    CommonModel?: string;
    updatedAt?: string;
    timeZone?: string;
    attendees?: Users[];
    location?: string;
    startDate?: string;
    description?: string;
    title?: string;
    endDate?: string;
    organizer?: Users;
    createdAt?: string }
export interface Calendars { CommonModel?: string;
    type?: string;
    updatedAt?: string;
    title?: string;
    modifyToken?: string;
    id?: string;
    description?: string;
    location?: string;
    timeZone?: string;
    deleted?: boolean;
    createdAt?: string }
export interface Threads { snippet?: string;
    CommonModel?: string;
    lastMessageId?: string;
    lastHistoryId?: string;
    createdAt?: string;
    updatedAt?: string;
    messages?: Messages[];
    id?: string;
    deleted?: boolean;
    modifyToken?: string }
export interface Drafts { priority?: PriorityLevel;
    bcc?: string;
    createdAt?: string;
    trackingSettings?: KeyValues[];
    receiverId?: string;
    senderId?: string;
    subject?: string;
    id?: string;
    tags?: KeyValues[];
    updatedAt?: string;
    cc?: string;
    CommonModel?: string;
    modifyToken?: string;
    type?: MessageContentType;
    recipientEmails?: string[];
    reference?: Entity;
    senderEmail?: string;
    messageId?: string;
    replyToMessageId?: string;
    threadId?: string;
    attachments?: Attachments[];
    chatId?: string;
    content?: string;
    timestamp?: string;
    templateId?: string;
    metadata?: Metadata[] }
export interface Drives { updatedAt?: string;
    createdAt?: string;
    name?: string;
    description?: string;
    CommonModel?: string;
    id?: string }
export interface Folders { id?: string;
    parent?: ParentFolders;
    CommonModel?: string;
    description?: string;
    size?: number;
    createdAt?: string;
    modifyToken?: string;
    path?: string;
    name?: string;
    owner?: FileOwners;
    permissions?: Permissions;
    downloadable?: boolean;
    updatedAt?: string }
export interface Files { extension?: string;
    downloadable?: boolean;
    CommonModel?: string;
    type?: FileType;
    downloadUrl?: string;
    exportFormats?: string;
    permissions?: Permissions;
    updatedAt?: string;
    path?: string;
    owner?: FileOwners;
    modifyToken?: string;
    name?: string;
    id?: string;
    mimeType?: string;
    size?: number;
    exportable?: boolean;
    description?: string;
    parent?: ParentFolders;
    content?: string;
    createdAt?: string }
export interface FileOwners { CommonModel?: string;
    id?: string;
    email?: string;
    updatedAt?: string;
    name?: string;
    createdAt?: string }
export interface ParentFolders { name?: string;
    createdAt?: string;
    id?: string;
    CommonModel?: string;
    updatedAt?: string }
export interface Speakers { id?: string;
    name?: string;
    title?: string;
    speakerId?: string;
    email?: string;
    CommonModel?: string;
    role?: SpeakerRole;
    userId?: string }
export interface Recordings { startTime?: string;
    files?: Attachments[];
    duration?: number;
    topic?: string;
    hostId?: string;
    description?: string;
    password?: string;
    endTime?: string;
    participants?: Speakers[];
    fileSize?: number;
    createdAt?: string;
    callType?: CallDirection;
    modifyToken?: string;
    accountId?: string;
    id?: string;
    updatedAt?: string;
    name?: string;
    CommonModel?: string }
export interface Transcripts { topic?: string;
    speakerId?: string;
    updatedAt?: string;
    speakerName?: string;
    CommonModel?: string;
    meetingId?: string;
    createdAt?: string;
    id?: string;
    sentences?: Sentences[];
    modifyToken?: string }
export interface Sentences { startTime?: string;
    speakerId?: string;
    sentence?: string;
    CommonModel?: string;
    speakerName?: string;
    endTime?: string;
    id?: string;
    modifyToken?: string;
    createdAt?: string;
    updatedAt?: string }
export interface Tables { updatedAt?: string;
    description?: string;
    modifyToken?: string;
    createdAt?: string;
    CommonModel?: string;
    slug?: string;
    name?: string;
    fields?: Attributes[];
    id?: string }
export interface Databases { tables?: Tables[];
    modifyToken?: string;
    updatedAt?: string;
    description?: string;
    region?: string;
    CommonModel?: string;
    organizationId?: string;
    name?: string;
    title?: string;
    id?: string;
    permissionLevel?: string;
    url?: string;
    deleted?: boolean;
    createdAt?: string;
    active?: boolean }
export interface Attributes { createdAt?: string;
    unique?: boolean;
    description?: string;
    dataType?: DataType;
    name?: string;
    slug?: string;
    required?: boolean;
    customTypeDetails?: Metadata[];
    modifyToken?: string;
    updatedAt?: string;
    id?: string;
    CommonModel?: string }
export interface Records { modifyToken?: string;
    id?: string;
    entity?: unknown;
    CommonModel?: string;
    updatedAt?: string;
    createdAt?: string }
export interface Objects { singularNoun?: string;
    id?: string;
    name?: string;
    pluralNoun?: string;
    custom?: boolean;
    createdAt?: string;
    slug?: string;
    updatedAt?: string;
    modifyToken?: string;
    CommonModel?: string }
export interface CardDetails { fingerprint?: string;
    authorizedAt?: string;
    brand?: string;
    deleted?: boolean;
    capturedAt?: string;
    status?: string;
    statementDescription?: string;
    active?: boolean;
    id?: string;
    expiryMonth?: string;
    expiryYear?: string;
    modifyToken?: string;
    lastFour?: string;
    CommonModel?: string;
    bin?: string;
    entryMethod?: EntryMethod;
    cvvStatus?: CvvStatus;
    prepaidType?: PrepaidType;
    avcStatus?: AvcStatus;
    type?: CardType;
    createdAt?: string;
    updatedAt?: string }
export interface Modifiers { id?: string;
    customerNote?: string;
    deleted?: boolean;
    currency?: Currency;
    active?: boolean;
    CommonModel?: string;
    originalPrice?: number;
    modifyToken?: string;
    createdAt?: string;
    name?: string;
    quantity?: number;
    groupId?: string;
    updatedAt?: string;
    linePrice?: number }
export interface ModifierGroups { createdAt?: string;
    active?: boolean;
    updatedAt?: string;
    name?: string;
    CommonModel?: string;
    id?: string;
    type?: ModifierType;
    description?: string;
    deleted?: boolean;
    modifiers?: Modifiers[];
    modifyToken?: string }
export interface InvoicePayments { id?: string;
    modifyToken?: string;
    amount?: number;
    createdAt?: string;
    date?: string;
    updatedAt?: string;
    CommonModel?: string }
export interface Locations { businessHours?: BusinessHours[];
    domain?: string;
    tags?: string[];
    emails?: Emails[];
    numberOfEmployees?: number;
    locationNumber?: string;
    updatedAt?: string;
    customFields?: CustomAttributes[];
    name?: string;
    defaultPhone?: string;
    CommonModel?: string;
    description?: string;
    website?: string;
    merchantId?: string;
    currency?: Currency;
    merchantCategoryCode?: string;
    address?: Addresses;
    socialProfiles?: SocialProfiles[];
    phones?: Phones[];
    defaultEmail?: string;
    modifyToken?: string;
    id?: string;
    timezone?: string;
    type?: string;
    active?: boolean;
    createdAt?: string;
    businessName?: string;
    countryCode?: string }
export interface CurrencyDetails { id?: string;
    currency?: Currency;
    value?: number;
    CommonModel?: string }
export interface UsageLimitExpirations { expirationDate?: string;
    CommonModel?: string;
    limit?: number }
export interface Webhooks { CommonModel?: string;
    objects?: string[];
    events?: string[];
    id?: string;
    format?: Format;
    updatedAt?: string;
    address?: string;
    createdAt?: string;
    isDeleted?: boolean;
    modifyToken?: string }
export interface PrerequisiteRanges { lessThanOrEqualTo?: number;
    greaterThanOrEqualTo?: number;
    CommonModel?: string;
    type?: PrerequisiteRangeType }
export interface PriceRules { valueType?: DiscountType;
    prerequisiteSavedSearchIds?: string[];
    value?: number;
    endDate?: string;
    entitledVariantIds?: string[];
    startDate?: string;
    modifyToken?: string;
    excludedProductIds?: string[];
    entitledCountryIds?: string[];
    title?: string;
    oncePerCustomer?: boolean;
    updatedAt?: string;
    targetSelection?: TargetSelection;
    prerequisiteVariantIds?: string[];
    CommonModel?: string;
    customerSelection?: CustomerSelection;
    targetType?: TargetType;
    active?: boolean;
    excludedCollectionIds?: string[];
    prerequisiteCollectionIds?: string[];
    prerequisiteProductIds?: string[];
    currency?: string;
    entitledProductIds?: string[];
    allocationLimit?: number;
    usageLimit?: number;
    entitledCollectionIds?: string[];
    description?: string;
    prerequisiteQuantity?: number;
    prerequisiteRanges?: PrerequisiteRanges;
    allocationMethod?: AllocationMethod;
    createdAt?: string;
    priority?: number;
    excludedVariantIds?: string[];
    id?: string;
    prerequisiteCustomerIds?: string[];
    deleted?: boolean;
    entitledQuantity?: number }
export interface Discounts { code?: string;
    timesUsed?: number;
    description?: string;
    usageLimitPerCustomer?: number;
    usageLimitExpirations?: UsageLimitExpirations;
    title?: string;
    currency?: string;
    updatedAt?: string;
    channelAvailability?: ChannelAvailability;
    id?: string;
    minimumPurchaseAmount?: number;
    usageLimit?: number;
    stackable?: boolean;
    endDate?: string;
    appliesTo?: AppliesTo;
    type?: DiscountType;
    value?: number;
    minimumRequirements?: MinimumRequirements;
    status?: Status;
    active?: boolean;
    startDate?: string;
    customFields?: CustomAttributes[];
    modifyToken?: string;
    deleted?: boolean;
    customerEligibility?: CustomerEligibility;
    createdAt?: string;
    minimumQuantityOfItems?: number;
    exclusions?: string[];
    CommonModel?: string }
export interface AiUsage { totalTokens?: number;
    completionTokens?: number;
    CommonModel?: string;
    promptTokens?: number }
export interface AiMessages { content?: AIMessagesContent[];
    name?: string;
    role?: string;
    finishReason?: string;
    CommonModel?: string;
    index?: number;
    refusal?: string;
    toolCalls?: ToolCalls[] }
export interface Chats { responseFormat?: ResponseFormat;
    temperature?: number;
    id?: string;
    maxTokens?: number;
    tools?: JsonSchema[];
    system?: string[];
    numberOfCompletions?: number;
    presencePenalty?: number;
    modifyToken?: string;
    systemFingerprint?: string;
    usage?: AiUsage;
    frequencyPenalty?: number;
    toolChoice?: AiToolChoice;
    CommonModel?: string;
    createdAt?: string;
    logitBias?: unknown;
    model?: string;
    userId?: string;
    messages?: AIMessages[];
    topK?: number;
    stopSequences?: string[];
    enableParallelToolCalls?: boolean;
    topP?: number;
    seed?: number;
    objectType?: string }
export interface TaxDetails { active?: boolean;
    taxCode?: string;
    details?: string;
    region?: string;
    expirationDate?: string;
    id?: string;
    effectiveDate?: string;
    country?: string;
    amount?: number;
    deleted?: boolean;
    taxRegistrationNumber?: string;
    updatedAt?: string;
    createdAt?: string;
    isTaxIncludedInPrice?: boolean;
    name?: string;
    currency?: Currency;
    category?: string;
    jurisdiction?: string;
    CommonModel?: string;
    rate?: number }
export interface Evidence { cancellationPolicyDisclosure?: string;
    billingAddress?: string;
    customerEmailAddress?: string;
    customerName?: string;
    duplicateChargeDocumentation?: string;
    receipt?: string;
    refundPolicy?: string;
    refundPolicyDisclosure?: string;
    shippingAddress?: string;
    cancellationPolicy?: string;
    CommonModel?: string;
    productDescription?: string;
    shippingDate?: string;
    uncategorizedText?: string;
    accessActivityLog?: string;
    duplicateChargeId?: string;
    duplicateChargeExplanation?: string;
    refundRefusalExplanation?: string;
    shippingTrackingNumber?: string;
    customerPurchaseIp?: string;
    cancellationRebuttal?: string;
    customerSignature?: string;
    shippingCarrier?: string;
    uncategorizedFile?: string;
    serviceDocumentation?: string;
    shippingDocumentation?: string;
    customerCommunication?: string;
    serviceDate?: string }
export interface Disputes { amount?: number;
    CommonModel?: string;
    status?: FinancialDisputeStatus;
    currency?: Currency;
    created?: string;
    version?: string;
    reason?: string;
    chargeRefundable?: boolean;
    evidence?: Evidence;
    metadata?: Metadata;
    customerId?: string;
    updated?: string;
    deleted?: boolean;
    id?: string;
    active?: boolean;
    charge?: string;
    notes?: string;
    transactionId?: string }
export interface Reactions { messageId?: string;
    userId?: string;
    createdAt?: string;
    chatId?: string;
    type?: ReactionType;
    CommonModel?: string }
export interface Participants { joinedAt?: string;
    userId?: string;
    status?: ParticipantEngagementStatus;
    type?: CommunicationRole;
    CommonModel?: string;
    displayName?: string }
export interface Conversations { unreadCount?: number;
    metadata?: string;
    modifyToken?: string;
    type?: ChatType;
    createdAt?: string;
    updatedAt?: string;
    participants?: Participants[];
    messages?: Messages[];
    title?: string;
    lastReadMessageId?: string;
    CommonModel?: string;
    lastMessage?: Messages;
    id?: string;
    isPinned?: boolean;
    status?: ConversationStatus }
export interface Messages { id?: string;
    replyToMessageId?: string;
    type?: MessageContentType;
    createdAt?: string;
    updatedAt?: string;
    active?: boolean;
    modifyToken?: string;
    reactions?: Reactions[];
    deliveryStatus?: MessageDeliveryStatus;
    templateId?: string;
    historyId?: string;
    cc?: string;
    subject?: string;
    chatId?: string;
    threadId?: string;
    tags?: KeyValues[];
    senderId?: string;
    bcc?: string;
    CommonModel?: string;
    deleted?: boolean;
    metadata?: Metadata[];
    priority?: PriorityLevel;
    receiverId?: string;
    timestamp?: string;
    readStatus?: MessageReadStatus;
    senderEmail?: string;
    attachments?: Attachments[];
    trackingSettings?: KeyValues[];
    recipientEmails?: string[];
    reference?: Entity;
    content?: string;
    tags?: string[] }
export interface ShareholderEquityDetails { CommonModel?: string;
    retainedEarnings?: number;
    accumulatedOtherComprehensiveIncome?: number;
    treasuryStock?: number;
    commonStock?: number;
    preferredStock?: number }
export interface IncomeTaxExpenseDetails { currentIncomeTax?: number;
    taxAllowanceCredit?: number;
    CommonModel?: string;
    deferredIncomeTax?: number }
export interface OperatingExpensesDetails { otherOperatingExpenses?: number;
    CommonModel?: string;
    researchAndDevelopmentExpenses?: number;
    salesGeneralAndAdministrativeExpenses?: number }
export interface RevenueDetails { CommonModel?: string;
    otherRevenue?: number;
    salesRevenue?: number;
    serviceRevenue?: number }
export interface ShippingItem { productName?: string;
    CommonModel?: string;
    sku?: string;
    weight?: number;
    productId?: string;
    quantity?: number;
    id?: string;
    weightUnit?: string;
    dimensions?: Dimensions;
    value?: number }
export interface BillingDetails { phoneNumber?: string;
    address?: Addresses;
    isDeleted?: boolean;
    createdAt?: string;
    defaultPaymentMethod?: PaymentMethods;
    active?: boolean;
    paymentTerms?: PaymentTerm;
    currency?: Currency;
    vatId?: string;
    email?: string;
    language?: string;
    id?: string;
    CommonModel?: string;
    fullName?: string;
    note?: string;
    updatedAt?: string;
    additionalAttributes?: CustomAttributes[];
    companyName?: string;
    customerId?: string }
export interface PaymentTerms { discountRate?: number;
    permittedClientClasses?: string[];
    isDeleted?: boolean;
    minimumPayment?: number;
    description?: string;
    currencyCode?: string;
    penaltyRate?: number;
    id?: string;
    lastUpdatedDate?: string;
    discountDays?: number;
    CommonModel?: string;
    languageSupport?: string[];
    createdAt?: string;
    countrySpecificTerms?: string[];
    updatedAt?: string;
    isActive?: boolean;
    dueDays?: number;
    allowedMethods?: string[];
    type?: PaymentTerm;
    gracePeriodDays?: number;
    currencyFormatting?: string;
    notes?: string;
    interestRate?: number;
    createdDate?: string }
export interface InvoiceAdjustments { CommonModel?: string;
    updatedAt?: string;
    deleted?: boolean;
    amount?: number;
    type?: InvoiceAdjustmentType;
    metadata?: Metadata;
    id?: string;
    currency?: Currency;
    appliedToInvoiceItemId?: string;
    createdAt?: string;
    active?: boolean;
    description?: string }
export interface TaxRates { currency?: Currency;
    country?: string;
    reportTaxType?: string;
    applicableItems?: string[];
    shippingIncluded?: boolean;
    displayRate?: string;
    createdAt?: string;
    name?: string;
    taxType?: string;
    description?: string;
    deleted?: boolean;
    region?: string;
    taxNumber?: string;
    taxProvider?: string;
    customFields?: CustomAttributes[];
    modifyToken?: string;
    CommonModel?: string;
    percentage?: number;
    id?: string;
    taxComponents?: TaxLines[];
    compound?: boolean;
    active?: boolean;
    updatedAt?: string }
export interface CreditNoteLines { id?: string;
    quantity?: number;
    description?: string;
    total?: number;
    unitPrice?: number;
    taxRate?: number;
    account?: string;
    customFields?: CustomAttributes[];
    CommonModel?: string;
    product?: Products }
export interface CreditNotes { createdAt?: string;
    description?: string;
    amount?: number;
    shippingAddress?: Addresses;
    deleted?: boolean;
    billingAddress?: Addresses;
    taxRate?: number;
    vatNumber?: string;
    lines?: CreditNoteLines[];
    customer?: Customers;
    vatName?: string;
    discounts?: number[];
    dueDate?: string;
    adjustment?: number;
    memo?: string;
    creditType?: CreditType;
    id?: string;
    companyName?: string;
    taxAmount?: number;
    metadata?: Metadata;
    updatedAt?: string;
    attachments?: Attachments[];
    CommonModel?: string;
    active?: boolean;
    currency?: Currency;
    number?: string;
    modifyToken?: string;
    status?: CreditNoteStatus;
    reason?: string;
    issuedDate?: string;
    payments?: Payments[];
    companyId?: string }
export interface ExpenseCategories { CommonModel?: string;
    id?: string;
    name?: string;
    description?: string }
export interface Expenses { amount?: number;
    merchant?: string;
    customFields?: CustomAttributes[];
    createdAt?: string;
    location?: Addresses;
    modifyToken?: string;
    category?: ExpenseCategories;
    approvedByUserId?: string;
    tags?: string[];
    receiptUrls?: string[];
    updatedAt?: string;
    description?: string;
    currencyCode?: string;
    dateIncurred?: string;
    paymentMethod?: PaymentMethods;
    attachments?: Attachments[];
    reportId?: string;
    id?: string;
    CommonModel?: string;
    transactionId?: string;
    tax?: Taxes[];
    note?: string;
    createdByUserId?: string;
    active?: boolean;
    lineItems?: Items[];
    deleted?: boolean;
    status?: ExpenseApprovalStatus;
    accountId?: string }
export interface Transactions { type?: FinancialTransactionType;
    sender?: Customers;
    taxAmount?: number;
    deleted?: boolean;
    exchangeRate?: number;
    paymentIntent?: string;
    paymentMethod?: PaymentMethods;
    amount?: number;
    date?: string;
    accountCode?: string;
    transactionCategory?: TransactionType;
    orderId?: string;
    applicationFee?: number;
    shipping?: ShippingDetails;
    billingDetails?: BillingDetails;
    CommonModel?: string;
    transactionMethod?: TransactionMethod;
    metadata?: Metadata;
    createdAt?: string;
    accountName?: string;
    invoiceId?: string;
    taxExempt?: boolean;
    tags?: string[];
    id?: string;
    checkNumber?: string;
    description?: string;
    dispute?: Disputes;
    items?: Items[];
    modifyToken?: string;
    contact?: Contacts;
    status?: FinancialTransactionStatus;
    currency?: Currency;
    refund?: Refunds;
    recipient?: Customers;
    attachments?: Attachments[];
    foreignCurrency?: CurrencyDetails;
    updatedAt?: string;
    accountId?: string }
export interface PurchaseOrderLineItems { CommonModel?: string;
    SKU?: string;
    totalPrice?: number;
    discount?: number;
    deliveryDate?: string;
    unitPrice?: number;
    description?: string;
    productId?: string;
    quantity?: number;
    unitOfMeasure?: string;
    id?: string }
export interface Accounts { owner?: Customers;
    transactions?: Transactions[];
    branch?: string;
    notes?: string;
    interestRate?: number;
    showInExpenses?: boolean;
    closedAt?: string;
    name?: string;
    overdraftProtection?: boolean;
    allowPayments?: boolean;
    CommonModel?: string;
    active?: boolean;
    deleted?: boolean;
    modifyToken?: string;
    accountType?: AccountType;
    id?: string;
    overdraftLimit?: number;
    updatedAt?: string;
    currency?: Currency;
    accountCode?: string;
    title?: string;
    taxType?: string;
    createdAt?: string;
    status?: FinancialAccountStatus;
    description?: string;
    accountNumber?: string;
    balance?: number }
export interface PurchaseOrders { shipTo?: Addresses;
    id?: string;
    attachments?: Attachments[];
    modifyToken?: string;
    lineItems?: PurchaseOrderLineItems[];
    CommonModel?: string;
    vendor?: Vendors;
    notes?: string;
    expectedDeliveryDate?: string;
    currency?: Currency;
    billTo?: Addresses;
    orderDate?: string;
    shippingCosts?: number;
    subtotal?: number;
    status?: OrderStatus;
    total?: number;
    createdAt?: string;
    accountId?: string;
    updatedAt?: string;
    orderNumber?: string;
    paymentTerms?: string;
    taxes?: number;
    active?: boolean;
    deleted?: boolean }
export interface AdditionalCharges { updatedAt?: string;
    CommonModel?: string;
    id?: string;
    amount?: number;
    description?: string;
    type?: FinancialChargeType;
    createdAt?: string }
export interface Refunds { status?: TransactionStatus;
    currency?: Currency;
    createdAt?: string;
    id?: string;
    paymentId?: string;
    amount?: number;
    updatedAt?: string;
    reason?: string;
    modifyToken?: string;
    CommonModel?: string }
export interface Payments { receiptEmail?: string;
    transactionId?: string;
    active?: boolean;
    webhookUrl?: string;
    modifyToken?: string;
    amount?: number;
    paymentCaptureMethod?: string;
    paymentMethod?: PaymentMethods;
    paymentIntent?: string;
    customer?: Customers;
    shippingDetails?: ShippingDetails;
    createdAt?: string;
    description?: string;
    currency?: Currency;
    deleted?: boolean;
    refund?: Refunds;
    metadata?: Metadata;
    date?: string;
    CommonModel?: string;
    id?: string;
    status?: PaymentStatus;
    cardDetails?: CardDetails;
    tip?: number;
    orderId?: string;
    journalId?: string;
    notes?: string;
    invoice?: Invoices;
    updatedAt?: string;
    paymentProcessor?: string;
    billingDetails?: BillingDetails }
export interface Bills { attachments?: Attachments[];
    customer?: Customers;
    active?: boolean;
    updatedAt?: string;
    issueDate?: string;
    currencyCode?: string;
    id?: string;
    invoiceNumber?: string;
    amountDue?: number;
    customFields?: CustomAttributes[];
    CommonModel?: string;
    dueDate?: string;
    status?: BillingStatus;
    vendor?: Vendors;
    lineItems?: Items[];
    modifyToken?: string;
    createdAt?: string;
    amountPaid?: number;
    notes?: string;
    terms?: string;
    amountRemaining?: number;
    deleted?: boolean }
export interface Vendors { companyName?: string;
    website?: string;
    contactPhone?: string;
    outstandingBalance?: number;
    active?: boolean;
    createdAt?: string;
    tax?: Taxes[];
    address?: Addresses;
    accountNumber?: string;
    note?: string;
    overdueBalance?: number;
    id?: string;
    contactEmail?: string;
    contactName?: string;
    currencyCode?: string;
    updatedAt?: string;
    deleted?: boolean;
    modifyToken?: string;
    CommonModel?: string;
    is1099?: boolean;
    customFields?: CustomAttributes[] }
export interface AuditInformation { auditDate?: string;
    auditOpinion?: AuditOpinionType;
    CommonModel?: string;
    notes?: string;
    auditorName?: string }
export interface BalanceSheets { inventory?: number;
    totalLiabilitiesAndEquity?: number;
    additionalPaidInCapital?: number;
    commonStock?: number;
    totalAssets?: number;
    fixedAssets?: number;
    currentPortionOfLongTermDebt?: number;
    prepaidExpenses?: number;
    intangibleAssets?: number;
    nonCurrentAssets?: number;
    CommonModel?: string;
    currentLiabilities?: number;
    updatedAt?: string;
    id?: string;
    cashAndCashEquivalents?: number;
    shortTermDebt?: number;
    shortTermInvestments?: number;
    otherNonCurrentLiabilities?: number;
    accumulatedDepreciation?: number;
    preferredStock?: number;
    taxLiabilities?: number;
    auditInfo?: AuditInformation;
    createdAt?: string;
    accruedLiabilities?: number;
    retainedEarnings?: number;
    notes?: string;
    totalLiabilities?: number;
    otherCurrentAssets?: number;
    customFields?: CustomAttributes[];
    currency?: Currency;
    otherNonCurrentAssets?: number;
    nonCurrentLiabilities?: number;
    longTermDebt?: number;
    accountsPayable?: number;
    active?: boolean;
    modifyToken?: string;
    stockholdersEquity?: number;
    otherCurrentLiabilities?: number;
    currentAssets?: number;
    accountsReceivable?: number;
    equity?: number;
    minorityInterest?: number;
    deleted?: boolean;
    treasuryStock?: number;
    notesPayable?: number;
    balanceDate?: string;
    accountSummary?: KeyValues[];
    propertyPlantEquipment?: number;
    deferredRevenue?: number }
export interface IncomeStatements { accountSummary?: KeyValues[];
    id?: string;
    interestExpense?: number;
    ebitda?: number;
    period?: string;
    depreciationAndAmortization?: number;
    costOfGoodsSold?: number;
    revenue?: RevenueDetails;
    CommonModel?: string;
    shareholderEquity?: ShareholderEquityDetails;
    updatedAt?: string;
    incomeTaxExpense?: IncomeTaxExpenseDetails;
    exchangeRate?: number;
    operatingExpenses?: OperatingExpensesDetails;
    profitMargins?: number;
    createdAt?: string;
    currency?: Currency;
    grossProfit?: number;
    incomeBeforeTax?: number;
    netIncome?: number;
    modifyToken?: string;
    operatingIncome?: number }
export interface Invoices { discountTotal?: number;
    paidAmount?: number;
    dueDate?: string;
    terms?: string;
    items?: InvoiceItems[];
    attachments?: Attachments[];
    discountPercentage?: number;
    invoicePayments?: InvoicePayments[];
    deleted?: boolean;
    reference?: Entity;
    adjustments?: InvoiceAdjustments[];
    active?: boolean;
    subtotal?: number;
    billingAddress?: Addresses;
    currency?: Currency;
    notes?: string;
    header?: string;
    id?: string;
    vatName?: string;
    transactionDate?: string;
    vatNumber?: string;
    shippingAddress?: Addresses;
    metadata?: Metadata[];
    issuedDate?: string;
    total?: number;
    modifyToken?: string;
    updatedAt?: string;
    customer?: Customers;
    balanceDue?: number;
    invoiceNumber?: string;
    taxTotal?: number;
    footer?: string;
    createdAt?: string;
    status?: PaymentStatus;
    paymentTerms?: PaymentTerms;
    CommonModel?: string;
    exchangeRate?: number }
export interface JournalEntries { lineItems?: JournalEntryLines[];
    active?: boolean;
    CommonModel?: string;
    date?: string;
    id?: string;
    updatedBy?: string;
    currency?: Currency;
    name?: string;
    exchangeRate?: number;
    reference?: string;
    isReconciled?: boolean;
    totalAmount?: number;
    memo?: string;
    updatedAt?: string;
    deleted?: boolean;
    entryNumber?: string;
    type?: string;
    description?: string;
    status?: JournalEntryStatus;
    attachments?: Attachments[];
    createdAt?: string;
    modifyToken?: string;
    createdBy?: string }
export interface JournalEntryLines { description?: string;
    credit?: number;
    tracking?: FinancialTrackingCategories;
    quantity?: number;
    taxCode?: string;
    amount?: number;
    debit?: number;
    CommonModel?: string;
    id?: string;
    taxAmount?: number;
    accountId?: string }
export interface InvoiceItems { mpn?: string;
    ratingCount?: number;
    updatedAt?: string;
    isbn?: string;
    active?: boolean;
    isAvailable?: boolean;
    discount?: number;
    ean?: string;
    rating?: number;
    dimensions?: Dimensions;
    id?: string;
    tags?: string[];
    sku?: string;
    variants?: Variants[];
    options?: ProductOptions[];
    weight?: number;
    imageUrl?: string;
    inventoryQuantity?: number;
    availabilityDate?: string;
    reviews?: RatingsReviews[];
    customFields?: CustomAttributes[];
    brand?: string;
    upc?: string;
    onSale?: boolean;
    name?: string;
    description?: string;
    deletedAt?: string;
    createdAt?: string;
    modifyToken?: string;
    currency?: Currency;
    quantity?: number;
    inventoryStatus?: ProductAvailabilityStatus;
    CommonModel?: string;
    price?: number;
    gallery?: Images[];
    condition?: ItemCondition }
export interface Tickets { comments?: Comments[];
    attachments?: Attachments[];
    CommonModel?: string;
    priority?: SupportTicketPriority;
    id?: string;
    type?: SupportQueryType;
    reporter?: Contacts;
    dueDate?: string;
    notes?: Notes[];
    updatedAt?: string;
    tags?: string[];
    assignee?: Users;
    description?: string;
    createdAt?: string;
    customFields?: CustomAttributes[];
    modifyToken?: string;
    title?: string;
    status?: IssueLifecycleStatus }
export interface WorkExperiences { startDate?: string;
    position?: string;
    endDate?: string;
    CommonModel?: string;
    description?: string;
    company?: string }
export interface Educations { gpa?: number;
    institution?: string;
    endDate?: string;
    fieldOfStudy?: string;
    CommonModel?: string;
    startDate?: string;
    degree?: string }
export interface References { name?: string;
    CommonModel?: string;
    email?: string;
    relationship?: string;
    company?: string;
    position?: string;
    phoneNumber?: string }
export interface Candidates { resume?: Attachments;
    updatedAt?: string;
    modifyToken?: string;
    skills?: string[];
    CommonModel?: string;
    firstName?: string;
    workExperiences?: WorkExperiences[];
    customFields?: CustomAttributes[];
    createdAt?: string;
    phoneNumber?: string;
    email?: string;
    websites?: string[];
    preferredWorkLocation?: string;
    educations?: Educations[];
    availability?: string;
    references?: References[];
    coverLetter?: Attachments;
    languages?: string[];
    certifications?: string[];
    notes?: Notes[];
    status?: EmploymentAndCandidateStatus;
    id?: string;
    lastName?: string;
    socialProfiles?: SocialProfiles[];
    jobId?: string;
    profilePicture?: Images;
    role?: string }
export interface Contacts { lastName?: string;
    notes?: Notes;
    note?: string;
    websites?: string[];
    birthday?: string;
    defaultEmail?: string;
    customFields?: CustomAttributes[];
    createdAt?: string;
    emails?: Emails[];
    isActive?: boolean;
    address?: Addresses;
    tags?: string[];
    CommonModel?: string;
    relationship?: string;
    updatedAt?: string;
    addresses?: Addresses[];
    company?: string;
    firstName?: string;
    defaultPhone?: string;
    code?: string;
    phones?: Phones[];
    modifyToken?: string;
    id?: string;
    leadId?: string;
    socialProfiles?: SocialProfiles[] }
export interface Jobs { createdAt?: string;
    jobStartDate?: string;
    updatedAt?: string;
    employmentType?: EmploymentType;
    validUntil?: string;
    CommonModel?: string;
    jobTrainingProvided?: boolean;
    skills?: string[];
    responsibilities?: string;
    salaryCurrency?: string;
    baseSalary?: Salaries;
    industry?: string;
    description?: string;
    benefits?: string[];
    languagesSpoken?: string[];
    id?: string;
    title?: string;
    qualifications?: string;
    jobShifts?: string[];
    jobImmediateStart?: boolean;
    remote?: boolean;
    employmentUnit?: EmploymentUnits;
    jobTrialPeriod?: string;
    incentives?: string;
    jobFlexibleHours?: boolean;
    incentiveCompensation?: string;
    location?: Addresses;
    applicationDeadline?: string;
    educationRequirements?: string;
    workHours?: string;
    occupationalCategory?: string;
    jobBenefits?: string;
    workFromHome?: boolean;
    jobLocationType?: string;
    experienceRequirements?: string;
    modifyToken?: string;
    company?: Companies }
export interface Salaries { value?: number;
    currency?: Currency;
    CommonModel?: string;
    paymentPeriod?: TimeCycle }
export interface HiringOrganizations { description?: string;
    name?: string;
    industry?: string;
    locations?: Addresses[];
    size?: string;
    CommonModel?: string }
export interface EmploymentUnits { name?: string;
    CommonModel?: string;
    description?: string }
export interface TimeSession { closeTime?: string;
    CommonModel?: string;
    openTime?: string }
export interface UserOrGroup { identifier?: string;
    CommonModel?: string;
    displayName?: string;
    type?: ParticipantType }
export interface Permissions { accessControlType?: AccessControlModel;
    CommonModel?: string;
    canDelete?: string[];
    roles?: string[];
    assigneeDetails?: UserOrGroup;
    canView?: string[];
    identifierType?: UniversalIdentifierType;
    canEdit?: string[] }
export interface Emails { type?: EmailCategoryType;
    CommonModel?: string;
    email?: string }
export interface Phones { countryCode?: string;
    type?: DeviceUsageType;
    CommonModel?: string;
    country?: string;
    phone?: string }
export interface Entity { CommonModel?: string;
    entityId?: string;
    value?: string;
    attributes?: string[];
    entityType?: EntityCategory }
export interface Notifications { active?: boolean;
    updatedAt?: string;
    title?: string;
    channel?: string;
    deleted?: boolean;
    message?: string;
    customFields?: CustomAttributes[];
    recipient?: Users;
    notificationId?: string;
    type?: string;
    status?: string;
    attachments?: Attachments[];
    priority?: PriorityLevel;
    createdAt?: string;
    CommonModel?: string }
export interface Comments { CommonModel?: string;
    deleted?: boolean;
    commentId?: string;
    parentId?: string;
    author?: Users;
    likes?: number;
    flagged?: boolean;
    metadata?: Metadata[];
    text?: string;
    createdAt?: string;
    updatedAt?: string;
    active?: boolean }
export interface Metadata { type?: DataType;
    createdAt?: string;
    updatedAt?: string;
    valueParsingRequired?: boolean;
    CommonModel?: string;
    id?: string;
    key?: string;
    value?: string;
    entityId?: string;
    entityType?: string }
export interface Tasks { attachments?: Attachments[];
    priority?: PriorityLevel;
    watchers?: Users[];
    completionPercentage?: number;
    updatedAt?: string;
    modifyToken?: string;
    labels?: string[];
    relatedToTaskId?: string[];
    createdBy?: Users;
    description?: string;
    id?: string;
    assignee?: Users;
    CommonModel?: string;
    dueTimezone?: string;
    createdAt?: string;
    comments?: Comments[];
    customFields?: CustomAttributes[];
    title?: string;
    timeLogged?: string;
    dueDate?: string;
    dependOnTaskIds?: string[];
    notifications?: Notifications[];
    status?: TaskStatus;
    subTaskIds?: string[];
    timeEstimate?: string;
    parentTaskId?: string;
    repeat?: string }
export interface Stores { businessHours?: BusinessHours[];
    ratings?: RatingsReviews;
    email?: string;
    description?: string;
    phone?: string;
    storeArea?: number;
    isOperating?: boolean;
    relatedStores?: Stores[];
    countryCode?: string;
    language?: string;
    owner?: Users;
    paymentMethods?: string[];
    latitude?: number;
    country?: string;
    longitude?: number;
    category?: string;
    CommonModel?: string;
    name?: string;
    manager?: Staff;
    features?: string[];
    websiteUrl?: string;
    updatedAt?: string;
    logoUrl?: string;
    socialProfiles?: SocialProfiles[];
    id?: string;
    currency?: Currency;
    createdAt?: string;
    timezone?: string;
    address?: Addresses }
export interface Staff { phone?: string;
    CommonModel?: string;
    photoUrl?: string;
    email?: string;
    storeID?: string;
    status?: EmploymentAndCandidateStatus;
    role?: OrganizationalRole;
    dateOfBirth?: string;
    active?: boolean;
    deleted?: boolean;
    createdAt?: string;
    firstName?: string;
    customFields?: CustomAttributes[];
    addresses?: Addresses;
    updatedAt?: string;
    position?: string;
    lastName?: string;
    gender?: string;
    id?: string }
export interface RatingsReviews { verifiedPurchase?: boolean;
    deleted?: boolean;
    storeID?: string;
    locale?: string;
    active?: boolean;
    status?: ReviewApprovalStatus;
    id?: string;
    rating?: number;
    review?: string;
    createdAt?: string;
    CommonModel?: string;
    updatedAt?: string;
    metadata?: Metadata;
    reviewerName?: string }
export interface ProductOptions { id?: string;
    name?: string;
    values?: string[];
    updatedAt?: string;
    createdAt?: string;
    CommonModel?: string;
    productId?: number }
export interface Taxes { code?: string;
    region?: string;
    name?: string;
    jurisdiction?: string;
    active?: boolean;
    CommonModel?: string;
    taxable?: boolean;
    category?: string;
    customFields?: CustomAttributes[];
    type?: TaxType;
    id?: string;
    country?: string;
    amount?: number;
    updatedAt?: string;
    currency?: Currency;
    description?: string;
    deleted?: boolean;
    createdAt?: string;
    rate?: number }
export interface InventoryLocations { quantity?: number;
    createdAt?: string;
    updatedAt?: string;
    deleted?: boolean;
    CommonModel?: string;
    locationId?: string;
    isActive?: boolean;
    operationalHours?: string;
    address?: Addresses;
    name?: string;
    type?: InventoryStorageType;
    contactInformation?: Contacts[] }
export interface Prices { amount?: number;
    CommonModel?: string;
    type?: string;
    currency?: Currency }
export interface Variants { dimensions?: Dimensions;
    id?: string;
    sku?: string;
    deleted?: boolean;
    compareAtPrice?: number;
    title?: string;
    requiresShipping?: boolean;
    weight?: number;
    price?: number;
    modifyToken?: string;
    status?: ItemAvailabilityStatus;
    CommonModel?: string;
    imageId?: number;
    productId?: string;
    updatedAt?: string;
    active?: boolean;
    createdAt?: string;
    inventoryQuantity?: number;
    weightUnit?: string;
    isDefault?: boolean;
    barcode?: string;
    taxable?: boolean }
export interface Dimensions { width?: number;
    length?: number;
    height?: number;
    CommonModel?: string }
export interface Products { vendor?: string;
    weight?: number;
    description?: string;
    seoKeywords?: string[];
    prices?: Prices[];
    variants?: Variants[];
    dimensions?: Dimensions;
    inventoryLocation?: InventoryLocations;
    createdAt?: string;
    manufacturerName?: string;
    downloadFiles?: Attachments[];
    images?: Images[];
    publishedAt?: string;
    CommonModel?: string;
    sku?: string;
    weightUnit?: string;
    type?: string;
    isDownloadable?: boolean;
    status?: EntityLifecycleStatus;
    title?: string;
    categories?: string[];
    metaDescription?: string;
    slug?: string;
    modifyToken?: string;
    updatedAt?: string;
    customFields?: CustomAttributes[];
    reference?: Entity;
    tags?: string[];
    brand?: Brands;
    accountIds?: KeyValues[];
    localizations?: Localizations[];
    availableForSale?: boolean;
    id?: string;
    inventoryQuantity?: number;
    metaTitle?: string;
    relatedProducts?: string[];
    skuValidation?: SkuValidation;
    options?: ProductOptions[];
    taxes?: Taxes[];
    code?: string }
export interface Orders { shippingCost?: number;
    reference?: Entity;
    tax?: number;
    tip?: number;
    subTotal?: number;
    CommonModel?: string;
    status?: OrderStatus;
    createdAt?: string;
    shippingId?: string;
    currency?: Currency;
    paymentStatus?: PaymentStatus;
    paymentMethods?: string[];
    shippingAddress?: Addresses;
    shippingMethod?: string;
    billingAddress?: Addresses;
    customerId?: string;
    total?: number;
    orderNumber?: string;
    discounts?: Discounts[];
    trackingInfo?: string;
    updatedAt?: string;
    id?: string;
    storeLocationId?: string;
    items?: Items[];
    tags?: string[];
    taxes?: Taxes[];
    modifyToken?: string;
    note?: string }
export interface Opportunities { id?: string;
    leadId?: string;
    lostReason?: string;
    companyId?: string;
    contacts?: Contacts[];
    entity?: Entity;
    isWon?: boolean;
    modifyToken?: string;
    nextStep?: string;
    leadSource?: string;
    stage?: string;
    tags?: string[];
    title?: string;
    attachments?: Attachments[];
    updatedAt?: string;
    campaign?: Campaigns;
    amount?: number;
    createdAt?: string;
    companyName?: string;
    closeDate?: string;
    notes?: string[];
    currency?: Currency;
    owner?: Users;
    type?: string;
    isClosed?: boolean;
    probability?: number;
    customFields?: CustomAttributes[];
    description?: string;
    CommonModel?: string }
export interface PaymentMethods { details?: string;
    isDefault?: boolean;
    id?: string;
    CommonModel?: string;
    type?: PaymentMethod }
export interface SSO { refreshToken?: string;
    expiryDate?: string;
    tokenType?: string;
    createdAt?: string;
    provider?: IdentityProvider;
    scopes?: string[];
    active?: boolean;
    expiresIn?: number;
    deleted?: boolean;
    providerUserId?: string;
    accessToken?: string;
    updatedAt?: string;
    CommonModel?: string;
    profileUrl?: string }
export interface Preferences { language?: string;
    timeZone?: string;
    currency?: Currency;
    communications?: CommunicationMethod;
    CommonModel?: string;
    id?: string }
export interface Users { updatedAt?: string;
    sso?: SSO[];
    lastLogin?: string;
    phoneNumber?: string;
    preferences?: Preferences;
    socialProfiles?: SocialProfiles[];
    addresses?: Addresses[];
    username?: string;
    gender?: Gender;
    id?: string;
    password?: string;
    profilePicture?: Images;
    lastName?: string;
    CommonModel?: string;
    coverPhoto?: Images;
    dateOfBirth?: string;
    createdAt?: string;
    roles?: Roles[];
    bio?: string;
    website?: string;
    middleName?: string;
    isActive?: boolean;
    status?: UserStatus;
    paymentMethods?: PaymentMethods;
    modifyToken?: string;
    firstName?: string;
    email?: string }
export interface Categories { id?: string;
    createdAt?: string;
    tags?: string[];
    updatedAt?: string;
    modifyToken?: string;
    name?: string;
    parentId?: string;
    CommonModel?: string;
    image?: string }
export interface Notes { sharedWith?: Users[];
    author?: Users;
    color?: string;
    reminder?: string;
    createdAt?: string;
    updatedAt?: string;
    attachments?: Attachments[];
    id?: string;
    modifyToken?: string;
    content?: string;
    visibility?: ContentVisibility;
    CommonModel?: string;
    priority?: PriorityLevel;
    tags?: string[];
    lastAccessed?: string;
    title?: string;
    metadata?: string[] }
export interface LeadSource { CommonModel?: string;
    sourceId?: string;
    sourceName?: string;
    details?: string }
export interface TransactionDetails { amount?: number;
    transactionId?: string;
    CommonModel?: string;
    status?: string }
export interface Leads { middleName?: string;
    addresses?: Addresses[];
    companyId?: string;
    defaultEmail?: string;
    firstName?: string;
    defaultPhone?: string;
    companyName?: string;
    preferredContactMethod?: CommunicationMethod;
    emails?: Emails[];
    annualRevenue?: number;
    lastName?: string;
    updatedAt?: string;
    leadStatus?: LeadLifecycleStatus;
    createdAt?: string;
    name?: string;
    customFields?: CustomAttributes[];
    id?: string;
    website?: string;
    leadSource?: LeadSource;
    CommonModel?: string;
    jobTitle?: string;
    industry?: string;
    phones?: Phones[];
    socialProfiles?: SocialProfiles[];
    modifyToken?: string;
    entity?: Entity;
    opportunities?: Opportunities[];
    notes?: Notes[];
    numberOfEmployees?: number }
export interface FulfillmentReceipts { transactionDetails?: TransactionDetails;
    updatedAt?: string;
    deleted?: boolean;
    authorization?: string;
    fulfillmentId?: string;
    customerInfo?: Customers;
    paymentMethod?: PaymentMethod;
    id?: string;
    createdAt?: string;
    testCase?: boolean;
    CommonModel?: string;
    amount?: number;
    status?: OrderStatus;
    currency?: Currency;
    active?: boolean }
export interface FulfillmentItems { orderId?: string;
    customAttributes?: CustomAttributes;
    quantity?: number;
    productId?: string;
    price?: number;
    description?: string;
    weightUnit?: string;
    weight?: number;
    dimensions?: Dimensions;
    id?: string;
    active?: boolean;
    requiresShipping?: boolean;
    CommonModel?: string;
    variantTitle?: string;
    imageUrl?: string;
    createdAt?: string;
    sku?: string;
    updatedAt?: string;
    title?: string;
    deleted?: boolean;
    variantId?: string;
    taxable?: boolean;
    status?: OrderStatus;
    fulfillmentId?: string }
export interface Fulfillments { currency?: Currency;
    id?: string;
    expectedDelivery?: string;
    carrier?: string;
    items?: FulfillmentItems[];
    notes?: string;
    totalPrice?: number;
    lineItems?: Items[];
    createdAt?: string;
    receipt?: FulfillmentReceipts;
    shipmentDate?: string;
    service?: string;
    CommonModel?: string;
    metadata?: Metadata;
    orderId?: string;
    updatedAt?: string;
    trackingUrls?: string[];
    address?: Addresses;
    trackingNumber?: string;
    status?: FulfillmentStatus }
export interface CustomAttributes { CommonModel?: string;
    fieldName?: string;
    id?: string;
    fieldValue?: string;
    fieldType?: DataType }
export interface Companies { numberOfEmployees?: number;
    logo?: string;
    domain?: string;
    industry?: string;
    website?: string;
    stockSymbol?: string;
    reference?: Entity;
    type?: string;
    incorporationDate?: string;
    defaultEmail?: string;
    taxId?: string;
    id?: string;
    companyNumber?: string;
    name?: string;
    address?: Addresses;
    modifyToken?: string;
    dunsNumber?: string;
    updatedAt?: string;
    defaultPhone?: string;
    incorporationCountry?: string;
    emails?: Emails[];
    CommonModel?: string;
    foundedDate?: string;
    description?: string;
    additionalContacts?: Contacts[];
    tags?: string[];
    phones?: Phones[];
    socialProfiles?: SocialProfiles[];
    customFields?: CustomAttributes[];
    revenue?: number;
    legalName?: string;
    regulatoryStatus?: string;
    revenueCurrency?: string;
    parentCompanyId?: string;
    createdAt?: string }
export interface Localizations { locale?: string;
    description?: string;
    title?: string;
    metaDescription?: string;
    metaTitle?: string;
    CommonModel?: string }
export interface KeyValues { CommonModel?: string;
    key?: string;
    value?: string }
export interface SocialProfiles { type?: SocialPlatform;
    email?: string;
    additionalInfo?: Metadata;
    avatarUrl?: string;
    createdAt?: string;
    deleted?: boolean;
    updatedAt?: string;
    active?: boolean;
    displayName?: string;
    username?: string;
    url?: string;
    CommonModel?: string }
export interface Customers { updatedAt?: string;
    socialProfiles?: SocialProfiles[];
    id?: string;
    email?: string;
    firstName?: string;
    emails?: Emails[];
    customerType?: CustomerType;
    preferredContactMethod?: CommunicationMethod;
    phones?: Phones[];
    metadata?: string;
    title?: string;
    jobTitle?: string;
    reference?: Entity;
    defaultAddress?: Addresses;
    customerNumber?: string;
    customerSegment?: string;
    fullName?: string;
    addresses?: Addresses[];
    modifyToken?: string;
    currency?: Currency;
    tags?: string[];
    CommonModel?: string;
    lastName?: string;
    notes?: string;
    middleName?: string;
    companyId?: string;
    createdAt?: string;
    company?: string;
    status?: CustomerStatus;
    phoneNumber?: string;
    dateOfBirth?: string;
    loyaltyProgramMembership?: string;
    customFields?: CustomAttributes[];
    source?: string }
export interface TaxLines { title?: string;
    taxCode?: string;
    updatedAt?: string;
    deleted?: boolean;
    CommonModel?: string;
    isCompound?: boolean;
    isNonRecoverable?: boolean;
    price?: number;
    isInclusive?: boolean;
    id?: string;
    active?: boolean;
    rate?: number;
    name?: string;
    metadata?: Metadata;
    createdAt?: string }
export interface Images { deleted?: boolean;
    title?: string;
    mimeType?: ImageMimeType;
    id?: string;
    type?: ImageType;
    createdAt?: string;
    altText?: string;
    width?: number;
    caption?: string;
    CommonModel?: string;
    active?: boolean;
    height?: number;
    thumbnailSrc?: string;
    data?: string;
    tags?: string[];
    updatedAt?: string;
    src?: string }
export interface GiftCards { status?: LifecycleStatus;
    cardNumber?: string;
    issuedBy?: string;
    createdAt?: string;
    deleted?: boolean;
    expirationDate?: string;
    CommonModel?: string;
    id?: string;
    balance?: number;
    purchasedBy?: string;
    amountUsed?: number;
    metadata?: string;
    updatedAt?: string;
    currency?: Currency;
    active?: boolean;
    associatedUser?: Users }
export interface Promotions { active?: boolean;
    startDate?: string;
    endDate?: string;
    minimumPurchaseAmount?: number;
    eligibleItems?: string[];
    discountValue?: number;
    type?: PromotionType;
    discountType?: DiscountType;
    limitPerCustomer?: number;
    termsAndConditions?: string;
    updatedAt?: string;
    currency?: Currency;
    usageLimit?: number;
    createdAt?: string;
    CommonModel?: string;
    customerEligibility?: CustomerEligibilityStatus;
    deleted?: boolean;
    description?: string;
    code?: string }
export interface PaymentDetails { createdAt?: string;
    amount?: number;
    billingAddress?: Addresses;
    transactionId?: string;
    active?: boolean;
    paymentGateway?: string;
    CommonModel?: string;
    currency?: Currency;
    status?: string;
    updatedAt?: string;
    deleted?: boolean;
    method?: string;
    refunded?: boolean }
export interface PerformanceMetrics { spend?: number;
    CommonModel?: string;
    conversions?: number;
    returnOnInvestment?: number;
    costPerConversion?: number;
    conversionRate?: number;
    clicks?: number;
    impressions?: number;
    costPerClick?: number }
export interface ShippingDetails { price?: number;
    createdAt?: string;
    active?: boolean;
    deleted?: boolean;
    insurance?: boolean;
    updatedAt?: string;
    estimatedDelivery?: string;
    trackingNumber?: string;
    method?: string;
    signatureRequired?: boolean;
    CommonModel?: string;
    provider?: string;
    address?: Addresses }
export interface Items { CommonModel?: string;
    quantity?: number;
    accountName?: string;
    originalPrice?: number;
    discount?: number;
    weight?: number;
    taxable?: boolean;
    productId?: string;
    linePrice?: number;
    title?: string;
    modifiers?: Modifiers[];
    parentId?: string;
    currency?: Currency;
    shippingId?: string;
    discountLines?: Discounts[];
    image?: Images;
    requiresShipping?: boolean;
    active?: boolean;
    updatedAt?: string;
    description?: string;
    deleted?: boolean;
    variantId?: string;
    price?: number;
    id?: string;
    tax?: number;
    sku?: string;
    discountedPrice?: number;
    fulfillableQuantity?: number;
    createdAt?: string;
    weightUnit?: string;
    taxLines?: TaxLines[];
    accountId?: string;
    variantTitle?: string }
export interface Carts { token?: string;
    itemCount?: number;
    items?: Items[];
    giftCards?: GiftCards[];
    messages?: string[];
    CommonModel?: string;
    updatedAt?: string;
    attributes?: string[];
    createdAt?: string;
    paymentDetails?: PaymentDetails;
    version?: string;
    totalWeight?: number;
    state?: OrderStatus;
    note?: string;
    currency?: Currency;
    promotions?: Promotions[];
    shippingDetails?: ShippingDetails;
    discountCodes?: string[];
    id?: string;
    totalPrice?: number;
    originalTotalPrice?: number;
    buyerIdentity?: Customers }
export interface Campaigns { deleted?: boolean;
    updatedAt?: string;
    targetAudience?: string;
    CommonModel?: string;
    id?: string;
    startDate?: string;
    endDate?: string;
    channels?: string[];
    budget?: number;
    performanceMetrics?: PerformanceMetrics;
    tags?: string[];
    createdAt?: string;
    active?: boolean;
    status?: CampaignStatus;
    name?: string;
    type?: CampaignType;
    creativeAssets?: Attachments }
export interface Attachments { createdAt?: string;
    CommonModel?: string;
    content?: string;
    fileName?: string;
    id?: string;
    url?: string;
    thumbnailUrl?: string;
    fileSize?: number;
    fileType?: string;
    previewUrl?: string;
    updatedAt?: string;
    metadata?: Metadata;
    associatedWith?: Entity;
    permissions?: Permissions }
export interface BusinessHours { dayOfWeek?: DayOfWeek;
    id?: string;
    CommonModel?: string;
    storeID?: string;
    deleted?: boolean;
    closed?: boolean;
    createdAt?: string;
    active?: boolean;
    timeZone?: string;
    sessions?: TimeSession[];
    updatedAt?: string }
export interface Brands { website?: string;
    customFields?: CustomAttributes[];
    CommonModel?: string;
    description?: string;
    createdAt?: string;
    id?: string;
    name?: string;
    country?: string;
    updatedAt?: string;
    established?: string;
    logo?: string;
    status?: ItemEntityStatus }
export interface GeoCoordinates { CommonModel?: string;
    accuracy?: number;
    heading?: number;
    longitude?: number;
    speed?: number;
    timestamp?: string;
    latitude?: number;
    altitude?: number;
    altitudeAccuracy?: number }
export interface Addresses { email?: string;
    country?: string;
    street?: string;
    region?: string;
    accountId?: string;
    geoLocation?: GeoCoordinates;
    postalCode?: string;
    companyName?: string;
    CommonModel?: string;
    contactId?: string;
    name?: string;
    postalCodeExtension?: string;
    type?: ContactAddressType;
    customFields?: CustomAttributes[];
    firstName?: string;
    city?: string;
    id?: string;
    countryCode?: string;
    addressLine2?: string;
    lastName?: string;
    phone?: string;
    subdivisionCode?: string;
    middleName?: string;
    province?: string }
export interface CRMAccounts { billingAddress?: Addresses;
    createdAt?: string;
    rating?: AccountEngagementLevel;
    website?: string;
    CommonModel?: string;
    email?: string;
    accountType?: StakeholderType;
    annualRevenue?: number;
    ownerId?: string;
    name?: string;
    customFields?: CustomAttributes[];
    id?: string;
    industry?: string;
    phone?: string;
    shippingAddress?: Addresses;
    tags?: string[];
    updatedAt?: string;
    numberOfEmployees?: number;
    status?: AccountStatus }
export const enum TargetType { ShippingLine = 'shipping-line', LineItem = 'line-item' }
export const enum TargetSelection { All = 'all', Entitled = 'entitled' }
export const enum MinimumRequirements { MinimumQuantityOfItems = 'minimum-quantity-of-items', MinimumPurchaseAmount = 'minimum-purchase-amount', None = 'none' }
export const enum CustomerSelection { All = 'all', Prerequisite = 'prerequisite' }
export const enum CustomerEligibility { SpecificCustomerGroups = 'specific-customer-groups', SpecificCustomers = 'specific-customers', All = 'all' }
export const enum Status { Scheduled = 'scheduled', Expired = 'expired', Active = 'active' }
export const enum AllocationMethod { Each = 'each', Across = 'across' }
export const enum Format { Json = 'json', Xml = 'xml' }
export const enum AppliesTo { SpecificCategories = 'specific-categories', AllItems = 'all-items', SpecificItems = 'specific-items' }
export const enum TransactionMethod { Mobile = 'mobile', Online = 'online', Mail = 'mail', BankBranch = 'bank-branch', Telephone = 'telephone', Atm = 'atm' }
export const enum AccountType { OtherExpenseTaxRoundoffGainOrLoss = 'other-expense::tax-roundoff-gain-or-loss', OtherCurrentLiabilityStateLocalIncomeTaxPayable = 'other-current-liability::state-local-income-tax-payable', OtherIncome = 'other-income', RevenueOtherCurrentOperatingIncome = 'revenue::other-current-operating-income', EquityAccumulatedAdjustment = 'equity::accumulated-adjustment', AssetCapitalWip = 'asset::capital-wip', ExpenseIncomeTaxExpense = 'expense::income-tax-expense', EquityDividendDisbursed = 'equity::dividend-disbursed', ExpenseCommissionsAndFees = 'expense::commissions-and-fees', ExpenseShippingAndDeliveryExpense = 'expense::shipping-and-delivery-expense', OtherExpenseDepreciation = 'other-expense::depreciation', OtherIncomeOtherInvestmentIncome = 'other-income::other-investment-income', AssetOtherLongTermLoansAndAdvances = 'asset::other-long-term-loans-and-advances', AssetGoodwill = 'asset::goodwill', OtherCurrentLiabilityLineOfCredit = 'other-current-liability::line-of-credit', OtherCurrentLiabilityDirectDepositPayable = 'other-current-liability::direct-deposit-payable', RevenueServiceFeeIncome = 'revenue::service-fee-income', OtherIncomeTaxExemptInterest = 'other-income::tax-exempt-interest', EquityShareCapital = 'equity::share-capital', OtherExpenseOtherHomeOfficeExpenses = 'other-expense::other-home-office-expenses', AssetAccumulatedDepletion = 'asset::accumulated-depletion', EquityPaidInCapitalOrSurplus = 'equity::paid-in-capital-or-surplus', AssetIntangibleAssets = 'asset::intangible-assets', AssetParticipatingInterests = 'asset::participating-interests', ExpenseOtherRentalCosts = 'expense::other-rental-costs', ExpenseTravelMeals = 'expense::travel-meals', ExpenseLegalProfessionalFees = 'expense::legal-professional-fees', OtherIncomeGainLossOnSaleOfFixedAssets = 'other-income::gain-loss-on-sale-of-fixed-assets', AssetAllowanceForBadDebts = 'asset::allowance-for-bad-debts', EquityCapitalReserves = 'equity::capital-reserves', OtherCurrentLiabilityCurrentLiabilities = 'other-current-liability::current-liabilities', AssetExpenditureAuthorisationsAndLettersOfCredit = 'asset::expenditure-authorisations-and-letters-of-credit', OtherCurrentLiabilityGlobalTaxSuspense = 'other-current-liability::global-tax-suspense', Liability = 'liability', OtherExpenseVehicleLoan = 'other-expense::vehicle-loan', LiabilityDeferredTaxLiabilities = 'liability::deferred-tax-liabilities', LiabilityLongTermBorrowings = 'liability::long-term-borrowings', OtherExpenseRepairsAndMaintenance = 'other-expense::repairs-and-maintenance', AssetPrepaymentsAndAccruedIncome = 'asset::prepayments-and-accrued-income', EquityEstimatedTaxes = 'equity::estimated-taxes', AssetFixedAssetOtherToolsEquipment = 'asset::fixed-asset-other-tools-equipment', AssetOtherCurrentAsset = 'asset::other-current-asset', OtherExpenseExchangeGainOrLoss = 'other-expense::exchange-gain-or-loss', OtherCurrentLiabilitySocialSecurityAgencies = 'other-current-liability::social-security-agencies', EquityPartnerDistributions = 'equity::partner-distributions', RevenueSalesRetail = 'revenue::sales-retail', LiabilityOtherLongTermProvisions = 'liability::other-long-term-provisions', AssetInvestmentOther = 'asset::investment-other', ExpenseExternalServices = 'expense::external-services', AssetOtherAsset = 'asset::other-asset', ExpenseInsurance = 'expense::insurance', OtherExpenseExceptionalItems = 'other-expense::exceptional-items', CostOfGoodsSoldCostOfLaborCos = 'cost-of-goods-sold::cost-of-labor-cos', ExpenseRepairMaintenance = 'expense::repair-maintenance', AssetBalWithGovtAuthorities = 'asset::bal-with-govt-authorities', OtherIncomeOtherOperatingIncome = 'other-income::other-operating-income', ExpenseRentOrLeaseOfBuildings = 'expense::rent-or-lease-of-buildings', AssetLoansToOthers = 'asset::loans-to-others', AssetFixedAssetFurniture = 'asset::fixed-asset-furniture', EquityRetainedEarnings = 'equity::retained-earnings', OtherCurrentLiabilityDividendsPayable = 'other-current-liability::dividends-payable', ExpensePayrollExpenses = 'expense::payroll-expenses', OtherIncomeLossOnDisposalOfAssets = 'other-income::loss-on-disposal-of-assets', EquityTreasuryStock = 'equity::treasury-stock', OtherCurrentLiabilityPayrollClearing = 'other-current-liability::payroll-clearing', RevenueSalesOfProductIncome = 'revenue::sales-of-product-income', AssetLeaseholdImprovements = 'asset::leasehold-improvements', AssetAssetsAvailableForSale = 'asset::assets-available-for-sale', AssetInvestmentMortgageRealEstateLoans = 'asset::investment-mortgage-real-estate-loans', AssetProvisionsFixedAssets = 'asset::provisions-fixed-assets', EquityPartnerContributions = 'equity::partner-contributions', LiabilityAccrualsAndDeferredIncome = 'liability::accruals-and-deferred-income', ExpenseOtherExternalServices = 'expense::other-external-services', EquityCommonStock = 'equity::common-stock', ExpenseLossOnDiscontinuedOperationsNetOfTax = 'expense::loss-on-discontinued-operations-net-of-tax', CostOfGoodsSoldOtherCostsOfServiceCos = 'cost-of-goods-sold::other-costs-of-service-cos', OtherExpenseMatCredit = 'other-expense::mat-credit', LiabilityBankLoans = 'liability::bank-loans', OtherIncomeDividendIncome = 'other-income::dividend-income', OtherExpenseVehicleLoanInterest = 'other-expense::vehicle-loan-interest', LiabilityShareholderNotesPayable = 'liability::shareholder-notes-payable', ExpensePromotionalMeals = 'expense::promotional-meals', AssetUndepositedFunds = 'asset::undeposited-funds', AssetInvestmentUsGovernmentObligations = 'asset::investment-us-government-obligations', AssetDeferredTax = 'asset::deferred-tax', RevenueIncome = 'revenue::income', AssetLandAsset = 'asset::land-asset', OtherCurrentLiabilitySundryDebtorsAndCreditors = 'other-current-liability::sundry-debtors-and-creditors', OtherExpenseHomeOffice = 'other-expense::home-office', ExpenseTaxesPaid = 'expense::taxes-paid', OtherCurrentLiabilityPayrollTaxPayable = 'other-current-liability::payroll-tax-payable', ExpenseOtherBusinessExpenses = 'expense::other-business-expenses', LiabilityStaffAndRelatedLongTermLiabilityAccounts = 'liability::staff-and-related-long-term-liability-accounts', ExpenseAmortizationExpense = 'expense::amortization-expense', AssetInventory = 'asset::inventory', AssetInvestmentTaxExemptSecurities = 'asset::investment-tax-exempt-securities', AssetTradeAndOtherReceivables = 'asset::trade-and-other-receivables', ExpenseUnappliedCashBillPaymentExpense = 'expense::unapplied-cash-bill-payment-expense', RevenueRevenueGeneral = 'revenue::revenue-general', AssetOtherCurrentAssets = 'asset::other-current-assets', OtherCurrentLiabilityGlobalTaxPayable = 'other-current-liability::global-tax-payable', RevenueCashReceiptIncome = 'revenue::cash-receipt-income', EquityOwnersEquity = 'equity::owners-equity', ExpenseEntertainment = 'expense::entertainment', AssetLoansToStockholders = 'asset::loans-to-stockholders', RevenueOtherPrimaryIncome = 'revenue::other-primary-income', RevenueSalesWholesale = 'revenue::sales-wholesale', Asset = 'asset', AssetDevelopmentCosts = 'asset::development-costs', LiabilityObligationsUnderFinanceLeases = 'liability::obligations-under-finance-leases', ExpenseInterestPaid = 'expense::interest-paid', OtherCurrentLiabilityRentsInTrustLiability = 'other-current-liability::rents-in-trust-liability', EquityPartnersEquity = 'equity::partners-equity', EquityPreferredStock = 'equity::preferred-stock', OtherCurrentLiabilityFederalIncomeTaxPayable = 'other-current-liability::federal-income-tax-payable', AssetOtherLongTermInvestments = 'asset::other-long-term-investments', AssetInvestments = 'asset::investments', RevenueNonProfitIncome = 'revenue::non-profit-income', OtherIncomeInterestEarned = 'other-income::interest-earned', AssetBuildings = 'asset::buildings', AssetOtherConsumables = 'asset::other-consumables', ExpenseBorrowingCost = 'expense::borrowing-cost', CostOfGoodsSoldSuppliesMaterialsCogs = 'cost-of-goods-sold::supplies-materials-cogs', AssetInternalTransfers = 'asset::internal-transfers', OtherCurrentLiabilityShortTermBorrowings = 'other-current-liability::short-term-borrowings', AssetCashAndCashEquivalents = 'asset::cash-and-cash-equivalents', ExpenseExtraordinaryCharges = 'expense::extraordinary-charges', AssetFixedAssetCopiers = 'asset::fixed-asset-copiers', ExpensePurchasesRebates = 'expense::purchases-rebates', OtherExpenseVehicleInsurance = 'other-expense::vehicle-insurance', OtherCurrentLiabilitySalesTaxPayable = 'other-current-liability::sales-tax-payable', AssetLeaseBuyout = 'asset::lease-buyout', EquityEquityInEarningsOfSubsidiuaries = 'equity::equity-in-earnings-of-subsidiuaries', CostOfGoodsSoldEquipmentRentalCos = 'cost-of-goods-sold::equipment-rental-cos', ExpenseDuesSubscriptions = 'expense::dues-subscriptions', OtherExpensePenaltiesSettlements = 'other-expense::penalties-settlements', OtherCurrentLiabilityPrepaidExpensesPayable = 'other-current-liability::prepaid-expenses-payable', LiabilityLongTermDebit = 'liability::long-term-debit', OtherCurrentLiabilityOtherCurrentLiabilities = 'other-current-liability::other-current-liabilities', OtherExpenseVehicleRepairs = 'other-expense::vehicle-repairs', OtherExpenseDeferredTaxExpense = 'other-expense::deferred-tax-expense', RevenueDiscountsRefundsGiven = 'revenue::discounts-refunds-given', Equity = 'equity', LiabilityLongTermEmployeeBenefitObligations = 'liability::long-term-employee-benefit-obligations', LiabilityOutstandingDuesMicroSmallEnterprise = 'liability::outstanding-dues-micro-small-enterprise', ExpenseEquipmentRental = 'expense::equipment-rental', EquityPersonalIncome = 'equity::personal-income', EquityFunds = 'equity::funds', ExpenseTravel = 'expense::travel', EquityOtherFreeReserves = 'equity::other-free-reserves', OtherExpenseDepletion = 'other-expense::depletion', ExpenseUtilities = 'expense::utilities', AccountsReceivable = 'accounts-receivable', AssetLoansToOfficers = 'asset::loans-to-officers', AssetLongTermInvestments = 'asset::long-term-investments', AssetProvisionsNonCurrentAssets = 'asset::provisions-non-current-assets', EquityOpeningBalanceEquity = 'equity::opening-balance-equity', OtherCurrentLiabilityInterestPayables = 'other-current-liability::interest-payables', AssetVehicles = 'asset::vehicles', ExpenseStaffCosts = 'expense::staff-costs', OtherCurrentLiabilityCurrentPortionOfObligationsUnderFinanceLeases = 'other-current-liability::current-portion-of-obligations-under-finance-leases', OtherCurrentLiabilityStaffAndRelatedLiabilityAccounts = 'other-current-liability::staff-and-related-liability-accounts', OtherCurrentLiabilityTradeAndOtherPayables = 'other-current-liability::trade-and-other-payables', ExpenseBadDebts = 'expense::bad-debts', AssetGlobalTaxRefund = 'asset::global-tax-refund', AssetOrganizationalCosts = 'asset::organizational-costs', OtherCurrentLiabilityCurrentPortionEmployeeBenefitsObligations = 'other-current-liability::current-portion-employee-benefits-obligations', AssetAssetsHeldForSale = 'asset::assets-held-for-sale', LiabilityGovernmentAndOtherPublicAuthorities = 'liability::government-and-other-public-authorities', OtherIncomeGainLossOnSaleOfInvestments = 'other-income::gain-loss-on-sale-of-investments', OtherExpenseVehicle = 'other-expense::vehicle', Expense = 'expense', AssetAssetsInCourseOfConstruction = 'asset::assets-in-course-of-construction', AssetChecking = 'asset::checking', ExpenseCharitableContributions = 'expense::charitable-contributions', ExpenseAdvertisingPromotional = 'expense::advertising-promotional', OtherExpenseOtherMiscellaneousExpense = 'other-expense::other-miscellaneous-expense', RevenueUnappliedCashPaymentIncome = 'revenue::unapplied-cash-payment-income', ExpenseEntertainmentMeals = 'expense::entertainment-meals', Income = 'income', OtherExpenseRentAndLease = 'other-expense::rent-and-lease', OtherExpenseExtraordinaryItems = 'other-expense::extraordinary-items', LiabilityLiabilitiesRelatedToAssetsHeldForSale = 'liability::liabilities-related-to-assets-held-for-sale', AssetGlobalTaxDeferred = 'asset::global-tax-deferred', ExpenseOtherCurrentOperatingCharges = 'expense::other-current-operating-charges', ExpenseProjectStudiesSurveysAssessments = 'expense::project-studies-surveys-assessments', AssetShortTermInvestmentsInRelatedParties = 'asset::short-term-investments-in-related-parties', AssetMoneyMarket = 'asset::money-market', AssetSavings = 'asset::savings', AssetFixedAssetPhotoVideo = 'asset::fixed-asset-photo-video', AssetIntangibleAssetsUnderDevelopment = 'asset::intangible-assets-under-development', AssetTrustAccounts = 'asset::trust-accounts', EquityInvestmentGrants = 'equity::investment-grants', AssetPrepaidExpenses = 'asset::prepaid-expenses', EquityPersonalExpense = 'equity::personal-expense', AssetAccumulatedDepreciation = 'asset::accumulated-depreciation', OtherCurrentLiabilityAccruedLiabilities = 'other-current-liability::accrued-liabilities', OtherCurrentLiabilityDutiesAndTaxes = 'other-current-liability::duties-and-taxes', EquityAccumulatedOtherComprehensiveIncome = 'equity::accumulated-other-comprehensive-income', AssetSecurityDeposits = 'asset::security-deposits', OtherCurrentLiabilityProvisionsCurrentLiabilities = 'other-current-liability::provisions-current-liabilities', OtherExpenseMortgageInterest = 'other-expense::mortgage-interest', AssetLand = 'asset::land', OtherExpenseVehicleRegistration = 'other-expense::vehicle-registration', AssetProvisionsCurrentAssets = 'asset::provisions-current-assets', CostOfGoodsSoldCostOfSales = 'cost-of-goods-sold::cost-of-sales', ExpenseDistributionCosts = 'expense::distribution-costs', ExpenseOtherSellingExpenses = 'expense::other-selling-expenses', AssetBank = 'asset::bank', OtherCurrentLiability = 'other-current-liability', LiabilityAccountsPayable = 'liability::accounts-payable', ExpenseSuppliesMaterials = 'expense::supplies-materials', AssetShortTermLoansAndAdvancesToRelatedParties = 'asset::short-term-loans-and-advances-to-related-parties', CostOfGoodsSoldFreightAndDeliveryCost = 'cost-of-goods-sold::freight-and-delivery-cost', ExpenseGlobalTaxExpense = 'expense::global-tax-expense', OtherExpenseOtherVehicleExpenses = 'other-expense::other-vehicle-expenses', OtherExpenseUtilities = 'other-expense::utilities', AssetMachineryAndEquipment = 'asset::machinery-and-equipment', AssetCalledUpShareCapitalNotPaid = 'asset::called-up-share-capital-not-paid', OtherCurrentLiabilityInsurancePayable = 'other-current-liability::insurance-payable', EquityHealthcare = 'equity::healthcare', AssetAccumulatedAmortizationOfOtherAssets = 'asset::accumulated-amortization-of-other-assets', OtherExpenseHomeOwnerRentalInsurance = 'other-expense::home-owner-rental-insurance', OtherExpensePriorPeriodItems = 'other-expense::prior-period-items', LiabilityProvisionsNonCurrentLiabilities = 'liability::provisions-non-current-liabilities', AssetLicenses = 'asset::licenses', AssetNonCurrentAssets = 'asset::non-current-assets', LiabilityLongTermLiability = 'liability::long-term-liability', OtherExpenseParkingAndTolls = 'other-expense::parking-and-tolls', AssetAvailableForSaleFinancialAssets = 'asset::available-for-sale-financial-assets', AssetOtherEarMarkedBankAccounts = 'asset::other-ear-marked-bank-accounts', ExpensePenaltiesSettlements = 'expense::penalties-settlements', AssetOtherFixedAssets = 'asset::other-fixed-assets', AssetFixedAssetComputers = 'asset::fixed-asset-computers', CostOfGoodsSoldShippingFreightDeliveryCos = 'cost-of-goods-sold::shipping-freight-delivery-cos', AssetFixedAsset = 'asset::fixed-asset', OtherExpenseWashAndRoadServices = 'other-expense::wash-and-road-services', RevenueSavingsByTaxScheme = 'revenue::savings-by-tax-scheme', OtherExpenseGasAndFuel = 'other-expense::gas-and-fuel', ExpenseFinanceCosts = 'expense::finance-costs', OtherCurrentLiabilityLoanPayable = 'other-current-liability::loan-payable', AssetLongTermLoansAndAdvancesToRelatedParties = 'asset::long-term-loans-and-advances-to-related-parties', LiabilityAccruedVacationPayable = 'liability::accrued-vacation-payable', RevenueOwnWorkCapitalized = 'revenue::own-work-capitalized', LiabilityOutstandingDuesOtherThanMicroSmallEnterprise = 'liability::outstanding-dues-other-than-micro-small-enterprise', OtherExpenseIncomeTaxOtherExpense = 'other-expense::income-tax-other-expense', OtherIncomeUnrealisedLossOnSecuritiesNetOfTax = 'other-income::unrealised-loss-on-securities-net-of-tax', LiabilityProvisionForLiabilities = 'liability::provision-for-liabilities', AssetRentsHeldInTrust = 'asset::rents-held-in-trust', OtherCurrentLiabilityProvisionForWarrantyObligations = 'other-current-liability::provision-for-warranty-obligations', RevenueOperatingGrants = 'revenue::operating-grants', AssetFixedAssetSoftware = 'asset::fixed-asset-software', OtherCurrentLiabilityCurrentTaxLiability = 'other-current-liability::current-tax-liability', AssetCumulativeDepreciationOnIntangibleAssets = 'asset::cumulative-depreciation-on-intangible-assets', ExpenseAppropriationsToDepreciation = 'expense::appropriations-to-depreciation', CostOfGoodsSold = 'cost-of-goods-sold', LiabilityNotesPayable = 'liability::notes-payable', LiabilityOtherLongTermLiabilities = 'liability::other-long-term-liabilities', OtherCurrentLiabilityTrustAccountsLiabilities = 'other-current-liability::trust-accounts-liabilities', ExpenseBankCharges = 'expense::bank-charges', AssetOtherIntangibleAssets = 'asset::other-intangible-assets', EquityCalledUpShareCapital = 'equity::called-up-share-capital', ExpenseOtherMiscellaneousServiceCost = 'expense::other-miscellaneous-service-cost', AssetFixedAssetPhone = 'asset::fixed-asset-phone', EquityMoneyReceivedAgainstShareWarrants = 'equity::money-received-against-share-warrants', ExpenseOfficeGeneralAdministrativeExpenses = 'expense::office-general-administrative-expenses', AssetDepletableAssets = 'asset::depletable-assets', AssetCashOnHand = 'asset::cash-on-hand', EquityShareApplicationMoneyPendingAllotment = 'equity::share-application-money-pending-allotment', AssetOtherLongTermAssets = 'asset::other-long-term-assets', ExpenseTravelExpensesSellingExpense = 'expense::travel-expenses-selling-expense', LiabilityAccruedLongTermLiabilities = 'liability::accrued-long-term-liabilities', ExpenseSundry = 'expense::sundry', ExpenseOfficeExpenses = 'expense::office-expenses', LiabilityCreditCard = 'liability::credit-card', LiabilityGroupAndAssociates = 'liability::group-and-associates', OtherExpenseAmortization = 'other-expense::amortization', OtherExpenseVehicleLease = 'other-expense::vehicle-lease', AssetFurnitureAndFixtures = 'asset::furniture-and-fixtures', ExpenseAuto = 'expense::auto', ExpenseTravelExpensesGeneralAndAdminExpenses = 'expense::travel-expenses-general-and-admin-expenses', OtherExpense = 'other-expense', AssetEmployeeCashAdvances = 'asset::employee-cash-advances', LiabilityDebtsRelatedToParticipatingInterests = 'liability::debts-related-to-participating-interests', ExpenseShippingFreightDelivery = 'expense::shipping-freight-delivery', AssetRetainage = 'asset::retainage', ExpenseManagementCompensation = 'expense::management-compensation', OtherIncomeOtherMiscellaneousIncome = 'other-income::other-miscellaneous-income', ExpenseCostOfLabor = 'expense::cost-of-labor', AssetAccumulatedAmortization = 'asset::accumulated-amortization' }
export const enum SkuValidation { None = 'none', LocalUnique = 'local-unique', GlobalUnique = 'global-unique' }
export const enum Roles { User = 'user', Admin = 'admin', Moderator = 'moderator' }
export const enum ChannelAvailability { InApp = 'in-app', Online = 'online', InStore = 'in-store', AllChannels = 'all-channels' }
export const enum Gender { PreferNotToSay = 'prefer not to say', Male = 'male', Female = 'female', Other = 'other' }
export const enum Country { UnitedStates = 'united-states', Moldova = 'moldova', ElSalvador = 'el-salvador', TimorLeste = 'timor-leste', VaticanCity = 'vatican-city', Peru = 'peru', Paraguay = 'paraguay', Colombia = 'colombia', SriLanka = 'sri-lanka', Haiti = 'haiti', Palestine = 'palestine', Palau = 'palau', SaudiArabia = 'saudi-arabia', Bolivia = 'bolivia', Kyrgyzstan = 'kyrgyzstan', Morocco = 'morocco', Malta = 'malta', Tajikistan = 'tajikistan', Suriname = 'suriname', Cuba = 'cuba', Germany = 'germany', Croatia = 'croatia', Belize = 'belize', Ghana = 'ghana', India = 'india', Argentina = 'argentina', Russia = 'russia', Gambia = 'gambia', Singapore = 'singapore', Malaysia = 'malaysia', Honduras = 'honduras', Qatar = 'qatar', Kuwait = 'kuwait', Israel = 'israel', Samoa = 'samoa', Panama = 'panama', Brazil = 'brazil', CongoDemocraticRepublic = 'congo-democratic-republic', MarshallIslands = 'marshall-islands', Nigeria = 'nigeria', Portugal = 'portugal', Liechtenstein = 'liechtenstein', Mexico = 'mexico', Montenegro = 'montenegro', BosniaAndHerzegovina = 'bosnia-and-herzegovina', Chile = 'chile', CongoRepublic = 'congo-republic', CoteDIvoire = 'cote-d-ivoire', Ukraine = 'ukraine', Iran = 'iran', SouthSudan = 'south-sudan', Zambia = 'zambia', Djibouti = 'djibouti', CzechRepublic = 'czech-republic', Thailand = 'thailand', Gabon = 'gabon', Afghanistan = 'afghanistan', Uzbekistan = 'uzbekistan', China = 'china', Mauritania = 'mauritania', Mongolia = 'mongolia', Eritrea = 'eritrea', SaintVincentAndTheGrenadines = 'saint-vincent-and-the-grenadines', Slovenia = 'slovenia', Venezuela = 'venezuela', Australia = 'australia', SaintLucia = 'saint-lucia', Micronesia = 'micronesia', Sudan = 'sudan', NewZealand = 'new-zealand', Iceland = 'iceland', CentralAfricanRepublic = 'central-african-republic', Egypt = 'egypt', Kenya = 'kenya', Dominica = 'dominica', Seychelles = 'seychelles', Tonga = 'tonga', SaintKittsAndNevis = 'saint-kitts-and-nevis', Iraq = 'iraq', Lesotho = 'lesotho', EquatorialGuinea = 'equatorial-guinea', Hungary = 'hungary', Laos = 'laos', Lebanon = 'lebanon', SouthAfrica = 'south-africa', Madagascar = 'madagascar', Andorra = 'andorra', Slovakia = 'slovakia', Bulgaria = 'bulgaria', Namibia = 'namibia', Estonia = 'estonia', Jordan = 'jordan', Togo = 'togo', Turkmenistan = 'turkmenistan', Algeria = 'algeria', Kazakhstan = 'kazakhstan', Philippines = 'philippines', Barbados = 'barbados', Tuvalu = 'tuvalu', Vanuatu = 'vanuatu', SouthKorea = 'south-korea', SanMarino = 'san-marino', Guinea = 'guinea', Latvia = 'latvia', Senegal = 'senegal', Greece = 'greece', Mauritius = 'mauritius', Oman = 'oman', Nicaragua = 'nicaragua', Brunei = 'brunei', Belgium = 'belgium', Guyana = 'guyana', SolomonIslands = 'solomon-islands', Cameroon = 'cameroon', Pakistan = 'pakistan', Kiribati = 'kiribati', Turkey = 'turkey', Burundi = 'burundi', Azerbaijan = 'azerbaijan', Bahrain = 'bahrain', Bhutan = 'bhutan', Bahamas = 'bahamas', Ireland = 'ireland', Lithuania = 'lithuania', Tunisia = 'tunisia', UnitedArabEmirates = 'united-arab-emirates', Denmark = 'denmark', Indonesia = 'indonesia', Nauru = 'nauru', GuineaBissau = 'guinea-bissau', UnitedKingdom = 'united-kingdom', Uruguay = 'uruguay', Canada = 'canada', Sweden = 'sweden', Switzerland = 'switzerland', Luxembourg = 'luxembourg', Vietnam = 'vietnam', Finland = 'finland', Chad = 'chad', Japan = 'japan', Bangladesh = 'bangladesh', Benin = 'benin', Maldives = 'maldives', NorthKorea = 'north-korea', Guatemala = 'guatemala', Norway = 'norway', Georgia = 'georgia', Mali = 'mali', PapuaNewGuinea = 'papua-new-guinea', Libya = 'libya', Grenada = 'grenada', DominicanRepublic = 'dominican-republic', Serbia = 'serbia', BurkinaFaso = 'burkina-faso', Somalia = 'somalia', Yemen = 'yemen', France = 'france', CaboVerde = 'cabo-verde', Mozambique = 'mozambique', NorthMacedonia = 'north-macedonia', Armenia = 'armenia', CostaRica = 'costa-rica', Jamaica = 'jamaica', Poland = 'poland', Austria = 'austria', Romania = 'romania', Rwanda = 'rwanda', SaoTomeAndPrincipe = 'sao-tome-and-principe', Spain = 'spain', Tanzania = 'tanzania', Zimbabwe = 'zimbabwe', Ecuador = 'ecuador', Taiwan = 'taiwan', TrinidadAndTobago = 'trinidad-and-tobago', Cambodia = 'cambodia', Cyprus = 'cyprus', Botswana = 'botswana', Albania = 'albania', Fiji = 'fiji', Netherlands = 'netherlands', Uganda = 'uganda', Liberia = 'liberia', Monaco = 'monaco', Niger = 'niger', AntiguaAndBarbuda = 'antigua-and-barbuda', Comoros = 'comoros', Ethiopia = 'ethiopia', Malawi = 'malawi', Angola = 'angola', Eswatini = 'eswatini', Myanmar = 'myanmar', Belarus = 'belarus', Italy = 'italy', Nepal = 'nepal', SierraLeone = 'sierra-leone', Syria = 'syria' }
export const enum GlobalTaxType { Gst = 'gst', ExciseTax = 'excise-tax', SalesTax = 'sales-tax', CustomsDuty = 'customs-duty', PropertyTax = 'property-tax', Vat = 'vat', Other = 'other' }
export const enum IdentityProvider { Paypal = 'paypal', Other = 'other', Dribbble = 'dribbble', Snapchat = 'snapchat', Slack = 'slack', Instagram = 'instagram', Line = 'line', Tiktok = 'tiktok', Foursquare = 'foursquare', Vimeo = 'vimeo', Behance = 'behance', Telegram = 'telegram', Signal = 'signal', Flickr = 'flickr', Wechat = 'wechat', Facebook = 'facebook', Google = 'google', Microsoft = 'microsoft', Yahoo = 'yahoo', Whatsapp = 'whatsapp', Twitter = 'twitter', Qq = 'qq', Pinterest = 'pinterest', Apple = 'apple', Linkedin = 'linkedin', Github = 'github', Tumblr = 'tumblr', Amazon = 'amazon', Reddit = 'reddit', Discord = 'discord' }
export const enum AccountEngagementLevel { Cold = 'cold', Unknown = 'unknown', Warm = 'warm', Hot = 'hot' }
export const enum ReviewApprovalStatus { Approved = 'approved', Rejected = 'rejected', Revised = 'revised', Pending = 'pending', InReview = 'in-review' }
export const enum StakeholderType { Customer = 'customer', Investor = 'investor', Competitor = 'competitor', Partner = 'partner', Vendor = 'vendor', Other = 'other' }
export const enum AccountStatus { Suspended = 'suspended', Closed = 'closed', Inactive = 'inactive', Pending = 'pending', Active = 'active' }
export const enum CampaignStatus { Completed = 'completed', Planned = 'planned', Cancelled = 'cancelled', Scheduled = 'scheduled', Active = 'active', Draft = 'draft', Archived = 'archived', Paused = 'paused' }
export const enum CustomerType { Retail = 'retail', Online = 'online', B2b = 'b2b', B2c = 'b2c', Corporate = 'corporate', Wholesale = 'wholesale' }
export const enum MessageContentType { Audio = 'audio', Document = 'document', Image = 'image', Text = 'text', Contact = 'contact', Video = 'video', Sticker = 'sticker', File = 'file', Location = 'location', Link = 'link', Gif = 'gif', Html = 'html', Voice = 'voice' }
export const enum ReactionType { Like = 'like', Angry = 'angry', Sad = 'sad', Dislike = 'dislike', Love = 'love', Bookmark = 'bookmark', Interested = 'interested', Wow = 'wow', Laugh = 'laugh' }
export const enum SupportTicketPriority { High = 'high', Urgent = 'urgent', Low = 'low', Immediate = 'immediate', Medium = 'medium' }
export const enum IssueLifecycleStatus { Open = 'open', InProgress = 'in-progress', OnHold = 'on-hold', Resolved = 'resolved', Cancelled = 'cancelled', Closed = 'closed', Pending = 'pending' }
export const enum OrderStatus { Pending = 'pending', Processing = 'processing', Cancelled = 'cancelled', Shipped = 'shipped', Abandoned = 'abandoned', Delivered = 'delivered', Refunded = 'refunded', Confirmed = 'confirmed', OnHold = 'on-hold', Disputed = 'disputed', AwaitingPayment = 'awaiting-payment', Failed = 'failed', Returned = 'returned', Draft = 'draft', AwaitingShipment = 'awaiting-shipment', AwaitingPickup = 'awaiting-pickup', Completed = 'completed', PartiallyFulfilled = 'partially-fulfilled' }
export const enum DiscountType { VariableAmount = 'variable-amount', Percentage = 'percentage', VariablePercentage = 'variable-percentage', TieredDiscount = 'tiered-discount', BuyOneGetOne = 'buy-one-get-one', UnknownDiscount = 'unknown-discount', ConditionalDiscount = 'conditional-discount', FixedAmount = 'fixed-amount' }
export const enum FulfillmentStatus { InTransit = 'in-transit', Returned = 'returned', Pending = 'pending', Cancelled = 'cancelled', Delivered = 'delivered', Failure = 'failure' }
export const enum ProductAvailabilityStatus { OutOfStock = 'out-of-stock', InStock = 'in-stock', PreOrder = 'pre-order', BackOrder = 'back-order', Discontinued = 'discontinued' }
export const enum ExpenseApprovalStatus { Pending = 'pending', Approved = 'approved', Processed = 'processed', New = 'new', Reimbursed = 'reimbursed', Cancelled = 'cancelled', Reviewing = 'reviewing', Denied = 'denied' }
export const enum FinancialChargeType { ProcessingFee = 'processing-fee', Commission = 'commission', LateFee = 'late-fee', ServiceCharge = 'service-charge', TransactionFee = 'transaction-fee', InterestCharge = 'interest-charge', Other = 'other' }
export const enum BillingStatus { Draft = 'draft', Authorised = 'authorised', Submitted = 'submitted', Pending = 'pending', Voided = 'voided', Paid = 'paid', Unpaid = 'unpaid', Overdue = 'overdue', Deleted = 'deleted', PartiallyPaid = 'partially-paid' }
export const enum InvoiceAdjustmentType { Other = 'other', Tip = 'tip', Discount = 'discount', Tax = 'tax', Shipping = 'shipping' }
export const enum DataType { String = 'string', Number = 'number', Null = 'null', Boolean = 'boolean', Undefined = 'undefined', Json = 'json', Object = 'object', Binary = 'binary', Date = 'date', Timestamp = 'timestamp', Array = 'array', Custom = 'custom' }
export const enum EmploymentType { Internship = 'internship', PartTime = 'part-time', Volunteer = 'volunteer', Contract = 'contract', FullTime = 'full-time', Freelance = 'freelance', Seasonal = 'seasonal', Temporary = 'temporary', Permanent = 'permanent' }
export const enum TimeCycle { Weekly = 'weekly', Triennially = 'triennially', Biennially = 'biennially', SemiMonthly = 'semi-monthly', Custom = 'custom', Biweekly = 'biweekly', Hourly = 'hourly', Daily = 'daily', Annually = 'annually', Monthly = 'monthly', Quarterly = 'quarterly', AdHoc = 'ad-hoc', Minutely = 'minutely', SemiAnnually = 'semi-annually', Secondly = 'secondly' }
export const enum FinancialTrackingCategories { None = 'none', Project = 'project', Location = 'location', CostCenter = 'cost-center', Service = 'service', Other = 'other', Customer = 'customer', Department = 'department', Class = 'class', Division = 'division', Employee = 'employee', Vendor = 'vendor', Product = 'product' }
export const enum CampaignType { Email = 'email', Display = 'display', Other = 'other', SocialMedia = 'social-media', SearchEngine = 'search-engine' }
export const enum ContactAddressType { Shipping = 'shipping', Home = 'home', Work = 'work', Other = 'other', Billing = 'billing', Temporary = 'temporary', Business = 'business', Personal = 'personal' }
export const enum LeadLifecycleStatus { InProcess = 'in-process', Converted = 'converted', Revisited = 'revisited', AttemptedToContact = 'attempted-to-contact', Connected = 'connected', Open = 'open', Unqualified = 'unqualified', BadTiming = 'bad-timing', Lost = 'lost', New = 'new' }
export const enum ParticipantEngagementStatus { Banned = 'banned', Admin = 'admin', Left = 'left', Inactive = 'inactive', Guest = 'guest', Moderator = 'moderator', Active = 'active' }
export const enum ItemEntityStatus { Completed = 'completed', Active = 'active', Inactive = 'inactive', Deleted = 'deleted', Archived = 'archived', Suspended = 'suspended', Pending = 'pending' }
export const enum Currency { HNL = 'hnl', INR = 'inr', AWG = 'awg', CVE = 'cve', MNT = 'mnt', KZT = 'kzt', GEL = 'gel', MXN = 'mxn', PAB = 'pab', XPF = 'xpf', SSP = 'ssp', GYD = 'gyd', BMD = 'bmd', JOD = 'jod', HUF = 'huf', SCR = 'scr', SGD = 'sgd', SHP = 'shp', USD = 'usd', ETB = 'etb', BYN = 'byn', MYR = 'myr', TND = 'tnd', GHS = 'ghs', LRD = 'lrd', PKR = 'pkr', QAR = 'qar', UAH = 'uah', JPY = 'jpy', MAD = 'mad', NZD = 'nzd', DJF = 'djf', BHD = 'bhd', MRU = 'mru', PYG = 'pyg', RUB = 'rub', EGP = 'egp', MVR = 'mvr', AUD = 'aud', KES = 'kes', VUV = 'vuv', BZD = 'bzd', LSL = 'lsl', BWP = 'bwp', BIF = 'bif', KRW = 'krw', KYD = 'kyd', MMK = 'mmk', ALL = 'all', BGN = 'bgn', SYP = 'syp', FOK = 'fok', UGX = 'ugx', CUC = 'cuc', TTD = 'ttd', LYD = 'lyd', DZD = 'dzd', COP = 'cop', BSD = 'bsd', UZS = 'uzs', TWD = 'twd', AOA = 'aoa', VND = 'vnd', PHP = 'php', BBD = 'bbd', GNF = 'gnf', VES = 'ves', PEN = 'pen', MKD = 'mkd', ZAR = 'zar', IDR = 'idr', PGK = 'pgk', KMF = 'kmf', RON = 'ron', BND = 'bnd', CUP = 'cup', IRR = 'irr', MWK = 'mwk', CZK = 'czk', KWD = 'kwd', ZWL = 'zwl', ARS = 'ars', STN = 'stn', KID = 'kid', CLP = 'clp', XAF = 'xaf', IMP = 'imp', SRD = 'srd', FKP = 'fkp', SZL = 'szl', YER = 'yer', SEK = 'sek', BAM = 'bam', DOP = 'dop', BTN = 'btn', CNY = 'cny', GTQ = 'gtq', RSD = 'rsd', TRY = 'try', LAK = 'lak', UYU = 'uyu', ANG = 'ang', JEP = 'jep', KHR = 'khr', SDG = 'sdg', GGP = 'ggp', HKD = 'hkd', HRK = 'hrk', PLN = 'pln', LKR = 'lkr', SAR = 'sar', JMD = 'jmd', SBD = 'sbd', FJD = 'fjd', GBP = 'gbp', ZMW = 'zmw', MUR = 'mur', BDT = 'bdt', CHF = 'chf', ISK = 'isk', DKK = 'dkk', ERN = 'ern', MDL = 'mdl', TOP = 'top', WST = 'wst', AMD = 'amd', XDR = 'xdr', NAD = 'nad', CRC = 'crc', GIP = 'gip', NGN = 'ngn', AZN = 'azn', TJS = 'tjs', CAD = 'cad', IQD = 'iqd', HTG = 'htg', XCD = 'xcd', AFN = 'afn', BOB = 'bob', MOP = 'mop', NOK = 'nok', NPR = 'npr', SOS = 'sos', TMT = 'tmt', XOF = 'xof', TVD = 'tvd', GMD = 'gmd', NIO = 'nio', TZS = 'tzs', CDF = 'cdf', SLL = 'sll', MGA = 'mga', EUR = 'eur', KGS = 'kgs', AED = 'aed', LBP = 'lbp', OMR = 'omr', RWF = 'rwf', ILS = 'ils', MZN = 'mzn', BRL = 'brl', KPW = 'kpw', THB = 'thb' }
export const enum CustomerEligibilityStatus { SpecificConditions = 'specific-conditions', Other = 'other', NewCustomers = 'new-customers', ReturningCustomers = 'returning-customers', VipCustomers = 'vip-customers', AllCustomers = 'all-customers' }
export const enum ItemCondition { Damaged = 'damaged', LikeNew = 'like-new', New = 'new', Used = 'used', OpenBox = 'open-box', Refurbished = 'refurbished' }
export const enum TransactionType { Fee = 'fee', Charge = 'charge', Payment = 'payment', Adjustment = 'adjustment', Deposit = 'deposit', Transfer = 'transfer', Withdrawal = 'withdrawal', Refund = 'refund' }
export const enum EntityLifecycleStatus { Preorder = 'preorder', Draft = 'draft', Deleted = 'deleted', Archived = 'archived', Active = 'active', Inactive = 'inactive', Scheduled = 'scheduled' }
export const enum JournalEntryStatus { Corrected = 'corrected', Voided = 'voided', Draft = 'draft', Posted = 'posted', Pending = 'pending', Error = 'error' }
export const enum DayOfWeek { Friday = 'friday', Sunday = 'sunday', Tuesday = 'tuesday', Saturday = 'saturday', Monday = 'monday', Thursday = 'thursday', Wednesday = 'wednesday' }
export const enum AccountingAccountType { ExpenseIncomeTaxExpense = 'expense::income-tax-expense', EquityOtherFreeReserves = 'equity::other-free-reserves', OtherCurrentLiabilityDividendsPayable = 'other-current-liability::dividends-payable', AssetInvestmentUsGovernmentObligations = 'asset::investment-us-government-obligations', ExpenseDuesSubscriptions = 'expense::dues-subscriptions', AssetLeaseBuyout = 'asset::lease-buyout', ExpenseUnappliedCashBillPaymentExpense = 'expense::unapplied-cash-bill-payment-expense', CostOfGoodsSoldCostOfLaborCos = 'cost-of-goods-sold::cost-of-labor-cos', RevenueRevenueGeneral = 'revenue::revenue-general', OtherExpensePenaltiesSettlements = 'other-expense::penalties-settlements', AssetLicenses = 'asset::licenses', OtherExpenseDepletion = 'other-expense::depletion', LiabilityProvisionForLiabilities = 'liability::provision-for-liabilities', EquityPaidInCapitalOrSurplus = 'equity::paid-in-capital-or-surplus', EquityMoneyReceivedAgainstShareWarrants = 'equity::money-received-against-share-warrants', RevenueUnappliedCashPaymentIncome = 'revenue::unapplied-cash-payment-income', OtherIncomeTaxExemptInterest = 'other-income::tax-exempt-interest', RevenueOperatingGrants = 'revenue::operating-grants', AssetTrustAccounts = 'asset::trust-accounts', RevenueCashReceiptIncome = 'revenue::cash-receipt-income', LiabilityDeferredTaxLiabilities = 'liability::deferred-tax-liabilities', AssetAssetsHeldForSale = 'asset::assets-held-for-sale', AssetOtherFixedAssets = 'asset::other-fixed-assets', AssetCalledUpShareCapitalNotPaid = 'asset::called-up-share-capital-not-paid', AssetGlobalTaxRefund = 'asset::global-tax-refund', AssetLongTermInvestments = 'asset::long-term-investments', EquityDividendDisbursed = 'equity::dividend-disbursed', AssetAccumulatedDepreciation = 'asset::accumulated-depreciation', ExpenseOtherSellingExpenses = 'expense::other-selling-expenses', EquityPartnerDistributions = 'equity::partner-distributions', AssetLand = 'asset::land', LiabilityAccrualsAndDeferredIncome = 'liability::accruals-and-deferred-income', AssetInvestmentTaxExemptSecurities = 'asset::investment-tax-exempt-securities', LiabilityAccountsPayable = 'liability::accounts-payable', AssetLandAsset = 'asset::land-asset', CostOfGoodsSold = 'cost-of-goods-sold', AssetGlobalTaxDeferred = 'asset::global-tax-deferred', OtherExpenseExceptionalItems = 'other-expense::exceptional-items', AssetOtherCurrentAssets = 'asset::other-current-assets', AssetLeaseholdImprovements = 'asset::leasehold-improvements', LiabilityLongTermBorrowings = 'liability::long-term-borrowings', AssetFixedAssetComputers = 'asset::fixed-asset-computers', OtherIncomeInterestEarned = 'other-income::interest-earned', AssetProvisionsCurrentAssets = 'asset::provisions-current-assets', ExpenseOfficeGeneralAdministrativeExpenses = 'expense::office-general-administrative-expenses', ExpenseOtherBusinessExpenses = 'expense::other-business-expenses', OtherCurrentLiabilityLoanPayable = 'other-current-liability::loan-payable', EquityPartnersEquity = 'equity::partners-equity', EquityPersonalIncome = 'equity::personal-income', ExpensePayrollExpenses = 'expense::payroll-expenses', OtherIncomeLossOnDisposalOfAssets = 'other-income::loss-on-disposal-of-assets', LiabilityLongTermDebit = 'liability::long-term-debit', AssetRentsHeldInTrust = 'asset::rents-held-in-trust', AssetBuildings = 'asset::buildings', LiabilityCreditCard = 'liability::credit-card', EquityOpeningBalanceEquity = 'equity::opening-balance-equity', AssetProvisionsFixedAssets = 'asset::provisions-fixed-assets', EquityPartnerContributions = 'equity::partner-contributions', AssetMachineryAndEquipment = 'asset::machinery-and-equipment', ExpenseManagementCompensation = 'expense::management-compensation', ExpenseUtilities = 'expense::utilities', OtherCurrentLiabilityPayrollTaxPayable = 'other-current-liability::payroll-tax-payable', AssetOtherCurrentAsset = 'asset::other-current-asset', ExpenseCostOfLabor = 'expense::cost-of-labor', ExpenseTravelMeals = 'expense::travel-meals', RevenueOtherPrimaryIncome = 'revenue::other-primary-income', AssetTradeAndOtherReceivables = 'asset::trade-and-other-receivables', OtherCurrentLiabilityProvisionsCurrentLiabilities = 'other-current-liability::provisions-current-liabilities', AssetAllowanceForBadDebts = 'asset::allowance-for-bad-debts', AssetFixedAssetCopiers = 'asset::fixed-asset-copiers', OtherCurrentLiabilityGlobalTaxPayable = 'other-current-liability::global-tax-payable', OtherCurrentLiabilityTradeAndOtherPayables = 'other-current-liability::trade-and-other-payables', OtherExpenseVehicleRepairs = 'other-expense::vehicle-repairs', LiabilityBankLoans = 'liability::bank-loans', EquityFunds = 'equity::funds', AssetShortTermLoansAndAdvancesToRelatedParties = 'asset::short-term-loans-and-advances-to-related-parties', OtherIncomeOtherInvestmentIncome = 'other-income::other-investment-income', AssetRetainage = 'asset::retainage', OtherCurrentLiabilitySundryDebtorsAndCreditors = 'other-current-liability::sundry-debtors-and-creditors', OtherExpenseHomeOwnerRentalInsurance = 'other-expense::home-owner-rental-insurance', ExpenseTaxesPaid = 'expense::taxes-paid', OtherCurrentLiabilityInsurancePayable = 'other-current-liability::insurance-payable', AssetAccumulatedAmortization = 'asset::accumulated-amortization', AssetLongTermLoansAndAdvancesToRelatedParties = 'asset::long-term-loans-and-advances-to-related-parties', AssetFurnitureAndFixtures = 'asset::furniture-and-fixtures', AssetBank = 'asset::bank', AssetInternalTransfers = 'asset::internal-transfers', AssetIntangibleAssets = 'asset::intangible-assets', AssetGoodwill = 'asset::goodwill', CostOfGoodsSoldShippingFreightDeliveryCos = 'cost-of-goods-sold::shipping-freight-delivery-cos', OtherCurrentLiability = 'other-current-liability', OtherExpenseRentAndLease = 'other-expense::rent-and-lease', OtherCurrentLiabilityStateLocalIncomeTaxPayable = 'other-current-liability::state-local-income-tax-payable', LiabilityLiabilitiesRelatedToAssetsHeldForSale = 'liability::liabilities-related-to-assets-held-for-sale', OtherExpenseVehicleLease = 'other-expense::vehicle-lease', RevenueIncome = 'revenue::income', OtherCurrentLiabilityPrepaidExpensesPayable = 'other-current-liability::prepaid-expenses-payable', LiabilityOtherLongTermLiabilities = 'liability::other-long-term-liabilities', CostOfGoodsSoldCostOfSales = 'cost-of-goods-sold::cost-of-sales', RevenueNonProfitIncome = 'revenue::non-profit-income', EquityEstimatedTaxes = 'equity::estimated-taxes', AssetAvailableForSaleFinancialAssets = 'asset::available-for-sale-financial-assets', ExpenseFinanceCosts = 'expense::finance-costs', OtherExpenseGasAndFuel = 'other-expense::gas-and-fuel', OtherExpenseMatCredit = 'other-expense::mat-credit', AssetVehicles = 'asset::vehicles', AssetParticipatingInterests = 'asset::participating-interests', OtherExpenseOtherMiscellaneousExpense = 'other-expense::other-miscellaneous-expense', LiabilityGroupAndAssociates = 'liability::group-and-associates', ExpenseTravel = 'expense::travel', LiabilityProvisionsNonCurrentLiabilities = 'liability::provisions-non-current-liabilities', OtherExpenseUtilities = 'other-expense::utilities', Asset = 'asset', AssetFixedAssetPhotoVideo = 'asset::fixed-asset-photo-video', OtherExpenseOtherVehicleExpenses = 'other-expense::other-vehicle-expenses', ExpenseTravelExpensesGeneralAndAdminExpenses = 'expense::travel-expenses-general-and-admin-expenses', OtherExpenseWashAndRoadServices = 'other-expense::wash-and-road-services', OtherCurrentLiabilityProvisionForWarrantyObligations = 'other-current-liability::provision-for-warranty-obligations', OtherIncomeDividendIncome = 'other-income::dividend-income', ExpenseInterestPaid = 'expense::interest-paid', OtherExpenseRepairsAndMaintenance = 'other-expense::repairs-and-maintenance', OtherExpenseVehicleInsurance = 'other-expense::vehicle-insurance', OtherIncomeUnrealisedLossOnSecuritiesNetOfTax = 'other-income::unrealised-loss-on-securities-net-of-tax', ExpenseGlobalTaxExpense = 'expense::global-tax-expense', LiabilityShareholderNotesPayable = 'liability::shareholder-notes-payable', OtherCurrentLiabilitySalesTaxPayable = 'other-current-liability::sales-tax-payable', AssetFixedAssetFurniture = 'asset::fixed-asset-furniture', OtherCurrentLiabilitySocialSecurityAgencies = 'other-current-liability::social-security-agencies', AssetSecurityDeposits = 'asset::security-deposits', AssetOtherIntangibleAssets = 'asset::other-intangible-assets', LiabilityLongTermLiability = 'liability::long-term-liability', ExpenseCommissionsAndFees = 'expense::commissions-and-fees', AssetFixedAsset = 'asset::fixed-asset', ExpenseSuppliesMaterials = 'expense::supplies-materials', AssetOtherEarMarkedBankAccounts = 'asset::other-ear-marked-bank-accounts', AssetLoansToOthers = 'asset::loans-to-others', ExpenseLegalProfessionalFees = 'expense::legal-professional-fees', OtherCurrentLiabilityInterestPayables = 'other-current-liability::interest-payables', ExpenseOtherExternalServices = 'expense::other-external-services', OtherIncomeOtherOperatingIncome = 'other-income::other-operating-income', CostOfGoodsSoldFreightAndDeliveryCost = 'cost-of-goods-sold::freight-and-delivery-cost', AssetFixedAssetOtherToolsEquipment = 'asset::fixed-asset-other-tools-equipment', AssetOtherLongTermInvestments = 'asset::other-long-term-investments', ExpenseOtherMiscellaneousServiceCost = 'expense::other-miscellaneous-service-cost', AssetDevelopmentCosts = 'asset::development-costs', EquityAccumulatedAdjustment = 'equity::accumulated-adjustment', AssetUndepositedFunds = 'asset::undeposited-funds', ExpenseShippingAndDeliveryExpense = 'expense::shipping-and-delivery-expense', ExpenseExtraordinaryCharges = 'expense::extraordinary-charges', OtherCurrentLiabilityCurrentPortionEmployeeBenefitsObligations = 'other-current-liability::current-portion-employee-benefits-obligations', OtherExpenseVehicle = 'other-expense::vehicle', AssetCumulativeDepreciationOnIntangibleAssets = 'asset::cumulative-depreciation-on-intangible-assets', AssetExpenditureAuthorisationsAndLettersOfCredit = 'asset::expenditure-authorisations-and-letters-of-credit', EquityShareCapital = 'equity::share-capital', ExpenseOfficeExpenses = 'expense::office-expenses', LiabilityNotesPayable = 'liability::notes-payable', LiabilityAccruedVacationPayable = 'liability::accrued-vacation-payable', AssetChecking = 'asset::checking', ExpenseRentOrLeaseOfBuildings = 'expense::rent-or-lease-of-buildings', EquityPreferredStock = 'equity::preferred-stock', OtherExpenseIncomeTaxOtherExpense = 'other-expense::income-tax-other-expense', OtherCurrentLiabilityPayrollClearing = 'other-current-liability::payroll-clearing', EquityRetainedEarnings = 'equity::retained-earnings', EquityHealthcare = 'equity::healthcare', AssetOtherConsumables = 'asset::other-consumables', RevenueOtherCurrentOperatingIncome = 'revenue::other-current-operating-income', ExpenseBorrowingCost = 'expense::borrowing-cost', LiabilityOutstandingDuesOtherThanMicroSmallEnterprise = 'liability::outstanding-dues-other-than-micro-small-enterprise', CostOfGoodsSoldOtherCostsOfServiceCos = 'cost-of-goods-sold::other-costs-of-service-cos', AssetBalWithGovtAuthorities = 'asset::bal-with-govt-authorities', OtherExpenseExtraordinaryItems = 'other-expense::extraordinary-items', OtherExpenseTaxRoundoffGainOrLoss = 'other-expense::tax-roundoff-gain-or-loss', LiabilityGovernmentAndOtherPublicAuthorities = 'liability::government-and-other-public-authorities', OtherExpenseOtherHomeOfficeExpenses = 'other-expense::other-home-office-expenses', ExpenseDistributionCosts = 'expense::distribution-costs', AssetInvestmentMortgageRealEstateLoans = 'asset::investment-mortgage-real-estate-loans', OtherExpenseDepreciation = 'other-expense::depreciation', OtherIncomeOtherMiscellaneousIncome = 'other-income::other-miscellaneous-income', OtherCurrentLiabilityCurrentTaxLiability = 'other-current-liability::current-tax-liability', ExpenseEquipmentRental = 'expense::equipment-rental', AccountsReceivable = 'accounts-receivable', ExpenseEntertainmentMeals = 'expense::entertainment-meals', AssetCashOnHand = 'asset::cash-on-hand', AssetNonCurrentAssets = 'asset::non-current-assets', AssetOtherLongTermLoansAndAdvances = 'asset::other-long-term-loans-and-advances', AssetLoansToStockholders = 'asset::loans-to-stockholders', Equity = 'equity', Expense = 'expense', LiabilityObligationsUnderFinanceLeases = 'liability::obligations-under-finance-leases', EquityTreasuryStock = 'equity::treasury-stock', AssetPrepaidExpenses = 'asset::prepaid-expenses', EquityInvestmentGrants = 'equity::investment-grants', OtherCurrentLiabilityLineOfCredit = 'other-current-liability::line-of-credit', AssetAccumulatedAmortizationOfOtherAssets = 'asset::accumulated-amortization-of-other-assets', ExpenseInsurance = 'expense::insurance', OtherCurrentLiabilityTrustAccountsLiabilities = 'other-current-liability::trust-accounts-liabilities', OtherExpenseVehicleRegistration = 'other-expense::vehicle-registration', AssetAccumulatedDepletion = 'asset::accumulated-depletion', ExpenseCharitableContributions = 'expense::charitable-contributions', LiabilityStaffAndRelatedLongTermLiabilityAccounts = 'liability::staff-and-related-long-term-liability-accounts', AssetInventory = 'asset::inventory', AssetDepletableAssets = 'asset::depletable-assets', AssetFixedAssetPhone = 'asset::fixed-asset-phone', EquityShareApplicationMoneyPendingAllotment = 'equity::share-application-money-pending-allotment', ExpenseEntertainment = 'expense::entertainment', ExpenseProjectStudiesSurveysAssessments = 'expense::project-studies-surveys-assessments', OtherExpenseHomeOffice = 'other-expense::home-office', CostOfGoodsSoldEquipmentRentalCos = 'cost-of-goods-sold::equipment-rental-cos', AssetShortTermInvestmentsInRelatedParties = 'asset::short-term-investments-in-related-parties', RevenueSavingsByTaxScheme = 'revenue::savings-by-tax-scheme', ExpenseStaffCosts = 'expense::staff-costs', LiabilityAccruedLongTermLiabilities = 'liability::accrued-long-term-liabilities', AssetAssetsAvailableForSale = 'asset::assets-available-for-sale', OtherCurrentLiabilityGlobalTaxSuspense = 'other-current-liability::global-tax-suspense', ExpenseAuto = 'expense::auto', ExpenseTravelExpensesSellingExpense = 'expense::travel-expenses-selling-expense', OtherCurrentLiabilityAccruedLiabilities = 'other-current-liability::accrued-liabilities', OtherExpenseVehicleLoan = 'other-expense::vehicle-loan', OtherIncomeGainLossOnSaleOfFixedAssets = 'other-income::gain-loss-on-sale-of-fixed-assets', ExpenseAmortizationExpense = 'expense::amortization-expense', ExpenseRepairMaintenance = 'expense::repair-maintenance', EquityOwnersEquity = 'equity::owners-equity', OtherExpenseMortgageInterest = 'other-expense::mortgage-interest', AssetDeferredTax = 'asset::deferred-tax', OtherCurrentLiabilityCurrentLiabilities = 'other-current-liability::current-liabilities', AssetInvestments = 'asset::investments', AssetInvestmentOther = 'asset::investment-other', RevenueSalesWholesale = 'revenue::sales-wholesale', CostOfGoodsSoldSuppliesMaterialsCogs = 'cost-of-goods-sold::supplies-materials-cogs', ExpenseLossOnDiscontinuedOperationsNetOfTax = 'expense::loss-on-discontinued-operations-net-of-tax', ExpenseAppropriationsToDepreciation = 'expense::appropriations-to-depreciation', OtherExpense = 'other-expense', ExpenseSundry = 'expense::sundry', OtherExpenseAmortization = 'other-expense::amortization', ExpensePromotionalMeals = 'expense::promotional-meals', LiabilityOutstandingDuesMicroSmallEnterprise = 'liability::outstanding-dues-micro-small-enterprise', OtherCurrentLiabilityFederalIncomeTaxPayable = 'other-current-liability::federal-income-tax-payable', AssetMoneyMarket = 'asset::money-market', OtherExpenseExchangeGainOrLoss = 'other-expense::exchange-gain-or-loss', OtherExpenseVehicleLoanInterest = 'other-expense::vehicle-loan-interest', RevenueSalesOfProductIncome = 'revenue::sales-of-product-income', EquityCapitalReserves = 'equity::capital-reserves', AssetEmployeeCashAdvances = 'asset::employee-cash-advances', ExpensePurchasesRebates = 'expense::purchases-rebates', AssetFixedAssetSoftware = 'asset::fixed-asset-software', AssetSavings = 'asset::savings', RevenueServiceFeeIncome = 'revenue::service-fee-income', AssetOtherLongTermAssets = 'asset::other-long-term-assets', ExpenseShippingFreightDelivery = 'expense::shipping-freight-delivery', OtherExpenseDeferredTaxExpense = 'other-expense::deferred-tax-expense', OtherCurrentLiabilityStaffAndRelatedLiabilityAccounts = 'other-current-liability::staff-and-related-liability-accounts', RevenueSalesRetail = 'revenue::sales-retail', AssetOrganizationalCosts = 'asset::organizational-costs', OtherExpenseParkingAndTolls = 'other-expense::parking-and-tolls', OtherCurrentLiabilityRentsInTrustLiability = 'other-current-liability::rents-in-trust-liability', AssetOtherAsset = 'asset::other-asset', AssetPrepaymentsAndAccruedIncome = 'asset::prepayments-and-accrued-income', ExpenseOtherRentalCosts = 'expense::other-rental-costs', LiabilityLongTermEmployeeBenefitObligations = 'liability::long-term-employee-benefit-obligations', EquityAccumulatedOtherComprehensiveIncome = 'equity::accumulated-other-comprehensive-income', ExpenseBankCharges = 'expense::bank-charges', OtherExpensePriorPeriodItems = 'other-expense::prior-period-items', OtherCurrentLiabilityOtherCurrentLiabilities = 'other-current-liability::other-current-liabilities', OtherCurrentLiabilityShortTermBorrowings = 'other-current-liability::short-term-borrowings', EquityCalledUpShareCapital = 'equity::called-up-share-capital', OtherIncomeGainLossOnSaleOfInvestments = 'other-income::gain-loss-on-sale-of-investments', AssetIntangibleAssetsUnderDevelopment = 'asset::intangible-assets-under-development', ExpenseAdvertisingPromotional = 'expense::advertising-promotional', ExpenseBadDebts = 'expense::bad-debts', RevenueOwnWorkCapitalized = 'revenue::own-work-capitalized', AssetCashAndCashEquivalents = 'asset::cash-and-cash-equivalents', AssetAssetsInCourseOfConstruction = 'asset::assets-in-course-of-construction', LiabilityDebtsRelatedToParticipatingInterests = 'liability::debts-related-to-participating-interests', OtherCurrentLiabilityDirectDepositPayable = 'other-current-liability::direct-deposit-payable', AssetProvisionsNonCurrentAssets = 'asset::provisions-non-current-assets', EquityCommonStock = 'equity::common-stock', EquityPersonalExpense = 'equity::personal-expense', EquityEquityInEarningsOfSubsidiuaries = 'equity::equity-in-earnings-of-subsidiuaries', OtherCurrentLiabilityCurrentPortionOfObligationsUnderFinanceLeases = 'other-current-liability::current-portion-of-obligations-under-finance-leases', LiabilityOtherLongTermProvisions = 'liability::other-long-term-provisions', RevenueDiscountsRefundsGiven = 'revenue::discounts-refunds-given', OtherIncome = 'other-income', ExpenseOtherCurrentOperatingCharges = 'expense::other-current-operating-charges', OtherCurrentLiabilityDutiesAndTaxes = 'other-current-liability::duties-and-taxes', AssetCapitalWip = 'asset::capital-wip', ExpenseExternalServices = 'expense::external-services', AssetLoansToOfficers = 'asset::loans-to-officers' }
export const enum MessageReadStatus { Failed = 'failed', Sent = 'sent', Read = 'read', Delivered = 'delivered', Unsent = 'unsent' }
export const enum MessageDeliveryStatus { Delivered = 'delivered', Pending = 'pending', Undeliverable = 'undeliverable', Sent = 'sent', Read = 'read', Failed = 'failed', Error = 'error' }
export const enum SupportQueryType { Feedback = 'feedback', Task = 'task', Question = 'question', Incident = 'incident', Problem = 'problem', Bug = 'bug', FeatureRequest = 'feature-request' }
export const enum ImageMimeType { ImagePng = 'image/png', ImageBmp = 'image/bmp', ImageHeic = 'image/heic', ImageWebp = 'image/webp', ImageJpeg = 'image/jpeg', ImageTiff = 'image/tiff', ImageSvgXml = 'image/svg+xml', ImageGif = 'image/gif' }
export const enum OrderingCriteria { PriceDescending = 'price-descending', Relevance = 'relevance', Manual = 'manual', Rating = 'rating', Alphabetical = 'alphabetical', Popularity = 'popularity', PriceAscending = 'price-ascending', CreationDate = 'creation-date' }
export const enum ChatType { Private = 'private', Public = 'public', Group = 'group' }
export const enum ItemAvailabilityStatus { Active = 'active', Inactive = 'inactive', OutOfStock = 'out-of-stock', Discontinued = 'discontinued' }
export const enum FinancialAccountStatus { Suspended = 'suspended', Inactive = 'inactive', UnderReview = 'under-review', Active = 'active', Frozen = 'frozen', Delinquent = 'delinquent', Closed = 'closed' }
export const enum TransactionStatus { Succeeded = 'succeeded', Failed = 'failed', Pending = 'pending', Cancelled = 'cancelled', Error = 'error', InProgress = 'in-progress', Initiated = 'initiated' }
export const enum CreditNoteStatus { Issued = 'issued', Applied = 'applied', Void = 'void', Disputed = 'disputed', Pending = 'pending', Cancelled = 'cancelled', Draft = 'draft', Completed = 'completed', Revised = 'revised' }
export const enum PaymentTerm { Prepayment = 'prepayment', Net30 = 'net-30', DeferredPayment = 'deferred-payment', DueEndOfMonth = 'due-end-of-month', CashBeforeShipment = 'cash-before-shipment', CashOnDelivery = 'cash-on-delivery', UponCompletion = 'upon-completion', Prepaid = 'prepaid', Net90 = 'net-90', Custom = 'custom', DueOnReceipt = 'due-on-receipt', CashInAdvance = 'cash-in-advance', CashWithOrder = 'cash-with-order', Installment = 'installment', Net = 'net', Net60 = 'net-60' }
export const enum EmploymentAndCandidateStatus { Hired = 'hired', Terminated = 'terminated', Active = 'active', OfferExtended = 'offer-extended', Interviewing = 'interviewing', Inactive = 'inactive', InReview = 'in-review', NotSelected = 'not-selected', Other = 'other', OnLeave = 'on-leave', New = 'new' }
export const enum OrganizationalRole { Manager = 'manager', Contractor = 'contractor', Other = 'other', Admin = 'admin', Director = 'director', Supervisor = 'supervisor', Employee = 'employee' }
export const enum CustomerStatus { Archived = 'archived', Suspended = 'suspended', Pending = 'pending', Active = 'active', Inactive = 'inactive' }
export const enum SocialPlatform { OtherSocialPlatform = 'other-social-platform', Pinterest = 'pinterest', Twitter = 'twitter', Linkedin = 'linkedin', Youtube = 'youtube', X = 'x', Instagram = 'instagram', Reddit = 'reddit', Tumblr = 'tumblr', Facebook = 'facebook', Skype = 'skype', Snapchat = 'snapchat', Tiktok = 'tiktok' }
export const enum ConversationStatus { Archived = 'archived', Deleted = 'deleted', Active = 'active' }
export const enum CommunicationRole { Owner = 'owner', Assistant = 'assistant', Bot = 'bot', Admin = 'admin', User = 'user', Moderator = 'moderator', Member = 'member', Guest = 'guest', Channel = 'channel', Service = 'service', System = 'system', Group = 'group' }
export const enum LifecycleStatus { Expired = 'expired', Issued = 'issued', Cancelled = 'cancelled', Active = 'active', Suspended = 'suspended', Redeemed = 'redeemed' }
export const enum PaymentMethod { MobileWallet = 'mobile-wallet', Paypal = 'paypal', Cryptocurrency = 'cryptocurrency', MobilePayment = 'mobile-payment', Cash = 'cash', Check = 'check', BankTransfer = 'bank-transfer', CashOnDelivery = 'cash-on-delivery', DebitCard = 'debit-card', Other = 'other', CreditCard = 'credit-card' }
export const enum FinancialTransactionStatus { Disputed = 'disputed', Cleared = 'cleared', SettlementInProgress = 'settlement-in-progress', Refunded = 'refunded', Pending = 'pending', Cancelled = 'cancelled', Failed = 'failed', Authorized = 'authorized' }
export const enum AuditOpinionType { Adverse = 'adverse', Qualified = 'qualified', Unqualified = 'unqualified', Disclaimer = 'disclaimer' }
export const enum InventoryStorageType { RetailStore = 'retail-store', OnlineMarketplace = 'online-marketplace', Other = 'other', DistributionCenter = 'distribution-center', DropShipper = 'drop-shipper', Warehouse = 'warehouse', Consignment = 'consignment' }
export const enum VisibilityScope { App = 'app', Internal = 'internal', Private = 'private', Global = 'global', Web = 'web' }
export const enum PaymentStatus { Adjusted = 'adjusted', PartiallyRefunded = 'partially-refunded', Failed = 'failed', Draft = 'draft', Processing = 'processing', Submitted = 'submitted', Paid = 'paid', Voided = 'voided', Deleted = 'deleted', Overdue = 'overdue', Error = 'error', Refunded = 'refunded', Pending = 'pending', Succeeded = 'succeeded', Partial = 'partial', Authorized = 'authorized', Disputed = 'disputed', Cancelled = 'cancelled' }
export const enum TransactionChannel { Online = 'online', Mobile = 'mobile', Atm = 'atm', Other = 'other', InPerson = 'in-person', BankBranch = 'bank-branch', Telephone = 'telephone', Mail = 'mail' }
export const enum FinancialDisputeStatus { Escalated = 'escalated', Won = 'won', UnderReview = 'under-review', NeedsResponse = 'needs-response', Closed = 'closed', Lost = 'lost', ChargeRefunded = 'charge-refunded', AwaitingEvidence = 'awaiting-evidence' }
export const enum DeviceUsageType { Personal = 'personal', Educational = 'educational', Home = 'home', Business = 'business', Industrial = 'industrial', Healthcare = 'healthcare', Other = 'other' }
export const enum FinancialTransactionType { Spend = 'spend', Chargeback = 'chargeback', Withdrawal = 'withdrawal', Other = 'other', Transfer = 'transfer', ReceiveOverpayment = 'receive-overpayment', SpendOverpayment = 'spend-overpayment', Receive = 'receive', Payment = 'payment', Dividend = 'dividend', Interest = 'interest', Charge = 'charge', ReceivePrepayment = 'receive-prepayment', Adjustment = 'adjustment', Deposit = 'deposit', Sale = 'sale', Fee = 'fee', Refund = 'refund', SpendPrepayment = 'spend-prepayment' }
export const enum AccessControlModel { Dac = 'dac', Custom = 'custom', Rbac = 'rbac', Mac = 'mac', Abac = 'abac', None = 'none' }
export const enum ParticipantType { Team = 'team', Group = 'group', Organization = 'organization', ExternalParticipant = 'external-participant', User = 'user' }
export const enum PriorityLevel { High = 'high', Elevated = 'elevated', Medium = 'medium', Urgent = 'urgent', Low = 'low' }
export const enum PrerequisiteRangeType { Subtotal = 'subtotal', ShippingPrice = 'shipping-price', Quantity = 'quantity' }
export const enum ContentVisibility { Public = 'public', Shared = 'shared', Internal = 'internal', Private = 'private', Protected = 'protected' }
export const enum EntityCategory { Other = 'other', Task = 'task', Document = 'document', Link = 'link', Event = 'event', Project = 'project', Message = 'message', User = 'user', Person = 'person', Owner = 'owner' }
export const enum GenderIdentity { Male = 'male', PreferNotToSay = 'prefer-not-to-say', Other = 'other', Female = 'female' }
export const enum CommunicationMethod { Text = 'text', SocialMedia = 'social-media', InPerson = 'in-person', Other = 'other', Mail = 'mail', PushNotification = 'push-notification', Email = 'email', InstantMessage = 'instant-message', VideoCall = 'video-call', Phone = 'phone', Sms = 'sms' }
export const enum EmailCategoryType { Promotional = 'promotional', Governmental = 'governmental', Spam = 'spam', Business = 'business', Transactional = 'transactional', Other = 'other', Personal = 'personal', Educational = 'educational' }
export const enum UniversalIdentifierType { String = 'string', Email = 'email', Url = 'url', Number = 'number', Uuid = 'uuid' }
export const enum TaskStatus { OnHold = 'on-hold', Todo = 'todo', Done = 'done', Blocked = 'blocked', Cancelled = 'cancelled', InProgress = 'in-progress' }
export const enum UserStatus { Active = 'active', Verified = 'verified', Inactive = 'inactive', Suspended = 'suspended', Banned = 'banned', Archived = 'archived', Pending = 'pending', Deleted = 'deleted', WaitListed = 'wait-listed' }
export const enum PromotionType { FreeShipping = 'free-shipping', Other = 'other', FixedAmount = 'fixed-amount', BuyOneGetOne = 'buy-one-get-one', Percentage = 'percentage', RewardPoints = 'reward-points' }
export const enum MimeType { ImageJpeg = 'image/jpeg', ImageSvgXml = 'image/svg+xml', ImageGif = 'image/gif', ImageWebp = 'image/webp', ImagePng = 'image/png' }
export const enum TaxType { Inclusive = 'inclusive', Additive = 'additive', Variable = 'variable' }
export const enum ModifierType { Text = 'text', List = 'list' }
export const enum CardType { Debit = 'debit', UnknownCard = 'unknown-card', Credit = 'credit' }
export const enum PrepaidType { Prepaid = 'prepaid', NotPrepaid = 'not-prepaid', UnknownPrepaid = 'unknown-prepaid' }
export const enum EntryMethod { Contactless = 'contactless', Swiped = 'swiped', Emv = 'emv', Keyed = 'keyed', OnFile = 'on-file' }
export const enum CvvStatus { Accepted = 'accepted', Rejected = 'rejected', NotChecked = 'not-checked' }
export const enum AvcStatus { Rejected = 'rejected', Accepted = 'accepted', NotChecked = 'not-checked' }
export const enum CreditType { Overpayment = 'overpayment', Prepayment = 'prepayment', Supplier = 'supplier', Customer = 'customer', Goodwill = 'goodwill' }
export const enum CallDirection { Unknown = 'unknown', Outbound = 'outbound', Inbound = 'inbound', Conference = 'conference' }
export const enum SpeakerRole { Invitee = 'invitee', Attendee = 'attendee' }
export const enum FileType { Folder = 'folder', Url = 'url', File = 'file' }
export const enum AiToolChoiceType { Any = 'any', Auto = 'auto', Tool = 'tool', None = 'none' }
export const enum ImageType { Base64 = 'base64' }
export const enum ResponseFormatType { JsonObject = 'json-object', JsonSchema = 'json-schema', Text = 'text' }
export const enum ToolCallType { Function = 'function' }
export const enum AiMessagesContentType { Text = 'text', ToolResult = 'tool-result', Image = 'image', ToolUse = 'tool-use' }
