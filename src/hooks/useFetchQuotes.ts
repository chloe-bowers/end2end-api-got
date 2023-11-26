import { useState } from 'react';

interface Character {
  name: string;
  slug: string;
  house: {
    name: string | null;
    slug: string | null;
  };
}

interface Quote {
  sentence: string;
  character: Character;
}

const useFetchQuotes = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [quotes, setQuotes] = useState<Quote[]>([]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        'https://api.gameofthronesquotes.xyz/v1/random/5'
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch quotes');
      }

      const data: Quote[] = await response.json();
      setQuotes(data);
      setLoading(false);
    } catch (error) {
      setError(error as Error);
      setLoading(false);
    }
  };

  const refetch = async () => {
    setQuotes([]);
    await fetchData();
  };

  return { quotes, loading, error, refetch };
};

export default useFetchQuotes;
