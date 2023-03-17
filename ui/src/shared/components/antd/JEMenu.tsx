import { ConfigProvider, Menu as AntMenu } from "antd";
import { useSelector } from "react-redux";
import { ThemeState } from "../../../layout/reducers/themeState";
import lightTheme from "../../../config/themes/lightTheme";
import darkTheme from "../../../config/themes/darkTheme";

const JEHeader = (props: any) => {
  const currentTheme = useSelector(
    (state: ThemeState) => state.themeState.theme
  );

  const defaultTheme: boolean = currentTheme === "light";

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            colorItemBg: defaultTheme ? lightTheme.appPrimary : darkTheme.appPrimary,
          },
        },
      }}
    >
      <AntMenu {...props}>{props.children}</AntMenu>
    </ConfigProvider>
  );
};

export default JEHeader;
