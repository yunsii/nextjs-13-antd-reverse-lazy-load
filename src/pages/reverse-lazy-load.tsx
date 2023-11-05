import DynamicAntdConfig from "@/components/CustomAntdConfig/dynamic";
import { INJECT_MESSAGE, getAntdMessageApi } from "@/helpers/getAntdMessageApi";
import { useMount } from "ahooks";
import { useState } from "react";

export default function Page() {
  const [useAntdConfig, setUseAntdConfig] = useState(false);
  console.log("useAntdConfig", useAntdConfig);

  useMount(() => {
    window.addEventListener("message", (event) => {
      if (event.data === INJECT_MESSAGE) {
        setUseAntdConfig(true);
      }
    });
  });

  const children = (
    <div>
      Reverse lazy load by&nbsp;
      <button
        onClick={async () => {
          const message = await getAntdMessageApi();
          message?.info("hello");
        }}
      >
        click
      </button>
    </div>
  );

  if (useAntdConfig) {
    return (
      <>
        {children}
        <DynamicAntdConfig />
      </>
    );
  }
  return children;
}
