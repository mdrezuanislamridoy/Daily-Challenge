import React, { useContext } from "react";
import { CourseContext } from "../context/CourseContext";
import CourseCard from "./CourseCard";
import { Link } from "react-router-dom";

export default function MyCourses() {
  const { allCourses } = useContext(CourseContext);
  return (
    <div>
      <h3 className="font-semibold text-3xl my-2">All Courses here </h3>

      <div className="flex ">
        <div className="flex justify-around gap-2">
          {allCourses
            ? allCourses
                .slice(0, 6)
                .map((course, index) => (
                  <CourseCard key={index} course={course} />
                ))
            : "No Course Found"}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Link
          to={"/allCourses"}
          className="my-2 inline-block py-2 px-8 bg-blue-700 text-white rounded-full"
        >
          Show All Course
        </Link>
      </div>
    </div>
  );
}
