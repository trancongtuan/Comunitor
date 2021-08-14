import React from "react";
import Image from "next/image";
import Loading from "@components/common/loading";
const DashBoard: React.FC = () => {
  return (
    <>
      <h1>My Homepage</h1>
      <Image
        src={"/icon-512x512.png"}
        alt="Picture of the author"
        width={200}
        height={200}
        layout="fixed"
        quality="85"
      />
      <p>Welcome to my homepage!</p>
    </>
  );
};

export default DashBoard;
