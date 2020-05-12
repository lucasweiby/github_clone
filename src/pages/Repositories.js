import React, { Component } from "react";
import { Container, Row, Col, Image, Badge } from "react-bootstrap";
import axios from 'axios';
import PinnedCard from "../particles/PinnedCard";

const api = {
    baseUrl: "https://api.github.com",
    client_id: "f8fb726b394b085b5fbd",
    client_secret: "6414b42a4cce93b6275dbc02def7d1a48ed2be12"
}

class Repositories extends Component {
    constructor() {
        super();
        this.state = {
            cloneData: [],
            members: []
        }
    }

    componentDidMount() {
        const { match: { params } } = this.props;

        axios
            .get(
                api.baseUrl+`/users/${params.username}/repos?page=1&per_page=114`
            ).then((res) => {
                this.setState({cloneData: res.data});
            })

        axios
            .get(
                api.baseUrl+`/orgs/${params.username}/members?page=1&per_page=50`
            ).then((res) => {
                this.setState({members: res.data});
            })
    }

    render() {
        const { cloneData, members } = this.state;
        var count = 0;

        members.map((o) => (
            count++
        ))

        return(
            <section className="repositories">
                <Container>
                    <Row>
                        <Col>
                            <h1 className="repositories-title">Repositórios</h1>
                        </Col>
                    </Row>
    
                    <Row>
                        <Col md={8}>
                            <h5 className="repositories-subtitle">Todos os repositórios <Badge variant="light">{ cloneData.length }</Badge></h5>
                            {
                                cloneData.map((item) => (
                                    <PinnedCard
                                        title={item.name}                                        
                                        description={item.description == null ? " " : item.description}
                                        language={item.language == null ? "None" : item.language}
                                        stars={item.stargazers_count}
                                        members={item.forks_count}
                                        issues={item.open_issues_count}
                                    />
                                ))
                            }
                        </Col>
                        <Col md={4}>
                            <h5 className="repositories-subtitle">Pessoas <Badge variant="light">{ count }</Badge></h5>
                            <ul className="repositories-people">
                                {
                                    members.map((member) => (
                                        <li className="repositories-people-item">
                                            <a href={member.html_url} targe="_blank">
                                                <Image src={member.avatar_url} rounded></Image>
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Repositories;