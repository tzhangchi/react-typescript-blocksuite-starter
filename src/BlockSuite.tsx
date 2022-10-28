import "@blocksuite/blocks";
import "@blocksuite/editor";
import "@blocksuite/blocks/style";
import "./index.css";

import type { EditorContainer } from "@blocksuite/editor";
import { createEditor } from "@blocksuite/editor";
import { forwardRef, Suspense, useEffect, useRef } from "react";

// eslint-disable-next-line react/display-name
const BlockSuiteEditor = forwardRef<EditorContainer>(({}, ref) => {
  const containerElement = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!containerElement.current) {
      return;
    }
    const editor = createEditor();
    containerElement.current.appendChild(editor);
    if (ref) {
      if ("current" in ref) {
        ref.current = editor;
      } else {
        ref(editor);
      }
    }
    return () => {
      editor.remove();
    };
  }, [ref]);
  return <div id="editor" style={{ height: "100%" }} ref={containerElement} />;
});
function BlockSuite() {
  //@ts-ignore
  return (
    <Suspense>
      <BlockSuiteEditor />
    </Suspense>
  );
}

export { BlockSuite };
