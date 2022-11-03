import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { getCars } from '../apis/api';
import { Cars } from '../interfaces/Cars';

function useFetch(
  setState: Dispatch<SetStateAction<Cars[]>>,
  selectedType: string
) {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(false);

  useEffect(() => {
    const handleFetch = async () => {
      setIsLoading(true);
      try {
        const data = await getCars(selectedType);
        setState([...data]);
      } catch (error) {
        setErrors(true);
      } finally {
        setIsLoading(false);
      }
    };

    handleFetch();
  }, [setState, selectedType]);

  return [isLoading, errors];
}

export default useFetch;
