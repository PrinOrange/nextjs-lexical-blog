/**
 * Checks if the object contains only valid types.
 */
function isValidFrontmatterObject(obj: Record<string, any>): boolean {
  return Object.values(obj).every(
    (value) =>
      value == null || // null or undefined
      typeof value === "string" ||
      typeof value === "boolean" ||
      typeof value === "number" ||
      (Array.isArray(value) && value.every((item) => typeof item === "string")), // valid string array
  );
}

/**
 * Converts a valid object into YAML-like frontmatter string.
 * Throws error if object contains invalid types.
 */
export function stringifyFrontmatter(obj: Record<string, any>): string {
  if (!isValidFrontmatterObject(obj)) {
    throw new Error("Invalid frontmatter");
  }

  return `---\n${Object.entries(obj)
    .map(([key, value]) => {
      if (value == null) {
        return `${key}: null`; // Handle null values explicitly
      }
      if (Array.isArray(value)) {
        return `${key}: ${JSON.stringify(value)}`; // Handle arrays
      }
      if (typeof value === "string") {
        return `${key}: ${JSON.stringify(value)}`; // Wrap strings with quotes
      }
      return `${key}: ${value}`; // Handle numbers and booleans
    })
    .join("\n")}\n---`;
}
