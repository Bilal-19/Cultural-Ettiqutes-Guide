import React, { useState } from "react";
import Header from "../Components/header";
import Footer from "../Components/Footer";
import Input from "../Components/Input";
import { toast, ToastContainer } from "react-toastify";

export default function Contact() {
    const [formData, setFormData] = useState({ fname: "", lname: "", email: "", message: "" });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch("https://formsubmit.co/ajax/bilalmuhammadyousuf543@gmail.com",{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok){
                toast.success("Your form has been submitted");
                setFormData({fname: '', lname: '', email: '', message: ''})
            } else {

            }
        } catch(err){
            toast.error("Network error. Please try again later.")
        }
    };
    return (
        <>
            <Header />
            <div class="w-full bg-[url('/contact.png')] bg-no-repeat bg-cover h-60 md:h-160">
            </div>

            <div class="container mx-auto pt-15 pb-7">
                <h3 className="text-3xl md:text-6xl font-medium text-center">Contact Us</h3>
            </div>

            <div class="w-full mt-5 mb-50">
                <form method="post" className="space-y-6" autoComplete="off" onSubmit={handleSubmit}>
                    <Input inputType='text' inputName='fname' placeholderText='Enter your first name' inputValue={formData.fname} handleChange={handleChange}/>
                    <Input inputType='text' inputName='lname' placeholderText='Enter your last name' inputValue={formData.lname} handleChange={handleChange}/>
                    <Input inputType='email' inputName='email' placeholderText='Enter your email address' inputValue={formData.email} handleChange={handleChange}/>
                    <textarea onChange={handleChange} required value={formData.message} className="w-80 md:w-3/5 block mx-auto text-md placeholder:text-black bg-[#D3D3D3] focus:outline-none rounded-md px-3 py-2 resize-none" rows="5" name="message" placeholder="Enter your message"></textarea>
                    <button className="bg-[#014976] text-white w-80 md:w-3/5 block mx-auto rounded-md px-3 py-2 hover:cursor-pointer">Submit</button>
                </form>
            </div>
            <ToastContainer/>
            <Footer />
        </>
    )
}