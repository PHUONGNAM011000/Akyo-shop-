import classes from "./Register.module.css";
import { Link, useNavigate } from "react-router-dom";
import usePassword from "../../hooks/use-password";
import useInput from "../../hooks/use-input";
import { isEmail } from "../../utils/helper";
import useHttp from "./../../hooks/use-http";
import { addUser } from "../../utils/api";
import { useEffect } from "react";
import LoadingSpinner from "./../../UI/LoadingSpinner";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

AOS.init();

const Register = () => {
  const { sendRequest, status } = useHttp(addUser);
  const navigate = useNavigate();

  const {
    passwordIsChangeShow: passwordIsShow,
    changeShowPassword: showPassword,
    changeShowPasswordHandler: ShowPasswordHandler,
  } = usePassword();

  const {
    passwordIsChangeShow: confirmPasswordIsShow,
    changeShowPassword: showConfirmPassword,
    changeShowPasswordHandler: ShowConfirmPasswordHandler,
  } = usePassword();

  const {
    value: valueUserName,
    hasError: userNameInputIsValid,
    valueIsValid: enteredUserNameIsValid,
    valueChangeHandler: userNameInputChangeHandler,
    inputBlurHandler: userNameInputBlurHandler,
    reset: resetUserName,
  } = useInput((value) => value.trim() !== "" && value.trim().length > 5);

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

  const {
    value: valuePasswordConfirm,
    hasError: passwordConfirmInputIsValid,
    valueIsValid: enteredPasswordConfirmIsValid,
    valueChangeHandler: passwordConfirmInputChangeHandler,
    inputBlurHandler: passwordConfirmInputBlurHandler,
    reset: resetPasswordConfirm,
  } = useInput(
    (value) =>
      value.trim().length > 5 &&
      value.trim().toString() === valuePassword.toString()
  );

  let formIsValid;

  if (
    enteredUserNameIsValid &&
    enteredEmailIsValid &&
    enteredPasswordIsValid &&
    enteredPasswordConfirmIsValid
  ) {
    formIsValid = true;
  }

  const userNameInputClasses = userNameInputIsValid
    ? `${classes["input-field"]} ${classes.invalid}`
    : classes["input-field"];

  const emailInputClasses = emailInputIsValid
    ? `${classes["input-field"]} ${classes.invalid}`
    : classes["input-field"];

  const passwordInputClasses = passwordInputIsValid
    ? `${classes["input-field"]} ${classes.invalid}`
    : classes["input-field"];

  const passwordConfirmInputClasses = passwordConfirmInputIsValid
    ? `${classes["input-field"]} ${classes.invalid}`
    : classes["input-field"];

  let isLoading = status === "pending";

  useEffect(() => {
    if (status === "completed") {
      navigate("/login");
    }
  }, [status, navigate]);

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    sendRequest({
      valueUserName,
      valueEmail,
      valuePassword,
    });

    resetUserName();
    resetEmail();
    resetPassword();
    resetPasswordConfirm();
  };

  return (
    <>
      <div className={classes.register}>
        <div className={classes.body}>
          <div className={classes.container_1}>
            {isLoading && (
              <div className={classes.loading}>
                <LoadingSpinner />
              </div>
            )}
            <div className={classes.header}>Đăng Ký</div>

            <form className={classes.form} onSubmit={formSubmissionHandler}>
              <div className={userNameInputClasses}>
                <input
                  value={valueUserName}
                  onChange={userNameInputChangeHandler}
                  onBlur={userNameInputBlurHandler}
                  type="text"
                  name="username"
                  required
                />
                <label>Tên đăng nhập</label>
              </div>
              {userNameInputIsValid && (
                <p
                  className={classes["error-text"]}
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                >
                  Tên đăng nhập phải chứa ít nhất 6 kí tự !!!{" "}
                </p>
              )}
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
                  Email không đúng định dạng !!!{" "}
                </p>
              )}
              <div className={passwordInputClasses}>
                <input
                  value={valuePassword}
                  onChange={passwordInputChangeHandler}
                  onBlur={passwordInputBlurHandler}
                  className={classes.pswrd}
                  type={passwordIsShow ? "text" : "password"}
                  name="password"
                  required
                />
                <label>Mật Khẩu</label>
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
                  Mật khẩu phải chứa ít nhất 6 kí tự !!!{" "}
                </p>
              )}
              <div className={passwordConfirmInputClasses}>
                <input
                  value={valuePasswordConfirm}
                  onChange={passwordConfirmInputChangeHandler}
                  onBlur={passwordConfirmInputBlurHandler}
                  className={classes.pswrd}
                  type={confirmPasswordIsShow ? "text" : "password"}
                  name="confirmPassword"
                  required
                />
                <label>Nhập lại mật Khẩu</label>
                <span
                  className={classes.show}
                  onClick={ShowConfirmPasswordHandler}
                >
                  {showConfirmPassword}
                </span>
              </div>
              {passwordConfirmInputIsValid && (
                <p
                  className={classes["error-text"]}
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                >
                  Bạn chưa nhập mật khẩu hoặc mật khẩu không trùng khớp !!!{" "}
                </p>
              )}
              <div className={classes.button}>
                <div className={classes.inner}></div>
                <button disabled={!formIsValid} type="submit">
                  Đăng Nhập
                </button>
              </div>
            </form>
            <div className={classes.signup}>
              Bạn đã có tài Khoản? <Link to="/login">Đăng nhập ngay</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
