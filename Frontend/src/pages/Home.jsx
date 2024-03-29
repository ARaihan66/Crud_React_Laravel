import React from "react";

const Home = () => {
  return (
    <div className="mx-10 my-5 p-10 bg-gray-300 rounded-xl">
      <h3 className="uppercase">title</h3>
      <p>Description</p>
      <div className="flex justify-between my-5">
        <button className="uppercase bg-orange-500 py-3 px-5 rounded-lg font-bold hover:text-white hover:bg-orange-400">
          Edit & Update
        </button>
        <button className="uppercase bg-orange-500 py-3 px-5 rounded-lg font-bold hover:text-white hover:bg-orange-400">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Home;
