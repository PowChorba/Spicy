'use client'
import { CategoryFormat, VideoFormat } from '@/types'
import axios from 'axios'
import { useState, useEffect } from 'react'
import CategorySmall from '../CategorySmall'
import CategoryRecom from '../CategoryRecom'

export default function CatalogRecom(){
    const [videos, setVideos] = useState<CategoryFormat[]>([])
    
    useEffect(() => {
        const data = async () => {
            const api = await axios.get('http://localhost:3001/videos')
            setVideos(api.data)
        }
        data()
    }, [])
    let dataSort = videos?.sort((a,b) => {
        if (a.counter > b.counter) 1
        if(a.counter < b.counter) -1
        return 0
    })
    dataSort = dataSort.splice(0,10)

    return(<>
        <div className='grid grid-cols-5'>
        {
            dataSort?.map(e=>{
                return <CategoryRecom key={e._id} name={e.name} idCategory={e.idCategory} img={e.img}/>
            })
        }
        </div>
    </>)
}