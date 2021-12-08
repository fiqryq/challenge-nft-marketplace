import Img from "./components/Img";
import humberger from "./assets/humberger.png";
import love from "./assets/love.png";

function App() {
  return (
    <div className="bg-black pb-5">
      {/* Nav */}
      <div className="flex justify-between bg-black text-white space-x-2 p-2 py-3 border-b-2 border-black">
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
          <button className="p-1 px-2 text-white text-sm bg-gray-600 rounded-lg">
            Start Create
          </button>
          <button className="p-1 px-2 text-white text-sm bg-gray-600 rounded-lg">
            How it Work
          </button>
        </div>
      </div>

      {/* Tab */}
      <div className="flex flex-col space-y-2 m-2">
        <h1 className="text-lg text-white font-bold">Explore</h1>
        <ul className="flex flex-nowrap justify-start space-x-2 overflow-x-auto">
          <li className="flex-shrink-0 p-2 bg-gray-300 bg-opacity-20 text-white rounded-full border-2 border-white">
            List items
          </li>
          <li className="flex-shrink-0 p-2 bg-gray-300 bg-opacity-20 text-white rounded-full">
            List items
          </li>
          <li className="flex-shrink-0 p-2 bg-gray-300 bg-opacity-20 text-white rounded-full">
            List items
          </li>
          <li className="flex-shrink-0 p-2 bg-gray-300 bg-opacity-20 text-white rounded-full">
            List items
          </li>
          <li className="flex-shrink-0 p-2 bg-gray-300 bg-opacity-20 text-white rounded-full">
            List items
          </li>
          <li className="flex-shrink-0 p-2 bg-gray-300 bg-opacity-20 text-white rounded-full">
            List items
          </li>
          <li className="flex-shrink-0 p-2 bg-gray-300 bg-opacity-20 text-white rounded-full">
            List items
          </li>
        </ul>
      </div>

      {/* Card List */}
      <div className="flex space-x-3 mt-4 m-2 flex-nowrap overflow-x-auto">
        <div className="flex-shrink-0 p-3 w-72 h-80 rounded-lg bg-gray-300 bg-opacity-30 backdrop-filter blur-xl">
          <div className="flex flex-col space-y-3">
            <div className="relative h-40">
              <img
                className="object-cover w-full h-full rounded-md"
                src={
                  "https://images.unsplash.com/photo-1634896941598-b6b500a502a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=912&q=80"
                }
              />
              <div className="absolute p-4 flex justify-between w-full top-0 left-0">
                <p className="text-white text-xs p-2 bg-gray-300 bg-opacity-20 rounded-full font-mono">
                  Art
                </p>
              </div>
              <div className="absolute w-full bottom-0 left-0 bg-black bg-opacity-40 rounded-b-md">
                <p className="text-white text-center text-xs p-2 font-mono">
                  Ends in : 50h : 30m :20s
                </p>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-white">Current Bid</p>
              <p className="font-light text-md text-white font-mono">
                0.0005 ETH
              </p>
            </div>
            <h1 className="text-white font-bold font-mono">Water bender</h1>
            <div className="flex -space-x-4">
              <Img border={2} />
              <Img border={2} />
              <Img border={2} />
              <Img border={2} />
              <Img border={2} />
              <div className="w-10 h-10 bg-blue-800 text-sm font-light font-mono text-white flex flex-col justify-center items-center rounded-full">
                100+
              </div>
            </div>
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
