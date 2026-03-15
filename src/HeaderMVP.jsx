const Header = ({ children, className = "" }) => (
  <header
    className={`flex flex-col bg-app-primary w-full sticky top-0 z-50 ${className}`}
  >
    {children}
  </header>
);

Header.Main = ({ children }) => (
  <div className="flex items-center p-4 pb-2 gap-4">{children}</div>
);

Header.Bottom = ({ children }) => (
  <div className="w-full border-t border-white/10">{children}</div>
);

export default Header;
