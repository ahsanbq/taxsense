import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <Navbar />
      </header>
      <main className="flex-grow pt-16" role="main">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
