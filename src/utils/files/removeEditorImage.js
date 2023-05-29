import FileUtil from "./FileUtil.js";

export const removeEditorImage = (content = "") => {
  const files = FileUtil.getFilePathsFromStringHTML(content);
  if (files?.length > 0) {
    //Remove files
    return FileUtil.remove(files);
  } else {
    return [];
  }
};
