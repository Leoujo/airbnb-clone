import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
// import Modal from "./components/modals/Modal";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./components/modals/RentModal";

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

// Using a different font for the texts
const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	// We're getting server data without making api requests.
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <RegisterModal />
        <LoginModal />
		  <RentModal />
        <Navbar currentUser={currentUser} />
        <div>{children}</div>
      </body>
    </html>
  );
}
