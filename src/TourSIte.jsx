import { useState } from "react"
import TourCard from "./TourCard"
export default function TourSite({data}){
    let [tour, setTour] = useState(data)
    const notInterested = (idx)=>{
        setTour(prevTour =>{
            return prevTour.filter((ele)=>{
                return ele.id!==idx
            })
        })
    }
    return (
        <div className="container">
            <h1 className="title">Our Tours</h1>
            <div className="title-underline"></div>
            <div className="card-container">
            {tour.map(ele=>(
                <TourCard data ={{...ele}} key={ele.id} remove={notInterested}/>
            ))}
            </div>
        
        </div>
    )
}