import { useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import { useSearchParams } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ButtonSubmit, FormStyle, Input } from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get('film') ?? ''
  );

  const handleSubmit = evt => {
    evt.preventDefault();

    if (searchQuery.trim() === '') {
      toast.error(
        'The search field cannot be empty. Please enter a search query.'
      );
      return;
    }
    onSubmit(searchQuery.trim());
    setSearchQuery('');
  };
  const updateQueryString = evt => {
    setSearchQuery(evt.target.value);
  };

  return (
    <FormStyle onSubmit={handleSubmit}>
      <Input
        type="text"
        value={searchQuery}
        onChange={updateQueryString}
        autoFocus
      />
      <ButtonSubmit type="submit">
        <FcSearch />
      </ButtonSubmit>
    </FormStyle>
  );
};
