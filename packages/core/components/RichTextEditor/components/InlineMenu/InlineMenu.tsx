import { useMemo } from "react";
import { BubbleMenu } from "@tiptap/react/menus";
import {
  HeadingLevel,
  RichTextMenuConfig,
  RichTextMenuItem,
} from "../../../../types";
import { Loader } from "../../../Loader";

import { MenuBar } from "../MenuBar/MenuBar";
import { RichTextEditor } from "../../types";

export const InlineMenu = ({
  menuConfig,
  editor,
}: {
  menuConfig: Partial<RichTextMenuConfig>;
  editor: RichTextEditor | null;
}) => {
  const menuItems = useMemo(
    () => Object.values(menuConfig) as (RichTextMenuItem[] | HeadingLevel[])[],
    [menuConfig]
  );

  if (!editor) {
    return <Loader />;
  }

  if (menuItems.length === 0) {
    return null;
  }
  return (
    <BubbleMenu editor={editor}>
      <MenuBar menuConfig={menuConfig} editor={editor} />
    </BubbleMenu>
  );
};
