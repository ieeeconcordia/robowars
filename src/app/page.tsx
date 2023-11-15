export default function Home() {
  return (
    <main className=" bg-white">
      {/* About section */}
      <div className="mobile-section bg-light-grey">
        <h1 className="mobile-h2 ">About</h1>
        <p className="mobile-p max-w-sm font-inter">
          RoboWars is the ultimate platform where the thunder of metal, the buzz
          of technology, and the thrill of competition converge. It's not just a
          battle; its a spectacle where amateur enthusiasts and seasoned
          engineers unveil their autonomous combatants to engage in fierce
          mechanical warfare.
        </p>
      </div>
      <div className="h-2 w-full bg-white"></div>

      {/* Categories */}
      <div className="mobile-section">
        <h1 className="mobile-h2 ">Categories</h1>
        <p className="mobile-p max-w-sm font-inter">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </main>
  );
}
