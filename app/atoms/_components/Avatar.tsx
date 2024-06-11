"use client";
import Magnetic from "./Magnetic";

const Avatar = () => {
  return (
    <Magnetic>
      <div className="flex-[2] mr-auto relative hidden md:flex">
        <div
          className="h-80 w-80 rounded-lg overflow-hidden relative bg-center bg-cover"
          style={{
            backgroundImage: "url('./assets/avatar.jpg')",
          }}
        ></div>
      </div>
    </Magnetic>
  );
};

export default Avatar;