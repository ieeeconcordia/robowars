import SocialRow from "@/components/social-row/social-row";
import Link from "next/link";

export default function Competition() {
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
            <h1 className="landing-header text-center w-fit">Competition</h1>
          </div>
        </div>
      </div>

      {/* Team section */}
      <div className="section text-black bg-white">
        <h1 className="h2 ">The Organizing Team</h1>
        <p className="p max-w-sm font-inter">
          We are a group of passionate engineering students who are excited to
          bring you this awesome event. We&apos;re most often at our electrical lab at 
          Concordia University, so don&apos;t hesitate to come visit and check out our website 
          below!
        </p>
        <a
          className="btn-primary bg-primary text-white"
          href="https://www.ieeeconcordia.ca/about"
        >
          🫂 Our Team
        </a>
      </div>

      {/* Resources */}
      <div className="section text-black bg-light-grey">
        <h1 className="h2 ">Resources</h1>
        <p className="p max-w-sm font-inter">
          Are you excited to participate in RoboWars? Here are some resources to
          help you get started, as well as some unmissable information! 
          Check out the FAQ below for more information :)
        </p>

        <div className="resources">
          <Link className="resource-card min-h-full" target="_blank" href="https://docs.google.com/document/d/1uE_qKhlLz3xWvRydPu98WYNGkwppWoMsOBT8aPYuovw">
            <h3 className="h3">📕 Rule Book</h3>

            <p className="p font-inter">
              Contains all the rules and regulations for the competition. 
              Read it carefully!
            </p>
          </Link>

          <Link className="resource-card" href={"#"}>
            <h3 className="h3">📝 Info Session Notes</h3>

            <p className="p font-inter">
              For anyone that could not attend the info session, here&apos;s a quick summary of what was said!
            </p>
          </Link>
        </div>
      </div>

    </main>
  );
}
