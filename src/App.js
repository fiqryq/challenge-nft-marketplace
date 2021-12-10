import axios from "axios";
import { useEffect, useState } from "react";
import Img from "./components/Img";
import Card from "./components/Card";
import humberger from "./assets/humberger.png";
import search from "./assets/search.svg";
import notification from "./assets/notification.svg";
import message from "./assets/message.svg";
import avatar from "./assets/avatar.svg";
import etherium from "./assets/ethereum.svg";
import etherium1 from "./assets/ethereum-1.svg";
import dashboard from "./assets/dashboard.svg";
import transaction from "./assets/transaction.svg";
import note from "./assets/note.svg";
import gear from "./assets/gear.svg";
import wallet from "./assets/package.svg";

function App() {
  const url =
    "https://6196ed95af46280017e7e326.mockapi.io/waveast/api/nft-marketplace";
  const [artwork, setArtwork] = useState([]);
  const [recent, setRecent] = useState([]);
  const [artist, setArtist] = useState([]);
  const [user, setUsers] = useState([]);

  useEffect(async () => {
    try {
      const artwork = await axios.get(`${url}/featured-artworks`);
      const recent = await axios.get(`${url}/recent-activities`);
      const artist = await axios.get(`${url}/top-artist`);
      const users = await axios.get(`${url}/users`);

      setRecent(recent.data);
      setArtist(artist.data);
      setArtwork(artwork.data);
      setUsers(users.data);
    } catch (error) {
      console.log(error);
    }
  }, [axios]);

  return (
    <div className="bg-black flex desktop:flex-row phone:flex-col max-h-full">
      <div className="bg-gray-800 max-h-full tablet:hidden phone:hidden desktop:block">
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
        <div className="flex justify-between desktop:justify-start desktop:gap-4 relative bg-black text-white p-2 py-3">
          <img
            className="h-10 w-10 p-2 desktop:hidden hover:bg-gray-700 rounded-lg"
            src={humberger}
            alt="image"
          />

          <div className="flex space-x-2 w-5/12 tablet:w-9/12 tablet:px-4 desktop:px-0 laptop:w-10/12 desktop:w-9/12">
            <input
              className="w-full rounded-md pl-10 tablet:pl-14 bg-blue-300  bg-opacity-20 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              type="text"
              placeholder="search..."
            />
            <div className="rounded-md phone:hidden tablet:hidden desktop:flex bg-blue-300  bg-opacity-20 blur-xl w-7/12 desktop:w-3/12">
              <div className="text-white space-x-4 font-mono w-full flex items-center justify-center">
                <img className="w-7  h-7" src={etherium1} alt="" />
                543,694,489 ETH
              </div>
            </div>
          </div>

          <img
            className="w-5 h-5 top-6 left-16 phone:left-16 tablet:left-20 desktop:left-5 absolute"
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
              <p className="text phone:hidden laptop:hidden tablet:hidden desktop:inline desktop:text-xl">
                Fiqry choerudin
              </p>
            </div>
          </div>
        </div>

        {/* Banner */}
        <div className="flex phone:flex-col desktop:flex-row desktop:justify-start">
          <div className="flex flex-col max-h-full desktop:w-9/12">
            <div className="flex flex-col justify-around h-48 m-2 tablet:h-60 rounded-lg p-5 bg-gradient-to-r from-purple-600 to-indigo-700 relative">
              <h1 className="font-bold text-xl  tablet:text-3xl desktop:text-5xl text-white">
                One Stop NFT Marketplace
              </h1>
              <p className="text-md text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                possimus.
              </p>
              <div className="flex space-x-2">
                <button className="p-1 px-2 desktop:px-5 hover:bg-indigo-700 hover:text-white text-indigo-600 text-xs desktop:text-lg bg-white rounded-lg desktop:text-md">
                  Start Create
                </button>
                <button className="p-2 px-2 desktop:px-5 hover:bg-indigo-700 hover:text-white text-indigo-600 text-xs desktop:text-lg bg-white rounded-lg desktop:text-md">
                  How it Work
                </button>
              </div>
            </div>

            {/* Tab */}
            <div className="flex flex-col space-y-2 m-2">
              <h1 className="text-lg text-white font-bold">Explore</h1>
              <ul className="flex flex-nowrap justify-start cursor-pointer space-x-2 overflow-x-auto">
                <li className="flex-shrink-0 p-2 text-xs desktop:text-lg bg-gradient-to-r from-purple-600 to-indigo-700 text-white rounded-full">
                  Live Auction
                </li>
                <li className="flex-shrink-0 p-2 px-3 text-xs desktop:text-lg bg-gray-300 bg-opacity-20 text-white rounded-full">
                  Art
                </li>
                <li className="flex-shrink-0 p-2 text-xs desktop:text-lg bg-gray-300 bg-opacity-20 text-white rounded-full">
                  Photography
                </li>
                <li className="flex-shrink-0 p-2 text-xs desktop:text-lg bg-gray-300 bg-opacity-20 text-white rounded-full">
                  Games
                </li>
                <li className="flex-shrink-0 p-2 text-xs desktop:text-lg bg-gray-300 bg-opacity-20 text-white rounded-full">
                  Music
                </li>
                <li className="flex-shrink-0 p-2 text-xs desktop:text-lg bg-gray-300 bg-opacity-20 text-white rounded-full">
                  Utility
                </li>
              </ul>
            </div>

            {/* Card List */}
            <div className="flex  mt-4 m-2 desktop:flex-wrap phone:flex-nowrap phone:overflow-x-auto">
              {artwork.map((items) => {
                return (
                  <Card
                    key={items.id}
                    bid={items.currentBid}
                    time={items.bid_starts}
                    name={items.name}
                    src={items.artworksUrl}
                  />
                );
              })}
            </div>
          </div>

          {/* People */}
          <div className="flex tablet:flex-row phone:flex-col tablet:justify-between desktop:flex-col desktop:justify-start desktop:w-3/12">
            <div className="m-2 flex flex-col bg-blue-300 bg-opacity-20 p-3 space-y-2 rounded-lg">
              <h1 className="text-lg desktop:text-2xl text-white font-bold">
                Top Artist
              </h1>
              {artist.map((items, idx) => {
                return (
                  <div
                    key={items.id}
                    className="flex desktop:space-x-8 phone:space-x-1 justify-between items-center p-2"
                  >
                    <div className="flex space-x-4">
                      <p className="text-white font-bold text-lg">{`${
                        idx + 1
                      }.`}</p>
                      <div className="flex space-x-5">
                        <Img
                          src={`https://i.pravatar.cc/300?img=${items.id}`}
                        />
                        <div className="flex flex-col w-full">
                          <h1 className="text-white font-bold">{items.name}</h1>
                          <p className="text-gray-300 text-sm font-mono">
                            {items.username}
                          </p>
                        </div>
                      </div>
                    </div>
                    <button className="desktop:p-3 desktop:px-5 tablet:p-2 phone:px-2 phone:p-1 bg-gradient-to-r text-xs text-white hover:from-purple-900 from-purple-600 to-indigo-700 rounded-md">
                      Follow
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="m-2 flex flex-col desktop:flex-none tablet:flex-1 justify-start bg-blue-300 bg-opacity-20 p-3 space-y-2 rounded-lg">
              <h1 className="text-lg desktop:text-2xl text-white font-bold">
                Recent Activity
              </h1>
              {recent.map((items) => {
                return (
                  <div
                    key={items.id}
                    className="flex bg-gray-300 bg-opacity-10 rounded-lg p-3 space-x-3 items-center"
                  >
                    <Img src={`https://i.pravatar.cc/300?img=${items.id}`} />
                    <div className="flex flex-col">
                      <h1 className="text-white font-bold">{items.name}</h1>
                      <p className="text-gray-300 text-sm">{items.message}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
