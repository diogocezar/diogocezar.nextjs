import fs from "fs";
import matter from "gray-matter";

const getFilesFromFolder = (folder) => {
  return fs.readdirSync(`${process.cwd()}/${folder}`);
};

const getFileContent = (file) => {
  const markdownData = fs.readFileSync(`${process.cwd()}/${file}`).toString();
  const { content, data, excerpt } = matter(markdownData, { excerpt: true });
  return {
    content,
    data,
    excerpt,
  };
};

const getFolderContents = (folder) => {
  const files = getFilesFromFolder(folder);
  const folderContents = files.map((fileName) => {
    return getFileContent(`${folder}/${fileName}`);
  });
  return folderContents;
};

export { getFileContent, getFolderContents };
