"use client"
import { useState } from "react";
import Form1 from "./Form1";
import Form2 from "./Form2";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabClass = (index) =>
    `cursor-pointer w-1/2 ${
      activeTab === index ? "text-whiteTheme-primaryColor font-semibold border-b-2 border-whiteTheme-primaryColor" : "text-gray-500"
    }`;

  const handleClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="w-full flex border-b-2 border-whiteThemePurpleAccent">
        <div className={tabClass(0)} onClick={() => handleClick(0)}>
          New facility details
        </div>
        <div className={tabClass(1)} onClick={() => handleClick(1)}>
          Other details
        </div>
      </div>
      <div className="mt-4">
        {activeTab === 0 && (
          <div>
              <Form1 />
          </div>
        )}
        {activeTab === 1 && (
          <div>
              <Form2 />
          </div>
        )}
      </div>
    </div>
  );
}

export default Tabs;
