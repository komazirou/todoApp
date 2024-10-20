import { useState } from "react";
import { View } from "react-native";
import { styles } from "./components/styles";
import CategoryFilterButton from "./components/CategoryFilterButton";
import Header from "./components/Header";

import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import TaskOperation from "./components/TaskOperation";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const [selectCategory, setSelectCategory] = useState("");

  const {
    taskText,
    setTaskText,
    taskCategory,
    setTaskCategory,
    idEditing,
    handleSaveTask,
    handleDelete,
    handleEdit,
    handleTask,
  } = TaskOperation({ tasks, setTasks });

  const filterTasks = selectCategory
    ? tasks.filter((task) => task.category === selectCategory)
    : tasks;

  return (
    /*Header*/
    <View style={styles.container}>
      <Header taskCount={tasks.length} />

      {/*カテゴリー表示*/}
      <CategoryFilterButton
        selectCategory={selectCategory}
        setSelectCategory={setSelectCategory}
      />

      {/*入力欄、カテゴリー選択、追加ボタン*/}
      <TaskInput
        taskText={taskText}
        setTaskText={setTaskText}
        handleSaveTask={handleSaveTask}
        idEditing={idEditing}
        taskCategory={taskCategory}
        setTaskCategory={setTaskCategory}
      />

      {/*タスクリスト表示*/}
      <TaskList
        tasks={filterTasks}
        handleTask={handleTask}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </View>
  );
}
