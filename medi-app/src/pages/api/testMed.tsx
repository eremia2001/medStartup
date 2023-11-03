import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
const db = require('../../app/db');

type ResponseData = {
  result: any; // Passen Sie diesen Typ an, um ihn an Ihre Daten anzupassen
  error?: string;
};

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const param = req.query;
  const { searchString } = param;

  try {
    const result = await db.query(
      'SELECT * FROM medications WHERE arzneimittelname LIKE UPPER($1) ORDER BY id ASC LIMIT 100 ',
      [`${searchString}%`]
    );

    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  } finally {
    await prisma.$disconnect();
  }
}
