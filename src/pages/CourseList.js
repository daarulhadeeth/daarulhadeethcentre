import React from 'react';

const CourseList = ({ courses }) => {
  // Split the courses array into two halves
  const splitIndex = Math.ceil(courses.length / 2);
  const firstHalf = courses.slice(0, splitIndex);
  const secondHalf = courses.slice(splitIndex);

  return (
    <div className="max-w-md mx-auto mt-8 flex flex-wrap justify-between">
      {/* First Column */}
      <div style={{ flex: '0 0 45%' }}>
        <h2 className="text-xl font-bold mb-4">Course List - Column 1</h2>
        <ul>
          {firstHalf.map((course, index) => (
            <li key={index} className="bg-white shadow-md rounded-md p-4 mb-4">
              <span className="font-semibold">
                {index + 1}
                .
                {' '}
                {course}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Second Column */}
      <div style={{ flex: '0 0 45%' }}>
        <h2 className="text-xl font-bold mb-4">Course List - Column 2</h2>
        <ul>
          {secondHalf.map((course, index) => (
            <li key={index} className="bg-white shadow-md rounded-md p-4 mb-4">
              <span className="font-semibold">
                {index + splitIndex + 1}
                .
                {' '}
                {course}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseList;
