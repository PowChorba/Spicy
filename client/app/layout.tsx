import loadExoClick from "@/helper/AdScript";
import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import Providers from "./api/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SpicyX",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="juicyads-site-verification"
          content="1de495bca9a7dc518a6265ac9675c465"
        ></meta>
        <meta
          name="exoclick-site-verification"
          content="f6ba2c2a882f743856e82af526106b2f"
        ></meta>
        <script
          async
          type="application/javascript"
          src="https://a.realsrv.com/ad-provider.js"
        ></script>
        <script
          type="application/javascript"
          dangerouslySetInnerHTML={{
            __html:
              '(AdProvider = window.AdProvider || []).push({"serve": {}});',
          }}
        ></script>
        <script
          type="application/javascript"
          src="https://syndication.realsrv.com/splash.php?idzone=4999350&capping=0"
        ></script>
        <script
          type="text/javascript"
          src="https://js.juicyads.com/jp.php?c=34d433u2q224u4q2w2f4x25434&u=http%3A%2F%2Fwww.juicyads.rocks"
        ></script>
        <script
          type="application/javascript"
          src="https://syndication.realsrv.com/splash.php?idzone=4999354"
        ></script>
        <script
          type="text/javascript"
          data-cfasync="false"
          async
          src="https://poweredby.jads.co/js/jads.js"
        ></script>
        <script
          type="text/javascript"
          data-cfasync="false"
          async
          dangerouslySetInnerHTML={{
            __html: `(adsbyjuicy = window.adsbyjuicy || []).push({'adzone':1023600});`,
          }}
        ></script>
        <script
          type="text/javascript"
          data-id="juicyads-native-ads"
          data-ad-zone="1022274"
          data-targets="a"
          src="https://js.juicyads.com/juicyads.native-ads.min.js"
        ></script>
      </head>
      <body className="w-3/4 mx-auto bg-white max-sm:w-full">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
