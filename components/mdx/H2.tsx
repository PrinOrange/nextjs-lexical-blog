const H2 = (props: JSX.IntrinsicElements["h2"]) => {
  return (
    <h2 className={"caption-font mt-6 mb-2 scroll-mt-20"} id={props.id}>
      {props.children}
    </h2>
  );
};

export default H2;
