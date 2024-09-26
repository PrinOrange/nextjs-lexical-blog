import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { Footer } from "@/components/utils/Footer";
import { ContentContainer, Page } from "@/components/utils/Layout";
import { NavBar } from "@/components/utils/NavBar";
import { SEO } from "@/components/utils/SEO";
import { Config } from "@/data/config";
import { isEmptyString } from "@/lib/utils";
import type { TSearchResultItem } from "@/types/docs.type";
import axios from "axios";
import { isArray } from "lodash";
import { nanoid } from "nanoid";
import type { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { type ChangeEvent, type KeyboardEvent, useEffect, useState } from "react";

type SearchPageProps = { query: string | null };

export default function SearchPage(props: SearchPageProps) {
  const [searchText, setSearchText] = useState<string>(props.query ?? "");
  const [searchResult, setSearchResult] = useState<TSearchResultItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    if (!isEmptyString(searchText)) {
      handleMakeSearch();
    }
  }, []);

  const fetchSearchAPI = (param: string): Promise<TSearchResultItem[]> => {
    return axios.get<TSearchResultItem[]>(`/api/search/${param}`).then((response) => response.data);
  };

  const handleInputSearchText = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleEnterKeySearch = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Go" || event.key === "Enter") {
      handleMakeSearch();
    }
  };

  const handleMakeSearch = () => {
    const searchQuery = searchText;

    if (isEmptyString(searchQuery)) {
      toast({ title: "Enter a Keyword", description: "Please enter one keyword at least." });
      return;
    }
    if (searchQuery && searchQuery.length < 4) {
      toast({ title: "Keywords too short", description: "Keyword length must be at least 5." });
      return;
    }

    router.push({
      pathname: router.pathname,
      query: { ...router.query, q: searchQuery },
    });
    setIsLoading(true);

    fetchSearchAPI(searchQuery)
      .then((data) => {
        setSearchResult(data);
        if (data.length === 0) {
          toast({
            title: "Empty Result",
            description: "No results were found for this keyword. Try another keyword.",
          });
        }
      })
      .catch(() => {
        toast({ title: "Network Error", description: "Please try it later." });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Page>
      <SEO description={"Search the posts on your demand."} title={`${Config.SiteTitle} - Search`} />
      <Toaster />
      <NavBar />
      <ContentContainer>
        <h2 className={"caption-font my-10 flex justify-center font-bold text-2xl"}>{"SEARCH POSTS"}</h2>
        <div className="my-10 flex">
          <Input
            className="my-auto py-0"
            onChange={handleInputSearchText}
            onKeyDown={handleEnterKeySearch}
            placeholder="Input the keyword"
            value={searchText}
          />
          <Button className="mx-3 my-auto w-32" disabled={isLoading} onClick={handleMakeSearch}>
            {isLoading ? "Loading" : "Search"}
          </Button>
        </div>
        <div className="flex flex-col justify-center">
          <div className={"flex min-h-full flex-col content-font"}>
            {searchResult.map((item, index) => (
              <Link
                className={`border-t p-2 ${index === searchResult.length - 1 && "border-b"} flex flex-col hover:bg-gray-50 dark:hover:bg-gray-900`}
                href={`/blog/${item.id}`}
                key={nanoid()}
                target="_blank"
              >
                <div className="my-1">
                  <div className="post-list-caption-font font-bold text-md capitalize">{item.title}</div>
                  {item.summary && <div>{item.summary}</div>}
                </div>
                <div className="flex flex-wrap space-x-2">
                  {item.tags?.map((tagitem) => (
                    <div className="text-gray-500 text-sm dark:text-gray-400" key={nanoid()}>
                      {tagitem}
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="my-3 text-center text-gray-500 dark:text-gray-400">
          <p className="mx-auto text-sm">{"For search efficiency, only the first 20 results are displayed."}</p>
        </div>
      </ContentContainer>
      <Footer />
    </Page>
  );
}

export const getServerSideProps: GetServerSideProps<SearchPageProps> = async (context) => {
  let query = context.query.q;
  if (isArray(query)) query = query.join(" ");
  return { props: { query: query ?? null } };
};
