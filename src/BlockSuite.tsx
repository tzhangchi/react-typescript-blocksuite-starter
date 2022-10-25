import "@blocksuite/blocks";
import "@blocksuite/editor";
import "@blocksuite/blocks/style";
import "./index.css";

console.log("load BlockSuite");
function BlockSuite() {
  //@ts-ignore
  return <editor-container></editor-container>;
}

export { BlockSuite };
