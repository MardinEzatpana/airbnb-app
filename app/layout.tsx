import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/navbar/Navbar";
import ClientOnly from "./ui/ClientOnly";
import RegisterModal from "./ui/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./ui/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser}/>
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
