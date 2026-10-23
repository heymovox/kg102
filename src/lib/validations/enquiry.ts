import { z } from 'zod'

export const enquirySchema = z.object({
  businessId: z.string().uuid('Invalid business ID'),
  productId: z.string().uuid('Invalid product ID').optional().nullable(),
  buyerName: z.string().min(2, 'Name must be at least 2 characters').max(255),
  buyerEmail: z.string().email('Invalid email address'),
  buyerPhone: z.string().max(50).optional(),
  buyerCompany: z.string().max(255).optional(),
  buyerCountryId: z.string().uuid('Invalid country').optional().nullable(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(5000, 'Message must be less than 5000 characters'),
  quantity: z.number().int().positive('Quantity must be positive').optional().nullable(),
  budget: z.number().positive('Budget must be positive').optional().nullable(),
  budgetCurrency: z.string().length(3, 'Currency must be 3 characters').optional().nullable(),
  deliveryLocation: z.string().max(1000).optional(),
  consent: z.boolean().refine((val) => val === true, 'You must consent to share your details with the supplier'),
})

export type EnquiryInput = z.infer<typeof enquirySchema>

export const quoteRequestSchema = z.object({
  businessId: z.string().uuid('Invalid business ID').optional().nullable(),
  categoryId: z.string().uuid('Invalid category').optional().nullable(),
  buyerName: z.string().min(2, 'Name must be at least 2 characters').max(255),
  buyerEmail: z.string().email('Invalid email address'),
  buyerPhone: z.string().max(50).optional(),
  buyerCompany: z.string().max(255).optional(),
  title: z.string().min(5, 'Title must be at least 5 characters').max(255),
  description: z.string().min(20, 'Description must be at least 20 characters').max(10000, 'Description must be less than 10000 characters'),
  quantity: z.number().int().positive('Quantity must be positive').optional().nullable(),
  budget: z.number().positive('Budget must be positive').optional().nullable(),
  budgetCurrency: z.string().length(3, 'Currency must be 3 characters').optional().nullable(),
  deliveryCountryId: z.string().uuid('Invalid country').optional().nullable(),
  deliveryLocation: z.string().max(1000).optional(),
  requiredBy: z.string().datetime().optional().nullable(),
  attachments: z.array(z.object({
    url: z.string().url('Invalid attachment URL'),
    name: z.string().max(255),
    type: z.string().max(100),
    size: z.number().int().positive(),
  })).default([]),
  consent: z.boolean().refine((val) => val === true, 'You must consent to share your details with suppliers'),
})

export type QuoteRequestInput = z.infer<typeof quoteRequestSchema>

export const quoteResponseSchema = z.object({
  quoteRequestId: z.string().uuid('Invalid quote request ID'),
  businessId: z.string().uuid('Invalid business ID'),
  price: z.number().positive('Price must be positive'),
  currency: z.string().length(3, 'Currency must be 3 characters').default('INR'),
  quantity: z.number().int().positive('Quantity must be positive'),
  validityDays: z.number().int().positive('Validity days must be positive').default(30),
  terms: z.string().max(5000).optional(),
  notes: z.string().max(5000).optional(),
  attachments: z.array(z.object({
    url: z.string().url('Invalid attachment URL'),
    name: z.string().max(255),
    type: z.string().max(100),
    size: z.number().int().positive(),
  })).default([]),
})

export type QuoteResponseInput = z.infer<typeof quoteResponseSchema>

export const updateEnquiryStatusSchema = z.object({
  status: z.enum(['new', 'contacted', 'quoted', 'negotiating', 'closed', 'spam']),
  notes: z.string().max(2000).optional(),
})

export type UpdateEnquiryStatusInput = z.infer<typeof updateEnquiryStatusSchema>

export const updateQuoteStatusSchema = z.object({
  status: z.enum(['draft', 'sent', 'viewed', 'accepted', 'rejected', 'expired']),
  notes: z.string().max(2000).optional(),
})

export type UpdateQuoteStatusInput = z.infer<typeof updateQuoteStatusSchema>