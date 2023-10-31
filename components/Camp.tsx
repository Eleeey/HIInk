import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
  bgImage: string;
  title: string;
  subTitle: string;
  peopleJoined: string;
}

const CampS = ({ bgImage, title, subTitle, peopleJoined }: CampProps) => {
  return (
    <div
      className={`h-full w-full min-w-[900px] ${bgImage} cursor-pointer bg-contain bg-no-repeat rounded-lg hover:border-2 hover:border-black`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-400 p-4">
            <Image src="/folded-map.svg" alt="map" width={24} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subTitle}</p>
          </div>
        </div>
        <div className="flexCenter gap-6">
          <span className="flex py-1 -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                className="hover:-mt-1"
                src={url}
                key={url}
                alt={""}
                width={50}
                height={50}
              />
            ))}
          </span>
          <p className="bold-16 -ml-3 text-white hover:bold-18 ">
            {peopleJoined}
          </p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className=" xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampS
          bgImage={"bg-1"}
          title={"Putuk Truno Camp"}
          subTitle={"Prigen, Pasuran"}
          peopleJoined={"50k+ People Joined"}
        />
        <CampS
          bgImage={"bg-2"}
          title={"Mountain view"}
          subTitle={"Somewhere, In The Wild"}
          peopleJoined={"35k People Joined"}
        />
      </div>
      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-400 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-lg">
          <h2 className="regular-18 md:regular-24 xl:regular-32 capitalize text-white">
            <strong>Lorem ipsum </strong>dolor sit amet consectetur?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            explicabo ducimus minus accusamus ut, illo ipsam necessitatibus
            placeat quam architecto.
          </p>
          <Image
            src={"/quote.svg"}
            alt={"camp-1"}
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;
