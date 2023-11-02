import React,{useEffect, useState} from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import StayCurrentPortraitIcon from '@mui/icons-material/StayCurrentPortrait';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DescriptionIcon from '@mui/icons-material/Description';
import { useParams } from 'react-router-dom';

const Details = () => {

 
 


  




  return (
    <div className='container mt-3'>
     <span className='bg-light' style={{fontSize:35,fontWeight:400}}>Wellcome lll</span>

     <Card sx={{ maxWidth: 600}}>
      <CardContent>
        <div className="row">
        <div className="add_btn text-end mx-2">
        <button className='btn btn-primary mx-2'><EditIcon/></button>
        <button className='btn btn-danger mx-2'><DeleteIcon/></button>
        </div>
       <div className="left_view col-lg-6 col-md-6 col-12">
       <img src="/profile2.png" style={{width:50}} alt="profile" />
        <h2 className='mt-3'>Name: <span style={{fontWeight:'bold'}}>ppp</span></h2>
        <h2 className='mt-3'>Age: <span style={{fontWeight:'bolder'}}>dd</span></h2>
        <h2 className='mt-3'> <EmailIcon></EmailIcon> Email: <span style={{fontWeight:'bolder'}}>ss</span></h2>
        <h2 className='mt-3'>  <WorkIcon></WorkIcon>Occupation: <span style={{fontWeight:'bolder'}}>aa</span></h2>
       </div>

       <div className="right_view col-lg-6 col-md-6 col-12">
       
       <h2 className='mt-5'> <StayCurrentPortraitIcon></StayCurrentPortraitIcon> Mobile: <span style={{fontWeight:'bold' ,fontSize:20}}>aa</span></h2>
       <h2 className='mt-3'>  <LocationOnIcon></LocationOnIcon>Location: <span style={{fontWeight:'bold'}}>aa</span></h2>
       <h2 className='mt-3'>  <DescriptionIcon></DescriptionIcon> Description: <span style={{fontWeight:200, fontSize:18}}> aa</span></h2>
       </div>
       </div>
      </CardContent>
      </Card>
    </div>
  )
}

export default Details
