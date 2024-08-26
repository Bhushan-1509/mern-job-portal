import React from 'react';

const ModalDialogForm = (props) => {
    return (
        <>
            <div className="fixed inset-0 bg-gray-800 opacity-50 z-40"></div>
            <div className="fixed inset-0 flex items-center justify-center z-50 mt-7">
                <div className="relative bg-white w-full max-w-lg rounded-lg shadow-lg p-6 overflow-y-auto max-h-screen">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">{props.title}</h2>
                        <button onClick={() => props.onCancel(false)} className="text-gray-600 hover:text-gray-800">&times;</button>
                    </div>

                    <div className="modal-content max-h-96 overflow-y-auto">
                        {props.content}
                    </div>

                    <div className="flex justify-center items-center mt-4">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ModalDialogForm;
