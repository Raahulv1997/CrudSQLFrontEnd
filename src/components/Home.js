
import React from 'react'
import { NavLink} from 'react-router-dom'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Home = () => {
  
  return (
    <>
           <div className="mt-5">
   <div className="container  overflow-auto">
    
       <div className="add-btn mt-2 text-end ">
       <NavLink  to={'/adduser'}> <button className='btn btn-primary '>Add Employee</button> </NavLink>
       </div>
       
    <h1 className='text-center  mt-3 mb-3 bg-success py-3 text-white'>Empolyee Details</h1>
    <table class="table table-striped ">
  <thead className='table-dark'>
    <tr>
      <th scope="col">name</th>
      <th scope="col">USERNAME</th>
      <th scope="col">EMAIL</th>
      <th scope="col">JOB</th>
      <th scope="col">NUMBER</th>
      <th scope="col" className='text-center'>OPERATIONS</th>
    </tr>
  </thead>
  <tbody>
     

      <tr>
      <th scope="row"></th>
      <td>kkk</td>
      <td>lll</td>
      <td>hhh</td>
      <td>sss</td>
      <td>
        <div className="d-flex justify-content-between">

        <NavLink  to={`view/ll}`}><button className='btn btn-success' ><RemoveRedEyeIcon/></button> </NavLink>
   <button className='btn btn-primary'><EditIcon/></button> 
          <button  className='btn btn-danger'><DeleteIcon/></button>
        </div>
      
      </td>
    </tr>
  
      

            

 
  
  </tbody>
</table>
    </div>
   </div>
    </>
  )
}

export default Home
