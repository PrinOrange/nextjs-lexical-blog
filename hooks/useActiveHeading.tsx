import * as React from "react";

function removeFirstHash(str: string): string {
  return str.replace(/^#/, "");
}

/**
 * React hook to highlight a heading a user is currently reading.
 * @param headingList List of links to the headings (ex. "#title")
 * @param options Options for the Intersectionobserver (ex. rootMargin)
 * @returns The Id/Link to the heading, that is currently active.
 */
export function useActiveHeading(headingList: string[], options?: IntersectionObserverInit) {
  const [activeId, setActiveId] = React.useState("");

  React.useEffect(() => {
    const callback: IntersectionObserverCallback = (headingEntries) => {
      // Get all headings that are currently visible on the page
      const visibleHeadings = headingEntries.filter((e) => e.isIntersecting);

      if (visibleHeadings.length === 0) {
        //Necessary if a user scrolls down and then reloads.
        //In that case the IntersectionObserver didn't see the Heading onscreen
        const element = headingEntries.reverse().find((e) => e.boundingClientRect.bottom < 150);
        if (element) {
          setActiveId(`#${element.target.id}`);
        }
      } else {
        // If there is more than one visible heading,
        // choose the one that is closest to the top of the page
        // the entries are always sorted top to bottom.
        setActiveId(`#${visibleHeadings[0].target.id}`);
      }
    };

    const observer = new IntersectionObserver(callback, options);

    //Observe all (non-null) elements
    headingList
      .map((heading) => document?.querySelector(`[id='${removeFirstHash(heading)}']`))
      //Remove null elments
      .flatMap((f) => (!!f ? [f] : []))
      .forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [headingList, options]);
  return activeId;
}
