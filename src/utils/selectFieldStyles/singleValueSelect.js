import colors from "../colors"; 

export const singleValueSelect = {
  option: (provided, state) => ({
    ...provided,
    borderLeft: `2px solid ${colors.white}`,
    backgroundColor: state.isFocused && 'transparent',
    color: state.isFocused && colors.black,
    cursor: 'pointer',
    fontSize: '16px',
    textTransform: 'capitalize',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',

    '&:hover': {
      color: colors.primaryLight,
      borderColor: colors.black,
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
    padding: '10.5px 5px',
    border: `1.5px solid ${colors.greyLight}`,
    borderRadius: '5px',
    borderColor: colors.greyLighter,
    boxShadow: 'none',

    '&:hover': {
      borderColor: colors.greyLighter,
      cursor: 'pointer',
    },

    '&.error': {
      borderColor: colors.red,
    },
  }),
  singleValue: provided => ({
    ...provided,
    fontSize: '16px',
    color: colors.black,
    textTransform: 'capitalize'
  }),
  menu: provided => ({
    ...provided,
    backgroundColor: colors.white,
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
    color: colors.black,
    padding: '8px 5px',

    '&:hover': {
      color: colors.primaryLight,
      cursor: 'pointer'
    }
  }),
  dropdownIndicator: (provided, { selectProps: { menuIsOpen } }) => ({
    ...provided,
    color: colors.black,
    transform: menuIsOpen && 'rotate(180deg)',
    padding: '8px 5px',
    '& svg path': {
      fill: menuIsOpen && colors.primaryLight,
    },
    '&:hover': {
      color: colors.primaryLight,
      cursor: 'pointer'
    }
  })
};
