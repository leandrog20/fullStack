export async function getNeos() {
    const response = await fetch("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY") // Retorna uma Promise com um resolve e o resolve dessa promise vai retornar oq a API esta retornando para a gente
    const result = await response.json() // Esse json pega o retorno que a promise tem e transforma em objeto javaScript
    return result["near_earth_objects"]   
  } // Nessa função estamos consumindo a API da NASA
  