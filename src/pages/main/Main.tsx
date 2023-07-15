import React, { useMemo, useState } from 'react'
import { Container, Grid } from '@mui/material'
import {
  useGetByNameQuery,
  useGetByPageNumberQuery,
} from '../../services/people.service'
import { HeroCard, Paginator, ProgressBar, SearchBar } from '../../components'
import { useDebounce } from '../../hooks/useDebounce'
import { IApiResponse } from '../../models/common.model'
import { DEFAULT_API_STATE } from '../../constants/common'

export const Main: React.FC = () => {
  const [heroName, setHeroName] = useState('')
  const [pageNumber, setPageNumber] = useState(1)

  const debouncedHeroName = useDebounce(heroName)

  const { data: allData = DEFAULT_API_STATE, isFetching: isAllDataFetching } =
    useGetByPageNumberQuery(pageNumber)
  const {
    data: dataByName = DEFAULT_API_STATE,
    isFetching: isDataByNameFetching,
  } = useGetByNameQuery(debouncedHeroName, {
    skip: !debouncedHeroName,
  })

  const { shownData, totalPageNumber } = useMemo((): {
    shownData: IApiResponse
    totalPageNumber: number
  } => {
    const actualData = debouncedHeroName ? dataByName : allData

    return {
      shownData: actualData,
      totalPageNumber: Math.ceil(actualData.count / 10),
    }
  }, [allData, dataByName, debouncedHeroName])

  return (
    <>
      <SearchBar heroName={heroName} setHeroName={setHeroName} />
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {shownData.results.map(({ name, height, mass, url }) => (
            <HeroCard
              key={name}
              name={name}
              height={height}
              mass={mass}
              url={url}
            />
          ))}
        </Grid>
      </Container>
      <ProgressBar isShown={isAllDataFetching || isDataByNameFetching} />
      <Paginator
        count={totalPageNumber}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </>
  )
}
