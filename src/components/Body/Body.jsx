import './body.css';
import { ResturantCard } from '../ResturantCard/ResturantCard';
import {useEffect, useState} from 'react';
import { swiggy_api_URL } from '../../Utils/constants';
import { Shimmer } from '../Shimmer/Shimmer';
export const Body = () => {
  const [resList, setResList] = useState([])
  const [filteredRes, setFilteredRes] = useState([])
  const [searchInp, setSearchInp] = useState('')

  useEffect(() => {
    getRestaurants();
  }, []);

  // async function getRestaurant to fetch Swiggy API data
  async function getRestaurants() {
    // handle the error using try... catch
    try {
      const data = await fetch(swiggy_api_URL);
      const json = await data.json();
      // console.log(json)
      console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      // updated state variable restaurants with Swiggy API data
      setResList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRes(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    } catch (error) {
      console.log(error);
    }
  }

  const handleFilterClick= () => {
    const filteredList = resList?.filter((resturant) => resturant.info.avgRating > 4);
    console.log(filteredList)
    setFilteredRes(filteredList)
  }
  const handleInput = (e) => {
    setSearchInp(e.target.value)
  }
  const handeleSearchClick = () =>{
    const filteredArr = resList.filter((res) => res.info.name.toLowerCase().includes(searchInp.toLowerCase()))
    setFilteredRes(filteredArr)
  }
    // conditonal rendering
    return resList?.length === 0 ? <Shimmer /> : (
      <div className='body'>
        <div className='filter'> 
        <div className='search-container'>
          <input type = "text" onChange={handleInput} className='search-text' />
          <button className='search-btn' onClick={handeleSearchClick}>Search</button>
        </div>
        <button className='filter-btn' onClick= {handleFilterClick}> Top Rated Resturants</button>
         </div>
        <div className='res-container'>
           {/* Resturant Cards */}
           {filteredRes?.map((resturant) => {
          return <ResturantCard key={resturant.info.id} {...resturant.info} />;
        })}
        </div>
      </div>
    )
  }