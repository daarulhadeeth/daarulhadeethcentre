import React, { useState } from 'react';
import {
  FaPlus, FaMinus, FaExternalLinkAlt,
} from 'react-icons/fa';

function Togglegg({ data }) {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };


  return (
    <section className="p-6 bg-gray-100 rounded-md shadow-lg">
      {}
      <h2 className="text-center font-extrabold text-2xl mb-6">
        Section
      </h2>
      <ul className="bg-white rounded-md shadow-md p-4">
        {data.map((item, id) => (
          <li key={item.id} className="border-b-2 px-4 py-2 mb-4 last:border-b-0">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggle(id)}
            >
              <p className="font-semibold text-lg">{item.subject}</p>
              <span className="text-green-700">
                {selected === id ? <FaMinus /> : <FaPlus />}
              </span>
            </div>
            <div className="p-2">
              {selected === id && (
                <ul>
                  {item.courses.map((course) => (
                    <li
                      key={course.id}
                      className="flex items-center justify-between p-2 }"
                    >
                      <div className="flex items-center">
                        <a
                          href={course.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-green-700 flex items-center"
                        >
                          <FaExternalLinkAlt className="mr-2" />
                          {course.course}
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Togglegg;
