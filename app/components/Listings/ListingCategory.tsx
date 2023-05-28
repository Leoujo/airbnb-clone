const ListingCategory = () => {
  // Create custom hook here to catch the label's data.
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center gap-4">
        {/* <Icon size={40} className=" text-neutral-600" /> */}
        <div className="flex flex-col">
          <div className="text-lg font-semibold">label</div>
          <div className="text-neutral-500 font-light">description</div>
        </div>
      </div>
    </div>
  );
};

export default ListingCategory;
