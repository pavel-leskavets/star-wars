import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IApiResponse, IHeroInfo } from '../models/common.model'

export const peopleApi = createApi({
  reducerPath: 'peopleApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  endpoints: (builder) => ({
    getByPageNumber: builder.query<IApiResponse, number>({
      query: (pageNumber) => `people/?page=${pageNumber}`,
    }),
    getByName: builder.query<IApiResponse, string>({
      query: (name) => `people/?search=${name}`,
    }),
    getById: builder.query<IHeroInfo, string>({
      query: (userId) => `people/${userId}`,
    }),
  }),
})

export const { useGetByPageNumberQuery, useGetByNameQuery, useGetByIdQuery } =
  peopleApi
