import React from 'react';
import "./SeasonsShow.css";

const SeasonConfig = {
    summer : {
        text : 'its too hot',
        iconName : 'sun'
    },
    winter : {
        text : 'its cold here',
        iconName : 'snowflake'
    }
}


const getSeason = (lat,month)=>{
    if(month>2 && month<9){
        return lat>0?'summer':'winter'
    }else{
        return lat<0?'summer':'winter'
    }
}


const seasonsshow = (props)=>{
    const season = getSeason(props.lat, new Date().getMonth())
    const {text, iconName} = SeasonConfig[season]
    return(
        <div className={`seasonsshow ${season}`}>
            <i className={`left-icon massive ${iconName} icon`}></i>
            <h1>{text}</h1>
            <i className={`${iconName} right-icon icon massive`}></i>
        </div>
    )
}


export default seasonsshow