import React from 'react';
import Select, { NamedProps } from 'react-select';
import styles from './appDropdown.module.scss';
import { useBoolean } from '../../hooks/useBoolean';

type AppDropdownProps = {
  label: string;
} & NamedProps;

export const AppDropdown: React.FC<AppDropdownProps> = ({
  label,
  ...props
}) => {
  const { flag: isOpen, toggle, setTrue: open, setFalse: close } = useBoolean();
  return (
    <div className={styles.dropdown}>
      <div onClick={toggle} className={styles.dropdownTitle}>
        {label}
      </div>
      <Select
        className={styles.dropdownEl}
        menuIsOpen={isOpen}
        onMenuOpen={open}
        onMenuClose={close}
        {...props}
      />
    </div>
  );
};
