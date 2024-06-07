import React from 'react'
import { useRouteError } from 'react-router-dom'
export default function Error() {
    const err = useRouteError()
    console.log(err);
  return (
    <>
    <h1 >Error</h1>
    <h1 className='Error'>{err.status + " : " + err.error}</h1>
    </>
  )
}
