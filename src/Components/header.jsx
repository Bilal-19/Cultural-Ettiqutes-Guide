import React from "react";
import { Link, Outlet } from "react-router-dom";

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
                    <Link to="/" className="hover:text-[#00FBE6]">Home</Link>
                    <Link to="/countries" className="hover:text-[#00FBE6]">Countries</Link>
                    <Link to="/blogs" className="hover:text-[#00FBE6]">Blogs</Link>
                    <Link to="/contact" className="mr-5 hover:text-[#00FBE6]">Contact</Link>
                </div>
            </div>
        </>
    )
}