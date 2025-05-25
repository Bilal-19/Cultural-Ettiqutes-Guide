import React from "react";
import Header from "../Components/header";
import Footer from "../Components/Footer";
import countryRecords from "../Data/countryRecords";
import { Link } from "react-router-dom";

export default function Countries() {
    return (
        <>
            <Header />
            <div class="w-full bg-[url('/country_banner.png')] bg-no-repeat bg-center h-100 md:h-150 flex justify-center">
                <h2 className="font-medium text-3xl md:text-6xl pt-5 md:pt-10 text-white">
                    Popular Countries
                </h2>
            </div>

            <div className="container mx-auto grid grid-cols-2 md:grid-cols-5 gap-10 py-15 md:py-30">
                {countryRecords.map((val, key) =>
                    <>
                        <Link to={`/country/detail/${val.id}`} key={val.id}>
                            <div className="mx-auto size-32 p-1 hover:shadow-md border-b-4 border-x-1 border-t-1 rounded-md border-[#014976]">
                                <img src={val.flagImage} alt={val.countryName} className="mb-2 h-20 object-cover mx-auto" />
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