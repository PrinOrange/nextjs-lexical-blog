const Blockquote = (props: JSX.IntrinsicElements["blockquote"]) => {
  return (
    <blockquote
      className={
        "not-prose scroll-mt-20 my-5 px-5 py-4 bg-gray-100 dark:bg-gray-800 dark:border-gray-700 border-gray-300 border-l-4"
      }
    >
      {props.children}
    </blockquote>
  );
};

export default Blockquote;
