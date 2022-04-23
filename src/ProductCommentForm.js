import React, { Component } from 'react'

export default class ProductCommentForm extends Component {

    constructor(props){
       
        super(props)
        this.state={userName:'',comment:'',product:''}
    }
    changeValueUserName=(event)=>{
         console.log("event.target.value",event.target.value)
        this.setState({userName:event.target.value})
  
    }
    changeValueCommentName=(event)=>{
        console.log("event.target.value",event.target.value)
       this.setState({comment:event.target.value})
 
   }
   changeValueProductName=(event)=>{
    console.log("event.target.value",event.target.value)
   this.setState({product:event.target.value})

}
submitData=(event)=>{

   console.log("username",this.state.userName)
   console.log("username",this.state.comment)
   console.log("username",this.state.product)
   event.preventDefault()
}
  render() {
    return (
      <div>Submit FeedBack

          <form onSubmit={this.submitData}>
              <label>Enter User Name</label>
              <input type='text' onChange={this.changeValueUserName} value={this.state.userName}/>
              <div>
              <label>Comments</label>
              <textarea value={this.state.comment} onChange={this.changeValueCommentName}></textarea>
          </div>
          <div>
              <label>Product</label>
              <select value={this.state.product} onChange={this.changeValueProductName}>
                  <option value="addidas">Addidas</option>
                  <option value="puma">Puma</option>
                  <option value="nike">Nike</option>
                  <option value="nike">RedTap</option>
                  <option value="nike">Bata</option>
              </select>
          </div>
          <button type='submit'>Submit</button>
          </form>
      </div>
    )
  }
}
