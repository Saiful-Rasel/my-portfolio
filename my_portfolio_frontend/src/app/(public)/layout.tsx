import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main >
      <div>
        <Navbar />
      </div>
      {children}
      <div>
        <Footer />
      </div>
    </main>
  );
}
