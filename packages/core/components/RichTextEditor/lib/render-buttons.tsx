import { RichTextEditor, RichTextMenuItem } from "../../../types";
import { IconButton } from "../../IconButton";

export const renderButtons = (
  menuItems: RichTextMenuItem[],
  editorState: Record<string, boolean>,
  editor: RichTextEditor
) =>
  menuItems.map(({ title, icon: Icon, action, state, can }) => (
    <IconButton
      key={title}
      onClick={(e) => {
        e.stopPropagation();
        action(editor);
      }}
      disabled={can ? !editorState[title + "Can"] : false}
      variant={
        state ? (editorState[title] ? "secondary" : "primary") : "primary"
      }
      title={title}
    >
      <Icon size={20} />
    </IconButton>
  ));
