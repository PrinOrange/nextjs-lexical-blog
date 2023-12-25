const TableWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full overflow-x-auto">
      <table>{children}</table>
    </div>
  );
};

export default TableWrapper;
