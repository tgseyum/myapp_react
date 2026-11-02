// Step 1: Create a Context
import { createContext } from "react";

export const CourseContext = createContext();

// Step 2: Create a Provider
function CourseProvider({ children }) {
    const courseName = "React Development";
    const instructorName = "Aron Smin"
    
    return (
        <CourseContext.Provider value={{courseName,instructorName}}>
            {children}
        </CourseContext.Provider>
    );
}

export default CourseProvider