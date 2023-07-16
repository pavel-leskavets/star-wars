import React from 'react'
import { useParams } from 'react-router-dom'
import { CardMedia, Container, Grid } from '@mui/material'
import { useGetByIdQuery } from '../../services/people.service'
import { DEFAULT_HERO_INFO } from '../../constants/common'
import { HeroForm, ProgressBar } from '../../components'

export const User: React.FC = () => {
  const { userId = '' } = useParams()
  const { data = DEFAULT_HERO_INFO, isFetching } = useGetByIdQuery(userId, {
    skip: !userId,
  })

  return isFetching ? (
    <ProgressBar isShown />
  ) : (
    <Container sx={{ paddingTop: '24px', paddingBottom: '24px' }} maxWidth="md">
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <CardMedia
            component="img"
            sx={{
              height: 'auto',
              borderRadius: '12px',
            }}
            image={`/people/${userId}.jpg`}
          />
        </Grid>
        <HeroForm {...data} />
      </Grid>
    </Container>
  )
}
