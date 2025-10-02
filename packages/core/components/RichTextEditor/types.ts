import { Extensions, JSONContent } from "@tiptap/react";
import { defaultExtensions } from "./extensions";
import { useSyncedEditor } from "./lib/use-synced-editor";
import { RichTextConfigType } from "../../types";

export type EditorProps = {
  onChange: (content: string | JSONContent) => void;
  content: string;
  id?: string;
  readOnly?: boolean;
  configOverrides?: Partial<RichTextConfigType>;
  extensionOverrides?: Partial<Extensions[]>;
};

export type DefaultExtensions = typeof defaultExtensions;
export type ExtensionSet<T extends Extensions = DefaultExtensions> = T;

export type RichTextEditor = NonNullable<ReturnType<typeof useSyncedEditor>>;
