import { useRef } from "react";

function DOM(props) {
  const h2Ref = useRef(null);
  const buttonRef = useRef(null);

  const changeContent = () => {
    h2Ref.current.innerText = "React is JS Library";
    h2Ref.current.style.color = "green";
    buttonRef.current.style.color = "red";
  };
  return (
    <div>
      <h2 ref={h2Ref}>useRef Concept in React</h2>
      <button ref={buttonRef} onClick={changeContent}>
        Change Content
      </button>
    </div>
  );
}

export default DOM;
