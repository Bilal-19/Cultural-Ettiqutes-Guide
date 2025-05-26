import React from "react";
import { useParams } from "react-router-dom";
import blogRecords from "../Data/blogs";
import Header from "../Components/header";
import Footer from "../Components/Footer";

export default function BlogDetail() {
    const { id } = useParams();
    const findBlog = blogRecords.find((val) => val.id === parseInt(id));
    return (
        <>
        <Header />

        <div class="w-full p-5">
            <img src={findBlog.thumbnailPath} alt="" className="w-80 md:w-4/5 mx-auto rounded-lg mb-5" />
            <h2 className="w-80 md:w-4/5 mx-auto font-bold text-lg md:text-3xl">{findBlog.blogTitle}</h2>
            <p className="w-80 md:w-4/5 mx-auto text-sm md:text-lg">{findBlog.blogContent}</p>
        </div>
        <Footer/>
        </>
    )
}