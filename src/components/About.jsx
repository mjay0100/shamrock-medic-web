import teacher from "../assets/images/confident-teacher.png";
import circle from "../assets/images/Ellipse 12.png";
import rect1 from "../assets/images/Rectangle 17.png";
import rect2 from "../assets/images/Rectangle 18.png";

const About = () => {
  return (
    <section>
      <h1 className="text-center text-2xl font-semibold mb-8">
        <span className="text-[#2F327D]">
          What is <span className="text-[#F48C06]">Skilline?</span>
        </span>
      </h1>
      <p className="text-center w-2/3 mx-auto tetx-[#696984]">
        Skilline is a platform that allows educators to create online classes
        whereby they can store the course materials online; manage assignments,
        quizzes and exams; monitor due dates; grade results and provide students
        with feedback all in one place.
      </p>
      <div className="md:flex p-7 gap-8 justify-center text-white font-bold mt-5 text-center">
        <article className="">
          <div className="about-bg1 rounded-md py-[6rem] px-[5rem] mb-5">
            <h1 className="mb-4 capitalize">for instructions</h1>
            <button className="border-2 border-solid border-white/40 p-3 rounded-2xl">
              start a class today
            </button>
          </div>
        </article>
        <article className="">
          <div className="about-bg rounded-md py-[6rem] px-[5rem] mb-5">
            <h1 className="mb-4 capitalize ">for instructions</h1>
            <button className=" bg-[#23BDEEE5] p-3 rounded-2xl">
              start a class today
            </button>
          </div>
        </article>
      </div>
      <div className="grid md:grid-cols-2 items-center px-7 mt-6 gap-4">
        <div>
          <h1 className="md:w-5/6 relative mx-auto text-center text-3xl font-semibold mb-4">
            <span className="text-[#2F327D]">
              Everything you can do in a physical classroom,{" "}
              <span className="text-[#F48C06]">you can do with skilline</span>
            </span>
            <img
              src={circle}
              className="absolute w-12 top-[-.75rem] left-[.3rem] z-[-1]"
              alt=""
            />
          </h1>
          <p className="text-center w-2/3 mx-auto tetx-[#696984]">
            Skilline’s school management software helps traditional and online
            schools manage scheduling, attendance, payments and virtual
            classrooms all in one secure cloud-based system.
          </p>
        </div>
        <div className="relative">
          <img src={teacher} alt="" />
          <img
            src={rect1}
            className="absolute w-20 z-[-1] bottom-[-1rem] right-[-1rem]"
            alt=""
          />
          <img
            src={rect2}
            className="absolute w-20 top-[-1rem] z-[-1] left-[-1rem]"
            alt=""
          />
          <img
            src={circle}
            className="w-5 absolute top-[50%] left-[3.5rem]"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default About;
