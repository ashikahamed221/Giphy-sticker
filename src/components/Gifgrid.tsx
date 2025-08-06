import React from 'react'
import { fetchData } from '@/lib/giphy';

interface props{
   query:string
}
const Gifgrid:React.FC<props> = ({query}) => {
    const[gif,setgif] = React.useState<any[]>([]);
    const[Loading,setLoading] = React.useState(true);

    React.useEffect(() => {
        const getgifs = async () => {
            setLoading(true);

            try{
                const res = await fetchData(query);
                setgif(res)
            }
            catch(error){
              console.log("Error message",error)
            }finally{
                setLoading(false)
            }
        }
        getgifs()
    },[query]);

    if(Loading) return <p>Loading GIFS.....</p>

    
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
      {
        gif.map((gifs) => (
          <img key={gifs.id} src={gifs.images.fixed_height.url}
          className='rounded shadow' />
        ))
      }
    </div>
  )
}

export default Gifgrid
