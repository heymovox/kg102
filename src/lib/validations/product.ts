import { z } from 'zod'

export const productSchema = z.object({
  name: z.string().min(2, 'Product name must be at least 2 characters').max(255),
  slug: z.string().min(2, 'Slug must be at least 2 characters').max(255).regex(/^[a-z0-9-]+$/, 'Slug can only contain lowercase letters, numbers, and hyphens'),
  description: z.string().max(20000, 'Description must be less than 20000 characters').optional(),
  shortDescription: z.string().max(500, 'Short description must be less than 500 characters').optional(),
  categoryId: z.string().uuid('Invalid category').optional().nullable(),
  brand: z.string().max(255).optional(),
  model: z.string().max(255).optional(),
  sku: z.string().max(100).optional(),
  price: z.number().positive('Price must be positive').optional().nullable(),
  currency: z.string().length(3, 'Currency must be 3 characters').default('INR'),
  pricingUnit: z.string().max(50).optional(),
  minOrderQuantity: z.number().int().positive('Minimum order quantity must be positive').default(1),
  stockStatus: z.enum(['in_stock', 'out_of_stock', 'limited', 'on_order', 'pre_order']).default('in_stock'),
  attributes: z.record(z.string(), z.unknown()).default(() => ({})),
  specifications: z.record(z.string(), z.unknown()).default(() => ({})),
  tags: z.array(z.string().max(50)).default(() => []),
  metaTitle: z.string().max(255).optional(),
  metaDescription: z.string().max(500).optional(),
  isPublished: z.boolean().default(false),
  isFeatured: z.boolean().default(false),
})

export type ProductInput = z.infer<typeof productSchema>

export const productImageSchema = z.object({
  url: z.string().url('Invalid image URL'),
  alt: z.string().max(255).optional(),
  sortOrder: z.number().int().default(0),
  isPrimary: z.boolean().default(false),
})

export type ProductImageInput = z.infer<typeof productImageSchema>

export const bulkProductImportSchema = z.object({
  products: z.array(productSchema).min(1, 'At least one product is required').max(1000, 'Maximum 1000 products per import'),
})

export type BulkProductImportInput = z.infer<typeof bulkProductImportSchema>