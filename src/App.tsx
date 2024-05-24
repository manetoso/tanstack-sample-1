import { useEffect, useReducer, useState } from 'react';
import './App.css';

const getRandomNumberFromAPI = async (): Promise<number> => {
  const response = await fetch(
    'https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new'
  );
  const numberString = await response.text();

  // throw new Error('Error al obtener el número aleatorio');
  return parseInt(numberString);
};

export const App = () => {
  const [number, setNumber] = useState<number>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>();
  const [key, forceRefetch] = useReducer((x: number) => x + 1, 0);

  useEffect(() => {
    setIsLoading(true);
    void getRandomNumberFromAPI()
      .then(setNumber)
      .catch((error: Error) => {
        setError(error.message);
      });
  }, [key]);

  useEffect(() => {
    if (number) setIsLoading(false);
  }, [number]);

  useEffect(() => {
    if (error) setIsLoading(false);
  }, [error]);

  return (
    <>
      <div className='App-header'>
        {isLoading ? <h2>Cargando...</h2> : <h2>Numero aleatorio: {number}</h2>}
        {!isLoading && error && <h3>{error}</h3>}
        <button onClick={forceRefetch} disabled={isLoading}>
          {isLoading ? '...' : 'Volver a intentar'}
        </button>
      </div>
    </>
  );
};
