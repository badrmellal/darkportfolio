import React from "react";
import styled from "styled-components";
import { data } from "../data/data";
import { RxExternalLink } from "react-icons/rx";
import { Link } from "react-router-dom";

const WorkCard = () => {
  const reversedData = [...data].reverse();

  return (
    <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center gap-4">
      {reversedData.map((data) => {
        return (
          <div
            data-aos="zoom-in"
            key={data.id}
            className="flex flex-col items-center gap-4 w-full sm:w-[45%] lg:w-[30%]"
          >
            <POPUP className="img-content relative w-full">
              <div className="h-[280px] w-full hover:scale-125 transition duration-500 cursor-pointer shadow-xl rounded-md overflow-hidden sm:h-[260px]">
                <img
                  src={data.img}
                  alt={data.title}
                  className="object-cover w-full h-full hover:scale-125 transition duration-500 cursor-pointer"
                />
              </div>

              <div className="popup w-full h-[280px] shadow-xl rounded-md overflow-hidden sm:h-[260px] p-4">
                <p className="text-gray-900 text-base leading-[1.4] text-justify w-full">
                  {data.desc}
                </p>
                <div className="flex items-center justify-center gap-4 mt-3">
                  <Link
                    to={data.link}
                    target="_blank"
                    className="rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
                  >
                    <RxExternalLink className="text-black bg-white rounded-full border w-[35px] h-[35px] p-2" />
                    <p className="text-black">Check out</p>
                  </Link>
                </div>
              </div>
            </POPUP>
            <p className="text-gray-500 text-xl font-medium sm:text-lg text-center">
              {data.title}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default WorkCard;

const POPUP = styled.div`
  position: relative;
  img {
    &:hover {
      transform: scaleX(2);
    }
  }
  
  .popup {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    margin: auto;
    transition: 0.5s ease;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  &:hover .popup {
    opacity: 1;
  }
`;
