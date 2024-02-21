/* eslint-disable react/prop-types */
/* eslint-disable no-plusplus */
import React from 'react';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';

const RichTextEditor = ({ setBody, body, title }) => {
  const handleChange = (content) => {
    setBody({
      ...body,
      [title]: content,
    });
  };

  return (
    <div>
      <SunEditor
        height="400px"
        autoFocus
        onChange={handleChange}
        defaultValue={body[title]}
        placeholder="Please Enter Body"
        setOptions={{
          buttonList: [
            ['undo', 'redo'],
            ['font', 'fontSize', 'formatBlock'],
            ['paragraphStyle', 'blockquote'],
            ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
            ['fontColor', 'hiliteColor', 'textStyle'],
            ['removeFormat'],
            '/',
            ['outdent', 'indent'],
            ['align', 'horizontalRule', 'list', 'lineHeight'],
            ['table', 'link'],
            ['horizontalRule', 'image', 'template'],
          ],
        }}
      />
    </div>
  );
};

export default RichTextEditor;
