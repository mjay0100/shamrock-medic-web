import first from "../assets/images/Group 40.png";
import second from "../assets/images/Group 41.png";
import third from "../assets/images/Group 42.png";
import fourth from "../assets/images/Group 43.png";

const News = () => {
  return (
    <>
      <h1 className="text-2xl text-center text-[#2F327D] mb-4">
        Lastest News and Resources
      </h1>
      <p className="text-center text-[#696984] mb-8">
        See the developments that have occurred to Skillines in the world
      </p>
      <section className="grid md:grid-cols-2 gap-8 my-8 p-5 w-[90%] mx-auto">
        <div>
          <img src={first} className="mb-4" alt="" />
          <button className="bg-[#F4C467] px-3 rounded-xl mb-4">NEWS</button>
          <p className=" mb-4">
            Class adds $30 million to its balance sheet for a Zoom-friendly
            edtech solution
          </p>
          <p className="text-[#696984] mb-4">
            Class, launched less than a year ago by Blackboard co-founder
            Michael Chasen, integrates exclusively...
          </p>
          <p className="text-[#696984] mb-4 text">Read more</p>
        </div>
        <div>
          <div className="lg:flex gap-5 items-start">
            <img src={second} className="h-fit mx-auto mb-4" alt="" />
            <div className="">
              <h1 className="mb-4">
                Class Technologies Inc. Closes $30 Million Series A Financing to
                Meet High Demand
              </h1>
              <p className="text-[#696984] mb-4">
                Class Technologies Inc., the company that created Class,...
              </p>
            </div>
          </div>
          <div className="lg:flex gap-5 items-start">
            <img src={third} className="h-fit mx-auto mb-4" alt="" />
            <div className="">
              <h1 className="mb-4">
                Class Technologies Inc. Closes $30 Million Series A Financing to
                Meet High Demand
              </h1>
              <p className="text-[#696984] mb-4">
                Class Technologies Inc., the company that created Class,...
              </p>
            </div>
          </div>
          <div className="lg:flex gap-5 items-start">
            <img src={fourth} className="h-fit mx-auto mb-4" alt="" />
            <div className="">
              <h1 className="mb-4">
                Class Technologies Inc. Closes $30 Million Series A Financing to
                Meet High Demand
              </h1>
              <p className="text-[#696984] mb-4">
                Class Technologies Inc., the company that created Class,...
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
