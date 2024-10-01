import { useCallback, useMemo } from 'react';
import { addToCart, removeFromCart, selectCart } from '../../store/slices/cartSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Book as BookType } from '../../types/book';
import { BooksListContainer } from '../styledComponents';
import Book from '../Book/Book';

export interface BooksListProps {
  books: BookType[];
}

export default function BooksList({ books }: BooksListProps) {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectCart);

  const inCartBookIds = useMemo(() => (
    cart.map((book) => book.id)
  ), [cart]);

  const onBookClickHandler = useCallback((book: BookType, inCart: boolean) => {
    if(inCart) {
      dispatch(removeFromCart(book.id));
    } else {
      dispatch(addToCart(book));
    }
  }, []);

  return (
    <BooksListContainer>
      {books.map((book: BookType) => (
        <Book
          key={book.id}
          book={book}
          onBookClickCallback={onBookClickHandler}
          inCart={inCartBookIds.includes(book.id)}
        ></Book>
      ))}
    </BooksListContainer>
  )
}
