import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function CourseList() {
    const courses = useSelector(state => state.data);
    const dispatch = useDispatch();

    function addCourse() {
        dispatch({ type: 'ADD_COURSE', title: 'Redux' })
    }

    return (
        <>
            <button type="button" onClick={addCourse}>Add Course</button>
            <ul>
                {courses.map(course => <li key={course}>{course}</li>)}
            </ul>
        </>
    );
}
