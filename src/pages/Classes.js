import React, { useState } from 'react';
import { FaCircleArrowRight, FaCircleArrowDown } from 'react-icons/fa6';

function Faq() {
  const data = [
    {
      id: 1,
      subject: 'Shariah',
      courses: [
        {
          id: 1,
          course: "Aqeedah",
          link: "https://drive.google.com/drive/folders/1tITLJ1ul9lA40OHSUoJ9qAl7_-lmj119",
        },
        {
          id: 2,
          course: "Fiqh",
          link: "https://drive.google.com/drive/folders/1tITLJ1ul9lA40OHSUoJ9qAl7_-lmj119"
        },
        {
          id: 3,
          course: "Tajweed",
          link: "https://drive.google.com/drive/folders/1tITLJ1ul9lA40OHSUoJ9qAl7_-lmj119",
        },
        {
          id: 4,
          course: "Seeroh",
          link: "https://drive.google.com/drive/folders/1tITLJ1ul9lA40OHSUoJ9qAl7_-lmj119"
        },
        {
          id: 5,
          course: " Tafseer",
          link: "https://drive.google.com/drive/folders/1tITLJ1ul9lA40OHSUoJ9qAl7_-lmj119"
        }
      ],
    },
    {
      id: 2,
      subject: 'Lugho',
      courses: [
        {
          id: 1,
          course: "Arabic",
          link: "https://drive.google.com/drive/folders/1tITLJ1ul9lA40OHSUoJ9qAl7_-lmj119"
        },
        {
          id: 2,
          course: "English",
          link: "https://drive.google.com/drive/folders/1tITLJ1ul9lA40OHSUoJ9qAl7_-lmj119"
        }
      ],
    }
  ];

  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <section className="p-8">
      <h2 className="text-center font-extrabold">Intermediate Level One</h2>
      <ul className="m-8 bg-[#FAFDFA]">
        {data.map((item, id) => (
          <li key={item.id} className="border-b-2 px-4 mb-2 ">
            <div className="flex items-center justify-between cursor-pointer" onClick={() => toggle(id)}>
              <p className="font-semibold">{item.subject}</p>
              <span className="text-[#007300]">
                {selected === id ? <FaCircleArrowDown /> : <FaCircleArrowRight />}
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

export default Faq;
