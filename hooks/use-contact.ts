"use client";
import { useMutation } from "@tanstack/react-query";
import { api, type ContactInput } from "@shared/routes";
import { z } from "zod";

export function useSubmitContact() {
  return useMutation({
    mutationFn: async (data: ContactInput) => {
      const validated = api.contact.create.input.parse(data);
      const res = await fetch(api.contact.create.path, {
        method: api.contact.create.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validated),
        credentials: "include",
      });
      
      if (!res.ok) {
        const errorData = await res.json().catch(() => null);
        if (res.status === 400 && errorData) {
          throw new Error(errorData.message || 'Validation failed');
        }
        throw new Error('Failed to submit message');
      }
      
      return api.contact.create.responses[201].parse(await res.json());
    },
  });
}

