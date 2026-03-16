const Header = ({ children, className = "" }) => (
  <header
    className={`flex flex-col bg-app-primary w-full sticky top-0 z-50 ${className}`}
  >
    {children}
  </header>
);

Header.Main = ({ children, className = "" }) => (
  <div className={`flex items-center p-4 gap-4 ${className}`}>{children}</div>
);

Header.Bottom = ({ children, className = "" }) => (
  <div className={`w-full border-t border-white/10 ${className}`}>{children}</div>
);

export default Header;
