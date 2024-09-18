// This file is auto-generated. Do not edit it manually.

export interface ToolResultContent { image?: Images;
    type?: AIMessagesContentType;
    CommonModel?: string;
    text?: string[] }
export interface ToolCalls { function?: unknown;
    type?: ToolCallType;
    modifyToken?: string;
    CommonModel?: string;
    id?: string }
export interface ResponseFormat { type?: ResponseFormatType;
    schema?: JsonSchema;
    CommonModel?: string }
export interface JsonSchema { CommonModel?: string;
    description?: string;
    schema?: unknown;
    strict?: boolean;
    name?: string }
export interface AIToolChoice { type?: AIToolChoiceType;
    CommonModel?: string;
    name?: string }
export interface AIMessagesContent { text?: string[];
    toolResultContent?: ToolResultContent[];
    isError?: boolean;
    name?: string;
    CommonModel?: string;
    type?: AIMessagesContentType;
    modifyToken?: string;
    toolUseId?: string;
    id?: string;
    image?: Images }
export interface Events { location?: string;
    organizer?: Users;
    updatedAt?: string;
    createdAt?: string;
    title?: string;
    timeZone?: string;
    id?: string;
    deleted?: boolean;
    startDate?: string;
    endDate?: string;
    attendees?: Users[];
    description?: string;
    CommonModel?: string;
    modifyToken?: string }
export interface Calendars { CommonModel?: string;
    updatedAt?: string;
    title?: string;
    timeZone?: string;
    description?: string;
    deleted?: boolean;
    id?: string;
    createdAt?: string;
    modifyToken?: string;
    location?: string;
    type?: string }
export interface Threads { messages?: Messages[];
    deleted?: boolean;
    createdAt?: string;
    CommonModel?: string;
    modifyToken?: string;
    id?: string;
    snippet?: string;
    updatedAt?: string;
    lastMessageId?: string }
export interface Drafts { replyToMessageId?: string;
    active?: boolean;
    attachments?: Attachments[];
    id?: string;
    deliveryStatus?: MessageDeliveryStatus;
    subject?: string;
    senderId?: string;
    senderEmail?: string;
    bcc?: string;
    messageId?: string;
    metadata?: Metadata[];
    CommonModel?: string;
    recipientEmails?: string[];
    cc?: string;
    receiverId?: string;
    content?: string;
    readStatus?: MessageReadStatus;
    type?: MessageContentType;
    threadId?: string;
    chatId?: string;
    priority?: PriorityLevel;
    createdAt?: string;
    reactions?: Reactions[];
    updatedAt?: string;
    reference?: Entity;
    deleted?: boolean;
    timestamp?: string;
    modifyToken?: string }
export interface Drives { name?: string;
    description?: string;
    createdAt?: string;
    updatedAt?: string;
    CommonModel?: string;
    id?: string }
export interface Folders { modifyToken?: string;
    id?: string;
    description?: string;
    path?: string;
    permissions?: Permissions;
    createdAt?: string;
    parent?: ParentFolders;
    owner?: FileOwners;
    CommonModel?: string;
    size?: number;
    downloadable?: boolean;
    updatedAt?: string;
    name?: string }
export interface Files { exportable?: boolean;
    downloadUrl?: string;
    size?: number;
    extension?: string;
    createdAt?: string;
    path?: string;
    name?: string;
    parent?: ParentFolders;
    description?: string;
    updatedAt?: string;
    exportFormats?: string;
    type?: FileType;
    mimeType?: string;
    permissions?: Permissions;
    owner?: FileOwners;
    id?: string;
    downloadable?: boolean;
    CommonModel?: string;
    content?: string;
    modifyToken?: string }
export interface FileOwners { email?: string;
    updatedAt?: string;
    createdAt?: string;
    CommonModel?: string;
    id?: string;
    name?: string }
export interface ParentFolders { createdAt?: string;
    CommonModel?: string;
    name?: string;
    id?: string;
    updatedAt?: string }
export interface Speakers { role?: SpeakerRole;
    speakerId?: string;
    CommonModel?: string;
    userId?: string;
    id?: string;
    title?: string;
    email?: string;
    name?: string }
export interface Recordings { topic?: string;
    password?: string;
    updatedAt?: string;
    startTime?: string;
    endTime?: string;
    files?: Attachments[];
    CommonModel?: string;
    accountId?: string;
    duration?: number;
    id?: string;
    name?: string;
    participants?: Speakers[];
    fileSize?: number;
    createdAt?: string;
    modifyToken?: string;
    hostId?: string;
    callType?: CallDirection;
    description?: string }
export interface Transcripts { updatedAt?: string;
    topic?: string;
    CommonModel?: string;
    id?: string;
    createdAt?: string;
    modifyToken?: string;
    speakerId?: string;
    speakerName?: string;
    sentences?: Sentences[];
    meetingId?: string }
export interface Sentences { CommonModel?: string;
    endTime?: string;
    createdAt?: string;
    id?: string;
    startTime?: string;
    speakerId?: string;
    updatedAt?: string;
    speakerName?: string;
    modifyToken?: string;
    sentence?: string }
export interface Tables { description?: string;
    fields?: Attributes[];
    modifyToken?: string;
    CommonModel?: string;
    updatedAt?: string;
    slug?: string;
    name?: string;
    id?: string;
    createdAt?: string }
export interface Databases { CommonModel?: string;
    createdAt?: string;
    id?: string;
    title?: string;
    active?: boolean;
    deleted?: boolean;
    name?: string;
    region?: string;
    url?: string;
    updatedAt?: string;
    permissionLevel?: string;
    modifyToken?: string;
    tables?: Tables[];
    description?: string;
    organizationId?: string }
export interface Attributes { slug?: string;
    modifyToken?: string;
    updatedAt?: string;
    required?: boolean;
    id?: string;
    name?: string;
    customTypeDetails?: Metadata[];
    CommonModel?: string;
    createdAt?: string;
    unique?: boolean;
    description?: string;
    dataType?: DataType }
export interface Records { modifyToken?: string;
    CommonModel?: string;
    id?: string;
    entity?: unknown;
    updatedAt?: string;
    createdAt?: string }
export interface Objects { CommonModel?: string;
    updatedAt?: string;
    name?: string;
    custom?: boolean;
    modifyToken?: string;
    id?: string;
    slug?: string;
    singularNoun?: string;
    createdAt?: string;
    pluralNoun?: string }
export interface CardDetails { status?: string;
    avcStatus?: AvcStatus;
    active?: boolean;
    expiryMonth?: string;
    prepaidType?: PrepaidType;
    cvvStatus?: CvvStatus;
    brand?: string;
    expiryYear?: string;
    bin?: string;
    statementDescription?: string;
    authorizedAt?: string;
    fingerprint?: string;
    type?: CardType;
    modifyToken?: string;
    CommonModel?: string;
    id?: string;
    deleted?: boolean;
    capturedAt?: string;
    lastFour?: string;
    updatedAt?: string;
    entryMethod?: EntryMethod;
    createdAt?: string }
export interface Modifiers { originalPrice?: number;
    updatedAt?: string;
    deleted?: boolean;
    active?: boolean;
    modifyToken?: string;
    quantity?: number;
    CommonModel?: string;
    groupId?: string;
    createdAt?: string;
    id?: string;
    name?: string;
    customerNote?: string;
    linePrice?: number;
    currency?: Currency }
export interface ModifierGroups { CommonModel?: string;
    active?: boolean;
    deleted?: boolean;
    modifiers?: Modifiers[];
    type?: ModifierType;
    description?: string;
    createdAt?: string;
    id?: string;
    modifyToken?: string;
    name?: string;
    updatedAt?: string }
export interface InvoicePayments { modifyToken?: string;
    CommonModel?: string;
    id?: string;
    date?: string;
    createdAt?: string;
    amount?: number;
    updatedAt?: string }
export interface Locations { merchantId?: string;
    active?: boolean;
    customFields?: CustomAttributes[];
    modifyToken?: string;
    createdAt?: string;
    id?: string;
    countryCode?: string;
    website?: string;
    tags?: string[];
    type?: string;
    CommonModel?: string;
    domain?: string;
    defaultEmail?: string;
    updatedAt?: string;
    timezone?: string;
    address?: Addresses;
    currency?: Currency;
    description?: string;
    phones?: Phones[];
    emails?: Emails[];
    businessName?: string;
    merchantCategoryCode?: string;
    defaultPhone?: string;
    locationNumber?: string;
    numberOfEmployees?: number;
    name?: string;
    socialProfiles?: SocialProfiles[];
    businessHours?: BusinessHours[] }
export interface CurrencyDetails { id?: string;
    CommonModel?: string;
    currency?: Currency;
    value?: number }
export interface UsageLimitExpirations { expirationDate?: string;
    CommonModel?: string;
    limit?: number }
export interface Webhooks { modifyToken?: string;
    objects?: string[];
    format?: Format;
    id?: string;
    events?: string[];
    updatedAt?: string;
    isDeleted?: boolean;
    address?: string;
    createdAt?: string;
    CommonModel?: string }
export interface PrerequisiteRanges { greaterThanOrEqualTo?: number;
    type?: PrerequisiteRangeType;
    CommonModel?: string;
    lessThanOrEqualTo?: number }
export interface PriceRules { priority?: number;
    entitledCollectionIds?: string[];
    excludedCollectionIds?: string[];
    active?: boolean;
    entitledQuantity?: number;
    startDate?: string;
    modifyToken?: string;
    allocationLimit?: number;
    deleted?: boolean;
    title?: string;
    entitledVariantIds?: string[];
    usageLimit?: number;
    prerequisiteCollectionIds?: string[];
    prerequisiteSavedSearchIds?: string[];
    value?: number;
    prerequisiteProductIds?: string[];
    prerequisiteVariantIds?: string[];
    entitledProductIds?: string[];
    currency?: string;
    valueType?: DiscountType;
    updatedAt?: string;
    description?: string;
    prerequisiteCustomerIds?: string[];
    oncePerCustomer?: boolean;
    id?: string;
    targetSelection?: TargetSelection;
    endDate?: string;
    prerequisiteRanges?: PrerequisiteRanges;
    prerequisiteQuantity?: number;
    CommonModel?: string;
    excludedProductIds?: string[];
    allocationMethod?: AllocationMethod;
    excludedVariantIds?: string[];
    createdAt?: string;
    customerSelection?: CustomerSelection;
    entitledCountryIds?: string[];
    targetType?: TargetType }
export interface Discounts { value?: number;
    currency?: string;
    customFields?: CustomAttributes[];
    type?: DiscountType;
    usageLimit?: number;
    deleted?: boolean;
    usageLimitPerCustomer?: number;
    customerEligibility?: CustomerEligibility;
    stackable?: boolean;
    endDate?: string;
    id?: string;
    updatedAt?: string;
    minimumQuantityOfItems?: number;
    description?: string;
    modifyToken?: string;
    active?: boolean;
    CommonModel?: string;
    minimumRequirements?: MinimumRequirements;
    minimumPurchaseAmount?: number;
    exclusions?: string[];
    code?: string;
    channelAvailability?: ChannelAvailability;
    timesUsed?: number;
    createdAt?: string;
    usageLimitExpirations?: UsageLimitExpirations;
    appliesTo?: AppliesTo;
    startDate?: string;
    status?: Status;
    title?: string }
export interface AIUsage { promptTokens?: number;
    totalTokens?: number;
    completionTokens?: number;
    CommonModel?: string }
export interface AIMessages { CommonModel?: string;
    content?: AIMessagesContent[];
    role?: string;
    refusal?: string;
    index?: number;
    toolCalls?: ToolCalls[];
    name?: string;
    finishReason?: string }
export interface Chats { temperature?: number;
    seed?: number;
    stopSequences?: string[];
    userId?: string;
    createdAt?: string;
    usage?: AIUsage;
    toolChoice?: AIToolChoice;
    maxTokens?: number;
    topP?: number;
    presencePenalty?: number;
    enableParallelToolCalls?: boolean;
    modifyToken?: string;
    systemFingerprint?: string;
    id?: string;
    CommonModel?: string;
    model?: string;
    topK?: number;
    system?: string[];
    frequencyPenalty?: number;
    numberOfCompletions?: number;
    messages?: AIMessages[];
    objectType?: string;
    responseFormat?: ResponseFormat;
    tools?: JsonSchema[];
    logitBias?: unknown }
export interface TaxDetails { deleted?: boolean;
    updatedAt?: string;
    taxCode?: string;
    amount?: number;
    rate?: number;
    taxRegistrationNumber?: string;
    category?: string;
    effectiveDate?: string;
    region?: string;
    name?: string;
    currency?: Currency;
    id?: string;
    jurisdiction?: string;
    country?: string;
    createdAt?: string;
    active?: boolean;
    details?: string;
    expirationDate?: string;
    CommonModel?: string;
    isTaxIncludedInPrice?: boolean }
export interface Evidence { shippingCarrier?: string;
    customerEmailAddress?: string;
    shippingDate?: string;
    shippingTrackingNumber?: string;
    uncategorizedFile?: string;
    billingAddress?: string;
    customerName?: string;
    productDescription?: string;
    CommonModel?: string;
    refundPolicy?: string;
    duplicateChargeDocumentation?: string;
    customerSignature?: string;
    shippingDocumentation?: string;
    uncategorizedText?: string;
    accessActivityLog?: string;
    cancellationRebuttal?: string;
    cancellationPolicyDisclosure?: string;
    customerPurchaseIp?: string;
    duplicateChargeId?: string;
    receipt?: string;
    customerCommunication?: string;
    cancellationPolicy?: string;
    refundPolicyDisclosure?: string;
    duplicateChargeExplanation?: string;
    refundRefusalExplanation?: string;
    serviceDate?: string;
    serviceDocumentation?: string;
    shippingAddress?: string }
export interface Disputes { customerId?: string;
    currency?: Currency;
    amount?: number;
    charge?: string;
    deleted?: boolean;
    notes?: string;
    id?: string;
    evidence?: Evidence;
    status?: FinancialDisputeStatus;
    version?: string;
    reason?: string;
    updated?: string;
    active?: boolean;
    chargeRefundable?: boolean;
    metadata?: Metadata;
    created?: string;
    transactionId?: string;
    CommonModel?: string }
export interface Reactions { userId?: string;
    messageId?: string;
    CommonModel?: string;
    chatId?: string;
    type?: ReactionType;
    createdAt?: string }
export interface Participants { status?: ParticipantEngagementStatus;
    type?: CommunicationRole;
    CommonModel?: string;
    userId?: string;
    joinedAt?: string;
    displayName?: string }
export interface Conversations { lastReadMessageId?: string;
    modifyToken?: string;
    type?: ChatType;
    participants?: Participants[];
    CommonModel?: string;
    id?: string;
    createdAt?: string;
    title?: string;
    messages?: Messages[];
    metadata?: string;
    updatedAt?: string;
    unreadCount?: number;
    lastMessage?: Messages;
    isPinned?: boolean;
    status?: ConversationStatus }
export interface Messages { createdAt?: string;
    senderId?: string;
    bcc?: string;
    cc?: string;
    id?: string;
    type?: MessageContentType;
    reference?: Entity;
    reactions?: Reactions[];
    updatedAt?: string;
    active?: boolean;
    modifyToken?: string;
    attachments?: Attachments[];
    deleted?: boolean;
    chatId?: string;
    deliveryStatus?: MessageDeliveryStatus;
    tags?: string[];
    timestamp?: string;
    threadId?: string;
    subject?: string;
    readStatus?: MessageReadStatus;
    metadata?: Metadata[];
    receiverId?: string;
    content?: string;
    recipientEmails?: string[];
    CommonModel?: string;
    senderEmail?: string;
    replyToMessageId?: string;
    priority?: PriorityLevel }
export interface ShareholderEquityDetails { CommonModel?: string;
    accumulatedOtherComprehensiveIncome?: number;
    treasuryStock?: number;
    preferredStock?: number;
    retainedEarnings?: number;
    commonStock?: number }
export interface IncomeTaxExpenseDetails { deferredIncomeTax?: number;
    CommonModel?: string;
    currentIncomeTax?: number;
    taxAllowanceCredit?: number }
export interface OperatingExpensesDetails { salesGeneralAndAdministrativeExpenses?: number;
    otherOperatingExpenses?: number;
    CommonModel?: string;
    researchAndDevelopmentExpenses?: number }
export interface RevenueDetails { CommonModel?: string;
    salesRevenue?: number;
    serviceRevenue?: number;
    otherRevenue?: number }
export interface ShippingItem { value?: number;
    sku?: string;
    CommonModel?: string;
    productId?: string;
    quantity?: number;
    productName?: string;
    weight?: number;
    id?: string;
    dimensions?: Dimensions;
    weightUnit?: string }
export interface BillingDetails { CommonModel?: string;
    fullName?: string;
    phoneNumber?: string;
    address?: Addresses;
    vatId?: string;
    createdAt?: string;
    email?: string;
    isDeleted?: boolean;
    defaultPaymentMethod?: PaymentMethods;
    customerId?: string;
    additionalAttributes?: CustomAttributes[];
    active?: boolean;
    paymentTerms?: PaymentTerm;
    companyName?: string;
    updatedAt?: string;
    currency?: Currency;
    note?: string;
    id?: string;
    language?: string }
export interface PaymentTerms { discountDays?: number;
    createdDate?: string;
    currencyFormatting?: string;
    gracePeriodDays?: number;
    dueDays?: number;
    permittedClientClasses?: string[];
    isDeleted?: boolean;
    isActive?: boolean;
    allowedMethods?: string[];
    updatedAt?: string;
    penaltyRate?: number;
    description?: string;
    notes?: string;
    minimumPayment?: number;
    createdAt?: string;
    currencyCode?: string;
    lastUpdatedDate?: string;
    type?: PaymentTerm;
    discountRate?: number;
    CommonModel?: string;
    id?: string;
    interestRate?: number;
    countrySpecificTerms?: string[];
    languageSupport?: string[] }
export interface InvoiceAdjustments { createdAt?: string;
    type?: InvoiceAdjustmentType;
    deleted?: boolean;
    updatedAt?: string;
    metadata?: Metadata;
    description?: string;
    currency?: Currency;
    id?: string;
    amount?: number;
    active?: boolean;
    CommonModel?: string;
    appliedToInvoiceItemId?: string }
export interface TaxRates { currency?: Currency;
    country?: string;
    id?: string;
    applicableItems?: string[];
    name?: string;
    region?: string;
    createdAt?: string;
    deleted?: boolean;
    shippingIncluded?: boolean;
    taxType?: string;
    updatedAt?: string;
    taxNumber?: string;
    description?: string;
    reportTaxType?: string;
    modifyToken?: string;
    displayRate?: string;
    customFields?: CustomAttributes[];
    active?: boolean;
    percentage?: number;
    taxProvider?: string;
    CommonModel?: string;
    compound?: boolean;
    taxComponents?: TaxLines[] }
export interface CreditNoteLines { id?: string;
    total?: number;
    description?: string;
    CommonModel?: string;
    quantity?: number;
    taxRate?: number;
    product?: Products;
    account?: string;
    unitPrice?: number;
    customFields?: CustomAttributes[] }
export interface CreditNotes { billingAddress?: Addresses;
    payments?: Payments[];
    adjustment?: number;
    vatNumber?: string;
    taxRate?: number;
    discounts?: number[];
    active?: boolean;
    createdAt?: string;
    id?: string;
    modifyToken?: string;
    vatName?: string;
    companyId?: string;
    memo?: string;
    creditType?: CreditType;
    metadata?: Metadata;
    companyName?: string;
    issuedDate?: string;
    number?: string;
    attachments?: Attachments[];
    deleted?: boolean;
    status?: CreditNoteStatus;
    dueDate?: string;
    reason?: string;
    taxAmount?: number;
    description?: string;
    customer?: Customers;
    updatedAt?: string;
    amount?: number;
    lines?: CreditNoteLines[];
    shippingAddress?: Addresses;
    currency?: Currency;
    CommonModel?: string }
export interface ExpenseCategories { id?: string;
    name?: string;
    CommonModel?: string;
    description?: string }
export interface Expenses { lineItems?: Items[];
    CommonModel?: string;
    transactionId?: string;
    category?: ExpenseCategories;
    dateIncurred?: string;
    description?: string;
    receiptUrls?: string[];
    deleted?: boolean;
    modifyToken?: string;
    id?: string;
    currencyCode?: string;
    merchant?: string;
    reportId?: string;
    accountId?: string;
    customFields?: CustomAttributes[];
    amount?: number;
    status?: ExpenseApprovalStatus;
    createdAt?: string;
    approvedByUserId?: string;
    tax?: Taxes[];
    createdByUserId?: string;
    tags?: string[];
    paymentMethod?: PaymentMethods;
    location?: Addresses;
    updatedAt?: string;
    attachments?: Attachments[];
    active?: boolean;
    note?: string }
export interface Transactions { transactionCategory?: TransactionType;
    exchangeRate?: number;
    createdAt?: string;
    applicationFee?: number;
    tags?: string[];
    taxAmount?: number;
    description?: string;
    invoiceId?: string;
    status?: FinancialTransactionStatus;
    paymentMethod?: PaymentMethods;
    billingDetails?: BillingDetails;
    dispute?: Disputes;
    paymentIntent?: string;
    accountCode?: string;
    type?: FinancialTransactionType;
    transactionMethod?: TransactionMethod;
    attachments?: Attachments[];
    date?: string;
    CommonModel?: string;
    currency?: Currency;
    taxExempt?: boolean;
    id?: string;
    refund?: Refunds;
    modifyToken?: string;
    amount?: number;
    orderId?: string;
    metadata?: Metadata;
    accountId?: string;
    accountName?: string;
    items?: Items[];
    updatedAt?: string;
    deleted?: boolean;
    foreignCurrency?: CurrencyDetails;
    contact?: Contacts;
    shipping?: ShippingDetails;
    checkNumber?: string;
    sender?: Customers;
    recipient?: Customers }
export interface PurchaseOrderLineItems { quantity?: number;
    unitPrice?: number;
    SKU?: string;
    productId?: string;
    deliveryDate?: string;
    unitOfMeasure?: string;
    discount?: number;
    id?: string;
    totalPrice?: number;
    description?: string;
    CommonModel?: string }
export interface Accounts { balance?: number;
    owner?: Customers;
    title?: string;
    closedAt?: string;
    accountNumber?: string;
    status?: FinancialAccountStatus;
    branch?: string;
    active?: boolean;
    updatedAt?: string;
    overdraftLimit?: number;
    modifyToken?: string;
    name?: string;
    createdAt?: string;
    CommonModel?: string;
    allowPayments?: boolean;
    transactions?: Transactions[];
    interestRate?: number;
    accountType?: AccountType;
    id?: string;
    notes?: string;
    deleted?: boolean;
    overdraftProtection?: boolean;
    showInExpenses?: boolean;
    description?: string;
    taxType?: string;
    currency?: Currency;
    accountCode?: string }
export interface PurchaseOrders { createdAt?: string;
    total?: number;
    orderDate?: string;
    billTo?: Addresses;
    status?: OrderStatus;
    vendor?: Vendors;
    currency?: Currency;
    modifyToken?: string;
    CommonModel?: string;
    lineItems?: PurchaseOrderLineItems[];
    accountId?: string;
    notes?: string;
    deleted?: boolean;
    shippingCosts?: number;
    subtotal?: number;
    taxes?: number;
    attachments?: Attachments[];
    id?: string;
    expectedDeliveryDate?: string;
    paymentTerms?: string;
    updatedAt?: string;
    active?: boolean;
    orderNumber?: string;
    shipTo?: Addresses }
export interface AdditionalCharges { id?: string;
    amount?: number;
    CommonModel?: string;
    type?: FinancialChargeType;
    createdAt?: string;
    updatedAt?: string;
    description?: string }
export interface Refunds { updatedAt?: string;
    CommonModel?: string;
    reason?: string;
    createdAt?: string;
    id?: string;
    paymentId?: string;
    amount?: number;
    currency?: Currency;
    status?: TransactionStatus;
    modifyToken?: string }
export interface Payments { orderId?: string;
    invoice?: Invoices;
    currency?: Currency;
    paymentCaptureMethod?: string;
    transactionId?: string;
    active?: boolean;
    date?: string;
    createdAt?: string;
    paymentMethod?: PaymentMethods;
    metadata?: Metadata;
    refund?: Refunds;
    paymentProcessor?: string;
    cardDetails?: CardDetails;
    modifyToken?: string;
    status?: PaymentStatus;
    journalId?: string;
    tip?: number;
    customer?: Customers;
    description?: string;
    shippingDetails?: ShippingDetails;
    webhookUrl?: string;
    billingDetails?: BillingDetails;
    id?: string;
    updatedAt?: string;
    notes?: string;
    amount?: number;
    receiptEmail?: string;
    deleted?: boolean;
    CommonModel?: string;
    paymentIntent?: string }
export interface Bills { lineItems?: Items[];
    customer?: Customers;
    id?: string;
    createdAt?: string;
    modifyToken?: string;
    status?: BillingStatus;
    currencyCode?: string;
    amountDue?: number;
    notes?: string;
    customFields?: CustomAttributes[];
    CommonModel?: string;
    amountPaid?: number;
    invoiceNumber?: string;
    amountRemaining?: number;
    terms?: string;
    dueDate?: string;
    vendor?: Vendors;
    updatedAt?: string;
    issueDate?: string;
    attachments?: Attachments[];
    deleted?: boolean;
    active?: boolean }
export interface Vendors { CommonModel?: string;
    id?: string;
    contactEmail?: string;
    address?: Addresses;
    updatedAt?: string;
    createdAt?: string;
    is1099?: boolean;
    website?: string;
    deleted?: boolean;
    tax?: Taxes[];
    overdueBalance?: number;
    contactName?: string;
    note?: string;
    companyName?: string;
    outstandingBalance?: number;
    customFields?: CustomAttributes[];
    currencyCode?: string;
    contactPhone?: string;
    accountNumber?: string;
    active?: boolean;
    modifyToken?: string }
export interface AuditInformation { auditDate?: string;
    auditorName?: string;
    CommonModel?: string;
    auditOpinion?: AuditOpinionType;
    notes?: string }
export interface BalanceSheets { accountSummary?: KeyValues[];
    modifyToken?: string;
    treasuryStock?: number;
    prepaidExpenses?: number;
    fixedAssets?: number;
    CommonModel?: string;
    stockholdersEquity?: number;
    totalLiabilitiesAndEquity?: number;
    balanceDate?: string;
    retainedEarnings?: number;
    additionalPaidInCapital?: number;
    currentPortionOfLongTermDebt?: number;
    taxLiabilities?: number;
    active?: boolean;
    id?: string;
    equity?: number;
    nonCurrentAssets?: number;
    otherCurrentLiabilities?: number;
    totalAssets?: number;
    shortTermInvestments?: number;
    notes?: string;
    auditInfo?: AuditInformation;
    updatedAt?: string;
    currency?: Currency;
    totalLiabilities?: number;
    currentAssets?: number;
    customFields?: CustomAttributes[];
    intangibleAssets?: number;
    accumulatedDepreciation?: number;
    accountsReceivable?: number;
    commonStock?: number;
    otherCurrentAssets?: number;
    currentLiabilities?: number;
    inventory?: number;
    accruedLiabilities?: number;
    shortTermDebt?: number;
    cashAndCashEquivalents?: number;
    preferredStock?: number;
    otherNonCurrentLiabilities?: number;
    minorityInterest?: number;
    nonCurrentLiabilities?: number;
    longTermDebt?: number;
    notesPayable?: number;
    propertyPlantEquipment?: number;
    otherNonCurrentAssets?: number;
    deferredRevenue?: number;
    createdAt?: string;
    deleted?: boolean;
    accountsPayable?: number }
export interface IncomeStatements { currency?: Currency;
    operatingIncome?: number;
    period?: string;
    exchangeRate?: number;
    incomeBeforeTax?: number;
    updatedAt?: string;
    netIncome?: number;
    interestExpense?: number;
    ebitda?: number;
    costOfGoodsSold?: number;
    incomeTaxExpense?: IncomeTaxExpenseDetails;
    revenue?: RevenueDetails;
    shareholderEquity?: ShareholderEquityDetails;
    profitMargins?: number;
    grossProfit?: number;
    depreciationAndAmortization?: number;
    operatingExpenses?: OperatingExpensesDetails;
    createdAt?: string;
    accountSummary?: KeyValues[];
    id?: string;
    modifyToken?: string;
    CommonModel?: string }
export interface Invoices { taxTotal?: number;
    vatName?: string;
    CommonModel?: string;
    createdAt?: string;
    notes?: string;
    metadata?: Metadata[];
    items?: InvoiceItems[];
    adjustments?: InvoiceAdjustments[];
    invoicePayments?: InvoicePayments[];
    deleted?: boolean;
    active?: boolean;
    billingAddress?: Addresses;
    discountPercentage?: number;
    shippingAddress?: Addresses;
    subtotal?: number;
    discountTotal?: number;
    total?: number;
    id?: string;
    dueDate?: string;
    status?: PaymentStatus;
    issuedDate?: string;
    vatNumber?: string;
    terms?: string;
    currency?: Currency;
    balanceDue?: number;
    attachments?: Attachments[];
    exchangeRate?: number;
    modifyToken?: string;
    reference?: Entity;
    invoiceNumber?: string;
    paymentTerms?: PaymentTerms;
    paidAmount?: number;
    transactionDate?: string;
    updatedAt?: string;
    customer?: Customers;
    header?: string;
    footer?: string }
export interface JournalEntries { exchangeRate?: number;
    attachments?: Attachments[];
    id?: string;
    CommonModel?: string;
    description?: string;
    status?: JournalEntryStatus;
    totalAmount?: number;
    name?: string;
    lineItems?: JournalEntryLines[];
    deleted?: boolean;
    modifyToken?: string;
    createdBy?: string;
    updatedAt?: string;
    updatedBy?: string;
    currency?: Currency;
    isReconciled?: boolean;
    active?: boolean;
    createdAt?: string;
    date?: string;
    reference?: string;
    type?: string;
    entryNumber?: string;
    memo?: string }
export interface JournalEntryLines { accountId?: string;
    CommonModel?: string;
    id?: string;
    amount?: number;
    credit?: number;
    quantity?: number;
    tracking?: FinancialTrackingCategories;
    taxAmount?: number;
    taxCode?: string;
    description?: string;
    debit?: number }
export interface InvoiceItems { isbn?: string;
    reviews?: RatingsReviews[];
    sku?: string;
    mpn?: string;
    id?: string;
    variants?: Variants[];
    updatedAt?: string;
    options?: ProductOptions[];
    discount?: number;
    active?: boolean;
    modifyToken?: string;
    inventoryQuantity?: number;
    CommonModel?: string;
    ean?: string;
    gallery?: Images[];
    createdAt?: string;
    brand?: string;
    price?: number;
    onSale?: boolean;
    weight?: number;
    availabilityDate?: string;
    imageUrl?: string;
    currency?: Currency;
    description?: string;
    rating?: number;
    condition?: ItemCondition;
    dimensions?: Dimensions;
    deletedAt?: string;
    ratingCount?: number;
    isAvailable?: boolean;
    customFields?: CustomAttributes[];
    name?: string;
    upc?: string;
    tags?: string[];
    quantity?: number;
    inventoryStatus?: ProductAvailabilityStatus }
export interface Tickets { updatedAt?: string;
    modifyToken?: string;
    createdAt?: string;
    dueDate?: string;
    tags?: string[];
    status?: IssueLifecycleStatus;
    type?: SupportQueryType;
    customFields?: CustomAttributes[];
    id?: string;
    title?: string;
    CommonModel?: string;
    notes?: Notes[];
    reporter?: Contacts;
    assignee?: Users;
    attachments?: Attachments[];
    description?: string;
    comments?: Comments[];
    priority?: SupportTicketPriority }
export interface WorkExperiences { description?: string;
    company?: string;
    position?: string;
    startDate?: string;
    CommonModel?: string;
    endDate?: string }
export interface Educations { institution?: string;
    degree?: string;
    CommonModel?: string;
    startDate?: string;
    endDate?: string;
    fieldOfStudy?: string;
    gpa?: number }
export interface References { name?: string;
    email?: string;
    company?: string;
    phoneNumber?: string;
    relationship?: string;
    position?: string;
    CommonModel?: string }
export interface Candidates { updatedAt?: string;
    workExperiences?: WorkExperiences[];
    modifyToken?: string;
    languages?: string[];
    createdAt?: string;
    firstName?: string;
    resume?: Attachments;
    CommonModel?: string;
    lastName?: string;
    websites?: string[];
    id?: string;
    role?: string;
    socialProfiles?: SocialProfiles[];
    phoneNumber?: string;
    references?: References[];
    status?: EmploymentAndCandidateStatus;
    preferredWorkLocation?: string;
    email?: string;
    profilePicture?: Images;
    coverLetter?: Attachments;
    customFields?: CustomAttributes[];
    notes?: Notes[];
    jobId?: string;
    skills?: string[];
    certifications?: string[];
    availability?: string;
    educations?: Educations[] }
export interface Contacts { leadId?: string;
    birthday?: string;
    emails?: Emails[];
    address?: Addresses;
    notes?: Notes;
    websites?: string[];
    addresses?: Addresses[];
    company?: string;
    socialProfiles?: SocialProfiles[];
    relationship?: string;
    lastName?: string;
    id?: string;
    customFields?: CustomAttributes[];
    defaultEmail?: string;
    CommonModel?: string;
    defaultPhone?: string;
    modifyToken?: string;
    createdAt?: string;
    phones?: Phones[];
    firstName?: string;
    note?: string;
    isActive?: boolean;
    updatedAt?: string;
    code?: string;
    tags?: string[] }
export interface Jobs { responsibilities?: string;
    createdAt?: string;
    jobTrialPeriod?: string;
    workFromHome?: boolean;
    experienceRequirements?: string;
    jobImmediateStart?: boolean;
    applicationDeadline?: string;
    CommonModel?: string;
    company?: Companies;
    baseSalary?: Salaries;
    skills?: string[];
    jobTrainingProvided?: boolean;
    jobShifts?: string[];
    jobStartDate?: string;
    qualifications?: string;
    employmentType?: EmploymentType;
    industry?: string;
    occupationalCategory?: string;
    jobLocationType?: string;
    languagesSpoken?: string[];
    incentives?: string;
    educationRequirements?: string;
    jobBenefits?: string;
    updatedAt?: string;
    description?: string;
    location?: Addresses;
    salaryCurrency?: string;
    modifyToken?: string;
    id?: string;
    title?: string;
    incentiveCompensation?: string;
    workHours?: string;
    jobFlexibleHours?: boolean;
    validUntil?: string;
    employmentUnit?: EmploymentUnits;
    remote?: boolean;
    benefits?: string[] }
export interface Salaries { paymentPeriod?: TimeCycle;
    currency?: Currency;
    CommonModel?: string;
    value?: number }
export interface HiringOrganizations { description?: string;
    name?: string;
    industry?: string;
    locations?: Addresses[];
    CommonModel?: string;
    size?: string }
export interface EmploymentUnits { CommonModel?: string;
    name?: string;
    description?: string }
export interface TimeSession { closeTime?: string;
    openTime?: string;
    CommonModel?: string }
export interface UserOrGroup { identifier?: string;
    CommonModel?: string;
    displayName?: string;
    type?: ParticipantType }
export interface Permissions { identifierType?: UniversalIdentifierType;
    assigneeDetails?: UserOrGroup;
    CommonModel?: string;
    canView?: string[];
    canEdit?: string[];
    roles?: string[];
    accessControlType?: AccessControlModel;
    canDelete?: string[] }
export interface Emails { CommonModel?: string;
    email?: string;
    type?: EmailCategoryType }
export interface Phones { CommonModel?: string;
    countryCode?: string;
    phone?: string;
    country?: string;
    type?: DeviceUsageType }
export interface Entity { attributes?: string[];
    CommonModel?: string;
    entityId?: string;
    entityType?: EntityCategory;
    value?: string }
export interface Notifications { priority?: PriorityLevel;
    channel?: string;
    deleted?: boolean;
    title?: string;
    CommonModel?: string;
    attachments?: Attachments[];
    type?: string;
    customFields?: CustomAttributes[];
    recipient?: Users;
    createdAt?: string;
    status?: string;
    updatedAt?: string;
    active?: boolean;
    notificationId?: string;
    message?: string }
export interface Comments { parentId?: string;
    CommonModel?: string;
    commentId?: string;
    author?: Users;
    likes?: number;
    flagged?: boolean;
    metadata?: Metadata[];
    createdAt?: string;
    text?: string;
    updatedAt?: string;
    active?: boolean;
    deleted?: boolean }
export interface Metadata { key?: string;
    createdAt?: string;
    type?: DataType;
    valueParsingRequired?: boolean;
    updatedAt?: string;
    entityId?: string;
    entityType?: string;
    id?: string;
    CommonModel?: string;
    value?: string }
export interface Tasks { subTaskIds?: string[];
    title?: string;
    updatedAt?: string;
    labels?: string[];
    id?: string;
    createdBy?: Users;
    relatedToTaskId?: string[];
    priority?: PriorityLevel;
    customFields?: CustomAttributes[];
    watchers?: Users[];
    dependOnTaskIds?: string[];
    completionPercentage?: number;
    notifications?: Notifications[];
    repeat?: string;
    dueDate?: string;
    createdAt?: string;
    attachments?: Attachments[];
    status?: TaskStatus;
    comments?: Comments[];
    parentTaskId?: string;
    dueTimezone?: string;
    timeLogged?: string;
    modifyToken?: string;
    timeEstimate?: string;
    assignee?: Users;
    description?: string;
    CommonModel?: string }
export interface Stores { longitude?: number;
    createdAt?: string;
    timezone?: string;
    country?: string;
    description?: string;
    currency?: Currency;
    category?: string;
    address?: Addresses;
    manager?: Staff;
    language?: string;
    updatedAt?: string;
    storeArea?: number;
    features?: string[];
    socialProfiles?: SocialProfiles[];
    countryCode?: string;
    websiteUrl?: string;
    isOperating?: boolean;
    owner?: Users;
    CommonModel?: string;
    phone?: string;
    id?: string;
    businessHours?: BusinessHours[];
    email?: string;
    relatedStores?: Stores[];
    logoUrl?: string;
    latitude?: number;
    ratings?: RatingsReviews;
    name?: string;
    paymentMethods?: string[] }
export interface Staff { createdAt?: string;
    updatedAt?: string;
    status?: EmploymentAndCandidateStatus;
    email?: string;
    role?: OrganizationalRole;
    deleted?: boolean;
    active?: boolean;
    photoUrl?: string;
    storeID?: string;
    firstName?: string;
    position?: string;
    addresses?: Addresses;
    CommonModel?: string;
    lastName?: string;
    gender?: string;
    phone?: string;
    dateOfBirth?: string;
    id?: string;
    customFields?: CustomAttributes[] }
export interface RatingsReviews { createdAt?: string;
    metadata?: Metadata;
    active?: boolean;
    storeID?: string;
    reviewerName?: string;
    verifiedPurchase?: boolean;
    deleted?: boolean;
    locale?: string;
    status?: ReviewApprovalStatus;
    CommonModel?: string;
    updatedAt?: string;
    rating?: number;
    review?: string;
    id?: string }
export interface ProductOptions { values?: string[];
    CommonModel?: string;
    createdAt?: string;
    id?: string;
    productId?: number;
    name?: string;
    updatedAt?: string }
export interface Taxes { updatedAt?: string;
    id?: string;
    amount?: number;
    createdAt?: string;
    description?: string;
    code?: string;
    currency?: Currency;
    name?: string;
    active?: boolean;
    category?: string;
    type?: TaxType;
    CommonModel?: string;
    customFields?: CustomAttributes[];
    country?: string;
    rate?: number;
    taxable?: boolean;
    region?: string;
    jurisdiction?: string;
    deleted?: boolean }
export interface InventoryLocations { locationId?: string;
    updatedAt?: string;
    deleted?: boolean;
    address?: Addresses;
    operationalHours?: string;
    isActive?: boolean;
    name?: string;
    type?: InventoryStorageType;
    quantity?: number;
    createdAt?: string;
    contactInformation?: Contacts[];
    CommonModel?: string }
export interface Prices { amount?: number;
    currency?: Currency;
    type?: string;
    CommonModel?: string }
export interface Variants { barcode?: string;
    inventoryQuantity?: number;
    updatedAt?: string;
    weight?: number;
    deleted?: boolean;
    CommonModel?: string;
    productId?: string;
    weightUnit?: string;
    isDefault?: boolean;
    title?: string;
    price?: number;
    modifyToken?: string;
    id?: string;
    requiresShipping?: boolean;
    taxable?: boolean;
    dimensions?: Dimensions;
    imageId?: number;
    createdAt?: string;
    active?: boolean;
    status?: ItemAvailabilityStatus;
    compareAtPrice?: number;
    sku?: string }
export interface Dimensions { CommonModel?: string;
    height?: number;
    length?: number;
    width?: number }
export interface Products { vendor?: string;
    relatedProducts?: string[];
    weight?: number;
    inventoryLocation?: InventoryLocations;
    inventoryQuantity?: number;
    metaTitle?: string;
    slug?: string;
    metaDescription?: string;
    taxes?: Taxes[];
    reference?: Entity;
    categories?: string[];
    dimensions?: Dimensions;
    type?: string;
    availableForSale?: boolean;
    seoKeywords?: string[];
    localizations?: Localizations[];
    brand?: Brands;
    isDownloadable?: boolean;
    updatedAt?: string;
    prices?: Prices[];
    manufacturerName?: string;
    weightUnit?: string;
    CommonModel?: string;
    sku?: string;
    title?: string;
    options?: ProductOptions[];
    id?: string;
    variants?: Variants[];
    code?: string;
    accountIds?: KeyValues[];
    publishedAt?: string;
    customFields?: CustomAttributes[];
    images?: Images[];
    status?: EntityLifecycleStatus;
    downloadFiles?: Attachments[];
    createdAt?: string;
    tags?: string[];
    modifyToken?: string;
    description?: string;
    skuValidation?: SkuValidation }
export interface Orders { tax?: number;
    tags?: string[];
    shippingCost?: number;
    tip?: number;
    shippingAddress?: Addresses;
    modifyToken?: string;
    CommonModel?: string;
    status?: OrderStatus;
    total?: number;
    paymentStatus?: PaymentStatus;
    trackingInfo?: string;
    items?: Items[];
    shippingMethod?: string;
    note?: string;
    id?: string;
    currency?: Currency;
    updatedAt?: string;
    orderNumber?: string;
    createdAt?: string;
    storeLocationId?: string;
    billingAddress?: Addresses;
    shippingId?: string;
    subTotal?: number;
    paymentMethods?: string[];
    customerId?: string;
    discounts?: Discounts[];
    taxes?: Taxes[];
    reference?: Entity }
export interface Opportunities { campaign?: Campaigns;
    companyName?: string;
    title?: string;
    closeDate?: string;
    isWon?: boolean;
    amount?: number;
    entity?: Entity;
    lostReason?: string;
    tags?: string[];
    attachments?: Attachments[];
    probability?: number;
    nextStep?: string;
    updatedAt?: string;
    leadId?: string;
    CommonModel?: string;
    notes?: string[];
    modifyToken?: string;
    stage?: string;
    currency?: Currency;
    owner?: Users;
    customFields?: CustomAttributes[];
    createdAt?: string;
    isClosed?: boolean;
    contacts?: Contacts[];
    type?: string;
    companyId?: string;
    description?: string;
    leadSource?: string;
    id?: string }
export interface PaymentMethods { details?: string;
    isDefault?: boolean;
    type?: PaymentMethod;
    CommonModel?: string;
    id?: string }
export interface SSO { updatedAt?: string;
    active?: boolean;
    deleted?: boolean;
    CommonModel?: string;
    scopes?: string[];
    provider?: IdentityProvider;
    expiresIn?: number;
    expiryDate?: string;
    tokenType?: string;
    profileUrl?: string;
    providerUserId?: string;
    createdAt?: string;
    accessToken?: string;
    refreshToken?: string }
export interface Preferences { CommonModel?: string;
    language?: string;
    id?: string;
    timeZone?: string;
    currency?: Currency;
    communications?: CommunicationMethod }
export interface Users { dateOfBirth?: string;
    preferences?: Preferences;
    website?: string;
    middleName?: string;
    status?: UserStatus;
    firstName?: string;
    gender?: Gender;
    addresses?: Addresses[];
    email?: string;
    socialProfiles?: SocialProfiles[];
    paymentMethods?: PaymentMethods;
    coverPhoto?: Images;
    password?: string;
    profilePicture?: Images;
    phoneNumber?: string;
    updatedAt?: string;
    roles?: Roles[];
    id?: string;
    bio?: string;
    username?: string;
    isActive?: boolean;
    modifyToken?: string;
    createdAt?: string;
    CommonModel?: string;
    lastLogin?: string;
    lastName?: string;
    sso?: SSO[] }
export interface Categories { updatedAt?: string;
    CommonModel?: string;
    id?: string;
    tags?: string[];
    modifyToken?: string;
    createdAt?: string;
    image?: string;
    name?: string;
    parentId?: string }
export interface Notes { attachments?: Attachments[];
    metadata?: string[];
    title?: string;
    visibility?: ContentVisibility;
    createdAt?: string;
    color?: string;
    reminder?: string;
    priority?: PriorityLevel;
    author?: Users;
    lastAccessed?: string;
    id?: string;
    sharedWith?: Users[];
    modifyToken?: string;
    CommonModel?: string;
    content?: string;
    tags?: string[];
    updatedAt?: string }
export interface LeadSource { CommonModel?: string;
    sourceId?: string;
    sourceName?: string;
    details?: string }
export interface TransactionDetails { amount?: number;
    status?: string;
    transactionId?: string;
    CommonModel?: string }
export interface Leads { middleName?: string;
    companyName?: string;
    numberOfEmployees?: number;
    createdAt?: string;
    website?: string;
    modifyToken?: string;
    defaultPhone?: string;
    customFields?: CustomAttributes[];
    id?: string;
    defaultEmail?: string;
    entity?: Entity;
    jobTitle?: string;
    industry?: string;
    socialProfiles?: SocialProfiles[];
    emails?: Emails[];
    notes?: Notes[];
    name?: string;
    phones?: Phones[];
    CommonModel?: string;
    companyId?: string;
    firstName?: string;
    leadStatus?: LeadLifecycleStatus;
    preferredContactMethod?: CommunicationMethod;
    updatedAt?: string;
    leadSource?: LeadSource;
    annualRevenue?: number;
    opportunities?: Opportunities[];
    addresses?: Addresses[];
    lastName?: string }
export interface FulfillmentReceipts { paymentMethod?: PaymentMethod;
    CommonModel?: string;
    id?: string;
    customerInfo?: Customers;
    updatedAt?: string;
    currency?: Currency;
    authorization?: string;
    deleted?: boolean;
    fulfillmentId?: string;
    createdAt?: string;
    transactionDetails?: TransactionDetails;
    status?: OrderStatus;
    amount?: number;
    testCase?: boolean;
    active?: boolean }
export interface FulfillmentItems { title?: string;
    weight?: number;
    requiresShipping?: boolean;
    dimensions?: Dimensions;
    createdAt?: string;
    productId?: string;
    id?: string;
    variantId?: string;
    status?: OrderStatus;
    weightUnit?: string;
    updatedAt?: string;
    deleted?: boolean;
    active?: boolean;
    variantTitle?: string;
    customAttributes?: CustomAttributes;
    taxable?: boolean;
    description?: string;
    fulfillmentId?: string;
    imageUrl?: string;
    price?: number;
    CommonModel?: string;
    quantity?: number;
    sku?: string;
    orderId?: string }
export interface Fulfillments { trackingUrls?: string[];
    CommonModel?: string;
    currency?: Currency;
    receipt?: FulfillmentReceipts;
    shipmentDate?: string;
    createdAt?: string;
    id?: string;
    totalPrice?: number;
    metadata?: Metadata;
    lineItems?: Items[];
    address?: Addresses;
    expectedDelivery?: string;
    orderId?: string;
    notes?: string;
    status?: FulfillmentStatus;
    updatedAt?: string;
    trackingNumber?: string;
    service?: string;
    carrier?: string;
    items?: FulfillmentItems[] }
export interface CustomAttributes { fieldName?: string;
    CommonModel?: string;
    fieldValue?: string;
    fieldType?: DataType;
    id?: string }
export interface Companies { reference?: Entity;
    revenue?: number;
    name?: string;
    domain?: string;
    updatedAt?: string;
    foundedDate?: string;
    additionalContacts?: Contacts[];
    taxId?: string;
    defaultPhone?: string;
    numberOfEmployees?: number;
    revenueCurrency?: string;
    stockSymbol?: string;
    legalName?: string;
    tags?: string[];
    incorporationDate?: string;
    companyNumber?: string;
    id?: string;
    dunsNumber?: string;
    regulatoryStatus?: string;
    modifyToken?: string;
    defaultEmail?: string;
    type?: string;
    description?: string;
    socialProfiles?: SocialProfiles[];
    industry?: string;
    website?: string;
    emails?: Emails[];
    address?: Addresses;
    parentCompanyId?: string;
    createdAt?: string;
    phones?: Phones[];
    customFields?: CustomAttributes[];
    logo?: string;
    CommonModel?: string;
    incorporationCountry?: string }
export interface Localizations { description?: string;
    metaDescription?: string;
    title?: string;
    CommonModel?: string;
    metaTitle?: string;
    locale?: string }
export interface KeyValues { value?: string;
    CommonModel?: string;
    key?: string }
export interface SocialProfiles { type?: SocialPlatform;
    avatarUrl?: string;
    createdAt?: string;
    CommonModel?: string;
    email?: string;
    username?: string;
    active?: boolean;
    updatedAt?: string;
    displayName?: string;
    deleted?: boolean;
    additionalInfo?: Metadata;
    url?: string }
export interface Customers { reference?: Entity;
    jobTitle?: string;
    addresses?: Addresses[];
    lastName?: string;
    preferredContactMethod?: CommunicationMethod;
    socialProfiles?: SocialProfiles[];
    defaultAddress?: Addresses;
    phones?: Phones[];
    updatedAt?: string;
    loyaltyProgramMembership?: string;
    source?: string;
    CommonModel?: string;
    company?: string;
    currency?: Currency;
    createdAt?: string;
    companyId?: string;
    status?: CustomerStatus;
    customFields?: CustomAttributes[];
    customerNumber?: string;
    id?: string;
    customerSegment?: string;
    emails?: Emails[];
    notes?: string;
    customerType?: CustomerType;
    tags?: string[];
    metadata?: string;
    modifyToken?: string;
    fullName?: string;
    middleName?: string;
    title?: string;
    dateOfBirth?: string;
    email?: string;
    firstName?: string;
    phoneNumber?: string }
export interface TaxLines { rate?: number;
    isInclusive?: boolean;
    metadata?: Metadata;
    updatedAt?: string;
    isNonRecoverable?: boolean;
    price?: number;
    CommonModel?: string;
    title?: string;
    id?: string;
    deleted?: boolean;
    createdAt?: string;
    name?: string;
    taxCode?: string;
    isCompound?: boolean;
    active?: boolean }
export interface Images { title?: string;
    width?: number;
    CommonModel?: string;
    type?: ImageType;
    src?: string;
    height?: number;
    altText?: string;
    active?: boolean;
    data?: string;
    mimeType?: ImageMimeType;
    thumbnailSrc?: string;
    caption?: string;
    createdAt?: string;
    id?: string;
    updatedAt?: string;
    deleted?: boolean;
    tags?: string[] }
export interface GiftCards { associatedUser?: Users;
    active?: boolean;
    CommonModel?: string;
    createdAt?: string;
    status?: LifecycleStatus;
    id?: string;
    balance?: number;
    expirationDate?: string;
    currency?: Currency;
    cardNumber?: string;
    issuedBy?: string;
    purchasedBy?: string;
    metadata?: string;
    amountUsed?: number;
    updatedAt?: string;
    deleted?: boolean }
export interface Promotions { type?: PromotionType;
    usageLimit?: number;
    currency?: Currency;
    termsAndConditions?: string;
    createdAt?: string;
    eligibleItems?: string[];
    discountValue?: number;
    customerEligibility?: CustomerEligibilityStatus;
    endDate?: string;
    limitPerCustomer?: number;
    code?: string;
    discountType?: DiscountType;
    updatedAt?: string;
    description?: string;
    CommonModel?: string;
    active?: boolean;
    startDate?: string;
    minimumPurchaseAmount?: number;
    deleted?: boolean }
export interface PaymentDetails { deleted?: boolean;
    transactionId?: string;
    currency?: Currency;
    billingAddress?: Addresses;
    refunded?: boolean;
    CommonModel?: string;
    amount?: number;
    createdAt?: string;
    active?: boolean;
    paymentGateway?: string;
    status?: string;
    updatedAt?: string;
    method?: string }
export interface PerformanceMetrics { costPerClick?: number;
    conversions?: number;
    conversionRate?: number;
    clicks?: number;
    returnOnInvestment?: number;
    CommonModel?: string;
    costPerConversion?: number;
    impressions?: number;
    spend?: number }
export interface ShippingDetails { estimatedDelivery?: string;
    createdAt?: string;
    active?: boolean;
    provider?: string;
    signatureRequired?: boolean;
    trackingNumber?: string;
    insurance?: boolean;
    method?: string;
    deleted?: boolean;
    updatedAt?: string;
    price?: number;
    CommonModel?: string;
    address?: Addresses }
export interface Items { updatedAt?: string;
    quantity?: number;
    discountLines?: Discounts[];
    sku?: string;
    requiresShipping?: boolean;
    deleted?: boolean;
    discountedPrice?: number;
    createdAt?: string;
    taxable?: boolean;
    fulfillableQuantity?: number;
    title?: string;
    shippingId?: string;
    modifiers?: Modifiers[];
    variantId?: string;
    originalPrice?: number;
    taxLines?: TaxLines[];
    description?: string;
    discount?: number;
    linePrice?: number;
    price?: number;
    accountId?: string;
    currency?: Currency;
    weight?: number;
    parentId?: string;
    CommonModel?: string;
    accountName?: string;
    productId?: string;
    variantTitle?: string;
    weightUnit?: string;
    tax?: number;
    active?: boolean;
    id?: string;
    image?: Images }
export interface Carts { shippingDetails?: ShippingDetails;
    itemCount?: number;
    originalTotalPrice?: number;
    attributes?: string[];
    buyerIdentity?: Customers;
    createdAt?: string;
    items?: Items[];
    promotions?: Promotions[];
    giftCards?: GiftCards[];
    version?: string;
    note?: string;
    state?: OrderStatus;
    paymentDetails?: PaymentDetails;
    token?: string;
    currency?: Currency;
    CommonModel?: string;
    totalWeight?: number;
    updatedAt?: string;
    id?: string;
    totalPrice?: number;
    discountCodes?: string[];
    messages?: string[] }
export interface Campaigns { CommonModel?: string;
    id?: string;
    status?: CampaignStatus;
    name?: string;
    creativeAssets?: Attachments;
    createdAt?: string;
    endDate?: string;
    updatedAt?: string;
    budget?: number;
    active?: boolean;
    startDate?: string;
    channels?: string[];
    deleted?: boolean;
    type?: CampaignType;
    tags?: string[];
    targetAudience?: string;
    performanceMetrics?: PerformanceMetrics }
export interface Attachments { fileName?: string;
    associatedWith?: Entity;
    permissions?: Permissions;
    createdAt?: string;
    updatedAt?: string;
    fileSize?: number;
    url?: string;
    CommonModel?: string;
    thumbnailUrl?: string;
    content?: string;
    previewUrl?: string;
    fileType?: string;
    metadata?: Metadata;
    id?: string }
export interface BusinessHours { storeID?: string;
    updatedAt?: string;
    sessions?: TimeSession[];
    closed?: boolean;
    timeZone?: string;
    dayOfWeek?: DayOfWeek;
    active?: boolean;
    deleted?: boolean;
    CommonModel?: string;
    id?: string;
    createdAt?: string }
export interface Brands { name?: string;
    updatedAt?: string;
    description?: string;
    CommonModel?: string;
    logo?: string;
    country?: string;
    customFields?: CustomAttributes[];
    website?: string;
    established?: string;
    status?: ItemEntityStatus;
    createdAt?: string;
    id?: string }
export interface GeoCoordinates { speed?: number;
    timestamp?: string;
    latitude?: number;
    heading?: number;
    altitude?: number;
    accuracy?: number;
    longitude?: number;
    CommonModel?: string;
    altitudeAccuracy?: number }
export interface Addresses { accountId?: string;
    name?: string;
    addressLine2?: string;
    type?: ContactAddressType;
    companyName?: string;
    geoLocation?: GeoCoordinates;
    lastName?: string;
    CommonModel?: string;
    country?: string;
    customFields?: CustomAttributes[];
    countryCode?: string;
    region?: string;
    contactId?: string;
    firstName?: string;
    postalCodeExtension?: string;
    city?: string;
    province?: string;
    postalCode?: string;
    phone?: string;
    street?: string;
    subdivisionCode?: string;
    middleName?: string;
    id?: string;
    email?: string }
export interface CRMAccounts { shippingAddress?: Addresses;
    rating?: AccountEngagementLevel;
    website?: string;
    phone?: string;
    billingAddress?: Addresses;
    industry?: string;
    numberOfEmployees?: number;
    accountType?: StakeholderType;
    email?: string;
    createdAt?: string;
    status?: AccountStatus;
    CommonModel?: string;
    id?: string;
    annualRevenue?: number;
    name?: string;
    customFields?: CustomAttributes[];
    tags?: string[];
    ownerId?: string;
    updatedAt?: string }
export const enum CustomerSelection { All = 'all', Prerequisite = 'prerequisite' }
export const enum Roles { Moderator = 'moderator', User = 'user', Admin = 'admin' }
export const enum Gender { Female = 'female', PreferNotToSay = 'prefer not to say', Male = 'male', Other = 'other' }
export const enum Status { Expired = 'expired', Active = 'active', Scheduled = 'scheduled' }
export const enum MinimumRequirements { None = 'none', MinimumQuantityOfItems = 'minimum-quantity-of-items', MinimumPurchaseAmount = 'minimum-purchase-amount' }
export const enum SkuValidation { GlobalUnique = 'global-unique', LocalUnique = 'local-unique', None = 'none' }
export const enum AccountType { ExpenseEntertainmentMeals = 'expense::entertainment-meals', ExpenseExternalServices = 'expense::external-services', AssetOrganizationalCosts = 'asset::organizational-costs', OtherExpenseHomeOwnerRentalInsurance = 'other-expense::home-owner-rental-insurance', ExpenseAppropriationsToDepreciation = 'expense::appropriations-to-depreciation', LiabilityGovernmentAndOtherPublicAuthorities = 'liability::government-and-other-public-authorities', EquityOtherFreeReserves = 'equity::other-free-reserves', ExpenseOtherSellingExpenses = 'expense::other-selling-expenses', OtherCurrentLiabilityStateLocalIncomeTaxPayable = 'other-current-liability::state-local-income-tax-payable', LiabilityLongTermEmployeeBenefitObligations = 'liability::long-term-employee-benefit-obligations', AssetCashOnHand = 'asset::cash-on-hand', ExpenseOfficeExpenses = 'expense::office-expenses', OtherCurrentLiabilityLoanPayable = 'other-current-liability::loan-payable', AssetCalledUpShareCapitalNotPaid = 'asset::called-up-share-capital-not-paid', ExpenseOtherExternalServices = 'expense::other-external-services', ExpenseGlobalTaxExpense = 'expense::global-tax-expense', OtherExpenseVehicleInsurance = 'other-expense::vehicle-insurance', AssetSavings = 'asset::savings', OtherCurrentLiabilityCurrentPortionEmployeeBenefitsObligations = 'other-current-liability::current-portion-employee-benefits-obligations', AssetInvestmentTaxExemptSecurities = 'asset::investment-tax-exempt-securities', OtherExpenseOtherMiscellaneousExpense = 'other-expense::other-miscellaneous-expense', Expense = 'expense', AssetInternalTransfers = 'asset::internal-transfers', ExpenseEquipmentRental = 'expense::equipment-rental', EquityPersonalIncome = 'equity::personal-income', ExpenseOtherCurrentOperatingCharges = 'expense::other-current-operating-charges', EquityHealthcare = 'equity::healthcare', AssetBalWithGovtAuthorities = 'asset::bal-with-govt-authorities', AssetOtherEarMarkedBankAccounts = 'asset::other-ear-marked-bank-accounts', OtherExpensePriorPeriodItems = 'other-expense::prior-period-items', ExpenseOtherBusinessExpenses = 'expense::other-business-expenses', LiabilityDeferredTaxLiabilities = 'liability::deferred-tax-liabilities', OtherIncomeDividendIncome = 'other-income::dividend-income', LiabilityObligationsUnderFinanceLeases = 'liability::obligations-under-finance-leases', OtherIncomeUnrealisedLossOnSecuritiesNetOfTax = 'other-income::unrealised-loss-on-securities-net-of-tax', EquityPaidInCapitalOrSurplus = 'equity::paid-in-capital-or-surplus', ExpenseTaxesPaid = 'expense::taxes-paid', OtherIncomeOtherOperatingIncome = 'other-income::other-operating-income', EquityEquityInEarningsOfSubsidiuaries = 'equity::equity-in-earnings-of-subsidiuaries', AssetGlobalTaxRefund = 'asset::global-tax-refund', AssetOtherCurrentAsset = 'asset::other-current-asset', ExpensePayrollExpenses = 'expense::payroll-expenses', OtherExpenseVehicleLoan = 'other-expense::vehicle-loan', LiabilityAccountsPayable = 'liability::accounts-payable', AssetFixedAssetPhone = 'asset::fixed-asset-phone', AssetRentsHeldInTrust = 'asset::rents-held-in-trust', OtherExpenseExceptionalItems = 'other-expense::exceptional-items', AssetDevelopmentCosts = 'asset::development-costs', EquityMoneyReceivedAgainstShareWarrants = 'equity::money-received-against-share-warrants', ExpenseShippingFreightDelivery = 'expense::shipping-freight-delivery', LiabilityLongTermDebit = 'liability::long-term-debit', LiabilityLiabilitiesRelatedToAssetsHeldForSale = 'liability::liabilities-related-to-assets-held-for-sale', EquityPartnerContributions = 'equity::partner-contributions', LiabilityShareholderNotesPayable = 'liability::shareholder-notes-payable', LiabilityOutstandingDuesMicroSmallEnterprise = 'liability::outstanding-dues-micro-small-enterprise', RevenueOtherCurrentOperatingIncome = 'revenue::other-current-operating-income', RevenueSalesRetail = 'revenue::sales-retail', OtherCurrentLiabilityPayrollTaxPayable = 'other-current-liability::payroll-tax-payable', OtherCurrentLiability = 'other-current-liability', RevenueNonProfitIncome = 'revenue::non-profit-income', OtherExpenseUtilities = 'other-expense::utilities', AssetFixedAsset = 'asset::fixed-asset', ExpenseOfficeGeneralAdministrativeExpenses = 'expense::office-general-administrative-expenses', OtherCurrentLiabilityPayrollClearing = 'other-current-liability::payroll-clearing', OtherIncomeGainLossOnSaleOfFixedAssets = 'other-income::gain-loss-on-sale-of-fixed-assets', LiabilityProvisionsNonCurrentLiabilities = 'liability::provisions-non-current-liabilities', RevenueServiceFeeIncome = 'revenue::service-fee-income', Asset = 'asset', LiabilityOtherLongTermLiabilities = 'liability::other-long-term-liabilities', OtherIncome = 'other-income', OtherExpenseHomeOffice = 'other-expense::home-office', OtherIncomeGainLossOnSaleOfInvestments = 'other-income::gain-loss-on-sale-of-investments', OtherCurrentLiabilityShortTermBorrowings = 'other-current-liability::short-term-borrowings', OtherExpenseRepairsAndMaintenance = 'other-expense::repairs-and-maintenance', ExpenseTravelMeals = 'expense::travel-meals', AssetOtherAsset = 'asset::other-asset', OtherCurrentLiabilityOtherCurrentLiabilities = 'other-current-liability::other-current-liabilities', EquityInvestmentGrants = 'equity::investment-grants', AssetProvisionsNonCurrentAssets = 'asset::provisions-non-current-assets', AssetBuildings = 'asset::buildings', OtherExpenseVehicleRegistration = 'other-expense::vehicle-registration', AssetAccumulatedAmortizationOfOtherAssets = 'asset::accumulated-amortization-of-other-assets', RevenueOperatingGrants = 'revenue::operating-grants', ExpenseOtherMiscellaneousServiceCost = 'expense::other-miscellaneous-service-cost', EquityRetainedEarnings = 'equity::retained-earnings', ExpenseCharitableContributions = 'expense::charitable-contributions', ExpenseFinanceCosts = 'expense::finance-costs', RevenueDiscountsRefundsGiven = 'revenue::discounts-refunds-given', OtherCurrentLiabilitySalesTaxPayable = 'other-current-liability::sales-tax-payable', ExpenseInsurance = 'expense::insurance', AssetProvisionsFixedAssets = 'asset::provisions-fixed-assets', EquityCalledUpShareCapital = 'equity::called-up-share-capital', EquityCapitalReserves = 'equity::capital-reserves', LiabilityLongTermBorrowings = 'liability::long-term-borrowings', OtherCurrentLiabilityTrustAccountsLiabilities = 'other-current-liability::trust-accounts-liabilities', RevenueOwnWorkCapitalized = 'revenue::own-work-capitalized', ExpenseSundry = 'expense::sundry', OtherExpenseAmortization = 'other-expense::amortization', AssetOtherCurrentAssets = 'asset::other-current-assets', Liability = 'liability', RevenueSalesWholesale = 'revenue::sales-wholesale', CostOfGoodsSoldFreightAndDeliveryCost = 'cost-of-goods-sold::freight-and-delivery-cost', AssetOtherLongTermLoansAndAdvances = 'asset::other-long-term-loans-and-advances', CostOfGoodsSoldSuppliesMaterialsCogs = 'cost-of-goods-sold::supplies-materials-cogs', EquityEstimatedTaxes = 'equity::estimated-taxes', AssetRetainage = 'asset::retainage', AssetBank = 'asset::bank', RevenueRevenueGeneral = 'revenue::revenue-general', AssetOtherFixedAssets = 'asset::other-fixed-assets', AssetChecking = 'asset::checking', AssetAssetsAvailableForSale = 'asset::assets-available-for-sale', OtherCurrentLiabilityCurrentPortionOfObligationsUnderFinanceLeases = 'other-current-liability::current-portion-of-obligations-under-finance-leases', LiabilityOtherLongTermProvisions = 'liability::other-long-term-provisions', CostOfGoodsSoldCostOfSales = 'cost-of-goods-sold::cost-of-sales', OtherCurrentLiabilityDividendsPayable = 'other-current-liability::dividends-payable', OtherCurrentLiabilityDirectDepositPayable = 'other-current-liability::direct-deposit-payable', OtherCurrentLiabilityRentsInTrustLiability = 'other-current-liability::rents-in-trust-liability', OtherExpenseParkingAndTolls = 'other-expense::parking-and-tolls', ExpenseLossOnDiscontinuedOperationsNetOfTax = 'expense::loss-on-discontinued-operations-net-of-tax', AssetInvestmentOther = 'asset::investment-other', AssetFurnitureAndFixtures = 'asset::furniture-and-fixtures', LiabilityGroupAndAssociates = 'liability::group-and-associates', EquityOpeningBalanceEquity = 'equity::opening-balance-equity', ExpenseAuto = 'expense::auto', OtherCurrentLiabilitySundryDebtorsAndCreditors = 'other-current-liability::sundry-debtors-and-creditors', EquityAccumulatedAdjustment = 'equity::accumulated-adjustment', RevenueSavingsByTaxScheme = 'revenue::savings-by-tax-scheme', ExpenseLegalProfessionalFees = 'expense::legal-professional-fees', AssetAssetsHeldForSale = 'asset::assets-held-for-sale', AssetFixedAssetFurniture = 'asset::fixed-asset-furniture', AssetOtherLongTermInvestments = 'asset::other-long-term-investments', OtherExpenseVehicle = 'other-expense::vehicle', LiabilityDebtsRelatedToParticipatingInterests = 'liability::debts-related-to-participating-interests', OtherCurrentLiabilityStaffAndRelatedLiabilityAccounts = 'other-current-liability::staff-and-related-liability-accounts', OtherExpenseOtherVehicleExpenses = 'other-expense::other-vehicle-expenses', RevenueSalesOfProductIncome = 'revenue::sales-of-product-income', AssetMachineryAndEquipment = 'asset::machinery-and-equipment', AssetAccumulatedDepletion = 'asset::accumulated-depletion', LiabilityAccrualsAndDeferredIncome = 'liability::accruals-and-deferred-income', OtherCurrentLiabilityTradeAndOtherPayables = 'other-current-liability::trade-and-other-payables', OtherExpenseExchangeGainOrLoss = 'other-expense::exchange-gain-or-loss', EquityTreasuryStock = 'equity::treasury-stock', Income = 'income', OtherExpenseGasAndFuel = 'other-expense::gas-and-fuel', LiabilityAccruedLongTermLiabilities = 'liability::accrued-long-term-liabilities', ExpenseExtraordinaryCharges = 'expense::extraordinary-charges', RevenueIncome = 'revenue::income', AssetParticipatingInterests = 'asset::participating-interests', CostOfGoodsSoldCostOfLaborCos = 'cost-of-goods-sold::cost-of-labor-cos', AssetAccumulatedAmortization = 'asset::accumulated-amortization', LiabilityCreditCard = 'liability::credit-card', ExpenseEntertainment = 'expense::entertainment', OtherIncomeInterestEarned = 'other-income::interest-earned', ExpenseAmortizationExpense = 'expense::amortization-expense', OtherIncomeOtherMiscellaneousIncome = 'other-income::other-miscellaneous-income', RevenueCashReceiptIncome = 'revenue::cash-receipt-income', AssetLongTermInvestments = 'asset::long-term-investments', ExpenseTravelExpensesSellingExpense = 'expense::travel-expenses-selling-expense', AssetCapitalWip = 'asset::capital-wip', OtherExpenseMatCredit = 'other-expense::mat-credit', AssetSecurityDeposits = 'asset::security-deposits', ExpenseOtherRentalCosts = 'expense::other-rental-costs', AssetDepletableAssets = 'asset::depletable-assets', AssetInvestments = 'asset::investments', AssetLeaseholdImprovements = 'asset::leasehold-improvements', OtherExpenseExtraordinaryItems = 'other-expense::extraordinary-items', OtherCurrentLiabilityCurrentTaxLiability = 'other-current-liability::current-tax-liability', ExpenseBorrowingCost = 'expense::borrowing-cost', AssetShortTermLoansAndAdvancesToRelatedParties = 'asset::short-term-loans-and-advances-to-related-parties', Equity = 'equity', ExpensePromotionalMeals = 'expense::promotional-meals', AssetGlobalTaxDeferred = 'asset::global-tax-deferred', AssetIntangibleAssets = 'asset::intangible-assets', AssetTrustAccounts = 'asset::trust-accounts', EquityCommonStock = 'equity::common-stock', EquityPartnerDistributions = 'equity::partner-distributions', ExpenseShippingAndDeliveryExpense = 'expense::shipping-and-delivery-expense', ExpenseTravel = 'expense::travel', OtherExpenseOtherHomeOfficeExpenses = 'other-expense::other-home-office-expenses', AssetAllowanceForBadDebts = 'asset::allowance-for-bad-debts', ExpenseManagementCompensation = 'expense::management-compensation', OtherExpensePenaltiesSettlements = 'other-expense::penalties-settlements', AssetProvisionsCurrentAssets = 'asset::provisions-current-assets', EquityShareCapital = 'equity::share-capital', OtherCurrentLiabilityAccruedLiabilities = 'other-current-liability::accrued-liabilities', OtherIncomeLossOnDisposalOfAssets = 'other-income::loss-on-disposal-of-assets', ExpenseCommissionsAndFees = 'expense::commissions-and-fees', OtherIncomeOtherInvestmentIncome = 'other-income::other-investment-income', AssetLeaseBuyout = 'asset::lease-buyout', OtherCurrentLiabilityInterestPayables = 'other-current-liability::interest-payables', AssetLoansToOfficers = 'asset::loans-to-officers', RevenueOtherPrimaryIncome = 'revenue::other-primary-income', AssetAccumulatedDepreciation = 'asset::accumulated-depreciation', ExpenseAdvertisingPromotional = 'expense::advertising-promotional', CostOfGoodsSold = 'cost-of-goods-sold', AssetMoneyMarket = 'asset::money-market', CostOfGoodsSoldOtherCostsOfServiceCos = 'cost-of-goods-sold::other-costs-of-service-cos', OtherCurrentLiabilityGlobalTaxSuspense = 'other-current-liability::global-tax-suspense', OtherCurrentLiabilityProvisionsCurrentLiabilities = 'other-current-liability::provisions-current-liabilities', AssetFixedAssetPhotoVideo = 'asset::fixed-asset-photo-video', AssetLandAsset = 'asset::land-asset', AssetLand = 'asset::land', OtherCurrentLiabilityPrepaidExpensesPayable = 'other-current-liability::prepaid-expenses-payable', OtherCurrentLiabilityLineOfCredit = 'other-current-liability::line-of-credit', OtherExpenseDepreciation = 'other-expense::depreciation', ExpenseRepairMaintenance = 'expense::repair-maintenance', AssetVehicles = 'asset::vehicles', ExpenseCostOfLabor = 'expense::cost-of-labor', OtherCurrentLiabilityInsurancePayable = 'other-current-liability::insurance-payable', AssetAvailableForSaleFinancialAssets = 'asset::available-for-sale-financial-assets', ExpenseUtilities = 'expense::utilities', AssetPrepaidExpenses = 'asset::prepaid-expenses', AssetEmployeeCashAdvances = 'asset::employee-cash-advances', ExpenseIncomeTaxExpense = 'expense::income-tax-expense', OtherExpense = 'other-expense', AssetFixedAssetComputers = 'asset::fixed-asset-computers', EquityPersonalExpense = 'equity::personal-expense', AssetFixedAssetSoftware = 'asset::fixed-asset-software', AssetGoodwill = 'asset::goodwill', AssetCashAndCashEquivalents = 'asset::cash-and-cash-equivalents', AssetLicenses = 'asset::licenses', AssetLoansToOthers = 'asset::loans-to-others', ExpenseRentOrLeaseOfBuildings = 'expense::rent-or-lease-of-buildings', AssetOtherIntangibleAssets = 'asset::other-intangible-assets', LiabilityStaffAndRelatedLongTermLiabilityAccounts = 'liability::staff-and-related-long-term-liability-accounts', OtherExpenseMortgageInterest = 'other-expense::mortgage-interest', OtherExpenseIncomeTaxOtherExpense = 'other-expense::income-tax-other-expense', ExpenseInterestPaid = 'expense::interest-paid', ExpenseStaffCosts = 'expense::staff-costs', OtherExpenseVehicleLoanInterest = 'other-expense::vehicle-loan-interest', AssetFixedAssetOtherToolsEquipment = 'asset::fixed-asset-other-tools-equipment', AssetLoansToStockholders = 'asset::loans-to-stockholders', AssetAssetsInCourseOfConstruction = 'asset::assets-in-course-of-construction', AssetOtherLongTermAssets = 'asset::other-long-term-assets', ExpensePenaltiesSettlements = 'expense::penalties-settlements', ExpenseDuesSubscriptions = 'expense::dues-subscriptions', AssetInvestmentMortgageRealEstateLoans = 'asset::investment-mortgage-real-estate-loans', AssetLongTermLoansAndAdvancesToRelatedParties = 'asset::long-term-loans-and-advances-to-related-parties', LiabilityAccruedVacationPayable = 'liability::accrued-vacation-payable', AssetDeferredTax = 'asset::deferred-tax', LiabilityBankLoans = 'liability::bank-loans', ExpenseProjectStudiesSurveysAssessments = 'expense::project-studies-surveys-assessments', OtherCurrentLiabilityFederalIncomeTaxPayable = 'other-current-liability::federal-income-tax-payable', OtherExpenseVehicleRepairs = 'other-expense::vehicle-repairs', AssetExpenditureAuthorisationsAndLettersOfCredit = 'asset::expenditure-authorisations-and-letters-of-credit', AssetCumulativeDepreciationOnIntangibleAssets = 'asset::cumulative-depreciation-on-intangible-assets', AssetTradeAndOtherReceivables = 'asset::trade-and-other-receivables', AssetUndepositedFunds = 'asset::undeposited-funds', ExpenseSuppliesMaterials = 'expense::supplies-materials', OtherExpenseVehicleLease = 'other-expense::vehicle-lease', AssetFixedAssetCopiers = 'asset::fixed-asset-copiers', CostOfGoodsSoldEquipmentRentalCos = 'cost-of-goods-sold::equipment-rental-cos', EquityPartnersEquity = 'equity::partners-equity', ExpenseTravelExpensesGeneralAndAdminExpenses = 'expense::travel-expenses-general-and-admin-expenses', OtherCurrentLiabilityDutiesAndTaxes = 'other-current-liability::duties-and-taxes', EquityFunds = 'equity::funds', OtherExpenseDeferredTaxExpense = 'other-expense::deferred-tax-expense', AssetIntangibleAssetsUnderDevelopment = 'asset::intangible-assets-under-development', ExpenseBankCharges = 'expense::bank-charges', OtherCurrentLiabilityCurrentLiabilities = 'other-current-liability::current-liabilities', ExpenseBadDebts = 'expense::bad-debts', OtherExpenseTaxRoundoffGainOrLoss = 'other-expense::tax-roundoff-gain-or-loss', LiabilityLongTermLiability = 'liability::long-term-liability', LiabilityNotesPayable = 'liability::notes-payable', ExpenseUnappliedCashBillPaymentExpense = 'expense::unapplied-cash-bill-payment-expense', EquityOwnersEquity = 'equity::owners-equity', EquityAccumulatedOtherComprehensiveIncome = 'equity::accumulated-other-comprehensive-income', ExpensePurchasesRebates = 'expense::purchases-rebates', OtherCurrentLiabilityGlobalTaxPayable = 'other-current-liability::global-tax-payable', OtherCurrentLiabilitySocialSecurityAgencies = 'other-current-liability::social-security-agencies', RevenueUnappliedCashPaymentIncome = 'revenue::unapplied-cash-payment-income', AssetInvestmentUsGovernmentObligations = 'asset::investment-us-government-obligations', AssetShortTermInvestmentsInRelatedParties = 'asset::short-term-investments-in-related-parties', EquityDividendDisbursed = 'equity::dividend-disbursed', OtherExpenseRentAndLease = 'other-expense::rent-and-lease', OtherIncomeTaxExemptInterest = 'other-income::tax-exempt-interest', EquityShareApplicationMoneyPendingAllotment = 'equity::share-application-money-pending-allotment', AccountsReceivable = 'accounts-receivable', AssetInventory = 'asset::inventory', AssetPrepaymentsAndAccruedIncome = 'asset::prepayments-and-accrued-income', AssetOtherConsumables = 'asset::other-consumables', CostOfGoodsSoldShippingFreightDeliveryCos = 'cost-of-goods-sold::shipping-freight-delivery-cos', EquityPreferredStock = 'equity::preferred-stock', LiabilityProvisionForLiabilities = 'liability::provision-for-liabilities', OtherCurrentLiabilityProvisionForWarrantyObligations = 'other-current-liability::provision-for-warranty-obligations', OtherExpenseWashAndRoadServices = 'other-expense::wash-and-road-services', OtherExpenseDepletion = 'other-expense::depletion', ExpenseDistributionCosts = 'expense::distribution-costs', LiabilityOutstandingDuesOtherThanMicroSmallEnterprise = 'liability::outstanding-dues-other-than-micro-small-enterprise', AssetNonCurrentAssets = 'asset::non-current-assets' }
export const enum AppliesTo { SpecificItems = 'specific-items', SpecificCategories = 'specific-categories', AllItems = 'all-items' }
export const enum Format { Xml = 'xml', Json = 'json' }
export const enum TargetSelection { All = 'all', Entitled = 'entitled' }
export const enum ChannelAvailability { InApp = 'in-app', InStore = 'in-store', AllChannels = 'all-channels', Online = 'online' }
export const enum TargetType { ShippingLine = 'shipping-line', LineItem = 'line-item' }
export const enum CustomerEligibility { All = 'all', SpecificCustomers = 'specific-customers', SpecificCustomerGroups = 'specific-customer-groups' }
export const enum TransactionMethod { Telephone = 'telephone', Atm = 'atm', BankBranch = 'bank-branch', Mobile = 'mobile', Online = 'online', Mail = 'mail' }
export const enum AllocationMethod { Across = 'across', Each = 'each' }
export const enum Country { Argentina = 'argentina', NewZealand = 'new-zealand', Tunisia = 'tunisia', Egypt = 'egypt', Cameroon = 'cameroon', Bulgaria = 'bulgaria', CzechRepublic = 'czech-republic', India = 'india', Armenia = 'armenia', Kyrgyzstan = 'kyrgyzstan', Malta = 'malta', Poland = 'poland', SriLanka = 'sri-lanka', Bolivia = 'bolivia', Madagascar = 'madagascar', Romania = 'romania', Sweden = 'sweden', SanMarino = 'san-marino', Namibia = 'namibia', Slovenia = 'slovenia', TimorLeste = 'timor-leste', Samoa = 'samoa', Libya = 'libya', Peru = 'peru', SaoTomeAndPrincipe = 'sao-tome-and-principe', Seychelles = 'seychelles', Vietnam = 'vietnam', ElSalvador = 'el-salvador', SaintKittsAndNevis = 'saint-kitts-and-nevis', Kenya = 'kenya', Moldova = 'moldova', Belize = 'belize', Rwanda = 'rwanda', Norway = 'norway', Panama = 'panama', NorthKorea = 'north-korea', CongoDemocraticRepublic = 'congo-democratic-republic', Sudan = 'sudan', Afghanistan = 'afghanistan', Mali = 'mali', Oman = 'oman', Turkey = 'turkey', Dominica = 'dominica', Austria = 'austria', China = 'china', France = 'france', SouthSudan = 'south-sudan', Tuvalu = 'tuvalu', UnitedKingdom = 'united-kingdom', CaboVerde = 'cabo-verde', CoteDIvoire = 'cote-d-ivoire', Croatia = 'croatia', Ethiopia = 'ethiopia', Djibouti = 'djibouti', Jordan = 'jordan', NorthMacedonia = 'north-macedonia', Palau = 'palau', Venezuela = 'venezuela', Bahrain = 'bahrain', Cambodia = 'cambodia', Senegal = 'senegal', BosniaAndHerzegovina = 'bosnia-and-herzegovina', Ghana = 'ghana', Indonesia = 'indonesia', Philippines = 'philippines', SaintLucia = 'saint-lucia', Laos = 'laos', MarshallIslands = 'marshall-islands', Iran = 'iran', Finland = 'finland', Paraguay = 'paraguay', Mexico = 'mexico', Suriname = 'suriname', Mongolia = 'mongolia', BurkinaFaso = 'burkina-faso', Mauritius = 'mauritius', Chile = 'chile', Bahamas = 'bahamas', Benin = 'benin', Australia = 'australia', Somalia = 'somalia', Micronesia = 'micronesia', PapuaNewGuinea = 'papua-new-guinea', Grenada = 'grenada', SierraLeone = 'sierra-leone', Latvia = 'latvia', Italy = 'italy', Botswana = 'botswana', Montenegro = 'montenegro', Switzerland = 'switzerland', SaintVincentAndTheGrenadines = 'saint-vincent-and-the-grenadines', Eswatini = 'eswatini', Malawi = 'malawi', Bangladesh = 'bangladesh', Fiji = 'fiji', Mozambique = 'mozambique', Germany = 'germany', Lebanon = 'lebanon', Mauritania = 'mauritania', Nepal = 'nepal', Nigeria = 'nigeria', Liechtenstein = 'liechtenstein', Georgia = 'georgia', Qatar = 'qatar', CostaRica = 'costa-rica', Ireland = 'ireland', Serbia = 'serbia', SolomonIslands = 'solomon-islands', Myanmar = 'myanmar', SouthKorea = 'south-korea', DominicanRepublic = 'dominican-republic', Colombia = 'colombia', Gabon = 'gabon', Burundi = 'burundi', Azerbaijan = 'azerbaijan', Guatemala = 'guatemala', Jamaica = 'jamaica', Andorra = 'andorra', Guyana = 'guyana', Lesotho = 'lesotho', CongoRepublic = 'congo-republic', AntiguaAndBarbuda = 'antigua-and-barbuda', Maldives = 'maldives', Ecuador = 'ecuador', Spain = 'spain', Uganda = 'uganda', Morocco = 'morocco', Tanzania = 'tanzania', Thailand = 'thailand', Liberia = 'liberia', Belarus = 'belarus', GuineaBissau = 'guinea-bissau', Haiti = 'haiti', Luxembourg = 'luxembourg', Brazil = 'brazil', Togo = 'togo', Chad = 'chad', Estonia = 'estonia', VaticanCity = 'vatican-city', Yemen = 'yemen', Belgium = 'belgium', Cuba = 'cuba', Algeria = 'algeria', Albania = 'albania', Cyprus = 'cyprus', Greece = 'greece', Uzbekistan = 'uzbekistan', Zimbabwe = 'zimbabwe', Gambia = 'gambia', Honduras = 'honduras', Kazakhstan = 'kazakhstan', Russia = 'russia', Taiwan = 'taiwan', Singapore = 'singapore', Netherlands = 'netherlands', Syria = 'syria', Kuwait = 'kuwait', Pakistan = 'pakistan', Kiribati = 'kiribati', Denmark = 'denmark', Zambia = 'zambia', Iraq = 'iraq', Malaysia = 'malaysia', SaudiArabia = 'saudi-arabia', UnitedArabEmirates = 'united-arab-emirates', CentralAfricanRepublic = 'central-african-republic', Japan = 'japan', UnitedStates = 'united-states', Guinea = 'guinea', Iceland = 'iceland', Tonga = 'tonga', Angola = 'angola', Israel = 'israel', Nicaragua = 'nicaragua', Portugal = 'portugal', Nauru = 'nauru', Canada = 'canada', Niger = 'niger', Turkmenistan = 'turkmenistan', Brunei = 'brunei', EquatorialGuinea = 'equatorial-guinea', Slovakia = 'slovakia', Ukraine = 'ukraine', Tajikistan = 'tajikistan', Bhutan = 'bhutan', Barbados = 'barbados', Hungary = 'hungary', Eritrea = 'eritrea', Lithuania = 'lithuania', Palestine = 'palestine', Monaco = 'monaco', SouthAfrica = 'south-africa', Vanuatu = 'vanuatu', TrinidadAndTobago = 'trinidad-and-tobago', Uruguay = 'uruguay', Comoros = 'comoros' }
export const enum GlobalTaxType { ExciseTax = 'excise-tax', CustomsDuty = 'customs-duty', SalesTax = 'sales-tax', PropertyTax = 'property-tax', Other = 'other', Vat = 'vat', Gst = 'gst' }
export const enum IdentityProvider { Microsoft = 'microsoft', Flickr = 'flickr', Slack = 'slack', Instagram = 'instagram', Github = 'github', Facebook = 'facebook', Discord = 'discord', Vimeo = 'vimeo', Twitter = 'twitter', Paypal = 'paypal', Wechat = 'wechat', Dribbble = 'dribbble', Other = 'other', Apple = 'apple', Whatsapp = 'whatsapp', Linkedin = 'linkedin', Tiktok = 'tiktok', Line = 'line', Telegram = 'telegram', Yahoo = 'yahoo', Foursquare = 'foursquare', Qq = 'qq', Snapchat = 'snapchat', Google = 'google', Reddit = 'reddit', Tumblr = 'tumblr', Behance = 'behance', Signal = 'signal', Pinterest = 'pinterest', Amazon = 'amazon' }
export const enum AccountEngagementLevel { Hot = 'hot', Cold = 'cold', Unknown = 'unknown', Warm = 'warm' }
export const enum ReviewApprovalStatus { Rejected = 'rejected', InReview = 'in-review', Revised = 'revised', Approved = 'approved', Pending = 'pending' }
export const enum StakeholderType { Customer = 'customer', Investor = 'investor', Vendor = 'vendor', Other = 'other', Competitor = 'competitor', Partner = 'partner' }
export const enum AccountStatus { Active = 'active', Pending = 'pending', Suspended = 'suspended', Inactive = 'inactive', Closed = 'closed' }
export const enum CampaignStatus { Completed = 'completed', Cancelled = 'cancelled', Scheduled = 'scheduled', Planned = 'planned', Archived = 'archived', Active = 'active', Paused = 'paused', Draft = 'draft' }
export const enum CustomerType { Wholesale = 'wholesale', B2b = 'b2b', Corporate = 'corporate', Retail = 'retail', Online = 'online', B2c = 'b2c' }
export const enum MessageContentType { Document = 'document', Voice = 'voice', Gif = 'gif', Html = 'html', Video = 'video', File = 'file', Contact = 'contact', Sticker = 'sticker', Image = 'image', Audio = 'audio', Text = 'text', Link = 'link', Location = 'location' }
export const enum ReactionType { Laugh = 'laugh', Sad = 'sad', Wow = 'wow', Interested = 'interested', Angry = 'angry', Like = 'like', Dislike = 'dislike', Love = 'love', Bookmark = 'bookmark' }
export const enum SupportTicketPriority { Medium = 'medium', Immediate = 'immediate', Urgent = 'urgent', Low = 'low', High = 'high' }
export const enum IssueLifecycleStatus { InProgress = 'in-progress', Open = 'open', Resolved = 'resolved', Cancelled = 'cancelled', OnHold = 'on-hold', Closed = 'closed', Pending = 'pending' }
export const enum OrderStatus { AwaitingPayment = 'awaiting-payment', Pending = 'pending', Shipped = 'shipped', Cancelled = 'cancelled', Refunded = 'refunded', Processing = 'processing', Abandoned = 'abandoned', AwaitingPickup = 'awaiting-pickup', AwaitingShipment = 'awaiting-shipment', PartiallyFulfilled = 'partially-fulfilled', Delivered = 'delivered', Failed = 'failed', Confirmed = 'confirmed', OnHold = 'on-hold', Returned = 'returned', Disputed = 'disputed', Draft = 'draft', Completed = 'completed' }
export const enum DiscountType { FixedAmount = 'fixed-amount', Percentage = 'percentage', BuyOneGetOne = 'buy-one-get-one', VariableAmount = 'variable-amount', UnknownDiscount = 'unknown-discount', TieredDiscount = 'tiered-discount', ConditionalDiscount = 'conditional-discount', VariablePercentage = 'variable-percentage' }
export const enum FulfillmentStatus { Cancelled = 'cancelled', Delivered = 'delivered', Returned = 'returned', InTransit = 'in-transit', Failure = 'failure', Pending = 'pending' }
export const enum ProductAvailabilityStatus { Discontinued = 'discontinued', OutOfStock = 'out-of-stock', PreOrder = 'pre-order', InStock = 'in-stock', BackOrder = 'back-order' }
export const enum ExpenseApprovalStatus { Denied = 'denied', Reimbursed = 'reimbursed', Approved = 'approved', Pending = 'pending', Reviewing = 'reviewing', Cancelled = 'cancelled', New = 'new', Processed = 'processed' }
export const enum FinancialChargeType { ProcessingFee = 'processing-fee', Commission = 'commission', LateFee = 'late-fee', InterestCharge = 'interest-charge', Other = 'other', TransactionFee = 'transaction-fee', ServiceCharge = 'service-charge' }
export const enum BillingStatus { PartiallyPaid = 'partially-paid', Paid = 'paid', Voided = 'voided', Deleted = 'deleted', Draft = 'draft', Unpaid = 'unpaid', Submitted = 'submitted', Pending = 'pending', Overdue = 'overdue', Authorised = 'authorised' }
export const enum InvoiceAdjustmentType { Tax = 'tax', Tip = 'tip', Shipping = 'shipping', Other = 'other', Discount = 'discount' }
export const enum DataType { Undefined = 'undefined', Timestamp = 'timestamp', Custom = 'custom', Boolean = 'boolean', Binary = 'binary', Date = 'date', String = 'string', Array = 'array', Number = 'number', Object = 'object', Json = 'json', Null = 'null' }
export const enum EmploymentType { Contract = 'contract', Volunteer = 'volunteer', Internship = 'internship', FullTime = 'full-time', Seasonal = 'seasonal', Temporary = 'temporary', Freelance = 'freelance', Permanent = 'permanent', PartTime = 'part-time' }
export const enum TimeCycle { Daily = 'daily', SemiMonthly = 'semi-monthly', Quarterly = 'quarterly', Annually = 'annually', Triennially = 'triennially', Biennially = 'biennially', Custom = 'custom', Hourly = 'hourly', Weekly = 'weekly', AdHoc = 'ad-hoc', Biweekly = 'biweekly', Monthly = 'monthly', SemiAnnually = 'semi-annually', Secondly = 'secondly', Minutely = 'minutely' }
export const enum FinancialTrackingCategories { Customer = 'customer', Division = 'division', Employee = 'employee', Other = 'other', Location = 'location', Product = 'product', Service = 'service', CostCenter = 'cost-center', None = 'none', Class = 'class', Project = 'project', Department = 'department', Vendor = 'vendor' }
export const enum CampaignType { Display = 'display', SocialMedia = 'social-media', Other = 'other', Email = 'email', SearchEngine = 'search-engine' }
export const enum ContactAddressType { Temporary = 'temporary', Home = 'home', Other = 'other', Business = 'business', Work = 'work', Billing = 'billing', Personal = 'personal', Shipping = 'shipping' }
export const enum LeadLifecycleStatus { Open = 'open', AttemptedToContact = 'attempted-to-contact', InProcess = 'in-process', BadTiming = 'bad-timing', Revisited = 'revisited', Converted = 'converted', Connected = 'connected', Unqualified = 'unqualified', Lost = 'lost', New = 'new' }
export const enum ParticipantEngagementStatus { Left = 'left', Active = 'active', Admin = 'admin', Guest = 'guest', Inactive = 'inactive', Banned = 'banned', Moderator = 'moderator' }
export const enum ItemEntityStatus { Active = 'active', Suspended = 'suspended', Deleted = 'deleted', Pending = 'pending', Inactive = 'inactive', Completed = 'completed', Archived = 'archived' }
export const enum Currency { AUD = 'aud', BAM = 'bam', TJS = 'tjs', BIF = 'bif', SLL = 'sll', SDG = 'sdg', SSP = 'ssp', TMT = 'tmt', LBP = 'lbp', AED = 'aed', ERN = 'ern', TND = 'tnd', USD = 'usd', QAR = 'qar', ETB = 'etb', RWF = 'rwf', XPF = 'xpf', JEP = 'jep', XOF = 'xof', BOB = 'bob', ALL = 'all', SOS = 'sos', MXN = 'mxn', SBD = 'sbd', ANG = 'ang', BDT = 'bdt', PHP = 'php', GGP = 'ggp', OMR = 'omr', RUB = 'rub', TRY = 'try', ILS = 'ils', AFN = 'afn', BTN = 'btn', MOP = 'mop', GTQ = 'gtq', LAK = 'lak', BYN = 'byn', UYU = 'uyu', TVD = 'tvd', ZMW = 'zmw', DZD = 'dzd', EGP = 'egp', JPY = 'jpy', CRC = 'crc', MRU = 'mru', AZN = 'azn', MDL = 'mdl', IDR = 'idr', MNT = 'mnt', AMD = 'amd', NZD = 'nzd', PKR = 'pkr', PYG = 'pyg', RSD = 'rsd', SCR = 'scr', IRR = 'irr', CAD = 'cad', TTD = 'ttd', TZS = 'tzs', UGX = 'ugx', UZS = 'uzs', VUV = 'vuv', LKR = 'lkr', CDF = 'cdf', BRL = 'brl', IMP = 'imp', DJF = 'djf', MAD = 'mad', STN = 'stn', KMF = 'kmf', KHR = 'khr', NPR = 'npr', KGS = 'kgs', FOK = 'fok', CZK = 'czk', HNL = 'hnl', JOD = 'jod', NOK = 'nok', MMK = 'mmk', DKK = 'dkk', INR = 'inr', ZAR = 'zar', EUR = 'eur', BMD = 'bmd', BHD = 'bhd', SGD = 'sgd', MYR = 'myr', GHS = 'ghs', XCD = 'xcd', JMD = 'jmd', ISK = 'isk', WST = 'wst', KPW = 'kpw', THB = 'thb', GBP = 'gbp', GIP = 'gip', UAH = 'uah', CVE = 'cve', CNY = 'cny', GMD = 'gmd', KWD = 'kwd', FJD = 'fjd', HTG = 'htg', GYD = 'gyd', TWD = 'twd', SZL = 'szl', LRD = 'lrd', TOP = 'top', SAR = 'sar', MWK = 'mwk', YER = 'yer', CUP = 'cup', HUF = 'huf', CHF = 'chf', GEL = 'gel', BBD = 'bbd', CUC = 'cuc', VES = 'ves', NGN = 'ngn', NIO = 'nio', KRW = 'krw', BSD = 'bsd', KZT = 'kzt', COP = 'cop', KYD = 'kyd', LYD = 'lyd', MVR = 'mvr', PLN = 'pln', NAD = 'nad', MGA = 'mga', FKP = 'fkp', HKD = 'hkd', LSL = 'lsl', MUR = 'mur', BZD = 'bzd', GNF = 'gnf', CLP = 'clp', ZWL = 'zwl', SEK = 'sek', AOA = 'aoa', ARS = 'ars', DOP = 'dop', RON = 'ron', SRD = 'srd', VND = 'vnd', IQD = 'iqd', XDR = 'xdr', BGN = 'bgn', BWP = 'bwp', BND = 'bnd', KES = 'kes', PEN = 'pen', SYP = 'syp', MKD = 'mkd', SHP = 'shp', KID = 'kid', HRK = 'hrk', PGK = 'pgk', MZN = 'mzn', PAB = 'pab', AWG = 'awg', XAF = 'xaf' }
export const enum CustomerEligibilityStatus { SpecificConditions = 'specific-conditions', AllCustomers = 'all-customers', Other = 'other', NewCustomers = 'new-customers', ReturningCustomers = 'returning-customers', VipCustomers = 'vip-customers' }
export const enum ItemCondition { Used = 'used', Damaged = 'damaged', New = 'new', Refurbished = 'refurbished', LikeNew = 'like-new', OpenBox = 'open-box' }
export const enum TransactionType { Deposit = 'deposit', Fee = 'fee', Charge = 'charge', Withdrawal = 'withdrawal', Adjustment = 'adjustment', Refund = 'refund', Payment = 'payment', Transfer = 'transfer' }
export const enum EntityLifecycleStatus { Preorder = 'preorder', Deleted = 'deleted', Inactive = 'inactive', Draft = 'draft', Active = 'active', Scheduled = 'scheduled', Archived = 'archived' }
export const enum JournalEntryStatus { Voided = 'voided', Pending = 'pending', Posted = 'posted', Corrected = 'corrected', Draft = 'draft', Error = 'error' }
export const enum DayOfWeek { Sunday = 'sunday', Friday = 'friday', Thursday = 'thursday', Tuesday = 'tuesday', Monday = 'monday', Wednesday = 'wednesday', Saturday = 'saturday' }
export const enum AccountingAccountType { OtherCurrentLiabilityDividendsPayable = 'other-current-liability::dividends-payable', OtherExpenseIncomeTaxOtherExpense = 'other-expense::income-tax-other-expense', OtherCurrentLiabilityLoanPayable = 'other-current-liability::loan-payable', RevenueSalesOfProductIncome = 'revenue::sales-of-product-income', EquityEstimatedTaxes = 'equity::estimated-taxes', AssetVehicles = 'asset::vehicles', EquityShareCapital = 'equity::share-capital', AssetChecking = 'asset::checking', ExpenseBorrowingCost = 'expense::borrowing-cost', AssetInternalTransfers = 'asset::internal-transfers', OtherCurrentLiabilityDirectDepositPayable = 'other-current-liability::direct-deposit-payable', AccountsReceivable = 'accounts-receivable', CostOfGoodsSoldCostOfLaborCos = 'cost-of-goods-sold::cost-of-labor-cos', AssetCumulativeDepreciationOnIntangibleAssets = 'asset::cumulative-depreciation-on-intangible-assets', AssetProvisionsNonCurrentAssets = 'asset::provisions-non-current-assets', OtherExpenseVehicleLoanInterest = 'other-expense::vehicle-loan-interest', AssetFixedAssetPhotoVideo = 'asset::fixed-asset-photo-video', OtherCurrentLiabilityPayrollClearing = 'other-current-liability::payroll-clearing', AssetBank = 'asset::bank', ExpenseCharitableContributions = 'expense::charitable-contributions', OtherIncomeGainLossOnSaleOfInvestments = 'other-income::gain-loss-on-sale-of-investments', ExpenseRepairMaintenance = 'expense::repair-maintenance', Expense = 'expense', AssetMoneyMarket = 'asset::money-market', ExpenseInterestPaid = 'expense::interest-paid', OtherCurrentLiabilityTradeAndOtherPayables = 'other-current-liability::trade-and-other-payables', ExpenseTravelMeals = 'expense::travel-meals', AssetSecurityDeposits = 'asset::security-deposits', AssetLandAsset = 'asset::land-asset', RevenueCashReceiptIncome = 'revenue::cash-receipt-income', LiabilityLongTermEmployeeBenefitObligations = 'liability::long-term-employee-benefit-obligations', OtherIncomeUnrealisedLossOnSecuritiesNetOfTax = 'other-income::unrealised-loss-on-securities-net-of-tax', ExpenseTravel = 'expense::travel', OtherCurrentLiabilityOtherCurrentLiabilities = 'other-current-liability::other-current-liabilities', EquityHealthcare = 'equity::healthcare', OtherCurrentLiabilityTrustAccountsLiabilities = 'other-current-liability::trust-accounts-liabilities', ExpenseGlobalTaxExpense = 'expense::global-tax-expense', CostOfGoodsSoldFreightAndDeliveryCost = 'cost-of-goods-sold::freight-and-delivery-cost', LiabilityShareholderNotesPayable = 'liability::shareholder-notes-payable', LiabilityGroupAndAssociates = 'liability::group-and-associates', OtherExpenseExceptionalItems = 'other-expense::exceptional-items', EquityAccumulatedAdjustment = 'equity::accumulated-adjustment', ExpenseManagementCompensation = 'expense::management-compensation', AssetOtherLongTermAssets = 'asset::other-long-term-assets', RevenueNonProfitIncome = 'revenue::non-profit-income', OtherIncome = 'other-income', OtherExpenseVehicleRegistration = 'other-expense::vehicle-registration', AssetLoansToStockholders = 'asset::loans-to-stockholders', OtherCurrentLiabilityStaffAndRelatedLiabilityAccounts = 'other-current-liability::staff-and-related-liability-accounts', ExpenseDuesSubscriptions = 'expense::dues-subscriptions', OtherIncomeOtherMiscellaneousIncome = 'other-income::other-miscellaneous-income', EquityTreasuryStock = 'equity::treasury-stock', OtherCurrentLiabilityGlobalTaxPayable = 'other-current-liability::global-tax-payable', OtherCurrentLiabilityStateLocalIncomeTaxPayable = 'other-current-liability::state-local-income-tax-payable', OtherExpenseHomeOwnerRentalInsurance = 'other-expense::home-owner-rental-insurance', OtherExpenseWashAndRoadServices = 'other-expense::wash-and-road-services', AssetOtherAsset = 'asset::other-asset', AssetShortTermLoansAndAdvancesToRelatedParties = 'asset::short-term-loans-and-advances-to-related-parties', AssetDepletableAssets = 'asset::depletable-assets', EquityDividendDisbursed = 'equity::dividend-disbursed', AssetFixedAssetFurniture = 'asset::fixed-asset-furniture', AssetExpenditureAuthorisationsAndLettersOfCredit = 'asset::expenditure-authorisations-and-letters-of-credit', AssetProvisionsFixedAssets = 'asset::provisions-fixed-assets', OtherExpenseExtraordinaryItems = 'other-expense::extraordinary-items', EquityPartnerDistributions = 'equity::partner-distributions', RevenueSalesWholesale = 'revenue::sales-wholesale', AssetOtherLongTermInvestments = 'asset::other-long-term-investments', AssetGlobalTaxDeferred = 'asset::global-tax-deferred', ExpenseUtilities = 'expense::utilities', ExpenseDistributionCosts = 'expense::distribution-costs', OtherExpenseGasAndFuel = 'other-expense::gas-and-fuel', LiabilityGovernmentAndOtherPublicAuthorities = 'liability::government-and-other-public-authorities', EquityPersonalIncome = 'equity::personal-income', LiabilityAccruedVacationPayable = 'liability::accrued-vacation-payable', OtherCurrentLiabilityRentsInTrustLiability = 'other-current-liability::rents-in-trust-liability', AssetOtherCurrentAsset = 'asset::other-current-asset', OtherExpenseAmortization = 'other-expense::amortization', AssetShortTermInvestmentsInRelatedParties = 'asset::short-term-investments-in-related-parties', OtherExpenseDepreciation = 'other-expense::depreciation', OtherExpenseMortgageInterest = 'other-expense::mortgage-interest', AssetAccumulatedAmortizationOfOtherAssets = 'asset::accumulated-amortization-of-other-assets', OtherCurrentLiabilityInsurancePayable = 'other-current-liability::insurance-payable', OtherExpenseUtilities = 'other-expense::utilities', AssetNonCurrentAssets = 'asset::non-current-assets', EquityPartnersEquity = 'equity::partners-equity', AssetDeferredTax = 'asset::deferred-tax', CostOfGoodsSoldShippingFreightDeliveryCos = 'cost-of-goods-sold::shipping-freight-delivery-cos', AssetInvestmentTaxExemptSecurities = 'asset::investment-tax-exempt-securities', LiabilityLiabilitiesRelatedToAssetsHeldForSale = 'liability::liabilities-related-to-assets-held-for-sale', AssetProvisionsCurrentAssets = 'asset::provisions-current-assets', RevenueOperatingGrants = 'revenue::operating-grants', ExpenseTravelExpensesSellingExpense = 'expense::travel-expenses-selling-expense', LiabilityCreditCard = 'liability::credit-card', OtherExpenseOtherMiscellaneousExpense = 'other-expense::other-miscellaneous-expense', OtherExpensePenaltiesSettlements = 'other-expense::penalties-settlements', OtherExpenseVehicleInsurance = 'other-expense::vehicle-insurance', LiabilityAccountsPayable = 'liability::accounts-payable', AssetIntangibleAssetsUnderDevelopment = 'asset::intangible-assets-under-development', OtherIncomeGainLossOnSaleOfFixedAssets = 'other-income::gain-loss-on-sale-of-fixed-assets', AssetParticipatingInterests = 'asset::participating-interests', AssetFixedAssetComputers = 'asset::fixed-asset-computers', EquityRetainedEarnings = 'equity::retained-earnings', RevenueUnappliedCashPaymentIncome = 'revenue::unapplied-cash-payment-income', AssetFixedAsset = 'asset::fixed-asset', LiabilityAccruedLongTermLiabilities = 'liability::accrued-long-term-liabilities', OtherCurrentLiability = 'other-current-liability', ExpenseSundry = 'expense::sundry', AssetPrepaidExpenses = 'asset::prepaid-expenses', AssetLicenses = 'asset::licenses', AssetCalledUpShareCapitalNotPaid = 'asset::called-up-share-capital-not-paid', OtherCurrentLiabilityCurrentTaxLiability = 'other-current-liability::current-tax-liability', AssetFurnitureAndFixtures = 'asset::furniture-and-fixtures', OtherExpenseVehicleRepairs = 'other-expense::vehicle-repairs', ExpensePromotionalMeals = 'expense::promotional-meals', OtherCurrentLiabilityProvisionsCurrentLiabilities = 'other-current-liability::provisions-current-liabilities', LiabilityProvisionForLiabilities = 'liability::provision-for-liabilities', AssetFixedAssetSoftware = 'asset::fixed-asset-software', AssetFixedAssetPhone = 'asset::fixed-asset-phone', AssetInventory = 'asset::inventory', AssetInvestments = 'asset::investments', OtherExpenseDeferredTaxExpense = 'other-expense::deferred-tax-expense', AssetAvailableForSaleFinancialAssets = 'asset::available-for-sale-financial-assets', OtherExpenseRentAndLease = 'other-expense::rent-and-lease', ExpenseUnappliedCashBillPaymentExpense = 'expense::unapplied-cash-bill-payment-expense', AssetRentsHeldInTrust = 'asset::rents-held-in-trust', ExpenseInsurance = 'expense::insurance', AssetAccumulatedDepreciation = 'asset::accumulated-depreciation', Asset = 'asset', EquityCommonStock = 'equity::common-stock', OtherIncomeInterestEarned = 'other-income::interest-earned', LiabilityDeferredTaxLiabilities = 'liability::deferred-tax-liabilities', ExpenseTravelExpensesGeneralAndAdminExpenses = 'expense::travel-expenses-general-and-admin-expenses', OtherCurrentLiabilitySalesTaxPayable = 'other-current-liability::sales-tax-payable', OtherCurrentLiabilityInterestPayables = 'other-current-liability::interest-payables', AssetIntangibleAssets = 'asset::intangible-assets', ExpenseFinanceCosts = 'expense::finance-costs', CostOfGoodsSoldEquipmentRentalCos = 'cost-of-goods-sold::equipment-rental-cos', AssetLeaseBuyout = 'asset::lease-buyout', ExpenseSuppliesMaterials = 'expense::supplies-materials', AssetLongTermLoansAndAdvancesToRelatedParties = 'asset::long-term-loans-and-advances-to-related-parties', ExpenseShippingFreightDelivery = 'expense::shipping-freight-delivery', ExpensePayrollExpenses = 'expense::payroll-expenses', ExpenseBadDebts = 'expense::bad-debts', ExpenseLegalProfessionalFees = 'expense::legal-professional-fees', ExpenseOtherMiscellaneousServiceCost = 'expense::other-miscellaneous-service-cost', OtherExpenseVehicle = 'other-expense::vehicle', LiabilityBankLoans = 'liability::bank-loans', ExpenseAuto = 'expense::auto', AssetInvestmentUsGovernmentObligations = 'asset::investment-us-government-obligations', ExpenseBankCharges = 'expense::bank-charges', AssetMachineryAndEquipment = 'asset::machinery-and-equipment', ExpenseCostOfLabor = 'expense::cost-of-labor', AssetBalWithGovtAuthorities = 'asset::bal-with-govt-authorities', ExpenseAmortizationExpense = 'expense::amortization-expense', RevenueSalesRetail = 'revenue::sales-retail', ExpenseAppropriationsToDepreciation = 'expense::appropriations-to-depreciation', EquityOpeningBalanceEquity = 'equity::opening-balance-equity', Equity = 'equity', OtherExpenseRepairsAndMaintenance = 'other-expense::repairs-and-maintenance', OtherCurrentLiabilityDutiesAndTaxes = 'other-current-liability::duties-and-taxes', OtherCurrentLiabilityShortTermBorrowings = 'other-current-liability::short-term-borrowings', AssetBuildings = 'asset::buildings', ExpenseOtherCurrentOperatingCharges = 'expense::other-current-operating-charges', EquityFunds = 'equity::funds', AssetTrustAccounts = 'asset::trust-accounts', AssetCashAndCashEquivalents = 'asset::cash-and-cash-equivalents', OtherExpenseOtherVehicleExpenses = 'other-expense::other-vehicle-expenses', AssetAccumulatedDepletion = 'asset::accumulated-depletion', OtherIncomeTaxExemptInterest = 'other-income::tax-exempt-interest', LiabilityAccrualsAndDeferredIncome = 'liability::accruals-and-deferred-income', AssetOtherIntangibleAssets = 'asset::other-intangible-assets', AssetGlobalTaxRefund = 'asset::global-tax-refund', AssetOrganizationalCosts = 'asset::organizational-costs', LiabilityOtherLongTermLiabilities = 'liability::other-long-term-liabilities', LiabilityDebtsRelatedToParticipatingInterests = 'liability::debts-related-to-participating-interests', OtherCurrentLiabilityGlobalTaxSuspense = 'other-current-liability::global-tax-suspense', OtherIncomeOtherInvestmentIncome = 'other-income::other-investment-income', AssetAssetsHeldForSale = 'asset::assets-held-for-sale', RevenueSavingsByTaxScheme = 'revenue::savings-by-tax-scheme', AssetTradeAndOtherReceivables = 'asset::trade-and-other-receivables', ExpenseTaxesPaid = 'expense::taxes-paid', AssetGoodwill = 'asset::goodwill', ExpenseShippingAndDeliveryExpense = 'expense::shipping-and-delivery-expense', OtherIncomeDividendIncome = 'other-income::dividend-income', AssetOtherConsumables = 'asset::other-consumables', ExpenseStaffCosts = 'expense::staff-costs', ExpenseIncomeTaxExpense = 'expense::income-tax-expense', ExpensePurchasesRebates = 'expense::purchases-rebates', AssetUndepositedFunds = 'asset::undeposited-funds', AssetOtherFixedAssets = 'asset::other-fixed-assets', CostOfGoodsSoldOtherCostsOfServiceCos = 'cost-of-goods-sold::other-costs-of-service-cos', CostOfGoodsSoldSuppliesMaterialsCogs = 'cost-of-goods-sold::supplies-materials-cogs', AssetLoansToOthers = 'asset::loans-to-others', AssetAssetsInCourseOfConstruction = 'asset::assets-in-course-of-construction', ExpenseEntertainmentMeals = 'expense::entertainment-meals', OtherCurrentLiabilityCurrentPortionOfObligationsUnderFinanceLeases = 'other-current-liability::current-portion-of-obligations-under-finance-leases', RevenueOtherPrimaryIncome = 'revenue::other-primary-income', ExpenseOtherBusinessExpenses = 'expense::other-business-expenses', AssetAccumulatedAmortization = 'asset::accumulated-amortization', RevenueServiceFeeIncome = 'revenue::service-fee-income', ExpenseLossOnDiscontinuedOperationsNetOfTax = 'expense::loss-on-discontinued-operations-net-of-tax', AssetLoansToOfficers = 'asset::loans-to-officers', EquityEquityInEarningsOfSubsidiuaries = 'equity::equity-in-earnings-of-subsidiuaries', ExpenseAdvertisingPromotional = 'expense::advertising-promotional', OtherExpenseHomeOffice = 'other-expense::home-office', AssetOtherLongTermLoansAndAdvances = 'asset::other-long-term-loans-and-advances', LiabilityOutstandingDuesOtherThanMicroSmallEnterprise = 'liability::outstanding-dues-other-than-micro-small-enterprise', OtherExpenseDepletion = 'other-expense::depletion', EquityPersonalExpense = 'equity::personal-expense', ExpenseEntertainment = 'expense::entertainment', AssetSavings = 'asset::savings', AssetCapitalWip = 'asset::capital-wip', OtherCurrentLiabilitySundryDebtorsAndCreditors = 'other-current-liability::sundry-debtors-and-creditors', ExpenseOfficeExpenses = 'expense::office-expenses', OtherExpenseMatCredit = 'other-expense::mat-credit', ExpenseEquipmentRental = 'expense::equipment-rental', LiabilityStaffAndRelatedLongTermLiabilityAccounts = 'liability::staff-and-related-long-term-liability-accounts', LiabilityLongTermDebit = 'liability::long-term-debit', EquityPreferredStock = 'equity::preferred-stock', LiabilityObligationsUnderFinanceLeases = 'liability::obligations-under-finance-leases', ExpenseOtherSellingExpenses = 'expense::other-selling-expenses', EquityShareApplicationMoneyPendingAllotment = 'equity::share-application-money-pending-allotment', OtherExpenseVehicleLoan = 'other-expense::vehicle-loan', OtherExpenseVehicleLease = 'other-expense::vehicle-lease', OtherIncomeLossOnDisposalOfAssets = 'other-income::loss-on-disposal-of-assets', OtherIncomeOtherOperatingIncome = 'other-income::other-operating-income', ExpenseExtraordinaryCharges = 'expense::extraordinary-charges', ExpenseOfficeGeneralAdministrativeExpenses = 'expense::office-general-administrative-expenses', AssetOtherEarMarkedBankAccounts = 'asset::other-ear-marked-bank-accounts', OtherExpenseOtherHomeOfficeExpenses = 'other-expense::other-home-office-expenses', AssetFixedAssetOtherToolsEquipment = 'asset::fixed-asset-other-tools-equipment', LiabilityLongTermBorrowings = 'liability::long-term-borrowings', AssetRetainage = 'asset::retainage', OtherCurrentLiabilityPrepaidExpensesPayable = 'other-current-liability::prepaid-expenses-payable', EquityOtherFreeReserves = 'equity::other-free-reserves', EquityInvestmentGrants = 'equity::investment-grants', AssetInvestmentOther = 'asset::investment-other', EquityPartnerContributions = 'equity::partner-contributions', RevenueOtherCurrentOperatingIncome = 'revenue::other-current-operating-income', AssetAllowanceForBadDebts = 'asset::allowance-for-bad-debts', OtherExpense = 'other-expense', EquityOwnersEquity = 'equity::owners-equity', RevenueOwnWorkCapitalized = 'revenue::own-work-capitalized', AssetCashOnHand = 'asset::cash-on-hand', AssetOtherCurrentAssets = 'asset::other-current-assets', ExpenseExternalServices = 'expense::external-services', OtherExpenseParkingAndTolls = 'other-expense::parking-and-tolls', RevenueDiscountsRefundsGiven = 'revenue::discounts-refunds-given', LiabilityProvisionsNonCurrentLiabilities = 'liability::provisions-non-current-liabilities', AssetDevelopmentCosts = 'asset::development-costs', OtherCurrentLiabilityCurrentLiabilities = 'other-current-liability::current-liabilities', RevenueRevenueGeneral = 'revenue::revenue-general', OtherExpensePriorPeriodItems = 'other-expense::prior-period-items', OtherCurrentLiabilityLineOfCredit = 'other-current-liability::line-of-credit', AssetLeaseholdImprovements = 'asset::leasehold-improvements', OtherCurrentLiabilityCurrentPortionEmployeeBenefitsObligations = 'other-current-liability::current-portion-employee-benefits-obligations', EquityPaidInCapitalOrSurplus = 'equity::paid-in-capital-or-surplus', LiabilityLongTermLiability = 'liability::long-term-liability', AssetEmployeeCashAdvances = 'asset::employee-cash-advances', CostOfGoodsSoldCostOfSales = 'cost-of-goods-sold::cost-of-sales', EquityCalledUpShareCapital = 'equity::called-up-share-capital', EquityAccumulatedOtherComprehensiveIncome = 'equity::accumulated-other-comprehensive-income', OtherCurrentLiabilitySocialSecurityAgencies = 'other-current-liability::social-security-agencies', AssetLand = 'asset::land', AssetFixedAssetCopiers = 'asset::fixed-asset-copiers', ExpenseProjectStudiesSurveysAssessments = 'expense::project-studies-surveys-assessments', OtherCurrentLiabilityFederalIncomeTaxPayable = 'other-current-liability::federal-income-tax-payable', AssetLongTermInvestments = 'asset::long-term-investments', ExpenseCommissionsAndFees = 'expense::commissions-and-fees', OtherExpenseExchangeGainOrLoss = 'other-expense::exchange-gain-or-loss', OtherExpenseTaxRoundoffGainOrLoss = 'other-expense::tax-roundoff-gain-or-loss', AssetAssetsAvailableForSale = 'asset::assets-available-for-sale', ExpenseOtherExternalServices = 'expense::other-external-services', LiabilityOutstandingDuesMicroSmallEnterprise = 'liability::outstanding-dues-micro-small-enterprise', LiabilityNotesPayable = 'liability::notes-payable', OtherCurrentLiabilityPayrollTaxPayable = 'other-current-liability::payroll-tax-payable', ExpenseRentOrLeaseOfBuildings = 'expense::rent-or-lease-of-buildings', OtherCurrentLiabilityAccruedLiabilities = 'other-current-liability::accrued-liabilities', AssetInvestmentMortgageRealEstateLoans = 'asset::investment-mortgage-real-estate-loans', OtherCurrentLiabilityProvisionForWarrantyObligations = 'other-current-liability::provision-for-warranty-obligations', CostOfGoodsSold = 'cost-of-goods-sold', EquityCapitalReserves = 'equity::capital-reserves', AssetPrepaymentsAndAccruedIncome = 'asset::prepayments-and-accrued-income', EquityMoneyReceivedAgainstShareWarrants = 'equity::money-received-against-share-warrants', ExpenseOtherRentalCosts = 'expense::other-rental-costs', LiabilityOtherLongTermProvisions = 'liability::other-long-term-provisions', RevenueIncome = 'revenue::income' }
export const enum MessageReadStatus { Read = 'read', Unsent = 'unsent', Failed = 'failed', Sent = 'sent', Delivered = 'delivered' }
export const enum MessageDeliveryStatus { Error = 'error', Pending = 'pending', Sent = 'sent', Failed = 'failed', Undeliverable = 'undeliverable', Delivered = 'delivered', Read = 'read' }
export const enum SupportQueryType { Problem = 'problem', Task = 'task', Bug = 'bug', FeatureRequest = 'feature-request', Feedback = 'feedback', Question = 'question', Incident = 'incident' }
export const enum ImageMimeType { ImageHeic = 'image/heic', ImageBmp = 'image/bmp', ImageGif = 'image/gif', ImageJpeg = 'image/jpeg', ImageSvgXml = 'image/svg+xml', ImageWebp = 'image/webp', ImageTiff = 'image/tiff', ImagePng = 'image/png' }
export const enum OrderingCriteria { Alphabetical = 'alphabetical', Relevance = 'relevance', PriceDescending = 'price-descending', Manual = 'manual', Rating = 'rating', PriceAscending = 'price-ascending', Popularity = 'popularity', CreationDate = 'creation-date' }
export const enum ChatType { Private = 'private', Group = 'group', Public = 'public' }
export const enum ItemAvailabilityStatus { OutOfStock = 'out-of-stock', Inactive = 'inactive', Discontinued = 'discontinued', Active = 'active' }
export const enum FinancialAccountStatus { Closed = 'closed', Active = 'active', Frozen = 'frozen', Suspended = 'suspended', Inactive = 'inactive', UnderReview = 'under-review', Delinquent = 'delinquent' }
export const enum TransactionStatus { Initiated = 'initiated', Cancelled = 'cancelled', Pending = 'pending', Failed = 'failed', Succeeded = 'succeeded', Error = 'error', InProgress = 'in-progress' }
export const enum CreditNoteStatus { Draft = 'draft', Completed = 'completed', Void = 'void', Disputed = 'disputed', Cancelled = 'cancelled', Applied = 'applied', Pending = 'pending', Revised = 'revised', Issued = 'issued' }
export const enum PaymentTerm { Net60 = 'net-60', Prepayment = 'prepayment', DueOnReceipt = 'due-on-receipt', Net = 'net', Custom = 'custom', CashWithOrder = 'cash-with-order', Installment = 'installment', Net30 = 'net-30', CashBeforeShipment = 'cash-before-shipment', Prepaid = 'prepaid', CashInAdvance = 'cash-in-advance', UponCompletion = 'upon-completion', Net90 = 'net-90', CashOnDelivery = 'cash-on-delivery', DeferredPayment = 'deferred-payment', DueEndOfMonth = 'due-end-of-month' }
export const enum EmploymentAndCandidateStatus { Interviewing = 'interviewing', OnLeave = 'on-leave', Other = 'other', NotSelected = 'not-selected', Terminated = 'terminated', New = 'new', Hired = 'hired', InReview = 'in-review', Inactive = 'inactive', Active = 'active', OfferExtended = 'offer-extended' }
export const enum OrganizationalRole { Employee = 'employee', Other = 'other', Admin = 'admin', Manager = 'manager', Director = 'director', Supervisor = 'supervisor', Contractor = 'contractor' }
export const enum CustomerStatus { Pending = 'pending', Inactive = 'inactive', Archived = 'archived', Active = 'active', Suspended = 'suspended' }
export const enum SocialPlatform { Tiktok = 'tiktok', Twitter = 'twitter', Pinterest = 'pinterest', Tumblr = 'tumblr', Instagram = 'instagram', Linkedin = 'linkedin', Reddit = 'reddit', Snapchat = 'snapchat', Skype = 'skype', Youtube = 'youtube', X = 'x', OtherSocialPlatform = 'other-social-platform', Facebook = 'facebook' }
export const enum ConversationStatus { Active = 'active', Deleted = 'deleted', Archived = 'archived' }
export const enum CommunicationRole { Assistant = 'assistant', Channel = 'channel', Admin = 'admin', Member = 'member', Guest = 'guest', Owner = 'owner', Bot = 'bot', Moderator = 'moderator', System = 'system', Service = 'service', User = 'user', Group = 'group' }
export const enum LifecycleStatus { Suspended = 'suspended', Redeemed = 'redeemed', Expired = 'expired', Cancelled = 'cancelled', Active = 'active', Issued = 'issued' }
export const enum PaymentMethod { MobileWallet = 'mobile-wallet', Paypal = 'paypal', BankTransfer = 'bank-transfer', MobilePayment = 'mobile-payment', CashOnDelivery = 'cash-on-delivery', Other = 'other', Cash = 'cash', Cryptocurrency = 'cryptocurrency', DebitCard = 'debit-card', Check = 'check', CreditCard = 'credit-card' }
export const enum FinancialTransactionStatus { Authorized = 'authorized', Pending = 'pending', Cleared = 'cleared', Cancelled = 'cancelled', Refunded = 'refunded', Failed = 'failed', SettlementInProgress = 'settlement-in-progress', Disputed = 'disputed' }
export const enum AuditOpinionType { Adverse = 'adverse', Qualified = 'qualified', Disclaimer = 'disclaimer', Unqualified = 'unqualified' }
export const enum InventoryStorageType { DistributionCenter = 'distribution-center', OnlineMarketplace = 'online-marketplace', Consignment = 'consignment', RetailStore = 'retail-store', Warehouse = 'warehouse', DropShipper = 'drop-shipper', Other = 'other' }
export const enum VisibilityScope { App = 'app', Web = 'web', Private = 'private', Global = 'global', Internal = 'internal' }
export const enum PaymentStatus { Voided = 'voided', Partial = 'partial', PartiallyRefunded = 'partially-refunded', Cancelled = 'cancelled', Overdue = 'overdue', Pending = 'pending', Processing = 'processing', Disputed = 'disputed', Submitted = 'submitted', Authorized = 'authorized', Failed = 'failed', Paid = 'paid', Draft = 'draft', Error = 'error', Succeeded = 'succeeded', Adjusted = 'adjusted', Refunded = 'refunded', Deleted = 'deleted' }
export const enum TransactionChannel { Mail = 'mail', Other = 'other', Atm = 'atm', BankBranch = 'bank-branch', Telephone = 'telephone', InPerson = 'in-person', Mobile = 'mobile', Online = 'online' }
export const enum FinancialDisputeStatus { NeedsResponse = 'needs-response', Closed = 'closed', ChargeRefunded = 'charge-refunded', Lost = 'lost', Won = 'won', UnderReview = 'under-review', AwaitingEvidence = 'awaiting-evidence', Escalated = 'escalated' }
export const enum DeviceUsageType { Industrial = 'industrial', Educational = 'educational', Personal = 'personal', Business = 'business', Healthcare = 'healthcare', Home = 'home', Other = 'other' }
export const enum FinancialTransactionType { Sale = 'sale', ReceivePrepayment = 'receive-prepayment', Fee = 'fee', Dividend = 'dividend', Spend = 'spend', Transfer = 'transfer', Withdrawal = 'withdrawal', Payment = 'payment', Charge = 'charge', SpendOverpayment = 'spend-overpayment', Receive = 'receive', SpendPrepayment = 'spend-prepayment', Chargeback = 'chargeback', Other = 'other', Deposit = 'deposit', Adjustment = 'adjustment', Refund = 'refund', ReceiveOverpayment = 'receive-overpayment', Interest = 'interest' }
export const enum AccessControlModel { Mac = 'mac', Custom = 'custom', None = 'none', Rbac = 'rbac', Dac = 'dac', Abac = 'abac' }
export const enum ParticipantType { Group = 'group', Organization = 'organization', Team = 'team', ExternalParticipant = 'external-participant', User = 'user' }
export const enum PriorityLevel { Urgent = 'urgent', Elevated = 'elevated', Low = 'low', Medium = 'medium', High = 'high' }
export const enum PrerequisiteRangeType { Subtotal = 'subtotal', Quantity = 'quantity', ShippingPrice = 'shipping-price' }
export const enum ContentVisibility { Internal = 'internal', Private = 'private', Public = 'public', Shared = 'shared', Protected = 'protected' }
export const enum EntityCategory { User = 'user', Document = 'document', Other = 'other', Link = 'link', Project = 'project', Event = 'event', Message = 'message', Task = 'task', Owner = 'owner', Person = 'person' }
export const enum GenderIdentity { Male = 'male', Other = 'other', Female = 'female', PreferNotToSay = 'prefer-not-to-say' }
export const enum CommunicationMethod { SocialMedia = 'social-media', Email = 'email', InPerson = 'in-person', VideoCall = 'video-call', InstantMessage = 'instant-message', Sms = 'sms', Phone = 'phone', PushNotification = 'push-notification', Mail = 'mail', Other = 'other', Text = 'text' }
export const enum EmailCategoryType { Spam = 'spam', Business = 'business', Governmental = 'governmental', Transactional = 'transactional', Personal = 'personal', Other = 'other', Educational = 'educational', Promotional = 'promotional' }
export const enum UniversalIdentifierType { Email = 'email', Url = 'url', Uuid = 'uuid', Number = 'number', String = 'string' }
export const enum TaskStatus { Cancelled = 'cancelled', OnHold = 'on-hold', Done = 'done', InProgress = 'in-progress', Todo = 'todo', Blocked = 'blocked' }
export const enum UserStatus { Active = 'active', Banned = 'banned', Pending = 'pending', WaitListed = 'wait-listed', Deleted = 'deleted', Verified = 'verified', Suspended = 'suspended', Inactive = 'inactive', Archived = 'archived' }
export const enum PromotionType { FreeShipping = 'free-shipping', Percentage = 'percentage', FixedAmount = 'fixed-amount', BuyOneGetOne = 'buy-one-get-one', Other = 'other', RewardPoints = 'reward-points' }
export const enum MimeType { ImageJpeg = 'image/jpeg', ImageSvgXml = 'image/svg+xml', ImageWebp = 'image/webp', ImagePng = 'image/png', ImageGif = 'image/gif' }
export const enum TaxType { Inclusive = 'inclusive', Variable = 'variable', Additive = 'additive' }
export const enum ModifierType { List = 'list', Text = 'text' }
export const enum CardType { Debit = 'debit', Credit = 'credit', UnknownCard = 'unknown-card' }
export const enum PrepaidType { UnknownPrepaid = 'unknown-prepaid', Prepaid = 'prepaid', NotPrepaid = 'not-prepaid' }
export const enum EntryMethod { Keyed = 'keyed', OnFile = 'on-file', Swiped = 'swiped', Contactless = 'contactless', Emv = 'emv' }
export const enum CvvStatus { NotChecked = 'not-checked', Rejected = 'rejected', Accepted = 'accepted' }
export const enum AvcStatus { Rejected = 'rejected', NotChecked = 'not-checked', Accepted = 'accepted' }
export const enum CreditType { Customer = 'customer', Goodwill = 'goodwill', Prepayment = 'prepayment', Overpayment = 'overpayment', Supplier = 'supplier' }
export const enum CallDirection { Outbound = 'outbound', Unknown = 'unknown', Inbound = 'inbound', Conference = 'conference' }
export const enum SpeakerRole { Invitee = 'invitee', Attendee = 'attendee' }
export const enum FileType { Folder = 'folder', File = 'file', Url = 'url' }
export const enum AIMessagesContentType { Text = 'text', ToolUse = 'tool-use', ToolResult = 'tool-result', Image = 'image' }
export const enum AIToolChoiceType { Auto = 'auto', Any = 'any', None = 'none', Tool = 'tool' }
export const enum ImageType { Base64 = 'base64' }
export const enum ResponseFormatType { Text = 'text', JsonSchema = 'json-schema', JsonObject = 'json-object' }
export const enum ToolCallType { Function = 'function' }
