import React from "react";

type Props = {
  count?: number;
};

interface ParentState {
  count: number;
}

export class ChildClassComponent extends React.Component {
  constructor(props: Props) {
    super(props);
    console.log("Child constructor");
  }

  // !DEPRECATED
  // componentWillMount() {
  //   console.log("Child componentWillMount");
  // }

  componentDidMount() {
    console.log("Child componentDidMount");
  }

  componentDidUpdate() {
    console.log("Child componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Child componentWillUnmount");
  }

  render() {
    console.log("Child render");
    return <div>Child</div>;
  }
}

export class ParentClassComponent extends React.Component<Props, ParentState> {
  constructor(props: Props) {
    super(props);
    this.state = { count: 0 };
    console.log("Parent constructor");
  }

  // !DEPRECATED
  // componentWillMount() {
  //   console.log("Parent componentWillMount");
  // }

  componentDidMount() {
    console.log("Parent componentDidMount");
  }

  componentDidUpdate() {
    console.log("Parent componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Parent componentWillUnmount");
  }

  render() {
    console.log("Parent render");

    return (
      <div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click ({this.state.count})
        </button>
        <ChildClassComponent />
      </div>
    );
  }
}
