import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { RandomNumber } from './components/RandomNumber';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='App-header'>
        <RandomNumber />
      </div>
    </QueryClientProvider>
  );
};
