import Header1 from "../components/Header1";
import Navbar2 from "../components/Navbar2"
import Footer from "../components/Footer";
import Footer1 from "../components/Footer1";
import library1 from "../components/libraryImg/library1.jpg"
import GridPrac from "./GridPrac";

const AboutUs = () => {
    return (

    
        <div className="p-4 ">
            <GridPrac/>
            <Header1 />
            <Navbar2 />
            <div className="min-h-screen p-10">
                <div className="mb-4">
                    <h1 className="text-3xl">About Us</h1>
                </div>
                <div className="grid grid-cols-[1fr_2fr] gap-x-4 max-md:grid-cols-1">
                    <div className="grid content-center">
                        <img
                            src={library1}
                            alt="Library Interior"
                            className="w-full mb-4 rounded-lg shadow-md"
                        />
                    </div>
                    <div className="grid content-center p-2 text-justify text-xl">
                        <div className="">

                            <p className="mb-4">
                                Welcome to the Library of Peoples University of Bangladesh.
                            </p>

                            <p className="mb-4">
                                This library is developed as a Masters Final project.
                                We made this library using MERN stack and modern technologies.
                                Here we have used Mongodb as Database and its library mongoose.
                                Express.js as backend framework and React.js as frontend framework.
                                Node.js as our runtime environment.
                            </p>

                            <p className="mb-4">
                                We are proud and happy for the assistance from our faculties.
                                Special thanks to our project supervisor.
                            </p>

                            <p className="mb-4">
                                If you have any questions or suggestions,
                                please feel free to share with us.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Footer1 />
        </div>
    );
};

export default AboutUs;
