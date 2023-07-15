import React, { Dispatch, SetStateAction } from 'react'
import { Container, Grid, TextField } from '@mui/material'

type TProps = {
  heroName: string
  setHeroName: Dispatch<SetStateAction<string>>
}

export const SearchBar: React.FC<TProps> = ({ heroName, setHeroName }) => (
  <Container sx={{ py: 8 }} maxWidth="md">
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} sx={{ margin: '0 auto' }}>
        <TextField
          fullWidth
          label="Hero name"
          value={heroName}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setHeroName(event.target.value)
          }}
        />
      </Grid>
    </Grid>
  </Container>
)
