import axios from 'axios';
// import React from 'react';
import React, { useEffect, useState } from 'react';
import { CardColumns } from 'react-bootstrap';
import Carts from '../Carts/Carts';
import MainHeaderimg from '../MainHeaderimg/MainHeaderimg';
import './league.css'


const LeagueContainer = () => {
    const [LeaguerCard,setLeagueCard] = useState([]);
    const sliceOfLeagueCard = LeaguerCard.slice(0,18);


    useEffect(()=>{
        const url ='https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
        axios(url)
        .then(data => setLeagueCard(data.data.leagues))
    },[])
    
    return (
        <div className=' bgGradient'>
            <MainHeaderimg></MainHeaderimg>
            <CardColumns className="container mt-5">
                {
                    sliceOfLeagueCard.map(cartData => <Carts cartData ={cartData} key={cartData.idLeague}></Carts>)
                }
            </CardColumns>
            
        </div>
    );
};

export default LeagueContainer;