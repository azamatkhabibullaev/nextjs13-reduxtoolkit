'use client'

import { useAppDispatch, useAppSelector } from '@/hooks/store'
import { fetchUsers } from '@/store/slices/usersSlice'
import { useEffect, useRef } from 'react'

const Users = () => {
  const usersRef = useRef(false)
  const dispatch = useAppDispatch()
  const { entities, loading } = useAppSelector(state => state.users)

  console.log(loading)

  useEffect(() => {
    if (usersRef.current === false) {
      dispatch(fetchUsers())
    }

    return () => {
      usersRef.current = true
    }
  }, [])

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        entities.map(entity => (
          <div key={entity.id} style={{marginBottom: '1rem'}}>
            <h1>{entity.id}</h1>
            <h2>{entity.name}</h2>
            <h2>{entity.username}</h2>
            <h2>{entity.email}</h2>
            <h2>{entity.phone}</h2>
            <h2>{entity.website}</h2>
            <h2>{entity.address.street}</h2>
            <h2>{entity.address.suite}</h2>
            <h2>{entity.address.city}</h2>
            <h2>{entity.address.zipcode}</h2>
            <h2>{entity.address.geo.lat}</h2>
            <h2>{entity.address.geo.lng}</h2>
            <h2>{entity.company.name}</h2>
            <h2>{entity.company.catchPhrase}</h2>
            <h2>{entity.company.bs}</h2>
          </div>
        ))
      )}
    </div>
  )
}

export default Users