import { useState, useEffect } from 'react';

export interface Person {
  name: string;
  slug: string;
  house: {
    slug: string;
    name: string;
  } | null;
  quotes: string[];
}

export interface PersonsProps {
  persons: Person[];
}

const useFetchPersons = () => {
  const [persons, setPersons] = useState<Person[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.gameofthronesquotes.xyz/v1/characters'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch houses');
        }

        const data: Person[] = await response.json();
        setPersons(data);
        setLoading(false);
      } catch (error) {
        setError(error as Error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { persons, loading, error };
};

export default useFetchPersons;
