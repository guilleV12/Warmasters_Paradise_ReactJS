export const getJsonData = async () => {
  try {
    const response = await fetch('/src/assets/data/navbarData.json');
    if (!response.ok) {
      throw new Error('Error al cargar los datos');
    }
    return await response.json();
  } catch (error) {
    console.error('Error al cargar el JSON:', error);
    throw error;
  }
};
