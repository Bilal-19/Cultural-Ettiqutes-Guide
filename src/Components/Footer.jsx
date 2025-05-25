import React from "react";

export default function Footer() {
    return (
        <>
            <div class="w-full bg-[#014976] text-white flex flex-col md:flex-row justify-around p-5 md:p-10 space-y-5 md:space-y-0">
                <div>
                    <h4 className="font-bold text-2xl">Follow Us On Social Media</h4>
                    <div className="text-2xl flex flex-row space-x-3">
                        <a href="">
                            <i class="fa-brands fa-facebook"></i>
                        </a>
                        <a href="">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                        <a href="">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold text-2xl">Quick Links</h4>
                    <div className="flex flex-col font-light">
                        <a href="">Home</a>
                        <a href="">Countries</a>
                        <a href="">Travel Tips</a>
                        <a href="">Blogs</a>
                        <a href="">Contact Us</a>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold text-2xl">Newsletter</h4>
                    <p className="font-light text-md mb-2">Stay up to date with our latest news</p>
                    <form action="" className="space-y-2">
                        <input type="text" className="bg-white rounded-md text-black px-3 py-1 block focus:outline-none" placeholder="Enter your first name" />
                        <input type="email" className="bg-white rounded-md text-black px-3 py-1 block focus:outline-none" placeholder="Enter your email" />
                        <button className="bg-black text-white rounded-md px-3 py-1 hover:cursor-pointer"><i class="fa-solid fa-bell"></i> Subscribe</button>
                    </form>
                </div>
            </div>
        </>
    )
}