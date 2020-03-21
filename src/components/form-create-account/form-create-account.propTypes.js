import PropTypes from "prop-types";

const formCreateAccountPropTypes = {
  dataProcessingApprovalText: PropTypes.node.string,
  objectChanged: PropTypes.func,
  ageOptions: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      selected: PropTypes.bool
    })
  ),
  genderOptions: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      selected: PropTypes.bool
    })
  ),
  illnesesOptions: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      selected: PropTypes.bool
    })
  ),
  lastPeriodInformationOptions: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      checked: PropTypes.bool
    })
  ),

  countriesList: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      checked: PropTypes.bool
    })
  ),
  citiesList: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      checked: PropTypes.bool,
      countryCode: PropTypes.string.isRequired
    })
  )
};

export default formCreateAccountPropTypes;
