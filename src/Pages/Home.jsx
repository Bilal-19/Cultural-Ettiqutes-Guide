import React from "react";
import blogRecords from "../Data/blogs";
import countryRecords from "../Data/countryRecords";
import Footer from "../Components/Footer";
import Header from "../Components/header";
import { Link } from "react-router-dom";

const fetchCountries = countryRecords.slice(0, 5);
const fetchBlogs = blogRecords.slice(0, 3);

export default function Home() {
    return (
        <>
            <Header />

            <div class="relative w-full bg-[url('/home.jpg')] bg-no-repeat bg-center h-72 md:h-150">
                <div class="absolute inset-0 bg-black/40 flex justify-center">
                    <h2 className="font-medium text-3xl md:text-6xl pt-5 md:pt-10 text-white">
                        Travel Respectfully.
                        <br />
                        Connect Meaningfully.
                    </h2>
                </div>
            </div>

            <h2 className="font-medium text-3xl md:text-5xl text-center pt-15 md:pt-30 mb-5">
                Featured Blogs
            </h2>
            <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 pb-15 md:pb-30">
                {fetchBlogs.map((val, key) =>
                    <>
                        <div className="mx-auto w-80 md:w-auto">
                            <img src={val.thumbnailPath} alt={val.blogTitle} className="rounded-lg" />
                            <p className="text-md md:text-lg font-medium">{val.blogTitle}</p>
                            <Link to={`/blog/detail/${val.id}`} className="font-light">
                                Read more
                            </Link>
                        </div>
                    </>
                )}
            </div>

            <h2 className="font-medium text-3xl md:text-5xl text-center mb-5">
                Popular Destinations
            </h2>
            <div className="container mx-auto grid grid-cols-2 md:grid-cols-5 gap-10 pb-15 md:pb-30">
                {fetchCountries.map((val, key) =>
                    <>
                        <Link to={`/country/detail/${val.id}`}>
                            <div className="mx-auto size-32">
                                <img src={val.flagImage} alt={val.countryName} className="mb-2 h-20 object-cover" />
                                <p className="text-sm md:text-md">{val.countryName}</p>
                            </div>
                        </Link>
                    </>
                )}
            </div>

            <Footer />
        </>
    )
}