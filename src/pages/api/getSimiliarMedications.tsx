// import type { NextApiRequest, NextApiResponse } from 'next';
// const db = require('../../app/db');

// type ResponseData = {
//   result: any; // Passen Sie diesen Typ an, um ihn an Ihre Daten anzupassen
//   error?: string;
// };

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<ResponseData>
// ) {
//   const param = req.query;
//   const { searchString } = param;

//   try {
//     const result = await db.query(
//       'SELECT * FROM medications WHERE arzneimittelname LIKE UPPER($1) ORDER BY id ASC LIMIT 100 ',
//       [`${searchString}%`]
//     );

//     res.status(200).json(result.rows);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   } finally {
//   }
// }
import type { NextApiRequest, NextApiResponse } from 'next';
import { medicines } from '../../app/data/unique_medicines_list';

type ResponseData = {
  result: any; // Passen Sie diesen Typ an, um ihn an Ihre Daten anzupassen
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const param = req.query;
  const { searchString } = param;

  try {
    const lowerCaseSearchString = searchString.toLowerCase();
    const alikeMedication = medicines.filter((med) =>
      med.arzneimittelname.toLowerCase().includes(lowerCaseSearchString)
    );
    res.status(200).json(alikeMedication);
  } catch (error) {
    res.status(500).json({ error: error.message });
  } finally {
  }
}
