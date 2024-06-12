import RestaurantCard from "./RestaurantCard"
import {useState} from 'react';
import {allRestaurant} from '../utils/constant'

const Body=()=>{
    const [resData,setResData]=useState(allRestaurant)
    return(
        <div className="body">
        <div className="res-card-container">
           { resData?.card.restaurants.map((item)=> 
          
        <RestaurantCard key={item.info.id}  restaurant={ item.info}/>)}
        </div>
        </div>
    )
}
export default Body;