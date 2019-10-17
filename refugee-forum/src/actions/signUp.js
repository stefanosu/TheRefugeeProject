// export const userSignUp = user => {
//     return dispatch => {
//         return fetch("http://localhost:3000/api/v1/signup", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "application/json",
//             },
//             body: JSON.stringify({user}) 
//         })
//         .then(resp => resp.json())
//         .then(data => {
//             if(data.message) {

//             }
//             else {
//                 localStorage.setItem("token", data.jwt)
//                 dispatch()
//             }

//         })
//     }
// }