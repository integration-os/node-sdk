// This file is auto-generated. Do not edit it manually.

export interface Drives { description?: string;
    updatedAt?: string;
    name?: string;
    model?: string;
    id?: string;
    createdAt?: string }
export interface Folders { size?: number;
    owner?: FileOwners;
    downloadable?: boolean;
    updatedAt?: string;
    parentFolders?: ParentFolders;
    permissions?: Permissions;
    description?: string;
    id?: string;
    model?: string;
    path?: string;
    name?: string;
    createdAt?: string }
export interface Files { size?: number;
    description?: string;
    updatedAt?: string;
    owner?: FileOwners;
    id?: string;
    parentFolders?: ParentFolders[];
    createdAt?: string;
    type?: FileType;
    model?: string;
    permissions?: Permissions;
    extension?: string;
    downloadable?: boolean;
    exportable?: boolean;
    content?: string;
    mimeType?: string;
    name?: string;
    path?: string;
    exportFormats?: string }
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
export interface Metadata { type?: DataType;
    entityId?: string;
    model?: string;
    key?: string;
    createdAt?: string;
    updatedAt?: string;
    entityType?: string;
    id?: string;
    value?: string }
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
export const enum Gender { PreferNotToSay = 'prefer not to say', Other = 'other', Female = 'female', Male = 'male' }
export const enum TargetSelection { All = 'all', Entitled = 'entitled' }
export const enum Format { Json = 'json', Xml = 'xml' }
export const enum ChannelAvailability { InStore = 'in-store', Online = 'online', InApp = 'in-app', AllChannels = 'all-channels' }
export const enum TransactionMethod { BankBranch = 'bank-branch', Mail = 'mail', Atm = 'atm', Online = 'online', Mobile = 'mobile', Telephone = 'telephone' }
export const enum SkuValidation { None = 'none', GlobalUnique = 'global-unique', LocalUnique = 'local-unique' }
export const enum MinimumRequirements { None = 'none', MinimumQuantityOfItems = 'minimum-quantity-of-items', MinimumPurchaseAmount = 'minimum-purchase-amount' }
export const enum AccountType { ExpenseAppropriationsToDepreciation = 'expense::appropriations-to-depreciation', ExpenseOtherRentalCosts = 'expense::other-rental-costs', AssetLeaseBuyout = 'asset::lease-buyout', ExpenseTaxesPaid = 'expense::taxes-paid', OtherCurrentLiabilityFederalIncomeTaxPayable = 'other-current-liability::federal-income-tax-payable', OtherCurrentLiabilityLoanPayable = 'other-current-liability::loan-payable', OtherExpensePenaltiesSettlements = 'other-expense::penalties-settlements', OtherExpenseVehicleInsurance = 'other-expense::vehicle-insurance', EquityTreasuryStock = 'equity::treasury-stock', OtherCurrentLiabilityOtherCurrentLiabilities = 'other-current-liability::other-current-liabilities', OtherExpenseVehicleRepairs = 'other-expense::vehicle-repairs', ExpenseOtherSellingExpenses = 'expense::other-selling-expenses', OtherCurrentLiabilityShortTermBorrowings = 'other-current-liability::short-term-borrowings', OtherCurrentLiabilityTrustAccountsLiabilities = 'other-current-liability::trust-accounts-liabilities', OtherIncomeGainLossOnSaleOfInvestments = 'other-income::gain-loss-on-sale-of-investments', CostOfGoodsSoldOtherCostsOfServiceCos = 'cost-of-goods-sold::other-costs-of-service-cos', OtherCurrentLiabilityInsurancePayable = 'other-current-liability::insurance-payable', AssetOtherAsset = 'asset::other-asset', AssetTrustAccounts = 'asset::trust-accounts', AssetParticipatingInterests = 'asset::participating-interests', ExpenseDuesSubscriptions = 'expense::dues-subscriptions', ExpenseIncomeTaxExpense = 'expense::income-tax-expense', ExpensePayrollExpenses = 'expense::payroll-expenses', LiabilityLongTermBorrowings = 'liability::long-term-borrowings', AssetBuildings = 'asset::buildings', AssetDepletableAssets = 'asset::depletable-assets', AssetProvisionsFixedAssets = 'asset::provisions-fixed-assets', LiabilityProvisionsNonCurrentLiabilities = 'liability::provisions-non-current-liabilities', ExpenseAuto = 'expense::auto', OtherCurrentLiabilityCurrentPortionEmployeeBenefitsObligations = 'other-current-liability::current-portion-employee-benefits-obligations', OtherExpenseDeferredTaxExpense = 'other-expense::deferred-tax-expense', OtherExpenseExtraordinaryItems = 'other-expense::extraordinary-items', LiabilityDeferredTaxLiabilities = 'liability::deferred-tax-liabilities', OtherExpenseVehicle = 'other-expense::vehicle', AssetInventory = 'asset::inventory', AssetMachineryAndEquipment = 'asset::machinery-and-equipment', OtherExpenseVehicleRegistration = 'other-expense::vehicle-registration', RevenueSalesOfProductIncome = 'revenue::sales-of-product-income', AssetExpenditureAuthorisationsAndLettersOfCredit = 'asset::expenditure-authorisations-and-letters-of-credit', ExpenseShippingFreightDelivery = 'expense::shipping-freight-delivery', ExpenseCommissionsAndFees = 'expense::commissions-and-fees', ExpenseTravelMeals = 'expense::travel-meals', AssetShortTermLoansAndAdvancesToRelatedParties = 'asset::short-term-loans-and-advances-to-related-parties', ExpenseAmortizationExpense = 'expense::amortization-expense', RevenueOperatingGrants = 'revenue::operating-grants', RevenueDiscountsRefundsGiven = 'revenue::discounts-refunds-given', AssetLicenses = 'asset::licenses', ExpenseRentOrLeaseOfBuildings = 'expense::rent-or-lease-of-buildings', AssetOtherCurrentAsset = 'asset::other-current-asset', OtherExpenseOtherVehicleExpenses = 'other-expense::other-vehicle-expenses', ExpenseAdvertisingPromotional = 'expense::advertising-promotional', OtherExpenseVehicleLoan = 'other-expense::vehicle-loan', AssetOtherEarMarkedBankAccounts = 'asset::other-ear-marked-bank-accounts', RevenueServiceFeeIncome = 'revenue::service-fee-income', LiabilityLongTermEmployeeBenefitObligations = 'liability::long-term-employee-benefit-obligations', OtherExpenseUtilities = 'other-expense::utilities', OtherCurrentLiabilityRentsInTrustLiability = 'other-current-liability::rents-in-trust-liability', Liability = 'liability', RevenueOtherCurrentOperatingIncome = 'revenue::other-current-operating-income', AssetGlobalTaxRefund = 'asset::global-tax-refund', CostOfGoodsSoldSuppliesMaterialsCogs = 'cost-of-goods-sold::supplies-materials-cogs', CostOfGoodsSoldShippingFreightDeliveryCos = 'cost-of-goods-sold::shipping-freight-delivery-cos', OtherExpenseRentAndLease = 'other-expense::rent-and-lease', OtherIncomeOtherOperatingIncome = 'other-income::other-operating-income', EquityDividendDisbursed = 'equity::dividend-disbursed', ExpenseOtherCurrentOperatingCharges = 'expense::other-current-operating-charges', OtherExpenseHomeOwnerRentalInsurance = 'other-expense::home-owner-rental-insurance', CostOfGoodsSold = 'cost-of-goods-sold', EquityAccumulatedOtherComprehensiveIncome = 'equity::accumulated-other-comprehensive-income', Equity = 'equity', CostOfGoodsSoldFreightAndDeliveryCost = 'cost-of-goods-sold::freight-and-delivery-cost', RevenueSalesWholesale = 'revenue::sales-wholesale', AssetAssetsHeldForSale = 'asset::assets-held-for-sale', CostOfGoodsSoldEquipmentRentalCos = 'cost-of-goods-sold::equipment-rental-cos', ExpenseRepairMaintenance = 'expense::repair-maintenance', AssetCumulativeDepreciationOnIntangibleAssets = 'asset::cumulative-depreciation-on-intangible-assets', ExpenseShippingAndDeliveryExpense = 'expense::shipping-and-delivery-expense', RevenueCashReceiptIncome = 'revenue::cash-receipt-income', ExpenseBankCharges = 'expense::bank-charges', OtherIncomeOtherInvestmentIncome = 'other-income::other-investment-income', ExpenseInsurance = 'expense::insurance', EquityOpeningBalanceEquity = 'equity::opening-balance-equity', ExpenseLegalProfessionalFees = 'expense::legal-professional-fees', OtherExpenseParkingAndTolls = 'other-expense::parking-and-tolls', AssetAccumulatedDepreciation = 'asset::accumulated-depreciation', AssetSecurityDeposits = 'asset::security-deposits', EquityRetainedEarnings = 'equity::retained-earnings', ExpenseDistributionCosts = 'expense::distribution-costs', LiabilityNotesPayable = 'liability::notes-payable', AssetOtherLongTermAssets = 'asset::other-long-term-assets', LiabilityObligationsUnderFinanceLeases = 'liability::obligations-under-finance-leases', OtherExpenseExceptionalItems = 'other-expense::exceptional-items', AssetNonCurrentAssets = 'asset::non-current-assets', LiabilityAccountsPayable = 'liability::accounts-payable', RevenueSalesRetail = 'revenue::sales-retail', RevenueSavingsByTaxScheme = 'revenue::savings-by-tax-scheme', AssetCashAndCashEquivalents = 'asset::cash-and-cash-equivalents', ExpenseInterestPaid = 'expense::interest-paid', AssetFixedAssetPhone = 'asset::fixed-asset-phone', AssetTradeAndOtherReceivables = 'asset::trade-and-other-receivables', ExpenseStaffCosts = 'expense::staff-costs', EquityShareCapital = 'equity::share-capital', AssetAssetsAvailableForSale = 'asset::assets-available-for-sale', AssetEmployeeCashAdvances = 'asset::employee-cash-advances', EquityCommonStock = 'equity::common-stock', EquityPartnerDistributions = 'equity::partner-distributions', LiabilityDebtsRelatedToParticipatingInterests = 'liability::debts-related-to-participating-interests', OtherExpenseRepairsAndMaintenance = 'other-expense::repairs-and-maintenance', OtherIncomeTaxExemptInterest = 'other-income::tax-exempt-interest', ExpenseFinanceCosts = 'expense::finance-costs', ExpensePromotionalMeals = 'expense::promotional-meals', OtherCurrentLiabilitySocialSecurityAgencies = 'other-current-liability::social-security-agencies', OtherCurrentLiabilityDirectDepositPayable = 'other-current-liability::direct-deposit-payable', AssetGlobalTaxDeferred = 'asset::global-tax-deferred', AssetPrepaidExpenses = 'asset::prepaid-expenses', AssetProvisionsCurrentAssets = 'asset::provisions-current-assets', AssetAccumulatedAmortizationOfOtherAssets = 'asset::accumulated-amortization-of-other-assets', LiabilityBankLoans = 'liability::bank-loans', LiabilityOtherLongTermProvisions = 'liability::other-long-term-provisions', AssetSavings = 'asset::savings', AssetInvestmentUsGovernmentObligations = 'asset::investment-us-government-obligations', OtherCurrentLiabilitySundryDebtorsAndCreditors = 'other-current-liability::sundry-debtors-and-creditors', AssetDevelopmentCosts = 'asset::development-costs', AssetFixedAssetPhotoVideo = 'asset::fixed-asset-photo-video', AssetIntangibleAssets = 'asset::intangible-assets', AssetShortTermInvestmentsInRelatedParties = 'asset::short-term-investments-in-related-parties', ExpenseCharitableContributions = 'expense::charitable-contributions', ExpenseSuppliesMaterials = 'expense::supplies-materials', OtherCurrentLiabilityPayrollTaxPayable = 'other-current-liability::payroll-tax-payable', AssetGoodwill = 'asset::goodwill', OtherExpenseDepletion = 'other-expense::depletion', AssetAccumulatedDepletion = 'asset::accumulated-depletion', OtherIncomeLossOnDisposalOfAssets = 'other-income::loss-on-disposal-of-assets', EquityPartnerContributions = 'equity::partner-contributions', LiabilityLongTermDebit = 'liability::long-term-debit', OtherCurrentLiabilityProvisionForWarrantyObligations = 'other-current-liability::provision-for-warranty-obligations', OtherExpenseAmortization = 'other-expense::amortization', OtherIncomeUnrealisedLossOnSecuritiesNetOfTax = 'other-income::unrealised-loss-on-securities-net-of-tax', AssetLongTermLoansAndAdvancesToRelatedParties = 'asset::long-term-loans-and-advances-to-related-parties', RevenueOtherPrimaryIncome = 'revenue::other-primary-income', ExpenseEquipmentRental = 'expense::equipment-rental', RevenueRevenueGeneral = 'revenue::revenue-general', OtherIncomeGainLossOnSaleOfFixedAssets = 'other-income::gain-loss-on-sale-of-fixed-assets', AssetOtherIntangibleAssets = 'asset::other-intangible-assets', LiabilityLongTermLiability = 'liability::long-term-liability', AssetPrepaymentsAndAccruedIncome = 'asset::prepayments-and-accrued-income', EquityPreferredStock = 'equity::preferred-stock', EquityAccumulatedAdjustment = 'equity::accumulated-adjustment', EquityCapitalReserves = 'equity::capital-reserves', AssetMoneyMarket = 'asset::money-market', OtherExpenseExchangeGainOrLoss = 'other-expense::exchange-gain-or-loss', AssetFurnitureAndFixtures = 'asset::furniture-and-fixtures', AssetRentsHeldInTrust = 'asset::rents-held-in-trust', AssetFixedAssetComputers = 'asset::fixed-asset-computers', AssetLongTermInvestments = 'asset::long-term-investments', AssetCashOnHand = 'asset::cash-on-hand', ExpenseExtraordinaryCharges = 'expense::extraordinary-charges', EquityEstimatedTaxes = 'equity::estimated-taxes', OtherCurrentLiabilityCurrentTaxLiability = 'other-current-liability::current-tax-liability', AssetFixedAssetFurniture = 'asset::fixed-asset-furniture', AssetLand = 'asset::land', OtherCurrentLiabilityDutiesAndTaxes = 'other-current-liability::duties-and-taxes', OtherExpense = 'other-expense', ExpenseEntertainmentMeals = 'expense::entertainment-meals', OtherCurrentLiabilitySalesTaxPayable = 'other-current-liability::sales-tax-payable', OtherCurrentLiability = 'other-current-liability', AssetAllowanceForBadDebts = 'asset::allowance-for-bad-debts', AssetIntangibleAssetsUnderDevelopment = 'asset::intangible-assets-under-development', OtherExpenseDepreciation = 'other-expense::depreciation', LiabilityProvisionForLiabilities = 'liability::provision-for-liabilities', AssetAssetsInCourseOfConstruction = 'asset::assets-in-course-of-construction', AssetInvestments = 'asset::investments', ExpenseBorrowingCost = 'expense::borrowing-cost', AssetAccumulatedAmortization = 'asset::accumulated-amortization', AssetFixedAssetSoftware = 'asset::fixed-asset-software', EquityCalledUpShareCapital = 'equity::called-up-share-capital', OtherCurrentLiabilityPayrollClearing = 'other-current-liability::payroll-clearing', AssetOtherCurrentAssets = 'asset::other-current-assets', AssetDeferredTax = 'asset::deferred-tax', OtherCurrentLiabilityGlobalTaxSuspense = 'other-current-liability::global-tax-suspense', OtherCurrentLiabilityGlobalTaxPayable = 'other-current-liability::global-tax-payable', AssetVehicles = 'asset::vehicles', LiabilityOutstandingDuesMicroSmallEnterprise = 'liability::outstanding-dues-micro-small-enterprise', AssetInvestmentMortgageRealEstateLoans = 'asset::investment-mortgage-real-estate-loans', RevenueOwnWorkCapitalized = 'revenue::own-work-capitalized', ExpenseManagementCompensation = 'expense::management-compensation', AssetLeaseholdImprovements = 'asset::leasehold-improvements', AssetUndepositedFunds = 'asset::undeposited-funds', ExpenseOtherBusinessExpenses = 'expense::other-business-expenses', AssetBalWithGovtAuthorities = 'asset::bal-with-govt-authorities', OtherIncomeDividendIncome = 'other-income::dividend-income', ExpenseSundry = 'expense::sundry', OtherExpenseGasAndFuel = 'other-expense::gas-and-fuel', OtherExpensePriorPeriodItems = 'other-expense::prior-period-items', AssetChecking = 'asset::checking', EquityMoneyReceivedAgainstShareWarrants = 'equity::money-received-against-share-warrants', OtherCurrentLiabilityAccruedLiabilities = 'other-current-liability::accrued-liabilities', ExpenseProjectStudiesSurveysAssessments = 'expense::project-studies-surveys-assessments', AssetAvailableForSaleFinancialAssets = 'asset::available-for-sale-financial-assets', ExpenseTravelExpensesSellingExpense = 'expense::travel-expenses-selling-expense', OtherExpenseVehicleLease = 'other-expense::vehicle-lease', OtherExpenseWashAndRoadServices = 'other-expense::wash-and-road-services', ExpenseOfficeGeneralAdministrativeExpenses = 'expense::office-general-administrative-expenses', OtherCurrentLiabilityLineOfCredit = 'other-current-liability::line-of-credit', CostOfGoodsSoldCostOfSales = 'cost-of-goods-sold::cost-of-sales', OtherIncome = 'other-income', OtherCurrentLiabilityInterestPayables = 'other-current-liability::interest-payables', EquityInvestmentGrants = 'equity::investment-grants', AssetFixedAsset = 'asset::fixed-asset', EquityPersonalIncome = 'equity::personal-income', LiabilityCreditCard = 'liability::credit-card', OtherExpenseMortgageInterest = 'other-expense::mortgage-interest', OtherCurrentLiabilityTradeAndOtherPayables = 'other-current-liability::trade-and-other-payables', EquityFunds = 'equity::funds', Expense = 'expense', LiabilityOtherLongTermLiabilities = 'liability::other-long-term-liabilities', AssetLoansToStockholders = 'asset::loans-to-stockholders', OtherIncomeOtherMiscellaneousIncome = 'other-income::other-miscellaneous-income', AssetInvestmentOther = 'asset::investment-other', AssetOtherLongTermLoansAndAdvances = 'asset::other-long-term-loans-and-advances', LiabilityLiabilitiesRelatedToAssetsHeldForSale = 'liability::liabilities-related-to-assets-held-for-sale', AssetBank = 'asset::bank', OtherExpenseHomeOffice = 'other-expense::home-office', ExpenseOtherExternalServices = 'expense::other-external-services', ExpenseEntertainment = 'expense::entertainment', ExpensePenaltiesSettlements = 'expense::penalties-settlements', ExpenseUnappliedCashBillPaymentExpense = 'expense::unapplied-cash-bill-payment-expense', OtherCurrentLiabilityCurrentLiabilities = 'other-current-liability::current-liabilities', AssetOtherLongTermInvestments = 'asset::other-long-term-investments', ExpenseOfficeExpenses = 'expense::office-expenses', Asset = 'asset', EquityOwnersEquity = 'equity::owners-equity', ExpenseExternalServices = 'expense::external-services', OtherExpenseMatCredit = 'other-expense::mat-credit', AssetProvisionsNonCurrentAssets = 'asset::provisions-non-current-assets', RevenueUnappliedCashPaymentIncome = 'revenue::unapplied-cash-payment-income', AssetFixedAssetCopiers = 'asset::fixed-asset-copiers', CostOfGoodsSoldCostOfLaborCos = 'cost-of-goods-sold::cost-of-labor-cos', ExpenseUtilities = 'expense::utilities', OtherCurrentLiabilityStateLocalIncomeTaxPayable = 'other-current-liability::state-local-income-tax-payable', AccountsReceivable = 'accounts-receivable', OtherExpenseOtherHomeOfficeExpenses = 'other-expense::other-home-office-expenses', AssetCalledUpShareCapitalNotPaid = 'asset::called-up-share-capital-not-paid', AssetLoansToOthers = 'asset::loans-to-others', AssetInvestmentTaxExemptSecurities = 'asset::investment-tax-exempt-securities', EquityHealthcare = 'equity::healthcare', ExpenseTravelExpensesGeneralAndAdminExpenses = 'expense::travel-expenses-general-and-admin-expenses', LiabilityAccruedLongTermLiabilities = 'liability::accrued-long-term-liabilities', LiabilityGovernmentAndOtherPublicAuthorities = 'liability::government-and-other-public-authorities', OtherCurrentLiabilityPrepaidExpensesPayable = 'other-current-liability::prepaid-expenses-payable', EquityPaidInCapitalOrSurplus = 'equity::paid-in-capital-or-surplus', LiabilityGroupAndAssociates = 'liability::group-and-associates', ExpensePurchasesRebates = 'expense::purchases-rebates', OtherCurrentLiabilityDividendsPayable = 'other-current-liability::dividends-payable', ExpenseGlobalTaxExpense = 'expense::global-tax-expense', ExpenseLossOnDiscontinuedOperationsNetOfTax = 'expense::loss-on-discontinued-operations-net-of-tax', OtherCurrentLiabilityCurrentPortionOfObligationsUnderFinanceLeases = 'other-current-liability::current-portion-of-obligations-under-finance-leases', ExpenseTravel = 'expense::travel', AssetRetainage = 'asset::retainage', LiabilityAccrualsAndDeferredIncome = 'liability::accruals-and-deferred-income', LiabilityAccruedVacationPayable = 'liability::accrued-vacation-payable', OtherExpenseIncomeTaxOtherExpense = 'other-expense::income-tax-other-expense', OtherExpenseOtherMiscellaneousExpense = 'other-expense::other-miscellaneous-expense', AssetLandAsset = 'asset::land-asset', OtherExpenseTaxRoundoffGainOrLoss = 'other-expense::tax-roundoff-gain-or-loss', EquityOtherFreeReserves = 'equity::other-free-reserves', AssetOrganizationalCosts = 'asset::organizational-costs', OtherExpenseVehicleLoanInterest = 'other-expense::vehicle-loan-interest', OtherIncomeInterestEarned = 'other-income::interest-earned', AssetLoansToOfficers = 'asset::loans-to-officers', AssetInternalTransfers = 'asset::internal-transfers', EquityPartnersEquity = 'equity::partners-equity', AssetOtherFixedAssets = 'asset::other-fixed-assets', OtherCurrentLiabilityStaffAndRelatedLiabilityAccounts = 'other-current-liability::staff-and-related-liability-accounts', ExpenseCostOfLabor = 'expense::cost-of-labor', LiabilityShareholderNotesPayable = 'liability::shareholder-notes-payable', LiabilityStaffAndRelatedLongTermLiabilityAccounts = 'liability::staff-and-related-long-term-liability-accounts', OtherCurrentLiabilityProvisionsCurrentLiabilities = 'other-current-liability::provisions-current-liabilities', RevenueNonProfitIncome = 'revenue::non-profit-income', AssetFixedAssetOtherToolsEquipment = 'asset::fixed-asset-other-tools-equipment', EquityPersonalExpense = 'equity::personal-expense', ExpenseOtherMiscellaneousServiceCost = 'expense::other-miscellaneous-service-cost', AssetCapitalWip = 'asset::capital-wip', EquityEquityInEarningsOfSubsidiuaries = 'equity::equity-in-earnings-of-subsidiuaries', RevenueIncome = 'revenue::income', AssetOtherConsumables = 'asset::other-consumables', EquityShareApplicationMoneyPendingAllotment = 'equity::share-application-money-pending-allotment', ExpenseBadDebts = 'expense::bad-debts', LiabilityOutstandingDuesOtherThanMicroSmallEnterprise = 'liability::outstanding-dues-other-than-micro-small-enterprise', Income = 'income' }
export const enum CustomerEligibility { SpecificCustomerGroups = 'specific-customer-groups', All = 'all', SpecificCustomers = 'specific-customers' }
export const enum AppliesTo { SpecificItems = 'specific-items', SpecificCategories = 'specific-categories', AllItems = 'all-items' }
export const enum Status { Scheduled = 'scheduled', Active = 'active', Expired = 'expired' }
export const enum CustomerSelection { Prerequisite = 'prerequisite', All = 'all' }
export const enum Roles { Moderator = 'moderator', Admin = 'admin', User = 'user' }
export const enum AllocationMethod { Across = 'across', Each = 'each' }
export const enum TargetType { ShippingLine = 'shipping-line', LineItem = 'line-item' }
export const enum Country { Oman = 'oman', Finland = 'finland', Sweden = 'sweden', Vanuatu = 'vanuatu', CzechRepublic = 'czech-republic', SaudiArabia = 'saudi-arabia', Uruguay = 'uruguay', SaintKittsAndNevis = 'saint-kitts-and-nevis', AntiguaAndBarbuda = 'antigua-and-barbuda', Austria = 'austria', Ireland = 'ireland', Kiribati = 'kiribati', Suriname = 'suriname', Chad = 'chad', MarshallIslands = 'marshall-islands', Peru = 'peru', Tajikistan = 'tajikistan', Liberia = 'liberia', Ghana = 'ghana', Belarus = 'belarus', Bolivia = 'bolivia', Gambia = 'gambia', Mozambique = 'mozambique', Belgium = 'belgium', CentralAfricanRepublic = 'central-african-republic', Nigeria = 'nigeria', Djibouti = 'djibouti', Guatemala = 'guatemala', Cuba = 'cuba', Denmark = 'denmark', Dominica = 'dominica', Eritrea = 'eritrea', Malaysia = 'malaysia', Mongolia = 'mongolia', NorthKorea = 'north-korea', Malta = 'malta', NewZealand = 'new-zealand', Barbados = 'barbados', Poland = 'poland', NorthMacedonia = 'north-macedonia', Portugal = 'portugal', Rwanda = 'rwanda', Samoa = 'samoa', SaoTomeAndPrincipe = 'sao-tome-and-principe', Slovenia = 'slovenia', Paraguay = 'paraguay', Seychelles = 'seychelles', Syria = 'syria', Tonga = 'tonga', Tuvalu = 'tuvalu', Senegal = 'senegal', Vietnam = 'vietnam', Moldova = 'moldova', Mali = 'mali', Bangladesh = 'bangladesh', CaboVerde = 'cabo-verde', Malawi = 'malawi', Myanmar = 'myanmar', Angola = 'angola', Cyprus = 'cyprus', UnitedStates = 'united-states', VaticanCity = 'vatican-city', Afghanistan = 'afghanistan', Azerbaijan = 'azerbaijan', SaintVincentAndTheGrenadines = 'saint-vincent-and-the-grenadines', Uzbekistan = 'uzbekistan', Bhutan = 'bhutan', CoteDIvoire = 'cote-d-ivoire', Ethiopia = 'ethiopia', Maldives = 'maldives', Belize = 'belize', Iceland = 'iceland', Egypt = 'egypt', Laos = 'laos', Morocco = 'morocco', Turkmenistan = 'turkmenistan', Netherlands = 'netherlands', Brazil = 'brazil', Algeria = 'algeria', DominicanRepublic = 'dominican-republic', Iran = 'iran', Luxembourg = 'luxembourg', Spain = 'spain', ElSalvador = 'el-salvador', Slovakia = 'slovakia', EquatorialGuinea = 'equatorial-guinea', France = 'france', Bulgaria = 'bulgaria', Ecuador = 'ecuador', Honduras = 'honduras', Philippines = 'philippines', Singapore = 'singapore', Palestine = 'palestine', Armenia = 'armenia', Norway = 'norway', Hungary = 'hungary', Sudan = 'sudan', Albania = 'albania', Italy = 'italy', Canada = 'canada', SanMarino = 'san-marino', Guyana = 'guyana', Tanzania = 'tanzania', UnitedArabEmirates = 'united-arab-emirates', Togo = 'togo', BosniaAndHerzegovina = 'bosnia-and-herzegovina', Iraq = 'iraq', Croatia = 'croatia', SouthAfrica = 'south-africa', Libya = 'libya', Uganda = 'uganda', Fiji = 'fiji', Kazakhstan = 'kazakhstan', Venezuela = 'venezuela', Zambia = 'zambia', Kuwait = 'kuwait', Nauru = 'nauru', Russia = 'russia', Zimbabwe = 'zimbabwe', Switzerland = 'switzerland', Germany = 'germany', Somalia = 'somalia', Bahamas = 'bahamas', Cameroon = 'cameroon', Chile = 'chile', Mauritius = 'mauritius', China = 'china', Romania = 'romania', Andorra = 'andorra', Benin = 'benin', Brunei = 'brunei', Argentina = 'argentina', Israel = 'israel', Haiti = 'haiti', Panama = 'panama', TrinidadAndTobago = 'trinidad-and-tobago', UnitedKingdom = 'united-kingdom', Latvia = 'latvia', Ukraine = 'ukraine', SouthSudan = 'south-sudan', Bahrain = 'bahrain', Georgia = 'georgia', Jordan = 'jordan', Qatar = 'qatar', BurkinaFaso = 'burkina-faso', SierraLeone = 'sierra-leone', GuineaBissau = 'guinea-bissau', Cambodia = 'cambodia', Namibia = 'namibia', Mexico = 'mexico', Lithuania = 'lithuania', Monaco = 'monaco', Palau = 'palau', SouthKorea = 'south-korea', Colombia = 'colombia', Niger = 'niger', SriLanka = 'sri-lanka', Taiwan = 'taiwan', Tunisia = 'tunisia', Jamaica = 'jamaica', Grenada = 'grenada', Liechtenstein = 'liechtenstein', Montenegro = 'montenegro', Yemen = 'yemen', CongoRepublic = 'congo-republic', Turkey = 'turkey', SolomonIslands = 'solomon-islands', Greece = 'greece', Eswatini = 'eswatini', Lebanon = 'lebanon', Australia = 'australia', Kenya = 'kenya', Burundi = 'burundi', Botswana = 'botswana', Micronesia = 'micronesia', Indonesia = 'indonesia', Pakistan = 'pakistan', Nicaragua = 'nicaragua', PapuaNewGuinea = 'papua-new-guinea', Serbia = 'serbia', Thailand = 'thailand', Comoros = 'comoros', Kyrgyzstan = 'kyrgyzstan', CongoDemocraticRepublic = 'congo-democratic-republic', Lesotho = 'lesotho', Japan = 'japan', India = 'india', Gabon = 'gabon', Mauritania = 'mauritania', SaintLucia = 'saint-lucia', Estonia = 'estonia', Guinea = 'guinea', TimorLeste = 'timor-leste', CostaRica = 'costa-rica', Nepal = 'nepal', Madagascar = 'madagascar' }
export const enum GlobalTaxType { SalesTax = 'sales-tax', Gst = 'gst', CustomsDuty = 'customs-duty', PropertyTax = 'property-tax', ExciseTax = 'excise-tax', Other = 'other', Vat = 'vat' }
export const enum IdentityProvider { Facebook = 'facebook', Signal = 'signal', Wechat = 'wechat', Telegram = 'telegram', Apple = 'apple', Instagram = 'instagram', Slack = 'slack', Qq = 'qq', Github = 'github', Google = 'google', Yahoo = 'yahoo', Pinterest = 'pinterest', Snapchat = 'snapchat', Discord = 'discord', Whatsapp = 'whatsapp', Vimeo = 'vimeo', Twitter = 'twitter', Linkedin = 'linkedin', Tiktok = 'tiktok', Dribbble = 'dribbble', Tumblr = 'tumblr', Line = 'line', Other = 'other', Foursquare = 'foursquare', Amazon = 'amazon', Behance = 'behance', Flickr = 'flickr', Paypal = 'paypal', Reddit = 'reddit', Microsoft = 'microsoft' }
export const enum AccountEngagementLevel { Hot = 'hot', Warm = 'warm', Cold = 'cold', Unknown = 'unknown' }
export const enum ReviewApprovalStatus { Pending = 'pending', InReview = 'in-review', Approved = 'approved', Rejected = 'rejected', Revised = 'revised' }
export const enum StakeholderType { Other = 'other', Vendor = 'vendor', Partner = 'partner', Competitor = 'competitor', Customer = 'customer', Investor = 'investor' }
export const enum AccountStatus { Closed = 'closed', Active = 'active', Pending = 'pending', Inactive = 'inactive', Suspended = 'suspended' }
export const enum CampaignStatus { Planned = 'planned', Scheduled = 'scheduled', Paused = 'paused', Active = 'active', Archived = 'archived', Completed = 'completed', Draft = 'draft', Cancelled = 'cancelled' }
export const enum CustomerType { Corporate = 'corporate', B2b = 'b2b', B2c = 'b2c', Wholesale = 'wholesale', Online = 'online', Retail = 'retail' }
export const enum MessageContentType { Text = 'text', Image = 'image', Location = 'location', Sticker = 'sticker', Video = 'video', Gif = 'gif', Audio = 'audio', Voice = 'voice', Link = 'link', Document = 'document', File = 'file', Contact = 'contact' }
export const enum ReactionType { Love = 'love', Bookmark = 'bookmark', Laugh = 'laugh', Dislike = 'dislike', Sad = 'sad', Angry = 'angry', Interested = 'interested', Wow = 'wow', Like = 'like' }
export const enum SupportTicketPriority { High = 'high', Urgent = 'urgent', Low = 'low', Immediate = 'immediate', Medium = 'medium' }
export const enum IssueLifecycleStatus { Closed = 'closed', Open = 'open', Resolved = 'resolved', InProgress = 'in-progress', Pending = 'pending', OnHold = 'on-hold', Cancelled = 'cancelled' }
export const enum OrderStatus { Disputed = 'disputed', Abandoned = 'abandoned', Returned = 'returned', Pending = 'pending', AwaitingShipment = 'awaiting-shipment', Failed = 'failed', OnHold = 'on-hold', AwaitingPayment = 'awaiting-payment', Processing = 'processing', Draft = 'draft', PartiallyFulfilled = 'partially-fulfilled', AwaitingPickup = 'awaiting-pickup', Delivered = 'delivered', Completed = 'completed', Confirmed = 'confirmed', Refunded = 'refunded', Shipped = 'shipped', Cancelled = 'cancelled' }
export const enum DiscountType { FixedAmount = 'fixed-amount', VariableAmount = 'variable-amount', UnknownDiscount = 'unknown-discount', VariablePercentage = 'variable-percentage', BuyOneGetOne = 'buy-one-get-one', Percentage = 'percentage', ConditionalDiscount = 'conditional-discount', TieredDiscount = 'tiered-discount' }
export const enum FulfillmentStatus { Pending = 'pending', Delivered = 'delivered', Cancelled = 'cancelled', Failure = 'failure', InTransit = 'in-transit', Returned = 'returned' }
export const enum ProductAvailabilityStatus { PreOrder = 'pre-order', OutOfStock = 'out-of-stock', BackOrder = 'back-order', Discontinued = 'discontinued', InStock = 'in-stock' }
export const enum ExpenseApprovalStatus { Pending = 'pending', Processed = 'processed', Approved = 'approved', Cancelled = 'cancelled', New = 'new', Reimbursed = 'reimbursed', Reviewing = 'reviewing', Denied = 'denied' }
export const enum FinancialChargeType { Commission = 'commission', InterestCharge = 'interest-charge', ServiceCharge = 'service-charge', Other = 'other', TransactionFee = 'transaction-fee', LateFee = 'late-fee', ProcessingFee = 'processing-fee' }
export const enum BillingStatus { Pending = 'pending', Draft = 'draft', Authorised = 'authorised', PartiallyPaid = 'partially-paid', Submitted = 'submitted', Paid = 'paid', Unpaid = 'unpaid', Voided = 'voided', Deleted = 'deleted', Overdue = 'overdue' }
export const enum InvoiceAdjustmentType { Discount = 'discount', Tax = 'tax', Tip = 'tip', Other = 'other', Shipping = 'shipping' }
export const enum DataType { Object = 'object', Binary = 'binary', Number = 'number', Array = 'array', Timestamp = 'timestamp', Date = 'date', Boolean = 'boolean', Null = 'null', Undefined = 'undefined', Custom = 'custom', String = 'string', Json = 'json' }
export const enum EmploymentType { Permanent = 'permanent', Contract = 'contract', Internship = 'internship', Freelance = 'freelance', Seasonal = 'seasonal', PartTime = 'part-time', Temporary = 'temporary', FullTime = 'full-time', Volunteer = 'volunteer' }
export const enum TimeCycle { Biennially = 'biennially', Quarterly = 'quarterly', Biweekly = 'biweekly', Minutely = 'minutely', Weekly = 'weekly', Triennially = 'triennially', AdHoc = 'ad-hoc', SemiMonthly = 'semi-monthly', Hourly = 'hourly', SemiAnnually = 'semi-annually', Daily = 'daily', Monthly = 'monthly', Annually = 'annually', Custom = 'custom', Secondly = 'secondly' }
export const enum FinancialTrackingCategories { Class = 'class', Department = 'department', Customer = 'customer', Service = 'service', Other = 'other', CostCenter = 'cost-center', Vendor = 'vendor', None = 'none', Project = 'project', Location = 'location', Division = 'division', Employee = 'employee', Product = 'product' }
export const enum CampaignType { SocialMedia = 'social-media', SearchEngine = 'search-engine', Display = 'display', Other = 'other', Email = 'email' }
export const enum ContactAddressType { Shipping = 'shipping', Work = 'work', Home = 'home', Temporary = 'temporary', Business = 'business', Other = 'other', Personal = 'personal', Billing = 'billing' }
export const enum LeadLifecycleStatus { AttemptedToContact = 'attempted-to-contact', BadTiming = 'bad-timing', Lost = 'lost', Unqualified = 'unqualified', New = 'new', Connected = 'connected', Open = 'open', Converted = 'converted', InProcess = 'in-process', Revisited = 'revisited' }
export const enum ParticipantEngagementStatus { Inactive = 'inactive', Admin = 'admin', Banned = 'banned', Active = 'active', Guest = 'guest', Left = 'left', Moderator = 'moderator' }
export const enum ItemEntityStatus { Active = 'active', Inactive = 'inactive', Suspended = 'suspended', Pending = 'pending', Deleted = 'deleted', Archived = 'archived', Completed = 'completed' }
export const enum Currency { MXN = 'mxn', TTD = 'ttd', ANG = 'ang', LYD = 'lyd', KGS = 'kgs', GEL = 'gel', BZD = 'bzd', JOD = 'jod', AWG = 'awg', TJS = 'tjs', XOF = 'xof', BOB = 'bob', SRD = 'srd', USD = 'usd', MMK = 'mmk', BSD = 'bsd', NPR = 'npr', AZN = 'azn', CLP = 'clp', CRC = 'crc', CUC = 'cuc', IDR = 'idr', SBD = 'sbd', SHP = 'shp', GTQ = 'gtq', HUF = 'huf', DOP = 'dop', PEN = 'pen', PGK = 'pgk', LAK = 'lak', SOS = 'sos', TMT = 'tmt', XAF = 'xaf', XPF = 'xpf', KES = 'kes', PAB = 'pab', TOP = 'top', YER = 'yer', AOA = 'aoa', CAD = 'cad', JEP = 'jep', BWP = 'bwp', KPW = 'kpw', AUD = 'aud', CDF = 'cdf', BYN = 'byn', FOK = 'fok', MYR = 'myr', SLL = 'sll', TND = 'tnd', FKP = 'fkp', LSL = 'lsl', ILS = 'ils', SYP = 'syp', MDL = 'mdl', MUR = 'mur', WST = 'wst', KZT = 'kzt', AFN = 'afn', AMD = 'amd', IMP = 'imp', UGX = 'ugx', BDT = 'bdt', GNF = 'gnf', LKR = 'lkr', MZN = 'mzn', NAD = 'nad', ARS = 'ars', CZK = 'czk', KRW = 'krw', PYG = 'pyg', JPY = 'jpy', ALL = 'all', HKD = 'hkd', BBD = 'bbd', DJF = 'djf', GGP = 'ggp', LRD = 'lrd', HNL = 'hnl', MOP = 'mop', KYD = 'kyd', THB = 'thb', EGP = 'egp', HRK = 'hrk', MAD = 'mad', SDG = 'sdg', HTG = 'htg', MKD = 'mkd', NIO = 'nio', TZS = 'tzs', MGA = 'mga', ERN = 'ern', STN = 'stn', DKK = 'dkk', GHS = 'ghs', XCD = 'xcd', INR = 'inr', SCR = 'scr', RON = 'ron', SGD = 'sgd', BTN = 'btn', TWD = 'twd', CVE = 'cve', CHF = 'chf', CNY = 'cny', DZD = 'dzd', NZD = 'nzd', VUV = 'vuv', GMD = 'gmd', PLN = 'pln', GIP = 'gip', ZWL = 'zwl', BGN = 'bgn', SEK = 'sek', KID = 'kid', BRL = 'brl', QAR = 'qar', AED = 'aed', NGN = 'ngn', JMD = 'jmd', MRU = 'mru', SAR = 'sar', MWK = 'mwk', RUB = 'rub', BIF = 'bif', EUR = 'eur', BHD = 'bhd', VND = 'vnd', TVD = 'tvd', MNT = 'mnt', BND = 'bnd', OMR = 'omr', UAH = 'uah', GBP = 'gbp', RWF = 'rwf', MVR = 'mvr', FJD = 'fjd', RSD = 'rsd', XDR = 'xdr', UYU = 'uyu', IRR = 'irr', SZL = 'szl', LBP = 'lbp', PKR = 'pkr', COP = 'cop', TRY = 'try', KHR = 'khr', ZMW = 'zmw', ETB = 'etb', ISK = 'isk', KMF = 'kmf', VES = 'ves', PHP = 'php', KWD = 'kwd', BAM = 'bam', NOK = 'nok', UZS = 'uzs', CUP = 'cup', GYD = 'gyd', IQD = 'iqd', BMD = 'bmd', ZAR = 'zar', SSP = 'ssp' }
export const enum CustomerEligibilityStatus { VipCustomers = 'vip-customers', NewCustomers = 'new-customers', AllCustomers = 'all-customers', ReturningCustomers = 'returning-customers', Other = 'other', SpecificConditions = 'specific-conditions' }
export const enum ItemCondition { Damaged = 'damaged', New = 'new', Used = 'used', OpenBox = 'open-box', Refurbished = 'refurbished', LikeNew = 'like-new' }
export const enum TransactionType { Fee = 'fee', Payment = 'payment', Deposit = 'deposit', Charge = 'charge', Adjustment = 'adjustment', Transfer = 'transfer', Withdrawal = 'withdrawal', Refund = 'refund' }
export const enum EntityLifecycleStatus { Scheduled = 'scheduled', Archived = 'archived', Preorder = 'preorder', Active = 'active', Draft = 'draft', Deleted = 'deleted', Inactive = 'inactive' }
export const enum JournalEntryStatus { Voided = 'voided', Posted = 'posted', Draft = 'draft', Error = 'error', Pending = 'pending', Corrected = 'corrected' }
export const enum DayOfWeek { Monday = 'monday', Saturday = 'saturday', Thursday = 'thursday', Sunday = 'sunday', Tuesday = 'tuesday', Wednesday = 'wednesday', Friday = 'friday' }
export const enum AccountingAccountType { AssetTrustAccounts = 'asset::trust-accounts', ExpenseStaffCosts = 'expense::staff-costs', AssetCalledUpShareCapitalNotPaid = 'asset::called-up-share-capital-not-paid', OtherIncomeOtherInvestmentIncome = 'other-income::other-investment-income', AssetMoneyMarket = 'asset::money-market', OtherExpense = 'other-expense', ExpenseTaxesPaid = 'expense::taxes-paid', ExpenseManagementCompensation = 'expense::management-compensation', EquityInvestmentGrants = 'equity::investment-grants', ExpenseFinanceCosts = 'expense::finance-costs', ExpenseOfficeExpenses = 'expense::office-expenses', RevenueRevenueGeneral = 'revenue::revenue-general', OtherExpenseGasAndFuel = 'other-expense::gas-and-fuel', AssetFurnitureAndFixtures = 'asset::furniture-and-fixtures', AssetSecurityDeposits = 'asset::security-deposits', ExpenseCharitableContributions = 'expense::charitable-contributions', ExpenseDistributionCosts = 'expense::distribution-costs', OtherExpenseOtherHomeOfficeExpenses = 'other-expense::other-home-office-expenses', OtherExpenseOtherVehicleExpenses = 'other-expense::other-vehicle-expenses', OtherCurrentLiabilityCurrentTaxLiability = 'other-current-liability::current-tax-liability', EquityPartnerContributions = 'equity::partner-contributions', EquityPersonalExpense = 'equity::personal-expense', OtherCurrentLiabilityOtherCurrentLiabilities = 'other-current-liability::other-current-liabilities', LiabilityGroupAndAssociates = 'liability::group-and-associates', AssetProvisionsFixedAssets = 'asset::provisions-fixed-assets', AssetLongTermInvestments = 'asset::long-term-investments', EquityEquityInEarningsOfSubsidiuaries = 'equity::equity-in-earnings-of-subsidiuaries', ExpensePayrollExpenses = 'expense::payroll-expenses', AssetRentsHeldInTrust = 'asset::rents-held-in-trust', OtherExpenseParkingAndTolls = 'other-expense::parking-and-tolls', OtherIncomeDividendIncome = 'other-income::dividend-income', LiabilityLongTermEmployeeBenefitObligations = 'liability::long-term-employee-benefit-obligations', AssetOtherLongTermAssets = 'asset::other-long-term-assets', ExpenseLegalProfessionalFees = 'expense::legal-professional-fees', LiabilityLongTermDebit = 'liability::long-term-debit', ExpenseIncomeTaxExpense = 'expense::income-tax-expense', AssetNonCurrentAssets = 'asset::non-current-assets', AssetChecking = 'asset::checking', AssetGlobalTaxDeferred = 'asset::global-tax-deferred', RevenueNonProfitIncome = 'revenue::non-profit-income', Expense = 'expense', AssetPrepaymentsAndAccruedIncome = 'asset::prepayments-and-accrued-income', LiabilityOutstandingDuesOtherThanMicroSmallEnterprise = 'liability::outstanding-dues-other-than-micro-small-enterprise', RevenueIncome = 'revenue::income', EquityPartnerDistributions = 'equity::partner-distributions', OtherExpenseTaxRoundoffGainOrLoss = 'other-expense::tax-roundoff-gain-or-loss', LiabilityNotesPayable = 'liability::notes-payable', OtherCurrentLiabilityInsurancePayable = 'other-current-liability::insurance-payable', AssetFixedAssetPhotoVideo = 'asset::fixed-asset-photo-video', OtherExpenseDepreciation = 'other-expense::depreciation', ExpenseTravelMeals = 'expense::travel-meals', OtherCurrentLiabilityFederalIncomeTaxPayable = 'other-current-liability::federal-income-tax-payable', OtherCurrentLiabilityCurrentPortionEmployeeBenefitsObligations = 'other-current-liability::current-portion-employee-benefits-obligations', AssetOrganizationalCosts = 'asset::organizational-costs', AssetMachineryAndEquipment = 'asset::machinery-and-equipment', ExpenseTravelExpensesGeneralAndAdminExpenses = 'expense::travel-expenses-general-and-admin-expenses', OtherExpenseVehicle = 'other-expense::vehicle', AssetOtherCurrentAsset = 'asset::other-current-asset', OtherExpenseHomeOwnerRentalInsurance = 'other-expense::home-owner-rental-insurance', EquityShareCapital = 'equity::share-capital', ExpenseOtherBusinessExpenses = 'expense::other-business-expenses', LiabilityDeferredTaxLiabilities = 'liability::deferred-tax-liabilities', CostOfGoodsSoldEquipmentRentalCos = 'cost-of-goods-sold::equipment-rental-cos', OtherExpenseVehicleRegistration = 'other-expense::vehicle-registration', ExpenseBankCharges = 'expense::bank-charges', OtherCurrentLiabilityLineOfCredit = 'other-current-liability::line-of-credit', AssetLongTermLoansAndAdvancesToRelatedParties = 'asset::long-term-loans-and-advances-to-related-parties', OtherCurrentLiabilityStateLocalIncomeTaxPayable = 'other-current-liability::state-local-income-tax-payable', OtherCurrentLiabilityPrepaidExpensesPayable = 'other-current-liability::prepaid-expenses-payable', EquityHealthcare = 'equity::healthcare', RevenueSalesRetail = 'revenue::sales-retail', LiabilityBankLoans = 'liability::bank-loans', RevenueSavingsByTaxScheme = 'revenue::savings-by-tax-scheme', AssetAssetsInCourseOfConstruction = 'asset::assets-in-course-of-construction', AssetAccumulatedAmortizationOfOtherAssets = 'asset::accumulated-amortization-of-other-assets', AssetLandAsset = 'asset::land-asset', OtherExpenseExtraordinaryItems = 'other-expense::extraordinary-items', AssetLoansToOthers = 'asset::loans-to-others', LiabilityProvisionForLiabilities = 'liability::provision-for-liabilities', AssetInvestmentOther = 'asset::investment-other', CostOfGoodsSoldOtherCostsOfServiceCos = 'cost-of-goods-sold::other-costs-of-service-cos', OtherIncomeInterestEarned = 'other-income::interest-earned', OtherIncomeOtherOperatingIncome = 'other-income::other-operating-income', OtherCurrentLiabilityDirectDepositPayable = 'other-current-liability::direct-deposit-payable', ExpensePromotionalMeals = 'expense::promotional-meals', AssetVehicles = 'asset::vehicles', ExpenseTravelExpensesSellingExpense = 'expense::travel-expenses-selling-expense', LiabilityStaffAndRelatedLongTermLiabilityAccounts = 'liability::staff-and-related-long-term-liability-accounts', OtherExpenseDeferredTaxExpense = 'other-expense::deferred-tax-expense', RevenueOtherCurrentOperatingIncome = 'revenue::other-current-operating-income', CostOfGoodsSoldSuppliesMaterialsCogs = 'cost-of-goods-sold::supplies-materials-cogs', AssetFixedAssetCopiers = 'asset::fixed-asset-copiers', OtherIncomeUnrealisedLossOnSecuritiesNetOfTax = 'other-income::unrealised-loss-on-securities-net-of-tax', OtherCurrentLiabilityRentsInTrustLiability = 'other-current-liability::rents-in-trust-liability', LiabilityLongTermBorrowings = 'liability::long-term-borrowings', EquityCalledUpShareCapital = 'equity::called-up-share-capital', OtherIncomeOtherMiscellaneousIncome = 'other-income::other-miscellaneous-income', ExpenseOtherMiscellaneousServiceCost = 'expense::other-miscellaneous-service-cost', AssetBank = 'asset::bank', LiabilityObligationsUnderFinanceLeases = 'liability::obligations-under-finance-leases', AssetIntangibleAssetsUnderDevelopment = 'asset::intangible-assets-under-development', RevenueOwnWorkCapitalized = 'revenue::own-work-capitalized', OtherIncomeGainLossOnSaleOfFixedAssets = 'other-income::gain-loss-on-sale-of-fixed-assets', EquityShareApplicationMoneyPendingAllotment = 'equity::share-application-money-pending-allotment', LiabilityDebtsRelatedToParticipatingInterests = 'liability::debts-related-to-participating-interests', AssetOtherFixedAssets = 'asset::other-fixed-assets', AssetAccumulatedDepreciation = 'asset::accumulated-depreciation', AssetOtherCurrentAssets = 'asset::other-current-assets', OtherExpenseAmortization = 'other-expense::amortization', OtherExpenseHomeOffice = 'other-expense::home-office', OtherExpenseMortgageInterest = 'other-expense::mortgage-interest', AssetOtherEarMarkedBankAccounts = 'asset::other-ear-marked-bank-accounts', OtherExpenseVehicleLoan = 'other-expense::vehicle-loan', OtherCurrentLiabilityDutiesAndTaxes = 'other-current-liability::duties-and-taxes', LiabilityLiabilitiesRelatedToAssetsHeldForSale = 'liability::liabilities-related-to-assets-held-for-sale', ExpenseOtherSellingExpenses = 'expense::other-selling-expenses', RevenueSalesWholesale = 'revenue::sales-wholesale', RevenueCashReceiptIncome = 'revenue::cash-receipt-income', AssetParticipatingInterests = 'asset::participating-interests', EquityDividendDisbursed = 'equity::dividend-disbursed', ExpenseExtraordinaryCharges = 'expense::extraordinary-charges', EquityCapitalReserves = 'equity::capital-reserves', AssetAssetsHeldForSale = 'asset::assets-held-for-sale', AssetCashAndCashEquivalents = 'asset::cash-and-cash-equivalents', AssetOtherAsset = 'asset::other-asset', OtherCurrentLiabilityShortTermBorrowings = 'other-current-liability::short-term-borrowings', AssetLand = 'asset::land', OtherExpenseUtilities = 'other-expense::utilities', RevenueOtherPrimaryIncome = 'revenue::other-primary-income', ExpenseEquipmentRental = 'expense::equipment-rental', ExpenseOtherExternalServices = 'expense::other-external-services', OtherCurrentLiabilityAccruedLiabilities = 'other-current-liability::accrued-liabilities', EquityAccumulatedAdjustment = 'equity::accumulated-adjustment', EquityTreasuryStock = 'equity::treasury-stock', ExpenseAmortizationExpense = 'expense::amortization-expense', ExpenseAuto = 'expense::auto', OtherCurrentLiabilityInterestPayables = 'other-current-liability::interest-payables', EquityEstimatedTaxes = 'equity::estimated-taxes', AssetOtherIntangibleAssets = 'asset::other-intangible-assets', AssetOtherLongTermLoansAndAdvances = 'asset::other-long-term-loans-and-advances', AssetDevelopmentCosts = 'asset::development-costs', ExpenseShippingAndDeliveryExpense = 'expense::shipping-and-delivery-expense', OtherExpenseIncomeTaxOtherExpense = 'other-expense::income-tax-other-expense', LiabilityAccrualsAndDeferredIncome = 'liability::accruals-and-deferred-income', OtherCurrentLiabilityCurrentLiabilities = 'other-current-liability::current-liabilities', OtherIncome = 'other-income', CostOfGoodsSold = 'cost-of-goods-sold', EquityPaidInCapitalOrSurplus = 'equity::paid-in-capital-or-surplus', ExpenseOtherRentalCosts = 'expense::other-rental-costs', CostOfGoodsSoldFreightAndDeliveryCost = 'cost-of-goods-sold::freight-and-delivery-cost', OtherCurrentLiabilityLoanPayable = 'other-current-liability::loan-payable', OtherCurrentLiabilityGlobalTaxPayable = 'other-current-liability::global-tax-payable', RevenueServiceFeeIncome = 'revenue::service-fee-income', ExpenseCostOfLabor = 'expense::cost-of-labor', AssetCumulativeDepreciationOnIntangibleAssets = 'asset::cumulative-depreciation-on-intangible-assets', LiabilityOutstandingDuesMicroSmallEnterprise = 'liability::outstanding-dues-micro-small-enterprise', RevenueOperatingGrants = 'revenue::operating-grants', AssetInvestmentMortgageRealEstateLoans = 'asset::investment-mortgage-real-estate-loans', AssetOtherConsumables = 'asset::other-consumables', AssetFixedAssetPhone = 'asset::fixed-asset-phone', OtherCurrentLiabilitySundryDebtorsAndCreditors = 'other-current-liability::sundry-debtors-and-creditors', RevenueDiscountsRefundsGiven = 'revenue::discounts-refunds-given', LiabilityAccruedLongTermLiabilities = 'liability::accrued-long-term-liabilities', EquityFunds = 'equity::funds', AssetAccumulatedAmortization = 'asset::accumulated-amortization', ExpenseExternalServices = 'expense::external-services', OtherExpensePenaltiesSettlements = 'other-expense::penalties-settlements', OtherCurrentLiabilityTrustAccountsLiabilities = 'other-current-liability::trust-accounts-liabilities', RevenueUnappliedCashPaymentIncome = 'revenue::unapplied-cash-payment-income', LiabilityAccountsPayable = 'liability::accounts-payable', LiabilityShareholderNotesPayable = 'liability::shareholder-notes-payable', AssetInvestments = 'asset::investments', OtherExpenseExceptionalItems = 'other-expense::exceptional-items', ExpenseShippingFreightDelivery = 'expense::shipping-freight-delivery', ExpenseRepairMaintenance = 'expense::repair-maintenance', AssetBalWithGovtAuthorities = 'asset::bal-with-govt-authorities', CostOfGoodsSoldCostOfLaborCos = 'cost-of-goods-sold::cost-of-labor-cos', ExpenseRentOrLeaseOfBuildings = 'expense::rent-or-lease-of-buildings', ExpenseBadDebts = 'expense::bad-debts', OtherCurrentLiabilityPayrollTaxPayable = 'other-current-liability::payroll-tax-payable', OtherCurrentLiabilityProvisionForWarrantyObligations = 'other-current-liability::provision-for-warranty-obligations', ExpenseSuppliesMaterials = 'expense::supplies-materials', OtherExpenseOtherMiscellaneousExpense = 'other-expense::other-miscellaneous-expense', ExpenseGlobalTaxExpense = 'expense::global-tax-expense', AssetShortTermLoansAndAdvancesToRelatedParties = 'asset::short-term-loans-and-advances-to-related-parties', EquityOtherFreeReserves = 'equity::other-free-reserves', ExpenseProjectStudiesSurveysAssessments = 'expense::project-studies-surveys-assessments', Equity = 'equity', AssetTradeAndOtherReceivables = 'asset::trade-and-other-receivables', OtherCurrentLiabilitySalesTaxPayable = 'other-current-liability::sales-tax-payable', AssetEmployeeCashAdvances = 'asset::employee-cash-advances', OtherExpenseRentAndLease = 'other-expense::rent-and-lease', AssetProvisionsNonCurrentAssets = 'asset::provisions-non-current-assets', LiabilityOtherLongTermLiabilities = 'liability::other-long-term-liabilities', Asset = 'asset', OtherExpenseVehicleInsurance = 'other-expense::vehicle-insurance', OtherCurrentLiabilityPayrollClearing = 'other-current-liability::payroll-clearing', AssetGoodwill = 'asset::goodwill', OtherCurrentLiabilityGlobalTaxSuspense = 'other-current-liability::global-tax-suspense', AssetGlobalTaxRefund = 'asset::global-tax-refund', ExpenseAdvertisingPromotional = 'expense::advertising-promotional', ExpenseLossOnDiscontinuedOperationsNetOfTax = 'expense::loss-on-discontinued-operations-net-of-tax', OtherExpenseVehicleLoanInterest = 'other-expense::vehicle-loan-interest', LiabilityOtherLongTermProvisions = 'liability::other-long-term-provisions', ExpenseTravel = 'expense::travel', ExpenseEntertainmentMeals = 'expense::entertainment-meals', AssetInternalTransfers = 'asset::internal-transfers', AssetCashOnHand = 'asset::cash-on-hand', AssetSavings = 'asset::savings', AssetLeaseholdImprovements = 'asset::leasehold-improvements', AssetShortTermInvestmentsInRelatedParties = 'asset::short-term-investments-in-related-parties', OtherCurrentLiabilityTradeAndOtherPayables = 'other-current-liability::trade-and-other-payables', AssetFixedAssetComputers = 'asset::fixed-asset-computers', EquityPartnersEquity = 'equity::partners-equity', AssetFixedAssetOtherToolsEquipment = 'asset::fixed-asset-other-tools-equipment', AssetUndepositedFunds = 'asset::undeposited-funds', AssetProvisionsCurrentAssets = 'asset::provisions-current-assets', EquityPersonalIncome = 'equity::personal-income', ExpenseEntertainment = 'expense::entertainment', OtherCurrentLiabilitySocialSecurityAgencies = 'other-current-liability::social-security-agencies', LiabilityGovernmentAndOtherPublicAuthorities = 'liability::government-and-other-public-authorities', CostOfGoodsSoldShippingFreightDeliveryCos = 'cost-of-goods-sold::shipping-freight-delivery-cos', AssetInvestmentTaxExemptSecurities = 'asset::investment-tax-exempt-securities', ExpenseCommissionsAndFees = 'expense::commissions-and-fees', ExpenseSundry = 'expense::sundry', EquityOwnersEquity = 'equity::owners-equity', OtherExpenseExchangeGainOrLoss = 'other-expense::exchange-gain-or-loss', AssetAssetsAvailableForSale = 'asset::assets-available-for-sale', OtherIncomeTaxExemptInterest = 'other-income::tax-exempt-interest', AssetLoansToStockholders = 'asset::loans-to-stockholders', EquityAccumulatedOtherComprehensiveIncome = 'equity::accumulated-other-comprehensive-income', AssetCapitalWip = 'asset::capital-wip', AssetFixedAsset = 'asset::fixed-asset', AssetFixedAssetFurniture = 'asset::fixed-asset-furniture', ExpenseUnappliedCashBillPaymentExpense = 'expense::unapplied-cash-bill-payment-expense', AssetExpenditureAuthorisationsAndLettersOfCredit = 'asset::expenditure-authorisations-and-letters-of-credit', OtherCurrentLiabilityStaffAndRelatedLiabilityAccounts = 'other-current-liability::staff-and-related-liability-accounts', RevenueSalesOfProductIncome = 'revenue::sales-of-product-income', OtherExpenseVehicleRepairs = 'other-expense::vehicle-repairs', ExpenseDuesSubscriptions = 'expense::dues-subscriptions', OtherCurrentLiabilityCurrentPortionOfObligationsUnderFinanceLeases = 'other-current-liability::current-portion-of-obligations-under-finance-leases', LiabilityAccruedVacationPayable = 'liability::accrued-vacation-payable', AssetDeferredTax = 'asset::deferred-tax', ExpenseInterestPaid = 'expense::interest-paid', ExpenseBorrowingCost = 'expense::borrowing-cost', AssetFixedAssetSoftware = 'asset::fixed-asset-software', AssetLicenses = 'asset::licenses', OtherExpenseRepairsAndMaintenance = 'other-expense::repairs-and-maintenance', EquityPreferredStock = 'equity::preferred-stock', AssetDepletableAssets = 'asset::depletable-assets', EquityRetainedEarnings = 'equity::retained-earnings', CostOfGoodsSoldCostOfSales = 'cost-of-goods-sold::cost-of-sales', AssetOtherLongTermInvestments = 'asset::other-long-term-investments', OtherExpenseMatCredit = 'other-expense::mat-credit', AssetLoansToOfficers = 'asset::loans-to-officers', AssetLeaseBuyout = 'asset::lease-buyout', OtherExpenseVehicleLease = 'other-expense::vehicle-lease', OtherExpenseDepletion = 'other-expense::depletion', AssetRetainage = 'asset::retainage', EquityOpeningBalanceEquity = 'equity::opening-balance-equity', ExpenseOfficeGeneralAdministrativeExpenses = 'expense::office-general-administrative-expenses', OtherIncomeLossOnDisposalOfAssets = 'other-income::loss-on-disposal-of-assets', AccountsReceivable = 'accounts-receivable', LiabilityProvisionsNonCurrentLiabilities = 'liability::provisions-non-current-liabilities', ExpensePurchasesRebates = 'expense::purchases-rebates', AssetInventory = 'asset::inventory', EquityMoneyReceivedAgainstShareWarrants = 'equity::money-received-against-share-warrants', ExpenseInsurance = 'expense::insurance', OtherExpenseWashAndRoadServices = 'other-expense::wash-and-road-services', AssetAccumulatedDepletion = 'asset::accumulated-depletion', AssetAvailableForSaleFinancialAssets = 'asset::available-for-sale-financial-assets', AssetInvestmentUsGovernmentObligations = 'asset::investment-us-government-obligations', LiabilityLongTermLiability = 'liability::long-term-liability', AssetPrepaidExpenses = 'asset::prepaid-expenses', AssetAllowanceForBadDebts = 'asset::allowance-for-bad-debts', EquityCommonStock = 'equity::common-stock', OtherCurrentLiability = 'other-current-liability', OtherExpensePriorPeriodItems = 'other-expense::prior-period-items', OtherIncomeGainLossOnSaleOfInvestments = 'other-income::gain-loss-on-sale-of-investments', ExpenseAppropriationsToDepreciation = 'expense::appropriations-to-depreciation', AssetBuildings = 'asset::buildings', ExpenseUtilities = 'expense::utilities', OtherCurrentLiabilityProvisionsCurrentLiabilities = 'other-current-liability::provisions-current-liabilities', AssetIntangibleAssets = 'asset::intangible-assets', LiabilityCreditCard = 'liability::credit-card', ExpenseOtherCurrentOperatingCharges = 'expense::other-current-operating-charges', OtherCurrentLiabilityDividendsPayable = 'other-current-liability::dividends-payable' }
export const enum MessageReadStatus { Unsent = 'unsent', Sent = 'sent', Delivered = 'delivered', Read = 'read', Failed = 'failed' }
export const enum MessageDeliveryStatus { Undeliverable = 'undeliverable', Read = 'read', Delivered = 'delivered', Pending = 'pending', Failed = 'failed', Error = 'error', Sent = 'sent' }
export const enum SupportQueryType { Question = 'question', Incident = 'incident', Feedback = 'feedback', Problem = 'problem', Bug = 'bug', FeatureRequest = 'feature-request', Task = 'task' }
export const enum ImageMimeType { ImageJpeg = 'image/jpeg', ImageGif = 'image/gif', ImagePng = 'image/png', ImageSvgXml = 'image/svg+xml', ImageBmp = 'image/bmp', ImageTiff = 'image/tiff', ImageWebp = 'image/webp', ImageHeic = 'image/heic' }
export const enum OrderingCriteria { Popularity = 'popularity', Relevance = 'relevance', PriceDescending = 'price-descending', Alphabetical = 'alphabetical', Manual = 'manual', CreationDate = 'creation-date', PriceAscending = 'price-ascending', Rating = 'rating' }
export const enum ChatType { Private = 'private', Group = 'group', Public = 'public' }
export const enum ItemAvailabilityStatus { OutOfStock = 'out-of-stock', Inactive = 'inactive', Active = 'active', Discontinued = 'discontinued' }
export const enum FinancialAccountStatus { Frozen = 'frozen', Closed = 'closed', Active = 'active', Suspended = 'suspended', UnderReview = 'under-review', Inactive = 'inactive', Delinquent = 'delinquent' }
export const enum TransactionStatus { Pending = 'pending', Failed = 'failed', InProgress = 'in-progress', Succeeded = 'succeeded', Cancelled = 'cancelled', Error = 'error', Initiated = 'initiated' }
export const enum CreditNoteStatus { Pending = 'pending', Applied = 'applied', Issued = 'issued', Completed = 'completed', Revised = 'revised', Void = 'void', Cancelled = 'cancelled', Disputed = 'disputed', Draft = 'draft' }
export const enum PaymentTerm { CashBeforeShipment = 'cash-before-shipment', CashWithOrder = 'cash-with-order', Net60 = 'net-60', Net90 = 'net-90', UponCompletion = 'upon-completion', Net30 = 'net-30', Installment = 'installment', Prepayment = 'prepayment', Prepaid = 'prepaid', Net = 'net', DueOnReceipt = 'due-on-receipt', CashInAdvance = 'cash-in-advance', DueEndOfMonth = 'due-end-of-month', CashOnDelivery = 'cash-on-delivery', DeferredPayment = 'deferred-payment', Custom = 'custom' }
export const enum EmploymentAndCandidateStatus { OnLeave = 'on-leave', Terminated = 'terminated', Active = 'active', Interviewing = 'interviewing', Hired = 'hired', Inactive = 'inactive', InReview = 'in-review', NotSelected = 'not-selected', New = 'new', OfferExtended = 'offer-extended', Other = 'other' }
export const enum OrganizationalRole { Manager = 'manager', Director = 'director', Other = 'other', Supervisor = 'supervisor', Admin = 'admin', Employee = 'employee', Contractor = 'contractor' }
export const enum CustomerStatus { Inactive = 'inactive', Archived = 'archived', Active = 'active', Pending = 'pending', Suspended = 'suspended' }
export const enum SocialPlatform { Instagram = 'instagram', Reddit = 'reddit', Skype = 'skype', Tiktok = 'tiktok', Tumblr = 'tumblr', Facebook = 'facebook', Pinterest = 'pinterest', X = 'x', Youtube = 'youtube', Linkedin = 'linkedin', Snapchat = 'snapchat', Twitter = 'twitter', OtherSocialPlatform = 'other-social-platform' }
export const enum ConversationStatus { Archived = 'archived', Deleted = 'deleted', Active = 'active' }
export const enum CommunicationRole { Guest = 'guest', Assistant = 'assistant', Bot = 'bot', Owner = 'owner', Group = 'group', Moderator = 'moderator', Channel = 'channel', Admin = 'admin', Service = 'service', User = 'user', Member = 'member', System = 'system' }
export const enum LifecycleStatus { Issued = 'issued', Expired = 'expired', Suspended = 'suspended', Active = 'active', Redeemed = 'redeemed', Cancelled = 'cancelled' }
export const enum PaymentMethod { Check = 'check', BankTransfer = 'bank-transfer', CreditCard = 'credit-card', Cryptocurrency = 'cryptocurrency', Cash = 'cash', DebitCard = 'debit-card', MobilePayment = 'mobile-payment', MobileWallet = 'mobile-wallet', Other = 'other', CashOnDelivery = 'cash-on-delivery', Paypal = 'paypal' }
export const enum FinancialTransactionStatus { Cleared = 'cleared', Failed = 'failed', Pending = 'pending', Refunded = 'refunded', Authorized = 'authorized', Cancelled = 'cancelled', SettlementInProgress = 'settlement-in-progress', Disputed = 'disputed' }
export const enum AuditOpinionType { Qualified = 'qualified', Unqualified = 'unqualified', Disclaimer = 'disclaimer', Adverse = 'adverse' }
export const enum InventoryStorageType { OnlineMarketplace = 'online-marketplace', Warehouse = 'warehouse', Consignment = 'consignment', Other = 'other', RetailStore = 'retail-store', DistributionCenter = 'distribution-center', DropShipper = 'drop-shipper' }
export const enum VisibilityScope { Global = 'global', App = 'app', Internal = 'internal', Private = 'private', Web = 'web' }
export const enum PaymentStatus { Submitted = 'submitted', Voided = 'voided', Overdue = 'overdue', Paid = 'paid', Failed = 'failed', Pending = 'pending', PartiallyRefunded = 'partially-refunded', Draft = 'draft', Error = 'error', Succeeded = 'succeeded', Disputed = 'disputed', Adjusted = 'adjusted', Partial = 'partial', Authorized = 'authorized', Deleted = 'deleted', Processing = 'processing', Cancelled = 'cancelled', Refunded = 'refunded' }
export const enum TransactionChannel { Atm = 'atm', Mail = 'mail', Mobile = 'mobile', Telephone = 'telephone', Online = 'online', Other = 'other', BankBranch = 'bank-branch', InPerson = 'in-person' }
export const enum FinancialDisputeStatus { Escalated = 'escalated', ChargeRefunded = 'charge-refunded', Lost = 'lost', NeedsResponse = 'needs-response', Won = 'won', Closed = 'closed', AwaitingEvidence = 'awaiting-evidence', UnderReview = 'under-review' }
export const enum DeviceUsageType { Personal = 'personal', Educational = 'educational', Healthcare = 'healthcare', Business = 'business', Industrial = 'industrial', Home = 'home', Other = 'other' }
export const enum FinancialTransactionType { Adjustment = 'adjustment', Interest = 'interest', SpendOverpayment = 'spend-overpayment', Charge = 'charge', Chargeback = 'chargeback', Withdrawal = 'withdrawal', Dividend = 'dividend', Deposit = 'deposit', ReceiveOverpayment = 'receive-overpayment', SpendPrepayment = 'spend-prepayment', ReceivePrepayment = 'receive-prepayment', Fee = 'fee', Sale = 'sale', Spend = 'spend', Receive = 'receive', Other = 'other', Payment = 'payment', Transfer = 'transfer', Refund = 'refund' }
export const enum AccessControlModel { None = 'none', Dac = 'dac', Custom = 'custom', Abac = 'abac', Mac = 'mac', Rbac = 'rbac' }
export const enum ParticipantType { Organization = 'organization', ExternalParticipant = 'external-participant', Team = 'team', User = 'user', Group = 'group' }
export const enum PriorityLevel { Low = 'low', High = 'high', Elevated = 'elevated', Medium = 'medium', Urgent = 'urgent' }
export const enum PrerequisiteRangeType { Quantity = 'quantity', ShippingPrice = 'shipping-price', Subtotal = 'subtotal' }
export const enum ContentVisibility { Private = 'private', Internal = 'internal', Shared = 'shared', Protected = 'protected', Public = 'public' }
export const enum EntityCategory { Person = 'person', Project = 'project', Message = 'message', Document = 'document', Task = 'task', Link = 'link', Event = 'event', Owner = 'owner', User = 'user', Other = 'other' }
export const enum GenderIdentity { PreferNotToSay = 'prefer-not-to-say', Male = 'male', Other = 'other', Female = 'female' }
export const enum CommunicationMethod { VideoCall = 'video-call', Other = 'other', Phone = 'phone', Mail = 'mail', Sms = 'sms', Email = 'email', PushNotification = 'push-notification', InstantMessage = 'instant-message', SocialMedia = 'social-media', InPerson = 'in-person', Text = 'text' }
export const enum EmailCategoryType { Personal = 'personal', Spam = 'spam', Promotional = 'promotional', Educational = 'educational', Other = 'other', Governmental = 'governmental', Business = 'business', Transactional = 'transactional' }
export const enum UniversalIdentifierType { Number = 'number', Email = 'email', Uuid = 'uuid', String = 'string', Url = 'url' }
export const enum TaskStatus { Todo = 'todo', Cancelled = 'cancelled', Done = 'done', InProgress = 'in-progress', Blocked = 'blocked', OnHold = 'on-hold' }
export const enum UserStatus { Verified = 'verified', Inactive = 'inactive', Archived = 'archived', Suspended = 'suspended', Active = 'active', Pending = 'pending', Banned = 'banned', Deleted = 'deleted', WaitListed = 'wait-listed' }
export const enum PromotionType { FixedAmount = 'fixed-amount', RewardPoints = 'reward-points', Percentage = 'percentage', Other = 'other', BuyOneGetOne = 'buy-one-get-one', FreeShipping = 'free-shipping' }
export const enum MimeType { ImageWebp = 'image/webp', ImageGif = 'image/gif', ImagePng = 'image/png', ImageJpeg = 'image/jpeg', ImageSvgXml = 'image/svg+xml' }
export const enum TaxType { Variable = 'variable', Inclusive = 'inclusive', Additive = 'additive' }
export const enum ModifierType { Text = 'text', List = 'list' }
export const enum CardType { Debit = 'debit', Credit = 'credit', UnknownCard = 'unknown-card' }
export const enum PrepaidType { UnknownPrepaid = 'unknown-prepaid', Prepaid = 'prepaid', NotPrepaid = 'not-prepaid' }
export const enum EntryMethod { Contactless = 'contactless', OnFile = 'on-file', Keyed = 'keyed', Swiped = 'swiped', Emv = 'emv' }
export const enum CvvStatus { NotChecked = 'not-checked', Rejected = 'rejected', Accepted = 'accepted' }
export const enum AvcStatus { Accepted = 'accepted', Rejected = 'rejected', NotChecked = 'not-checked' }
export const enum CreditType { Supplier = 'supplier', Overpayment = 'overpayment', Goodwill = 'goodwill', Prepayment = 'prepayment', Customer = 'customer' }
export const enum CallDirection { Conference = 'conference', Inbound = 'inbound', Unknown = 'unknown', Outbound = 'outbound' }
export const enum SpeakerRole { Invitee = 'invitee', Attendee = 'attendee' }
export const enum FileType { Url = 'url', File = 'file', Folder = 'folder' }
