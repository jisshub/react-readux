import React, { Component } from 'react'

export default class AddMobile extends Component {
    state={
            brand: null,
            model: null,
            price: null
        }
        handleInput = (e) => {
            this.setState({[e.target.id]: e.target.value});
        }
        addMobile = (e) => {
            e.preventDefault();
            console.log(this.state);
        }
    render() {
        return (
            <div>
                <form onSubmit={this.addMobile}>
                    <label htmlFor="brand">Brand: </label>
                    <input type="text" name="brand" id="brand" onChange={this.handleInput}/>
                    <label htmlFor="model">Model: </label>
                    <input type="text" name='model' id='model' onChange={this.handleInput}/>
                    <label htmlFor="price">Price: </label>
                    <input type="text" name='price' id='price' onChange={this.handleInput}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
