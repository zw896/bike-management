import React from 'react';
import { Row, Col } from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import NavLeft from './components/NavLeft';
import './style/common.less'
import Home from './page/home'

export default class Admin extends React.Component {

    render() {
        return (
            <Row  className="container">
                <Col span={3} className="nav-left">
                    <NavLeft />
                </Col>
                <Col span={21} className="main">
                    <Header />
                    <Row className="content">
                        <Home></Home>
                    </Row>

                    <Footer />
                </Col>
            </Row>
        );
    }
}