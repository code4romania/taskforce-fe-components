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
      value: { "0": true, "2": true }
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

    const questionWithMultipleFreeText = {
      questionId: 1,
      questionText: "Ce simptome ai?",
      type: "MULTIPLE_CHOICE",
      options: [
        {
          label: "Tuse",
          value: 0
        },
        {
          type: "OTHER",
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
        value: { "0": true, "2": "Stranutat" }
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
        value: { "2": "Curge nasul" }
      });
    });

    it("handles multiple free text entries", () => {
      const onAnswerMock = jest.fn();
      const multipleChoice = mount(
        <MultipleChoice
          question={questionWithMultipleFreeText}
          onAnswer={onAnswerMock}
          currentResponse={undefined}
        />
      );

      multipleChoice
        .find({ label: "Febra" })
        .find("input")
        .simulate("change", { target: { value: "Stranutat" } });

      multipleChoice
        .find({ label: "Altceva" })
        .find("input")
        .simulate("change", { target: { value: "Curge nasul" } });

      expect(onAnswerMock).toHaveBeenLastCalledWith({
        questionId: 1,
        value: { "1": "Stranutat", "2": "Curge nasul" }
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
        value: { "0": true }
      });
    });

    it("handles setting current response", () => {
      const multipleChoice = mount(
        <MultipleChoice
          question={questionWithMultipleFreeText}
          onAnswer={() => {}}
          currentResponse={{ "2": "curge nasul" }}
        />
      );

      const defaultValue = multipleChoice
        .find({ label: "Altceva" })
        .find("input")
        .props()["defaultValue"];

      expect(defaultValue).toEqual("curge nasul");
    });
  });
});
