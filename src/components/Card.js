import Img from "./Img";
export default function Card({ src }) {
  return (
    <div className="flex-shrink-0 mr-3 my-2 p-3 w-72 h-80 rounded-lg bg-gray-300 bg-opacity-30 backdrop-filter blur-xl shadow-lg">
      <div className="flex flex-col space-y-3">
        <div className="relative h-40">
          <img className="object-cover w-full h-full rounded-md" src={src} />
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
          <p className="font-light text-md text-white font-mono">0.0005 ETH</p>
        </div>
        <h1 className="text-white font-bold font-mono">Water bender</h1>
        <div className="flex -space-x-4">
          <Img border={2} />
          <Img border={2} />
          <Img border={2} />
          <Img border={2} />
          <Img border={2} />
          <div className="w-10 h-10 bg-purple-800 text-sm font-light font-mono text-white flex flex-col justify-center items-center rounded-full">
            100+
          </div>
        </div>
      </div>
    </div>
  );
}
