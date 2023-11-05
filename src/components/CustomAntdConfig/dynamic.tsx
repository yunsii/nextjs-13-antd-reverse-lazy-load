import dynamic from "next/dynamic";

const DynamicAntdConfig = dynamic(() => {
  return import("./index");
});

export default DynamicAntdConfig;
