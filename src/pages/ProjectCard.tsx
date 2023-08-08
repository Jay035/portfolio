import React from "react";

export const Card = ({ item }: any) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="3000"
      data-aos-delay="200"
      className="my-4 w-full max-w-[500px]"
    >
      <a
        href={item.demoURL}
        target="_blank"
        className="relative mx-auto w-full"
      >
        {/* <!-- project screenshot --> */}
        <img
          className={`w-full object-cover ${item.imagePosition} mx-auto h-[15rem]`}
          src={item.image}
          alt="work screenshot"
        />
        {/* hover effect */}
        <div className="bg-blackk/75 absolute top-0 h-full w-full opacity-0 hover:opacity-100 flex justify-center items-center">
          <h1 className="font-semibold text-white text-2xl text-center">
            {item.title}
          </h1>
        </div>
      </a>
      <div className="mt-3">
        <p className="text-xl font-semibold ">{item.title} </p>
        <p className="text-base mt-2 truncate">{item.subTitle}</p>
        <ul className="flex items-start mt-2 gap-3">
          <span className="font-semibold">Technology: </span>
          <li className="text-base line-clamp-2">{item?.stack}</li>
        </ul>

        <div className="flex gap-6 mt-4">
          {/* <!-- link to github repo --> */}
          <a href={item.githubURL} target="_blank">
            <button className="font-semibold rounded-lg w-24 py-3 bg-light-grey/20 hover:bg-light-grey/50">
              Github
            </button>
          </a>
          {/* <!-- link to live site  --> */}
          <a href={item.demoURL} target="_blank">
            <button className="font-semibold rounded-lg w-24 py-3 bg-light-grey/20 hover:bg-light-grey/50">
              Demo
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
