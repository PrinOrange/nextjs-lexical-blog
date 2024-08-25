const Span = (props: JSX.IntrinsicElements["h2"]) => {
  return <span translate={props.className?.includes("katex") ? "no" : undefined} {...props} />;
};

export default Span;
