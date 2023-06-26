const FavListLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      {children}
    </div>
  );
};

export default FavListLayout;
