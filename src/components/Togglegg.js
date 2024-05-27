import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa6';

function Togglegg({ data }) {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <section className="p-3">
      <h2 className="text-center font-extrabold">Chapter</h2>
      <ul className="bg-[#FAFDFA]">
        {data.map((item, id) => (
          <li key={item.id} className="border-b-2 px-4 mb-2 ">
            <div className="flex items-center justify-between cursor-pointer" onClick={() => toggle(id)}>
              <p className="font-semibold">{item.subject}</p>
              <span className="text-[#007300]">
                {selected === id ? <FaMinus /> : <FaPlus />}
              </span>
              {' '}
            </div>
            <div className="p-2">
              {selected === id && (
                <ul>
                  {item.courses.map((course) => (
                    <li key={course.id} className="p-2">
                      <a href={course.link} target="_blank" rel="noreferrer" className="text-[#007300]">
                        {course.course}
                      </a>
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
