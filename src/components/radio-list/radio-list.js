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
  const classNames = ["radio-list"];
  if (type === "horizontal") {
    classNames.push("horizontal");
  }
  return (
    <ul className={classNames.join(" ")}>
      <section>
        {label}
        {description && <p> {description}</p>}
      </section>
      {options &&
        options.map(option => {
          return (
            <li key={`li_${option.value}_${option.key}`}>
              <label key={`label_${option.value}_${option.key}`}>
                <input
                  onChange={args => {
                    onChange && onChange(args.currentTarget.value);
                  }}
                  key={`key_${option.value}_${option.key}`}
                  type="radio"
                  name={label}
                  value={option.value}
                  checked={option.checked}
                />
                {option.value}
              </label>
            </li>
          );
        })}
    </ul>
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
