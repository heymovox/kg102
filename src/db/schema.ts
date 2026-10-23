import { pgTable, uuid, varchar, text, timestamp, boolean, integer, decimal, jsonb, index, uniqueIndex, pgEnum, foreignKey, AnyPgColumn } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'

export const userRoleEnum = pgEnum('user_role', ['visitor', 'registered', 'business_owner', 'org_manager', 'moderator', 'admin', 'super_admin'])
export const listingStatusEnum = pgEnum('listing_status', ['draft', 'pending', 'published', 'rejected', 'suspended'])
export const verificationStatusEnum = pgEnum('verification_status', ['unverified', 'pending', 'verified', 'rejected'])
export const businessTypeEnum = pgEnum('business_type', ['manufacturer', 'wholesaler', 'distributor', 'exporter', 'supplier', 'service_provider'])
export const subscriptionStatusEnum = pgEnum('subscription_status', ['active', 'past_due', 'canceled', 'expired', 'trialing'])
export const paymentStatusEnum = pgEnum('payment_status', ['pending', 'completed', 'failed', 'refunded'])
export const enquiryStatusEnum = pgEnum('enquiry_status', ['new', 'contacted', 'quoted', 'negotiating', 'closed', 'spam'])
export const quoteStatusEnum = pgEnum('quote_status', ['draft', 'sent', 'viewed', 'accepted', 'rejected', 'expired'])
export const planTypeEnum = pgEnum('plan_type', ['free', 'premium', 'verified', 'sponsored', 'featured_product'])

export const users = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  emailVerified: timestamp('email_verified', { withTimezone: true }),
  passwordHash: varchar('password_hash', { length: 255 }),
  name: varchar('name', { length: 255 }),
  avatarUrl: varchar('avatar_url', { length: 500 }),
  phone: varchar('phone', { length: 50 }),
  phoneVerified: timestamp('phone_verified', { withTimezone: true }),
  role: userRoleEnum('role').default('visitor').notNull(),
  isActive: boolean('is_active').default(true).notNull(),
  lastLoginAt: timestamp('last_login_at', { withTimezone: true }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
}, (table) => ({
  emailIdx: uniqueIndex('users_email_idx').on(table.email),
  roleIdx: index('users_role_idx').on(table.role),
}))

export const organizations = pgTable('organizations', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  description: text('description'),
  logoUrl: varchar('logo_url', { length: 500 }),
  website: varchar('website', { length: 500 }),
  defaultCurrency: varchar('default_currency', { length: 3 }).default('INR').notNull(),
  settings: jsonb('settings').default({}).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
}, (table) => ({
  slugIdx: uniqueIndex('organizations_slug_idx').on(table.slug),
}))

export const organizationMembers = pgTable('organization_members', {
  id: uuid('id').defaultRandom().primaryKey(),
  organizationId: uuid('organization_id').notNull().references(() => organizations.id, { onDelete: 'cascade' }),
  userId: uuid('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  role: varchar('role', { length: 50 }).default('member').notNull(),
  permissions: jsonb('permissions').default({}).notNull(),
  joinedAt: timestamp('joined_at', { withTimezone: true }).defaultNow().notNull(),
}, (table) => ({
  orgUserIdx: uniqueIndex('org_members_org_user_idx').on(table.organizationId, table.userId),
  orgIdx: index('org_members_org_idx').on(table.organizationId),
  userIdx: index('org_members_user_idx').on(table.userId),
}))

export const categories = pgTable('categories', {
  id: uuid('id').defaultRandom().primaryKey(),
  parentId: uuid('parent_id').references((): AnyPgColumn => categories.id, { onDelete: 'set null' }),
  name: varchar('name', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  description: text('description'),
  icon: varchar('icon', { length: 100 }),
  imageUrl: varchar('image_url', { length: 500 }),
  sortOrder: integer('sort_order').default(0).notNull(),
  isActive: boolean('is_active').default(true).notNull(),
  metaTitle: varchar('meta_title', { length: 255 }),
  metaDescription: text('meta_description'),
  attributes: jsonb('attributes').default([]).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
}, (table) => ({
  slugIdx: uniqueIndex('categories_slug_idx').on(table.slug),
  parentIdx: index('categories_parent_idx').on(table.parentId),
  activeIdx: index('categories_active_idx').on(table.isActive),
}))

export const countries = pgTable('countries', {
  id: uuid('id').defaultRandom().primaryKey(),
  code: varchar('code', { length: 2 }).notNull().unique(),
  name: varchar('name', { length: 100 }).notNull(),
  slug: varchar('slug', { length: 100 }).notNull().unique(),
  flagUrl: varchar('flag_url', { length: 500 }),
  currencyCode: varchar('currency_code', { length: 3 }).default('USD').notNull(),
  phoneCode: varchar('phone_code', { length: 10 }),
  isActive: boolean('is_active').default(true).notNull(),
  sortOrder: integer('sort_order').default(0).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
}, (table) => ({
  codeIdx: uniqueIndex('countries_code_idx').on(table.code),
  slugIdx: uniqueIndex('countries_slug_idx').on(table.slug),
}))

export const states = pgTable('states', {
  id: uuid('id').defaultRandom().primaryKey(),
  countryId: uuid('country_id').notNull().references(() => countries.id, { onDelete: 'cascade' }),
  name: varchar('name', { length: 100 }).notNull(),
  slug: varchar('slug', { length: 100 }).notNull(),
  code: varchar('code', { length: 10 }),
  isActive: boolean('is_active').default(true).notNull(),
}, (table) => ({
  countrySlugIdx: uniqueIndex('states_country_slug_idx').on(table.countryId, table.slug),
  countryIdx: index('states_country_idx').on(table.countryId),
}))

export const cities = pgTable('cities', {
  id: uuid('id').defaultRandom().primaryKey(),
  stateId: uuid('state_id').notNull().references(() => states.id, { onDelete: 'cascade' }),
  name: varchar('name', { length: 100 }).notNull(),
  slug: varchar('slug', { length: 100 }).notNull(),
  isActive: boolean('is_active').default(true).notNull(),
}, (table) => ({
  stateSlugIdx: uniqueIndex('cities_state_slug_idx').on(table.stateId, table.slug),
  stateIdx: index('cities_state_idx').on(table.stateId),
}))

export const businessListings = pgTable('business_listings', {
  id: uuid('id').defaultRandom().primaryKey(),
  organizationId: uuid('organization_id').references(() => organizations.id, { onDelete: 'set null' }),
  ownerId: uuid('owner_id').references(() => users.id, { onDelete: 'set null' }),
  name: varchar('name', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  summary: text('summary'),
  description: text('description'),
  businessType: businessTypeEnum('business_type').notNull(),
  categoryId: uuid('category_id').references(() => categories.id, { onDelete: 'set null' }),
  secondaryCategoryIds: uuid('secondary_category_ids').array().default([]).notNull(),
  yearEstablished: integer('year_established'),
  employeeRange: varchar('employee_range', { length: 50 }),
  website: varchar('website', { length: 500 }),
  email: varchar('email', { length: 255 }),
  phone: varchar('phone', { length: 50 }),
  whatsapp: varchar('whatsapp', { length: 50 }),
  logoUrl: varchar('logo_url', { length: 500 }),
  bannerUrl: varchar('banner_url', { length: 500 }),
  status: listingStatusEnum('status').default('draft').notNull(),
  verificationStatus: verificationStatusEnum('verification_status').default('unverified').notNull(),
  verificationDetails: jsonb('verification_details').default({}).notNull(),
  isVerified: boolean('is_verified').default(false).notNull(),
  isFeatured: boolean('is_featured').default(false).notNull(),
  isSponsored: boolean('is_sponsored').default(false).notNull(),
  sponsoredUntil: timestamp('sponsored_until', { withTimezone: true }),
  completenessScore: integer('completeness_score').default(0).notNull(),
  viewCount: integer('view_count').default(0).notNull(),
  enquiryCount: integer('enquiry_count').default(0).notNull(),
  metaTitle: varchar('meta_title', { length: 255 }),
  metaDescription: text('meta_description'),
  publishedAt: timestamp('published_at', { withTimezone: true }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
}, (table) => ({
  slugIdx: uniqueIndex('business_listings_slug_idx').on(table.slug),
  orgIdx: index('business_listings_org_idx').on(table.organizationId),
  ownerIdx: index('business_listings_owner_idx').on(table.ownerId),
  categoryIdx: index('business_listings_category_idx').on(table.categoryId),
  statusIdx: index('business_listings_status_idx').on(table.status),
  verifiedIdx: index('business_listings_verified_idx').on(table.isVerified),
  typeIdx: index('business_listings_type_idx').on(table.businessType),
  featuredIdx: index('business_listings_featured_idx').on(table.isFeatured),
  sponsoredIdx: index('business_listings_sponsored_idx').on(table.isSponsored),
}))

export const businessLocations = pgTable('business_locations', {
  id: uuid('id').defaultRandom().primaryKey(),
  businessId: uuid('business_id').notNull().references(() => businessListings.id, { onDelete: 'cascade' }),
  type: varchar('type', { length: 50 }).default('headquarters').notNull(),
  addressLine1: varchar('address_line1', { length: 500 }).notNull(),
  addressLine2: varchar('address_line2', { length: 500 }),
  cityId: uuid('city_id').references(() => cities.id, { onDelete: 'set null' }),
  stateId: uuid('state_id').references(() => states.id, { onDelete: 'set null' }),
  countryId: uuid('country_id').notNull().references(() => countries.id, { onDelete: 'cascade' }),
  postalCode: varchar('postal_code', { length: 20 }),
  latitude: decimal('latitude', { precision: 10, scale: 8 }),
  longitude: decimal('longitude', { precision: 11, scale: 8 }),
  isPrimary: boolean('is_primary').default(false).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
}, (table) => ({
  businessIdx: index('business_locations_business_idx').on(table.businessId),
  countryIdx: index('business_locations_country_idx').on(table.countryId),
}))

export const products = pgTable('products', {
  id: uuid('id').defaultRandom().primaryKey(),
  businessId: uuid('business_id').notNull().references(() => businessListings.id, { onDelete: 'cascade' }),
  categoryId: uuid('category_id').references(() => categories.id, { onDelete: 'set null' }),
  name: varchar('name', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).notNull(),
  description: text('description'),
  shortDescription: text('short_description'),
  brand: varchar('brand', { length: 255 }),
  model: varchar('model', { length: 255 }),
  sku: varchar('sku', { length: 100 }),
  price: decimal('price', { precision: 14, scale: 2 }),
  currency: varchar('currency', { length: 3 }).default('INR').notNull(),
  pricingUnit: varchar('pricing_unit', { length: 50 }),
  minOrderQuantity: integer('min_order_quantity').default(1).notNull(),
  stockStatus: varchar('stock_status', { length: 50 }).default('in_stock').notNull(),
  attributes: jsonb('attributes').default({}).notNull(),
  specifications: jsonb('specifications').default({}).notNull(),
  tags: varchar('tags', { length: 500 }).array().default([]).notNull(),
  isPublished: boolean('is_published').default(false).notNull(),
  isFeatured: boolean('is_featured').default(false).notNull(),
  metaTitle: varchar('meta_title', { length: 255 }),
  metaDescription: text('meta_description'),
  publishedAt: timestamp('published_at', { withTimezone: true }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
}, (table) => ({
  businessSlugIdx: uniqueIndex('products_business_slug_idx').on(table.businessId, table.slug),
  businessIdx: index('products_business_idx').on(table.businessId),
  categoryIdx: index('products_category_idx').on(table.categoryId),
  publishedIdx: index('products_published_idx').on(table.isPublished),
  featuredIdx: index('products_featured_idx').on(table.isFeatured),
  priceIdx: index('products_price_idx').on(table.price),
}))

export const productImages = pgTable('product_images', {
  id: uuid('id').defaultRandom().primaryKey(),
  productId: uuid('product_id').notNull().references(() => products.id, { onDelete: 'cascade' }),
  url: varchar('url', { length: 500 }).notNull(),
  alt: varchar('alt', { length: 255 }),
  sortOrder: integer('sort_order').default(0).notNull(),
  isPrimary: boolean('is_primary').default(false).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
}, (table) => ({
  productIdx: index('product_images_product_idx').on(table.productId),
}))

export const enquiries = pgTable('enquiries', {
  id: uuid('id').defaultRandom().primaryKey(),
  referenceId: varchar('reference_id', { length: 50 }).notNull().unique(),
  businessId: uuid('business_id').notNull().references(() => businessListings.id, { onDelete: 'cascade' }),
  productId: uuid('product_id').references(() => products.id, { onDelete: 'set null' }),
  buyerName: varchar('buyer_name', { length: 255 }).notNull(),
  buyerEmail: varchar('buyer_email', { length: 255 }).notNull(),
  buyerPhone: varchar('buyer_phone', { length: 50 }),
  buyerCompany: varchar('buyer_company', { length: 255 }),
  buyerCountryId: uuid('buyer_country_id').references(() => countries.id, { onDelete: 'set null' }),
  message: text('message').notNull(),
  quantity: integer('quantity'),
  budget: decimal('budget', { precision: 14, scale: 2 }),
  budgetCurrency: varchar('budget_currency', { length: 3 }),
  deliveryLocation: text('delivery_location'),
  status: enquiryStatusEnum('status').default('new').notNull(),
  source: varchar('source', { length: 50 }).default('website').notNull(),
  ipAddress: varchar('ip_address', { length: 45 }),
  userAgent: text('user_agent'),
  respondedAt: timestamp('responded_at', { withTimezone: true }),
  closedAt: timestamp('closed_at', { withTimezone: true }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
}, (table) => ({
  refIdx: uniqueIndex('enquiries_ref_idx').on(table.referenceId),
  businessIdx: index('enquiries_business_idx').on(table.businessId),
  productIdx: index('enquiries_product_idx').on(table.productId),
  statusIdx: index('enquiries_status_idx').on(table.status),
  emailIdx: index('enquiries_email_idx').on(table.buyerEmail),
}))

export const quoteRequests = pgTable('quote_requests', {
  id: uuid('id').defaultRandom().primaryKey(),
  referenceId: varchar('reference_id', { length: 50 }).notNull().unique(),
  businessId: uuid('business_id').notNull().references(() => businessListings.id, { onDelete: 'cascade' }),
  categoryId: uuid('category_id').references(() => categories.id, { onDelete: 'set null' }),
  buyerId: uuid('buyer_id').references(() => users.id, { onDelete: 'set null' }),
  buyerName: varchar('buyer_name', { length: 255 }).notNull(),
  buyerEmail: varchar('buyer_email', { length: 255 }).notNull(),
  buyerPhone: varchar('buyer_phone', { length: 50 }),
  buyerCompany: varchar('buyer_company', { length: 255 }),
  title: varchar('title', { length: 255 }).notNull(),
  description: text('description').notNull(),
  quantity: integer('quantity'),
  budget: decimal('budget', { precision: 14, scale: 2 }),
  budgetCurrency: varchar('budget_currency', { length: 3 }),
  deliveryCountryId: uuid('delivery_country_id').references(() => countries.id, { onDelete: 'set null' }),
  deliveryLocation: text('delivery_location'),
  requiredBy: timestamp('required_by', { withTimezone: true }),
  attachments: jsonb('attachments').default([]).notNull(),
  status: enquiryStatusEnum('status').default('new').notNull(),
  expiresAt: timestamp('expires_at', { withTimezone: true }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
}, (table) => ({
  refIdx: uniqueIndex('quote_requests_ref_idx').on(table.referenceId),
  businessIdx: index('quote_requests_business_idx').on(table.businessId),
  buyerIdx: index('quote_requests_buyer_idx').on(table.buyerId),
  statusIdx: index('quote_requests_status_idx').on(table.status),
}))

export const quoteResponses = pgTable('quote_responses', {
  id: uuid('id').defaultRandom().primaryKey(),
  quoteRequestId: uuid('quote_request_id').notNull().references(() => quoteRequests.id, { onDelete: 'cascade' }),
  businessId: uuid('business_id').notNull().references(() => businessListings.id, { onDelete: 'cascade' }),
  price: decimal('price', { precision: 14, scale: 2 }).notNull(),
  currency: varchar('currency', { length: 3 }).default('INR').notNull(),
  quantity: integer('quantity').notNull(),
  validityDays: integer('validity_days').default(30).notNull(),
  terms: text('terms'),
  notes: text('notes'),
  attachments: jsonb('attachments').default([]).notNull(),
  status: quoteStatusEnum('status').default('sent').notNull(),
  viewedAt: timestamp('viewed_at', { withTimezone: true }),
  respondedAt: timestamp('responded_at', { withTimezone: true }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
}, (table) => ({
  quoteRequestIdx: index('quote_responses_quote_request_idx').on(table.quoteRequestId),
  businessIdx: index('quote_responses_business_idx').on(table.businessId),
  statusIdx: index('quote_responses_status_idx').on(table.status),
}))

export const verificationRecords = pgTable('verification_records', {
  id: uuid('id').defaultRandom().primaryKey(),
  businessId: uuid('business_id').notNull().references(() => businessListings.id, { onDelete: 'cascade' }),
  type: varchar('type', { length: 50 }).notNull(),
  status: verificationStatusEnum('status').default('pending').notNull(),
  documentUrls: jsonb('document_urls').default([]).notNull(),
  verifiedBy: uuid('verified_by').references(() => users.id, { onDelete: 'set null' }),
  verifiedAt: timestamp('verified_at', { withTimezone: true }),
  notes: text('notes'),
  expiresAt: timestamp('expires_at', { withTimezone: true }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
}, (table) => ({
  businessIdx: index('verification_records_business_idx').on(table.businessId),
  statusIdx: index('verification_records_status_idx').on(table.status),
}))

export const plans = pgTable('plans', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 100 }).notNull(),
  slug: varchar('slug', { length: 100 }).notNull().unique(),
  type: planTypeEnum('type').notNull(),
  description: text('description'),
  features: jsonb('features').default([]).notNull(),
  priceMonthly: decimal('price_monthly', { precision: 10, scale: 2 }).default('0').notNull(),
  priceYearly: decimal('price_yearly', { precision: 10, scale: 2 }).default('0').notNull(),
  currency: varchar('currency', { length: 3 }).default('INR').notNull(),
  limits: jsonb('limits').default({}).notNull(),
  isActive: boolean('is_active').default(true).notNull(),
  isPopular: boolean('is_popular').default(false).notNull(),
  sortOrder: integer('sort_order').default(0).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
}, (table) => ({
  slugIdx: uniqueIndex('plans_slug_idx').on(table.slug),
  typeIdx: index('plans_type_idx').on(table.type),
}))

export const subscriptions = pgTable('subscriptions', {
  id: uuid('id').defaultRandom().primaryKey(),
  businessId: uuid('business_id').notNull().references(() => businessListings.id, { onDelete: 'cascade' }),
  planId: uuid('plan_id').notNull().references(() => plans.id, { onDelete: 'restrict' }),
  status: subscriptionStatusEnum('status').default('trialing').notNull(),
  billingCycle: varchar('billing_cycle', { length: 20 }).default('monthly').notNull(),
  currentPeriodStart: timestamp('current_period_start', { withTimezone: true }).notNull(),
  currentPeriodEnd: timestamp('current_period_end', { withTimezone: true }).notNull(),
  trialEndsAt: timestamp('trial_ends_at', { withTimezone: true }),
  canceledAt: timestamp('canceled_at', { withTimezone: true }),
  paymentProvider: varchar('payment_provider', { length: 50 }),
  paymentProviderSubscriptionId: varchar('payment_provider_subscription_id', { length: 255 }),
  metadata: jsonb('metadata').default({}).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
}, (table) => ({
  businessIdx: index('subscriptions_business_idx').on(table.businessId),
  planIdx: index('subscriptions_plan_idx').on(table.planId),
  statusIdx: index('subscriptions_status_idx').on(table.status),
}))

export const payments = pgTable('payments', {
  id: uuid('id').defaultRandom().primaryKey(),
  subscriptionId: uuid('subscription_id').references(() => subscriptions.id, { onDelete: 'set null' }),
  businessId: uuid('business_id').notNull().references(() => businessListings.id, { onDelete: 'cascade' }),
  amount: decimal('amount', { precision: 14, scale: 2 }).notNull(),
  currency: varchar('currency', { length: 3 }).default('INR').notNull(),
  status: paymentStatusEnum('status').default('pending').notNull(),
  provider: varchar('provider', { length: 50 }).notNull(),
  providerPaymentId: varchar('provider_payment_id', { length: 255 }),
  providerOrderId: varchar('provider_order_id', { length: 255 }),
  description: varchar('description', { length: 255 }),
  metadata: jsonb('metadata').default({}).notNull(),
  paidAt: timestamp('paid_at', { withTimezone: true }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
}, (table) => ({
  subscriptionIdx: index('payments_subscription_idx').on(table.subscriptionId),
  businessIdx: index('payments_business_idx').on(table.businessId),
  providerIdx: index('payments_provider_idx').on(table.providerPaymentId),
  statusIdx: index('payments_status_idx').on(table.status),
}))

export const promotions = pgTable('promotions', {
  id: uuid('id').defaultRandom().primaryKey(),
  code: varchar('code', { length: 50 }).notNull().unique(),
  name: varchar('name', { length: 255 }).notNull(),
  description: text('description'),
  discountType: varchar('discount_type', { length: 20 }).notNull(),
  discountValue: decimal('discount_value', { precision: 10, scale: 2 }).notNull(),
  applicablePlanTypes: planTypeEnum('applicable_plan_types').array().default([]).notNull(),
  maxUses: integer('max_uses'),
  usedCount: integer('used_count').default(0).notNull(),
  startsAt: timestamp('starts_at', { withTimezone: true }),
  endsAt: timestamp('ends_at', { withTimezone: true }),
  isActive: boolean('is_active').default(true).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
}, (table) => ({
  codeIdx: uniqueIndex('promotions_code_idx').on(table.code),
}))

export const reviews = pgTable('reviews', {
  id: uuid('id').defaultRandom().primaryKey(),
  businessId: uuid('business_id').notNull().references(() => businessListings.id, { onDelete: 'cascade' }),
  userId: uuid('user_id').references(() => users.id, { onDelete: 'set null' }),
  rating: integer('rating').notNull(),
  title: varchar('title', { length: 255 }),
  content: text('content'),
  isVerifiedPurchase: boolean('is_verified_purchase').default(false).notNull(),
  status: varchar('status', { length: 20 }).default('pending').notNull(),
  response: text('response'),
  respondedAt: timestamp('responded_at', { withTimezone: true }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
}, (table) => ({
  businessIdx: index('reviews_business_idx').on(table.businessId),
  userIdx: index('reviews_user_idx').on(table.userId),
  statusIdx: index('reviews_status_idx').on(table.status),
}))

export const notifications = pgTable('notifications', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  type: varchar('type', { length: 50 }).notNull(),
  title: varchar('title', { length: 255 }).notNull(),
  message: text('message').notNull(),
  data: jsonb('data').default({}).notNull(),
  isRead: boolean('is_read').default(false).notNull(),
  readAt: timestamp('read_at', { withTimezone: true }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
}, (table) => ({
  userIdx: index('notifications_user_idx').on(table.userId),
  readIdx: index('notifications_read_idx').on(table.isRead),
}))

export const auditLogs = pgTable('audit_logs', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').references(() => users.id, { onDelete: 'set null' }),
  action: varchar('action', { length: 100 }).notNull(),
  entityType: varchar('entity_type', { length: 50 }).notNull(),
  entityId: uuid('entity_id'),
  oldData: jsonb('old_data'),
  newData: jsonb('new_data'),
  ipAddress: varchar('ip_address', { length: 45 }),
  userAgent: text('user_agent'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
}, (table) => ({
  userIdx: index('audit_logs_user_idx').on(table.userId),
  entityIdx: index('audit_logs_entity_idx').on(table.entityType, table.entityId),
  createdIdx: index('audit_logs_created_idx').on(table.createdAt),
}))

export const cmsPages = pgTable('cms_pages', {
  id: uuid('id').defaultRandom().primaryKey(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  title: varchar('title', { length: 255 }).notNull(),
  content: jsonb('content').default({}).notNull(),
  metaTitle: varchar('meta_title', { length: 255 }),
  metaDescription: text('meta_description'),
  isPublished: boolean('is_published').default(false).notNull(),
  publishedAt: timestamp('published_at', { withTimezone: true }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
}, (table) => ({
  slugIdx: uniqueIndex('cms_pages_slug_idx').on(table.slug),
}))

export const blogPosts = pgTable('blog_posts', {
  id: uuid('id').defaultRandom().primaryKey(),
  authorId: uuid('author_id').references(() => users.id, { onDelete: 'set null' }),
  categoryId: uuid('category_id').references(() => categories.id, { onDelete: 'set null' }),
  title: varchar('title', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  excerpt: text('excerpt'),
  content: jsonb('content').default({}).notNull(),
  featuredImageUrl: varchar('featured_image_url', { length: 500 }),
  tags: varchar('tags', { length: 500 }).array().default([]).notNull(),
  isPublished: boolean('is_published').default(false).notNull(),
  publishedAt: timestamp('published_at', { withTimezone: true }),
  viewCount: integer('view_count').default(0).notNull(),
  metaTitle: varchar('meta_title', { length: 255 }),
  metaDescription: text('meta_description'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
}, (table) => ({
  slugIdx: uniqueIndex('blog_posts_slug_idx').on(table.slug),
  authorIdx: index('blog_posts_author_idx').on(table.authorId),
  categoryIdx: index('blog_posts_category_idx').on(table.categoryId),
  publishedIdx: index('blog_posts_published_idx').on(table.isPublished),
}))

export const businessGallery = pgTable('business_gallery', {
  id: uuid('id').defaultRandom().primaryKey(),
  businessId: uuid('business_id').notNull().references(() => businessListings.id, { onDelete: 'cascade' }),
  url: varchar('url', { length: 500 }).notNull(),
  caption: varchar('caption', { length: 255 }),
  type: varchar('type', { length: 50 }).default('image').notNull(),
  sortOrder: integer('sort_order').default(0).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
}, (table) => ({
  businessIdx: index('business_gallery_business_idx').on(table.businessId),
}))

export const certifications = pgTable('certifications', {
  id: uuid('id').defaultRandom().primaryKey(),
  businessId: uuid('business_id').notNull().references(() => businessListings.id, { onDelete: 'cascade' }),
  name: varchar('name', { length: 255 }).notNull(),
  issuer: varchar('issuer', { length: 255 }),
  issueDate: timestamp('issue_date', { withTimezone: true }),
  expiryDate: timestamp('expiry_date', { withTimezone: true }),
  documentUrl: varchar('document_url', { length: 500 }),
  isVerified: boolean('is_verified').default(false).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
}, (table) => ({
  businessIdx: index('certifications_business_idx').on(table.businessId),
}))

export const usersRelations = relations(users, ({ many }) => ({
  organizationMembers: many(organizationMembers),
  ownedBusinesses: many(businessListings),
  verifiedBusinesses: many(verificationRecords),
  enquiries: many(enquiries),
  quoteRequests: many(quoteRequests),
  reviews: many(reviews),
  notifications: many(notifications),
  auditLogs: many(auditLogs),
  blogPosts: many(blogPosts),
}))

export const organizationsRelations = relations(organizations, ({ many }) => ({
  members: many(organizationMembers),
  businessListings: many(businessListings),
}))

export const organizationMembersRelations = relations(organizationMembers, ({ one }) => ({
  organization: one(organizations, { fields: [organizationMembers.organizationId], references: [organizations.id] }),
  user: one(users, { fields: [organizationMembers.userId], references: [users.id] }),
}))

export const categoriesRelations = relations(categories, ({ one, many }) => ({
  parent: one(categories, { fields: [categories.parentId], references: [categories.id] }),
  children: many(categories),
  businessListings: many(businessListings),
  products: many(products),
  blogPosts: many(blogPosts),
}))

export const countriesRelations = relations(countries, ({ many }) => ({
  states: many(states),
  businessLocations: many(businessLocations),
  enquiries: many(enquiries),
  quoteRequests: many(quoteRequests),
}))

export const statesRelations = relations(states, ({ one, many }) => ({
  country: one(countries, { fields: [states.countryId], references: [countries.id] }),
  cities: many(cities),
  businessLocations: many(businessLocations),
}))

export const citiesRelations = relations(cities, ({ one, many }) => ({
  state: one(states, { fields: [cities.stateId], references: [states.id] }),
  businessLocations: many(businessLocations),
}))

export const businessListingsRelations = relations(businessListings, ({ one, many }) => ({
  organization: one(organizations, { fields: [businessListings.organizationId], references: [organizations.id] }),
  owner: one(users, { fields: [businessListings.ownerId], references: [users.id] }),
  category: one(categories, { fields: [businessListings.categoryId], references: [categories.id] }),
  locations: many(businessLocations),
  products: many(products),
  enquiries: many(enquiries),
  quoteRequests: many(quoteRequests),
  quoteResponses: many(quoteResponses),
  verificationRecords: many(verificationRecords),
  subscriptions: many(subscriptions),
  payments: many(payments),
  reviews: many(reviews),
  gallery: many(businessGallery),
  certifications: many(certifications),
}))

export const businessLocationsRelations = relations(businessLocations, ({ one }) => ({
  business: one(businessListings, { fields: [businessLocations.businessId], references: [businessListings.id] }),
  city: one(cities, { fields: [businessLocations.cityId], references: [cities.id] }),
  state: one(states, { fields: [businessLocations.stateId], references: [states.id] }),
  country: one(countries, { fields: [businessLocations.countryId], references: [countries.id] }),
}))

export const productsRelations = relations(products, ({ one, many }) => ({
  business: one(businessListings, { fields: [products.businessId], references: [businessListings.id] }),
  category: one(categories, { fields: [products.categoryId], references: [categories.id] }),
  images: many(productImages),
  enquiries: many(enquiries),
}))

export const productImagesRelations = relations(productImages, ({ one }) => ({
  product: one(products, { fields: [productImages.productId], references: [products.id] }),
}))

export const enquiriesRelations = relations(enquiries, ({ one }) => ({
  business: one(businessListings, { fields: [enquiries.businessId], references: [businessListings.id] }),
  product: one(products, { fields: [enquiries.productId], references: [products.id] }),
  buyerCountry: one(countries, { fields: [enquiries.buyerCountryId], references: [countries.id] }),
}))

export const quoteRequestsRelations = relations(quoteRequests, ({ one, many }) => ({
  business: one(businessListings, { fields: [quoteRequests.businessId], references: [businessListings.id] }),
  category: one(categories, { fields: [quoteRequests.categoryId], references: [categories.id] }),
  buyer: one(users, { fields: [quoteRequests.buyerId], references: [users.id] }),
  deliveryCountry: one(countries, { fields: [quoteRequests.deliveryCountryId], references: [countries.id] }),
  responses: many(quoteResponses),
}))

export const quoteResponsesRelations = relations(quoteResponses, ({ one }) => ({
  quoteRequest: one(quoteRequests, { fields: [quoteResponses.quoteRequestId], references: [quoteRequests.id] }),
  business: one(businessListings, { fields: [quoteResponses.businessId], references: [businessListings.id] }),
}))

export const verificationRecordsRelations = relations(verificationRecords, ({ one }) => ({
  business: one(businessListings, { fields: [verificationRecords.businessId], references: [businessListings.id] }),
  verifiedByUser: one(users, { fields: [verificationRecords.verifiedBy], references: [users.id] }),
}))

export const plansRelations = relations(plans, ({ many }) => ({
  subscriptions: many(subscriptions),
}))

export const subscriptionsRelations = relations(subscriptions, ({ one, many }) => ({
  business: one(businessListings, { fields: [subscriptions.businessId], references: [businessListings.id] }),
  plan: one(plans, { fields: [subscriptions.planId], references: [plans.id] }),
  payments: many(payments),
}))

export const paymentsRelations = relations(payments, ({ one }) => ({
  subscription: one(subscriptions, { fields: [payments.subscriptionId], references: [subscriptions.id] }),
  business: one(businessListings, { fields: [payments.businessId], references: [businessListings.id] }),
}))

export const reviewsRelations = relations(reviews, ({ one }) => ({
  business: one(businessListings, { fields: [reviews.businessId], references: [businessListings.id] }),
  user: one(users, { fields: [reviews.userId], references: [users.id] }),
}))

export const notificationsRelations = relations(notifications, ({ one }) => ({
  user: one(users, { fields: [notifications.userId], references: [users.id] }),
}))

export const auditLogsRelations = relations(auditLogs, ({ one }) => ({
  user: one(users, { fields: [auditLogs.userId], references: [users.id] }),
}))

export const cmsPagesRelations = relations(cmsPages, ({}) => ({}))

export const blogPostsRelations = relations(blogPosts, ({ one }) => ({
  author: one(users, { fields: [blogPosts.authorId], references: [users.id] }),
  category: one(categories, { fields: [blogPosts.categoryId], references: [categories.id] }),
}))

export const businessGalleryRelations = relations(businessGallery, ({ one }) => ({
  business: one(businessListings, { fields: [businessGallery.businessId], references: [businessListings.id] }),
}))

export const certificationsRelations = relations(certifications, ({ one }) => ({
  business: one(businessListings, { fields: [certifications.businessId], references: [businessListings.id] }),
}))