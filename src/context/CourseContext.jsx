import { createContext, useEffect, useState } from "react";
import { DummyCourse } from "../assets/dummyData";

export const CourseContext = createContext();

export default function CourseProvider({ children }) {
  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {
    const fetchAllCourse = () => {
      setAllCourses(DummyCourse);
    };
    fetchAllCourse();
  }, []);

  return (
    <CourseContext.Provider value={{ allCourses }}>
      {children}
    </CourseContext.Provider>
  );
}
