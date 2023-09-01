import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import Router, Route, and Link from react-router-dom
import CreateCharacter from './components/CreateCharacter';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <header>
          <h1>D&D Character Builder</h1>
        </header>
        <main>
          <Link to="/create">
            <button>Create</button>
          </Link>
          <Link to="/characters">
            <button>Characters</button>
          </Link>

          {/* Define the routes within the <Routes> component */}
          <Routes>
            <Route path="/create" element={<CreateCharacter />} />
            {/* Add more routes for other sections as needed */}
          </Routes>
        </main>
        <footer>
          {/* Add any additional information or links here */}
        </footer>
      </div>
    </Router>
  );
}

export default App;
