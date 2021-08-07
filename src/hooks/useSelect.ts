import { useCallback, useState } from 'react';

type IOption<T extends string> = { label: string; value: T };

const toOption = <T extends string>(item: T): IOption<T> => ({
  label: item,
  value: item,
});
const toOptions = <T extends string>(items: T[]): IOption<T>[] =>
  items.map(toOption);

export const useSelect = <T extends string>(values: T[], selectedValue?: T) => {
  const [options] = useState(toOptions(values));
  const [selected, setSelected] = useState(
    selectedValue ? toOption(selectedValue) : options[0]
  );
  const onChange = useCallback((option: IOption<string> | null) => {
    if (option === null) return;
    setSelected(option as IOption<T>);
  }, []);
  return {
    options,
    value: selected,
    onChange,
  };
};
