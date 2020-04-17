import React, { useState } from "react";
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
  return dropdown.find(".dropdown-search-filter");
};

const findDropdownOption = (dropdownSearch, optionToFind) => {
  return dropdownSearch.find(
    ".dropdown-search-options__value[children='" + optionToFind + "']"
  );
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
  const options = [
    { value: 1, label: "Alba" },
    { value: 2, label: "Bucuresti" }
  ];

  it("should call onSelect when an item in the dropdown has been selected", () => {
    const setSelected = jest.fn();
    const optionToSelect = "Bucuresti";

    const dropdownSearch = mount(
      <DropdownSearch title={title} options={options} onSelect={setSelected} />
    );
    clickOnDropdownSearchTitle(dropdownSearch, title);
    selectOptionFromDropdown(dropdownSearch, optionToSelect);

    expect(setSelected).toHaveBeenCalledTimes(1);
    expect(setSelected).toHaveBeenCalledWith({ value: 2, label: "Bucuresti" });
  });

  it("should find element when the dropdown is open", () => {
    const dropdownSearch = mount(
      <DropdownSearch
        title={title}
        options={options}
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
        options={options}
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
        options={options}
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

  it("should update the options when new options are passed in from props", () => {
    const TestContainer = () => {
      const [currentOptions, setOptions] = useState([]);

      return (
        <div>
          <DropdownSearch
            title={title}
            options={currentOptions}
            onSelect={() => {}}
            isAlwaysOpen={true}
          />
          <button onClick={() => setOptions(options)}>Change</button>
        </div>
      );
    };
    const dropdownSearch = mount(<TestContainer />);
    expect(findDropdownOption(dropdownSearch, "Alba")).toHaveLength(0);
    dropdownSearch.find("button").simulate("click");
    expect(findDropdownOption(dropdownSearch, "Alba")).toHaveLength(1);
  });

  describe("the searchInput behaviour", () => {
    it("should not find search input when the dropdown is not open", () => {
      const dropdownSearch = mount(
        <DropdownSearch title={title} options={options} onSelect={() => {}} />
      );

      expect(findSearchInput(dropdownSearch)).toHaveLength(0);
    });

    it("should not find search input when showSearchInput is false", () => {
      const dropdownSearch = mount(
        <DropdownSearch
          title={title}
          options={options}
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
          options={options}
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
          options={options}
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
