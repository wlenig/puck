import { useEditorState, Editor as EditorType } from "@tiptap/react";
import { HeadingLevel, RichTextConfigType } from "../../../types";
import styles from "../styles.module.css";
import getClassNameFactory from "../../../lib/get-class-name-factory";
const getClassName = getClassNameFactory("Input", styles);

export const BlockStyleSelect = ({
  config,
  editor,
}: {
  config: RichTextConfigType["menu"]["headings"];
  editor: EditorType;
}) => {
  const editorState = useEditorState({
    editor,
    selector: (ctx) => {
      if (!config) return null;
      for (let level = config[0]; level <= config.length; level++) {
        if (ctx.editor.isActive("heading", { level })) return `h${level}`;
      }
      return "paragraph";
    },
  });

  const value = editorState || "paragraph";
  const chainFocus = editor.chain().focus();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    if (val === "paragraph") {
      chainFocus.setParagraph().run();
    } else {
      const level = parseInt(val.replace("h", ""), 10) as HeadingLevel;
      chainFocus.toggleHeading({ level }).run();
    }
  };
  if (!config || config.length === 0) return null;
  return (
    <select
      value={value}
      onChange={handleChange}
      className={getClassName("input")}
    >
      <option value="paragraph">Paragraph</option>
      {config &&
        config.map((level: number) => (
          <option key={level} value={`h${level}`}>
            Heading {level}
          </option>
        ))}
    </select>
  );
};
