import { useState, useEffect } from 'react';

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
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

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

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    fetchData();
  };

  return { quotes, loading, error, refetch };
};

export default useFetchQuotes;
