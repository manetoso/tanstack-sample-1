import { useRandom } from '../hooks/useRandom';

export const RandomNumber = () => {
  const ranNumber = useRandom();
  return (
    <>
      {ranNumber.isFetching ? (
        <h2>Cargando...</h2>
      ) : (
        <h2>Numero aleatorio: {ranNumber.data}</h2>
      )}
      {!ranNumber.isLoading && ranNumber.isError && (
        <h3>{`${ranNumber.error.toString()}`}</h3>
      )}
      <button
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onClick={() => ranNumber.refetch()}
        disabled={ranNumber.isFetching}>
        {ranNumber.isFetching ? '...' : 'Volver a intentar'}
      </button>
    </>
  );
};
