import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    // If you are using a language based on RTL typesetting direction such as Arabic,
    // please change the dir prop value in the following code to rtl
    // Like <Html dir="rtl" lang="en">
    // Otherwise, please do not change
    <Html dir="ltr" lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
