import React from "react";
import "./../../styles.scss";
import { DevelopedBy } from "./developed-by";
import { withKnobs } from "@storybook/addon-knobs";

export default { title: "Developed By", decorators: [withKnobs] };

export const oneLine = () => <DevelopedBy />;

export const twoLines = () => <DevelopedBy showSecondLine={true} />;
