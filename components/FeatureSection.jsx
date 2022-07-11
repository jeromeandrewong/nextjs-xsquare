import React from "react";

import {
  BellIcon,
  FingerPrintIcon,
  UsersIcon,
  UserGroupIcon,
  LibraryIcon,
} from "@heroicons/react/outline";

const FeatureSection = () => {
  return (
    // <div className="py-20 bg-base-200">
    <div className="py-20 px-4 bg-[#dddadb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-primary font-semibold tracking-wide uppercase">
            key Features
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Giving Tuition the right way
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We want to help students achieve their potential by enabling them to
            understand what they are learning, assimilate content knowledge and
            acquire problem solving skill sets
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;

const features = [
  {
    name: "Small Class Size",
    description:
      "Classes have a maximum capacity of 8 students which allows for more one-on-one time, easier identification of student's issues and a more conducive learning environment.",
    icon: UserGroupIcon,
  },
  {
    name: "Retrieval practice",
    description:
      "Students will have to actively recall past concepts while learning new concepts which will lead to better understanding of old topics while grasping new ones.",
    icon: BellIcon,
  },
  {
    name: "Catered to student's needs",
    description:
      "Lessons are adjusted to cater to individual student’s need through formative assessments and test papers reviews.",
    icon: FingerPrintIcon,
  },
  {
    name: "Aligned with schools",
    description:
      "Lesson plans will align with the student’s respective schools so the students can follow along efficiently and retain concepts better.",
    icon: LibraryIcon,
  },
];
