export const Page = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex min-h-screen flex-col justify-between">{children}</div>;
};

export const ContentContainer = ({ children }: { children: React.ReactNode }) => {
  return <main className="px-5 md:px-10 lg:px-20 xl:px-32 2xl:px-52 flex-grow">{children}</main>;
};
