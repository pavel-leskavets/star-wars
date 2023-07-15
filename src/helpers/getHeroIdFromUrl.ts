export const getHeroIdFromUrl = (url: string): string =>
  url.split('/')[url.split('/').length - 2]
