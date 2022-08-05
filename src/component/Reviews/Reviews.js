import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "../Shared/Carusel.css";
const Reviews = () => {
    const success =
        [
            {
                "id": "1",
                "name": "Adullah al mamun",
                "university": "Dhaka university",
                "unit": "A",
                "department": "Math",
                "image": "https://i.ibb.co/Mhp32kj/young-man-student-with-notebooks-showing-thumb-up-approval-smiling-satisfied-blue-studio-background.webp",
                "position": "3rd"
            },
            {
                "id": "1",
                "name": "Adullah al mamun",
                "university": "Dhaka university",
                "unit": "A",
                "department": "Math",
                "image": "https://i.ibb.co/Mhp32kj/young-man-student-with-notebooks-showing-thumb-up-approval-smiling-satisfied-blue-studio-background.webp",
                "position": "3rd"
            },
            {
                "id": "1",
                "name": "Adullah al mamun",
                "university": "Dhaka university",
                "unit": "A",
                "department": "Math",
                "image": "https://i.ibb.co/Mhp32kj/young-man-student-with-notebooks-showing-thumb-up-approval-smiling-satisfied-blue-studio-background.webp",
                "position": "3rd"
            },
            {
                "id": "1",
                "name": "Adullah al mamun",
                "university": "Dhaka university",
                "unit": "A",
                "department": "Math",
                "image": "https://i.ibb.co/Mhp32kj/young-man-student-with-notebooks-showing-thumb-up-approval-smiling-satisfied-blue-studio-background.webp",
                "position": "3rd"
            },
            {
                "id": "1",
                "name": "Adullah al mamun",
                "university": "Dhaka university",
                "unit": "A",
                "department": "Math",
                "image": "https://i.ibb.co/Mhp32kj/young-man-student-with-notebooks-showing-thumb-up-approval-smiling-satisfied-blue-studio-background.webp",
                "position": "3rd"
            },
            {
                "id": "1",
                "name": "Adullah al mamun",
                "university": "Dhaka university",
                "unit": "A",
                "department": "Math",
                "image": "https://i.ibb.co/Mhp32kj/young-man-student-with-notebooks-showing-thumb-up-approval-smiling-satisfied-blue-studio-background.webp",
                "position": "3rd"
            },
            {
                "id": "1",
                "name": "Adullah al mamun",
                "university": "Dhaka university",
                "unit": "A",
                "department": "Math",
                "image": "https://i.ibb.co/Mhp32kj/young-man-student-with-notebooks-showing-thumb-up-approval-smiling-satisfied-blue-studio-background.webp",
                "position": "3rd"
            },
            {
                "id": "1",
                "name": "Adullah al mamun",
                "university": "Dhaka university",
                "unit": "A",
                "department": "Math",
                "image": "https://i.ibb.co/Mhp32kj/young-man-student-with-notebooks-showing-thumb-up-approval-smiling-satisfied-blue-studio-background.webp",
                "position": "3rd"
            },
            {
                "id": "1",
                "name": "Adullah al mamun",
                "university": "Dhaka university",
                "unit": "A",
                "department": "Math",
                "image": "https://i.ibb.co/Mhp32kj/young-man-student-with-notebooks-showing-thumb-up-approval-smiling-satisfied-blue-studio-background.webp",
                "position": "3rd"
            }
        ]

    return (
        <div>
            <h1>Reviews</h1>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                pagination={{
                    clickable: true
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40
                    }
                }}
                className="mySwiper"
            >

                {
                    success.map(s => <SwiperSlide>
                        <div className='mb-24 shadow-2xl'>
                            <div className='text-left'>
                                <img src={s.image} alt="" />
                                <div className='text-xl p-4 border-2'>
                                    <p>{s.name}</p>
                                    <p>{s.university}</p>
                                    <p>{s.position}</p>
                                    <p>{s.department}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default Reviews;