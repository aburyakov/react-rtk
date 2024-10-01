import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { useLazyGetBooksByTitleQuery } from '../../services/books';
import { SearchBookContainer, SearchBookTextField } from '../styledComponents';

export interface SearchBookProps {
  onSearchSuccess?: () => void;
}

function SearchBook({ onSearchSuccess }: SearchBookProps) {
  const [, setSearchParams] = useSearchParams();
  const [bookTitle, setBookTitle] = useState('');
  const [getBooks] = useLazyGetBooksByTitleQuery();

  function searchBook() {
    getBooks(bookTitle, true)//if the same bookTitle than get data from cache
      .then(() => {
        onSearchSuccess && onSearchSuccess();
        setSearchParams(`?bookTitle=${bookTitle}`);
      }).catch(() => {
        console.log('error search book');
      });
  }

  function onChangeSearchFieldHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setBookTitle(event.target.value);
  };

  function onKeyUpSearchFieldHandler(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      searchBook();
    }
  };

  return (
    <SearchBookContainer>
      <SearchBookTextField
        value={bookTitle}
        onChange={onChangeSearchFieldHandler}
        onKeyUp={onKeyUpSearchFieldHandler}
        label="Search for a new book"
        variant="outlined"
      />
      <Button onClick={searchBook} variant="contained">Search</Button>
    </SearchBookContainer>
  );
}

export default SearchBook;