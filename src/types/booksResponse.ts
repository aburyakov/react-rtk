export interface BookInResponse {
  author_name: string;
  title: string;
  cover_i: string;
  key: string;
  [key: string]: any;// For tesing
}

export interface SearchBooksResponse {
  docs: BookInResponse[];
  [key: string]: any;// For tesing
}