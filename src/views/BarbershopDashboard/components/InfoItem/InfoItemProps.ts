import type { Component } from 'vue';

export type InfoItemProps = {
  editable?: boolean;
  icon?: Component;
  iconProps?: Record<string, unknown>;
  label: string;
  value: string | number;
  displayValue?: string;
};
