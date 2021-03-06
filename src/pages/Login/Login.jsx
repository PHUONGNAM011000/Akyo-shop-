import classes from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import usePassword from "../../hooks/use-password";
import useHttp from "./../../hooks/use-http";
import useInput from "./../../hooks/use-input";
import { isEmail } from "./../../utils/helper";
import { getUsers } from "../../utils/api";
import LoadingSpinner from "./../../UI/LoadingSpinner";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loginActions } from "../../store/loginSlice";

const Login = () => {
  const [isUser, setIsUser] = useState(false);
  const [userLogin, setUserLogin] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { sendRequest, status, data: loadedUsers } = useHttp(getUsers, true);

  const {
    passwordIsChangeShow: passwordIsShow,
    changeShowPassword: showPassword,
    changeShowPasswordHandler: ShowPasswordHandler,
  } = usePassword();

  const {
    value: valueEmail,
    hasError: emailInputIsValid,
    valueIsValid: enteredEmailIsValid,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmail,
  } = useInput((value) => isEmail(value));

  const {
    value: valuePassword,
    hasError: passwordInputIsValid,
    valueIsValid: enteredPasswordIsValid,
    valueChangeHandler: passwordInputChangeHandler,
    inputBlurHandler: passwordInputBlurHandler,
    reset: resetPassword,
  } = useInput((value) => value.trim().length > 5);

  let formIsValid;

  if (enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const emailInputClasses = emailInputIsValid
    ? `${classes["input-field"]} ${classes.invalid}`
    : classes["input-field"];

  const passwordInputClasses = passwordInputIsValid
    ? `${classes["input-field"]} ${classes.invalid}`
    : classes["input-field"];

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (userLogin) navigate("/home");
    }, 1500);

    return () => {
      clearTimeout(timeout);
    };
  }, [navigate, userLogin]);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  let isLoading = status === "pending";

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    const indexUserLogin = loadedUsers.findIndex(
      (user) =>
        user.valueEmail === valueEmail && user.valuePassword === valuePassword
    );

    if (indexUserLogin !== -1) {
      dispatch(loginActions.login());
      setUserLogin(true);
      resetEmail();
      resetPassword();
    } else {
      setIsUser(true);
      return;
    }
  };

  return (
    <>
      <div className={classes.login}>
        <div className={classes.body}>
          <div className={classes.container_1}>
            {(isLoading || userLogin) && (
              <div className={classes.loading}>
                <LoadingSpinner />
              </div>
            )}
            <div className={classes.header}>????ng Nh???p</div>
            <form className={classes.form} onSubmit={formSubmissionHandler}>
              <div className={emailInputClasses}>
                <input
                  value={valueEmail}
                  onChange={emailInputChangeHandler}
                  onBlur={emailInputBlurHandler}
                  type="text"
                  name="email"
                  required
                />
                <label>Email</label>
              </div>
              {emailInputIsValid && (
                <p
                  className={classes["error-text"]}
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                >
                  Email kh??ng ????ng ?????nh d???ng !!!{" "}
                </p>
              )}

              <div className={passwordInputClasses}>
                <input
                  value={valuePassword}
                  onChange={passwordInputChangeHandler}
                  onBlur={passwordInputBlurHandler}
                  type={passwordIsShow ? "text" : "password"}
                  name="password"
                  required
                />
                <label>M???t Kh???u</label>
                <span className={classes.show} onClick={ShowPasswordHandler}>
                  {showPassword}
                </span>
              </div>
              {passwordInputIsValid && (
                <p
                  className={classes["error-text"]}
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                >
                  M???t kh???u ph???i ch???a ??t nh???t 6 k?? t??? !!!{" "}
                </p>
              )}

              {isUser && (
                <p
                  className={classes["error-text"]}
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                >
                  Email ho???c m???t kh???u kh??ng ch??nh x??c !!!{" "}
                </p>
              )}
              <div className={classes.button}>
                <div className={classes.inner}></div>
                <button disabled={!formIsValid} type="submit">
                  ????ng Nh???p
                </button>
              </div>
              <div className={classes.reset__password}>
                <label>Qu??n m???t kh???u?</label>
              </div>
            </form>
            <div className={classes.signup}>
              B???n ch??a c?? t??i Kho???n? <Link to="/register">????ng k?? ngay</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
