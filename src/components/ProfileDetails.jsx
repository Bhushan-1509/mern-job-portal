import React from 'react';
import InfoCard from './InfoCard';
import { FaBirthdayCake } from "react-icons/fa";
import { BsGenderMale } from "react-icons/bs"
import { GrLocation } from "react-icons/gr";
import { AiOutlineMail } from "react-icons/ai";
import { CiPhone } from "react-icons/ci";
import { MdModeEditOutline } from "react-icons/md";


const ProfileDetails = () => {
    return (
        <div className="bg-gray-100">
            <div className="container mx-auto py-8">
                <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                    <div className="col-span-4 sm:col-span-3">
                        <div className="bg-white shadow rounded-lg p-6">
                        {/* <button className="relative top-2 right-2 text-blue-500 hover:text-blue-700">
                                <MdModeEditOutline />
                            </button> */}
                            <div className="flex flex-col items-center">

                                <img src="https://randomuser.me/api/portraits/men/94.jpg" className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0" />
                                <h1 className="text-xl font-bold text-black">Bhushan Mahajan</h1>

                                <p className="text-gray-700">B.Tech/B.E.</p>
                                <div className="mt-6 flex flex-row gap-4 justify-center">
                                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Update</button>
                                    <button className="bg-red-300 hover:bg-red-400 text-gray-700 py-2 px-4 rounded">Resume</button>
                                </div>
                            </div>
                            <hr className="my-6 border-t border-gray-300" />
                            <div className="flex flex-col">
                                <span className="text-gray-700 uppercase font-bold tracking-wider mb-2 inline">Info</span>
                                <ul>
                                    <li className="mb-2 text-black flex items-center"><FaBirthdayCake className='mr-2' />15th September 2002</li>
                                    <li className="mb-2 text-black flex items-center"><BsGenderMale className='mr-2' />Male</li>
                                    <li className="mb-2 text-black flex items-center"><GrLocation className="mr-2" />Mumbai</li>
                                    <li className="mb-2 text-black flex items-center"><AiOutlineMail className="mr-2" />bhushan@localhost</li>
                                    <li className="mb-2 text-black flex items-center"><CiPhone className='mr-2' />+91 9898989898</li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    <div className="col-span-4 sm:col-span-9">
                        <div className="bg-white shadow rounded-lg p-6 text-black">
                            <InfoCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileDetails;
