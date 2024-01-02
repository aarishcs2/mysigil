const BASE_URL = 'http://localhost:5000';

export async function fetchSingleTemplate(id) {
  try {
    const response = await fetch(`${BASE_URL}/fetchsingletemplate/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching template details:', error);
    throw error;
  }
}

export async function fetchAllTemplates() {
  try {
    const response = await fetch(`${BASE_URL}/fetchAlltemplates`);
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching all templates:', error);
    throw error;
  }
}

export async function fetchFirstTemplate() {
  try {
    const response = await fetch(`${BASE_URL}/fetchAlltemplates`);
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    const data = await response.json();
    return data[0];
  } catch (error) {
    console.error('Error fetching the first template:', error);
    throw error;
  }
}
