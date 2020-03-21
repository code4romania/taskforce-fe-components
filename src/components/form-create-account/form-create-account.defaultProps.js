const formCreateAccountDefaultValues = {
  ageOptions: [
    { text: "10", value: "10" },
    { text: "20", value: "20" },
    { text: "30", value: "30" }
  ],
  genderOptions: [
    { value: "M", text: "Masculin" },
    { value: "F", text: "Feminin" },
    { value: "O", text: "Altul" }
  ],
  illnesesOptions: [
    { value: "Boli Cronice", text: "Boli Cronice" },
    { value: "Diabet", text: "Diabet" },
    { value: "Hipertensiune", text: "Hipertensiune" }
  ],
  lastPeriodInformationOptions: [
    { value: "Auto izolare", text: "Auto izolare" },
    { value: "Carantină la domiciliu", text: "Carantină la domiciliu" },
    { value: "Carantină specializată", text: "Carantină specializată" },
    { value: "Niciuna", text: "Niciuna" }
  ],
  countriesList: [
    { value: "", text: "" },
    { value: "RO", text: "Romania" },
    { value: "BG", text: "Bulgaria" }
  ],
  citiesList: [
    { value: "Bucuresti", text: "Bucuresti", countryCode: "RO" },
    { value: "Otopeni", text: "Otopeni", countryCode: "RO" },
    { value: "Miercurea Ciuc", text: "Miercurea Ciuc", countryCode: "RO" },
    { value: "Cluj", text: "Cluj", countryCode: "RO" },
    { value: "Sofia", text: "Sofia", countryCode: "BG" },
    { value: "Ruse", text: "Ruse", countryCode: "BG" },
    { value: "Haskovo", text: "Haskovo", countryCode: "BG" }
  ],
  dataProcessingApprovalText:
    '&nbsp;&nbsp;&nbsp; Prin această bifă îți exprimi acordul ca datele furnizate de tine prin acest formular să fie procesate exclusiv in scopul de a te pune în legătură cu un specialist care să te ajute cu problema pentru care cauți soluție. <a href="#" onClick="return false;"> Aici puteți găsi regulamentul nostru cu privire la prelucrarea datelor cu caracter personal.</a>'
};

export default formCreateAccountDefaultValues;
