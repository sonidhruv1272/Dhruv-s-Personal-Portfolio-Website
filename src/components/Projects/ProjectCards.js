import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {props.imgPath && (
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt={props.title}
        />
      )}

      <Card.Body>
        <Card.Title>{props.title}</Card.Title>

        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {props.ghLink && (
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i> &nbsp;
            GitHub
          </Button>
        )}

        {" "}

        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-external-link-alt"></i> &nbsp;
            Live Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
