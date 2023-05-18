import { Button } from '@mui/material'
import React, { useState } from 'react'
import Todo from './Todo'
import { Add } from '../redux/actions/actions'
import { useDispatch } from 'react-redux'

const Home = () => {

 const [data, setdata] = useState("");
 
console.log(data)

const dispatch= useDispatch()
const addData=()=>{
  dispatch(Add(data))
  setdata("")
}
 

  return (
    <>
    
    <div className='container'>
       <section className='mt-3 text-center'>
        <h3>Enter task</h3>
        
        <div className="todo col-lg-5 mx-auto d-flex justify-content-between">
        <input type='text' className="form-control" value={data} onChange={(e)=>setdata(e.target.value)}  name='task' />
        <Button variant="contained " className="mx-2" style={{background:"#ee5253",color:"#fff"}} onClick={()=>addData()}>Add</Button>

        </div>
        <Todo/>
        </section>
        
    </div>
    </>
  )
}

export default Home