import React from 'react'
import { Row,Col } from "antd"
import './index.less'


export default class Header extends React.Component {
    state={}
    componentWillMount(){
        this.setState({
            userName:'Billy'
        })
    }

    render(){
        // const { menuName, menuType } = this.props;
        return (
            <div className="header">
                <Row className="header-top">

                    <Col span="6" className="logo">
                        <img src="/assets/logo-ant.svg" alt=""/>
                        <span>Bike Management System</span>
                    </Col>
                    
                    <Col>
                        <span>欢迎，{this.state.userName}</span>
                        <a href="#">Log out</a>
                    </Col>
                </Row>
                    <Row className="breadcrumb">
                        <Col span="4" className="breadcrumb-title">
                            Home
                        </Col>
                        <Col span="20" className="weather">
                            <span className="date">date</span>
                            <span className="weather-img">
                            </span>
                            <span className="weather-detail">
                                weather
                            </span>
                        </Col>
                    </Row>
                
            </div>
        );
    }
}