"use client";
import { useQuery } from "@tanstack/react-query";
import { api, buildUrl } from "@shared/routes";
import { z } from "zod";

function parseWithLogging<T>(schema: any, data: unknown, label: string): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    console.error(`[Zod] ${label} validation failed:`, result.error.format());
    throw new Error(`Data validation failed for ${label}`);
  }
  return result.data;
}

export function useTools() {
  return useQuery({
    queryKey: [api.tools.list.path],
    queryFn: async () => {
      const res = await fetch(api.tools.list.path, { credentials: "include" });
      if (!res.ok) throw new Error('Failed to fetch tools');
      const data = await res.json();
      return parseWithLogging<z.infer<typeof api.tools.list.responses[200]>>(
        api.tools.list.responses[200],
        data,
        "tools.list"
      );
    },
    enabled: typeof window !== "undefined",
  });
}

export function useTool(slug: string) {
  return useQuery({
    queryKey: [api.tools.getBySlug.path, slug],
    queryFn: async () => {
      const url = buildUrl(api.tools.getBySlug.path, { slug });
      const res = await fetch(url, { credentials: "include" });

      if (res.status === 404) return null;
      if (!res.ok) throw new Error('Failed to fetch tool details');

      const data = await res.json();
      return parseWithLogging<z.infer<typeof api.tools.getBySlug.responses[200]>>(
        api.tools.getBySlug.responses[200],
        data,
        "tools.getBySlug"
      );
    },
    enabled: !!slug && typeof window !== "undefined",
  });
}

