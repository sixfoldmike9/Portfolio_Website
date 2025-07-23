import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer bg-black text-white py-8">
      <div className="footer-container flex flex-col md:flex-row justify-between items-center gap-4 px-6">
        {/* Terms */}
        <div className="flex justify-center">
          <p className="text-sm cursor-pointer hover:underline">
            Terms & Conditions
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          {socialImgs.map(({ imgPath, name }) => (
            <a key={name} href="#" aria-label={name}>
              <img
                src={imgPath}
                alt={`${name} icon`}
                className="w-6 h-6 hover:scale-110 transition-transform duration-200"
              />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="flex justify-center">
          <p className="text-sm text-center">
            © {new Date().getFullYear()} Aadarsh Kohade. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
