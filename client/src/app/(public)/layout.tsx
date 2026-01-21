import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Navbar />
      <div className="min-h-screen md:my-12 px-12">{children}</div>

      <Footer />
    </main>
  );
}
