import React from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData()
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers: {data.followers}
    <img src={data.avatar_url} alt="Github pic" width={300}/>
    </div>
  )
}

export default Github;

// even though "response" is promise but we can return it to loader.
export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/neerajm96')
    return response.json()
}