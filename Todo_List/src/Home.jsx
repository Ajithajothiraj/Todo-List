import React, { useState,useEffect } from 'react'

const Home = () => {
    const[status,setStatus]=useState();
    const[task,setTask]=useState();
    const[lists,setLists]=useState([])
    useEffect(()=>{
        const fetchItem=async()=>{
            try{
               console.log("before fetch")
                const response=await fetch('http://localhost:3000/data',{
                    method:"GET"
                })
                if(response.ok){
                    const result=await response.json();
                    setLists(result.data)
                    console.log("fetched");
                }     
               
            }catch(err){
                console.log("there is an err",err);
            }
        }
        fetchItem()
    },[])
  return (
    <>
     <div className='search'>
        <input type='text' placeholder='enter the searching task'/>
        <button className='add'>+</button>
    </div> 
    {lists.length>0 ? (
        <table border="1" cellPadding="10">
            <tbody>
                {lists.map((list)=>(
                    <tr key={list.id}>
                        <td>{list.task_list}</td>
                        <td>
                            <button className='statusbox'>{list.status}</button>
                        </td>
                    </tr>

                ))}
            </tbody>
        </table>
    ):(
        <h1>there is no result</h1>
    )}
    </>
  )
}

export default Home