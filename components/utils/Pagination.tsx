import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { type ChangeEvent, type KeyboardEvent, useState } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

export const Pagination = (props: {
  pageNumber: number;
  pageAmount: number;
  onGotoNextPage: (nextPage: number) => any;
  onGotoPrevPage: (prevPage: number) => any;
  onJumpToSpecPage: (pageNum: number) => any;
}) => {
  const [pageNumberInput, setPageNumberInput] = useState<string>(props.pageNumber.toString());

  const handleEnterKeyJump = (event: KeyboardEvent<HTMLInputElement>) => {
    setPageNumberInput(pageNumberInput.replace(/[^\d]/g, ""));
    if (Number.parseInt(pageNumberInput) > 0 && Number.parseInt(pageNumberInput) < props.pageAmount + 1) {
      (event.key === "Go" || event.key === "Enter") && props.onJumpToSpecPage(Number.parseInt(pageNumberInput));
      return;
    }
  };

  const handleInputPageNumber = (event: ChangeEvent<HTMLInputElement>) => {
    setPageNumberInput(event.target.value);
  };

  return (
    <div className="my-5 flex justify-between font-bold text-base rtl:flex-row-reverse">
      {props.pageNumber !== 1 && (
        <Button
          className="rounded-full"
          onClick={() => {
            setPageNumberInput((props.pageNumber - 1).toString());
            props.onGotoPrevPage(props.pageNumber - 1);
          }}
        >
          <MdNavigateBefore className="text-3xl" />
        </Button>
      )}
      <div className="my-auto flex justify-center font-bold">
        <Input
          className="mx-2 my-auto h-6 w-11"
          onChange={handleInputPageNumber}
          onKeyDown={handleEnterKeyJump}
          title="Type the specified page number and press Enter to jump."
          value={pageNumberInput}
        />
        <div className="my-auto">{`  /  ${props.pageAmount}`}</div>
      </div>
      {props.pageNumber !== props.pageAmount && (
        <Button
          className="rounded-full"
          onClick={() => {
            setPageNumberInput((props.pageNumber + 1).toString());
            props.onGotoNextPage(props.pageNumber + 1);
          }}
        >
          <MdNavigateNext className="text-3xl" />
        </Button>
      )}
    </div>
  );
};
