import React, { useState } from 'react';

function ListHooks(props) {
//    this.state={custumer:[]}
    const [customers,setData]=useState(  [
        {
          id: 1,
          name: "Scott",
          phone: "123-456",
          address: { city: "New Delhi" },
        },
        {
          id: 2,
          name: "Jones",
          phone: "982-014",
          address: { city: "New Jersy" },
        },
        {
          id: 3,
          name: "Rahul",
          phone: null,
          address: { city: "Delhi" },
        },
        { id: 4, name: "Allen", phone: "889-921", address: { city: "London" } },
        { id: 5, name: "James", phone: "552-901", address: { city: "Berlin" } },
        { id: 6, name: "John", phone: "781-778", address: { city: "New York" } 
      
      },
      ])
    return (
        <div>
            <ul>
                {
                    customers.map(custumer=><li key={custumer.id}>{custumer.name}</li>)
                }
            </ul>
        </div>
    );
}

export default ListHooks;