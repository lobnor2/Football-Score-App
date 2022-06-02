import React, { useEffect, useState } from 'react';
// import '../App.css';
import axios from 'axios';
import { BeatLoader } from 'react-spinners';


const Leagues = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get('https://api-football-standings.azharimm.site/leagues').then(res => {
            console.log(res.data.data);
            setData(res.data.data)
        }).catch(err => console.log(err)).finally(() => setLoading(false));
    }, [])

  return (
    <div className='leagues-container'>
        { loading ? 
        <div className='league-beatloader'>
            <BeatLoader /> 
        </div>
        :data.map((data) => (
            <div key={data.id} className="league-div">
                <img src={data.logos.light} alt="" />
                <p>{data.name}</p>
            </div>
        ))}
    </div>
  )
}

export default Leagues