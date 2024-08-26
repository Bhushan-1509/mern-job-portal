import React, { useState, useEffect } from 'react';
import { MdModeEditOutline } from "react-icons/md";
import ModalDialogForm from './ModalDialogForm';
import statesData from '../data/states.json';

const InfoCard = () => {
    const [isUpdateJobTypeBtnClicked, setIsUpdateJobTypeBtnClicked] = useState(false);
    const [isUpdateEducationDetailsBtnClicked, setIsUpdateEducationDetailsBtnClicked] = useState(false);
    const [isUpdateSkillsBtnClicked, setIsUpdateSkillsBtnClicked] = useState(false);
    const [isUpdateInternshipBtnClicked, setIsUpdateInternshipBtnClicked] = useState(false);
    const [isUpdateResumeBtnClicked, setIsUpdateResumeBtnClicked] = useState(false);
    const [skills, setSkills] = useState([]);
    const [skill, setSkill] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [companyName, setCompanyName] = useState('');
    const [duration, setDuration] = useState('');
    const [details, setDetails] = useState([]);

    const handleAddSkill = () => {
        if (skill) {
            setSkills([...skills, skill]);
            setSkill('');
        }
    };

    const handleRemoveSkill = (index) => {
        const newSkills = skills.filter((_, i) => i !== index);
        setSkills(newSkills);
    };

    const handleAddDetails = () => {
        if (companyName && duration) {
            setDetails([...details, { companyName, duration }]);
            setCompanyName('');
            setDuration('');
        }
    };

    return (
        <div className="container mx-auto space-y-6">
            {isUpdateJobTypeBtnClicked && <ModalDialogForm title="Career Info" onCancel={(booleanVal) => { setIsUpdateJobTypeBtnClicked(booleanVal); }} content={
                <div className="flex">
                    <div className="container mx-auto p-4">
                        <form className="bg-white px-8 pt-6 pb-8">

                            <div className="">
                                <label className="text-xl font-semibold mb-4" for="jobType">
                                    Career Preferences
                                </label>
                                <select id="jobType" name="jobType" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline mt-4">
                                    <option value="job">Job</option>
                                    <option value="internship">Internship</option>
                                    <option value="contractual">Contractual Basis</option>
                                </select>
                            </div>
                        </form>
                    </div>

                </div>
            } />}

            {isUpdateEducationDetailsBtnClicked && <ModalDialogForm title="Education details" widthVal="w-3/4" onCancel={(booleanVal) => setIsUpdateEducationDetailsBtnClicked(booleanVal)} content={
                <div className="container mx-auto p-4">
                    <form className="bg-white shadow-sm -lg px-8 pt-6 pb-8 mb-4">
                        <div className="mb-6">
                            <h2 className="text-xl font-semibold mb-4">Class X Details</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="classNameXState">
                                        State Name
                                    </label>
                                    <select id="classXState" name="classXState" className="block appearance-none w-full bg-gray-100 border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-blue-500">
                                        <option value="">Select State</option>
                                        {statesData.states.map((state) => (
                                            <option key={state.state_id} value={state.state_id}>
                                                {state.state_name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="classNameXPercentage">
                                        Percentage
                                    </label>
                                    <input type="text" id="classNameXPercentage" name="classNameXPercentage" placeholder="e.g. 85%" className="block w-full bg-gray-100 border border-gray-300 text-gray-700 py-3 px-4 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-blue-500" />
                                </div>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-xl font-semibold mb-4">Class XII Details</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="classNameXIIState">
                                        State Name
                                    </label>
                                    <select id="classNameXState" name="classNameXState" className="block appearance-none w-full bg-gray-100 border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-blue-500">
                                        <option value="">Select State</option>
                                        {statesData.states.map((state) => (
                                            <option key={state.state_id} value={state.state_id}>
                                                {state.state_name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="classNameXIIPercentage">
                                        Percentage
                                    </label>
                                    <input type="text" id="classNameXIIPercentage" name="classNameXIIPercentage" placeholder="e.g. 90%" className="block w-full bg-gray-100 border border-gray-300 text-gray-700 py-3 px-4 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-blue-500" />
                                </div>
                            </div>
                        </div>

                        <div class="mb-6">
                            <h2 class="text-xl font-semibold mb-4">Graduation Details</h2>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-gray-700 text-sm font-bold mb-2" for="collegeName">
                                        College Name
                                    </label>
                                    <input type="text" id="collegeName" name="collegeName" placeholder="Enter college name" class="block w-full bg-gray-100 border border-gray-300 text-gray-700 py-3 px-4 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-blue-500" />
                                </div>
                                <div>
                                    <label class="block text-gray-700 text-sm font-bold mb-2" for="cgpa">
                                        CGPA
                                    </label>
                                    <input type="text" id="cgpa" name="cgpa" placeholder="e.g., 8.5" class="block w-full bg-gray-100 border border-gray-300 text-gray-700 py-3 px-4 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-blue-500" />
                                </div>
                            </div>
                            <div className='w-full mt-4'>
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="classNameXIIPercentage">
                                    Course Name
                                </label>
                                <input type="text" id="courseName" name="courseName" placeholder="B.E/BTech" className="block w-full bg-gray-100 border border-gray-300 text-gray-700 py-3 px-4 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-blue-500" />
                            </div>

                        </div>
                    </form>
                </div>

            } />}
            <div className="relative border rounded-md p-4">
                <h2 className="text-xl font-semibold mb-2">Preferred Job Type</h2>
                <p className="text-gray-700">Full-Time</p>
                <button onClick={() => { setIsUpdateJobTypeBtnClicked(true) }} className="absolute top-2 right-2 text-blue-500 hover:text-blue-700">
                    <MdModeEditOutline />
                </button>
            </div>

            <div className="relative border rounded-md p-4 space-y-4">
                <h2 className="text-xl font-semibold mb-4">Education</h2>

                <div>
                    <h3 className="text-lg font-semibold">Class XII</h3>
                    <p className="text-gray-700">Science - 85% (2020)</p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold">Class X</h3>
                    <p className="text-gray-700">Matriculation - 90% (2018)</p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold">Graduation</h3>
                    <p className="text-gray-700">B.Sc. in Computer Science - 70% (2024)</p>
                </div>
                <button onClick={() => setIsUpdateEducationDetailsBtnClicked(!isUpdateEducationDetailsBtnClicked)} className="absolute top-2 right-2 text-blue-500 hover:text-blue-700">
                    <MdModeEditOutline />
                </button>
            </div>
            {isUpdateSkillsBtnClicked && <ModalDialogForm title="Skills"
                onCancel={(booleanVal) => setIsUpdateSkillsBtnClicked(booleanVal)}
                content={
                    <div className="flex flex-col items-center justify-center p-4">
                        {/* Skill Boxes */}
                        <div className="flex flex-wrap mb-4">
                            {skills.map((skill, index) => (
                                <div key={index} className="relative bg-white border border-gray-300 rounded-lg px-3 py-2.5 m-2 shadow">
                                    <button
                                        onClick={() => handleRemoveSkill(index)}
                                        className="absolute top-0 right-0 text-gray-500 hover:text-gray-700 px-1"
                                        aria-label="Remove"
                                    >
                                        &times;
                                    </button>
                                    <span className="text-gray-800">{skill}</span>
                                </div>
                            ))}
                        </div>

                        {/* Input Field and Button */}
                        <div className="w-full max-w-sm">
                            <input
                                type="text"
                                value={skill}
                                onChange={(e) => setSkill(e.target.value)}
                                placeholder="Enter a skill"
                                className="w-full px-3 mb-7 py-2 bg-white border border-gray-300 rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                onClick={handleAddSkill}
                                className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                            >
                                Add Skill
                            </button>
                        </div>
                    </div>
                } />}
            <div className="relative border rounded-md p-4">
                <h2 className="text-xl font-semibold mb-2">Key Skills</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>CSS</li>
                    <li>SQL</li>
                </ul>
                <button onClick={() => setIsUpdateSkillsBtnClicked(true)} className="absolute top-2 right-2 text-blue-500 hover:text-blue-700">
                    <MdModeEditOutline />
                </button>
            </div>
            {
                isUpdateInternshipBtnClicked && <ModalDialogForm title="Internship Details" onCancel={(booleanVal) => setIsUpdateInternshipBtnClicked(booleanVal)}
                    content={<div className="p-6 max-w-md mx-auto">

                        <div className="bg-white p-6 mt-4">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Company Name
                                </label>
                                <input
                                    type="text"
                                    value={companyName}
                                    onChange={(e) => setCompanyName(e.target.value)}
                                    placeholder="Enter company name"
                                    className="w-full px-3 py-2 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:bg-white"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Internship Duration
                                </label>
                                <input
                                    type="text"
                                    value={duration}
                                    onChange={(e) => setDuration(e.target.value)}
                                    placeholder="Enter duration (e.g., 3 months)"
                                    className="w-full px-3 py-2 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:bg-white"
                                />
                            </div>

                            <button
                                onClick={handleAddDetails}
                                className="bg-green-500 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
                            >
                                Add
                            </button>
                        </div>


                        {/* Displaying Details */}
                        <ul className="mt-6">
                            {details.map((detail, index) => (
                                <li key={index} className="mb-2 text-gray-800">
                                    {detail.companyName} - {detail.duration}
                                </li>
                            ))}
                        </ul>
                    </div>} />
            }
            <div className="relative border rounded-md p-4">
                <h2 className="text-xl font-semibold mb-2">Internship Details</h2>
                <p className="text-gray-700">Zidio Development - July 24 to September 24</p>
                <button onClick={() => { setIsUpdateInternshipBtnClicked(true) }} className="absolute top-2 right-2 text-blue-500 hover:text-blue-700">
                    <MdModeEditOutline />
                </button>
            </div>
            {isUpdateResumeBtnClicked && <ModalDialogForm title="Resume"
                onCancel={(booleanVal) => setIsUpdateResumeBtnClicked(booleanVal)}
                content={
                    <form class="flex items-center space-x-6">
                        
                        <label class="block">
                            <span class="sr-only">Choose Resume</span>
                            <input type="file" class="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "/>
                        </label>
                    </form>
                }

            />}
            <div className="relative border rounded-md p-4">
                <h2 className="text-xl font-semibold mb-2">Resume</h2>
                <p className="text-gray-700">Download or view the resume</p>
                <div className="mt-3 mb-3">
                    <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                        <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                            <div className="flex w-0 flex-1 items-center">
                                <svg className="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
                                </svg>
                                <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                    <span className="truncate font-medium">Resume_back_end_developer.pdf</span>
                                    <span className="flex-shrink-0 text-gray-400">2.4mb</span>
                                </div>
                            </div>
                            <div className="ml-4 flex-shrink-0">
                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Download</a>
                            </div>
                        </li>
                    </ul>
                </div>

                <a href="#" className="text-blue-500 hover:underline">View Resume</a>

                <button onClick={() => { setIsUpdateResumeBtnClicked(true) }} className="absolute top-2 right-2 text-blue-500 hover:text-blue-700">
                    <MdModeEditOutline />
                </button>
            </div>

        </div>

    );
}

export default InfoCard;
