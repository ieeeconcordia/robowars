import DropdownCard from "@/components/dropdown-card/dropdown-card";
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
          <Link className="resource-card min-h-full" href={"#"}>
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

      {/* FAQ Section */}
      <div className="section text-white bg-primary">
        <h1 className="h2">FAQ</h1>
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <DropdownCard title="Do I need to be a student to participate?">
            No! This competition is open to everyone and anyone. You simply need
            to have a robot.
          </DropdownCard>
          <DropdownCard title="Will there be a prize?">
            Yes, and it will be announced shortly.
          </DropdownCard>
          <DropdownCard title="How do I enter?">
            You must register through our vtools website. Click the “Register”
            button on the menu above.
          </DropdownCard>
          <DropdownCard title="Do I need a team?">
            You can enter with a team of 4 people maximum. You do not need a
            team to enter however, if you have your own robot.
          </DropdownCard>
          <DropdownCard title="How much does it cost?">
            The entrance fee is 30$ per person. We will provide food and
            t-shirts on the day of the competition
          </DropdownCard>
          <DropdownCard title="How can I learn to build my robot?">
            Come to IEEE Concordia&apos;s lab hours! We have plenty of
            supervisors with experience that can help you with the guidelines.
          </DropdownCard>
        </div>

        <div className="flex flex-col gap-4 mt-4 justify-center items-center">
          <h2 className="h3">Can&apos;t find an answer?</h2>
          <p className="p">
            Don&apos;t hesitate to contact us below and we&apos;ll get back to you 
            as soon as possible!
          </p>
          <a
            className="btn-primary w-fit bg-white text-primary"
            href="https://www.ieeeconcordia.ca/contact"
          >
            🤙🏽 Contact Us
          </a>
        </div>
      </div>

      <div className="section text-black bg-white">
        <h3 className="h3 mt-4">Ask us anything on our platforms!</h3>
        <SocialRow />
      </div>
    </main>
  );
}
