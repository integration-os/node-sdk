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
export interface AiMessages { index?: number;
    refusal?: string;
    name?: string;
    CommonModel?: string;
    role?: string;
    content?: AiMessagesContent[];
    finishReason?: string;
    toolCalls?: ToolCalls[] }
export interface Chats { enableParallelToolCalls?: boolean;
    usage?: AiUsage;
    seed?: number;
    topP?: number;
    toolChoice?: AiToolChoice;
    frequencyPenalty?: number;
    numberOfCompletions?: number;
    model?: string;
    stopSequences?: string[];
    id?: string;
    messages?: AiMessages[];
    objectType?: string;
    tools?: JsonSchema[];
    system?: string[];
    modifyToken?: string;
    temperature?: number;
    presencePenalty?: number;
    createdAt?: string;
    logitBias?: unknown;
    CommonModel?: string;
    systemFingerprint?: string;
    topK?: number;
    maxTokens?: number;
    responseFormat?: ResponseFormat;
    userId?: string }
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
export interface Messages { reactions?: Reactions[];
    priority?: PriorityLevel;
    receiverId?: string;
    content?: string;
    chatId?: string;
    reference?: Entity;
    historyId?: string;
    active?: boolean;
    bcc?: string;
    trackingSettings?: KeyValues[];
    threadId?: string;
    recipientEmails?: string[];
    readStatus?: MessageReadStatus;
    cc?: string;
    replyToMessageId?: string;
    templateId?: string;
    senderId?: string;
    CommonModel?: string;
    createdAt?: string;
    timestamp?: string;
    updatedAt?: string;
    attachments?: Attachments[];
    tags?: KeyValues[];
    id?: string;
    metadata?: Metadata[];
    modifyToken?: string;
    senderEmail?: string;
    subject?: string;
    type?: MessageContentType;
    deliveryStatus?: MessageDeliveryStatus;
    deleted?: boolean }
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
export const enum Roles { Admin = 'admin', Moderator = 'moderator', User = 'user' }
export const enum MinimumRequirements { MinimumQuantityOfItems = 'minimum-quantity-of-items', MinimumPurchaseAmount = 'minimum-purchase-amount', None = 'none' }
export const enum Gender { Female = 'female', Other = 'other', PreferNotToSay = 'prefer not to say', Male = 'male' }
export const enum ChannelAvailability { InStore = 'in-store', AllChannels = 'all-channels', InApp = 'in-app', Online = 'online' }
export const enum CustomerEligibility { SpecificCustomers = 'specific-customers', All = 'all', SpecificCustomerGroups = 'specific-customer-groups' }
export const enum Format { Xml = 'xml', Json = 'json' }
export const enum TargetType { LineItem = 'line-item', ShippingLine = 'shipping-line' }
export const enum SkuValidation { LocalUnique = 'local-unique', None = 'none', GlobalUnique = 'global-unique' }
export const enum AccountType { ExpenseOfficeExpenses = 'expense::office-expenses', AssetChecking = 'asset::checking', ExpenseOtherExternalServices = 'expense::other-external-services', AssetInvestmentMortgageRealEstateLoans = 'asset::investment-mortgage-real-estate-loans', AssetLongTermInvestments = 'asset::long-term-investments', AssetTrustAccounts = 'asset::trust-accounts', RevenueOperatingGrants = 'revenue::operating-grants', ExpenseIncomeTaxExpense = 'expense::income-tax-expense', LiabilityAccrualsAndDeferredIncome = 'liability::accruals-and-deferred-income', OtherExpenseVehicle = 'other-expense::vehicle', OtherIncomeInterestEarned = 'other-income::interest-earned', RevenueSalesRetail = 'revenue::sales-retail', CostOfGoodsSoldCostOfLaborCos = 'cost-of-goods-sold::cost-of-labor-cos', OtherExpenseExchangeGainOrLoss = 'other-expense::exchange-gain-or-loss', ExpenseEntertainmentMeals = 'expense::entertainment-meals', AssetOtherLongTermAssets = 'asset::other-long-term-assets', AssetTradeAndOtherReceivables = 'asset::trade-and-other-receivables', LiabilityAccruedVacationPayable = 'liability::accrued-vacation-payable', OtherExpenseVehicleRepairs = 'other-expense::vehicle-repairs', OtherCurrentLiabilityDirectDepositPayable = 'other-current-liability::direct-deposit-payable', AssetNonCurrentAssets = 'asset::non-current-assets', LiabilityDebtsRelatedToParticipatingInterests = 'liability::debts-related-to-participating-interests', OtherIncomeUnrealisedLossOnSecuritiesNetOfTax = 'other-income::unrealised-loss-on-securities-net-of-tax', OtherExpenseOtherHomeOfficeExpenses = 'other-expense::other-home-office-expenses', ExpensePayrollExpenses = 'expense::payroll-expenses', AssetRetainage = 'asset::retainage', EquityShareApplicationMoneyPendingAllotment = 'equity::share-application-money-pending-allotment', ExpenseEquipmentRental = 'expense::equipment-rental', EquityCommonStock = 'equity::common-stock', ExpenseDistributionCosts = 'expense::distribution-costs', RevenueUnappliedCashPaymentIncome = 'revenue::unapplied-cash-payment-income', OtherExpenseMortgageInterest = 'other-expense::mortgage-interest', OtherIncomeDividendIncome = 'other-income::dividend-income', OtherCurrentLiabilityLoanPayable = 'other-current-liability::loan-payable', OtherCurrentLiabilitySalesTaxPayable = 'other-current-liability::sales-tax-payable', OtherCurrentLiabilityProvisionsCurrentLiabilities = 'other-current-liability::provisions-current-liabilities', OtherExpenseVehicleLoan = 'other-expense::vehicle-loan', RevenueSalesOfProductIncome = 'revenue::sales-of-product-income', AssetRentsHeldInTrust = 'asset::rents-held-in-trust', ExpenseEntertainment = 'expense::entertainment', AssetDepletableAssets = 'asset::depletable-assets', RevenueIncome = 'revenue::income', AssetAccumulatedDepletion = 'asset::accumulated-depletion', OtherCurrentLiabilitySundryDebtorsAndCreditors = 'other-current-liability::sundry-debtors-and-creditors', OtherExpenseVehicleRegistration = 'other-expense::vehicle-registration', OtherCurrentLiabilityOtherCurrentLiabilities = 'other-current-liability::other-current-liabilities', EquityInvestmentGrants = 'equity::investment-grants', OtherCurrentLiabilityGlobalTaxSuspense = 'other-current-liability::global-tax-suspense', EquityFunds = 'equity::funds', ExpenseAmortizationExpense = 'expense::amortization-expense', ExpenseTravelExpensesGeneralAndAdminExpenses = 'expense::travel-expenses-general-and-admin-expenses', AssetInvestmentTaxExemptSecurities = 'asset::investment-tax-exempt-securities', RevenueDiscountsRefundsGiven = 'revenue::discounts-refunds-given', AssetPrepaymentsAndAccruedIncome = 'asset::prepayments-and-accrued-income', RevenueNonProfitIncome = 'revenue::non-profit-income', ExpensePurchasesRebates = 'expense::purchases-rebates', LiabilityOutstandingDuesMicroSmallEnterprise = 'liability::outstanding-dues-micro-small-enterprise', ExpenseUnappliedCashBillPaymentExpense = 'expense::unapplied-cash-bill-payment-expense', OtherCurrentLiabilityFederalIncomeTaxPayable = 'other-current-liability::federal-income-tax-payable', AssetOtherLongTermLoansAndAdvances = 'asset::other-long-term-loans-and-advances', ExpenseRentOrLeaseOfBuildings = 'expense::rent-or-lease-of-buildings', OtherCurrentLiabilityPrepaidExpensesPayable = 'other-current-liability::prepaid-expenses-payable', RevenueOtherCurrentOperatingIncome = 'revenue::other-current-operating-income', ExpenseOtherBusinessExpenses = 'expense::other-business-expenses', OtherExpenseHomeOffice = 'other-expense::home-office', OtherCurrentLiabilityTradeAndOtherPayables = 'other-current-liability::trade-and-other-payables', AssetOtherFixedAssets = 'asset::other-fixed-assets', LiabilityLongTermDebit = 'liability::long-term-debit', EquityAccumulatedOtherComprehensiveIncome = 'equity::accumulated-other-comprehensive-income', OtherIncomeGainLossOnSaleOfFixedAssets = 'other-income::gain-loss-on-sale-of-fixed-assets', ExpenseExternalServices = 'expense::external-services', EquityPaidInCapitalOrSurplus = 'equity::paid-in-capital-or-surplus', ExpenseFinanceCosts = 'expense::finance-costs', AssetProvisionsCurrentAssets = 'asset::provisions-current-assets', AssetOrganizationalCosts = 'asset::organizational-costs', AssetOtherCurrentAssets = 'asset::other-current-assets', EquityCapitalReserves = 'equity::capital-reserves', ExpenseShippingAndDeliveryExpense = 'expense::shipping-and-delivery-expense', OtherCurrentLiabilityShortTermBorrowings = 'other-current-liability::short-term-borrowings', OtherExpenseVehicleLoanInterest = 'other-expense::vehicle-loan-interest', EquityEquityInEarningsOfSubsidiuaries = 'equity::equity-in-earnings-of-subsidiuaries', OtherExpenseDeferredTaxExpense = 'other-expense::deferred-tax-expense', OtherIncomeGainLossOnSaleOfInvestments = 'other-income::gain-loss-on-sale-of-investments', AccountsReceivable = 'accounts-receivable', AssetFixedAssetSoftware = 'asset::fixed-asset-software', ExpenseAuto = 'expense::auto', AssetFixedAssetComputers = 'asset::fixed-asset-computers', AssetLeaseholdImprovements = 'asset::leasehold-improvements', LiabilityStaffAndRelatedLongTermLiabilityAccounts = 'liability::staff-and-related-long-term-liability-accounts', OtherExpenseUtilities = 'other-expense::utilities', ExpensePromotionalMeals = 'expense::promotional-meals', OtherCurrentLiabilityPayrollTaxPayable = 'other-current-liability::payroll-tax-payable', RevenueSavingsByTaxScheme = 'revenue::savings-by-tax-scheme', ExpensePenaltiesSettlements = 'expense::penalties-settlements', OtherIncomeOtherInvestmentIncome = 'other-income::other-investment-income', OtherCurrentLiabilityAccruedLiabilities = 'other-current-liability::accrued-liabilities', AssetShortTermInvestmentsInRelatedParties = 'asset::short-term-investments-in-related-parties', OtherIncomeOtherMiscellaneousIncome = 'other-income::other-miscellaneous-income', AssetCumulativeDepreciationOnIntangibleAssets = 'asset::cumulative-depreciation-on-intangible-assets', ExpenseOtherMiscellaneousServiceCost = 'expense::other-miscellaneous-service-cost', EquityPreferredStock = 'equity::preferred-stock', AssetLeaseBuyout = 'asset::lease-buyout', AssetPrepaidExpenses = 'asset::prepaid-expenses', CostOfGoodsSoldFreightAndDeliveryCost = 'cost-of-goods-sold::freight-and-delivery-cost', ExpenseSundry = 'expense::sundry', OtherIncomeTaxExemptInterest = 'other-income::tax-exempt-interest', AssetSavings = 'asset::savings', EquityCalledUpShareCapital = 'equity::called-up-share-capital', AssetUndepositedFunds = 'asset::undeposited-funds', AssetCashOnHand = 'asset::cash-on-hand', LiabilityProvisionForLiabilities = 'liability::provision-for-liabilities', OtherCurrentLiabilitySocialSecurityAgencies = 'other-current-liability::social-security-agencies', OtherCurrentLiabilityStateLocalIncomeTaxPayable = 'other-current-liability::state-local-income-tax-payable', AssetLand = 'asset::land', RevenueRevenueGeneral = 'revenue::revenue-general', ExpenseTravelExpensesSellingExpense = 'expense::travel-expenses-selling-expense', LiabilityAccountsPayable = 'liability::accounts-payable', ExpenseAdvertisingPromotional = 'expense::advertising-promotional', LiabilityLongTermBorrowings = 'liability::long-term-borrowings', AssetCapitalWip = 'asset::capital-wip', OtherCurrentLiabilityCurrentPortionEmployeeBenefitsObligations = 'other-current-liability::current-portion-employee-benefits-obligations', OtherIncomeOtherOperatingIncome = 'other-income::other-operating-income', AssetVehicles = 'asset::vehicles', AssetBalWithGovtAuthorities = 'asset::bal-with-govt-authorities', AssetFixedAssetOtherToolsEquipment = 'asset::fixed-asset-other-tools-equipment', AssetFurnitureAndFixtures = 'asset::furniture-and-fixtures', CostOfGoodsSoldSuppliesMaterialsCogs = 'cost-of-goods-sold::supplies-materials-cogs', AssetOtherCurrentAsset = 'asset::other-current-asset', EquityPersonalExpense = 'equity::personal-expense', LiabilityOutstandingDuesOtherThanMicroSmallEnterprise = 'liability::outstanding-dues-other-than-micro-small-enterprise', ExpenseBankCharges = 'expense::bank-charges', EquityDividendDisbursed = 'equity::dividend-disbursed', ExpenseBorrowingCost = 'expense::borrowing-cost', LiabilityLongTermEmployeeBenefitObligations = 'liability::long-term-employee-benefit-obligations', OtherExpenseRentAndLease = 'other-expense::rent-and-lease', CostOfGoodsSold = 'cost-of-goods-sold', AssetIntangibleAssetsUnderDevelopment = 'asset::intangible-assets-under-development', LiabilityLongTermLiability = 'liability::long-term-liability', AssetDevelopmentCosts = 'asset::development-costs', AssetGoodwill = 'asset::goodwill', OtherExpenseGasAndFuel = 'other-expense::gas-and-fuel', OtherIncomeLossOnDisposalOfAssets = 'other-income::loss-on-disposal-of-assets', EquityAccumulatedAdjustment = 'equity::accumulated-adjustment', AssetLongTermLoansAndAdvancesToRelatedParties = 'asset::long-term-loans-and-advances-to-related-parties', ExpenseProjectStudiesSurveysAssessments = 'expense::project-studies-surveys-assessments', OtherExpenseVehicleLease = 'other-expense::vehicle-lease', OtherExpenseDepreciation = 'other-expense::depreciation', Income = 'income', AssetSecurityDeposits = 'asset::security-deposits', ExpenseTaxesPaid = 'expense::taxes-paid', ExpenseLegalProfessionalFees = 'expense::legal-professional-fees', ExpenseLossOnDiscontinuedOperationsNetOfTax = 'expense::loss-on-discontinued-operations-net-of-tax', LiabilityShareholderNotesPayable = 'liability::shareholder-notes-payable', OtherCurrentLiabilityPayrollClearing = 'other-current-liability::payroll-clearing', OtherCurrentLiabilityInsurancePayable = 'other-current-liability::insurance-payable', ExpenseOtherRentalCosts = 'expense::other-rental-costs', OtherExpenseOtherMiscellaneousExpense = 'other-expense::other-miscellaneous-expense', ExpenseStaffCosts = 'expense::staff-costs', OtherCurrentLiabilityDividendsPayable = 'other-current-liability::dividends-payable', AssetBank = 'asset::bank', OtherExpenseExceptionalItems = 'other-expense::exceptional-items', AssetCashAndCashEquivalents = 'asset::cash-and-cash-equivalents', AssetFixedAssetCopiers = 'asset::fixed-asset-copiers', AssetAccumulatedDepreciation = 'asset::accumulated-depreciation', LiabilityProvisionsNonCurrentLiabilities = 'liability::provisions-non-current-liabilities', AssetAccumulatedAmortizationOfOtherAssets = 'asset::accumulated-amortization-of-other-assets', OtherIncome = 'other-income', AssetAccumulatedAmortization = 'asset::accumulated-amortization', ExpenseCharitableContributions = 'expense::charitable-contributions', ExpenseInterestPaid = 'expense::interest-paid', EquityPartnerDistributions = 'equity::partner-distributions', ExpenseGlobalTaxExpense = 'expense::global-tax-expense', OtherCurrentLiabilityInterestPayables = 'other-current-liability::interest-payables', RevenueServiceFeeIncome = 'revenue::service-fee-income', LiabilityOtherLongTermLiabilities = 'liability::other-long-term-liabilities', AssetAssetsAvailableForSale = 'asset::assets-available-for-sale', ExpenseBadDebts = 'expense::bad-debts', OtherExpenseWashAndRoadServices = 'other-expense::wash-and-road-services', AssetFixedAssetPhone = 'asset::fixed-asset-phone', OtherCurrentLiabilityGlobalTaxPayable = 'other-current-liability::global-tax-payable', AssetGlobalTaxRefund = 'asset::global-tax-refund', LiabilityBankLoans = 'liability::bank-loans', OtherCurrentLiabilityStaffAndRelatedLiabilityAccounts = 'other-current-liability::staff-and-related-liability-accounts', AssetExpenditureAuthorisationsAndLettersOfCredit = 'asset::expenditure-authorisations-and-letters-of-credit', OtherExpenseHomeOwnerRentalInsurance = 'other-expense::home-owner-rental-insurance', ExpenseRepairMaintenance = 'expense::repair-maintenance', LiabilityObligationsUnderFinanceLeases = 'liability::obligations-under-finance-leases', ExpenseOtherCurrentOperatingCharges = 'expense::other-current-operating-charges', EquityPersonalIncome = 'equity::personal-income', EquityOtherFreeReserves = 'equity::other-free-reserves', LiabilityDeferredTaxLiabilities = 'liability::deferred-tax-liabilities', OtherExpenseDepletion = 'other-expense::depletion', ExpenseAppropriationsToDepreciation = 'expense::appropriations-to-depreciation', CostOfGoodsSoldCostOfSales = 'cost-of-goods-sold::cost-of-sales', AssetInventory = 'asset::inventory', OtherExpenseRepairsAndMaintenance = 'other-expense::repairs-and-maintenance', RevenueCashReceiptIncome = 'revenue::cash-receipt-income', AssetFixedAssetFurniture = 'asset::fixed-asset-furniture', AssetInvestments = 'asset::investments', AssetOtherConsumables = 'asset::other-consumables', LiabilityCreditCard = 'liability::credit-card', OtherCurrentLiabilityTrustAccountsLiabilities = 'other-current-liability::trust-accounts-liabilities', ExpenseOtherSellingExpenses = 'expense::other-selling-expenses', OtherExpensePenaltiesSettlements = 'other-expense::penalties-settlements', ExpenseUtilities = 'expense::utilities', OtherExpense = 'other-expense', OtherExpenseMatCredit = 'other-expense::mat-credit', LiabilityNotesPayable = 'liability::notes-payable', EquityPartnersEquity = 'equity::partners-equity', OtherCurrentLiabilityProvisionForWarrantyObligations = 'other-current-liability::provision-for-warranty-obligations', AssetMachineryAndEquipment = 'asset::machinery-and-equipment', OtherExpenseIncomeTaxOtherExpense = 'other-expense::income-tax-other-expense', Expense = 'expense', OtherCurrentLiabilityCurrentTaxLiability = 'other-current-liability::current-tax-liability', LiabilityOtherLongTermProvisions = 'liability::other-long-term-provisions', AssetCalledUpShareCapitalNotPaid = 'asset::called-up-share-capital-not-paid', AssetLoansToOfficers = 'asset::loans-to-officers', EquityOpeningBalanceEquity = 'equity::opening-balance-equity', AssetInternalTransfers = 'asset::internal-transfers', AssetLicenses = 'asset::licenses', RevenueOtherPrimaryIncome = 'revenue::other-primary-income', OtherCurrentLiabilityCurrentPortionOfObligationsUnderFinanceLeases = 'other-current-liability::current-portion-of-obligations-under-finance-leases', RevenueSalesWholesale = 'revenue::sales-wholesale', ExpenseShippingFreightDelivery = 'expense::shipping-freight-delivery', OtherCurrentLiabilityLineOfCredit = 'other-current-liability::line-of-credit', AssetFixedAsset = 'asset::fixed-asset', OtherCurrentLiabilityCurrentLiabilities = 'other-current-liability::current-liabilities', AssetAvailableForSaleFinancialAssets = 'asset::available-for-sale-financial-assets', AssetAssetsHeldForSale = 'asset::assets-held-for-sale', AssetGlobalTaxDeferred = 'asset::global-tax-deferred', OtherCurrentLiabilityDutiesAndTaxes = 'other-current-liability::duties-and-taxes', AssetOtherAsset = 'asset::other-asset', OtherExpenseTaxRoundoffGainOrLoss = 'other-expense::tax-roundoff-gain-or-loss', AssetIntangibleAssets = 'asset::intangible-assets', AssetLandAsset = 'asset::land-asset', ExpenseDuesSubscriptions = 'expense::dues-subscriptions', AssetProvisionsNonCurrentAssets = 'asset::provisions-non-current-assets', AssetShortTermLoansAndAdvancesToRelatedParties = 'asset::short-term-loans-and-advances-to-related-parties', AssetOtherLongTermInvestments = 'asset::other-long-term-investments', CostOfGoodsSoldOtherCostsOfServiceCos = 'cost-of-goods-sold::other-costs-of-service-cos', ExpenseCommissionsAndFees = 'expense::commissions-and-fees', Liability = 'liability', AssetEmployeeCashAdvances = 'asset::employee-cash-advances', AssetFixedAssetPhotoVideo = 'asset::fixed-asset-photo-video', ExpenseManagementCompensation = 'expense::management-compensation', ExpenseTravel = 'expense::travel', OtherExpensePriorPeriodItems = 'other-expense::prior-period-items', ExpenseTravelMeals = 'expense::travel-meals', AssetProvisionsFixedAssets = 'asset::provisions-fixed-assets', EquityEstimatedTaxes = 'equity::estimated-taxes', OtherExpenseVehicleInsurance = 'other-expense::vehicle-insurance', AssetAllowanceForBadDebts = 'asset::allowance-for-bad-debts', CostOfGoodsSoldEquipmentRentalCos = 'cost-of-goods-sold::equipment-rental-cos', EquityOwnersEquity = 'equity::owners-equity', EquityTreasuryStock = 'equity::treasury-stock', Asset = 'asset', AssetInvestmentUsGovernmentObligations = 'asset::investment-us-government-obligations', ExpenseExtraordinaryCharges = 'expense::extraordinary-charges', OtherExpenseOtherVehicleExpenses = 'other-expense::other-vehicle-expenses', ExpenseOfficeGeneralAdministrativeExpenses = 'expense::office-general-administrative-expenses', OtherExpenseAmortization = 'other-expense::amortization', EquityMoneyReceivedAgainstShareWarrants = 'equity::money-received-against-share-warrants', AssetLoansToOthers = 'asset::loans-to-others', ExpenseSuppliesMaterials = 'expense::supplies-materials', Equity = 'equity', OtherCurrentLiability = 'other-current-liability', AssetAssetsInCourseOfConstruction = 'asset::assets-in-course-of-construction', AssetLoansToStockholders = 'asset::loans-to-stockholders', AssetParticipatingInterests = 'asset::participating-interests', EquityRetainedEarnings = 'equity::retained-earnings', AssetOtherIntangibleAssets = 'asset::other-intangible-assets', EquityShareCapital = 'equity::share-capital', AssetInvestmentOther = 'asset::investment-other', AssetBuildings = 'asset::buildings', AssetOtherEarMarkedBankAccounts = 'asset::other-ear-marked-bank-accounts', ExpenseInsurance = 'expense::insurance', EquityPartnerContributions = 'equity::partner-contributions', RevenueOwnWorkCapitalized = 'revenue::own-work-capitalized', AssetDeferredTax = 'asset::deferred-tax', OtherExpenseExtraordinaryItems = 'other-expense::extraordinary-items', EquityHealthcare = 'equity::healthcare', AssetMoneyMarket = 'asset::money-market', OtherCurrentLiabilityRentsInTrustLiability = 'other-current-liability::rents-in-trust-liability', LiabilityGovernmentAndOtherPublicAuthorities = 'liability::government-and-other-public-authorities', LiabilityGroupAndAssociates = 'liability::group-and-associates', CostOfGoodsSoldShippingFreightDeliveryCos = 'cost-of-goods-sold::shipping-freight-delivery-cos', OtherExpenseParkingAndTolls = 'other-expense::parking-and-tolls', ExpenseCostOfLabor = 'expense::cost-of-labor', LiabilityLiabilitiesRelatedToAssetsHeldForSale = 'liability::liabilities-related-to-assets-held-for-sale', LiabilityAccruedLongTermLiabilities = 'liability::accrued-long-term-liabilities' }
export const enum Status { Active = 'active', Expired = 'expired', Scheduled = 'scheduled' }
export const enum CustomerSelection { All = 'all', Prerequisite = 'prerequisite' }
export const enum TransactionMethod { Atm = 'atm', Online = 'online', Mobile = 'mobile', BankBranch = 'bank-branch', Mail = 'mail', Telephone = 'telephone' }
export const enum TargetSelection { Entitled = 'entitled', All = 'all' }
export const enum AllocationMethod { Each = 'each', Across = 'across' }
export const enum AppliesTo { SpecificCategories = 'specific-categories', AllItems = 'all-items', SpecificItems = 'specific-items' }
export const enum Country { CaboVerde = 'cabo-verde', Guinea = 'guinea', Germany = 'germany', CostaRica = 'costa-rica', Hungary = 'hungary', Italy = 'italy', Egypt = 'egypt', Jamaica = 'jamaica', Mongolia = 'mongolia', Gabon = 'gabon', Liberia = 'liberia', Burundi = 'burundi', Myanmar = 'myanmar', Austria = 'austria', China = 'china', Russia = 'russia', Iran = 'iran', Liechtenstein = 'liechtenstein', MarshallIslands = 'marshall-islands', Uganda = 'uganda', Switzerland = 'switzerland', Spain = 'spain', Brunei = 'brunei', Croatia = 'croatia', Monaco = 'monaco', NewZealand = 'new-zealand', PapuaNewGuinea = 'papua-new-guinea', Eswatini = 'eswatini', Mali = 'mali', Thailand = 'thailand', Ukraine = 'ukraine', Cambodia = 'cambodia', SouthSudan = 'south-sudan', Togo = 'togo', Ireland = 'ireland', Sudan = 'sudan', Tonga = 'tonga', Tunisia = 'tunisia', Cuba = 'cuba', Honduras = 'honduras', Venezuela = 'venezuela', Nepal = 'nepal', Azerbaijan = 'azerbaijan', Argentina = 'argentina', Comoros = 'comoros', Afghanistan = 'afghanistan', CongoDemocraticRepublic = 'congo-democratic-republic', Kiribati = 'kiribati', Namibia = 'namibia', Malta = 'malta', Algeria = 'algeria', Oman = 'oman', SanMarino = 'san-marino', Philippines = 'philippines', Serbia = 'serbia', Turkey = 'turkey', Luxembourg = 'luxembourg', UnitedKingdom = 'united-kingdom', Zimbabwe = 'zimbabwe', Georgia = 'georgia', Singapore = 'singapore', Kazakhstan = 'kazakhstan', Samoa = 'samoa', Belarus = 'belarus', Estonia = 'estonia', Lithuania = 'lithuania', SriLanka = 'sri-lanka', Ghana = 'ghana', Slovakia = 'slovakia', Angola = 'angola', Colombia = 'colombia', Nauru = 'nauru', Bulgaria = 'bulgaria', Mozambique = 'mozambique', TimorLeste = 'timor-leste', Palau = 'palau', Lebanon = 'lebanon', Kyrgyzstan = 'kyrgyzstan', Mauritania = 'mauritania', Tajikistan = 'tajikistan', Vietnam = 'vietnam', Chile = 'chile', SaudiArabia = 'saudi-arabia', Rwanda = 'rwanda', Moldova = 'moldova', Nicaragua = 'nicaragua', Jordan = 'jordan', Palestine = 'palestine', Libya = 'libya', Taiwan = 'taiwan', Slovenia = 'slovenia', Greece = 'greece', Niger = 'niger', Mexico = 'mexico', Chad = 'chad', Paraguay = 'paraguay', Albania = 'albania', Belize = 'belize', AntiguaAndBarbuda = 'antigua-and-barbuda', Guatemala = 'guatemala', Guyana = 'guyana', SaintVincentAndTheGrenadines = 'saint-vincent-and-the-grenadines', Peru = 'peru', Tanzania = 'tanzania', Tuvalu = 'tuvalu', Vanuatu = 'vanuatu', Panama = 'panama', Uruguay = 'uruguay', Fiji = 'fiji', Malawi = 'malawi', EquatorialGuinea = 'equatorial-guinea', Cyprus = 'cyprus', Ecuador = 'ecuador', SouthAfrica = 'south-africa', Iceland = 'iceland', BosniaAndHerzegovina = 'bosnia-and-herzegovina', Kenya = 'kenya', France = 'france', Norway = 'norway', UnitedArabEmirates = 'united-arab-emirates', Ethiopia = 'ethiopia', India = 'india', Nigeria = 'nigeria', Botswana = 'botswana', DominicanRepublic = 'dominican-republic', Eritrea = 'eritrea', Lesotho = 'lesotho', Maldives = 'maldives', BurkinaFaso = 'burkina-faso', Seychelles = 'seychelles', SaintLucia = 'saint-lucia', Denmark = 'denmark', Bahrain = 'bahrain', ElSalvador = 'el-salvador', Finland = 'finland', Grenada = 'grenada', Qatar = 'qatar', Bolivia = 'bolivia', Iraq = 'iraq', Bahamas = 'bahamas', SaintKittsAndNevis = 'saint-kitts-and-nevis', Portugal = 'portugal', Brazil = 'brazil', Morocco = 'morocco', Kuwait = 'kuwait', Micronesia = 'micronesia', CentralAfricanRepublic = 'central-african-republic', NorthKorea = 'north-korea', Belgium = 'belgium', Malaysia = 'malaysia', Mauritius = 'mauritius', Israel = 'israel', Pakistan = 'pakistan', Haiti = 'haiti', SaoTomeAndPrincipe = 'sao-tome-and-principe', Somalia = 'somalia', Madagascar = 'madagascar', Netherlands = 'netherlands', SouthKorea = 'south-korea', Montenegro = 'montenegro', Canada = 'canada', Indonesia = 'indonesia', SierraLeone = 'sierra-leone', Suriname = 'suriname', Syria = 'syria', Turkmenistan = 'turkmenistan', Andorra = 'andorra', CoteDIvoire = 'cote-d-ivoire', Cameroon = 'cameroon', GuineaBissau = 'guinea-bissau', CzechRepublic = 'czech-republic', Senegal = 'senegal', Sweden = 'sweden', Barbados = 'barbados', SolomonIslands = 'solomon-islands', UnitedStates = 'united-states', Uzbekistan = 'uzbekistan', Laos = 'laos', Australia = 'australia', VaticanCity = 'vatican-city', Armenia = 'armenia', CongoRepublic = 'congo-republic', Yemen = 'yemen', Poland = 'poland', Romania = 'romania', Japan = 'japan', Zambia = 'zambia', Gambia = 'gambia', NorthMacedonia = 'north-macedonia', Djibouti = 'djibouti', Latvia = 'latvia', Benin = 'benin', Dominica = 'dominica', TrinidadAndTobago = 'trinidad-and-tobago', Bangladesh = 'bangladesh', Bhutan = 'bhutan' }
export const enum GlobalTaxType { SalesTax = 'sales-tax', ExciseTax = 'excise-tax', Vat = 'vat', Gst = 'gst', PropertyTax = 'property-tax', Other = 'other', CustomsDuty = 'customs-duty' }
export const enum IdentityProvider { Google = 'google', Tumblr = 'tumblr', Dribbble = 'dribbble', Vimeo = 'vimeo', Behance = 'behance', Yahoo = 'yahoo', Line = 'line', Pinterest = 'pinterest', Github = 'github', Reddit = 'reddit', Facebook = 'facebook', Signal = 'signal', Qq = 'qq', Linkedin = 'linkedin', Amazon = 'amazon', Apple = 'apple', Discord = 'discord', Telegram = 'telegram', Twitter = 'twitter', Instagram = 'instagram', Flickr = 'flickr', Paypal = 'paypal', Snapchat = 'snapchat', Wechat = 'wechat', Microsoft = 'microsoft', Whatsapp = 'whatsapp', Slack = 'slack', Tiktok = 'tiktok', Other = 'other', Foursquare = 'foursquare' }
export const enum AccountEngagementLevel { Hot = 'hot', Warm = 'warm', Cold = 'cold', Unknown = 'unknown' }
export const enum ReviewApprovalStatus { Approved = 'approved', Rejected = 'rejected', Pending = 'pending', InReview = 'in-review', Revised = 'revised' }
export const enum StakeholderType { Vendor = 'vendor', Partner = 'partner', Investor = 'investor', Competitor = 'competitor', Customer = 'customer', Other = 'other' }
export const enum AccountStatus { Pending = 'pending', Suspended = 'suspended', Active = 'active', Inactive = 'inactive', Closed = 'closed' }
export const enum CampaignStatus { Archived = 'archived', Cancelled = 'cancelled', Paused = 'paused', Draft = 'draft', Scheduled = 'scheduled', Completed = 'completed', Active = 'active', Planned = 'planned' }
export const enum CustomerType { B2c = 'b2c', Retail = 'retail', Online = 'online', Corporate = 'corporate', B2b = 'b2b', Wholesale = 'wholesale' }
export const enum MessageContentType { Contact = 'contact', Audio = 'audio', Link = 'link', Document = 'document', Sticker = 'sticker', Gif = 'gif', Text = 'text', Voice = 'voice', Html = 'html', Image = 'image', Video = 'video', File = 'file', Location = 'location' }
export const enum ReactionType { Interested = 'interested', Angry = 'angry', Bookmark = 'bookmark', Sad = 'sad', Dislike = 'dislike', Love = 'love', Wow = 'wow', Like = 'like', Laugh = 'laugh' }
export const enum SupportTicketPriority { Urgent = 'urgent', Immediate = 'immediate', Low = 'low', Medium = 'medium', High = 'high' }
export const enum IssueLifecycleStatus { Cancelled = 'cancelled', Closed = 'closed', Pending = 'pending', InProgress = 'in-progress', OnHold = 'on-hold', Open = 'open', Resolved = 'resolved' }
export const enum OrderStatus { PartiallyFulfilled = 'partially-fulfilled', Completed = 'completed', OnHold = 'on-hold', Failed = 'failed', Cancelled = 'cancelled', Draft = 'draft', Refunded = 'refunded', Shipped = 'shipped', Returned = 'returned', Confirmed = 'confirmed', AwaitingShipment = 'awaiting-shipment', Pending = 'pending', AwaitingPickup = 'awaiting-pickup', AwaitingPayment = 'awaiting-payment', Disputed = 'disputed', Abandoned = 'abandoned', Processing = 'processing', Delivered = 'delivered' }
export const enum DiscountType { TieredDiscount = 'tiered-discount', ConditionalDiscount = 'conditional-discount', VariablePercentage = 'variable-percentage', BuyOneGetOne = 'buy-one-get-one', VariableAmount = 'variable-amount', Percentage = 'percentage', UnknownDiscount = 'unknown-discount', FixedAmount = 'fixed-amount' }
export const enum FulfillmentStatus { Delivered = 'delivered', InTransit = 'in-transit', Pending = 'pending', Failure = 'failure', Returned = 'returned', Cancelled = 'cancelled' }
export const enum ProductAvailabilityStatus { Discontinued = 'discontinued', PreOrder = 'pre-order', BackOrder = 'back-order', InStock = 'in-stock', OutOfStock = 'out-of-stock' }
export const enum ExpenseApprovalStatus { New = 'new', Pending = 'pending', Approved = 'approved', Reimbursed = 'reimbursed', Reviewing = 'reviewing', Cancelled = 'cancelled', Denied = 'denied', Processed = 'processed' }
export const enum FinancialChargeType { ProcessingFee = 'processing-fee', ServiceCharge = 'service-charge', InterestCharge = 'interest-charge', Commission = 'commission', Other = 'other', LateFee = 'late-fee', TransactionFee = 'transaction-fee' }
export const enum BillingStatus { Submitted = 'submitted', Authorised = 'authorised', Paid = 'paid', Unpaid = 'unpaid', Pending = 'pending', Overdue = 'overdue', PartiallyPaid = 'partially-paid', Deleted = 'deleted', Voided = 'voided', Draft = 'draft' }
export const enum InvoiceAdjustmentType { Discount = 'discount', Tip = 'tip', Other = 'other', Tax = 'tax', Shipping = 'shipping' }
export const enum DataType { String = 'string', Json = 'json', Custom = 'custom', Boolean = 'boolean', Number = 'number', Null = 'null', Binary = 'binary', Undefined = 'undefined', Array = 'array', Date = 'date', Object = 'object', Timestamp = 'timestamp' }
export const enum EmploymentType { PartTime = 'part-time', Seasonal = 'seasonal', FullTime = 'full-time', Contract = 'contract', Temporary = 'temporary', Internship = 'internship', Permanent = 'permanent', Freelance = 'freelance', Volunteer = 'volunteer' }
export const enum TimeCycle { Biweekly = 'biweekly', SemiMonthly = 'semi-monthly', Biennially = 'biennially', Monthly = 'monthly', Custom = 'custom', Triennially = 'triennially', AdHoc = 'ad-hoc', Minutely = 'minutely', Hourly = 'hourly', Weekly = 'weekly', Daily = 'daily', Quarterly = 'quarterly', SemiAnnually = 'semi-annually', Annually = 'annually', Secondly = 'secondly' }
export const enum FinancialTrackingCategories { None = 'none', Customer = 'customer', Vendor = 'vendor', CostCenter = 'cost-center', Project = 'project', Department = 'department', Location = 'location', Class = 'class', Employee = 'employee', Product = 'product', Division = 'division', Service = 'service', Other = 'other' }
export const enum CampaignType { SearchEngine = 'search-engine', Other = 'other', Email = 'email', Display = 'display', SocialMedia = 'social-media' }
export const enum ContactAddressType { Other = 'other', Home = 'home', Billing = 'billing', Personal = 'personal', Temporary = 'temporary', Shipping = 'shipping', Business = 'business', Work = 'work' }
export const enum LeadLifecycleStatus { Converted = 'converted', Unqualified = 'unqualified', BadTiming = 'bad-timing', Revisited = 'revisited', InProcess = 'in-process', Lost = 'lost', AttemptedToContact = 'attempted-to-contact', Open = 'open', Connected = 'connected', New = 'new' }
export const enum ParticipantEngagementStatus { Admin = 'admin', Moderator = 'moderator', Guest = 'guest', Inactive = 'inactive', Active = 'active', Banned = 'banned', Left = 'left' }
export const enum ItemEntityStatus { Pending = 'pending', Archived = 'archived', Inactive = 'inactive', Deleted = 'deleted', Completed = 'completed', Suspended = 'suspended', Active = 'active' }
export const enum Currency { OMR = 'omr', QAR = 'qar', KID = 'kid', AWG = 'awg', LAK = 'lak', ERN = 'ern', BMD = 'bmd', JEP = 'jep', UAH = 'uah', LBP = 'lbp', HKD = 'hkd', THB = 'thb', IDR = 'idr', BDT = 'bdt', XPF = 'xpf', PKR = 'pkr', EGP = 'egp', SEK = 'sek', IQD = 'iqd', TWD = 'twd', GTQ = 'gtq', MXN = 'mxn', TTD = 'ttd', PGK = 'pgk', MVR = 'mvr', KWD = 'kwd', SZL = 'szl', GYD = 'gyd', LKR = 'lkr', AUD = 'aud', INR = 'inr', GGP = 'ggp', LYD = 'lyd', ETB = 'etb', HTG = 'htg', NGN = 'ngn', VUV = 'vuv', BYN = 'byn', BWP = 'bwp', GHS = 'ghs', CZK = 'czk', DZD = 'dzd', GIP = 'gip', SAR = 'sar', SLL = 'sll', TOP = 'top', NIO = 'nio', BRL = 'brl', FKP = 'fkp', MYR = 'myr', SYP = 'syp', MOP = 'mop', TND = 'tnd', DOP = 'dop', JPY = 'jpy', UZS = 'uzs', BBD = 'bbd', BHD = 'bhd', CVE = 'cve', BAM = 'bam', GNF = 'gnf', PLN = 'pln', GMD = 'gmd', SOS = 'sos', MNT = 'mnt', CRC = 'crc', COP = 'cop', TMT = 'tmt', RUB = 'rub', SGD = 'sgd', RSD = 'rsd', UGX = 'ugx', KGS = 'kgs', XDR = 'xdr', SHP = 'shp', IMP = 'imp', XOF = 'xof', CLP = 'clp', KPW = 'kpw', BZD = 'bzd', YER = 'yer', HUF = 'huf', MAD = 'mad', ARS = 'ars', BSD = 'bsd', KMF = 'kmf', AED = 'aed', ANG = 'ang', PHP = 'php', DKK = 'dkk', JOD = 'jod', CUC = 'cuc', ZMW = 'zmw', IRR = 'irr', DJF = 'djf', BIF = 'bif', CDF = 'cdf', BND = 'bnd', CUP = 'cup', NPR = 'npr', TZS = 'tzs', GEL = 'gel', KYD = 'kyd', ISK = 'isk', KHR = 'khr', SDG = 'sdg', ZAR = 'zar', CAD = 'cad', RWF = 'rwf', AOA = 'aoa', TRY = 'try', BOB = 'bob', ILS = 'ils', ALL = 'all', MGA = 'mga', MKD = 'mkd', XAF = 'xaf', MWK = 'mwk', CNY = 'cny', LSL = 'lsl', KZT = 'kzt', LRD = 'lrd', NOK = 'nok', SBD = 'sbd', SRD = 'srd', SSP = 'ssp', AMD = 'amd', STN = 'stn', TVD = 'tvd', UYU = 'uyu', VES = 'ves', SCR = 'scr', JMD = 'jmd', AZN = 'azn', HRK = 'hrk', MUR = 'mur', CHF = 'chf', USD = 'usd', MDL = 'mdl', BTN = 'btn', HNL = 'hnl', MZN = 'mzn', NAD = 'nad', XCD = 'xcd', KRW = 'krw', PAB = 'pab', WST = 'wst', MRU = 'mru', KES = 'kes', VND = 'vnd', RON = 'ron', AFN = 'afn', GBP = 'gbp', MMK = 'mmk', FOK = 'fok', ZWL = 'zwl', NZD = 'nzd', BGN = 'bgn', EUR = 'eur', FJD = 'fjd', PEN = 'pen', PYG = 'pyg', TJS = 'tjs' }
export const enum CustomerEligibilityStatus { ReturningCustomers = 'returning-customers', SpecificConditions = 'specific-conditions', AllCustomers = 'all-customers', VipCustomers = 'vip-customers', Other = 'other', NewCustomers = 'new-customers' }
export const enum ItemCondition { Damaged = 'damaged', New = 'new', Used = 'used', LikeNew = 'like-new', OpenBox = 'open-box', Refurbished = 'refurbished' }
export const enum TransactionType { Payment = 'payment', Deposit = 'deposit', Adjustment = 'adjustment', Fee = 'fee', Transfer = 'transfer', Charge = 'charge', Withdrawal = 'withdrawal', Refund = 'refund' }
export const enum EntityLifecycleStatus { Active = 'active', Inactive = 'inactive', Draft = 'draft', Preorder = 'preorder', Archived = 'archived', Deleted = 'deleted', Scheduled = 'scheduled' }
export const enum JournalEntryStatus { Error = 'error', Corrected = 'corrected', Draft = 'draft', Posted = 'posted', Voided = 'voided', Pending = 'pending' }
export const enum DayOfWeek { Sunday = 'sunday', Friday = 'friday', Tuesday = 'tuesday', Monday = 'monday', Wednesday = 'wednesday', Thursday = 'thursday', Saturday = 'saturday' }
export const enum AccountingAccountType { RevenueOtherCurrentOperatingIncome = 'revenue::other-current-operating-income', AssetInternalTransfers = 'asset::internal-transfers', CostOfGoodsSoldSuppliesMaterialsCogs = 'cost-of-goods-sold::supplies-materials-cogs', RevenueSavingsByTaxScheme = 'revenue::savings-by-tax-scheme', LiabilityStaffAndRelatedLongTermLiabilityAccounts = 'liability::staff-and-related-long-term-liability-accounts', OtherCurrentLiabilityShortTermBorrowings = 'other-current-liability::short-term-borrowings', OtherExpenseVehicleLoan = 'other-expense::vehicle-loan', OtherCurrentLiabilityDutiesAndTaxes = 'other-current-liability::duties-and-taxes', AssetInventory = 'asset::inventory', AssetLongTermInvestments = 'asset::long-term-investments', LiabilityOutstandingDuesMicroSmallEnterprise = 'liability::outstanding-dues-micro-small-enterprise', LiabilityProvisionsNonCurrentLiabilities = 'liability::provisions-non-current-liabilities', EquityOtherFreeReserves = 'equity::other-free-reserves', AssetAccumulatedAmortization = 'asset::accumulated-amortization', OtherIncomeLossOnDisposalOfAssets = 'other-income::loss-on-disposal-of-assets', OtherExpenseVehicleLease = 'other-expense::vehicle-lease', EquityCapitalReserves = 'equity::capital-reserves', LiabilityGovernmentAndOtherPublicAuthorities = 'liability::government-and-other-public-authorities', AssetInvestmentTaxExemptSecurities = 'asset::investment-tax-exempt-securities', EquityMoneyReceivedAgainstShareWarrants = 'equity::money-received-against-share-warrants', AssetAssetsHeldForSale = 'asset::assets-held-for-sale', ExpenseStaffCosts = 'expense::staff-costs', ExpenseIncomeTaxExpense = 'expense::income-tax-expense', OtherExpenseOtherHomeOfficeExpenses = 'other-expense::other-home-office-expenses', AssetFixedAssetSoftware = 'asset::fixed-asset-software', AssetFixedAssetOtherToolsEquipment = 'asset::fixed-asset-other-tools-equipment', AssetAllowanceForBadDebts = 'asset::allowance-for-bad-debts', AssetLoansToStockholders = 'asset::loans-to-stockholders', AssetMachineryAndEquipment = 'asset::machinery-and-equipment', RevenueCashReceiptIncome = 'revenue::cash-receipt-income', ExpenseProjectStudiesSurveysAssessments = 'expense::project-studies-surveys-assessments', ExpenseTravelExpensesGeneralAndAdminExpenses = 'expense::travel-expenses-general-and-admin-expenses', AssetPrepaymentsAndAccruedIncome = 'asset::prepayments-and-accrued-income', OtherCurrentLiabilityInsurancePayable = 'other-current-liability::insurance-payable', AssetAvailableForSaleFinancialAssets = 'asset::available-for-sale-financial-assets', AssetGoodwill = 'asset::goodwill', OtherExpenseExtraordinaryItems = 'other-expense::extraordinary-items', OtherExpenseExceptionalItems = 'other-expense::exceptional-items', AssetOtherAsset = 'asset::other-asset', LiabilityAccruedLongTermLiabilities = 'liability::accrued-long-term-liabilities', ExpenseLegalProfessionalFees = 'expense::legal-professional-fees', ExpensePayrollExpenses = 'expense::payroll-expenses', OtherCurrentLiabilityCurrentLiabilities = 'other-current-liability::current-liabilities', ExpenseOtherBusinessExpenses = 'expense::other-business-expenses', RevenueSalesRetail = 'revenue::sales-retail', ExpenseShippingFreightDelivery = 'expense::shipping-freight-delivery', OtherExpenseDeferredTaxExpense = 'other-expense::deferred-tax-expense', EquityFunds = 'equity::funds', RevenueSalesOfProductIncome = 'revenue::sales-of-product-income', AssetProvisionsFixedAssets = 'asset::provisions-fixed-assets', ExpenseCharitableContributions = 'expense::charitable-contributions', AssetIntangibleAssetsUnderDevelopment = 'asset::intangible-assets-under-development', AssetOtherEarMarkedBankAccounts = 'asset::other-ear-marked-bank-accounts', ExpenseEquipmentRental = 'expense::equipment-rental', OtherExpenseAmortization = 'other-expense::amortization', ExpenseManagementCompensation = 'expense::management-compensation', OtherIncomeOtherOperatingIncome = 'other-income::other-operating-income', EquityPartnerContributions = 'equity::partner-contributions', ExpenseCostOfLabor = 'expense::cost-of-labor', LiabilityOtherLongTermLiabilities = 'liability::other-long-term-liabilities', RevenueNonProfitIncome = 'revenue::non-profit-income', OtherIncomeUnrealisedLossOnSecuritiesNetOfTax = 'other-income::unrealised-loss-on-securities-net-of-tax', AssetDepletableAssets = 'asset::depletable-assets', EquityAccumulatedOtherComprehensiveIncome = 'equity::accumulated-other-comprehensive-income', AssetOtherCurrentAssets = 'asset::other-current-assets', ExpenseDuesSubscriptions = 'expense::dues-subscriptions', OtherIncomeOtherMiscellaneousIncome = 'other-income::other-miscellaneous-income', OtherExpense = 'other-expense', AssetAccumulatedDepreciation = 'asset::accumulated-depreciation', AccountsReceivable = 'accounts-receivable', AssetFixedAsset = 'asset::fixed-asset', OtherCurrentLiabilityGlobalTaxSuspense = 'other-current-liability::global-tax-suspense', AssetCumulativeDepreciationOnIntangibleAssets = 'asset::cumulative-depreciation-on-intangible-assets', OtherExpenseVehicleLoanInterest = 'other-expense::vehicle-loan-interest', AssetCapitalWip = 'asset::capital-wip', OtherCurrentLiabilityCurrentPortionOfObligationsUnderFinanceLeases = 'other-current-liability::current-portion-of-obligations-under-finance-leases', AssetExpenditureAuthorisationsAndLettersOfCredit = 'asset::expenditure-authorisations-and-letters-of-credit', EquityShareApplicationMoneyPendingAllotment = 'equity::share-application-money-pending-allotment', ExpenseSuppliesMaterials = 'expense::supplies-materials', OtherExpenseUtilities = 'other-expense::utilities', OtherCurrentLiabilityCurrentPortionEmployeeBenefitsObligations = 'other-current-liability::current-portion-employee-benefits-obligations', ExpenseRepairMaintenance = 'expense::repair-maintenance', AssetOtherCurrentAsset = 'asset::other-current-asset', ExpenseOfficeGeneralAdministrativeExpenses = 'expense::office-general-administrative-expenses', ExpenseAppropriationsToDepreciation = 'expense::appropriations-to-depreciation', ExpenseExternalServices = 'expense::external-services', OtherExpenseVehicle = 'other-expense::vehicle', ExpenseOfficeExpenses = 'expense::office-expenses', CostOfGoodsSold = 'cost-of-goods-sold', AssetFixedAssetFurniture = 'asset::fixed-asset-furniture', OtherExpenseVehicleInsurance = 'other-expense::vehicle-insurance', LiabilityDeferredTaxLiabilities = 'liability::deferred-tax-liabilities', OtherCurrentLiabilityLineOfCredit = 'other-current-liability::line-of-credit', OtherExpenseParkingAndTolls = 'other-expense::parking-and-tolls', AssetFixedAssetPhone = 'asset::fixed-asset-phone', AssetFurnitureAndFixtures = 'asset::furniture-and-fixtures', RevenueOwnWorkCapitalized = 'revenue::own-work-capitalized', AssetBank = 'asset::bank', AssetShortTermInvestmentsInRelatedParties = 'asset::short-term-investments-in-related-parties', AssetLoansToOthers = 'asset::loans-to-others', EquityOpeningBalanceEquity = 'equity::opening-balance-equity', EquityOwnersEquity = 'equity::owners-equity', AssetFixedAssetPhotoVideo = 'asset::fixed-asset-photo-video', AssetDeferredTax = 'asset::deferred-tax', LiabilityAccruedVacationPayable = 'liability::accrued-vacation-payable', OtherExpenseRepairsAndMaintenance = 'other-expense::repairs-and-maintenance', AssetSecurityDeposits = 'asset::security-deposits', EquityRetainedEarnings = 'equity::retained-earnings', AssetParticipatingInterests = 'asset::participating-interests', OtherExpenseOtherMiscellaneousExpense = 'other-expense::other-miscellaneous-expense', LiabilityLongTermBorrowings = 'liability::long-term-borrowings', AssetBalWithGovtAuthorities = 'asset::bal-with-govt-authorities', ExpenseTravelExpensesSellingExpense = 'expense::travel-expenses-selling-expense', OtherCurrentLiabilityLoanPayable = 'other-current-liability::loan-payable', OtherCurrentLiabilityRentsInTrustLiability = 'other-current-liability::rents-in-trust-liability', AssetOtherLongTermInvestments = 'asset::other-long-term-investments', ExpenseGlobalTaxExpense = 'expense::global-tax-expense', OtherExpenseVehicleRegistration = 'other-expense::vehicle-registration', OtherExpensePenaltiesSettlements = 'other-expense::penalties-settlements', LiabilityGroupAndAssociates = 'liability::group-and-associates', OtherCurrentLiabilityFederalIncomeTaxPayable = 'other-current-liability::federal-income-tax-payable', RevenueDiscountsRefundsGiven = 'revenue::discounts-refunds-given', EquityShareCapital = 'equity::share-capital', LiabilityOutstandingDuesOtherThanMicroSmallEnterprise = 'liability::outstanding-dues-other-than-micro-small-enterprise', LiabilityNotesPayable = 'liability::notes-payable', LiabilityBankLoans = 'liability::bank-loans', AssetBuildings = 'asset::buildings', OtherCurrentLiabilityProvisionsCurrentLiabilities = 'other-current-liability::provisions-current-liabilities', ExpenseAuto = 'expense::auto', Asset = 'asset', ExpenseBadDebts = 'expense::bad-debts', AssetFixedAssetComputers = 'asset::fixed-asset-computers', OtherExpenseGasAndFuel = 'other-expense::gas-and-fuel', OtherExpenseHomeOffice = 'other-expense::home-office', AssetLoansToOfficers = 'asset::loans-to-officers', EquityHealthcare = 'equity::healthcare', OtherIncomeOtherInvestmentIncome = 'other-income::other-investment-income', OtherCurrentLiabilityProvisionForWarrantyObligations = 'other-current-liability::provision-for-warranty-obligations', ExpenseOtherMiscellaneousServiceCost = 'expense::other-miscellaneous-service-cost', ExpenseRentOrLeaseOfBuildings = 'expense::rent-or-lease-of-buildings', ExpenseUnappliedCashBillPaymentExpense = 'expense::unapplied-cash-bill-payment-expense', EquityAccumulatedAdjustment = 'equity::accumulated-adjustment', CostOfGoodsSoldOtherCostsOfServiceCos = 'cost-of-goods-sold::other-costs-of-service-cos', CostOfGoodsSoldShippingFreightDeliveryCos = 'cost-of-goods-sold::shipping-freight-delivery-cos', CostOfGoodsSoldCostOfSales = 'cost-of-goods-sold::cost-of-sales', OtherCurrentLiabilityTradeAndOtherPayables = 'other-current-liability::trade-and-other-payables', ExpenseTravelMeals = 'expense::travel-meals', EquityPreferredStock = 'equity::preferred-stock', OtherExpenseRentAndLease = 'other-expense::rent-and-lease', EquityPersonalIncome = 'equity::personal-income', AssetInvestmentUsGovernmentObligations = 'asset::investment-us-government-obligations', AssetLandAsset = 'asset::land-asset', ExpenseCommissionsAndFees = 'expense::commissions-and-fees', ExpenseOtherSellingExpenses = 'expense::other-selling-expenses', AssetLongTermLoansAndAdvancesToRelatedParties = 'asset::long-term-loans-and-advances-to-related-parties', RevenueOtherPrimaryIncome = 'revenue::other-primary-income', OtherExpenseDepreciation = 'other-expense::depreciation', AssetLicenses = 'asset::licenses', LiabilityLongTermDebit = 'liability::long-term-debit', AssetSavings = 'asset::savings', AssetOtherIntangibleAssets = 'asset::other-intangible-assets', AssetGlobalTaxDeferred = 'asset::global-tax-deferred', OtherExpenseOtherVehicleExpenses = 'other-expense::other-vehicle-expenses', AssetCalledUpShareCapitalNotPaid = 'asset::called-up-share-capital-not-paid', OtherExpenseWashAndRoadServices = 'other-expense::wash-and-road-services', CostOfGoodsSoldFreightAndDeliveryCost = 'cost-of-goods-sold::freight-and-delivery-cost', LiabilityOtherLongTermProvisions = 'liability::other-long-term-provisions', EquityCommonStock = 'equity::common-stock', AssetOtherFixedAssets = 'asset::other-fixed-assets', OtherExpenseHomeOwnerRentalInsurance = 'other-expense::home-owner-rental-insurance', OtherCurrentLiabilitySundryDebtorsAndCreditors = 'other-current-liability::sundry-debtors-and-creditors', EquityDividendDisbursed = 'equity::dividend-disbursed', AssetAssetsInCourseOfConstruction = 'asset::assets-in-course-of-construction', EquityEstimatedTaxes = 'equity::estimated-taxes', ExpenseInterestPaid = 'expense::interest-paid', ExpenseUtilities = 'expense::utilities', ExpenseBorrowingCost = 'expense::borrowing-cost', AssetOtherLongTermAssets = 'asset::other-long-term-assets', AssetTradeAndOtherReceivables = 'asset::trade-and-other-receivables', EquityEquityInEarningsOfSubsidiuaries = 'equity::equity-in-earnings-of-subsidiuaries', AssetAssetsAvailableForSale = 'asset::assets-available-for-sale', AssetOtherConsumables = 'asset::other-consumables', ExpenseOtherExternalServices = 'expense::other-external-services', ExpenseLossOnDiscontinuedOperationsNetOfTax = 'expense::loss-on-discontinued-operations-net-of-tax', CostOfGoodsSoldCostOfLaborCos = 'cost-of-goods-sold::cost-of-labor-cos', AssetIntangibleAssets = 'asset::intangible-assets', OtherCurrentLiability = 'other-current-liability', ExpenseShippingAndDeliveryExpense = 'expense::shipping-and-delivery-expense', Equity = 'equity', ExpenseEntertainmentMeals = 'expense::entertainment-meals', OtherIncomeInterestEarned = 'other-income::interest-earned', AssetInvestmentMortgageRealEstateLoans = 'asset::investment-mortgage-real-estate-loans', ExpensePurchasesRebates = 'expense::purchases-rebates', EquityPaidInCapitalOrSurplus = 'equity::paid-in-capital-or-surplus', CostOfGoodsSoldEquipmentRentalCos = 'cost-of-goods-sold::equipment-rental-cos', LiabilityShareholderNotesPayable = 'liability::shareholder-notes-payable', OtherCurrentLiabilityPayrollTaxPayable = 'other-current-liability::payroll-tax-payable', OtherCurrentLiabilityStaffAndRelatedLiabilityAccounts = 'other-current-liability::staff-and-related-liability-accounts', ExpenseTravel = 'expense::travel', AssetOtherLongTermLoansAndAdvances = 'asset::other-long-term-loans-and-advances', OtherIncomeGainLossOnSaleOfInvestments = 'other-income::gain-loss-on-sale-of-investments', RevenueOperatingGrants = 'revenue::operating-grants', OtherCurrentLiabilitySalesTaxPayable = 'other-current-liability::sales-tax-payable', EquityCalledUpShareCapital = 'equity::called-up-share-capital', ExpenseEntertainment = 'expense::entertainment', ExpenseSundry = 'expense::sundry', LiabilityDebtsRelatedToParticipatingInterests = 'liability::debts-related-to-participating-interests', AssetVehicles = 'asset::vehicles', AssetProvisionsNonCurrentAssets = 'asset::provisions-non-current-assets', LiabilityLongTermLiability = 'liability::long-term-liability', LiabilityObligationsUnderFinanceLeases = 'liability::obligations-under-finance-leases', OtherCurrentLiabilityDirectDepositPayable = 'other-current-liability::direct-deposit-payable', OtherCurrentLiabilityCurrentTaxLiability = 'other-current-liability::current-tax-liability', OtherCurrentLiabilityDividendsPayable = 'other-current-liability::dividends-payable', AssetLeaseBuyout = 'asset::lease-buyout', OtherExpenseExchangeGainOrLoss = 'other-expense::exchange-gain-or-loss', OtherCurrentLiabilityGlobalTaxPayable = 'other-current-liability::global-tax-payable', OtherCurrentLiabilityPayrollClearing = 'other-current-liability::payroll-clearing', ExpenseAdvertisingPromotional = 'expense::advertising-promotional', AssetGlobalTaxRefund = 'asset::global-tax-refund', AssetNonCurrentAssets = 'asset::non-current-assets', RevenueUnappliedCashPaymentIncome = 'revenue::unapplied-cash-payment-income', ExpensePromotionalMeals = 'expense::promotional-meals', ExpenseExtraordinaryCharges = 'expense::extraordinary-charges', OtherIncome = 'other-income', OtherIncomeTaxExemptInterest = 'other-income::tax-exempt-interest', ExpenseBankCharges = 'expense::bank-charges', ExpenseTaxesPaid = 'expense::taxes-paid', LiabilityLongTermEmployeeBenefitObligations = 'liability::long-term-employee-benefit-obligations', EquityPersonalExpense = 'equity::personal-expense', RevenueIncome = 'revenue::income', OtherCurrentLiabilityTrustAccountsLiabilities = 'other-current-liability::trust-accounts-liabilities', OtherExpenseVehicleRepairs = 'other-expense::vehicle-repairs', AssetRentsHeldInTrust = 'asset::rents-held-in-trust', AssetCashAndCashEquivalents = 'asset::cash-and-cash-equivalents', OtherExpensePriorPeriodItems = 'other-expense::prior-period-items', EquityPartnersEquity = 'equity::partners-equity', AssetMoneyMarket = 'asset::money-market', AssetLand = 'asset::land', AssetChecking = 'asset::checking', AssetTrustAccounts = 'asset::trust-accounts', AssetLeaseholdImprovements = 'asset::leasehold-improvements', OtherExpenseMortgageInterest = 'other-expense::mortgage-interest', LiabilityAccountsPayable = 'liability::accounts-payable', RevenueRevenueGeneral = 'revenue::revenue-general', AssetCashOnHand = 'asset::cash-on-hand', AssetOrganizationalCosts = 'asset::organizational-costs', LiabilityAccrualsAndDeferredIncome = 'liability::accruals-and-deferred-income', ExpenseDistributionCosts = 'expense::distribution-costs', OtherExpenseDepletion = 'other-expense::depletion', AssetRetainage = 'asset::retainage', AssetFixedAssetCopiers = 'asset::fixed-asset-copiers', AssetAccumulatedAmortizationOfOtherAssets = 'asset::accumulated-amortization-of-other-assets', EquityTreasuryStock = 'equity::treasury-stock', EquityInvestmentGrants = 'equity::investment-grants', OtherExpenseTaxRoundoffGainOrLoss = 'other-expense::tax-roundoff-gain-or-loss', AssetProvisionsCurrentAssets = 'asset::provisions-current-assets', AssetInvestments = 'asset::investments', AssetEmployeeCashAdvances = 'asset::employee-cash-advances', ExpenseFinanceCosts = 'expense::finance-costs', OtherExpenseIncomeTaxOtherExpense = 'other-expense::income-tax-other-expense', LiabilityLiabilitiesRelatedToAssetsHeldForSale = 'liability::liabilities-related-to-assets-held-for-sale', AssetAccumulatedDepletion = 'asset::accumulated-depletion', LiabilityProvisionForLiabilities = 'liability::provision-for-liabilities', RevenueSalesWholesale = 'revenue::sales-wholesale', ExpenseOtherRentalCosts = 'expense::other-rental-costs', OtherIncomeDividendIncome = 'other-income::dividend-income', OtherIncomeGainLossOnSaleOfFixedAssets = 'other-income::gain-loss-on-sale-of-fixed-assets', RevenueServiceFeeIncome = 'revenue::service-fee-income', ExpenseInsurance = 'expense::insurance', LiabilityCreditCard = 'liability::credit-card', AssetShortTermLoansAndAdvancesToRelatedParties = 'asset::short-term-loans-and-advances-to-related-parties', OtherCurrentLiabilityInterestPayables = 'other-current-liability::interest-payables', OtherCurrentLiabilityPrepaidExpensesPayable = 'other-current-liability::prepaid-expenses-payable', AssetInvestmentOther = 'asset::investment-other', AssetPrepaidExpenses = 'asset::prepaid-expenses', AssetDevelopmentCosts = 'asset::development-costs', AssetUndepositedFunds = 'asset::undeposited-funds', Expense = 'expense', ExpenseAmortizationExpense = 'expense::amortization-expense', ExpenseOtherCurrentOperatingCharges = 'expense::other-current-operating-charges', OtherExpenseMatCredit = 'other-expense::mat-credit', OtherCurrentLiabilityOtherCurrentLiabilities = 'other-current-liability::other-current-liabilities', OtherCurrentLiabilityAccruedLiabilities = 'other-current-liability::accrued-liabilities', EquityPartnerDistributions = 'equity::partner-distributions', OtherCurrentLiabilitySocialSecurityAgencies = 'other-current-liability::social-security-agencies', OtherCurrentLiabilityStateLocalIncomeTaxPayable = 'other-current-liability::state-local-income-tax-payable' }
export const enum MessageReadStatus { Unsent = 'unsent', Delivered = 'delivered', Read = 'read', Failed = 'failed', Sent = 'sent' }
export const enum MessageDeliveryStatus { Sent = 'sent', Read = 'read', Error = 'error', Undeliverable = 'undeliverable', Pending = 'pending', Failed = 'failed', Delivered = 'delivered' }
export const enum SupportQueryType { Bug = 'bug', Question = 'question', Incident = 'incident', Problem = 'problem', Task = 'task', FeatureRequest = 'feature-request', Feedback = 'feedback' }
export const enum ImageMimeType { ImageWebp = 'image/webp', ImageJpeg = 'image/jpeg', ImagePng = 'image/png', ImageHeic = 'image/heic', ImageGif = 'image/gif', ImageTiff = 'image/tiff', ImageSvgXml = 'image/svg+xml', ImageBmp = 'image/bmp' }
export const enum OrderingCriteria { Popularity = 'popularity', Manual = 'manual', Alphabetical = 'alphabetical', CreationDate = 'creation-date', PriceAscending = 'price-ascending', Relevance = 'relevance', PriceDescending = 'price-descending', Rating = 'rating' }
export const enum ChatType { Public = 'public', Private = 'private', Group = 'group' }
export const enum ItemAvailabilityStatus { Discontinued = 'discontinued', OutOfStock = 'out-of-stock', Active = 'active', Inactive = 'inactive' }
export const enum FinancialAccountStatus { Closed = 'closed', Frozen = 'frozen', UnderReview = 'under-review', Active = 'active', Inactive = 'inactive', Suspended = 'suspended', Delinquent = 'delinquent' }
export const enum TransactionStatus { Cancelled = 'cancelled', Succeeded = 'succeeded', Failed = 'failed', Error = 'error', Initiated = 'initiated', Pending = 'pending', InProgress = 'in-progress' }
export const enum CreditNoteStatus { Pending = 'pending', Revised = 'revised', Completed = 'completed', Disputed = 'disputed', Draft = 'draft', Issued = 'issued', Cancelled = 'cancelled', Applied = 'applied', Void = 'void' }
export const enum PaymentTerm { CashInAdvance = 'cash-in-advance', CashBeforeShipment = 'cash-before-shipment', CashWithOrder = 'cash-with-order', Net90 = 'net-90', DueEndOfMonth = 'due-end-of-month', Prepayment = 'prepayment', DueOnReceipt = 'due-on-receipt', CashOnDelivery = 'cash-on-delivery', Installment = 'installment', UponCompletion = 'upon-completion', Net30 = 'net-30', DeferredPayment = 'deferred-payment', Net60 = 'net-60', Net = 'net', Prepaid = 'prepaid', Custom = 'custom' }
export const enum EmploymentAndCandidateStatus { OnLeave = 'on-leave', Inactive = 'inactive', Hired = 'hired', NotSelected = 'not-selected', Active = 'active', New = 'new', OfferExtended = 'offer-extended', Other = 'other', InReview = 'in-review', Interviewing = 'interviewing', Terminated = 'terminated' }
export const enum OrganizationalRole { Contractor = 'contractor', Director = 'director', Admin = 'admin', Supervisor = 'supervisor', Other = 'other', Manager = 'manager', Employee = 'employee' }
export const enum CustomerStatus { Archived = 'archived', Pending = 'pending', Active = 'active', Inactive = 'inactive', Suspended = 'suspended' }
export const enum SocialPlatform { X = 'x', Twitter = 'twitter', Instagram = 'instagram', Tiktok = 'tiktok', Skype = 'skype', Tumblr = 'tumblr', Facebook = 'facebook', Youtube = 'youtube', Linkedin = 'linkedin', Pinterest = 'pinterest', OtherSocialPlatform = 'other-social-platform', Snapchat = 'snapchat', Reddit = 'reddit' }
export const enum ConversationStatus { Active = 'active', Deleted = 'deleted', Archived = 'archived' }
export const enum CommunicationRole { Member = 'member', Service = 'service', System = 'system', Admin = 'admin', Moderator = 'moderator', Group = 'group', Owner = 'owner', Guest = 'guest', Assistant = 'assistant', User = 'user', Bot = 'bot', Channel = 'channel' }
export const enum LifecycleStatus { Cancelled = 'cancelled', Active = 'active', Redeemed = 'redeemed', Expired = 'expired', Issued = 'issued', Suspended = 'suspended' }
export const enum PaymentMethod { DebitCard = 'debit-card', Other = 'other', MobileWallet = 'mobile-wallet', MobilePayment = 'mobile-payment', Cryptocurrency = 'cryptocurrency', CashOnDelivery = 'cash-on-delivery', Cash = 'cash', Check = 'check', CreditCard = 'credit-card', BankTransfer = 'bank-transfer', Paypal = 'paypal' }
export const enum FinancialTransactionStatus { Cancelled = 'cancelled', SettlementInProgress = 'settlement-in-progress', Pending = 'pending', Cleared = 'cleared', Authorized = 'authorized', Failed = 'failed', Disputed = 'disputed', Refunded = 'refunded' }
export const enum AuditOpinionType { Unqualified = 'unqualified', Qualified = 'qualified', Disclaimer = 'disclaimer', Adverse = 'adverse' }
export const enum InventoryStorageType { Consignment = 'consignment', Other = 'other', DropShipper = 'drop-shipper', RetailStore = 'retail-store', Warehouse = 'warehouse', OnlineMarketplace = 'online-marketplace', DistributionCenter = 'distribution-center' }
export const enum VisibilityScope { Global = 'global', Web = 'web', Private = 'private', App = 'app', Internal = 'internal' }
export const enum PaymentStatus { PartiallyRefunded = 'partially-refunded', Overdue = 'overdue', Refunded = 'refunded', Submitted = 'submitted', Deleted = 'deleted', Succeeded = 'succeeded', Paid = 'paid', Authorized = 'authorized', Processing = 'processing', Pending = 'pending', Cancelled = 'cancelled', Error = 'error', Disputed = 'disputed', Adjusted = 'adjusted', Partial = 'partial', Failed = 'failed', Voided = 'voided', Draft = 'draft' }
export const enum TransactionChannel { InPerson = 'in-person', Mobile = 'mobile', Online = 'online', BankBranch = 'bank-branch', Atm = 'atm', Mail = 'mail', Telephone = 'telephone', Other = 'other' }
export const enum FinancialDisputeStatus { Closed = 'closed', ChargeRefunded = 'charge-refunded', Won = 'won', Lost = 'lost', UnderReview = 'under-review', AwaitingEvidence = 'awaiting-evidence', NeedsResponse = 'needs-response', Escalated = 'escalated' }
export const enum DeviceUsageType { Personal = 'personal', Business = 'business', Home = 'home', Healthcare = 'healthcare', Other = 'other', Educational = 'educational', Industrial = 'industrial' }
export const enum FinancialTransactionType { Charge = 'charge', ReceivePrepayment = 'receive-prepayment', Withdrawal = 'withdrawal', Interest = 'interest', Dividend = 'dividend', Transfer = 'transfer', Chargeback = 'chargeback', Payment = 'payment', Deposit = 'deposit', SpendOverpayment = 'spend-overpayment', SpendPrepayment = 'spend-prepayment', Sale = 'sale', Fee = 'fee', Receive = 'receive', Other = 'other', Spend = 'spend', ReceiveOverpayment = 'receive-overpayment', Refund = 'refund', Adjustment = 'adjustment' }
export const enum AccessControlModel { Mac = 'mac', Rbac = 'rbac', Abac = 'abac', Dac = 'dac', Custom = 'custom', None = 'none' }
export const enum ParticipantType { Team = 'team', User = 'user', Organization = 'organization', ExternalParticipant = 'external-participant', Group = 'group' }
export const enum PriorityLevel { Urgent = 'urgent', Elevated = 'elevated', High = 'high', Low = 'low', Medium = 'medium' }
export const enum PrerequisiteRangeType { Subtotal = 'subtotal', Quantity = 'quantity', ShippingPrice = 'shipping-price' }
export const enum ContentVisibility { Public = 'public', Shared = 'shared', Internal = 'internal', Protected = 'protected', Private = 'private' }
export const enum EntityCategory { User = 'user', Document = 'document', Link = 'link', Project = 'project', Message = 'message', Event = 'event', Owner = 'owner', Other = 'other', Task = 'task', Person = 'person' }
export const enum GenderIdentity { Male = 'male', PreferNotToSay = 'prefer-not-to-say', Other = 'other', Female = 'female' }
export const enum CommunicationMethod { Email = 'email', Phone = 'phone', Text = 'text', Mail = 'mail', InPerson = 'in-person', Sms = 'sms', SocialMedia = 'social-media', InstantMessage = 'instant-message', VideoCall = 'video-call', Other = 'other', PushNotification = 'push-notification' }
export const enum EmailCategoryType { Educational = 'educational', Governmental = 'governmental', Transactional = 'transactional', Business = 'business', Personal = 'personal', Spam = 'spam', Promotional = 'promotional', Other = 'other' }
export const enum UniversalIdentifierType { String = 'string', Url = 'url', Uuid = 'uuid', Number = 'number', Email = 'email' }
export const enum TaskStatus { InProgress = 'in-progress', Done = 'done', OnHold = 'on-hold', Cancelled = 'cancelled', Blocked = 'blocked', Todo = 'todo' }
export const enum UserStatus { Banned = 'banned', Deleted = 'deleted', WaitListed = 'wait-listed', Archived = 'archived', Suspended = 'suspended', Inactive = 'inactive', Pending = 'pending', Verified = 'verified', Active = 'active' }
export const enum PromotionType { FreeShipping = 'free-shipping', FixedAmount = 'fixed-amount', BuyOneGetOne = 'buy-one-get-one', Other = 'other', Percentage = 'percentage', RewardPoints = 'reward-points' }
export const enum MimeType { ImageJpeg = 'image/jpeg', ImagePng = 'image/png', ImageSvgXml = 'image/svg+xml', ImageWebp = 'image/webp', ImageGif = 'image/gif' }
export const enum TaxType { Inclusive = 'inclusive', Additive = 'additive', Variable = 'variable' }
export const enum ModifierType { List = 'list', Text = 'text' }
export const enum CardType { Debit = 'debit', UnknownCard = 'unknown-card', Credit = 'credit' }
export const enum PrepaidType { NotPrepaid = 'not-prepaid', UnknownPrepaid = 'unknown-prepaid', Prepaid = 'prepaid' }
export const enum EntryMethod { Keyed = 'keyed', Swiped = 'swiped', OnFile = 'on-file', Emv = 'emv', Contactless = 'contactless' }
export const enum CvvStatus { Rejected = 'rejected', NotChecked = 'not-checked', Accepted = 'accepted' }
export const enum AvcStatus { Rejected = 'rejected', NotChecked = 'not-checked', Accepted = 'accepted' }
export const enum CreditType { Goodwill = 'goodwill', Supplier = 'supplier', Customer = 'customer', Overpayment = 'overpayment', Prepayment = 'prepayment' }
export const enum CallDirection { Inbound = 'inbound', Unknown = 'unknown', Conference = 'conference', Outbound = 'outbound' }
export const enum SpeakerRole { Attendee = 'attendee', Invitee = 'invitee' }
export const enum FileType { Url = 'url', File = 'file', Folder = 'folder' }
export const enum AiToolChoiceType { Auto = 'auto', Tool = 'tool', None = 'none', Any = 'any' }
export const enum ImageType { Base64 = 'base64' }
export const enum ResponseFormatType { JsonSchema = 'json-schema', JsonObject = 'json-object', Text = 'text' }
export const enum ToolCallType { Function = 'function' }
export const enum AiMessagesContentType { ToolResult = 'tool-result', ToolUse = 'tool-use', Text = 'text', Image = 'image' }
