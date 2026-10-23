import type { InferSelectModel, InferInsertModel } from 'drizzle-orm'
import * as schema from '@/db/schema'

export type User = InferSelectModel<typeof schema.users>
export type NewUser = InferInsertModel<typeof schema.users>

export type Organization = InferSelectModel<typeof schema.organizations>
export type NewOrganization = InferInsertModel<typeof schema.organizations>

export type OrganizationMember = InferSelectModel<typeof schema.organizationMembers>
export type NewOrganizationMember = InferInsertModel<typeof schema.organizationMembers>

export type Category = InferSelectModel<typeof schema.categories>
export type NewCategory = InferInsertModel<typeof schema.categories>

export type Country = InferSelectModel<typeof schema.countries>
export type NewCountry = InferInsertModel<typeof schema.countries>

export type State = InferSelectModel<typeof schema.states>
export type NewState = InferInsertModel<typeof schema.states>

export type City = InferSelectModel<typeof schema.cities>
export type NewCity = InferInsertModel<typeof schema.cities>

export type BusinessListing = InferSelectModel<typeof schema.businessListings>
export type NewBusinessListing = InferInsertModel<typeof schema.businessListings>

export type BusinessLocation = InferSelectModel<typeof schema.businessLocations>
export type NewBusinessLocation = InferInsertModel<typeof schema.businessLocations>

export type Product = InferSelectModel<typeof schema.products>
export type NewProduct = InferInsertModel<typeof schema.products>

export type ProductImage = InferSelectModel<typeof schema.productImages>
export type NewProductImage = InferInsertModel<typeof schema.productImages>

export type Enquiry = InferSelectModel<typeof schema.enquiries>
export type NewEnquiry = InferInsertModel<typeof schema.enquiries>

export type QuoteRequest = InferSelectModel<typeof schema.quoteRequests>
export type NewQuoteRequest = InferInsertModel<typeof schema.quoteRequests>

export type QuoteResponse = InferSelectModel<typeof schema.quoteResponses>
export type NewQuoteResponse = InferInsertModel<typeof schema.quoteResponses>

export type VerificationRecord = InferSelectModel<typeof schema.verificationRecords>
export type NewVerificationRecord = InferInsertModel<typeof schema.verificationRecords>

export type Plan = InferSelectModel<typeof schema.plans>
export type NewPlan = InferInsertModel<typeof schema.plans>

export type Subscription = InferSelectModel<typeof schema.subscriptions>
export type NewSubscription = InferInsertModel<typeof schema.subscriptions>

export type Payment = InferSelectModel<typeof schema.payments>
export type NewPayment = InferInsertModel<typeof schema.payments>

export type Promotion = InferSelectModel<typeof schema.promotions>
export type NewPromotion = InferInsertModel<typeof schema.promotions>

export type Review = InferSelectModel<typeof schema.reviews>
export type NewReview = InferInsertModel<typeof schema.reviews>

export type Notification = InferSelectModel<typeof schema.notifications>
export type NewNotification = InferInsertModel<typeof schema.notifications>

export type AuditLog = InferSelectModel<typeof schema.auditLogs>
export type NewAuditLog = InferInsertModel<typeof schema.auditLogs>

export type CmsPage = InferSelectModel<typeof schema.cmsPages>
export type NewCmsPage = InferInsertModel<typeof schema.cmsPages>

export type BlogPost = InferSelectModel<typeof schema.blogPosts>
export type NewBlogPost = InferInsertModel<typeof schema.blogPosts>

export type BusinessGallery = InferSelectModel<typeof schema.businessGallery>
export type NewBusinessGallery = InferInsertModel<typeof schema.businessGallery>

export type Certification = InferSelectModel<typeof schema.certifications>
export type NewCertification = InferInsertModel<typeof schema.certifications>

export type UserRole = typeof schema.userRoleEnum.enumValues[number]
export type ListingStatus = typeof schema.listingStatusEnum.enumValues[number]
export type VerificationStatus = typeof schema.verificationStatusEnum.enumValues[number]
export type BusinessType = typeof schema.businessTypeEnum.enumValues[number]
export type SubscriptionStatus = typeof schema.subscriptionStatusEnum.enumValues[number]
export type PaymentStatus = typeof schema.paymentStatusEnum.enumValues[number]
export type EnquiryStatus = typeof schema.enquiryStatusEnum.enumValues[number]
export type QuoteStatus = typeof schema.quoteStatusEnum.enumValues[number]
export type PlanType = typeof schema.planTypeEnum.enumValues[number]

export interface BusinessWithRelations extends BusinessListing {
  organization?: Organization | null
  owner?: User | null
  category?: Category | null
  locations?: BusinessLocation[]
  products?: Product[]
  primaryLocation?: BusinessLocation | null
}

export interface ProductWithRelations extends Product {
  business?: BusinessListing
  category?: Category | null
  images?: ProductImage[]
  primaryImage?: ProductImage | null
}

export interface EnquiryWithRelations extends Enquiry {
  business?: BusinessListing
  product?: Product | null
  buyerCountry?: Country | null
}

export interface QuoteRequestWithRelations extends QuoteRequest {
  business?: BusinessListing
  category?: Category | null
  buyer?: User | null
  deliveryCountry?: Country | null
  responses?: QuoteResponse[]
}

export interface QuoteResponseWithRelations extends QuoteResponse {
  quoteRequest?: QuoteRequest
  business?: BusinessListing
}

export interface SubscriptionWithRelations extends Subscription {
  business?: BusinessListing
  plan?: Plan
  payments?: Payment[]
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}

export interface SearchFilters {
  query?: string
  categoryId?: string
  countryId?: string
  stateId?: string
  cityId?: string
  businessType?: BusinessType
  isVerified?: boolean
  isFeatured?: boolean
  minPrice?: number
  maxPrice?: number
  sortBy?: 'relevance' | 'recent' | 'popular' | 'price_asc' | 'price_desc'
  page?: number
  pageSize?: number
}

export interface BusinessSearchFilters extends SearchFilters {
  hasProducts?: boolean
  yearEstablishedFrom?: number
  yearEstablishedTo?: number
}

export interface ProductSearchFilters extends SearchFilters {
  brand?: string
  inStock?: boolean
}

export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface ValidationError {
  field: string
  message: string
}

export interface FormState<T> {
  values: T
  errors: Partial<Record<keyof T, string>>
  touched: Partial<Record<keyof T, boolean>>
  isSubmitting: boolean
  isValid: boolean
}