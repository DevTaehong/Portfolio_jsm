"use client"; // NOTE - companies is a client-side svg component

import { companies } from "@/constants";
import Company from "./Company";

const Companies = () => {
  return (
    <>
      {companies.map((CompanyLogo, index) => (
        <Company
          key={CompanyLogo.name}
          CompanyLogo={CompanyLogo}
          index={index}
        />
      ))}
    </>
  );
};

export default Companies;
