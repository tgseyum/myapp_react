import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Courses from "./pages/Courses"
import Navigation from "./pages/Navigation"
import CourseInformation from "./pages/CourseInformation"
import CourseDetial from "./pages/CourseDetail"
function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          {/* http://loclahost:1234/about */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />}>
              <Route path="courseinfo" element={<CourseInformation/>} />
              <Route path="coursedetail" element={<CourseDetial/>} />
          </Route>
        </Routes>


      </BrowserRouter>



    </>
  )
}

export default App



