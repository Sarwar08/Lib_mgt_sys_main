import Header1 from "../components/Header1";
import Navbar2 from "../components/Navbar2"
import Footer from "../components/Footer";
import Footer1 from "../components/Footer1";


const GridPrac = () => {
    return (
        
        // grid practice 
        <div>
            <div className="grid grid-cols-[100px_100px] mb-4">
                <div className="bg-sky-200">div1<p>text</p></div>
                <div className="bg-pink-200">div2</div>
                <div className="bg-sky-200">div1 <p>text</p></div>
                <div className="bg-pink-200">div2</div>
            </div>
            <div className="grid grid-cols-[1fr_1fr_1fr] mb-4">
                <div className="bg-sky-200">div1 <p>text</p></div>
                <div className="bg-pink-200">div2</div>
                <div className="bg-sky-200">div1 <p>text</p></div>
                <div className="bg-pink-200">div2</div>
            </div>
            <div className="grid grid-cols-[50px_1fr] mb-4">
                <div className="bg-sky-200">div1 <p>text</p></div>
                <div className="bg-pink-200">div2</div>
                <div className="bg-sky-200">div1 <p>text</p></div>
                <div className="bg-pink-200">div2</div>
            </div>
            <div className="grid grid-cols-[100px_1fr_2fr] mb-4">
                <div className="bg-sky-200">div1 <p>text</p></div>
                <div className="bg-pink-200">div2</div>
                <div className="bg-sky-200">div1 <p>text</p></div>
                <div className="bg-pink-200">div2</div>
            </div>

            {/* flexbox practice  */} Flexbox practice
            <div className="flex flex-row mb-4">
                <div className="bg-sky-200">div1<p>text</p></div>
                <div className="bg-pink-200">div2</div>
            </div>

            <div className="flex flex-row mb-4">
                <div className="bg-sky-200 w-[100px]">div1 <p>text</p></div>
                <div className="bg-pink-200 flex-1">div2</div>
            </div>

            <div className="flex flex-row mb-4">
                <div className="bg-sky-200 w-[100px]">div1 <p>text</p></div>
                
                <div className="bg-sky-200 flex-1 ">div1 <p>text</p></div>
                <div className="bg-pink-200 grow-[2] ">div2</div>
            </div>

            <div className="grid grid-cols-[100px_1fr_2fr] mb-4">
                <div className="bg-sky-200">div1 <p>text</p></div>
                <div className="bg-pink-200">div2</div>
                <div className="bg-sky-200">div1 <p>text</p></div>
                <div className="bg-pink-200">div2</div>
            </div>


            {/* <Header1 />
            <Navbar2 />
            <Footer />
            <Footer1 /> */}
        </div>
    )
}

export default GridPrac