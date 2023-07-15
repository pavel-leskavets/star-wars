import React from 'react'
import { useParams } from 'react-router-dom'
import { DEFAULT_API_STATE } from '../../constants/common'
import { useGetByNameQuery } from '../../services/people.service'

export const User: React.FC = () => {
  const { userId = '' } = useParams()
  const { data = DEFAULT_API_STATE } = useGetByNameQuery(userId, {
    skip: !userId,
  })

  // eslint-disable-next-line no-console
  console.log(data)

  return <div>{userId}</div>
}
