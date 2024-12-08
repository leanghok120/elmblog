import {
  headingsPlugin,
  linkPlugin,
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
        linkPlugin(),
        markdownShortcutPlugin(),
      ]}
      contentEditableClassName="outline-none prose prose-gruvbox"
    />
  );
}

export default Editor;
