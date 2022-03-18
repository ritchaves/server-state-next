import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query/react'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Pokemon } from '../../lib/models/pokemon'

export interface ApiState {
  data: any
}

const initialState: ApiState = {
  data: {},
}

export const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    fetchCall: (state, action) => {
      state.data = action.payload
    },
  },
})

export const { fetchCall } = apiSlice.actions

export default apiSlice.reducer


// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<any, string>({
      query: (name) => `pokemon/${name}`,
    }),
    getPokemon: builder.query<Pokemon, number>({
      query: (id) => `pokemon/${id}`
    })
  }),
})

export const { useGetPokemonQuery } = pokemonApi

//--store

export const store = configureStore({
  reducer: { ['api']: apiSlice.reducer, ['pokemonApi']: pokemonApi.reducer },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch