import { AxiosError } from 'axios';
import React, {
  createContext,
  useCallback,
  useContext,
  useReducer,
} from 'react';
import cars, { CarsResponse } from '../apis/cars';

interface CarsState {
  isLoading: boolean;
  data: CarsResponse | null;
  error: AxiosError | null;
}

const initialState: CarsState = {
  isLoading: false,
  data: null,
  error: null,
};

const loadingState = {
  isLoading: true,
  error: null,
};

interface CarsAction {
  type: string;
  data: CarsResponse;
  error: AxiosError;
}

const GET_CARS_TYPE = 'GET_CARS';
const GET_CARS_SUCCESS_TYPE = 'GET_CARS_SUCCESS';
const GET_CARS_ERROR_TYPE = 'GET_CARS_ERROR';

const carsReducer = (state: CarsState, action: CarsAction) => {
  switch (action.type) {
    case GET_CARS_TYPE:
      return {
        ...state,
        ...loadingState,
      };
    case GET_CARS_SUCCESS_TYPE:
      return {
        isLoading: false,
        data: action.data,
        error: null,
      };
    case GET_CARS_ERROR_TYPE:
      return {
        ...state,
        error: action.error,
      };
    default:
      throw new Error('유효하지 않은 타입입니다.');
  }
};

export const CarsStateContext = createContext<CarsState>(initialState);
export const CarsDispatchContext = createContext<React.Dispatch<any>>(() => {});

interface Props {
  children: React.ReactElement;
}

export function CarsProvider({ children }: Props) {
  const [carsState, dispatch] = useReducer(carsReducer, initialState);

  return (
    <CarsStateContext.Provider value={carsState}>
      <CarsDispatchContext.Provider value={dispatch}>
        {children}
      </CarsDispatchContext.Provider>
    </CarsStateContext.Provider>
  );
}

export const useCarsState = () => {
  return useContext(CarsStateContext);
};

export const useCarsDispatch = () => {
  return useContext(CarsDispatchContext);
};

export const useGetCars = () => {
  const dispatch = useCarsDispatch();

  return useCallback(async () => {
    dispatch({ type: GET_CARS_TYPE });
    try {
      const response = await cars.get();
      dispatch({
        type: GET_CARS_SUCCESS_TYPE,
        data: response.data,
      });
    } catch (e) {
      const axiosError = e as AxiosError;
      dispatch({ type: GET_CARS_ERROR_TYPE, error: axiosError });
    }
  }, [dispatch]);
};
