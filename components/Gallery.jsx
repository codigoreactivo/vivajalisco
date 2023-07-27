import React, { useEffect } from "react";
import Image from "next/image";

const GridSection = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://snapwidget.com/js/snapwidget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div >
        <iframe
          src="https://snapwidget.com/embed/1038068"
          class="snapwidget-widget"
          allowtransparency="true"
          frameborder="0"
          scrolling="no"
          style={{border:"none", overflow:"hidden",  width:'100%',}}
        ></iframe>
      </div>
    </div>
  );
};

export default GridSection;
