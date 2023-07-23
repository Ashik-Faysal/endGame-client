import React, { useEffect, useState } from "react";

const College = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    // Fetch college data from the server
    fetch("https://end-game-server-ashik-faysal.vercel.app/colleges")
      .then((response) => response.json())
      .then((data) => {
        setColleges(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="my-4 text-center">
      <h1 className="text-6xl my-8 text-stone-500 text-center font-semibold">
        College Data
      </h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        {colleges.map((college) => (
          <div key={college._id} className="p-4 rounded-lg bg-blue-100 text-black shadow-2xl">
            <img
              src={college.image}
              alt={college.college_name}
              className="w-full h-32 object-cover rounded-t-md"
            />
            <h2 className="text-xl font-semibold mt-2">
              {college.college_name}
            </h2>
            <p className="mt-2">{college.description}</p>
            <p className="mt-2">
              Number of Students: {college.number_of_students}
            </p>
            <button className="btn btn-outline btn-accent">Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default College;
