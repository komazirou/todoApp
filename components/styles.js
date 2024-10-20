import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5", // ライトグレーの背景色
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    marginTop: 50,
    color: "#333", // タイトルも落ち着いた色に
  },
  counter: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
    alignItems: "center",
    color: "#333",
  },
  taskCount: {
    fontSize: 18,
    color: "#666", // 文字色も少し控えめなグレーに
  },

  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },

  selectCategory: {
    backgroundColor: "#ff7043", // 選択された時のオレンジ背景
    padding: 10,
    borderRadius: 5,
    overflow: "hidden",
    color: "#fff",
    marginBottom: 10,
    borderColor: "#ff6f61", // 選択時のボーダーカラー
    borderWidth: 2,
    elevation: 3,
  },

  filterButton: {
    backgroundColor: "#ff8a80", // 通常時のピンク背景
    padding: 10,
    borderRadius: 5,
    overflow: "hidden",
    color: "#fff",
    marginBottom: 10,
  },

  input: {
    borderWidth: 2,
    borderColor: "#cccccc", // 優しいグレーのボーダー
    padding: 10,
    marginBottom: 10,
    borderRadius: 6,
    backgroundColor: "#fff", // 入力フィールドは白
  },
  saveButton: {
    backgroundColor: "#66bb6a", // 保存ボタンのグリーン
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    elevation: 3,
  },
  saveButtonText: {
    color: "#fff",
    textAlign: "center",
  },
  task: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#eeeeee", // タスクの背景もライトグレー
    borderRadius: 5,
  },
  taskText: {
    maxWidth: "80%",
    flex: 1,
    flexWrap: "wrap",
    color: "#333", // タスクテキストの色も落ち着いたダークグレー
  },
  buttonContainer: {
    flexDirection: "row",
  },
  buttons: {
    padding: 5,
  },
  completeTaskText: {
    textDecorationLine: "line-through",
    color: "#a9a9a9", // 完了したタスクの色は薄めのグレー
  },
  categoryContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
