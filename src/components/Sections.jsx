import React from "react";
import AvailablePlayers from "./available-section/AvailablePlayers";
import SelectedPlayers from "./selected-section/SelectedPlayers";
import TeamBudget from "./team-budget/TeamBudget";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Sections = () => {
  return (
    <Container style={{ paddingTop: "10px" }}>
      <Row>
        <Col xs={4}>
          <AvailablePlayers />
        </Col>
        <Col xs={4}>
          <SelectedPlayers />
        </Col>
        <Col xs={4}>
          <TeamBudget />{" "}
        </Col>
      </Row>
    </Container>
  );
};

export default Sections;
