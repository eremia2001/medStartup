export async function fetchMedicationStatus(body) {
  try {
    const response = await fetch(`/api/getResult`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.error || 'Error fetching medication status');
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching medication status:', error);
    throw error;
  }
}
