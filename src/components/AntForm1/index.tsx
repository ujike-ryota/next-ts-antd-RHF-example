import * as Ant from "antd";
import { useFormContext } from "react-hook-form";
import * as yup from "yup";

export const Form1Validation = {
  name: yup.string().required(),
  gender: yup.string().required(),
  age: yup.number().positive().integer().required(),
};

export const AntForm1 = () => {
  return (
    <Ant.Form>
      <Ant.Form.Item label="名前">
        <Ant.Input />
      </Ant.Form.Item>

      <Ant.Form.Item label="性別">
        <Ant.Radio.Group>
          <Ant.Radio value="male">男</Ant.Radio>
          <Ant.Radio value="female">女</Ant.Radio>
          <Ant.Radio value="other">その他</Ant.Radio>
        </Ant.Radio.Group>
      </Ant.Form.Item>

      <Ant.Form.Item label="生年月日">
        <Ant.DatePicker />
      </Ant.Form.Item>

      <Ant.Form.Item label="年齢">
        <Ant.Input />
      </Ant.Form.Item>
      <Ant.Form.Item label="メールアドレス">
        <Ant.Input />
      </Ant.Form.Item>
    </Ant.Form>
  );
};
