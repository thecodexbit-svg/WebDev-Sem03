import React from 'react'
import { useState } from 'react'
import './ZomatoQues'


const ZomatoQues = () => {
    let [input , setInput] =  useState("")
    let [apiData , setApidata] = useState([])

    async function apiCall(){
        // if(input.trim()==""){
        //     alert("input field is empty")
        //     return
        // }

       let response =   await fetch(`https://dummyjson.com/products/search?q=${input}`)
       let data =  await response.json()
       console.log(data,"hehehe")
       setApidata(data.products)


    }

    function Ascending(){
        let sortedData = [...apiData].sort((a,b)=> a.price - b.price)
        setApidata(sortedData)
    }

    function Descending(){
        let sortedData = [...apiData].sort((a,b)=> b.price - a.price)
        setApidata(sortedData)
    }

  return (
    <div className="container">

    <div className="controls">
        <input onChange={(e)=>setInput(e.target.value)} />

        <button onClick={apiCall}>Search</button>
        <button onClick={Ascending}>Ascending</button>
        <button onClick={Descending}>Descending</button>
    </div>

    <ul className="products">
        {apiData.map((a) => (
            <li className="card" key={a.id}>
                <img src={a.thumbnail} alt={a.title} />

                <div className="details">
                    <h3>{a.title}</h3>
                    <h4>{a.description}</h4>
                    <h5>₹{a.price}</h5>
                </div>
            </li>
        ))}
    </ul>

</div>
  )
}

export default ZomatoQues