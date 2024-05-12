const PageHeader = ({ props }) => {
  return (
    <div className="border-b bg-ghost py-3">
      <div className="container flex items-center justify-start gap-3 text-xs">
        <p className="text-blue-600">Home</p> /
        <p className="text-secondary capitalize">{props}</p>
      </div>
    </div>
  );
};

export default PageHeader;
