import { useState, useEffect } from 'react';

interface Member {
  name: string;
  slug: string;
}

export interface House {
  slug: string;
  name: string;
  members: Member[];
}

const useFetchHouses = () => {
  const [houses, setHouses] = useState<House[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.gameofthronesquotes.xyz/v1/houses'
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch houses');
        }

        const data: House[] = await response.json();
        setHouses(data);
        setLoading(false);
      } catch (error) {
        setError(error as Error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { houses, loading, error };
};

export default useFetchHouses;
