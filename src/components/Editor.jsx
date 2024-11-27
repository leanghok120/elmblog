import React from "react";
import {
  headingsPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  quotePlugin,
} from "@mdxeditor/editor";

function Editor({ content, setContent }) {
  return (
    <MDXEditor
      markdown={content}
      onChange={(newContent) => setContent(newContent)}
      plugins={[
        headingsPlugin(),
        listsPlugin(),
        quotePlugin(),
        markdownShortcutPlugin(),
      ]}
      contentEditableClassName="prose outline-none"
    />
  );
}

export default Editor;
