import type { NextApiRequest, NextApiResponse } from 'next';
const db = require('../../app/db');

type ResponseData = {
  result: any; // Passen Sie diesen Typ an, um ihn an Ihre Daten anzupassen
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { country, tripDuration, medications } = req.body;

  try {
    // Verwenden Sie eine temporäre Variable, um alle Ergebnisse zu speichern
    let allResults = [];

    // Iterieren Sie über jede Medikation und führen Sie die Abfragen aus
    for (let medication of medications) {
      const result = await db.query(
        `
          SELECT md.arzneimittelname, l.wirkstoff, l.status 
          FROM medications md, land_wirkstoff l  
          WHERE md.wirkstoffe = l.wirkstoff 
          AND l.land = $2 s
          AND md.arzneimittelname = $1
          `,
        [medication.name, country]
      );

      // Fügen Sie die Ergebnisse dem allResults Array hinzu
      allResults = allResults.concat(
        result.rows.map((row) => ({
          name: row.arzneimittelname,
          wirkstoff: row.wirkstoff,
          status: row.status,
        }))
      );
    }

    // Senden Sie das geflachte Ergebnis zurück
    res.status(200).json(allResults);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
