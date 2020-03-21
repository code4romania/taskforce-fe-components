import React from "react";
import "./../../styles.scss";
import { Instruments } from "./instruments";
import { InstrumentsItem } from "../instruments-item/instruments-item";

export default { title: "Instruments" };

const showMessage = () => alert("Hello, friend.");

export const grid = () => (
  <Instruments layout="grid">
    <section>
      <InstrumentsItem
        color="yellow"
        title="Instalează-ți add-on-ul de depistat știrile false"
      />
      <InstrumentsItem
        color="green"
        title="Stiri oficiale si informații la zi"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, duis pretium."
        ctaText="Cele mai noi informații oficiale"
        onClick={showMessage}
      />
    </section>
    <section>
      <InstrumentsItem
        color="red"
        title="Vrei să ajuți. Intră aici"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, duis pretium."
        ctaText="Centrul de sprijin"
        onClick={showMessage}
      />
    </section>
    <section>
      <InstrumentsItem
        color="pink"
        title="Date în timp real"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, duis pretium."
        ctaText="Vezi situația curentă"
        onClick={showMessage}
      />
      <InstrumentsItem
        color="yellow"
        title="Vrei să ajuți. Intră aici"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, duis pretium."
        ctaText="Centrul de sprijin"
        onClick={showMessage}
      />
    </section>
  </Instruments>
);

export const oneColumn = () => (
  <Instruments layout="column">
    <InstrumentsItem
      color="green"
      title="Instalează-ți add-on-ul de depistat știrile false"
    />
    <InstrumentsItem
      color="green"
      title="Stiri oficiale si informații la zi"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, duis pretium."
      ctaText="Cele mai noi informații oficiale"
      onClick={showMessage}
    />
    <InstrumentsItem
      color="red"
      title="Vrei să ajuți. Intră aici"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, duis pretium."
      ctaText="Centrul de sprijin"
      onClick={showMessage}
    />
    <InstrumentsItem
      color="pink"
      title="Date în timp real"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, duis pretium."
      ctaText="Vezi situația curentă"
      onClick={showMessage}
    />
  </Instruments>
);
