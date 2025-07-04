import React, { useContext, useRef, useState } from "react";
import { CourseContext } from "../context/CourseContext";
import CourseCard from "../components/CourseCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function AllCourses() {
  const { allCourses } = useContext(CourseContext);
  const [searchInput, setSearchInput] = useState("");
  const params = useNavigate();

  const searchBox = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h3 className="font-bold text-3xl">All Courses</h3>

      <div className=" flex border w-60 rounded-full">
        <input
          type="text"
          name="search"
          value={searchInput}
          ref={searchBox}
          className="w-full px-2 outline-none "
        />
        <button className="" onClick={handleSearch}>
          <FontAwesomeIcon icon={faSearch} className="px-2 " />
        </button>
      </div>

      <div className="flex my-4">
        <div className="flex justify-around gap-2">
          {allCourses
            ? allCourses.map((course, index) => (
                <CourseCard key={index} course={course} />
              ))
            : "No Course Found"}
        </div>
      </div>
    </div>
  );
}
