const db = require('../../db');

export async function GET(request, searchString) {
  try {
    const testValue = '%A%';
    // Verwenden von Template-Strings und Parametrisierung, um SQL-Injection zu verhindern
    const result = await db.query(
      'SELECT * FROM medications WHERE arzneimittelname LIKE $1::text  ORDER BY id ASC LIMIT 100',
      [`a`]
    );
    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
