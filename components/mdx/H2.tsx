import { fontFangZhengXiaoBiaoSongCN } from "@/styles/font";

export const H2 = (props: JSX.IntrinsicElements["h2"]) => {
  return (
    <h2 className={`${fontFangZhengXiaoBiaoSongCN.className} mt-4 mb-2 scroll-mt-20`} id={props.id}>
      {props.children}
    </h2>
  );
};
