import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { doc, getDoc } from "firebase/firestore";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { Zoom, Navigation, Pagination } from 'swiper/modules';
import "./index.css"

import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Detail() {
    const { Id } = useParams();
    console.log("id", Id);
    const [product, setProduct] = useState(null); // State to store the fetched product
    const db = getFirestore();

    useEffect(() => {
        const getProductDetail = async () => {
            console.log('Id:', Id);
            const docRef = doc(db, "ads", Id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                setProduct(docSnap.data())
            } else {
                // docSnap.data() will be undefined in this case
                console.log("No such document!");
            }
        };

        getProductDetail();
    }, [Id]);


    return (
        <div className="main container-fluid">

            {product && (
                <div className="">
                    <div className="">
                        <h5 className=""><b>Title</b></h5>

                        <p>{product.title}</p>
                        <h5 className=""><b>Price</b></h5>

                        <p>Rs: {product.price}</p>

                        <h5 className=""><b>Description</b></h5>

                        <p>{product.description}</p>
                        <br />
                    </div>
                </div>
            )}

            {product && (
                <Swiper
                    rewind={true}
                    style={{ '--swiper-navigation-color': 'white', '--swiper-pagination-color': 'white', }}
                    zoom={true}
                    navigation={true}
                    pagination={{ clickable: true, }}
                    modules={[Zoom, Navigation, Pagination]} map
                    className="mySwiper"
                >
                    {
                        product.imageUrl.map((item) => (
                            <SwiperSlide >
                                <div className="swiper-zoom-container sllider imgslide">
                                    <img src={item} />
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            )}

        </div>
    );
}
