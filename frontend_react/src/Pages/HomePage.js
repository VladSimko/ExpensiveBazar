import { Carousel } from "react-bootstrap";
import Footer from "../Components/Footer";
import Navigation from "../Components/Navigation";





const HomePage = () => {


    return (
        <>

            <Navigation />
            <div className="homePage_img"></div>
            <br />
            <h1>E-Bazar</h1>
            <p>Cars / Boats / Houses</p>
            <hr />
            <br />
            <section>
                <div className="container">
                    <h2>About</h2>
                    <br />
                    <div className="GreySection" >
                        <div className="row">
                            <div className="col-sm-6 CenterTextGreySel">
                                Marzipan soufflé candy icing toffee lollipop halvah candy. Brownie jelly-o liquorice caramels. Tart jelly chocolate cake cake ice cream icing. Powder cheesecake gummi bears.

                                Biscuit cake cotton candy lollipop gummies jelly-o jelly pudding. Tiramisu danish sesame snaps. Halvah oat cake dragée danish pastry marshmallow chupa chups tootsie roll. Soufflé wafer chupa chups cake sweet cheesecake.
                            </div>
                            <div class="col-sm-6">
                                <img src="https://cdn.pixabay.com/photo/2014/11/21/17/17/house-540796_1280.jpg" className="ImgSelection" alt="about" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <br /><br />
            <section id="sekTretia">

                <div className="container-fluid">
                    <div className="container">
                        <h2 className="leftText">Gallery</h2>
                        <br />
                    </div>

                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <img src="https://cdn.pixabay.com/photo/2015/07/11/23/13/mercedes-benz-841465_1280.jpg" alt="image" className="img-fluid" />
                            <img src="https://cdn.pixabay.com/photo/2015/07/11/23/13/mercedes-benz-841465_1280.jpg" alt="image" className="img-fluid" />

                        </div>
                        <div class="col-md-3 col-sm-6">
                            <img src="https://cdn.pixabay.com/photo/2015/07/11/23/13/mercedes-benz-841465_1280.jpg" alt="image" className="img-fluid" />
                            <img src="https://cdn.pixabay.com/photo/2015/07/11/23/13/mercedes-benz-841465_1280.jpg" alt="image" className="img-fluid" />
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <img src="https://cdn.pixabay.com/photo/2015/07/11/23/13/mercedes-benz-841465_1280.jpg" alt="image" className="img-fluid" />
                            <img src="https://cdn.pixabay.com/photo/2015/07/11/23/13/mercedes-benz-841465_1280.jpg" alt="image" className="img-fluid" />
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <img src="https://cdn.pixabay.com/photo/2015/07/11/23/13/mercedes-benz-841465_1280.jpg" alt="image" className="img-fluid" />
                            <img src="https://cdn.pixabay.com/photo/2015/07/11/23/13/mercedes-benz-841465_1280.jpg" alt="image" className="img-fluid" />
                        </div>
                    </div>
                </div>
                <br /><br />
            </section>

            <Footer />
        </>
    );
}

export default HomePage;