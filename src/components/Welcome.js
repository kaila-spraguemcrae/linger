import React, {useState} from "react";
import ReactDOM from "react-dom";
import * as THREE from 'three';
import Katsudon from '../Katsudon.json';

// const initialState = {
//   welcome: false
// }

function Welcome(){
  const font = new THREE.FontLoader().parse(Katsudon);

  const textOptions ={
    font, 
    size: 3,
    height: 1,
  }

  return (
    <mesh castShadow position={[-11, 5, -2]}>
      <textGeometry attach='geometry' args={['Welcome to LINGER', textOptions]} />
      <meshStandardMaterial attach='material' color="black"/>
    </mesh>
  );
}

export default Welcome;





//   const [state, setState] = useState(initialState);
//   function handleShow(){
//     setState({welcome: !state.welcome});
//   }
//   console.log(state)
//   if (state.welcome === true) {
//   return (
//     <>
//     <h1>hello</h1>
    
//       <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="false">
//       <div className="modal-dialog">
//         <div className="modal-content">
//           <div className="modal-header">
//             <h5 className="modal-title" id="staticBackdropLabel">Welcome to LINGER</h5>
//             <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//           </div>
//           <div className="modal-body">
//             I hope you stay awhile
//           </div>
//           <div className="modal-footer">
//             <button type="button" className="btn btn-secondary" onClick={handleShow}>Enter</button>
//           </div>
//         </div>
//       </div>
//     </div>
//     </>
//   );
//   } else {
//     return (
//       <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={handleShow}>
//   Launch static backdrop modal
// </button>
//     );
//   }
// }

// export default Welcome;

// // const Modal = ({ children }) => {
// //   const element = document.getElementById("overlay");
// //   if (children) {
// //     element.classList.remove("hidden");
// //     return ReactDOM.createPortal(children, element);
// //   }
// //   element.classList.add("hidden");
// //   return null;
// // };

// // class App extends React.Component {
// //   state = { modalContent: null };
// //   render() {
// //     return (
// //       <div>
// //         <Modal>{this.state.modalContent}</Modal>
// //         <h1>Click the button!</h1>
// //         <div>

// //         </div>
// //         <button
// //           onClick={() =>
// //             this.setState({
// //               modalContent: (
// //                 <div>
// //                   YOLO<br />
// //                   <button
// //                     onClick={() => this.setState({ modalContent: null })}
// //                     type="button"
// //                   >
// //                     ok
// //                   </button>
// //                 </div>
// //               )
// //             })}
// //           type="button"
// //         >
// //           Boom
// //         </button>
// //       </div>
// //     );
// //   }
// // }