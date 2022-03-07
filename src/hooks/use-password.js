import { useState } from "react";

const usePassword = () => {
  const [passwordIsChangeShow, setPasswordIsShowChange] = useState(false);

  const iconShow = <i className="fa fa-eye" />;

  const iconHide = <i className="fa fa-eye-slash" />;

  let changeShowPassword = passwordIsChangeShow ? iconHide : iconShow;

  const changeShowPasswordHandler = () => {
    setPasswordIsShowChange(!passwordIsChangeShow);
  };

  return {
    passwordIsChangeShow,
    changeShowPassword,
    changeShowPasswordHandler,
  };
};

export default usePassword;
