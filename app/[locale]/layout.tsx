import Header from "@/components/Header/HeaderBase";
import Footer from "@/components/Footer/FooterBase";
import { Outfit } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const outfit = Outfit({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  display: "swap",
  subsets: ["latin"],
});
const aghaRasheeq = {
  className: "font-agha-rasheeq",
  variable: "--font-agha-rasheeq",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={locale === "ar" ? "arabic" : "english"}
    >
      <body
        className={`${locale === "ar" ? aghaRasheeq.className : outfit.className}`}
      >
        <NextIntlClientProvider messages={messages}>
          <div>
            <Header locale={locale} />
            {children}
            <Footer locale={locale}/>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}