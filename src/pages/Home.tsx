import React from 'react'
import Search from '@/components/Search'
import Gifgrid from '@/components/Gifgrid'
const Home = () => {

  const [query,setquery] = React.useState("")
  return (
    <div className='w-full max-w-4xl mx-auto text-center space-y-6 p-5'>
      <h1 className='text-3xl font-bold '>Gify Search</h1>
      <Search query = {query} setquery = {setquery}/>
      <Gifgrid query = {query}/>
    </div>
  )
}

export default Home
