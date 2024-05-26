import seadan from "./images/icon-sedans.svg";
import suv from "./images/icon-suvs.svg";
import luxury from "./images/icon-luxury.svg";

function App() {
  return (
    <>
      <div className="w-2/3 h-96 bg-slate-500 mx-auto mt-32 max-1600:flex max-800:grid grid-cols-auto-fit-200px max-800:h-36">
        <div className="w-full block bg-[#e38525]">
          <img className="pl-6 pt-8" src={seadan} alt="sedans" />
          <p className="text-2xl text-white pl-6 pt-2">SEDANS</p>
          <p className="text-white text-xs w-3/5 pl-6 pt-2">
            Choose a sedan for its affordability and excellent fuel economy.
            Ideal for cruising in the city or on your next road trip.
          </p>
          <button className=" text-[#e38525] bg-white w-28 h-10 ml-8 mt-20 rounded-3xl border-2 border-white hover:text-white hover:bg-[#e38525] ease-in">
            Learn More
          </button>
        </div>
        <div className="w-full bg-[#016972] block">
          <img className="pl-6 pt-8" src={suv} alt="suvs" />
          <p className="text-2xl text-white pl-6 pt-2">SUVS</p>
          <p className="text-white text-xs w-3/5 pl-6 pt-2">
            Take an SUV for its spacious interior, power, and versatility.
            Perfect for your next family vacation and off-road adventures.
          </p>
          <button className=" text-[#016972] bg-white w-28 h-10 ml-8 mt-20 rounded-3xl border-2 border-white hover:text-white hover:bg-[#016972] ease-in">
            Learn More
          </button>
        </div>
        <div className="w-full block bg-[#00403f]">
          <img className="pl-6 pt-8" src={luxury} alt="luxury" />
          <p className="text-2xl text-white pl-6 pt-2">LUXURY</p>
          <p className="text-white text-xs w-3/5 pl-6 pt-2">
            Cruise in the best car brands without the bloated prices. Enjoy the
            enhanced comfort of a luxury rental and arrive in style.
          </p>
          <button className=" bg-white w-28 h-10 ml-8 mt-20 rounded-3xl border-2 border-white hover:text-white hover:bg-[#016972] ease-in ">
            Learn More
          </button>
        </div>
      </div>
      <div class="fixed bottom-0 left-1/3 w-2/3 max-800:left-1/4">
        Challenge by
        <a
          className="text-red-600 ml-2 hover:text-blue-600"
          href="https://www.frontendmentor.io?ref=challenge"
          target="https://www.frontendmentor.io/"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          className="text-red-600 ml-2 hover:text-blue-600"
          href="https://github.com/gamakgrover2002"
        >
          Gamak Grover
        </a>
        .
      </div>
    </>
  );
}

export default App;
