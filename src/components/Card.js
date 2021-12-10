import Img from "./Img";

export default function Card({ src, time, bid, name }) {
  return (
    <div className="flex-shrink-0 mr-3 my-2 p-3 w-80 h-80 rounded-lg bg-blue-300 bg-opacity-20 backdrop-filter blur-xl shadow-lg">
      <div className="flex flex-col space-y-3">
        <div className="relative h-40">
          <img className="object-cover w-full h-full rounded-md" src={src} />
          <div className="absolute p-4 flex justify-between w-full top-0 left-0">
            <p className="text-white text-xs p-2 bg-gray-800 bg-opacity-30 rounded-full font-mono">
              Art
            </p>
          </div>
          <div className="absolute w-full bottom-0 left-0 bg-black bg-opacity-40 rounded-b-md">
            <p className="text-white text-center text-xs p-2 font-mono">
              {time}
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <p className="text-white">Current Bid</p>
          <p className="font-light text-md text-indigo-500 font-mono">{bid}</p>
        </div>
        <h1 className="text-white font-bold font-mono">{name}</h1>
        <div className="flex -space-x-4">
          <Img border={2} src={"https://i.pravatar.cc/300?img=2"} />
          <Img border={2} src={"https://i.pravatar.cc/300?img=3"} />
          <Img border={2} src={"https://i.pravatar.cc/300?img=4"} />
          <Img border={2} src={"https://i.pravatar.cc/300?img=5"} />
          <Img border={2} src={"https://i.pravatar.cc/300?img=6"} />

          <div className="w-10 h-10 bg-indigo-500 text-sm font-light font-mono text-white flex flex-col justify-center items-center rounded-full">
            100+
          </div>
        </div>
      </div>
    </div>
  );
}
