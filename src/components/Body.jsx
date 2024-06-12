import RestaurantCard from "./RestaurantCard"
import {useState} from 'react';
import {allRestaurant} from '../utils/constant'

const Body=()=>{
    const [resData,setResData]=useState(allRestaurant?.card.restaurants)
    console.log(resData)
    return(
        <div className="body">
            <button onClick={()=>{
                    setResData(resData.filter((item)=>item.info.avgRating>4))
                    console.log(resData)
            }}>Filter top restaurant</button>
        <div className="res-card-container">
           { resData.map((item)=> 
          
        <RestaurantCard key={item.info.id}  restaurant={ item.info}/>)}
        </div>
        </div>
    )
}
export default Body;