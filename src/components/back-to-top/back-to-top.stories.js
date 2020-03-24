import React from "react";
import BackToTop from "./back-to-top";

export default { title: "Back To Top" };

export const Default = () => <BackToTop />;

// export const withPositioning = () => <BackToTop bottom={230} right={150} />;

// export const withShowUnder = () => <BackToTop showUnder={150} />;

export const withSizes = () => <BackToTop width={100} height={100} />;
