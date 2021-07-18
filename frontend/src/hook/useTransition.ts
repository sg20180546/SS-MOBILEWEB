// // import "./styles.css";
import { mainColor, Gray } from "../assets/styles/element";
// import { useState, useRef, useEffect } from "react";

// export default function useTransition = () => {
//     //   if (typeof duration !== "number" || typeof delay !== "number") return;
//     const element = useRef<HTMLSpanElement>(null);

//     useEffect(() => {
//         if (element.current) {
//             const { current } = element;
//             current.style.color = mainColor
//             current.style.transition = `color 3s ease-in-out`;
//             // current.style.color = Gray
//         }
//     }, []);

//     return element;
// };


// export default function App() {
//   const fadeinH1 = useFadein((duration = 5), (delay = 1));
//   const fadeinH2 = useFadein((duration = 10), (delay = 1));
//   return (
//     <div className="App">
//       <h1 {...fadeinH1}>HELLO</h1>
//       <h2 {...fadeinH2}>SLOWLY</h2>
//     </div>
//   );
// }