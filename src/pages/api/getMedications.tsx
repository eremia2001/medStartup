// const db = require('../../app/db');
// import type { NextApiRequest, NextApiResponse } from 'next';

// type ResponseData = {
//   result: any; // Passen Sie diesen Typ an, um ihn an Ihre Daten anzupassen
//   error?: string;
// };

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<ResponseData>
// ) {
//   try {
//     const result = await db.query('SELECT * FROM medications ORDER BY id ASC');
//     res.status(200).json(result.rows);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// }
import type { NextApiRequest, NextApiResponse } from 'next';
import unique_medication from '../../app/data/unique_medicines_list';

type ResponseData = {
  result: any; // Passen Sie diesen Typ an, um ihn an Ihre Daten anzupassen
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    res.status(200).json(unique_medication);
  } catch (error) {
    res.status(500).json(error);
  }
}
