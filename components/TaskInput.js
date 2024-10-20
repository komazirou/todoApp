import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import CategorySelection from "./CategorySelection";

const TaskInput = ({
  taskText,
  setTaskText,
  handleSaveTask,
  idEditing,
  taskCategory,
  setTaskCategory,
}) => {
  return (
    <View>
      <TextInput
        placeholder="タスクを入力"
        style={styles.input}
        onChangeText={setTaskText}
        value={taskText}
      ></TextInput>

      <CategorySelection
        taskCategory={taskCategory}
        setTaskCategory={setTaskCategory}
      />

      {/*追加ボタン*/}
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveTask}>
        <Text style={styles.saveButtonText}>{idEditing ? "編集" : "追加"}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default TaskInput;
