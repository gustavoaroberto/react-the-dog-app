const API_URL = process.env.NEXT_PUBLIC_API_URL || '';
const API_KEY = process.env.NEXT_PUBLIC_API_KEY || '';

export const getBreedsList = async (search: string): Promise<TDogBreed[]> => {
    try {
        const params = new URLSearchParams({
            limit: '10',
            q: search
        })

        const url = `${API_URL}/breeds/search?${params}`;
        console.log('url: ', url);
        const res = await fetch(url, {
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