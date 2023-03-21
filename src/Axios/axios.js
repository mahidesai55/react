import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Axios() {

  let [data,setdata]= useState([]);
 
  useEffect(()=>{
    // axios.get("https://dummyjson.com/products")
    // .then ((response)=>{
    //    console.log(response.data)
    //    setdata(response.data.products)
    // });

    async function fetchData(){
        const response = await axios.get("https://dummyjson.com/products")
        setdata(response.data.products)
    }
    
    fetchData()
  }, []);

    return (
    <div className='axios'>
        {
            data.map((element,index)=>{
                return(<>
                <img src={element.images[0]} alt=""></img>
                <h1 key={index}>{element.title}</h1>
                <p>{element.description}</p>
                <h4>{element.price}</h4>
                <h5>{element.discountPercentage}</h5>
                </>
                )
            })
        }
    </div>

  )
}

export default Axios