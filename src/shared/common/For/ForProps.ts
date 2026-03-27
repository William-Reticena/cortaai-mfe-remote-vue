export type ForProps<T> = {
  each: T[];
  getKey?: (item: T, index: number) => string | number;
};
