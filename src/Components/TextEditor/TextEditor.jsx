import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default function MyTextEditor() {
  const [editorState, setEditorState] = useState(null);

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  return (
    <div>
      <Editor
        editorState={editorState}
        toolbar={{
          options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link', 'emoji', 'remove', 'history'],
          inline: {
            options: ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript'],
          },
          blockType: {
            inDropdown: false,
            options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'Blockquote', 'Code'],
          },
          list: {
            inDropdown: false,
            options: ['unordered', 'ordered', 'indent', 'outdent'],
          },
          textAlign: {
            inDropdown: false,
            options: ['left', 'center', 'right', 'justify'],
          },
          fontFamily: {
            options: ['Arial', 'Georgia', 'Impact', 'Tahoma', 'Times New Roman', 'Verdana'],
          },
        }}
        onEditorStateChange={onEditorStateChange}
      />
    </div>
  );
}
