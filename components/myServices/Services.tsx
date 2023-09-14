"use client"; // NOTE - serviceIcons is a client-side svg component

import { serviceIcons } from "@/constants";
import Service from "./Service";

const Services = () => {
  return (
    <>
      {serviceIcons.map((ServiceIcon, index) => (
        <Service
          key={ServiceIcon.name}
          ServiceIcon={ServiceIcon}
          index={index}
        />
      ))}
    </>
  );
};

export default Services;
