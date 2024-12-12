import DesktopHeader from "./components/DesktopHeader";
import MobileHeader from "./components/MobileHeader";

const Header = () => {
  return (
    <section className="p-3">
      <div className="container mx-auto">
        <DesktopHeader />
        <MobileHeader />
      </div>
    </section>
  );
};

export default Header;
