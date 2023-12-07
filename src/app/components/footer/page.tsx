"use client";

import ThemeSwitcher from "../../ThemeSwitcher";

interface FooterProps {
  showLogo?: boolean;
}

const Footer: React.FC<FooterProps> = ({ showLogo = true }) => {
  return (
    <section className="fixed bottom-0 left-0 z-10 flex w-screen items-end justify-between px-8 py-6">
      <div className="">
        {showLogo && (
          <h1 className="responsive-title hidden sm:flex">isabel alice</h1>
        )}
        <div className="flex font-medium sm:hidden">
          <ThemeSwitcher />
        </div>
      </div>
      <div className="flex flex-col items-end gap-0">
        <p className="font-semibold">GET IN TOUCH</p>
        <div
          className="flex flex-col items-end text-lg"
          style={{ fontFamily: "Garamond", fontStyle: "italic" }}
        >
          <p className="font-medium">
            <a href="tel:+436644129612">+43 664 412 9612</a>
          </p>
          <p className="font-medium">
            <a href="mailto:isabelalice27@icloud.com">
              isabelalice27@icloud.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
export default Footer;

