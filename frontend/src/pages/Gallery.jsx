import { useState, useEffect } from 'react';
import Spinner from '../components/Spinner';
import axios from 'axios';
import Header1 from "../components/Header1";
import Navbar2 from "../components/Navbar2"
import Footer from "../components/Footer";
import Footer1 from "../components/Footer1";

const Gallery = () => {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        axios
            .get("https://api.slingacademy.com/v1/sample-data/photos")
            .then((response)=>{
                setPhotos(response.data.photos)
                console.log(response)
                setLoading(false)
            })
            .catch((error)=>{
                console.log(error);
                setLoading(false);
            })
    },[]);

  return (
    <div className='p-4'>
        <Header1 />
        <Navbar2 />
        {
            loading?(<Spinner/>):(
                <div className="grid grid-cols-3 grid-rows-3  gap-6 mt-4 max-md:grid-cols-1 mb-4">
                    {
                        photos.map((photo)=>(
                            <div key={photo.id} className="border border-separate border-cyan-600 p-3"> 
                                <img src={photo.url} alt="" />
                            </div>
                        ))   
                    }
                </div>
            )
        }
        <Footer />
        <Footer1 />
    </div>
  )
}

export default Gallery