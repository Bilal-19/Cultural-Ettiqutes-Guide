import React from "react";
import Header from "../Components/header";
import Footer from "../Components/Footer";

export default function Contact() {
    return (
        <>
            <Header />
            <div class="w-full bg-[url('/contact.png')] bg-no-repeat bg-cover h-60 md:h-160">
            </div>

            <div class="container mx-auto py-15">
                <h3 className="text-6xl font-medium text-center">Contact Us</h3>
            </div>

            <div class="w-full mt-5 mb-50">
                <form action="" className="space-y-6">
                    <input type="text" className="w-3/5 block mx-auto text-md placeholder:text-black bg-[#D3D3D3] focus:outline-none rounded-md px-3 py-2" name="fname" placeholder="Enter your first name" />
                    <input type="text" className="w-3/5 block mx-auto text-md placeholder:text-black bg-[#D3D3D3] focus:outline-none rounded-md px-3 py-2" name="lname" placeholder="Enter your last name" />
                    <input type="email" className="w-3/5 block mx-auto text-md placeholder:text-black bg-[#D3D3D3] focus:outline-none rounded-md px-3 py-2" name="email" placeholder="Enter your email" />
                    <textarea className="w-3/5 block mx-auto text-md placeholder:text-black bg-[#D3D3D3] focus:outline-none rounded-md px-3 py-2 resize-none" rows="5" name="message" placeholder="Enter your message"></textarea>
                    <button className="bg-[#014976] text-white w-3/5 block mx-auto rounded-md px-3 py-2 hover:cursor-pointer">Submit</button>
                </form>
            </div>
            <Footer />
        </>
    )
}