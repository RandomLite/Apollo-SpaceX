import React from "react";
import { NavLink } from "react-router-dom";
import falcon from '../../assets/images/falcon.webp'
import Loader from '../../components/loader'

const Missions = (props) => {
  if (props.loading) return <Loader/>;
  if (props.error) return <p>Error :(</p>;
  return (
    <div className="base">
      <h2 className="title"><span></span>Our Missions</h2>
    <div className="all-missions" >
      {props.data.launchesPast.map((launch) => ( 
        <div key={launch.id} className="top">
        <NavLink className="top-item"   to={`/rocket-details/${launch.id}`} >
            <div  className="mission-item" style={{content:`url(${launch.links.flickr_images[0]!=null?launch.links.flickr_images[0]:falcon})`}}></div>  
        
            <div className="details">
              <h3>{launch.mission_name}</h3>
              <p><strong>Launch year:</strong> {launch.launch_year}</p>
              <p><strong>Launch success:</strong> {launch.launch_success===true? " Success ":" Failed "}</p>
              <p><strong>Upcomming:</strong> {launch.upcoming===true?" Yes ": " No "}</p>
              <p><strong>Site: </strong> {launch.launch_site.site_name}</p>
            </div>
        </NavLink>
        {launch.links.article_link!=null?<a id="link" href={launch.links.video_link}>Watch video</a>:null}
        </div>
      ))}
    </div>
    </div>
  );
};

export default Missions;
