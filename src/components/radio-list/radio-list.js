// import React from "react";
// import PropTypes from "prop-types";
// import "./radio-list.scss";

// export class RadioList extends React.PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   onChange_Input = x => {
//     this.props.onChange && this.props.onChange(x.currentTarget.value);
//   };

//   render() {
//     return (
//       <div className="radio-list">
//         <p>
//           {this.props.label}
//           {this.props.description && <p> {this.props.description}</p>}
//         </p>
//         {this.props.options &&
//           this.props.options.map(option => {
//             return (
//               <label key={`label_${option.value}_${option.key}`}>
//                 <input
//                   onChange={() =this.onChange_Input}
//                   key={`key_${option.value}_${option.key}`}
//                   type="radio"
//                   name={this.props.label}
//                   value={option.value}
//                   checked={option.checked}
//                 />
//                 {option.value}
//               </label>
//             );
//           })}
//       </div>
//     );
//   }
// }

import React from "react";
import PropTypes from "prop-types";
import "./radio-list.scss";

export const RadioList = ({ label, description, options, onChange, type }) => {
  const classNames = ["field", "radio-list"];
  if (type === "horizontal") {
    classNames.push("horizontal");
  }
  if (type === "vertical") {
    classNames.push("vertical");
  }
  return (
    <div className={classNames.join(" ")}>
      <label className="label">{label}</label>
      <h2 className="subtitle is-2">{description}</h2>
      <div className="control">
        {options &&
          options.map(option => {
            return (
              <label
                className="radio"
                key={`label_${option.value}_${option.key}`}
              >
                <input
                  key={`input_${option.value}_${option.key}`}
                  type="radio"
                  name={label}
                  onChange={args => {
                    onChange && onChange(args.currentTarget.value);
                  }}
                  value={option.value}
                  checked={option.checked}
                />
                {option.value}
              </label>
            );
          })}
      </div>
    </div>
  );
};

RadioList.propTypes = {
  label: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["vertical", "horizontal"]),
  props: PropTypes.node.IsOptional,
  options: PropTypes.node.isRequired,
  onChange: PropTypes.func
};

RadioList.defaultProps = {
  label: "",
  description: "",
  props: {},
  options: []
};
