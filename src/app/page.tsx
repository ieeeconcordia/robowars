"use client";
import DateCounter from "@/components/date-counter/date-counter";
import SocialRow from "@/components/social-row/social-row";
import HomeVideoPlayer from "@/components/video-player/HomeVideoPlayer";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images2023 = [
  {
    url: "/images/past-robowars/2023/1.webp",
    caption: "RoboWars 2023",
  },
  {
    url: "/images/past-robowars/2023/2.webp",
    caption: "RoboWars 2023",
  },
  {
    url: "/images/past-robowars/2023/8.webp",
    caption: "RoboWars 2023",
  },
  {
    url: "/images/past-robowars/2019/3.webp",
    caption: "RoboWars 2019",
  },
  {
    url: "/images/past-robowars/2019/4.webp",
    caption: "RoboWars 2019",
  },
  {
    url: "/images/past-robowars/2019/5.webp",
    caption: "RoboWars 2019",
  },
  {
    url: "/images/past-robowars/2018/6.webp",
    caption: "RoboWars 2018",
  },
  {
    url: "/images/past-robowars/2018/7.webp",
    caption: "RoboWars 2018",
  },
];

export default function Home() {
  return (
    <main className=" bg-white">
      {/* Landing Page */}
      <div className="relative section h-[calc(100vh-6rem)] text-white overflow-hidden bg-black flex flex-col justify-center">
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
            <h1 className="landing-header text-center w-fit">ROBOWARS</h1>
            <h5 className="w-fit">March 17th, 2024</h5>
          </div>

          <p className="landing-subheader max-w-sm font-inter drop-shadow-lg mb-8 mx-auto">
            Where Machines Battle and Innovation Prevails!
          </p>

          <div className="flex justify-center">
            <DateCounter eventDate={new Date(2024, 2, 17, 9, 0, 0)} />
          </div>
        </div>
      </div>

      {/* About section */}
      <div className="section text-black bg-white">
        <HomeVideoPlayer />
        <h1 className="h2 ">About</h1>
        <p className="p max-w-sm font-inter">
          RoboWars is the ultimate platform where the thunder of metal, the buzz
          of technology, and the thrill of competition converge. It&apos;s not
          just a battle; its a spectacle where amateur enthusiasts and seasoned
          engineers unveil their autonomous combatants to engage in fierce
          mechanical warfare.
        </p>
        <a className="btn-primary bg-primary text-white" href="/competition">
          📖 Learn more
        </a>
      </div>

      <div className="h-2 w-full bg-white"></div>

      {/* Previous Competitions section */}
      <div className="section text-white bg-tertiary">
        <h1 className="h2 ">Past Years</h1>
        <p className="p max-w-sm font-inter">
          RoboWars has been running for over 4 years! Check out the previous
          years&apos; competitions and their robots!
        </p>
        <Carousel
          showThumbs={false}
          autoPlay={true}
          interval={3000}
          infiniteLoop={true}
          className="max-w-screen-lg min-w-[18rem] w-[70%]"
        >
          {images2023.map((image, index) => (
            <div key={index}>
              <img
                key={index}
                src={image.url}
                alt="Robowars 2023"
                className="aspect-video"
              />
              <p className="legend">{image.caption}</p>
            </div>
          ))}
        </Carousel>
        <a
          className="btn-primary bg-primary text-white"
          href="/past-competitions#content"
        >
          🔭 See more
        </a>
      </div>

      {/* Categories */}
      {/* <div className="section text-black">
        <h1 className="h2 ">Categories</h1>
        <p className="p max-w-sm font-inter">
          Engage in the ultimate battle of wits and engineering prowess in two distinct categories:
        </p>
      </div> */}

      {/* TODO: Fill in lorem ipsum according to what the differences are */}
      {/* <div className="categories">
        <div className="categorie-card bg-primary text-white">
          <h3 className="h3">Amateur</h3>

          <div className="w-52 border-b border-white"></div>

          <p className="p font-inter">
            Is this your first time building a Sumobot? No problem! The Amateur
            category is perfect for you. 
          </p>
          
          <p className="p font-inter">
            With a wooden arena and surrounded by inspired
            amateurs like yourself, you will be able to learn the ropes of Sumobot building
            and compete in a friendly environment.
          </p>
          <a
            className="btn-primary bg-primary border border-white"
            href="https://www.zeffy.com/en-CA/ticketing/cb19d699-b286-456e-a897-23937c82d6bc"
          >
            🏟️ Enter the Amateur Arena 
          </a>
        </div>

        <div className="categorie-card bg-secondary text-black">
          <h3 className="h3">Professional</h3>
          <div className="w-52 border-b border-black"></div>
          <p className="p font-inter">
            Are you a seasoned Sumobot builder? Do you have a team of engineers ready to
            take on the competition? The Professional category is for you. 
          </p>
          
          <p className="p font-inter">
            With a metal arena, magnet-based
            Sumobots, and surrounded by other experts, you will be able to showcase your skills
            and compete for the title of RoboWars Champion!
          </p>
          <a
            className="btn-primary bg-secondary border border-black"
            href="https://www.zeffy.com/en-CA/ticketing/cb19d699-b286-456e-a897-23937c82d6bc"
          >
            🏟️ Enter the Professional Arena 
          </a>
        </div>
      </div> */}

      <div className="section text-black bg-light-grey">
        <h2 className="h2 ">Interactive Workshops</h2>
        <p className="p max-w-sm font-inter">
          Participate in a series of hands-on interactive workshops carefully
          crafted to amplify your Sumobot prowess. Engage in:
        </p>

        <div className="flex flex-col items-center justify-center gap-8 p-8 bg-dark-grey shadow-lg rounded-lg overflow-hidden">
          <div className="flex flex-col items-center justify-center gap-2">
            <h3 className="h3 text-header-grey">Material Selection Mastery</h3>
            <p className="p font-inter">
              Uncover the secrets of selecting the finest components &
              materials, ensuring your Sumobot is both sturdy and agile.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <h3 className="h3 text-header-grey">
              University Funding Strategies
            </h3>
            <p className="p font-inter">
              Learn effective techniques to secure funding within your
              university, providing support for your robotic ambitions.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <h3 className="h3 text-header-grey">Programming Expertise</h3>
            <p className="p font-inter">
              Master the essential art of programming, empowering you to breathe
              life into your Sumobot and gear up for the exhilarating battles
              ahead.
            </p>
          </div>

          {/* TODO: replace link with proper workshop links */}
          <a
            className="btn-primary bg-dark-grey border border-black"
            href="https://www.zeffy.com/en-CA/ticketing/cb19d699-b286-456e-a897-23937c82d6bc"
          >
            🏫 Register for a Workshop
          </a>
        </div>
      </div>

      <div className="h-2 w-full bg-white"></div>

      <div className="section text-black">
        <h1 className="h2 ">Join the Battle!</h1>
        <p className="p max-w-sm font-inter">
          Join the battle and compete for the title of RoboWars Champion! 👑
        </p>
        <a
          className="btn-primary bg-primary text-white"
          href="https://www.zeffy.com/en-CA/ticketing/cb19d699-b286-456e-a897-23937c82d6bc"
        >
          🏟️ Enter the Arena
        </a>
        <h3 className="h3 mt-4">Follow us on our platforms for updates!</h3>
        <SocialRow />
      </div>
    </main>
  );
}
