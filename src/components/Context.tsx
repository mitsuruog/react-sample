import * as React from "react";

export const ThemeContext = React.createContext("gray");

export const ToolBar = () => {
  return (
    <ThemedButton title={"button"} />
  )
};

interface ThemedButtonProps {
  title: string;
}

class ThemedButton extends React.Component<ThemedButtonProps, {}> {
  render() {
    return (
      <ThemeContext.Consumer>
        {(value) => (
          <button style={{ background: value }}>{this.props.title}</button>
        )}
      </ThemeContext.Consumer>
    )
  }
}
