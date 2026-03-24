const { z } = require('zod');
const schema = z.custom();
console.log(schema.safeParse({ id: 1 }).success);
