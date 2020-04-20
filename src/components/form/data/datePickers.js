export default {
  formId: 1,
  firstNodeId: 1,
  form: [
    {
      questionId: 1,
      questionText: "De la ce data ai inceput sa ai simptome?",
      type: "DATE_PICKER"
    },
    {
      questionId: 2,
      questionText: "La ce data si ora ai iesit afara?",
      type: "DATE_TIME_PICKER"
    },
    {
      questionId: 3,
      type: "FINAL",
      questionText: "Ce trebuie sa faci?",
      options: [
        {
          label: "Esti bine! Stai acasa!",
          value: 0
        },
        {
          label: "Suna medicul de familie! Dar stai acasa!",
          value: 1
        }
      ]
    }
  ]
};
