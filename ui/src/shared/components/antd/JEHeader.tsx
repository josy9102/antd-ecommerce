import { ConfigProvider, Layout as AntLayout } from "antd";
import { useSelector } from "react-redux";
import { ThemeState } from "../../../layout/reducers/themeState";
import lightTheme from "../../../config/themes/lightTheme";
import darkTheme from "../../../config/themes/darkTheme";

const JEHeader = (props: any) => {
  const { Header } = AntLayout;

  const currentTheme = useSelector(
    (state: ThemeState) => state.themeState.theme
  );

  const defaultTheme: boolean = currentTheme === "light";

  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            colorBgHeader: defaultTheme
              ? lightTheme.appPrimary
              : darkTheme.appPrimary,
          },
        },
      }}
    >
      <Header {...props}>{props.children}</Header>
    </ConfigProvider>
  );
};

export default JEHeader;
