import { fontFangZhengXiaoBiaoSongCN } from "@/styles/font";

export const H2 = (props: JSX.IntrinsicElements["h2"]) => {
  return (
    <h2 className={`${fontFangZhengXiaoBiaoSongCN.className} scroll-mt-20`} id={props.id}>
      {props.children}
    </h2>
  );
};
