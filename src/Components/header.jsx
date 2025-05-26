import { NavLink,Link } from "react-router-dom";

function toggleMenu() {
    const toggleBtn = document.getElementById("toggle");
    toggleBtn.addEventListener("click", function () {
        document.getElementById("menuOptions").classList.toggle("hidden");
    })
}

export default function Header() {
    return (
        <>
            <div className="w-full bg-[#014976] text-white py-2 md:h-15 flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex flex-row justify-between">
                    <Link to="/">
                        <p className="ml-2"><i class="fa-solid fa-globe"></i> Cultural Ettiqutes Guide</p>
                    </Link>
                    <button id="toggle" className="block md:hidden mr-5 hover:cursor-pointer" onClick={() => toggleMenu()}>
                        <i class="fa-solid fa-sliders"></i>
                    </button>
                </div>
                <div id="menuOptions" className="space-x-5 flex flex-col md:flex-row items-start hidden md:block space-y-2 md:space-y-0">
                    <NavLink to="/" className="hover:text-[#00FBE6] ml-2 md:ml-0">Home</NavLink>
                    <NavLink to="/countries" className="hover:text-[#00FBE6] ml-2 md:ml-0">Countries</NavLink>
                    <NavLink to="/blogs" className="hover:text-[#00FBE6] ml-2 md:ml-0">Blogs</NavLink>
                    <NavLink to="/contact" className="mr-5 hover:text-[#00FBE6] ml-2 md:ml-0">Contact</NavLink>
                </div>
            </div>
        </>
    )
}