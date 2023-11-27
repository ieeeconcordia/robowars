"use client";

import SocialRow from "@/components/social-row/social-row";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images2018 = [
  "/images/past-robowars/2018/1.webp",
  "/images/past-robowars/2018/2.webp",
  "/images/past-robowars/2018/3.webp",
  "/images/past-robowars/2018/4.webp",
  "/images/past-robowars/2018/5.webp",
  "/images/past-robowars/2018/6.webp",
  "/images/past-robowars/2018/7.webp",
  "/images/past-robowars/2018/8.webp",
];

const images2019 = [
  "/images/past-robowars/2019/1.webp",
  "/images/past-robowars/2019/2.webp",
  "/images/past-robowars/2019/3.webp",
  "/images/past-robowars/2019/4.webp",
  "/images/past-robowars/2019/5.webp",
  "/images/past-robowars/2019/6.webp",
  "/images/past-robowars/2019/7.webp",
];

const images2023 = [
  "/images/past-robowars/2023/1.webp",
  "/images/past-robowars/2023/2.webp",
  "/images/past-robowars/2023/3.webp",
  "/images/past-robowars/2023/4.webp",
  "/images/past-robowars/2023/5.webp",
  "/images/past-robowars/2023/6.webp",
  "/images/past-robowars/2023/7.webp",
  "/images/past-robowars/2023/8.webp",
];

export default function PastCompetitions() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="relative section h-[calc(100vh-6rem)] text-white overflow-hidden bg-black">
        {/* Background Image with Dark Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("images/Landing-image.webp")',
            opacity: 0.23, // Adjust the opacity value as needed
          }}
        ></div>

        <div className="relative z-10 mx-auto">
          <div className="mb-8 mx-auto">
            <h1 className="landing-header text-center w-fit">
              Past Competitions
            </h1>
          </div>
        </div>
      </div>

      <div className="section text-black bg-light-grey">
        <h1 className="h2 ">Robowars 2023</h1>
        <Carousel className="max-w-screen-lg w-[90%]">
          {images2023.map((image, index) => (
            <div key={index}>
              <img key={index} src={image} alt="Robowars 2023" className="aspect-video" />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="section text-black bg-white">
        <h1 className="h2 ">Robowars 2019</h1>
        <Carousel className="max-w-screen-lg w-[90%]">
          {images2019.map((image, index) => (
            <div key={index}>
              <img src={image} alt="Robowars 2023" className="aspect-video" />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="section text-black bg-light-grey">
        <h1 className="h2 ">Robowars 2018</h1>
        <Carousel className="max-w-screen-lg w-[90%]">
          {images2018.map((image, index) => (
            <div key={index}>
              <img src={image} alt="Robowars 2023" className="aspect-video" />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="section text-black bg-white">
        <h1 className="h2">Want to see more?</h1>
        <p className="p">
          Find more photos of the previous Robowars & more on our social media!
        </p>
        <SocialRow />
      </div>
    </main>
  );
}
