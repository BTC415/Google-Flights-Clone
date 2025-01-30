import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { FlightSearchForm } from './components/flight/FlightSearchForm';
import FlightResults  from '../src/components/flight/FlightResults';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <div className="min-h-screen flex flex-col">
            <Header />
            
            <main className="flex-grow bg-gray-50">
              <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">
                  Find Your Perfect Flight
                </h1>
                <FlightSearchForm />
                <FlightResults />
              </div>
            </main>

            <Footer />
          </div>
        </Router>
      </QueryClientProvider>
    </Provider>
  );
}
