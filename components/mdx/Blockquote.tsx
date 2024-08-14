const Blockquote = (props: JSX.IntrinsicElements["blockquote"]) => {
  return (
    <blockquote
      className={
        "not-prose my-5 scroll-mt-20 border-gray-300 border-l-4 bg-gray-100 px-5 py-4 dark:border-gray-700 dark:bg-gray-800"
      }
    >
      {props.children}
    </blockquote>
  );
};

export default Blockquote;
