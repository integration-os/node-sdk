// This file is auto-generated. Do not edit it manually.

export interface Drives { description?: string;
    updatedAt?: string;
    name?: string;
    model?: string;
    id?: string;
    createdAt?: string }
export interface Folders { name?: string;
    description?: string;
    size?: number;
    parent?: ParentFolders;
    downloadable?: boolean;
    createdAt?: string;
    updatedAt?: string;
    id?: string;
    permissions?: Permissions;
    owner?: FileOwners;
    path?: string;
    model?: string }
export interface Files { downloadable?: boolean;
    owner?: FileOwners;
    name?: string;
    id?: string;
    permissions?: Permissions;
    size?: number;
    exportable?: boolean;
    updatedAt?: string;
    parent?: ParentFolders;
    extension?: string;
    mimeType?: string;
    description?: string;
    createdAt?: string;
    type?: FileType;
    exportFormats?: string;
    downloadUrl?: string;
    path?: string;
    content?: string;
    model?: string }
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
export const enum AppliesTo { AllItems = 'all-items', SpecificCategories = 'specific-categories', SpecificItems = 'specific-items' }
export const enum TransactionMethod { Mobile = 'mobile', Telephone = 'telephone', Online = 'online', BankBranch = 'bank-branch', Atm = 'atm', Mail = 'mail' }
export const enum ChannelAvailability { AllChannels = 'all-channels', InApp = 'in-app', Online = 'online', InStore = 'in-store' }
export const enum CustomerSelection { All = 'all', Prerequisite = 'prerequisite' }
export const enum SkuValidation { LocalUnique = 'local-unique', None = 'none', GlobalUnique = 'global-unique' }
export const enum MinimumRequirements { None = 'none', MinimumQuantityOfItems = 'minimum-quantity-of-items', MinimumPurchaseAmount = 'minimum-purchase-amount' }
export const enum Status { Active = 'active', Expired = 'expired', Scheduled = 'scheduled' }
export const enum Gender { Male = 'male', Other = 'other', PreferNotToSay = 'prefer not to say', Female = 'female' }
export const enum AccountType { AssetTradeAndOtherReceivables = 'asset::trade-and-other-receivables', AssetProvisionsCurrentAssets = 'asset::provisions-current-assets', OtherExpenseOtherHomeOfficeExpenses = 'other-expense::other-home-office-expenses', OtherIncome = 'other-income', AssetAccumulatedDepreciation = 'asset::accumulated-depreciation', EquityPersonalIncome = 'equity::personal-income', RevenueSalesWholesale = 'revenue::sales-wholesale', LiabilityStaffAndRelatedLongTermLiabilityAccounts = 'liability::staff-and-related-long-term-liability-accounts', OtherExpenseVehicleLoanInterest = 'other-expense::vehicle-loan-interest', AccountsReceivable = 'accounts-receivable', OtherCurrentLiabilityAccruedLiabilities = 'other-current-liability::accrued-liabilities', EquityCommonStock = 'equity::common-stock', AssetLoansToStockholders = 'asset::loans-to-stockholders', ExpenseCharitableContributions = 'expense::charitable-contributions', OtherIncomeTaxExemptInterest = 'other-income::tax-exempt-interest', AssetParticipatingInterests = 'asset::participating-interests', OtherCurrentLiabilityPrepaidExpensesPayable = 'other-current-liability::prepaid-expenses-payable', OtherIncomeInterestEarned = 'other-income::interest-earned', LiabilityGroupAndAssociates = 'liability::group-and-associates', ExpenseOtherMiscellaneousServiceCost = 'expense::other-miscellaneous-service-cost', LiabilityBankLoans = 'liability::bank-loans', ExpenseRepairMaintenance = 'expense::repair-maintenance', OtherExpenseVehicleRepairs = 'other-expense::vehicle-repairs', RevenueSavingsByTaxScheme = 'revenue::savings-by-tax-scheme', AssetInvestments = 'asset::investments', AssetFixedAssetComputers = 'asset::fixed-asset-computers', AssetIntangibleAssetsUnderDevelopment = 'asset::intangible-assets-under-development', EquityDividendDisbursed = 'equity::dividend-disbursed', ExpenseFinanceCosts = 'expense::finance-costs', ExpenseShippingAndDeliveryExpense = 'expense::shipping-and-delivery-expense', ExpenseAuto = 'expense::auto', CostOfGoodsSoldSuppliesMaterialsCogs = 'cost-of-goods-sold::supplies-materials-cogs', AssetGlobalTaxDeferred = 'asset::global-tax-deferred', ExpenseOtherBusinessExpenses = 'expense::other-business-expenses', ExpenseOtherSellingExpenses = 'expense::other-selling-expenses', LiabilityDebtsRelatedToParticipatingInterests = 'liability::debts-related-to-participating-interests', OtherCurrentLiabilityCurrentLiabilities = 'other-current-liability::current-liabilities', EquityPaidInCapitalOrSurplus = 'equity::paid-in-capital-or-surplus', AssetProvisionsFixedAssets = 'asset::provisions-fixed-assets', LiabilityProvisionsNonCurrentLiabilities = 'liability::provisions-non-current-liabilities', OtherCurrentLiabilityGlobalTaxPayable = 'other-current-liability::global-tax-payable', OtherExpenseHomeOwnerRentalInsurance = 'other-expense::home-owner-rental-insurance', OtherCurrentLiabilityProvisionForWarrantyObligations = 'other-current-liability::provision-for-warranty-obligations', RevenueOwnWorkCapitalized = 'revenue::own-work-capitalized', ExpenseExternalServices = 'expense::external-services', AssetInventory = 'asset::inventory', AssetMachineryAndEquipment = 'asset::machinery-and-equipment', ExpenseTravelMeals = 'expense::travel-meals', EquityEquityInEarningsOfSubsidiuaries = 'equity::equity-in-earnings-of-subsidiuaries', EquityHealthcare = 'equity::healthcare', ExpenseGlobalTaxExpense = 'expense::global-tax-expense', RevenueCashReceiptIncome = 'revenue::cash-receipt-income', OtherExpenseOtherMiscellaneousExpense = 'other-expense::other-miscellaneous-expense', ExpenseEntertainmentMeals = 'expense::entertainment-meals', AssetCashOnHand = 'asset::cash-on-hand', AssetFixedAssetSoftware = 'asset::fixed-asset-software', EquityOpeningBalanceEquity = 'equity::opening-balance-equity', ExpenseUnappliedCashBillPaymentExpense = 'expense::unapplied-cash-bill-payment-expense', AssetProvisionsNonCurrentAssets = 'asset::provisions-non-current-assets', EquityOwnersEquity = 'equity::owners-equity', ExpenseManagementCompensation = 'expense::management-compensation', AssetBuildings = 'asset::buildings', AssetLeaseholdImprovements = 'asset::leasehold-improvements', OtherIncomeLossOnDisposalOfAssets = 'other-income::loss-on-disposal-of-assets', OtherCurrentLiabilityCurrentTaxLiability = 'other-current-liability::current-tax-liability', OtherCurrentLiabilityGlobalTaxSuspense = 'other-current-liability::global-tax-suspense', OtherIncomeOtherInvestmentIncome = 'other-income::other-investment-income', OtherIncomeOtherOperatingIncome = 'other-income::other-operating-income', CostOfGoodsSoldShippingFreightDeliveryCos = 'cost-of-goods-sold::shipping-freight-delivery-cos', EquityFunds = 'equity::funds', AssetInvestmentOther = 'asset::investment-other', EquityAccumulatedAdjustment = 'equity::accumulated-adjustment', ExpenseStaffCosts = 'expense::staff-costs', AssetBank = 'asset::bank', LiabilityLongTermBorrowings = 'liability::long-term-borrowings', ExpenseInterestPaid = 'expense::interest-paid', Asset = 'asset', AssetInvestmentMortgageRealEstateLoans = 'asset::investment-mortgage-real-estate-loans', EquityCapitalReserves = 'equity::capital-reserves', OtherExpenseDepletion = 'other-expense::depletion', OtherCurrentLiabilityRentsInTrustLiability = 'other-current-liability::rents-in-trust-liability', AssetRentsHeldInTrust = 'asset::rents-held-in-trust', OtherCurrentLiabilityDirectDepositPayable = 'other-current-liability::direct-deposit-payable', AssetFixedAssetCopiers = 'asset::fixed-asset-copiers', OtherCurrentLiability = 'other-current-liability', AssetGoodwill = 'asset::goodwill', RevenueDiscountsRefundsGiven = 'revenue::discounts-refunds-given', AssetOtherIntangibleAssets = 'asset::other-intangible-assets', Equity = 'equity', EquityPersonalExpense = 'equity::personal-expense', LiabilityObligationsUnderFinanceLeases = 'liability::obligations-under-finance-leases', OtherCurrentLiabilityShortTermBorrowings = 'other-current-liability::short-term-borrowings', ExpenseTravelExpensesSellingExpense = 'expense::travel-expenses-selling-expense', ExpenseExtraordinaryCharges = 'expense::extraordinary-charges', LiabilityOutstandingDuesMicroSmallEnterprise = 'liability::outstanding-dues-micro-small-enterprise', ExpenseBadDebts = 'expense::bad-debts', ExpenseOtherCurrentOperatingCharges = 'expense::other-current-operating-charges', AssetAssetsHeldForSale = 'asset::assets-held-for-sale', AssetAccumulatedAmortizationOfOtherAssets = 'asset::accumulated-amortization-of-other-assets', OtherExpenseGasAndFuel = 'other-expense::gas-and-fuel', ExpenseInsurance = 'expense::insurance', OtherCurrentLiabilityInsurancePayable = 'other-current-liability::insurance-payable', LiabilityLongTermEmployeeBenefitObligations = 'liability::long-term-employee-benefit-obligations', AssetOtherCurrentAssets = 'asset::other-current-assets', LiabilityAccrualsAndDeferredIncome = 'liability::accruals-and-deferred-income', AssetChecking = 'asset::checking', OtherCurrentLiabilityCurrentPortionOfObligationsUnderFinanceLeases = 'other-current-liability::current-portion-of-obligations-under-finance-leases', AssetGlobalTaxRefund = 'asset::global-tax-refund', OtherExpenseIncomeTaxOtherExpense = 'other-expense::income-tax-other-expense', OtherExpensePenaltiesSettlements = 'other-expense::penalties-settlements', ExpenseOfficeExpenses = 'expense::office-expenses', OtherExpenseVehicle = 'other-expense::vehicle', RevenueUnappliedCashPaymentIncome = 'revenue::unapplied-cash-payment-income', CostOfGoodsSoldCostOfLaborCos = 'cost-of-goods-sold::cost-of-labor-cos', EquityTreasuryStock = 'equity::treasury-stock', AssetDepletableAssets = 'asset::depletable-assets', AssetVehicles = 'asset::vehicles', AssetCumulativeDepreciationOnIntangibleAssets = 'asset::cumulative-depreciation-on-intangible-assets', AssetFixedAssetPhotoVideo = 'asset::fixed-asset-photo-video', ExpenseDuesSubscriptions = 'expense::dues-subscriptions', ExpenseBankCharges = 'expense::bank-charges', ExpenseSuppliesMaterials = 'expense::supplies-materials', AssetAccumulatedAmortization = 'asset::accumulated-amortization', Liability = 'liability', AssetCashAndCashEquivalents = 'asset::cash-and-cash-equivalents', AssetOtherConsumables = 'asset::other-consumables', CostOfGoodsSoldCostOfSales = 'cost-of-goods-sold::cost-of-sales', EquityAccumulatedOtherComprehensiveIncome = 'equity::accumulated-other-comprehensive-income', OtherExpenseDepreciation = 'other-expense::depreciation', OtherCurrentLiabilitySalesTaxPayable = 'other-current-liability::sales-tax-payable', OtherExpenseHomeOffice = 'other-expense::home-office', RevenueIncome = 'revenue::income', AssetAllowanceForBadDebts = 'asset::allowance-for-bad-debts', AssetMoneyMarket = 'asset::money-market', OtherCurrentLiabilityInterestPayables = 'other-current-liability::interest-payables', AssetLicenses = 'asset::licenses', LiabilityOutstandingDuesOtherThanMicroSmallEnterprise = 'liability::outstanding-dues-other-than-micro-small-enterprise', ExpenseLossOnDiscontinuedOperationsNetOfTax = 'expense::loss-on-discontinued-operations-net-of-tax', CostOfGoodsSold = 'cost-of-goods-sold', EquityOtherFreeReserves = 'equity::other-free-reserves', OtherExpenseExtraordinaryItems = 'other-expense::extraordinary-items', OtherExpenseUtilities = 'other-expense::utilities', ExpenseTravelExpensesGeneralAndAdminExpenses = 'expense::travel-expenses-general-and-admin-expenses', LiabilityLongTermLiability = 'liability::long-term-liability', ExpenseAdvertisingPromotional = 'expense::advertising-promotional', ExpenseIncomeTaxExpense = 'expense::income-tax-expense', LiabilityAccruedLongTermLiabilities = 'liability::accrued-long-term-liabilities', OtherCurrentLiabilityOtherCurrentLiabilities = 'other-current-liability::other-current-liabilities', AssetTrustAccounts = 'asset::trust-accounts', AssetOtherAsset = 'asset::other-asset', OtherExpenseVehicleLease = 'other-expense::vehicle-lease', OtherCurrentLiabilitySundryDebtorsAndCreditors = 'other-current-liability::sundry-debtors-and-creditors', RevenueSalesRetail = 'revenue::sales-retail', ExpenseEntertainment = 'expense::entertainment', LiabilityAccruedVacationPayable = 'liability::accrued-vacation-payable', ExpenseEquipmentRental = 'expense::equipment-rental', LiabilityCreditCard = 'liability::credit-card', AssetExpenditureAuthorisationsAndLettersOfCredit = 'asset::expenditure-authorisations-and-letters-of-credit', AssetInvestmentUsGovernmentObligations = 'asset::investment-us-government-obligations', AssetShortTermInvestmentsInRelatedParties = 'asset::short-term-investments-in-related-parties', AssetLongTermLoansAndAdvancesToRelatedParties = 'asset::long-term-loans-and-advances-to-related-parties', AssetIntangibleAssets = 'asset::intangible-assets', EquityInvestmentGrants = 'equity::investment-grants', AssetLongTermInvestments = 'asset::long-term-investments', ExpenseDistributionCosts = 'expense::distribution-costs', OtherCurrentLiabilityPayrollClearing = 'other-current-liability::payroll-clearing', AssetBalWithGovtAuthorities = 'asset::bal-with-govt-authorities', EquityShareCapital = 'equity::share-capital', OtherCurrentLiabilityCurrentPortionEmployeeBenefitsObligations = 'other-current-liability::current-portion-employee-benefits-obligations', OtherCurrentLiabilitySocialSecurityAgencies = 'other-current-liability::social-security-agencies', AssetEmployeeCashAdvances = 'asset::employee-cash-advances', AssetAccumulatedDepletion = 'asset::accumulated-depletion', AssetFixedAsset = 'asset::fixed-asset', EquityEstimatedTaxes = 'equity::estimated-taxes', ExpenseAmortizationExpense = 'expense::amortization-expense', OtherCurrentLiabilityLineOfCredit = 'other-current-liability::line-of-credit', OtherExpenseTaxRoundoffGainOrLoss = 'other-expense::tax-roundoff-gain-or-loss', LiabilityLiabilitiesRelatedToAssetsHeldForSale = 'liability::liabilities-related-to-assets-held-for-sale', OtherExpenseRepairsAndMaintenance = 'other-expense::repairs-and-maintenance', AssetDeferredTax = 'asset::deferred-tax', CostOfGoodsSoldEquipmentRentalCos = 'cost-of-goods-sold::equipment-rental-cos', ExpenseLegalProfessionalFees = 'expense::legal-professional-fees', AssetFixedAssetPhone = 'asset::fixed-asset-phone', AssetLandAsset = 'asset::land-asset', AssetInvestmentTaxExemptSecurities = 'asset::investment-tax-exempt-securities', AssetLoansToOfficers = 'asset::loans-to-officers', OtherExpenseParkingAndTolls = 'other-expense::parking-and-tolls', OtherCurrentLiabilityStaffAndRelatedLiabilityAccounts = 'other-current-liability::staff-and-related-liability-accounts', AssetAssetsAvailableForSale = 'asset::assets-available-for-sale', ExpenseRentOrLeaseOfBuildings = 'expense::rent-or-lease-of-buildings', OtherCurrentLiabilityDutiesAndTaxes = 'other-current-liability::duties-and-taxes', OtherCurrentLiabilityFederalIncomeTaxPayable = 'other-current-liability::federal-income-tax-payable', LiabilityGovernmentAndOtherPublicAuthorities = 'liability::government-and-other-public-authorities', ExpenseUtilities = 'expense::utilities', LiabilityProvisionForLiabilities = 'liability::provision-for-liabilities', OtherExpenseExceptionalItems = 'other-expense::exceptional-items', ExpenseProjectStudiesSurveysAssessments = 'expense::project-studies-surveys-assessments', AssetOtherLongTermInvestments = 'asset::other-long-term-investments', EquityPartnerContributions = 'equity::partner-contributions', AssetOtherLongTermLoansAndAdvances = 'asset::other-long-term-loans-and-advances', Expense = 'expense', OtherIncomeDividendIncome = 'other-income::dividend-income', AssetPrepaidExpenses = 'asset::prepaid-expenses', OtherExpenseVehicleLoan = 'other-expense::vehicle-loan', AssetSavings = 'asset::savings', ExpenseCommissionsAndFees = 'expense::commissions-and-fees', AssetOtherLongTermAssets = 'asset::other-long-term-assets', LiabilityShareholderNotesPayable = 'liability::shareholder-notes-payable', RevenueOtherPrimaryIncome = 'revenue::other-primary-income', AssetOtherCurrentAsset = 'asset::other-current-asset', ExpenseBorrowingCost = 'expense::borrowing-cost', ExpenseCostOfLabor = 'expense::cost-of-labor', EquityPartnerDistributions = 'equity::partner-distributions', EquityPreferredStock = 'equity::preferred-stock', AssetUndepositedFunds = 'asset::undeposited-funds', AssetLeaseBuyout = 'asset::lease-buyout', OtherIncomeGainLossOnSaleOfFixedAssets = 'other-income::gain-loss-on-sale-of-fixed-assets', CostOfGoodsSoldFreightAndDeliveryCost = 'cost-of-goods-sold::freight-and-delivery-cost', AssetInternalTransfers = 'asset::internal-transfers', EquityCalledUpShareCapital = 'equity::called-up-share-capital', OtherExpenseDeferredTaxExpense = 'other-expense::deferred-tax-expense', OtherIncomeGainLossOnSaleOfInvestments = 'other-income::gain-loss-on-sale-of-investments', OtherIncomeUnrealisedLossOnSecuritiesNetOfTax = 'other-income::unrealised-loss-on-securities-net-of-tax', OtherExpenseMortgageInterest = 'other-expense::mortgage-interest', EquityPartnersEquity = 'equity::partners-equity', LiabilityOtherLongTermProvisions = 'liability::other-long-term-provisions', RevenueOperatingGrants = 'revenue::operating-grants', RevenueRevenueGeneral = 'revenue::revenue-general', ExpenseAppropriationsToDepreciation = 'expense::appropriations-to-depreciation', OtherCurrentLiabilityProvisionsCurrentLiabilities = 'other-current-liability::provisions-current-liabilities', ExpenseSundry = 'expense::sundry', OtherExpenseOtherVehicleExpenses = 'other-expense::other-vehicle-expenses', AssetCapitalWip = 'asset::capital-wip', OtherCurrentLiabilityLoanPayable = 'other-current-liability::loan-payable', EquityShareApplicationMoneyPendingAllotment = 'equity::share-application-money-pending-allotment', OtherExpensePriorPeriodItems = 'other-expense::prior-period-items', RevenueServiceFeeIncome = 'revenue::service-fee-income', OtherIncomeOtherMiscellaneousIncome = 'other-income::other-miscellaneous-income', LiabilityAccountsPayable = 'liability::accounts-payable', AssetFixedAssetFurniture = 'asset::fixed-asset-furniture', ExpenseTaxesPaid = 'expense::taxes-paid', RevenueNonProfitIncome = 'revenue::non-profit-income', AssetCalledUpShareCapitalNotPaid = 'asset::called-up-share-capital-not-paid', ExpenseShippingFreightDelivery = 'expense::shipping-freight-delivery', AssetOtherFixedAssets = 'asset::other-fixed-assets', ExpenseOtherExternalServices = 'expense::other-external-services', AssetFixedAssetOtherToolsEquipment = 'asset::fixed-asset-other-tools-equipment', LiabilityLongTermDebit = 'liability::long-term-debit', OtherExpenseWashAndRoadServices = 'other-expense::wash-and-road-services', AssetOrganizationalCosts = 'asset::organizational-costs', OtherExpense = 'other-expense', AssetShortTermLoansAndAdvancesToRelatedParties = 'asset::short-term-loans-and-advances-to-related-parties', AssetSecurityDeposits = 'asset::security-deposits', EquityRetainedEarnings = 'equity::retained-earnings', AssetDevelopmentCosts = 'asset::development-costs', AssetOtherEarMarkedBankAccounts = 'asset::other-ear-marked-bank-accounts', AssetAvailableForSaleFinancialAssets = 'asset::available-for-sale-financial-assets', ExpenseTravel = 'expense::travel', LiabilityNotesPayable = 'liability::notes-payable', ExpenseOtherRentalCosts = 'expense::other-rental-costs', ExpensePenaltiesSettlements = 'expense::penalties-settlements', LiabilityDeferredTaxLiabilities = 'liability::deferred-tax-liabilities', OtherExpenseExchangeGainOrLoss = 'other-expense::exchange-gain-or-loss', OtherCurrentLiabilityTradeAndOtherPayables = 'other-current-liability::trade-and-other-payables', OtherExpenseVehicleInsurance = 'other-expense::vehicle-insurance', AssetLoansToOthers = 'asset::loans-to-others', EquityMoneyReceivedAgainstShareWarrants = 'equity::money-received-against-share-warrants', OtherCurrentLiabilityPayrollTaxPayable = 'other-current-liability::payroll-tax-payable', LiabilityOtherLongTermLiabilities = 'liability::other-long-term-liabilities', OtherExpenseAmortization = 'other-expense::amortization', AssetFurnitureAndFixtures = 'asset::furniture-and-fixtures', OtherExpenseVehicleRegistration = 'other-expense::vehicle-registration', ExpensePromotionalMeals = 'expense::promotional-meals', CostOfGoodsSoldOtherCostsOfServiceCos = 'cost-of-goods-sold::other-costs-of-service-cos', AssetLand = 'asset::land', AssetPrepaymentsAndAccruedIncome = 'asset::prepayments-and-accrued-income', OtherCurrentLiabilityTrustAccountsLiabilities = 'other-current-liability::trust-accounts-liabilities', AssetAssetsInCourseOfConstruction = 'asset::assets-in-course-of-construction', AssetNonCurrentAssets = 'asset::non-current-assets', AssetRetainage = 'asset::retainage', OtherCurrentLiabilityDividendsPayable = 'other-current-liability::dividends-payable', OtherCurrentLiabilityStateLocalIncomeTaxPayable = 'other-current-liability::state-local-income-tax-payable', ExpensePayrollExpenses = 'expense::payroll-expenses', ExpensePurchasesRebates = 'expense::purchases-rebates', OtherExpenseMatCredit = 'other-expense::mat-credit', ExpenseOfficeGeneralAdministrativeExpenses = 'expense::office-general-administrative-expenses', Income = 'income', OtherExpenseRentAndLease = 'other-expense::rent-and-lease', RevenueOtherCurrentOperatingIncome = 'revenue::other-current-operating-income', RevenueSalesOfProductIncome = 'revenue::sales-of-product-income' }
export const enum Format { Json = 'json', Xml = 'xml' }
export const enum CustomerEligibility { SpecificCustomerGroups = 'specific-customer-groups', SpecificCustomers = 'specific-customers', All = 'all' }
export const enum Roles { User = 'user', Moderator = 'moderator', Admin = 'admin' }
export const enum AllocationMethod { Each = 'each', Across = 'across' }
export const enum TargetSelection { All = 'all', Entitled = 'entitled' }
export const enum TargetType { ShippingLine = 'shipping-line', LineItem = 'line-item' }
export const enum Country { Uzbekistan = 'uzbekistan', Barbados = 'barbados', Cambodia = 'cambodia', Ecuador = 'ecuador', Maldives = 'maldives', Malta = 'malta', Monaco = 'monaco', Austria = 'austria', Croatia = 'croatia', Ghana = 'ghana', Guyana = 'guyana', Djibouti = 'djibouti', Australia = 'australia', Liberia = 'liberia', Nepal = 'nepal', Belgium = 'belgium', Honduras = 'honduras', NewZealand = 'new-zealand', SriLanka = 'sri-lanka', UnitedStates = 'united-states', Niger = 'niger', PapuaNewGuinea = 'papua-new-guinea', Fiji = 'fiji', Malaysia = 'malaysia', Mauritania = 'mauritania', TrinidadAndTobago = 'trinidad-and-tobago', Vanuatu = 'vanuatu', Myanmar = 'myanmar', CoteDIvoire = 'cote-d-ivoire', Zimbabwe = 'zimbabwe', SaintLucia = 'saint-lucia', Japan = 'japan', Uruguay = 'uruguay', Bangladesh = 'bangladesh', Luxembourg = 'luxembourg', Belarus = 'belarus', Dominica = 'dominica', Moldova = 'moldova', Palau = 'palau', Colombia = 'colombia', NorthKorea = 'north-korea', SierraLeone = 'sierra-leone', Greece = 'greece', Tunisia = 'tunisia', CentralAfricanRepublic = 'central-african-republic', Sudan = 'sudan', Tanzania = 'tanzania', Bulgaria = 'bulgaria', Guinea = 'guinea', Rwanda = 'rwanda', Egypt = 'egypt', Namibia = 'namibia', Lesotho = 'lesotho', BosniaAndHerzegovina = 'bosnia-and-herzegovina', Slovakia = 'slovakia', Cyprus = 'cyprus', TimorLeste = 'timor-leste', India = 'india', Laos = 'laos', CostaRica = 'costa-rica', Georgia = 'georgia', Latvia = 'latvia', Mali = 'mali', DominicanRepublic = 'dominican-republic', Russia = 'russia', Kazakhstan = 'kazakhstan', SanMarino = 'san-marino', CongoRepublic = 'congo-republic', Haiti = 'haiti', Hungary = 'hungary', Iceland = 'iceland', Serbia = 'serbia', Eritrea = 'eritrea', UnitedKingdom = 'united-kingdom', Poland = 'poland', Nauru = 'nauru', Vietnam = 'vietnam', Morocco = 'morocco', Iraq = 'iraq', Mozambique = 'mozambique', BurkinaFaso = 'burkina-faso', Gambia = 'gambia', Albania = 'albania', Ethiopia = 'ethiopia', Israel = 'israel', MarshallIslands = 'marshall-islands', Burundi = 'burundi', Tajikistan = 'tajikistan', Comoros = 'comoros', Algeria = 'algeria', Tuvalu = 'tuvalu', SaudiArabia = 'saudi-arabia', Benin = 'benin', CzechRepublic = 'czech-republic', Liechtenstein = 'liechtenstein', Palestine = 'palestine', Spain = 'spain', Micronesia = 'micronesia', Nigeria = 'nigeria', Slovenia = 'slovenia', Italy = 'italy', Bahamas = 'bahamas', CaboVerde = 'cabo-verde', Grenada = 'grenada', Portugal = 'portugal', SaintVincentAndTheGrenadines = 'saint-vincent-and-the-grenadines', SaintKittsAndNevis = 'saint-kitts-and-nevis', AntiguaAndBarbuda = 'antigua-and-barbuda', Cuba = 'cuba', Mexico = 'mexico', EquatorialGuinea = 'equatorial-guinea', SaoTomeAndPrincipe = 'sao-tome-and-principe', Ireland = 'ireland', Kuwait = 'kuwait', Cameroon = 'cameroon', Libya = 'libya', Suriname = 'suriname', Thailand = 'thailand', Montenegro = 'montenegro', Singapore = 'singapore', Estonia = 'estonia', Malawi = 'malawi', Turkmenistan = 'turkmenistan', Mauritius = 'mauritius', Indonesia = 'indonesia', China = 'china', Taiwan = 'taiwan', Switzerland = 'switzerland', Togo = 'togo', SouthKorea = 'south-korea', Denmark = 'denmark', Kiribati = 'kiribati', Guatemala = 'guatemala', Botswana = 'botswana', Kyrgyzstan = 'kyrgyzstan', Norway = 'norway', Belize = 'belize', Azerbaijan = 'azerbaijan', Germany = 'germany', Andorra = 'andorra', Argentina = 'argentina', Peru = 'peru', Qatar = 'qatar', Samoa = 'samoa', Philippines = 'philippines', Venezuela = 'venezuela', Yemen = 'yemen', Bolivia = 'bolivia', Chad = 'chad', Bhutan = 'bhutan', Uganda = 'uganda', Lithuania = 'lithuania', Mongolia = 'mongolia', Kenya = 'kenya', Madagascar = 'madagascar', Canada = 'canada', Gabon = 'gabon', Bahrain = 'bahrain', CongoDemocraticRepublic = 'congo-democratic-republic', Armenia = 'armenia', Afghanistan = 'afghanistan', Lebanon = 'lebanon', Finland = 'finland', Nicaragua = 'nicaragua', Paraguay = 'paraguay', Romania = 'romania', Seychelles = 'seychelles', Iran = 'iran', Netherlands = 'netherlands', Oman = 'oman', SolomonIslands = 'solomon-islands', Somalia = 'somalia', Sweden = 'sweden', Syria = 'syria', Tonga = 'tonga', Turkey = 'turkey', Angola = 'angola', UnitedArabEmirates = 'united-arab-emirates', VaticanCity = 'vatican-city', Zambia = 'zambia', Brunei = 'brunei', France = 'france', Senegal = 'senegal', Brazil = 'brazil', SouthSudan = 'south-sudan', Jamaica = 'jamaica', Chile = 'chile', Jordan = 'jordan', ElSalvador = 'el-salvador', Pakistan = 'pakistan', Panama = 'panama', GuineaBissau = 'guinea-bissau', Eswatini = 'eswatini', SouthAfrica = 'south-africa', NorthMacedonia = 'north-macedonia', Ukraine = 'ukraine' }
export const enum GlobalTaxType { CustomsDuty = 'customs-duty', PropertyTax = 'property-tax', Other = 'other', SalesTax = 'sales-tax', ExciseTax = 'excise-tax', Vat = 'vat', Gst = 'gst' }
export const enum IdentityProvider { Google = 'google', Yahoo = 'yahoo', Line = 'line', Behance = 'behance', Tumblr = 'tumblr', Pinterest = 'pinterest', Other = 'other', Whatsapp = 'whatsapp', Qq = 'qq', Facebook = 'facebook', Slack = 'slack', Vimeo = 'vimeo', Twitter = 'twitter', Instagram = 'instagram', Signal = 'signal', Flickr = 'flickr', Apple = 'apple', Reddit = 'reddit', Telegram = 'telegram', Paypal = 'paypal', Amazon = 'amazon', Tiktok = 'tiktok', Dribbble = 'dribbble', Discord = 'discord', Linkedin = 'linkedin', Microsoft = 'microsoft', Github = 'github', Wechat = 'wechat', Foursquare = 'foursquare', Snapchat = 'snapchat' }
export const enum AccountEngagementLevel { Cold = 'cold', Unknown = 'unknown', Warm = 'warm', Hot = 'hot' }
export const enum ReviewApprovalStatus { Revised = 'revised', Pending = 'pending', Rejected = 'rejected', Approved = 'approved', InReview = 'in-review' }
export const enum StakeholderType { Customer = 'customer', Vendor = 'vendor', Partner = 'partner', Investor = 'investor', Other = 'other', Competitor = 'competitor' }
export const enum AccountStatus { Pending = 'pending', Inactive = 'inactive', Active = 'active', Closed = 'closed', Suspended = 'suspended' }
export const enum CampaignStatus { Paused = 'paused', Completed = 'completed', Planned = 'planned', Active = 'active', Draft = 'draft', Archived = 'archived', Cancelled = 'cancelled', Scheduled = 'scheduled' }
export const enum CustomerType { B2c = 'b2c', Wholesale = 'wholesale', Corporate = 'corporate', Retail = 'retail', B2b = 'b2b', Online = 'online' }
export const enum MessageContentType { Location = 'location', Sticker = 'sticker', Link = 'link', Contact = 'contact', Document = 'document', Voice = 'voice', File = 'file', Video = 'video', Gif = 'gif', Text = 'text', Image = 'image', Audio = 'audio' }
export const enum ReactionType { Laugh = 'laugh', Dislike = 'dislike', Like = 'like', Angry = 'angry', Bookmark = 'bookmark', Sad = 'sad', Love = 'love', Wow = 'wow', Interested = 'interested' }
export const enum SupportTicketPriority { Immediate = 'immediate', Urgent = 'urgent', Medium = 'medium', Low = 'low', High = 'high' }
export const enum IssueLifecycleStatus { InProgress = 'in-progress', OnHold = 'on-hold', Pending = 'pending', Open = 'open', Resolved = 'resolved', Cancelled = 'cancelled', Closed = 'closed' }
export const enum OrderStatus { Cancelled = 'cancelled', Refunded = 'refunded', AwaitingPayment = 'awaiting-payment', AwaitingPickup = 'awaiting-pickup', Disputed = 'disputed', Completed = 'completed', Pending = 'pending', OnHold = 'on-hold', Draft = 'draft', Failed = 'failed', AwaitingShipment = 'awaiting-shipment', Returned = 'returned', Abandoned = 'abandoned', Confirmed = 'confirmed', PartiallyFulfilled = 'partially-fulfilled', Shipped = 'shipped', Delivered = 'delivered', Processing = 'processing' }
export const enum DiscountType { BuyOneGetOne = 'buy-one-get-one', TieredDiscount = 'tiered-discount', UnknownDiscount = 'unknown-discount', Percentage = 'percentage', VariablePercentage = 'variable-percentage', ConditionalDiscount = 'conditional-discount', FixedAmount = 'fixed-amount', VariableAmount = 'variable-amount' }
export const enum FulfillmentStatus { Returned = 'returned', Pending = 'pending', Delivered = 'delivered', InTransit = 'in-transit', Failure = 'failure', Cancelled = 'cancelled' }
export const enum ProductAvailabilityStatus { PreOrder = 'pre-order', OutOfStock = 'out-of-stock', Discontinued = 'discontinued', InStock = 'in-stock', BackOrder = 'back-order' }
export const enum ExpenseApprovalStatus { Denied = 'denied', Cancelled = 'cancelled', Processed = 'processed', Reviewing = 'reviewing', New = 'new', Pending = 'pending', Reimbursed = 'reimbursed', Approved = 'approved' }
export const enum FinancialChargeType { Other = 'other', Commission = 'commission', InterestCharge = 'interest-charge', TransactionFee = 'transaction-fee', ServiceCharge = 'service-charge', LateFee = 'late-fee', ProcessingFee = 'processing-fee' }
export const enum BillingStatus { Deleted = 'deleted', Submitted = 'submitted', Authorised = 'authorised', Unpaid = 'unpaid', Overdue = 'overdue', Paid = 'paid', Pending = 'pending', Voided = 'voided', Draft = 'draft', PartiallyPaid = 'partially-paid' }
export const enum InvoiceAdjustmentType { Other = 'other', Discount = 'discount', Tax = 'tax', Shipping = 'shipping', Tip = 'tip' }
export const enum DataType { Binary = 'binary', Array = 'array', Custom = 'custom', Object = 'object', Timestamp = 'timestamp', Boolean = 'boolean', Date = 'date', Null = 'null', Number = 'number', String = 'string', Json = 'json', Undefined = 'undefined' }
export const enum EmploymentType { Permanent = 'permanent', Contract = 'contract', Volunteer = 'volunteer', Internship = 'internship', Seasonal = 'seasonal', FullTime = 'full-time', Freelance = 'freelance', PartTime = 'part-time', Temporary = 'temporary' }
export const enum TimeCycle { Secondly = 'secondly', Triennially = 'triennially', Daily = 'daily', Biennially = 'biennially', Custom = 'custom', SemiAnnually = 'semi-annually', Biweekly = 'biweekly', Minutely = 'minutely', Quarterly = 'quarterly', AdHoc = 'ad-hoc', Hourly = 'hourly', SemiMonthly = 'semi-monthly', Monthly = 'monthly', Weekly = 'weekly', Annually = 'annually' }
export const enum FinancialTrackingCategories { Division = 'division', Class = 'class', Employee = 'employee', Department = 'department', None = 'none', Project = 'project', Location = 'location', CostCenter = 'cost-center', Product = 'product', Service = 'service', Customer = 'customer', Other = 'other', Vendor = 'vendor' }
export const enum CampaignType { Display = 'display', Email = 'email', Other = 'other', SocialMedia = 'social-media', SearchEngine = 'search-engine' }
export const enum ContactAddressType { Other = 'other', Home = 'home', Work = 'work', Personal = 'personal', Temporary = 'temporary', Business = 'business', Shipping = 'shipping', Billing = 'billing' }
export const enum LeadLifecycleStatus { Converted = 'converted', Revisited = 'revisited', AttemptedToContact = 'attempted-to-contact', Unqualified = 'unqualified', Connected = 'connected', BadTiming = 'bad-timing', Lost = 'lost', New = 'new', Open = 'open', InProcess = 'in-process' }
export const enum ParticipantEngagementStatus { Left = 'left', Guest = 'guest', Moderator = 'moderator', Inactive = 'inactive', Active = 'active', Admin = 'admin', Banned = 'banned' }
export const enum ItemEntityStatus { Inactive = 'inactive', Suspended = 'suspended', Completed = 'completed', Active = 'active', Deleted = 'deleted', Archived = 'archived', Pending = 'pending' }
export const enum Currency { BND = 'bnd', MDL = 'mdl', GMD = 'gmd', KWD = 'kwd', SCR = 'scr', LBP = 'lbp', GEL = 'gel', QAR = 'qar', OMR = 'omr', BMD = 'bmd', GNF = 'gnf', KES = 'kes', RON = 'ron', VES = 'ves', CLP = 'clp', RSD = 'rsd', VND = 'vnd', RWF = 'rwf', XDR = 'xdr', MXN = 'mxn', BIF = 'bif', KGS = 'kgs', PAB = 'pab', UZS = 'uzs', THB = 'thb', YER = 'yer', AWG = 'awg', MOP = 'mop', NAD = 'nad', FJD = 'fjd', PYG = 'pyg', MRU = 'mru', PHP = 'php', SDG = 'sdg', SZL = 'szl', TVD = 'tvd', BWP = 'bwp', ARS = 'ars', KHR = 'khr', EUR = 'eur', ETB = 'etb', STN = 'stn', BTN = 'btn', JPY = 'jpy', LSL = 'lsl', BYN = 'byn', SRD = 'srd', SBD = 'sbd', TWD = 'twd', WST = 'wst', GIP = 'gip', SEK = 'sek', XPF = 'xpf', NOK = 'nok', INR = 'inr', MGA = 'mga', NIO = 'nio', SGD = 'sgd', TND = 'tnd', GHS = 'ghs', HTG = 'htg', HRK = 'hrk', CHF = 'chf', FOK = 'fok', KMF = 'kmf', PGK = 'pgk', TOP = 'top', LAK = 'lak', MKD = 'mkd', BHD = 'bhd', MAD = 'mad', PKR = 'pkr', ZWL = 'zwl', RUB = 'rub', NPR = 'npr', ANG = 'ang', TJS = 'tjs', NGN = 'ngn', NZD = 'nzd', TRY = 'try', AUD = 'aud', SSP = 'ssp', KYD = 'kyd', CVE = 'cve', ZMW = 'zmw', CZK = 'czk', LYD = 'lyd', CNY = 'cny', CDF = 'cdf', BRL = 'brl', SAR = 'sar', SHP = 'shp', TZS = 'tzs', UGX = 'ugx', COP = 'cop', TTD = 'ttd', GBP = 'gbp', BOB = 'bob', MYR = 'myr', XOF = 'xof', DOP = 'dop', ILS = 'ils', IDR = 'idr', ALL = 'all', AOA = 'aoa', AMD = 'amd', DJF = 'djf', LKR = 'lkr', MNT = 'mnt', JMD = 'jmd', HKD = 'hkd', IQD = 'iqd', CUC = 'cuc', KRW = 'krw', IRR = 'irr', LRD = 'lrd', CAD = 'cad', KPW = 'kpw', KZT = 'kzt', SLL = 'sll', SYP = 'syp', UAH = 'uah', UYU = 'uyu', IMP = 'imp', VUV = 'vuv', BSD = 'bsd', AED = 'aed', BGN = 'bgn', MVR = 'mvr', JOD = 'jod', BDT = 'bdt', BZD = 'bzd', GGP = 'ggp', MMK = 'mmk', AFN = 'afn', USD = 'usd', DKK = 'dkk', FKP = 'fkp', CUP = 'cup', GYD = 'gyd', ISK = 'isk', KID = 'kid', BAM = 'bam', MUR = 'mur', MZN = 'mzn', XCD = 'xcd', ZAR = 'zar', HUF = 'huf', AZN = 'azn', PEN = 'pen', PLN = 'pln', BBD = 'bbd', ERN = 'ern', HNL = 'hnl', GTQ = 'gtq', XAF = 'xaf', CRC = 'crc', JEP = 'jep', DZD = 'dzd', MWK = 'mwk', SOS = 'sos', TMT = 'tmt', EGP = 'egp' }
export const enum CustomerEligibilityStatus { NewCustomers = 'new-customers', ReturningCustomers = 'returning-customers', VipCustomers = 'vip-customers', AllCustomers = 'all-customers', SpecificConditions = 'specific-conditions', Other = 'other' }
export const enum ItemCondition { Used = 'used', New = 'new', Refurbished = 'refurbished', LikeNew = 'like-new', OpenBox = 'open-box', Damaged = 'damaged' }
export const enum TransactionType { Charge = 'charge', Transfer = 'transfer', Fee = 'fee', Refund = 'refund', Payment = 'payment', Deposit = 'deposit', Adjustment = 'adjustment', Withdrawal = 'withdrawal' }
export const enum EntityLifecycleStatus { Inactive = 'inactive', Active = 'active', Archived = 'archived', Preorder = 'preorder', Deleted = 'deleted', Draft = 'draft', Scheduled = 'scheduled' }
export const enum JournalEntryStatus { Error = 'error', Pending = 'pending', Voided = 'voided', Posted = 'posted', Draft = 'draft', Corrected = 'corrected' }
export const enum DayOfWeek { Friday = 'friday', Monday = 'monday', Thursday = 'thursday', Wednesday = 'wednesday', Sunday = 'sunday', Tuesday = 'tuesday', Saturday = 'saturday' }
export const enum AccountingAccountType { ExpenseSuppliesMaterials = 'expense::supplies-materials', LiabilityLongTermDebit = 'liability::long-term-debit', RevenueSalesRetail = 'revenue::sales-retail', ExpenseOtherBusinessExpenses = 'expense::other-business-expenses', RevenueRevenueGeneral = 'revenue::revenue-general', AssetAccumulatedAmortizationOfOtherAssets = 'asset::accumulated-amortization-of-other-assets', EquityShareCapital = 'equity::share-capital', OtherCurrentLiabilityTrustAccountsLiabilities = 'other-current-liability::trust-accounts-liabilities', AssetLongTermInvestments = 'asset::long-term-investments', ExpenseManagementCompensation = 'expense::management-compensation', OtherCurrentLiabilityCurrentLiabilities = 'other-current-liability::current-liabilities', AssetSavings = 'asset::savings', ExpenseOtherMiscellaneousServiceCost = 'expense::other-miscellaneous-service-cost', AssetAllowanceForBadDebts = 'asset::allowance-for-bad-debts', LiabilityNotesPayable = 'liability::notes-payable', EquityPaidInCapitalOrSurplus = 'equity::paid-in-capital-or-surplus', AssetRentsHeldInTrust = 'asset::rents-held-in-trust', RevenueUnappliedCashPaymentIncome = 'revenue::unapplied-cash-payment-income', EquityOtherFreeReserves = 'equity::other-free-reserves', AssetEmployeeCashAdvances = 'asset::employee-cash-advances', RevenueSalesWholesale = 'revenue::sales-wholesale', AssetAvailableForSaleFinancialAssets = 'asset::available-for-sale-financial-assets', OtherCurrentLiabilityGlobalTaxPayable = 'other-current-liability::global-tax-payable', ExpenseShippingAndDeliveryExpense = 'expense::shipping-and-delivery-expense', AssetChecking = 'asset::checking', OtherExpenseTaxRoundoffGainOrLoss = 'other-expense::tax-roundoff-gain-or-loss', LiabilityStaffAndRelatedLongTermLiabilityAccounts = 'liability::staff-and-related-long-term-liability-accounts', LiabilityCreditCard = 'liability::credit-card', ExpenseBadDebts = 'expense::bad-debts', ExpenseExternalServices = 'expense::external-services', ExpenseTravelExpensesSellingExpense = 'expense::travel-expenses-selling-expense', AssetOtherLongTermAssets = 'asset::other-long-term-assets', OtherExpenseExchangeGainOrLoss = 'other-expense::exchange-gain-or-loss', OtherExpenseRentAndLease = 'other-expense::rent-and-lease', AssetCalledUpShareCapitalNotPaid = 'asset::called-up-share-capital-not-paid', OtherIncome = 'other-income', ExpenseDistributionCosts = 'expense::distribution-costs', ExpenseGlobalTaxExpense = 'expense::global-tax-expense', AssetLeaseholdImprovements = 'asset::leasehold-improvements', ExpenseOtherCurrentOperatingCharges = 'expense::other-current-operating-charges', CostOfGoodsSoldCostOfLaborCos = 'cost-of-goods-sold::cost-of-labor-cos', ExpenseAuto = 'expense::auto', OtherExpenseMatCredit = 'other-expense::mat-credit', OtherCurrentLiabilityPrepaidExpensesPayable = 'other-current-liability::prepaid-expenses-payable', RevenueSalesOfProductIncome = 'revenue::sales-of-product-income', OtherCurrentLiabilityPayrollClearing = 'other-current-liability::payroll-clearing', AssetShortTermLoansAndAdvancesToRelatedParties = 'asset::short-term-loans-and-advances-to-related-parties', RevenueOtherPrimaryIncome = 'revenue::other-primary-income', EquityDividendDisbursed = 'equity::dividend-disbursed', ExpenseEquipmentRental = 'expense::equipment-rental', OtherExpenseOtherVehicleExpenses = 'other-expense::other-vehicle-expenses', ExpenseTravelMeals = 'expense::travel-meals', CostOfGoodsSold = 'cost-of-goods-sold', AssetFixedAssetSoftware = 'asset::fixed-asset-software', LiabilityLiabilitiesRelatedToAssetsHeldForSale = 'liability::liabilities-related-to-assets-held-for-sale', EquityOpeningBalanceEquity = 'equity::opening-balance-equity', EquityPersonalIncome = 'equity::personal-income', AssetDepletableAssets = 'asset::depletable-assets', AssetSecurityDeposits = 'asset::security-deposits', EquityCalledUpShareCapital = 'equity::called-up-share-capital', LiabilityLongTermLiability = 'liability::long-term-liability', OtherCurrentLiabilityProvisionsCurrentLiabilities = 'other-current-liability::provisions-current-liabilities', LiabilityLongTermEmployeeBenefitObligations = 'liability::long-term-employee-benefit-obligations', ExpenseOfficeExpenses = 'expense::office-expenses', AssetLoansToOthers = 'asset::loans-to-others', AssetOtherAsset = 'asset::other-asset', EquityEstimatedTaxes = 'equity::estimated-taxes', OtherCurrentLiabilityRentsInTrustLiability = 'other-current-liability::rents-in-trust-liability', OtherExpenseAmortization = 'other-expense::amortization', CostOfGoodsSoldSuppliesMaterialsCogs = 'cost-of-goods-sold::supplies-materials-cogs', LiabilityDebtsRelatedToParticipatingInterests = 'liability::debts-related-to-participating-interests', OtherExpenseGasAndFuel = 'other-expense::gas-and-fuel', OtherCurrentLiabilityCurrentPortionEmployeeBenefitsObligations = 'other-current-liability::current-portion-employee-benefits-obligations', OtherCurrentLiabilityProvisionForWarrantyObligations = 'other-current-liability::provision-for-warranty-obligations', OtherExpenseMortgageInterest = 'other-expense::mortgage-interest', AssetProvisionsCurrentAssets = 'asset::provisions-current-assets', OtherCurrentLiabilityStaffAndRelatedLiabilityAccounts = 'other-current-liability::staff-and-related-liability-accounts', OtherExpenseRepairsAndMaintenance = 'other-expense::repairs-and-maintenance', RevenueOwnWorkCapitalized = 'revenue::own-work-capitalized', AssetInvestmentOther = 'asset::investment-other', OtherCurrentLiabilityDutiesAndTaxes = 'other-current-liability::duties-and-taxes', ExpenseInterestPaid = 'expense::interest-paid', AssetOtherEarMarkedBankAccounts = 'asset::other-ear-marked-bank-accounts', AssetProvisionsNonCurrentAssets = 'asset::provisions-non-current-assets', OtherCurrentLiabilityLineOfCredit = 'other-current-liability::line-of-credit', OtherCurrentLiabilityOtherCurrentLiabilities = 'other-current-liability::other-current-liabilities', ExpenseAdvertisingPromotional = 'expense::advertising-promotional', RevenueOperatingGrants = 'revenue::operating-grants', EquityInvestmentGrants = 'equity::investment-grants', OtherExpenseDeferredTaxExpense = 'other-expense::deferred-tax-expense', AssetNonCurrentAssets = 'asset::non-current-assets', OtherExpenseVehicleRepairs = 'other-expense::vehicle-repairs', OtherCurrentLiabilityCurrentTaxLiability = 'other-current-liability::current-tax-liability', EquityMoneyReceivedAgainstShareWarrants = 'equity::money-received-against-share-warrants', OtherExpenseParkingAndTolls = 'other-expense::parking-and-tolls', AssetPrepaidExpenses = 'asset::prepaid-expenses', ExpenseCostOfLabor = 'expense::cost-of-labor', OtherExpenseVehicle = 'other-expense::vehicle', ExpenseTaxesPaid = 'expense::taxes-paid', AssetProvisionsFixedAssets = 'asset::provisions-fixed-assets', ExpenseRentOrLeaseOfBuildings = 'expense::rent-or-lease-of-buildings', LiabilityBankLoans = 'liability::bank-loans', CostOfGoodsSoldEquipmentRentalCos = 'cost-of-goods-sold::equipment-rental-cos', AssetBuildings = 'asset::buildings', ExpenseUtilities = 'expense::utilities', OtherIncomeInterestEarned = 'other-income::interest-earned', OtherExpenseOtherHomeOfficeExpenses = 'other-expense::other-home-office-expenses', AssetGlobalTaxDeferred = 'asset::global-tax-deferred', ExpenseBorrowingCost = 'expense::borrowing-cost', OtherIncomeUnrealisedLossOnSecuritiesNetOfTax = 'other-income::unrealised-loss-on-securities-net-of-tax', ExpenseAmortizationExpense = 'expense::amortization-expense', OtherExpenseDepletion = 'other-expense::depletion', ExpenseCharitableContributions = 'expense::charitable-contributions', AssetIntangibleAssets = 'asset::intangible-assets', LiabilityShareholderNotesPayable = 'liability::shareholder-notes-payable', EquityOwnersEquity = 'equity::owners-equity', AssetLicenses = 'asset::licenses', ExpenseOtherExternalServices = 'expense::other-external-services', LiabilityAccruedLongTermLiabilities = 'liability::accrued-long-term-liabilities', ExpenseBankCharges = 'expense::bank-charges', CostOfGoodsSoldOtherCostsOfServiceCos = 'cost-of-goods-sold::other-costs-of-service-cos', LiabilityOutstandingDuesMicroSmallEnterprise = 'liability::outstanding-dues-micro-small-enterprise', AssetAssetsAvailableForSale = 'asset::assets-available-for-sale', ExpensePayrollExpenses = 'expense::payroll-expenses', AssetLandAsset = 'asset::land-asset', EquityFunds = 'equity::funds', AssetFixedAsset = 'asset::fixed-asset', ExpenseTravel = 'expense::travel', AssetAssetsHeldForSale = 'asset::assets-held-for-sale', AssetInvestmentMortgageRealEstateLoans = 'asset::investment-mortgage-real-estate-loans', LiabilityAccountsPayable = 'liability::accounts-payable', AssetCapitalWip = 'asset::capital-wip', ExpenseFinanceCosts = 'expense::finance-costs', EquityPartnerDistributions = 'equity::partner-distributions', LiabilityGroupAndAssociates = 'liability::group-and-associates', EquityPersonalExpense = 'equity::personal-expense', AssetCumulativeDepreciationOnIntangibleAssets = 'asset::cumulative-depreciation-on-intangible-assets', AssetDevelopmentCosts = 'asset::development-costs', LiabilityLongTermBorrowings = 'liability::long-term-borrowings', AssetFixedAssetCopiers = 'asset::fixed-asset-copiers', OtherIncomeGainLossOnSaleOfInvestments = 'other-income::gain-loss-on-sale-of-investments', ExpenseOtherSellingExpenses = 'expense::other-selling-expenses', AssetFurnitureAndFixtures = 'asset::furniture-and-fixtures', AssetOtherConsumables = 'asset::other-consumables', AssetMoneyMarket = 'asset::money-market', OtherExpenseHomeOffice = 'other-expense::home-office', OtherExpenseVehicleLoan = 'other-expense::vehicle-loan', AssetOtherCurrentAssets = 'asset::other-current-assets', OtherExpenseIncomeTaxOtherExpense = 'other-expense::income-tax-other-expense', CostOfGoodsSoldShippingFreightDeliveryCos = 'cost-of-goods-sold::shipping-freight-delivery-cos', AssetBalWithGovtAuthorities = 'asset::bal-with-govt-authorities', ExpenseSundry = 'expense::sundry', OtherIncomeDividendIncome = 'other-income::dividend-income', LiabilityOtherLongTermProvisions = 'liability::other-long-term-provisions', AssetFixedAssetPhotoVideo = 'asset::fixed-asset-photo-video', ExpenseShippingFreightDelivery = 'expense::shipping-freight-delivery', CostOfGoodsSoldCostOfSales = 'cost-of-goods-sold::cost-of-sales', OtherCurrentLiabilityPayrollTaxPayable = 'other-current-liability::payroll-tax-payable', OtherExpensePriorPeriodItems = 'other-expense::prior-period-items', OtherExpenseHomeOwnerRentalInsurance = 'other-expense::home-owner-rental-insurance', AssetInternalTransfers = 'asset::internal-transfers', AssetAccumulatedDepreciation = 'asset::accumulated-depreciation', AssetFixedAssetOtherToolsEquipment = 'asset::fixed-asset-other-tools-equipment', AssetDeferredTax = 'asset::deferred-tax', LiabilityOutstandingDuesOtherThanMicroSmallEnterprise = 'liability::outstanding-dues-other-than-micro-small-enterprise', ExpenseIncomeTaxExpense = 'expense::income-tax-expense', AssetUndepositedFunds = 'asset::undeposited-funds', EquityAccumulatedAdjustment = 'equity::accumulated-adjustment', OtherCurrentLiabilityGlobalTaxSuspense = 'other-current-liability::global-tax-suspense', OtherExpense = 'other-expense', OtherCurrentLiabilityFederalIncomeTaxPayable = 'other-current-liability::federal-income-tax-payable', OtherExpenseVehicleLease = 'other-expense::vehicle-lease', AssetIntangibleAssetsUnderDevelopment = 'asset::intangible-assets-under-development', AssetFixedAssetPhone = 'asset::fixed-asset-phone', AssetAccumulatedAmortization = 'asset::accumulated-amortization', AssetOrganizationalCosts = 'asset::organizational-costs', ExpenseEntertainment = 'expense::entertainment', ExpenseLossOnDiscontinuedOperationsNetOfTax = 'expense::loss-on-discontinued-operations-net-of-tax', ExpenseLegalProfessionalFees = 'expense::legal-professional-fees', OtherExpenseVehicleLoanInterest = 'other-expense::vehicle-loan-interest', OtherCurrentLiabilityDividendsPayable = 'other-current-liability::dividends-payable', RevenueSavingsByTaxScheme = 'revenue::savings-by-tax-scheme', OtherExpenseUtilities = 'other-expense::utilities', AssetLoansToStockholders = 'asset::loans-to-stockholders', AssetVehicles = 'asset::vehicles', Asset = 'asset', EquityPartnerContributions = 'equity::partner-contributions', OtherIncomeOtherInvestmentIncome = 'other-income::other-investment-income', OtherIncomeOtherOperatingIncome = 'other-income::other-operating-income', OtherCurrentLiabilityTradeAndOtherPayables = 'other-current-liability::trade-and-other-payables', AssetRetainage = 'asset::retainage', RevenueServiceFeeIncome = 'revenue::service-fee-income', ExpenseExtraordinaryCharges = 'expense::extraordinary-charges', OtherCurrentLiabilitySalesTaxPayable = 'other-current-liability::sales-tax-payable', ExpenseTravelExpensesGeneralAndAdminExpenses = 'expense::travel-expenses-general-and-admin-expenses', EquityShareApplicationMoneyPendingAllotment = 'equity::share-application-money-pending-allotment', OtherExpensePenaltiesSettlements = 'other-expense::penalties-settlements', LiabilityAccrualsAndDeferredIncome = 'liability::accruals-and-deferred-income', AssetExpenditureAuthorisationsAndLettersOfCredit = 'asset::expenditure-authorisations-and-letters-of-credit', AssetFixedAssetFurniture = 'asset::fixed-asset-furniture', AssetLeaseBuyout = 'asset::lease-buyout', AssetBank = 'asset::bank', AssetOtherLongTermLoansAndAdvances = 'asset::other-long-term-loans-and-advances', LiabilityDeferredTaxLiabilities = 'liability::deferred-tax-liabilities', AssetInvestments = 'asset::investments', AssetPrepaymentsAndAccruedIncome = 'asset::prepayments-and-accrued-income', OtherExpenseWashAndRoadServices = 'other-expense::wash-and-road-services', ExpenseOtherRentalCosts = 'expense::other-rental-costs', AssetInvestmentTaxExemptSecurities = 'asset::investment-tax-exempt-securities', AssetCashOnHand = 'asset::cash-on-hand', EquityCapitalReserves = 'equity::capital-reserves', OtherCurrentLiabilityAccruedLiabilities = 'other-current-liability::accrued-liabilities', AssetLand = 'asset::land', OtherCurrentLiability = 'other-current-liability', RevenueDiscountsRefundsGiven = 'revenue::discounts-refunds-given', OtherIncomeLossOnDisposalOfAssets = 'other-income::loss-on-disposal-of-assets', ExpensePromotionalMeals = 'expense::promotional-meals', AssetOtherFixedAssets = 'asset::other-fixed-assets', AssetOtherIntangibleAssets = 'asset::other-intangible-assets', EquityRetainedEarnings = 'equity::retained-earnings', OtherIncomeGainLossOnSaleOfFixedAssets = 'other-income::gain-loss-on-sale-of-fixed-assets', ExpenseAppropriationsToDepreciation = 'expense::appropriations-to-depreciation', OtherCurrentLiabilityInterestPayables = 'other-current-liability::interest-payables', OtherCurrentLiabilityCurrentPortionOfObligationsUnderFinanceLeases = 'other-current-liability::current-portion-of-obligations-under-finance-leases', EquityPreferredStock = 'equity::preferred-stock', AssetAssetsInCourseOfConstruction = 'asset::assets-in-course-of-construction', ExpensePurchasesRebates = 'expense::purchases-rebates', ExpenseEntertainmentMeals = 'expense::entertainment-meals', ExpenseCommissionsAndFees = 'expense::commissions-and-fees', RevenueIncome = 'revenue::income', OtherIncomeTaxExemptInterest = 'other-income::tax-exempt-interest', ExpenseInsurance = 'expense::insurance', AssetAccumulatedDepletion = 'asset::accumulated-depletion', AssetGoodwill = 'asset::goodwill', EquityTreasuryStock = 'equity::treasury-stock', AssetGlobalTaxRefund = 'asset::global-tax-refund', OtherCurrentLiabilitySocialSecurityAgencies = 'other-current-liability::social-security-agencies', LiabilityObligationsUnderFinanceLeases = 'liability::obligations-under-finance-leases', AssetInvestmentUsGovernmentObligations = 'asset::investment-us-government-obligations', OtherExpenseVehicleInsurance = 'other-expense::vehicle-insurance', AssetCashAndCashEquivalents = 'asset::cash-and-cash-equivalents', AssetOtherCurrentAsset = 'asset::other-current-asset', LiabilityProvisionForLiabilities = 'liability::provision-for-liabilities', AssetOtherLongTermInvestments = 'asset::other-long-term-investments', EquityPartnersEquity = 'equity::partners-equity', OtherIncomeOtherMiscellaneousIncome = 'other-income::other-miscellaneous-income', LiabilityOtherLongTermLiabilities = 'liability::other-long-term-liabilities', Expense = 'expense', AssetTradeAndOtherReceivables = 'asset::trade-and-other-receivables', AssetTrustAccounts = 'asset::trust-accounts', AssetInventory = 'asset::inventory', EquityAccumulatedOtherComprehensiveIncome = 'equity::accumulated-other-comprehensive-income', OtherExpenseOtherMiscellaneousExpense = 'other-expense::other-miscellaneous-expense', CostOfGoodsSoldFreightAndDeliveryCost = 'cost-of-goods-sold::freight-and-delivery-cost', LiabilityProvisionsNonCurrentLiabilities = 'liability::provisions-non-current-liabilities', RevenueNonProfitIncome = 'revenue::non-profit-income', RevenueOtherCurrentOperatingIncome = 'revenue::other-current-operating-income', Equity = 'equity', OtherCurrentLiabilityDirectDepositPayable = 'other-current-liability::direct-deposit-payable', OtherExpenseExceptionalItems = 'other-expense::exceptional-items', AssetMachineryAndEquipment = 'asset::machinery-and-equipment', AssetShortTermInvestmentsInRelatedParties = 'asset::short-term-investments-in-related-parties', ExpenseDuesSubscriptions = 'expense::dues-subscriptions', ExpenseUnappliedCashBillPaymentExpense = 'expense::unapplied-cash-bill-payment-expense', LiabilityGovernmentAndOtherPublicAuthorities = 'liability::government-and-other-public-authorities', EquityHealthcare = 'equity::healthcare', OtherExpenseVehicleRegistration = 'other-expense::vehicle-registration', ExpenseOfficeGeneralAdministrativeExpenses = 'expense::office-general-administrative-expenses', OtherExpenseDepreciation = 'other-expense::depreciation', RevenueCashReceiptIncome = 'revenue::cash-receipt-income', AssetLongTermLoansAndAdvancesToRelatedParties = 'asset::long-term-loans-and-advances-to-related-parties', LiabilityAccruedVacationPayable = 'liability::accrued-vacation-payable', OtherCurrentLiabilityInsurancePayable = 'other-current-liability::insurance-payable', OtherCurrentLiabilitySundryDebtorsAndCreditors = 'other-current-liability::sundry-debtors-and-creditors', EquityEquityInEarningsOfSubsidiuaries = 'equity::equity-in-earnings-of-subsidiuaries', OtherCurrentLiabilityLoanPayable = 'other-current-liability::loan-payable', OtherExpenseExtraordinaryItems = 'other-expense::extraordinary-items', AccountsReceivable = 'accounts-receivable', OtherCurrentLiabilityShortTermBorrowings = 'other-current-liability::short-term-borrowings', AssetParticipatingInterests = 'asset::participating-interests', AssetLoansToOfficers = 'asset::loans-to-officers', EquityCommonStock = 'equity::common-stock', ExpenseRepairMaintenance = 'expense::repair-maintenance', AssetFixedAssetComputers = 'asset::fixed-asset-computers', OtherCurrentLiabilityStateLocalIncomeTaxPayable = 'other-current-liability::state-local-income-tax-payable', ExpenseProjectStudiesSurveysAssessments = 'expense::project-studies-surveys-assessments', ExpenseStaffCosts = 'expense::staff-costs' }
export const enum MessageReadStatus { Failed = 'failed', Sent = 'sent', Delivered = 'delivered', Unsent = 'unsent', Read = 'read' }
export const enum MessageDeliveryStatus { Pending = 'pending', Error = 'error', Delivered = 'delivered', Undeliverable = 'undeliverable', Sent = 'sent', Read = 'read', Failed = 'failed' }
export const enum SupportQueryType { Feedback = 'feedback', Incident = 'incident', Problem = 'problem', Task = 'task', Bug = 'bug', Question = 'question', FeatureRequest = 'feature-request' }
export const enum ImageMimeType { ImageTiff = 'image/tiff', ImagePng = 'image/png', ImageSvgXml = 'image/svg+xml', ImageHeic = 'image/heic', ImageGif = 'image/gif', ImageWebp = 'image/webp', ImageJpeg = 'image/jpeg', ImageBmp = 'image/bmp' }
export const enum OrderingCriteria { PriceDescending = 'price-descending', CreationDate = 'creation-date', Rating = 'rating', Manual = 'manual', Relevance = 'relevance', Alphabetical = 'alphabetical', Popularity = 'popularity', PriceAscending = 'price-ascending' }
export const enum ChatType { Private = 'private', Group = 'group', Public = 'public' }
export const enum ItemAvailabilityStatus { OutOfStock = 'out-of-stock', Active = 'active', Discontinued = 'discontinued', Inactive = 'inactive' }
export const enum FinancialAccountStatus { Closed = 'closed', Frozen = 'frozen', Delinquent = 'delinquent', Suspended = 'suspended', UnderReview = 'under-review', Inactive = 'inactive', Active = 'active' }
export const enum TransactionStatus { Cancelled = 'cancelled', Error = 'error', Initiated = 'initiated', InProgress = 'in-progress', Succeeded = 'succeeded', Failed = 'failed', Pending = 'pending' }
export const enum CreditNoteStatus { Disputed = 'disputed', Issued = 'issued', Void = 'void', Revised = 'revised', Cancelled = 'cancelled', Draft = 'draft', Pending = 'pending', Completed = 'completed', Applied = 'applied' }
export const enum PaymentTerm { Prepayment = 'prepayment', Custom = 'custom', CashWithOrder = 'cash-with-order', Installment = 'installment', UponCompletion = 'upon-completion', Net = 'net', CashInAdvance = 'cash-in-advance', CashBeforeShipment = 'cash-before-shipment', DueEndOfMonth = 'due-end-of-month', Prepaid = 'prepaid', CashOnDelivery = 'cash-on-delivery', Net60 = 'net-60', Net30 = 'net-30', Net90 = 'net-90', DeferredPayment = 'deferred-payment', DueOnReceipt = 'due-on-receipt' }
export const enum EmploymentAndCandidateStatus { InReview = 'in-review', Inactive = 'inactive', Active = 'active', OnLeave = 'on-leave', Terminated = 'terminated', New = 'new', Interviewing = 'interviewing', Hired = 'hired', Other = 'other', OfferExtended = 'offer-extended', NotSelected = 'not-selected' }
export const enum OrganizationalRole { Manager = 'manager', Contractor = 'contractor', Other = 'other', Admin = 'admin', Director = 'director', Supervisor = 'supervisor', Employee = 'employee' }
export const enum CustomerStatus { Archived = 'archived', Pending = 'pending', Suspended = 'suspended', Inactive = 'inactive', Active = 'active' }
export const enum SocialPlatform { Facebook = 'facebook', OtherSocialPlatform = 'other-social-platform', Linkedin = 'linkedin', Instagram = 'instagram', Snapchat = 'snapchat', Pinterest = 'pinterest', Youtube = 'youtube', X = 'x', Twitter = 'twitter', Tiktok = 'tiktok', Reddit = 'reddit', Tumblr = 'tumblr', Skype = 'skype' }
export const enum ConversationStatus { Deleted = 'deleted', Archived = 'archived', Active = 'active' }
export const enum CommunicationRole { User = 'user', Service = 'service', Bot = 'bot', Channel = 'channel', Admin = 'admin', Guest = 'guest', System = 'system', Owner = 'owner', Member = 'member', Group = 'group', Assistant = 'assistant', Moderator = 'moderator' }
export const enum LifecycleStatus { Issued = 'issued', Active = 'active', Redeemed = 'redeemed', Suspended = 'suspended', Cancelled = 'cancelled', Expired = 'expired' }
export const enum PaymentMethod { Cryptocurrency = 'cryptocurrency', DebitCard = 'debit-card', Paypal = 'paypal', BankTransfer = 'bank-transfer', Other = 'other', Cash = 'cash', CreditCard = 'credit-card', MobilePayment = 'mobile-payment', MobileWallet = 'mobile-wallet', CashOnDelivery = 'cash-on-delivery', Check = 'check' }
export const enum FinancialTransactionStatus { Failed = 'failed', Disputed = 'disputed', Cancelled = 'cancelled', Authorized = 'authorized', Pending = 'pending', SettlementInProgress = 'settlement-in-progress', Cleared = 'cleared', Refunded = 'refunded' }
export const enum AuditOpinionType { Unqualified = 'unqualified', Qualified = 'qualified', Adverse = 'adverse', Disclaimer = 'disclaimer' }
export const enum InventoryStorageType { Other = 'other', Consignment = 'consignment', DistributionCenter = 'distribution-center', RetailStore = 'retail-store', OnlineMarketplace = 'online-marketplace', Warehouse = 'warehouse', DropShipper = 'drop-shipper' }
export const enum VisibilityScope { Web = 'web', Internal = 'internal', Private = 'private', Global = 'global', App = 'app' }
export const enum PaymentStatus { Partial = 'partial', Failed = 'failed', Cancelled = 'cancelled', Adjusted = 'adjusted', Pending = 'pending', Succeeded = 'succeeded', Draft = 'draft', Processing = 'processing', Disputed = 'disputed', PartiallyRefunded = 'partially-refunded', Deleted = 'deleted', Authorized = 'authorized', Paid = 'paid', Error = 'error', Refunded = 'refunded', Voided = 'voided', Overdue = 'overdue', Submitted = 'submitted' }
export const enum TransactionChannel { Other = 'other', Mobile = 'mobile', InPerson = 'in-person', BankBranch = 'bank-branch', Telephone = 'telephone', Atm = 'atm', Mail = 'mail', Online = 'online' }
export const enum FinancialDisputeStatus { UnderReview = 'under-review', Escalated = 'escalated', ChargeRefunded = 'charge-refunded', Won = 'won', Lost = 'lost', NeedsResponse = 'needs-response', AwaitingEvidence = 'awaiting-evidence', Closed = 'closed' }
export const enum DeviceUsageType { Educational = 'educational', Business = 'business', Healthcare = 'healthcare', Personal = 'personal', Industrial = 'industrial', Other = 'other', Home = 'home' }
export const enum FinancialTransactionType { ReceiveOverpayment = 'receive-overpayment', Sale = 'sale', Interest = 'interest', ReceivePrepayment = 'receive-prepayment', Deposit = 'deposit', Payment = 'payment', Fee = 'fee', Transfer = 'transfer', Spend = 'spend', Adjustment = 'adjustment', Chargeback = 'chargeback', SpendPrepayment = 'spend-prepayment', Dividend = 'dividend', Withdrawal = 'withdrawal', Refund = 'refund', Receive = 'receive', Other = 'other', Charge = 'charge', SpendOverpayment = 'spend-overpayment' }
export const enum AccessControlModel { Dac = 'dac', Abac = 'abac', Mac = 'mac', Rbac = 'rbac', Custom = 'custom', None = 'none' }
export const enum ParticipantType { User = 'user', Group = 'group', Team = 'team', Organization = 'organization', ExternalParticipant = 'external-participant' }
export const enum PriorityLevel { Elevated = 'elevated', Urgent = 'urgent', High = 'high', Low = 'low', Medium = 'medium' }
export const enum PrerequisiteRangeType { ShippingPrice = 'shipping-price', Subtotal = 'subtotal', Quantity = 'quantity' }
export const enum ContentVisibility { Private = 'private', Public = 'public', Shared = 'shared', Internal = 'internal', Protected = 'protected' }
export const enum EntityCategory { Owner = 'owner', Event = 'event', Person = 'person', Document = 'document', Project = 'project', User = 'user', Link = 'link', Other = 'other', Task = 'task', Message = 'message' }
export const enum GenderIdentity { Male = 'male', PreferNotToSay = 'prefer-not-to-say', Female = 'female', Other = 'other' }
export const enum CommunicationMethod { VideoCall = 'video-call', Mail = 'mail', InPerson = 'in-person', PushNotification = 'push-notification', InstantMessage = 'instant-message', SocialMedia = 'social-media', Text = 'text', Sms = 'sms', Email = 'email', Phone = 'phone', Other = 'other' }
export const enum EmailCategoryType { Transactional = 'transactional', Spam = 'spam', Educational = 'educational', Business = 'business', Promotional = 'promotional', Personal = 'personal', Other = 'other', Governmental = 'governmental' }
export const enum UniversalIdentifierType { Number = 'number', Uuid = 'uuid', Email = 'email', Url = 'url', String = 'string' }
export const enum TaskStatus { InProgress = 'in-progress', Done = 'done', OnHold = 'on-hold', Cancelled = 'cancelled', Todo = 'todo', Blocked = 'blocked' }
export const enum UserStatus { Banned = 'banned', Verified = 'verified', WaitListed = 'wait-listed', Suspended = 'suspended', Archived = 'archived', Pending = 'pending', Deleted = 'deleted', Active = 'active', Inactive = 'inactive' }
export const enum PromotionType { BuyOneGetOne = 'buy-one-get-one', RewardPoints = 'reward-points', Other = 'other', FixedAmount = 'fixed-amount', FreeShipping = 'free-shipping', Percentage = 'percentage' }
export const enum MimeType { ImagePng = 'image/png', ImageWebp = 'image/webp', ImageJpeg = 'image/jpeg', ImageGif = 'image/gif', ImageSvgXml = 'image/svg+xml' }
export const enum TaxType { Variable = 'variable', Additive = 'additive', Inclusive = 'inclusive' }
export const enum ModifierType { Text = 'text', List = 'list' }
export const enum CardType { UnknownCard = 'unknown-card', Credit = 'credit', Debit = 'debit' }
export const enum PrepaidType { Prepaid = 'prepaid', UnknownPrepaid = 'unknown-prepaid', NotPrepaid = 'not-prepaid' }
export const enum EntryMethod { Swiped = 'swiped', Contactless = 'contactless', Emv = 'emv', OnFile = 'on-file', Keyed = 'keyed' }
export const enum CvvStatus { Rejected = 'rejected', Accepted = 'accepted', NotChecked = 'not-checked' }
export const enum AvcStatus { Rejected = 'rejected', NotChecked = 'not-checked', Accepted = 'accepted' }
export const enum CreditType { Prepayment = 'prepayment', Supplier = 'supplier', Customer = 'customer', Overpayment = 'overpayment', Goodwill = 'goodwill' }
export const enum CallDirection { Conference = 'conference', Outbound = 'outbound', Inbound = 'inbound', Unknown = 'unknown' }
export const enum SpeakerRole { Attendee = 'attendee', Invitee = 'invitee' }
export const enum FileType { Folder = 'folder', Url = 'url', File = 'file' }
