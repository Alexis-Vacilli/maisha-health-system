import FormWizard from "@/components/Wizard/FormWizard";
import React from "react";

const page = () => {
  return (
    <div className="w-full px-10">
      <h2 className="text-2xl text-gray-800 font-semibold">New Patient</h2>
      <p className="text-base text-gray-400 font-light">Fill the form to add new patient!</p>
      <div className="py-4">
        <FormWizard />
      </div>
    </div>
  );
};

export default page;
