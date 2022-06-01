import React, { useEffect, useState } from 'react'
import '../App.css'
import axios from 'axios';


const Leagues = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://api-football-standings.azharimm.site/leagues').then(res => {
            console.log(res.data.data);
            setData(res.data.data)
        })
    }, [])

  return (
    <div className='leagues-container'>
        {data.map((data) => (
            <div key={data.id} className="league-div">
                <img src={data.logos.light} alt="" />
                <p>{data.name}</p>
            </div>
        ))}
    </div>
  )
}

export default Leagues