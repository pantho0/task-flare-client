import Lottie from "lottie-react";
import bannerAnimation from "../../assets/banner.json";
import Container from "../Utils/Container";
const Banner = () => {
  return (
    <div className="bg-blue-100">
      <Container>
        <div className="grid grid-cols-1 gap-0 bg-blue-100 bg-opacity-25 md:grid-cols-2 items-center">
          <div className="flex flex-col items-start justify-center px-4 py-24 lg:px-20">
            <span className="mb-3 text-white bg-blue-900 badge">TaskFlare</span>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-blue-900 md:text-4xl lg:text-5xl">
            Where Every Task Finds Its Perfect Place!
            </h1>
            <form className="w-full mb-6">
              <label className="sr-only">Your Email</label>
              <div className="block lg:hidden">
                <button
                  className="w-full mt-2 text-white bg-blue-900 hover:bg-blue-800 btn btn-lg"
                  type="submit"
                >
                  Get Started
                </button>
              </div>
              <div className="hidden w-full form-append lg:flex">
                <button
                  className="text-white bg-blue-900 hover:bg-blue-800 btn btn-lg"
                  type="submit"
                >
                  Get Started
                </button>
              </div>
            </form>
            <p className="pr-0 mb-4 text-sm text-blue-800 tracking-relaxed lg:pr-16">
             Join with us Where Dreams Meet Deadlines
            </p>
          </div>
          <div>
            <Lottie animationData={bannerAnimation} loop={true}></Lottie>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
