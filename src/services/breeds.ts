const API_URL = process.env.NEXT_PUBLIC_API_URL || '';
const API_KEY = process.env.NEXT_PUBLIC_API_KEY || '';

export const getBreedsList: () => Promise<TDogBreed[]> = async () => {
    try {
        const res = await fetch(`${API_URL}/breeds`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': API_KEY
            }
        });
    
        const formattedRes: TDogBreed[]  = await res.json();
    
        return formattedRes;
    } catch(e) {
        console.error(e);
        return [];
    }

}