import React from 'react';
import Missions from './missions'

const Index_Missions =({data})=>{
    return(
       <div className="index-missions-main-style">
        <Missions data={data}/>
       </div>
    )
}
export default Index_Missions