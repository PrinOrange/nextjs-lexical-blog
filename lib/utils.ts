import { NonEmptyArray } from "@/types/utils.type";
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
  if (isEmptyString(value)) {
    return null;
  }
  return value!;
}

/**
 * Indicate whether a string is empty value.
 * @param value Possible string input.
 * @returns return `true` if the input belongs to "", undefined and null.
 */
export function isEmptyString(value: string | null | undefined): boolean {
  if (value === null || value === undefined) {
    return true;
  }
  if (value.trim() === "") {
    return true;
  }
  return false;
}

/**
 * Removes empty values from an array.
 * @param value - The array to remove empty values from.
 * @returns The array without empty values.
 * @template T - The type of the array elements.
 */
export function removeEmptyValuesFromArray<T>(value: T[]): T[] {
  return value.filter((item) => item != null);
}

/**
 * Checks if an array is empty.
 * @param value - The array to check.
 * @returns True if the array is empty, false otherwise.
 */
export function isEmptyArray(value: any[] | null | undefined): boolean {
  if (value === null || value === undefined) {
    return true;
  }
  return removeEmptyValuesFromArray(value).length === 0;
}

/**
 * Nullifies an empty array.
 *
 * @template T - The type of the array elements.
 * @param value - The array value to be nullified if empty.
 * @returns The nullified array if it is empty, otherwise returns the original array.
 */
export function nullifyEmptyArray<T>(value: T[] | null | undefined): NonEmptyArray<T> | null {
  if (isEmptyArray(value)) {
    return null;
  }
  return value as NonEmptyArray<T>;
}

/**
 * Capitalizes the first letter of each word in a string.
 *
 * @param str - The input string.
 * @returns The string with the first letter of each word capitalized.
 */
export function capitalizeFirstLetter(str: string) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
