import React from "react";


export default function test() {




    return <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div className="flex-shrink-0">
            <img className="h-12 w-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/NBC_logo.svg/851px-NBC_logo.svg.png" alt="ChitChat Logo" />
        </div>
        <div>
            <div className="text-xl font-medium text-black">ChitChat</div>
            <p className="text-gray-500">You have a new message!</p>
        </div>
    </div>
}