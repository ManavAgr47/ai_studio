import { z } from 'zod';
import { insertContactMessageSchema, tools } from './schema';

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  internal: z.object({
    message: z.string(),
  }),
  notFound: z.object({
    message: z.string(),
  })
};

export const api = {
  tools: {
    list: {
      method: 'GET' as const,
      path: '/api/tools' as const,
      responses: {
        200: z.array(z.custom<typeof tools.$inferSelect>()),
      },
    },
    getBySlug: {
      method: 'GET' as const,
      path: '/api/tools/:slug' as const,
      responses: {
        200: z.custom<typeof tools.$inferSelect>(),
        404: errorSchemas.notFound,
      },
    }
  },
  contact: {
    create: {
      method: 'POST' as const,
      path: '/api/contact' as const,
      input: insertContactMessageSchema,
      responses: {
        201: z.object({ success: z.boolean() }),
        400: errorSchemas.validation,
      }
    }
  }
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}

export type ToolsListResponse = z.infer<typeof api.tools.list.responses[200]>;
export type ToolResponse = z.infer<typeof api.tools.getBySlug.responses[200]>;
export type ContactInput = z.infer<typeof api.contact.create.input>;
