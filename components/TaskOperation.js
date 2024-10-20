import { useState } from "react";

const TaskOperation = ({ tasks, setTasks }) => {
  const [taskCategory, setTaskCategory] = useState("");
  const [taskText, setTaskText] = useState("");
  const [idEditing, setIdEditing] = useState(null);

  //追加、編集ボタン
  const handleSaveTask = () => {
    if (!taskText.trim()) return;
    if (idEditing) {
      setTasks(
        tasks.map((task) =>
          task.id === idEditing
            ? { ...task, text: taskText, category: taskCategory }
            : task
        )
      );
      setIdEditing(null);
    } else {
      const newTask = {
        id: Date.now().toString(),
        text: taskText,
        category: taskCategory,
        isCompleted: false,
      };
      setTasks([...tasks, newTask]);
    }

    setTaskCategory("");
    setTaskText("");
  };

  //ボタン
  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const handleEdit = (item) => {
    setTaskText(item.text);
    setTaskCategory(item.category);
    setIdEditing(item.id);
  };

  const handleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  return {
    taskText,
    setTaskText,
    taskCategory,
    setTaskCategory,
    idEditing,
    handleSaveTask,
    handleDelete,
    handleEdit,
    handleTask,
  };
};

export default TaskOperation;
