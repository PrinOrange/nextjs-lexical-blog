const TableWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full overflow-x-auto flat-scrollbar-normal">
      <table>{children}</table>
    </div>
  );
};

export default TableWrapper;
