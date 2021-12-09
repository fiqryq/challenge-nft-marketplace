import Img from "./components/Img";
import Card from "./components/Card";
import humberger from "./assets/humberger.png";
import love from "./assets/love.png";
import search from "./assets/search.svg";
import notification from "./assets/notification.svg";
import message from "./assets/message.svg";
import avatar from "./assets/avatar.svg";
import banner from "./assets/bannerart.svg";
import etherium from "./assets/ethereum.svg";
import dashboard from "./assets/dashboard.svg";
import transaction from "./assets/transaction.svg";
import note from "./assets/note.svg";
import gear from "./assets/gear.svg";
import wallet from "./assets/package.svg";

function App() {
  return (
    <div className="bg-black pb-5 flex desktop:flex-row phone:flex-col">
      <div className="bg-gray-800 tablet:hidden phone:hidden desktop:block">
        <div className="flex flex-col items-center py-5 space-y-6">
          <div>
            <img className="w-10 h-10" src={etherium} alt="" />
          </div>
          <ul>
            <li className="bg-gray-700 bg-opacity-80  p-6 border-l-4 border-purple-600">
              <img className="w-10 h-10 " src={dashboard} alt="image" />
            </li>
            <li className="hover:bg-gray-700 bg-opacity-80  p-6">
              <img className="w-10 h-10 " src={transaction} alt="image" />
            </li>
            <li className="hover:bg-gray-700 bg-opacity-80  p-6 ">
              <img className="w-10 h-10 " src={note} alt="image" />
            </li>
            <li className="hover:bg-gray-700 bg-opacity-80  p-6 ">
              <img className="w-10 h-10 " src={gear} alt="image" />
            </li>
            <li className="hover:bg-gray-700 bg-opacity-80  p-6 ">
              <img className="w-10 h-10 " src={wallet} alt="image" />
            </li>
          </ul>
        </div>
      </div>

      {/* Nav */}
      <div className="flex-1 m-2">
        <div className="flex justify-between desktop:justify-start desktop:gap-4  relative bg-black text-white p-2 py-3">
          <img
            className="h-10 w-10 p-2 desktop:hidden"
            src={humberger}
            alt="image"
          />

          <div className="flex w-5/12 tablet:w-8/12 desktop:w-9/12">
            <input
              className="w-full rounded-md pl-10 tablet:pl-10 bg-gray-300 bg-opacity-25 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              type="text"
              placeholder="search..."
            />
            <div className="rounded-md phone:hidden tablet:hidden desktop:flex bg-gray-300 300 bg-opacity-25 w-7/12 desktop:w-8/12">
              <div className="text-white font-mono w-full flex items-center justify-center">
                543,694,489 ETH
              </div>
            </div>
          </div>

          <img
            className="w-5 h-5 top-6 left-16 tablet:left-20 desktop:left-5 absolute"
            src={search}
            alt=""
          />

          <div className="flex space-x-5">
            <div className="flex space-x-2">
              <img
                className="p-2 bg-gray-300 w-10 h-10 rounded-full bg-opacity-20"
                src={message}
                alt=""
              />
              <img
                className="p-2 bg-gray-300 w-10 h-10 rounded-full bg-opacity-20"
                src={notification}
                alt=""
              />
            </div>
            <div className="flex desktop:justify-between items-center desktop:space-x-5">
              <img
                className="bg-gray-300 w-10 h-10 rounded-full bg-opacity-20"
                src={avatar}
                alt=""
              />
              <p className="text phone:hidden">Fiqry choerudin</p>
            </div>
          </div>
        </div>

        {/* Banner */}
        <div className="flex phone:flex-col desktop:flex-row desktop:justify-around">
          <div className="flex flex-col desktop:w-10/12">
            <div className="flex flex-col justify-around h-48 m-2 tablet:h-60 rounded-lg p-5 bg-gradient-to-r from-purple-600 to-indigo-700 relative">
              <h1 className="font-bold text-xl tablet:text-3xl desktop:text-4xl text-white">
                One Stop NFT Marketplace
              </h1>
              <p className="text-md text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                possimus.
              </p>
              <div className="flex space-x-2">
                <button className="p-1 px-2 text-black text-xs bg-white rounded-lg desktop:text-md">
                  Start Create
                </button>
                <button className="p-2 px-2  text-black text-xs bg-white rounded-lg desktop:text-md">
                  How it Work
                </button>
              </div>
            </div>

            {/* Tab */}
            <div className="flex flex-col space-y-2 m-2">
              <h1 className="text-lg text-white font-bold">Explore</h1>
              <ul className="flex flex-nowrap justify-start space-x-2 overflow-x-auto">
                <li className="flex-shrink-0 p-2 text-xs bg-gradient-to-r from-purple-600 to-indigo-700 text-white rounded-full">
                  Live Auction
                </li>
                <li className="flex-shrink-0 p-2 px-3 text-xs bg-gray-300 bg-opacity-20 text-white rounded-full">
                  Art
                </li>
                <li className="flex-shrink-0 p-2 text-xs bg-gray-300 bg-opacity-20 text-white rounded-full">
                  Photography
                </li>
                <li className="flex-shrink-0 p-2 text-xs bg-gray-300 bg-opacity-20 text-white rounded-full">
                  Games
                </li>
                <li className="flex-shrink-0 p-2 text-xs bg-gray-300 bg-opacity-20 text-white rounded-full">
                  Music
                </li>
                <li className="flex-shrink-0 p-2 text-xs bg-gray-300 bg-opacity-20 text-white rounded-full">
                  Utility
                </li>
              </ul>
            </div>

            {/* Card List */}
            <div className="flex space-x-3 mt-4 m-2 desktop:flex-wrap phone:flex-nowrap phone:overflow-x-auto">
              <Card
                src={
                  "https://images.unsplash.com/photo-1617791160536-598cf32026fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                }
              />
              <Card
                src={
                  "https://images.unsplash.com/photo-1617791160536-598cf32026fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                }
              />
            </div>
          </div>

          {/* People */}
          <div className="flex tablet:flex-row phone:flex-col tablet:justify-between desktop:flex-col desktop:justify-start">
            <div className="m-2 flex flex-col bg-gray-300 bg-opacity-20 p-3 space-y-2 rounded-lg">
              <h1 className="text-lg text-white font-bold">Top Artist</h1>
              <div className="flex space-x-8 justify-between items-center p-2">
                <div className="flex space-x-4 items-center">
                  <p className="text-white font-bold text-lg">1.</p>
                  <div className="flex space-x-2">
                    <Img />
                    <div className="flex flex-col items-center w-full">
                      <h1 className="text-white font-bold">Brooklyn</h1>
                      <p className="text-gray-300 text-sm font-mono">@brosim</p>
                    </div>
                  </div>
                </div>
                <button className="p-3 px-5 bg-gradient-to-r text-xs text-white from-purple-600 to-indigo-700 rounded-md">
                  Follow
                </button>
              </div>
            </div>

            <div className="m-2 flex flex-col tablet:flex-1 justify-start bg-gray-300 bg-opacity-20 p-3 space-y-2 rounded-lg">
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
        </div>
      </div>
    </div>
  );
}

export default App;
