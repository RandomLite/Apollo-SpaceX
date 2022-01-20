import React from "react";
import { useParams } from "react-router-dom";
import falcon from '../../assets/images/falcon.webp'
import Loader from '../../components/loader'

const RocketsDetails = (props) => {
  const params = useParams();
  const rocketId = params.id;

  const filteredData = props.data.launchesPast.filter((itemData) =>
    itemData.id.toLowerCase().includes(rocketId.toLowerCase())
  );
  if (props.loading) return <Loader/>;
  if (props.error) return <p>Error :(</p>;
  return (
    <div className="base">
      <h2 className="title"><span></span>Rocket Details</h2>
      {filteredData.map((launch) => (
        <div key={launch.id} className="item-rocket">
          <div className="main-details">
           <div  className="img" style={{content:`url(${launch.links.flickr_images[0]!=null?launch.links.flickr_images[0]:falcon})`}}></div>  
            <div className="details">
              <p><strong>Name:</strong> {launch.rocket.rocket_name}</p>
              <p><strong>Type:</strong> {launch.rocket.rocket_type}</p>
              <p><strong>Company:</strong >{launch.rocket.rocket.company}</p>
              <p><strong>Country:</strong> {launch.rocket.rocket.country}</p>
              <div><strong>Engine:</strong><ul className="unorderd-list"><li><i>type: </i> {launch.rocket.rocket.engines.type}</li><li><i>version: </i> {launch.rocket.rocket.engines.version}</li></ul></div>
              <p><strong>Mass:</strong> {launch.rocket.rocket.mass.kg}kg</p>
              <p><strong>Height:</strong> {launch.rocket.rocket.height.meters}m</p>
              <p><strong>Stages:</strong> {launch.rocket.rocket.stages}</p>
            </div>
          </div>
          <div className="bottom-details">
          
            <div className="stage-1">
              <h3>First Stage</h3>
              <ul>
                <li><strong>Number of engines:</strong> {launch.rocket.rocket.first_stage.engines}</li>
                <li><strong>Fuel amount</strong> {launch.rocket.rocket.first_stage.fuel_amount_tons} ton</li>
                <li><strong>Reusable</strong> {launch.rocket.rocket.first_stage.reusable===true?"Yes":"No"}</li>
              </ul>
            </div>

            <div className="stage-2">
              <h3>Second Stage</h3>
              <ul>
                <li><strong>Number of engines:</strong> {launch.rocket.rocket.second_stage.engines}</li>
                <li><strong>Fuel amount</strong> {launch.rocket.rocket.second_stage.fuel_amount_tons} ton</li>
              </ul>
            </div>
            </div>
            <a id="article" href={launch.links.article_link}>Go to article</a>
        </div>
      ))}      
    </div>
  );
};

export default RocketsDetails;