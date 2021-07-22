import React from 'react'
import { getGifs } from '../helpers/GetGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItems } from './GifGridItems';

export const GifGrid = ({category}) => {
    
    const {data:images, loading} = useFetchGifs(category);
    
    return ( 
        <>
            <h3 className="animate__animated animate__fadeIn animate__delay-.5s" >{category}</h3>

            {loading && <p className="animate__animated animate__flash animate__delay-.2s">loading</p>}
            
            <div className= "car-grid">
            
                {
                    images.map((img) =>(
                        //<li key = {img.id}> {img.title} </li>
                        <GifGridItems 
                            key = {img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        
        </>
    )
}
