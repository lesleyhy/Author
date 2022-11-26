import './App.css';

import { Link, Navigate, Route, Routes } from 'react-router-dom';

import { AllAuthors } from './views/AllAuthors';
import { ShowAuthor } from './views/ShowAuthor';
import { AddAuthor } from './views/AddAuthor';
import { EditAuthor } from './views/EditAuthor';
import { NotFound } from './views/NotFound';


function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top justify-content-center mb-4">
        <h1 className="navbar-brand mb-0">Favorite Authors</h1>
      </nav>

      <Routes>
        {/* Redirect example */}
        <Route path="/" element={<Navigate to="/authors/all" replace />} />
        <Route path="/authors/all" element={<AllAuthors />} />
        <Route path="/authors/:id/edit" element={<EditAuthor />} />
        <Route path="/authors/:id" element={<ShowAuthor />} /> 
        <Route path="/authors/new" element={<AddAuthor />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
