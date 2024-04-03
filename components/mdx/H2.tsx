const H2 = (props: JSX.IntrinsicElements["h2"]) => {
  return (
    <h2 className={`font-fang-zheng-xiao-biao-song scroll-mt-20`} id={props.id}>
      {props.children}
    </h2>
  );
};

export default H2;
