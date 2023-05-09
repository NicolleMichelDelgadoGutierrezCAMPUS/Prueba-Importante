const categorias = "http://localhost:4000/categorias"

// obtener todos los datos de la API
  
export const getCategories = async () => {
    try {
        const result = await fetch(url)
        const categorias = await result.json();
        return categorias
    } catch (error) {
        console.log(error); 
    }
}