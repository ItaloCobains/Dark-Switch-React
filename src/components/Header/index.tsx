import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { shade } from "polished";

import { Container } from "./styles";

interface Props {
  toogledTheme(): void;
}

const Header: React.FC<Props> = ({ toogledTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      Hello World
      <Switch
        onChange={toogledTheme}
        checked={title === "dark"}
        checkedIcon={true}
        uncheckedIcon={true}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, colors.primary)}
        onColor={colors.secundary}
      />
    </Container>
  );
};

export default Header;
