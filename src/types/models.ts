// This file is auto-generated. Do not edit it manually.

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
export const enum AllocationMethod { Across = 'across', Each = 'each' }
export const enum MinimumRequirements { MinimumQuantityOfItems = 'minimum-quantity-of-items', None = 'none', MinimumPurchaseAmount = 'minimum-purchase-amount' }
export const enum TransactionMethod { BankBranch = 'bank-branch', Atm = 'atm', Mobile = 'mobile', Telephone = 'telephone', Online = 'online', Mail = 'mail' }
export const enum Format { Xml = 'xml', Json = 'json' }
export const enum Gender { PreferNotToSay = 'prefer not to say', Female = 'female', Other = 'other', Male = 'male' }
export const enum CustomerEligibility { SpecificCustomers = 'specific-customers', SpecificCustomerGroups = 'specific-customer-groups', All = 'all' }
export const enum TargetType { LineItem = 'line-item', ShippingLine = 'shipping-line' }
export const enum Status { Scheduled = 'scheduled', Active = 'active', Expired = 'expired' }
export const enum CustomerSelection { All = 'all', Prerequisite = 'prerequisite' }
export const enum SkuValidation { LocalUnique = 'local-unique', None = 'none', GlobalUnique = 'global-unique' }
export const enum Roles { Moderator = 'moderator', User = 'user', Admin = 'admin' }
export const enum ChannelAvailability { InApp = 'in-app', AllChannels = 'all-channels', InStore = 'in-store', Online = 'online' }
export const enum AccountType { AssetInvestmentUsGovernmentObligations = 'asset::investment-us-government-obligations', RevenueOperatingGrants = 'revenue::operating-grants', CostOfGoodsSoldShippingFreightDeliveryCos = 'cost-of-goods-sold::shipping-freight-delivery-cos', AssetLandAsset = 'asset::land-asset', OtherExpenseMortgageInterest = 'other-expense::mortgage-interest', EquityOwnersEquity = 'equity::owners-equity', EquityShareCapital = 'equity::share-capital', AssetLicenses = 'asset::licenses', OtherExpenseHomeOffice = 'other-expense::home-office', RevenueUnappliedCashPaymentIncome = 'revenue::unapplied-cash-payment-income', OtherExpenseVehicleLease = 'other-expense::vehicle-lease', RevenueServiceFeeIncome = 'revenue::service-fee-income', RevenueSalesOfProductIncome = 'revenue::sales-of-product-income', AssetNonCurrentAssets = 'asset::non-current-assets', ExpenseOtherCurrentOperatingCharges = 'expense::other-current-operating-charges', AssetEmployeeCashAdvances = 'asset::employee-cash-advances', AssetFixedAssetPhotoVideo = 'asset::fixed-asset-photo-video', AssetAssetsInCourseOfConstruction = 'asset::assets-in-course-of-construction', LiabilityProvisionsNonCurrentLiabilities = 'liability::provisions-non-current-liabilities', EquityPartnerDistributions = 'equity::partner-distributions', OtherExpenseVehicleInsurance = 'other-expense::vehicle-insurance', OtherExpenseDepletion = 'other-expense::depletion', OtherExpenseDepreciation = 'other-expense::depreciation', OtherExpenseVehicleRegistration = 'other-expense::vehicle-registration', AssetLoansToStockholders = 'asset::loans-to-stockholders', AssetOtherLongTermInvestments = 'asset::other-long-term-investments', ExpensePurchasesRebates = 'expense::purchases-rebates', OtherIncomeLossOnDisposalOfAssets = 'other-income::loss-on-disposal-of-assets', EquityDividendDisbursed = 'equity::dividend-disbursed', ExpenseAdvertisingPromotional = 'expense::advertising-promotional', EquityPersonalIncome = 'equity::personal-income', ExpenseOtherSellingExpenses = 'expense::other-selling-expenses', AssetDepletableAssets = 'asset::depletable-assets', OtherCurrentLiabilityStateLocalIncomeTaxPayable = 'other-current-liability::state-local-income-tax-payable', EquityPartnerContributions = 'equity::partner-contributions', AssetPrepaymentsAndAccruedIncome = 'asset::prepayments-and-accrued-income', OtherExpenseGasAndFuel = 'other-expense::gas-and-fuel', ExpenseExternalServices = 'expense::external-services', ExpenseTaxesPaid = 'expense::taxes-paid', OtherCurrentLiabilityLoanPayable = 'other-current-liability::loan-payable', ExpenseLossOnDiscontinuedOperationsNetOfTax = 'expense::loss-on-discontinued-operations-net-of-tax', OtherCurrentLiabilityAccruedLiabilities = 'other-current-liability::accrued-liabilities', AssetCalledUpShareCapitalNotPaid = 'asset::called-up-share-capital-not-paid', OtherIncomeGainLossOnSaleOfInvestments = 'other-income::gain-loss-on-sale-of-investments', OtherCurrentLiabilityPayrollClearing = 'other-current-liability::payroll-clearing', AssetAccumulatedAmortization = 'asset::accumulated-amortization', AssetDeferredTax = 'asset::deferred-tax', Expense = 'expense', OtherCurrentLiabilityCurrentTaxLiability = 'other-current-liability::current-tax-liability', AssetAvailableForSaleFinancialAssets = 'asset::available-for-sale-financial-assets', EquityOpeningBalanceEquity = 'equity::opening-balance-equity', ExpenseAuto = 'expense::auto', ExpenseTravel = 'expense::travel', OtherCurrentLiabilityDutiesAndTaxes = 'other-current-liability::duties-and-taxes', EquityRetainedEarnings = 'equity::retained-earnings', ExpenseManagementCompensation = 'expense::management-compensation', OtherIncomeOtherMiscellaneousIncome = 'other-income::other-miscellaneous-income', ExpenseUtilities = 'expense::utilities', ExpenseCommissionsAndFees = 'expense::commissions-and-fees', OtherIncomeTaxExemptInterest = 'other-income::tax-exempt-interest', EquityTreasuryStock = 'equity::treasury-stock', ExpenseLegalProfessionalFees = 'expense::legal-professional-fees', ExpenseSundry = 'expense::sundry', AssetShortTermInvestmentsInRelatedParties = 'asset::short-term-investments-in-related-parties', EquityShareApplicationMoneyPendingAllotment = 'equity::share-application-money-pending-allotment', ExpenseAppropriationsToDepreciation = 'expense::appropriations-to-depreciation', AssetSavings = 'asset::savings', OtherExpenseUtilities = 'other-expense::utilities', OtherExpenseDeferredTaxExpense = 'other-expense::deferred-tax-expense', RevenueRevenueGeneral = 'revenue::revenue-general', AssetRetainage = 'asset::retainage', ExpenseTravelExpensesGeneralAndAdminExpenses = 'expense::travel-expenses-general-and-admin-expenses', AssetAssetsHeldForSale = 'asset::assets-held-for-sale', AssetChecking = 'asset::checking', AssetGoodwill = 'asset::goodwill', ExpenseFinanceCosts = 'expense::finance-costs', ExpenseProjectStudiesSurveysAssessments = 'expense::project-studies-surveys-assessments', EquityFunds = 'equity::funds', OtherExpenseExceptionalItems = 'other-expense::exceptional-items', AssetProvisionsNonCurrentAssets = 'asset::provisions-non-current-assets', AssetExpenditureAuthorisationsAndLettersOfCredit = 'asset::expenditure-authorisations-and-letters-of-credit', OtherCurrentLiabilityProvisionForWarrantyObligations = 'other-current-liability::provision-for-warranty-obligations', ExpenseCostOfLabor = 'expense::cost-of-labor', CostOfGoodsSoldSuppliesMaterialsCogs = 'cost-of-goods-sold::supplies-materials-cogs', AssetInvestmentOther = 'asset::investment-other', RevenueOtherPrimaryIncome = 'revenue::other-primary-income', EquityInvestmentGrants = 'equity::investment-grants', OtherCurrentLiabilityFederalIncomeTaxPayable = 'other-current-liability::federal-income-tax-payable', OtherExpenseVehicle = 'other-expense::vehicle', EquityPreferredStock = 'equity::preferred-stock', EquityPaidInCapitalOrSurplus = 'equity::paid-in-capital-or-surplus', OtherCurrentLiabilityTradeAndOtherPayables = 'other-current-liability::trade-and-other-payables', LiabilityProvisionForLiabilities = 'liability::provision-for-liabilities', OtherCurrentLiabilityDividendsPayable = 'other-current-liability::dividends-payable', ExpensePayrollExpenses = 'expense::payroll-expenses', OtherCurrentLiabilitySundryDebtorsAndCreditors = 'other-current-liability::sundry-debtors-and-creditors', RevenueSavingsByTaxScheme = 'revenue::savings-by-tax-scheme', EquityEquityInEarningsOfSubsidiuaries = 'equity::equity-in-earnings-of-subsidiuaries', AssetProvisionsFixedAssets = 'asset::provisions-fixed-assets', LiabilityLongTermLiability = 'liability::long-term-liability', AssetGlobalTaxDeferred = 'asset::global-tax-deferred', AssetOtherLongTermLoansAndAdvances = 'asset::other-long-term-loans-and-advances', AssetRentsHeldInTrust = 'asset::rents-held-in-trust', OtherCurrentLiabilityInterestPayables = 'other-current-liability::interest-payables', AssetFixedAssetComputers = 'asset::fixed-asset-computers', LiabilityGroupAndAssociates = 'liability::group-and-associates', AssetLongTermLoansAndAdvancesToRelatedParties = 'asset::long-term-loans-and-advances-to-related-parties', AssetAccumulatedDepreciation = 'asset::accumulated-depreciation', AssetInvestments = 'asset::investments', AssetOtherIntangibleAssets = 'asset::other-intangible-assets', LiabilityObligationsUnderFinanceLeases = 'liability::obligations-under-finance-leases', ExpenseOtherBusinessExpenses = 'expense::other-business-expenses', Income = 'income', AssetAccumulatedAmortizationOfOtherAssets = 'asset::accumulated-amortization-of-other-assets', ExpenseShippingFreightDelivery = 'expense::shipping-freight-delivery', AccountsReceivable = 'accounts-receivable', EquityHealthcare = 'equity::healthcare', ExpenseOfficeExpenses = 'expense::office-expenses', RevenueNonProfitIncome = 'revenue::non-profit-income', LiabilityDeferredTaxLiabilities = 'liability::deferred-tax-liabilities', OtherIncomeGainLossOnSaleOfFixedAssets = 'other-income::gain-loss-on-sale-of-fixed-assets', ExpenseOtherMiscellaneousServiceCost = 'expense::other-miscellaneous-service-cost', OtherIncomeDividendIncome = 'other-income::dividend-income', ExpenseAmortizationExpense = 'expense::amortization-expense', OtherCurrentLiabilityCurrentPortionEmployeeBenefitsObligations = 'other-current-liability::current-portion-employee-benefits-obligations', EquityCommonStock = 'equity::common-stock', RevenueSalesRetail = 'revenue::sales-retail', OtherCurrentLiabilityOtherCurrentLiabilities = 'other-current-liability::other-current-liabilities', CostOfGoodsSoldEquipmentRentalCos = 'cost-of-goods-sold::equipment-rental-cos', OtherCurrentLiabilityPrepaidExpensesPayable = 'other-current-liability::prepaid-expenses-payable', ExpenseInsurance = 'expense::insurance', OtherExpenseExtraordinaryItems = 'other-expense::extraordinary-items', AssetGlobalTaxRefund = 'asset::global-tax-refund', RevenueSalesWholesale = 'revenue::sales-wholesale', AssetParticipatingInterests = 'asset::participating-interests', RevenueDiscountsRefundsGiven = 'revenue::discounts-refunds-given', OtherCurrentLiabilitySocialSecurityAgencies = 'other-current-liability::social-security-agencies', AssetDevelopmentCosts = 'asset::development-costs', ExpenseBankCharges = 'expense::bank-charges', CostOfGoodsSoldFreightAndDeliveryCost = 'cost-of-goods-sold::freight-and-delivery-cost', EquityCalledUpShareCapital = 'equity::called-up-share-capital', AssetCapitalWip = 'asset::capital-wip', ExpenseOtherRentalCosts = 'expense::other-rental-costs', LiabilityShareholderNotesPayable = 'liability::shareholder-notes-payable', AssetLoansToOthers = 'asset::loans-to-others', AssetBalWithGovtAuthorities = 'asset::bal-with-govt-authorities', AssetInvestmentMortgageRealEstateLoans = 'asset::investment-mortgage-real-estate-loans', CostOfGoodsSoldCostOfLaborCos = 'cost-of-goods-sold::cost-of-labor-cos', AssetOtherConsumables = 'asset::other-consumables', ExpenseBadDebts = 'expense::bad-debts', LiabilityAccruedLongTermLiabilities = 'liability::accrued-long-term-liabilities', AssetTradeAndOtherReceivables = 'asset::trade-and-other-receivables', LiabilityAccruedVacationPayable = 'liability::accrued-vacation-payable', RevenueOtherCurrentOperatingIncome = 'revenue::other-current-operating-income', OtherCurrentLiabilityRentsInTrustLiability = 'other-current-liability::rents-in-trust-liability', OtherIncomeUnrealisedLossOnSecuritiesNetOfTax = 'other-income::unrealised-loss-on-securities-net-of-tax', ExpenseShippingAndDeliveryExpense = 'expense::shipping-and-delivery-expense', OtherExpenseIncomeTaxOtherExpense = 'other-expense::income-tax-other-expense', AssetInternalTransfers = 'asset::internal-transfers', Asset = 'asset', AssetBuildings = 'asset::buildings', ExpenseRepairMaintenance = 'expense::repair-maintenance', CostOfGoodsSoldOtherCostsOfServiceCos = 'cost-of-goods-sold::other-costs-of-service-cos', AssetAccumulatedDepletion = 'asset::accumulated-depletion', AssetCashOnHand = 'asset::cash-on-hand', ExpenseEntertainmentMeals = 'expense::entertainment-meals', ExpenseRentOrLeaseOfBuildings = 'expense::rent-or-lease-of-buildings', ExpenseStaffCosts = 'expense::staff-costs', RevenueIncome = 'revenue::income', LiabilityAccrualsAndDeferredIncome = 'liability::accruals-and-deferred-income', OtherCurrentLiabilityGlobalTaxSuspense = 'other-current-liability::global-tax-suspense', AssetOtherCurrentAssets = 'asset::other-current-assets', ExpenseInterestPaid = 'expense::interest-paid', OtherExpenseVehicleLoanInterest = 'other-expense::vehicle-loan-interest', OtherIncomeOtherOperatingIncome = 'other-income::other-operating-income', AssetLand = 'asset::land', AssetFixedAssetFurniture = 'asset::fixed-asset-furniture', ExpensePenaltiesSettlements = 'expense::penalties-settlements', RevenueCashReceiptIncome = 'revenue::cash-receipt-income', AssetFixedAssetSoftware = 'asset::fixed-asset-software', ExpenseDistributionCosts = 'expense::distribution-costs', OtherExpenseAmortization = 'other-expense::amortization', EquityAccumulatedOtherComprehensiveIncome = 'equity::accumulated-other-comprehensive-income', AssetCashAndCashEquivalents = 'asset::cash-and-cash-equivalents', ExpenseOfficeGeneralAdministrativeExpenses = 'expense::office-general-administrative-expenses', AssetOtherFixedAssets = 'asset::other-fixed-assets', AssetFurnitureAndFixtures = 'asset::furniture-and-fixtures', AssetFixedAssetCopiers = 'asset::fixed-asset-copiers', OtherExpenseVehicleLoan = 'other-expense::vehicle-loan', EquityCapitalReserves = 'equity::capital-reserves', AssetLeaseholdImprovements = 'asset::leasehold-improvements', AssetInvestmentTaxExemptSecurities = 'asset::investment-tax-exempt-securities', AssetOtherAsset = 'asset::other-asset', AssetVehicles = 'asset::vehicles', AssetLeaseBuyout = 'asset::lease-buyout', OtherExpenseHomeOwnerRentalInsurance = 'other-expense::home-owner-rental-insurance', EquityOtherFreeReserves = 'equity::other-free-reserves', ExpenseBorrowingCost = 'expense::borrowing-cost', OtherExpenseRentAndLease = 'other-expense::rent-and-lease', OtherExpenseRepairsAndMaintenance = 'other-expense::repairs-and-maintenance', OtherExpenseOtherVehicleExpenses = 'other-expense::other-vehicle-expenses', AssetFixedAsset = 'asset::fixed-asset', LiabilityLongTermEmployeeBenefitObligations = 'liability::long-term-employee-benefit-obligations', OtherExpensePriorPeriodItems = 'other-expense::prior-period-items', OtherCurrentLiabilityStaffAndRelatedLiabilityAccounts = 'other-current-liability::staff-and-related-liability-accounts', ExpenseUnappliedCashBillPaymentExpense = 'expense::unapplied-cash-bill-payment-expense', EquityPersonalExpense = 'equity::personal-expense', EquityAccumulatedAdjustment = 'equity::accumulated-adjustment', ExpenseDuesSubscriptions = 'expense::dues-subscriptions', EquityMoneyReceivedAgainstShareWarrants = 'equity::money-received-against-share-warrants', ExpenseExtraordinaryCharges = 'expense::extraordinary-charges', LiabilityAccountsPayable = 'liability::accounts-payable', LiabilityLiabilitiesRelatedToAssetsHeldForSale = 'liability::liabilities-related-to-assets-held-for-sale', OtherCurrentLiabilityInsurancePayable = 'other-current-liability::insurance-payable', OtherExpensePenaltiesSettlements = 'other-expense::penalties-settlements', OtherIncomeInterestEarned = 'other-income::interest-earned', AssetMoneyMarket = 'asset::money-market', AssetPrepaidExpenses = 'asset::prepaid-expenses', AssetUndepositedFunds = 'asset::undeposited-funds', AssetAllowanceForBadDebts = 'asset::allowance-for-bad-debts', AssetOrganizationalCosts = 'asset::organizational-costs', ExpenseGlobalTaxExpense = 'expense::global-tax-expense', LiabilityLongTermDebit = 'liability::long-term-debit', LiabilityOtherLongTermProvisions = 'liability::other-long-term-provisions', Liability = 'liability', OtherExpenseExchangeGainOrLoss = 'other-expense::exchange-gain-or-loss', OtherExpenseOtherHomeOfficeExpenses = 'other-expense::other-home-office-expenses', ExpensePromotionalMeals = 'expense::promotional-meals', ExpenseSuppliesMaterials = 'expense::supplies-materials', OtherCurrentLiabilityTrustAccountsLiabilities = 'other-current-liability::trust-accounts-liabilities', OtherCurrentLiability = 'other-current-liability', OtherExpenseTaxRoundoffGainOrLoss = 'other-expense::tax-roundoff-gain-or-loss', AssetProvisionsCurrentAssets = 'asset::provisions-current-assets', OtherCurrentLiabilityPayrollTaxPayable = 'other-current-liability::payroll-tax-payable', AssetTrustAccounts = 'asset::trust-accounts', OtherCurrentLiabilityLineOfCredit = 'other-current-liability::line-of-credit', LiabilityDebtsRelatedToParticipatingInterests = 'liability::debts-related-to-participating-interests', ExpenseEquipmentRental = 'expense::equipment-rental', LiabilityOutstandingDuesOtherThanMicroSmallEnterprise = 'liability::outstanding-dues-other-than-micro-small-enterprise', OtherCurrentLiabilityDirectDepositPayable = 'other-current-liability::direct-deposit-payable', OtherCurrentLiabilitySalesTaxPayable = 'other-current-liability::sales-tax-payable', OtherExpenseVehicleRepairs = 'other-expense::vehicle-repairs', EquityPartnersEquity = 'equity::partners-equity', OtherIncomeOtherInvestmentIncome = 'other-income::other-investment-income', AssetOtherEarMarkedBankAccounts = 'asset::other-ear-marked-bank-accounts', CostOfGoodsSoldCostOfSales = 'cost-of-goods-sold::cost-of-sales', EquityEstimatedTaxes = 'equity::estimated-taxes', AssetOtherCurrentAsset = 'asset::other-current-asset', AssetShortTermLoansAndAdvancesToRelatedParties = 'asset::short-term-loans-and-advances-to-related-parties', LiabilityOtherLongTermLiabilities = 'liability::other-long-term-liabilities', OtherIncome = 'other-income', LiabilityGovernmentAndOtherPublicAuthorities = 'liability::government-and-other-public-authorities', OtherCurrentLiabilityProvisionsCurrentLiabilities = 'other-current-liability::provisions-current-liabilities', OtherCurrentLiabilityCurrentPortionOfObligationsUnderFinanceLeases = 'other-current-liability::current-portion-of-obligations-under-finance-leases', AssetIntangibleAssets = 'asset::intangible-assets', AssetFixedAssetOtherToolsEquipment = 'asset::fixed-asset-other-tools-equipment', AssetIntangibleAssetsUnderDevelopment = 'asset::intangible-assets-under-development', ExpenseTravelMeals = 'expense::travel-meals', OtherCurrentLiabilityShortTermBorrowings = 'other-current-liability::short-term-borrowings', RevenueOwnWorkCapitalized = 'revenue::own-work-capitalized', AssetBank = 'asset::bank', OtherCurrentLiabilityGlobalTaxPayable = 'other-current-liability::global-tax-payable', AssetLongTermInvestments = 'asset::long-term-investments', OtherExpenseMatCredit = 'other-expense::mat-credit', AssetAssetsAvailableForSale = 'asset::assets-available-for-sale', ExpenseTravelExpensesSellingExpense = 'expense::travel-expenses-selling-expense', OtherExpenseWashAndRoadServices = 'other-expense::wash-and-road-services', OtherExpense = 'other-expense', Equity = 'equity', CostOfGoodsSold = 'cost-of-goods-sold', AssetMachineryAndEquipment = 'asset::machinery-and-equipment', ExpenseEntertainment = 'expense::entertainment', LiabilityStaffAndRelatedLongTermLiabilityAccounts = 'liability::staff-and-related-long-term-liability-accounts', LiabilityNotesPayable = 'liability::notes-payable', OtherExpenseParkingAndTolls = 'other-expense::parking-and-tolls', ExpenseIncomeTaxExpense = 'expense::income-tax-expense', AssetCumulativeDepreciationOnIntangibleAssets = 'asset::cumulative-depreciation-on-intangible-assets', LiabilityOutstandingDuesMicroSmallEnterprise = 'liability::outstanding-dues-micro-small-enterprise', ExpenseOtherExternalServices = 'expense::other-external-services', LiabilityCreditCard = 'liability::credit-card', AssetFixedAssetPhone = 'asset::fixed-asset-phone', ExpenseCharitableContributions = 'expense::charitable-contributions', LiabilityLongTermBorrowings = 'liability::long-term-borrowings', AssetSecurityDeposits = 'asset::security-deposits', AssetInventory = 'asset::inventory', AssetLoansToOfficers = 'asset::loans-to-officers', LiabilityBankLoans = 'liability::bank-loans', OtherCurrentLiabilityCurrentLiabilities = 'other-current-liability::current-liabilities', OtherExpenseOtherMiscellaneousExpense = 'other-expense::other-miscellaneous-expense', AssetOtherLongTermAssets = 'asset::other-long-term-assets' }
export const enum TargetSelection { Entitled = 'entitled', All = 'all' }
export const enum AppliesTo { SpecificItems = 'specific-items', SpecificCategories = 'specific-categories', AllItems = 'all-items' }
export const enum Country { Laos = 'laos', Grenada = 'grenada', Liberia = 'liberia', Malaysia = 'malaysia', Mauritius = 'mauritius', DominicanRepublic = 'dominican-republic', Eswatini = 'eswatini', Andorra = 'andorra', Croatia = 'croatia', CzechRepublic = 'czech-republic', Eritrea = 'eritrea', Jordan = 'jordan', Liechtenstein = 'liechtenstein', Pakistan = 'pakistan', Palestine = 'palestine', Barbados = 'barbados', SaudiArabia = 'saudi-arabia', Senegal = 'senegal', Uganda = 'uganda', Uruguay = 'uruguay', SanMarino = 'san-marino', Poland = 'poland', Nigeria = 'nigeria', CoteDIvoire = 'cote-d-ivoire', Iceland = 'iceland', Ireland = 'ireland', Malawi = 'malawi', Egypt = 'egypt', Micronesia = 'micronesia', UnitedStates = 'united-states', VaticanCity = 'vatican-city', Latvia = 'latvia', Iran = 'iran', Austria = 'austria', ElSalvador = 'el-salvador', Peru = 'peru', Belize = 'belize', Niger = 'niger', BosniaAndHerzegovina = 'bosnia-and-herzegovina', CongoDemocraticRepublic = 'congo-democratic-republic', Norway = 'norway', Romania = 'romania', Greece = 'greece', Indonesia = 'indonesia', Rwanda = 'rwanda', Turkey = 'turkey', UnitedKingdom = 'united-kingdom', Ethiopia = 'ethiopia', Mauritania = 'mauritania', Germany = 'germany', Mali = 'mali', Armenia = 'armenia', CentralAfricanRepublic = 'central-african-republic', Cameroon = 'cameroon', Guyana = 'guyana', Italy = 'italy', Serbia = 'serbia', Kazakhstan = 'kazakhstan', SaintVincentAndTheGrenadines = 'saint-vincent-and-the-grenadines', Angola = 'angola', Australia = 'australia', Djibouti = 'djibouti', Sweden = 'sweden', Bolivia = 'bolivia', PapuaNewGuinea = 'papua-new-guinea', Israel = 'israel', Switzerland = 'switzerland', Singapore = 'singapore', Bhutan = 'bhutan', Estonia = 'estonia', Yemen = 'yemen', Lesotho = 'lesotho', EquatorialGuinea = 'equatorial-guinea', Tonga = 'tonga', Belarus = 'belarus', Brunei = 'brunei', Denmark = 'denmark', Georgia = 'georgia', Hungary = 'hungary', Kiribati = 'kiribati', Mozambique = 'mozambique', China = 'china', Syria = 'syria', Tunisia = 'tunisia', Ukraine = 'ukraine', Bangladesh = 'bangladesh', Honduras = 'honduras', Nepal = 'nepal', Philippines = 'philippines', TimorLeste = 'timor-leste', Tuvalu = 'tuvalu', Samoa = 'samoa', Slovenia = 'slovenia', Vietnam = 'vietnam', Bahamas = 'bahamas', France = 'france', AntiguaAndBarbuda = 'antigua-and-barbuda', Benin = 'benin', Myanmar = 'myanmar', CongoRepublic = 'congo-republic', Jamaica = 'jamaica', Namibia = 'namibia', Bulgaria = 'bulgaria', SaoTomeAndPrincipe = 'sao-tome-and-principe', Haiti = 'haiti', Somalia = 'somalia', Malta = 'malta', Azerbaijan = 'azerbaijan', Dominica = 'dominica', Sudan = 'sudan', India = 'india', Portugal = 'portugal', SaintLucia = 'saint-lucia', SierraLeone = 'sierra-leone', Brazil = 'brazil', Libya = 'libya', Tajikistan = 'tajikistan', SouthKorea = 'south-korea', Iraq = 'iraq', Comoros = 'comoros', Morocco = 'morocco', Tanzania = 'tanzania', Paraguay = 'paraguay', Togo = 'togo', TrinidadAndTobago = 'trinidad-and-tobago', Guinea = 'guinea', Oman = 'oman', Afghanistan = 'afghanistan', UnitedArabEmirates = 'united-arab-emirates', Colombia = 'colombia', SouthAfrica = 'south-africa', Finland = 'finland', MarshallIslands = 'marshall-islands', Cyprus = 'cyprus', SriLanka = 'sri-lanka', Albania = 'albania', Botswana = 'botswana', Japan = 'japan', Lebanon = 'lebanon', Burundi = 'burundi', Gabon = 'gabon', Belgium = 'belgium', Luxembourg = 'luxembourg', Kuwait = 'kuwait', Maldives = 'maldives', Venezuela = 'venezuela', SolomonIslands = 'solomon-islands', Lithuania = 'lithuania', Taiwan = 'taiwan', Panama = 'panama', Spain = 'spain', Argentina = 'argentina', GuineaBissau = 'guinea-bissau', Suriname = 'suriname', Vanuatu = 'vanuatu', Mongolia = 'mongolia', Seychelles = 'seychelles', Netherlands = 'netherlands', Chile = 'chile', Nauru = 'nauru', Palau = 'palau', Monaco = 'monaco', Guatemala = 'guatemala', Ecuador = 'ecuador', Bahrain = 'bahrain', Madagascar = 'madagascar', Moldova = 'moldova', Thailand = 'thailand', Slovakia = 'slovakia', Cambodia = 'cambodia', Gambia = 'gambia', Ghana = 'ghana', Mexico = 'mexico', Cuba = 'cuba', NorthMacedonia = 'north-macedonia', Chad = 'chad', Uzbekistan = 'uzbekistan', Canada = 'canada', SaintKittsAndNevis = 'saint-kitts-and-nevis', Nicaragua = 'nicaragua', Montenegro = 'montenegro', BurkinaFaso = 'burkina-faso', SouthSudan = 'south-sudan', Zimbabwe = 'zimbabwe', NewZealand = 'new-zealand', Algeria = 'algeria', Russia = 'russia', Turkmenistan = 'turkmenistan', NorthKorea = 'north-korea', Fiji = 'fiji', Qatar = 'qatar', Zambia = 'zambia', CaboVerde = 'cabo-verde', Kyrgyzstan = 'kyrgyzstan', CostaRica = 'costa-rica', Kenya = 'kenya' }
export const enum GlobalTaxType { PropertyTax = 'property-tax', Vat = 'vat', ExciseTax = 'excise-tax', CustomsDuty = 'customs-duty', Gst = 'gst', SalesTax = 'sales-tax', Other = 'other' }
export const enum IdentityProvider { Paypal = 'paypal', Reddit = 'reddit', Telegram = 'telegram', Facebook = 'facebook', Tumblr = 'tumblr', Whatsapp = 'whatsapp', Microsoft = 'microsoft', Amazon = 'amazon', Tiktok = 'tiktok', Other = 'other', Instagram = 'instagram', Pinterest = 'pinterest', Github = 'github', Snapchat = 'snapchat', Foursquare = 'foursquare', Line = 'line', Yahoo = 'yahoo', Flickr = 'flickr', Vimeo = 'vimeo', Apple = 'apple', Qq = 'qq', Discord = 'discord', Slack = 'slack', Dribbble = 'dribbble', Linkedin = 'linkedin', Wechat = 'wechat', Google = 'google', Twitter = 'twitter', Behance = 'behance', Signal = 'signal' }
export const enum AccountEngagementLevel { Cold = 'cold', Unknown = 'unknown', Hot = 'hot', Warm = 'warm' }
export const enum ReviewApprovalStatus { InReview = 'in-review', Approved = 'approved', Rejected = 'rejected', Revised = 'revised', Pending = 'pending' }
export const enum StakeholderType { Investor = 'investor', Customer = 'customer', Vendor = 'vendor', Partner = 'partner', Competitor = 'competitor', Other = 'other' }
export const enum AccountStatus { Active = 'active', Closed = 'closed', Inactive = 'inactive', Pending = 'pending', Suspended = 'suspended' }
export const enum CampaignStatus { Planned = 'planned', Scheduled = 'scheduled', Cancelled = 'cancelled', Active = 'active', Completed = 'completed', Draft = 'draft', Paused = 'paused', Archived = 'archived' }
export const enum CustomerType { Retail = 'retail', B2c = 'b2c', Wholesale = 'wholesale', Corporate = 'corporate', Online = 'online', B2b = 'b2b' }
export const enum MessageContentType { Text = 'text', Image = 'image', Audio = 'audio', Link = 'link', Voice = 'voice', File = 'file', Document = 'document', Sticker = 'sticker', Gif = 'gif', Contact = 'contact', Video = 'video', Location = 'location' }
export const enum ReactionType { Love = 'love', Bookmark = 'bookmark', Interested = 'interested', Angry = 'angry', Like = 'like', Wow = 'wow', Dislike = 'dislike', Laugh = 'laugh', Sad = 'sad' }
export const enum SupportTicketPriority { Urgent = 'urgent', Immediate = 'immediate', Low = 'low', Medium = 'medium', High = 'high' }
export const enum IssueLifecycleStatus { Closed = 'closed', OnHold = 'on-hold', InProgress = 'in-progress', Resolved = 'resolved', Open = 'open', Pending = 'pending', Cancelled = 'cancelled' }
export const enum OrderStatus { Disputed = 'disputed', AwaitingShipment = 'awaiting-shipment', PartiallyFulfilled = 'partially-fulfilled', Pending = 'pending', AwaitingPickup = 'awaiting-pickup', Returned = 'returned', Confirmed = 'confirmed', Cancelled = 'cancelled', Completed = 'completed', Failed = 'failed', Refunded = 'refunded', Draft = 'draft', Shipped = 'shipped', Abandoned = 'abandoned', Processing = 'processing', OnHold = 'on-hold', AwaitingPayment = 'awaiting-payment', Delivered = 'delivered' }
export const enum DiscountType { VariableAmount = 'variable-amount', TieredDiscount = 'tiered-discount', Percentage = 'percentage', FixedAmount = 'fixed-amount', ConditionalDiscount = 'conditional-discount', BuyOneGetOne = 'buy-one-get-one', VariablePercentage = 'variable-percentage', UnknownDiscount = 'unknown-discount' }
export const enum FulfillmentStatus { Failure = 'failure', Returned = 'returned', InTransit = 'in-transit', Delivered = 'delivered', Pending = 'pending', Cancelled = 'cancelled' }
export const enum ProductAvailabilityStatus { Discontinued = 'discontinued', PreOrder = 'pre-order', OutOfStock = 'out-of-stock', InStock = 'in-stock', BackOrder = 'back-order' }
export const enum ExpenseApprovalStatus { Denied = 'denied', Reviewing = 'reviewing', New = 'new', Reimbursed = 'reimbursed', Processed = 'processed', Approved = 'approved', Pending = 'pending', Cancelled = 'cancelled' }
export const enum FinancialChargeType { ServiceCharge = 'service-charge', LateFee = 'late-fee', TransactionFee = 'transaction-fee', ProcessingFee = 'processing-fee', InterestCharge = 'interest-charge', Commission = 'commission', Other = 'other' }
export const enum BillingStatus { Submitted = 'submitted', Pending = 'pending', Draft = 'draft', Paid = 'paid', Authorised = 'authorised', Unpaid = 'unpaid', Overdue = 'overdue', PartiallyPaid = 'partially-paid', Voided = 'voided', Deleted = 'deleted' }
export const enum InvoiceAdjustmentType { Tax = 'tax', Shipping = 'shipping', Other = 'other', Tip = 'tip', Discount = 'discount' }
export const enum DataType { Undefined = 'undefined', String = 'string', Json = 'json', Object = 'object', Array = 'array', Number = 'number', Date = 'date', Custom = 'custom', Boolean = 'boolean', Null = 'null', Binary = 'binary', Timestamp = 'timestamp' }
export const enum EmploymentType { FullTime = 'full-time', Contract = 'contract', Temporary = 'temporary', Internship = 'internship', Freelance = 'freelance', Permanent = 'permanent', Volunteer = 'volunteer', Seasonal = 'seasonal', PartTime = 'part-time' }
export const enum TimeCycle { Custom = 'custom', Minutely = 'minutely', SemiAnnually = 'semi-annually', Secondly = 'secondly', Triennially = 'triennially', Biennially = 'biennially', Biweekly = 'biweekly', Weekly = 'weekly', SemiMonthly = 'semi-monthly', Monthly = 'monthly', Annually = 'annually', Quarterly = 'quarterly', Hourly = 'hourly', AdHoc = 'ad-hoc', Daily = 'daily' }
export const enum FinancialTrackingCategories { None = 'none', Project = 'project', Division = 'division', Employee = 'employee', Customer = 'customer', Class = 'class', Vendor = 'vendor', Service = 'service', Location = 'location', CostCenter = 'cost-center', Other = 'other', Department = 'department', Product = 'product' }
export const enum CampaignType { SearchEngine = 'search-engine', Other = 'other', Display = 'display', SocialMedia = 'social-media', Email = 'email' }
export const enum ContactAddressType { Business = 'business', Temporary = 'temporary', Billing = 'billing', Shipping = 'shipping', Home = 'home', Other = 'other', Work = 'work', Personal = 'personal' }
export const enum LeadLifecycleStatus { Open = 'open', Connected = 'connected', InProcess = 'in-process', Lost = 'lost', Converted = 'converted', AttemptedToContact = 'attempted-to-contact', New = 'new', Unqualified = 'unqualified', Revisited = 'revisited', BadTiming = 'bad-timing' }
export const enum ParticipantEngagementStatus { Guest = 'guest', Moderator = 'moderator', Active = 'active', Left = 'left', Banned = 'banned', Inactive = 'inactive', Admin = 'admin' }
export const enum ItemEntityStatus { Pending = 'pending', Deleted = 'deleted', Suspended = 'suspended', Completed = 'completed', Archived = 'archived', Active = 'active', Inactive = 'inactive' }
export const enum Currency { SOS = 'sos', AMD = 'amd', MYR = 'myr', BGN = 'bgn', PLN = 'pln', CAD = 'cad', FKP = 'fkp', ISK = 'isk', LBP = 'lbp', SAR = 'sar', ANG = 'ang', BYN = 'byn', MVR = 'mvr', IMP = 'imp', SRD = 'srd', BAM = 'bam', AED = 'aed', FOK = 'fok', CLP = 'clp', MMK = 'mmk', KZT = 'kzt', USD = 'usd', ZMW = 'zmw', HRK = 'hrk', HTG = 'htg', SLL = 'sll', UAH = 'uah', CUC = 'cuc', ZAR = 'zar', LKR = 'lkr', GEL = 'gel', LAK = 'lak', JEP = 'jep', UYU = 'uyu', LYD = 'lyd', GGP = 'ggp', GIP = 'gip', RUB = 'rub', JPY = 'jpy', AUD = 'aud', KID = 'kid', NPR = 'npr', PKR = 'pkr', VND = 'vnd', CZK = 'czk', CUP = 'cup', KGS = 'kgs', NAD = 'nad', BTN = 'btn', SDG = 'sdg', QAR = 'qar', IDR = 'idr', AZN = 'azn', EUR = 'eur', NIO = 'nio', PGK = 'pgk', AWG = 'awg', MNT = 'mnt', CDF = 'cdf', BHD = 'bhd', BBD = 'bbd', IRR = 'irr', TTD = 'ttd', BSD = 'bsd', BWP = 'bwp', INR = 'inr', STN = 'stn', NZD = 'nzd', GHS = 'ghs', KRW = 'krw', AFN = 'afn', TJS = 'tjs', KYD = 'kyd', GNF = 'gnf', CVE = 'cve', XDR = 'xdr', XPF = 'xpf', BRL = 'brl', TRY = 'try', MXN = 'mxn', NOK = 'nok', ZWL = 'zwl', BIF = 'bif', GTQ = 'gtq', LRD = 'lrd', GMD = 'gmd', RON = 'ron', PAB = 'pab', MAD = 'mad', DKK = 'dkk', TND = 'tnd', WST = 'wst', CRC = 'crc', THB = 'thb', KWD = 'kwd', SEK = 'sek', BDT = 'bdt', MRU = 'mru', SBD = 'sbd', EGP = 'egp', XCD = 'xcd', JOD = 'jod', JMD = 'jmd', MZN = 'mzn', ERN = 'ern', XAF = 'xaf', CNY = 'cny', PEN = 'pen', SHP = 'shp', XOF = 'xof', BZD = 'bzd', SYP = 'syp', DOP = 'dop', KPW = 'kpw', MDL = 'mdl', DJF = 'djf', MKD = 'mkd', ARS = 'ars', HKD = 'hkd', OMR = 'omr', KMF = 'kmf', PHP = 'php', MUR = 'mur', TWD = 'twd', FJD = 'fjd', UGX = 'ugx', MGA = 'mga', RSD = 'rsd', BMD = 'bmd', UZS = 'uzs', IQD = 'iqd', ILS = 'ils', ALL = 'all', ETB = 'etb', SZL = 'szl', GBP = 'gbp', MWK = 'mwk', AOA = 'aoa', PYG = 'pyg', RWF = 'rwf', SGD = 'sgd', DZD = 'dzd', YER = 'yer', VES = 'ves', TZS = 'tzs', TVD = 'tvd', TMT = 'tmt', VUV = 'vuv', COP = 'cop', GYD = 'gyd', HNL = 'hnl', KHR = 'khr', MOP = 'mop', KES = 'kes', SCR = 'scr', BND = 'bnd', BOB = 'bob', CHF = 'chf', LSL = 'lsl', TOP = 'top', HUF = 'huf', SSP = 'ssp', NGN = 'ngn' }
export const enum CustomerEligibilityStatus { Other = 'other', ReturningCustomers = 'returning-customers', SpecificConditions = 'specific-conditions', AllCustomers = 'all-customers', NewCustomers = 'new-customers', VipCustomers = 'vip-customers' }
export const enum ItemCondition { New = 'new', Refurbished = 'refurbished', Used = 'used', Damaged = 'damaged', LikeNew = 'like-new', OpenBox = 'open-box' }
export const enum TransactionType { Withdrawal = 'withdrawal', Charge = 'charge', Deposit = 'deposit', Fee = 'fee', Adjustment = 'adjustment', Payment = 'payment', Refund = 'refund', Transfer = 'transfer' }
export const enum EntityLifecycleStatus { Scheduled = 'scheduled', Preorder = 'preorder', Archived = 'archived', Inactive = 'inactive', Deleted = 'deleted', Active = 'active', Draft = 'draft' }
export const enum JournalEntryStatus { Posted = 'posted', Error = 'error', Pending = 'pending', Corrected = 'corrected', Voided = 'voided', Draft = 'draft' }
export const enum DayOfWeek { Sunday = 'sunday', Monday = 'monday', Tuesday = 'tuesday', Friday = 'friday', Thursday = 'thursday', Wednesday = 'wednesday', Saturday = 'saturday' }
export const enum AccountingAccountType { OtherExpenseVehicleLoanInterest = 'other-expense::vehicle-loan-interest', LiabilityLiabilitiesRelatedToAssetsHeldForSale = 'liability::liabilities-related-to-assets-held-for-sale', AssetLongTermInvestments = 'asset::long-term-investments', AssetGlobalTaxDeferred = 'asset::global-tax-deferred', AssetOtherLongTermLoansAndAdvances = 'asset::other-long-term-loans-and-advances', ExpenseCostOfLabor = 'expense::cost-of-labor', AssetChecking = 'asset::checking', OtherCurrentLiabilityStaffAndRelatedLiabilityAccounts = 'other-current-liability::staff-and-related-liability-accounts', EquityAccumulatedOtherComprehensiveIncome = 'equity::accumulated-other-comprehensive-income', OtherIncomeTaxExemptInterest = 'other-income::tax-exempt-interest', OtherExpenseTaxRoundoffGainOrLoss = 'other-expense::tax-roundoff-gain-or-loss', Asset = 'asset', OtherCurrentLiabilityPayrollClearing = 'other-current-liability::payroll-clearing', AssetLoansToOfficers = 'asset::loans-to-officers', LiabilityNotesPayable = 'liability::notes-payable', OtherCurrentLiabilitySocialSecurityAgencies = 'other-current-liability::social-security-agencies', AssetCashAndCashEquivalents = 'asset::cash-and-cash-equivalents', RevenueOperatingGrants = 'revenue::operating-grants', OtherIncomeOtherMiscellaneousIncome = 'other-income::other-miscellaneous-income', ExpenseTravelExpensesGeneralAndAdminExpenses = 'expense::travel-expenses-general-and-admin-expenses', OtherCurrentLiabilityGlobalTaxSuspense = 'other-current-liability::global-tax-suspense', AssetInternalTransfers = 'asset::internal-transfers', LiabilityGroupAndAssociates = 'liability::group-and-associates', AssetFixedAssetPhone = 'asset::fixed-asset-phone', AssetLoansToStockholders = 'asset::loans-to-stockholders', OtherCurrentLiabilityAccruedLiabilities = 'other-current-liability::accrued-liabilities', AssetProvisionsNonCurrentAssets = 'asset::provisions-non-current-assets', OtherCurrentLiabilityStateLocalIncomeTaxPayable = 'other-current-liability::state-local-income-tax-payable', EquityInvestmentGrants = 'equity::investment-grants', OtherExpenseExceptionalItems = 'other-expense::exceptional-items', AssetFixedAsset = 'asset::fixed-asset', AssetDeferredTax = 'asset::deferred-tax', OtherExpenseHomeOwnerRentalInsurance = 'other-expense::home-owner-rental-insurance', OtherCurrentLiabilityDutiesAndTaxes = 'other-current-liability::duties-and-taxes', OtherExpenseVehicleInsurance = 'other-expense::vehicle-insurance', ExpenseBadDebts = 'expense::bad-debts', EquityOwnersEquity = 'equity::owners-equity', ExpenseBorrowingCost = 'expense::borrowing-cost', LiabilityGovernmentAndOtherPublicAuthorities = 'liability::government-and-other-public-authorities', ExpenseInsurance = 'expense::insurance', RevenueSalesRetail = 'revenue::sales-retail', EquityDividendDisbursed = 'equity::dividend-disbursed', OtherIncomeUnrealisedLossOnSecuritiesNetOfTax = 'other-income::unrealised-loss-on-securities-net-of-tax', OtherExpenseRentAndLease = 'other-expense::rent-and-lease', ExpenseOtherExternalServices = 'expense::other-external-services', AssetIntangibleAssetsUnderDevelopment = 'asset::intangible-assets-under-development', AssetCashOnHand = 'asset::cash-on-hand', AssetGoodwill = 'asset::goodwill', EquityPreferredStock = 'equity::preferred-stock', AssetDepletableAssets = 'asset::depletable-assets', AssetLicenses = 'asset::licenses', OtherExpensePriorPeriodItems = 'other-expense::prior-period-items', CostOfGoodsSoldShippingFreightDeliveryCos = 'cost-of-goods-sold::shipping-freight-delivery-cos', LiabilityProvisionsNonCurrentLiabilities = 'liability::provisions-non-current-liabilities', ExpenseAuto = 'expense::auto', ExpenseExternalServices = 'expense::external-services', OtherCurrentLiabilityPayrollTaxPayable = 'other-current-liability::payroll-tax-payable', OtherCurrentLiabilityCurrentPortionEmployeeBenefitsObligations = 'other-current-liability::current-portion-employee-benefits-obligations', AssetMoneyMarket = 'asset::money-market', OtherExpenseVehicleLoan = 'other-expense::vehicle-loan', LiabilityOtherLongTermLiabilities = 'liability::other-long-term-liabilities', RevenueNonProfitIncome = 'revenue::non-profit-income', OtherCurrentLiabilityGlobalTaxPayable = 'other-current-liability::global-tax-payable', RevenueSalesOfProductIncome = 'revenue::sales-of-product-income', ExpenseFinanceCosts = 'expense::finance-costs', ExpenseShippingAndDeliveryExpense = 'expense::shipping-and-delivery-expense', RevenueServiceFeeIncome = 'revenue::service-fee-income', ExpenseOfficeExpenses = 'expense::office-expenses', RevenueOtherPrimaryIncome = 'revenue::other-primary-income', AssetFixedAssetCopiers = 'asset::fixed-asset-copiers', AssetAssetsAvailableForSale = 'asset::assets-available-for-sale', OtherCurrentLiabilityTrustAccountsLiabilities = 'other-current-liability::trust-accounts-liabilities', AssetOtherCurrentAssets = 'asset::other-current-assets', OtherCurrentLiabilityProvisionsCurrentLiabilities = 'other-current-liability::provisions-current-liabilities', OtherCurrentLiabilityInsurancePayable = 'other-current-liability::insurance-payable', EquityCapitalReserves = 'equity::capital-reserves', ExpenseSuppliesMaterials = 'expense::supplies-materials', AssetAccumulatedAmortizationOfOtherAssets = 'asset::accumulated-amortization-of-other-assets', OtherExpenseDeferredTaxExpense = 'other-expense::deferred-tax-expense', AssetOtherLongTermAssets = 'asset::other-long-term-assets', RevenueCashReceiptIncome = 'revenue::cash-receipt-income', OtherExpenseDepletion = 'other-expense::depletion', AssetAssetsHeldForSale = 'asset::assets-held-for-sale', OtherCurrentLiability = 'other-current-liability', AssetDevelopmentCosts = 'asset::development-costs', OtherExpenseParkingAndTolls = 'other-expense::parking-and-tolls', EquityShareApplicationMoneyPendingAllotment = 'equity::share-application-money-pending-allotment', OtherCurrentLiabilityCurrentLiabilities = 'other-current-liability::current-liabilities', EquityPersonalIncome = 'equity::personal-income', OtherExpense = 'other-expense', OtherCurrentLiabilityDividendsPayable = 'other-current-liability::dividends-payable', AssetOtherFixedAssets = 'asset::other-fixed-assets', RevenueDiscountsRefundsGiven = 'revenue::discounts-refunds-given', AssetOtherConsumables = 'asset::other-consumables', AssetShortTermLoansAndAdvancesToRelatedParties = 'asset::short-term-loans-and-advances-to-related-parties', CostOfGoodsSoldSuppliesMaterialsCogs = 'cost-of-goods-sold::supplies-materials-cogs', ExpenseUnappliedCashBillPaymentExpense = 'expense::unapplied-cash-bill-payment-expense', EquityOpeningBalanceEquity = 'equity::opening-balance-equity', LiabilityAccrualsAndDeferredIncome = 'liability::accruals-and-deferred-income', AssetLoansToOthers = 'asset::loans-to-others', OtherCurrentLiabilitySalesTaxPayable = 'other-current-liability::sales-tax-payable', OtherCurrentLiabilityDirectDepositPayable = 'other-current-liability::direct-deposit-payable', OtherCurrentLiabilityRentsInTrustLiability = 'other-current-liability::rents-in-trust-liability', AssetFixedAssetPhotoVideo = 'asset::fixed-asset-photo-video', ExpenseEntertainment = 'expense::entertainment', AssetOtherAsset = 'asset::other-asset', EquityTreasuryStock = 'equity::treasury-stock', OtherExpenseRepairsAndMaintenance = 'other-expense::repairs-and-maintenance', OtherExpenseHomeOffice = 'other-expense::home-office', OtherIncomeOtherOperatingIncome = 'other-income::other-operating-income', AssetFixedAssetComputers = 'asset::fixed-asset-computers', AssetInventory = 'asset::inventory', ExpenseLegalProfessionalFees = 'expense::legal-professional-fees', ExpenseOtherSellingExpenses = 'expense::other-selling-expenses', LiabilityStaffAndRelatedLongTermLiabilityAccounts = 'liability::staff-and-related-long-term-liability-accounts', ExpenseShippingFreightDelivery = 'expense::shipping-freight-delivery', AssetTrustAccounts = 'asset::trust-accounts', AssetInvestmentOther = 'asset::investment-other', ExpenseUtilities = 'expense::utilities', AssetAssetsInCourseOfConstruction = 'asset::assets-in-course-of-construction', ExpenseAppropriationsToDepreciation = 'expense::appropriations-to-depreciation', OtherCurrentLiabilityPrepaidExpensesPayable = 'other-current-liability::prepaid-expenses-payable', OtherCurrentLiabilityTradeAndOtherPayables = 'other-current-liability::trade-and-other-payables', LiabilityOutstandingDuesMicroSmallEnterprise = 'liability::outstanding-dues-micro-small-enterprise', Expense = 'expense', LiabilityDeferredTaxLiabilities = 'liability::deferred-tax-liabilities', OtherCurrentLiabilityShortTermBorrowings = 'other-current-liability::short-term-borrowings', AssetAccumulatedDepreciation = 'asset::accumulated-depreciation', ExpensePayrollExpenses = 'expense::payroll-expenses', AssetShortTermInvestmentsInRelatedParties = 'asset::short-term-investments-in-related-parties', CostOfGoodsSold = 'cost-of-goods-sold', AssetAccumulatedAmortization = 'asset::accumulated-amortization', EquityHealthcare = 'equity::healthcare', LiabilityObligationsUnderFinanceLeases = 'liability::obligations-under-finance-leases', OtherExpenseUtilities = 'other-expense::utilities', OtherIncomeLossOnDisposalOfAssets = 'other-income::loss-on-disposal-of-assets', EquityRetainedEarnings = 'equity::retained-earnings', AssetNonCurrentAssets = 'asset::non-current-assets', LiabilityOutstandingDuesOtherThanMicroSmallEnterprise = 'liability::outstanding-dues-other-than-micro-small-enterprise', RevenueRevenueGeneral = 'revenue::revenue-general', RevenueOwnWorkCapitalized = 'revenue::own-work-capitalized', Equity = 'equity', LiabilityLongTermDebit = 'liability::long-term-debit', ExpensePurchasesRebates = 'expense::purchases-rebates', EquityCommonStock = 'equity::common-stock', EquityShareCapital = 'equity::share-capital', OtherExpenseGasAndFuel = 'other-expense::gas-and-fuel', LiabilityAccruedLongTermLiabilities = 'liability::accrued-long-term-liabilities', AssetBuildings = 'asset::buildings', ExpenseCharitableContributions = 'expense::charitable-contributions', OtherExpenseVehicleRepairs = 'other-expense::vehicle-repairs', RevenueSalesWholesale = 'revenue::sales-wholesale', OtherCurrentLiabilityLoanPayable = 'other-current-liability::loan-payable', AssetCapitalWip = 'asset::capital-wip', EquityAccumulatedAdjustment = 'equity::accumulated-adjustment', EquityPaidInCapitalOrSurplus = 'equity::paid-in-capital-or-surplus', ExpenseTravelExpensesSellingExpense = 'expense::travel-expenses-selling-expense', LiabilityLongTermEmployeeBenefitObligations = 'liability::long-term-employee-benefit-obligations', AssetProvisionsFixedAssets = 'asset::provisions-fixed-assets', AssetPrepaymentsAndAccruedIncome = 'asset::prepayments-and-accrued-income', AssetCumulativeDepreciationOnIntangibleAssets = 'asset::cumulative-depreciation-on-intangible-assets', ExpenseLossOnDiscontinuedOperationsNetOfTax = 'expense::loss-on-discontinued-operations-net-of-tax', EquityPersonalExpense = 'equity::personal-expense', AccountsReceivable = 'accounts-receivable', OtherIncomeDividendIncome = 'other-income::dividend-income', RevenueIncome = 'revenue::income', AssetFixedAssetFurniture = 'asset::fixed-asset-furniture', AssetOtherCurrentAsset = 'asset::other-current-asset', LiabilityDebtsRelatedToParticipatingInterests = 'liability::debts-related-to-participating-interests', LiabilityShareholderNotesPayable = 'liability::shareholder-notes-payable', RevenueOtherCurrentOperatingIncome = 'revenue::other-current-operating-income', OtherExpenseOtherHomeOfficeExpenses = 'other-expense::other-home-office-expenses', OtherCurrentLiabilityProvisionForWarrantyObligations = 'other-current-liability::provision-for-warranty-obligations', OtherCurrentLiabilitySundryDebtorsAndCreditors = 'other-current-liability::sundry-debtors-and-creditors', AssetFurnitureAndFixtures = 'asset::furniture-and-fixtures', OtherExpenseVehicleRegistration = 'other-expense::vehicle-registration', ExpenseTravelMeals = 'expense::travel-meals', AssetProvisionsCurrentAssets = 'asset::provisions-current-assets', AssetEmployeeCashAdvances = 'asset::employee-cash-advances', AssetAllowanceForBadDebts = 'asset::allowance-for-bad-debts', AssetVehicles = 'asset::vehicles', ExpenseDuesSubscriptions = 'expense::dues-subscriptions', ExpenseRentOrLeaseOfBuildings = 'expense::rent-or-lease-of-buildings', ExpenseCommissionsAndFees = 'expense::commissions-and-fees', ExpenseStaffCosts = 'expense::staff-costs', LiabilityCreditCard = 'liability::credit-card', OtherIncomeInterestEarned = 'other-income::interest-earned', AssetRetainage = 'asset::retainage', EquityPartnerContributions = 'equity::partner-contributions', OtherExpenseWashAndRoadServices = 'other-expense::wash-and-road-services', EquityPartnersEquity = 'equity::partners-equity', AssetParticipatingInterests = 'asset::participating-interests', RevenueSavingsByTaxScheme = 'revenue::savings-by-tax-scheme', EquityFunds = 'equity::funds', AssetOtherLongTermInvestments = 'asset::other-long-term-investments', ExpenseOtherMiscellaneousServiceCost = 'expense::other-miscellaneous-service-cost', LiabilityLongTermLiability = 'liability::long-term-liability', AssetInvestmentTaxExemptSecurities = 'asset::investment-tax-exempt-securities', OtherExpenseOtherVehicleExpenses = 'other-expense::other-vehicle-expenses', AssetFixedAssetOtherToolsEquipment = 'asset::fixed-asset-other-tools-equipment', ExpenseOtherCurrentOperatingCharges = 'expense::other-current-operating-charges', OtherIncomeOtherInvestmentIncome = 'other-income::other-investment-income', OtherExpenseIncomeTaxOtherExpense = 'other-expense::income-tax-other-expense', OtherExpenseMortgageInterest = 'other-expense::mortgage-interest', AssetLongTermLoansAndAdvancesToRelatedParties = 'asset::long-term-loans-and-advances-to-related-parties', AssetBank = 'asset::bank', OtherExpensePenaltiesSettlements = 'other-expense::penalties-settlements', AssetOtherEarMarkedBankAccounts = 'asset::other-ear-marked-bank-accounts', ExpenseEntertainmentMeals = 'expense::entertainment-meals', EquityOtherFreeReserves = 'equity::other-free-reserves', ExpenseRepairMaintenance = 'expense::repair-maintenance', OtherCurrentLiabilityFederalIncomeTaxPayable = 'other-current-liability::federal-income-tax-payable', LiabilityLongTermBorrowings = 'liability::long-term-borrowings', CostOfGoodsSoldFreightAndDeliveryCost = 'cost-of-goods-sold::freight-and-delivery-cost', LiabilityOtherLongTermProvisions = 'liability::other-long-term-provisions', AssetBalWithGovtAuthorities = 'asset::bal-with-govt-authorities', OtherCurrentLiabilityCurrentTaxLiability = 'other-current-liability::current-tax-liability', AssetAccumulatedDepletion = 'asset::accumulated-depletion', CostOfGoodsSoldCostOfSales = 'cost-of-goods-sold::cost-of-sales', AssetExpenditureAuthorisationsAndLettersOfCredit = 'asset::expenditure-authorisations-and-letters-of-credit', OtherIncome = 'other-income', AssetLandAsset = 'asset::land-asset', ExpenseAdvertisingPromotional = 'expense::advertising-promotional', CostOfGoodsSoldCostOfLaborCos = 'cost-of-goods-sold::cost-of-labor-cos', ExpenseDistributionCosts = 'expense::distribution-costs', ExpenseProjectStudiesSurveysAssessments = 'expense::project-studies-surveys-assessments', OtherExpenseVehicleLease = 'other-expense::vehicle-lease', ExpenseInterestPaid = 'expense::interest-paid', OtherExpenseMatCredit = 'other-expense::mat-credit', ExpenseOtherBusinessExpenses = 'expense::other-business-expenses', EquityEstimatedTaxes = 'equity::estimated-taxes', OtherExpenseExchangeGainOrLoss = 'other-expense::exchange-gain-or-loss', OtherCurrentLiabilityOtherCurrentLiabilities = 'other-current-liability::other-current-liabilities', LiabilityBankLoans = 'liability::bank-loans', AssetInvestmentMortgageRealEstateLoans = 'asset::investment-mortgage-real-estate-loans', ExpenseTravel = 'expense::travel', OtherCurrentLiabilityInterestPayables = 'other-current-liability::interest-payables', AssetIntangibleAssets = 'asset::intangible-assets', LiabilityProvisionForLiabilities = 'liability::provision-for-liabilities', CostOfGoodsSoldEquipmentRentalCos = 'cost-of-goods-sold::equipment-rental-cos', AssetRentsHeldInTrust = 'asset::rents-held-in-trust', OtherExpenseExtraordinaryItems = 'other-expense::extraordinary-items', ExpensePromotionalMeals = 'expense::promotional-meals', OtherExpenseVehicle = 'other-expense::vehicle', AssetGlobalTaxRefund = 'asset::global-tax-refund', ExpenseAmortizationExpense = 'expense::amortization-expense', AssetMachineryAndEquipment = 'asset::machinery-and-equipment', OtherIncomeGainLossOnSaleOfFixedAssets = 'other-income::gain-loss-on-sale-of-fixed-assets', LiabilityAccruedVacationPayable = 'liability::accrued-vacation-payable', ExpenseSundry = 'expense::sundry', AssetInvestmentUsGovernmentObligations = 'asset::investment-us-government-obligations', ExpenseEquipmentRental = 'expense::equipment-rental', AssetUndepositedFunds = 'asset::undeposited-funds', AssetTradeAndOtherReceivables = 'asset::trade-and-other-receivables', EquityPartnerDistributions = 'equity::partner-distributions', EquityMoneyReceivedAgainstShareWarrants = 'equity::money-received-against-share-warrants', ExpenseGlobalTaxExpense = 'expense::global-tax-expense', ExpenseTaxesPaid = 'expense::taxes-paid', AssetLeaseholdImprovements = 'asset::leasehold-improvements', OtherExpenseOtherMiscellaneousExpense = 'other-expense::other-miscellaneous-expense', AssetLand = 'asset::land', OtherCurrentLiabilityCurrentPortionOfObligationsUnderFinanceLeases = 'other-current-liability::current-portion-of-obligations-under-finance-leases', ExpenseManagementCompensation = 'expense::management-compensation', AssetFixedAssetSoftware = 'asset::fixed-asset-software', CostOfGoodsSoldOtherCostsOfServiceCos = 'cost-of-goods-sold::other-costs-of-service-cos', ExpenseIncomeTaxExpense = 'expense::income-tax-expense', ExpenseOtherRentalCosts = 'expense::other-rental-costs', LiabilityAccountsPayable = 'liability::accounts-payable', AssetOrganizationalCosts = 'asset::organizational-costs', OtherCurrentLiabilityLineOfCredit = 'other-current-liability::line-of-credit', RevenueUnappliedCashPaymentIncome = 'revenue::unapplied-cash-payment-income', AssetSecurityDeposits = 'asset::security-deposits', ExpenseBankCharges = 'expense::bank-charges', AssetPrepaidExpenses = 'asset::prepaid-expenses', AssetAvailableForSaleFinancialAssets = 'asset::available-for-sale-financial-assets', AssetOtherIntangibleAssets = 'asset::other-intangible-assets', AssetCalledUpShareCapitalNotPaid = 'asset::called-up-share-capital-not-paid', OtherExpenseDepreciation = 'other-expense::depreciation', OtherExpenseAmortization = 'other-expense::amortization', OtherIncomeGainLossOnSaleOfInvestments = 'other-income::gain-loss-on-sale-of-investments', AssetLeaseBuyout = 'asset::lease-buyout', ExpenseExtraordinaryCharges = 'expense::extraordinary-charges', AssetSavings = 'asset::savings', EquityCalledUpShareCapital = 'equity::called-up-share-capital', AssetInvestments = 'asset::investments', EquityEquityInEarningsOfSubsidiuaries = 'equity::equity-in-earnings-of-subsidiuaries', ExpenseOfficeGeneralAdministrativeExpenses = 'expense::office-general-administrative-expenses' }
export const enum MessageReadStatus { Failed = 'failed', Sent = 'sent', Delivered = 'delivered', Unsent = 'unsent', Read = 'read' }
export const enum MessageDeliveryStatus { Error = 'error', Undeliverable = 'undeliverable', Failed = 'failed', Read = 'read', Sent = 'sent', Pending = 'pending', Delivered = 'delivered' }
export const enum SupportQueryType { Task = 'task', Bug = 'bug', FeatureRequest = 'feature-request', Feedback = 'feedback', Question = 'question', Problem = 'problem', Incident = 'incident' }
export const enum ImageMimeType { ImageJpeg = 'image/jpeg', ImageBmp = 'image/bmp', ImageWebp = 'image/webp', ImageSvgXml = 'image/svg+xml', ImagePng = 'image/png', ImageGif = 'image/gif', ImageHeic = 'image/heic', ImageTiff = 'image/tiff' }
export const enum OrderingCriteria { Popularity = 'popularity', Alphabetical = 'alphabetical', PriceDescending = 'price-descending', Manual = 'manual', Relevance = 'relevance', CreationDate = 'creation-date', Rating = 'rating', PriceAscending = 'price-ascending' }
export const enum ChatType { Private = 'private', Public = 'public', Group = 'group' }
export const enum ItemAvailabilityStatus { Discontinued = 'discontinued', Inactive = 'inactive', OutOfStock = 'out-of-stock', Active = 'active' }
export const enum FinancialAccountStatus { Suspended = 'suspended', UnderReview = 'under-review', Active = 'active', Frozen = 'frozen', Inactive = 'inactive', Closed = 'closed', Delinquent = 'delinquent' }
export const enum TransactionStatus { Error = 'error', Failed = 'failed', InProgress = 'in-progress', Initiated = 'initiated', Pending = 'pending', Succeeded = 'succeeded', Cancelled = 'cancelled' }
export const enum CreditNoteStatus { Pending = 'pending', Completed = 'completed', Applied = 'applied', Disputed = 'disputed', Issued = 'issued', Draft = 'draft', Void = 'void', Cancelled = 'cancelled', Revised = 'revised' }
export const enum PaymentTerm { CashInAdvance = 'cash-in-advance', DueEndOfMonth = 'due-end-of-month', CashOnDelivery = 'cash-on-delivery', Installment = 'installment', CashWithOrder = 'cash-with-order', Net30 = 'net-30', Net90 = 'net-90', DueOnReceipt = 'due-on-receipt', Net = 'net', Prepaid = 'prepaid', UponCompletion = 'upon-completion', Custom = 'custom', DeferredPayment = 'deferred-payment', Prepayment = 'prepayment', Net60 = 'net-60', CashBeforeShipment = 'cash-before-shipment' }
export const enum EmploymentAndCandidateStatus { Inactive = 'inactive', Hired = 'hired', Terminated = 'terminated', Active = 'active', New = 'new', Interviewing = 'interviewing', OfferExtended = 'offer-extended', OnLeave = 'on-leave', NotSelected = 'not-selected', Other = 'other', InReview = 'in-review' }
export const enum OrganizationalRole { Supervisor = 'supervisor', Contractor = 'contractor', Admin = 'admin', Other = 'other', Employee = 'employee', Manager = 'manager', Director = 'director' }
export const enum CustomerStatus { Pending = 'pending', Active = 'active', Inactive = 'inactive', Archived = 'archived', Suspended = 'suspended' }
export const enum SocialPlatform { Tiktok = 'tiktok', Pinterest = 'pinterest', Tumblr = 'tumblr', Skype = 'skype', X = 'x', Facebook = 'facebook', Youtube = 'youtube', Reddit = 'reddit', OtherSocialPlatform = 'other-social-platform', Instagram = 'instagram', Linkedin = 'linkedin', Snapchat = 'snapchat', Twitter = 'twitter' }
export const enum ConversationStatus { Active = 'active', Archived = 'archived', Deleted = 'deleted' }
export const enum CommunicationRole { Group = 'group', Owner = 'owner', Service = 'service', Bot = 'bot', User = 'user', Admin = 'admin', System = 'system', Channel = 'channel', Assistant = 'assistant', Moderator = 'moderator', Member = 'member', Guest = 'guest' }
export const enum LifecycleStatus { Active = 'active', Cancelled = 'cancelled', Issued = 'issued', Suspended = 'suspended', Redeemed = 'redeemed', Expired = 'expired' }
export const enum PaymentMethod { MobilePayment = 'mobile-payment', MobileWallet = 'mobile-wallet', Cash = 'cash', CashOnDelivery = 'cash-on-delivery', Cryptocurrency = 'cryptocurrency', Other = 'other', DebitCard = 'debit-card', Check = 'check', Paypal = 'paypal', BankTransfer = 'bank-transfer', CreditCard = 'credit-card' }
export const enum FinancialTransactionStatus { Cancelled = 'cancelled', SettlementInProgress = 'settlement-in-progress', Pending = 'pending', Authorized = 'authorized', Refunded = 'refunded', Cleared = 'cleared', Disputed = 'disputed', Failed = 'failed' }
export const enum AuditOpinionType { Qualified = 'qualified', Unqualified = 'unqualified', Disclaimer = 'disclaimer', Adverse = 'adverse' }
export const enum InventoryStorageType { Other = 'other', RetailStore = 'retail-store', Warehouse = 'warehouse', DistributionCenter = 'distribution-center', OnlineMarketplace = 'online-marketplace', Consignment = 'consignment', DropShipper = 'drop-shipper' }
export const enum VisibilityScope { App = 'app', Web = 'web', Global = 'global', Internal = 'internal', Private = 'private' }
export const enum PaymentStatus { Pending = 'pending', Succeeded = 'succeeded', Draft = 'draft', Failed = 'failed', Disputed = 'disputed', Deleted = 'deleted', Error = 'error', Paid = 'paid', PartiallyRefunded = 'partially-refunded', Adjusted = 'adjusted', Voided = 'voided', Processing = 'processing', Overdue = 'overdue', Partial = 'partial', Authorized = 'authorized', Cancelled = 'cancelled', Refunded = 'refunded', Submitted = 'submitted' }
export const enum TransactionChannel { Telephone = 'telephone', Other = 'other', Mobile = 'mobile', BankBranch = 'bank-branch', InPerson = 'in-person', Atm = 'atm', Online = 'online', Mail = 'mail' }
export const enum FinancialDisputeStatus { Won = 'won', NeedsResponse = 'needs-response', ChargeRefunded = 'charge-refunded', Lost = 'lost', Closed = 'closed', Escalated = 'escalated', AwaitingEvidence = 'awaiting-evidence', UnderReview = 'under-review' }
export const enum DeviceUsageType { Personal = 'personal', Educational = 'educational', Industrial = 'industrial', Other = 'other', Business = 'business', Home = 'home', Healthcare = 'healthcare' }
export const enum FinancialTransactionType { Dividend = 'dividend', Transfer = 'transfer', Interest = 'interest', Charge = 'charge', Payment = 'payment', ReceivePrepayment = 'receive-prepayment', Spend = 'spend', Sale = 'sale', Refund = 'refund', Receive = 'receive', ReceiveOverpayment = 'receive-overpayment', SpendPrepayment = 'spend-prepayment', Withdrawal = 'withdrawal', Deposit = 'deposit', Fee = 'fee', Adjustment = 'adjustment', Other = 'other', Chargeback = 'chargeback', SpendOverpayment = 'spend-overpayment' }
export const enum AccessControlModel { Custom = 'custom', None = 'none', Rbac = 'rbac', Dac = 'dac', Abac = 'abac', Mac = 'mac' }
export const enum ParticipantType { Team = 'team', Organization = 'organization', ExternalParticipant = 'external-participant', Group = 'group', User = 'user' }
export const enum PriorityLevel { Urgent = 'urgent', Low = 'low', Medium = 'medium', Elevated = 'elevated', High = 'high' }
export const enum PrerequisiteRangeType { Quantity = 'quantity', Subtotal = 'subtotal', ShippingPrice = 'shipping-price' }
export const enum ContentVisibility { Private = 'private', Protected = 'protected', Public = 'public', Shared = 'shared', Internal = 'internal' }
export const enum EntityCategory { Event = 'event', Message = 'message', User = 'user', Link = 'link', Other = 'other', Person = 'person', Project = 'project', Task = 'task', Owner = 'owner', Document = 'document' }
export const enum GenderIdentity { Other = 'other', Female = 'female', Male = 'male', PreferNotToSay = 'prefer-not-to-say' }
export const enum CommunicationMethod { Text = 'text', Sms = 'sms', VideoCall = 'video-call', Email = 'email', Phone = 'phone', Mail = 'mail', InstantMessage = 'instant-message', SocialMedia = 'social-media', InPerson = 'in-person', Other = 'other', PushNotification = 'push-notification' }
export const enum EmailCategoryType { Business = 'business', Promotional = 'promotional', Other = 'other', Transactional = 'transactional', Personal = 'personal', Educational = 'educational', Governmental = 'governmental', Spam = 'spam' }
export const enum UniversalIdentifierType { Url = 'url', String = 'string', Number = 'number', Email = 'email', Uuid = 'uuid' }
export const enum TaskStatus { Blocked = 'blocked', Done = 'done', Cancelled = 'cancelled', OnHold = 'on-hold', InProgress = 'in-progress', Todo = 'todo' }
export const enum UserStatus { Banned = 'banned', Suspended = 'suspended', Verified = 'verified', Pending = 'pending', WaitListed = 'wait-listed', Active = 'active', Deleted = 'deleted', Archived = 'archived', Inactive = 'inactive' }
export const enum PromotionType { FreeShipping = 'free-shipping', Percentage = 'percentage', Other = 'other', FixedAmount = 'fixed-amount', BuyOneGetOne = 'buy-one-get-one', RewardPoints = 'reward-points' }
export const enum MimeType { ImageWebp = 'image/webp', ImagePng = 'image/png', ImageJpeg = 'image/jpeg', ImageSvgXml = 'image/svg+xml', ImageGif = 'image/gif' }
export const enum TaxType { Inclusive = 'inclusive', Additive = 'additive', Variable = 'variable' }
export const enum ModifierType { List = 'list', Text = 'text' }
export const enum CardType { Debit = 'debit', Credit = 'credit', UnknownCard = 'unknown-card' }
export const enum PrepaidType { NotPrepaid = 'not-prepaid', Prepaid = 'prepaid', UnknownPrepaid = 'unknown-prepaid' }
export const enum EntryMethod { Keyed = 'keyed', Emv = 'emv', Swiped = 'swiped', Contactless = 'contactless', OnFile = 'on-file' }
export const enum CvvStatus { Accepted = 'accepted', NotChecked = 'not-checked', Rejected = 'rejected' }
export const enum AvcStatus { Rejected = 'rejected', NotChecked = 'not-checked', Accepted = 'accepted' }
export const enum CreditType { Goodwill = 'goodwill', Customer = 'customer', Supplier = 'supplier', Prepayment = 'prepayment', Overpayment = 'overpayment' }
export const enum CallDirection { Outbound = 'outbound', Conference = 'conference', Unknown = 'unknown', Inbound = 'inbound' }
export const enum SpeakerRole { Invitee = 'invitee', Attendee = 'attendee' }
export const enum FileType { File = 'file', Folder = 'folder', Url = 'url' }
