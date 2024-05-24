import { useQuery } from '@tanstack/react-query';

const getRandomNumberFromAPI = async (): Promise<number> => {
  const response = await fetch(
    'https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new'
  );
  const numberString = await response.text();

  // throw new Error('Error al obtener el número aleatorio');
  return parseInt(numberString);
};

export const useRandom = () => {
  const query = useQuery({
    queryKey: ['randomNumber'],
    queryFn: getRandomNumberFromAPI,
  });

  return query;
};
