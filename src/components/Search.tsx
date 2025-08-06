import React from 'react'

interface Props{
    query: string,
    setquery: (value:string) => void
}
const Search:React.FC<Props> = ({query, setquery}) => {

    const handlechange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setquery(e.target.value)
    }
  return (
    <div>
      <input type="text"
      value={query}
      onChange={handlechange}
      placeholder='Search for a mood (e.g happy)'
      className='w-full px-4 py-2 border rounded-md shadow-sm' />
    </div>
  )
}

export default Search
