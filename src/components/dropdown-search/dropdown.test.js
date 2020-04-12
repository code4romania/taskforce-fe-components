import React from "react";
import { DropdownSearch } from "./dropdown-search";
import { mount } from "enzyme";

const clickOnDropdownSearchTitle = dropdown => {
  findDropdownSearchTitle(dropdown).simulate("click");
};

const selectOptionFromDropdown = (dropdownSearch, optionToSelect) => {
  const result = findDropdownOption(dropdownSearch, optionToSelect);
  result.simulate("click");
};

const findDropdownSearchTitle = dropdown => {
  return dropdown.find(".header-filter");
};

const findDropdownOption = (dropdownSearch, optionToFind) => {
  return dropdownSearch.find("div").find({ id: optionToFind });
};

const findSearchInput = dropdown => {
  return dropdown.find("input");
};

const typeTextInSearchInput = (dropdownSearch, input) => {
  findSearchInput(dropdownSearch).simulate("change", {
    target: { value: input }
  });
};

describe("Dropdown Search", () => {
  const title = "Judet";
  const values = ["Alba", "Bucuresti"];

  it("should call onSelect when an item in the dropdown has been selected", () => {
    const setSelected = jest.fn();
    const optionToSelect = "Bucuresti";

    const dropdownSearch = mount(
      <DropdownSearch title={title} values={values} onSelect={setSelected} />
    );
    clickOnDropdownSearchTitle(dropdownSearch, title);
    selectOptionFromDropdown(dropdownSearch, optionToSelect);

    expect(setSelected).toHaveBeenCalledTimes(1);
  });

  it("should find element when the dropdown is open", () => {
    const dropdownSearch = mount(
      <DropdownSearch
        title={title}
        values={values}
        onSelect={() => {}}
        isAlwaysOpen={true}
      />
    );
    expect(findDropdownOption(dropdownSearch, "Alba")).toHaveLength(1);
  });

  it("should not find element when the dropdown is not open", () => {
    const dropdownSearch = mount(
      <DropdownSearch
        title={title}
        values={values}
        onSelect={() => {}}
        isAlwaysOpen={false}
      />
    );

    expect(findDropdownOption(dropdownSearch, "Alba")).toHaveLength(0);
  });

  it("should update title when option is selected and close dropdown", () => {
    const optionToSelect = "Bucuresti";
    const dropdownSearch = mount(
      <DropdownSearch
        title={title}
        values={values}
        onSelect={() => {}}
        isAlwaysOpen={false}
      />
    );

    clickOnDropdownSearchTitle(dropdownSearch, title);
    selectOptionFromDropdown(dropdownSearch, optionToSelect);

    expect(findDropdownSearchTitle(dropdownSearch).text()).toEqual(
      optionToSelect
    );

    const optionsFound = findDropdownOption(dropdownSearch, optionToSelect);
    expect(optionsFound).toHaveLength(0);
  });

  describe("the searchInput behaviour", () => {
    it("should not find search input when the dropdown is not open", () => {
      const dropdownSearch = mount(
        <DropdownSearch title={title} values={values} onSelect={() => {}} />
      );

      expect(findSearchInput(dropdownSearch)).toHaveLength(0);
    });

    it("should not find search input when showSearchInput is false", () => {
      const dropdownSearch = mount(
        <DropdownSearch
          title={title}
          values={values}
          onSelect={() => {}}
          showSearchInput={false}
        />
      );
      clickOnDropdownSearchTitle(dropdownSearch, title);

      expect(findSearchInput(dropdownSearch)).toHaveLength(0);
    });

    it("should filter elements when user types in the search input", () => {
      const input = "Al";
      const dropdownSearch = mount(
        <DropdownSearch
          title={title}
          values={values}
          onSelect={() => {}}
          isAlwaysOpen={false}
        />
      );
      clickOnDropdownSearchTitle(dropdownSearch, title);
      typeTextInSearchInput(dropdownSearch, input);

      expect(findDropdownOption(dropdownSearch, "Bucuresti")).toHaveLength(0);
      expect(findDropdownOption(dropdownSearch, "Alba")).toHaveLength(1);
    });

    it("should search for upper case input", () => {
      const input = "B";
      const dropdownSearch = mount(
        <DropdownSearch
          title={title}
          values={values}
          onSelect={() => {}}
          isAlwaysOpen={false}
        />
      );
      clickOnDropdownSearchTitle(dropdownSearch, title);
      typeTextInSearchInput(dropdownSearch, input);

      expect(findDropdownOption(dropdownSearch, "Bucuresti")).toHaveLength(1);
      expect(findDropdownOption(dropdownSearch, "Alba")).toHaveLength(1);
    });
  });
});
