import { RootState } from '../store';
import { QueryStatus } from "@reduxjs/toolkit/query";
import { createSelector } from "@reduxjs/toolkit";

export const storeQueryLoadingSelector = createSelector(
  (state: RootState) => state.booksApi.queries,
  (queries) => {
    return Object.values(queries).some((query) => {
      return query && query.status === QueryStatus.pending;
    });
  },
);

