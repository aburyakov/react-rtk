import { Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import PageLayout from "../components/Layout/PageLayout";
import BooksList from "../components/BooksList/BooksList"
import SearchBook from "../components/SearchBook/SearchBook"
import { useGetBooksByTitleQuery } from "../services/books";

export default function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const bookTitle = searchParams.get('bookTitle') || '';
  const { data: books } = useGetBooksByTitleQuery(bookTitle);//if the same bookTitle than get the same array of data from cache
  const isSearchResultNotEmpty = books?.length ? true : false;

  return (
    <PageLayout>
      <SearchBook />
      {isSearchResultNotEmpty && (
        <Typography variant="h4" align="center">
          Search Results:
        </Typography>
      )}
      {books && isSearchResultNotEmpty && <BooksList books={books} />}
    </PageLayout>
  )
}
