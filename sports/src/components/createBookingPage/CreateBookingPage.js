import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from "antd";
import axios from "axios";
import "antd/dist/antd.css";
import validationMessages from "./Validations";

const initialValues = {
  name: "",
  street: "",
  size: "",
  stadiumSize: "",
  surface: "",
  covered: "",
  dressing: "",
  fanSpace: "",
  shower: "",
  lights: "",
  price: "",
};

function CreateBookingPage() {
  const [values, setValues] = useState(initialValues);
  const [valuesSelect, setValuesSelect] = useState(initialValues);
  const [valuesNumberInput, setvaluesNumberInput] = useState(initialValues);
  const [image, setImage] = useState({});

  const handleTextInputChange = (e) => {
    const { name, street, price } = e.target.value;
    setValues({
      ...values,
      [name]: values,
      [price]: valuesNumberInput,
      [street]: values,
    });
  };

  const handleSelectInputChange = (valueTest) => {
    const {
      surface,
      covered,
      dressing,
      parking,
      stadiumSize,
      price,
      fanSpace,
      shower,
      lights,
    } = valueTest;
    setValuesSelect({
      ...valuesSelect,
      [surface]: valuesSelect,
      [covered]: valuesSelect,
      [dressing]: valuesSelect,
      [stadiumSize]: valuesSelect,
      [parking]: valuesSelect,
      [fanSpace]: valuesSelect,
      [shower]: valuesSelect,
      [lights]: valuesSelect,
      [price]: valuesSelect,
    });
  };

  const handleFinish = (values) => {
    const {
      name,
      street,
      stadiumSize,
      surface,
      covered,
      dressing,
      parking,
      fanSpace,
      shower,
      lights,
      price,
      numberOfPlayers,
    } = values;
    axios
      .post("/createBooking", {
        name,
        street,
        stadiumSize,
        surface,
        covered,
        dressing,
        parking,
        fanSpace,
        shower,
        lights,
        price,
        numberOfPlayers,
      })
      .then(function (response) {
        sendImage(response.data.id);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const fileOnChange = (e) => {
    setImage(e.target.files[0]);
  };

  const sendImage = (id) => {
    const formData = new FormData();
    formData.append("avatar", image);
    formData.append("id", id);
    axios.post("/uploadFile", formData).then(function (response) {});
  };
  return (
    <div>
      <h1 style={{ alignSelf: "center" }}>????????????????????? ???????????????????????? ??????????????????:</h1>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        onFinish={handleFinish}
      >
        <Form.Item
          label="??????????????????????????? ??????????????????"
          name="name"
          rules={[
            {
              required: true,
              message: `${validationMessages.name.message}`,
            },
          ]}
        >
          <Input onChange={handleTextInputChange} />
        </Form.Item>
        <Form.Item
          label="????????????"
          name="street"
          rules={[
            {
              required: true,
              message: `${validationMessages.street.message}`,
            },
          ]}
        >
          <Input onChange={handleTextInputChange} />
        </Form.Item>
        <Form.Item
          label="??????????????????????????? ??????????????????(???????????????)"
          name="stadiumSize"
          rules={[
            {
              required: true,
              message: `${validationMessages.stadiumSize.message}`,
            },
          ]}
        >
          <InputNumber min={1} onChange={handleSelectInputChange} />
        </Form.Item>
        <Form.Item
          label="??????????????????"
          name="surface"
          rules={[
            {
              required: true,
              message: `${validationMessages.surface.message}`,
            },
          ]}
        >
          <Select onChange={handleSelectInputChange} fieldNames="surface">
            <Select.Option value="artificial">???????????????????????????</Select.Option>
            <Select.Option value="natural">???????????????????????????</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="???????????????????????????"
          name="covered"
          rules={[
            {
              required: true,
              message: `${validationMessages.covered.message}`,
            },
          ]}
        >
          <Select onChange={handleSelectInputChange} fieldNames="covered">
            <Select.Option value="open">?????????</Select.Option>
            <Select.Option value="closed">??????????????????????????????</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="???????????????????????????" valuePropName="checked" name="dressing">
          <Switch onChange={handleSelectInputChange} />
        </Form.Item>
        <Form.Item label="????????????????????????" valuePropName="checked" name="parking">
          <Switch onChange={handleSelectInputChange} />
        </Form.Item>
        <Form.Item
          label="????????????????????????????????????????????? ??????????????????"
          valuePropName="checked"
          name="fanSpace"
        >
          <Switch onChange={handleSelectInputChange} />
        </Form.Item>
        <Form.Item label="?????????????????????" valuePropName="checked" name="shower">
          <Switch onChange={handleSelectInputChange} />
        </Form.Item>
        <Form.Item label="????????????????????????" valuePropName="checked" name="lights">
          <Switch onChange={handleSelectInputChange} />
        </Form.Item>
        <Form.Item label="????????????" name="image">
          <input type="file" name="" id="" onChange={fileOnChange} />
        </Form.Item>
        <Form.Item
          label="???????????????????????????????????? ???????????????????????????"
          name="numberOfPlayers"
          rules={[
            {
              required: true,
              message: `${validationMessages.numberOfPlayers.message}`,
            },
          ]}
        >
          <InputNumber min={1} max={20} onChange={handleSelectInputChange} />
        </Form.Item>
        <Form.Item
          label="???????????????"
          name="price"
          rules={[
            {
              required: true,
              message: `${validationMessages.price.message}`,
            },
          ]}
        >
          <InputNumber
            prefix="???"
            min={10}
            max={1000}
            onChange={handleSelectInputChange}
          />
        </Form.Item>
        <Form.Item label="??????????????????:">
          <Button htmlType="submit" onClick={sendImage}>
            ??????????????????
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default CreateBookingPage;
