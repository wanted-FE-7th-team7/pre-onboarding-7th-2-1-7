import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { getCars } from '../apis/api';
import { Cars } from '../interfaces/Cars';

function useFetch(setState: Dispatch<SetStateAction<Cars[]>>) {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(false);

  useEffect(() => {
    const handleFetch = async () => {
      setIsLoading(true);
      try {
        const data = await getCars();
        setState(prev => [...prev, ...data]);
      } catch (error) {
        setErrors(true);
      } finally {
        setIsLoading(false);
      }
    };

    handleFetch();
  }, [setState]);

  return [isLoading, errors];
}

export default useFetch;
