import { RichTextMenuItem } from "../../../types";
import { IconButton } from "../../IconButton";
import { RichTextEditor } from "../types";

export const renderButtons = (
  menuItems: RichTextMenuItem[],
  editorState: Record<string, boolean>,
  editor: RichTextEditor
) => {
  return menuItems.map(({ title, icon: Icon, action, state, can }) => {
    return (
      <IconButton
        key={title}
        onClick={(e) => {
          e.stopPropagation();
          action(editor);
        }}
        disabled={can ? !editorState[`can${title}`] : false}
        variant={state && editorState[`is${title}`] ? "secondary" : "primary"}
        title={title}
      >
        {Icon}
      </IconButton>
    );
  });
};
