import React from "react";

const Footer = () => {
  return (
    <section className="bg-[#252641] mt-4  text-white py-14">
      <div className="flex gap-6 items-center justify-center mb-8">
        <h1 className="text-2xl font-semibold">Skilline</h1>
        <div className="h-[2rem] w-[1px] bg-white/30"></div>
        <h1 className="text-lg ">
          Virtual Class <br />
          for Zoom
        </h1>
      </div>
      <p className="text-xl text-[#B2B3CF] text-center mb-4">
        Subscribe to get our Newsletter
      </p>
      <div className="flex justify-center gap-4 mb-16">
        <input
          type="text"
          className=" rounded-3xl bg-transparent border-2 border-solid border-white/50 py-2 px-7"
          placeholder="Your Email"
        />
        <button className="rounded-2xl py-3 px-5 bg-blue-500">Subscribe</button>
      </div>
      <div className="flex justify-center my-8 gap-4 text-[#B2B3CF] items-center">
        <p>Careers</p>
        <div className="h-[1.5rem] w-[1px] bg-white/50"></div>
        <p>Privacy Policy</p>
        <div className="h-[1.5rem] w-[1px] bg-white/50"></div>
        <p>Terms & Conditions</p>
      </div>
      <p className="text-center text-[#B2B3CF]">
        &copy; 2021 Class Technologies Inc.
      </p>
    </section>
  );
};

export default Footer;
