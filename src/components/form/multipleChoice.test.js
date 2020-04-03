import React from "react";
import MultipleChoice from "./multipleChoice";
import { mount } from "enzyme";

describe("Multiple choice", () => {
  it("handles simple multiple choices", () => {
    const question = {
      questionId: 1,
      questionText: "Ce simptome ai?",
      type: "MULTIPLE_CHOICE",
      options: [
        {
          label: "Tuse",
          value: 0
        },
        {
          label: "Febra",
          value: 1
        },
        {
          label: "Dureri de cap",
          value: 2
        }
      ]
    };
    const onAnswerMock = jest.fn();
    const multipleChoice = mount(
      <MultipleChoice
        question={question}
        onAnswer={onAnswerMock}
        currentResponse={undefined}
      />
    );

    multipleChoice.find({ title: "Tuse" }).simulate("click");
    multipleChoice.find({ title: "Dureri de cap" }).simulate("click");

    expect(onAnswerMock).toHaveBeenCalledWith({
      questionId: 1,
      value: [0, 2]
    });
  });

  describe("others type of choice", () => {
    const question = {
      questionId: 1,
      questionText: "Ce simptome ai?",
      type: "MULTIPLE_CHOICE",
      options: [
        {
          label: "Tuse",
          value: 0
        },
        {
          label: "Febra",
          value: 1
        },
        {
          type: "OTHER",
          label: "Altceva",
          value: 2
        }
      ]
    };

    it("returns the content", () => {
      const onAnswerMock = jest.fn();
      const multipleChoice = mount(
        <MultipleChoice
          question={question}
          onAnswer={onAnswerMock}
          currentResponse={undefined}
        />
      );

      multipleChoice.find({ title: "Tuse" }).simulate("click");
      multipleChoice
        .find("input")
        .simulate("change", { target: { value: "Stranutat" } });

      expect(onAnswerMock).toHaveBeenLastCalledWith({
        questionId: 1,
        value: [0, "Stranutat"]
      });
    });

    it("handles multiple entries", () => {
      const onAnswerMock = jest.fn();
      const multipleChoice = mount(
        <MultipleChoice
          question={question}
          onAnswer={onAnswerMock}
          currentResponse={undefined}
        />
      );

      multipleChoice
        .find("input")
        .simulate("change", { target: { value: "Stranutat" } });

      multipleChoice
        .find("input")
        .simulate("change", { target: { value: "Curge nasul" } });

      expect(onAnswerMock).toHaveBeenLastCalledWith({
        questionId: 1,
        value: ["Curge nasul"]
      });
    });

    it("handles deletion", () => {
      const onAnswerMock = jest.fn();
      const multipleChoice = mount(
        <MultipleChoice
          question={question}
          onAnswer={onAnswerMock}
          currentResponse={undefined}
        />
      );

      multipleChoice.find({ title: "Tuse" }).simulate("click");

      multipleChoice
        .find("input")
        .simulate("change", { target: { value: "Stranutat" } });

      multipleChoice
        .find("input")
        .simulate("change", { target: { value: "" } });

      expect(onAnswerMock).toHaveBeenLastCalledWith({
        questionId: 1,
        value: [0]
      });
    });

    it("handles setting current response", () => {
      const multipleChoice = mount(
        <MultipleChoice
          question={question}
          onAnswer={() => {}}
          currentResponse={["curge nasul"]}
        />
      );

      const defaultValue = multipleChoice.find("input").props()["defaultValue"];

      expect(defaultValue).toEqual("curge nasul");
    });
  });
});
