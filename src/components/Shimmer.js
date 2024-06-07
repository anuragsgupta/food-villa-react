import React from 'react'

const Shimmer = () => {
  return (
    <div className='shimmer justify-center'>
{Array(10).fill("").map((e)=>(
    <div className='shimmer-card w-[250px] h-[200px] p-2 m-2 shadow-lg'>Loading....</div>
))}
    </div>
  )
}

export default Shimmer