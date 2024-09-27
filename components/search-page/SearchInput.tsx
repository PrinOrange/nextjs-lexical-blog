import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { isEmptyString } from "@/lib/utils";
import { type ChangeEvent, type KeyboardEvent, useEffect, useState } from "react";

export const SearchInput = (props: {
  handleSearch: (word: string) => any;
  isLoading: boolean;
  word?: string | null;
}) => {
  const [searchText, setSearchText] = useState<string>(props.word ?? "");

  useEffect(() => {
    if (!isEmptyString(searchText)) {
      props.handleSearch(searchText);
    }
  }, []);

  const handleInputSearchText = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleEnterKeySearch = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Go" || event.key === "Enter") {
      props.handleSearch(searchText);
    }
  };

  return (
    <div className="my-10 flex">
      <Input
        className="my-auto py-0"
        onChange={handleInputSearchText}
        onKeyDown={handleEnterKeySearch}
        placeholder="Input the keyword"
        value={searchText}
      />
      <Button className="mx-3 my-auto w-32" disabled={props.isLoading} onClick={() => props.handleSearch(searchText)}>
        {props.isLoading ? "Loading" : "Search"}
      </Button>
    </div>
  );
};
