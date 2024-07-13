import { useState } from "react"

export default function TourCard({data, remove}){
    let [show, setShow] = useState(false)
    return (
        <div className="card" >
            <span className="cardPrice"> $ {data.price}</span>
            <img src={data.image} className="card-img" alt="" />
            <div className="card-description">
                <p className="card-description-name">{data.name}</p>
                <p className={`card-description-desc ${show?null:'close'}`} >{data.info} </p>
                <button className="toggleBtn" onClick={()=>{setShow(!show)}}>{show?'Show less...':'Read more...'}</button>
                <button className="removeBtn" onClick={()=>{remove(data.id)}}>
                    Not Interested
                </button>
            </div>

        </div>
    )
}