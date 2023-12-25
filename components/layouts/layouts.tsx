export const Page = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex min-h-screen flex-col justify-between">{children}</div>;
};

export const ContentContainer = ({ children }: { children: React.ReactNode }) => {
  return <main className="responsive-width">{children}</main>;
};
