import { useState } from "react";
import Tasks from "./Tasks";

function Form() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [priority, setPriority] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setData((prev) => [
      ...prev,
      {
        title: title,
        description: description,
        deadline: deadline,
        priority: priority,
      },
    ]);
  };

  const handleDelete = (id) => {
    setData(data.filter((item, i) => i !== id));
  };

  return (
    <>
      <form
        className=" mt-12  mx-auto w-2/4 p-10 rounded-lg border border-gray-300 "
        onSubmit={handleSubmit}
      >
        <div className="mb-3 flex flex-col">
          <label> Title </label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-slate-200 border-none p-1 rounded-sm "
          />
        </div>
        <div className="mb-3 flex flex-col">
          <label> Description </label>
          <input
            type="text"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="bg-slate-200 border-none p-1 rounded-sm "
          />
        </div>
        <div className="mb-3 flex flex-col">
          <label> Deadline </label>
          <input
            type="text"
            required
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            className="bg-slate-200 border-none p-1 rounded-sm "
          />
        </div>
        <div className="mb-3 flex flex-col">
          <label> Priority </label>
          <input
            type="text"
            required
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="bg-slate-200 border-none p-1 rounded-sm "
          />
        </div>
        <button
          type="submit "
          className="bg-blue-600 text-white p-2 rounded-md "
        >
          Submit
        </button>
      </form>
      <Tasks data={data} handleDelete={handleDelete} />
    </>
  );
}

export default Form;
