import Trending1 from "../assets/trending1.webp";
import Trending2 from "../assets/trending2.webp";
import Trending3 from "../assets/trending3.webp";
import Trending4 from "../assets/trending4.webp";
import Trending5 from "../assets/trending5.webp";
import Trending6 from "../assets/trending6.webp";
import toast from "react-hot-toast";


const Trends = () => {
    const movies = [
    {
      id: 1,
      url: Trending1,
    },
    {
      id: 2,
      url: Trending2,
    },
    {
      id: 3,
      url: Trending3,
    },
    {
      id: 4,
      url: Trending4,
    },
    {
      id: 5,
      url: Trending5,
    },
    {
      id: 6,
      url: Trending6,
    }
  ];

  const handleClick = () => {
    toast("🚧 Backend needs to be implemented.");
  }
  return (
  <div className="px-4 py-8 sm:px-6 md:px-10 lg:px-16">
    <h2 className="text-xl font-bold sm:text-2xl">
      Trending Now
    </h2>
    <div className="mt-3 px-4 flex gap-4 overflow-x-auto overflow-y-hidden pb-4 hide-scrollbar sm:gap-6 md:gap-8" onClick={handleClick}>
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="cursor-pointer pt-4 relative flex-shrink-0 transition-transform duration-300 hover:scale-105"
        >
          <img
            src={movie.url}
            alt={`Trending ${movie.id}`}
            className="w-28 rounded-xl sm:w-32 md:w-36 lg:w-40"
          />

          <span className="absolute bottom-0 -left-3 text-5xl sm:text-6xl md:text-7xl font-black white-text-stroke">
            {movie.id}
          </span>
        </div>
      ))}
    </div>
  </div>
  );
}

export default Trends;