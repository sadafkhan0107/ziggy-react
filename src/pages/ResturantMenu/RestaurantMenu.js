import { useState,useEffect } from "react";
import { Shimmer } from "../../components/Shimmer/Shimmer";

export const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null)
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async() => {
        const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5103832&lng=77.4063471&restaurantId=713709&catalog_qa=undefined&submitAction=ENTER')
        const json = await data.json();
        console.log(json?.data);
        setResInfo(json?.data)
    }
    if(resInfo === null) 
    return <Shimmer /> 

    const {name, cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap
?.REGULAR?.cards[1]?.card?.card

    return (
        <div>
            <h1>{name}</h1>
            <h3>{cuisines.join(', ')}</h3>
            <h3> {costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
                {itemCards.map(item => <li key={item?.card?.info?.id}>
                    {item?.card?.info?.name} - {item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}
                    </li>)}
                {/* <li>{itemCards[0]?.card?.info?.name}</li> */}
            </ul>
        </div>
    )
}