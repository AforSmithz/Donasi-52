import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

const Layout = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
