import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Task.css";

function Task() {

  // states
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [editId, setEditId] = useState("");

  // validation states
  const [titleError, setTitleError] = useState("");
  const [descError, setDescError] = useState("");

  const URL = "http://localhost:5000/api/tasks";

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    const res = await axios.get(URL);
    setTasks(res.data);
  };

  // add or update task
  const submitTask = async (e) => {
    e.preventDefault();

    let valid = true;

    // title required
    if (title.trim() === "") {
      setTitleError("Title is required");
      valid = false;
    } else {
      setTitleError("");
    }

    // description required
    if (desc.trim() === "") {
      setDescError("Description is required");
      valid = false;
    } else {
      setDescError("");
    }

    if (!valid) return;

    // ADD
    if (editId === "") {
      const res = await axios.post(URL, {
        title: title,
        description: desc,
      });

      setTasks([...tasks, res.data]);
    }
    // UPDATE
    else {
      const res = await axios.put(`${URL}/${editId}`, {
        title: title,
        description: desc,
      });

      setTasks(
        tasks.map((task) =>
          task._id === editId ? res.data : task
        )
      );

      setEditId("");
    }

    setTitle("");
    setDesc("");
    setTitleError("");
    setDescError("");
  };

  // delete task
  const deleteTask = async (id) => {
    await axios.delete(`${URL}/${id}`);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  // edit task
  const editTask = (task) => {
    setEditId(task._id);
    setTitle(task.title);
    setDesc(task.description);
    setTitleError("");
    setDescError("");
  };

  // completed / pending
  const changeStatus = async (task) => {
    const newStatus =
      task.status === "completed" ? "pending" : "completed";

    const res = await axios.put(`${URL}/${task._id}`, {
      ...task,
      status: newStatus,
    });

    setTasks(
      tasks.map((t) =>
        t._id === task._id ? res.data : t
      )
    );
  };

  return (
    <div className="box">
      <h2>My Task Manager</h2>

      <form className="form" onSubmit={submitTask}>
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {titleError && <p className="error">{titleError}</p>}

        <input
          type="text"
          placeholder="Task description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        {descError && <p className="error">{descError}</p>}

        <button>
          {editId === "" ? "Add Task" : "Update Task"}
        </button>
      </form>

      {tasks.map((task) => (
        <div key={task._id} className={`card ${task.status}`}>
          <h4>{task.title}</h4>
          <p>{task.description}</p>
          <small>Status: {task.status}</small>

          <div className="btns">
            <button onClick={() => changeStatus(task)}>
              {task.status === "completed" ? "Undo" : "Done"}
            </button>

            <button onClick={() => editTask(task)}>Edit</button>
            <button onClick={() => deleteTask(task._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Task;
