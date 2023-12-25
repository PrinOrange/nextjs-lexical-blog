import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * The implementation for pagination queries in an array.
 * @param array Array input
 * @param pageSize Max elements count for every page.
 * @param pageNumber The current page number.
 * @returns A new array contains elements of specified page.
 */
export function paginateArray<T = any>(array: T[], pageSize: number, pageNumber: number) {
  if (array.length === 0) return [];
  if (pageSize < 1) return [];
  if (pageNumber < 1) return [];

  --pageNumber;

  const startIndex = pageNumber * pageSize;
  const endIndex = (pageNumber + 1) * pageSize;

  if (startIndex >= array.length) return [];

  return array.slice(startIndex, endIndex);
}

/**
 * Nullify the empty string and convert them into `null`.
 * @param value Possible string input.
 * @returns return `null` if the input belongs to "", undefined and null.
 */
export function nullifyEmptyString(value: string | null | undefined): string | null {
  if (value == null) {
    return null;
  }
  if (value.trim() === "") {
    return null;
  }
  return value;
}

/**
 * Indicate whether a string is empty value.
 * @param value Possible string input.
 * @returns return `true` if the input belongs to "", undefined and null.
 */
export function isEmptyString(value: string | null | undefined): boolean {
  if (value == null) {
    return true;
  }
  if (value.trim() === "") {
    return true;
  }
  return false;
}
