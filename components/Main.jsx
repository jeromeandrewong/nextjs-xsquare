// import React from "react";

// const Main = () => {
//   return (
//     <div>
//       <div className="hero min-h-screen bg-base-200">
//         <div className="hero-content text-center">
//           <div className="max-w-md">
//             <h1 className="text-6xl font-bold">
//               Hello there, We are <span className="text-primary">XSQUARE</span>
//             </h1>
//             <p className="text-xl py-6">
//               A Singapore-based tuition centre specializing in Mathematics for
//               all students in secondary schools and junior colleges.{" "}
//             </p>
//             {/* Let us help your child overcome their fear of Mathematics </p> */}

//             <button className="btn btn-primary btn-lg">I'M INTERESTED</button>
//           </div>
//         </div>
//       </div>
//     </div>

//   );
// };

// export default Main;

import teachingImg from "../public/assets/educator.png";
import Typed from "react-typed";
const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Example() {
  return (
    <div className="hero relative bg-base-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-base-100 sm:pb-16 md:pb-20 lg:max-w-3xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <p className="block xl:inline">
                  A Tuition centre to enrich your child's{" "}
                </p>{" "}
                <span className="block text-primary ">
                  <Typed
                    strings={[
                      "Critical Thinking Skills",
                      "Problem Solving Skills",
                      "Application of Concepts",
                    ]}
                    typeSpeed={50}
                    backSpeed={25}
                    loop
                  />
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mt-5 lg:justify-center">
                We are a Singapore-based tuition centre specializing in
                Mathematics for all students in secondary schools and junior
                colleges. Let us help your child overcome their fear of
                Mathematics
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-focus md:py-4 md:text-lg md:px-10"
                  >
                    Register Now
                  </a>
                </div>

                {/* <div className="mt-3 sm:mt-0 sm:ml-3">
                   <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-base-200 hover:bg-secondary-focus md:py-4 md:text-lg md:px-10"
                  >
                    Live demo
                  </a> 
                </div> */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
