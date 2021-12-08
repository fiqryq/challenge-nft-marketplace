import Img from "./components/Img";
import humberger from "./assets/humberger.png";

function App() {
  return (
    <div className="bg-black pb-5">
      {/* Nav */}
      <div className="flex justify-between bg-black text-white space-x-2 p-2 py-3 border-b-2 border-gray-300">
        <img className="h-10 w-10 p-1" src={humberger} alt="image" />
        <input
          className="w-5/12 rounded-md px-3 bg-gray-300 bg-opacity-25"
          type="text"
          placeholder="search..."
        />
        <div className="flex space-x-1">
          <Img />
          <Img />
        </div>
        <Img />
      </div>

      {/* Banner */}
      <div className="flex flex-col justify-around h-48 my-5 m-2 bg-gray-700 rounded-lg p-5 relative">
        <h1 className="font-bold text-xl text-white">
          One Stop NFT Marketplace
        </h1>
        <p className="text-md text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
          possimus.
        </p>
        <div className="flex space-x-2">
          <button className="p-1 px-2 text-white text-sm bg-gray-600 rounded-sm">
            Start Create
          </button>
          <button className="p-1 px-2 text-white text-sm bg-gray-600 rounded-sm">
            How it Work
          </button>
        </div>
      </div>

      {/* Tab */}
      <div className="flex flex-col space-y-2 m-2">
        <h1 className="text-lg text-white font-bold">Explore</h1>
        <ul className="flex flex-nowrap justify-start space-x-2 overflow-x-auto">
          <li className="flex-shrink-0 p-2 bg-gray-300 bg-opacity-20 text-white rounded-md">
            List items
          </li>
          <li className="flex-shrink-0 p-2 bg-gray-300 bg-opacity-20 text-white rounded-md">
            List items
          </li>
          <li className="flex-shrink-0 p-2 bg-gray-300 bg-opacity-20 text-white rounded-md">
            List items
          </li>
          <li className="flex-shrink-0 p-2 bg-gray-300 bg-opacity-20 text-white rounded-md">
            List items
          </li>
          <li className="flex-shrink-0 p-2 bg-gray-300 bg-opacity-20 text-white rounded-md">
            List items
          </li>
          <li className="flex-shrink-0 p-2 bg-gray-300 bg-opacity-20 text-white rounded-md">
            List items
          </li>
          <li className="flex-shrink-0 p-2 bg-gray-300 bg-opacity-20 text-white rounded-md">
            List items
          </li>
        </ul>
      </div>

      {/* Card List */}
      <div className="flex space-x-3 m-2 flex-nowrap overflow-x-auto">
        <div className="flex-shrink-0 p-3 w-72 h-80 rounded-lg bg-gray-300 bg-opacity-30 backdrop-filter blur-xl">
          <div className="flex flex-col space-y-3">
            <div className="w-full h-40 rounded-md bg-gray-400"></div>
            <div className="flex justify-between">
              <p className="text-white">Current Bid</p>
              <p className="font-light text-md text-white">0.0005 ETH</p>
            </div>
            <h1 className="text-white font-bold">Water bender</h1>
          </div>
        </div>
        <div className="flex-shrink-0 p-3 w-72 h-80 rounded-lg bg-gray-300 bg-opacity-30 backdrop-filter blur-xl">
          <div className="flex flex-col space-y-3">
            <div className="w-full h-40 rounded-md bg-gray-400"></div>
            <div className="flex justify-between">
              <p className="text-white">Current Bid</p>
              <p className="font-light text-md text-white">0.0005 ETH</p>
            </div>
            <h1 className="text-white font-bold">Water bender</h1>
          </div>
        </div>
        <div className="flex-shrink-0 p-3 w-72 h-80 rounded-lg bg-gray-300 bg-opacity-30 backdrop-filter blur-xl">
          <div className="flex flex-col space-y-3">
            <div className="w-full h-40 rounded-md bg-gray-400"></div>
            <div className="flex justify-between">
              <p className="text-white">Current Bid</p>
              <p className="font-light text-md text-white">0.0005 ETH</p>
            </div>
            <h1 className="text-white font-bold">Water bender</h1>
          </div>
        </div>
        <div className="flex-shrink-0 p-3 w-72 h-80 rounded-lg bg-gray-300 bg-opacity-30 backdrop-filter blur-xl">
          <div className="flex flex-col space-y-3">
            <div className="w-full h-40 rounded-md bg-gray-400"></div>
            <div className="flex justify-between">
              <p className="text-white">Current Bid</p>
              <p className="font-light text-md text-white">0.0005 ETH</p>
            </div>
            <h1 className="text-white font-bold">Water bender</h1>
          </div>
        </div>
        <div className="flex-shrink-0 p-3 w-72 h-80 rounded-lg bg-gray-300 bg-opacity-30 backdrop-filter blur-xl">
          <div className="flex flex-col space-y-3">
            <div className="w-full h-40 rounded-md bg-gray-400"></div>
            <div className="flex justify-between">
              <p className="text-white">Current Bid</p>
              <p className="font-light text-md text-white">0.0005 ETH</p>
            </div>
            <h1 className="text-white font-bold">Water bender</h1>
          </div>
        </div>
      </div>

      {/* People */}
      <div className="m-2 flex flex-col justify-center bg-gray-300 bg-opacity-20 p-3 space-y-2 rounded-lg">
        <h1 className="text-lg text-white font-bold">Top Artist</h1>
        <div className="flex justify-between items-center p-2">
          <p className="text-white font-bold text-lg">1.</p>
          <Img />
          <div className="flex flex-col">
            <h1 className="text-white font-bold">Brooklyn Simmons</h1>
            <p className="text-gray-300">@brosim</p>
          </div>
          <button className="p-1 px-3 bg-gray-300 rounded-md">Follow</button>
        </div>
        <div className="flex justify-between items-center p-2">
          <p className="text-white font-bold text-lg">2.</p>
          <Img />
          <div className="flex flex-col">
            <h1 className="text-white font-bold">Brooklyn Simmons</h1>
            <p className="text-gray-300">@brosim</p>
          </div>
          <button className="p-1 px-3 bg-gray-300 rounded-md">Follow</button>
        </div>
        <div className="flex justify-between items-center p-2">
          <p className="text-white font-bold text-lg">3.</p>
          <Img />
          <div className="flex flex-col">
            <h1 className="text-white font-bold">Brooklyn Simmons</h1>
            <p className="text-gray-300">@brosim</p>
          </div>
          <button className="p-1 px-3 bg-gray-300 rounded-md">Follow</button>
        </div>
      </div>

      <div className="m-2 flex flex-col justify-center bg-gray-300 bg-opacity-20 p-3 space-y-2 rounded-lg">
        <h1 className="text-lg text-white font-bold">Recent Activity</h1>
        <div className="flex bg-gray-300 bg-opacity-20 rounded-lg p-3 space-x-3 items-center">
          <Img />
          <div className="flex flex-col">
            <h1 className="text-white font-bold">Water Bender</h1>
            <p className="text-gray-300 text-sm">
              Purchased by you for 0,5 ETH
            </p>
          </div>
        </div>
        <div className="flex bg-gray-300 bg-opacity-20 rounded-lg p-3 space-x-3 items-center">
          <Img />
          <div className="flex flex-col">
            <h1 className="text-white font-bold">Water Bender</h1>
            <p className="text-gray-300 text-sm">
              Purchased by you for 0,5 ETH
            </p>
          </div>
        </div>
        <div className="flex bg-gray-300 bg-opacity-20 rounded-lg p-3 space-x-3 items-center">
          <Img />
          <div className="flex flex-col">
            <h1 className="text-white font-bold">Water Bender</h1>
            <p className="text-gray-300 text-sm">
              Purchased by you for 0,5 ETH
            </p>
          </div>
        </div>
        <div className="flex bg-gray-300 bg-opacity-20 rounded-lg p-3 space-x-3 items-center">
          <Img />
          <div className="flex flex-col">
            <h1 className="text-white font-bold">Water Bender</h1>
            <p className="text-gray-300 text-sm">
              Purchased by you for 0,5 ETH
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
