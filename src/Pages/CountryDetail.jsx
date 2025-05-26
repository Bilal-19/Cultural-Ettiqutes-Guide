import Header from "../Components/header";
import Footer from "../Components/Footer";
import { useParams } from "react-router-dom";
import countryRecords from "../Data/countryRecords";

export default function CountryDetail() {
    const { id } = useParams();
    const findCountry = countryRecords.find(val => val.id === parseInt(id));
    console.log(findCountry.backgroundImg)
    return (
        <>
            <Header />
            <div
                className="relative w-full h-72 md:h-152 bg-cover bg-no-repeat"
                style={{ backgroundImage: `url("${findCountry.backgroundImg}")` }}
            >
                <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center">
                    <h3 className="text-5xl text-white">{findCountry.countryName}</h3>
                </div>
            </div>

            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:space-x-3 pt-15">
                <div>
                    <img src={findCountry.flagImage} alt={findCountry.countryName} className="h-32 object-contain" />
                </div>
                <div className="m-5 md:m-0">
                    <h4 className="font-bold text-2xl">{findCountry.countryName}</h4>
                    <p className="text-sm">{findCountry.desc}</p>
                </div>
            </div>

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 py-15">
                <div className="bg-[#014976] text-white rounded-lg p-5 m-5 md:m-0 hover:scale-101 duration-500">
                    <h5 className="text-center font-medium text-2xl">Greetings</h5>
                    <ol>
                        {findCountry.greetings.map((val, key) => <li className="mb-1"><i class="fa-solid fa-circle-check"></i> {val}</li>)}
                    </ol>
                </div>

                <div className="bg-[#014976] text-white rounded-lg p-5 m-5 md:m-0 hover:scale-101 duration-500">
                    <h5 className="text-center font-medium text-2xl">Tippings</h5>
                    <ol>
                        {findCountry.tippings.map((val, key) => <li className="mb-1"><i class="fa-solid fa-circle-check"></i> {val}</li>)}
                    </ol>
                </div>

                <div className="bg-[#014976] text-white rounded-lg p-5 m-5 md:m-0 hover:scale-101 duration-500">
                    <h5 className="text-center font-medium text-2xl">Dress Code</h5>
                    <ol>
                        {findCountry.dressCode.map((val, key) => <li className="mb-1"><i class="fa-solid fa-circle-check"></i> {val}</li>)}
                    </ol>
                </div>

                <div className="bg-[#014976] text-white rounded-lg p-5 m-5 md:m-0 hover:scale-101 duration-500">
                    <h5 className="text-center font-medium text-2xl">Taboos</h5>
                    <ol>
                        {findCountry.taboos.map((val, key) => <li className="mb-1"><i class="fa-solid fa-circle-check"></i> {val}</li>)}
                    </ol>
                </div>
            </div>
            <Footer />
        </>
    )
}