import React from 'react';
import "./Home.css";
import Product from "./Product.js"



function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt="background img"
                >
                </img>

                <div className="home__row">
                    <Product 
                        id="12321341"
                        title="watermelon 1"
                        price={29.99}
                        image="https://solidstarts.com/wp-content/uploads/when-can-babies-eat-watermelon-480x320.jpg"
                        rating={5}
                    />
                    <Product
                        id="49538094"
                        title="grapefruit"
                        price={19.99}
                        image="https://lacrosseallergy.com/wp-content/uploads/2017/10/grapefruit-halves.jpg"
                        rating={3}
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id="12321341"
                        title="Melon"
                        price={15}
                        image="https://picture-original.fevercdn.com/page-rt-mart-2018426-4d8afb18-ac65-43ee-87a2-244dd574db87.jpg"
                        rating={4}
                    />
                    <Product
                        id="49538094"
                        title="papaya"
                        price={1}
                        image="https://www.globalvillagespace.com/wp-content/uploads/2019/09/Household-treasures-Papayas-antioxidants-and-nourishments.png"
                        rating={4}
                    />
                    <Product 
                        id="12321341"
                        title="Hamigua"
                        price={15}
                        image="https://www.zhifure.com/upload/images/2017/11/23144556666.jpg"
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id="12321341"
                        title="Demon fruit - rubber"
                        price={15}
                        image="https://img.ruten.com.tw/s1/4/2f/1d/21452098474781_234.jpg"
                        rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
