import React, { useState } from 'react';
import { Search } from 'react-bootstrap-icons';
import './SearchBar.css';

function SearchBar({ setFilter, setCurrentPage }) {
  const [input, setInput] = useState('');

  function handleInput(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setFilter('search', input);
    setCurrentPage(1);
  }

  return (
    <div className="pt-4">
      <input
        className="search__input ps-2"
        type="text"
        placeholder="Buscar"
        value={input}
        onChange={handleInput}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleSubmit(e);
        }}
      />

      <button
        className="search__btn"
        name="search"
        type="submit"
        onClick={handleSubmit}
      >
        <Search />
      </button>
    </div>
  );
}

export default SearchBar;
