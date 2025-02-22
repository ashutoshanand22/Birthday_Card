import video1 from "../assets/ustempletoday.mp4";
import video2 from "../assets/ustempletoday2.mp4";
import video3 from "../assets/ustempletoday3.mp4";

const You = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            I Love 
            <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
              {" "}  You Karishma
            </span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500">
          "Happy Birthday, Karishma! 🎉✨ On your special day, I just want to remind you how amazing you are! May your day be filled with endless laughter, sweet surprises, and all the happiness you bring to the world. Keep shining and spreading your magic! 💖🎂🎁 Wishing you a year ahead as beautiful and bright as your smile!"
        </p>
        <div className="flex justify-center my-10">
          <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md">
            Love Me...
          </a>
          <a href="#" className="py-3 px-4 mx-3 rounded-md border">
            Hate Me...
          </a>
        </div>
        <div className="flex mt-10 justify-center">
          <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my4">
            <source src={video1} type="video/mp4" />
            You borwser does not support the video tag.
          </video>
          <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my4">
            <source src={video2} type="video/mp4" />
            You borwser does not support the video tag.
          </video>
        </div>
        <div className="flex mt-10 justify-center">
        <video autoPlay loop muted className="rounded-lg w-full border border-orange-700 shadow-orange-400 mx-1 my2">
            <source src={video3} type="video/mp4" />
            You borwser does not support the video tag.
          </video>
        </div>
    </div>
  );
};

export default You;