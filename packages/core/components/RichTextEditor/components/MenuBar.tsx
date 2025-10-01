import { useEditorState } from "@tiptap/react";
import getClassNameFactory from "../../../lib/get-class-name-factory";
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
const getClassName = getClassNameFactory("Editor", styles);

export const MenuBar = ({
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

  return (
    <div className={getClassName("button-group")}>
      {(Object.keys(menuConfig) as Array<keyof RichTextConfigType["menu"]>).map(
        (key) => {
          const configItem = menuConfig[key];
          if (!configItem) return null; // handle undefined in Partial

          if (key === "headings") {
            return (
              <BlockStyleSelect
                key={key}
                config={configItem as RichTextConfigType["menu"]["headings"]}
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
        }
      )}
    </div>
  );
};
