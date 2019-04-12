import React from 'react'
import { Row, Col } from 'antd'
import './index.less'
import Util from '../../utils/utils'
import axios from '../../axios/index'

export default class Header extends React.Component {
    state = {}
    componentWillMount() {
        this.setState({
            userName: 'Billy',
            currentTime: ''
        })
        setInterval(() => {
            let currentTime = Util.formateDate(new Date().getTime());
            this.setState({
                currentTime
            })
        }, 1000)
        this.getWeatherAPIData();
    }
    getWeatherAPIData() {
        let city = 'Sydney';
        axios.jsonp({
            url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=1ee6fc92a67e18ec486e88a0f517cd52'
        }).then((res) => {
            let data = res.main.temp + '°C';
            this.setState({
                weather: data
            })
        }).catch((err) => {
            console.log(err)
        })
    }
    render() {
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span={24}>
                        <span>Welcome, {this.state.userName}</span>
                        <a href="#">Logout</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span={4} className="breadcrumb-title">
                        Home Page
                    </Col>
                    <Col span={20} className="weather">
                        <span className="date">{this.state.currentTime}</span>
                        <span className="weather-detail">{this.state.weather}</span>
                    </Col>
                </Row>
            </div>
        );
    }
}