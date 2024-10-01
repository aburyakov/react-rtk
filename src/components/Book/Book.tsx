import { memo } from 'react';
import { CardActionArea } from '@mui/material';
import { Book as BookType } from '../../types/book';
import {
  BookContainer,
  BookIMG,
  BookTitle,
  BookAutor,
  BookTextContainer,
  AddedToTheCartIcon
} from '../styledComponents';

export interface BookProps {
  book: BookType;
  onBookClickCallback: (book: BookType, inCart: boolean) => void;
  inCart: boolean;
}

 const Book = memo(function Book({ book, onBookClickCallback, inCart }: BookProps) {
  const { title, author_name, key } = book;

  function onBookClickhandller() {
    onBookClickCallback(book, inCart);
  }

  return (
    <BookContainer sx={{ maxWidth: 345 }} inCart={inCart}>
      <CardActionArea onClick={onBookClickhandller}>
        <BookIMG
          image={`//covers.openlibrary.org/b/id/${key}-M.jpg`}
          component="img"
        />
        <BookTextContainer>
          <BookTitle>{title}</BookTitle>
          <BookAutor>{author_name}</BookAutor>
        </BookTextContainer>
      </CardActionArea>
      {inCart && <AddedToTheCartIcon />}
    </BookContainer>
  );
});

export default Book;