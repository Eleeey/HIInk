import { FEATURES } from "@/constants";
import Image from "next/image";
import React from "react";


type FeatureItem = {
  title: string;
  icon: string;
  description: string;
}

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col  items-center">
      <div className="rounded-full p-4 lg:p-7 bg-green-400">
        <Image src={icon} alt="map" width={28} height={28} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  );
}
const Features = () => {
  return (
    <section className="flex flex-col flexCenter overflow-hidden bg-feature bg bg-center bg-no-repeat py-24">
      <div className="max-container flex padding-container relative w-full justify-end">
        <div className="lg:flex  hidden lg:min-h-[900px]">
          <Image
            src={"/phone.png"}
            alt={"phone"}
            height={440}
            width={440}
            className="feature-phone "
          />
        </div>
        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <Image
              src={"/camp.svg"}
              alt={"camp"}
              height={50}
              width={50}
              className="camp"
            />
            <h2 className="bold-40 mt-6 lg:bold-64">Our Features</h2>
          </div>
          <ul className="mt-10 grid gap-10 relative inset-y- inset-x-0 m-auto md:grid-col-2 lg:mg-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
