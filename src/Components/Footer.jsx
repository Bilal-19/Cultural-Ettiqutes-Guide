import { useState } from "react";
import { NavLink } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

export default function Footer() {
    const [newsletterForm, setNewsletterForm] = useState({ fname: '', email: '' })
    const handleChange = (e) => {
        setNewsletterForm({ ...newsletterForm, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch("https://formsubmit.co/ajax/bilalmuhammadyousuf543@gmail.com", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(newsletterForm)
            });

            if (response.ok) {
                toast.success("Thankyou for subscribing our newsletter.");
                setNewsletterForm({ fname: '', email: '' })
            } else {

            }
        } catch (err) {
            toast.error("Network error. Please try again later.")
        }
    };
    return (
        <>
            <div class="w-full bg-[#014976] text-white flex flex-col md:flex-row justify-around p-5 md:p-10 space-y-5 md:space-y-0">
                <div>
                    <h4 className="font-bold text-xl md:text-2xl">Follow Us On Social Media</h4>
                    <div className="text-md md:text-2xl flex flex-row space-x-3">
                        <a href="#">
                            <i class="fa-brands fa-facebook"></i>
                        </a>
                        <a href="#">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                        <a href="#">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold text-xl md:text-2xl">Quick Links</h4>
                    <div className="flex flex-col font-light">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/countries">Countries</NavLink>
                        <NavLink to="/blogs">Blogs</NavLink>
                        <NavLink to="/contact">Contact Us</NavLink>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold text-xl md:text-2xl">Newsletter</h4>
                    <p className="font-light text-md mb-2">Stay up to date with our latest news</p>
                    <form onSubmit={handleSubmit} className="space-y-2">
                        <input required type="text" className="bg-white rounded-md text-black px-3 py-1 block focus:outline-none" placeholder="Enter your first name" name="fname" value={newsletterForm.fname} onChange={handleChange} />
                        <input required type="email" className="bg-white rounded-md text-black px-3 py-1 block focus:outline-none" placeholder="Enter your email" name="email" value={newsletterForm.email} onChange={handleChange} />
                        <button className="bg-black text-white rounded-md px-3 py-1 hover:cursor-pointer"><i class="fa-solid fa-bell"></i> Subscribe</button>
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </>
    )
}