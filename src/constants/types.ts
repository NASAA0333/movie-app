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

export type Genre = {
  id: number;
  name: string;
};

export type Director = {
  name: string;
  job: string;
};

export type Writers = {
  job: string;
  name: string;
  department: string;
};

export type Stars = {
  name: string;
};

export type Props = {
  title: string;
  endpoint: string;
  moreLink?: string;
};
