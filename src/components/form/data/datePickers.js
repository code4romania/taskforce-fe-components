export default {
  formId: 1,
  firstNodeId: 1,
  title: "Date pickers example",
  form: [
    {
      questionId: 1,
      questionText: "De la ce data ai inceput sa ai simptome?",
      type: "DATE_PICKER"
    },
    {
      questionId: 2,
      questionText: "De la ce data re-incepi lucrul?",
      type: "DATE_PICKER",
      allowFuture: true
    },
    {
      questionId: 3,
      questionText: "La ce data si ora ai iesit afara?",
      type: "DATE_TIME_PICKER"
    },
    {
      questionId: 4,
      questionText: "La ce data si ora esti programat la medic?",
      type: "DATE_TIME_PICKER",
      allowFuture: true
    },
    {
      questionId: 5,
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
