import { useRef, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";
import { Button } from "../ui/button";

const PreWrapper = ({ children }: { children: JSX.Element }) => {
  const textInput = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const onEnter = () => {
    setHovered(true);
  };
  const onExit = () => {
    setHovered(false);
    setCopied(false);
  };
  const onCopy = () => {
    setCopied(true);
    //@ts-ignore
    textInput.current && navigator.clipboard.writeText(textInput.current.textContent);
  };

  return (
    <div className="relative flat-scrollbar-normal" onMouseLeave={onExit} onMouseMove={onEnter} ref={textInput}>
      {hovered && (
        <Button
          aria-label="Copy code"
          className={`absolute right-2 top-2 h-8 w-8 rounded p-1 ${copied ? "hover:text-green-500 text-green-500" : ""}`}
          onClick={onCopy}
          variant={"outline"}
        >
          {copied ? <FaCheck /> : <IoCopyOutline />}
        </Button>
      )}
      <pre className="p-2 dark:bg-[#0d1117] bg-[#F6F8FA] rounded-md flat-scrollbar-normal not-prose text-sm dark:selection:bg-gray-700 selection:bg-gray-300 selection:text-inherit">
        {children}
      </pre>
    </div>
  );
};

export default PreWrapper;
