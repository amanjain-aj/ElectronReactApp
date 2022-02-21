// import React, { useState } from "react";
// import { Style } from "./style";
// import Button from "@mui/material/Button";

// const FilePickerComponent = (props) => {
//   const [file, setFilePerview] = useState("");
//   const { filePickerContainer, filePickerInputStyle, setFile } = props;

//   const handleChange = (e) => {
//     setFile(e.target.files[0].name);
//     setFilePerview(URL.createObjectURL(e.target.files[0]));
//   };

//   const handleClick = () => {
//     document.getElementById("fileInput").click();
//   };

//   return (
//     <div
//       style={Object.assign(
//         {},
//         Style.filePickerContainer,
//         filePickerContainer,
//         {}
//       )}
//     >
//       <Button
//         variant="contained"
//         component="label"
//         style={Object.assign(
//           {},
//           Style.filePickerInputStyle,
//           filePickerInputStyle
//         )}
//         onClick={() => {
//           handleClick();
//         }}
//       >
//         Upload File
//         <input type="file" id="fileInput" onChange={handleChange} />
//       </Button>
//       <iframe src={file} style={{ height: "308px" }} title={file}></iframe>
//     </div>
//   );
// };

// export default FilePickerComponent;

import React from 'react'
import { Style } from './style'

const FilePickerComponent = (props) => {

  const {
    type,
    isMulti,
    value,
    label,
    onChange,
    mainContainerStyle,
    labelContainerStyle,
    labelTextStyle,
    customErrorLine,
  } = props

  const [file, setFile] = React.useState({
    value: value ? value : null,
    error: false,
    success: true
  })

  const [error, setError] = React.useState('')

  const handleChangeFile = (e) => {
    // console.log(e.target.files)
    // console.log(Object.keys(e.target.files))
    const data = {
      value: e.target.files,
      error: false,
      success: true
    }
    setFile(data)
    onChange(data)
    setError('')
  }

  const handlechangeBlurFile = () => {
    if (file.value) {
      const data = {
        value: file.value,
        error: false,
        success: true
      }
      setFile(data)
      onChange(data)
      setError('')
    } else {
      const data = {
        value: '',
        error: true,
        success: false
      }
      setFile(data)
      onChange(data)
      setError(customErrorLine ? customErrorLine : 'select the file')
    }
  }

  return (
    <div style={Object.assign({}, Style.mainFilePickerContainerStyle, mainContainerStyle)}>
      <div style={Object.assign({}, Style.labelContainerStyle, labelContainerStyle)}>
        <label style={Object.assign({}, Style.labelTextStyle, labelTextStyle)}>
          {label}
        </label>
      </div>
      {
        isMulti ?
          <div className="input-group mb-2">
            <input
              accept={`${type}/*`}
              type="file"
              className="form-control"
              id="inputGroupFile01"
              onChange={handleChangeFile}
              onBlur={handlechangeBlurFile}
              multiple
            />
          </div>
          :
          <div className="input-group mb-2">
            <input
              accept={`${type}/*`}
              type="file"
              className="form-control"
              id="inputGroupFile01"
              onChange={handleChangeFile}
              onBlur={handlechangeBlurFile}
            />
            <label className="input-group-text">Upload</label>
          </div>
      }

      {error && (
        <div className='clearFix'>
          <div
            className="float-right"
            style={
              Object.assign({}, Style.customErrorLineStyle)
            }>
            {error && error}
          </div>
        </div>
      )}
    </div>
  )
}

export default FilePickerComponent
