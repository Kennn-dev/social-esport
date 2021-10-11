import Select, {
  GroupBase,
  OptionProps,
  Props,
  SingleValueProps,
  IndicatorsContainerProps,
  ControlProps,
} from "react-select";
import * as colors from "../../constains/colors";

const customStyles: any = {
  control: (provided: any, state: ControlProps) => ({
    ...provided,
    borderRadius: 8,

    backgroundColor: colors.bgBlock2,
    padding: "0.21rem 0.5rem",
    border: state.menuIsOpen ? `1px solid ${colors.gray}` : "none",
  }),
  singleValue: (provided: any, state: SingleValueProps) => ({
    ...provided,
    fontWeight: "bold",
    color: colors.white,
  }),

  indicatorsContainer: (provided: any, state: IndicatorsContainerProps) => ({
    ...provided,
    color: colors.white,
    // backgroundColor: colors.bgBlock1,
  }),
  menu: (provided: any, state: any) => ({
    ...provided,

    borderRadius: 8,
    backgroundColor: colors.bgBlock2,
    padding: "15px 0",
  }),
  option: (provided: any, state: OptionProps) => ({
    ...provided,
    color: state.isSelected ? colors.primary : colors.white,
    padding: "10px 20px",
    backgroundColor: state.isFocused ? colors.bgBlock4 : colors.bgBlock2,

    ":active": {
      backgroundColor: colors.primary,
    },
  }),
};

function SelectInput<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(props: Props<Option, IsMulti, Group>) {
  return (
    <Select
      className={"disabled-focus"}
      components={{ IndicatorSeparator: () => null }}
      {...props}
      styles={customStyles}
    />
  );
}

export default SelectInput;
