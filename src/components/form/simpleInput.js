export default {
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
        {
          label: "Everything okay!",
          value: 0
        },
        {
          label: "Stay at home",
          value: 1
        }
      ]
    }
  ]
};
