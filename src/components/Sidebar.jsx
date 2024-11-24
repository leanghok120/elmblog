import React, { useState } from "react";

function Sidebar() {
  const [isVisible, setIsVisible] = useState(false);

  function handleMouseEnter() {
    setIsVisible(true);
  }

  function handleMouseLeave() {
    setIsVisible(false);
  }

  return (
    <>
      <div
        className="fixed top-0 left-0 h-full w-52"
        onMouseEnter={handleMouseEnter}
      ></div>

      <div
        className={`fixed top-0 h-full w-52 p-5 border-2 border-gruvbox-bg2 transition-transform`}
        style={{
          transform: isVisible ? "translateX(0)" : "translateX(-100%)",
        }}
        onMouseLeave={handleMouseLeave}
      >
        Sidebar Content
      </div>
    </>
  );
}

export default Sidebar;
