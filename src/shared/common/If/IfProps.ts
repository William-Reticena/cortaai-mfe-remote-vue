export type IfProps = {
  condition?: Item | Items | boolean | object;
};

type Item = string | number | boolean | object;

type Items = Item[];
