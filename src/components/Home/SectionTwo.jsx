// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
import UserCard from "../UserCard";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { useState } from "react";
import useUser from "../../Hooks/useUser";
// import { array } from "prop-types";

const SectionTwo = () => {
  const [pageConut, setPageCount] = useState(1);
  const [perPage, setPerpage] = useState(50);
  const { isLoading, data } = useUser(pageConut, perPage);
  if (isLoading) {
    return <h1>lodding.....</h1>;
  }
  const userdata = data?.data;
  const countUser = data?.count;
  // const perPage = 50;
  const totalPage = Math.ceil(countUser / perPage);
  const pages = [...Array(totalPage).fill(0)];
  const handlecount = (countpage) => {
    setPageCount(countpage);
  };

  const handlaChange = (e) => {
    setPageCount(1);
    setPerpage(Number(e.target.value));
  };

  const handleSubstrack = () => {
    if (pageConut > 1) {
      setPageCount(pageConut - 1);
    }
  };
  const handlenext = () => {
    if (pageConut < pages.length) setPageCount(pageConut + 1);
  };

  console.log(pageConut, perPage);

  return (
    <div className="mt-20">
      <h1 className="text-5xl font-bold text-center ">
        user<span className="text-red-500">List</span>
      </h1>
      <div className="text-center mt-10 flex justify-center items-center ">
        <AiOutlineArrowLeft
          onClick={handleSubstrack}
          className="border text-4xl p-2 mr-4 rounded-full"
        ></AiOutlineArrowLeft>
        {pages?.map((items, index) => (
          <button
            onClick={() => handlecount(index + 1)}
            className={`${
              pageConut === index + 1
                ? "bg-yellow-400 border text-black font-bold  px-2 py-1 mr-1 "
                : " px-2 py-1 border mr-1 "
            }`}
            key={index + 1}
          >
            {index + 1}
          </button>
        ))}
        <AiOutlineArrowRight
          onClick={handlenext}
          className="border text-4xl p-2 ml-4 rounded-full"
        ></AiOutlineArrowRight>
        <div className="form-control w-[100px] ml-5">
          <select onChange={handlaChange} className="select select-bordered">
            <option disabled selected>
              Pick
            </option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={80}>80</option>
            <option value={100}>100</option>
            <option value={120}>120</option>
            <option value={150}>150</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-4 my-20  gap-5 overflow-hidden">
        {userdata?.map((user) => (
          <UserCard key={user._id} user={user}></UserCard>
        ))}
      </div>
    </div>
  );
};

export default SectionTwo;
