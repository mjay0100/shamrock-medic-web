import group71 from "../assets/images/Group 71.png";
import group72 from "../assets/images/Group 72.png";
import group73 from "../assets/images/Group 73.png";
import users from "../assets/images/users 2.png";
import ellipse1 from "../assets/images/Ellipse 22.png";
import ellipse2 from "../assets/images/Ellipse 19.png";
import ellipse3 from "../assets/images/Ellipse 21.png";
import ellipse4 from "../assets/images/Ellipse 20.png";
import image from "../assets/images/image 12.png";
import group75 from "../assets/images/Group 75.png";
import group77 from "../assets/images/Group 77.png";
import group78 from "../assets/images/Group 78.png";
import group92 from "../assets/images/Group 92.png";
import group124 from "../assets/images/Group 124.png";
import group106 from "../assets/images/Group 106.png";
import image2 from "../assets/images/image 2.png";
import image3 from "../assets/images/image 3.png";
import image5 from "../assets/images/image 5.png";
import image6 from "../assets/images/image 6.png";
import smilingwoman from "../assets/images/smiling-woman.png";

const Features = () => {
  return (
    <section className="my-16">
      <div className="mb-10">
        <h1 className="text-2xl text-center font-bold mb-6">
          <span className="text-[#2F327D]">Our </span>
          <span className="text-[#F48C06]">Features</span>
        </h1>
        <p className="text-center text-[#696984]">
          This very extraordinary feature, can make learning activities more
          efficient
        </p>
      </div>
      <div className="md:flex justify-center px-8 gap-6 mb-14">
        <div className="relative">
          <img src={group71} className="" alt="" />
          <img
            src={ellipse1}
            className="absolute w-20 top-[-2rem] left-[2rem] z-[-1]"
            alt=""
          />
          <img
            src={ellipse2}
            className="absolute w-40 bottom-[1rem] right-[2rem] z-[-1]"
            alt=""
          />
          <img
            src={ellipse3}
            className="absolute w-5 top-[-2rem] left-[10rem]"
            alt=""
          />
          <img
            src={ellipse4}
            className="absolute w-5 bottom-[2rem] right-[15rem] "
            alt=""
          />
        </div>
        <div>
          <h1 className="text-2xl text-center font-bold mb-6">
            <span className="text-[#2F327D]">
              A <span className="text-[#F48C06]">user interface</span> designed
              for the classroom{" "}
            </span>
          </h1>
          <div className="grid grid-cols-1 gap-4">
            <div
              className="flex items-center gap-4 text-[#696984] mb-8
">
              <img
                src={group72}
                className="shadow-md shadow-slate-300 rounded-full p-2"
                alt=""
              />
              <p className="">
                Teachers don’t get lost in the grid view and have a dedicated
                Podium space.
              </p>
            </div>
            <div
              className="flex items-center gap-4 text-[#696984] mb-8
">
              <img
                src={group73}
                className="shadow-md shadow-slate-300 rounded-full p-2"
                alt=""
              />
              <p className="">
                TA’s and presenters can be moved to the front of the class.
              </p>
            </div>
            <div
              className="flex items-center gap-4 text-[#696984] mb-8
">
              <img
                src={users}
                className="shadow-md shadow-slate-300 rounded-full p-2"
                alt=""
              />
              <p className="">
                Teachers can easily see all students and class data at one time.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:grid grid-cols-2 items-center gap-8 mb-14">
        <div className="text-center w-[90%] mx-auto px-6 pb-5 ">
          <h1 className="text-2xl text-center font-bold mb-6">
            <span className="text-[#F48C06]">Tools </span>
            <span className="text-[#2F327D]">For Teachers And Learners</span>
          </h1>
          <p className="text-[#696984]">
            Class has a dynamic set of teaching tools built to be deployed and
            used during class. Teachers can handout assignments in real-time for
            students to complete and submit.
          </p>
        </div>
        <div className="relative">
          <img src={image} className="w-[40%] md:w-[50%] mx-auto" alt="" />
          <img
            src={group75}
            className="absolute top-[1rem] z-[-1] w-[80%] md:w-[90%] right-[3rem]"
            alt=""
          />
          <img
            src={group77}
            className="absolute top-[35%] left-0 w-28"
            alt=""
          />
          <img
            src={group78}
            className="absolute top-[50%] right-0 w-28 "
            alt=""
          />

          <img
            src={ellipse1}
            className="absolute w-5 top-0 right-[10rem] md:right-[5rem] "
            alt=""
          />
          <img
            src={ellipse4}
            className="absolute w-5 bottom-[10rem] left-[3rem] md:left-[1rem] "
            alt=""
          />
          <img
            src={ellipse2}
            className="absolute w-5 right-[6rem] md:right-[3rem] bottom-[3rem]"
            alt=""
          />
        </div>
      </div>
      {/* Assessments */}
      <div className="md:grid grid-cols-2 gap-4 items-center px-6 my-6">
        <div>
          <img src={group92} className="w-5/6 mx-auto" alt="" />
        </div>
        <div>
          <h1 className="text-2xl text-center font-bold mb-6">
            <span className="text-[#2F327D]">Assessments, </span> <br />
            <span className="text-[#F48C06]">Quizzes, </span>
            <span className="text-[#2F327D]">Tests </span>
          </h1>
          <p className="text-[#696984]">
            Easily launch live assignments, quizzes, and tests. Student results
            are automatically entered in the online gradebook.
          </p>
        </div>
      </div>
      {/* class managemnets*/}
      <div className="grid md:flex gap-8 items-center px-6 my-6">
        <div className="order-10 md:order-none">
          <h1 className="text-2xl text-center font-bold mb-6">
            <span className="text-[#F48C06]">Class Management </span> <br />
            <span className="text-[#2F327D]">Tools for Educators </span>
          </h1>
          <p className="text-[#696984]">
            Class provides tools to help run and manage the class such as Class
            Roster, Attendance, and more. With the Gradebook, teachers can
            review and grade tests and quizzes in real-time.
          </p>
        </div>
        <div className="">
          <img src={group124} className="w-5/6 mx-auto" alt="" />
        </div>
      </div>
      {/* one on one */}
      <>
        <div className="md:grid grid-cols-2 gap-4 items-center px-6 my-6">
          <div>
            <img src={group106} className="w-5/6 mx-auto" alt="" />
          </div>
          <div>
            <h1 className="text-2xl text-center font-bold mb-6">
              <span className="text-[#2F327D]">One-on-One </span> <br />
              <span className="text-[#F48C06]">Discussions </span>
            </h1>
            <p className="text-[#696984]">
              Teachers and teacher assistants can talk with students privately
              without leaving the Zoom environment.
            </p>
          </div>
        </div>
        <button className="p-2 text-[#FA8C06] border-2 border-solid border-[#FA8C06] rounded-2xl block mx-auto mb-7">
          See more features
        </button>
      </>
      {/* integration */}
      <div className="md:grid grid-cols-2 gap-4 items-center px-6 my-20">
        <div className="grid grid-cols-2 gap-4">
          <img src={image2} className="w-24 mx-auto" alt="" />
          <img src={image3} className="w-24 mx-auto" alt="" />
          <img src={image5} className="w-24 mx-auto" alt="" />
          <img src={image6} className="w-24 mx-auto" alt="" />
        </div>
        <div>
          <div className="flex gap-4 justify-center items-center my-7">
            <div className="h-[1px] w-[50px] bg-[#525596]"></div>
            <p className="text-[#525596] ">INTEGRATIONS</p>
          </div>
          <h1 className="text-2xl text-center font-bold mb-6">
            <span className="text-[#2F327D]">200+ educational tools and </span>{" "}
            <br />
            <span className="text-[#2F327D]">platform </span>
            <span className="text-[#F48C06]">integrations </span>
          </h1>
          <p className="text-[#696984]">
            Schoology has every tool your classroom needs and comes
            pre-integrated with more than 200+ tools, student information
            systems (SIS), and education platforms.
          </p>
        </div>
      </div>
      {/* testimonial */}
      <div className="grid md:flex gap-8 items-center px-6 my-6">
        <div className="order-10 md:order-none">
          <div className="flex gap-4 justify-center items-center my-7">
            <div className="h-[1px] w-[50px] bg-[#525596]"></div>
            <p className="text-[#525596] ">TESTIMONIAL</p>
          </div>
          <div className="px-5 py-2">
            <h1 className="text-4xl text-center font-bold mb-6 text-[#2F327D]">
              What They Say
            </h1>
            <p className="text-[#696984] mb-4 text-center">
              Skilline has got more than 100k positive ratings from our users
              around the world.
            </p>
            <p className="text-[#696984] mb-4 text-center">
              Some of the students and teachers were greatly helped by the
              Skilline.
            </p>
            <p className="text-[#696984] mb-4 text-center">
              Are you too? Please give your assessment
            </p>
            <button className="p-2 text-[#FA8C06] border-2 border-solid border-[#FA8C06] rounded-2xl block mx-auto mb-7">
              Write your assessment
            </button>
          </div>
        </div>
        <div className="">
          <img src={smilingwoman} className="w-5/6 mx-auto rounded-md" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Features;
