import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  Code,
  CornerDownLeft,
  Italic,
  List,
  ListOrdered,
  Link,
  Underline,
  Minus,
  Quote,
  SquareCode,
  Strikethrough,
} from "lucide-react";
import { RichTextConfigType, RichTextEditor as Editor } from "../../types";

export const defaultConfig: RichTextConfigType = {
  menu: {
    alignment: [
      {
        title: "Align Left",
        icon: AlignLeft,
        action: (e: Editor) => e.chain().setTextAlign("left").run(),
        state: (e: Editor) => e.isActive({ textAlign: "left" }),
      },
      {
        title: "Align Center",
        icon: AlignCenter,
        action: (e: Editor) => e.chain().setTextAlign("center").run(),
        state: (e: Editor) => e.isActive({ textAlign: "center" }),
      },
      {
        title: "Align Right",
        icon: AlignRight,
        action: (e: Editor) => e.chain().setTextAlign("right").run(),
        state: (e: Editor) => e.isActive({ textAlign: "right" }),
      },
      {
        title: "Justify",
        icon: AlignJustify,
        action: (e: Editor) => e.chain().setTextAlign("justify").run(),
        state: (e: Editor) => e.isActive({ textAlign: "justify" }),
      },
    ],

    headings: [2, 3, 4, 5, 6],

    text: [
      {
        title: "Bold",
        icon: Bold,
        action: (e: Editor) => e.chain().toggleBold().run(),
        state: (e: Editor) => e.isActive("bold"),
        can: (e: Editor) => e.can().chain().toggleBold().run(),
      },
      {
        title: "Italic",
        icon: Italic,
        action: (e: Editor) => e.chain().toggleItalic().run(),
        state: (e: Editor) => e.isActive("italic"),
        can: (e: Editor) => e.can().chain().toggleItalic().run(),
      },
      {
        title: "Underline",
        icon: Underline,
        action: (e: Editor) => e.chain().toggleUnderline().run(),
        state: (e: Editor) => e.isActive("underline"),
        can: (e: Editor) => e.can().chain().toggleUnderline().run(),
      },
      {
        title: "Strikethrough",
        icon: Strikethrough,
        action: (e: Editor) => e.chain().toggleStrike().run(),
        state: (e: Editor) => e.isActive("strike"),
        can: (e: Editor) => e.can().chain().toggleStrike().run(),
      },
      // {
      //   title: "Link",
      //   icon: Link,
      //   action: (e: Editor) => {
      //     const url = window.prompt("URL");
      //     if (url) {
      //       return e.extendMarkRange("link").setLink({ href: url });
      //     }
      //   },
      //   state: (e: Editor) => e.isActive("link"),
      //   can: (e: Editor) => e.can().chain().toggleLink().run(),
      // },
    ],

    blocks: [
      {
        title: "Inline Code",
        icon: Code,
        action: (e: Editor) => e.chain().toggleCode().run(),
        state: (e: Editor) => e.isActive("code"),
        can: (e: Editor) => e.can().chain().toggleCode().run(),
      },
      {
        title: "Bullet List",
        icon: List,
        action: (e: Editor) => e.chain().toggleBulletList().run(),
        state: (e: Editor) => e.isActive("bulletList"),
      },
      {
        title: "Ordered List",
        icon: ListOrdered,
        action: (e: Editor) => e.chain().toggleOrderedList().run(),
        state: (e: Editor) => e.isActive("orderedList"),
      },
      {
        title: "Code Block",
        icon: SquareCode,
        action: (e: Editor) => e.chain().toggleCodeBlock().run(),
        state: (e: Editor) => e.isActive("codeBlock"),
      },
      {
        title: "Blockquote",
        icon: Quote,
        action: (e: Editor) => e.chain().toggleBlockquote().run(),
        state: (e: Editor) => e.isActive("blockquote"),
      },
    ],

    breaks: [
      {
        title: "Horizontal Rule",
        icon: Minus,
        action: (e: Editor) => e.chain().setHorizontalRule().run(),
      },
    ],
  },
  inlineMenu: {},
};

defaultConfig.inlineMenu = {
  text: defaultConfig.menu.text,
};
