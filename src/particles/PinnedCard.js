import React from "react";
import { Card } from "react-bootstrap";

function PinnedCard(props) {
    return(
        <div className="pinned-card">
            <Card>
                <Card.Body>
                    <Card.Title><i className="fas fa-book"></i> {props.title}</Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    <ul className="card-meta">
                        <li className="card-meta-item"><i className="far fa-file-code"></i> {props.language}</li>
                        <li className="card-meta-item"><i className="far fa-star"></i> {props.stars}</li>
                        <li className="card-meta-item"><i className="fas fa-code-branch"></i> {props.members}</li>
                        <li className="card-meta-item"><i className="fas fa-exclamation-triangle"></i> {props.issues}</li>
                    </ul>
                </Card.Body>
            </Card>
        </div>
    );
}

export default PinnedCard;