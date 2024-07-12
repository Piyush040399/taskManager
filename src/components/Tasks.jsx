/* eslint-disable react/prop-types */
function Tasks({ data, handleDelete }) {
  return (
    <div className="w-2/4 border border-black  mx-auto mt-10 p-3">
      {data.length > 0 ? (
        data?.map((item, i) => (
          <div className="border w-2/4 border-gray-300 p-4 mb-2 bg-slate-100 rounded " key={i}>
            <li className="list-none"> Title : {item.title}</li>
            <li className="list-none" key={i}>
              {" "}
              Description : {item.description}
            </li>
            <li className="list-none" key={i}>
              {" "}
              Deadline : {item.deadline}
            </li>
            <li className="list-none" key={i}>
              {" "}
              Priority : {item.priority}
            </li>
            <button
              className="bg-red-600 text-white text-sm p-1 rounded-md mt-2"
              onClick={() => handleDelete(i)}
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p>...No data to Show</p>
      )}
    </div>
  );
}

export default Tasks;
