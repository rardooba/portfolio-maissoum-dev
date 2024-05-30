import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { TbArrowBigUpLineFilled } from "react-icons/tb";
import Magnetic from "./Magnetic";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <Magnetic>
          <Button
            className="fixed bottom-4 right-4 bg-red-600 hover:bg-primary text-white text-xl px-4 py-2 rounded-lg shadow-md"
            onClick={scrollToTop}
          >
            <TbArrowBigUpLineFilled />
          </Button>
        </Magnetic>
      )}
    </>
  );
};

export default BackToTop;
