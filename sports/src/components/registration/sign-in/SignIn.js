import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Form, Input, Button, Checkbox, InputNumber } from "antd";
import { Link } from "react-router-dom";
import "./signIn.css";
import { Radio } from "antd";
import { notification } from "antd";
function SignIn() {
  const [loginStatus, setLoginStatus] = useState("");
  const [loginStatusErr, setLoginStatusErr] = useState("");

  const onFinishLogin = (values) => {
    const { username, password } = values;
    login(username, password);
  };
  const onFinishFailed = (errorInfo) => {};
  const login = (username, password) => {
    Axios.post("/sign-in", {
      username,
      password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatusErr(`${response.data.message}`);
      } else {
        setLoginStatus(`Welcome ${response.data[0].username}`);
      }
    });
  };

  const openNotificationWithIconSuccsess = (type) => {
    notification[type]({
      message: "Succsessfully Loged In",
      description: loginStatus,
      placement: "top",
    });
  };

  useEffect(() => {
    if (loginStatus.length) {
      openNotificationWithIconSuccsess("success");
      setLoginStatus("");
    }
  }, [loginStatus]);

  console.log({ loginStatus });

  return (
    <div className="login-page">
      <Form
        name="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinishLogin}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="login-box">
          <h1 className="login-to-continue">Log in to continue</h1>
          <div className="login-box-inputs">
            <span>Username:</span>
            <Form.Item
              style={{ margin: "0px" }}
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input placeholder="Username ..." className="username" />
            </Form.Item>
            <div className="signUpRedirect">
              <p>Password:</p>
              <Link
                to="/register"
                style={{ fontSize: "12px", color: "#0c6a93" }}
              >
                <p>Forgot Password?</p>
              </Link>
            </div>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
              style={{ margin: "0px" }}
            >
              <Input.Password
                placeholder="Password ..."
                className="password2"
              />
            </Form.Item>
          </div>
          <Checkbox required>Keep me logged in</Checkbox>
          <Button type="primary" htmlType="submit" className="log-in-btn">
            Log In
          </Button>
          <p>
            Don't have an account yet?
            <Link
              to="/sign-up"
              style={{ fontSize: "12px", color: "#0c6a93", marginLeft: "5px" }}
            >
              <span>Sign Up</span>
            </Link>
          </p>
        </div>
      </Form>
    </div>
  );
}

export default SignIn;

{
  /*
      
      <Form
        name="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinishLogin}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <p className="form-title">Welcome back</p>
        <div className="need-an-account-wrapper">
          <p className="need-an-accounts">Need an account?</p>
          <Link to="/register" style={{ fontSize: "13px" }}>
            <span className="need-an-account">Sign Up</span>
          </Link>
        </div>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="Username ..." />
        </Form.Item>
        <br />
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="Password ..." className="password2" />
        </Form.Item>
    
        <Checkbox required>
          I have read and agree to the terms and conditions.
        </Checkbox>
        <Checkbox required>
          I have read and agree to the privacy policy
        </Checkbox>
    
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            LOGIN
          </Button>
        </Form.Item>
        <Button>
          <Link to={"/home"}>Home</Link>
        </Button>
        <h1>{loginStatus}</h1>
      </Form>

*/
}
