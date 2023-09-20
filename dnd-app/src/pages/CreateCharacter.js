// src/components/CreateCharacter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import Router, Route, and Link from react-router-dom

class CreateCharacter extends React.Component {
    // Add your character creation form and logic here

    render() {
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

        </main>
        <footer>
            <p>footer</p>
        </footer>
      </div>
    </Router>
        );
    }
}

export default CreateCharacter;