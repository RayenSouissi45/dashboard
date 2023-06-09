// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import { signIn } from '../api/auth';

// function SignIn() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const history = useHistory();

//   const handleSignIn = async () => {
//     try {
//       // call your sign-in function and wait for it to complete
//       const result = await signIn(email, password);

//       // if the sign-in was successful, redirect to the dashboard page
//       if (result.success) {
//         history.push('/dashboard');
//       } else {
//         // handle sign-in errors
//       }
//     } catch (error) {
//       // handle error
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//             Email
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="email"
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="mb-6">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//             Password
//           </label>
//           <input
//             className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
//             id="password"
//             type="password"
//             placeholder="**********"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <div className="flex items-center justify-between">
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             type="button"
//             onClick={handleSignIn}
//           >
//             Sign In
//           </button>
//           <a
//             className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
//             href="#"
//           >
//             Forgot Password?
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignIn;
