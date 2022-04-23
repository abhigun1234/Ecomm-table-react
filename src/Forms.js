import { event } from 'jquery'
import React, { Component } from 'react'

export default class Forms extends Component {
    constructor(props){
    super(props)
    this.state={
        username:'',
        comments:'',
        product:'addidas'
    }
    }
    handleProdData=(event)=>{
        this.setState({username:event.target.value})

    }
    handleCommentsData=(event)=>{
        this.setState({comments:event.target.value})
    }
    handleProductData=(event)=>{
        this.setState({product:event.target.value})
    }
    submitData=(event)=>{

        console.log("username",this.state.username)
        console.log("comments",this.state.comments)
        console.log("product",this.state.product)
        event.preventDefault()
    }
  render() {
    return (
      <div>
          <form onSubmit={this.submitData}>
          <input onChange={this.handleProdData} type="text" placeholder='Enter Product name' value={this.state.username}></input>
          <div>
              <label>Comments</label>
              <textarea value={this.state.comments} onChange={this.handleCommentsData}></textarea>
          </div>
          <div>
              <label>Product</label>
              <select value={this.state.product} onChange={this.handleProductData}>
                  <option value="addidas">Addidas</option>
                  <option value="puma">Puma</option>
                  <option value="nike">Nike</option>
              </select>
          </div>
          <button type='submit'>Submit</button>
          </form>
      </div>
    )
  }
}
