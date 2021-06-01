import React, { Component } from 'react';

export class GetDataFromApi extends Component {
    render() {
        return (
            this.props.apiData.map((ele, ind) => {
                return (
                    <div key={ind}>
                        <h3>{ele.name}</h3>
                        <h3>{ele.gender}</h3>
                        <h3>{ele.img}</h3>
                        <h3>{ele.psiPowers}</h3>

                        <button onClick={e => this.props.favourite(ele)}>Add to Favourite</button>
                    </div>
                );
            })


        )
    }
}
export default GetDataFromApi
