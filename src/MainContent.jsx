// import React, { Component } from "react";

// export default class MainContent extends Component {
//   state = {
//     pageTitle: "Customers",
//     customersCount: 5,
//     customers: [
//       {
//         id: 1,
//         name: "Scott",
//         phone: "123-456",
//         address: { city: "New Delhi" },
//       },
//       {
//         id: 2,
//         name: "Jones",
//         phone: "982-014",
//         address: { city: "New Jersy" },
//       },
//       {
//         id: 3,
//         name: "Rahul",
//         phone: null,
//         address: { city: "Delhi" },
//       },
//       { id: 4, name: "Allen", phone: "889-921", address: { city: "London" } },
//       { id: 5, name: "James", phone: "552-901", address: { city: "Berlin" } },
//       { id: 6, name: "John", phone: "781-778", address: { city: "New York" } 
    
//     },
//     ],
//   };

//   render() {
//     // updateData(){


//     // }
//     return (
//       <div>
//         <h4 className="border-bottom m-1 p-1">
//           {this.state.pageTitle}

//           <span className="badge badge-secondary m-2">
//             {this.state.customersCount}
//           </span>

//           <button className="btn btn-info" onClick={this.onRefreshClick}>
//             Refresh
//           </button>
//         </h4>

//         <table className="table">
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Customer Name</th>
//               <th>Phone</th>
//               <th>City</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.state.customers.map((cust) => {
//               return (
//                 <tr key={cust.id}>
//                   <td><input type="text" placeholder=""></input>
//                   <button onClick={updateData}>update</button>{cust.id}</td>
//                   <td>{cust.name}</td>
//                   <td>{cust.phone==null?"No Phone Found":cust.phone}</td>
//                   <td>{cust.address.city}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     );
//   }

//   //Executes when the user clicks on Refresh button
//   onRefreshClick = () => {
//     this.setState({ customersCount: 7 });
//   };
// }
