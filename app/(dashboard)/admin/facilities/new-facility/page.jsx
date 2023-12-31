import Form from "@/components/Forms/NewFacility/Tab";

const page = () => {
  return (
    <div className="w-full px-10">
      <h2 className="text-2xl text-whiteTheme-titleColor font-semibold">
        New Facility
      </h2>
      <p className="text-base text-whiteTheme-subtitleColor font-light">
        Fill the form to add new facility!
      </p>
      <div className="py-6">
        <Form />
      </div>
    </div>
  );
};

export default page;
