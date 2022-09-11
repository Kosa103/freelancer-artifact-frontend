import colors from "../colors"; 

export const singleValueSelect = {
  option: (provided, state) => ({
    ...provided,
    borderLeft: `2px solid ${colors.primary}`,
    backgroundColor: state.isFocused && 'transparent',
    color: state.isFocused ? colors.secondaryLight : colors.secondary,
    cursor: 'pointer',
    fontSize: '16px',
    textTransform: 'capitalize',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',

    '&:hover': {
      color: colors.tertiary,
      borderColor: colors.tertiary,
      backgroundColor: 'transparent'
    }
  }),
  placeholder: provided => ({
    ...provided,
    fontSize: '16px',
    color: colors.grey,
  }),
  control: (provided, state) => ({
    ...provided,
    backgroundColor: colors.primary,
    padding: '1px 5px',
    border: `1px solid ${colors.secondary}`,
    borderRadius: '5px',
    boxShadow: 'none',

    '&:hover': {
      borderColor: colors.tertiary,
      cursor: 'pointer',
    },

    '&.error': {
      borderColor: colors.red,
    },
  }),
  singleValue: provided => ({
    ...provided,
    color: colors.secondaryLight,
    fontSize: '16px',
    textTransform: 'capitalize'
  }),
  menu: provided => ({
    ...provided,
    backgroundColor: colors.primary,
    margin: '1px 0',
    overflow: 'hidden'
  }),
  menuList: provided => ({
    ...provided,
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  }),
  indicatorSeparator: () => ({
    display: 'none'
  }),
  clearIndicator: provided => ({
    ...provided,
    color: colors.secondary,
    padding: '8px 5px',

    '&:hover': {
      color: colors.tertiary,
      cursor: 'pointer'
    }
  }),
  dropdownIndicator: (provided, { selectProps: { menuIsOpen } }) => ({
    ...provided,
    color: colors.secondary,
    transform: menuIsOpen && 'rotate(180deg)',
    padding: '8px 5px',
    '& svg path': {
      fill: menuIsOpen && colors.tertiary,
    },
    '&:hover': {
      color: colors.tertiary,
      cursor: 'pointer'
    }
  })
};
