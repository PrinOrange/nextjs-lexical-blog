import { SearchInput } from "@/components/search-page/SearchInput";
import { SearchResultList } from "@/components/search-page/SearchResultList";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { Footer } from "@/components/utils/Footer";
import { ContentContainer, Page } from "@/components/utils/Layout";
import { NavBar } from "@/components/utils/NavBar";
import { PageTitle } from "@/components/utils/PageTitle";
import { SEO } from "@/components/utils/SEO";
import { Config } from "@/data/config";
import { isEmptyString } from "@/lib/utils";
import type { TSearchResultItem } from "@/types/docs.type";
import axios from "axios";
import { isArray } from "lodash";
import type { GetServerSideProps } from "next";
import { SiteLinksSearchBoxJsonLd } from "next-seo";
import { useState } from "react";

type SearchPageProps = { query: string | null };

export default function SearchPage(props: SearchPageProps) {
  const [searchResult, setSearchResult] = useState<TSearchResultItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const fetchSearchAPI = (param: string): Promise<TSearchResultItem[]> => {
    setIsLoading(true)
    return axios.get<TSearchResultItem[]>(`/api/search/${param}`).then((response) => response.data);
  };

  const handleSearch = (word: string) => {
    if (isEmptyString(word)) {
      toast({
        title: "Enter a Keyword",
        description: "Please enter one keyword at least.",
      });
      return;
    }
    if (word && word.length < 4) {
      toast({
        title: "Keywords too short",
        description: "Keyword length must be at least 4.",
      });
      return;
    }
    fetchSearchAPI(word)
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
      <SiteLinksSearchBoxJsonLd
        potentialActions={[
          {
            target: `https://${Config.SiteDomain}/search?q={search_term_string}`,
            queryInput: "search_term_string",
          },
        ]}
        url={`https://${Config.SiteDomain}/`}
      />
      <ContentContainer>
        <PageTitle>{"SEARCH POSTS"}</PageTitle>
        <SearchInput isLoading={isLoading} handleSearch={handleSearch} word={props.query} />
        <SearchResultList searchResult={searchResult} />
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
