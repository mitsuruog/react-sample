import * as React from "react";

import { Fragments } from "./Fragments";
import { Mouse } from "./RenderProps";
import { ToolBar, ThemeContext } from "./Context";

interface AppState {
  theme: string;
}

export class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      theme: "red",
    };
    this.onChangeTheme = this.onChangeTheme.bind(this);
  }

  render() {
    return (
      <div>
        <Mouse />
        <Fragments />
        <ToolBar />
        <ThemeContext.Provider value={this.state.theme}>
          <ToolBar />
        </ThemeContext.Provider>
        <div>
          <button onClick={() => this.onChangeTheme("yellow")}>to yellow</button>
          <button onClick={() => this.onChangeTheme("green")}>to green</button>
        </div>
      </div>
    )
  }

  private onChangeTheme(theme: string) {
    this.setState({ theme });
  }
}

