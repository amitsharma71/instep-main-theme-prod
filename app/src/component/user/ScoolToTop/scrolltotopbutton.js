import React, { useEffect, useState } from "react";
import { FaHandPointUp } from "react-icons/fa6";

const Scrolltotopbutton = () => {
  const [showArrow, setShowArrow] = useState(false);

  const scollToTop = () => {
    window.scrollTo({ top: 0, behaviour: "smooth" });
  };

  const handleScroll = () => {
    if (window.scrollY >= 450) {
      setShowArrow(true);
    } else {
      setShowArrow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showArrow && (
        <div className="scollmaindiv" onClick={scollToTop}>
          <button>
            <FaHandPointUp className="topscroolicon" />
          </button>
        </div>
      )}
    </>
  );
};

export default Scrolltotopbutton;
