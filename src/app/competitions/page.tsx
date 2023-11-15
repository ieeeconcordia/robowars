import Link from "next/link";

export default function Competitions() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="mobile-section h-[calc(100vh-6rem)] bg-landing-grey text-white">
        <div>
          <h1 className="mobile-landing-header">Competitions</h1>
        </div>

        <p className="mobile-p max-w-sm font-inter"></p>
        <p className="mobile-p"></p>
      </div>

      {/* Team section */}
      <div className="mobile-section text-black bg-white">
        <h1 className="mobile-h2 ">The Organizing Team</h1>
        <p className="mobile-p max-w-sm font-inter">
          RoboWars is the ultimate platform where the thunder of metal, the buzz
          of technology, and the thrill of competition converge. It's not just a
          battle; its a spectacle where amateur enthusiasts and seasoned
          engineers unveil their autonomous combatants to engage in fierce
          mechanical warfare.
        </p>
        <button className="btn-primary bg-primary text-white">Our Team</button>
      </div>

      {/* Resources */}
      <div className="mobile-section text-black bg-light-grey">
        <h1 className="mobile-h2 ">Resources</h1>
        <p className="mobile-p max-w-sm font-inter">
          RoboWars is the ultimate platform where the thunder of metal, the buzz
          of technology, and the thrill of competition converge. It's not just a
          battle; its a spectacle where amateur enthusiasts and seasoned
          engineers unveil their autonomous combatants to engage in fierce
          mechanical warfare.
        </p>

        <Link
          className="flex flex-col items-center justify-center gap-8 px-8 py-16 bg-white text-black shadow-lg rounded-lg overflow-hidden"
          href={"#"}
        >
          <h3 className="mobile-h3">📕 Rule Book</h3>

          <p className="mobile-p font-inter">
            This contains all the information regarding the ....
          </p>
        </Link>

        <Link
          className="flex flex-col items-center justify-center gap-8 px-8 py-16 bg-white text-black shadow-lg rounded-lg overflow-hidden"
          href={"#"}
        >
          <h3 className="mobile-h3">📝 Info-session Notes</h3>

          <p className="mobile-p font-inter">
            This is for anyone who missed the info session. Don't worry, we
            gotchu!
          </p>
        </Link>
      </div>

      {/* FAQ Section */}
      <div className="mobile-section text-white bg-primary">
        <h1 className="mobile-h2">FAQ</h1>
        <div className="w-full flex flex-col gap-4">
          <div className="w-full px-4 py-4 mobile-p text-black bg-white rounded text-left">
            <p className="">What happens in Robowars?</p>
          </div>
          <div className="w-full px-4 py-4 mobile-p text-black bg-white rounded text-left">
            <p className="">What happens in Robowars?</p>
          </div>
          <div className="w-full px-4 py-4 mobile-p text-black bg-white rounded text-left">
            <p className="">What happens in Robowars?</p>
          </div>
          <div className="w-full px-4 py-4 mobile-p text-black bg-white rounded text-left">
            <p className="">What happens in Robowars?</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-4 justify-center items-center">
          <h2 className="mobile-h3">Can't find an answer?</h2>
          <p className="mobile-p">
            Don’t hesitate to contact us on our platforms or on our website.
          </p>
          <button className="btn-primary w-fit bg-white text-primary">
            Contact Us
          </button>
        </div>
      </div>

      <div className="mobile-section text-black bg-white">
        <h1 className="mobile-h2 ">Community Support</h1>
        <p className="mobile-p max-w-sm font-inter">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="btn-primary bg-primary text-white">
          Register Now
        </button>
      </div>
    </main>
  );
}
