import './resturantCard.css';
import { CDN_URL } from '../../Utils/constants';

export const ResturantCard = ( {
    cloudinaryImageId,
    name,
    cuisines,
    area,
    lastMileTravelString,
    costForTwoString,
    avgRating,
    deliveryTime
  }) => {
    return(
      <div className='res-card'>
        <img className="res-logo" alt='res-logo' src={ CDN_URL + cloudinaryImageId} />
        <h3>{name}</h3>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{area}</h5>
        <span>
        <h5> {avgRating} stars </h5>
        <h5>{lastMileTravelString}</h5>
        <h5>{costForTwoString}</h5>
        </span>
        <h5> {deliveryTime} mins</h5>
      </div>
    )
  }