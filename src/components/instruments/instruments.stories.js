import React from "react";
import "./../../styles.scss";
import { Instruments } from "./instruments";
import { InstrumentsItem } from "../instruments-item/instruments-item";

export default { title: "Instruments" };

const showMessage = () => alert("Hello, friend.");

export const fullWidth = () => (
  <div>
    <Instruments layout="grid">
      <section>
        <InstrumentsItem
          color="#05D6C7"
          title="Instalează-ți add-on-ul de depistat știrile false"
        />
        <InstrumentsItem
          color="#05D6C7"
          title="Stiri oficiale si informații la zi"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, duis pretium."
          ctaText="Cele mai noi informații oficiale"
          ctaOnClick={showMessage}
        />
      </section>
      <section>
        <InstrumentsItem
          color="#FF1616"
          title="Vrei să ajuți. Intră aici"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, duis pretium."
          ctaText="Centrul de sprijin"
          ctaOnClick={showMessage}
        />
      </section>
      <section>
        <InstrumentsItem
          color="#F5BCD6"
          title="Date în timp real"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, duis pretium."
          ctaText="Vezi situația curentă"
          ctaOnClick={showMessage}
        />
        <InstrumentsItem
          color="#FF1616"
          title="Vrei să ajuți. Intră aici"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, duis pretium."
          ctaText="Centrul de sprijin"
          ctaOnClick={showMessage}
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
        ctaOnClick={showMessage}
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
        ctaOnClick={showMessage}
      />
      <InstrumentsItem
        color="#FF1616"
        title="Stiri oficiale si informații la zi"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, duis pretium."
        ctaText="Cele mai noi informații oficiale"
        ctaOnClick={showMessage}
      />
    </Instruments>
  </div>
);
