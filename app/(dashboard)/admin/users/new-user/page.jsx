import Form from "@/components/Forms/NewAdmin/Form";
import React from "react";

const page = () => {
  return (
    <div className="w-full px-10">
      <h2 className="text-2xl text-whiteTheme-titleColor font-semibold">
        New admin Facility
      </h2>
      <p className="text-base text-whiteTheme-subtitleColor font-light">
        Fill the form to add new facility admin!
      </p>
      <div className="py-6">
        <Form />
      </div>
    </div>
  );
};

export default page;
