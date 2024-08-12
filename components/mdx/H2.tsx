const H2 = (props: JSX.IntrinsicElements["h2"]) => {
  return (
    <h2 className={`caption-font scroll-mt-20`} id={props.id}>
      {props.children}
    </h2>
  );
};

export default H2;
