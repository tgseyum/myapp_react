import CoursePage from "./lesson2_11/CoursePage";
import CourseProvider from "./lesson2_11/CourseContext";
// Step 5: Wrap the components with the Provider

function App() {
    return (
        <CourseProvider>
            <CoursePage />
        </CourseProvider>
    );
}

export default App;
