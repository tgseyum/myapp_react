// src/CourseCard.jsx
import style from "./CourseCard.module.css"
import './CourseCard.css'; // Import the CSS file for this component
//.container  , class="container" = className
function CourseCard() {
    return (
        <article className={style.card}>
            <span className="course-level badge bg-success mb-3" >Intermediate</span>
            <h2 className="text-primary">React Development</h2>
            <p className="text-secondary">Learn to build reusable user interfaces with React components.</p>
            <button className="course-button" type="button">
                View Course
            </button>
        </article>
    );
}

export default CourseCard;