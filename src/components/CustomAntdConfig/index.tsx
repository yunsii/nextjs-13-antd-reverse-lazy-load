import { INJECTED_MESSAGE } from "@/helpers/getAntdMessageApi";
import { useMount } from "ahooks";
import { Button, ConfigProvider } from "antd";
import message from "antd/lib/message";
import React from "react";

export interface ICustomAntdConfigProps {
  children?: React.ReactNode;
}

const CustomAntdConfig: React.FC<ICustomAntdConfigProps> = (props) => {
  const { children } = props;

  const [messageApi, messageHolder] = message.useMessage();

  useMount(() => {
    console.log("Mount CustomAntdConfig");
  });

  useMount(() => {
    window._messageApi = messageApi;
    window.postMessage(INJECTED_MESSAGE);
  });

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#26c570",
        },
      }}
    >
      {children}
      {messageHolder}
      <Button type="primary">Hello</Button>
    </ConfigProvider>
  );
};

export default CustomAntdConfig;
