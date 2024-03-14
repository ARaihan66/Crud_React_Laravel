import React, { useState } from "react";

const Create = () => {
  const [data, setData] = useState({
    title: "",
    description: "",
  });

  const { title, description } = data;

  const handleOnclick = (event) => {
    const { name, value } = event.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="my-20">
      <form className="flex flex-col justify-center">
        <label id="title" className="text-bold text-2xl ml-10">
          Title
        </label>
        <input
          type="text"
          id="title"
          placeholder="Add Title"
          onChange={handleOnclick}
          name="title"
          value={title}
          className="bg-gray-200 p-5 outline-none mx-10 my-5 rounded-xl"
        />
        <label id="description" className="text-bold text-2xl ml-10">
          Description
        </label>
        <input
          type="text"
          id="description"
          placeholder="Add Descriprtion"
          onChange={handleOnclick}
          name="description"
          value={description}
          className="bg-gray-200 p-5 outline-none mx-10 my-5 rounded-xl"
        />

        <button
          className="border-1 text-bold text-2xl bg-orange-500 p-3 mx-20 my-10 rounded-lg hover:bg-orange-300 hover:text-white"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
