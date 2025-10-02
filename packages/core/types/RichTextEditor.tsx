import type { Editor } from "@tiptap/react";
import type { ReactElement } from "react";

// Generic icon type (Lucide / React component)
type IconType = ReactElement;

// Base menu item
export type RichTextMenuItem = {
  title: string;
  icon: IconType;
  action: (editor: Editor) => void;
  state?: (editor: Editor) => boolean;
  can?: (editor: Editor) => boolean;
};

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

// Menu config
export interface RichTextMenuConfig {
  alignment: RichTextMenuItem[];
  headings: HeadingLevel[];
  text: RichTextMenuItem[];
  blocks: RichTextMenuItem[];
  breaks: RichTextMenuItem[];
}

// Root config type
export type RichTextConfigType = {
  menu: Partial<RichTextMenuConfig>;
  inlineMenu: Partial<RichTextMenuConfig>; // adjust once inline menu is defined
};
