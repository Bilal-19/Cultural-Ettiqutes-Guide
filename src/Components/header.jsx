import React from "react";

function toggleMenu() {
    const toggleBtn = document.getElementById("toggle");
    toggleBtn.addEventListener("click", function () {
        document.getElementById("menuOptions").classList.toggle("hidden");
    })
}

export default function Header() {
    return (
        <>
            <div className="w-full bg-[#014976] text-white md:h-14 flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex flex-row justify-between">
                    <img src="/logo.png" alt="" />
                    <button id="toggle" className="block md:hidden mr-5 hover:cursor-pointer" onClick={() => toggleMenu()}>
                        <i class="fa-solid fa-sliders"></i>
                    </button>
                </div>
                <div id="menuOptions" className="space-x-5 flex flex-col md:flex-row items-start hidden md:block">
                    <a href="" className="hover:text-[#00FBE6]">Home</a>
                    <a href="" className="hover:text-[#00FBE6]">Countries</a>
                    <a href="" className="hover:text-[#00FBE6]">Blogs</a>
                    <a href="" className="mr-5 hover:text-[#00FBE6]">Contact</a>
                </div>
            </div>
        </>
    )
}