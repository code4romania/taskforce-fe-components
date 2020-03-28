export default {
  firstNodeId: 0,
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
      questionText: "Care este sexul tău?",
      type: "SINGLE_CHOICE",
      options: [
        {
          label: "Masculin",
          value: 1
        },
        {
          label: "Feminin",
          value: 2
        }
      ]
    },
    {
      questionId: 3,
      questionText: "Ești fumător/fumătoare? (inclusiv țigări electronice)",
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
      questionId: 4,
      type: "FINAL"
    }
  ]
};
