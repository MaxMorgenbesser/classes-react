import React from "react";
import {useEffect,useState} from 'react'



function FunctionalComponents({ Pastcount }) {
    const [coffeeList,setCoffeeList] = useState([])
const [count,setCount]=useState(Pastcount)

  useEffect(()=>{
    fetch('https://api.sampleapis.com/coffee/hot')
    .then(res=>res.json())
    .then(coffees=>setCoffeeList(coffees))
    .catch(err=>console.log(err))
  },[])

    return(<>{coffeeList.map(coffee=><h1 key={coffee.id}>{coffee.title}</h1>)}</>)
}

export default FunctionalComponents;
