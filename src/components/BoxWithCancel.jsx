import React, { useState } from 'react';

const BoxWithCancel = (props) => {
    const [ isCancelBtnClicked, setIsCancelBtnClicked] = useState(false);
    return (
        isCancelBtnClicked &&
        <div className="relative bg-white border border-gray-300 rounded-lg p-4 shadow-lg max-w-fit w-auto h-auto mx-auto">
            <button onClick={()=>setIsCancelBtnClicked(false)}
                className="mb-4 absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                aria-label="Close"
            >
                &times;
            </button>
            <div classNameName="text-gray-800 text-xs">
                {props.text}
            </div>
        </div>
    );
}

export default BoxWithCancel;
