"use client";
import CategoriesCard from "@/components/categories-card";
import DateCounter from "@/components/date-counter/date-counter";
import DropdownCard from "@/components/dropdown-card/dropdown-card";
import SocialRow from "@/components/social-row/social-row";

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
            <h5 className="w-fit">March 2024</h5>
          </div>

          <p className="landing-subheader max-w-sm font-inter drop-shadow-lg mb-8 mx-auto">
            Where machines collide and innovation thrives!
          </p>

          <div className="flex justify-center">
            <DateCounter eventDate={new Date(2024, 3, 20, 9, 0, 0)} />
          </div>
        </div>
      </div>

      {/* About section */}
      <div className="section text-black bg-light-grey">
        {/* <DropdownCard title="What is this?">
          The ultimate platform where the thunder of metal, the buzz of
          technology, and the thrill of competition converge. It's not just a
          battle; its a spectacle where amateur enthusiasts and seasoned
          engineers unveil their autonomous combatants to engage in fierce
          mechanical warfare.
        </DropdownCard> */}

        <h1 className="h2 ">About</h1>
        <p className="p max-w-sm font-inter">
          RoboWars is the ultimate platform where the thunder of metal, the buzz
          of technology, and the thrill of competition converge. It&apos;s not
          just a battle; its a spectacle where amateur enthusiasts and seasoned
          engineers unveil their autonomous combatants to engage in fierce
          mechanical warfare.
        </p>
        <button className="btn-primary bg-primary text-white">
          Register Now
        </button>
      </div>

      <div className="h-2 w-full bg-white"></div>

      {/* Categories */}
      <div className="section text-black">
        <h1 className="h2 ">Categories</h1>
        <p className="p max-w-sm font-inter">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <div className="categories">
        <div className="categorie-card bg-primary text-white">
          <h3 className="h3">Amateur</h3>

          <div className="w-52 border-b border-white"></div>

          <p className="p font-inter">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className="btn-primary bg-primary border border-white">
            Register Now
          </button>
        </div>

        <div className="categorie-card bg-secondary">
          <h3 className="h3">Professional</h3>
          <div className="w-52 border-b border-black"></div>
          <p className="p font-inter">
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

      <div className="section text-black bg-light-grey">
        <h2 className="h2 ">Workshop</h2>
        <p className="p max-w-sm font-inter">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <div className="flex flex-col items-center justify-center gap-8 p-8 bg-dark-grey shadow-lg rounded-lg overflow-hidden">
          <div className="flex flex-col items-center justify-center gap-2">
            <h3 className="h3 text-header-grey">Material Selection Mastery</h3>
            <p className="p font-inter">
              Uncover the secrets of selecting the finest components, ensuring
              your Sumobot is both sturdy and agile.
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
        </div>
      </div>

      <div className="h-2 w-full bg-white"></div>

      <div className="section text-black">
        <h1 className="h2 ">Join the Battle!</h1>
        <p className="p max-w-sm font-inter">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button className="btn-primary bg-primary text-white">
          Register Now
        </button>
        <h3 className="h3 mt-4">Follow us on our platforms for updates!</h3>
        <SocialRow />
      </div>
    </main>
  );
}
