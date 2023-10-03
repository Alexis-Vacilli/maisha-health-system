import Banner from "@/components/Banner";
import Image from "next/image";
import { PiDotsThreeOutlineVerticalBold } from "react-icons/pi";
import { AiOutlineEye } from "react-icons/ai";
import ourPatients from "../../../public/images/ourpatients.png";
import emergencyImage from "../../../public/images/emergencyTransfers.png";
import patients from "../../../public/images/patientsF.png";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full flex flex-col items-center gap-10 justify-center">
      <Banner />
      <div className="flex justify-between border border-whiteTheme-secondaryColor border-t-4 border-t-whiteTheme-primaryColor border-b-4 border-b-whiteTheme-secondaryColor p-8 w-11/12">
        <div className="flex gap-5 justify-center items-center">
          <span>
            <Image src={ourPatients} alt="image" width={60} quality={100} />
          </span>
          <div>
            <h3 className="text-sm text-whiteTheme-titleColor">
              Our patients
            </h3>
            <h2 className="text-xl text-whiteTheme-primaryColor font-semibold">
              123
            </h2>
          </div>
          <div>
            <PiDotsThreeOutlineVerticalBold className="cursor-pointer text-whiteTheme-secondaryColor" />
          </div>
        </div>

        <div className="flex gap-5 justify-center items-center">
          <span>
            <Image src={patients} alt="image" width={60} quality={100} />
          </span>
          <div>
            <h3 className="text-sm text-whiteTheme-titleColor">
              Our patients
            </h3>
            <h2 className="text-xl text-whiteTheme-greenColor font-semibold">
              123
            </h2>
          </div>
          <div>
            <PiDotsThreeOutlineVerticalBold className="cursor-pointer text-whiteTheme-secondaryColor" />
          </div>
        </div>

        <div className="flex gap-5 justify-center items-center">
          <span>
            <Image src={emergencyImage} alt="image" width={60} quality={100} />
          </span>
          <div>
            <h3 className="text-sm text-whiteTheme-titleColor">
              Emargency patients
            </h3>
            <h2 className="text-xl text-whiteTheme-orangeAccent font-semibold">
              123
            </h2>
          </div>
          <div>
            <PiDotsThreeOutlineVerticalBold className="cursor-pointer text-whiteTheme-secondaryColor" />
          </div>
        </div>
        <div className="flex gap-5 justify-center items-center">
          <span>
            <Image src={emergencyImage} alt="image" width={60} quality={100} />
          </span>
          <div>
            <h3 className="text-sm text-whiteTheme-titleColor">
              {`Today's active doctors`}
            </h3>
            <h2 className="text-xl text-whiteTheme-orangeAccent font-semibold">
              23
            </h2>
          </div>
          <div>
            <PiDotsThreeOutlineVerticalBold className="cursor-pointer text-whiteTheme-secondaryColor" />
          </div>
        </div>
      </div>
    {/*View part  */}
      <div className="py-6 w-11/12">
          <div className="flex justify-between items-center border-b-2 border-whiteTheme.secondaryColor w-full py-2">
            <h4 className="text-base text-whiteTheme.titleColor font-semibold">
              Recent Transfer In
            </h4>
            <button className="bg-whiteTheme-primaryColor text-white py-2 px-10 font-semibold rounded-sm flex items-center gap-2">
              <AiOutlineEye className="font-semibold" />
              <Link href="/admin/new-facility">View all</Link>
            </button>
          </div>
        </div>
    </div>
  );
};

export default page;
