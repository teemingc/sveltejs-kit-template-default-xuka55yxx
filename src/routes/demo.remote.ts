import { form } from '$app/server';
import * as z from 'zod';

export const demo = form(
  z.object({
    demo: z.string().optional(),
  }),
  (data) => {
    console.log(data);
  }
);
