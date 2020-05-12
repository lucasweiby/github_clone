import React, { Component, Fragment } from 'react';
import { Row, Col, Image, Nav, Badge } from "react-bootstrap";
import axios from 'axios';
import logo from "../assets/imgs/logo.svg"
import '../css/Main.scss';

const api = {
  baseUrl: "https://api.github.com",
  client_id: "f8fb726b394b085b5fbd",
  client_secret: "6414b42a4cce93b6275dbc02def7d1a48ed2be12"
}

class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
        cloneData2: [],
        members: []
    }
  }

  componentDidMount() {
    const { match: { params } } = this.props;

    axios
        .get(
            api.baseUrl+`/users/${params.username}`
        ).then((res) => {
            this.setState({cloneData2: res.data});
        })

    axios
        .get(
            api.baseUrl+`/orgs/${params.username}/members?page=1&per_page=50`
        ).then((res) => {
            this.setState({members: res.data})
        })
    }

    render() {
        const { cloneData2, members } = this.state;
        var count = 0;

        members.map((member) => (
            count++
        ))

        return (
            <Fragment>
                <Row className="mb-5">
                    <Col>
                        <Image src={logo} className="github-clone-logo"></Image>
                    </Col>
                </Row>
                <Row className="align-items-center mb-5">
                    <Col md={5}>
                        <Image src={cloneData2.avatar_url} fluid roundedCircle className="sidebar-pic"></Image>
                    </Col>
                    <Col md={7}>
                        <h3 className="sidebar-name">{cloneData2.name}</h3>
                        <ul className="sidebar-meta">
                            <li className="sidebar-meta-item">
                                <a href="#0" className="sidebar-meta-link">
                                    <i className="fas fa-map-marker-alt"></i> {cloneData2.location}
                                </a>
                            </li>
                            <li className="sidebar-meta-item">
                                <a href={cloneData2.blog} target="_blank" rel="noopener noreferrer" className="sidebar-meta-link">
                                    <i className="fas fa-globe-americas"></i> {cloneData2.blog}
                                </a>
                            </li>
                            <li className="sidebar-meta-item">
                                <a href={`mailto:${cloneData2.email}`} className="sidebar-meta-link">
                                    <i className="fas fa-envelope"></i> {cloneData2.email}
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>

                <Row>
                    <Col lg md sm xs={12} className="sidebar-menu">
                        <Nav defaultActiveKey="/camunda" className="flex-column sidebar-nav">
                            <Nav.Link href="/camunda">
                                <i className="fas fa-book"></i> Repositórios <Badge variant="light">{cloneData2.public_repos}</Badge>
                            </Nav.Link>
                            <Nav.Link eventKey="link-1">
                                <i className="fas fa-archive"></i> Pacotes
                            </Nav.Link>
                            <Nav.Link eventKey="link-2">
                                <i className="fas fa-user"></i> Pessoas <Badge variant="light">{ count }</Badge>
                            </Nav.Link>
                            <Nav.Link eventKey="link-3">
                                <i className="fas fa-clipboard"></i> Projetos
                            </Nav.Link>
                        </Nav>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

export default Sidebar;
