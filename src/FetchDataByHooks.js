// import React, { useEffect, useState } from 'react';
// import axios from 'axios'
// function FetchDataByHooks(props) {
//     //posts=[]
//     const[posts,setPosts]=useState([])
//     // component did Mount
//     useEffect(()=>{
//         axios.get('https://jsonplaceholder.typicode.com/posts').
//         then(res=>{
       
//             setPosts(res.data)
//             console.log("posts",posts)
//         }).catch(error=>{
//             console.log("error",error)
//         })
           
           
//     })
//     return (
//         <div>
//             <ul>
//                 <li>
//                    {
//                        posts.map(post=>{
//                            post.title
//                        })
//                    }
//                 </li>
//             </ul>
//         </div>
//     );
// }

// export default FetchDataByHooks;