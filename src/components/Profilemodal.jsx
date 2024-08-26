import React, {useState} from 'react';
import Avatar from './Avatar';
import { IoSettingsOutline } from "react-icons/io5";
import { FaQuestionCircle } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";

const Profilemodal = (props) => {
  const [showModal, setShowModal] = useState(true);
  return (
    showModal && 
     <div className="fixed inset-0 flex items-start justify-end p-4 m-0">
      <div className="bg-white shadow-lg rounded-lg w-96 h-[550px] p-6 relative overflow-y-auto">
        <button onClick={()=>{setShowModal(false); props.onClose(false); }}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          &times;
        </button>
        <div className="inline-block m-4">
            <Avatar/>
        </div>
        <div className='mb-1 mt-0 inline-block'>
          <h2 className="font-bold text-xl text-black">Bhushan Mahajan</h2>
          <span className="font-normal text-md text-black">B.Tech/B.E. Computers at Rajiv Gandhi Institute of Technology, Mumbai</span>
        </div>
        <div className='mb-5'>
        <a className="link link-info" style={{textDecoration:'none'}}>View & Update Profile</a>
        </div>
        <hr />
        <ul className="menu">
          <li className='text-black'><a><IoSettingsOutline />Settings</a></li>
          <li className='text-black'><a><FaQuestionCircle />FAQs</a></li>
          <li className='text-black'><a><LuLogOut />Logout</a></li>
        </ul>
      </div>
    </div>

  );
}

export default Profilemodal; 
