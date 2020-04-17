import React from 'react';
import './App.scss';
import HamburgerLayout from './layout/HamburgerLayout/HamburgerLayout';
import FeedBackFrom from './components/forms/feedback/FeedBackForm';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { RouteObject } from './interfaces/routerObject.interface';
import HomePage from './pages/HomePage/Home';
import WeatherPage from './pages/WeatherPage/WeatherPage';

const Notfound = () => <h1>Not found</h1>
const routes: RouteObject[] = [
  {
    name: "Weather", path: "/weather", component: WeatherPage, exact: true
  },
  {
    name: "Form", path: "/form", component: FeedBackFrom, exact: true
  },
  {
    name: "Home", path: "/", component: HomePage, exact: true
  },
  {
    name: "About", path: "/about", component: () => <h1>About</h1>, exact: true
  },
  {
    name: "Contact", path: "/contact", component: () => <h1>Contact</h1>, exact: true
  }
]
class CursorDot {

  public params = {
    zIndex: 1,
    diameter: 80,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,.38)',
    easing: 1,
    background: 'blue',
    tim: 1 / 15
  };
  public style: any;
  constructor(params = {
    zIndex: 1,
    diameter: 80,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,.38)',
    easing: 1,
    background: 'blue',
    tim: 1 / 15
  }) {
    this.params = params;
    this.style = {
      position: "fixed",
      top: 0,
      left: 0,
      borderRadius: "100%",
      pointerEvents: "none",
      opacity: "1",
      zIndex: this.params.zIndex,
      height: `${this.params.diameter}px`,
      width: `${this.params.diameter}px`,
      background: `${this.params.background}`,
      border: `${this.params.borderWidth}px solid ${this.params.borderColor}`,
      mixBlendMode: 'exclusion',
      transition: `background ${this.params.tim}s,border ${this.params.tim}s`,
      willChange: 'transform'
    };
  }

}
class App extends React.Component<any, any> {

  cursorDot: { params: any, style: any } = new CursorDot();
  cursor: any = React.createRef();
  animationFrame: number = 0;
  constructor(props: any) {
    super(props);
    this.state = {
      mouseX: 0,
      mouseY: 0,
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
  routes = routes;

  render = () => {
    return (
      <Router>
        <div className="container">
          <div
            // style={this.cursorDot.style}
            ref={this.cursor}
          />
          <HamburgerLayout routes={this.routes}>
            <Switch>
              {this.routes.map(route =>
                <Route key={route.name} exact={route.exact} path={route.path} component={route.component} />
              )}
              <Route component={Notfound} />
            </Switch>
          </HamburgerLayout>
        </div>
      </Router>
    );
  };
}

export default App;
