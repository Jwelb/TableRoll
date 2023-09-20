import logo from './logo.svg';
import CreateCharacter from './pages/CreateCharacter';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'


function App() {
  return (
    <ChakraProvider>
    <CreateCharacter></CreateCharacter>
    </ChakraProvider>
  );
}

export default App;
