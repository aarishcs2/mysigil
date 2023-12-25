// api.js

export async function fetchSingleTemplate(id) {
    try {
      const response = await fetch(`http://localhost:5000/fetchsingletemplate/${id}`);
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
      const response = await fetch('http://localhost:5000/fetchAlltemplates');
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
  