import { IApiResponse, IHeroInfo } from '../models/common.model'

export const DEFAULT_API_STATE: IApiResponse = {
  count: 0,
  next: null,
  previous: null,
  results: [],
}

export const DEFAULT_HERO_INFO: IHeroInfo = {
  name: '',
  height: '',
  mass: '',
  hair_color: '',
  skin_color: '',
  eye_color: '',
  birth_year: '',
  gender: '',
  homeworld: '',
  films: [],
  species: [],
  vehicles: [],
  starships: [],
  created: new Date(),
  edited: new Date(),
  url: '',
}
