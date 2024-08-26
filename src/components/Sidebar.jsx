import React, { useState } from 'react';


const Sidebar = (props) => {
    const [experience, setExperience] = useState(0);
    return (
        <>
            <div className="relative flex flex-col bg-clip-border bg-white text-gray-700 w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 z-0">
                <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700  overflow-y-auto">
                    <div className="flex h-screen bg-white-100 relative w-full">
                        <div className="w-64 bg-white  p-4 relative">
                            <h2 className="text-xl font-semibold mb-4">Filter By</h2>

                            <div className="mb-4">
                                <h3 className="text-lg font-medium mb-2">Work mode</h3>
                                <label className="block mb-1">
                                    <input type="checkbox" className="bg-white-300 form-checkbox text-blue-600 bg-white" />
                                    <span className="ml-2 text-gray-700">Work from office</span>
                                </label>
                                <label className="block mb-1">
                                    <input type="checkbox" className="form-checkbox text-blue-600 bg-white" />
                                    <span className="ml-2 text-gray-700">Remote</span>
                                </label>
                                <label className="block mb-1">
                                    <input type="checkbox" className="form-checkbox text-blue-600 bg-white" />
                                    <span className="ml-2 text-gray-700">Hybrid</span>
                                </label>
                            </div>
                            <hr className="border-gray-300 mb-4" />
                            <div className="mb-4">
                                <h3 className="text-lg font-medium mb-2">Salary</h3>
                                <label className="block mb-1">
                                    <input type="checkbox" className="form-checkbox text-blue-600 bg-white" />
                                    <span className="ml-2 text-gray-700">0-3 Lakhs</span>
                                </label>
                                <label className="block mb-1">
                                    <input type="checkbox" className="form-checkbox text-blue-600 bg-white" />
                                    <span className="ml-2 text-gray-700">3-6 Lakhs</span>
                                </label>
                                <label className="block mb-1">
                                    <input type="checkbox" className="form-checkbox text-blue-600 bg-white" />
                                    <span className="ml-2 text-gray-700">6-10 Lakhs</span>
                                </label>
                                <label className="block mb-1">
                                    <input type="checkbox" className="form-checkbox text-blue-600 bg-white" />
                                    <span className="ml-2 text-gray-700">More than 10 Lakhs</span>
                                </label>
                            </div>
                            <hr className="border-gray-300 mb-4" />
                            <div className="mb-4">
                                <h3 className="text-lg font-medium mb-2">Posted by</h3>
                                <label className="block mb-1">
                                    <input type="checkbox" className="form-checkbox text-blue-600 bg-white" />
                                    <span className="ml-2 text-gray-700">Company jobs</span>
                                </label>
                                <label className="block mb-1">
                                    <input type="checkbox" className="form-checkbox text-blue-600 bg-white" />
                                    <span className="ml-2 text-gray-700">Consultants</span>
                                </label>
                            </div>
                            {/* <hr className="border-gray-300 mb-4" /> */}
{/* 
                            <div>
                                <h3 className="text-lg font-medium mb-2">Experience</h3>
                                <label className="">
                                    <span className="ml-2 text-gray-700">{experience} years</span>
                                </label>
                                <div className="flex flex-col items-center p-6">

                                    <input
                                        onChange={(e)=>setExperience(e.target.value)}
                                        type="range"
                                        id="experience"
                                        name="experience"
                                        min="0"
                                        max="30"
                                        defaultValue={0}
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                    />

                                    <div className="flex justify-between w-full text-sm text-gray-600">
                                        <span>0 Years</span>
                                        <span>30 Years</span>
                                    </div>
                                </div>


                            </div> */}

                            <div className="flex-1 p-6 bg-white">
                            </div>
                        </div>
                        </div>
                </nav>
            </div>
        </>
    );
}

export default Sidebar;
