
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import AppRouter from './AppRouter';
import NavHeading from './components/NavHeading'

function App() {
  return (
    <ChakraProvider>
      <NavHeading></NavHeading>
      <AppRouter />
    </ChakraProvider>
  );
}

export default App;