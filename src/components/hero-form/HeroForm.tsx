import React, { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Alert, Button, Grid, Snackbar, TextField } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IHeroFormInfo } from '../../models/common.model'
import { DEFAULT_HERO_INFO } from '../../constants/common'

export const HeroForm: React.FC<IHeroFormInfo> = (props) => {
  const [isNotificationShown, setIsNotificationShown] = useState(false)
  const { userId = '' } = useParams()

  const shownData = useMemo(() => {
    const dataFromLocalStorage = localStorage.getItem(userId)

    if (!dataFromLocalStorage) return props
    return JSON.parse(dataFromLocalStorage)
  }, [props, userId])

  const { register, handleSubmit, reset } = useForm<IHeroFormInfo>({
    values: {
      ...shownData,
    },
  })

  const onSubmit: SubmitHandler<IHeroFormInfo> = (formData) => {
    localStorage.setItem(userId, JSON.stringify(formData))
    setIsNotificationShown(true)
  }

  return (
    <Grid
      item
      container
      xs={12}
      sm={6}
      spacing={2}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Grid item xs={12}>
        <TextField fullWidth label="Name" {...register('name')} />
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth label="Height" {...register('height')} />
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth label="Mass" {...register('mass')} />
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth label="Hair color" {...register('hair_color')} />
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth label="Skin color" {...register('skin_color')} />
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth label="Eye color" {...register('eye_color')} />
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth label="Birth year" {...register('height')} />
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth label="Gender" {...register('gender')} />
      </Grid>
      <Grid item xs={5}>
        <Button
          type="button"
          variant="outlined"
          size="medium"
          startIcon={<DeleteIcon />}
          onClick={() => reset({ ...DEFAULT_HERO_INFO })}
        >
          Clear data
        </Button>
      </Grid>
      <Grid item xs={5}>
        <Button
          type="submit"
          variant="contained"
          size="medium"
          endIcon={<SendIcon />}
        >
          Save Data
        </Button>
      </Grid>
      <Snackbar
        open={isNotificationShown}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        autoHideDuration={2000}
        onClose={() => setIsNotificationShown(false)}
      >
        <Alert
          onClose={() => setIsNotificationShown(false)}
          severity="success"
          sx={{ width: '100%', background: 'rgb(56, 142, 60)' }}
        >
          Saved!
        </Alert>
      </Snackbar>
    </Grid>
  )
}
