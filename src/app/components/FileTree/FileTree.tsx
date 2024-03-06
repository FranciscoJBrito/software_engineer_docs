import data from "../../../data/file-structure.json";
import Directory from "./Directory";

const FileTree = () => {
  return (
    <div>
      {data.map((directory) => {
        return (
          <div key={directory.id}>
            <Directory name={directory.name} files={directory.files}/>
          </div>
        );
      })}
    </div>
  );
};

export default FileTree;
