import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

const CategorySelection = ({ taskCategory, setTaskCategory }) => {
  const categories = ["仕事", "プライベート", "勉強", "趣味"];

  return (
    <View>
      {categories.map((category) => (
        <TouchableOpacity
          key={category}
          onPress={() => setTaskCategory(category)}
        >
          <Text
            style={
              taskCategory === category
                ? styles.selectCategory
                : styles.filterButton
            }
          >
            {category}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CategorySelection;
