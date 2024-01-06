import { ContentContainer, Page } from "@/components/layouts/layouts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { Footer } from "@/components/utils/Footer";
import { NavBar } from "@/components/utils/NavBar";
import { SEO } from "@/components/utils/SEO";
import { Config } from "@/data/config";
import { isEmptyString } from "@/lib/utils";
import { fontFangZhengXiaoBiaoSongCN, fontSourceSerifScreenCN } from "@/styles/font";
import { TSearchResultItem } from "@/types/search-result";
import axios from "axios";
import { nanoid } from "nanoid";
import Link from "next/link";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import { useQuery } from "react-query";

export default function SearchPage() {
  const [searchText, setSearchText] = useState<string>("");
  const [searchResult, setSearchResult] = useState<TSearchResultItem[]>([]);
  const { toast } = useToast();

  const fetchAPI = async (param: string) => {
    const response = (await axios.get<TSearchResultItem[]>(`/api/search/${param}`)).data;
    return response;
  };

  const querySearch = useQuery("searchData", () => fetchAPI(searchText), {
    enabled: false,
    onSuccess: (data) => {
      setSearchResult(data);
      if (data.length === 0) {
        toast({ title: "Empty Result", description: "No results were found for this keyword. Try another keyword." });
      }
    },
    onError: () => {
      toast({ title: "Network Error", description: "Please try it later." });
    },
  });

  const handleInputSearchText = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleEnterKeySearch = (event: KeyboardEvent<HTMLInputElement>) => {
    (event.key === "Go" || event.key === "Enter") && handleMakeSearch();
  };

  const handleMakeSearch = () => {
    if (isEmptyString(searchText)) {
      toast({ title: "Enter a Keyword", description: "Please enter one keyword at least." });
      return;
    }
    querySearch.refetch();
  };

  return (
    <Page>
      <SEO title={`${Config.SiteTitle} - Search`} description={"Search the posts on your demand."} />
      <Toaster />
      <ContentContainer>
        <NavBar />
        <h2 className={`my-10 flex justify-center text-2xl font-bold ${fontFangZhengXiaoBiaoSongCN.className}`}>
          {"SEARCH POSTS"}
        </h2>
        <div className="flex my-10 h-1/2">
          <Input
            className="my-auto py-0"
            placeholder="Input the keyword"
            value={searchText}
            onKeyDown={handleEnterKeySearch}
            onChange={handleInputSearchText}
          />
          <Button className="mx-3 my-auto" disabled={querySearch.isLoading} onClick={handleMakeSearch}>
            {querySearch.isLoading ? "Loading" : "Search"}
          </Button>
        </div>
        <div className="flex flex-col justify-center">
          <div className={`min-h-full flex flex-col ${fontSourceSerifScreenCN.className}`}>
            {querySearch.isSuccess &&
              searchResult.map((item, index) => (
                <Link
                  className={`py-2 px-5 border-t ${
                    index === searchResult.length - 1 && "border-b"
                  } hover:bg-gray-50 dark:hover:bg-gray-900 flex flex-col`}
                  key={nanoid()}
                  href={`/blog/${item.id}`}
                  target="_blank"
                >
                  <div className="my-1 capitalize">{item.title}</div>
                  <div className="flex space-x-2 flex-wrap">
                    {item.tags?.map((tagitem) => (
                      <div className="text-sm text-gray-500 dark:text-gray-400" key={nanoid()}>
                        {tagitem}
                      </div>
                    ))}
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </ContentContainer>
      <Footer />
    </Page>
  );
}
