import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "574d74e74cmsh85292ae660a52b2p1e4436jsn777703e132c0"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    //query a function as it needs to return dynamic paths ex- charts/india || charts/world
    getTopCharts: builder.query({ query: () => "/charts/world" }),
    getSongByGenre: builder.query({
      query: (genre) => `/charts/genre-world?genre_code=${genre}`,
    }),
    getSongDetails: builder.query({
      query: ({ songid }) => `/tracks/details?track_id=${songid}`,
    }),
    getSongRelated: builder.query({
      query: ({ songid }) => `/tracks/related?track_id=${songid}`,
    }),
    getArtistDetails: builder.query({
      query: (artistId) => `/artists/details?artist_id=${artistId}`,
    }),
    getSongByCountry: builder.query({
      query: (countryCode) => `/charts/country?country_code=${countryCode}`,
    }),
    getSongBySearch: builder.query({
      query: (search) =>
        `/search/multi?search_type=SONGS_ARTISTS&query=${search}`,
    }),
  }),
});
export const {
  useGetTopChartsQuery,
  useGetSongByGenreQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
  useGetSongByCountryQuery,
  useGetSongBySearchQuery,
} = shazamCoreApi;
