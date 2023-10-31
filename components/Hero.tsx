import Image from "next/image";
import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className=" max-container paddding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-col">
      <div className="hero-map absolute right-0 top-0 h-screen w-screen bg-cover bg-center md:-right-28 xl:-top-60 " />
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src={"/camp.svg"}
          alt={"camp"}
          height={50}
          width={50}
          className=" camp absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className=" mt-10 bold-52 lg:bold-58">Lorem, ipsum dolor.</h1>
        <p className="regular-16 mt-6 text-gray-30 max-w-[520px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At optio
          iste quos aliquid magni veniam quisquam tenetur laborum eaque sint,
          explicabo reiciendis suscipit nisi, minus numquam. Facilis mollitia
          quisquam harum.
        </p>
        <div className="  my-2 flex flex-wrap gap-5  ">
          <div className="flex items-center gap-2 ">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src={"/star.svg"}
                  key={index}
                  alt={"star"}
                  height={24}
                  width={24}
                />
              ))}
          </div>

          <p className=" bold-16 lg:bold-20 flex items-center  text-blue-900  ">
            159k{" "}
            <span className="regular-16 lg:regular-20 ml-2 underline ">
              Excellent Reviews
            </span>
          </p>
        </div>
      </div>
      <div className="z-50">
        <div className="flex gap-10 z-50 w-full flex-col sm:flex-row">
          <Button type={"button"} title={"Download App"} color={"btn_green"} />
          <Button
            type={"button"}
            title={"How We Work"}
            icon="/play.svg"
            color="btn_white_text"
          />
        </div>

        <div className=" destination hidden relative xl:flex flex-1 items-start">
          <div className="relative z-20 w-[268px] flex-col gap-8 rounded-3xl bg-gray-500 px-7 py-8">
            <div className="flex flex-col">
              <div className="flexBetween">
                <p className="regular-16 text-white">Location</p>
                <Image
                  src={"/close.svg"}
                  alt={"close"}
                  height={24}
                  width={24}
                />
              </div>
              <p className="bold-20 text-white">Aguas Calientes</p>
            </div>
            <div className="flexBetween">
              <div className="flex flex-col">
                <p className="regular-16 block text-gray-20">Distance</p>
                <p className="bold-20 text-white">173.28 mi</p>
              </div>
              <div className="flex flex-col">
                <p className="regular-16 block text-gray-20">Elevation</p>
                <p className="bold-20 text-white">2.040 km</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
