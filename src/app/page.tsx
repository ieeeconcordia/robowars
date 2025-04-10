"use client";
import DateCounter from "@/components/date-counter/date-counter";
import SocialRow from "@/components/social-row/social-row";
import HomeVideoPlayer from "@/components/video-player/HomeVideoPlayer";
import { Carousel } from "react-responsive-carousel";
import DropdownCard from "@/components/dropdown-card/dropdown-card";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";

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
            <h2 className="landing-subheader text-center w-fit">The 24th annual</h2>
            <h1 className="landing-header text-center w-fit">ROBOWARS</h1>
            <h5 className="w-fit">May 17th, 2025</h5>
          </div>

          <p className="landing-subheader max-w-sm font-inter drop-shadow-lg mb-8 mx-auto">
            Where Machines Battle and Innovation Prevails!
          </p>

          <div className="flex justify-center">
            <DateCounter eventDate={new Date(2025, 4, 17, 9, 0, 0)} />
          </div>

          <div className="flex justify-center mt-16">
            <a
              className="btn-primary bg-primary text-white mr-8"
              href="https://www.zeffy.com/ticketing/ieee-robowars--2025"
            >
              🏟️ Register
            </a>
            <a
              className="btn-primary bg-primary text-white"
              href="https://discord.gg/v72GaWYVek"
            >
              💫 Robowars Discord
            </a>
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
          <br />
          <br />
          Join us on May 17th, 2025, for the 24th edition of RoboWars and stay tuned
          for more information on the event&apos;s Discord server above!
        </p>
        <a className="btn-primary bg-primary text-white" href="/organizing-team">
          📖 Learn more about IEEE Concordia
        </a>
      </div>

      <div className="h-2 w-full bg-white"></div>

      {/* Previous Competitions section */}
      <div className="section text-white bg-tertiary">
        <h1 className="h2 ">Past Years</h1>
        <p className="p max-w-sm font-inter">
          RoboWars has been running for over 20 years! Check out the previous
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

      {/* FAQ Section */}
      <div id="faq" className="section text-white bg-primary">
        <h1 className="h2">FAQ</h1>
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <DropdownCard title="Do I need to be a Concordia student to participate?">
            Not at all! This competition is open to everyone and anyone (don&apos;t even need to be a student). You simply need to have a robot :)
          </DropdownCard>
          <DropdownCard title="Will there be a prize?">
            Yes, and they will be announced closer to the competition!
          </DropdownCard>
          <DropdownCard title="How do I enter?">
            You must pay through our Zeffy page. Click the &apos;Register&apos;
            button below.
          </DropdownCard>
          <DropdownCard title="Do I need a team?">
            Although not mandatory, we recommend signing up with a team (maximum 6 people).
          </DropdownCard>
          <DropdownCard title="How much does it cost?">
            Check the most up-to-date prices by clicking on the &apos;Register&apos; button below :)
          </DropdownCard>
          <DropdownCard title="How can I learn to build my robot?">
            Come to IEEE Concordia&apos;s lab hours! We have plenty of
            supervisors with experience that can help you with the guidelines. We&apos;ll also anounce workshops, so make sure to join the Discord server above to know when they are happening!
          </DropdownCard>
          <DropdownCard title="WHERE CAN I FIND MORE INFO?" initialOpen="true">
            Check the the info session slides <Link href="https://www.canva.com/design/DAGfqbOEMjE/ys4vMkHjW4AzVO8m3zfoqA/edit?utm_content=DAGfqbOEMjE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"><u>here</u></Link>. Make sure to join the Discord server above to get the link (in #announcements)!
          </DropdownCard>
        </div>

        <div className="flex flex-col gap-4 mt-4 justify-center items-center">
          <h2 className="h3">Can&apos;t find an answer?</h2>
          <p className="p">
            Don&apos;t hesitate to contact us through Discord and we&apos;ll get back to you as soon as possible!
          </p>
        </div>
      </div>
    </main>
  );
}
