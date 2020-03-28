import React from "react";
import { mount } from "enzyme";
import Form from "./form";
import Results from "./results";
import { ListHeader } from "../..";
import SingleChoice from "./singleChoice";
import FreeText from "./freeText";

describe("Form", () => {
  it("See the final text after a simple form", () => {
    const outcome = {
      label: "Everything okay!",
      value: 0
    };
    const oneQuestionForm = {
      title: "One question form",
      formId: 1,
      firstNodeId: 1,
      form: [
        {
          questionId: 1,
          questionText: "Ai peste 60 de ani?",
          type: "SINGLE_CHOICE",
          options: [
            {
              label: "Da",
              value: 1
            },
            {
              label: "Nu",
              value: 0
            }
          ]
        },
        {
          questionId: 2,
          questionText: "Done!",
          type: "FINAL",
          options: [
            outcome,
            {
              label: "Stay at home",
              value: 1
            }
          ]
        }
      ]
    };

    const component = mount(
      <Form
        data={oneQuestionForm}
        evaluateForm={() => {
          return outcome;
        }}
        onFinishingForm={() => {}}
      />
    );

    const yesAnswer = component.find(SingleChoice).find({ title: "Da" });
    yesAnswer.simulate("click");

    const forwardButton = component.find(".forward");
    forwardButton.simulate("click");

    const resultsHeader = component.find(Results).find(ListHeader);

    expect(resultsHeader.text()).toEqual("Done!");
  });

  it("Finalised the form with correct output when using a free text input", () => {
    const outcome = {
      label: "Everything okay!",
      value: 0
    };
    const oneFreeTextForm = {
      title: "One question form",
      formId: 1,
      firstNodeId: 1,
      form: [
        {
          questionId: 1,
          questionText: "Care este numele tau?",
          type: "FREE_TEXT",
          options: []
        },
        {
          questionId: 2,
          questionText: "Done!",
          type: "FINAL",
          options: [
            outcome,
            {
              label: "Stay at home",
              value: 1
            }
          ]
        }
      ]
    };

    const mockFinishingForm = jest.fn();
    const component = mount(
      <Form
        data={oneFreeTextForm}
        evaluateForm={() => {
          return outcome;
        }}
        onFinishingForm={mockFinishingForm}
      />
    );

    const inputText = component.find(FreeText).find("input");
    inputText.simulate("change", { target: { value: "Jane Doe" } });

    const forwardButton = component.find(".forward");
    forwardButton.simulate("click");

    const resultsHeader = component.find(Results).find(ListHeader);

    expect(resultsHeader.text()).toEqual("Done!");

    const actualAnswers = mockFinishingForm.mock.calls[0][0].answers;
    expect(actualAnswers).toContainEqual({
      id: 1,
      questionText: "Care este numele tau?",
      answer: "Jane Doe"
    });
  });
});
