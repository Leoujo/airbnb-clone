import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { IconType } from "react-icons";
import qs from "query-string";

interface CategoryBoxProps {
  icon: IconType;
  label: string;
  selected?: boolean;
}

// Conditional css with tailwind.
// I'm putting an aliases for icon, so I can use it as a component.
const CategoryBox: React.FC<CategoryBoxProps> = ({ icon: Icon, label, selected }) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    // 1 - Define an empty query
    let currentQuery = {};

    // 2 - Look through current params and parse them from string to obj
    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    // 3 - Spread current query and add the new category
    const updatedQuery: any = {
      ...currentQuery,
      category: label,
    };

    // 4 - If current category is already selected, we remove it from our updatedQuery (deselected)
    if (params?.get("category") === label) {
      delete updatedQuery.category;
    }

    // 5 - Generate new url string, with our root url + updated query
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [label, params, router]);

  return (
    <div
      onClick={handleClick}
      className={`flex flex-col items-center justify-center gap-3 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer 
		${selected ? "border-b-neutral-800" : "border-transparent"}
		${selected ? "text-neutral-800" : "text-neutral-500"}
		`}
    >
      <Icon size={26} />
      <div className="font-medium text-sm">{label}</div>
    </div>
  );
};

export default CategoryBox;
