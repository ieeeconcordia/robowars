"use client";

import SocialRow from "@/components/social-row/social-row";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
  "https://picsum.photos/200/300",
  "https://picsum.photos/200/300",
  "https://picsum.photos/200/300",
];

export default function PastCompetitions() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="section h-[calc(100vh-6rem)] bg-landing-grey text-white">
        <div>
          <h1 className="landing-header text-center">
            Past <br /> Competitions
          </h1>
        </div>

        <p className="p max-w-sm font-inter"></p>
        <p className="p"></p>
      </div>

      <div className="section text-black bg-light-grey">
        <h1 className="h2 ">Robowars 2023</h1>
        <Carousel className="">
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt="Robowars 2023" className="aspect-video" />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="section text-black bg-white">
        <h1 className="h2 ">Robowars 2019</h1>
        <Carousel className="">
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt="Robowars 2023" className="aspect-video" />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="section text-black bg-light-grey">
        <h1 className="h2 ">Robowars 2018</h1>
        <Carousel className="">
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt="Robowars 2023" className="aspect-video" />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="section text-black bg-white">
        <h1 className="h2">Want to see more?</h1>
        <p className="p">
          Find more photos of the previous Robowars and more on our social media
          pages!
        </p>
        <SocialRow />
      </div>
    </main>
  );
}
