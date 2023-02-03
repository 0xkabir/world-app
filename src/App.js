import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react';
import { FaCaretDown, FaUserPlus, FaMapMarkerAlt, FaPen, FaExclamationCircle, FaSearch } from "react-icons/fa";
import PostCard from './components/PostCard';

function App() {
  const [posts, setPosts] = useState([])
  useEffect(()=>{
    fetch('https://world-app-server.vercel.app/posts')
    .then(response => response.json())
    .then(posts => setPosts(posts))
  },[])
  return (
    <div style={{maxWidth: '1440px'}}>
      <div className='row justify-content-between align-items-center d-none d-md-flex'>
        <img src='https://i.ibb.co/0ZhSznB/atg-logo.png' alt='' className='col-2 ms-5'/>
        <span className='bg-light d-flex justify-content-center align-items-center rounded-pill px-2 py-2 col-4'>
          <FaSearch className='me-2'/>
          <input type='text' placeholder='Search for your favorite groups in ATG' className='border-0 bg-light w-75'/>
        </span>
        <span className='col-3'>
            Create an account.
            <span className='fw-bold'><span className='text-primary'> It's free</span> <FaCaretDown/></span>
          </span>
      </div>
      <div className='position-relative'>
        <img src='https://i.ibb.co/bW7n9Gh/computer-engineering-full.png' alt='' className='img-gradient img-fluid d-block d-md-none'/>
      <img className='img-gradient img-fluid object-fit-none d-none d-md-block' src='https://i.ibb.co/SfT8scN/computer-engineering.png' alt='' />
      <div className='position-absolute top-50 text-light ms-2 ms-md-5'>
        <h1>Computer Engineering</h1>
        <p className='fs-5'>142,765 Computer Engineers follow this</p>
      </div>
      </div>
      <div className='container-md' style={{padding: '0px'}}>
      <div className='fw-bold d-flex d-md-none justify-content-between align-items-center mt-2 mx-2'>
        <span>Posts (32)</span>
        <button className='btn bg-light'>Filter: All <FaCaretDown/></button>
      </div>
      <div className='d-flex justify-content-between my-3 d-none d-md-flex border-bottom'>
        <div className=''>
          <span className='me-2 fw-semibold d-inline-block border-bottom border-2 border-dark py-2'>All Posts (32)</span>
          <span className='mx-2 text-muted fw-semibold d-inline-block'>Article</span>
          <span className='mx-2 text-muted fw-semibold d-inline-block'>Event</span>
          <span className='mx-2 text-muted fw-semibold d-inline-block'>Education</span>
          <span className='mx-2 text-muted fw-semibold d-inline-block'>Job</span>
        </div>
        <div className='d-flex'>
          <button className='btn d-flex align-items-center me-2 fw-semibold'>Write a Post <FaCaretDown/></button>
          <button className='btn btn-primary d-flex align-items-center ms-2 fw-semibold'><FaUserPlus/> Join Group</button>
        </div>
      </div>
        <div className='row justify-content-between'>
          <div className='col-12 col-md-8'>
            {
            posts.map((post, index) => <PostCard key={index} post={post}/>)
              }
          </div>
          <div className='col-md-3 d-none d-md-block'>
              <div class="input-group mb-3 d-flex align-items-center">
                <FaMapMarkerAlt/>
                <input type="text" readOnly value="Noida, India" className='border-0 form-control'/>
                <FaPen/>
              </div>
              <span className='d-inline-block my-1 text-muted'>
              <FaExclamationCircle className='me-2'/>
              Your location will help us serve better and extend a personalised experience.
              </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
