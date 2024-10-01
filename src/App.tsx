import { RouterProvider } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { useAppSelector } from "./store/hooks";
import { AppBackdrop } from './components/styledComponents';
import { storeQueryLoadingSelector } from "./store/selectors/storeQueryLoadingSelector";
import router from "./router"

function App() {
  const isLoading = useAppSelector(storeQueryLoadingSelector);

  return (
    <>
    <RouterProvider router={router} />
    <AppBackdrop open={isLoading}>
      <CircularProgress color="inherit" />
    </AppBackdrop>
    </>
  );
}

export default App;
