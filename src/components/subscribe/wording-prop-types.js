import PropTypes from "prop-types";

export const wordingPropTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
};

export const defaultWordingProps = {
  title: "Rămâi informat",
  subTitle:
    "Abonează-te la newsletter și te ținem la curent cu cele mai importante\n" +
    "informații și cu toate soluțiile digitale pe care le dezvoltăm în cadrul acestui proiect.",
  placeholder: "Introdu aici adresa de e-mail",
  button: "Abonează-mă",
};
