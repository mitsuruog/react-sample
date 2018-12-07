import * as React from "react";

interface CatProps {
  mouse: MouseTrackerState;
}

const Cat = ({ mouse }: CatProps) => {
  return (
    <React.Fragment>
      <p>The mouse position is {mouse.x}, {mouse.y}.</p>
      <img src={"../assets/images/github-logo.png"} style={{ position: "absolute", top: mouse.y, left: mouse.x}} />
    </React.Fragment>
  );
};

interface MouseTrackerProps {
  render: (mouse: MouseTrackerState) => React.ReactNode;
}

interface MouseTrackerState {
  x: number,
  y: number,
}

class MouseTracker extends React.Component<MouseTrackerProps, MouseTrackerState> {
  constructor(props: MouseTrackerProps) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
    };
    this.onMouseMove = this.onMouseMove.bind(this);
  }

  render() {
    return (
      <div
        style={{ height: 200, width: 720, background: "#f5f5f5" }}
        onMouseMove={this.onMouseMove}
      >
        {this.props.render(this.state)}
      </div>
    );
  }

  private onMouseMove(e: React.MouseEvent) {
    this.setState({ x: e.clientX, y: e.clientY });
  }
}

export const Mouse = () => {
  return (
    <div>
      <h1>Move the mouse around!</h1>
      <MouseTracker render={(mouse) => (
        <Cat mouse={mouse} />
      )} />
    </div>
  );
};
