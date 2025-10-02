import { useMemo } from "react";
import { BubbleMenu } from "@tiptap/react/menus";
import { RichTextEditor, RichTextMenuConfig } from "../../../types";
import { Loader } from "../../Loader";

import { MenuBar } from "./MenuBar";

export const InlineMenu = ({
  menuConfig,
  editor,
}: {
  menuConfig: Partial<RichTextMenuConfig>;
  editor: RichTextEditor | null;
}) => {
  if (!editor) {
    return <Loader />;
  }

  const menuItems = useMemo(
    () => Object.values(menuConfig) as Array<MenuConfigItem>,
    [menuConfig]
  );

  if (menuItems.length === 0) {
    return null;
  }
  return (
    <BubbleMenu editor={editor}>
      <MenuBar menuConfig={menuConfig} editor={editor} />
    </BubbleMenu>
  );
};
