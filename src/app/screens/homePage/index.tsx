import React, { useEffect } from "react";
import PopularDishes from "./PopularDishes";
import Statistics from "./Statistics";
import NewDishes from "./NewDishes";
import ActiveUsers from "./ActiveUsers";
import Advertisement from "./Advertisement";
import Events from "./Events";
import "./../../../css/home.css";

export default function HomePage() {
  // Selector: Store => Data

useEffect(() => {
  // Backend server data request => Data
  // Slice: Data => Store
}, []);

  return <div className={"homepage"}>
    <Statistics/>
    <PopularDishes/>
    <NewDishes/>
    <Advertisement/>
    <ActiveUsers/>
    <Events/>
  </div>;
}