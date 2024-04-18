import { useRef } from "react";
import "../App.css";

function CustomCursor() {

  const dot = useRef(null);
  const dotoutline = useRef(null);

  return (
    <div className=" z-auto">
    <div ref={dot} className="cursor-dot"></div>
    <div ref={dotoutline} className="cursor-dot-outline"></div>
    </div>
  )
}

export default CustomCursor;