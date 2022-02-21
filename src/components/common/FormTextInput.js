import React, { useState } from "react";
import { Style } from "./style.js";

import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Strings from "../../translations";

const FormTextInput = (props) => {
  const {
    icon,
    label,
    type,
    placeholder,
    Value,
    onChangeText,
    Validate,
    CustomErrorLine,
    Hint,
    multiline,
    mainContainerStyle,
    inputStyle,
    labelTextStyle,
    customErrorLineStyle,
    labelContainerStyle,
    placeholderStyle,
    inputContainerStyle,
    editable = true,
    passwordVisibleIcon,
    customPasswordValidation,
    customEmailValidation,
    customPhoneValidation,
    ...input
  } = props;

  const [name, setName] = useState({
    value: Value ? Value : "",
    error: false,
    success: false,
  });

  const [error, setError] = useState("");
  const [toggleShowPassword, setToggleShowPassword] = useState(false);
  const [textType, setTextType] = useState(type);
  const [showTooltip, setShowToolTip] = useState(false);

  const nameCustomeLineError =
    Strings["component.FormTextInputNameCustomErrorLine"],
    fieldCustomeLineError =
      Strings["component.FormTextInputFieldCustomErrorLine"],
    emailCustomeLineError =
      Strings["component.FormTextInputEmailCustomErrorLine"],
    numberemptyCustomeLineError =
      Strings["component.FormTextInputNumberCustomErrorLine"],
    numberinvalidCustomLineError =
      Strings["component.FormTextInputNumberinvalidCustomErrorLine"],
    passwordinvalidCustomLineError =
      Strings["component.FormTextInputPasswordinvalidCustomErrorLine"];

  const handleChangeText = (e) => {
    const data = e.target.value;

    if (Validate && editable) {
      if (type === "text") {
        if (data.length === 0) {
          const value = {
            value: data,
            success: false,
          };
          onChangeText(value);
          setName(value);
        } else {
          const value = {
            value: data,
            success: true,
          };
          onChangeText(value);
          setName(value);
        }
      } else if (type === "alpha") {
        const aplhaRegex = /^[A-Za-z]+$/;
        if (data.length === 0 && !aplhaRegex.test(data)) {
          const value = {
            value: data,
            success: false,
          };
          onChangeText(value);
          setName(value);
        } else {
          const value = {
            value: data,
            success: true,
          };
          onChangeText(value);
          setName(value);
        }
      } else if (type === "textarea") {
        console.log("clicked text area");
        if (data.length === 0) {
          const value = {
            value: data,
            success: false,
          };
          onChangeText(value);
          setName(value);
        } else {
          const value = {
            value: data,
            success: true,
          };
          onChangeText(value);
          setName(value);
        }
      } else if (type === "email") {
        const emailRe =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const emailTest = customEmailValidation
          ? customEmailValidation
          : emailRe;
        if (!emailTest.test(String(data).toLowerCase())) {
          const value = {
            value: data,
            success: false,
          };
          onChangeText(value);
          setName(value);
        } else {
          setError("");
          const value = {
            value: data,
            success: true,
          };
          onChangeText(value);
          setName(value);
        }
      } else if (type === "number") {
        if (data.length === 0) {
          const value = {
            value: data,
            success: false,
          };
          onChangeText(value);
          setName(value);
        } else {
          const value = {
            value: data,
            success: true,
          };
          onChangeText(value);
          setName(value);
        }
      } else if (type === "phone") {
        const phonenoRe = /^(\+91[-\s]?)?[0]?(91)?[789]\d{9}$/;
        const phoneNo = customPhoneValidation
          ? customPhoneValidation
          : phonenoRe;
        if (!phoneNo.test(data)) {
          const value = {
            value: data,
            success: false,
          };
          onChangeText(value);
          setName(value);
        } else {
          setError("");
          const value = {
            value: data,
            success: true,
          };
          onChangeText(value);
          setName(value);
        }
      } else if (type === "password") {
        const password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const validationLogic = customPasswordValidation
          ? customPasswordValidation
          : password;
        if (!validationLogic.test(data)) {
          const value = {
            value: data,
            success: false,
          };
          onChangeText(value);
          setName(value);
        } else {
          setError("");
          const value = {
            value: data,
            success: true,
          };
          onChangeText(value);
          setName(value);
        }
      }
    } else if (!Validate && editable) {
      setError("");

      const value = {
        value: data,
        error: true,
        success: true,
      };
      onChangeText(value);
    }
  };

  const handleBlurText = (e) => {
    const data = e.target.value;

    if (Validate && editable) {
      if (textType === "text") {
        if (data.length === 0) {
          setError(CustomErrorLine ? CustomErrorLine : nameCustomeLineError);
          const value = {
            ...name,
            error: true,
            success: false,
          };
          onChangeText(value);
        } else {
          setError("");
          const value = {
            ...name,
            error: false,
            success: true,
          };
          onChangeText(value);
        }
      } else if (textType === "alpha") {
        const aplhaRegex = /^[a-z\d\-_\s]+$/i;
        if (!aplhaRegex.test(data)) {
          setError(CustomErrorLine ? CustomErrorLine : fieldCustomeLineError);
          const value = {
            ...name,
            error: true,
            success: false,
          };
          onChangeText(value);
        } else {
          setError("");
          const value = {
            ...name,
            error: false,
            success: true,
          };
          onChangeText(value);
        }
      } else if (textType === "textarea") {
        if (data.length === 0) {
          setError(CustomErrorLine ? CustomErrorLine : fieldCustomeLineError);
          const value = {
            ...name,
            error: true,
            success: false,
          };
          onChangeText(value);
        } else {
          setError("");
          const value = {
            ...name,
            error: false,
            success: true,
          };
          onChangeText(value);
        }
      } else if (textType === "email") {
        const emailRe =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const emailTest = customEmailValidation
          ? customEmailValidation
          : emailRe;
        if (!emailTest.test(String(data).toLowerCase())) {
          setError(CustomErrorLine ? CustomErrorLine : emailCustomeLineError);
          const value = {
            ...name,
            error: true,
            success: false,
          };
          onChangeText(value);
        } else {
          setError("");
          const value = {
            ...name,
            error: false,
            success: true,
          };
          onChangeText(value);
        }
      } else if (textType === "number") {
        if (data.length === 0) {
          setError(
            CustomErrorLine ? CustomErrorLine : numberemptyCustomeLineError
          );
          const value = {
            ...name,
            error: true,
            success: false,
          };
          onChangeText(value);
        } else {
          setError("");
          const value = {
            ...name,
            error: false,
            success: true,
          };
          onChangeText(value);
        }
      } else if (textType === "phone") {
        const phonenoRe = /^(\+91[-\s]?)?[0]?(91)?[789]\d{9}$/;
        const phoneNo = customPhoneValidation
          ? customPhoneValidation
          : phonenoRe;
        if (!phoneNo.test(data)) {
          setError(
            CustomErrorLine ? CustomErrorLine : numberinvalidCustomLineError
          );
          const value = {
            ...name,
            error: true,
            success: false,
          };
          onChangeText(value);
        } else {
          setError("");
          const value = {
            ...name,
            error: false,
            success: true,
          };
          onChangeText(value);
        }
      } else if (textType === "password") {
        const password =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const validationLogic = customPasswordValidation
          ? customPasswordValidation
          : password;
        if (!validationLogic.test(data)) {
          setError(
            CustomErrorLine ? CustomErrorLine : passwordinvalidCustomLineError
          );
          const value = {
            ...name,
            error: true,
            success: false,
          };
          onChangeText(value);
        } else {
          setError("");
          const value = {
            ...name,
            error: false,
            success: true,
          };
          onChangeText(value);
        }
      }
    } else if (!Validate && editable) {
      setError("");

      const value = {
        value: data,
        error: false,
        success: true,
      };
      onChangeText(value);
    }
  };

  const handleVisible = () => {
    setToggleShowPassword(!toggleShowPassword);
    setTextType("text");
    if (textType === "text") {
      setTextType("password");
    }
  };

  const handleClick = () => {
    setShowToolTip(!showTooltip);
  };


  return (
    <div style={Object.assign({}, Style.mainContainerStyle, mainContainerStyle)}>
      <div style={labelContainerStyle}>
        {
          label && <label style={{ ...Style.labelTextStyle, ...labelTextStyle }}>
            {label}
          </label>
        }
      </div>
      <div
        style={Object.assign(
          {},
          Style.inputContainerStyle,
          inputContainerStyle,

          error ? Style.inputContainerError : null
        )}
      >
        {icon ? icon : null}
        {multiline && (type === "text" || type === "alpha") ? (
          <textarea
            {...input}
            type={type}
            placeholder={placeholder}
            value={Value ? Value : name.value}
            onChange={handleChangeText}
            onBlur={handleBlurText}
            style={Object.assign(
              {},
              Style.textArea,
              error ? Style.textAreaError : null
            )}
            readOnly={!editable}
          ></textarea>
        ) : (
          <input
            {...input}
            inputMode={"numeric"}
            type={
              textType === "phone"
                ? "tel"
                : textType === "alpha"
                  ? "text"
                  : textType
            }
            placeholder={placeholder}
            value={Value ? Value : name.value}
            onChange={handleChangeText}
            onBlur={handleBlurText}
            onClick={handleClick}
            style={Object.assign(
              {},
              Style.inputStyle,
              inputStyle,
              placeholderStyle,
              editable ? null : Style.inputContainerDisabledStyle,
              error ? Style.inputError : null
            )}
            readOnly={!editable}
          // data-toggle="tooltip"
          // data-placement="top"
          // title={Hint ? Hint : ""}
          />
        )}

        {type === "password" &&
          passwordVisibleIcon &&
          (textType === "password" ? (
            <div style={Style.pwIconContainerStyle}>
              <VisibilityIcon onClick={handleVisible} />
            </div>
          ) : (
            <div style={Style.pwIconContainerStyle}>
              <VisibilityOffIcon onClick={handleVisible} />
            </div>
          ))}
      </div>
      {(error && Hint) && <p style={Style.hint}>{Hint}</p>}
      {error && (
        <div className='clearFix'>
          <div
            className="float-right"
            style={
              Object.assign({}, customErrorLineStyle ? customErrorLineStyle : Style.customErrorLineStyle)
            }>
            {error ? error : CustomErrorLine}
          </div>
        </div>
      )}
    </div>
  );
};

export default FormTextInput;
