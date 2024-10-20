import { Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";

const CategoryFilterButton = () => {
  const [selectCategory, setSelectCategory] = useState("");

  return (
    <View style={styles.filterContainer}>
      <TouchableOpacity
        onPress={() => {
          setSelectCategory("");
        }}
      >
        <Text
          style={
            selectCategory === "" ? styles.selectCategory : styles.filterButton
          }
        >
          すべて
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setSelectCategory("仕事");
        }}
      >
        <Text
          style={
            selectCategory === "仕事"
              ? styles.selectCategory
              : styles.filterButton
          }
        >
          仕事
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setSelectCategory("プライベート");
        }}
      >
        <Text
          style={
            selectCategory === "プライベート"
              ? styles.selectCategory
              : styles.filterButton
          }
        >
          プライベート
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setSelectCategory("勉強");
        }}
      >
        <Text
          style={
            selectCategory === "勉強"
              ? styles.selectCategory
              : styles.filterButton
          }
        >
          勉強
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setSelectCategory("趣味");
        }}
      >
        <Text
          style={
            selectCategory === "趣味"
              ? styles.selectCategory
              : styles.filterButton
          }
        >
          趣味
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryFilterButton;
