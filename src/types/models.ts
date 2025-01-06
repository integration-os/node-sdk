// This file is auto-generated. Do not edit it manually.

export interface WorkExperiences { startDate?: string;
    description?: string;
    commonModel?: string;
    companyName?: string;
    position?: string;
    endDate?: string }
export interface Webhooks { events?: string[];
    createdAt?: string;
    modifyToken?: string;
    address?: string;
    updatedAt?: string;
    format?: Format;
    isDeleted?: boolean;
    commonModel?: string;
    id?: string;
    objects?: string[] }
export interface Vendors { isActive?: boolean;
    contactEmail?: string;
    customFields?: CustomAttributes[];
    outstandingBalance?: number;
    contactPhoneNumber?: string;
    updatedAt?: string;
    isDeleted?: boolean;
    modifyToken?: string;
    currency?: string;
    website?: string;
    accountNumber?: string;
    note?: string;
    companyName?: string;
    id?: string;
    overdueBalance?: number;
    tax?: Taxes[];
    commonModel?: string;
    is1099?: boolean;
    address?: Addresses;
    contactName?: string;
    createdAt?: string }
export interface Variants { weightUnit?: string;
    id?: string;
    price?: number;
    commonModel?: string;
    isTaxable?: boolean;
    sku?: string;
    requiresShipping?: boolean;
    compareAtPrice?: number;
    weight?: number;
    inventoryQuantity?: number;
    modifyToken?: string;
    isDeleted?: boolean;
    isActive?: boolean;
    imageId?: number;
    isDefault?: boolean;
    dimensions?: Dimensions;
    updatedAt?: string;
    barcode?: string;
    createdAt?: string;
    status?: ItemAvailabilityStatus;
    productId?: string;
    title?: string }
export interface Users { id?: string;
    username?: string;
    website?: string;
    modifyToken?: string;
    middleName?: string;
    paymentMethod?: PaymentMethods;
    lastName?: string;
    email?: string;
    gender?: Gender;
    lastLogin?: string;
    bio?: string;
    updatedAt?: string;
    coverPhoto?: Images;
    roles?: Roles[];
    dateOfBirth?: string;
    status?: UserStatus;
    commonModel?: string;
    profilePicture?: Images;
    phoneNumber?: string;
    socialProfiles?: SocialProfiles[];
    password?: string;
    preferences?: Preferences;
    firstName?: string;
    createdAt?: string;
    sso?: SSO[];
    isActive?: boolean;
    addresses?: Addresses[] }
export interface UserOrGroup { commonModel?: string;
    displayName?: string;
    type?: ParticipantType;
    identifier?: string }
export interface UsageLimitExpirations { limit?: number;
    expirationDate?: string;
    commonModel?: string }
export interface Transcripts { commonModel?: string;
    speakerName?: string;
    speakerId?: string;
    sentences?: Sentences[];
    topic?: string;
    createdAt?: string;
    modifyToken?: string;
    meetingId?: string;
    id?: string;
    updatedAt?: string }
export interface Transactions { modifyToken?: string;
    dispute?: Disputes;
    accountName?: string;
    createdAt?: string;
    amount?: number;
    updatedAt?: string;
    exchangeRate?: number;
    checkNumber?: string;
    items?: Items[];
    accountId?: string;
    recipient?: Customers;
    refund?: Refunds;
    accountCode?: string;
    creditAmount?: number;
    applicationFee?: number;
    metadata?: Metadata;
    invoiceId?: string;
    description?: string;
    sender?: Customers;
    commonModel?: string;
    contact?: Contacts;
    currency?: Currency;
    tags?: string[];
    status?: FinancialTransactionStatus;
    shippingDetails?: ShippingDetails;
    debitAmount?: number;
    foreignCurrency?: CurrencyDetails;
    isDeleted?: boolean;
    transactionCategory?: TransactionType;
    attachments?: Attachments[];
    paymentMethod?: PaymentMethods;
    transactionMethod?: TransactionMethod;
    type?: FinancialTransactionType;
    taxExempt?: boolean;
    taxAmount?: number;
    paymentIntent?: string;
    orderId?: string;
    billingDetails?: BillingDetails;
    id?: string;
    date?: string }
export interface TransactionDetails { transactionId?: string;
    amount?: number;
    status?: string;
    commonModel?: string }
export interface ToolResultContent { image?: Images;
    text?: string[];
    type?: AiMessagesContentType;
    commonModel?: string }
export interface ToolCalls { modifyToken?: string;
    function?: unknown;
    id?: string;
    commonModel?: string;
    type?: ToolCallType }
export interface TimeSession { closeTime?: string;
    openTime?: string;
    commonModel?: string }
export interface Tickets { tags?: string[];
    title?: string;
    dueDate?: string;
    companyId?: string;
    priority?: SupportTicketPriority;
    description?: string;
    type?: SupportQueryType;
    comments?: Comments[];
    notes?: Notes[];
    modifyToken?: string;
    commonModel?: string;
    reporter?: Contacts;
    status?: IssueLifecycleStatus;
    assignee?: Users;
    admin?: Users;
    createdAt?: string;
    typeId?: string;
    id?: string;
    category?: Categories;
    updatedAt?: string;
    attachments?: Attachments[];
    customFields?: CustomAttributes[] }
export interface Threads { modifyToken?: string;
    lastMessageId?: string;
    tags?: KeyValues[];
    commonModel?: string;
    updatedAt?: string;
    snippet?: string;
    isDeleted?: boolean;
    messages?: Messages[];
    id?: string;
    lastHistoryId?: string;
    createdAt?: string }
export interface Taxes { isActive?: boolean;
    region?: string;
    id?: string;
    category?: string;
    description?: string;
    isTaxable?: boolean;
    type?: TaxType;
    createdAt?: string;
    isDeleted?: boolean;
    jurisdiction?: string;
    code?: string;
    rate?: number;
    commonModel?: string;
    currency?: Currency;
    country?: string;
    amount?: number;
    customFields?: CustomAttributes[];
    updatedAt?: string;
    name?: string }
export interface TaxRates { isActive?: boolean;
    taxType?: string;
    name?: string;
    taxProvider?: string;
    currency?: Currency;
    reportTaxType?: string;
    applicableItems?: string[];
    description?: string;
    region?: string;
    createdAt?: string;
    percentage?: number;
    isCompound?: boolean;
    shippingIncluded?: boolean;
    customFields?: CustomAttributes[];
    isDeleted?: boolean;
    commonModel?: string;
    modifyToken?: string;
    taxComponents?: TaxLines[];
    updatedAt?: string;
    id?: string;
    taxNumber?: string;
    displayRate?: string;
    country?: string }
export interface TaxLines { rate?: number;
    isInclusive?: boolean;
    createdAt?: string;
    isNonRecoverable?: boolean;
    commonModel?: string;
    isActive?: boolean;
    isDeleted?: boolean;
    name?: string;
    taxCode?: string;
    id?: string;
    metadata?: Metadata;
    updatedAt?: string;
    isCompound?: boolean;
    title?: string;
    price?: number }
export interface TaxDetails { isActive?: boolean;
    isTaxIncludedInPrice?: boolean;
    taxRegistrationNumber?: string;
    isDeleted?: boolean;
    jurisdiction?: string;
    details?: string;
    amount?: number;
    id?: string;
    rate?: number;
    region?: string;
    country?: string;
    expirationDate?: string;
    commonModel?: string;
    updatedAt?: string;
    category?: string;
    taxCode?: string;
    name?: string;
    createdAt?: string;
    currency?: Currency;
    effectiveDate?: string }
export interface Tasks { timeLogged?: string;
    commonModel?: string;
    customFields?: CustomAttributes[];
    createdAt?: string;
    comments?: Comments[];
    id?: string;
    priority?: PriorityLevel;
    assignee?: Users;
    attachments?: Attachments[];
    notifications?: Notifications[];
    title?: string;
    dueDate?: string;
    description?: string;
    dueTimezone?: string;
    createdBy?: Users;
    updatedAt?: string;
    parentTaskId?: string;
    dependOnTaskIds?: string[];
    watchers?: Users[];
    repeat?: string;
    modifyToken?: string;
    labels?: string[];
    timeEstimate?: string;
    subTaskIds?: string[];
    status?: TaskStatus;
    relatedToTaskId?: string[];
    completionPercentage?: number }
export interface Tables { name?: string;
    slug?: string;
    id?: string;
    createdAt?: string;
    commonModel?: string;
    region?: string;
    updatedAt?: string;
    description?: string;
    databaseId?: string;
    url?: string;
    expiresIn?: string;
    modifyToken?: string;
    fields?: Attributes[];
    projectId?: string;
    type?: TableType }
export interface Stores { owner?: Users;
    isOperating?: boolean;
    language?: string;
    features?: string[];
    countryCode?: string;
    socialProfiles?: SocialProfiles[];
    name?: string;
    updatedAt?: string;
    email?: string;
    timezone?: string;
    createdAt?: string;
    category?: string;
    description?: string;
    storeArea?: number;
    country?: string;
    websiteUrl?: string;
    latitude?: number;
    relatedStores?: Stores[];
    manager?: Staff;
    address?: Addresses;
    ratings?: RatingsReviews;
    phone?: string;
    currency?: Currency;
    id?: string;
    commonModel?: string;
    businessHours?: BusinessHours[];
    logoUrl?: string;
    longitude?: number;
    paymentMethods?: string[] }
export interface Staff { gender?: string;
    phone?: string;
    id?: string;
    firstName?: string;
    commonModel?: string;
    email?: string;
    photoUrl?: string;
    status?: EmploymentAndCandidateStatus;
    role?: OrganizationalRole;
    lastName?: string;
    dateOfBirth?: string;
    createdAt?: string;
    updatedAt?: string;
    isDeleted?: boolean;
    isActive?: boolean;
    addresses?: Addresses;
    storeID?: string;
    position?: string;
    customFields?: CustomAttributes[] }
export interface Speakers { speakerId?: string;
    name?: string;
    email?: string;
    id?: string;
    userId?: string;
    role?: SpeakerRole;
    title?: string;
    commonModel?: string }
export interface SocialProfiles { username?: string;
    type?: SocialPlatform;
    url?: string;
    avatarUrl?: string;
    commonModel?: string;
    isActive?: boolean;
    displayName?: string;
    isDeleted?: boolean;
    additionalInfo?: Metadata;
    email?: string;
    createdAt?: string;
    updatedAt?: string }
export interface ShippingItem { id?: string;
    weight?: number;
    productId?: string;
    commonModel?: string;
    productName?: string;
    quantity?: number;
    dimensions?: Dimensions;
    value?: number;
    weightUnit?: string;
    sku?: string }
export interface ShippingDetails { address?: Addresses;
    isDeleted?: boolean;
    method?: string;
    trackingNumber?: string;
    createdAt?: string;
    provider?: string;
    price?: number;
    insurance?: boolean;
    estimatedDelivery?: string;
    signatureRequired?: boolean;
    commonModel?: string;
    updatedAt?: string;
    isActive?: boolean }
export interface ShareholderEquityDetails { preferredStock?: number;
    retainedEarnings?: number;
    commonModel?: string;
    accumulatedOtherComprehensiveIncome?: number;
    treasuryStock?: number;
    commonStock?: number }
export interface Sentences { startTime?: string;
    createdAt?: string;
    commonModel?: string;
    modifyToken?: string;
    speakerName?: string;
    sentence?: string;
    updatedAt?: string;
    speakerId?: string;
    endTime?: string;
    id?: string }
export interface Salaries { paymentPeriod?: TimeCycle;
    commonModel?: string;
    value?: number;
    currency?: Currency }
export interface SSO { updatedAt?: string;
    isDeleted?: boolean;
    profileUrl?: string;
    refreshToken?: string;
    createdAt?: string;
    scopes?: string[];
    accessToken?: string;
    providerUserId?: string;
    expiryDate?: string;
    provider?: IdentityProvider;
    tokenType?: string;
    commonModel?: string;
    isActive?: boolean;
    expiresIn?: number }
export interface RevenueDetails { commonModel?: string;
    otherRevenue?: number;
    serviceRevenue?: number;
    salesRevenue?: number }
export interface ResponseFormat { commonModel?: string;
    type?: ResponseFormatType;
    schema?: JsonSchema }
export interface Refunds { createdAt?: string;
    commonModel?: string;
    id?: string;
    status?: TransactionStatus;
    paymentId?: string;
    reason?: string;
    currency?: Currency;
    amount?: number;
    updatedAt?: string;
    modifyToken?: string }
export interface References { phoneNumber?: string;
    email?: string;
    relationship?: string;
    companyName?: string;
    commonModel?: string;
    name?: string;
    position?: string }
export interface Records { entity?: unknown;
    modifyToken?: string;
    id?: string;
    createdAt?: string;
    commonModel?: string;
    updatedAt?: string }
export interface Recordings { commonModel?: string;
    id?: string;
    hostId?: string;
    files?: Attachments[];
    duration?: number;
    modifyToken?: string;
    startTime?: string;
    password?: string;
    participants?: Speakers[];
    createdAt?: string;
    topic?: string;
    accountId?: string;
    description?: string;
    callType?: CallDirection;
    endTime?: string;
    name?: string;
    updatedAt?: string;
    fileSize?: number }
export interface Reactions { type?: ReactionType;
    chatId?: string;
    createdAt?: string;
    commonModel?: string;
    messageId?: string;
    userId?: string }
export interface RatingsReviews { reviewerName?: string;
    isDeleted?: boolean;
    verifiedPurchase?: boolean;
    status?: ReviewApprovalStatus;
    commonModel?: string;
    review?: string;
    locale?: string;
    isActive?: boolean;
    updatedAt?: string;
    id?: string;
    createdAt?: string;
    storeID?: string;
    metadata?: Metadata;
    rating?: number }
export interface PurchaseOrders { taxes?: number;
    total?: number;
    paymentTerms?: string;
    attachments?: Attachments[];
    isDeleted?: boolean;
    shipTo?: Addresses;
    orderNumber?: string;
    isActive?: boolean;
    id?: string;
    vendor?: Vendors;
    currency?: Currency;
    shippingCosts?: number;
    status?: OrderStatus;
    subtotal?: number;
    modifyToken?: string;
    commonModel?: string;
    items?: PurchaseOrderItems[];
    createdAt?: string;
    updatedAt?: string;
    expectedDeliveryDate?: string;
    orderDate?: string;
    accountId?: string;
    billTo?: Addresses;
    notes?: string }
export interface PurchaseOrderItems { discount?: number;
    productId?: string;
    SKU?: string;
    id?: string;
    quantity?: number;
    description?: string;
    deliveryDate?: string;
    totalPrice?: number;
    unitOfMeasure?: string;
    commonModel?: string;
    unitPrice?: number }
export interface Promotions { eligibleItems?: string[];
    currency?: Currency;
    commonModel?: string;
    customerEligibility?: CustomerEligibilityStatus;
    isActive?: boolean;
    termsAndConditions?: string;
    discountValue?: number;
    startDate?: string;
    endDate?: string;
    code?: string;
    updatedAt?: string;
    isDeleted?: boolean;
    createdAt?: string;
    description?: string;
    minimumPurchaseAmount?: number;
    usageLimit?: number;
    type?: PromotionType;
    discountType?: DiscountType;
    limitPerCustomer?: number }
export interface Projects { name?: string;
    createdAt?: string;
    updatedAt?: string;
    friendlyName?: string;
    modifyToken?: string;
    commonModel?: string;
    id?: string }
export interface Products { sku?: string;
    id?: string;
    prices?: Prices[];
    images?: Images[];
    inventoryLocation?: InventoryLocations;
    metaDescription?: string;
    updatedAt?: string;
    variants?: Variants[];
    slug?: string;
    manufacturerName?: string;
    vendor?: string;
    weightUnit?: string;
    description?: string;
    metaTitle?: string;
    options?: ProductOptions[];
    categories?: string[];
    tags?: string[];
    weight?: number;
    inventoryQuantity?: number;
    customFields?: CustomAttributes[];
    isDownloadable?: boolean;
    title?: string;
    relatedProducts?: string[];
    localizations?: Localizations[];
    reference?: Entity;
    code?: string;
    skuValidation?: SkuValidation;
    brand?: Brands;
    createdAt?: string;
    taxes?: Taxes[];
    availableForSale?: boolean;
    commonModel?: string;
    status?: EntityLifecycleStatus;
    downloadFiles?: Attachments[];
    accountIds?: KeyValues[];
    modifyToken?: string;
    seoKeywords?: string[];
    type?: string;
    dimensions?: Dimensions;
    publishedAt?: string }
export interface ProductOptions { productId?: number;
    name?: string;
    createdAt?: string;
    values?: string[];
    commonModel?: string;
    updatedAt?: string;
    id?: string }
export interface Prices { amount?: number;
    type?: string;
    currency?: Currency;
    commonModel?: string }
export interface PriceRules { targetSelection?: TargetSelection;
    excludedCollectionIds?: string[];
    commonModel?: string;
    modifyToken?: string;
    entitledCollectionIds?: string[];
    targetType?: TargetType;
    endDate?: string;
    excludedVariantIds?: string[];
    startDate?: string;
    allocationLimit?: number;
    priority?: number;
    oncePerCustomer?: boolean;
    valueType?: DiscountType;
    prerequisiteSavedSearchIds?: string[];
    allocationMethod?: AllocationMethod;
    prerequisiteCollectionIds?: string[];
    description?: string;
    value?: number;
    prerequisiteVariantIds?: string[];
    currency?: string;
    isActive?: boolean;
    excludedProductIds?: string[];
    prerequisiteCustomerIds?: string[];
    usageLimit?: number;
    isDeleted?: boolean;
    prerequisiteQuantity?: number;
    prerequisiteRanges?: PrerequisiteRanges;
    entitledVariantIds?: string[];
    createdAt?: string;
    id?: string;
    prerequisiteProductIds?: string[];
    entitledProductIds?: string[];
    entitledCountryIds?: string[];
    updatedAt?: string;
    entitledQuantity?: number;
    title?: string;
    customerSelection?: CustomerSelection }
export interface PrerequisiteRanges { type?: PrerequisiteRangeType;
    commonModel?: string;
    greaterThanOrEqualTo?: number;
    lessThanOrEqualTo?: number }
export interface Preferences { timeZone?: string;
    id?: string;
    commonModel?: string;
    language?: string;
    communications?: CommunicationMethod;
    currency?: Currency }
export interface Phones { type?: DeviceUsageType;
    country?: string;
    countryCode?: string;
    commonModel?: string;
    phoneNumber?: string }
export interface Permissions { canView?: string[];
    canDelete?: string[];
    commonModel?: string;
    assigneeDetails?: UserOrGroup;
    identifierType?: UniversalIdentifierType;
    accessControlType?: AccessControlModel;
    roles?: string[];
    canEdit?: string[] }
export interface PerformanceMetrics { returnOnInvestment?: number;
    spend?: number;
    conversionRate?: number;
    conversions?: number;
    impressions?: number;
    clicks?: number;
    costPerConversion?: number;
    commonModel?: string;
    costPerClick?: number }
export interface Payments { id?: string;
    date?: string;
    createdAt?: string;
    notes?: string;
    shippingDetails?: ShippingDetails;
    refund?: Refunds;
    isDeleted?: boolean;
    paymentIntent?: string;
    billingDetails?: BillingDetails;
    invoice?: Invoices;
    updatedAt?: string;
    paymentMethod?: PaymentMethods;
    customer?: Customers;
    cardDetails?: CardDetails;
    receiptEmail?: string;
    paymentCaptureMethod?: string;
    metadata?: Metadata;
    commonModel?: string;
    currency?: Currency;
    transactionId?: string;
    description?: string;
    status?: PaymentStatus;
    orderId?: string;
    modifyToken?: string;
    amount?: number;
    tip?: number;
    webhookUrl?: string;
    isActive?: boolean;
    paymentProcessor?: string;
    journalId?: string }
export interface PaymentTerms { minimumPayment?: number;
    discountRate?: number;
    discountDays?: number;
    allowedMethods?: string[];
    notes?: string;
    penaltyRate?: number;
    isActive?: boolean;
    lastUpdatedDate?: string;
    description?: string;
    currencyFormatting?: string;
    currency?: string;
    isDeleted?: boolean;
    createdDate?: string;
    permittedClientClasses?: string[];
    gracePeriodDays?: number;
    countrySpecificTerms?: string[];
    languageSupport?: string[];
    commonModel?: string;
    dueDays?: number;
    id?: string;
    updatedAt?: string;
    createdAt?: string;
    type?: PaymentTerm;
    interestRate?: number }
export interface PaymentMethods { isDefault?: boolean;
    details?: string;
    commonModel?: string;
    type?: PaymentMethod;
    id?: string }
export interface PaymentDetails { isRefunded?: boolean;
    amount?: number;
    updatedAt?: string;
    createdAt?: string;
    transactionId?: string;
    currency?: Currency;
    paymentGateway?: string;
    commonModel?: string;
    status?: string;
    isActive?: boolean;
    isDeleted?: boolean;
    method?: string;
    billingAddress?: Addresses }
export interface Participants { status?: ParticipantEngagementStatus;
    userId?: string;
    type?: CommunicationRole;
    displayName?: string;
    commonModel?: string;
    joinedAt?: string }
export interface ParentFolders { updatedAt?: string;
    id?: string;
    createdAt?: string;
    name?: string;
    commonModel?: string }
export interface Orders { taxes?: Taxes[];
    paymentMethods?: string[];
    orderNumber?: string;
    shippingId?: string;
    tip?: number;
    status?: OrderStatus;
    storeLocationId?: string;
    shippingMethod?: string;
    customerId?: string;
    createdAt?: string;
    subtotal?: number;
    tax?: number;
    discounts?: Discounts[];
    items?: Items[];
    tags?: string[];
    id?: string;
    total?: number;
    currency?: Currency;
    modifyToken?: string;
    commonModel?: string;
    reference?: Entity;
    shippingAddress?: Addresses;
    billingAddress?: Addresses;
    trackingInfo?: string;
    paymentStatus?: PaymentStatus;
    shippingCost?: number;
    note?: string;
    updatedAt?: string }
export interface Opportunities { lostReason?: string;
    modifyToken?: string;
    amount?: number;
    companyId?: string;
    customFields?: CustomAttributes[];
    isClosed?: boolean;
    tags?: string[];
    isWon?: boolean;
    owner?: Users;
    leadId?: string;
    createdAt?: string;
    nextStep?: string;
    contacts?: Contacts[];
    description?: string;
    entity?: Entity;
    leadSource?: string;
    campaign?: Campaigns;
    attachments?: Attachments[];
    companyName?: string;
    currency?: Currency;
    closeDate?: string;
    notes?: string[];
    updatedAt?: string;
    commonModel?: string;
    id?: string;
    title?: string;
    type?: string;
    stage?: string;
    probability?: number }
export interface OperatingExpensesDetails { commonModel?: string;
    otherOperatingExpenses?: number;
    salesGeneralAndAdministrativeExpenses?: number;
    researchAndDevelopmentExpenses?: number }
export interface Objects { pluralNoun?: string;
    commonModel?: string;
    singularNoun?: string;
    custom?: boolean;
    name?: string;
    createdAt?: string;
    modifyToken?: string;
    slug?: string;
    updatedAt?: string;
    id?: string }
export interface Notifications { isDeleted?: boolean;
    channel?: string;
    createdAt?: string;
    recipient?: Users;
    title?: string;
    updatedAt?: string;
    status?: string;
    isActive?: boolean;
    type?: string;
    customFields?: CustomAttributes[];
    message?: string;
    attachments?: Attachments[];
    commonModel?: string;
    notificationId?: string;
    priority?: PriorityLevel }
export interface Notes { metadata?: string[];
    title?: string;
    visibility?: ContentVisibility;
    id?: string;
    author?: Users;
    priority?: PriorityLevel;
    lastAccessed?: string;
    updatedAt?: string;
    commonModel?: string;
    attachments?: Attachments[];
    reminder?: string;
    modifyToken?: string;
    content?: string;
    tags?: string[];
    url?: string;
    createdAt?: string;
    color?: string;
    sharedWith?: Users[] }
export interface Modifiers { id?: string;
    updatedAt?: string;
    isActive?: boolean;
    isDeleted?: boolean;
    originalPrice?: number;
    quantity?: number;
    groupId?: string;
    currency?: Currency;
    commonModel?: string;
    name?: string;
    createdAt?: string;
    customerNote?: string;
    modifyToken?: string;
    linePrice?: number }
export interface ModifierGroups { commonModel?: string;
    type?: ModifierType;
    modifiers?: Modifiers[];
    name?: string;
    description?: string;
    updatedAt?: string;
    modifyToken?: string;
    id?: string;
    isActive?: boolean;
    isDeleted?: boolean;
    createdAt?: string }
export interface Metadata { valueParsingRequired?: boolean;
    entityId?: string;
    updatedAt?: string;
    commonModel?: string;
    key?: string;
    value?: string;
    id?: string;
    createdAt?: string;
    type?: DataType;
    entityType?: string }
export interface Messages { isActive?: boolean;
    trackingSettings?: KeyValues[];
    cc?: string;
    modifyToken?: string;
    tags?: KeyValues[];
    senderId?: string;
    subject?: string;
    type?: MessageContentType;
    reactions?: Reactions[];
    chatId?: string;
    messageType?: string;
    timestamp?: string;
    commonModel?: string;
    bcc?: string;
    createdAt?: string;
    content?: string;
    metadata?: Metadata[];
    senderEmail?: string;
    attachments?: Attachments[];
    threadId?: string;
    updatedAt?: string;
    recipientEmails?: string[];
    readStatus?: MessageReadStatus;
    historyId?: string;
    priority?: PriorityLevel;
    deliveryStatus?: MessageDeliveryStatus;
    medium?: string;
    templateId?: string;
    id?: string;
    receiverId?: string;
    receiverRoles?: ReceiverRoles[];
    isDeleted?: boolean;
    replyToMessageId?: string;
    reference?: Entity }
export interface Locations { timezone?: string;
    businessHours?: BusinessHours[];
    type?: string;
    currency?: Currency;
    phones?: Phones[];
    merchantId?: string;
    merchantCategoryCode?: string;
    createdAt?: string;
    updatedAt?: string;
    defaultPhoneNumber?: string;
    description?: string;
    numberOfEmployees?: number;
    name?: string;
    tags?: string[];
    id?: string;
    isActive?: boolean;
    customFields?: CustomAttributes[];
    modifyToken?: string;
    locationNumber?: string;
    defaultEmail?: string;
    address?: Addresses;
    website?: string;
    socialProfiles?: SocialProfiles[];
    emails?: Emails[];
    countryCode?: string;
    domain?: string;
    commonModel?: string;
    businessName?: string }
export interface Localizations { metaTitle?: string;
    metaDescription?: string;
    locale?: string;
    description?: string;
    commonModel?: string;
    title?: string }
export interface Leads { leadStatus?: LeadLifecycleStatus;
    emails?: Emails[];
    notes?: Notes[];
    website?: string;
    companyName?: string;
    commonModel?: string;
    id?: string;
    defaultEmail?: string;
    leadSource?: LeadSource;
    entity?: Entity;
    annualRevenue?: number;
    socialProfiles?: SocialProfiles[];
    customFields?: CustomAttributes[];
    addresses?: Addresses[];
    jobTitle?: string;
    modifyToken?: string;
    createdAt?: string;
    name?: string;
    phones?: Phones[];
    numberOfEmployees?: number;
    firstName?: string;
    updatedAt?: string;
    preferredContactMethod?: CommunicationMethod;
    lastName?: string;
    industry?: string;
    companyId?: string;
    defaultPhoneNumber?: string;
    opportunities?: Opportunities[];
    middleName?: string }
export interface LeadSource { sourceId?: string;
    commonModel?: string;
    details?: string;
    sourceName?: string }
export interface KeyValues { commonModel?: string;
    key?: string;
    value?: string }
export interface JsonSchema { schema?: unknown;
    name?: string;
    type?: JsonSchemaType;
    commonModel?: string;
    description?: string;
    strict?: boolean }
export interface JournalEntryLines { debit?: number;
    accountId?: string;
    credit?: number;
    quantity?: number;
    tracking?: FinancialTrackingCategories;
    taxCode?: string;
    commonModel?: string;
    description?: string;
    taxAmount?: number;
    id?: string;
    amount?: number }
export interface JournalEntries { createdBy?: string;
    updatedAt?: string;
    isActive?: boolean;
    currency?: Currency;
    memo?: string;
    description?: string;
    updatedBy?: string;
    isDeleted?: boolean;
    createdAt?: string;
    modifyToken?: string;
    commonModel?: string;
    id?: string;
    name?: string;
    type?: string;
    date?: string;
    exchangeRate?: number;
    entryNumber?: string;
    reference?: string;
    totalAmount?: number;
    isReconciled?: boolean;
    lines?: JournalEntryLines[];
    status?: JournalEntryStatus;
    attachments?: Attachments[] }
export interface Jobs { description?: string;
    industry?: string;
    workFromHome?: boolean;
    location?: Addresses;
    validUntil?: string;
    incentiveCompensation?: string;
    remote?: boolean;
    jobLocationType?: string;
    qualifications?: string;
    jobImmediateStart?: boolean;
    applicationDeadline?: string;
    createdAt?: string;
    baseSalary?: Salaries;
    skills?: string[];
    occupationalCategory?: string;
    id?: string;
    jobShifts?: string[];
    incentives?: string;
    employmentType?: EmploymentType;
    jobFlexibleHours?: boolean;
    jobTrialPeriod?: string;
    languagesSpoken?: string[];
    jobStartDate?: string;
    educationRequirements?: string;
    title?: string;
    company?: Companies;
    responsibilities?: string;
    employmentUnit?: EmploymentUnits;
    jobTrainingProvided?: boolean;
    jobBenefits?: string;
    commonModel?: string;
    workHours?: string;
    modifyToken?: string;
    salaryCurrency?: string;
    benefits?: string[];
    experienceRequirements?: string;
    updatedAt?: string }
export interface Items { originalPrice?: number;
    weight?: number;
    requiresShipping?: boolean;
    createdAt?: string;
    isDeleted?: boolean;
    updatedAt?: string;
    discountLines?: Discounts[];
    isTaxable?: boolean;
    taxLines?: TaxLines[];
    discount?: number;
    parentId?: string;
    shippingId?: string;
    variantId?: string;
    commonModel?: string;
    isActive?: boolean;
    productId?: string;
    variantTitle?: string;
    accountId?: string;
    modifiers?: Modifiers[];
    sku?: string;
    title?: string;
    description?: string;
    image?: Images;
    weightUnit?: string;
    price?: number;
    accountName?: string;
    fulfillableQuantity?: number;
    tax?: number;
    id?: string;
    quantity?: number;
    currency?: Currency;
    discountedPrice?: number;
    linePrice?: number }
export interface Invoices { discountPercentage?: number;
    invoicePayments?: InvoicePayments[];
    paidAmount?: number;
    exchangeRate?: number;
    currency?: Currency;
    commonModel?: string;
    metadata?: Metadata[];
    footer?: string;
    modifyToken?: string;
    invoiceNumber?: string;
    reference?: Entity;
    isActive?: boolean;
    customer?: Customers;
    updatedAt?: string;
    notes?: string;
    subtotal?: number;
    attachments?: Attachments[];
    vatName?: string;
    total?: number;
    status?: PaymentStatus;
    shippingAddress?: Addresses;
    terms?: string;
    id?: string;
    billingAddress?: Addresses;
    items?: InvoiceItems[];
    header?: string;
    createdAt?: string;
    taxTotal?: number;
    vatNumber?: string;
    discountTotal?: number;
    isDeleted?: boolean;
    dueDate?: string;
    paymentTerms?: PaymentTerms;
    issuedDate?: string;
    balanceDue?: number;
    adjustments?: InvoiceAdjustments[];
    transactionDate?: string }
export interface InvoicePayments { date?: string;
    modifyToken?: string;
    commonModel?: string;
    createdAt?: string;
    updatedAt?: string;
    id?: string;
    amount?: number }
export interface InvoiceItems { isbn?: string;
    imageUrl?: string;
    rating?: number;
    deletedAt?: string;
    price?: number;
    weight?: number;
    onSale?: boolean;
    currency?: Currency;
    reviews?: RatingsReviews[];
    sku?: string;
    id?: string;
    modifyToken?: string;
    updatedAt?: string;
    isAvailable?: boolean;
    tags?: string[];
    brand?: string;
    condition?: ItemCondition;
    mpn?: string;
    availabilityDate?: string;
    gallery?: Images[];
    inventoryQuantity?: number;
    inventoryStatus?: ProductAvailabilityStatus;
    customFields?: CustomAttributes[];
    commonModel?: string;
    dimensions?: Dimensions;
    description?: string;
    ean?: string;
    name?: string;
    options?: ProductOptions[];
    ratingCount?: number;
    createdAt?: string;
    isActive?: boolean;
    quantity?: number;
    discount?: number;
    upc?: string;
    variants?: Variants[] }
export interface InvoiceAdjustments { isActive?: boolean;
    commonModel?: string;
    amount?: number;
    createdAt?: string;
    metadata?: Metadata;
    id?: string;
    isDeleted?: boolean;
    type?: InvoiceAdjustmentType;
    currency?: Currency;
    updatedAt?: string;
    appliedToInvoiceItemId?: string;
    description?: string }
export interface InventoryLocations { updatedAt?: string;
    quantity?: number;
    isDeleted?: boolean;
    type?: InventoryStorageType;
    address?: Addresses;
    contactInformation?: Contacts[];
    locationId?: string;
    commonModel?: string;
    operationalHours?: string;
    isActive?: boolean;
    createdAt?: string;
    name?: string }
export interface IncomeTaxExpenseDetails { commonModel?: string;
    taxAllowanceCredit?: number;
    currentIncomeTax?: number;
    deferredIncomeTax?: number }
export interface IncomeStatements { revenue?: RevenueDetails;
    operatingExpenses?: OperatingExpensesDetails;
    incomeTaxExpense?: IncomeTaxExpenseDetails;
    updatedAt?: string;
    netIncome?: number;
    createdAt?: string;
    commonModel?: string;
    profitMargins?: number;
    period?: string;
    costOfGoodsSold?: number;
    grossProfit?: number;
    operatingIncome?: number;
    depreciationAndAmortization?: number;
    id?: string;
    shareholderEquity?: ShareholderEquityDetails;
    accountSummary?: KeyValues[];
    interestExpense?: number;
    ebitda?: number;
    modifyToken?: string;
    exchangeRate?: number;
    currency?: Currency;
    incomeBeforeTax?: number }
export interface Images { updatedAt?: string;
    data?: string;
    altText?: string;
    caption?: string;
    width?: number;
    height?: number;
    createdAt?: string;
    type?: ImageType;
    id?: string;
    commonModel?: string;
    isDeleted?: boolean;
    thumbnailSrc?: string;
    title?: string;
    isActive?: boolean;
    src?: string;
    tags?: string[];
    mimeType?: ImageMimeType }
export interface HiringOrganizations { name?: string;
    industry?: string;
    size?: string;
    commonModel?: string;
    description?: string;
    locations?: Addresses[] }
export interface GiftCards { amountUsed?: number;
    isDeleted?: boolean;
    status?: LifecycleStatus;
    metadata?: string;
    commonModel?: string;
    id?: string;
    expirationDate?: string;
    issuedBy?: string;
    associatedUser?: Users;
    cardNumber?: string;
    currency?: Currency;
    isActive?: boolean;
    updatedAt?: string;
    createdAt?: string;
    balance?: number;
    purchasedBy?: string }
export interface GeoCoordinates { commonModel?: string;
    longitude?: number;
    timestamp?: string;
    latitude?: number;
    accuracy?: number;
    heading?: number;
    altitude?: number;
    speed?: number;
    altitudeAccuracy?: number }
export interface Fulfillments { id?: string;
    totalPrice?: number;
    items?: Items[];
    service?: string;
    orderId?: string;
    currency?: Currency;
    shipmentDate?: string;
    address?: Addresses;
    commonModel?: string;
    receipt?: FulfillmentReceipts;
    notes?: string;
    expectedDelivery?: string;
    fulfillmentItems?: FulfillmentItems[];
    updatedAt?: string;
    status?: FulfillmentStatus;
    trackingNumber?: string;
    trackingUrls?: string[];
    metadata?: Metadata;
    createdAt?: string;
    carrier?: string }
export interface FulfillmentReceipts { isActive?: boolean;
    currency?: Currency;
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    testCase?: boolean;
    paymentMethod?: PaymentMethod;
    status?: OrderStatus;
    amount?: number;
    customer?: Customers;
    fulfillmentId?: string;
    commonModel?: string;
    authorization?: string;
    transactionDetails?: TransactionDetails;
    isDeleted?: boolean }
export interface FulfillmentItems { productId?: string;
    taxable?: boolean;
    updatedAt?: string;
    requiresShipping?: boolean;
    isActive?: boolean;
    imageUrl?: string;
    status?: OrderStatus;
    price?: number;
    createdAt?: string;
    weight?: number;
    variantTitle?: string;
    id?: string;
    orderId?: string;
    fulfillmentId?: string;
    variantId?: string;
    sku?: string;
    title?: string;
    weightUnit?: string;
    customAttributes?: CustomAttributes;
    isDeleted?: boolean;
    commonModel?: string;
    quantity?: number;
    description?: string;
    dimensions?: Dimensions }
export interface Folders { owner?: FileOwners;
    size?: number;
    updatedAt?: string;
    isDownloadable?: boolean;
    id?: string;
    commonModel?: string;
    name?: string;
    parent?: ParentFolders;
    path?: string;
    createdAt?: string;
    modifyToken?: string;
    description?: string;
    permissions?: Permissions }
export interface Files { exportFormats?: string;
    commonModel?: string;
    content?: string;
    id?: string;
    mimeType?: string;
    parent?: ParentFolders;
    updatedAt?: string;
    type?: FileType;
    isExportable?: boolean;
    name?: string;
    isDownloadable?: boolean;
    modifyToken?: string;
    description?: string;
    owner?: FileOwners;
    createdAt?: string;
    extension?: string;
    permissions?: Permissions;
    path?: string;
    size?: number;
    downloadUrl?: string }
export interface FileOwners { updatedAt?: string;
    createdAt?: string;
    id?: string;
    name?: string;
    commonModel?: string;
    email?: string }
export interface Expenses { attachments?: Attachments[];
    tags?: string[];
    id?: string;
    items?: Items[];
    location?: Addresses;
    merchant?: string;
    dateIncurred?: string;
    note?: string;
    createdByUserId?: string;
    updatedAt?: string;
    commonModel?: string;
    receiptUrls?: string[];
    currency?: string;
    status?: ExpenseApprovalStatus;
    approvedByUserId?: string;
    isActive?: boolean;
    accountId?: string;
    transactionId?: string;
    reportId?: string;
    category?: ExpenseCategories;
    isDeleted?: boolean;
    modifyToken?: string;
    amount?: number;
    description?: string;
    paymentMethod?: PaymentMethods;
    customFields?: CustomAttributes[];
    createdAt?: string;
    tax?: Taxes[] }
export interface ExpenseCategories { description?: string;
    name?: string;
    commonModel?: string;
    id?: string }
export interface Evidence { serviceDate?: string;
    shippingAddress?: string;
    shippingDocumentation?: string;
    customerCommunication?: string;
    commonModel?: string;
    cancellationRebuttal?: string;
    customerName?: string;
    customerPurchaseIp?: string;
    productDescription?: string;
    uncategorizedText?: string;
    duplicateChargeDocumentation?: string;
    duplicateChargeExplanation?: string;
    accessActivityLog?: string;
    billingAddress?: string;
    duplicateChargeId?: string;
    refundPolicy?: string;
    refundRefusalExplanation?: string;
    customerSignature?: string;
    serviceDocumentation?: string;
    shippingDate?: string;
    refundPolicyDisclosure?: string;
    customerEmailAddress?: string;
    shippingTrackingNumber?: string;
    shippingCarrier?: string;
    uncategorizedFile?: string;
    cancellationPolicy?: string;
    cancellationPolicyDisclosure?: string;
    receipt?: string }
export interface Events { endDate?: string;
    location?: string;
    modifyToken?: string;
    title?: string;
    organizer?: Users;
    updatedAt?: string;
    link?: string;
    timeZone?: string;
    commonModel?: string;
    rules?: EventRules;
    description?: string;
    status?: EventStatus;
    entryPoints?: EntryPoints[];
    reminders?: EventReminders[];
    recurrence?: EventRecurrences;
    attachments?: Attachments[];
    startDate?: string;
    id?: string;
    attendees?: Users[];
    visibility?: EventVisibility;
    createdAt?: string;
    isDeleted?: boolean }
export interface EventRules { isMultiDay?: boolean;
    locked?: boolean;
    isAllDay?: boolean;
    commonModel?: string;
    canAddSelf?: boolean;
    guestsCanModify?: boolean;
    guestsCanInvite?: boolean }
export interface EventReminders { action?: EventReminderAction;
    minutes?: number;
    commonModel?: string }
export interface EventRecurrences { id?: string;
    commonModel?: string;
    rules?: EventRecurrenceRules[] }
export interface EventRecurrenceRules { count?: number;
    until?: string;
    byMonth?: number;
    byMonthDay?: number;
    byDay?: string;
    id?: string;
    dates?: string[];
    type?: EventRuleType;
    commonModel?: string;
    interval?: number;
    frequency?: EventFrequency }
export interface EntryPoints { uri?: string;
    id?: string;
    pin?: string;
    type?: string;
    name?: string;
    commonModel?: string }
export interface Entity { attributes?: string[];
    value?: string;
    entityId?: string;
    entityType?: EntityCategory;
    commonModel?: string }
export interface EmploymentUnits { commonModel?: string;
    name?: string;
    description?: string }
export interface Emails { email?: string;
    commonModel?: string;
    type?: EmailCategoryType }
export interface Educations { gpa?: number;
    commonModel?: string;
    fieldOfStudy?: string;
    startDate?: string;
    institution?: string;
    endDate?: string;
    degree?: string }
export interface Drives { createdAt?: string;
    id?: string;
    name?: string;
    commonModel?: string;
    updatedAt?: string;
    description?: string }
export interface Drafts { bcc?: string;
    replyToMessageId?: string;
    templateId?: string;
    attachments?: Attachments[];
    trackingSettings?: KeyValues[];
    cc?: string;
    id?: string;
    priority?: PriorityLevel;
    createdAt?: string;
    tags?: KeyValues[];
    updatedAt?: string;
    receiverId?: string;
    commonModel?: string;
    senderId?: string;
    type?: MessageContentType;
    messageId?: string;
    metadata?: Metadata[];
    reference?: Entity;
    threadId?: string;
    timestamp?: string;
    chatId?: string;
    modifyToken?: string;
    content?: string;
    senderEmail?: string;
    recipientEmails?: string[];
    subject?: string }
export interface Disputes { evidence?: Evidence;
    commonModel?: string;
    chargeRefundable?: boolean;
    isDeleted?: boolean;
    id?: string;
    amount?: number;
    status?: FinancialDisputeStatus;
    isActive?: boolean;
    created?: string;
    notes?: string;
    transactionId?: string;
    currency?: Currency;
    version?: string;
    charge?: string;
    updated?: string;
    reason?: string;
    metadata?: Metadata;
    customerId?: string }
export interface Discounts { endDate?: string;
    stackable?: boolean;
    updatedAt?: string;
    startDate?: string;
    description?: string;
    usageLimitExpirations?: UsageLimitExpirations;
    customerEligibility?: CustomerEligibility;
    type?: DiscountType;
    id?: string;
    usageLimit?: number;
    minimumQuantityOfItems?: number;
    currency?: string;
    exclusions?: string[];
    customFields?: CustomAttributes[];
    value?: number;
    usageLimitPerCustomer?: number;
    isActive?: boolean;
    createdAt?: string;
    modifyToken?: string;
    commonModel?: string;
    minimumRequirements?: MinimumRequirements;
    code?: string;
    minimumPurchaseAmount?: number;
    status?: Status;
    timesUsed?: number;
    title?: string;
    channelAvailability?: ChannelAvailability;
    appliesTo?: AppliesTo;
    isDeleted?: boolean }
export interface Dimensions { commonModel?: string;
    height?: number;
    length?: number;
    width?: number }
export interface Databases { modifyToken?: string;
    commonModel?: string;
    projectId?: string;
    tables?: Tables[];
    title?: string;
    url?: string;
    createdAt?: string;
    region?: string;
    organizationId?: string;
    permissionLevel?: string;
    description?: string;
    type?: DatabaseType;
    updatedAt?: string;
    isDeleted?: boolean;
    tablesExpiresIn?: string;
    isActive?: boolean;
    name?: string;
    id?: string }
export interface Customers { customerType?: CustomerType;
    notes?: string;
    phones?: Phones[];
    modifyToken?: string;
    metadata?: string;
    loyaltyProgramMembership?: string;
    source?: string;
    customFields?: CustomAttributes[];
    commonModel?: string;
    customerNumber?: string;
    phoneNumber?: string;
    customerSegment?: string;
    emails?: Emails[];
    fullName?: string;
    reference?: Entity;
    currency?: Currency;
    firstName?: string;
    createdAt?: string;
    title?: string;
    tags?: string[];
    lastName?: string;
    status?: CustomerStatus;
    socialProfiles?: SocialProfiles[];
    addresses?: Addresses[];
    id?: string;
    defaultAddress?: Addresses;
    companyName?: string;
    companyId?: string;
    dateOfBirth?: string;
    jobTitle?: string;
    middleName?: string;
    email?: string;
    updatedAt?: string;
    preferredContactMethod?: CommunicationMethod }
export interface CustomAttributes { fieldValue?: string;
    fieldType?: DataType;
    commonModel?: string;
    id?: string;
    fieldName?: string }
export interface CurrencyDetails { currency?: Currency;
    id?: string;
    value?: number;
    commonModel?: string }
export interface CreditNotes { commonModel?: string;
    isDeleted?: boolean;
    amount?: number;
    currency?: Currency;
    createdAt?: string;
    id?: string;
    adjustment?: number;
    status?: CreditNoteStatus;
    updatedAt?: string;
    lines?: CreditNoteLines[];
    reason?: string;
    modifyToken?: string;
    vatNumber?: string;
    companyId?: string;
    vatName?: string;
    description?: string;
    memo?: string;
    billingAddress?: Addresses;
    customer?: Customers;
    shippingAddress?: Addresses;
    discounts?: number[];
    taxAmount?: number;
    issuedDate?: string;
    isActive?: boolean;
    creditType?: CreditType;
    dueDate?: string;
    number?: string;
    taxRate?: number;
    payments?: Payments[];
    metadata?: Metadata;
    attachments?: Attachments[];
    companyName?: string }
export interface CreditNoteLines { taxRate?: number;
    product?: Products;
    id?: string;
    quantity?: number;
    customFields?: CustomAttributes[];
    account?: string;
    description?: string;
    unitPrice?: number;
    commonModel?: string;
    total?: number }
export interface Conversations { commonModel?: string;
    updatedAt?: string;
    status?: ConversationStatus;
    participants?: Participants[];
    isPinned?: boolean;
    title?: string;
    customFields?: CustomAttributes[];
    messages?: Messages[];
    createdAt?: string;
    id?: string;
    lastReadMessageId?: string;
    comments?: Comments[];
    lastMessage?: Messages;
    isRead?: boolean;
    modifyToken?: string;
    unreadCount?: number;
    type?: ChatType;
    metadata?: string }
export interface Contacts { createdAt?: string;
    updatedAt?: string;
    addresses?: Addresses[];
    tags?: string[];
    commonModel?: string;
    modifyToken?: string;
    lastName?: string;
    phones?: Phones[];
    dateOfBirth?: string;
    companyName?: string;
    defaultPhoneNumber?: string;
    isActive?: boolean;
    socialProfiles?: SocialProfiles[];
    id?: string;
    code?: string;
    relationship?: string;
    firstName?: string;
    companyId?: string;
    defaultEmail?: string;
    note?: string;
    emails?: Emails[];
    leadId?: string;
    userRoles?: UserRoles[];
    address?: Addresses;
    notes?: Notes;
    websites?: string[];
    customFields?: CustomAttributes[] }
export interface Companies { legalName?: string;
    dunsNumber?: string;
    updatedAt?: string;
    companyNumber?: string;
    description?: string;
    id?: string;
    logo?: string;
    type?: string;
    address?: Addresses;
    phones?: Phones[];
    customFields?: CustomAttributes[];
    defaultEmail?: string;
    name?: string;
    incorporationDate?: string;
    revenue?: number;
    tags?: string[];
    domain?: string;
    taxId?: string;
    modifyToken?: string;
    stockSymbol?: string;
    socialProfiles?: SocialProfiles[];
    parentCompanyId?: string;
    createdAt?: string;
    commonModel?: string;
    foundedDate?: string;
    additionalContacts?: Contacts[];
    industry?: string;
    regulatoryStatus?: string;
    defaultPhoneNumber?: string;
    revenueCurrency?: string;
    reference?: Entity;
    emails?: Emails[];
    website?: string;
    incorporationCountry?: string;
    numberOfEmployees?: number }
export interface Comments { likes?: number;
    parentId?: string;
    author?: Users;
    flagged?: boolean;
    metadata?: Metadata[];
    createdAt?: string;
    text?: string;
    isActive?: boolean;
    attachments?: Attachments[];
    isDeleted?: boolean;
    updatedAt?: string;
    commentId?: string;
    commonModel?: string }
export interface Chats { systemMessage?: string;
    tools?: JsonSchema[];
    numberOfCompletions?: number;
    presencePenalty?: number;
    modifyToken?: string;
    commonModel?: string;
    toolChoice?: AiToolChoice;
    objectType?: string;
    model?: string;
    topP?: number;
    stopSequences?: string[];
    enableParallelToolCalls?: boolean;
    id?: string;
    createdAt?: string;
    topK?: number;
    frequencyPenalty?: number;
    seed?: number;
    responseFormat?: ResponseFormat;
    userId?: string;
    logitBias?: unknown;
    systemFingerprint?: string;
    temperature?: number;
    messages?: AiMessages[];
    usage?: AiUsage;
    maxTokens?: number }
export interface Categories { parentId?: string;
    commonModel?: string;
    createdAt?: string;
    tags?: string[];
    id?: string;
    modifyToken?: string;
    name?: string;
    image?: string;
    updatedAt?: string }
export interface Carts { items?: Items[];
    note?: string;
    currency?: Currency;
    giftCards?: GiftCards[];
    promotions?: Promotions[];
    messages?: string[];
    buyerIdentity?: Customers;
    commonModel?: string;
    version?: string;
    state?: OrderStatus;
    attributes?: string[];
    createdAt?: string;
    shippingDetails?: ShippingDetails;
    token?: string;
    originalTotalPrice?: number;
    discountCodes?: string[];
    id?: string;
    paymentDetails?: PaymentDetails;
    updatedAt?: string;
    itemCount?: number;
    totalWeight?: number;
    totalPrice?: number }
export interface CardDetails { commonModel?: string;
    expiryMonth?: string;
    expiryYear?: string;
    type?: CardType;
    cvvStatus?: CvvStatus;
    statementDescription?: string;
    authorizedAt?: string;
    updatedAt?: string;
    fingerprint?: string;
    avcStatus?: AvcStatus;
    isActive?: boolean;
    entryMethod?: EntryMethod;
    brand?: string;
    prepaidType?: PrepaidType;
    bin?: string;
    modifyToken?: string;
    createdAt?: string;
    isDeleted?: boolean;
    capturedAt?: string;
    status?: string;
    lastFour?: string;
    id?: string }
export interface Candidates { createdAt?: string;
    role?: string;
    profilePicture?: Images;
    socialProfiles?: SocialProfiles[];
    skills?: string[];
    certifications?: string[];
    updatedAt?: string;
    modifyToken?: string;
    preferredWorkLocation?: string;
    lastName?: string;
    firstName?: string;
    email?: string;
    jobId?: string;
    commonModel?: string;
    phoneNumber?: string;
    resume?: Attachments;
    languages?: string[];
    educations?: Educations[];
    workExperiences?: WorkExperiences[];
    references?: References[];
    availability?: string;
    websites?: string[];
    id?: string;
    status?: EmploymentAndCandidateStatus;
    customFields?: CustomAttributes[];
    coverLetter?: Attachments;
    notes?: Notes[] }
export interface Campaigns { name?: string;
    status?: CampaignStatus;
    id?: string;
    targetAudience?: string;
    performanceMetrics?: PerformanceMetrics;
    updatedAt?: string;
    budget?: number;
    channels?: string[];
    creativeAssets?: Attachments;
    commonModel?: string;
    tags?: string[];
    type?: CampaignType;
    isDeleted?: boolean;
    startDate?: string;
    endDate?: string;
    createdAt?: string;
    isActive?: boolean }
export interface Calendars { type?: string;
    isDeleted?: boolean;
    location?: string;
    commonModel?: string;
    modifyToken?: string;
    createdAt?: string;
    id?: string;
    title?: string;
    description?: string;
    timeZone?: string;
    updatedAt?: string }
export interface CRMAccounts { accountType?: StakeholderType;
    name?: string;
    rating?: AccountEngagementLevel;
    industry?: string;
    numberOfEmployees?: number;
    website?: string;
    id?: string;
    annualRevenue?: number;
    billingAddress?: Addresses;
    customFields?: CustomAttributes[];
    tags?: string[];
    phone?: string;
    shippingAddress?: Addresses;
    updatedAt?: string;
    status?: AccountStatus;
    ownerId?: string;
    commonModel?: string;
    email?: string;
    createdAt?: string }
export interface BusinessHours { createdAt?: string;
    commonModel?: string;
    sessions?: TimeSession[];
    updatedAt?: string;
    closed?: boolean;
    storeID?: string;
    isActive?: boolean;
    dayOfWeek?: DayOfWeek;
    id?: string;
    isDeleted?: boolean;
    timeZone?: string }
export interface Brands { logo?: string;
    commonModel?: string;
    country?: string;
    website?: string;
    status?: ItemEntityStatus;
    updatedAt?: string;
    established?: string;
    name?: string;
    id?: string;
    createdAt?: string;
    customFields?: CustomAttributes[];
    description?: string }
export interface Bills { amountPaid?: number;
    dueDate?: string;
    isActive?: boolean;
    customFields?: CustomAttributes[];
    updatedAt?: string;
    currency?: string;
    terms?: string;
    modifyToken?: string;
    createdAt?: string;
    invoiceNumber?: string;
    isDeleted?: boolean;
    customer?: Customers;
    id?: string;
    amountRemaining?: number;
    amountDue?: number;
    items?: Items[];
    status?: BillingStatus;
    notes?: string;
    attachments?: Attachments[];
    issueDate?: string;
    vendor?: Vendors;
    commonModel?: string }
export interface BillingDetails { email?: string;
    address?: Addresses;
    additionalAttributes?: CustomAttributes[];
    vatId?: string;
    id?: string;
    isActive?: boolean;
    currency?: Currency;
    updatedAt?: string;
    phoneNumber?: string;
    note?: string;
    defaultPaymentMethod?: PaymentMethods;
    paymentTerms?: PaymentTerm;
    createdAt?: string;
    customerId?: string;
    fullName?: string;
    language?: string;
    isDeleted?: boolean;
    companyName?: string;
    commonModel?: string }
export interface BalanceSheets { currentPortionOfLongTermDebt?: number;
    treasuryStock?: number;
    preferredStock?: number;
    updatedAt?: string;
    otherNonCurrentLiabilities?: number;
    additionalPaidInCapital?: number;
    totalLiabilitiesAndEquity?: number;
    cashAndCashEquivalents?: number;
    otherCurrentAssets?: number;
    inventory?: number;
    commonModel?: string;
    otherNonCurrentAssets?: number;
    totalLiabilities?: number;
    deferredRevenue?: number;
    propertyPlantEquipment?: number;
    stockholdersEquity?: number;
    accountsPayable?: number;
    fixedAssets?: number;
    retainedEarnings?: number;
    notes?: string;
    isActive?: boolean;
    shortTermDebt?: number;
    accumulatedDepreciation?: number;
    otherCurrentLiabilities?: number;
    currentAssets?: number;
    currentLiabilities?: number;
    nonCurrentLiabilities?: number;
    accruedLiabilities?: number;
    id?: string;
    customFields?: CustomAttributes[];
    notesPayable?: number;
    auditInfo?: AuditInformation;
    minorityInterest?: number;
    intangibleAssets?: number;
    equity?: number;
    taxLiabilities?: number;
    nonCurrentAssets?: number;
    totalAssets?: number;
    createdAt?: string;
    isDeleted?: boolean;
    accountSummary?: KeyValues[];
    balanceDate?: string;
    modifyToken?: string;
    longTermDebt?: number;
    shortTermInvestments?: number;
    currency?: Currency;
    commonStock?: number;
    accountsReceivable?: number;
    prepaidExpenses?: number }
export interface AuditInformation { commonModel?: string;
    auditorName?: string;
    auditDate?: string;
    notes?: string;
    auditOpinion?: AuditOpinionType }
export interface Attributes { isRepeated?: boolean;
    isUnique?: boolean;
    createdAt?: string;
    id?: string;
    description?: string;
    updatedAt?: string;
    slug?: string;
    isRequired?: boolean;
    name?: string;
    commonModel?: string;
    dataType?: DataType;
    isNullable?: boolean;
    customTypeDetails?: Metadata[];
    modifyToken?: string }
export interface Attachments { thumbnailUrl?: string;
    previewUrl?: string;
    commonModel?: string;
    fileName?: string;
    url?: string;
    createdAt?: string;
    permissions?: Permissions;
    fileSize?: number;
    updatedAt?: string;
    associatedWith?: Entity;
    id?: string;
    fileType?: string;
    content?: string;
    metadata?: Metadata }
export interface AiUsage { commonModel?: string;
    completionTokens?: number;
    promptTokens?: number;
    totalTokens?: number }
export interface AiToolChoice { type?: AiToolChoiceType;
    commonModel?: string;
    name?: string }
export interface AiMessagesContent { type?: AiMessagesContentType;
    name?: string;
    isError?: boolean;
    commonModel?: string;
    toolUseId?: string;
    id?: string;
    toolResultContent?: ToolResultContent[];
    text?: string;
    modifyToken?: string;
    image?: Images }
export interface AiMessages { refusal?: string;
    commonModel?: string;
    index?: number;
    toolCalls?: ToolCalls[];
    role?: AiRole;
    content?: AiMessagesContent[];
    name?: string;
    finishReason?: string }
export interface Addresses { phoneNumber?: string;
    geoLocation?: GeoCoordinates;
    subdivisionCode?: string;
    addressLine2?: string;
    type?: ContactAddressType;
    countryCode?: string;
    customFields?: CustomAttributes[];
    email?: string;
    name?: string;
    firstName?: string;
    country?: string;
    commonModel?: string;
    middleName?: string;
    postalCode?: string;
    city?: string;
    postalCodeExtension?: string;
    companyName?: string;
    accountId?: string;
    contactId?: string;
    province?: string;
    region?: string;
    id?: string;
    street?: string;
    lastName?: string }
export interface AdditionalCharges { id?: string;
    description?: string;
    type?: FinancialChargeType;
    amount?: number;
    commonModel?: string;
    createdAt?: string;
    updatedAt?: string }
export interface Accounts { isDeleted?: boolean;
    isActive?: boolean;
    transactions?: Transactions[];
    name?: string;
    balance?: number;
    title?: string;
    overdraftProtection?: boolean;
    modifyToken?: string;
    accountNumber?: string;
    commonModel?: string;
    createdAt?: string;
    updatedAt?: string;
    notes?: string;
    currency?: Currency;
    status?: FinancialAccountStatus;
    accountCode?: string;
    taxType?: string;
    owner?: Customers;
    closedAt?: string;
    allowPayments?: boolean;
    description?: string;
    showInExpenses?: boolean;
    accountType?: AccountType;
    id?: string;
    branch?: string;
    interestRate?: number;
    overdraftLimit?: number }
export const enum TargetType { LineItem = 'line-item', ShippingLine = 'shipping-line' }
export const enum TransactionMethod { Mobile = 'mobile', Telephone = 'telephone', Online = 'online', Atm = 'atm', BankBranch = 'bank-branch', Mail = 'mail' }
export const enum AllocationMethod { Across = 'across', Each = 'each' }
export const enum Status { Scheduled = 'scheduled', Active = 'active', Expired = 'expired' }
export const enum ChannelAvailability { InStore = 'in-store', InApp = 'in-app', AllChannels = 'all-channels', Online = 'online' }
export const enum ReceiverRoles { Moderator = 'moderator', User = 'user', Admin = 'admin' }
export const enum AccountType { OtherExpenseHomeOffice = 'other-expense::home-office', OtherExpenseOtherMiscellaneousExpense = 'other-expense::other-miscellaneous-expense', OtherExpenseTaxRoundoffGainOrLoss = 'other-expense::tax-roundoff-gain-or-loss', OtherCurrentLiabilityTradeAndOtherPayables = 'other-current-liability::trade-and-other-payables', OtherIncomeOtherInvestmentIncome = 'other-income::other-investment-income', AssetMoneyMarket = 'asset::money-market', EquityPaidInCapitalOrSurplus = 'equity::paid-in-capital-or-surplus', AssetAllowanceForBadDebts = 'asset::allowance-for-bad-debts', AssetFixedAsset = 'asset::fixed-asset', ExpenseAmortizationExpense = 'expense::amortization-expense', AssetInvestmentUsGovernmentObligations = 'asset::investment-us-government-obligations', AssetGoodwill = 'asset::goodwill', AssetAccumulatedDepreciation = 'asset::accumulated-depreciation', OtherCurrentLiabilityShortTermBorrowings = 'other-current-liability::short-term-borrowings', OtherExpenseRentAndLease = 'other-expense::rent-and-lease', RevenueSalesOfProductIncome = 'revenue::sales-of-product-income', RevenueServiceFeeIncome = 'revenue::service-fee-income', AssetInvestmentMortgageRealEstateLoans = 'asset::investment-mortgage-real-estate-loans', OtherCurrentLiabilityCurrentLiabilities = 'other-current-liability::current-liabilities', ExpenseOtherExternalServices = 'expense::other-external-services', ExpenseBorrowingCost = 'expense::borrowing-cost', RevenueUnappliedCashPaymentIncome = 'revenue::unapplied-cash-payment-income', OtherIncomeTaxExemptInterest = 'other-income::tax-exempt-interest', AssetAssetsAvailableForSale = 'asset::assets-available-for-sale', CostOfGoodsSoldOtherCostsOfServiceCos = 'cost-of-goods-sold::other-costs-of-service-cos', OtherIncomeDividendIncome = 'other-income::dividend-income', LiabilityNotesPayable = 'liability::notes-payable', OtherCurrentLiabilityProvisionsCurrentLiabilities = 'other-current-liability::provisions-current-liabilities', LiabilityLiabilitiesRelatedToAssetsHeldForSale = 'liability::liabilities-related-to-assets-held-for-sale', AssetLoansToOthers = 'asset::loans-to-others', OtherCurrentLiabilityInsurancePayable = 'other-current-liability::insurance-payable', LiabilityGovernmentAndOtherPublicAuthorities = 'liability::government-and-other-public-authorities', OtherExpenseHomeOwnerRentalInsurance = 'other-expense::home-owner-rental-insurance', AssetBalWithGovtAuthorities = 'asset::bal-with-govt-authorities', AssetLongTermInvestments = 'asset::long-term-investments', ExpenseLossOnDiscontinuedOperationsNetOfTax = 'expense::loss-on-discontinued-operations-net-of-tax', ExpenseExtraordinaryCharges = 'expense::extraordinary-charges', ExpenseIncomeTaxExpense = 'expense::income-tax-expense', LiabilityOtherLongTermProvisions = 'liability::other-long-term-provisions', RevenueOperatingGrants = 'revenue::operating-grants', LiabilityShareholderNotesPayable = 'liability::shareholder-notes-payable', AssetPrepaymentsAndAccruedIncome = 'asset::prepayments-and-accrued-income', AssetPrepaidExpenses = 'asset::prepaid-expenses', AssetAssetsInCourseOfConstruction = 'asset::assets-in-course-of-construction', LiabilityOtherLongTermLiabilities = 'liability::other-long-term-liabilities', AssetVehicles = 'asset::vehicles', EquityTreasuryStock = 'equity::treasury-stock', OtherCurrentLiabilityRentsInTrustLiability = 'other-current-liability::rents-in-trust-liability', AssetSecurityDeposits = 'asset::security-deposits', ExpenseCharitableContributions = 'expense::charitable-contributions', LiabilityProvisionForLiabilities = 'liability::provision-for-liabilities', AssetChecking = 'asset::checking', AssetOtherEarMarkedBankAccounts = 'asset::other-ear-marked-bank-accounts', EquityRetainedEarnings = 'equity::retained-earnings', RevenueIncome = 'revenue::income', CostOfGoodsSoldEquipmentRentalCos = 'cost-of-goods-sold::equipment-rental-cos', AssetInvestmentTaxExemptSecurities = 'asset::investment-tax-exempt-securities', OtherCurrentLiabilityDutiesAndTaxes = 'other-current-liability::duties-and-taxes', OtherExpenseAmortization = 'other-expense::amortization', OtherCurrentLiabilityStateLocalIncomeTaxPayable = 'other-current-liability::state-local-income-tax-payable', Asset = 'asset', LiabilityLongTermEmployeeBenefitObligations = 'liability::long-term-employee-benefit-obligations', RevenueSavingsByTaxScheme = 'revenue::savings-by-tax-scheme', AssetOtherAsset = 'asset::other-asset', EquityPartnerContributions = 'equity::partner-contributions', ExpenseTaxesPaid = 'expense::taxes-paid', EquityPreferredStock = 'equity::preferred-stock', ExpenseLegalProfessionalFees = 'expense::legal-professional-fees', EquityPartnerDistributions = 'equity::partner-distributions', AssetAccumulatedDepletion = 'asset::accumulated-depletion', OtherCurrentLiabilityCurrentPortionEmployeeBenefitsObligations = 'other-current-liability::current-portion-employee-benefits-obligations', AssetBuildings = 'asset::buildings', Expense = 'expense', OtherExpenseMortgageInterest = 'other-expense::mortgage-interest', AssetCalledUpShareCapitalNotPaid = 'asset::called-up-share-capital-not-paid', Equity = 'equity', OtherExpenseUtilities = 'other-expense::utilities', ExpenseBadDebts = 'expense::bad-debts', AssetGlobalTaxDeferred = 'asset::global-tax-deferred', OtherExpenseVehicleRepairs = 'other-expense::vehicle-repairs', AssetBank = 'asset::bank', ExpenseCostOfLabor = 'expense::cost-of-labor', EquityDividendDisbursed = 'equity::dividend-disbursed', RevenueDiscountsRefundsGiven = 'revenue::discounts-refunds-given', OtherExpenseExchangeGainOrLoss = 'other-expense::exchange-gain-or-loss', OtherCurrentLiabilityCurrentPortionOfObligationsUnderFinanceLeases = 'other-current-liability::current-portion-of-obligations-under-finance-leases', AssetTradeAndOtherReceivables = 'asset::trade-and-other-receivables', AssetFixedAssetComputers = 'asset::fixed-asset-computers', AssetLoansToStockholders = 'asset::loans-to-stockholders', AssetAssetsHeldForSale = 'asset::assets-held-for-sale', AssetInvestments = 'asset::investments', OtherExpensePenaltiesSettlements = 'other-expense::penalties-settlements', LiabilityAccountsPayable = 'liability::accounts-payable', RevenueOtherCurrentOperatingIncome = 'revenue::other-current-operating-income', OtherExpenseVehicleRegistration = 'other-expense::vehicle-registration', AssetCashAndCashEquivalents = 'asset::cash-and-cash-equivalents', AssetProvisionsNonCurrentAssets = 'asset::provisions-non-current-assets', EquityShareApplicationMoneyPendingAllotment = 'equity::share-application-money-pending-allotment', AssetIntangibleAssetsUnderDevelopment = 'asset::intangible-assets-under-development', OtherIncomeGainLossOnSaleOfFixedAssets = 'other-income::gain-loss-on-sale-of-fixed-assets', EquityHealthcare = 'equity::healthcare', ExpenseSuppliesMaterials = 'expense::supplies-materials', LiabilityLongTermDebit = 'liability::long-term-debit', AssetOtherIntangibleAssets = 'asset::other-intangible-assets', OtherCurrentLiabilitySalesTaxPayable = 'other-current-liability::sales-tax-payable', AssetLandAsset = 'asset::land-asset', AssetGlobalTaxRefund = 'asset::global-tax-refund', OtherCurrentLiabilityStaffAndRelatedLiabilityAccounts = 'other-current-liability::staff-and-related-liability-accounts', ExpenseInsurance = 'expense::insurance', AssetFixedAssetCopiers = 'asset::fixed-asset-copiers', AssetLand = 'asset::land', ExpenseEquipmentRental = 'expense::equipment-rental', ExpenseOtherCurrentOperatingCharges = 'expense::other-current-operating-charges', RevenueOwnWorkCapitalized = 'revenue::own-work-capitalized', OtherCurrentLiabilityInterestPayables = 'other-current-liability::interest-payables', EquityPersonalIncome = 'equity::personal-income', AssetIntangibleAssets = 'asset::intangible-assets', OtherCurrentLiabilityGlobalTaxPayable = 'other-current-liability::global-tax-payable', CostOfGoodsSoldShippingFreightDeliveryCos = 'cost-of-goods-sold::shipping-freight-delivery-cos', ExpenseInterestPaid = 'expense::interest-paid', OtherIncomeGainLossOnSaleOfInvestments = 'other-income::gain-loss-on-sale-of-investments', EquityCommonStock = 'equity::common-stock', OtherCurrentLiabilityLineOfCredit = 'other-current-liability::line-of-credit', OtherCurrentLiabilityDirectDepositPayable = 'other-current-liability::direct-deposit-payable', AssetOtherCurrentAsset = 'asset::other-current-asset', ExpenseAuto = 'expense::auto', OtherCurrentLiabilityAccruedLiabilities = 'other-current-liability::accrued-liabilities', OtherExpenseOtherHomeOfficeExpenses = 'other-expense::other-home-office-expenses', LiabilityLongTermBorrowings = 'liability::long-term-borrowings', RevenueCashReceiptIncome = 'revenue::cash-receipt-income', ExpenseTravelMeals = 'expense::travel-meals', ExpenseTravelExpensesSellingExpense = 'expense::travel-expenses-selling-expense', CostOfGoodsSoldCostOfSales = 'cost-of-goods-sold::cost-of-sales', ExpenseOtherSellingExpenses = 'expense::other-selling-expenses', CostOfGoodsSoldCostOfLaborCos = 'cost-of-goods-sold::cost-of-labor-cos', AssetOtherConsumables = 'asset::other-consumables', ExpenseOtherRentalCosts = 'expense::other-rental-costs', AssetLoansToOfficers = 'asset::loans-to-officers', ExpenseEntertainment = 'expense::entertainment', EquityEquityInEarningsOfSubsidiuaries = 'equity::equity-in-earnings-of-subsidiuaries', LiabilityAccruedVacationPayable = 'liability::accrued-vacation-payable', OtherExpenseDepletion = 'other-expense::depletion', OtherCurrentLiabilityLoanPayable = 'other-current-liability::loan-payable', AssetInvestmentOther = 'asset::investment-other', LiabilityLongTermLiability = 'liability::long-term-liability', OtherCurrentLiabilityGlobalTaxSuspense = 'other-current-liability::global-tax-suspense', OtherCurrentLiability = 'other-current-liability', AssetMachineryAndEquipment = 'asset::machinery-and-equipment', ExpensePromotionalMeals = 'expense::promotional-meals', OtherIncomeLossOnDisposalOfAssets = 'other-income::loss-on-disposal-of-assets', AssetOtherCurrentAssets = 'asset::other-current-assets', OtherIncome = 'other-income', OtherIncomeUnrealisedLossOnSecuritiesNetOfTax = 'other-income::unrealised-loss-on-securities-net-of-tax', RevenueSalesWholesale = 'revenue::sales-wholesale', RevenueNonProfitIncome = 'revenue::non-profit-income', EquityOwnersEquity = 'equity::owners-equity', ExpenseOfficeGeneralAdministrativeExpenses = 'expense::office-general-administrative-expenses', LiabilityGroupAndAssociates = 'liability::group-and-associates', AssetLicenses = 'asset::licenses', AssetInternalTransfers = 'asset::internal-transfers', OtherExpenseIncomeTaxOtherExpense = 'other-expense::income-tax-other-expense', LiabilityDeferredTaxLiabilities = 'liability::deferred-tax-liabilities', OtherExpenseOtherVehicleExpenses = 'other-expense::other-vehicle-expenses', CostOfGoodsSold = 'cost-of-goods-sold', ExpenseStaffCosts = 'expense::staff-costs', LiabilityProvisionsNonCurrentLiabilities = 'liability::provisions-non-current-liabilities', RevenueSalesRetail = 'revenue::sales-retail', AssetFixedAssetPhone = 'asset::fixed-asset-phone', AccountsReceivable = 'accounts-receivable', AssetCumulativeDepreciationOnIntangibleAssets = 'asset::cumulative-depreciation-on-intangible-assets', OtherExpenseRepairsAndMaintenance = 'other-expense::repairs-and-maintenance', EquityMoneyReceivedAgainstShareWarrants = 'equity::money-received-against-share-warrants', OtherIncomeOtherOperatingIncome = 'other-income::other-operating-income', LiabilityBankLoans = 'liability::bank-loans', OtherExpenseMatCredit = 'other-expense::mat-credit', AssetOrganizationalCosts = 'asset::organizational-costs', ExpenseExternalServices = 'expense::external-services', OtherExpenseVehicleLoan = 'other-expense::vehicle-loan', ExpenseRentOrLeaseOfBuildings = 'expense::rent-or-lease-of-buildings', ExpenseSundry = 'expense::sundry', ExpenseTravel = 'expense::travel', OtherCurrentLiabilityPayrollClearing = 'other-current-liability::payroll-clearing', EquityOpeningBalanceEquity = 'equity::opening-balance-equity', AssetDevelopmentCosts = 'asset::development-costs', ExpenseManagementCompensation = 'expense::management-compensation', CostOfGoodsSoldFreightAndDeliveryCost = 'cost-of-goods-sold::freight-and-delivery-cost', AssetInventory = 'asset::inventory', EquityPersonalExpense = 'equity::personal-expense', ExpenseBankCharges = 'expense::bank-charges', ExpensePenaltiesSettlements = 'expense::penalties-settlements', AssetSavings = 'asset::savings', OtherCurrentLiabilitySundryDebtorsAndCreditors = 'other-current-liability::sundry-debtors-and-creditors', Liability = 'liability', ExpenseEntertainmentMeals = 'expense::entertainment-meals', OtherCurrentLiabilitySocialSecurityAgencies = 'other-current-liability::social-security-agencies', LiabilityDebtsRelatedToParticipatingInterests = 'liability::debts-related-to-participating-interests', ExpenseOtherBusinessExpenses = 'expense::other-business-expenses', AssetNonCurrentAssets = 'asset::non-current-assets', EquityInvestmentGrants = 'equity::investment-grants', OtherExpenseVehicleLoanInterest = 'other-expense::vehicle-loan-interest', CostOfGoodsSoldSuppliesMaterialsCogs = 'cost-of-goods-sold::supplies-materials-cogs', ExpenseDistributionCosts = 'expense::distribution-costs', AssetFixedAssetPhotoVideo = 'asset::fixed-asset-photo-video', ExpenseShippingAndDeliveryExpense = 'expense::shipping-and-delivery-expense', OtherIncomeInterestEarned = 'other-income::interest-earned', AssetEmployeeCashAdvances = 'asset::employee-cash-advances', AssetTrustAccounts = 'asset::trust-accounts', ExpenseDuesSubscriptions = 'expense::dues-subscriptions', OtherCurrentLiabilityCurrentTaxLiability = 'other-current-liability::current-tax-liability', EquityAccumulatedOtherComprehensiveIncome = 'equity::accumulated-other-comprehensive-income', AssetRentsHeldInTrust = 'asset::rents-held-in-trust', AssetShortTermInvestmentsInRelatedParties = 'asset::short-term-investments-in-related-parties', EquityOtherFreeReserves = 'equity::other-free-reserves', LiabilityCreditCard = 'liability::credit-card', ExpensePurchasesRebates = 'expense::purchases-rebates', AssetOtherLongTermAssets = 'asset::other-long-term-assets', ExpenseTravelExpensesGeneralAndAdminExpenses = 'expense::travel-expenses-general-and-admin-expenses', LiabilityObligationsUnderFinanceLeases = 'liability::obligations-under-finance-leases', OtherCurrentLiabilityDividendsPayable = 'other-current-liability::dividends-payable', OtherCurrentLiabilityTrustAccountsLiabilities = 'other-current-liability::trust-accounts-liabilities', EquityAccumulatedAdjustment = 'equity::accumulated-adjustment', AssetRetainage = 'asset::retainage', LiabilityStaffAndRelatedLongTermLiabilityAccounts = 'liability::staff-and-related-long-term-liability-accounts', ExpenseShippingFreightDelivery = 'expense::shipping-freight-delivery', OtherCurrentLiabilityPrepaidExpensesPayable = 'other-current-liability::prepaid-expenses-payable', AssetLeaseBuyout = 'asset::lease-buyout', AssetDepletableAssets = 'asset::depletable-assets', ExpenseOtherMiscellaneousServiceCost = 'expense::other-miscellaneous-service-cost', OtherExpense = 'other-expense', EquityPartnersEquity = 'equity::partners-equity', AssetProvisionsCurrentAssets = 'asset::provisions-current-assets', ExpenseRepairMaintenance = 'expense::repair-maintenance', AssetExpenditureAuthorisationsAndLettersOfCredit = 'asset::expenditure-authorisations-and-letters-of-credit', AssetLongTermLoansAndAdvancesToRelatedParties = 'asset::long-term-loans-and-advances-to-related-parties', AssetShortTermLoansAndAdvancesToRelatedParties = 'asset::short-term-loans-and-advances-to-related-parties', OtherExpenseExtraordinaryItems = 'other-expense::extraordinary-items', RevenueRevenueGeneral = 'revenue::revenue-general', ExpensePayrollExpenses = 'expense::payroll-expenses', OtherExpenseDepreciation = 'other-expense::depreciation', OtherCurrentLiabilityPayrollTaxPayable = 'other-current-liability::payroll-tax-payable', ExpenseAdvertisingPromotional = 'expense::advertising-promotional', AssetLeaseholdImprovements = 'asset::leasehold-improvements', LiabilityAccruedLongTermLiabilities = 'liability::accrued-long-term-liabilities', AssetAccumulatedAmortizationOfOtherAssets = 'asset::accumulated-amortization-of-other-assets', EquityEstimatedTaxes = 'equity::estimated-taxes', ExpenseCommissionsAndFees = 'expense::commissions-and-fees', ExpenseAppropriationsToDepreciation = 'expense::appropriations-to-depreciation', OtherCurrentLiabilityProvisionForWarrantyObligations = 'other-current-liability::provision-for-warranty-obligations', OtherExpenseExceptionalItems = 'other-expense::exceptional-items', OtherExpensePriorPeriodItems = 'other-expense::prior-period-items', AssetOtherFixedAssets = 'asset::other-fixed-assets', ExpenseProjectStudiesSurveysAssessments = 'expense::project-studies-surveys-assessments', OtherExpenseDeferredTaxExpense = 'other-expense::deferred-tax-expense', AssetDeferredTax = 'asset::deferred-tax', AssetFurnitureAndFixtures = 'asset::furniture-and-fixtures', AssetAccumulatedAmortization = 'asset::accumulated-amortization', AssetOtherLongTermInvestments = 'asset::other-long-term-investments', ExpenseUnappliedCashBillPaymentExpense = 'expense::unapplied-cash-bill-payment-expense', LiabilityOutstandingDuesMicroSmallEnterprise = 'liability::outstanding-dues-micro-small-enterprise', AssetCashOnHand = 'asset::cash-on-hand', ExpenseUtilities = 'expense::utilities', AssetCapitalWip = 'asset::capital-wip', AssetFixedAssetFurniture = 'asset::fixed-asset-furniture', EquityShareCapital = 'equity::share-capital', OtherCurrentLiabilityFederalIncomeTaxPayable = 'other-current-liability::federal-income-tax-payable', AssetOtherLongTermLoansAndAdvances = 'asset::other-long-term-loans-and-advances', AssetFixedAssetOtherToolsEquipment = 'asset::fixed-asset-other-tools-equipment', EquityFunds = 'equity::funds', Income = 'income', LiabilityOutstandingDuesOtherThanMicroSmallEnterprise = 'liability::outstanding-dues-other-than-micro-small-enterprise', OtherCurrentLiabilityOtherCurrentLiabilities = 'other-current-liability::other-current-liabilities', OtherExpenseGasAndFuel = 'other-expense::gas-and-fuel', OtherExpenseVehicleLease = 'other-expense::vehicle-lease', ExpenseOfficeExpenses = 'expense::office-expenses', OtherExpenseParkingAndTolls = 'other-expense::parking-and-tolls', OtherExpenseVehicleInsurance = 'other-expense::vehicle-insurance', OtherExpenseVehicle = 'other-expense::vehicle', OtherIncomeOtherMiscellaneousIncome = 'other-income::other-miscellaneous-income', OtherExpenseWashAndRoadServices = 'other-expense::wash-and-road-services', ExpenseGlobalTaxExpense = 'expense::global-tax-expense', RevenueOtherPrimaryIncome = 'revenue::other-primary-income', AssetAvailableForSaleFinancialAssets = 'asset::available-for-sale-financial-assets', AssetParticipatingInterests = 'asset::participating-interests', EquityCalledUpShareCapital = 'equity::called-up-share-capital', AssetUndepositedFunds = 'asset::undeposited-funds', ExpenseFinanceCosts = 'expense::finance-costs', LiabilityAccrualsAndDeferredIncome = 'liability::accruals-and-deferred-income', EquityCapitalReserves = 'equity::capital-reserves', AssetProvisionsFixedAssets = 'asset::provisions-fixed-assets', AssetFixedAssetSoftware = 'asset::fixed-asset-software' }
export const enum Format { Json = 'json', Xml = 'xml' }
export const enum MinimumRequirements { MinimumPurchaseAmount = 'minimum-purchase-amount', MinimumQuantityOfItems = 'minimum-quantity-of-items', None = 'none' }
export const enum TargetSelection { All = 'all', Entitled = 'entitled' }
export const enum SkuValidation { None = 'none', GlobalUnique = 'global-unique', LocalUnique = 'local-unique' }
export const enum Gender { Male = 'male', Other = 'other', PreferNotToSay = 'prefer not to say', Female = 'female' }
export const enum AppliesTo { AllItems = 'all-items', SpecificItems = 'specific-items', SpecificCategories = 'specific-categories' }
export const enum Roles { Admin = 'admin', Moderator = 'moderator', User = 'user' }
export const enum CustomerSelection { All = 'all', Prerequisite = 'prerequisite' }
export const enum CustomerEligibility { SpecificCustomerGroups = 'specific-customer-groups', All = 'all', SpecificCustomers = 'specific-customers' }
export const enum UserRoles { Admin = 'admin', Moderator = 'moderator', User = 'user' }
export const enum VisibilityScope { Global = 'global', App = 'app', Web = 'web', Private = 'private', Internal = 'internal' }
export const enum UserStatus { Inactive = 'inactive', Banned = 'banned', Deleted = 'deleted', Verified = 'verified', Archived = 'archived', WaitListed = 'wait-listed', Active = 'active', Pending = 'pending', Suspended = 'suspended' }
export const enum UniversalIdentifierType { Email = 'email', Url = 'url', Number = 'number', String = 'string', Uuid = 'uuid' }
export const enum TransactionType { Fee = 'fee', Transfer = 'transfer', Withdrawal = 'withdrawal', Refund = 'refund', Payment = 'payment', Deposit = 'deposit', Charge = 'charge', Adjustment = 'adjustment' }
export const enum TransactionStatus { InProgress = 'in-progress', Succeeded = 'succeeded', Cancelled = 'cancelled', Error = 'error', Failed = 'failed', Initiated = 'initiated', Pending = 'pending' }
export const enum TransactionChannel { Mail = 'mail', Mobile = 'mobile', BankBranch = 'bank-branch', Telephone = 'telephone', Atm = 'atm', Online = 'online', InPerson = 'in-person', Other = 'other' }
export const enum ToolCallType { Function = 'function' }
export const enum TimeCycle { Monthly = 'monthly', Annually = 'annually', SemiAnnually = 'semi-annually', Secondly = 'secondly', Daily = 'daily', Weekly = 'weekly', Biennially = 'biennially', Quarterly = 'quarterly', Custom = 'custom', Minutely = 'minutely', Biweekly = 'biweekly', SemiMonthly = 'semi-monthly', AdHoc = 'ad-hoc', Triennially = 'triennially', Hourly = 'hourly' }
export const enum TaxType { Inclusive = 'inclusive', Additive = 'additive', Variable = 'variable' }
export const enum TaskStatus { Blocked = 'blocked', OnHold = 'on-hold', Done = 'done', InProgress = 'in-progress', Cancelled = 'cancelled', Todo = 'todo' }
export const enum TableType { Snapshot = 'snapshot', Table = 'table', View = 'view', External = 'external', MaterializedView = 'materialized-view' }
export const enum SupportTicketPriority { Immediate = 'immediate', Medium = 'medium', Low = 'low', Urgent = 'urgent', High = 'high' }
export const enum SupportQueryType { Task = 'task', Feedback = 'feedback', FeatureRequest = 'feature-request', Question = 'question', Bug = 'bug', Problem = 'problem', Incident = 'incident' }
export const enum StakeholderType { Other = 'other', Partner = 'partner', Vendor = 'vendor', Customer = 'customer', Competitor = 'competitor', Investor = 'investor' }
export const enum SpeakerRole { Invitee = 'invitee', Attendee = 'attendee' }
export const enum SocialPlatform { OtherSocialPlatform = 'other-social-platform', Snapchat = 'snapchat', Reddit = 'reddit', X = 'x', Twitter = 'twitter', Pinterest = 'pinterest', Tumblr = 'tumblr', Facebook = 'facebook', Linkedin = 'linkedin', Tiktok = 'tiktok', Instagram = 'instagram', Youtube = 'youtube', Skype = 'skype' }
export const enum ReviewApprovalStatus { InReview = 'in-review', Rejected = 'rejected', Revised = 'revised', Approved = 'approved', Pending = 'pending' }
export const enum ResponseFormatType { Text = 'text', JsonObject = 'json-object', JsonSchema = 'json-schema' }
export const enum ReactionType { Love = 'love', Laugh = 'laugh', Interested = 'interested', Like = 'like', Dislike = 'dislike', Sad = 'sad', Angry = 'angry', Bookmark = 'bookmark', Wow = 'wow' }
export const enum PromotionType { RewardPoints = 'reward-points', Other = 'other', Percentage = 'percentage', BuyOneGetOne = 'buy-one-get-one', FreeShipping = 'free-shipping', FixedAmount = 'fixed-amount' }
export const enum ProductAvailabilityStatus { InStock = 'in-stock', BackOrder = 'back-order', Discontinued = 'discontinued', OutOfStock = 'out-of-stock', PreOrder = 'pre-order' }
export const enum PriorityLevel { Low = 'low', Elevated = 'elevated', Urgent = 'urgent', High = 'high', Medium = 'medium' }
export const enum PrerequisiteRangeType { Subtotal = 'subtotal', Quantity = 'quantity', ShippingPrice = 'shipping-price' }
export const enum PrepaidType { Prepaid = 'prepaid', NotPrepaid = 'not-prepaid', UnknownPrepaid = 'unknown-prepaid' }
export const enum PaymentTerm { UponCompletion = 'upon-completion', Net60 = 'net-60', Net30 = 'net-30', CashOnDelivery = 'cash-on-delivery', DueEndOfMonth = 'due-end-of-month', Prepaid = 'prepaid', Installment = 'installment', Custom = 'custom', Net90 = 'net-90', Net = 'net', CashBeforeShipment = 'cash-before-shipment', DueOnReceipt = 'due-on-receipt', CashWithOrder = 'cash-with-order', CashInAdvance = 'cash-in-advance', DeferredPayment = 'deferred-payment', Prepayment = 'prepayment' }
export const enum PaymentStatus { Error = 'error', Overdue = 'overdue', Authorized = 'authorized', Voided = 'voided', Failed = 'failed', Adjusted = 'adjusted', Draft = 'draft', Partial = 'partial', PartiallyRefunded = 'partially-refunded', Disputed = 'disputed', Paid = 'paid', Refunded = 'refunded', Succeeded = 'succeeded', Deleted = 'deleted', Pending = 'pending', Submitted = 'submitted', Cancelled = 'cancelled', Processing = 'processing' }
export const enum PaymentMethod { Paypal = 'paypal', Check = 'check', Cryptocurrency = 'cryptocurrency', BankTransfer = 'bank-transfer', CashOnDelivery = 'cash-on-delivery', CreditCard = 'credit-card', DebitCard = 'debit-card', MobilePayment = 'mobile-payment', MobileWallet = 'mobile-wallet', Other = 'other', Cash = 'cash' }
export const enum ParticipantType { ExternalParticipant = 'external-participant', Organization = 'organization', Group = 'group', User = 'user', Team = 'team' }
export const enum ParticipantEngagementStatus { Admin = 'admin', Active = 'active', Banned = 'banned', Left = 'left', Guest = 'guest', Inactive = 'inactive', Moderator = 'moderator' }
export const enum OrganizationalRole { Manager = 'manager', Employee = 'employee', Admin = 'admin', Supervisor = 'supervisor', Contractor = 'contractor', Other = 'other', Director = 'director' }
export const enum OrderingCriteria { Relevance = 'relevance', Manual = 'manual', CreationDate = 'creation-date', PriceAscending = 'price-ascending', PriceDescending = 'price-descending', Popularity = 'popularity', Rating = 'rating', Alphabetical = 'alphabetical' }
export const enum OrderStatus { OnHold = 'on-hold', Cancelled = 'cancelled', Shipped = 'shipped', Failed = 'failed', Processing = 'processing', AwaitingShipment = 'awaiting-shipment', Pending = 'pending', Draft = 'draft', Disputed = 'disputed', Returned = 'returned', Confirmed = 'confirmed', AwaitingPickup = 'awaiting-pickup', PartiallyFulfilled = 'partially-fulfilled', AwaitingPayment = 'awaiting-payment', Refunded = 'refunded', Abandoned = 'abandoned', Delivered = 'delivered', Completed = 'completed' }
export const enum ModifierType { List = 'list', Text = 'text' }
export const enum MimeType { ImageGif = 'image/gif', ImageSvgXml = 'image/svg+xml', ImagePng = 'image/png', ImageWebp = 'image/webp', ImageJpeg = 'image/jpeg' }
export const enum MessageReadStatus { Sent = 'sent', Unsent = 'unsent', Delivered = 'delivered', Read = 'read', Failed = 'failed' }
export const enum MessageDeliveryStatus { Sent = 'sent', Read = 'read', Undeliverable = 'undeliverable', Delivered = 'delivered', Pending = 'pending', Error = 'error', Failed = 'failed' }
export const enum MessageContentType { Image = 'image', Link = 'link', Voice = 'voice', Html = 'html', Document = 'document', Video = 'video', Location = 'location', File = 'file', Sticker = 'sticker', Contact = 'contact', Audio = 'audio', Text = 'text', Gif = 'gif' }
export const enum LifecycleStatus { Issued = 'issued', Active = 'active', Cancelled = 'cancelled', Redeemed = 'redeemed', Expired = 'expired', Suspended = 'suspended' }
export const enum LeadLifecycleStatus { New = 'new', Open = 'open', InProcess = 'in-process', Connected = 'connected', Lost = 'lost', AttemptedToContact = 'attempted-to-contact', BadTiming = 'bad-timing', Revisited = 'revisited', Converted = 'converted', Unqualified = 'unqualified' }
export const enum JsonSchemaType { Function = 'function' }
export const enum JournalEntryStatus { Posted = 'posted', Draft = 'draft', Voided = 'voided', Error = 'error', Pending = 'pending', Corrected = 'corrected' }
export const enum ItemEntityStatus { Completed = 'completed', Active = 'active', Inactive = 'inactive', Suspended = 'suspended', Archived = 'archived', Deleted = 'deleted', Pending = 'pending' }
export const enum ItemCondition { New = 'new', Damaged = 'damaged', Used = 'used', Refurbished = 'refurbished', OpenBox = 'open-box', LikeNew = 'like-new' }
export const enum ItemAvailabilityStatus { Active = 'active', OutOfStock = 'out-of-stock', Inactive = 'inactive', Discontinued = 'discontinued' }
export const enum IssueLifecycleStatus { Closed = 'closed', InProgress = 'in-progress', OnHold = 'on-hold', Resolved = 'resolved', Cancelled = 'cancelled', Open = 'open', Waiting = 'waiting', Pending = 'pending' }
export const enum InvoiceAdjustmentType { Other = 'other', Tip = 'tip', Shipping = 'shipping', Discount = 'discount', Tax = 'tax' }
export const enum InventoryStorageType { Warehouse = 'warehouse', DistributionCenter = 'distribution-center', OnlineMarketplace = 'online-marketplace', RetailStore = 'retail-store', DropShipper = 'drop-shipper', Consignment = 'consignment', Other = 'other' }
export const enum ImageType { Base64 = 'base64' }
export const enum ImageMimeType { ImageSvgXml = 'image/svg+xml', ImageWebp = 'image/webp', ImageBmp = 'image/bmp', ImageTiff = 'image/tiff', ImageHeic = 'image/heic', ImageGif = 'image/gif', ImagePng = 'image/png', ImageJpeg = 'image/jpeg' }
export const enum IdentityProvider { Twitter = 'twitter', Dribbble = 'dribbble', Wechat = 'wechat', Linkedin = 'linkedin', Vimeo = 'vimeo', Foursquare = 'foursquare', Telegram = 'telegram', Paypal = 'paypal', Pinterest = 'pinterest', Facebook = 'facebook', Behance = 'behance', Other = 'other', Discord = 'discord', Github = 'github', Amazon = 'amazon', Whatsapp = 'whatsapp', Yahoo = 'yahoo', Snapchat = 'snapchat', Microsoft = 'microsoft', Signal = 'signal', Apple = 'apple', Tiktok = 'tiktok', Flickr = 'flickr', Line = 'line', Google = 'google', Reddit = 'reddit', Slack = 'slack', Tumblr = 'tumblr', Instagram = 'instagram', Qq = 'qq' }
export const enum GlobalTaxType { CustomsDuty = 'customs-duty', Gst = 'gst', Vat = 'vat', SalesTax = 'sales-tax', ExciseTax = 'excise-tax', PropertyTax = 'property-tax', Other = 'other' }
export const enum GenderIdentity { Male = 'male', Other = 'other', PreferNotToSay = 'prefer-not-to-say', Female = 'female' }
export const enum FulfillmentStatus { Delivered = 'delivered', InTransit = 'in-transit', Failure = 'failure', Returned = 'returned', Pending = 'pending', Cancelled = 'cancelled' }
export const enum FinancialTransactionType { Spend = 'spend', SpendPrepayment = 'spend-prepayment', Payment = 'payment', SpendOverpayment = 'spend-overpayment', Withdrawal = 'withdrawal', Fee = 'fee', Dividend = 'dividend', Sale = 'sale', ReceivePrepayment = 'receive-prepayment', Deposit = 'deposit', Charge = 'charge', Receive = 'receive', Other = 'other', Chargeback = 'chargeback', Interest = 'interest', ReceiveOverpayment = 'receive-overpayment', Adjustment = 'adjustment', Refund = 'refund', Transfer = 'transfer' }
export const enum FinancialTransactionStatus { Authorized = 'authorized', Cleared = 'cleared', Cancelled = 'cancelled', Disputed = 'disputed', Pending = 'pending', Failed = 'failed', SettlementInProgress = 'settlement-in-progress', Refunded = 'refunded' }
export const enum FinancialTrackingCategories { CostCenter = 'cost-center', Customer = 'customer', Product = 'product', None = 'none', Vendor = 'vendor', Other = 'other', Location = 'location', Service = 'service', Class = 'class', Project = 'project', Department = 'department', Division = 'division', Employee = 'employee' }
export const enum FinancialDisputeStatus { UnderReview = 'under-review', Escalated = 'escalated', NeedsResponse = 'needs-response', AwaitingEvidence = 'awaiting-evidence', ChargeRefunded = 'charge-refunded', Won = 'won', Closed = 'closed', Lost = 'lost' }
export const enum FinancialChargeType { ServiceCharge = 'service-charge', LateFee = 'late-fee', InterestCharge = 'interest-charge', ProcessingFee = 'processing-fee', Commission = 'commission', TransactionFee = 'transaction-fee', Other = 'other' }
export const enum FinancialAccountStatus { Inactive = 'inactive', Closed = 'closed', Frozen = 'frozen', Active = 'active', Suspended = 'suspended', UnderReview = 'under-review', Delinquent = 'delinquent' }
export const enum FileType { Url = 'url', File = 'file', Folder = 'folder' }
export const enum ExpenseApprovalStatus { New = 'new', Pending = 'pending', Reviewing = 'reviewing', Approved = 'approved', Cancelled = 'cancelled', Processed = 'processed', Reimbursed = 'reimbursed', Denied = 'denied' }
export const enum EventVisibility { Private = 'private', Confidential = 'confidential', Public = 'public' }
export const enum EventStatus { Tentative = 'tentative', Cancelled = 'cancelled', Confirmed = 'confirmed' }
export const enum EventRuleType { AddDates = 'add-dates', Exclude = 'exclude', ExcludeDates = 'exclude-dates', Repeat = 'repeat' }
export const enum EventReminderAction { Email = 'email', Popup = 'popup' }
export const enum EventFrequency { Weekly = 'weekly', Yearly = 'yearly', Daily = 'daily', Monthly = 'monthly' }
export const enum EntryMethod { Contactless = 'contactless', Keyed = 'keyed', Emv = 'emv', Swiped = 'swiped', OnFile = 'on-file' }
export const enum EntityLifecycleStatus { Deleted = 'deleted', Inactive = 'inactive', Scheduled = 'scheduled', Active = 'active', Archived = 'archived', Draft = 'draft', Preorder = 'preorder' }
export const enum EntityCategory { Person = 'person', Message = 'message', Owner = 'owner', Other = 'other', Event = 'event', Link = 'link', Task = 'task', Project = 'project', User = 'user', Document = 'document' }
export const enum EmploymentType { FullTime = 'full-time', Internship = 'internship', Seasonal = 'seasonal', Contract = 'contract', Permanent = 'permanent', Volunteer = 'volunteer', Freelance = 'freelance', PartTime = 'part-time', Temporary = 'temporary' }
export const enum EmploymentAndCandidateStatus { Inactive = 'inactive', New = 'new', Hired = 'hired', NotSelected = 'not-selected', Active = 'active', Terminated = 'terminated', Interviewing = 'interviewing', OfferExtended = 'offer-extended', Other = 'other', OnLeave = 'on-leave', InReview = 'in-review' }
export const enum EmailCategoryType { Business = 'business', Governmental = 'governmental', Other = 'other', Personal = 'personal', Promotional = 'promotional', Educational = 'educational', Transactional = 'transactional', Spam = 'spam' }
export const enum DiscountType { Percentage = 'percentage', VariablePercentage = 'variable-percentage', ConditionalDiscount = 'conditional-discount', VariableAmount = 'variable-amount', UnknownDiscount = 'unknown-discount', FixedAmount = 'fixed-amount', BuyOneGetOne = 'buy-one-get-one', TieredDiscount = 'tiered-discount' }
export const enum DeviceUsageType { Healthcare = 'healthcare', Industrial = 'industrial', Other = 'other', Educational = 'educational', Home = 'home', Personal = 'personal', Business = 'business' }
export const enum DayOfWeek { Friday = 'friday', Monday = 'monday', Wednesday = 'wednesday', Thursday = 'thursday', Saturday = 'saturday', Sunday = 'sunday', Tuesday = 'tuesday' }
export const enum DatabaseType { Public = 'public', External = 'external', Default = 'default', Linked = 'linked' }
export const enum DataType { Null = 'null', Array = 'array', Json = 'json', Date = 'date', Object = 'object', Number = 'number', Undefined = 'undefined', Custom = 'custom', Timestamp = 'timestamp', String = 'string', Binary = 'binary', Boolean = 'boolean' }
export const enum CvvStatus { Accepted = 'accepted', Rejected = 'rejected', NotChecked = 'not-checked' }
export const enum CustomerType { Wholesale = 'wholesale', Online = 'online', Corporate = 'corporate', B2b = 'b2b', B2c = 'b2c', Retail = 'retail' }
export const enum CustomerStatus { Archived = 'archived', Suspended = 'suspended', Inactive = 'inactive', Pending = 'pending', Active = 'active' }
export const enum CustomerEligibilityStatus { SpecificConditions = 'specific-conditions', AllCustomers = 'all-customers', VipCustomers = 'vip-customers', Other = 'other', NewCustomers = 'new-customers', ReturningCustomers = 'returning-customers' }
export const enum Currency { PEN = 'pen', KMF = 'kmf', DZD = 'dzd', BHD = 'bhd', UZS = 'uzs', AMD = 'amd', MNT = 'mnt', SOS = 'sos', BGN = 'bgn', DJF = 'djf', IRR = 'irr', MAD = 'mad', SZL = 'szl', GYD = 'gyd', MWK = 'mwk', MUR = 'mur', UGX = 'ugx', GBP = 'gbp', IQD = 'iqd', BDT = 'bdt', LKR = 'lkr', PLN = 'pln', HRK = 'hrk', MXN = 'mxn', GMD = 'gmd', KYD = 'kyd', KID = 'kid', MVR = 'mvr', PHP = 'php', MOP = 'mop', TJS = 'tjs', DOP = 'dop', NIO = 'nio', ERN = 'ern', LBP = 'lbp', BND = 'bnd', AOA = 'aoa', LAK = 'lak', KPW = 'kpw', TMT = 'tmt', AED = 'aed', KGS = 'kgs', GIP = 'gip', RWF = 'rwf', ILS = 'ils', MDL = 'mdl', XPF = 'xpf', AUD = 'aud', COP = 'cop', FJD = 'fjd', TTD = 'ttd', SRD = 'srd', XDR = 'xdr', PYG = 'pyg', JPY = 'jpy', VND = 'vnd', BIF = 'bif', BWP = 'bwp', KHR = 'khr', GEL = 'gel', NPR = 'npr', RUB = 'rub', TVD = 'tvd', USD = 'usd', GTQ = 'gtq', LSL = 'lsl', AZN = 'azn', SBD = 'sbd', YER = 'yer', UAH = 'uah', ALL = 'all', CDF = 'cdf', KRW = 'krw', KZT = 'kzt', MGA = 'mga', HNL = 'hnl', JMD = 'jmd', FKP = 'fkp', MMK = 'mmk', CAD = 'cad', RON = 'ron', SSP = 'ssp', TZS = 'tzs', EGP = 'egp', BYN = 'byn', EUR = 'eur', UYU = 'uyu', ZMW = 'zmw', BZD = 'bzd', THB = 'thb', QAR = 'qar', JOD = 'jod', LYD = 'lyd', HTG = 'htg', NZD = 'nzd', SHP = 'shp', ANG = 'ang', VES = 'ves', BAM = 'bam', HKD = 'hkd', SAR = 'sar', STN = 'stn', TRY = 'try', NGN = 'ngn', BRL = 'brl', GGP = 'ggp', CLP = 'clp', TOP = 'top', NAD = 'nad', CRC = 'crc', CVE = 'cve', XAF = 'xaf', VUV = 'vuv', CNY = 'cny', BTN = 'btn', CUC = 'cuc', BOB = 'bob', GHS = 'ghs', PAB = 'pab', SCR = 'scr', TWD = 'twd', XOF = 'xof', PGK = 'pgk', ARS = 'ars', FOK = 'fok', CZK = 'czk', BBD = 'bbd', BSD = 'bsd', KES = 'kes', KWD = 'kwd', ZAR = 'zar', NOK = 'nok', OMR = 'omr', TND = 'tnd', IMP = 'imp', SEK = 'sek', INR = 'inr', SLL = 'sll', XCD = 'xcd', JEP = 'jep', DKK = 'dkk', MYR = 'myr', PKR = 'pkr', CHF = 'chf', WST = 'wst', SGD = 'sgd', AFN = 'afn', ETB = 'etb', ZWL = 'zwl', LRD = 'lrd', CUP = 'cup', IDR = 'idr', MZN = 'mzn', RSD = 'rsd', AWG = 'awg', HUF = 'huf', GNF = 'gnf', MKD = 'mkd', BMD = 'bmd', SYP = 'syp', MRU = 'mru', ISK = 'isk', SDG = 'sdg' }
export const enum CreditType { Prepayment = 'prepayment', Goodwill = 'goodwill', Supplier = 'supplier', Customer = 'customer', Overpayment = 'overpayment' }
export const enum CreditNoteStatus { Applied = 'applied', Completed = 'completed', Draft = 'draft', Void = 'void', Disputed = 'disputed', Cancelled = 'cancelled', Pending = 'pending', Issued = 'issued', Revised = 'revised' }
export const enum Country { Mali = 'mali', Ecuador = 'ecuador', Denmark = 'denmark', Kuwait = 'kuwait', Nauru = 'nauru', Georgia = 'georgia', Portugal = 'portugal', Belarus = 'belarus', Comoros = 'comoros', France = 'france', Tajikistan = 'tajikistan', Slovakia = 'slovakia', Israel = 'israel', Vanuatu = 'vanuatu', Zambia = 'zambia', Burundi = 'burundi', Oman = 'oman', Fiji = 'fiji', SouthAfrica = 'south-africa', Paraguay = 'paraguay', Tonga = 'tonga', Azerbaijan = 'azerbaijan', NorthKorea = 'north-korea', Brunei = 'brunei', Afghanistan = 'afghanistan', Gabon = 'gabon', Colombia = 'colombia', CoteDIvoire = 'cote-d-ivoire', Chad = 'chad', Iraq = 'iraq', Mexico = 'mexico', Philippines = 'philippines', Ethiopia = 'ethiopia', Russia = 'russia', SaintKittsAndNevis = 'saint-kitts-and-nevis', NewZealand = 'new-zealand', Italy = 'italy', Madagascar = 'madagascar', Benin = 'benin', Mauritania = 'mauritania', Kyrgyzstan = 'kyrgyzstan', UnitedStates = 'united-states', Laos = 'laos', Montenegro = 'montenegro', CaboVerde = 'cabo-verde', Belgium = 'belgium', Mozambique = 'mozambique', Slovenia = 'slovenia', Poland = 'poland', BurkinaFaso = 'burkina-faso', Norway = 'norway', Bahrain = 'bahrain', Monaco = 'monaco', Sudan = 'sudan', Turkey = 'turkey', India = 'india', Algeria = 'algeria', Nicaragua = 'nicaragua', Zimbabwe = 'zimbabwe', Canada = 'canada', SierraLeone = 'sierra-leone', Togo = 'togo', Honduras = 'honduras', Jordan = 'jordan', Ireland = 'ireland', Kenya = 'kenya', Namibia = 'namibia', UnitedKingdom = 'united-kingdom', Bahamas = 'bahamas', CentralAfricanRepublic = 'central-african-republic', Eswatini = 'eswatini', Maldives = 'maldives', Malawi = 'malawi', Panama = 'panama', Bolivia = 'bolivia', Niger = 'niger', Pakistan = 'pakistan', Serbia = 'serbia', Dominica = 'dominica', TrinidadAndTobago = 'trinidad-and-tobago', Haiti = 'haiti', CongoDemocraticRepublic = 'congo-democratic-republic', PapuaNewGuinea = 'papua-new-guinea', SaudiArabia = 'saudi-arabia', Spain = 'spain', Uganda = 'uganda', Vietnam = 'vietnam', Armenia = 'armenia', EquatorialGuinea = 'equatorial-guinea', Qatar = 'qatar', Gambia = 'gambia', Djibouti = 'djibouti', Cyprus = 'cyprus', Netherlands = 'netherlands', Egypt = 'egypt', Palau = 'palau', Peru = 'peru', Greece = 'greece', CzechRepublic = 'czech-republic', Brazil = 'brazil', Romania = 'romania', BosniaAndHerzegovina = 'bosnia-and-herzegovina', SaintLucia = 'saint-lucia', Finland = 'finland', Andorra = 'andorra', Samoa = 'samoa', SaoTomeAndPrincipe = 'sao-tome-and-principe', Switzerland = 'switzerland', Tanzania = 'tanzania', TimorLeste = 'timor-leste', Micronesia = 'micronesia', Ukraine = 'ukraine', SouthKorea = 'south-korea', Japan = 'japan', Kiribati = 'kiribati', AntiguaAndBarbuda = 'antigua-and-barbuda', SouthSudan = 'south-sudan', Nepal = 'nepal', Bulgaria = 'bulgaria', Guinea = 'guinea', Palestine = 'palestine', MarshallIslands = 'marshall-islands', GuineaBissau = 'guinea-bissau', Hungary = 'hungary', Guyana = 'guyana', Morocco = 'morocco', Bhutan = 'bhutan', Ghana = 'ghana', Belize = 'belize', Latvia = 'latvia', Botswana = 'botswana', Myanmar = 'myanmar', Cambodia = 'cambodia', Eritrea = 'eritrea', SolomonIslands = 'solomon-islands', CongoRepublic = 'congo-republic', Kazakhstan = 'kazakhstan', Mongolia = 'mongolia', Senegal = 'senegal', Singapore = 'singapore', Somalia = 'somalia', Indonesia = 'indonesia', Lithuania = 'lithuania', China = 'china', NorthMacedonia = 'north-macedonia', Suriname = 'suriname', Syria = 'syria', Tunisia = 'tunisia', SanMarino = 'san-marino', CostaRica = 'costa-rica', Uzbekistan = 'uzbekistan', Jamaica = 'jamaica', Luxembourg = 'luxembourg', Libya = 'libya', Malaysia = 'malaysia', SaintVincentAndTheGrenadines = 'saint-vincent-and-the-grenadines', Angola = 'angola', Taiwan = 'taiwan', Bangladesh = 'bangladesh', Turkmenistan = 'turkmenistan', UnitedArabEmirates = 'united-arab-emirates', VaticanCity = 'vatican-city', Venezuela = 'venezuela', Cameroon = 'cameroon', Seychelles = 'seychelles', Cuba = 'cuba', Austria = 'austria', Liberia = 'liberia', Germany = 'germany', Guatemala = 'guatemala', Iceland = 'iceland', Grenada = 'grenada', Liechtenstein = 'liechtenstein', Moldova = 'moldova', SriLanka = 'sri-lanka', Sweden = 'sweden', Barbados = 'barbados', ElSalvador = 'el-salvador', Estonia = 'estonia', DominicanRepublic = 'dominican-republic', Tuvalu = 'tuvalu', Uruguay = 'uruguay', Australia = 'australia', Lesotho = 'lesotho', Rwanda = 'rwanda', Chile = 'chile', Mauritius = 'mauritius', Malta = 'malta', Iran = 'iran', Lebanon = 'lebanon', Albania = 'albania', Yemen = 'yemen', Croatia = 'croatia', Nigeria = 'nigeria', Argentina = 'argentina', Thailand = 'thailand' }
export const enum ConversationStatus { Snoozed = 'snoozed', Active = 'active', Archived = 'archived', Closed = 'closed', Deleted = 'deleted' }
export const enum ContentVisibility { Public = 'public', Protected = 'protected', Shared = 'shared', Internal = 'internal', Private = 'private' }
export const enum ContactAddressType { Work = 'work', Billing = 'billing', Home = 'home', Personal = 'personal', Other = 'other', Business = 'business', Shipping = 'shipping', Temporary = 'temporary' }
export const enum CommunicationRole { System = 'system', User = 'user', Moderator = 'moderator', Service = 'service', Member = 'member', Channel = 'channel', Group = 'group', Bot = 'bot', Owner = 'owner', Assistant = 'assistant', Admin = 'admin', Guest = 'guest' }
export const enum CommunicationMethod { Sms = 'sms', InPerson = 'in-person', Other = 'other', SocialMedia = 'social-media', InstantMessage = 'instant-message', VideoCall = 'video-call', PushNotification = 'push-notification', Phone = 'phone', Mail = 'mail', Text = 'text', Email = 'email' }
export const enum ChatType { Group = 'group', Public = 'public', Private = 'private' }
export const enum CardType { Credit = 'credit', Debit = 'debit', UnknownCard = 'unknown-card' }
export const enum CampaignType { Email = 'email', Other = 'other', SearchEngine = 'search-engine', Display = 'display', SocialMedia = 'social-media' }
export const enum CampaignStatus { Active = 'active', Draft = 'draft', Completed = 'completed', Scheduled = 'scheduled', Archived = 'archived', Planned = 'planned', Paused = 'paused', Cancelled = 'cancelled' }
export const enum CallDirection { Outbound = 'outbound', Inbound = 'inbound', Conference = 'conference', Unknown = 'unknown' }
export const enum BillingStatus { Submitted = 'submitted', Unpaid = 'unpaid', Voided = 'voided', Authorised = 'authorised', Paid = 'paid', Deleted = 'deleted', Overdue = 'overdue', Pending = 'pending', PartiallyPaid = 'partially-paid', Draft = 'draft' }
export const enum AvcStatus { Rejected = 'rejected', NotChecked = 'not-checked', Accepted = 'accepted' }
export const enum AuditOpinionType { Disclaimer = 'disclaimer', Adverse = 'adverse', Unqualified = 'unqualified', Qualified = 'qualified' }
export const enum AiToolChoiceType { Tool = 'tool', Auto = 'auto', None = 'none', Any = 'any' }
export const enum AiRole { Tool = 'tool', User = 'user', Assistant = 'assistant' }
export const enum AiMessagesContentType { Image = 'image', ToolResult = 'tool-result', Text = 'text', ToolUse = 'tool-use' }
export const enum AccountingAccountType { RevenueSavingsByTaxScheme = 'revenue::savings-by-tax-scheme', CostOfGoodsSoldCostOfLaborCos = 'cost-of-goods-sold::cost-of-labor-cos', OtherExpenseDeferredTaxExpense = 'other-expense::deferred-tax-expense', OtherExpenseHomeOffice = 'other-expense::home-office', AssetSavings = 'asset::savings', OtherExpenseDepletion = 'other-expense::depletion', AssetOtherEarMarkedBankAccounts = 'asset::other-ear-marked-bank-accounts', OtherCurrentLiabilityProvisionsCurrentLiabilities = 'other-current-liability::provisions-current-liabilities', EquityPreferredStock = 'equity::preferred-stock', OtherCurrentLiabilityPayrollTaxPayable = 'other-current-liability::payroll-tax-payable', AssetCashAndCashEquivalents = 'asset::cash-and-cash-equivalents', OtherIncomeOtherInvestmentIncome = 'other-income::other-investment-income', ExpenseOtherSellingExpenses = 'expense::other-selling-expenses', OtherExpenseRepairsAndMaintenance = 'other-expense::repairs-and-maintenance', OtherExpenseOtherVehicleExpenses = 'other-expense::other-vehicle-expenses', CostOfGoodsSoldShippingFreightDeliveryCos = 'cost-of-goods-sold::shipping-freight-delivery-cos', OtherCurrentLiabilityGlobalTaxSuspense = 'other-current-liability::global-tax-suspense', AssetRetainage = 'asset::retainage', AssetBuildings = 'asset::buildings', AssetShortTermLoansAndAdvancesToRelatedParties = 'asset::short-term-loans-and-advances-to-related-parties', EquityRetainedEarnings = 'equity::retained-earnings', AssetFixedAssetPhone = 'asset::fixed-asset-phone', ExpenseGlobalTaxExpense = 'expense::global-tax-expense', EquityEstimatedTaxes = 'equity::estimated-taxes', LiabilityAccruedLongTermLiabilities = 'liability::accrued-long-term-liabilities', OtherCurrentLiabilitySalesTaxPayable = 'other-current-liability::sales-tax-payable', RevenueOtherPrimaryIncome = 'revenue::other-primary-income', LiabilityProvisionForLiabilities = 'liability::provision-for-liabilities', AssetLeaseholdImprovements = 'asset::leasehold-improvements', RevenueSalesOfProductIncome = 'revenue::sales-of-product-income', Asset = 'asset', AssetInvestmentUsGovernmentObligations = 'asset::investment-us-government-obligations', EquityFunds = 'equity::funds', ExpenseTravelMeals = 'expense::travel-meals', ExpenseTaxesPaid = 'expense::taxes-paid', AssetGlobalTaxDeferred = 'asset::global-tax-deferred', OtherCurrentLiabilityShortTermBorrowings = 'other-current-liability::short-term-borrowings', OtherExpenseExtraordinaryItems = 'other-expense::extraordinary-items', OtherCurrentLiabilityStateLocalIncomeTaxPayable = 'other-current-liability::state-local-income-tax-payable', AssetOtherLongTermLoansAndAdvances = 'asset::other-long-term-loans-and-advances', LiabilityShareholderNotesPayable = 'liability::shareholder-notes-payable', EquityEquityInEarningsOfSubsidiuaries = 'equity::equity-in-earnings-of-subsidiuaries', ExpenseShippingFreightDelivery = 'expense::shipping-freight-delivery', ExpenseTravelExpensesSellingExpense = 'expense::travel-expenses-selling-expense', EquityCommonStock = 'equity::common-stock', LiabilityAccruedVacationPayable = 'liability::accrued-vacation-payable', RevenueRevenueGeneral = 'revenue::revenue-general', ExpenseBorrowingCost = 'expense::borrowing-cost', ExpenseBadDebts = 'expense::bad-debts', OtherCurrentLiabilityCurrentTaxLiability = 'other-current-liability::current-tax-liability', EquityShareApplicationMoneyPendingAllotment = 'equity::share-application-money-pending-allotment', AssetAvailableForSaleFinancialAssets = 'asset::available-for-sale-financial-assets', AssetCashOnHand = 'asset::cash-on-hand', LiabilityAccrualsAndDeferredIncome = 'liability::accruals-and-deferred-income', RevenueNonProfitIncome = 'revenue::non-profit-income', EquityAccumulatedAdjustment = 'equity::accumulated-adjustment', OtherIncomeGainLossOnSaleOfFixedAssets = 'other-income::gain-loss-on-sale-of-fixed-assets', AssetLongTermLoansAndAdvancesToRelatedParties = 'asset::long-term-loans-and-advances-to-related-parties', AssetPrepaidExpenses = 'asset::prepaid-expenses', AssetAccumulatedDepreciation = 'asset::accumulated-depreciation', Expense = 'expense', AssetExpenditureAuthorisationsAndLettersOfCredit = 'asset::expenditure-authorisations-and-letters-of-credit', ExpenseTravel = 'expense::travel', EquityOpeningBalanceEquity = 'equity::opening-balance-equity', RevenueServiceFeeIncome = 'revenue::service-fee-income', AssetInventory = 'asset::inventory', LiabilityObligationsUnderFinanceLeases = 'liability::obligations-under-finance-leases', OtherExpenseOtherMiscellaneousExpense = 'other-expense::other-miscellaneous-expense', AssetOtherConsumables = 'asset::other-consumables', AssetDevelopmentCosts = 'asset::development-costs', AssetFixedAssetSoftware = 'asset::fixed-asset-software', AssetMachineryAndEquipment = 'asset::machinery-and-equipment', ExpenseDuesSubscriptions = 'expense::dues-subscriptions', ExpenseInsurance = 'expense::insurance', AssetBank = 'asset::bank', ExpenseManagementCompensation = 'expense::management-compensation', OtherCurrentLiabilityPayrollClearing = 'other-current-liability::payroll-clearing', ExpenseAdvertisingPromotional = 'expense::advertising-promotional', ExpenseUtilities = 'expense::utilities', OtherCurrentLiabilitySocialSecurityAgencies = 'other-current-liability::social-security-agencies', AssetInvestments = 'asset::investments', ExpenseSundry = 'expense::sundry', LiabilityCreditCard = 'liability::credit-card', OtherCurrentLiabilityProvisionForWarrantyObligations = 'other-current-liability::provision-for-warranty-obligations', AssetMoneyMarket = 'asset::money-market', AssetAccumulatedAmortizationOfOtherAssets = 'asset::accumulated-amortization-of-other-assets', OtherCurrentLiabilityDutiesAndTaxes = 'other-current-liability::duties-and-taxes', EquityPaidInCapitalOrSurplus = 'equity::paid-in-capital-or-surplus', AssetLand = 'asset::land', ExpenseCommissionsAndFees = 'expense::commissions-and-fees', EquityShareCapital = 'equity::share-capital', AssetGoodwill = 'asset::goodwill', AssetNonCurrentAssets = 'asset::non-current-assets', AssetOtherCurrentAssets = 'asset::other-current-assets', ExpensePromotionalMeals = 'expense::promotional-meals', ExpenseShippingAndDeliveryExpense = 'expense::shipping-and-delivery-expense', RevenueOperatingGrants = 'revenue::operating-grants', EquityCalledUpShareCapital = 'equity::called-up-share-capital', EquityHealthcare = 'equity::healthcare', AssetParticipatingInterests = 'asset::participating-interests', OtherExpenseExceptionalItems = 'other-expense::exceptional-items', AssetIntangibleAssets = 'asset::intangible-assets', ExpenseEntertainmentMeals = 'expense::entertainment-meals', ExpenseAuto = 'expense::auto', OtherCurrentLiabilityInterestPayables = 'other-current-liability::interest-payables', AssetShortTermInvestmentsInRelatedParties = 'asset::short-term-investments-in-related-parties', ExpenseOtherExternalServices = 'expense::other-external-services', CostOfGoodsSoldEquipmentRentalCos = 'cost-of-goods-sold::equipment-rental-cos', ExpenseOfficeExpenses = 'expense::office-expenses', OtherExpenseGasAndFuel = 'other-expense::gas-and-fuel', OtherExpenseTaxRoundoffGainOrLoss = 'other-expense::tax-roundoff-gain-or-loss', ExpenseProjectStudiesSurveysAssessments = 'expense::project-studies-surveys-assessments', LiabilityOtherLongTermProvisions = 'liability::other-long-term-provisions', OtherExpenseMatCredit = 'other-expense::mat-credit', LiabilityStaffAndRelatedLongTermLiabilityAccounts = 'liability::staff-and-related-long-term-liability-accounts', RevenueSalesWholesale = 'revenue::sales-wholesale', OtherExpenseVehicleLease = 'other-expense::vehicle-lease', AssetDeferredTax = 'asset::deferred-tax', OtherCurrentLiabilityCurrentLiabilities = 'other-current-liability::current-liabilities', LiabilityDeferredTaxLiabilities = 'liability::deferred-tax-liabilities', OtherCurrentLiabilityTrustAccountsLiabilities = 'other-current-liability::trust-accounts-liabilities', OtherExpenseVehicle = 'other-expense::vehicle', AssetProvisionsCurrentAssets = 'asset::provisions-current-assets', OtherCurrentLiabilityFederalIncomeTaxPayable = 'other-current-liability::federal-income-tax-payable', AssetOtherAsset = 'asset::other-asset', LiabilityOtherLongTermLiabilities = 'liability::other-long-term-liabilities', OtherExpenseVehicleInsurance = 'other-expense::vehicle-insurance', AssetInvestmentOther = 'asset::investment-other', AssetInvestmentTaxExemptSecurities = 'asset::investment-tax-exempt-securities', CostOfGoodsSoldCostOfSales = 'cost-of-goods-sold::cost-of-sales', AssetOtherCurrentAsset = 'asset::other-current-asset', OtherIncomeTaxExemptInterest = 'other-income::tax-exempt-interest', AssetTradeAndOtherReceivables = 'asset::trade-and-other-receivables', AssetAssetsHeldForSale = 'asset::assets-held-for-sale', OtherCurrentLiabilityPrepaidExpensesPayable = 'other-current-liability::prepaid-expenses-payable', OtherCurrentLiabilityLineOfCredit = 'other-current-liability::line-of-credit', OtherExpenseExchangeGainOrLoss = 'other-expense::exchange-gain-or-loss', AssetAssetsInCourseOfConstruction = 'asset::assets-in-course-of-construction', OtherExpenseDepreciation = 'other-expense::depreciation', LiabilityLongTermBorrowings = 'liability::long-term-borrowings', LiabilityAccountsPayable = 'liability::accounts-payable', EquityMoneyReceivedAgainstShareWarrants = 'equity::money-received-against-share-warrants', ExpenseStaffCosts = 'expense::staff-costs', AssetLongTermInvestments = 'asset::long-term-investments', ExpenseRentOrLeaseOfBuildings = 'expense::rent-or-lease-of-buildings', CostOfGoodsSoldFreightAndDeliveryCost = 'cost-of-goods-sold::freight-and-delivery-cost', LiabilityGovernmentAndOtherPublicAuthorities = 'liability::government-and-other-public-authorities', OtherExpense = 'other-expense', AssetFurnitureAndFixtures = 'asset::furniture-and-fixtures', AssetFixedAsset = 'asset::fixed-asset', ExpenseOtherBusinessExpenses = 'expense::other-business-expenses', LiabilityOutstandingDuesMicroSmallEnterprise = 'liability::outstanding-dues-micro-small-enterprise', AssetFixedAssetOtherToolsEquipment = 'asset::fixed-asset-other-tools-equipment', OtherIncomeOtherOperatingIncome = 'other-income::other-operating-income', AssetLoansToOthers = 'asset::loans-to-others', EquityPersonalExpense = 'equity::personal-expense', AssetLandAsset = 'asset::land-asset', ExpenseUnappliedCashBillPaymentExpense = 'expense::unapplied-cash-bill-payment-expense', ExpenseDistributionCosts = 'expense::distribution-costs', LiabilityLongTermDebit = 'liability::long-term-debit', OtherExpenseIncomeTaxOtherExpense = 'other-expense::income-tax-other-expense', ExpenseInterestPaid = 'expense::interest-paid', AssetVehicles = 'asset::vehicles', AssetLeaseBuyout = 'asset::lease-buyout', OtherExpenseVehicleLoanInterest = 'other-expense::vehicle-loan-interest', ExpenseSuppliesMaterials = 'expense::supplies-materials', OtherIncomeInterestEarned = 'other-income::interest-earned', AssetInternalTransfers = 'asset::internal-transfers', EquityPartnersEquity = 'equity::partners-equity', ExpenseBankCharges = 'expense::bank-charges', ExpenseOfficeGeneralAdministrativeExpenses = 'expense::office-general-administrative-expenses', AssetTrustAccounts = 'asset::trust-accounts', AssetAssetsAvailableForSale = 'asset::assets-available-for-sale', OtherExpenseAmortization = 'other-expense::amortization', EquityDividendDisbursed = 'equity::dividend-disbursed', OtherExpenseRentAndLease = 'other-expense::rent-and-lease', ExpenseIncomeTaxExpense = 'expense::income-tax-expense', ExpenseTravelExpensesGeneralAndAdminExpenses = 'expense::travel-expenses-general-and-admin-expenses', AssetCumulativeDepreciationOnIntangibleAssets = 'asset::cumulative-depreciation-on-intangible-assets', AssetProvisionsFixedAssets = 'asset::provisions-fixed-assets', EquityOtherFreeReserves = 'equity::other-free-reserves', AssetCapitalWip = 'asset::capital-wip', ExpenseRepairMaintenance = 'expense::repair-maintenance', ExpenseCostOfLabor = 'expense::cost-of-labor', ExpensePayrollExpenses = 'expense::payroll-expenses', OtherCurrentLiability = 'other-current-liability', AssetLicenses = 'asset::licenses', ExpenseOtherCurrentOperatingCharges = 'expense::other-current-operating-charges', OtherExpenseVehicleRepairs = 'other-expense::vehicle-repairs', OtherExpensePriorPeriodItems = 'other-expense::prior-period-items', LiabilityLiabilitiesRelatedToAssetsHeldForSale = 'liability::liabilities-related-to-assets-held-for-sale', OtherCurrentLiabilityOtherCurrentLiabilities = 'other-current-liability::other-current-liabilities', ExpenseExtraordinaryCharges = 'expense::extraordinary-charges', EquityOwnersEquity = 'equity::owners-equity', RevenueOwnWorkCapitalized = 'revenue::own-work-capitalized', RevenueSalesRetail = 'revenue::sales-retail', OtherIncomeDividendIncome = 'other-income::dividend-income', ExpenseCharitableContributions = 'expense::charitable-contributions', EquityInvestmentGrants = 'equity::investment-grants', OtherCurrentLiabilityCurrentPortionOfObligationsUnderFinanceLeases = 'other-current-liability::current-portion-of-obligations-under-finance-leases', OtherCurrentLiabilityStaffAndRelatedLiabilityAccounts = 'other-current-liability::staff-and-related-liability-accounts', EquityTreasuryStock = 'equity::treasury-stock', ExpenseFinanceCosts = 'expense::finance-costs', AssetCalledUpShareCapitalNotPaid = 'asset::called-up-share-capital-not-paid', OtherExpenseMortgageInterest = 'other-expense::mortgage-interest', AssetFixedAssetComputers = 'asset::fixed-asset-computers', OtherExpenseWashAndRoadServices = 'other-expense::wash-and-road-services', OtherCurrentLiabilityDividendsPayable = 'other-current-liability::dividends-payable', ExpenseOtherMiscellaneousServiceCost = 'expense::other-miscellaneous-service-cost', AssetInvestmentMortgageRealEstateLoans = 'asset::investment-mortgage-real-estate-loans', AssetFixedAssetCopiers = 'asset::fixed-asset-copiers', AssetFixedAssetPhotoVideo = 'asset::fixed-asset-photo-video', OtherExpensePenaltiesSettlements = 'other-expense::penalties-settlements', LiabilityNotesPayable = 'liability::notes-payable', AssetFixedAssetFurniture = 'asset::fixed-asset-furniture', EquityPartnerContributions = 'equity::partner-contributions', AssetOtherLongTermInvestments = 'asset::other-long-term-investments', AssetAccumulatedAmortization = 'asset::accumulated-amortization', OtherExpenseVehicleLoan = 'other-expense::vehicle-loan', RevenueUnappliedCashPaymentIncome = 'revenue::unapplied-cash-payment-income', AssetChecking = 'asset::checking', RevenueOtherCurrentOperatingIncome = 'revenue::other-current-operating-income', AssetAccumulatedDepletion = 'asset::accumulated-depletion', OtherCurrentLiabilityAccruedLiabilities = 'other-current-liability::accrued-liabilities', OtherCurrentLiabilityCurrentPortionEmployeeBenefitsObligations = 'other-current-liability::current-portion-employee-benefits-obligations', AssetUndepositedFunds = 'asset::undeposited-funds', LiabilityDebtsRelatedToParticipatingInterests = 'liability::debts-related-to-participating-interests', ExpenseLegalProfessionalFees = 'expense::legal-professional-fees', AssetLoansToOfficers = 'asset::loans-to-officers', ExpenseExternalServices = 'expense::external-services', ExpensePurchasesRebates = 'expense::purchases-rebates', LiabilityOutstandingDuesOtherThanMicroSmallEnterprise = 'liability::outstanding-dues-other-than-micro-small-enterprise', ExpenseLossOnDiscontinuedOperationsNetOfTax = 'expense::loss-on-discontinued-operations-net-of-tax', LiabilityProvisionsNonCurrentLiabilities = 'liability::provisions-non-current-liabilities', OtherCurrentLiabilityTradeAndOtherPayables = 'other-current-liability::trade-and-other-payables', RevenueDiscountsRefundsGiven = 'revenue::discounts-refunds-given', AssetDepletableAssets = 'asset::depletable-assets', AssetOrganizationalCosts = 'asset::organizational-costs', OtherExpenseHomeOwnerRentalInsurance = 'other-expense::home-owner-rental-insurance', AssetSecurityDeposits = 'asset::security-deposits', AssetRentsHeldInTrust = 'asset::rents-held-in-trust', OtherIncomeUnrealisedLossOnSecuritiesNetOfTax = 'other-income::unrealised-loss-on-securities-net-of-tax', LiabilityLongTermLiability = 'liability::long-term-liability', ExpenseEquipmentRental = 'expense::equipment-rental', OtherCurrentLiabilityDirectDepositPayable = 'other-current-liability::direct-deposit-payable', AssetOtherLongTermAssets = 'asset::other-long-term-assets', AssetOtherIntangibleAssets = 'asset::other-intangible-assets', OtherCurrentLiabilityLoanPayable = 'other-current-liability::loan-payable', OtherIncomeGainLossOnSaleOfInvestments = 'other-income::gain-loss-on-sale-of-investments', AssetProvisionsNonCurrentAssets = 'asset::provisions-non-current-assets', OtherCurrentLiabilityRentsInTrustLiability = 'other-current-liability::rents-in-trust-liability', OtherExpenseUtilities = 'other-expense::utilities', ExpenseAppropriationsToDepreciation = 'expense::appropriations-to-depreciation', EquityPartnerDistributions = 'equity::partner-distributions', OtherIncomeLossOnDisposalOfAssets = 'other-income::loss-on-disposal-of-assets', OtherExpenseParkingAndTolls = 'other-expense::parking-and-tolls', LiabilityLongTermEmployeeBenefitObligations = 'liability::long-term-employee-benefit-obligations', ExpenseOtherRentalCosts = 'expense::other-rental-costs', CostOfGoodsSold = 'cost-of-goods-sold', AssetGlobalTaxRefund = 'asset::global-tax-refund', LiabilityGroupAndAssociates = 'liability::group-and-associates', OtherCurrentLiabilitySundryDebtorsAndCreditors = 'other-current-liability::sundry-debtors-and-creditors', EquityAccumulatedOtherComprehensiveIncome = 'equity::accumulated-other-comprehensive-income', AccountsReceivable = 'accounts-receivable', Equity = 'equity', CostOfGoodsSoldSuppliesMaterialsCogs = 'cost-of-goods-sold::supplies-materials-cogs', OtherIncome = 'other-income', OtherExpenseVehicleRegistration = 'other-expense::vehicle-registration', AssetBalWithGovtAuthorities = 'asset::bal-with-govt-authorities', EquityPersonalIncome = 'equity::personal-income', OtherExpenseOtherHomeOfficeExpenses = 'other-expense::other-home-office-expenses', LiabilityBankLoans = 'liability::bank-loans', AssetEmployeeCashAdvances = 'asset::employee-cash-advances', AssetIntangibleAssetsUnderDevelopment = 'asset::intangible-assets-under-development', ExpenseAmortizationExpense = 'expense::amortization-expense', OtherIncomeOtherMiscellaneousIncome = 'other-income::other-miscellaneous-income', CostOfGoodsSoldOtherCostsOfServiceCos = 'cost-of-goods-sold::other-costs-of-service-cos', AssetAllowanceForBadDebts = 'asset::allowance-for-bad-debts', AssetOtherFixedAssets = 'asset::other-fixed-assets', AssetPrepaymentsAndAccruedIncome = 'asset::prepayments-and-accrued-income', EquityCapitalReserves = 'equity::capital-reserves', RevenueIncome = 'revenue::income', OtherCurrentLiabilityGlobalTaxPayable = 'other-current-liability::global-tax-payable', AssetLoansToStockholders = 'asset::loans-to-stockholders', OtherCurrentLiabilityInsurancePayable = 'other-current-liability::insurance-payable', ExpenseEntertainment = 'expense::entertainment', RevenueCashReceiptIncome = 'revenue::cash-receipt-income' }
export const enum AccountStatus { Inactive = 'inactive', Active = 'active', Closed = 'closed', Suspended = 'suspended', Pending = 'pending' }
export const enum AccountEngagementLevel { Cold = 'cold', Hot = 'hot', Warm = 'warm', Unknown = 'unknown' }
export const enum AccessControlModel { Rbac = 'rbac', Dac = 'dac', None = 'none', Mac = 'mac', Custom = 'custom', Abac = 'abac' }
