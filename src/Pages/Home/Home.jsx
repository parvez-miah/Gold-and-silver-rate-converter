import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import styled from "styled-components";
import { FaDollarSign, FaCoins, FaWeight } from "react-icons/fa"; // React Icons
import { motion } from "framer-motion";
import { Card, Col, Container, Row } from "react-bootstrap";

// Styled components for a modern look
const ConverterIcon = styled.div`
  font-size: 50px;
  color: #f0ad4e;
  margin-bottom: 15px;
`;

const ConverterCard = styled(Card)`
  height: 100%;
  border: none;
  background: linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 20px 25px rgba(0, 0, 0, 0.2);
  }
`;

const converters = [
  { id: 1, name: "Gold Converter", icon: <FaDollarSign />, route: "/gold" },
  { id: 2, name: "Silver Converter", icon: <FaCoins />, route: "/silver" },
  { id: 3, name: "Weight Converter", icon: <FaWeight />, route: "/weight" },
  // Add more converter options here
];

const Home = () => {
  return (
    <Container className="my-5">
      <Row>
        {converters.map((converter) => (
          <Col key={converter.id} sm={12} md={6} lg={4} className="mb-4">
            <Link to={converter.route} style={{ textDecoration: "none" }}>
              {" "}
              {/* Wrap card with Link */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ConverterCard className="text-center">
                  <Card.Body>
                    <ConverterIcon>{converter.icon}</ConverterIcon>
                    <Card.Title>{converter.name}</Card.Title>
                  </Card.Body>
                </ConverterCard>
              </motion.div>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
