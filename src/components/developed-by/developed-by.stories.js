import React from "react";
import "./../../styles.scss";
import { DevelopedBy } from "./developed-by";
import { withKnobs } from "@storybook/addon-knobs";

export default { title: "Developed By", decorators: [withKnobs] };

export const normal = () => <DevelopedBy />;
