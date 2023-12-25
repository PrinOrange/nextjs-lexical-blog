import { fontFzxbs } from "@/styles/font";

export const H2 = (props: JSX.IntrinsicElements["h2"]) => {
  return (
    <h2 className={`${fontFzxbs.className} mt-3 mb-1 scroll-mt-20`} id={props.id}>
      {props.children}
    </h2>
  );
};
