import { useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import { useSearchParams } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SearchBar = ({ onSubmit }) => {
    const [searchParams] = useSearchParams();
const [searchQuery, setSearchQuery] = useState(searchParams.get('film') ?? '');

  const handleSubmit = evt => {
    evt.preventDefault();

    if (searchQuery.trim() === '') {
      toast.error(
        'The search field cannot be empty. Please enter a search query.'
      );
      return;
    }
    onSubmit(searchQuery.trim());
    setSearchQuery('')
  };
  const updateQueryString = evt => {
    setSearchQuery(evt.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={searchQuery} onChange={updateQueryString}  />
      <button type="submit">
        <FcSearch />
      </button>
    </form>
  );
};