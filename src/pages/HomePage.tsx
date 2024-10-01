import { Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import PageLayout from "../components/Layout/PageLayout";
import SearchBook from '../components/SearchBook/SearchBook'
import { searchResultsPageUrl } from '../router';

export default function HomePage() {
  const navigate = useNavigate();

  function searchSuccessCallback() {
    navigate(searchResultsPageUrl);
  }

  return (
    <PageLayout>
      <Typography variant="h4" align="center">
        Find a book you would like here...
      </Typography>
      <SearchBook onSearchSuccess={searchSuccessCallback} />
    </PageLayout>
  )
}
