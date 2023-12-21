"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

const Search: React.FC = () => {
  const searchparams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const query = new URLSearchParams(searchparams);
  const handleSearch = (term: string) => {
    if (term) {
      query.set("query", term);
    } else {
      query.delete("query");
    }
    replace(`${pathname}?${query.toString()}`);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        defaultValue={searchparams.get("query")?.toString()}
        onChange={(e) => handleSearch(e.target.value)}
        className="border border-solid p-2 m-5 border-1 border-black rounded-lg text-black w-1/2"
      />
    </div>
  );
};

export default Search;

