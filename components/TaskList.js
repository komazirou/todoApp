import React from "react";
import { FlatList } from "react-native";
import TaskItem from "./TaskItem";


const TaskList = ({ tasks, handleTask, handleEdit, handleDelete }) => {
  const renderTask = ({ item }) => (
    <TaskItem
      item={item}
      handleTask={handleTask}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );

  return (
    <FlatList
      data={tasks}
      renderItem={renderTask}
      keyExtractor={(item) => item.id}
    ></FlatList>
  );
};

export default TaskList;
