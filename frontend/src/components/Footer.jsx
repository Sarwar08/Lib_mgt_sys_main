// src/components/Footer.js

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 p-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
