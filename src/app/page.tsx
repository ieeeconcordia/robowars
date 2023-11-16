"use client";
import CategoriesCard from "@/components/categories-card";
import CountdownTimer from "@/components/countdown-timer";

export default function Home() {
  return (
    <main className=" bg-white">
      {/* Landing Page */}
      <div className="relative mobile-section h-[calc(100vh-6rem)] text-white overflow-hidden bg-black">
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
            <h1 className="mobile-landing-header text-center w-fit">
              ROBOWARS
            </h1>
            <h5 className="w-fit">March 2024</h5>
          </div>

          <p className="mobile-p max-w-sm font-inter drop-shadow-lg mb-8">
            Where machines collide and innovation thrives!
          </p>
          {/* <p className="mobile-p">Counter</p> */}
          <CountdownTimer eventDate={"2024-03-14"} />
        </div>
      </div>

      {/* About section */}
      <div className="mobile-section text-black bg-light-grey ">
        <h1 className="mobile-h2 ">About</h1>
        <p className="mobile-p max-w-sm font-inter">
          RoboWars is the ultimate platform where the thunder of metal, the buzz
          of technology, and the thrill of competition converge. It's not just a
          battle; its a spectacle where amateur enthusiasts and seasoned
          engineers unveil their autonomous combatants to engage in fierce
          mechanical warfare.
        </p>
        <button className="btn-primary bg-primary text-white">
          Register Now
        </button>
      </div>

      <div className="h-2 w-full bg-white"></div>

      {/* Categories */}
      <div className="mobile-section text-black">
        <h1 className="mobile-h2 ">Categories</h1>
        <p className="mobile-p max-w-sm font-inter">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 px-8 py-8 bg-primary text-white shadow-lg rounded-lg overflow-hidden">
          <h3 className="mobile-h3">Amateur</h3>

          <div className="w-52 border-b border-white"></div>

          <p className="mobile-p font-inter">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className="btn-primary bg-primary border border-white">
            Register Now
          </button>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 px-8 py-8 bg-secondary text-black shadow-lg rounded-lg overflow-hidden">
          <h3 className="mobile-h3">Professional</h3>
          <div className="w-52 border-b border-black"></div>
          <p className="mobile-p font-inter">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className="btn-primary bg-secondary border border-black">
            Register Now
          </button>
        </div>
      </div>

      <div className="h-2 w-full bg-white"></div>

      <div className="mobile-section text-black bg-light-grey">
        <h2 className="mobile-h2 ">Workshop</h2>
        <p className="mobile-p max-w-sm font-inter">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <div className="flex flex-col items-center justify-center gap-8 p-8 bg-dark-grey shadow-lg rounded-lg overflow-hidden">
          <div className="flex flex-col items-center justify-center gap-2">
            <h3 className="mobile-h3 text-header-grey">
              Material Selection Mastery
            </h3>
            <p className="mobile-p font-inter">
              Uncover the secrets of selecting the finest components, ensuring
              your Sumobot is both sturdy and agile.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <h3 className="mobile-h3 text-header-grey">
              University Funding Strategies
            </h3>
            <p className="mobile-p font-inter">
              Learn effective techniques to secure funding within your
              university, providing support for your robotic ambitions.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <h3 className="mobile-h3 text-header-grey">
              Programming Expertise
            </h3>
            <p className="mobile-p font-inter">
              Master the essential art of programming, empowering you to breathe
              life into your Sumobot and gear up for the exhilarating battles
              ahead.
            </p>
          </div>
        </div>
      </div>

      <div className="h-2 w-full bg-white"></div>

      <div className="mobile-section text-black">
        <h1 className="mobile-h2 ">Join the Battle!</h1>
        <p className="mobile-p max-w-sm font-inter">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button className="btn-primary bg-primary text-white">
          Register Now
        </button>
      </div>
    </main>
  );
}
