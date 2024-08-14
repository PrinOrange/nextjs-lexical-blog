const TableWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flat-scrollbar-normal w-full overflow-x-auto">
      <table>{children}</table>
    </div>
  );
};

export default TableWrapper;
