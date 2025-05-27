import React from "react";

export default function Input({ inputType, placeholderText, inputName, handleChange,inputValue }) {
    return (
        <>
            <input
                required
                onChange={handleChange}
                type={inputType}
                value={inputValue}
                className="w-80 md:w-3/5 block mx-auto text-md placeholder:text-black bg-[#D3D3D3] focus:outline-none rounded-md px-3 py-2"
                name={inputName}
                placeholder={placeholderText} />
        </>
    )
}