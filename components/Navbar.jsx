// import { React, Fragment } from "react";

// const Navbar = () => {
//   return (
//     <div>
//       <div className="navbar bg-base-100">
//         <div className="navbar-start">
//           <div className="dropdown">
//             <label tabIndex="0" className="btn btn-ghost lg:hidden">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />
//               </svg>
//             </label>
//             <ul
//               tabindex="0"
//               className="menu menu-compact dropdown-content mt-4 p-2 shadow bg-base-100 rounded-box w-52"
//             >
//               <li>
//                 <a href="/">Home</a>
//               </li>
//               <li>
//                 <a href="/about">About</a>
//               </li>
//               <li>
//                 <a href="/contact">Contact</a>
//               </li>
//               <li>
//                 <a href="/register">Register</a>
//               </li>
//             </ul>
//           </div>
//           <a className="btn btn-ghost normal-case text-xl" href="/">
//             Xsquare Math Specialist
//           </a>
//         </div>
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal p-0">
//             <li>
//               <a href="/">Home</a>
//             </li>
//             <li>
//               <a href="/about">About</a>
//             </li>
//             <li>
//               <a href="/contact">Contact</a>
//             </li>
//             <li>
//               <a href="/register">Register</a>
//             </li>
//           </ul>
//         </div>
//         <div className="navbar-end">
//           <a className="btn">Get started</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Image, Avatar } from "@chakra-ui/react";

const solutions = [
  {
    name: "School Curriculum Classes",
    description: "Weekly classes following curriculum for a particular school",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Heterogeneous Curriculum Classes",
    description:
      "Weekly Classes are planned and taught according to the centre’s flow of sequence, pitched at and above O Level / generic IP school standard ",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Hybrid Curriculum Classes",
    description:
      "In these classes, students come from different levels of same/or different schools",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Customised Classes",
    description:
      "These classes are held during school holidays. Lessons are planned according to the request of the students.",
    href: "#",
    icon: CursorClickIcon,
  },
  {
    name: "Consultation Sessions",
    description:
      "These are 1-1 sessions which are conducted to address students' area for development. It is specific to each students' needs.",
    href: "#",
    icon: ShieldCheckIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  return (
    <div>
      <Popover className="relative bg-base-100">
        <div className="max-w-full mx-auto px-4 sm:px-6 ">
          <div className="flex justify-between items-center border-b-2 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="/" className="btn btn-ghost normal-case text-xl">
                XSQUARE
                {/* <Avatar src="assets/logo.png" /> */}
                {/* <Image boxSize="50px" src="assets/logo.png" alt="Dan Abramov" /> */}
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-base-100 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-base-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#5c7f67]">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-900" : "text-gray-500",
                        "group bg-base-100 rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 "
                      )}
                    >
                      <span>Classes</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-2 h-5 w-5 group-hover:text-gray-500"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-neutral-content px-5 py-6 sm:gap-8 sm:p-8">
                            {solutions.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-base-200"
                              >
                                <item.icon
                                  className="flex-shrink-0 h-6 w-6 text-primary"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <a
                href="/about"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                About
              </a>
              <a
                href="/contact"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Contact
              </a>
            </Popover.Group>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <a
                href="#"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-primary-focus"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-base-100 divide-y-2 divide-base-100">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div></div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-base-100 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-base-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-focus">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-base-200"
                      >
                        <item.icon
                          className="flex-shrink-0 h-6 w-6 text-primary"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <a
                    href="/about"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    About
                  </a>

                  <a
                    href="/contact"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Contact
                  </a>
                  {/* {resources.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      {item.name}
                    </a>
                  ))} */}
                </div>
                <div>
                  <a
                    href="/register"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-primary-focus"
                  >
                    Sign up
                  </a>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
};

export default Navbar;
