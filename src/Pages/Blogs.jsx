import React from "react";
import Header from "../Components/header";
import Footer from "../Components/Footer";
import blogRecords from "../Data/blogs";
import { Link } from "react-router-dom";

export default function Blogs() {
    return (
        <>
            <Header />
            <div class="w-full bg-[url('/blog.png')] bg-no-repeat bg-cover h-60 md:h-160">
            </div>

            <h2 className="font-medium text-3xl md:text-5xl text-center pt-15 md:pt-30 mb-5">
                Featured Blogs
            </h2>
            <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 pb-15 md:pb-30">
                {blogRecords.map((val, key) =>
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
            <Footer />
        </>
    )
}