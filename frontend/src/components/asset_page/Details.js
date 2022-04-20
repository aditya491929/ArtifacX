import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Details.module.css';
import Summary from './Summary';
import Main from './Main';
import History from './History';

const Details = () => {
  return (
    <div className={styles.contentContainer}>
        <Container>
            <Row>
                <Col lg={5} className={styles.summary}>
                    <Summary />
                </Col>
                <Col lg={7} className={styles.main}>
                    <Main />
                </Col>
            </Row>
            <Row>
                <History />
            </Row>
        </Container>

    </div>
  )
}

export default Details;