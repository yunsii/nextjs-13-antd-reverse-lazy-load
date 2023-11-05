import { MessageInstance } from "antd/es/message/interface";

export const INJECT_MESSAGE = "inject-antd-message-api";
export const INJECTED_MESSAGE = "injected-antd-message-api";

export const getAntdMessageApi = async () => {
  if (window._messageApi) {
    return window._messageApi;
  }
  window.postMessage(INJECT_MESSAGE);

  return new Promise<MessageInstance>((resolve) => {
    window.addEventListener("message", (event) => {
      if (event.data === INJECTED_MESSAGE) {
        getAntdMessageApi().then((messageApi) => {
          resolve(messageApi);
        });
      }
    });
  });
};
