import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link } from 'react-router-dom'

const Single = () => {
  return (
    <div className='single'>
      <div className='content'>
        <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="post-image"/>
      <div className='user'>
        <img src='https://res.cloudinary.com/dv08oqgvx/image/upload/v1681829509/AmazonasSprint3/yo_enzjbb.png' alt="user-image"/>
      <div className="info">
        <span>Juan Suarez</span>
        <p>Posted 2 days ago</p>
      </div>
      <div className='edit'>
        <Link >
          <img src={Edit} alt="edit-icon" />  
        </Link>
        <Link>
          <img src={Delete} alt="edit-icon" />   
        </Link> 
      </div>
      </div>
      </div>
      <div className='menu'>m</div>
    </div>
  )
}

export default Single