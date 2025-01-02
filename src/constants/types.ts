export type Movie = {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
};

export type MovieDetail = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  genre_ids: number[];
  overveiw: string;
  release_date: string;
  adult: boolean;
};

export type PageInfo = {};
