export const Page = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex min-h-screen flex-col justify-between">{children}</div>;
};

export const ContentContainer = ({ children }: { children: React.ReactNode }) => {
  return <main className="flex-grow px-5 md:px-10 lg:px-20 xl:px-32 2xl:px-52">{children}</main>;
};
