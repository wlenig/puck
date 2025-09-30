import { useMemo } from "react";
import { useSyncedEditor } from "./lib/use-synced-editor";
import { defaultExtensions } from "./extensions";
import { InlineMenu } from "./components/InlineMenu";
import { EditorContent, Extensions } from "@tiptap/react";
import { defaultConfig } from "./config";
import { EditorProps } from "../../types";

export const InlineEditor = ({
  onChange,
  content,
  configOverrides = {},
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
    editable: true,
  });

  if (!editor) return null;

  return (
    <>
      <InlineMenu editor={editor} menuConfig={config.inlineMenu || {}} />
      <EditorContent editor={editor} className="rich-text-editor-inline" />
    </>
  );
};
