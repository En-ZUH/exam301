import React, { Component } from 'react'
import GetDataFromApi from './GetDataFromApi';
import axios from 'axios';
export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiData: [],
            url: process.env.REACT_APP_SERVER,
            msg: '',
            showTheMsg: false
        }
    }

    componentDidMount = async () => {
        const reqApi = await axios.get(`${this.state.url}/characters`);

        this.setState({
            apiData: reqApi.data
        })
    };


    favourite = async (obj) => {
        const reqAdd = await axios.post(`${this.state.url}/favorite`, obj);
        this.setState({
            msg: reqAdd.data,
            showTheMsg: true
        })
    }


    render() {
        return (
            <div>
                <h5> Hello home</h5>

                <GetDataFromApi apiData={this.state.apiData} favourite={this.favourite} />
            </div>
        )
    }
}
export default Home;
