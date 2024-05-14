export const ProductShortDesc = ({ desc }) => {
  console.log(desc);
  return (
    <ul className="text-secondary mt-6">
      <p className="text-secondary font-medium">Detailed Specification:</p>
      {desc?.split("\n")?.map((detail, index) => (
        <li key={index} className="mt-2">
          {detail}
        </li>
      ))}
    </ul>
  );
};
