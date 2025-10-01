import { useEditorState } from "@tiptap/react";
import { BubbleMenu } from "@tiptap/react/menus";
import styles from "../styles.module.css";
import { BlockStyleSelect } from "./BlockStyleSelect";
import { renderButtons } from "../lib/render-buttons";
import {
  RichTextConfigType,
  RichTextEditor,
  RichTextMenuItem,
} from "../../../types";
import { Loader } from "../../Loader";
import { buildEditorState } from "../lib/build-editor-state";
import getClassNameFactory from "../../../lib/get-class-name-factory";

const getClassName = getClassNameFactory("Editor", styles);

export const InlineMenu = ({
  menuConfig,
  editor,
}: {
  menuConfig: RichTextConfigType["menu"];
  editor: RichTextEditor | null;
}) => {
  const editorState = useEditorState({
    editor,
    selector: (ctx) => {
      const { editor } = ctx;
      if (!editor) return null;
      return buildEditorState(editor, menuConfig);
    },
  });
  if (!editor || !editorState) {
    return <Loader />;
  }
  if (Object.keys(menuConfig).length === 0) {
    return null;
  }
  return (
    <BubbleMenu editor={editor} className={getClassName("button-group")}>
      {(
        Object.keys(menuConfig) as Array<keyof RichTextConfigType["inlineMenu"]>
      ).map((key) => {
        const configItem = menuConfig[key];
        if (!configItem) return null; // handle undefined in Partial

        if (key === "headings") {
          return (
            <BlockStyleSelect
              key={key}
              config={
                configItem as RichTextConfigType["inlineMenu"]["headings"]
              }
              editor={editor}
            />
          );
        } else {
          return (
            <div
              key={String(key)}
              className={getClassName(`editor-menu-${key}`)}
            >
              {renderButtons(
                configItem as RichTextMenuItem[],
                editorState,
                editor
              )}
            </div>
          );
        }
      })}
    </BubbleMenu>
  );
};
