import { useState, useEffect } from "react";
import axios from "axios";

function Teste() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.todoist.com/rest/v2/tasks",
          {
            headers: {
              Authorization: "Bearer da0fea869f18573e2d7226a73378d7db6668970b",
            },
          }
        );
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ul className="bg-white shadow overflow-hidden sm:rounded-md max-w-sm mx-auto mt-16">
      {tasks.map((task, index) => (
        <li
          key={task.id}
          className={`border-t ${index > 0 ? "border-gray-200" : ""}`}
        >
          <div className="px-4 py-5 sm:px-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {task.content}
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                {task.description}
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-500">
                Status:
                <span
                  className={`text-${
                    task.is_completed ? "green" : "yellow"
                  }-600`}
                >
                  {task.is_completed ? "Completed" : "Pending"}
                </span>
              </p>
              <a
                href={task.url}
                target="_blank"
                rel="asdr"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Edit
              </a>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Teste;
