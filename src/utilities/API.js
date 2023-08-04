export async function getAnimal(name) {
    try {
        const response = await fetch(`https://api.api-ninjas.com/v1/animals?name=${name}`, {
            method: 'GET',
            headers: { 'X-Api-Key': 'N3zxIMxdodHTTd/5HkEFqA==tLEqnQdoGyx7seLb'}
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error: ', error);
    }
}


  