// This file is auto-generated. Do not edit it manually.

export interface WorkExperiences { endDate?: string;
    position?: string;
    companyName?: string;
    description?: string;
    commonModel?: string;
    startDate?: string }
export interface Webhooks { format?: Format;
    isDeleted?: boolean;
    commonModel?: string;
    objects?: string[];
    modifyToken?: string;
    createdAt?: string;
    id?: string;
    events?: string[];
    address?: string;
    updatedAt?: string }
export interface Vendors { createdAt?: string;
    isActive?: boolean;
    isDeleted?: boolean;
    updatedAt?: string;
    modifyToken?: string;
    outstandingBalance?: number;
    contactName?: string;
    tax?: Taxes[];
    is1099?: boolean;
    contactPhoneNumber?: string;
    website?: string;
    commonModel?: string;
    currency?: string;
    accountNumber?: string;
    address?: Addresses;
    customFields?: CustomAttributes[];
    overdueBalance?: number;
    companyName?: string;
    note?: string;
    id?: string;
    contactEmail?: string }
export interface Variants { productId?: string;
    title?: string;
    imageId?: number;
    commonModel?: string;
    weightUnit?: string;
    weight?: number;
    status?: ItemAvailabilityStatus;
    isDeleted?: boolean;
    price?: number;
    dimensions?: Dimensions;
    isActive?: boolean;
    isTaxable?: boolean;
    createdAt?: string;
    barcode?: string;
    requiresShipping?: boolean;
    updatedAt?: string;
    sku?: string;
    modifyToken?: string;
    compareAtPrice?: number;
    id?: string;
    isDefault?: boolean;
    inventoryQuantity?: number }
export interface Users { isActive?: boolean;
    middleName?: string;
    lastLogin?: string;
    phoneNumber?: string;
    updatedAt?: string;
    addresses?: Addresses[];
    socialProfiles?: SocialProfiles[];
    status?: UserStatus;
    dateOfBirth?: string;
    lastName?: string;
    preferences?: Preferences;
    email?: string;
    password?: string;
    commonModel?: string;
    sso?: SSO[];
    paymentMethod?: PaymentMethods;
    firstName?: string;
    bio?: string;
    roles?: Roles[];
    website?: string;
    gender?: Gender;
    modifyToken?: string;
    id?: string;
    createdAt?: string;
    username?: string;
    profilePicture?: Images;
    coverPhoto?: Images }
export interface UserOrGroup { identifier?: string;
    displayName?: string;
    commonModel?: string;
    type?: ParticipantType }
export interface UsageLimitExpirations { commonModel?: string;
    limit?: number;
    expirationDate?: string }
export interface Transcripts { topic?: string;
    meetingId?: string;
    id?: string;
    sentences?: Sentences[];
    updatedAt?: string;
    speakerId?: string;
    speakerName?: string;
    createdAt?: string;
    modifyToken?: string;
    commonModel?: string }
export interface Transactions { currency?: Currency;
    items?: Items[];
    amount?: number;
    recipient?: Customers;
    date?: string;
    taxExempt?: boolean;
    commonModel?: string;
    sender?: Customers;
    transactionCategory?: TransactionType;
    attachments?: Attachments[];
    modifyToken?: string;
    dispute?: Disputes;
    accountName?: string;
    foreignCurrency?: CurrencyDetails;
    shippingDetails?: ShippingDetails;
    billingDetails?: BillingDetails;
    orderId?: string;
    contact?: Contacts;
    exchangeRate?: number;
    taxAmount?: number;
    transactionMethod?: TransactionMethod;
    paymentIntent?: string;
    invoiceId?: string;
    checkNumber?: string;
    status?: FinancialTransactionStatus;
    updatedAt?: string;
    debitAmount?: number;
    description?: string;
    isDeleted?: boolean;
    paymentMethod?: PaymentMethods;
    accountId?: string;
    metadata?: Metadata;
    creditAmount?: number;
    id?: string;
    type?: FinancialTransactionType;
    refund?: Refunds;
    applicationFee?: number;
    createdAt?: string;
    accountCode?: string;
    tags?: string[] }
export interface TransactionDetails { status?: string;
    amount?: number;
    commonModel?: string;
    transactionId?: string }
export interface ToolResultContent { image?: Images;
    type?: AiMessagesContentType;
    text?: string[];
    commonModel?: string }
export interface ToolCalls { type?: ToolCallType;
    function?: unknown;
    commonModel?: string;
    modifyToken?: string;
    id?: string }
export interface TimeSession { openTime?: string;
    closeTime?: string;
    commonModel?: string }
export interface Tickets { commonModel?: string;
    title?: string;
    updatedAt?: string;
    category?: Categories;
    priority?: SupportTicketPriority;
    attachments?: Attachments[];
    comments?: Comments[];
    tags?: string[];
    customFields?: CustomAttributes[];
    admin?: Users;
    description?: string;
    modifyToken?: string;
    status?: IssueLifecycleStatus;
    dueDate?: string;
    createdAt?: string;
    type?: SupportQueryType;
    notes?: Notes[];
    id?: string;
    companyId?: string;
    typeId?: string;
    assignee?: Users;
    reporter?: Contacts }
export interface Threads { id?: string;
    lastMessageId?: string;
    commonModel?: string;
    lastHistoryId?: string;
    tags?: KeyValues[];
    messages?: Messages[];
    createdAt?: string;
    updatedAt?: string;
    isDeleted?: boolean;
    modifyToken?: string;
    snippet?: string }
export interface Taxes { customFields?: CustomAttributes[];
    amount?: number;
    commonModel?: string;
    category?: string;
    jurisdiction?: string;
    currency?: Currency;
    updatedAt?: string;
    description?: string;
    isDeleted?: boolean;
    isTaxable?: boolean;
    region?: string;
    country?: string;
    type?: TaxType;
    rate?: number;
    createdAt?: string;
    isActive?: boolean;
    name?: string;
    id?: string;
    code?: string }
export interface TaxRates { id?: string;
    percentage?: number;
    isCompound?: boolean;
    applicableItems?: string[];
    commonModel?: string;
    description?: string;
    taxComponents?: TaxLines[];
    taxType?: string;
    taxProvider?: string;
    customFields?: CustomAttributes[];
    region?: string;
    isDeleted?: boolean;
    country?: string;
    taxNumber?: string;
    shippingIncluded?: boolean;
    displayRate?: string;
    currency?: Currency;
    modifyToken?: string;
    reportTaxType?: string;
    updatedAt?: string;
    name?: string;
    isActive?: boolean;
    createdAt?: string }
export interface TaxLines { taxCode?: string;
    isNonRecoverable?: boolean;
    isInclusive?: boolean;
    updatedAt?: string;
    commonModel?: string;
    metadata?: Metadata;
    isCompound?: boolean;
    rate?: number;
    isActive?: boolean;
    title?: string;
    name?: string;
    createdAt?: string;
    isDeleted?: boolean;
    id?: string;
    price?: number }
export interface TaxDetails { createdAt?: string;
    currency?: Currency;
    amount?: number;
    taxRegistrationNumber?: string;
    isDeleted?: boolean;
    id?: string;
    jurisdiction?: string;
    isTaxIncludedInPrice?: boolean;
    expirationDate?: string;
    taxCode?: string;
    updatedAt?: string;
    isActive?: boolean;
    region?: string;
    category?: string;
    commonModel?: string;
    country?: string;
    effectiveDate?: string;
    details?: string;
    name?: string;
    rate?: number }
export interface Tasks { createdBy?: Users;
    updatedAt?: string;
    id?: string;
    labels?: string[];
    attachments?: Attachments[];
    comments?: Comments[];
    timeLogged?: string;
    title?: string;
    createdAt?: string;
    timeEstimate?: string;
    customFields?: CustomAttributes[];
    dependOnTaskIds?: string[];
    priority?: PriorityLevel;
    dueTimezone?: string;
    repeat?: string;
    commonModel?: string;
    watchers?: Users[];
    completionPercentage?: number;
    subTaskIds?: string[];
    notifications?: Notifications[];
    status?: TaskStatus;
    parentTaskId?: string;
    dueDate?: string;
    assignee?: Users;
    modifyToken?: string;
    description?: string;
    relatedToTaskId?: string[] }
export interface Tables { fields?: Attributes[];
    databaseId?: string;
    description?: string;
    region?: string;
    type?: TableType;
    modifyToken?: string;
    projectId?: string;
    updatedAt?: string;
    createdAt?: string;
    commonModel?: string;
    id?: string;
    expiresIn?: string;
    slug?: string;
    url?: string;
    name?: string }
export interface Stores { relatedStores?: Stores[];
    language?: string;
    owner?: Users;
    latitude?: number;
    timezone?: string;
    storeArea?: number;
    isOperating?: boolean;
    country?: string;
    description?: string;
    createdAt?: string;
    socialProfiles?: SocialProfiles[];
    features?: string[];
    manager?: Staff;
    email?: string;
    currency?: Currency;
    phone?: string;
    commonModel?: string;
    longitude?: number;
    name?: string;
    websiteUrl?: string;
    id?: string;
    address?: Addresses;
    category?: string;
    updatedAt?: string;
    logoUrl?: string;
    ratings?: RatingsReviews;
    paymentMethods?: string[];
    countryCode?: string;
    businessHours?: BusinessHours[] }
export interface Staff { commonModel?: string;
    lastName?: string;
    status?: EmploymentAndCandidateStatus;
    gender?: string;
    customFields?: CustomAttributes[];
    updatedAt?: string;
    email?: string;
    id?: string;
    createdAt?: string;
    phone?: string;
    addresses?: Addresses;
    storeID?: string;
    role?: OrganizationalRole;
    firstName?: string;
    position?: string;
    dateOfBirth?: string;
    isActive?: boolean;
    isDeleted?: boolean;
    photoUrl?: string }
export interface Speakers { userId?: string;
    speakerId?: string;
    id?: string;
    title?: string;
    email?: string;
    name?: string;
    role?: SpeakerRole;
    commonModel?: string }
export interface SocialProfiles { email?: string;
    displayName?: string;
    additionalInfo?: Metadata;
    commonModel?: string;
    createdAt?: string;
    type?: SocialPlatform;
    url?: string;
    updatedAt?: string;
    isActive?: boolean;
    isDeleted?: boolean;
    avatarUrl?: string;
    username?: string }
export interface ShippingItem { productId?: string;
    quantity?: number;
    weight?: number;
    dimensions?: Dimensions;
    weightUnit?: string;
    value?: number;
    sku?: string;
    id?: string;
    commonModel?: string;
    productName?: string }
export interface ShippingDetails { trackingNumber?: string;
    signatureRequired?: boolean;
    updatedAt?: string;
    isDeleted?: boolean;
    estimatedDelivery?: string;
    price?: number;
    isActive?: boolean;
    method?: string;
    provider?: string;
    address?: Addresses;
    commonModel?: string;
    insurance?: boolean;
    createdAt?: string }
export interface ShareholderEquityDetails { treasuryStock?: number;
    preferredStock?: number;
    retainedEarnings?: number;
    commonStock?: number;
    commonModel?: string;
    accumulatedOtherComprehensiveIncome?: number }
export interface Sentences { endTime?: string;
    commonModel?: string;
    createdAt?: string;
    speakerId?: string;
    updatedAt?: string;
    id?: string;
    sentence?: string;
    speakerName?: string;
    startTime?: string;
    modifyToken?: string }
export interface Salaries { commonModel?: string;
    currency?: Currency;
    value?: number;
    paymentPeriod?: TimeCycle }
export interface SSO { refreshToken?: string;
    createdAt?: string;
    isActive?: boolean;
    tokenType?: string;
    scopes?: string[];
    isDeleted?: boolean;
    profileUrl?: string;
    expiresIn?: number;
    expiryDate?: string;
    updatedAt?: string;
    commonModel?: string;
    provider?: IdentityProvider;
    providerUserId?: string;
    accessToken?: string }
export interface RevenueDetails { salesRevenue?: number;
    serviceRevenue?: number;
    otherRevenue?: number;
    commonModel?: string }
export interface ResponseFormat { schema?: JsonSchema;
    type?: ResponseFormatType;
    commonModel?: string }
export interface Refunds { status?: TransactionStatus;
    updatedAt?: string;
    modifyToken?: string;
    id?: string;
    paymentId?: string;
    commonModel?: string;
    amount?: number;
    createdAt?: string;
    reason?: string;
    currency?: Currency }
export interface References { companyName?: string;
    phoneNumber?: string;
    commonModel?: string;
    name?: string;
    relationship?: string;
    position?: string;
    email?: string }
export interface Records { id?: string;
    commonModel?: string;
    entity?: unknown;
    modifyToken?: string;
    createdAt?: string;
    updatedAt?: string }
export interface Recordings { callType?: CallDirection;
    participants?: Speakers[];
    modifyToken?: string;
    startTime?: string;
    endTime?: string;
    fileSize?: number;
    files?: Attachments[];
    description?: string;
    topic?: string;
    accountId?: string;
    password?: string;
    name?: string;
    id?: string;
    hostId?: string;
    createdAt?: string;
    updatedAt?: string;
    commonModel?: string;
    duration?: number }
export interface Reactions { type?: ReactionType;
    messageId?: string;
    createdAt?: string;
    userId?: string;
    commonModel?: string;
    chatId?: string }
export interface RatingsReviews { updatedAt?: string;
    metadata?: Metadata;
    isDeleted?: boolean;
    isActive?: boolean;
    review?: string;
    reviewerName?: string;
    createdAt?: string;
    rating?: number;
    id?: string;
    locale?: string;
    status?: ReviewApprovalStatus;
    commonModel?: string;
    storeID?: string;
    verifiedPurchase?: boolean }
export interface PurchaseOrders { createdAt?: string;
    expectedDeliveryDate?: string;
    orderDate?: string;
    status?: OrderStatus;
    accountId?: string;
    isActive?: boolean;
    currency?: Currency;
    orderNumber?: string;
    items?: PurchaseOrderLineItems[];
    commonModel?: string;
    shippingCosts?: number;
    vendor?: Vendors;
    subtotal?: number;
    modifyToken?: string;
    taxes?: number;
    paymentTerms?: string;
    total?: number;
    id?: string;
    billTo?: Addresses;
    attachments?: Attachments[];
    updatedAt?: string;
    shipTo?: Addresses;
    isDeleted?: boolean;
    notes?: string }
export interface PurchaseOrderItems { quantity?: number;
    commonModel?: string;
    id?: string;
    unitPrice?: number;
    description?: string;
    deliveryDate?: string;
    unitOfMeasure?: string;
    productId?: string;
    discount?: number;
    totalPrice?: number;
    SKU?: string }
export interface Promotions { createdAt?: string;
    code?: string;
    description?: string;
    startDate?: string;
    isActive?: boolean;
    minimumPurchaseAmount?: number;
    currency?: Currency;
    type?: PromotionType;
    endDate?: string;
    updatedAt?: string;
    discountType?: DiscountType;
    isDeleted?: boolean;
    termsAndConditions?: string;
    customerEligibility?: CustomerEligibilityStatus;
    usageLimit?: number;
    commonModel?: string;
    eligibleItems?: string[];
    discountValue?: number;
    limitPerCustomer?: number }
export interface Projects { commonModel?: string;
    name?: string;
    friendlyName?: string;
    id?: string;
    updatedAt?: string;
    modifyToken?: string;
    createdAt?: string }
export interface Products { images?: Images[];
    customFields?: CustomAttributes[];
    isDownloadable?: boolean;
    commonModel?: string;
    relatedProducts?: string[];
    modifyToken?: string;
    brand?: Brands;
    weightUnit?: string;
    createdAt?: string;
    availableForSale?: boolean;
    prices?: Prices[];
    manufacturerName?: string;
    sku?: string;
    dimensions?: Dimensions;
    seoKeywords?: string[];
    metaTitle?: string;
    inventoryQuantity?: number;
    code?: string;
    skuValidation?: SkuValidation;
    type?: string;
    localizations?: Localizations[];
    weight?: number;
    status?: EntityLifecycleStatus;
    title?: string;
    description?: string;
    accountIds?: KeyValues[];
    updatedAt?: string;
    variants?: Variants[];
    options?: ProductOptions[];
    reference?: Entity;
    categories?: string[];
    tags?: string[];
    taxes?: Taxes[];
    id?: string;
    inventoryLocation?: InventoryLocations;
    downloadFiles?: Attachments[];
    vendor?: string;
    publishedAt?: string;
    slug?: string;
    metaDescription?: string }
export interface ProductOptions { createdAt?: string;
    productId?: number;
    updatedAt?: string;
    commonModel?: string;
    values?: string[];
    name?: string;
    id?: string }
export interface Prices { type?: string;
    currency?: Currency;
    commonModel?: string;
    amount?: number }
export interface PriceRules { usageLimit?: number;
    customerSelection?: CustomerSelection;
    prerequisiteVariantIds?: string[];
    targetType?: TargetType;
    entitledQuantity?: number;
    id?: string;
    entitledCountryIds?: string[];
    description?: string;
    modifyToken?: string;
    valueType?: DiscountType;
    value?: number;
    prerequisiteCollectionIds?: string[];
    currency?: string;
    prerequisiteRanges?: PrerequisiteRanges;
    updatedAt?: string;
    entitledCollectionIds?: string[];
    excludedCollectionIds?: string[];
    prerequisiteCustomerIds?: string[];
    entitledProductIds?: string[];
    prerequisiteSavedSearchIds?: string[];
    isDeleted?: boolean;
    prerequisiteProductIds?: string[];
    priority?: number;
    excludedVariantIds?: string[];
    title?: string;
    prerequisiteQuantity?: number;
    startDate?: string;
    isActive?: boolean;
    excludedProductIds?: string[];
    targetSelection?: TargetSelection;
    commonModel?: string;
    oncePerCustomer?: boolean;
    createdAt?: string;
    entitledVariantIds?: string[];
    allocationMethod?: AllocationMethod;
    endDate?: string;
    allocationLimit?: number }
export interface PrerequisiteRanges { greaterThanOrEqualTo?: number;
    type?: PrerequisiteRangeType;
    lessThanOrEqualTo?: number;
    commonModel?: string }
export interface Preferences { language?: string;
    id?: string;
    commonModel?: string;
    currency?: Currency;
    timeZone?: string;
    communications?: CommunicationMethod }
export interface Phones { commonModel?: string;
    countryCode?: string;
    phoneNumber?: string;
    type?: DeviceUsageType;
    country?: string }
export interface Permissions { accessControlType?: AccessControlModel;
    commonModel?: string;
    canEdit?: string[];
    identifierType?: UniversalIdentifierType;
    canDelete?: string[];
    canView?: string[];
    assigneeDetails?: UserOrGroup;
    roles?: string[] }
export interface PerformanceMetrics { costPerClick?: number;
    impressions?: number;
    conversionRate?: number;
    conversions?: number;
    spend?: number;
    commonModel?: string;
    returnOnInvestment?: number;
    costPerConversion?: number;
    clicks?: number }
export interface Payments { customer?: Customers;
    id?: string;
    commonModel?: string;
    updatedAt?: string;
    status?: PaymentStatus;
    notes?: string;
    metadata?: Metadata;
    webhookUrl?: string;
    journalId?: string;
    isDeleted?: boolean;
    shippingDetails?: ShippingDetails;
    paymentCaptureMethod?: string;
    cardDetails?: CardDetails;
    paymentMethod?: PaymentMethods;
    createdAt?: string;
    transactionId?: string;
    modifyToken?: string;
    date?: string;
    isActive?: boolean;
    tip?: number;
    paymentProcessor?: string;
    orderId?: string;
    refund?: Refunds;
    description?: string;
    paymentIntent?: string;
    receiptEmail?: string;
    currency?: Currency;
    billingDetails?: BillingDetails;
    amount?: number;
    invoice?: Invoices }
export interface PaymentTerms { dueDays?: number;
    lastUpdatedDate?: string;
    penaltyRate?: number;
    gracePeriodDays?: number;
    countrySpecificTerms?: string[];
    isDeleted?: boolean;
    description?: string;
    permittedClientClasses?: string[];
    type?: PaymentTerm;
    allowedMethods?: string[];
    createdDate?: string;
    updatedAt?: string;
    notes?: string;
    currency?: string;
    interestRate?: number;
    discountRate?: number;
    languageSupport?: string[];
    minimumPayment?: number;
    commonModel?: string;
    discountDays?: number;
    isActive?: boolean;
    currencyFormatting?: string;
    createdAt?: string;
    id?: string }
export interface PaymentMethods { type?: PaymentMethod;
    id?: string;
    details?: string;
    isDefault?: boolean;
    commonModel?: string }
export interface PaymentDetails { transactionId?: string;
    currency?: Currency;
    paymentGateway?: string;
    isDeleted?: boolean;
    amount?: number;
    commonModel?: string;
    isRefunded?: boolean;
    status?: string;
    method?: string;
    billingAddress?: Addresses;
    createdAt?: string;
    updatedAt?: string;
    isActive?: boolean }
export interface Participants { userId?: string;
    joinedAt?: string;
    status?: ParticipantEngagementStatus;
    commonModel?: string;
    displayName?: string;
    type?: CommunicationRole }
export interface ParentFolders { id?: string;
    createdAt?: string;
    commonModel?: string;
    name?: string;
    updatedAt?: string }
export interface Orders { orderNumber?: string;
    shippingAddress?: Addresses;
    taxes?: Taxes[];
    shippingId?: string;
    shippingCost?: number;
    customerId?: string;
    storeLocationId?: string;
    id?: string;
    billingAddress?: Addresses;
    note?: string;
    status?: OrderStatus;
    subtotal?: number;
    tax?: number;
    currency?: Currency;
    total?: number;
    createdAt?: string;
    items?: Items[];
    shippingMethod?: string;
    modifyToken?: string;
    tags?: string[];
    updatedAt?: string;
    paymentMethods?: string[];
    tip?: number;
    reference?: Entity;
    commonModel?: string;
    paymentStatus?: PaymentStatus;
    discounts?: Discounts[];
    trackingInfo?: string }
export interface Opportunities { type?: string;
    isWon?: boolean;
    id?: string;
    commonModel?: string;
    stage?: string;
    leadId?: string;
    modifyToken?: string;
    campaign?: Campaigns;
    attachments?: Attachments[];
    tags?: string[];
    entity?: Entity;
    contacts?: Contacts[];
    leadSource?: string;
    description?: string;
    probability?: number;
    notes?: string[];
    companyName?: string;
    nextStep?: string;
    owner?: Users;
    amount?: number;
    title?: string;
    closeDate?: string;
    companyId?: string;
    lostReason?: string;
    customFields?: CustomAttributes[];
    currency?: Currency;
    updatedAt?: string;
    isClosed?: boolean;
    createdAt?: string }
export interface OperatingExpensesDetails { commonModel?: string;
    researchAndDevelopmentExpenses?: number;
    otherOperatingExpenses?: number;
    salesGeneralAndAdministrativeExpenses?: number }
export interface Objects { id?: string;
    commonModel?: string;
    singularNoun?: string;
    slug?: string;
    pluralNoun?: string;
    modifyToken?: string;
    custom?: boolean;
    name?: string;
    createdAt?: string;
    updatedAt?: string }
export interface Notifications { updatedAt?: string;
    message?: string;
    priority?: PriorityLevel;
    createdAt?: string;
    attachments?: Attachments[];
    notificationId?: string;
    customFields?: CustomAttributes[];
    commonModel?: string;
    channel?: string;
    title?: string;
    status?: string;
    type?: string;
    recipient?: Users;
    isActive?: boolean;
    isDeleted?: boolean }
export interface Notes { lastAccessed?: string;
    tags?: string[];
    createdAt?: string;
    title?: string;
    modifyToken?: string;
    sharedWith?: Users[];
    commonModel?: string;
    updatedAt?: string;
    visibility?: ContentVisibility;
    attachments?: Attachments[];
    content?: string;
    url?: string;
    author?: Users;
    id?: string;
    reminder?: string;
    priority?: PriorityLevel;
    color?: string;
    metadata?: string[] }
export interface Modifiers { commonModel?: string;
    createdAt?: string;
    quantity?: number;
    groupId?: string;
    customerNote?: string;
    linePrice?: number;
    id?: string;
    originalPrice?: number;
    updatedAt?: string;
    isDeleted?: boolean;
    isActive?: boolean;
    name?: string;
    modifyToken?: string;
    currency?: Currency }
export interface ModifierGroups { updatedAt?: string;
    modifyToken?: string;
    type?: ModifierType;
    isActive?: boolean;
    isDeleted?: boolean;
    description?: string;
    createdAt?: string;
    id?: string;
    name?: string;
    commonModel?: string;
    modifiers?: Modifiers[] }
export interface Metadata { id?: string;
    createdAt?: string;
    updatedAt?: string;
    valueParsingRequired?: boolean;
    type?: DataType;
    commonModel?: string;
    entityId?: string;
    value?: string;
    key?: string;
    entityType?: string }
export interface Messages { recipientEmails?: string[];
    medium?: string;
    isActive?: boolean;
    reactions?: Reactions[];
    templateId?: string;
    receiverId?: string;
    readStatus?: MessageReadStatus;
    cc?: string;
    commonModel?: string;
    chatId?: string;
    reference?: Entity;
    id?: string;
    threadId?: string;
    replyToMessageId?: string;
    senderId?: string;
    historyId?: string;
    trackingSettings?: KeyValues[];
    metadata?: Metadata[];
    priority?: PriorityLevel;
    bcc?: string;
    timestamp?: string;
    content?: string;
    type?: MessageContentType;
    messageType?: string;
    attachments?: Attachments[];
    senderEmail?: string;
    isDeleted?: boolean;
    subject?: string;
    deliveryStatus?: MessageDeliveryStatus;
    createdAt?: string;
    updatedAt?: string;
    modifyToken?: string;
    receiverRoles?: ReceiverRoles[];
    tags?: KeyValues[] }
export interface Locations { description?: string;
    website?: string;
    id?: string;
    isActive?: boolean;
    domain?: string;
    socialProfiles?: SocialProfiles[];
    businessName?: string;
    name?: string;
    countryCode?: string;
    type?: string;
    commonModel?: string;
    address?: Addresses;
    phones?: Phones[];
    emails?: Emails[];
    businessHours?: BusinessHours[];
    numberOfEmployees?: number;
    currency?: Currency;
    tags?: string[];
    merchantId?: string;
    updatedAt?: string;
    modifyToken?: string;
    defaultPhoneNumber?: string;
    locationNumber?: string;
    timezone?: string;
    defaultEmail?: string;
    customFields?: CustomAttributes[];
    createdAt?: string;
    merchantCategoryCode?: string }
export interface Localizations { metaTitle?: string;
    locale?: string;
    title?: string;
    metaDescription?: string;
    commonModel?: string;
    description?: string }
export interface Leads { customFields?: CustomAttributes[];
    entity?: Entity;
    opportunities?: Opportunities[];
    jobTitle?: string;
    name?: string;
    leadStatus?: LeadLifecycleStatus;
    modifyToken?: string;
    emails?: Emails[];
    createdAt?: string;
    id?: string;
    commonModel?: string;
    phones?: Phones[];
    companyId?: string;
    companyName?: string;
    numberOfEmployees?: number;
    middleName?: string;
    defaultPhoneNumber?: string;
    updatedAt?: string;
    website?: string;
    preferredContactMethod?: CommunicationMethod;
    industry?: string;
    annualRevenue?: number;
    socialProfiles?: SocialProfiles[];
    firstName?: string;
    lastName?: string;
    notes?: Notes[];
    defaultEmail?: string;
    addresses?: Addresses[];
    leadSource?: LeadSource }
export interface LeadSource { sourceId?: string;
    details?: string;
    sourceName?: string;
    commonModel?: string }
export interface KeyValues { commonModel?: string;
    key?: string;
    value?: string }
export interface JsonSchema { description?: string;
    strict?: boolean;
    name?: string;
    commonModel?: string;
    schema?: unknown;
    type?: JsonSchemaType }
export interface JournalEntryLines { accountId?: string;
    id?: string;
    commonModel?: string;
    description?: string;
    quantity?: number;
    tracking?: FinancialTrackingCategories;
    taxCode?: string;
    debit?: number;
    credit?: number;
    amount?: number;
    taxAmount?: number }
export interface JournalEntries { createdBy?: string;
    isActive?: boolean;
    currency?: Currency;
    description?: string;
    status?: JournalEntryStatus;
    lines?: JournalEntryLines[];
    updatedBy?: string;
    isReconciled?: boolean;
    isDeleted?: boolean;
    exchangeRate?: number;
    updatedAt?: string;
    id?: string;
    name?: string;
    commonModel?: string;
    type?: string;
    entryNumber?: string;
    createdAt?: string;
    totalAmount?: number;
    modifyToken?: string;
    date?: string;
    memo?: string;
    reference?: string;
    attachments?: Attachments[] }
export interface Jobs { educationRequirements?: string;
    modifyToken?: string;
    title?: string;
    experienceRequirements?: string;
    incentiveCompensation?: string;
    jobLocationType?: string;
    jobTrialPeriod?: string;
    baseSalary?: Salaries;
    location?: Addresses;
    qualifications?: string;
    workHours?: string;
    salaryCurrency?: string;
    jobImmediateStart?: boolean;
    employmentType?: EmploymentType;
    validUntil?: string;
    jobShifts?: string[];
    jobTrainingProvided?: boolean;
    incentives?: string;
    applicationDeadline?: string;
    jobStartDate?: string;
    jobBenefits?: string;
    remote?: boolean;
    updatedAt?: string;
    company?: Companies;
    employmentUnit?: EmploymentUnits;
    id?: string;
    description?: string;
    occupationalCategory?: string;
    jobFlexibleHours?: boolean;
    skills?: string[];
    benefits?: string[];
    languagesSpoken?: string[];
    createdAt?: string;
    workFromHome?: boolean;
    industry?: string;
    commonModel?: string;
    responsibilities?: string }
export interface Items { parentId?: string;
    weight?: number;
    createdAt?: string;
    sku?: string;
    title?: string;
    description?: string;
    requiresShipping?: boolean;
    productId?: string;
    isDeleted?: boolean;
    isTaxable?: boolean;
    fulfillableQuantity?: number;
    commonModel?: string;
    accountName?: string;
    variantId?: string;
    modifiers?: Modifiers[];
    accountId?: string;
    linePrice?: number;
    shippingId?: string;
    updatedAt?: string;
    discountedPrice?: number;
    tax?: number;
    id?: string;
    originalPrice?: number;
    quantity?: number;
    discount?: number;
    discountLines?: Discounts[];
    isActive?: boolean;
    taxLines?: TaxLines[];
    price?: number;
    currency?: Currency;
    image?: Images;
    variantTitle?: string;
    weightUnit?: string }
export interface Invoices { terms?: string;
    commonModel?: string;
    createdAt?: string;
    header?: string;
    discountTotal?: number;
    transactionDate?: string;
    notes?: string;
    adjustments?: InvoiceAdjustments[];
    billingAddress?: Addresses;
    reference?: Entity;
    paymentTerms?: PaymentTerms;
    isDeleted?: boolean;
    subtotal?: number;
    discountPercentage?: number;
    invoicePayments?: InvoicePayments[];
    modifyToken?: string;
    dueDate?: string;
    attachments?: Attachments[];
    vatName?: string;
    taxTotal?: number;
    metadata?: Metadata[];
    invoiceNumber?: string;
    items?: InvoiceItems[];
    exchangeRate?: number;
    balanceDue?: number;
    issuedDate?: string;
    shippingAddress?: Addresses;
    customer?: Customers;
    updatedAt?: string;
    isActive?: boolean;
    vatNumber?: string;
    status?: PaymentStatus;
    currency?: Currency;
    id?: string;
    total?: number;
    paidAmount?: number;
    footer?: string }
export interface InvoicePayments { id?: string;
    date?: string;
    commonModel?: string;
    amount?: number;
    createdAt?: string;
    updatedAt?: string;
    modifyToken?: string }
export interface InvoiceItems { availabilityDate?: string;
    quantity?: number;
    description?: string;
    onSale?: boolean;
    inventoryQuantity?: number;
    variants?: Variants[];
    rating?: number;
    ratingCount?: number;
    isAvailable?: boolean;
    discount?: number;
    options?: ProductOptions[];
    inventoryStatus?: ProductAvailabilityStatus;
    customFields?: CustomAttributes[];
    upc?: string;
    deletedAt?: string;
    ean?: string;
    tags?: string[];
    isbn?: string;
    name?: string;
    mpn?: string;
    condition?: ItemCondition;
    createdAt?: string;
    currency?: Currency;
    isActive?: boolean;
    weight?: number;
    modifyToken?: string;
    commonModel?: string;
    gallery?: Images[];
    reviews?: RatingsReviews[];
    price?: number;
    brand?: string;
    id?: string;
    sku?: string;
    imageUrl?: string;
    updatedAt?: string;
    dimensions?: Dimensions }
export interface InvoiceAdjustments { isDeleted?: boolean;
    updatedAt?: string;
    type?: InvoiceAdjustmentType;
    commonModel?: string;
    amount?: number;
    appliedToInvoiceItemId?: string;
    isActive?: boolean;
    id?: string;
    description?: string;
    createdAt?: string;
    currency?: Currency;
    metadata?: Metadata }
export interface InventoryLocations { contactInformation?: Contacts[];
    type?: InventoryStorageType;
    createdAt?: string;
    quantity?: number;
    commonModel?: string;
    name?: string;
    operationalHours?: string;
    address?: Addresses;
    isActive?: boolean;
    updatedAt?: string;
    isDeleted?: boolean;
    locationId?: string }
export interface IncomeTaxExpenseDetails { currentIncomeTax?: number;
    taxAllowanceCredit?: number;
    commonModel?: string;
    deferredIncomeTax?: number }
export interface IncomeStatements { modifyToken?: string;
    exchangeRate?: number;
    incomeTaxExpense?: IncomeTaxExpenseDetails;
    incomeBeforeTax?: number;
    id?: string;
    accountSummary?: KeyValues[];
    depreciationAndAmortization?: number;
    costOfGoodsSold?: number;
    operatingExpenses?: OperatingExpensesDetails;
    grossProfit?: number;
    shareholderEquity?: ShareholderEquityDetails;
    period?: string;
    commonModel?: string;
    revenue?: RevenueDetails;
    operatingIncome?: number;
    interestExpense?: number;
    ebitda?: number;
    createdAt?: string;
    currency?: Currency;
    updatedAt?: string;
    profitMargins?: number;
    netIncome?: number }
export interface Images { createdAt?: string;
    isActive?: boolean;
    isDeleted?: boolean;
    tags?: string[];
    id?: string;
    type?: ImageType;
    caption?: string;
    mimeType?: ImageMimeType;
    altText?: string;
    title?: string;
    updatedAt?: string;
    width?: number;
    commonModel?: string;
    thumbnailSrc?: string;
    data?: string;
    src?: string;
    height?: number }
export interface HiringOrganizations { locations?: Addresses[];
    description?: string;
    size?: string;
    commonModel?: string;
    name?: string;
    industry?: string }
export interface GiftCards { createdAt?: string;
    updatedAt?: string;
    isActive?: boolean;
    currency?: Currency;
    commonModel?: string;
    purchasedBy?: string;
    id?: string;
    isDeleted?: boolean;
    status?: LifecycleStatus;
    balance?: number;
    expirationDate?: string;
    cardNumber?: string;
    amountUsed?: number;
    issuedBy?: string;
    associatedUser?: Users;
    metadata?: string }
export interface GeoCoordinates { accuracy?: number;
    timestamp?: string;
    commonModel?: string;
    latitude?: number;
    longitude?: number;
    altitudeAccuracy?: number;
    speed?: number;
    altitude?: number;
    heading?: number }
export interface Fulfillments { receipt?: FulfillmentReceipts;
    notes?: string;
    totalPrice?: number;
    metadata?: Metadata;
    shipmentDate?: string;
    expectedDelivery?: string;
    address?: Addresses;
    items?: Items[];
    trackingUrls?: string[];
    commonModel?: string;
    createdAt?: string;
    currency?: Currency;
    status?: FulfillmentStatus;
    orderId?: string;
    carrier?: string;
    updatedAt?: string;
    fulfillmentItems?: FulfillmentItems[];
    service?: string;
    id?: string;
    trackingNumber?: string }
export interface FulfillmentReceipts { amount?: number;
    currency?: Currency;
    transactionDetails?: TransactionDetails;
    isActive?: boolean;
    isDeleted?: boolean;
    fulfillmentId?: string;
    customer?: Customers;
    commonModel?: string;
    id?: string;
    testCase?: boolean;
    updatedAt?: string;
    status?: OrderStatus;
    paymentMethod?: PaymentMethod;
    createdAt?: string;
    authorization?: string }
export interface FulfillmentItems { description?: string;
    quantity?: number;
    taxable?: boolean;
    customAttributes?: CustomAttributes;
    weight?: number;
    updatedAt?: string;
    isActive?: boolean;
    productId?: string;
    price?: number;
    requiresShipping?: boolean;
    imageUrl?: string;
    status?: OrderStatus;
    title?: string;
    id?: string;
    variantTitle?: string;
    fulfillmentId?: string;
    dimensions?: Dimensions;
    createdAt?: string;
    commonModel?: string;
    weightUnit?: string;
    variantId?: string;
    orderId?: string;
    isDeleted?: boolean;
    sku?: string }
export interface Folders { size?: number;
    description?: string;
    id?: string;
    owner?: FileOwners;
    createdAt?: string;
    modifyToken?: string;
    isDownloadable?: boolean;
    permissions?: Permissions;
    name?: string;
    path?: string;
    updatedAt?: string;
    commonModel?: string;
    parent?: ParentFolders }
export interface Files { commonModel?: string;
    exportFormats?: string;
    mimeType?: string;
    isExportable?: boolean;
    id?: string;
    content?: string;
    size?: number;
    modifyToken?: string;
    description?: string;
    type?: FileType;
    name?: string;
    extension?: string;
    isDownloadable?: boolean;
    permissions?: Permissions;
    updatedAt?: string;
    downloadUrl?: string;
    owner?: FileOwners;
    createdAt?: string;
    path?: string;
    parent?: ParentFolders }
export interface FileOwners { name?: string;
    email?: string;
    updatedAt?: string;
    createdAt?: string;
    commonModel?: string;
    id?: string }
export interface Expenses { status?: ExpenseApprovalStatus;
    tax?: Taxes[];
    customFields?: CustomAttributes[];
    createdByUserId?: string;
    isActive?: boolean;
    tags?: string[];
    createdAt?: string;
    receiptUrls?: string[];
    note?: string;
    accountId?: string;
    isDeleted?: boolean;
    location?: Addresses;
    attachments?: Attachments[];
    reportId?: string;
    modifyToken?: string;
    currency?: string;
    dateIncurred?: string;
    approvedByUserId?: string;
    updatedAt?: string;
    id?: string;
    paymentMethod?: PaymentMethods;
    commonModel?: string;
    description?: string;
    items?: Items[];
    transactionId?: string;
    merchant?: string;
    amount?: number;
    category?: ExpenseCategories }
export interface ExpenseCategories { id?: string;
    name?: string;
    commonModel?: string;
    description?: string }
export interface Evidence { refundPolicy?: string;
    uncategorizedText?: string;
    cancellationPolicy?: string;
    receipt?: string;
    shippingDate?: string;
    serviceDocumentation?: string;
    cancellationPolicyDisclosure?: string;
    customerEmailAddress?: string;
    uncategorizedFile?: string;
    customerName?: string;
    shippingTrackingNumber?: string;
    serviceDate?: string;
    customerPurchaseIp?: string;
    refundRefusalExplanation?: string;
    accessActivityLog?: string;
    customerSignature?: string;
    productDescription?: string;
    cancellationRebuttal?: string;
    refundPolicyDisclosure?: string;
    shippingAddress?: string;
    shippingDocumentation?: string;
    duplicateChargeDocumentation?: string;
    billingAddress?: string;
    duplicateChargeExplanation?: string;
    duplicateChargeId?: string;
    shippingCarrier?: string;
    customerCommunication?: string;
    commonModel?: string }
export interface Events { attendees?: Users[];
    entryPoints?: EntryPoints[];
    attachments?: Attachments[];
    createdAt?: string;
    commonModel?: string;
    location?: string;
    startDate?: string;
    visibility?: EventVisibility;
    rules?: EventRules;
    endDate?: string;
    organizer?: Users;
    reminders?: EventReminders[];
    recurrence?: EventRecurrences;
    updatedAt?: string;
    id?: string;
    modifyToken?: string;
    isDeleted?: boolean;
    timeZone?: string;
    title?: string;
    description?: string;
    link?: string;
    status?: EventStatus }
export interface EventRules { isMultiDay?: boolean;
    canAddSelf?: boolean;
    guestsCanModify?: boolean;
    commonModel?: string;
    isAllDay?: boolean;
    locked?: boolean;
    guestsCanInvite?: boolean }
export interface EventReminders { minutes?: number;
    action?: EventReminderAction;
    commonModel?: string }
export interface EventRecurrences { commonModel?: string;
    id?: string;
    rules?: EventRecurrenceRules[] }
export interface EventRecurrenceRules { count?: number;
    frequency?: EventFrequency;
    type?: EventRuleType;
    interval?: number;
    until?: string;
    byMonthDay?: number;
    dates?: string[];
    id?: string;
    byDay?: string;
    commonModel?: string;
    byMonth?: number }
export interface EntryPoints { pin?: string;
    commonModel?: string;
    uri?: string;
    id?: string;
    type?: string;
    name?: string }
export interface Entity { commonModel?: string;
    attributes?: string[];
    entityType?: EntityCategory;
    entityId?: string;
    value?: string }
export interface EmploymentUnits { commonModel?: string;
    name?: string;
    description?: string }
export interface Emails { type?: EmailCategoryType;
    email?: string;
    commonModel?: string }
export interface Educations { gpa?: number;
    institution?: string;
    commonModel?: string;
    startDate?: string;
    endDate?: string;
    fieldOfStudy?: string;
    degree?: string }
export interface Drives { updatedAt?: string;
    description?: string;
    name?: string;
    commonModel?: string;
    createdAt?: string;
    id?: string }
export interface Drafts { metadata?: Metadata[];
    commonModel?: string;
    updatedAt?: string;
    modifyToken?: string;
    subject?: string;
    attachments?: Attachments[];
    type?: MessageContentType;
    messageId?: string;
    replyToMessageId?: string;
    threadId?: string;
    trackingSettings?: KeyValues[];
    id?: string;
    bcc?: string;
    timestamp?: string;
    chatId?: string;
    senderEmail?: string;
    templateId?: string;
    tags?: KeyValues[];
    createdAt?: string;
    receiverId?: string;
    senderId?: string;
    priority?: PriorityLevel;
    content?: string;
    reference?: Entity;
    recipientEmails?: string[];
    cc?: string }
export interface Disputes { currency?: Currency;
    status?: FinancialDisputeStatus;
    charge?: string;
    notes?: string;
    isDeleted?: boolean;
    reason?: string;
    amount?: number;
    version?: string;
    chargeRefundable?: boolean;
    evidence?: Evidence;
    transactionId?: string;
    metadata?: Metadata;
    isActive?: boolean;
    updated?: string;
    commonModel?: string;
    id?: string;
    created?: string;
    customerId?: string }
export interface Discounts { timesUsed?: number;
    title?: string;
    updatedAt?: string;
    usageLimitExpirations?: UsageLimitExpirations;
    currency?: string;
    commonModel?: string;
    status?: Status;
    minimumQuantityOfItems?: number;
    id?: string;
    modifyToken?: string;
    createdAt?: string;
    stackable?: boolean;
    type?: DiscountType;
    startDate?: string;
    minimumPurchaseAmount?: number;
    channelAvailability?: ChannelAvailability;
    customFields?: CustomAttributes[];
    minimumRequirements?: MinimumRequirements;
    exclusions?: string[];
    isDeleted?: boolean;
    appliesTo?: AppliesTo;
    code?: string;
    value?: number;
    endDate?: string;
    isActive?: boolean;
    customerEligibility?: CustomerEligibility;
    usageLimit?: number;
    description?: string;
    usageLimitPerCustomer?: number }
export interface Dimensions { commonModel?: string;
    length?: number;
    height?: number;
    width?: number }
export interface Databases { tables?: Tables[];
    type?: DatabaseType;
    name?: string;
    organizationId?: string;
    url?: string;
    title?: string;
    tablesExpiresIn?: string;
    region?: string;
    createdAt?: string;
    id?: string;
    isDeleted?: boolean;
    description?: string;
    modifyToken?: string;
    permissionLevel?: string;
    commonModel?: string;
    projectId?: string;
    isActive?: boolean;
    updatedAt?: string }
export interface Customers { companyId?: string;
    id?: string;
    middleName?: string;
    customerType?: CustomerType;
    emails?: Emails[];
    socialProfiles?: SocialProfiles[];
    email?: string;
    createdAt?: string;
    updatedAt?: string;
    commonModel?: string;
    dateOfBirth?: string;
    customerNumber?: string;
    currency?: Currency;
    loyaltyProgramMembership?: string;
    tags?: string[];
    addresses?: Addresses[];
    source?: string;
    customFields?: CustomAttributes[];
    reference?: Entity;
    notes?: string;
    defaultAddress?: Addresses;
    jobTitle?: string;
    metadata?: string;
    status?: CustomerStatus;
    lastName?: string;
    preferredContactMethod?: CommunicationMethod;
    phones?: Phones[];
    fullName?: string;
    companyName?: string;
    phoneNumber?: string;
    modifyToken?: string;
    firstName?: string;
    title?: string;
    customerSegment?: string }
export interface CustomAttributes { fieldType?: DataType;
    commonModel?: string;
    id?: string;
    fieldValue?: string;
    fieldName?: string }
export interface CurrencyDetails { commonModel?: string;
    currency?: Currency;
    value?: number;
    id?: string }
export interface CreditNotes { createdAt?: string;
    memo?: string;
    creditType?: CreditType;
    reason?: string;
    attachments?: Attachments[];
    adjustment?: number;
    issuedDate?: string;
    companyId?: string;
    shippingAddress?: Addresses;
    updatedAt?: string;
    isDeleted?: boolean;
    discounts?: number[];
    lines?: CreditNoteLines[];
    modifyToken?: string;
    number?: string;
    metadata?: Metadata;
    vatNumber?: string;
    amount?: number;
    companyName?: string;
    commonModel?: string;
    description?: string;
    vatName?: string;
    billingAddress?: Addresses;
    dueDate?: string;
    taxAmount?: number;
    taxRate?: number;
    payments?: Payments[];
    id?: string;
    currency?: Currency;
    status?: CreditNoteStatus;
    customer?: Customers;
    isActive?: boolean }
export interface CreditNoteLines { taxRate?: number;
    description?: string;
    quantity?: number;
    total?: number;
    unitPrice?: number;
    product?: Products;
    commonModel?: string;
    customFields?: CustomAttributes[];
    id?: string;
    account?: string }
export interface Conversations { modifyToken?: string;
    updatedAt?: string;
    unreadCount?: number;
    customFields?: CustomAttributes[];
    messages?: Messages[];
    type?: ChatType;
    metadata?: string;
    title?: string;
    status?: ConversationStatus;
    commonModel?: string;
    isRead?: boolean;
    createdAt?: string;
    participants?: Participants[];
    id?: string;
    lastReadMessageId?: string;
    comments?: Comments[];
    isPinned?: boolean;
    lastMessage?: Messages }
export interface Contacts { defaultPhoneNumber?: string;
    modifyToken?: string;
    defaultEmail?: string;
    dateOfBirth?: string;
    phones?: Phones[];
    websites?: string[];
    id?: string;
    code?: string;
    tags?: string[];
    lastName?: string;
    commonModel?: string;
    companyName?: string;
    address?: Addresses;
    emails?: Emails[];
    notes?: Notes;
    firstName?: string;
    companyId?: string;
    addresses?: Addresses[];
    userRoles?: UserRoles[];
    relationship?: string;
    leadId?: string;
    socialProfiles?: SocialProfiles[];
    isActive?: boolean;
    note?: string;
    customFields?: CustomAttributes[];
    createdAt?: string;
    updatedAt?: string }
export interface Companies { reference?: Entity;
    revenue?: number;
    modifyToken?: string;
    industry?: string;
    description?: string;
    additionalContacts?: Contacts[];
    foundedDate?: string;
    stockSymbol?: string;
    emails?: Emails[];
    revenueCurrency?: string;
    dunsNumber?: string;
    numberOfEmployeesRange?: string;
    createdAt?: string;
    incorporationDate?: string;
    defaultEmail?: string;
    tags?: string[];
    logo?: string;
    address?: Addresses;
    revenueRange?: string;
    incorporationCountry?: string;
    website?: string;
    regulatoryStatus?: string;
    defaultPhoneNumber?: string;
    name?: string;
    socialProfiles?: SocialProfiles[];
    numberOfEmployees?: number;
    customFields?: CustomAttributes[];
    companyNumber?: string;
    parentCompanyId?: string;
    commonModel?: string;
    type?: string;
    taxId?: string;
    legalName?: string;
    id?: string;
    phones?: Phones[];
    domain?: string;
    updatedAt?: string }
export interface Comments { isActive?: boolean;
    text?: string;
    isDeleted?: boolean;
    parentId?: string;
    createdAt?: string;
    likes?: number;
    commentId?: string;
    commonModel?: string;
    isFlagged?: boolean;
    attachments?: Attachments[];
    author?: Users;
    updatedAt?: string;
    metadata?: Metadata[] }
export interface Chats { topP?: number;
    temperature?: number;
    systemMessage?: string;
    maxTokens?: number;
    numberOfCompletions?: number;
    presencePenalty?: number;
    enableParallelToolCalls?: boolean;
    model?: string;
    frequencyPenalty?: number;
    userId?: string;
    topK?: number;
    seed?: number;
    responseFormat?: ResponseFormat;
    logitBias?: unknown;
    modifyToken?: string;
    tools?: JsonSchema[];
    toolChoice?: AiToolChoice;
    stopSequences?: string[];
    objectType?: string;
    createdAt?: string;
    id?: string;
    systemFingerprint?: string;
    commonModel?: string;
    usage?: AiUsage;
    messages?: AiMessages[] }
export interface Categories { image?: string;
    parentId?: string;
    updatedAt?: string;
    createdAt?: string;
    tags?: string[];
    modifyToken?: string;
    commonModel?: string;
    id?: string;
    name?: string }
export interface Carts { paymentDetails?: PaymentDetails;
    giftCards?: GiftCards[];
    totalWeight?: number;
    note?: string;
    items?: Items[];
    currency?: Currency;
    totalPrice?: number;
    state?: OrderStatus;
    createdAt?: string;
    discountCodes?: string[];
    updatedAt?: string;
    shippingDetails?: ShippingDetails;
    attributes?: string[];
    buyerIdentity?: Customers;
    commonModel?: string;
    promotions?: Promotions[];
    id?: string;
    messages?: string[];
    version?: string;
    token?: string;
    originalTotalPrice?: number;
    itemCount?: number }
export interface CardDetails { status?: string;
    bin?: string;
    expiryMonth?: string;
    isDeleted?: boolean;
    brand?: string;
    expiryYear?: string;
    lastFour?: string;
    avcStatus?: AvcStatus;
    id?: string;
    authorizedAt?: string;
    capturedAt?: string;
    createdAt?: string;
    prepaidType?: PrepaidType;
    entryMethod?: EntryMethod;
    statementDescription?: string;
    commonModel?: string;
    type?: CardType;
    modifyToken?: string;
    updatedAt?: string;
    fingerprint?: string;
    isActive?: boolean;
    cvvStatus?: CvvStatus }
export interface Candidates { notes?: Notes[];
    updatedAt?: string;
    certifications?: string[];
    websites?: string[];
    firstName?: string;
    id?: string;
    jobId?: string;
    languages?: string[];
    role?: string;
    createdAt?: string;
    modifyToken?: string;
    skills?: string[];
    commonModel?: string;
    lastName?: string;
    coverLetter?: Attachments;
    profilePicture?: Images;
    educations?: Educations[];
    references?: References[];
    availability?: string;
    email?: string;
    resume?: Attachments;
    socialProfiles?: SocialProfiles[];
    preferredWorkLocation?: string;
    status?: EmploymentAndCandidateStatus;
    workExperiences?: WorkExperiences[];
    customFields?: CustomAttributes[];
    phoneNumber?: string }
export interface Campaigns { status?: CampaignStatus;
    budget?: number;
    targetAudience?: string;
    updatedAt?: string;
    createdAt?: string;
    creativeAssets?: Attachments;
    isActive?: boolean;
    name?: string;
    commonModel?: string;
    performanceMetrics?: PerformanceMetrics;
    startDate?: string;
    endDate?: string;
    type?: CampaignType;
    channels?: string[];
    tags?: string[];
    isDeleted?: boolean;
    id?: string }
export interface Calendars { isDeleted?: boolean;
    timeZone?: string;
    modifyToken?: string;
    title?: string;
    createdAt?: string;
    description?: string;
    id?: string;
    updatedAt?: string;
    type?: string;
    commonModel?: string;
    location?: string }
export interface CRMAccounts { shippingAddress?: Addresses;
    accountType?: StakeholderType;
    commonModel?: string;
    customFields?: CustomAttributes[];
    id?: string;
    rating?: AccountEngagementLevel;
    email?: string;
    industry?: string;
    billingAddress?: Addresses;
    createdAt?: string;
    tags?: string[];
    updatedAt?: string;
    status?: AccountStatus;
    website?: string;
    ownerId?: string;
    annualRevenue?: number;
    name?: string;
    phone?: string;
    numberOfEmployees?: number }
export interface BusinessHours { storeID?: string;
    sessions?: TimeSession[];
    timeZone?: string;
    closed?: boolean;
    createdAt?: string;
    id?: string;
    isDeleted?: boolean;
    updatedAt?: string;
    commonModel?: string;
    dayOfWeek?: DayOfWeek;
    isActive?: boolean }
export interface Brands { updatedAt?: string;
    logo?: string;
    commonModel?: string;
    id?: string;
    established?: string;
    createdAt?: string;
    country?: string;
    description?: string;
    name?: string;
    status?: ItemEntityStatus;
    customFields?: CustomAttributes[];
    website?: string }
export interface Bills { vendor?: Vendors;
    notes?: string;
    status?: BillingStatus;
    attachments?: Attachments[];
    customer?: Customers;
    invoiceNumber?: string;
    commonModel?: string;
    issueDate?: string;
    dueDate?: string;
    currency?: string;
    items?: Items[];
    createdAt?: string;
    customFields?: CustomAttributes[];
    amountDue?: number;
    updatedAt?: string;
    isActive?: boolean;
    isDeleted?: boolean;
    modifyToken?: string;
    id?: string;
    amountRemaining?: number;
    amountPaid?: number;
    terms?: string }
export interface BillingDetails { commonModel?: string;
    companyName?: string;
    currency?: Currency;
    additionalAttributes?: CustomAttributes[];
    vatId?: string;
    language?: string;
    createdAt?: string;
    customerId?: string;
    updatedAt?: string;
    phoneNumber?: string;
    note?: string;
    paymentTerms?: PaymentTerm;
    isActive?: boolean;
    fullName?: string;
    defaultPaymentMethod?: PaymentMethods;
    isDeleted?: boolean;
    address?: Addresses;
    id?: string;
    email?: string }
export interface BalanceSheets { accountSummary?: KeyValues[];
    isDeleted?: boolean;
    customFields?: CustomAttributes[];
    stockholdersEquity?: number;
    inventory?: number;
    prepaidExpenses?: number;
    deferredRevenue?: number;
    additionalPaidInCapital?: number;
    treasuryStock?: number;
    currentLiabilities?: number;
    nonCurrentLiabilities?: number;
    isActive?: boolean;
    balanceDate?: string;
    modifyToken?: string;
    shortTermDebt?: number;
    accountsPayable?: number;
    intangibleAssets?: number;
    otherCurrentLiabilities?: number;
    totalLiabilities?: number;
    accruedLiabilities?: number;
    longTermDebt?: number;
    totalAssets?: number;
    otherCurrentAssets?: number;
    nonCurrentAssets?: number;
    currentAssets?: number;
    cashAndCashEquivalents?: number;
    auditInfo?: AuditInformation;
    retainedEarnings?: number;
    taxLiabilities?: number;
    notesPayable?: number;
    commonModel?: string;
    otherNonCurrentLiabilities?: number;
    otherNonCurrentAssets?: number;
    id?: string;
    preferredStock?: number;
    accumulatedDepreciation?: number;
    equity?: number;
    currentPortionOfLongTermDebt?: number;
    commonStock?: number;
    accountsReceivable?: number;
    currency?: Currency;
    shortTermInvestments?: number;
    minorityInterest?: number;
    totalLiabilitiesAndEquity?: number;
    notes?: string;
    createdAt?: string;
    fixedAssets?: number;
    propertyPlantEquipment?: number;
    updatedAt?: string }
export interface AuditInformation { notes?: string;
    auditOpinion?: AuditOpinionType;
    auditDate?: string;
    auditorName?: string;
    commonModel?: string }
export interface Attributes { isNullable?: boolean;
    customTypeDetails?: Metadata[];
    isUnique?: boolean;
    id?: string;
    slug?: string;
    description?: string;
    commonModel?: string;
    name?: string;
    isRepeated?: boolean;
    modifyToken?: string;
    updatedAt?: string;
    dataType?: DataType;
    isRequired?: boolean;
    createdAt?: string }
export interface Attachments { fileType?: string;
    content?: string;
    metadata?: Metadata;
    thumbnailUrl?: string;
    fileName?: string;
    updatedAt?: string;
    fileSize?: number;
    associatedWith?: Entity;
    id?: string;
    permissions?: Permissions;
    createdAt?: string;
    commonModel?: string;
    url?: string;
    previewUrl?: string }
export interface AiUsage { completionTokens?: number;
    commonModel?: string;
    totalTokens?: number;
    promptTokens?: number }
export interface AiToolChoice { commonModel?: string;
    name?: string;
    type?: AiToolChoiceType }
export interface AiMessagesContent { toolResultContent?: ToolResultContent[];
    id?: string;
    isError?: boolean;
    type?: AiMessagesContentType;
    modifyToken?: string;
    text?: string;
    name?: string;
    commonModel?: string;
    image?: Images;
    toolUseId?: string }
export interface AiMessages { toolCalls?: ToolCalls[];
    commonModel?: string;
    index?: number;
    finishReason?: string;
    refusal?: string;
    role?: AiRole;
    name?: string;
    content?: AiMessagesContent[] }
export interface Addresses { city?: string;
    type?: ContactAddressType;
    subdivisionCode?: string;
    addressLine2?: string;
    firstName?: string;
    contactId?: string;
    countryCode?: string;
    postalCodeExtension?: string;
    province?: string;
    street?: string;
    customFields?: CustomAttributes[];
    lastName?: string;
    companyName?: string;
    name?: string;
    middleName?: string;
    region?: string;
    id?: string;
    commonModel?: string;
    geoLocation?: GeoCoordinates;
    email?: string;
    phoneNumber?: string;
    accountId?: string;
    country?: string;
    postalCode?: string }
export interface AdditionalCharges { commonModel?: string;
    description?: string;
    amount?: number;
    type?: FinancialChargeType;
    id?: string;
    createdAt?: string;
    updatedAt?: string }
export interface Accounts { branch?: string;
    overdraftProtection?: boolean;
    taxType?: string;
    name?: string;
    status?: FinancialAccountStatus;
    notes?: string;
    id?: string;
    modifyToken?: string;
    commonModel?: string;
    overdraftLimit?: number;
    accountCode?: string;
    updatedAt?: string;
    title?: string;
    accountType?: AccountType;
    allowPayments?: boolean;
    isDeleted?: boolean;
    description?: string;
    currency?: Currency;
    closedAt?: string;
    isActive?: boolean;
    createdAt?: string;
    showInExpenses?: boolean;
    balance?: number;
    accountNumber?: string;
    transactions?: Transactions[];
    interestRate?: number;
    owner?: Customers }
export const enum TargetSelection { All = 'all', Entitled = 'entitled' }
export const enum MinimumRequirements { MinimumQuantityOfItems = 'minimum-quantity-of-items', None = 'none', MinimumPurchaseAmount = 'minimum-purchase-amount' }
export const enum ChannelAvailability { InStore = 'in-store', AllChannels = 'all-channels', Online = 'online', InApp = 'in-app' }
export const enum SkuValidation { GlobalUnique = 'global-unique', LocalUnique = 'local-unique', None = 'none' }
export const enum TransactionMethod { Telephone = 'telephone', Online = 'online', Atm = 'atm', BankBranch = 'bank-branch', Mail = 'mail', Mobile = 'mobile' }
export const enum Status { Active = 'active', Scheduled = 'scheduled', Expired = 'expired' }
export const enum Roles { User = 'user', Admin = 'admin', Moderator = 'moderator' }
export const enum ReceiverRoles { User = 'user', Admin = 'admin', Moderator = 'moderator' }
export const enum Gender { Other = 'other', PreferNotToSay = 'prefer not to say', Male = 'male', Female = 'female' }
export const enum AppliesTo { SpecificCategories = 'specific-categories', SpecificItems = 'specific-items', AllItems = 'all-items' }
export const enum Format { Json = 'json', Xml = 'xml' }
export const enum TargetType { ShippingLine = 'shipping-line', LineItem = 'line-item' }
export const enum UserRoles { User = 'user', Moderator = 'moderator', Admin = 'admin' }
export const enum AllocationMethod { Across = 'across', Each = 'each' }
export const enum CustomerSelection { All = 'all', Prerequisite = 'prerequisite' }
export const enum AccountType { OtherCurrentLiabilityTradeAndOtherPayables = 'other-current-liability::trade-and-other-payables', AssetLongTermInvestments = 'asset::long-term-investments', ExpenseUnappliedCashBillPaymentExpense = 'expense::unapplied-cash-bill-payment-expense', CostOfGoodsSoldOtherCostsOfServiceCos = 'cost-of-goods-sold::other-costs-of-service-cos', ExpenseOtherExternalServices = 'expense::other-external-services', ExpenseOtherMiscellaneousServiceCost = 'expense::other-miscellaneous-service-cost', AssetInventory = 'asset::inventory', OtherExpenseGasAndFuel = 'other-expense::gas-and-fuel', OtherIncomeInterestEarned = 'other-income::interest-earned', OtherExpenseAmortization = 'other-expense::amortization', OtherIncomeLossOnDisposalOfAssets = 'other-income::loss-on-disposal-of-assets', OtherExpenseUtilities = 'other-expense::utilities', AssetParticipatingInterests = 'asset::participating-interests', AssetFixedAssetFurniture = 'asset::fixed-asset-furniture', AssetDeferredTax = 'asset::deferred-tax', OtherIncomeGainLossOnSaleOfFixedAssets = 'other-income::gain-loss-on-sale-of-fixed-assets', ExpenseShippingAndDeliveryExpense = 'expense::shipping-and-delivery-expense', AssetGlobalTaxDeferred = 'asset::global-tax-deferred', AssetMachineryAndEquipment = 'asset::machinery-and-equipment', AssetMoneyMarket = 'asset::money-market', OtherExpenseExchangeGainOrLoss = 'other-expense::exchange-gain-or-loss', ExpenseOfficeExpenses = 'expense::office-expenses', LiabilityAccruedVacationPayable = 'liability::accrued-vacation-payable', ExpenseCostOfLabor = 'expense::cost-of-labor', AssetFixedAssetComputers = 'asset::fixed-asset-computers', ExpenseExtraordinaryCharges = 'expense::extraordinary-charges', OtherCurrentLiabilityAccruedLiabilities = 'other-current-liability::accrued-liabilities', AssetGlobalTaxRefund = 'asset::global-tax-refund', ExpenseTravel = 'expense::travel', LiabilityGovernmentAndOtherPublicAuthorities = 'liability::government-and-other-public-authorities', AssetSavings = 'asset::savings', AssetInvestmentUsGovernmentObligations = 'asset::investment-us-government-obligations', EquityEquityInEarningsOfSubsidiuaries = 'equity::equity-in-earnings-of-subsidiuaries', ExpenseIncomeTaxExpense = 'expense::income-tax-expense', ExpenseOtherBusinessExpenses = 'expense::other-business-expenses', EquityFunds = 'equity::funds', AssetFixedAssetSoftware = 'asset::fixed-asset-software', ExpenseTaxesPaid = 'expense::taxes-paid', EquityDividendDisbursed = 'equity::dividend-disbursed', AssetFixedAssetOtherToolsEquipment = 'asset::fixed-asset-other-tools-equipment', EquityCapitalReserves = 'equity::capital-reserves', OtherCurrentLiabilityInterestPayables = 'other-current-liability::interest-payables', ExpenseInsurance = 'expense::insurance', AssetLicenses = 'asset::licenses', OtherIncomeGainLossOnSaleOfInvestments = 'other-income::gain-loss-on-sale-of-investments', RevenueRevenueGeneral = 'revenue::revenue-general', AssetBuildings = 'asset::buildings', OtherCurrentLiabilityDirectDepositPayable = 'other-current-liability::direct-deposit-payable', EquityTreasuryStock = 'equity::treasury-stock', OtherCurrentLiabilitySalesTaxPayable = 'other-current-liability::sales-tax-payable', OtherExpenseRentAndLease = 'other-expense::rent-and-lease', AssetExpenditureAuthorisationsAndLettersOfCredit = 'asset::expenditure-authorisations-and-letters-of-credit', ExpenseExternalServices = 'expense::external-services', OtherExpensePenaltiesSettlements = 'other-expense::penalties-settlements', EquityPersonalExpense = 'equity::personal-expense', OtherCurrentLiabilityPrepaidExpensesPayable = 'other-current-liability::prepaid-expenses-payable', RevenueDiscountsRefundsGiven = 'revenue::discounts-refunds-given', AssetOrganizationalCosts = 'asset::organizational-costs', RevenueUnappliedCashPaymentIncome = 'revenue::unapplied-cash-payment-income', ExpenseOtherRentalCosts = 'expense::other-rental-costs', LiabilityNotesPayable = 'liability::notes-payable', OtherCurrentLiabilityProvisionForWarrantyObligations = 'other-current-liability::provision-for-warranty-obligations', AssetAccumulatedDepletion = 'asset::accumulated-depletion', OtherIncomeTaxExemptInterest = 'other-income::tax-exempt-interest', OtherCurrentLiabilityPayrollClearing = 'other-current-liability::payroll-clearing', AssetOtherLongTermLoansAndAdvances = 'asset::other-long-term-loans-and-advances', OtherExpenseDepreciation = 'other-expense::depreciation', EquityOwnersEquity = 'equity::owners-equity', LiabilityAccruedLongTermLiabilities = 'liability::accrued-long-term-liabilities', AssetAccumulatedAmortization = 'asset::accumulated-amortization', AssetOtherCurrentAsset = 'asset::other-current-asset', LiabilityProvisionsNonCurrentLiabilities = 'liability::provisions-non-current-liabilities', AssetInvestmentOther = 'asset::investment-other', EquityPersonalIncome = 'equity::personal-income', ExpenseRentOrLeaseOfBuildings = 'expense::rent-or-lease-of-buildings', OtherCurrentLiabilityStaffAndRelatedLiabilityAccounts = 'other-current-liability::staff-and-related-liability-accounts', RevenueCashReceiptIncome = 'revenue::cash-receipt-income', EquityOtherFreeReserves = 'equity::other-free-reserves', ExpenseRepairMaintenance = 'expense::repair-maintenance', ExpenseTravelExpensesGeneralAndAdminExpenses = 'expense::travel-expenses-general-and-admin-expenses', AssetFixedAssetCopiers = 'asset::fixed-asset-copiers', AssetCashOnHand = 'asset::cash-on-hand', AssetNonCurrentAssets = 'asset::non-current-assets', AssetOtherConsumables = 'asset::other-consumables', LiabilityAccountsPayable = 'liability::accounts-payable', OtherExpenseParkingAndTolls = 'other-expense::parking-and-tolls', OtherExpenseVehicleLease = 'other-expense::vehicle-lease', RevenueSalesWholesale = 'revenue::sales-wholesale', OtherCurrentLiabilityDividendsPayable = 'other-current-liability::dividends-payable', AssetCalledUpShareCapitalNotPaid = 'asset::called-up-share-capital-not-paid', OtherExpenseHomeOffice = 'other-expense::home-office', ExpenseStaffCosts = 'expense::staff-costs', OtherExpenseOtherHomeOfficeExpenses = 'other-expense::other-home-office-expenses', EquityPartnerContributions = 'equity::partner-contributions', LiabilityGroupAndAssociates = 'liability::group-and-associates', OtherCurrentLiabilityProvisionsCurrentLiabilities = 'other-current-liability::provisions-current-liabilities', CostOfGoodsSoldFreightAndDeliveryCost = 'cost-of-goods-sold::freight-and-delivery-cost', AssetVehicles = 'asset::vehicles', ExpensePurchasesRebates = 'expense::purchases-rebates', OtherCurrentLiabilitySundryDebtorsAndCreditors = 'other-current-liability::sundry-debtors-and-creditors', ExpensePayrollExpenses = 'expense::payroll-expenses', AssetOtherLongTermAssets = 'asset::other-long-term-assets', LiabilityDeferredTaxLiabilities = 'liability::deferred-tax-liabilities', LiabilityLongTermLiability = 'liability::long-term-liability', OtherExpenseVehicleLoan = 'other-expense::vehicle-loan', Expense = 'expense', ExpenseShippingFreightDelivery = 'expense::shipping-freight-delivery', AssetCumulativeDepreciationOnIntangibleAssets = 'asset::cumulative-depreciation-on-intangible-assets', ExpenseEntertainment = 'expense::entertainment', AssetAccumulatedDepreciation = 'asset::accumulated-depreciation', CostOfGoodsSoldCostOfSales = 'cost-of-goods-sold::cost-of-sales', EquityEstimatedTaxes = 'equity::estimated-taxes', OtherCurrentLiability = 'other-current-liability', EquityPartnersEquity = 'equity::partners-equity', RevenueSalesRetail = 'revenue::sales-retail', ExpenseBadDebts = 'expense::bad-debts', OtherCurrentLiabilityLineOfCredit = 'other-current-liability::line-of-credit', ExpenseInterestPaid = 'expense::interest-paid', ExpenseUtilities = 'expense::utilities', LiabilityAccrualsAndDeferredIncome = 'liability::accruals-and-deferred-income', AssetChecking = 'asset::checking', EquityAccumulatedAdjustment = 'equity::accumulated-adjustment', AssetFixedAssetPhone = 'asset::fixed-asset-phone', OtherIncomeUnrealisedLossOnSecuritiesNetOfTax = 'other-income::unrealised-loss-on-securities-net-of-tax', OtherExpenseExtraordinaryItems = 'other-expense::extraordinary-items', OtherExpenseVehicle = 'other-expense::vehicle', AssetFurnitureAndFixtures = 'asset::furniture-and-fixtures', AssetCashAndCashEquivalents = 'asset::cash-and-cash-equivalents', ExpenseDistributionCosts = 'expense::distribution-costs', ExpenseLegalProfessionalFees = 'expense::legal-professional-fees', ExpenseSuppliesMaterials = 'expense::supplies-materials', RevenueOtherPrimaryIncome = 'revenue::other-primary-income', OtherIncomeOtherOperatingIncome = 'other-income::other-operating-income', AssetProvisionsCurrentAssets = 'asset::provisions-current-assets', EquityShareCapital = 'equity::share-capital', OtherExpenseRepairsAndMaintenance = 'other-expense::repairs-and-maintenance', AssetDepletableAssets = 'asset::depletable-assets', LiabilityOtherLongTermProvisions = 'liability::other-long-term-provisions', LiabilityDebtsRelatedToParticipatingInterests = 'liability::debts-related-to-participating-interests', CostOfGoodsSoldCostOfLaborCos = 'cost-of-goods-sold::cost-of-labor-cos', AssetAssetsInCourseOfConstruction = 'asset::assets-in-course-of-construction', LiabilityProvisionForLiabilities = 'liability::provision-for-liabilities', AssetIntangibleAssets = 'asset::intangible-assets', AssetOtherIntangibleAssets = 'asset::other-intangible-assets', AssetLoansToOthers = 'asset::loans-to-others', OtherCurrentLiabilityRentsInTrustLiability = 'other-current-liability::rents-in-trust-liability', RevenueIncome = 'revenue::income', AssetLoansToStockholders = 'asset::loans-to-stockholders', AssetLoansToOfficers = 'asset::loans-to-officers', AssetOtherFixedAssets = 'asset::other-fixed-assets', AssetInternalTransfers = 'asset::internal-transfers', AssetLeaseholdImprovements = 'asset::leasehold-improvements', EquityOpeningBalanceEquity = 'equity::opening-balance-equity', LiabilityOtherLongTermLiabilities = 'liability::other-long-term-liabilities', OtherCurrentLiabilityCurrentTaxLiability = 'other-current-liability::current-tax-liability', OtherIncomeOtherInvestmentIncome = 'other-income::other-investment-income', AssetBank = 'asset::bank', AssetCapitalWip = 'asset::capital-wip', AssetLongTermLoansAndAdvancesToRelatedParties = 'asset::long-term-loans-and-advances-to-related-parties', ExpenseBankCharges = 'expense::bank-charges', AssetProvisionsFixedAssets = 'asset::provisions-fixed-assets', ExpenseSundry = 'expense::sundry', LiabilityOutstandingDuesOtherThanMicroSmallEnterprise = 'liability::outstanding-dues-other-than-micro-small-enterprise', ExpenseLossOnDiscontinuedOperationsNetOfTax = 'expense::loss-on-discontinued-operations-net-of-tax', EquityMoneyReceivedAgainstShareWarrants = 'equity::money-received-against-share-warrants', LiabilityStaffAndRelatedLongTermLiabilityAccounts = 'liability::staff-and-related-long-term-liability-accounts', RevenueOwnWorkCapitalized = 'revenue::own-work-capitalized', OtherCurrentLiabilityPayrollTaxPayable = 'other-current-liability::payroll-tax-payable', OtherCurrentLiabilityGlobalTaxPayable = 'other-current-liability::global-tax-payable', ExpenseAppropriationsToDepreciation = 'expense::appropriations-to-depreciation', AssetFixedAssetPhotoVideo = 'asset::fixed-asset-photo-video', Equity = 'equity', CostOfGoodsSold = 'cost-of-goods-sold', RevenueOperatingGrants = 'revenue::operating-grants', OtherIncomeOtherMiscellaneousIncome = 'other-income::other-miscellaneous-income', ExpenseCharitableContributions = 'expense::charitable-contributions', OtherCurrentLiabilitySocialSecurityAgencies = 'other-current-liability::social-security-agencies', AssetLandAsset = 'asset::land-asset', Asset = 'asset', OtherCurrentLiabilityDutiesAndTaxes = 'other-current-liability::duties-and-taxes', RevenueNonProfitIncome = 'revenue::non-profit-income', EquityCalledUpShareCapital = 'equity::called-up-share-capital', OtherExpenseVehicleRegistration = 'other-expense::vehicle-registration', AssetDevelopmentCosts = 'asset::development-costs', AssetOtherAsset = 'asset::other-asset', LiabilityLongTermEmployeeBenefitObligations = 'liability::long-term-employee-benefit-obligations', AssetLand = 'asset::land', EquityPaidInCapitalOrSurplus = 'equity::paid-in-capital-or-surplus', ExpenseManagementCompensation = 'expense::management-compensation', RevenueOtherCurrentOperatingIncome = 'revenue::other-current-operating-income', AssetFixedAsset = 'asset::fixed-asset', AssetUndepositedFunds = 'asset::undeposited-funds', AssetAllowanceForBadDebts = 'asset::allowance-for-bad-debts', OtherExpenseExceptionalItems = 'other-expense::exceptional-items', RevenueServiceFeeIncome = 'revenue::service-fee-income', AssetAssetsHeldForSale = 'asset::assets-held-for-sale', EquityInvestmentGrants = 'equity::investment-grants', AssetShortTermInvestmentsInRelatedParties = 'asset::short-term-investments-in-related-parties', LiabilityOutstandingDuesMicroSmallEnterprise = 'liability::outstanding-dues-micro-small-enterprise', ExpensePenaltiesSettlements = 'expense::penalties-settlements', OtherCurrentLiabilityInsurancePayable = 'other-current-liability::insurance-payable', ExpenseTravelMeals = 'expense::travel-meals', AssetTrustAccounts = 'asset::trust-accounts', ExpenseOfficeGeneralAdministrativeExpenses = 'expense::office-general-administrative-expenses', RevenueSalesOfProductIncome = 'revenue::sales-of-product-income', LiabilityLongTermDebit = 'liability::long-term-debit', OtherExpenseMortgageInterest = 'other-expense::mortgage-interest', OtherExpenseVehicleInsurance = 'other-expense::vehicle-insurance', RevenueSavingsByTaxScheme = 'revenue::savings-by-tax-scheme', OtherCurrentLiabilityCurrentPortionOfObligationsUnderFinanceLeases = 'other-current-liability::current-portion-of-obligations-under-finance-leases', AssetBalWithGovtAuthorities = 'asset::bal-with-govt-authorities', AccountsReceivable = 'accounts-receivable', OtherExpenseIncomeTaxOtherExpense = 'other-expense::income-tax-other-expense', ExpenseOtherCurrentOperatingCharges = 'expense::other-current-operating-charges', AssetRetainage = 'asset::retainage', CostOfGoodsSoldSuppliesMaterialsCogs = 'cost-of-goods-sold::supplies-materials-cogs', EquityShareApplicationMoneyPendingAllotment = 'equity::share-application-money-pending-allotment', ExpenseProjectStudiesSurveysAssessments = 'expense::project-studies-surveys-assessments', OtherIncomeDividendIncome = 'other-income::dividend-income', ExpenseAmortizationExpense = 'expense::amortization-expense', OtherExpenseVehicleLoanInterest = 'other-expense::vehicle-loan-interest', OtherCurrentLiabilityStateLocalIncomeTaxPayable = 'other-current-liability::state-local-income-tax-payable', AssetAvailableForSaleFinancialAssets = 'asset::available-for-sale-financial-assets', LiabilityCreditCard = 'liability::credit-card', AssetAccumulatedAmortizationOfOtherAssets = 'asset::accumulated-amortization-of-other-assets', AssetInvestmentMortgageRealEstateLoans = 'asset::investment-mortgage-real-estate-loans', AssetRentsHeldInTrust = 'asset::rents-held-in-trust', OtherExpenseOtherVehicleExpenses = 'other-expense::other-vehicle-expenses', AssetOtherLongTermInvestments = 'asset::other-long-term-investments', OtherCurrentLiabilityLoanPayable = 'other-current-liability::loan-payable', AssetShortTermLoansAndAdvancesToRelatedParties = 'asset::short-term-loans-and-advances-to-related-parties', ExpenseTravelExpensesSellingExpense = 'expense::travel-expenses-selling-expense', EquityPartnerDistributions = 'equity::partner-distributions', ExpenseFinanceCosts = 'expense::finance-costs', AssetEmployeeCashAdvances = 'asset::employee-cash-advances', AssetProvisionsNonCurrentAssets = 'asset::provisions-non-current-assets', LiabilityObligationsUnderFinanceLeases = 'liability::obligations-under-finance-leases', OtherExpenseTaxRoundoffGainOrLoss = 'other-expense::tax-roundoff-gain-or-loss', OtherCurrentLiabilityShortTermBorrowings = 'other-current-liability::short-term-borrowings', ExpenseDuesSubscriptions = 'expense::dues-subscriptions', OtherCurrentLiabilityOtherCurrentLiabilities = 'other-current-liability::other-current-liabilities', CostOfGoodsSoldEquipmentRentalCos = 'cost-of-goods-sold::equipment-rental-cos', OtherExpense = 'other-expense', AssetInvestments = 'asset::investments', OtherCurrentLiabilityCurrentLiabilities = 'other-current-liability::current-liabilities', LiabilityLongTermBorrowings = 'liability::long-term-borrowings', LiabilityLiabilitiesRelatedToAssetsHeldForSale = 'liability::liabilities-related-to-assets-held-for-sale', EquityCommonStock = 'equity::common-stock', OtherIncome = 'other-income', EquityPreferredStock = 'equity::preferred-stock', OtherExpenseHomeOwnerRentalInsurance = 'other-expense::home-owner-rental-insurance', ExpenseAuto = 'expense::auto', AssetOtherEarMarkedBankAccounts = 'asset::other-ear-marked-bank-accounts', OtherCurrentLiabilityGlobalTaxSuspense = 'other-current-liability::global-tax-suspense', EquityAccumulatedOtherComprehensiveIncome = 'equity::accumulated-other-comprehensive-income', EquityRetainedEarnings = 'equity::retained-earnings', OtherCurrentLiabilityTrustAccountsLiabilities = 'other-current-liability::trust-accounts-liabilities', AssetOtherCurrentAssets = 'asset::other-current-assets', AssetIntangibleAssetsUnderDevelopment = 'asset::intangible-assets-under-development', OtherExpenseOtherMiscellaneousExpense = 'other-expense::other-miscellaneous-expense', Liability = 'liability', AssetTradeAndOtherReceivables = 'asset::trade-and-other-receivables', CostOfGoodsSoldShippingFreightDeliveryCos = 'cost-of-goods-sold::shipping-freight-delivery-cos', LiabilityShareholderNotesPayable = 'liability::shareholder-notes-payable', ExpenseBorrowingCost = 'expense::borrowing-cost', AssetAssetsAvailableForSale = 'asset::assets-available-for-sale', LiabilityBankLoans = 'liability::bank-loans', OtherExpenseMatCredit = 'other-expense::mat-credit', ExpenseEntertainmentMeals = 'expense::entertainment-meals', ExpenseCommissionsAndFees = 'expense::commissions-and-fees', AssetGoodwill = 'asset::goodwill', ExpenseGlobalTaxExpense = 'expense::global-tax-expense', Income = 'income', OtherCurrentLiabilityCurrentPortionEmployeeBenefitsObligations = 'other-current-liability::current-portion-employee-benefits-obligations', OtherExpenseDepletion = 'other-expense::depletion', AssetPrepaidExpenses = 'asset::prepaid-expenses', ExpenseEquipmentRental = 'expense::equipment-rental', ExpenseOtherSellingExpenses = 'expense::other-selling-expenses', OtherExpenseDeferredTaxExpense = 'other-expense::deferred-tax-expense', AssetInvestmentTaxExemptSecurities = 'asset::investment-tax-exempt-securities', OtherCurrentLiabilityFederalIncomeTaxPayable = 'other-current-liability::federal-income-tax-payable', OtherExpensePriorPeriodItems = 'other-expense::prior-period-items', OtherExpenseWashAndRoadServices = 'other-expense::wash-and-road-services', AssetSecurityDeposits = 'asset::security-deposits', AssetLeaseBuyout = 'asset::lease-buyout', AssetPrepaymentsAndAccruedIncome = 'asset::prepayments-and-accrued-income', ExpensePromotionalMeals = 'expense::promotional-meals', EquityHealthcare = 'equity::healthcare', OtherExpenseVehicleRepairs = 'other-expense::vehicle-repairs', ExpenseAdvertisingPromotional = 'expense::advertising-promotional' }
export const enum CustomerEligibility { SpecificCustomers = 'specific-customers', SpecificCustomerGroups = 'specific-customer-groups', All = 'all' }
export const enum VisibilityScope { App = 'app', Internal = 'internal', Private = 'private', Web = 'web', Global = 'global' }
export const enum UserStatus { Active = 'active', Banned = 'banned', WaitListed = 'wait-listed', Verified = 'verified', Deleted = 'deleted', Archived = 'archived', Suspended = 'suspended', Pending = 'pending', Inactive = 'inactive' }
export const enum UniversalIdentifierType { String = 'string', Number = 'number', Email = 'email', Url = 'url', Uuid = 'uuid' }
export const enum TransactionType { Charge = 'charge', Fee = 'fee', Payment = 'payment', Transfer = 'transfer', Adjustment = 'adjustment', Deposit = 'deposit', Withdrawal = 'withdrawal', Refund = 'refund' }
export const enum TransactionStatus { InProgress = 'in-progress', Pending = 'pending', Failed = 'failed', Cancelled = 'cancelled', Initiated = 'initiated', Succeeded = 'succeeded', Error = 'error' }
export const enum TransactionChannel { Mobile = 'mobile', InPerson = 'in-person', Online = 'online', Other = 'other', Atm = 'atm', BankBranch = 'bank-branch', Mail = 'mail', Telephone = 'telephone' }
export const enum ToolCallType { Function = 'function' }
export const enum TimeCycle { Minutely = 'minutely', Quarterly = 'quarterly', Monthly = 'monthly', Custom = 'custom', AdHoc = 'ad-hoc', Secondly = 'secondly', SemiMonthly = 'semi-monthly', SemiAnnually = 'semi-annually', Daily = 'daily', Triennially = 'triennially', Weekly = 'weekly', Biennially = 'biennially', Hourly = 'hourly', Biweekly = 'biweekly', Annually = 'annually' }
export const enum TaxType { Variable = 'variable', Additive = 'additive', Inclusive = 'inclusive' }
export const enum TaskStatus { Done = 'done', Cancelled = 'cancelled', OnHold = 'on-hold', Blocked = 'blocked', InProgress = 'in-progress', Todo = 'todo' }
export const enum TableType { View = 'view', External = 'external', MaterializedView = 'materialized-view', Snapshot = 'snapshot', Table = 'table' }
export const enum SupportTicketPriority { Immediate = 'immediate', Medium = 'medium', High = 'high', Urgent = 'urgent', Low = 'low' }
export const enum SupportQueryType { Question = 'question', Bug = 'bug', FeatureRequest = 'feature-request', Incident = 'incident', Problem = 'problem', Task = 'task', Feedback = 'feedback' }
export const enum StakeholderType { Partner = 'partner', Competitor = 'competitor', Customer = 'customer', Investor = 'investor', Vendor = 'vendor', Other = 'other' }
export const enum SpeakerRole { Attendee = 'attendee', Invitee = 'invitee' }
export const enum SocialPlatform { Pinterest = 'pinterest', OtherSocialPlatform = 'other-social-platform', Instagram = 'instagram', Tiktok = 'tiktok', Snapchat = 'snapchat', Tumblr = 'tumblr', Facebook = 'facebook', X = 'x', Twitter = 'twitter', Skype = 'skype', Linkedin = 'linkedin', Youtube = 'youtube', Reddit = 'reddit' }
export const enum ReviewApprovalStatus { Approved = 'approved', Pending = 'pending', InReview = 'in-review', Rejected = 'rejected', Revised = 'revised' }
export const enum ResponseFormatType { JsonSchema = 'json-schema', Text = 'text', JsonObject = 'json-object' }
export const enum ReactionType { Bookmark = 'bookmark', Sad = 'sad', Wow = 'wow', Like = 'like', Dislike = 'dislike', Love = 'love', Angry = 'angry', Laugh = 'laugh', Interested = 'interested' }
export const enum PromotionType { FreeShipping = 'free-shipping', FixedAmount = 'fixed-amount', Percentage = 'percentage', Other = 'other', BuyOneGetOne = 'buy-one-get-one', RewardPoints = 'reward-points' }
export const enum ProductAvailabilityStatus { InStock = 'in-stock', PreOrder = 'pre-order', BackOrder = 'back-order', Discontinued = 'discontinued', OutOfStock = 'out-of-stock' }
export const enum PriorityLevel { Urgent = 'urgent', Medium = 'medium', Elevated = 'elevated', Low = 'low', High = 'high' }
export const enum PrerequisiteRangeType { Subtotal = 'subtotal', Quantity = 'quantity', ShippingPrice = 'shipping-price' }
export const enum PrepaidType { NotPrepaid = 'not-prepaid', Prepaid = 'prepaid', UnknownPrepaid = 'unknown-prepaid' }
export const enum PaymentTerm { CashBeforeShipment = 'cash-before-shipment', Net60 = 'net-60', Net90 = 'net-90', DueEndOfMonth = 'due-end-of-month', CashOnDelivery = 'cash-on-delivery', Prepayment = 'prepayment', Prepaid = 'prepaid', Installment = 'installment', UponCompletion = 'upon-completion', DeferredPayment = 'deferred-payment', CashInAdvance = 'cash-in-advance', DueOnReceipt = 'due-on-receipt', Custom = 'custom', CashWithOrder = 'cash-with-order', Net30 = 'net-30', Net = 'net' }
export const enum PaymentStatus { Refunded = 'refunded', Failed = 'failed', Voided = 'voided', Pending = 'pending', Paid = 'paid', Succeeded = 'succeeded', Disputed = 'disputed', Cancelled = 'cancelled', PartiallyRefunded = 'partially-refunded', Adjusted = 'adjusted', Deleted = 'deleted', Partial = 'partial', Draft = 'draft', Authorized = 'authorized', Overdue = 'overdue', Processing = 'processing', Submitted = 'submitted', Error = 'error' }
export const enum PaymentMethod { Paypal = 'paypal', CashOnDelivery = 'cash-on-delivery', MobilePayment = 'mobile-payment', MobileWallet = 'mobile-wallet', Other = 'other', Cryptocurrency = 'cryptocurrency', Cash = 'cash', BankTransfer = 'bank-transfer', CreditCard = 'credit-card', DebitCard = 'debit-card', Check = 'check' }
export const enum ParticipantType { ExternalParticipant = 'external-participant', Team = 'team', Group = 'group', User = 'user', Organization = 'organization' }
export const enum ParticipantEngagementStatus { Guest = 'guest', Moderator = 'moderator', Inactive = 'inactive', Banned = 'banned', Active = 'active', Admin = 'admin', Left = 'left' }
export const enum OrganizationalRole { Other = 'other', Employee = 'employee', Admin = 'admin', Manager = 'manager', Director = 'director', Supervisor = 'supervisor', Contractor = 'contractor' }
export const enum OrderingCriteria { PriceAscending = 'price-ascending', Alphabetical = 'alphabetical', Popularity = 'popularity', Relevance = 'relevance', PriceDescending = 'price-descending', Rating = 'rating', Manual = 'manual', CreationDate = 'creation-date' }
export const enum OrderStatus { Returned = 'returned', Refunded = 'refunded', Disputed = 'disputed', Pending = 'pending', OnHold = 'on-hold', Delivered = 'delivered', AwaitingPayment = 'awaiting-payment', Shipped = 'shipped', Failed = 'failed', AwaitingShipment = 'awaiting-shipment', Confirmed = 'confirmed', Abandoned = 'abandoned', AwaitingPickup = 'awaiting-pickup', Processing = 'processing', Completed = 'completed', Cancelled = 'cancelled', PartiallyFulfilled = 'partially-fulfilled', Draft = 'draft' }
export const enum ModifierType { List = 'list', Text = 'text' }
export const enum MimeType { ImageJpeg = 'image/jpeg', ImageWebp = 'image/webp', ImageSvgXml = 'image/svg+xml', ImagePng = 'image/png', ImageGif = 'image/gif' }
export const enum MessageReadStatus { Read = 'read', Sent = 'sent', Unsent = 'unsent', Failed = 'failed', Delivered = 'delivered' }
export const enum MessageDeliveryStatus { Undeliverable = 'undeliverable', Delivered = 'delivered', Error = 'error', Sent = 'sent', Read = 'read', Failed = 'failed', Pending = 'pending' }
export const enum MessageContentType { Voice = 'voice', Html = 'html', File = 'file', Sticker = 'sticker', Document = 'document', Video = 'video', Link = 'link', Image = 'image', Gif = 'gif', Audio = 'audio', Location = 'location', Text = 'text', Contact = 'contact' }
export const enum LifecycleStatus { Active = 'active', Suspended = 'suspended', Cancelled = 'cancelled', Issued = 'issued', Expired = 'expired', Redeemed = 'redeemed' }
export const enum LeadLifecycleStatus { AttemptedToContact = 'attempted-to-contact', BadTiming = 'bad-timing', Converted = 'converted', Lost = 'lost', Connected = 'connected', Open = 'open', New = 'new', Unqualified = 'unqualified', InProcess = 'in-process', Revisited = 'revisited' }
export const enum JsonSchemaType { Function = 'function' }
export const enum JournalEntryStatus { Draft = 'draft', Error = 'error', Pending = 'pending', Posted = 'posted', Voided = 'voided', Corrected = 'corrected' }
export const enum ItemEntityStatus { Pending = 'pending', Active = 'active', Suspended = 'suspended', Deleted = 'deleted', Inactive = 'inactive', Completed = 'completed', Archived = 'archived' }
export const enum ItemCondition { Damaged = 'damaged', Refurbished = 'refurbished', New = 'new', OpenBox = 'open-box', Used = 'used', LikeNew = 'like-new' }
export const enum ItemAvailabilityStatus { OutOfStock = 'out-of-stock', Inactive = 'inactive', Discontinued = 'discontinued', Active = 'active' }
export const enum IssueLifecycleStatus { OnHold = 'on-hold', Closed = 'closed', InProgress = 'in-progress', Resolved = 'resolved', Waiting = 'waiting', Cancelled = 'cancelled', Open = 'open', Pending = 'pending' }
export const enum InvoiceAdjustmentType { Discount = 'discount', Shipping = 'shipping', Tip = 'tip', Other = 'other', Tax = 'tax' }
export const enum InventoryStorageType { DropShipper = 'drop-shipper', OnlineMarketplace = 'online-marketplace', Consignment = 'consignment', RetailStore = 'retail-store', Other = 'other', Warehouse = 'warehouse', DistributionCenter = 'distribution-center' }
export const enum ImageType { Base64 = 'base64' }
export const enum ImageMimeType { ImageBmp = 'image/bmp', ImageHeic = 'image/heic', ImageGif = 'image/gif', ImageJpeg = 'image/jpeg', ImageWebp = 'image/webp', ImageSvgXml = 'image/svg+xml', ImageTiff = 'image/tiff', ImagePng = 'image/png' }
export const enum IdentityProvider { Qq = 'qq', Line = 'line', Instagram = 'instagram', Flickr = 'flickr', Paypal = 'paypal', Telegram = 'telegram', Wechat = 'wechat', Twitter = 'twitter', Yahoo = 'yahoo', Foursquare = 'foursquare', Google = 'google', Pinterest = 'pinterest', Apple = 'apple', Facebook = 'facebook', Whatsapp = 'whatsapp', Behance = 'behance', Tumblr = 'tumblr', Slack = 'slack', Linkedin = 'linkedin', Tiktok = 'tiktok', Dribbble = 'dribbble', Discord = 'discord', Amazon = 'amazon', Reddit = 'reddit', Vimeo = 'vimeo', Other = 'other', Microsoft = 'microsoft', Snapchat = 'snapchat', Github = 'github', Signal = 'signal' }
export const enum GlobalTaxType { SalesTax = 'sales-tax', Gst = 'gst', Other = 'other', Vat = 'vat', CustomsDuty = 'customs-duty', ExciseTax = 'excise-tax', PropertyTax = 'property-tax' }
export const enum GenderIdentity { Male = 'male', Female = 'female', Other = 'other', PreferNotToSay = 'prefer-not-to-say' }
export const enum FulfillmentStatus { Failure = 'failure', Returned = 'returned', Delivered = 'delivered', Pending = 'pending', Cancelled = 'cancelled', InTransit = 'in-transit' }
export const enum FinancialTransactionType { ReceiveOverpayment = 'receive-overpayment', Adjustment = 'adjustment', Receive = 'receive', Spend = 'spend', Transfer = 'transfer', Sale = 'sale', Payment = 'payment', ReceivePrepayment = 'receive-prepayment', Refund = 'refund', Deposit = 'deposit', Fee = 'fee', Dividend = 'dividend', SpendOverpayment = 'spend-overpayment', Other = 'other', Withdrawal = 'withdrawal', Interest = 'interest', SpendPrepayment = 'spend-prepayment', Charge = 'charge', Chargeback = 'chargeback' }
export const enum FinancialTransactionStatus { Disputed = 'disputed', Pending = 'pending', SettlementInProgress = 'settlement-in-progress', Failed = 'failed', Cleared = 'cleared', Refunded = 'refunded', Authorized = 'authorized', Cancelled = 'cancelled' }
export const enum FinancialTrackingCategories { Customer = 'customer', Service = 'service', None = 'none', Location = 'location', CostCenter = 'cost-center', Other = 'other', Project = 'project', Department = 'department', Employee = 'employee', Product = 'product', Class = 'class', Vendor = 'vendor', Division = 'division' }
export const enum FinancialDisputeStatus { UnderReview = 'under-review', Closed = 'closed', AwaitingEvidence = 'awaiting-evidence', ChargeRefunded = 'charge-refunded', Won = 'won', Lost = 'lost', Escalated = 'escalated', NeedsResponse = 'needs-response' }
export const enum FinancialChargeType { Commission = 'commission', TransactionFee = 'transaction-fee', ServiceCharge = 'service-charge', LateFee = 'late-fee', InterestCharge = 'interest-charge', ProcessingFee = 'processing-fee', Other = 'other' }
export const enum FinancialAccountStatus { Delinquent = 'delinquent', Active = 'active', Closed = 'closed', Suspended = 'suspended', Inactive = 'inactive', UnderReview = 'under-review', Frozen = 'frozen' }
export const enum FileType { Url = 'url', File = 'file', Folder = 'folder' }
export const enum ExpenseApprovalStatus { Processed = 'processed', Reimbursed = 'reimbursed', Pending = 'pending', Approved = 'approved', Cancelled = 'cancelled', Denied = 'denied', New = 'new', Reviewing = 'reviewing' }
export const enum EventVisibility { Public = 'public', Confidential = 'confidential', Private = 'private' }
export const enum EventStatus { Confirmed = 'confirmed', Cancelled = 'cancelled', Tentative = 'tentative' }
export const enum EventRuleType { AddDates = 'add-dates', ExcludeDates = 'exclude-dates', Exclude = 'exclude', Repeat = 'repeat' }
export const enum EventReminderAction { Email = 'email', Popup = 'popup' }
export const enum EventFrequency { Weekly = 'weekly', Monthly = 'monthly', Yearly = 'yearly', Daily = 'daily' }
export const enum EntryMethod { Keyed = 'keyed', Swiped = 'swiped', Emv = 'emv', Contactless = 'contactless', OnFile = 'on-file' }
export const enum EntityLifecycleStatus { Inactive = 'inactive', Scheduled = 'scheduled', Deleted = 'deleted', Active = 'active', Archived = 'archived', Draft = 'draft', Preorder = 'preorder' }
export const enum EntityCategory { Project = 'project', Other = 'other', User = 'user', Document = 'document', Link = 'link', Task = 'task', Event = 'event', Person = 'person', Owner = 'owner', Message = 'message' }
export const enum EmploymentType { Temporary = 'temporary', Freelance = 'freelance', PartTime = 'part-time', Volunteer = 'volunteer', Contract = 'contract', Internship = 'internship', Seasonal = 'seasonal', Permanent = 'permanent', FullTime = 'full-time' }
export const enum EmploymentAndCandidateStatus { Terminated = 'terminated', InReview = 'in-review', Other = 'other', NotSelected = 'not-selected', Active = 'active', Inactive = 'inactive', OfferExtended = 'offer-extended', OnLeave = 'on-leave', New = 'new', Interviewing = 'interviewing', Hired = 'hired' }
export const enum EmailCategoryType { Transactional = 'transactional', Personal = 'personal', Governmental = 'governmental', Other = 'other', Educational = 'educational', Promotional = 'promotional', Business = 'business', Spam = 'spam' }
export const enum DiscountType { ConditionalDiscount = 'conditional-discount', Percentage = 'percentage', VariablePercentage = 'variable-percentage', VariableAmount = 'variable-amount', UnknownDiscount = 'unknown-discount', BuyOneGetOne = 'buy-one-get-one', FixedAmount = 'fixed-amount', TieredDiscount = 'tiered-discount' }
export const enum DeviceUsageType { Industrial = 'industrial', Home = 'home', Healthcare = 'healthcare', Personal = 'personal', Business = 'business', Other = 'other', Educational = 'educational' }
export const enum DayOfWeek { Monday = 'monday', Wednesday = 'wednesday', Thursday = 'thursday', Friday = 'friday', Saturday = 'saturday', Tuesday = 'tuesday', Sunday = 'sunday' }
export const enum DatabaseType { Linked = 'linked', External = 'external', Default = 'default', Public = 'public' }
export const enum DataType { Timestamp = 'timestamp', Custom = 'custom', String = 'string', Date = 'date', Array = 'array', Object = 'object', Json = 'json', Binary = 'binary', Number = 'number', Boolean = 'boolean', Null = 'null', Undefined = 'undefined' }
export const enum CvvStatus { NotChecked = 'not-checked', Accepted = 'accepted', Rejected = 'rejected' }
export const enum CustomerType { B2c = 'b2c', Retail = 'retail', Online = 'online', Wholesale = 'wholesale', B2b = 'b2b', Corporate = 'corporate' }
export const enum CustomerStatus { Inactive = 'inactive', Active = 'active', Pending = 'pending', Suspended = 'suspended', Archived = 'archived' }
export const enum CustomerEligibilityStatus { AllCustomers = 'all-customers', VipCustomers = 'vip-customers', ReturningCustomers = 'returning-customers', SpecificConditions = 'specific-conditions', Other = 'other', NewCustomers = 'new-customers' }
export const enum Currency { GHS = 'ghs', TZS = 'tzs', AED = 'aed', COP = 'cop', XOF = 'xof', PHP = 'php', AOA = 'aoa', HUF = 'huf', MOP = 'mop', VUV = 'vuv', AWG = 'awg', NIO = 'nio', ZMW = 'zmw', DZD = 'dzd', ISK = 'isk', KZT = 'kzt', GBP = 'gbp', MNT = 'mnt', EUR = 'eur', SBD = 'sbd', SGD = 'sgd', PAB = 'pab', MZN = 'mzn', STN = 'stn', LKR = 'lkr', BSD = 'bsd', BTN = 'btn', BYN = 'byn', GEL = 'gel', KGS = 'kgs', ETB = 'etb', NGN = 'ngn', AUD = 'aud', SYP = 'syp', MDL = 'mdl', FJD = 'fjd', XCD = 'xcd', TMT = 'tmt', CUP = 'cup', KPW = 'kpw', ZAR = 'zar', INR = 'inr', PGK = 'pgk', XPF = 'xpf', SSP = 'ssp', JPY = 'jpy', RSD = 'rsd', SCR = 'scr', SRD = 'srd', BDT = 'bdt', OMR = 'omr', NAD = 'nad', TWD = 'twd', MMK = 'mmk', KMF = 'kmf', MKD = 'mkd', AZN = 'azn', BWP = 'bwp', UGX = 'ugx', GGP = 'ggp', IMP = 'imp', UAH = 'uah', BZD = 'bzd', CHF = 'chf', KWD = 'kwd', EGP = 'egp', ARS = 'ars', PKR = 'pkr', CDF = 'cdf', DKK = 'dkk', SZL = 'szl', IQD = 'iqd', MVR = 'mvr', KHR = 'khr', NPR = 'npr', TOP = 'top', GIP = 'gip', IRR = 'irr', KID = 'kid', LBP = 'lbp', AMD = 'amd', LYD = 'lyd', CUC = 'cuc', CLP = 'clp', CZK = 'czk', LSL = 'lsl', WST = 'wst', CNY = 'cny', DOP = 'dop', BRL = 'brl', MGA = 'mga', FOK = 'fok', SLL = 'sll', THB = 'thb', JMD = 'jmd', YER = 'yer', TVD = 'tvd', RUB = 'rub', HTG = 'htg', KES = 'kes', HRK = 'hrk', KYD = 'kyd', MRU = 'mru', RWF = 'rwf', TTD = 'ttd', CAD = 'cad', CVE = 'cve', DJF = 'djf', PLN = 'pln', ERN = 'ern', NZD = 'nzd', SAR = 'sar', SEK = 'sek', BHD = 'bhd', ILS = 'ils', PEN = 'pen', BOB = 'bob', XDR = 'xdr', SHP = 'shp', TJS = 'tjs', TRY = 'try', MAD = 'mad', XAF = 'xaf', AFN = 'afn', GMD = 'gmd', SOS = 'sos', ALL = 'all', GYD = 'gyd', BBD = 'bbd', MXN = 'mxn', MUR = 'mur', TND = 'tnd', KRW = 'krw', QAR = 'qar', BAM = 'bam', GNF = 'gnf', JOD = 'jod', MWK = 'mwk', FKP = 'fkp', LAK = 'lak', BND = 'bnd', SDG = 'sdg', CRC = 'crc', BMD = 'bmd', BIF = 'bif', MYR = 'myr', RON = 'ron', USD = 'usd', VES = 'ves', GTQ = 'gtq', LRD = 'lrd', JEP = 'jep', BGN = 'bgn', VND = 'vnd', HNL = 'hnl', ZWL = 'zwl', NOK = 'nok', UZS = 'uzs', IDR = 'idr', PYG = 'pyg', ANG = 'ang', HKD = 'hkd', UYU = 'uyu' }
export const enum CreditType { Overpayment = 'overpayment', Prepayment = 'prepayment', Goodwill = 'goodwill', Supplier = 'supplier', Customer = 'customer' }
export const enum CreditNoteStatus { Disputed = 'disputed', Draft = 'draft', Revised = 'revised', Applied = 'applied', Completed = 'completed', Pending = 'pending', Void = 'void', Cancelled = 'cancelled', Issued = 'issued' }
export const enum Country { China = 'china', CostaRica = 'costa-rica', Nicaragua = 'nicaragua', Ghana = 'ghana', UnitedStates = 'united-states', Maldives = 'maldives', Slovenia = 'slovenia', Dominica = 'dominica', Afghanistan = 'afghanistan', Zimbabwe = 'zimbabwe', Slovakia = 'slovakia', Liechtenstein = 'liechtenstein', Rwanda = 'rwanda', Mongolia = 'mongolia', Morocco = 'morocco', ElSalvador = 'el-salvador', Sudan = 'sudan', Malaysia = 'malaysia', Pakistan = 'pakistan', DominicanRepublic = 'dominican-republic', Liberia = 'liberia', Serbia = 'serbia', Barbados = 'barbados', Laos = 'laos', Cambodia = 'cambodia', Belgium = 'belgium', Angola = 'angola', Croatia = 'croatia', NorthMacedonia = 'north-macedonia', Samoa = 'samoa', Thailand = 'thailand', Uganda = 'uganda', Vanuatu = 'vanuatu', Montenegro = 'montenegro', Guyana = 'guyana', Moldova = 'moldova', Georgia = 'georgia', CzechRepublic = 'czech-republic', Hungary = 'hungary', Switzerland = 'switzerland', CongoRepublic = 'congo-republic', Micronesia = 'micronesia', Djibouti = 'djibouti', Azerbaijan = 'azerbaijan', India = 'india', VaticanCity = 'vatican-city', SriLanka = 'sri-lanka', Bahamas = 'bahamas', Iran = 'iran', Bulgaria = 'bulgaria', Kazakhstan = 'kazakhstan', Turkey = 'turkey', Ecuador = 'ecuador', Tanzania = 'tanzania', Nigeria = 'nigeria', Sweden = 'sweden', Turkmenistan = 'turkmenistan', Greece = 'greece', Indonesia = 'indonesia', Singapore = 'singapore', Gabon = 'gabon', Guinea = 'guinea', Lithuania = 'lithuania', Albania = 'albania', Honduras = 'honduras', Kiribati = 'kiribati', Senegal = 'senegal', AntiguaAndBarbuda = 'antigua-and-barbuda', Haiti = 'haiti', PapuaNewGuinea = 'papua-new-guinea', SanMarino = 'san-marino', Cyprus = 'cyprus', Romania = 'romania', SouthAfrica = 'south-africa', Belarus = 'belarus', CongoDemocraticRepublic = 'congo-democratic-republic', TimorLeste = 'timor-leste', Tunisia = 'tunisia', Poland = 'poland', Venezuela = 'venezuela', CaboVerde = 'cabo-verde', SaintVincentAndTheGrenadines = 'saint-vincent-and-the-grenadines', Bahrain = 'bahrain', Chile = 'chile', Monaco = 'monaco', TrinidadAndTobago = 'trinidad-and-tobago', Argentina = 'argentina', SaintKittsAndNevis = 'saint-kitts-and-nevis', Burundi = 'burundi', Mozambique = 'mozambique', Madagascar = 'madagascar', Peru = 'peru', Austria = 'austria', Lesotho = 'lesotho', Paraguay = 'paraguay', Latvia = 'latvia', UnitedKingdom = 'united-kingdom', Australia = 'australia', Zambia = 'zambia', Tuvalu = 'tuvalu', Kyrgyzstan = 'kyrgyzstan', Russia = 'russia', Kenya = 'kenya', Iraq = 'iraq', Seychelles = 'seychelles', Cuba = 'cuba', Mali = 'mali', Comoros = 'comoros', Italy = 'italy', CentralAfricanRepublic = 'central-african-republic', Germany = 'germany', Nepal = 'nepal', NewZealand = 'new-zealand', Andorra = 'andorra', Guatemala = 'guatemala', Palestine = 'palestine', Spain = 'spain', Syria = 'syria', Togo = 'togo', Uzbekistan = 'uzbekistan', Luxembourg = 'luxembourg', BosniaAndHerzegovina = 'bosnia-and-herzegovina', Eritrea = 'eritrea', Suriname = 'suriname', Somalia = 'somalia', Botswana = 'botswana', Iceland = 'iceland', Netherlands = 'netherlands', Cameroon = 'cameroon', SouthKorea = 'south-korea', Ukraine = 'ukraine', Malawi = 'malawi', Egypt = 'egypt', Canada = 'canada', Gambia = 'gambia', SierraLeone = 'sierra-leone', Taiwan = 'taiwan', Armenia = 'armenia', BurkinaFaso = 'burkina-faso', Vietnam = 'vietnam', EquatorialGuinea = 'equatorial-guinea', Oman = 'oman', Philippines = 'philippines', Benin = 'benin', Chad = 'chad', Bangladesh = 'bangladesh', Libya = 'libya', Myanmar = 'myanmar', Norway = 'norway', Brazil = 'brazil', Mexico = 'mexico', Lebanon = 'lebanon', Tajikistan = 'tajikistan', Colombia = 'colombia', Grenada = 'grenada', Palau = 'palau', Portugal = 'portugal', Uruguay = 'uruguay', Mauritania = 'mauritania', CoteDIvoire = 'cote-d-ivoire', Japan = 'japan', Estonia = 'estonia', Bolivia = 'bolivia', Ireland = 'ireland', Israel = 'israel', France = 'france', Algeria = 'algeria', Eswatini = 'eswatini', Mauritius = 'mauritius', GuineaBissau = 'guinea-bissau', Niger = 'niger', Fiji = 'fiji', Qatar = 'qatar', SaoTomeAndPrincipe = 'sao-tome-and-principe', MarshallIslands = 'marshall-islands', Namibia = 'namibia', SaudiArabia = 'saudi-arabia', Finland = 'finland', Malta = 'malta', Jamaica = 'jamaica', Kuwait = 'kuwait', NorthKorea = 'north-korea', Panama = 'panama', UnitedArabEmirates = 'united-arab-emirates', Yemen = 'yemen', Bhutan = 'bhutan', Ethiopia = 'ethiopia', Belize = 'belize', Denmark = 'denmark', SaintLucia = 'saint-lucia', Tonga = 'tonga', Brunei = 'brunei', Nauru = 'nauru', SolomonIslands = 'solomon-islands', Jordan = 'jordan', SouthSudan = 'south-sudan' }
export const enum ConversationStatus { Archived = 'archived', Closed = 'closed', Snoozed = 'snoozed', Deleted = 'deleted', Active = 'active' }
export const enum ContentVisibility { Public = 'public', Shared = 'shared', Protected = 'protected', Internal = 'internal', Private = 'private' }
export const enum ContactAddressType { Home = 'home', Personal = 'personal', Business = 'business', Shipping = 'shipping', Other = 'other', Temporary = 'temporary', Work = 'work', Billing = 'billing' }
export const enum CommunicationRole { Channel = 'channel', Owner = 'owner', Service = 'service', System = 'system', Admin = 'admin', Assistant = 'assistant', Bot = 'bot', Guest = 'guest', Member = 'member', User = 'user', Group = 'group', Moderator = 'moderator' }
export const enum CommunicationMethod { Text = 'text', Phone = 'phone', Email = 'email', InPerson = 'in-person', VideoCall = 'video-call', Other = 'other', InstantMessage = 'instant-message', Sms = 'sms', PushNotification = 'push-notification', SocialMedia = 'social-media', Mail = 'mail' }
export const enum ChatType { Private = 'private', Group = 'group', Public = 'public' }
export const enum CardType { Credit = 'credit', UnknownCard = 'unknown-card', Debit = 'debit' }
export const enum CampaignType { Email = 'email', SocialMedia = 'social-media', Display = 'display', Other = 'other', SearchEngine = 'search-engine' }
export const enum CampaignStatus { Active = 'active', Archived = 'archived', Planned = 'planned', Paused = 'paused', Completed = 'completed', Cancelled = 'cancelled', Scheduled = 'scheduled', Draft = 'draft' }
export const enum CallDirection { Outbound = 'outbound', Conference = 'conference', Inbound = 'inbound', Unknown = 'unknown' }
export const enum BillingStatus { Unpaid = 'unpaid', Authorised = 'authorised', Draft = 'draft', Voided = 'voided', Submitted = 'submitted', Pending = 'pending', PartiallyPaid = 'partially-paid', Paid = 'paid', Overdue = 'overdue', Deleted = 'deleted' }
export const enum AvcStatus { Rejected = 'rejected', NotChecked = 'not-checked', Accepted = 'accepted' }
export const enum AuditOpinionType { Adverse = 'adverse', Qualified = 'qualified', Unqualified = 'unqualified', Disclaimer = 'disclaimer' }
export const enum AiToolChoiceType { None = 'none', Tool = 'tool', Any = 'any', Auto = 'auto' }
export const enum AiRole { Assistant = 'assistant', Tool = 'tool', User = 'user' }
export const enum AiMessagesContentType { ToolResult = 'tool-result', Text = 'text', ToolUse = 'tool-use', Image = 'image' }
export const enum AccountingAccountType { ExpenseExternalServices = 'expense::external-services', AssetExpenditureAuthorisationsAndLettersOfCredit = 'asset::expenditure-authorisations-and-letters-of-credit', ExpenseOtherRentalCosts = 'expense::other-rental-costs', AssetLoansToOthers = 'asset::loans-to-others', ExpenseRepairMaintenance = 'expense::repair-maintenance', CostOfGoodsSoldEquipmentRentalCos = 'cost-of-goods-sold::equipment-rental-cos', ExpenseOtherExternalServices = 'expense::other-external-services', EquityAccumulatedAdjustment = 'equity::accumulated-adjustment', OtherExpenseVehicleInsurance = 'other-expense::vehicle-insurance', LiabilityLongTermBorrowings = 'liability::long-term-borrowings', OtherExpenseDepreciation = 'other-expense::depreciation', RevenueSavingsByTaxScheme = 'revenue::savings-by-tax-scheme', OtherCurrentLiabilityRentsInTrustLiability = 'other-current-liability::rents-in-trust-liability', RevenueSalesOfProductIncome = 'revenue::sales-of-product-income', AssetOtherLongTermAssets = 'asset::other-long-term-assets', AssetInventory = 'asset::inventory', OtherCurrentLiabilityInterestPayables = 'other-current-liability::interest-payables', CostOfGoodsSoldCostOfLaborCos = 'cost-of-goods-sold::cost-of-labor-cos', OtherExpenseVehicleRepairs = 'other-expense::vehicle-repairs', LiabilityNotesPayable = 'liability::notes-payable', AssetAccumulatedAmortizationOfOtherAssets = 'asset::accumulated-amortization-of-other-assets', OtherCurrentLiabilityTradeAndOtherPayables = 'other-current-liability::trade-and-other-payables', CostOfGoodsSoldFreightAndDeliveryCost = 'cost-of-goods-sold::freight-and-delivery-cost', AssetFixedAssetPhone = 'asset::fixed-asset-phone', OtherCurrentLiabilitySundryDebtorsAndCreditors = 'other-current-liability::sundry-debtors-and-creditors', OtherExpenseExceptionalItems = 'other-expense::exceptional-items', AssetOtherEarMarkedBankAccounts = 'asset::other-ear-marked-bank-accounts', AssetInvestments = 'asset::investments', AssetProvisionsNonCurrentAssets = 'asset::provisions-non-current-assets', LiabilityGovernmentAndOtherPublicAuthorities = 'liability::government-and-other-public-authorities', AssetAllowanceForBadDebts = 'asset::allowance-for-bad-debts', OtherCurrentLiabilityStaffAndRelatedLiabilityAccounts = 'other-current-liability::staff-and-related-liability-accounts', RevenueSalesRetail = 'revenue::sales-retail', ExpenseDistributionCosts = 'expense::distribution-costs', ExpenseTaxesPaid = 'expense::taxes-paid', OtherCurrentLiabilityCurrentTaxLiability = 'other-current-liability::current-tax-liability', OtherExpenseUtilities = 'other-expense::utilities', ExpenseOfficeGeneralAdministrativeExpenses = 'expense::office-general-administrative-expenses', LiabilityProvisionForLiabilities = 'liability::provision-for-liabilities', AssetRentsHeldInTrust = 'asset::rents-held-in-trust', AssetOtherConsumables = 'asset::other-consumables', OtherCurrentLiabilityOtherCurrentLiabilities = 'other-current-liability::other-current-liabilities', ExpenseProjectStudiesSurveysAssessments = 'expense::project-studies-surveys-assessments', AssetInvestmentTaxExemptSecurities = 'asset::investment-tax-exempt-securities', ExpenseOtherMiscellaneousServiceCost = 'expense::other-miscellaneous-service-cost', AssetParticipatingInterests = 'asset::participating-interests', RevenueOperatingGrants = 'revenue::operating-grants', ExpenseDuesSubscriptions = 'expense::dues-subscriptions', EquityDividendDisbursed = 'equity::dividend-disbursed', EquityPersonalExpense = 'equity::personal-expense', AssetInvestmentOther = 'asset::investment-other', AssetFixedAssetFurniture = 'asset::fixed-asset-furniture', EquityMoneyReceivedAgainstShareWarrants = 'equity::money-received-against-share-warrants', AssetShortTermLoansAndAdvancesToRelatedParties = 'asset::short-term-loans-and-advances-to-related-parties', ExpensePayrollExpenses = 'expense::payroll-expenses', OtherExpenseMortgageInterest = 'other-expense::mortgage-interest', OtherCurrentLiabilityAccruedLiabilities = 'other-current-liability::accrued-liabilities', AssetDevelopmentCosts = 'asset::development-costs', AssetOrganizationalCosts = 'asset::organizational-costs', EquityPartnerDistributions = 'equity::partner-distributions', OtherExpenseAmortization = 'other-expense::amortization', ExpenseUnappliedCashBillPaymentExpense = 'expense::unapplied-cash-bill-payment-expense', OtherCurrentLiabilityCurrentPortionOfObligationsUnderFinanceLeases = 'other-current-liability::current-portion-of-obligations-under-finance-leases', OtherIncome = 'other-income', ExpenseTravelMeals = 'expense::travel-meals', EquityOtherFreeReserves = 'equity::other-free-reserves', CostOfGoodsSoldOtherCostsOfServiceCos = 'cost-of-goods-sold::other-costs-of-service-cos', ExpenseManagementCompensation = 'expense::management-compensation', OtherExpenseOtherMiscellaneousExpense = 'other-expense::other-miscellaneous-expense', LiabilityLongTermEmployeeBenefitObligations = 'liability::long-term-employee-benefit-obligations', EquityPreferredStock = 'equity::preferred-stock', LiabilityShareholderNotesPayable = 'liability::shareholder-notes-payable', LiabilityStaffAndRelatedLongTermLiabilityAccounts = 'liability::staff-and-related-long-term-liability-accounts', AssetAccumulatedDepreciation = 'asset::accumulated-depreciation', OtherExpenseTaxRoundoffGainOrLoss = 'other-expense::tax-roundoff-gain-or-loss', OtherCurrentLiabilityFederalIncomeTaxPayable = 'other-current-liability::federal-income-tax-payable', AssetLongTermLoansAndAdvancesToRelatedParties = 'asset::long-term-loans-and-advances-to-related-parties', AssetChecking = 'asset::checking', AssetAssetsAvailableForSale = 'asset::assets-available-for-sale', AssetIntangibleAssetsUnderDevelopment = 'asset::intangible-assets-under-development', OtherExpense = 'other-expense', ExpenseShippingFreightDelivery = 'expense::shipping-freight-delivery', CostOfGoodsSold = 'cost-of-goods-sold', OtherExpenseDeferredTaxExpense = 'other-expense::deferred-tax-expense', AssetAccumulatedDepletion = 'asset::accumulated-depletion', LiabilityGroupAndAssociates = 'liability::group-and-associates', AssetAssetsHeldForSale = 'asset::assets-held-for-sale', EquityInvestmentGrants = 'equity::investment-grants', AssetInvestmentMortgageRealEstateLoans = 'asset::investment-mortgage-real-estate-loans', OtherCurrentLiabilityTrustAccountsLiabilities = 'other-current-liability::trust-accounts-liabilities', AssetCashOnHand = 'asset::cash-on-hand', AssetDeferredTax = 'asset::deferred-tax', OtherCurrentLiabilityShortTermBorrowings = 'other-current-liability::short-term-borrowings', ExpenseCharitableContributions = 'expense::charitable-contributions', OtherExpenseOtherVehicleExpenses = 'other-expense::other-vehicle-expenses', OtherCurrentLiabilityDutiesAndTaxes = 'other-current-liability::duties-and-taxes', AssetProvisionsFixedAssets = 'asset::provisions-fixed-assets', OtherExpenseParkingAndTolls = 'other-expense::parking-and-tolls', OtherCurrentLiabilityInsurancePayable = 'other-current-liability::insurance-payable', AssetLand = 'asset::land', OtherExpensePenaltiesSettlements = 'other-expense::penalties-settlements', ExpenseGlobalTaxExpense = 'expense::global-tax-expense', OtherCurrentLiabilityGlobalTaxPayable = 'other-current-liability::global-tax-payable', RevenueIncome = 'revenue::income', OtherCurrentLiabilityGlobalTaxSuspense = 'other-current-liability::global-tax-suspense', LiabilityCreditCard = 'liability::credit-card', OtherExpenseWashAndRoadServices = 'other-expense::wash-and-road-services', AssetBuildings = 'asset::buildings', LiabilityLiabilitiesRelatedToAssetsHeldForSale = 'liability::liabilities-related-to-assets-held-for-sale', AssetInvestmentUsGovernmentObligations = 'asset::investment-us-government-obligations', EquityShareCapital = 'equity::share-capital', AssetProvisionsCurrentAssets = 'asset::provisions-current-assets', OtherCurrentLiabilityPrepaidExpensesPayable = 'other-current-liability::prepaid-expenses-payable', AssetEmployeeCashAdvances = 'asset::employee-cash-advances', ExpenseOtherSellingExpenses = 'expense::other-selling-expenses', OtherIncomeInterestEarned = 'other-income::interest-earned', ExpenseLossOnDiscontinuedOperationsNetOfTax = 'expense::loss-on-discontinued-operations-net-of-tax', OtherIncomeOtherInvestmentIncome = 'other-income::other-investment-income', AssetFixedAsset = 'asset::fixed-asset', AssetLicenses = 'asset::licenses', RevenueOtherCurrentOperatingIncome = 'revenue::other-current-operating-income', EquityPartnersEquity = 'equity::partners-equity', ExpenseInsurance = 'expense::insurance', OtherCurrentLiabilityLineOfCredit = 'other-current-liability::line-of-credit', OtherExpenseDepletion = 'other-expense::depletion', AssetFixedAssetCopiers = 'asset::fixed-asset-copiers', EquityHealthcare = 'equity::healthcare', OtherExpenseMatCredit = 'other-expense::mat-credit', EquityPartnerContributions = 'equity::partner-contributions', LiabilityDeferredTaxLiabilities = 'liability::deferred-tax-liabilities', AssetBank = 'asset::bank', AssetFixedAssetPhotoVideo = 'asset::fixed-asset-photo-video', ExpenseBorrowingCost = 'expense::borrowing-cost', ExpensePromotionalMeals = 'expense::promotional-meals', ExpenseEntertainment = 'expense::entertainment', AssetPrepaymentsAndAccruedIncome = 'asset::prepayments-and-accrued-income', OtherExpenseVehicleLease = 'other-expense::vehicle-lease', AssetOtherCurrentAssets = 'asset::other-current-assets', RevenueServiceFeeIncome = 'revenue::service-fee-income', RevenueUnappliedCashPaymentIncome = 'revenue::unapplied-cash-payment-income', EquityOwnersEquity = 'equity::owners-equity', EquityEquityInEarningsOfSubsidiuaries = 'equity::equity-in-earnings-of-subsidiuaries', ExpenseExtraordinaryCharges = 'expense::extraordinary-charges', CostOfGoodsSoldShippingFreightDeliveryCos = 'cost-of-goods-sold::shipping-freight-delivery-cos', RevenueCashReceiptIncome = 'revenue::cash-receipt-income', EquityRetainedEarnings = 'equity::retained-earnings', OtherExpenseHomeOwnerRentalInsurance = 'other-expense::home-owner-rental-insurance', OtherCurrentLiabilityDirectDepositPayable = 'other-current-liability::direct-deposit-payable', OtherIncomeGainLossOnSaleOfFixedAssets = 'other-income::gain-loss-on-sale-of-fixed-assets', ExpenseRentOrLeaseOfBuildings = 'expense::rent-or-lease-of-buildings', AssetDepletableAssets = 'asset::depletable-assets', OtherCurrentLiabilityCurrentPortionEmployeeBenefitsObligations = 'other-current-liability::current-portion-employee-benefits-obligations', Expense = 'expense', AssetUndepositedFunds = 'asset::undeposited-funds', ExpenseOfficeExpenses = 'expense::office-expenses', EquityFunds = 'equity::funds', AssetLoansToOfficers = 'asset::loans-to-officers', AssetLongTermInvestments = 'asset::long-term-investments', AssetFixedAssetOtherToolsEquipment = 'asset::fixed-asset-other-tools-equipment', OtherExpenseHomeOffice = 'other-expense::home-office', LiabilityOtherLongTermLiabilities = 'liability::other-long-term-liabilities', OtherExpenseOtherHomeOfficeExpenses = 'other-expense::other-home-office-expenses', OtherCurrentLiabilityLoanPayable = 'other-current-liability::loan-payable', ExpenseEntertainmentMeals = 'expense::entertainment-meals', AssetOtherCurrentAsset = 'asset::other-current-asset', EquityEstimatedTaxes = 'equity::estimated-taxes', ExpenseTravelExpensesGeneralAndAdminExpenses = 'expense::travel-expenses-general-and-admin-expenses', AssetMachineryAndEquipment = 'asset::machinery-and-equipment', AssetOtherAsset = 'asset::other-asset', ExpenseEquipmentRental = 'expense::equipment-rental', OtherExpenseVehicleLoan = 'other-expense::vehicle-loan', ExpenseAmortizationExpense = 'expense::amortization-expense', AssetGlobalTaxDeferred = 'asset::global-tax-deferred', OtherExpenseExtraordinaryItems = 'other-expense::extraordinary-items', LiabilityAccruedVacationPayable = 'liability::accrued-vacation-payable', AssetFixedAssetComputers = 'asset::fixed-asset-computers', EquityPaidInCapitalOrSurplus = 'equity::paid-in-capital-or-surplus', EquityTreasuryStock = 'equity::treasury-stock', ExpenseSundry = 'expense::sundry', OtherCurrentLiabilityCurrentLiabilities = 'other-current-liability::current-liabilities', RevenueOwnWorkCapitalized = 'revenue::own-work-capitalized', OtherIncomeDividendIncome = 'other-income::dividend-income', OtherIncomeTaxExemptInterest = 'other-income::tax-exempt-interest', AssetLeaseBuyout = 'asset::lease-buyout', OtherIncomeGainLossOnSaleOfInvestments = 'other-income::gain-loss-on-sale-of-investments', ExpenseTravel = 'expense::travel', OtherIncomeOtherOperatingIncome = 'other-income::other-operating-income', OtherIncomeUnrealisedLossOnSecuritiesNetOfTax = 'other-income::unrealised-loss-on-securities-net-of-tax', OtherExpenseIncomeTaxOtherExpense = 'other-expense::income-tax-other-expense', AssetTradeAndOtherReceivables = 'asset::trade-and-other-receivables', OtherExpenseGasAndFuel = 'other-expense::gas-and-fuel', LiabilityBankLoans = 'liability::bank-loans', ExpenseAuto = 'expense::auto', OtherCurrentLiabilitySalesTaxPayable = 'other-current-liability::sales-tax-payable', AssetIntangibleAssets = 'asset::intangible-assets', AssetFixedAssetSoftware = 'asset::fixed-asset-software', LiabilityAccountsPayable = 'liability::accounts-payable', CostOfGoodsSoldSuppliesMaterialsCogs = 'cost-of-goods-sold::supplies-materials-cogs', AssetTrustAccounts = 'asset::trust-accounts', AssetNonCurrentAssets = 'asset::non-current-assets', AssetSavings = 'asset::savings', RevenueOtherPrimaryIncome = 'revenue::other-primary-income', ExpenseShippingAndDeliveryExpense = 'expense::shipping-and-delivery-expense', AssetLeaseholdImprovements = 'asset::leasehold-improvements', LiabilityObligationsUnderFinanceLeases = 'liability::obligations-under-finance-leases', AssetCalledUpShareCapitalNotPaid = 'asset::called-up-share-capital-not-paid', EquityOpeningBalanceEquity = 'equity::opening-balance-equity', RevenueSalesWholesale = 'revenue::sales-wholesale', AssetShortTermInvestmentsInRelatedParties = 'asset::short-term-investments-in-related-parties', ExpenseSuppliesMaterials = 'expense::supplies-materials', ExpenseOtherBusinessExpenses = 'expense::other-business-expenses', OtherExpenseVehicleRegistration = 'other-expense::vehicle-registration', AssetAvailableForSaleFinancialAssets = 'asset::available-for-sale-financial-assets', ExpenseAdvertisingPromotional = 'expense::advertising-promotional', AssetOtherLongTermInvestments = 'asset::other-long-term-investments', OtherCurrentLiability = 'other-current-liability', AssetOtherFixedAssets = 'asset::other-fixed-assets', AssetGoodwill = 'asset::goodwill', EquityCommonStock = 'equity::common-stock', ExpenseAppropriationsToDepreciation = 'expense::appropriations-to-depreciation', OtherCurrentLiabilityStateLocalIncomeTaxPayable = 'other-current-liability::state-local-income-tax-payable', OtherExpenseVehicleLoanInterest = 'other-expense::vehicle-loan-interest', AssetAccumulatedAmortization = 'asset::accumulated-amortization', OtherCurrentLiabilityPayrollTaxPayable = 'other-current-liability::payroll-tax-payable', ExpenseFinanceCosts = 'expense::finance-costs', OtherExpenseRentAndLease = 'other-expense::rent-and-lease', EquityCalledUpShareCapital = 'equity::called-up-share-capital', OtherCurrentLiabilityProvisionsCurrentLiabilities = 'other-current-liability::provisions-current-liabilities', RevenueNonProfitIncome = 'revenue::non-profit-income', AssetMoneyMarket = 'asset::money-market', LiabilityLongTermDebit = 'liability::long-term-debit', AssetRetainage = 'asset::retainage', ExpenseStaffCosts = 'expense::staff-costs', LiabilityOtherLongTermProvisions = 'liability::other-long-term-provisions', ExpenseBankCharges = 'expense::bank-charges', OtherIncomeOtherMiscellaneousIncome = 'other-income::other-miscellaneous-income', CostOfGoodsSoldCostOfSales = 'cost-of-goods-sold::cost-of-sales', OtherExpenseExchangeGainOrLoss = 'other-expense::exchange-gain-or-loss', AssetAssetsInCourseOfConstruction = 'asset::assets-in-course-of-construction', ExpenseCommissionsAndFees = 'expense::commissions-and-fees', ExpenseLegalProfessionalFees = 'expense::legal-professional-fees', OtherExpensePriorPeriodItems = 'other-expense::prior-period-items', AssetGlobalTaxRefund = 'asset::global-tax-refund', LiabilityOutstandingDuesMicroSmallEnterprise = 'liability::outstanding-dues-micro-small-enterprise', LiabilityAccrualsAndDeferredIncome = 'liability::accruals-and-deferred-income', LiabilityProvisionsNonCurrentLiabilities = 'liability::provisions-non-current-liabilities', OtherCurrentLiabilityDividendsPayable = 'other-current-liability::dividends-payable', AssetOtherLongTermLoansAndAdvances = 'asset::other-long-term-loans-and-advances', EquityCapitalReserves = 'equity::capital-reserves', Equity = 'equity', LiabilityAccruedLongTermLiabilities = 'liability::accrued-long-term-liabilities', EquityShareApplicationMoneyPendingAllotment = 'equity::share-application-money-pending-allotment', EquityAccumulatedOtherComprehensiveIncome = 'equity::accumulated-other-comprehensive-income', AssetCashAndCashEquivalents = 'asset::cash-and-cash-equivalents', AssetPrepaidExpenses = 'asset::prepaid-expenses', LiabilityOutstandingDuesOtherThanMicroSmallEnterprise = 'liability::outstanding-dues-other-than-micro-small-enterprise', Asset = 'asset', AccountsReceivable = 'accounts-receivable', RevenueDiscountsRefundsGiven = 'revenue::discounts-refunds-given', AssetLoansToStockholders = 'asset::loans-to-stockholders', ExpenseTravelExpensesSellingExpense = 'expense::travel-expenses-selling-expense', AssetInternalTransfers = 'asset::internal-transfers', AssetFurnitureAndFixtures = 'asset::furniture-and-fixtures', AssetLandAsset = 'asset::land-asset', LiabilityDebtsRelatedToParticipatingInterests = 'liability::debts-related-to-participating-interests', AssetCumulativeDepreciationOnIntangibleAssets = 'asset::cumulative-depreciation-on-intangible-assets', RevenueRevenueGeneral = 'revenue::revenue-general', OtherExpenseVehicle = 'other-expense::vehicle', OtherExpenseRepairsAndMaintenance = 'other-expense::repairs-and-maintenance', ExpenseOtherCurrentOperatingCharges = 'expense::other-current-operating-charges', OtherCurrentLiabilitySocialSecurityAgencies = 'other-current-liability::social-security-agencies', AssetSecurityDeposits = 'asset::security-deposits', AssetCapitalWip = 'asset::capital-wip', OtherCurrentLiabilityPayrollClearing = 'other-current-liability::payroll-clearing', EquityPersonalIncome = 'equity::personal-income', LiabilityLongTermLiability = 'liability::long-term-liability', AssetVehicles = 'asset::vehicles', AssetOtherIntangibleAssets = 'asset::other-intangible-assets', AssetBalWithGovtAuthorities = 'asset::bal-with-govt-authorities', ExpenseInterestPaid = 'expense::interest-paid', ExpenseBadDebts = 'expense::bad-debts', OtherIncomeLossOnDisposalOfAssets = 'other-income::loss-on-disposal-of-assets', ExpensePurchasesRebates = 'expense::purchases-rebates', ExpenseCostOfLabor = 'expense::cost-of-labor', ExpenseIncomeTaxExpense = 'expense::income-tax-expense', ExpenseUtilities = 'expense::utilities', OtherCurrentLiabilityProvisionForWarrantyObligations = 'other-current-liability::provision-for-warranty-obligations' }
export const enum AccountStatus { Suspended = 'suspended', Active = 'active', Closed = 'closed', Pending = 'pending', Inactive = 'inactive' }
export const enum AccountEngagementLevel { Hot = 'hot', Cold = 'cold', Warm = 'warm', Unknown = 'unknown' }
export const enum AccessControlModel { None = 'none', Dac = 'dac', Abac = 'abac', Mac = 'mac', Rbac = 'rbac', Custom = 'custom' }
