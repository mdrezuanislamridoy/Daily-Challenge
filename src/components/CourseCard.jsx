import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function CourseCard({ course }) {
  let courseDesc = course.description.split();
  let shortDesc = courseDesc.slice(0, 8);

  return (
    <div className="w-[30%] rounded-2xl bg-cyan-100 hover:outline-4 hover:outline-cyan-300 overflow-hidden">
      <img src={course.image} alt={course.title} className="w-full" />
      <br />
      <div className="px-2 ">
        <h3 className="text-2xl">{course.title}</h3>
        <p className="text-gray-600">{shortDesc}</p>
        <p>Instructor : {course.instructor}</p>
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <FontAwesomeIcon
              key={i}
              icon={faStar}
              className={
                i < Math.round(course.review.rating)
                  ? "text-yellow-400"
                  : "text-gray-300"
              }
            />
          ))}
          <p>
            {course.review.count}
            {course.review.count > 1 ? " Reviews" : " Review"}
          </p>
        </div>
      </div>
    </div>
  );
}
