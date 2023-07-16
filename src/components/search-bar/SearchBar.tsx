import React, { Dispatch, SetStateAction } from 'react'
import { Container, Grid, InputAdornment, TextField } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'

type TProps = {
  heroName: string
  setHeroName: Dispatch<SetStateAction<string>>
}

export const SearchBar: React.FC<TProps> = ({ heroName, setHeroName }) => (
  <Container
    sx={{
      position: 'sticky',
      top: '0',
      paddingTop: '10px',
      paddingBottom: '16px',
      background: '#121212',
      zIndex: 2,
    }}
    maxWidth="md"
  >
    <Grid container>
      <Grid item xs={12} sm={6} sx={{ margin: '0 auto' }}>
        <TextField
          fullWidth
          label="Hero name"
          value={heroName}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <ClearIcon
                  sx={{ cursor: 'pointer' }}
                  onClick={() => {
                    setHeroName('')
                  }}
                />
              </InputAdornment>
            ),
          }}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setHeroName(event.target.value)
          }}
        />
      </Grid>
    </Grid>
  </Container>
)
