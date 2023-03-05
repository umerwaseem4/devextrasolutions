import Button from "./Button";

const Header = () => {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img
              src="https://www.devextrasolutions.com/dx.png"
              className="w-30 h-20 p-2 rounded-full"
              alt=""
              srcset=""
            />
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-7 hover:text-[#6f42c1] transition-all cursor-pointer">Home</a>
            <a className="mr-7 hover:text-[#6f42c1] transition-all cursor-pointer">Services</a>
            <a className="mr-7 hover:text-[#6f42c1] transition-all cursor-pointer">Pricing</a>
            <a className="mr-7 hover:text-[#6f42c1] transition-all cursor-pointer">Blogs</a>
            <a className="mr-7 hover:text-[#6f42c1] transition-all cursor-pointer">About Us</a>
            <a className="mr-7 hover:text-[#6f42c1] transition-all cursor-pointer">Careers</a>
          </nav>
          <Button>Login</Button>
        </div>
      </header>
    </>
  );
};

export default Header;
