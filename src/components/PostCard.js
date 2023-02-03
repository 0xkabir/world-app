import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { FaShareAlt, FaRegEye, FaCalendarDay, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";

const PostCard = ({post}) => {
    return (
        <>
        {post.type === 'article' && <div className="card my-3 shadow-sm">
            <img src={post.imgURL} className="card-img-top" alt="..."/>
            <div className="card-body">
                <p className='m-0 fs-5'>✍️ Article</p>
                <div className='d-flex justify-content-between'>
                    <h4 className='m-0 fw-bold'>{post.title}</h4>
                    <p className='m-0 fs-3 fw-bold'>...</p>
                </div>
                <p className='fs-5 text-muted'>{post.details}</p>
                <div className="card-text d-flex justify-content-between align-items-md-center">
                    <div className='d-flex flex-grow-1'>
                    <img src={post.userImg} alt='' className='rounded-circle'/>
                    <div className='mx-3 d-flex flex-column flex-md-row justify-content-md-between align-items-md-center flex-grow-0 flex-md-grow-1'>
                    <p className='m-0 fw-bold fs-5'>{post.userName}</p>
                    <p className='m-0 fs-6'><FaRegEye className='d-none d-md-inline'/> {post.views} views</p>
                    </div>
                    </div>
                    <span className='d-flex align-items-center bg-light px-3 py-2 rounded'><FaShareAlt/> <p className='m-0 px-1 d-block d-md-none'>Share</p></span>
                </div>
            </div>
            </div>}
        {post.type === 'education' && <div className="card my-3 shadow-sm">
            <img src={post.imgURL} className="card-img-top" alt="..."/>
            <div className="card-body">
                <p className='m-0 fs-5'>🔬️ Education</p>
                <div className='d-flex justify-content-between'>
                    <h4 className='m-0 fw-bold'>{post.title}</h4>
                    <p className='m-0 fs-3 fw-bold'>...</p>
                </div>
                <p className='fs-5 text-muted'>{post.details}</p>
                <div className="card-text d-flex justify-content-between align-items-md-center">
                    <div className='d-flex flex-grow-1'>
                    <img src={post.userImg} alt='' className='rounded-circle'/>
                    <div className='mx-3 d-flex flex-column flex-md-row justify-content-md-between align-items-md-center flex-grow-0 flex-md-grow-1'>
                    <p className='m-0 fw-bold fs-5'>{post.userName}</p>
                    <p className='m-0 fs-6'><FaRegEye className='d-none d-md-inline'/> {post.views} views</p>
                    </div>
                    </div>
                    <span className='d-flex align-items-center bg-light px-3 py-2 rounded'><FaShareAlt/> <p className='m-0 px-1 d-block d-md-none'>Share</p></span>
                </div>
            </div>
            </div>}
        {post.type === 'event' && <div className="card my-3 shadow-sm">
            <img src={post.imgURL} className="card-img-top" alt="..."/>
            <div className="card-body">
                <p className='m-0 fs-5'>🗓️ Meetup</p>
                <div className='d-flex justify-content-between'>
                    <h4 className='m-0 my-2 fw-bold'>{post.title}</h4>
                    <p className='m-0 fs-3 fw-bold'>...</p>
                </div>
                <div className='row'>
                    <p className='col-6 col-md-4'><FaCalendarDay/> {post.date}</p>
                    <p className='col-6 col-md-4'><FaMapMarkerAlt/> {post.location}</p>
                </div>
                <button className='btn btn-outline-warning border-secondary w-100 fw-semibold mb-3'>Visit Website</button>
                <div className="card-text d-flex justify-content-between align-items-md-center">
                    <div className='d-flex flex-grow-1'>
                    <img src={post.userImg} alt='' className='rounded-circle'/>
                    <div className='mx-3 d-flex flex-column flex-md-row justify-content-md-between align-items-md-center flex-grow-0 flex-md-grow-1'>
                    <p className='m-0 fw-bold fs-5'>{post.userName}</p>
                    <p className='m-0 fs-6'><FaRegEye className='d-none d-md-inline'/> {post.views} views</p>
                    </div>
                    </div>
                    <span className='d-flex align-items-center bg-light px-3 py-2 rounded'><FaShareAlt/> <p className='m-0 px-1 d-block d-md-none'>Share</p></span>
                </div>
            </div>
            </div>}
        {post.type === 'job' && <div className="card my-3 shadow-sm">
            <div className="card-body">
                <p className='m-0 fs-5'>💼️ Job</p>
                <div className='d-flex justify-content-between'>
                    <h4 className='m-0 my-2 fw-bold'>{post.title}</h4>
                    <p className='m-0 fs-3 fw-bold'>...</p>
                </div>
                <div className='row'>
                    <p className='col-6 col-md-4'><FaBriefcase/> {post.company}</p>
                    <p className='col-6 col-md-4'><FaMapMarkerAlt/> {post.location}</p>
                </div>
                <button className='btn btn-outline-success border-secondary w-100 fw-semibold mb-3'>Apply on Timesjobs</button>
                <div className="card-text d-flex justify-content-between align-items-md-center">
                    <div className='d-flex flex-grow-1'>
                    <img src={post.userImg} alt='' className='rounded-circle'/>
                    <div className='mx-3 d-flex flex-column flex-md-row justify-content-md-between align-items-md-center flex-grow-0 flex-md-grow-1'>
                    <p className='m-0 fw-bold fs-5'>{post.userName}</p>
                    <p className='m-0 fs-6'><FaRegEye className='d-none d-md-inline'/> {post.views} views</p>
                    </div>
                    </div>
                    <span className='d-flex align-items-center bg-light px-3 py-2 rounded'><FaShareAlt/> <p className='m-0 px-1 d-block d-md-none'>Share</p></span>
                </div>
            </div>
            </div>}
        </>
    );
};

export default PostCard;