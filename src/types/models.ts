// This file is auto-generated. Do not edit it manually.

export interface Events { modifyToken?: string;
    attendees?: Users[];
    title?: string;
    organizer?: Users;
    description?: string;
    timeZone?: string;
    endDate?: string;
    createdAt?: string;
    updatedAt?: string;
    model?: string;
    location?: string;
    id?: string;
    startDate?: string;
    deleted?: boolean }
export interface Calendars { type?: string;
    description?: string;
    location?: string;
    timeZone?: string;
    createdAt?: string;
    model?: string;
    id?: string;
    updatedAt?: string;
    deleted?: boolean;
    modifyToken?: string;
    title?: string }
export interface Threads { lastMessageId?: string;
    createdAt?: string;
    messages?: Messages[];
    model?: string;
    id?: string;
    deleted?: boolean;
    updatedAt?: string;
    modifyToken?: string;
    snippet?: string }
export interface Drafts { chatId?: string;
    receiverId?: string;
    senderEmail?: string;
    recipientEmails?: string[];
    subject?: string;
    reactions?: Reactions[];
    active?: boolean;
    updatedAt?: string;
    replyToMessageId?: string;
    model?: string;
    bcc?: string;
    priority?: PriorityLevel;
    createdAt?: string;
    id?: string;
    content?: string;
    threadId?: string;
    deleted?: boolean;
    senderId?: string;
    deliveryStatus?: MessageDeliveryStatus;
    reference?: Entity;
    type?: MessageContentType;
    messageId?: string;
    metadata?: Metadata[];
    modifyToken?: string;
    timestamp?: string;
    cc?: string;
    attachments?: Attachments[];
    readStatus?: MessageReadStatus }
export interface Drives { description?: string;
    updatedAt?: string;
    name?: string;
    model?: string;
    id?: string;
    createdAt?: string }
export interface Folders { downloadable?: boolean;
    modifyToken?: string;
    parent?: ParentFolders;
    owner?: FileOwners;
    path?: string;
    createdAt?: string;
    updatedAt?: string;
    size?: number;
    id?: string;
    description?: string;
    name?: string;
    permissions?: Permissions;
    model?: string }
export interface Files { mimeType?: string;
    permissions?: Permissions;
    size?: number;
    extension?: string;
    path?: string;
    id?: string;
    modifyToken?: string;
    model?: string;
    exportFormats?: string;
    owner?: FileOwners;
    type?: FileType;
    updatedAt?: string;
    createdAt?: string;
    description?: string;
    exportable?: boolean;
    downloadable?: boolean;
    downloadUrl?: string;
    parent?: ParentFolders;
    content?: string;
    name?: string }
export interface FileOwners { name?: string;
    updatedAt?: string;
    model?: string;
    email?: string;
    createdAt?: string;
    id?: string }
export interface ParentFolders { id?: string;
    createdAt?: string;
    model?: string;
    updatedAt?: string;
    name?: string }
export interface Speakers { role?: SpeakerRole;
    speakerId?: string;
    email?: string;
    userId?: string;
    name?: string;
    model?: string;
    title?: string;
    id?: string }
export interface Recordings { endTime?: string;
    callType?: CallDirection;
    topic?: string;
    createdAt?: string;
    description?: string;
    model?: string;
    id?: string;
    participants?: Speakers[];
    hostId?: string;
    duration?: number;
    modifyToken?: string;
    updatedAt?: string;
    startTime?: string;
    fileSize?: number;
    name?: string;
    password?: string;
    accountId?: string;
    files?: Attachments[] }
export interface Transcripts { sentences?: Sentences[];
    updatedAt?: string;
    model?: string;
    id?: string;
    speakerName?: string;
    modifyToken?: string;
    meetingId?: string;
    topic?: string;
    createdAt?: string;
    speakerId?: string }
export interface Sentences { endTime?: string;
    createdAt?: string;
    updatedAt?: string;
    speakerId?: string;
    speakerName?: string;
    startTime?: string;
    modifyToken?: string;
    id?: string;
    sentence?: string;
    model?: string }
export interface Tables { name?: string;
    createdAt?: string;
    model?: string;
    updatedAt?: string;
    description?: string;
    modifyToken?: string;
    fields?: Attributes[];
    id?: string }
export interface Databases { id?: string;
    title?: string;
    url?: string;
    modifyToken?: string;
    deleted?: boolean;
    description?: string;
    organizationId?: string;
    region?: string;
    tables?: Tables[];
    name?: string;
    model?: string;
    updatedAt?: string;
    permissionLevel?: string;
    active?: boolean;
    createdAt?: string }
export interface Attributes { model?: string;
    description?: string;
    createdAt?: string;
    id?: string;
    name?: string;
    dataType?: DataType;
    required?: boolean;
    slug?: string;
    unique?: boolean;
    customTypeDetails?: Metadata[];
    modifyToken?: string;
    updatedAt?: string }
export interface Records { createdAt?: string;
    model?: string;
    entity?: unknown;
    id?: string;
    modifyToken?: string;
    updatedAt?: string }
export interface Objects { updatedAt?: string;
    name?: string;
    slug?: string;
    model?: string;
    pluralNoun?: string;
    modifyToken?: string;
    singularNoun?: string;
    custom?: boolean;
    createdAt?: string;
    id?: string }
export interface CardDetails { status?: string;
    updatedAt?: string;
    active?: boolean;
    cvvStatus?: CvvStatus;
    bin?: string;
    entryMethod?: EntryMethod;
    modifyToken?: string;
    authorizedAt?: string;
    type?: CardType;
    statementDescription?: string;
    model?: string;
    brand?: string;
    expiryYear?: string;
    fingerprint?: string;
    prepaidType?: PrepaidType;
    deleted?: boolean;
    lastFour?: string;
    expiryMonth?: string;
    id?: string;
    avcStatus?: AvcStatus;
    createdAt?: string;
    capturedAt?: string }
export interface Modifiers { modifyToken?: string;
    id?: string;
    originalPrice?: number;
    customerNote?: string;
    linePrice?: number;
    updatedAt?: string;
    groupId?: string;
    name?: string;
    quantity?: number;
    model?: string;
    currency?: Currency;
    createdAt?: string;
    deleted?: boolean;
    active?: boolean }
export interface ModifierGroups { id?: string;
    type?: ModifierType;
    updatedAt?: string;
    name?: string;
    model?: string;
    modifyToken?: string;
    active?: boolean;
    deleted?: boolean;
    description?: string;
    modifiers?: Modifiers[];
    createdAt?: string }
export interface InvoicePayments { id?: string;
    amount?: number;
    date?: string;
    createdAt?: string;
    modifyToken?: string;
    updatedAt?: string;
    model?: string }
export interface Locations { socialProfiles?: SocialProfiles[];
    timezone?: string;
    defaultPhone?: string;
    defaultEmail?: string;
    name?: string;
    description?: string;
    type?: string;
    emails?: Emails[];
    numberOfEmployees?: number;
    updatedAt?: string;
    model?: string;
    createdAt?: string;
    domain?: string;
    locationNumber?: string;
    businessName?: string;
    phones?: Phones[];
    countryCode?: string;
    active?: boolean;
    id?: string;
    website?: string;
    businessHours?: BusinessHours[];
    currency?: Currency;
    merchantId?: string;
    tags?: string[];
    merchantCategoryCode?: string;
    customFields?: CustomAttributes[];
    modifyToken?: string;
    address?: Addresses }
export interface CurrencyDetails { value?: number;
    model?: string;
    id?: string;
    currency?: Currency }
export interface UsageLimitExpirations { limit?: number;
    expirationDate?: string;
    model?: string }
export interface Webhooks { id?: string;
    events?: string[];
    isDeleted?: boolean;
    format?: Format;
    modifyToken?: string;
    model?: string;
    address?: string;
    objects?: string[];
    createdAt?: string;
    updatedAt?: string }
export interface PrerequisiteRanges { type?: PrerequisiteRangeType;
    greaterThanOrEqualTo?: number;
    lessThanOrEqualTo?: number;
    model?: string }
export interface PriceRules { excludedProductIds?: string[];
    title?: string;
    currency?: string;
    targetType?: TargetType;
    active?: boolean;
    updatedAt?: string;
    prerequisiteCustomerIds?: string[];
    startDate?: string;
    excludedCollectionIds?: string[];
    prerequisiteSavedSearchIds?: string[];
    prerequisiteQuantity?: number;
    allocationMethod?: AllocationMethod;
    prerequisiteRanges?: PrerequisiteRanges;
    entitledCollectionIds?: string[];
    description?: string;
    priority?: number;
    model?: string;
    valueType?: DiscountType;
    allocationLimit?: number;
    createdAt?: string;
    modifyToken?: string;
    entitledQuantity?: number;
    prerequisiteCollectionIds?: string[];
    entitledCountryIds?: string[];
    oncePerCustomer?: boolean;
    targetSelection?: TargetSelection;
    prerequisiteProductIds?: string[];
    excludedVariantIds?: string[];
    entitledVariantIds?: string[];
    deleted?: boolean;
    id?: string;
    customerSelection?: CustomerSelection;
    entitledProductIds?: string[];
    prerequisiteVariantIds?: string[];
    usageLimit?: number;
    value?: number;
    endDate?: string }
export interface Discounts { code?: string;
    channelAvailability?: ChannelAvailability;
    timesUsed?: number;
    description?: string;
    minimumQuantityOfItems?: number;
    exclusions?: string[];
    usageLimitExpirations?: UsageLimitExpirations;
    createdAt?: string;
    title?: string;
    value?: number;
    updatedAt?: string;
    deleted?: boolean;
    active?: boolean;
    minimumPurchaseAmount?: number;
    id?: string;
    model?: string;
    minimumRequirements?: MinimumRequirements;
    stackable?: boolean;
    status?: Status;
    customFields?: CustomAttributes[];
    usageLimit?: number;
    appliesTo?: AppliesTo;
    usageLimitPerCustomer?: number;
    endDate?: string;
    startDate?: string;
    currency?: string;
    modifyToken?: string;
    customerEligibility?: CustomerEligibility;
    type?: DiscountType }
export interface AIUsage { completionTokens?: number;
    promptTokens?: number;
    totalTokens?: number;
    model?: string }
export interface AIMessages { finishReason?: string;
    role?: string;
    content?: string;
    model?: string;
    index?: number }
export interface Chats { model?: string;
    createdAt?: string;
    modifyToken?: string;
    topK?: number;
    modelUsed?: string;
    seed?: number;
    id?: string;
    topP?: number;
    temperature?: number;
    maxTokens?: number;
    messages?: AIMessages[];
    usage?: AIUsage;
    stopSequences?: string[];
    objectType?: string;
    systemFingerprint?: string }
export interface TaxDetails { taxCode?: string;
    effectiveDate?: string;
    currency?: Currency;
    isTaxIncludedInPrice?: boolean;
    category?: string;
    jurisdiction?: string;
    country?: string;
    details?: string;
    region?: string;
    amount?: number;
    id?: string;
    updatedAt?: string;
    deleted?: boolean;
    expirationDate?: string;
    name?: string;
    taxRegistrationNumber?: string;
    active?: boolean;
    rate?: number;
    createdAt?: string;
    model?: string }
export interface Evidence { customerCommunication?: string;
    cancellationPolicyDisclosure?: string;
    customerPurchaseIp?: string;
    receipt?: string;
    productDescription?: string;
    shippingCarrier?: string;
    shippingDocumentation?: string;
    billingAddress?: string;
    cancellationRebuttal?: string;
    customerName?: string;
    duplicateChargeDocumentation?: string;
    refundPolicyDisclosure?: string;
    serviceDocumentation?: string;
    model?: string;
    refundRefusalExplanation?: string;
    serviceDate?: string;
    accessActivityLog?: string;
    refundPolicy?: string;
    shippingAddress?: string;
    customerSignature?: string;
    duplicateChargeId?: string;
    shippingDate?: string;
    shippingTrackingNumber?: string;
    uncategorizedFile?: string;
    uncategorizedText?: string;
    customerEmailAddress?: string;
    cancellationPolicy?: string;
    duplicateChargeExplanation?: string }
export interface Disputes { currency?: Currency;
    amount?: number;
    notes?: string;
    deleted?: boolean;
    metadata?: Metadata;
    updated?: string;
    model?: string;
    id?: string;
    status?: FinancialDisputeStatus;
    created?: string;
    customerId?: string;
    chargeRefundable?: boolean;
    transactionId?: string;
    reason?: string;
    version?: string;
    evidence?: Evidence;
    charge?: string;
    active?: boolean }
export interface Reactions { createdAt?: string;
    model?: string;
    chatId?: string;
    messageId?: string;
    userId?: string;
    type?: ReactionType }
export interface Participants { userId?: string;
    displayName?: string;
    joinedAt?: string;
    model?: string;
    status?: ParticipantEngagementStatus;
    type?: CommunicationRole }
export interface Conversations { model?: string;
    id?: string;
    messages?: Messages[];
    unreadCount?: number;
    title?: string;
    type?: ChatType;
    lastMessage?: Messages;
    metadata?: string;
    createdAt?: string;
    isPinned?: boolean;
    status?: ConversationStatus;
    modifyToken?: string;
    updatedAt?: string;
    lastReadMessageId?: string;
    participants?: Participants[] }
export interface Messages { modifyToken?: string;
    timestamp?: string;
    bcc?: string;
    replyToMessageId?: string;
    type?: MessageContentType;
    deliveryStatus?: MessageDeliveryStatus;
    id?: string;
    reactions?: Reactions[];
    readStatus?: MessageReadStatus;
    senderEmail?: string;
    reference?: Entity;
    attachments?: Attachments[];
    deleted?: boolean;
    content?: string;
    recipientEmails?: string[];
    model?: string;
    subject?: string;
    chatId?: string;
    priority?: PriorityLevel;
    threadId?: string;
    senderId?: string;
    cc?: string;
    metadata?: Metadata[];
    createdAt?: string;
    receiverId?: string;
    updatedAt?: string;
    active?: boolean }
export interface ShareholderEquityDetails { commonStock?: number;
    preferredStock?: number;
    model?: string;
    treasuryStock?: number;
    retainedEarnings?: number;
    accumulatedOtherComprehensiveIncome?: number }
export interface IncomeTaxExpenseDetails { taxAllowanceCredit?: number;
    currentIncomeTax?: number;
    model?: string;
    deferredIncomeTax?: number }
export interface OperatingExpensesDetails { otherOperatingExpenses?: number;
    salesGeneralAndAdministrativeExpenses?: number;
    model?: string;
    researchAndDevelopmentExpenses?: number }
export interface RevenueDetails { salesRevenue?: number;
    otherRevenue?: number;
    serviceRevenue?: number;
    model?: string }
export interface ShippingItem { model?: string;
    id?: string;
    weightUnit?: string;
    productId?: string;
    productName?: string;
    quantity?: number;
    weight?: number;
    value?: number;
    sku?: string;
    dimensions?: Dimensions }
export interface BillingDetails { updatedAt?: string;
    isDeleted?: boolean;
    id?: string;
    paymentTerms?: PaymentTerm;
    email?: string;
    vatId?: string;
    model?: string;
    phoneNumber?: string;
    companyName?: string;
    active?: boolean;
    additionalAttributes?: CustomAttributes[];
    note?: string;
    customerId?: string;
    createdAt?: string;
    fullName?: string;
    currency?: Currency;
    language?: string;
    defaultPaymentMethod?: PaymentMethods;
    address?: Addresses }
export interface PaymentTerms { lastUpdatedDate?: string;
    updatedAt?: string;
    interestRate?: number;
    isActive?: boolean;
    allowedMethods?: string[];
    type?: PaymentTerm;
    currencyCode?: string;
    createdAt?: string;
    minimumPayment?: number;
    isDeleted?: boolean;
    penaltyRate?: number;
    description?: string;
    model?: string;
    countrySpecificTerms?: string[];
    gracePeriodDays?: number;
    currencyFormatting?: string;
    id?: string;
    permittedClientClasses?: string[];
    notes?: string;
    discountDays?: number;
    createdDate?: string;
    languageSupport?: string[];
    discountRate?: number;
    dueDays?: number }
export interface InvoiceAdjustments { createdAt?: string;
    active?: boolean;
    id?: string;
    type?: InvoiceAdjustmentType;
    currency?: Currency;
    amount?: number;
    description?: string;
    appliedToInvoiceItemId?: string;
    updatedAt?: string;
    deleted?: boolean;
    model?: string;
    metadata?: Metadata }
export interface TaxRates { modifyToken?: string;
    shippingIncluded?: boolean;
    currency?: Currency;
    description?: string;
    taxType?: string;
    customFields?: CustomAttributes[];
    active?: boolean;
    applicableItems?: string[];
    displayRate?: string;
    updatedAt?: string;
    reportTaxType?: string;
    name?: string;
    id?: string;
    taxNumber?: string;
    model?: string;
    percentage?: number;
    taxProvider?: string;
    region?: string;
    compound?: boolean;
    country?: string;
    taxComponents?: TaxLines[];
    deleted?: boolean;
    createdAt?: string }
export interface CreditNoteLines { account?: string;
    description?: string;
    id?: string;
    quantity?: number;
    total?: number;
    unitPrice?: number;
    model?: string;
    taxRate?: number;
    product?: Products;
    customFields?: CustomAttributes[] }
export interface CreditNotes { companyName?: string;
    vatNumber?: string;
    reason?: string;
    active?: boolean;
    id?: string;
    deleted?: boolean;
    memo?: string;
    metadata?: Metadata;
    taxRate?: number;
    updatedAt?: string;
    billingAddress?: Addresses;
    modifyToken?: string;
    issuedDate?: string;
    amount?: number;
    payments?: Payments[];
    adjustment?: number;
    createdAt?: string;
    description?: string;
    lines?: CreditNoteLines[];
    vatName?: string;
    customer?: Customers;
    dueDate?: string;
    taxAmount?: number;
    discounts?: number[];
    shippingAddress?: Addresses;
    number?: string;
    companyId?: string;
    status?: CreditNoteStatus;
    attachments?: Attachments[];
    creditType?: CreditType;
    currency?: Currency;
    model?: string }
export interface ExpenseCategories { name?: string;
    description?: string;
    model?: string;
    id?: string }
export interface Expenses { model?: string;
    dateIncurred?: string;
    merchant?: string;
    createdByUserId?: string;
    currencyCode?: string;
    reportId?: string;
    active?: boolean;
    lineItems?: Items[];
    approvedByUserId?: string;
    deleted?: boolean;
    createdAt?: string;
    modifyToken?: string;
    location?: Addresses;
    receiptUrls?: string[];
    category?: ExpenseCategories;
    customFields?: CustomAttributes[];
    status?: ExpenseApprovalStatus;
    tags?: string[];
    accountId?: string;
    description?: string;
    amount?: number;
    tax?: Taxes[];
    updatedAt?: string;
    paymentMethod?: PaymentMethods;
    attachments?: Attachments[];
    id?: string;
    note?: string;
    transactionId?: string }
export interface Transactions { shipping?: ShippingDetails;
    contact?: Contacts;
    status?: FinancialTransactionStatus;
    invoiceId?: string;
    accountName?: string;
    taxAmount?: number;
    accountId?: string;
    transactionMethod?: TransactionMethod;
    refund?: Refunds;
    updatedAt?: string;
    modifyToken?: string;
    exchangeRate?: number;
    billingDetails?: BillingDetails;
    description?: string;
    metadata?: Metadata;
    foreignCurrency?: CurrencyDetails;
    accountCode?: string;
    taxExempt?: boolean;
    tags?: string[];
    applicationFee?: number;
    date?: string;
    id?: string;
    recipient?: Customers;
    amount?: number;
    paymentIntent?: string;
    orderId?: string;
    dispute?: Disputes;
    checkNumber?: string;
    transactionCategory?: TransactionType;
    items?: Items[];
    model?: string;
    paymentMethod?: PaymentMethods;
    type?: FinancialTransactionType;
    sender?: Customers;
    attachments?: Attachments[];
    createdAt?: string;
    currency?: Currency;
    deleted?: boolean }
export interface PurchaseOrderLineItems { unitOfMeasure?: string;
    deliveryDate?: string;
    quantity?: number;
    model?: string;
    productId?: string;
    description?: string;
    SKU?: string;
    unitPrice?: number;
    discount?: number;
    totalPrice?: number;
    id?: string }
export interface Accounts { notes?: string;
    overdraftProtection?: boolean;
    name?: string;
    allowPayments?: boolean;
    currency?: Currency;
    id?: string;
    transactions?: Transactions[];
    closedAt?: string;
    description?: string;
    accountNumber?: string;
    active?: boolean;
    title?: string;
    balance?: number;
    deleted?: boolean;
    createdAt?: string;
    accountType?: AccountType;
    taxType?: string;
    branch?: string;
    interestRate?: number;
    model?: string;
    accountCode?: string;
    owner?: Customers;
    status?: FinancialAccountStatus;
    modifyToken?: string;
    showInExpenses?: boolean;
    updatedAt?: string;
    overdraftLimit?: number }
export interface PurchaseOrders { currency?: Currency;
    attachments?: Attachments[];
    updatedAt?: string;
    billTo?: Addresses;
    subtotal?: number;
    modifyToken?: string;
    orderDate?: string;
    id?: string;
    shippingCosts?: number;
    model?: string;
    total?: number;
    paymentTerms?: string;
    taxes?: number;
    orderNumber?: string;
    vendor?: Vendors;
    notes?: string;
    active?: boolean;
    lineItems?: PurchaseOrderLineItems[];
    deleted?: boolean;
    createdAt?: string;
    expectedDeliveryDate?: string;
    accountId?: string;
    status?: OrderStatus;
    shipTo?: Addresses }
export interface AdditionalCharges { model?: string;
    description?: string;
    type?: FinancialChargeType;
    createdAt?: string;
    updatedAt?: string;
    amount?: number;
    id?: string }
export interface Refunds { status?: TransactionStatus;
    paymentId?: string;
    reason?: string;
    createdAt?: string;
    model?: string;
    id?: string;
    currency?: Currency;
    amount?: number;
    updatedAt?: string;
    modifyToken?: string }
export interface Payments { tip?: number;
    journalId?: string;
    orderId?: string;
    modifyToken?: string;
    active?: boolean;
    paymentIntent?: string;
    refund?: Refunds;
    amount?: number;
    paymentProcessor?: string;
    receiptEmail?: string;
    date?: string;
    currency?: Currency;
    paymentCaptureMethod?: string;
    metadata?: Metadata;
    id?: string;
    invoice?: Invoices;
    updatedAt?: string;
    customer?: Customers;
    cardDetails?: CardDetails;
    status?: PaymentStatus;
    description?: string;
    transactionId?: string;
    shippingDetails?: ShippingDetails;
    paymentMethod?: PaymentMethods;
    billingDetails?: BillingDetails;
    model?: string;
    webhookUrl?: string;
    createdAt?: string;
    notes?: string;
    deleted?: boolean }
export interface Bills { model?: string;
    createdAt?: string;
    invoiceNumber?: string;
    active?: boolean;
    deleted?: boolean;
    customer?: Customers;
    updatedAt?: string;
    id?: string;
    modifyToken?: string;
    amountDue?: number;
    amountPaid?: number;
    vendor?: Vendors;
    terms?: string;
    notes?: string;
    issueDate?: string;
    amountRemaining?: number;
    customFields?: CustomAttributes[];
    status?: BillingStatus;
    currencyCode?: string;
    dueDate?: string;
    attachments?: Attachments[];
    lineItems?: Items[] }
export interface Vendors { contactName?: string;
    updatedAt?: string;
    currencyCode?: string;
    note?: string;
    contactPhone?: string;
    modifyToken?: string;
    overdueBalance?: number;
    id?: string;
    contactEmail?: string;
    website?: string;
    tax?: Taxes[];
    accountNumber?: string;
    is1099?: boolean;
    outstandingBalance?: number;
    address?: Addresses;
    deleted?: boolean;
    active?: boolean;
    customFields?: CustomAttributes[];
    createdAt?: string;
    companyName?: string;
    model?: string }
export interface AuditInformation { model?: string;
    auditDate?: string;
    auditOpinion?: AuditOpinionType;
    auditorName?: string;
    notes?: string }
export interface BalanceSheets { auditInfo?: AuditInformation;
    fixedAssets?: number;
    otherNonCurrentLiabilities?: number;
    commonStock?: number;
    equity?: number;
    minorityInterest?: number;
    totalAssets?: number;
    shortTermDebt?: number;
    nonCurrentLiabilities?: number;
    propertyPlantEquipment?: number;
    prepaidExpenses?: number;
    accumulatedDepreciation?: number;
    deferredRevenue?: number;
    otherCurrentAssets?: number;
    totalLiabilitiesAndEquity?: number;
    currency?: Currency;
    nonCurrentAssets?: number;
    currentLiabilities?: number;
    preferredStock?: number;
    totalLiabilities?: number;
    longTermDebt?: number;
    shortTermInvestments?: number;
    additionalPaidInCapital?: number;
    notes?: string;
    createdAt?: string;
    updatedAt?: string;
    model?: string;
    inventory?: number;
    currentAssets?: number;
    intangibleAssets?: number;
    active?: boolean;
    accruedLiabilities?: number;
    deleted?: boolean;
    modifyToken?: string;
    customFields?: CustomAttributes[];
    notesPayable?: number;
    id?: string;
    stockholdersEquity?: number;
    taxLiabilities?: number;
    otherNonCurrentAssets?: number;
    accountsPayable?: number;
    treasuryStock?: number;
    currentPortionOfLongTermDebt?: number;
    accountSummary?: KeyValues[];
    balanceDate?: string;
    cashAndCashEquivalents?: number;
    otherCurrentLiabilities?: number;
    accountsReceivable?: number;
    retainedEarnings?: number }
export interface IncomeStatements { shareholderEquity?: ShareholderEquityDetails;
    updatedAt?: string;
    accountSummary?: KeyValues[];
    revenue?: RevenueDetails;
    model?: string;
    period?: string;
    grossProfit?: number;
    interestExpense?: number;
    depreciationAndAmortization?: number;
    incomeTaxExpense?: IncomeTaxExpenseDetails;
    operatingIncome?: number;
    createdAt?: string;
    id?: string;
    netIncome?: number;
    modifyToken?: string;
    incomeBeforeTax?: number;
    profitMargins?: number;
    operatingExpenses?: OperatingExpensesDetails;
    currency?: Currency;
    ebitda?: number;
    exchangeRate?: number;
    costOfGoodsSold?: number }
export interface Invoices { invoiceNumber?: string;
    vatName?: string;
    exchangeRate?: number;
    discountTotal?: number;
    active?: boolean;
    adjustments?: InvoiceAdjustments[];
    total?: number;
    vatNumber?: string;
    discountPercentage?: number;
    createdAt?: string;
    invoicePayments?: InvoicePayments[];
    updatedAt?: string;
    dueDate?: string;
    modifyToken?: string;
    metadata?: Metadata[];
    customer?: Customers;
    paidAmount?: number;
    taxTotal?: number;
    footer?: string;
    id?: string;
    reference?: Entity;
    transactionDate?: string;
    model?: string;
    terms?: string;
    items?: InvoiceItems[];
    issuedDate?: string;
    currency?: Currency;
    paymentTerms?: PaymentTerms;
    balanceDue?: number;
    status?: PaymentStatus;
    billingAddress?: Addresses;
    notes?: string;
    attachments?: Attachments[];
    shippingAddress?: Addresses;
    subtotal?: number;
    deleted?: boolean;
    header?: string }
export interface JournalEntries { createdBy?: string;
    deleted?: boolean;
    lineItems?: JournalEntryLines[];
    name?: string;
    exchangeRate?: number;
    updatedAt?: string;
    status?: JournalEntryStatus;
    isReconciled?: boolean;
    id?: string;
    type?: string;
    date?: string;
    attachments?: Attachments[];
    entryNumber?: string;
    totalAmount?: number;
    reference?: string;
    currency?: Currency;
    createdAt?: string;
    updatedBy?: string;
    active?: boolean;
    modifyToken?: string;
    model?: string;
    description?: string;
    memo?: string }
export interface JournalEntryLines { amount?: number;
    debit?: number;
    model?: string;
    description?: string;
    quantity?: number;
    tracking?: FinancialTrackingCategories;
    taxCode?: string;
    taxAmount?: number;
    accountId?: string;
    id?: string;
    credit?: number }
export interface InvoiceItems { ratingCount?: number;
    id?: string;
    onSale?: boolean;
    currency?: Currency;
    reviews?: RatingsReviews[];
    availabilityDate?: string;
    gallery?: Images[];
    modifyToken?: string;
    upc?: string;
    isbn?: string;
    updatedAt?: string;
    createdAt?: string;
    discount?: number;
    brand?: string;
    dimensions?: Dimensions;
    tags?: string[];
    condition?: ItemCondition;
    weight?: number;
    inventoryStatus?: ProductAvailabilityStatus;
    options?: ProductOptions[];
    variants?: Variants[];
    deletedAt?: string;
    customFields?: CustomAttributes[];
    inventoryQuantity?: number;
    name?: string;
    imageUrl?: string;
    active?: boolean;
    ean?: string;
    model?: string;
    sku?: string;
    rating?: number;
    isAvailable?: boolean;
    quantity?: number;
    description?: string;
    mpn?: string;
    price?: number }
export interface Tickets { priority?: SupportTicketPriority;
    customFields?: CustomAttributes[];
    attachments?: Attachments[];
    modifyToken?: string;
    createdAt?: string;
    tags?: string[];
    notes?: Notes[];
    title?: string;
    description?: string;
    reporter?: Contacts;
    model?: string;
    id?: string;
    status?: IssueLifecycleStatus;
    type?: SupportQueryType;
    assignee?: Users;
    dueDate?: string;
    updatedAt?: string;
    comments?: Comments[] }
export interface WorkExperiences { startDate?: string;
    company?: string;
    description?: string;
    model?: string;
    endDate?: string;
    position?: string }
export interface Educations { model?: string;
    institution?: string;
    fieldOfStudy?: string;
    endDate?: string;
    startDate?: string;
    gpa?: number;
    degree?: string }
export interface References { model?: string;
    position?: string;
    name?: string;
    email?: string;
    relationship?: string;
    phoneNumber?: string;
    company?: string }
export interface Candidates { email?: string;
    firstName?: string;
    role?: string;
    workExperiences?: WorkExperiences[];
    phoneNumber?: string;
    coverLetter?: Attachments;
    status?: EmploymentAndCandidateStatus;
    languages?: string[];
    createdAt?: string;
    updatedAt?: string;
    id?: string;
    lastName?: string;
    certifications?: string[];
    educations?: Educations[];
    references?: References[];
    availability?: string;
    model?: string;
    socialProfiles?: SocialProfiles[];
    modifyToken?: string;
    profilePicture?: Images;
    jobId?: string;
    resume?: Attachments;
    skills?: string[];
    preferredWorkLocation?: string;
    websites?: string[];
    notes?: Notes[];
    customFields?: CustomAttributes[] }
export interface Contacts { model?: string;
    defaultEmail?: string;
    socialProfiles?: SocialProfiles[];
    birthday?: string;
    phones?: Phones[];
    defaultPhone?: string;
    id?: string;
    company?: string;
    addresses?: Addresses[];
    modifyToken?: string;
    websites?: string[];
    tags?: string[];
    note?: string;
    leadId?: string;
    relationship?: string;
    lastName?: string;
    address?: Addresses;
    updatedAt?: string;
    notes?: Notes;
    firstName?: string;
    isActive?: boolean;
    createdAt?: string;
    emails?: Emails[];
    customFields?: CustomAttributes[];
    code?: string }
export interface Jobs { updatedAt?: string;
    responsibilities?: string;
    jobStartDate?: string;
    jobTrainingProvided?: boolean;
    title?: string;
    validUntil?: string;
    jobShifts?: string[];
    occupationalCategory?: string;
    createdAt?: string;
    company?: Companies;
    industry?: string;
    workHours?: string;
    incentiveCompensation?: string;
    model?: string;
    educationRequirements?: string;
    remote?: boolean;
    workFromHome?: boolean;
    qualifications?: string;
    experienceRequirements?: string;
    employmentType?: EmploymentType;
    jobFlexibleHours?: boolean;
    location?: Addresses;
    description?: string;
    employmentUnit?: EmploymentUnits;
    applicationDeadline?: string;
    salaryCurrency?: string;
    modifyToken?: string;
    benefits?: string[];
    skills?: string[];
    languagesSpoken?: string[];
    jobBenefits?: string;
    baseSalary?: Salaries;
    jobImmediateStart?: boolean;
    jobLocationType?: string;
    jobTrialPeriod?: string;
    id?: string;
    incentives?: string }
export interface Salaries { model?: string;
    value?: number;
    paymentPeriod?: TimeCycle;
    currency?: Currency }
export interface HiringOrganizations { industry?: string;
    name?: string;
    locations?: Addresses[];
    description?: string;
    size?: string;
    model?: string }
export interface EmploymentUnits { name?: string;
    description?: string;
    model?: string }
export interface TimeSession { model?: string;
    openTime?: string;
    closeTime?: string }
export interface UserOrGroup { identifier?: string;
    model?: string;
    displayName?: string;
    type?: ParticipantType }
export interface Permissions { model?: string;
    assigneeDetails?: UserOrGroup;
    identifierType?: UniversalIdentifierType;
    roles?: string[];
    canView?: string[];
    canEdit?: string[];
    canDelete?: string[];
    accessControlType?: AccessControlModel }
export interface Emails { type?: EmailCategoryType;
    email?: string;
    model?: string }
export interface Phones { phone?: string;
    country?: string;
    type?: DeviceUsageType;
    model?: string;
    countryCode?: string }
export interface Entity { entityType?: EntityCategory;
    model?: string;
    value?: string;
    attributes?: string[];
    entityId?: string }
export interface Notifications { type?: string;
    active?: boolean;
    priority?: PriorityLevel;
    status?: string;
    updatedAt?: string;
    notificationId?: string;
    deleted?: boolean;
    customFields?: CustomAttributes[];
    createdAt?: string;
    attachments?: Attachments[];
    model?: string;
    title?: string;
    recipient?: Users;
    channel?: string;
    message?: string }
export interface Comments { updatedAt?: string;
    active?: boolean;
    parentId?: string;
    flagged?: boolean;
    model?: string;
    author?: Users;
    text?: string;
    metadata?: Metadata[];
    likes?: number;
    createdAt?: string;
    commentId?: string;
    deleted?: boolean }
export interface Metadata { id?: string;
    entityType?: string;
    type?: DataType;
    value?: string;
    updatedAt?: string;
    entityId?: string;
    valueParsingRequired?: boolean;
    model?: string;
    createdAt?: string;
    key?: string }
export interface Tasks { notifications?: Notifications[];
    modifyToken?: string;
    model?: string;
    description?: string;
    parentTaskId?: string;
    repeat?: string;
    priority?: PriorityLevel;
    subTaskIds?: string[];
    createdBy?: Users;
    id?: string;
    assignee?: Users;
    title?: string;
    createdAt?: string;
    status?: TaskStatus;
    dueTimezone?: string;
    timeEstimate?: string;
    timeLogged?: string;
    comments?: Comments[];
    dependOnTaskIds?: string[];
    relatedToTaskId?: string[];
    dueDate?: string;
    updatedAt?: string;
    labels?: string[];
    watchers?: Users[];
    customFields?: CustomAttributes[];
    attachments?: Attachments[];
    completionPercentage?: number }
export interface Stores { ratings?: RatingsReviews;
    socialProfiles?: SocialProfiles[];
    description?: string;
    model?: string;
    name?: string;
    country?: string;
    id?: string;
    websiteUrl?: string;
    timezone?: string;
    longitude?: number;
    owner?: Users;
    createdAt?: string;
    features?: string[];
    logoUrl?: string;
    category?: string;
    businessHours?: BusinessHours[];
    email?: string;
    paymentMethods?: string[];
    updatedAt?: string;
    manager?: Staff;
    phone?: string;
    language?: string;
    storeArea?: number;
    relatedStores?: Stores[];
    currency?: Currency;
    countryCode?: string;
    latitude?: number;
    address?: Addresses;
    isOperating?: boolean }
export interface Staff { gender?: string;
    active?: boolean;
    email?: string;
    phone?: string;
    addresses?: Addresses;
    position?: string;
    storeID?: string;
    id?: string;
    customFields?: CustomAttributes[];
    updatedAt?: string;
    dateOfBirth?: string;
    lastName?: string;
    role?: OrganizationalRole;
    model?: string;
    photoUrl?: string;
    firstName?: string;
    deleted?: boolean;
    status?: EmploymentAndCandidateStatus;
    createdAt?: string }
export interface RatingsReviews { metadata?: Metadata;
    deleted?: boolean;
    id?: string;
    reviewerName?: string;
    rating?: number;
    model?: string;
    createdAt?: string;
    updatedAt?: string;
    review?: string;
    verifiedPurchase?: boolean;
    storeID?: string;
    locale?: string;
    active?: boolean;
    status?: ReviewApprovalStatus }
export interface ProductOptions { values?: string[];
    createdAt?: string;
    name?: string;
    updatedAt?: string;
    productId?: number;
    model?: string;
    id?: string }
export interface Taxes { model?: string;
    category?: string;
    active?: boolean;
    country?: string;
    type?: TaxType;
    rate?: number;
    name?: string;
    description?: string;
    currency?: Currency;
    amount?: number;
    createdAt?: string;
    taxable?: boolean;
    id?: string;
    code?: string;
    jurisdiction?: string;
    region?: string;
    customFields?: CustomAttributes[];
    deleted?: boolean;
    updatedAt?: string }
export interface InventoryLocations { createdAt?: string;
    type?: InventoryStorageType;
    deleted?: boolean;
    contactInformation?: Contacts[];
    isActive?: boolean;
    updatedAt?: string;
    model?: string;
    operationalHours?: string;
    name?: string;
    locationId?: string;
    quantity?: number;
    address?: Addresses }
export interface Prices { amount?: number;
    model?: string;
    currency?: Currency;
    type?: string }
export interface Variants { productId?: string;
    modifyToken?: string;
    inventoryQuantity?: number;
    imageId?: number;
    weightUnit?: string;
    sku?: string;
    createdAt?: string;
    updatedAt?: string;
    deleted?: boolean;
    model?: string;
    status?: ItemAvailabilityStatus;
    isDefault?: boolean;
    active?: boolean;
    requiresShipping?: boolean;
    dimensions?: Dimensions;
    taxable?: boolean;
    barcode?: string;
    title?: string;
    compareAtPrice?: number;
    id?: string;
    weight?: number;
    price?: number }
export interface Dimensions { length?: number;
    width?: number;
    model?: string;
    height?: number }
export interface Products { inventoryQuantity?: number;
    inventoryLocation?: InventoryLocations;
    updatedAt?: string;
    status?: EntityLifecycleStatus;
    sku?: string;
    reference?: Entity;
    manufacturerName?: string;
    customFields?: CustomAttributes[];
    type?: string;
    taxes?: Taxes[];
    description?: string;
    isDownloadable?: boolean;
    id?: string;
    publishedAt?: string;
    options?: ProductOptions[];
    categories?: string[];
    weightUnit?: string;
    metaTitle?: string;
    availableForSale?: boolean;
    metaDescription?: string;
    model?: string;
    skuValidation?: SkuValidation;
    vendor?: string;
    createdAt?: string;
    accountIds?: KeyValues[];
    images?: Images[];
    seoKeywords?: string[];
    downloadFiles?: Attachments[];
    modifyToken?: string;
    tags?: string[];
    prices?: Prices[];
    dimensions?: Dimensions;
    relatedProducts?: string[];
    variants?: Variants[];
    weight?: number;
    code?: string;
    slug?: string;
    brand?: Brands;
    localizations?: Localizations[];
    title?: string }
export interface Orders { billingAddress?: Addresses;
    discounts?: Discounts[];
    currency?: Currency;
    modifyToken?: string;
    updatedAt?: string;
    shippingCost?: number;
    note?: string;
    model?: string;
    reference?: Entity;
    status?: OrderStatus;
    orderNumber?: string;
    createdAt?: string;
    id?: string;
    total?: number;
    tax?: number;
    subTotal?: number;
    shippingId?: string;
    paymentStatus?: PaymentStatus;
    shippingMethod?: string;
    shippingAddress?: Addresses;
    trackingInfo?: string;
    storeLocationId?: string;
    items?: Items[];
    tip?: number;
    customerId?: string;
    tags?: string[];
    taxes?: Taxes[];
    paymentMethods?: string[] }
export interface Opportunities { title?: string;
    owner?: Users;
    isWon?: boolean;
    closeDate?: string;
    id?: string;
    entity?: Entity;
    updatedAt?: string;
    lostReason?: string;
    model?: string;
    createdAt?: string;
    modifyToken?: string;
    customFields?: CustomAttributes[];
    companyName?: string;
    companyId?: string;
    description?: string;
    isClosed?: boolean;
    probability?: number;
    tags?: string[];
    nextStep?: string;
    notes?: string[];
    type?: string;
    leadSource?: string;
    amount?: number;
    leadId?: string;
    stage?: string;
    contacts?: Contacts[];
    currency?: Currency;
    attachments?: Attachments[];
    campaign?: Campaigns }
export interface PaymentMethods { type?: PaymentMethod;
    model?: string;
    id?: string;
    details?: string;
    isDefault?: boolean }
export interface SSO { tokenType?: string;
    refreshToken?: string;
    scopes?: string[];
    accessToken?: string;
    createdAt?: string;
    updatedAt?: string;
    active?: boolean;
    provider?: IdentityProvider;
    providerUserId?: string;
    profileUrl?: string;
    expiresIn?: number;
    deleted?: boolean;
    model?: string;
    expiryDate?: string }
export interface Preferences { language?: string;
    communications?: CommunicationMethod;
    id?: string;
    timeZone?: string;
    currency?: Currency;
    model?: string }
export interface Users { lastLogin?: string;
    preferences?: Preferences;
    lastName?: string;
    isActive?: boolean;
    username?: string;
    profilePicture?: Images;
    coverPhoto?: Images;
    updatedAt?: string;
    roles?: Roles[];
    bio?: string;
    sso?: SSO[];
    paymentMethods?: PaymentMethods;
    model?: string;
    phoneNumber?: string;
    createdAt?: string;
    modifyToken?: string;
    addresses?: Addresses[];
    password?: string;
    id?: string;
    firstName?: string;
    middleName?: string;
    socialProfiles?: SocialProfiles[];
    email?: string;
    dateOfBirth?: string;
    status?: UserStatus;
    website?: string;
    gender?: Gender }
export interface Categories { model?: string;
    createdAt?: string;
    modifyToken?: string;
    name?: string;
    id?: string;
    updatedAt?: string;
    parentId?: string;
    tags?: string[];
    image?: string }
export interface Notes { model?: string;
    color?: string;
    lastAccessed?: string;
    updatedAt?: string;
    attachments?: Attachments[];
    reminder?: string;
    sharedWith?: Users[];
    modifyToken?: string;
    content?: string;
    id?: string;
    title?: string;
    visibility?: ContentVisibility;
    author?: Users;
    metadata?: string[];
    priority?: PriorityLevel;
    tags?: string[];
    createdAt?: string }
export interface LeadSource { details?: string;
    sourceName?: string;
    sourceId?: string;
    model?: string }
export interface TransactionDetails { transactionId?: string;
    amount?: number;
    model?: string;
    status?: string }
export interface Leads { middleName?: string;
    opportunities?: Opportunities[];
    industry?: string;
    firstName?: string;
    defaultPhone?: string;
    leadStatus?: LeadLifecycleStatus;
    emails?: Emails[];
    numberOfEmployees?: number;
    leadSource?: LeadSource;
    id?: string;
    annualRevenue?: number;
    jobTitle?: string;
    updatedAt?: string;
    model?: string;
    name?: string;
    lastName?: string;
    entity?: Entity;
    preferredContactMethod?: CommunicationMethod;
    customFields?: CustomAttributes[];
    companyName?: string;
    notes?: Notes[];
    phones?: Phones[];
    createdAt?: string;
    modifyToken?: string;
    addresses?: Addresses[];
    website?: string;
    defaultEmail?: string;
    socialProfiles?: SocialProfiles[];
    companyId?: string }
export interface FulfillmentReceipts { fulfillmentId?: string;
    transactionDetails?: TransactionDetails;
    amount?: number;
    createdAt?: string;
    authorization?: string;
    id?: string;
    currency?: Currency;
    testCase?: boolean;
    model?: string;
    active?: boolean;
    updatedAt?: string;
    deleted?: boolean;
    paymentMethod?: PaymentMethod;
    status?: OrderStatus;
    customerInfo?: Customers }
export interface FulfillmentItems { taxable?: boolean;
    orderId?: string;
    quantity?: number;
    weight?: number;
    status?: OrderStatus;
    dimensions?: Dimensions;
    variantTitle?: string;
    createdAt?: string;
    title?: string;
    sku?: string;
    requiresShipping?: boolean;
    fulfillmentId?: string;
    imageUrl?: string;
    id?: string;
    productId?: string;
    description?: string;
    weightUnit?: string;
    customAttributes?: CustomAttributes;
    updatedAt?: string;
    price?: number;
    deleted?: boolean;
    model?: string;
    variantId?: string;
    active?: boolean }
export interface Fulfillments { lineItems?: Items[];
    carrier?: string;
    metadata?: Metadata;
    service?: string;
    currency?: Currency;
    items?: FulfillmentItems[];
    address?: Addresses;
    trackingNumber?: string;
    shipmentDate?: string;
    notes?: string;
    status?: FulfillmentStatus;
    id?: string;
    expectedDelivery?: string;
    totalPrice?: number;
    model?: string;
    trackingUrls?: string[];
    receipt?: FulfillmentReceipts;
    createdAt?: string;
    updatedAt?: string;
    orderId?: string }
export interface CustomAttributes { fieldType?: DataType;
    model?: string;
    id?: string;
    fieldName?: string;
    fieldValue?: string }
export interface Companies { logo?: string;
    tags?: string[];
    socialProfiles?: SocialProfiles[];
    address?: Addresses;
    taxId?: string;
    numberOfEmployees?: number;
    regulatoryStatus?: string;
    parentCompanyId?: string;
    incorporationCountry?: string;
    model?: string;
    defaultEmail?: string;
    incorporationDate?: string;
    id?: string;
    type?: string;
    website?: string;
    companyNumber?: string;
    defaultPhone?: string;
    customFields?: CustomAttributes[];
    description?: string;
    foundedDate?: string;
    stockSymbol?: string;
    name?: string;
    domain?: string;
    revenueCurrency?: string;
    emails?: Emails[];
    additionalContacts?: Contacts[];
    createdAt?: string;
    reference?: Entity;
    legalName?: string;
    dunsNumber?: string;
    phones?: Phones[];
    updatedAt?: string;
    modifyToken?: string;
    industry?: string;
    revenue?: number }
export interface Localizations { metaTitle?: string;
    metaDescription?: string;
    model?: string;
    title?: string;
    description?: string;
    locale?: string }
export interface KeyValues { value?: string;
    key?: string;
    model?: string }
export interface SocialProfiles { active?: boolean;
    updatedAt?: string;
    deleted?: boolean;
    displayName?: string;
    model?: string;
    type?: SocialPlatform;
    createdAt?: string;
    username?: string;
    url?: string;
    avatarUrl?: string;
    email?: string;
    additionalInfo?: Metadata }
export interface Customers { title?: string;
    jobTitle?: string;
    preferredContactMethod?: CommunicationMethod;
    company?: string;
    customerType?: CustomerType;
    defaultAddress?: Addresses;
    firstName?: string;
    metadata?: string;
    model?: string;
    createdAt?: string;
    tags?: string[];
    modifyToken?: string;
    currency?: Currency;
    status?: CustomerStatus;
    updatedAt?: string;
    lastName?: string;
    loyaltyProgramMembership?: string;
    source?: string;
    customerNumber?: string;
    reference?: Entity;
    customerSegment?: string;
    middleName?: string;
    emails?: Emails[];
    customFields?: CustomAttributes[];
    dateOfBirth?: string;
    socialProfiles?: SocialProfiles[];
    companyId?: string;
    fullName?: string;
    addresses?: Addresses[];
    notes?: string;
    phoneNumber?: string;
    phones?: Phones[];
    email?: string;
    id?: string }
export interface TaxLines { taxCode?: string;
    createdAt?: string;
    isNonRecoverable?: boolean;
    deleted?: boolean;
    title?: string;
    model?: string;
    rate?: number;
    isCompound?: boolean;
    price?: number;
    updatedAt?: string;
    active?: boolean;
    id?: string;
    name?: string;
    isInclusive?: boolean;
    metadata?: Metadata }
export interface Images { title?: string;
    updatedAt?: string;
    thumbnailSrc?: string;
    altText?: string;
    createdAt?: string;
    src?: string;
    height?: number;
    caption?: string;
    active?: boolean;
    model?: string;
    width?: number;
    id?: string;
    deleted?: boolean;
    mimeType?: ImageMimeType;
    tags?: string[] }
export interface GiftCards { updatedAt?: string;
    id?: string;
    purchasedBy?: string;
    deleted?: boolean;
    expirationDate?: string;
    status?: LifecycleStatus;
    associatedUser?: Users;
    createdAt?: string;
    currency?: Currency;
    balance?: number;
    model?: string;
    amountUsed?: number;
    cardNumber?: string;
    metadata?: string;
    issuedBy?: string;
    active?: boolean }
export interface Promotions { limitPerCustomer?: number;
    type?: PromotionType;
    description?: string;
    endDate?: string;
    currency?: Currency;
    updatedAt?: string;
    eligibleItems?: string[];
    minimumPurchaseAmount?: number;
    startDate?: string;
    model?: string;
    discountType?: DiscountType;
    usageLimit?: number;
    active?: boolean;
    discountValue?: number;
    deleted?: boolean;
    termsAndConditions?: string;
    code?: string;
    customerEligibility?: CustomerEligibilityStatus;
    createdAt?: string }
export interface PaymentDetails { model?: string;
    currency?: Currency;
    createdAt?: string;
    updatedAt?: string;
    active?: boolean;
    billingAddress?: Addresses;
    deleted?: boolean;
    amount?: number;
    paymentGateway?: string;
    transactionId?: string;
    refunded?: boolean;
    status?: string;
    method?: string }
export interface PerformanceMetrics { conversions?: number;
    model?: string;
    impressions?: number;
    returnOnInvestment?: number;
    costPerClick?: number;
    conversionRate?: number;
    clicks?: number;
    costPerConversion?: number;
    spend?: number }
export interface ShippingDetails { address?: Addresses;
    method?: string;
    signatureRequired?: boolean;
    price?: number;
    createdAt?: string;
    deleted?: boolean;
    model?: string;
    estimatedDelivery?: string;
    trackingNumber?: string;
    provider?: string;
    insurance?: boolean;
    active?: boolean;
    updatedAt?: string }
export interface Items { discount?: number;
    weight?: number;
    taxable?: boolean;
    linePrice?: number;
    createdAt?: string;
    title?: string;
    discountLines?: Discounts[];
    productId?: string;
    variantTitle?: string;
    updatedAt?: string;
    id?: string;
    taxLines?: TaxLines[];
    image?: Images;
    description?: string;
    active?: boolean;
    deleted?: boolean;
    price?: number;
    accountId?: string;
    model?: string;
    requiresShipping?: boolean;
    sku?: string;
    shippingId?: string;
    tax?: number;
    variantId?: string;
    parentId?: string;
    quantity?: number;
    currency?: Currency;
    originalPrice?: number;
    discountedPrice?: number;
    accountName?: string;
    weightUnit?: string;
    fulfillableQuantity?: number;
    modifiers?: Modifiers[] }
export interface Carts { discountCodes?: string[];
    shippingDetails?: ShippingDetails;
    version?: string;
    model?: string;
    note?: string;
    promotions?: Promotions[];
    currency?: Currency;
    state?: OrderStatus;
    items?: Items[];
    token?: string;
    totalPrice?: number;
    totalWeight?: number;
    id?: string;
    originalTotalPrice?: number;
    messages?: string[];
    paymentDetails?: PaymentDetails;
    buyerIdentity?: Customers;
    giftCards?: GiftCards[];
    createdAt?: string;
    attributes?: string[];
    itemCount?: number;
    updatedAt?: string }
export interface Campaigns { deleted?: boolean;
    tags?: string[];
    type?: CampaignType;
    creativeAssets?: Attachments;
    active?: boolean;
    budget?: number;
    createdAt?: string;
    name?: string;
    channels?: string[];
    performanceMetrics?: PerformanceMetrics;
    endDate?: string;
    updatedAt?: string;
    id?: string;
    startDate?: string;
    targetAudience?: string;
    model?: string;
    status?: CampaignStatus }
export interface Attachments { fileSize?: number;
    fileType?: string;
    url?: string;
    thumbnailUrl?: string;
    content?: string;
    createdAt?: string;
    metadata?: Metadata;
    associatedWith?: Entity;
    previewUrl?: string;
    permissions?: Permissions;
    updatedAt?: string;
    model?: string;
    fileName?: string;
    id?: string }
export interface BusinessHours { active?: boolean;
    timeZone?: string;
    deleted?: boolean;
    closed?: boolean;
    model?: string;
    createdAt?: string;
    id?: string;
    dayOfWeek?: DayOfWeek;
    storeID?: string;
    updatedAt?: string;
    sessions?: TimeSession[] }
export interface Brands { logo?: string;
    description?: string;
    customFields?: CustomAttributes[];
    website?: string;
    status?: ItemEntityStatus;
    createdAt?: string;
    id?: string;
    model?: string;
    established?: string;
    name?: string;
    country?: string;
    updatedAt?: string }
export interface GeoCoordinates { heading?: number;
    timestamp?: string;
    longitude?: number;
    altitude?: number;
    accuracy?: number;
    latitude?: number;
    speed?: number;
    altitudeAccuracy?: number;
    model?: string }
export interface Addresses { countryCode?: string;
    city?: string;
    firstName?: string;
    companyName?: string;
    name?: string;
    province?: string;
    postalCode?: string;
    subdivisionCode?: string;
    addressLine2?: string;
    postalCodeExtension?: string;
    street?: string;
    region?: string;
    contactId?: string;
    accountId?: string;
    type?: ContactAddressType;
    customFields?: CustomAttributes[];
    model?: string;
    geoLocation?: GeoCoordinates;
    phone?: string;
    middleName?: string;
    id?: string;
    lastName?: string;
    email?: string;
    country?: string }
export interface CRMAccounts { createdAt?: string;
    website?: string;
    updatedAt?: string;
    id?: string;
    shippingAddress?: Addresses;
    name?: string;
    annualRevenue?: number;
    model?: string;
    industry?: string;
    customFields?: CustomAttributes[];
    tags?: string[];
    numberOfEmployees?: number;
    ownerId?: string;
    rating?: AccountEngagementLevel;
    billingAddress?: Addresses;
    phone?: string;
    accountType?: StakeholderType;
    status?: AccountStatus;
    email?: string }
export const enum TransactionMethod { Online = 'online', Atm = 'atm', Mail = 'mail', Telephone = 'telephone', Mobile = 'mobile', BankBranch = 'bank-branch' }
export const enum MinimumRequirements { None = 'none', MinimumPurchaseAmount = 'minimum-purchase-amount', MinimumQuantityOfItems = 'minimum-quantity-of-items' }
export const enum AllocationMethod { Each = 'each', Across = 'across' }
export const enum AppliesTo { SpecificCategories = 'specific-categories', SpecificItems = 'specific-items', AllItems = 'all-items' }
export const enum TargetSelection { All = 'all', Entitled = 'entitled' }
export const enum Format { Json = 'json', Xml = 'xml' }
export const enum AccountType { ExpenseBadDebts = 'expense::bad-debts', OtherCurrentLiabilityDirectDepositPayable = 'other-current-liability::direct-deposit-payable', LiabilityAccrualsAndDeferredIncome = 'liability::accruals-and-deferred-income', ExpenseDuesSubscriptions = 'expense::dues-subscriptions', OtherCurrentLiabilityPrepaidExpensesPayable = 'other-current-liability::prepaid-expenses-payable', OtherExpenseDeferredTaxExpense = 'other-expense::deferred-tax-expense', OtherExpenseOtherHomeOfficeExpenses = 'other-expense::other-home-office-expenses', ExpensePayrollExpenses = 'expense::payroll-expenses', OtherCurrentLiabilityGlobalTaxSuspense = 'other-current-liability::global-tax-suspense', EquityPersonalIncome = 'equity::personal-income', OtherExpenseDepreciation = 'other-expense::depreciation', OtherExpenseExchangeGainOrLoss = 'other-expense::exchange-gain-or-loss', RevenueSalesWholesale = 'revenue::sales-wholesale', AssetOtherIntangibleAssets = 'asset::other-intangible-assets', ExpenseAmortizationExpense = 'expense::amortization-expense', OtherExpenseDepletion = 'other-expense::depletion', AssetFixedAssetFurniture = 'asset::fixed-asset-furniture', OtherCurrentLiabilitySalesTaxPayable = 'other-current-liability::sales-tax-payable', AssetOtherCurrentAssets = 'asset::other-current-assets', LiabilityProvisionsNonCurrentLiabilities = 'liability::provisions-non-current-liabilities', OtherCurrentLiabilityFederalIncomeTaxPayable = 'other-current-liability::federal-income-tax-payable', AssetInvestmentMortgageRealEstateLoans = 'asset::investment-mortgage-real-estate-loans', OtherExpenseMatCredit = 'other-expense::mat-credit', AssetGlobalTaxDeferred = 'asset::global-tax-deferred', CostOfGoodsSoldCostOfLaborCos = 'cost-of-goods-sold::cost-of-labor-cos', AssetIntangibleAssets = 'asset::intangible-assets', AssetGoodwill = 'asset::goodwill', AssetOtherConsumables = 'asset::other-consumables', Equity = 'equity', ExpenseOtherBusinessExpenses = 'expense::other-business-expenses', ExpenseTaxesPaid = 'expense::taxes-paid', LiabilityGovernmentAndOtherPublicAuthorities = 'liability::government-and-other-public-authorities', EquityEquityInEarningsOfSubsidiuaries = 'equity::equity-in-earnings-of-subsidiuaries', OtherCurrentLiabilitySocialSecurityAgencies = 'other-current-liability::social-security-agencies', OtherExpenseHomeOffice = 'other-expense::home-office', OtherExpenseMortgageInterest = 'other-expense::mortgage-interest', RevenueSalesRetail = 'revenue::sales-retail', EquityInvestmentGrants = 'equity::investment-grants', RevenueNonProfitIncome = 'revenue::non-profit-income', AssetChecking = 'asset::checking', OtherExpenseVehicle = 'other-expense::vehicle', OtherIncomeLossOnDisposalOfAssets = 'other-income::loss-on-disposal-of-assets', OtherExpenseIncomeTaxOtherExpense = 'other-expense::income-tax-other-expense', OtherExpenseVehicleRepairs = 'other-expense::vehicle-repairs', RevenueDiscountsRefundsGiven = 'revenue::discounts-refunds-given', ExpenseCostOfLabor = 'expense::cost-of-labor', OtherCurrentLiabilityInterestPayables = 'other-current-liability::interest-payables', OtherExpenseVehicleLease = 'other-expense::vehicle-lease', LiabilityObligationsUnderFinanceLeases = 'liability::obligations-under-finance-leases', OtherCurrentLiabilityStaffAndRelatedLiabilityAccounts = 'other-current-liability::staff-and-related-liability-accounts', ExpenseManagementCompensation = 'expense::management-compensation', AssetInvestmentOther = 'asset::investment-other', OtherExpenseHomeOwnerRentalInsurance = 'other-expense::home-owner-rental-insurance', OtherCurrentLiabilityRentsInTrustLiability = 'other-current-liability::rents-in-trust-liability', AssetGlobalTaxRefund = 'asset::global-tax-refund', ExpenseRentOrLeaseOfBuildings = 'expense::rent-or-lease-of-buildings', ExpenseFinanceCosts = 'expense::finance-costs', ExpenseTravelMeals = 'expense::travel-meals', ExpenseInsurance = 'expense::insurance', ExpenseCharitableContributions = 'expense::charitable-contributions', AssetDevelopmentCosts = 'asset::development-costs', AssetEmployeeCashAdvances = 'asset::employee-cash-advances', EquityOpeningBalanceEquity = 'equity::opening-balance-equity', ExpenseOtherSellingExpenses = 'expense::other-selling-expenses', ExpenseTravelExpensesGeneralAndAdminExpenses = 'expense::travel-expenses-general-and-admin-expenses', RevenueOwnWorkCapitalized = 'revenue::own-work-capitalized', AssetIntangibleAssetsUnderDevelopment = 'asset::intangible-assets-under-development', OtherCurrentLiabilityCurrentLiabilities = 'other-current-liability::current-liabilities', OtherExpenseGasAndFuel = 'other-expense::gas-and-fuel', ExpenseEntertainment = 'expense::entertainment', OtherCurrentLiabilityAccruedLiabilities = 'other-current-liability::accrued-liabilities', AssetFixedAssetSoftware = 'asset::fixed-asset-software', AssetBalWithGovtAuthorities = 'asset::bal-with-govt-authorities', AssetNonCurrentAssets = 'asset::non-current-assets', ExpenseEquipmentRental = 'expense::equipment-rental', AssetDeferredTax = 'asset::deferred-tax', ExpenseGlobalTaxExpense = 'expense::global-tax-expense', ExpensePurchasesRebates = 'expense::purchases-rebates', ExpenseTravelExpensesSellingExpense = 'expense::travel-expenses-selling-expense', ExpenseTravel = 'expense::travel', LiabilityBankLoans = 'liability::bank-loans', RevenueSavingsByTaxScheme = 'revenue::savings-by-tax-scheme', ExpenseLossOnDiscontinuedOperationsNetOfTax = 'expense::loss-on-discontinued-operations-net-of-tax', OtherCurrentLiabilityInsurancePayable = 'other-current-liability::insurance-payable', OtherCurrentLiabilityCurrentPortionEmployeeBenefitsObligations = 'other-current-liability::current-portion-employee-benefits-obligations', ExpenseOtherMiscellaneousServiceCost = 'expense::other-miscellaneous-service-cost', ExpenseAdvertisingPromotional = 'expense::advertising-promotional', AssetOtherLongTermInvestments = 'asset::other-long-term-investments', AssetPrepaidExpenses = 'asset::prepaid-expenses', OtherCurrentLiabilityTradeAndOtherPayables = 'other-current-liability::trade-and-other-payables', RevenueUnappliedCashPaymentIncome = 'revenue::unapplied-cash-payment-income', OtherIncomeDividendIncome = 'other-income::dividend-income', AssetPrepaymentsAndAccruedIncome = 'asset::prepayments-and-accrued-income', EquityCalledUpShareCapital = 'equity::called-up-share-capital', EquityMoneyReceivedAgainstShareWarrants = 'equity::money-received-against-share-warrants', OtherExpense = 'other-expense', AssetProvisionsFixedAssets = 'asset::provisions-fixed-assets', OtherCurrentLiabilityTrustAccountsLiabilities = 'other-current-liability::trust-accounts-liabilities', OtherCurrentLiabilityPayrollClearing = 'other-current-liability::payroll-clearing', AssetLoansToOthers = 'asset::loans-to-others', ExpenseSundry = 'expense::sundry', RevenueServiceFeeIncome = 'revenue::service-fee-income', EquityTreasuryStock = 'equity::treasury-stock', AssetFixedAssetPhotoVideo = 'asset::fixed-asset-photo-video', OtherCurrentLiabilityProvisionForWarrantyObligations = 'other-current-liability::provision-for-warranty-obligations', RevenueRevenueGeneral = 'revenue::revenue-general', EquityOtherFreeReserves = 'equity::other-free-reserves', EquityShareCapital = 'equity::share-capital', EquityPersonalExpense = 'equity::personal-expense', Expense = 'expense', OtherIncomeOtherOperatingIncome = 'other-income::other-operating-income', AssetProvisionsCurrentAssets = 'asset::provisions-current-assets', AssetLand = 'asset::land', AssetProvisionsNonCurrentAssets = 'asset::provisions-non-current-assets', LiabilityOtherLongTermProvisions = 'liability::other-long-term-provisions', ExpenseAppropriationsToDepreciation = 'expense::appropriations-to-depreciation', EquityPartnersEquity = 'equity::partners-equity', AssetCashOnHand = 'asset::cash-on-hand', OtherIncomeGainLossOnSaleOfFixedAssets = 'other-income::gain-loss-on-sale-of-fixed-assets', AssetMachineryAndEquipment = 'asset::machinery-and-equipment', ExpenseInterestPaid = 'expense::interest-paid', ExpenseUnappliedCashBillPaymentExpense = 'expense::unapplied-cash-bill-payment-expense', AssetCumulativeDepreciationOnIntangibleAssets = 'asset::cumulative-depreciation-on-intangible-assets', AssetOtherLongTermAssets = 'asset::other-long-term-assets', AssetAssetsAvailableForSale = 'asset::assets-available-for-sale', ExpenseOtherCurrentOperatingCharges = 'expense::other-current-operating-charges', LiabilityAccountsPayable = 'liability::accounts-payable', ExpenseEntertainmentMeals = 'expense::entertainment-meals', ExpenseOtherExternalServices = 'expense::other-external-services', OtherExpenseUtilities = 'other-expense::utilities', LiabilityOutstandingDuesOtherThanMicroSmallEnterprise = 'liability::outstanding-dues-other-than-micro-small-enterprise', LiabilityOtherLongTermLiabilities = 'liability::other-long-term-liabilities', OtherExpenseVehicleLoanInterest = 'other-expense::vehicle-loan-interest', AssetAccumulatedDepreciation = 'asset::accumulated-depreciation', RevenueOtherCurrentOperatingIncome = 'revenue::other-current-operating-income', EquityShareApplicationMoneyPendingAllotment = 'equity::share-application-money-pending-allotment', AssetRetainage = 'asset::retainage', LiabilityLiabilitiesRelatedToAssetsHeldForSale = 'liability::liabilities-related-to-assets-held-for-sale', RevenueOperatingGrants = 'revenue::operating-grants', AssetLandAsset = 'asset::land-asset', AssetLoansToStockholders = 'asset::loans-to-stockholders', AssetInventory = 'asset::inventory', AssetLicenses = 'asset::licenses', OtherExpenseOtherVehicleExpenses = 'other-expense::other-vehicle-expenses', OtherCurrentLiabilityDividendsPayable = 'other-current-liability::dividends-payable', OtherCurrentLiabilityStateLocalIncomeTaxPayable = 'other-current-liability::state-local-income-tax-payable', OtherIncome = 'other-income', OtherCurrentLiabilityPayrollTaxPayable = 'other-current-liability::payroll-tax-payable', AssetShortTermInvestmentsInRelatedParties = 'asset::short-term-investments-in-related-parties', RevenueIncome = 'revenue::income', EquityRetainedEarnings = 'equity::retained-earnings', OtherCurrentLiabilityCurrentTaxLiability = 'other-current-liability::current-tax-liability', ExpenseAuto = 'expense::auto', OtherCurrentLiabilityDutiesAndTaxes = 'other-current-liability::duties-and-taxes', RevenueCashReceiptIncome = 'revenue::cash-receipt-income', OtherExpenseOtherMiscellaneousExpense = 'other-expense::other-miscellaneous-expense', AssetAllowanceForBadDebts = 'asset::allowance-for-bad-debts', OtherCurrentLiabilityOtherCurrentLiabilities = 'other-current-liability::other-current-liabilities', LiabilityAccruedLongTermLiabilities = 'liability::accrued-long-term-liabilities', OtherExpenseExceptionalItems = 'other-expense::exceptional-items', OtherIncomeTaxExemptInterest = 'other-income::tax-exempt-interest', AssetInvestmentUsGovernmentObligations = 'asset::investment-us-government-obligations', AssetFixedAssetCopiers = 'asset::fixed-asset-copiers', EquityPartnerContributions = 'equity::partner-contributions', ExpenseDistributionCosts = 'expense::distribution-costs', AssetLoansToOfficers = 'asset::loans-to-officers', AssetParticipatingInterests = 'asset::participating-interests', AssetMoneyMarket = 'asset::money-market', LiabilityAccruedVacationPayable = 'liability::accrued-vacation-payable', LiabilityDebtsRelatedToParticipatingInterests = 'liability::debts-related-to-participating-interests', AssetInvestments = 'asset::investments', LiabilityLongTermBorrowings = 'liability::long-term-borrowings', LiabilityStaffAndRelatedLongTermLiabilityAccounts = 'liability::staff-and-related-long-term-liability-accounts', OtherCurrentLiabilitySundryDebtorsAndCreditors = 'other-current-liability::sundry-debtors-and-creditors', OtherIncomeOtherMiscellaneousIncome = 'other-income::other-miscellaneous-income', AssetCapitalWip = 'asset::capital-wip', AssetFixedAssetPhone = 'asset::fixed-asset-phone', Income = 'income', ExpenseProjectStudiesSurveysAssessments = 'expense::project-studies-surveys-assessments', ExpenseRepairMaintenance = 'expense::repair-maintenance', AssetAssetsHeldForSale = 'asset::assets-held-for-sale', LiabilityCreditCard = 'liability::credit-card', AssetCashAndCashEquivalents = 'asset::cash-and-cash-equivalents', OtherExpenseTaxRoundoffGainOrLoss = 'other-expense::tax-roundoff-gain-or-loss', LiabilityLongTermLiability = 'liability::long-term-liability', OtherCurrentLiabilityProvisionsCurrentLiabilities = 'other-current-liability::provisions-current-liabilities', RevenueSalesOfProductIncome = 'revenue::sales-of-product-income', AssetFixedAssetOtherToolsEquipment = 'asset::fixed-asset-other-tools-equipment', ExpensePenaltiesSettlements = 'expense::penalties-settlements', LiabilityNotesPayable = 'liability::notes-payable', AssetVehicles = 'asset::vehicles', EquityDividendDisbursed = 'equity::dividend-disbursed', ExpenseCommissionsAndFees = 'expense::commissions-and-fees', ExpenseOtherRentalCosts = 'expense::other-rental-costs', ExpenseSuppliesMaterials = 'expense::supplies-materials', OtherIncomeOtherInvestmentIncome = 'other-income::other-investment-income', ExpenseBorrowingCost = 'expense::borrowing-cost', LiabilityProvisionForLiabilities = 'liability::provision-for-liabilities', AssetFixedAsset = 'asset::fixed-asset', LiabilityShareholderNotesPayable = 'liability::shareholder-notes-payable', OtherIncomeUnrealisedLossOnSecuritiesNetOfTax = 'other-income::unrealised-loss-on-securities-net-of-tax', EquityPreferredStock = 'equity::preferred-stock', OtherExpenseParkingAndTolls = 'other-expense::parking-and-tolls', RevenueOtherPrimaryIncome = 'revenue::other-primary-income', Asset = 'asset', ExpenseExtraordinaryCharges = 'expense::extraordinary-charges', AssetOtherAsset = 'asset::other-asset', AssetFurnitureAndFixtures = 'asset::furniture-and-fixtures', ExpensePromotionalMeals = 'expense::promotional-meals', EquityCommonStock = 'equity::common-stock', AssetUndepositedFunds = 'asset::undeposited-funds', ExpenseExternalServices = 'expense::external-services', AssetDepletableAssets = 'asset::depletable-assets', ExpenseBankCharges = 'expense::bank-charges', AssetAccumulatedAmortizationOfOtherAssets = 'asset::accumulated-amortization-of-other-assets', AccountsReceivable = 'accounts-receivable', AssetOrganizationalCosts = 'asset::organizational-costs', AssetLongTermLoansAndAdvancesToRelatedParties = 'asset::long-term-loans-and-advances-to-related-parties', EquityCapitalReserves = 'equity::capital-reserves', OtherExpenseVehicleInsurance = 'other-expense::vehicle-insurance', AssetInvestmentTaxExemptSecurities = 'asset::investment-tax-exempt-securities', CostOfGoodsSoldFreightAndDeliveryCost = 'cost-of-goods-sold::freight-and-delivery-cost', ExpenseStaffCosts = 'expense::staff-costs', AssetExpenditureAuthorisationsAndLettersOfCredit = 'asset::expenditure-authorisations-and-letters-of-credit', AssetAvailableForSaleFinancialAssets = 'asset::available-for-sale-financial-assets', ExpenseOfficeExpenses = 'expense::office-expenses', AssetOtherLongTermLoansAndAdvances = 'asset::other-long-term-loans-and-advances', ExpenseUtilities = 'expense::utilities', AssetLeaseholdImprovements = 'asset::leasehold-improvements', OtherIncomeInterestEarned = 'other-income::interest-earned', CostOfGoodsSoldCostOfSales = 'cost-of-goods-sold::cost-of-sales', OtherCurrentLiabilityCurrentPortionOfObligationsUnderFinanceLeases = 'other-current-liability::current-portion-of-obligations-under-finance-leases', AssetOtherEarMarkedBankAccounts = 'asset::other-ear-marked-bank-accounts', EquityEstimatedTaxes = 'equity::estimated-taxes', EquityOwnersEquity = 'equity::owners-equity', LiabilityGroupAndAssociates = 'liability::group-and-associates', Liability = 'liability', AssetBank = 'asset::bank', CostOfGoodsSoldEquipmentRentalCos = 'cost-of-goods-sold::equipment-rental-cos', CostOfGoodsSoldSuppliesMaterialsCogs = 'cost-of-goods-sold::supplies-materials-cogs', ExpenseShippingAndDeliveryExpense = 'expense::shipping-and-delivery-expense', LiabilityLongTermEmployeeBenefitObligations = 'liability::long-term-employee-benefit-obligations', AssetOtherFixedAssets = 'asset::other-fixed-assets', AssetSecurityDeposits = 'asset::security-deposits', AssetInternalTransfers = 'asset::internal-transfers', OtherCurrentLiabilityLineOfCredit = 'other-current-liability::line-of-credit', OtherCurrentLiabilityLoanPayable = 'other-current-liability::loan-payable', OtherExpensePriorPeriodItems = 'other-expense::prior-period-items', OtherExpenseWashAndRoadServices = 'other-expense::wash-and-road-services', AssetLongTermInvestments = 'asset::long-term-investments', EquityAccumulatedAdjustment = 'equity::accumulated-adjustment', AssetBuildings = 'asset::buildings', EquityFunds = 'equity::funds', OtherExpenseVehicleRegistration = 'other-expense::vehicle-registration', AssetLeaseBuyout = 'asset::lease-buyout', EquityPaidInCapitalOrSurplus = 'equity::paid-in-capital-or-surplus', CostOfGoodsSold = 'cost-of-goods-sold', OtherCurrentLiabilityShortTermBorrowings = 'other-current-liability::short-term-borrowings', AssetTradeAndOtherReceivables = 'asset::trade-and-other-receivables', ExpenseLegalProfessionalFees = 'expense::legal-professional-fees', LiabilityOutstandingDuesMicroSmallEnterprise = 'liability::outstanding-dues-micro-small-enterprise', ExpenseOfficeGeneralAdministrativeExpenses = 'expense::office-general-administrative-expenses', OtherExpensePenaltiesSettlements = 'other-expense::penalties-settlements', OtherCurrentLiabilityGlobalTaxPayable = 'other-current-liability::global-tax-payable', AssetCalledUpShareCapitalNotPaid = 'asset::called-up-share-capital-not-paid', ExpenseIncomeTaxExpense = 'expense::income-tax-expense', AssetSavings = 'asset::savings', CostOfGoodsSoldOtherCostsOfServiceCos = 'cost-of-goods-sold::other-costs-of-service-cos', AssetRentsHeldInTrust = 'asset::rents-held-in-trust', OtherCurrentLiability = 'other-current-liability', EquityAccumulatedOtherComprehensiveIncome = 'equity::accumulated-other-comprehensive-income', LiabilityLongTermDebit = 'liability::long-term-debit', EquityPartnerDistributions = 'equity::partner-distributions', OtherExpenseRentAndLease = 'other-expense::rent-and-lease', OtherExpenseExtraordinaryItems = 'other-expense::extraordinary-items', LiabilityDeferredTaxLiabilities = 'liability::deferred-tax-liabilities', AssetFixedAssetComputers = 'asset::fixed-asset-computers', AssetAccumulatedDepletion = 'asset::accumulated-depletion', OtherExpenseAmortization = 'other-expense::amortization', AssetAssetsInCourseOfConstruction = 'asset::assets-in-course-of-construction', ExpenseShippingFreightDelivery = 'expense::shipping-freight-delivery', CostOfGoodsSoldShippingFreightDeliveryCos = 'cost-of-goods-sold::shipping-freight-delivery-cos', OtherIncomeGainLossOnSaleOfInvestments = 'other-income::gain-loss-on-sale-of-investments', AssetOtherCurrentAsset = 'asset::other-current-asset', EquityHealthcare = 'equity::healthcare', OtherExpenseRepairsAndMaintenance = 'other-expense::repairs-and-maintenance', OtherExpenseVehicleLoan = 'other-expense::vehicle-loan', AssetShortTermLoansAndAdvancesToRelatedParties = 'asset::short-term-loans-and-advances-to-related-parties', AssetAccumulatedAmortization = 'asset::accumulated-amortization', AssetTrustAccounts = 'asset::trust-accounts' }
export const enum CustomerSelection { All = 'all', Prerequisite = 'prerequisite' }
export const enum CustomerEligibility { SpecificCustomerGroups = 'specific-customer-groups', SpecificCustomers = 'specific-customers', All = 'all' }
export const enum ChannelAvailability { InStore = 'in-store', AllChannels = 'all-channels', Online = 'online', InApp = 'in-app' }
export const enum TargetType { LineItem = 'line-item', ShippingLine = 'shipping-line' }
export const enum Roles { Admin = 'admin', Moderator = 'moderator', User = 'user' }
export const enum Status { Active = 'active', Expired = 'expired', Scheduled = 'scheduled' }
export const enum Gender { Female = 'female', Other = 'other', PreferNotToSay = 'prefer not to say', Male = 'male' }
export const enum SkuValidation { None = 'none', GlobalUnique = 'global-unique', LocalUnique = 'local-unique' }
export const enum Country { Uruguay = 'uruguay', Kuwait = 'kuwait', Brazil = 'brazil', SaoTomeAndPrincipe = 'sao-tome-and-principe', Finland = 'finland', Malaysia = 'malaysia', AntiguaAndBarbuda = 'antigua-and-barbuda', Portugal = 'portugal', Chad = 'chad', Slovenia = 'slovenia', Vietnam = 'vietnam', CzechRepublic = 'czech-republic', Bangladesh = 'bangladesh', Estonia = 'estonia', NewZealand = 'new-zealand', Philippines = 'philippines', Mali = 'mali', SanMarino = 'san-marino', Germany = 'germany', Panama = 'panama', Albania = 'albania', Serbia = 'serbia', Turkmenistan = 'turkmenistan', Afghanistan = 'afghanistan', Poland = 'poland', Bahamas = 'bahamas', SaudiArabia = 'saudi-arabia', Bulgaria = 'bulgaria', Kyrgyzstan = 'kyrgyzstan', Oman = 'oman', SolomonIslands = 'solomon-islands', Bolivia = 'bolivia', Qatar = 'qatar', Mauritania = 'mauritania', Uzbekistan = 'uzbekistan', Yemen = 'yemen', Zambia = 'zambia', Latvia = 'latvia', Mozambique = 'mozambique', Greece = 'greece', DominicanRepublic = 'dominican-republic', UnitedStates = 'united-states', Cyprus = 'cyprus', Malawi = 'malawi', GuineaBissau = 'guinea-bissau', Eswatini = 'eswatini', Singapore = 'singapore', Kiribati = 'kiribati', Belize = 'belize', Ecuador = 'ecuador', Mauritius = 'mauritius', Eritrea = 'eritrea', Hungary = 'hungary', Moldova = 'moldova', Burundi = 'burundi', Myanmar = 'myanmar', Honduras = 'honduras', Tajikistan = 'tajikistan', Netherlands = 'netherlands', Nauru = 'nauru', Nicaragua = 'nicaragua', BosniaAndHerzegovina = 'bosnia-and-herzegovina', Laos = 'laos', Madagascar = 'madagascar', Mongolia = 'mongolia', Montenegro = 'montenegro', Zimbabwe = 'zimbabwe', Vanuatu = 'vanuatu', Angola = 'angola', Gambia = 'gambia', CongoDemocraticRepublic = 'congo-democratic-republic', SriLanka = 'sri-lanka', Lithuania = 'lithuania', Malta = 'malta', ElSalvador = 'el-salvador', Ireland = 'ireland', Belarus = 'belarus', CostaRica = 'costa-rica', Kenya = 'kenya', Libya = 'libya', MarshallIslands = 'marshall-islands', Micronesia = 'micronesia', Tuvalu = 'tuvalu', Comoros = 'comoros', Romania = 'romania', Cuba = 'cuba', Cameroon = 'cameroon', Colombia = 'colombia', Slovakia = 'slovakia', Haiti = 'haiti', Taiwan = 'taiwan', Georgia = 'georgia', Bahrain = 'bahrain', France = 'france', Turkey = 'turkey', SaintVincentAndTheGrenadines = 'saint-vincent-and-the-grenadines', Cambodia = 'cambodia', Djibouti = 'djibouti', Luxembourg = 'luxembourg', Tanzania = 'tanzania', Denmark = 'denmark', Iran = 'iran', Kazakhstan = 'kazakhstan', Namibia = 'namibia', Liechtenstein = 'liechtenstein', Belgium = 'belgium', Austria = 'austria', Tunisia = 'tunisia', SaintKittsAndNevis = 'saint-kitts-and-nevis', Sweden = 'sweden', China = 'china', Chile = 'chile', CentralAfricanRepublic = 'central-african-republic', Thailand = 'thailand', Algeria = 'algeria', Barbados = 'barbados', Grenada = 'grenada', Israel = 'israel', Maldives = 'maldives', Palestine = 'palestine', SouthSudan = 'south-sudan', Canada = 'canada', CaboVerde = 'cabo-verde', India = 'india', Iraq = 'iraq', Andorra = 'andorra', Jordan = 'jordan', Russia = 'russia', TimorLeste = 'timor-leste', Peru = 'peru', Monaco = 'monaco', Gabon = 'gabon', Liberia = 'liberia', VaticanCity = 'vatican-city', Palau = 'palau', Australia = 'australia', NorthKorea = 'north-korea', BurkinaFaso = 'burkina-faso', Guinea = 'guinea', Morocco = 'morocco', Paraguay = 'paraguay', Azerbaijan = 'azerbaijan', Ukraine = 'ukraine', UnitedArabEmirates = 'united-arab-emirates', Nigeria = 'nigeria', SouthKorea = 'south-korea', Venezuela = 'venezuela', Switzerland = 'switzerland', Egypt = 'egypt', Croatia = 'croatia', Indonesia = 'indonesia', Rwanda = 'rwanda', Brunei = 'brunei', Lesotho = 'lesotho', Bhutan = 'bhutan', Lebanon = 'lebanon', Spain = 'spain', Uganda = 'uganda', NorthMacedonia = 'north-macedonia', Guatemala = 'guatemala', Pakistan = 'pakistan', Botswana = 'botswana', Fiji = 'fiji', Japan = 'japan', Dominica = 'dominica', Argentina = 'argentina', Niger = 'niger', Benin = 'benin', Jamaica = 'jamaica', Seychelles = 'seychelles', Sudan = 'sudan', PapuaNewGuinea = 'papua-new-guinea', Ethiopia = 'ethiopia', Suriname = 'suriname', Samoa = 'samoa', CongoRepublic = 'congo-republic', CoteDIvoire = 'cote-d-ivoire', Ghana = 'ghana', Mexico = 'mexico', Togo = 'togo', Norway = 'norway', EquatorialGuinea = 'equatorial-guinea', Iceland = 'iceland', Armenia = 'armenia', SierraLeone = 'sierra-leone', SouthAfrica = 'south-africa', SaintLucia = 'saint-lucia', Guyana = 'guyana', UnitedKingdom = 'united-kingdom', Nepal = 'nepal', Senegal = 'senegal', Italy = 'italy', Somalia = 'somalia', Syria = 'syria', Tonga = 'tonga', TrinidadAndTobago = 'trinidad-and-tobago' }
export const enum GlobalTaxType { ExciseTax = 'excise-tax', Other = 'other', Vat = 'vat', SalesTax = 'sales-tax', Gst = 'gst', CustomsDuty = 'customs-duty', PropertyTax = 'property-tax' }
export const enum IdentityProvider { Snapchat = 'snapchat', Google = 'google', Facebook = 'facebook', Linkedin = 'linkedin', Paypal = 'paypal', Dribbble = 'dribbble', Instagram = 'instagram', Apple = 'apple', Behance = 'behance', Microsoft = 'microsoft', Telegram = 'telegram', Amazon = 'amazon', Tumblr = 'tumblr', Slack = 'slack', Yahoo = 'yahoo', Pinterest = 'pinterest', Qq = 'qq', Github = 'github', Signal = 'signal', Wechat = 'wechat', Other = 'other', Tiktok = 'tiktok', Line = 'line', Whatsapp = 'whatsapp', Flickr = 'flickr', Vimeo = 'vimeo', Discord = 'discord', Foursquare = 'foursquare', Reddit = 'reddit', Twitter = 'twitter' }
export const enum AccountEngagementLevel { Hot = 'hot', Cold = 'cold', Unknown = 'unknown', Warm = 'warm' }
export const enum ReviewApprovalStatus { Approved = 'approved', Rejected = 'rejected', Revised = 'revised', InReview = 'in-review', Pending = 'pending' }
export const enum StakeholderType { Competitor = 'competitor', Other = 'other', Investor = 'investor', Partner = 'partner', Customer = 'customer', Vendor = 'vendor' }
export const enum AccountStatus { Inactive = 'inactive', Pending = 'pending', Suspended = 'suspended', Closed = 'closed', Active = 'active' }
export const enum CampaignStatus { Active = 'active', Planned = 'planned', Cancelled = 'cancelled', Completed = 'completed', Scheduled = 'scheduled', Paused = 'paused', Draft = 'draft', Archived = 'archived' }
export const enum CustomerType { Wholesale = 'wholesale', B2c = 'b2c', Retail = 'retail', Online = 'online', B2b = 'b2b', Corporate = 'corporate' }
export const enum MessageContentType { Image = 'image', Location = 'location', Gif = 'gif', Voice = 'voice', Link = 'link', File = 'file', Video = 'video', Contact = 'contact', Audio = 'audio', Document = 'document', Text = 'text', Sticker = 'sticker' }
export const enum ReactionType { Wow = 'wow', Laugh = 'laugh', Sad = 'sad', Dislike = 'dislike', Angry = 'angry', Like = 'like', Bookmark = 'bookmark', Interested = 'interested', Love = 'love' }
export const enum SupportTicketPriority { Immediate = 'immediate', Medium = 'medium', Low = 'low', High = 'high', Urgent = 'urgent' }
export const enum IssueLifecycleStatus { OnHold = 'on-hold', Pending = 'pending', Resolved = 'resolved', Cancelled = 'cancelled', Open = 'open', InProgress = 'in-progress', Closed = 'closed' }
export const enum OrderStatus { Processing = 'processing', Pending = 'pending', Shipped = 'shipped', Failed = 'failed', PartiallyFulfilled = 'partially-fulfilled', Disputed = 'disputed', OnHold = 'on-hold', AwaitingPickup = 'awaiting-pickup', Cancelled = 'cancelled', Confirmed = 'confirmed', Returned = 'returned', AwaitingShipment = 'awaiting-shipment', Abandoned = 'abandoned', Refunded = 'refunded', Completed = 'completed', Delivered = 'delivered', AwaitingPayment = 'awaiting-payment', Draft = 'draft' }
export const enum DiscountType { VariableAmount = 'variable-amount', BuyOneGetOne = 'buy-one-get-one', ConditionalDiscount = 'conditional-discount', UnknownDiscount = 'unknown-discount', Percentage = 'percentage', VariablePercentage = 'variable-percentage', FixedAmount = 'fixed-amount', TieredDiscount = 'tiered-discount' }
export const enum FulfillmentStatus { Delivered = 'delivered', InTransit = 'in-transit', Pending = 'pending', Returned = 'returned', Cancelled = 'cancelled', Failure = 'failure' }
export const enum ProductAvailabilityStatus { InStock = 'in-stock', BackOrder = 'back-order', PreOrder = 'pre-order', Discontinued = 'discontinued', OutOfStock = 'out-of-stock' }
export const enum ExpenseApprovalStatus { Approved = 'approved', Reviewing = 'reviewing', New = 'new', Cancelled = 'cancelled', Processed = 'processed', Pending = 'pending', Denied = 'denied', Reimbursed = 'reimbursed' }
export const enum FinancialChargeType { TransactionFee = 'transaction-fee', ServiceCharge = 'service-charge', LateFee = 'late-fee', ProcessingFee = 'processing-fee', Other = 'other', InterestCharge = 'interest-charge', Commission = 'commission' }
export const enum BillingStatus { Voided = 'voided', PartiallyPaid = 'partially-paid', Overdue = 'overdue', Draft = 'draft', Submitted = 'submitted', Authorised = 'authorised', Paid = 'paid', Pending = 'pending', Unpaid = 'unpaid', Deleted = 'deleted' }
export const enum InvoiceAdjustmentType { Tax = 'tax', Tip = 'tip', Other = 'other', Discount = 'discount', Shipping = 'shipping' }
export const enum DataType { Object = 'object', Number = 'number', Timestamp = 'timestamp', Custom = 'custom', Array = 'array', Null = 'null', Boolean = 'boolean', Date = 'date', Undefined = 'undefined', Json = 'json', String = 'string', Binary = 'binary' }
export const enum EmploymentType { FullTime = 'full-time', Permanent = 'permanent', PartTime = 'part-time', Freelance = 'freelance', Volunteer = 'volunteer', Temporary = 'temporary', Internship = 'internship', Seasonal = 'seasonal', Contract = 'contract' }
export const enum TimeCycle { Hourly = 'hourly', Annually = 'annually', Monthly = 'monthly', Triennially = 'triennially', Biweekly = 'biweekly', AdHoc = 'ad-hoc', SemiAnnually = 'semi-annually', Secondly = 'secondly', Daily = 'daily', Weekly = 'weekly', Minutely = 'minutely', SemiMonthly = 'semi-monthly', Quarterly = 'quarterly', Biennially = 'biennially', Custom = 'custom' }
export const enum FinancialTrackingCategories { Service = 'service', Location = 'location', CostCenter = 'cost-center', Product = 'product', Project = 'project', Customer = 'customer', None = 'none', Other = 'other', Vendor = 'vendor', Division = 'division', Class = 'class', Employee = 'employee', Department = 'department' }
export const enum CampaignType { SocialMedia = 'social-media', SearchEngine = 'search-engine', Display = 'display', Email = 'email', Other = 'other' }
export const enum ContactAddressType { Work = 'work', Shipping = 'shipping', Temporary = 'temporary', Business = 'business', Personal = 'personal', Home = 'home', Other = 'other', Billing = 'billing' }
export const enum LeadLifecycleStatus { BadTiming = 'bad-timing', Open = 'open', Revisited = 'revisited', InProcess = 'in-process', AttemptedToContact = 'attempted-to-contact', Converted = 'converted', Unqualified = 'unqualified', Connected = 'connected', Lost = 'lost', New = 'new' }
export const enum ParticipantEngagementStatus { Banned = 'banned', Inactive = 'inactive', Left = 'left', Active = 'active', Guest = 'guest', Admin = 'admin', Moderator = 'moderator' }
export const enum ItemEntityStatus { Deleted = 'deleted', Active = 'active', Archived = 'archived', Pending = 'pending', Inactive = 'inactive', Completed = 'completed', Suspended = 'suspended' }
export const enum Currency { BGN = 'bgn', JEP = 'jep', USD = 'usd', JOD = 'jod', BSD = 'bsd', HNL = 'hnl', SSP = 'ssp', STN = 'stn', XOF = 'xof', MXN = 'mxn', JMD = 'jmd', KPW = 'kpw', TMT = 'tmt', FOK = 'fok', KZT = 'kzt', SDG = 'sdg', SYP = 'syp', BAM = 'bam', ZWL = 'zwl', KYD = 'kyd', KGS = 'kgs', MWK = 'mwk', YER = 'yer', KMF = 'kmf', TOP = 'top', SRD = 'srd', BOB = 'bob', PAB = 'pab', PGK = 'pgk', BIF = 'bif', BMD = 'bmd', ALL = 'all', KHR = 'khr', RUB = 'rub', NOK = 'nok', CHF = 'chf', KID = 'kid', SZL = 'szl', HRK = 'hrk', DKK = 'dkk', UYU = 'uyu', JPY = 'jpy', HUF = 'huf', ZMW = 'zmw', XAF = 'xaf', AMD = 'amd', BZD = 'bzd', BYN = 'byn', IMP = 'imp', UAH = 'uah', ILS = 'ils', MUR = 'mur', MMK = 'mmk', EGP = 'egp', UGX = 'ugx', IRR = 'irr', CLP = 'clp', SBD = 'sbd', UZS = 'uzs', GMD = 'gmd', GHS = 'ghs', SCR = 'scr', XDR = 'xdr', EUR = 'eur', CDF = 'cdf', LRD = 'lrd', BBD = 'bbd', IDR = 'idr', CAD = 'cad', MGA = 'mga', NIO = 'nio', NZD = 'nzd', ISK = 'isk', WST = 'wst', AWG = 'awg', MAD = 'mad', BWP = 'bwp', MOP = 'mop', AFN = 'afn', AOA = 'aoa', SHP = 'shp', SEK = 'sek', MDL = 'mdl', CUC = 'cuc', DOP = 'dop', FJD = 'fjd', PYG = 'pyg', SLL = 'sll', MVR = 'mvr', BND = 'bnd', CVE = 'cve', ERN = 'ern', GIP = 'gip', BRL = 'brl', PHP = 'php', GTQ = 'gtq', NGN = 'ngn', TZS = 'tzs', QAR = 'qar', DZD = 'dzd', DJF = 'djf', LBP = 'lbp', LKR = 'lkr', LYD = 'lyd', MYR = 'myr', THB = 'thb', PEN = 'pen', TRY = 'try', TTD = 'ttd', RSD = 'rsd', BDT = 'bdt', MNT = 'mnt', AED = 'aed', ARS = 'ars', BTN = 'btn', MZN = 'mzn', AUD = 'aud', CZK = 'czk', GEL = 'gel', NAD = 'nad', SOS = 'sos', VES = 'ves', RWF = 'rwf', VUV = 'vuv', PLN = 'pln', TWD = 'twd', GYD = 'gyd', TND = 'tnd', VND = 'vnd', KRW = 'krw', CNY = 'cny', COP = 'cop', GGP = 'ggp', ANG = 'ang', LSL = 'lsl', TVD = 'tvd', CUP = 'cup', KWD = 'kwd', MRU = 'mru', ZAR = 'zar', HTG = 'htg', NPR = 'npr', LAK = 'lak', PKR = 'pkr', TJS = 'tjs', SGD = 'sgd', KES = 'kes', AZN = 'azn', IQD = 'iqd', GNF = 'gnf', ETB = 'etb', INR = 'inr', FKP = 'fkp', SAR = 'sar', XPF = 'xpf', MKD = 'mkd', GBP = 'gbp', HKD = 'hkd', BHD = 'bhd', CRC = 'crc', OMR = 'omr', XCD = 'xcd', RON = 'ron' }
export const enum CustomerEligibilityStatus { Other = 'other', NewCustomers = 'new-customers', VipCustomers = 'vip-customers', SpecificConditions = 'specific-conditions', AllCustomers = 'all-customers', ReturningCustomers = 'returning-customers' }
export const enum ItemCondition { Used = 'used', Refurbished = 'refurbished', OpenBox = 'open-box', Damaged = 'damaged', New = 'new', LikeNew = 'like-new' }
export const enum TransactionType { Refund = 'refund', Withdrawal = 'withdrawal', Fee = 'fee', Transfer = 'transfer', Adjustment = 'adjustment', Charge = 'charge', Deposit = 'deposit', Payment = 'payment' }
export const enum EntityLifecycleStatus { Inactive = 'inactive', Preorder = 'preorder', Scheduled = 'scheduled', Archived = 'archived', Draft = 'draft', Active = 'active', Deleted = 'deleted' }
export const enum JournalEntryStatus { Posted = 'posted', Pending = 'pending', Draft = 'draft', Voided = 'voided', Corrected = 'corrected', Error = 'error' }
export const enum DayOfWeek { Tuesday = 'tuesday', Thursday = 'thursday', Friday = 'friday', Monday = 'monday', Wednesday = 'wednesday', Saturday = 'saturday', Sunday = 'sunday' }
export const enum AccountingAccountType { AssetOtherIntangibleAssets = 'asset::other-intangible-assets', OtherExpenseDepreciation = 'other-expense::depreciation', OtherCurrentLiabilitySocialSecurityAgencies = 'other-current-liability::social-security-agencies', ExpenseSundry = 'expense::sundry', OtherCurrentLiabilityRentsInTrustLiability = 'other-current-liability::rents-in-trust-liability', OtherExpenseIncomeTaxOtherExpense = 'other-expense::income-tax-other-expense', OtherIncomeDividendIncome = 'other-income::dividend-income', LiabilityAccrualsAndDeferredIncome = 'liability::accruals-and-deferred-income', OtherIncome = 'other-income', RevenueUnappliedCashPaymentIncome = 'revenue::unapplied-cash-payment-income', LiabilityNotesPayable = 'liability::notes-payable', OtherCurrentLiabilityTradeAndOtherPayables = 'other-current-liability::trade-and-other-payables', OtherExpenseVehicleLease = 'other-expense::vehicle-lease', OtherExpenseMatCredit = 'other-expense::mat-credit', AssetCumulativeDepreciationOnIntangibleAssets = 'asset::cumulative-depreciation-on-intangible-assets', AssetLicenses = 'asset::licenses', AssetOtherFixedAssets = 'asset::other-fixed-assets', AssetIntangibleAssets = 'asset::intangible-assets', AssetInvestmentMortgageRealEstateLoans = 'asset::investment-mortgage-real-estate-loans', ExpenseProjectStudiesSurveysAssessments = 'expense::project-studies-surveys-assessments', LiabilityShareholderNotesPayable = 'liability::shareholder-notes-payable', AssetRentsHeldInTrust = 'asset::rents-held-in-trust', RevenueSavingsByTaxScheme = 'revenue::savings-by-tax-scheme', LiabilityAccruedLongTermLiabilities = 'liability::accrued-long-term-liabilities', OtherCurrentLiabilityShortTermBorrowings = 'other-current-liability::short-term-borrowings', ExpenseLossOnDiscontinuedOperationsNetOfTax = 'expense::loss-on-discontinued-operations-net-of-tax', OtherCurrentLiabilityOtherCurrentLiabilities = 'other-current-liability::other-current-liabilities', AssetAssetsAvailableForSale = 'asset::assets-available-for-sale', RevenueSalesWholesale = 'revenue::sales-wholesale', ExpensePayrollExpenses = 'expense::payroll-expenses', EquityEquityInEarningsOfSubsidiuaries = 'equity::equity-in-earnings-of-subsidiuaries', AssetGoodwill = 'asset::goodwill', AssetOtherLongTermAssets = 'asset::other-long-term-assets', LiabilityAccountsPayable = 'liability::accounts-payable', OtherExpenseVehicleLoan = 'other-expense::vehicle-loan', OtherExpenseUtilities = 'other-expense::utilities', OtherIncomeGainLossOnSaleOfInvestments = 'other-income::gain-loss-on-sale-of-investments', OtherCurrentLiabilityPrepaidExpensesPayable = 'other-current-liability::prepaid-expenses-payable', EquityOpeningBalanceEquity = 'equity::opening-balance-equity', Equity = 'equity', CostOfGoodsSoldSuppliesMaterialsCogs = 'cost-of-goods-sold::supplies-materials-cogs', OtherCurrentLiabilityStaffAndRelatedLiabilityAccounts = 'other-current-liability::staff-and-related-liability-accounts', OtherIncomeOtherOperatingIncome = 'other-income::other-operating-income', ExpenseUnappliedCashBillPaymentExpense = 'expense::unapplied-cash-bill-payment-expense', OtherCurrentLiabilityLoanPayable = 'other-current-liability::loan-payable', AssetBank = 'asset::bank', OtherExpenseAmortization = 'other-expense::amortization', AssetOtherEarMarkedBankAccounts = 'asset::other-ear-marked-bank-accounts', LiabilityBankLoans = 'liability::bank-loans', OtherCurrentLiabilityPayrollClearing = 'other-current-liability::payroll-clearing', OtherExpenseRepairsAndMaintenance = 'other-expense::repairs-and-maintenance', ExpenseExtraordinaryCharges = 'expense::extraordinary-charges', OtherExpenseGasAndFuel = 'other-expense::gas-and-fuel', ExpenseEntertainmentMeals = 'expense::entertainment-meals', OtherCurrentLiabilityProvisionForWarrantyObligations = 'other-current-liability::provision-for-warranty-obligations', OtherExpensePenaltiesSettlements = 'other-expense::penalties-settlements', ExpenseDuesSubscriptions = 'expense::dues-subscriptions', ExpenseTravel = 'expense::travel', ExpenseBorrowingCost = 'expense::borrowing-cost', AssetFixedAssetPhotoVideo = 'asset::fixed-asset-photo-video', EquityCapitalReserves = 'equity::capital-reserves', OtherExpenseParkingAndTolls = 'other-expense::parking-and-tolls', ExpenseEntertainment = 'expense::entertainment', OtherExpenseVehicleInsurance = 'other-expense::vehicle-insurance', ExpenseOtherMiscellaneousServiceCost = 'expense::other-miscellaneous-service-cost', AssetCapitalWip = 'asset::capital-wip', RevenueRevenueGeneral = 'revenue::revenue-general', RevenueSalesOfProductIncome = 'revenue::sales-of-product-income', CostOfGoodsSoldFreightAndDeliveryCost = 'cost-of-goods-sold::freight-and-delivery-cost', CostOfGoodsSoldShippingFreightDeliveryCos = 'cost-of-goods-sold::shipping-freight-delivery-cos', LiabilityLongTermDebit = 'liability::long-term-debit', AssetBuildings = 'asset::buildings', EquityPartnerDistributions = 'equity::partner-distributions', EquityInvestmentGrants = 'equity::investment-grants', OtherCurrentLiabilityProvisionsCurrentLiabilities = 'other-current-liability::provisions-current-liabilities', EquityPreferredStock = 'equity::preferred-stock', AssetFixedAssetComputers = 'asset::fixed-asset-computers', RevenueDiscountsRefundsGiven = 'revenue::discounts-refunds-given', OtherCurrentLiabilityStateLocalIncomeTaxPayable = 'other-current-liability::state-local-income-tax-payable', OtherIncomeOtherMiscellaneousIncome = 'other-income::other-miscellaneous-income', ExpensePurchasesRebates = 'expense::purchases-rebates', OtherIncomeInterestEarned = 'other-income::interest-earned', ExpenseTravelExpensesSellingExpense = 'expense::travel-expenses-selling-expense', ExpenseOtherExternalServices = 'expense::other-external-services', OtherCurrentLiabilityCurrentLiabilities = 'other-current-liability::current-liabilities', OtherCurrentLiabilityDividendsPayable = 'other-current-liability::dividends-payable', EquityShareApplicationMoneyPendingAllotment = 'equity::share-application-money-pending-allotment', ExpenseExternalServices = 'expense::external-services', AssetShortTermLoansAndAdvancesToRelatedParties = 'asset::short-term-loans-and-advances-to-related-parties', ExpenseManagementCompensation = 'expense::management-compensation', EquityOwnersEquity = 'equity::owners-equity', OtherExpenseOtherHomeOfficeExpenses = 'other-expense::other-home-office-expenses', LiabilityOutstandingDuesMicroSmallEnterprise = 'liability::outstanding-dues-micro-small-enterprise', LiabilityLongTermLiability = 'liability::long-term-liability', ExpenseCommissionsAndFees = 'expense::commissions-and-fees', OtherCurrentLiabilityCurrentPortionOfObligationsUnderFinanceLeases = 'other-current-liability::current-portion-of-obligations-under-finance-leases', RevenueOwnWorkCapitalized = 'revenue::own-work-capitalized', OtherExpenseWashAndRoadServices = 'other-expense::wash-and-road-services', OtherExpenseDeferredTaxExpense = 'other-expense::deferred-tax-expense', AssetPrepaymentsAndAccruedIncome = 'asset::prepayments-and-accrued-income', EquityPaidInCapitalOrSurplus = 'equity::paid-in-capital-or-surplus', AssetProvisionsNonCurrentAssets = 'asset::provisions-non-current-assets', AssetLoansToOthers = 'asset::loans-to-others', EquityDividendDisbursed = 'equity::dividend-disbursed', ExpenseOtherBusinessExpenses = 'expense::other-business-expenses', LiabilityLiabilitiesRelatedToAssetsHeldForSale = 'liability::liabilities-related-to-assets-held-for-sale', OtherExpenseHomeOffice = 'other-expense::home-office', CostOfGoodsSoldCostOfSales = 'cost-of-goods-sold::cost-of-sales', RevenueServiceFeeIncome = 'revenue::service-fee-income', AssetAccumulatedDepreciation = 'asset::accumulated-depreciation', ExpenseOfficeExpenses = 'expense::office-expenses', ExpenseLegalProfessionalFees = 'expense::legal-professional-fees', ExpenseInterestPaid = 'expense::interest-paid', OtherCurrentLiabilityDutiesAndTaxes = 'other-current-liability::duties-and-taxes', AccountsReceivable = 'accounts-receivable', AssetInternalTransfers = 'asset::internal-transfers', AssetLoansToStockholders = 'asset::loans-to-stockholders', AssetInvestmentTaxExemptSecurities = 'asset::investment-tax-exempt-securities', AssetLongTermLoansAndAdvancesToRelatedParties = 'asset::long-term-loans-and-advances-to-related-parties', LiabilityLongTermEmployeeBenefitObligations = 'liability::long-term-employee-benefit-obligations', ExpenseEquipmentRental = 'expense::equipment-rental', AssetLandAsset = 'asset::land-asset', AssetNonCurrentAssets = 'asset::non-current-assets', AssetAccumulatedAmortizationOfOtherAssets = 'asset::accumulated-amortization-of-other-assets', AssetFixedAsset = 'asset::fixed-asset', ExpenseUtilities = 'expense::utilities', AssetShortTermInvestmentsInRelatedParties = 'asset::short-term-investments-in-related-parties', ExpenseIncomeTaxExpense = 'expense::income-tax-expense', OtherExpenseVehicle = 'other-expense::vehicle', OtherExpenseTaxRoundoffGainOrLoss = 'other-expense::tax-roundoff-gain-or-loss', AssetOtherAsset = 'asset::other-asset', RevenueOtherPrimaryIncome = 'revenue::other-primary-income', RevenueOtherCurrentOperatingIncome = 'revenue::other-current-operating-income', LiabilityProvisionForLiabilities = 'liability::provision-for-liabilities', AssetLoansToOfficers = 'asset::loans-to-officers', OtherExpenseVehicleRepairs = 'other-expense::vehicle-repairs', AssetDepletableAssets = 'asset::depletable-assets', LiabilityLongTermBorrowings = 'liability::long-term-borrowings', OtherCurrentLiabilityCurrentTaxLiability = 'other-current-liability::current-tax-liability', CostOfGoodsSoldCostOfLaborCos = 'cost-of-goods-sold::cost-of-labor-cos', OtherIncomeGainLossOnSaleOfFixedAssets = 'other-income::gain-loss-on-sale-of-fixed-assets', ExpenseRentOrLeaseOfBuildings = 'expense::rent-or-lease-of-buildings', LiabilityObligationsUnderFinanceLeases = 'liability::obligations-under-finance-leases', EquityPersonalExpense = 'equity::personal-expense', AssetProvisionsCurrentAssets = 'asset::provisions-current-assets', AssetFixedAssetSoftware = 'asset::fixed-asset-software', ExpenseTravelExpensesGeneralAndAdminExpenses = 'expense::travel-expenses-general-and-admin-expenses', LiabilityStaffAndRelatedLongTermLiabilityAccounts = 'liability::staff-and-related-long-term-liability-accounts', OtherCurrentLiabilityGlobalTaxSuspense = 'other-current-liability::global-tax-suspense', AssetSavings = 'asset::savings', ExpenseBadDebts = 'expense::bad-debts', RevenueSalesRetail = 'revenue::sales-retail', ExpenseShippingFreightDelivery = 'expense::shipping-freight-delivery', OtherCurrentLiabilityFederalIncomeTaxPayable = 'other-current-liability::federal-income-tax-payable', LiabilityProvisionsNonCurrentLiabilities = 'liability::provisions-non-current-liabilities', AssetFixedAssetPhone = 'asset::fixed-asset-phone', AssetLand = 'asset::land', OtherCurrentLiabilityAccruedLiabilities = 'other-current-liability::accrued-liabilities', AssetInventory = 'asset::inventory', EquityOtherFreeReserves = 'equity::other-free-reserves', EquityEstimatedTaxes = 'equity::estimated-taxes', AssetOtherCurrentAsset = 'asset::other-current-asset', AssetLeaseholdImprovements = 'asset::leasehold-improvements', EquityPartnerContributions = 'equity::partner-contributions', LiabilityAccruedVacationPayable = 'liability::accrued-vacation-payable', OtherCurrentLiabilityPayrollTaxPayable = 'other-current-liability::payroll-tax-payable', OtherCurrentLiabilityLineOfCredit = 'other-current-liability::line-of-credit', ExpenseTaxesPaid = 'expense::taxes-paid', OtherExpenseExtraordinaryItems = 'other-expense::extraordinary-items', EquityRetainedEarnings = 'equity::retained-earnings', EquityAccumulatedAdjustment = 'equity::accumulated-adjustment', OtherExpenseVehicleLoanInterest = 'other-expense::vehicle-loan-interest', CostOfGoodsSoldEquipmentRentalCos = 'cost-of-goods-sold::equipment-rental-cos', LiabilityDeferredTaxLiabilities = 'liability::deferred-tax-liabilities', OtherExpenseExceptionalItems = 'other-expense::exceptional-items', AssetFurnitureAndFixtures = 'asset::furniture-and-fixtures', EquityCalledUpShareCapital = 'equity::called-up-share-capital', OtherExpenseHomeOwnerRentalInsurance = 'other-expense::home-owner-rental-insurance', OtherExpenseRentAndLease = 'other-expense::rent-and-lease', ExpenseCharitableContributions = 'expense::charitable-contributions', RevenueNonProfitIncome = 'revenue::non-profit-income', OtherIncomeLossOnDisposalOfAssets = 'other-income::loss-on-disposal-of-assets', AssetTrustAccounts = 'asset::trust-accounts', ExpenseTravelMeals = 'expense::travel-meals', OtherCurrentLiabilityGlobalTaxPayable = 'other-current-liability::global-tax-payable', OtherExpenseVehicleRegistration = 'other-expense::vehicle-registration', AssetAccumulatedAmortization = 'asset::accumulated-amortization', EquityTreasuryStock = 'equity::treasury-stock', ExpenseDistributionCosts = 'expense::distribution-costs', AssetMachineryAndEquipment = 'asset::machinery-and-equipment', ExpenseBankCharges = 'expense::bank-charges', EquityAccumulatedOtherComprehensiveIncome = 'equity::accumulated-other-comprehensive-income', ExpenseAmortizationExpense = 'expense::amortization-expense', Asset = 'asset', AssetAssetsInCourseOfConstruction = 'asset::assets-in-course-of-construction', AssetOrganizationalCosts = 'asset::organizational-costs', AssetPrepaidExpenses = 'asset::prepaid-expenses', OtherExpenseMortgageInterest = 'other-expense::mortgage-interest', ExpenseAppropriationsToDepreciation = 'expense::appropriations-to-depreciation', AssetAccumulatedDepletion = 'asset::accumulated-depletion', LiabilityGovernmentAndOtherPublicAuthorities = 'liability::government-and-other-public-authorities', AssetOtherCurrentAssets = 'asset::other-current-assets', Expense = 'expense', OtherExpenseExchangeGainOrLoss = 'other-expense::exchange-gain-or-loss', AssetInvestments = 'asset::investments', ExpenseCostOfLabor = 'expense::cost-of-labor', AssetFixedAssetOtherToolsEquipment = 'asset::fixed-asset-other-tools-equipment', ExpenseGlobalTaxExpense = 'expense::global-tax-expense', AssetExpenditureAuthorisationsAndLettersOfCredit = 'asset::expenditure-authorisations-and-letters-of-credit', AssetCashAndCashEquivalents = 'asset::cash-and-cash-equivalents', EquityMoneyReceivedAgainstShareWarrants = 'equity::money-received-against-share-warrants', AssetChecking = 'asset::checking', AssetDevelopmentCosts = 'asset::development-costs', AssetInvestmentUsGovernmentObligations = 'asset::investment-us-government-obligations', AssetGlobalTaxDeferred = 'asset::global-tax-deferred', LiabilityGroupAndAssociates = 'liability::group-and-associates', EquityPartnersEquity = 'equity::partners-equity', LiabilityDebtsRelatedToParticipatingInterests = 'liability::debts-related-to-participating-interests', OtherCurrentLiabilityCurrentPortionEmployeeBenefitsObligations = 'other-current-liability::current-portion-employee-benefits-obligations', OtherCurrentLiabilitySundryDebtorsAndCreditors = 'other-current-liability::sundry-debtors-and-creditors', LiabilityOutstandingDuesOtherThanMicroSmallEnterprise = 'liability::outstanding-dues-other-than-micro-small-enterprise', ExpenseShippingAndDeliveryExpense = 'expense::shipping-and-delivery-expense', OtherIncomeTaxExemptInterest = 'other-income::tax-exempt-interest', OtherExpensePriorPeriodItems = 'other-expense::prior-period-items', AssetInvestmentOther = 'asset::investment-other', AssetParticipatingInterests = 'asset::participating-interests', EquityPersonalIncome = 'equity::personal-income', AssetTradeAndOtherReceivables = 'asset::trade-and-other-receivables', ExpenseStaffCosts = 'expense::staff-costs', RevenueCashReceiptIncome = 'revenue::cash-receipt-income', CostOfGoodsSold = 'cost-of-goods-sold', AssetDeferredTax = 'asset::deferred-tax', AssetCashOnHand = 'asset::cash-on-hand', AssetCalledUpShareCapitalNotPaid = 'asset::called-up-share-capital-not-paid', OtherIncomeOtherInvestmentIncome = 'other-income::other-investment-income', ExpenseOtherCurrentOperatingCharges = 'expense::other-current-operating-charges', CostOfGoodsSoldOtherCostsOfServiceCos = 'cost-of-goods-sold::other-costs-of-service-cos', AssetVehicles = 'asset::vehicles', AssetUndepositedFunds = 'asset::undeposited-funds', OtherExpense = 'other-expense', AssetBalWithGovtAuthorities = 'asset::bal-with-govt-authorities', AssetEmployeeCashAdvances = 'asset::employee-cash-advances', OtherCurrentLiabilityTrustAccountsLiabilities = 'other-current-liability::trust-accounts-liabilities', RevenueIncome = 'revenue::income', OtherExpenseOtherVehicleExpenses = 'other-expense::other-vehicle-expenses', AssetAssetsHeldForSale = 'asset::assets-held-for-sale', AssetOtherLongTermLoansAndAdvances = 'asset::other-long-term-loans-and-advances', LiabilityOtherLongTermLiabilities = 'liability::other-long-term-liabilities', AssetMoneyMarket = 'asset::money-market', AssetIntangibleAssetsUnderDevelopment = 'asset::intangible-assets-under-development', ExpensePromotionalMeals = 'expense::promotional-meals', AssetAvailableForSaleFinancialAssets = 'asset::available-for-sale-financial-assets', EquityCommonStock = 'equity::common-stock', OtherExpenseDepletion = 'other-expense::depletion', OtherCurrentLiability = 'other-current-liability', OtherCurrentLiabilityDirectDepositPayable = 'other-current-liability::direct-deposit-payable', RevenueOperatingGrants = 'revenue::operating-grants', OtherCurrentLiabilityInterestPayables = 'other-current-liability::interest-payables', AssetRetainage = 'asset::retainage', OtherIncomeUnrealisedLossOnSecuritiesNetOfTax = 'other-income::unrealised-loss-on-securities-net-of-tax', AssetOtherConsumables = 'asset::other-consumables', EquityHealthcare = 'equity::healthcare', ExpenseSuppliesMaterials = 'expense::supplies-materials', AssetLeaseBuyout = 'asset::lease-buyout', LiabilityCreditCard = 'liability::credit-card', ExpenseAuto = 'expense::auto', AssetProvisionsFixedAssets = 'asset::provisions-fixed-assets', AssetSecurityDeposits = 'asset::security-deposits', ExpenseOtherSellingExpenses = 'expense::other-selling-expenses', OtherCurrentLiabilitySalesTaxPayable = 'other-current-liability::sales-tax-payable', ExpenseFinanceCosts = 'expense::finance-costs', ExpenseRepairMaintenance = 'expense::repair-maintenance', ExpenseInsurance = 'expense::insurance', AssetAllowanceForBadDebts = 'asset::allowance-for-bad-debts', ExpenseAdvertisingPromotional = 'expense::advertising-promotional', AssetOtherLongTermInvestments = 'asset::other-long-term-investments', AssetLongTermInvestments = 'asset::long-term-investments', ExpenseOfficeGeneralAdministrativeExpenses = 'expense::office-general-administrative-expenses', ExpenseOtherRentalCosts = 'expense::other-rental-costs', AssetGlobalTaxRefund = 'asset::global-tax-refund', OtherExpenseOtherMiscellaneousExpense = 'other-expense::other-miscellaneous-expense', AssetFixedAssetFurniture = 'asset::fixed-asset-furniture', EquityShareCapital = 'equity::share-capital', EquityFunds = 'equity::funds', OtherCurrentLiabilityInsurancePayable = 'other-current-liability::insurance-payable', AssetFixedAssetCopiers = 'asset::fixed-asset-copiers', LiabilityOtherLongTermProvisions = 'liability::other-long-term-provisions' }
export const enum MessageReadStatus { Failed = 'failed', Unsent = 'unsent', Sent = 'sent', Read = 'read', Delivered = 'delivered' }
export const enum MessageDeliveryStatus { Undeliverable = 'undeliverable', Failed = 'failed', Error = 'error', Sent = 'sent', Delivered = 'delivered', Pending = 'pending', Read = 'read' }
export const enum SupportQueryType { Bug = 'bug', FeatureRequest = 'feature-request', Incident = 'incident', Feedback = 'feedback', Problem = 'problem', Question = 'question', Task = 'task' }
export const enum ImageMimeType { ImageSvgXml = 'image/svg+xml', ImageJpeg = 'image/jpeg', ImageBmp = 'image/bmp', ImageGif = 'image/gif', ImageTiff = 'image/tiff', ImageWebp = 'image/webp', ImageHeic = 'image/heic', ImagePng = 'image/png' }
export const enum OrderingCriteria { Alphabetical = 'alphabetical', PriceDescending = 'price-descending', Rating = 'rating', Relevance = 'relevance', PriceAscending = 'price-ascending', CreationDate = 'creation-date', Manual = 'manual', Popularity = 'popularity' }
export const enum ChatType { Private = 'private', Public = 'public', Group = 'group' }
export const enum ItemAvailabilityStatus { OutOfStock = 'out-of-stock', Active = 'active', Discontinued = 'discontinued', Inactive = 'inactive' }
export const enum FinancialAccountStatus { Active = 'active', Frozen = 'frozen', Suspended = 'suspended', Inactive = 'inactive', UnderReview = 'under-review', Delinquent = 'delinquent', Closed = 'closed' }
export const enum TransactionStatus { Succeeded = 'succeeded', Failed = 'failed', Error = 'error', Pending = 'pending', Initiated = 'initiated', InProgress = 'in-progress', Cancelled = 'cancelled' }
export const enum CreditNoteStatus { Issued = 'issued', Draft = 'draft', Disputed = 'disputed', Pending = 'pending', Cancelled = 'cancelled', Completed = 'completed', Void = 'void', Revised = 'revised', Applied = 'applied' }
export const enum PaymentTerm { Net = 'net', UponCompletion = 'upon-completion', CashWithOrder = 'cash-with-order', Custom = 'custom', CashBeforeShipment = 'cash-before-shipment', Installment = 'installment', Net60 = 'net-60', DueOnReceipt = 'due-on-receipt', Net30 = 'net-30', Prepayment = 'prepayment', CashOnDelivery = 'cash-on-delivery', Prepaid = 'prepaid', CashInAdvance = 'cash-in-advance', DueEndOfMonth = 'due-end-of-month', DeferredPayment = 'deferred-payment', Net90 = 'net-90' }
export const enum EmploymentAndCandidateStatus { Other = 'other', OnLeave = 'on-leave', Terminated = 'terminated', New = 'new', InReview = 'in-review', Hired = 'hired', Inactive = 'inactive', Active = 'active', Interviewing = 'interviewing', OfferExtended = 'offer-extended', NotSelected = 'not-selected' }
export const enum OrganizationalRole { Director = 'director', Supervisor = 'supervisor', Contractor = 'contractor', Admin = 'admin', Other = 'other', Manager = 'manager', Employee = 'employee' }
export const enum CustomerStatus { Inactive = 'inactive', Archived = 'archived', Active = 'active', Pending = 'pending', Suspended = 'suspended' }
export const enum SocialPlatform { Reddit = 'reddit', Twitter = 'twitter', Linkedin = 'linkedin', Facebook = 'facebook', Snapchat = 'snapchat', Skype = 'skype', Youtube = 'youtube', Tiktok = 'tiktok', X = 'x', Instagram = 'instagram', Tumblr = 'tumblr', Pinterest = 'pinterest', OtherSocialPlatform = 'other-social-platform' }
export const enum ConversationStatus { Active = 'active', Archived = 'archived', Deleted = 'deleted' }
export const enum CommunicationRole { Moderator = 'moderator', Member = 'member', System = 'system', Owner = 'owner', Group = 'group', User = 'user', Service = 'service', Guest = 'guest', Channel = 'channel', Bot = 'bot', Assistant = 'assistant', Admin = 'admin' }
export const enum LifecycleStatus { Issued = 'issued', Cancelled = 'cancelled', Expired = 'expired', Suspended = 'suspended', Active = 'active', Redeemed = 'redeemed' }
export const enum PaymentMethod { MobileWallet = 'mobile-wallet', MobilePayment = 'mobile-payment', Paypal = 'paypal', CreditCard = 'credit-card', Other = 'other', Check = 'check', Cryptocurrency = 'cryptocurrency', Cash = 'cash', DebitCard = 'debit-card', BankTransfer = 'bank-transfer', CashOnDelivery = 'cash-on-delivery' }
export const enum FinancialTransactionStatus { Cancelled = 'cancelled', Refunded = 'refunded', Authorized = 'authorized', SettlementInProgress = 'settlement-in-progress', Pending = 'pending', Cleared = 'cleared', Failed = 'failed', Disputed = 'disputed' }
export const enum AuditOpinionType { Disclaimer = 'disclaimer', Adverse = 'adverse', Unqualified = 'unqualified', Qualified = 'qualified' }
export const enum InventoryStorageType { DropShipper = 'drop-shipper', Other = 'other', Consignment = 'consignment', OnlineMarketplace = 'online-marketplace', RetailStore = 'retail-store', Warehouse = 'warehouse', DistributionCenter = 'distribution-center' }
export const enum VisibilityScope { Private = 'private', Web = 'web', Global = 'global', App = 'app', Internal = 'internal' }
export const enum PaymentStatus { Processing = 'processing', Adjusted = 'adjusted', Pending = 'pending', Overdue = 'overdue', Voided = 'voided', Disputed = 'disputed', Partial = 'partial', Refunded = 'refunded', Authorized = 'authorized', Error = 'error', PartiallyRefunded = 'partially-refunded', Paid = 'paid', Succeeded = 'succeeded', Failed = 'failed', Cancelled = 'cancelled', Deleted = 'deleted', Submitted = 'submitted', Draft = 'draft' }
export const enum TransactionChannel { BankBranch = 'bank-branch', InPerson = 'in-person', Atm = 'atm', Mobile = 'mobile', Telephone = 'telephone', Mail = 'mail', Other = 'other', Online = 'online' }
export const enum FinancialDisputeStatus { Closed = 'closed', UnderReview = 'under-review', ChargeRefunded = 'charge-refunded', Won = 'won', AwaitingEvidence = 'awaiting-evidence', NeedsResponse = 'needs-response', Lost = 'lost', Escalated = 'escalated' }
export const enum DeviceUsageType { Other = 'other', Business = 'business', Industrial = 'industrial', Personal = 'personal', Educational = 'educational', Healthcare = 'healthcare', Home = 'home' }
export const enum FinancialTransactionType { Other = 'other', Dividend = 'dividend', Spend = 'spend', ReceiveOverpayment = 'receive-overpayment', Refund = 'refund', Sale = 'sale', Chargeback = 'chargeback', Receive = 'receive', Interest = 'interest', ReceivePrepayment = 'receive-prepayment', Withdrawal = 'withdrawal', Transfer = 'transfer', Payment = 'payment', Charge = 'charge', Deposit = 'deposit', SpendPrepayment = 'spend-prepayment', SpendOverpayment = 'spend-overpayment', Fee = 'fee', Adjustment = 'adjustment' }
export const enum AccessControlModel { Dac = 'dac', Mac = 'mac', Custom = 'custom', Abac = 'abac', None = 'none', Rbac = 'rbac' }
export const enum ParticipantType { Organization = 'organization', User = 'user', Group = 'group', Team = 'team', ExternalParticipant = 'external-participant' }
export const enum PriorityLevel { Low = 'low', Urgent = 'urgent', Elevated = 'elevated', Medium = 'medium', High = 'high' }
export const enum PrerequisiteRangeType { Subtotal = 'subtotal', Quantity = 'quantity', ShippingPrice = 'shipping-price' }
export const enum ContentVisibility { Internal = 'internal', Protected = 'protected', Private = 'private', Public = 'public', Shared = 'shared' }
export const enum EntityCategory { Owner = 'owner', Document = 'document', Message = 'message', Task = 'task', User = 'user', Link = 'link', Project = 'project', Event = 'event', Person = 'person', Other = 'other' }
export const enum GenderIdentity { Female = 'female', PreferNotToSay = 'prefer-not-to-say', Other = 'other', Male = 'male' }
export const enum CommunicationMethod { PushNotification = 'push-notification', SocialMedia = 'social-media', Other = 'other', VideoCall = 'video-call', Mail = 'mail', Email = 'email', Phone = 'phone', Text = 'text', InPerson = 'in-person', Sms = 'sms', InstantMessage = 'instant-message' }
export const enum EmailCategoryType { Educational = 'educational', Transactional = 'transactional', Personal = 'personal', Promotional = 'promotional', Business = 'business', Governmental = 'governmental', Spam = 'spam', Other = 'other' }
export const enum UniversalIdentifierType { String = 'string', Number = 'number', Email = 'email', Uuid = 'uuid', Url = 'url' }
export const enum TaskStatus { InProgress = 'in-progress', Done = 'done', Blocked = 'blocked', OnHold = 'on-hold', Cancelled = 'cancelled', Todo = 'todo' }
export const enum UserStatus { Deleted = 'deleted', Inactive = 'inactive', Banned = 'banned', Active = 'active', WaitListed = 'wait-listed', Suspended = 'suspended', Archived = 'archived', Verified = 'verified', Pending = 'pending' }
export const enum PromotionType { FixedAmount = 'fixed-amount', RewardPoints = 'reward-points', Percentage = 'percentage', FreeShipping = 'free-shipping', Other = 'other', BuyOneGetOne = 'buy-one-get-one' }
export const enum MimeType { ImageGif = 'image/gif', ImageSvgXml = 'image/svg+xml', ImageWebp = 'image/webp', ImagePng = 'image/png', ImageJpeg = 'image/jpeg' }
export const enum TaxType { Variable = 'variable', Inclusive = 'inclusive', Additive = 'additive' }
export const enum ModifierType { List = 'list', Text = 'text' }
export const enum CardType { Credit = 'credit', Debit = 'debit', UnknownCard = 'unknown-card' }
export const enum PrepaidType { Prepaid = 'prepaid', UnknownPrepaid = 'unknown-prepaid', NotPrepaid = 'not-prepaid' }
export const enum EntryMethod { Keyed = 'keyed', OnFile = 'on-file', Emv = 'emv', Swiped = 'swiped', Contactless = 'contactless' }
export const enum CvvStatus { NotChecked = 'not-checked', Accepted = 'accepted', Rejected = 'rejected' }
export const enum AvcStatus { Rejected = 'rejected', Accepted = 'accepted', NotChecked = 'not-checked' }
export const enum CreditType { Customer = 'customer', Prepayment = 'prepayment', Supplier = 'supplier', Overpayment = 'overpayment', Goodwill = 'goodwill' }
export const enum CallDirection { Unknown = 'unknown', Inbound = 'inbound', Outbound = 'outbound', Conference = 'conference' }
export const enum SpeakerRole { Attendee = 'attendee', Invitee = 'invitee' }
export const enum FileType { File = 'file', Folder = 'folder', Url = 'url' }
