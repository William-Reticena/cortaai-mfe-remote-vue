export type IfProps = {
  condition: Item | Items | boolean;
  elseCondition?: any;
};

type Item = string | number | boolean | object;

type Items = Item[];
