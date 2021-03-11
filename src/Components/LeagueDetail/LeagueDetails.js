import axios from 'axios';
// import React from 'react';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDrawPolygon, faFan, faFlag, faMapMarkerAlt, faMars } from '@fortawesome/free-solid-svg-icons'
import  './LeagueDetails.css'
import male from '../../Photo/male.png'
import female from '../../Photo/female.png'

// League Details Start

const LeagueDetails = () => {
    const { leagueId } = useParams()

    const [leagueDetails, setLeagueDetails] = useState({})
    console.log(leagueDetails);
    const {strTwitter,strLogo,strTrophy,strBadge,strLeague,intFormedYear,strCountry,strSport,strGender,strDescriptionEN,strDescriptionCN,strLeagueAlternate ,strBanner} = (leagueDetails);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`
        axios(url)
            .then(data => setLeagueDetails(data.data.leagues[0]))
    }, [leagueId])
    let img ;

    //condition uses

    if (strGender === "Male") {
       
        img  = <img className="w-100 h-100" src={male} alt=""></img>
    }
    else if(strGender === "Female"){
        img = <img src={female} alt=""></img>
    }
    else{
        img=""
    }
    return (
        <div className="bgGradient">
            <div className="card removeBorder h-100">
                <img src={strBanner} alt=""/>
            </div>
            <Card className="bg-info text-white container mt-3">
                <Card.Body className="row">
                    <div className="col-md-5 col-sm-12">
                        <h4>{strLeague}
                        </h4>
                            <p><FontAwesomeIcon icon={faFan} /> Alternate : {strLeagueAlternate}</p>
                            <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Founded : {intFormedYear}</p>
                            <p><FontAwesomeIcon icon={faFlag} />  Country : {strCountry}</p>
                            <p><FontAwesomeIcon icon={faDrawPolygon} />  Sport Type : {strSport}</p>
                            <p><FontAwesomeIcon icon={faMars} />  Gender : {strGender}</p>
                    </div>
                    
                    <div className="col-md-7 col-sm-12">
                        { img }
                    </div>
                </Card.Body>
            </Card>
            <div className="desc mt-3 container text-white">
                <p>{strDescriptionEN}</p>
                <p className="mt-3">{strDescriptionCN}</p>
            </div>

{/* dynamic uses in the api */}

            <div className="text-center mb-1 icons">
            <a className="p-1" href="facebook.com" target="_blank"><FontAwesomeIcon className="iCon" icon={['fab', 'facebook']} /></a>
            <a className="p-1" href="twitter.com" target="_blank"><FontAwesomeIcon className="iCon" icon={['fab', 'twitter']} /></a>
            <a className="p-1" href="linkedin.com" target="_blank"><FontAwesomeIcon className="iCon" icon={['fab', 'linkedin']} /></a>
            <a className="p-1" href="https://github.com/Noor-E-Jannat111/" target="_blank"><FontAwesomeIcon className="iCon" icon={['fab', 'github']} /></a> 
            </div>
        </div>
    );
};

export default LeagueDetails; 