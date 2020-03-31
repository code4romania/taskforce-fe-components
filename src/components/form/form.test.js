import React from "react";
import { mount } from "enzyme";
import { ListHeader } from "../list-header/list-header";
import { ListItem } from "../list-item/list-item";
import { Form } from "./form";
import SingleChoice from "./singleChoice";
import FreeText from "./freeText";

const clickOnNext = form => {
  const forwardButton = form.find(".forward");
  forwardButton.simulate("click");
};

const writeInFreeText = (form, text) => {
  const inputText = form.find(FreeText).find("input");
  inputText.simulate("change", { target: { value: text } });
};

const clickOnSingleChoice = (form, choice) => {
  const yesAnswer = form.find(SingleChoice).find({ title: choice });
  yesAnswer.simulate("click");
};

function startForm(form) {
  form.find(".start").simulate("click");
}

const outcome = {
  label: "Everything okay!",
  value: 0
};

const expectHeaderText = (form, expected) => {
  expect(form.find(ListHeader).text()).toEqual(expected);
};

describe("Form", () => {
  it("See the final text after a simple form", () => {
    const mockFinishingForm = jest.fn();

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

    const form = mount(
      <Form
        data={oneQuestionForm}
        evaluateForm={() => {
          return outcome;
        }}
        onFinishingForm={mockFinishingForm}
      />
    );

    clickOnSingleChoice(form, "Da");
    clickOnNext(form);

    expectHeaderText(form, "Done!");

    const actualAnswers = mockFinishingForm.mock.calls[0][0].answers;
    expect(actualAnswers).toEqual([
      {
        id: 1,
        questionText: "Ai peste 60 de ani?",
        answer: "1"
      }
    ]);
  });

  it("Finalised the form with correct output when using a free text input", () => {
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
    const form = mount(
      <Form
        data={oneFreeTextForm}
        evaluateForm={() => {
          return outcome;
        }}
        onFinishingForm={mockFinishingForm}
      />
    );

    writeInFreeText(form, "Jane Doe");
    clickOnNext(form);

    expectHeaderText(form, "Done!");

    const actualAnswers = mockFinishingForm.mock.calls[0][0].answers;
    expect(actualAnswers).toEqual([
      {
        id: 1,
        questionText: "Care este numele tau?",
        answer: "Jane Doe"
      }
    ]);
  });

  it("Shows blurb at the beginning if it exists", () => {
    const formWithStartingBlurb = {
      title: "Form with starting blurb",
      formId: 1,
      firstNodeId: 1,
      intro: {
        title: "Intro",
        description: "Formular pentru starea ta"
      },
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
    const form = mount(
      <Form
        data={formWithStartingBlurb}
        evaluateForm={() => {
          return outcome;
        }}
        onFinishingForm={() => {}}
      />
    );

    expectHeaderText(form, "Intro");
    expect(form.find(ListItem).text()).toEqual("Formular pentru starea ta");
    startForm(form);
    writeInFreeText(form, "hello");
    clickOnNext(form);

    expectHeaderText(form, "Done!");
  });
});
