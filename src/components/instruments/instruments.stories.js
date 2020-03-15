import React from "react";
import "./../../styles.scss";
import { Instruments } from "./instruments";
import { InstrumentsItem } from "../instruments-item/instruments-item";

export default { title: "Instruments" };

export const fullWidth = () => (
  <div>
    <Instruments layout="grid">
      <section>
        <InstrumentsItem
          color="#FF1616"
          title="Stiri oficiale si informații la zi"
          ctaText="Cele mai noi informații oficiale"
          ctaOnClick={() => alert("Button Clicked")}
        />
        <InstrumentsItem
          color="#FF1616"
          title="Stiri oficiale si informații la zi"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, duis pretium."
        />
        <InstrumentsItem
          color="#FF1616"
          title="Stiri oficiale si informații la zi"
          ctaText="Cele mai noi informații oficiale"
          ctaOnClick={() => alert("Button Clicked")}
        />
      </section>
      <section>
        <InstrumentsItem
          color="#FF1616"
          title="Stiri oficiale si informații la zi"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, duis pretium."
          ctaText="Cele mai noi informații oficiale"
          ctaOnClick={() => alert("Button Clicked")}
        />
      </section>
      <section>
        <InstrumentsItem
          color="#FF1616"
          title="Stiri oficiale si informații la zi"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, duis pretium."
        />
        <InstrumentsItem
          color="#FF1616"
          title="Stiri oficiale si informații la zi"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, duis pretium."
          ctaText="Cele mai noi informații oficiale"
          ctaOnClick={() => alert("Button Clicked")}
        />
      </section>
    </Instruments>
  </div>
);

export const oneColumn = () => (
  <div>
    <Instruments layout="column">
      <InstrumentsItem
        color="#FF1616"
        title="Stiri oficiale si informații la zi"
        ctaText="Cele mai noi informații oficiale"
        ctaOnClick={() => alert("Button Clicked")}
      />
      <InstrumentsItem
        color="#FF1616"
        title="Stiri oficiale si informații la zi"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, duis pretium."
      />
      <InstrumentsItem
        color="#FF1616"
        title="Stiri oficiale si informații la zi"
        ctaText="Cele mai noi informații oficiale"
        ctaOnClick={() => alert("Button Clicked")}
      />
      <InstrumentsItem
        color="#FF1616"
        title="Stiri oficiale si informații la zi"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, duis pretium."
        ctaText="Cele mai noi informații oficiale"
        ctaOnClick={() => alert("Button Clicked")}
      />
    </Instruments>
  </div>
);
