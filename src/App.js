import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Repositories from './pages/Repositories';
import Sidebar from './views/Sidebar';
import './css/Main.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <section className="github-clone">
          <Container fluid className="github-clone-container">
            <Row className="github-clone-row">
              <Col md={4} className="sidebar px-5">
                <Route exact={true} path="/:username" component={Sidebar}></Route>
              </Col>
              <Col md={8} className="offset-md-4 px-0">
                <Route exact={true} path="/:username" component={Repositories}></Route>
              </Col>
            </Row>
          </Container>
        </section>
      </Router>
    );
  }
}

export default App;
