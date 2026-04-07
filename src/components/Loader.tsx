import { useEffect, useState } from "react";

const words = ["LOADING", "PLEASE WAIT", "SPINNING UP"];

const Loader = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 600);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="loader-screen">
      <div className="loader-card brutal-card bg-card">
        <div className="loader-tape" />
        <div className="loader-title">{words[index]}</div>
        <div className="loader-sub">Mohammed Asif M • Full Stack Developer</div>
        <div className="loader-bar">
          <div className="loader-bar-fill" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
