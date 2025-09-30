import { memo, useMemo } from "react";
import { useSyncedEditor } from "./lib/use-synced-editor";
import { defaultExtensions } from "./extensions";
import { MenuBar } from "./components/MenuBar";
import { EditorContent, Extensions } from "@tiptap/react";
import { defaultConfig } from "./config";
import { EditorProps } from "../../types";

export const Editor = memo(
  ({
    onChange,
    content,
    readOnly = false,
    configOverrides,
    extensionOverrides = [],
  }: EditorProps) => {
    const config = configOverrides ? configOverrides : defaultConfig;

    const extensions = useMemo(
      () => [...defaultExtensions, ...extensionOverrides] as Extensions,
      [extensionOverrides]
    );

    const editor = useSyncedEditor<typeof extensions>({
      content,
      onChange,
      extensions,
      editable: !readOnly,
    });

    if (!editor) return null;

    return (
      <>
        {!readOnly && (
          <MenuBar menuConfig={config.menu || {}} editor={editor} />
        )}
        <EditorContent editor={editor} className="rich-text-editor" />
      </>
    );
  }
);

Editor.displayName = "Editor";
