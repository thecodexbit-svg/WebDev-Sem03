import React, { useCallback, useMemo } from 'react'
import { useState } from 'react'
import Child from './Child'

const MemoDemo = () => {



    // Local Storage
    let obj={
        id:1,
        name:"om"
    }
    localStorage.setItem("Key",JSON.stringify(obj)) // data is stored in a string format
    let Local_data = localStorage.getItem("Key")
    let name = obj.name
    console.log("Local_Data:",Local_data)








   let [count , setCount] =  useState(0)

    // let res = 0; //this is the problem, as this value is calculated every time when it renders
    // for(let i=0 ; i<100000000 ; i++){
    //     res+=i
    // }


    // we use useMemo not useEffect as useEffect do not returns the value and we will not be able to show the data on UI.
    // if there is no need to save data or show it on UI we can use useEffect to stop the rerenders
    let data = useMemo(()=>{ //this works as DP , computes the value one time and saves it.

        let res = 0
        for(let i=0 ; i<1000000000 ; i++){
            res+=i
        }
        return res

    },[])

    let demo = ()=>{
        console.log("Demo Function")
    }

    let fun = useCallback(demo,[]) // useCallback optimizes the function, as it prevents the changing of the refrence of the function upon rerendering.
  return (

    // <div>
    //     <h1>res: {data}</h1>
    //     <h1>{count}</h1>
    //     <button onClick={()=>setCount(count+1)}>Add</button>

    //     {/* <Child count={count}/> we pass the props this time so the memo will FAIL and child will rerender*/}
    //     {/* <Child fun={demo}/> we can think that demo value is not changing so child will not rerender BUT it fails as funtion is a refrence data type and each time refrence changes the props value changes*/ }
    //     {/* TO SOLVE THIS PROBLEM WE USE useCallback */}

    //     <Child fun={fun}/>
    // </div>

    <div>
        {/* Local Storage */}
        <h1>{name}</h1>
    </div>

  )
}

export default MemoDemo