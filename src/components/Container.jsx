function Container({ children }) {
  return (
    <div className="flex items-center justify-center flex-1 w-full h-screen">
      {children}
    </div>
  );
}

export default Container;
