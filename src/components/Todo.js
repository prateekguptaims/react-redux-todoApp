import React, { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal'
import { Button } from '@mui/material';
import { Remove } from '../redux/actions/actions';
import { Update_data } from '../redux/actions/actions';

const Todo = () => {
  const { User_data } = useSelector((state) => state.todoreducers)
  console.log(User_data)
  
const dispatch= useDispatch()
  const [showeye, setshoweye] = useState(false)
  const [showeyevalue, setshoweyevalue] = useState("")
  const remove=(id)=>{
    // console.log(id)
    dispatch(Remove(id))

  }
  const usertask_update=()=>{
    dispatch(Update_data(update,ind))
    handleClose()
  }
  const handleshow=(e)=>{
    setShow(true)
    setupdate(e)
  }

  const [show,setShow]=useState(false);
  const [update,setupdate]=useState("");
  const [ind,setind]=useState("");
  const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);
  return (
    <div className='todo_data col-lg-5 mx-auto mt-2'>
      {
        User_data.map((e, i) => {
          return (
            <>
              <div key={i} className='todo_container d-flex justify-content-between align-items-center px-2 mb-2' style={{ background: "#bcdde1", borderRadius: "3px", height: "45px" }}>

                <li style={{ listStyle: "none" }}>{e}</li>
                <div className='edit_dlt col-lg-3 py-2 d-flex justify-content-between  '>
                  <EditIcon style={{ color: "#3c40c6", cursor: "pointer" }} onClick={()=>{setind(i)
                     handleshow(e)}}/>
                  <DeleteIcon style={{ color: "red", cursor: "pointer" }} onClick={()=>remove(i)} />
                  <RemoveRedEyeIcon style={{ color: "green", cursor: "pointer" }} onClick={()=>{setshoweye(true)
                  setshoweyevalue(e)}}/>


                </div>
              </div>
            </>
          )
        })
      }
      <Modal show={showeye} className='text-center' >
        <h1>{showeyevalue}</h1>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>setshoweye(false)}>
            Close
          </Button>
          
          
        </Modal.Footer>
      </Modal>

      {/* update popup modal*/}
      <Modal show={show} onHide={handleClose}>
        <h3 className='text-center'>Update Your Task</h3>
        <Modal.Header >
          <Modal.Title>Update Your Task</Modal.Title>
        </Modal.Header>
        <div className="todo col-lg-5 mx-auto d-flex justify-content-between">
        <input type='text' className="form-control" value={update} 
        onChange={(e)=>setupdate(e.target.value)}  name='task' />
       </div>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>usertask_update()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Todo