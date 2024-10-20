import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Icon } from "react-native-elements";

const TaskItem = ({ item, handleTask, handleEdit, handleDelete }) => {
  return (
    <View>
      {/*categoty*/}
      <View style={styles.categoryContainer}>
        <Icon name="list" color="#ffa500" />
        <Text style={styles.category}>{item.category}</Text>
      </View>

      {/*ボタン*/}
      <View style={styles.task}>
        {/*完了済み線*/}

        <Text
          style={[
            styles.taskText,
            item.isCompleted ? styles.completeTaskText : null,
          ]}
        >
          {item.text}
        </Text>

        {/*完了ボタン*/}

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => handleTask(item.id)}
            style={styles.buttons}
          >
            <Icon name="check" color="#4caf50"></Icon>
          </TouchableOpacity>

          {/*編集ボタン*/}

          <TouchableOpacity
            onPress={() => handleEdit(item)}
            style={styles.buttons}
          >
            <Icon name="edit" color="#4caf50"></Icon>
          </TouchableOpacity>

          {/*削除ボタン*/}

          <TouchableOpacity
            onPress={() => handleDelete(item.id)}
            style={styles.buttons}
          >
            <Icon name="delete" color="#f44336"></Icon>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TaskItem;
