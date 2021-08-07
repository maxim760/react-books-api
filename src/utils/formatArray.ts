export const formatArray = (array: string[] | undefined | null, defaultValue : string = "") => {
  return array?.length
    ? array.join(", ")
    : defaultValue;
}