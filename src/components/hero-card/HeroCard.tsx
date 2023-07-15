import React from 'react'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { getHeroIdFromUrl } from '../../helpers/getHeroIdFromUrl'

type TProps = {
  name: string
  height: string
  mass: string
  url: string
}

export const HeroCard: React.FC<TProps> = ({ name, height, mass, url }) => {
  const navigate = useNavigate()

  return (
    <Grid item key={name} xs={12} sm={6}>
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '12px',
        }}
      >
        <CardMedia
          component="img"
          sx={{
            height: 'auto',
          }}
          image={`/people/${getHeroIdFromUrl(url)}.jpg`}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography>Height: {height}</Typography>
          <Typography>Mass: {mass}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => navigate(name)}>
            View more
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}
