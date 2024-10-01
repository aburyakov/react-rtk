import { createBrowserRouter } from "react-router-dom";
  
import HomePage from "./pages/HomePage";
import SearchResultsPage from "./pages/SearchResultsPage";
import ErrorPage from "./pages/ErrorPage";

export const homePageUrl = "/";
export const searchResultsPageUrl = "/search-results";

const router = createBrowserRouter([
  {
    path: homePageUrl,
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: searchResultsPageUrl,
    element: <SearchResultsPage />,
    errorElement: <ErrorPage />,
  },
]);

export default router;