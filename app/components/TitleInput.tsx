import { useRef, useEffect } from "react";

function TitleInput({ title, setTitle }) {
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset height to calculate new height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [title]);

  return (
    <textarea
      ref={textareaRef}
      className="text-3xl md:text-4xl font-black text-gruvbox-contrast bg-transparent outline-none resize-none w-full overflow-hidden break-words mb-8"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      rows={1}
    />
  );
}

export default TitleInput;
