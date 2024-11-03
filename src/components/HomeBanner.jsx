import { Link } from "react-router-dom";
import bannerImg from "../assets/banner.jpg";

const HomeBanner = () => {
  return (
    <div>
      <div className="bg-purple-600 h-[750px] rounded-3xl w-11/12 mx-auto -mt-24 flex flex-col items-center justify-center">
        <div className="text-center space-y-8 ">
          <h1 className="text-3xl lg:text-6xl font-bold  text-white">
            Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
          </h1>
          <p className="text-gray-300 font-semibold lg:text-lg">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to <br /> the coolest accessories, we
            have it all!
          </p>
          <Link to="/dashboard">
            <button className="btn rounded-full text-lg font-bold mt-4 text-purple-500">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
      <div className="-mt-24 w-fit mx-auto p-4 rounded-xl border-2 border-white bg-transparent backdrop-blur-lg">
        <img className="mx-auto rounded-xl h-[500px] " src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default HomeBanner;