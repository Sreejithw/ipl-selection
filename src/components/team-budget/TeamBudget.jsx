import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";

const TeamBudget = () => {
  const state = useSelector((state) => state);

  const usedBudget = state.lists.selectedPlayers.reduce(
    (acc, player) => acc + player.value,
    0
  );
  const remainingBudget = state.totalBudget - usedBudget;
  return (
    <Container
      style={{ border: "2px solid #ccc", height: "600px", overflow: "auto" }}
    >
      <Card style={{ width: "18rem", margin: "0 auto", marginTop: "10px" }}>
        <Card.Body>
          <Card.Title>TeamBudget</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Total Budget: {state.totalBudget}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            Used Budget: {usedBudget}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            Remaining Budget: {remainingBudget}
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default TeamBudget;
