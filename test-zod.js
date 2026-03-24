const { z } = require('zod');
const schema = z.custom();
const res = schema.safeParse({ id: 1, name: 'Testing' });
console.log('Result of custom():', res.success);
