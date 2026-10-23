import { z } from 'zod'

export const businessTypeSchema = z.enum([
  'manufacturer',
  'wholesaler',
  'distributor',
  'exporter',
  'supplier',
  'service_provider',
])

export const listingStatusSchema = z.enum(['draft', 'pending', 'published', 'rejected', 'suspended'])

export const businessListingSchema = z.object({
  name: z.string().min(2, 'Business name must be at least 2 characters').max(255),
  slug: z.string().min(2, 'Slug must be at least 2 characters').max(255).regex(/^[a-z0-9-]+$/, 'Slug can only contain lowercase letters, numbers, and hyphens'),
  summary: z.string().max(500, 'Summary must be less than 500 characters').optional(),
  description: z.string().max(10000, 'Description must be less than 10000 characters').optional(),
  businessType: businessTypeSchema,
  categoryId: z.string().uuid('Invalid category').optional().nullable(),
  secondaryCategoryIds: z.array(z.string().uuid()).default([]),
  yearEstablished: z.number().int().min(1800).max(new Date().getFullYear()).optional().nullable(),
  employeeRange: z.string().max(50).optional().nullable(),
  website: z.string().url('Invalid website URL').optional().or(z.literal('')),
  email: z.string().email('Invalid email address').optional().or(z.literal('')),
  phone: z.string().max(50).optional().or(z.literal('')),
  whatsapp: z.string().max(50).optional().or(z.literal('')),
  metaTitle: z.string().max(255).optional(),
  metaDescription: z.string().max(500).optional(),
  status: listingStatusSchema.default('draft'),
})

export type BusinessListingInput = z.infer<typeof businessListingSchema>

export const businessLocationSchema = z.object({
  type: z.enum(['headquarters', 'branch', 'warehouse', 'office', 'factory', 'showroom']).default('headquarters'),
  addressLine1: z.string().min(5, 'Address line 1 is required').max(500),
  addressLine2: z.string().max(500).optional(),
  cityId: z.string().uuid('Invalid city').optional().nullable(),
  stateId: z.string().uuid('Invalid state').optional().nullable(),
  countryId: z.string().uuid('Invalid country'),
  postalCode: z.string().max(20).optional(),
  latitude: z.number().min(-90).max(90).optional().nullable(),
  longitude: z.number().min(-180).max(180).optional().nullable(),
  isPrimary: z.boolean().default(false),
})

export type BusinessLocationInput = z.infer<typeof businessLocationSchema>

export const businessGallerySchema = z.object({
  url: z.string().url('Invalid image URL'),
  caption: z.string().max(255).optional(),
  type: z.enum(['image', 'video']).default('image'),
  sortOrder: z.number().int().default(0),
})

export type BusinessGalleryInput = z.infer<typeof businessGallerySchema>

export const certificationSchema = z.object({
  name: z.string().min(2, 'Certification name is required').max(255),
  issuer: z.string().max(255).optional(),
  issueDate: z.string().datetime().optional().nullable(),
  expiryDate: z.string().datetime().optional().nullable(),
  documentUrl: z.string().url('Invalid document URL').optional().or(z.literal('')),
  isVerified: z.boolean().default(false),
})

export type CertificationInput = z.infer<typeof certificationSchema>

export const verificationDocumentSchema = z.object({
  type: z.enum(['business_registration', 'gst_certificate', 'pan_card', 'iec_certificate', 'iso_certificate', 'other']),
  documentUrls: z.array(z.string().url('Invalid document URL')).min(1, 'At least one document is required'),
})

export type VerificationDocumentInput = z.infer<typeof verificationDocumentSchema>

export const claimBusinessSchema = z.object({
  businessId: z.string().uuid('Invalid business ID'),
  authorizationDocumentUrl: z.string().url('Invalid authorization document URL'),
  authorizedPersonName: z.string().min(2, 'Name is required').max(255),
  authorizedPersonDesignation: z.string().max(100).optional(),
  contactEmail: z.string().email('Invalid email address'),
  contactPhone: z.string().max(50).optional(),
})

export type ClaimBusinessInput = z.infer<typeof claimBusinessSchema>