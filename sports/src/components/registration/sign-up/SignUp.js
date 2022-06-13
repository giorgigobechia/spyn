import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Form, Input, Button, Checkbox, InputNumber } from "antd";
import "./sign-up.css";
import { Select, Alert, notification } from "antd";
import validationMessages from "./Validations";
import { BsCameraReels } from "react-icons/bs";
import RegisterPageRow from "./register-page-row/RegisterPageRow";
const { Option } = Select;

function SignUp() {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const onFinishRegister = (values) => {
    const { username, email, password } = values;
    register(username, email, password);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  Axios.defaults.withCredentials = true;
  const register = (username, email, password) => {
    console.log(username, email, password);
    console.log("first");
    Axios.post("http://localhost:3001/sign-up", {
      username,
      email,
      password,
    })
      .then((response) => {
        setSuccessMessage(response.data.message);
        console.log(response.data.message, "😊😊");
      })
      .catch((err) => {
        setErrorMessage(`${err.response.data.message}`);
      });
  };

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "Error of creating account",
      description: errorMessage,
      placement: "top",
    });
  };
  const openNotificationWithIconSuccsess = (type) => {
    notification[type]({
      message: "Account Succsessfully created",
      description: successMessage,
      placement: "top",
    });
  };
  useEffect(() => {
    if (successMessage.length) {
      console.log({ successMessage });
      openNotificationWithIconSuccsess("success");
      setSuccessMessage("");
    }
  }, [successMessage]);
  useEffect(() => {
    if (errorMessage.length) {
      console.log({ errorMessage });
      openNotificationWithIcon("error");
      setErrorMessage("");
    }
  }, [errorMessage]);

  return (
    // {errorMessage.length > 0 ? openNotificationWithIcon("error") : ""}
    // {successMessage.length > 0
    //   ? openNotificationWithIconSuccsess("success")
    //   : ""}
    <div>
      <div className="register-page">
        <div className="register-box">
          <div className="register-box-left">
            <h1 className="join-website">Join The LARGEST XXX Cam Site</h1>
            <div className="register-box-left-content">
              <RegisterPageRow
                registerRowText="Thousands of Live Amateurs
                Broadcasting From Home"
                registerRowImage={
                  "https://static-assets.highwebmedia.com/images/join-cam.png"
                }
              />
              <RegisterPageRow
                registerRowText="The FASTEST GROWING
                Free Cam Chat Community"
                registerRowImage={
                  "https://static-assets.highwebmedia.com/images/join-chart.png"
                }
              />
              <RegisterPageRow
                registerRowText="No Credit Card Needed and
                E-Mail Address is Optional"
                registerRowImage={
                  "https://static-assets.highwebmedia.com/images/join-nocc.png"
                }
              />
            </div>
          </div>
          <div className="register-box-right">
            <h1 className="register-box-right-create-acc">
              Create Your Free Account
            </h1>
            <p className="register-box-right-you-must">
              You must be over 18 years old to register
            </p>
            <div className="register-box-right-info">
              <Form
                name="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinishRegister}
                validateMessages={validationMessages}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                className="form"
              >
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: `${validationMessages.username.message}`,
                    },
                  ]}
                  label="username"
                >
                  <Input
                    placeholder="Type your username to create account"
                    className="register-box-right-info-inputs"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  label="password"
                  rules={[
                    {
                      required: true,
                      message: `${validationMessages.password.message}`,
                    },
                  ]}
                >
                  <Input.Password
                    placeholder="Type your password to create account"
                    className="register-box-right-info-inputs"
                  />
                </Form.Item>
                {/* EMAIL 😉 */}
                <Form.Item
                  label="email"
                  name="email"
                  rules={[
                    {
                      message: `${validationMessages.email.message}`,
                    },
                  ]}
                >
                  <Input
                    placeholder="Type your email to create account"
                    className="register-box-right-info-inputs"
                  />
                </Form.Item>
                <p style={{ fontSize: "12px" }}>
                  Needed for friend notifications -- email optional.
                </p>
                <br />
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
                    className="register-form-button"
                    onClick={register}
                  >
                    Create Free Account
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
