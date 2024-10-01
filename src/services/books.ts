import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BookInResponse, SearchBooksResponse } from '../types/booksResponse';
import { Book } from '../types/book';

const BOOKS_TAG = "BOOKS" as const

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://openlibrary.org/' }),
  tagTypes: [BOOKS_TAG],
  endpoints: (builder) => ({
    getBooksByTitle: builder.query<Book[], string>({
      query: (bookTitle) => `search.json?title=${bookTitle}`,
      transformResponse: (response: SearchBooksResponse ) => {
        const filteredBooks =  response.docs.filter((book: BookInResponse) => (
          book.author_name && book.title && book.cover_i && book.key
        ));

        return filteredBooks.map((book: BookInResponse) => {
          return {
            author_name: Array.isArray(book.author_name) ? book.author_name[0] : book.author_name,
            title: book.title,
            key: book.cover_i,
            id: book.cover_i + book.key,
          } as Book;
        })
      },
      transformErrorResponse: (response: { status: string | number }) => response.status,
      providesTags: (result) => {
        return result
          ? [
              ...result.map(({ id }) => ({ type: BOOKS_TAG, id })),
              { type: BOOKS_TAG, id: 'LIST' },
            ]
          : [{ type: BOOKS_TAG, id: 'LIST' }]
      },
    }),
  }),
});

export const { useGetBooksByTitleQuery, useLazyGetBooksByTitleQuery } = booksApi;