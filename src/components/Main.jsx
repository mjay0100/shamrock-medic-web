import Main_card from "./Main_card";
import girl from "../assets/images/lovely-teenage-girl-with-curly-hair-posing-yellow-tshirt-min 1.png";
import play from "../assets/images/play.png";
import google from "../assets/images/google.png";
import netflix from "../assets/images/netflix.png";
import airbnb from "../assets/images/airbnb.png";
import amazon from "../assets/images/amazon.png";
import facebook from "../assets/images/facebook.png";
import grab from "../assets/images/grab.png";
import group1 from "../assets/images/Group 7.png";
import group2 from "../assets/images/Group 9.png";
import group3 from "../assets/images/Group 10.png";
import group4 from "../assets/images/Group 13.png";

const Main = () => {
  return (
    <>
      <section className="md:flex bg-[#FFF2E1] justify-around p-5 px-8">
        <div>
          <h1 className="text-[#2F327D] text-4xl font-bold mt-20 ">
            <span className="text-[#F48C06]">Medical</span> Care is now <br />{" "}
            much easier
          </h1>
          <p className="my-5">
            Skilline is an interesting platform that will connect with certified
            medical specialists
          </p>
          <div className="flex items-center gap-4">
            <button className="px-5 py-2 shadow-sm rounded-3xl shadow-slate-400 bg-orange-500 text-white">
              Join for free
            </button>
            <img src={play} className="w-8" alt="" />
            <p>Watch how it works</p>
          </div>
        </div>
        <div className="relative">
          <img src={girl} className=" mx-auto" alt="" />
          <img src={group1} className="w-32 absolute top-[7rem]" alt="" />
          <img
            src={group2}
            className="w-24 absolute top-[3rem] right-[2rem]"
            alt=""
          />
          <img
            src={group4}
            className="w-52 absolute bottom-[3rem] left-[2rem]"
            alt=""
          />
          <img
            src={group3}
            className="w-44 absolute top-[14rem] right-0"
            alt=""
          />
        </div>
      </section>
      <div className="bg-white ">
        <h4 className="text-center text-lg pt-4">
          Trusted by 5,000+ companies Worldwide
        </h4>
        <div className="grid grid-cols-3 md:grid-cols-6 items-center mx-auto p-8 mb-6">
          <img src={google} alt="" className="w-24 justify-self-center p-2" />
          <img src={netflix} alt="" className="w-24 justify-self-center p-2" />
          <img src={airbnb} alt="" className="w-24 justify-self-center p-2" />
          <img
            src={amazon}
            alt=""
            className="w-24 self-end justify-self-center p-2"
          />
          <img src={facebook} alt="" className="w-24 justify-self-center p-2" />
          <img src={grab} alt="" className="w-24 justify-self-center p-2" />
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-3">
            <span className="text-[#2F327D]">All-In-One</span>{" "}
            <span className="text-[#F48C06]">Cloud Software</span>
          </h1>
          <p className="w-1/2 mx-auto">
            Skilline is one powerful online software suite that combines all the
            tools needed to run a successful school or office.
          </p>
        </div>
        <Main_card />
      </div>
    </>
  );
};

export default Main;
