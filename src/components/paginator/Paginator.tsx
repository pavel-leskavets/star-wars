import React, { Dispatch, SetStateAction } from 'react'
import { Pagination, Stack } from '@mui/material'

type TProps = {
  count: number | undefined
  pageNumber: number
  setPageNumber: Dispatch<SetStateAction<number>>
}

export const Paginator: React.FC<TProps> = ({
  count = 0,
  pageNumber,
  setPageNumber,
}) => {
  return (
    <Stack
      spacing={2}
      sx={{
        width: '100%',
        height: '50px',
        position: 'fixed',
        left: '50%',
        bottom: 0,
        transform: 'translateX(-50%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgb(36, 37, 38)',
        zIndex: 2,
      }}
    >
      <Pagination
        count={count}
        page={pageNumber}
        onChange={(_, value) => {
          setPageNumber(value)
        }}
      />
    </Stack>
  )
}
