import { CLOUDINARLY_URL } from "../utils/constant"
const RestaurantCard=(props)=>{
    const { name,areaName,avgRating,cuisines,costForTwo,cloudinaryImageId,id }=props.restaurant
    return(
            <div  key={id} className="card">
                <img className="res-img" 
                    src={CLOUDINARLY_URL+cloudinaryImageId}
                />
                <h3 className="title">{name}</h3>
                <h4 className="rating">{avgRating} rating</h4>
                <h4 className="cost-for-two">₹ {costForTwo} for two</h4>
                <h6 className="cuisines">{cuisines.join(',')}</h6>
                <div className="address">{areaName}</div>
            </div>
    )
}
export default RestaurantCard