import React from 'react';
import './App.scss';

import HamburgerLayout from './components/HamburgerLayout/HamburgerLayout';

class App extends React.Component<any, any> {

  cursorDot: { params: any, style: any } = {
    params: {
      zIndex: 1,
      diameter: 80,
      borderWidth: 1,
      borderColor: 'rgba(255,255,255,.38)',
      easing: 1,
      background: 'blue',
      tim: 1 / 15
    },
    style: null,
  };
  cursor: any = React.createRef();
  animationFrame: number = 0;
  constructor(props: any) {
    super(props);
    this.state = {
      mouseX: 0,
      mouseY: 0,
    };
    this.cursorDot.style = {
      position: "fixed",
      top: 0,
      left: 0,
      borderRadius: "100%",
      pointerEvents: "none",
      opacity: "1",
      zIndex: this.cursorDot.params.zIndex,
      height: `${this.cursorDot.params.diameter}px`,
      width: `${this.cursorDot.params.diameter}px`,
      background: `${this.cursorDot.params.background}`,
      border: `${this.cursorDot.params.borderWidth}px solid ${this.cursorDot.params.borderColor}`,
      mixBlendMode: 'exclusion',
      transition: `background ${this.cursorDot.params.tim}s,border ${this.cursorDot.params.tim}s`,
      willChange: 'transform'
    };
  }

  componentDidMount() {
    document.addEventListener('mousemove', this.onMouseMove);
    this.moveCursor();
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.onMouseMove)
    cancelAnimationFrame(this.animationFrame);
  }

  onMouseMove = (e: { clientX: any; clientY: any; }) => {
    const { clientX, clientY } = e;
    this.setState({
      mouseX: clientX,
      mouseY: clientY,
    });
  }

  moveCursor = () => {
    const { mouseX, mouseY } = this.state;
    //  Number in expression is coeficient of the delay. 10 for example. You can play with it. 
    // Using refs and transform for better performance.
    this.cursor.current.style.transform =
      `translate3d(` +
      `${mouseX - this.cursorDot.params.diameter / 2}px,` +
      `${mouseY - this.cursorDot.params.diameter / 2}px,` +
      `0)`;
    this.animationFrame = requestAnimationFrame(this.moveCursor);
  }
  render = () => {
    return (
      <div className="container">
        <div
          style={this.cursorDot.style}
          ref={this.cursor}
        />
        <HamburgerLayout />
        {/* <div style={{ height: '300px', width: '400px', backgroundColor: "red" }}></div>
        <div style={{ height: '300px', width: '400px', backgroundColor: "yellow" }}></div> */}
      </div>
    );
  };
}

export default App;
