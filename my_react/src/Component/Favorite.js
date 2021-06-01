import React, { Component } from 'react'
import axios from "axios";

export class Favorite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            crudData: [],
            url: process.env.REACT_APP_SERVER,
            msg: '',
            showTheMsg: false,
            slug: '',
            name: '',
            showForm: false
        }
    }

    componentDidMount = async () => {
        const reqRead = await axios.get(`${this.state.url}/favorite`);

        this.setState({
            crudData: reqRead.data
        })
    };

    delete = async (slug) => {
        const reqDelete = await axios.delete(`${this.state.url}/favorite/:${slug}`);
        this.setState({
            crudData: reqDelete.data
        })
    }


    updateName = (e) => {

        this.setState({
            name: e.target.value
        })
    }

    showForm = (name, slug) => {
        this.setState({
            name: name,
            slug: slug,
            showForm: true
        })
    }

    updateForm = async (e) => {
        e.preventDefault();
        const reqUpdate = await axios.put(`${this.state.url}/favorite/:${this.state.slug}`, { name: this.state.name });
        this.setState({
            crudData: reqUpdate.data
        })
    }



    render() {
        return (
            <div>
                <this.updateForm updateName={this.updateName} showForm={this.showForm} crudData={this.state.crudData} delete={this.delete} />

            </div>
        )
    }
}

export default Favorite
