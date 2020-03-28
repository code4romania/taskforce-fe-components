/* eslint-disable max-len */
import React from "react";
import "./../../styles.scss";
import { Accordion } from "./accordion";

export default { title: "Accordion" };

export const WithChildren = () => {
  const accordionData = {
    title:
      "De ce ar dori cineva să dea vina pe/ sau să evite anumiți indivizi și anumite grupuri din cauza epidemiei?"
  };

  return (
    <Accordion title={accordionData.title}>
      <img src="//code4.ro/images/logo-full.svg" />
      <p>
        Momentan nu există un vaccin preventiv pentru coronavirusul care
        cauzează COVID-19. Cea mai sigură metodă de evitare a infecției este să
        evitați expunerea la virus prin limitarea contactului cu alte persoane
        sau autoizolare (așa-numitele metode de distanțare socială).
      </p>
      <p>Virusul se răspândește mai ales de la om la om:</p>
      <ul>
        <li>Între persoane care se află în contact direct (sub 1,5 m)</li>
        <li>
          Prin picături respiratorii produse de o persoană infectată care
          strănută sau care tușește. Aceste picături microscopice pot ajunge în
          gura sau nasul persoanelor aflate în apropiere sau pot fi inhalate
          direct în plămâni.
        </li>
      </ul>
      <p>Măsuri Preventive:</p>
      <ul>
        <li>
          Spălați-vă des pe mâini cu apă și săpun pentru cel puțin 20 de
          secunde, mai ales după ce ați fost în locații publice sau după ce ați
          strănutat, tușit sau v-ați suflat nasul.
        </li>
        <li>
          Dacă nu aveți posibilitatea de a vă spăla pe mâini, folosiți un
          dezinfectant cu cel puțin 60% alcool. Acoperiți toată suprafața
          mâinilor și frecați mâinile până sunt uscate.
        </li>
        <li>
          Evitați să vă atingeți fața, în special gura nasul sau ochii cu
          mâinile murdare.
        </li>
        <li>
          Evitați contactul apropiat cu persoane care prezintă simptome
          respiratorii
        </li>
        <li>
          Distanțați-vă social de alte persoane, mai ales dacă COVID-19 se
          răspândește în comunitatea dumneavoastră. Acest lucru e în special
          important pentru persoane cu risc ridicat de îmbolnăvire gravă.
        </li>
      </ul>
      <p>Luați măsuri pentru a îi proteja pe alții:</p>
      <ul>
        <li>Stați acasă dacă sunteți bolnav.</li>
        <li>
          Dacă prezentați simptome specifice (tuse seacă repetată, febră,
          dificultăți în respirare), contactați-vă medicul de familie pentru
          stabilirea posibilității infecției și pentru stabilirea testării
          pentru noul coronavirus la domiciliu. Pentru urgențe apelați numărul
          de urgență 112 și menționați simptomele dumneavoastră.
        </li>
        <li>
          Acoperiți-vă gura și nasul când strănutați sau tușiți cu un șervețel
          de unică folosință. Aruncați șervețelele folosite. Dacă nu aveți un
          șervețel la îndemână acoperiți-vă fața cu interiorul cotului.
        </li>
        <li>
          Spălați-vă imediat pe mâini cu apă și săpun pentru cel puțin 20 de
          secunde. Dacă nu vă puteți spăla folosiți dezinfectant cu cel puțin
          60% alcool.
        </li>
        <li>Purtați mască dacă sunteți bolnav.</li>
        <li>
          Dacă sunteți bolnav cu simptome respiratorii purtați o mască în
          preajma altor persoane, inclusiv înainte de prezentarea într-un
          cabinet medical. Dacă nu puteți purta mască (de exemplu dacă aveți
          dificultăți de respirație) faceți tot posibilul pentru a vă acoperi
          tusea sau strănutul. Persoanele care vă îngrijesc trebuie să poarte o
          mască atunci când intră în camera în care vă aflați.
        </li>
        <li>
          Dacă nu sunteți bolnav nu este necesar să purtați mască, decât dacă
          aveți grijă de o persoană bolnavă (care nu poate purta mască). Măștile
          protectoare s-ar putea să fie în numere limitate și trebuiesc păstrate
          pentru personalul medical și persoanele ce îngrijesc persoanele
          bolnave.
        </li>
        <li>
          Dacă sunteți bolnav sau îngrijiți o persoană bolnavă, curățați și
          dezinfectați suprafețele atinse frecvent. Acestea includ mese, clanțe,
          comutatoare, blaturi mânere, birouri, telefoane, tastaturi, toalete,
          robineți și chiuvete.
        </li>
        <li>
          Curățați suprafețele murdare vizibil cu apă și săpun înainte de
          dezinfectare.
        </li>
      </ul>
      <p>
        Pentru a dezinfecta folosiți produse pe bază de clor, alcool peste 70%
        (de exemplu alcool sanitar) sau alte substanțe marcate ca fiind biocide
        sau virucide. Urmăriți instrucțiunile de pe produse pentru dozaj,
        aerisirea spațiului după dezinfectare sau perioada de dezinfectare.
      </p>
      <p>Fiți Pregătiți:</p>
      <ul>
        <li>
          Asigurați-vă că aveți un stoc din medicamentele pe care le luați în
          mod curent în caz că trebuie să stați acasă o perioadă mai
          îndelungată.
        </li>
        <li>
          Asigurați-vă că aveți medicamente fără rețetă pentru tratarea
          simptomelor afecțiunilor respiratorii.{" "}
        </li>
        <li>
          Faceți un mic stoc de produse esențiale neperisabile pentru a evita
          deplasările nenecesare.
        </li>
        <li>
          Consultați medicul de familie pentru mai multe detalii despre cum să
          vă monitorizați starea de sănătate pentru simptome.
        </li>
        <li>
          Țineți contactul cu prieteni sau membri familiei prin telefon sau
          internet - e posibil să aveți nevoie de ajutor cu cumpărături sau
          asistență medicală, mai ales dacă sunteți în grupele de risc ridicat.
        </li>
      </ul>
    </Accordion>
  );
};

export const WithContentProp = () => {
  const accordionData = {
    title:
      "De ce ar dori cineva să dea vina pe/ sau să evite anumiți indivizi și anumite grupuri din cauza epidemiei?",
    content: `
            <p>Momentan nu există un vaccin preventiv pentru coronavirusul care cauzează COVID-19.
Cea mai sigură metodă de evitare a infecției este să evitați expunerea la virus prin limitarea contactului cu alte persoane sau autoizolare (așa-numitele metode de distanțare socială).
</p>
            <p>Virusul se răspândește mai ales de la om la om:</p>
            <ul>
                <li>Între persoane care se află în contact direct (sub 1,5 m)</li>
                <li>Prin picături respiratorii produse de o persoană infectată care strănută sau care tușește. Aceste picături microscopice pot ajunge în gura sau nasul persoanelor aflate în apropiere sau pot fi inhalate direct în plămâni.</li>
            </ul>
            <p>Măsuri Preventive:</p>
            <ul>
                <li>Spălați-vă des pe mâini cu apă și săpun pentru cel puțin 20 de secunde, mai ales după ce ați fost în locații publice sau după ce ați strănutat, tușit sau v-ați suflat nasul.</li>
                <li>Dacă nu aveți posibilitatea de a vă spăla pe mâini, folosiți un dezinfectant  cu cel puțin 60% alcool. Acoperiți toată suprafața mâinilor și frecați mâinile până sunt uscate.</li>
                <li>Evitați să vă atingeți fața, în special gura nasul sau ochii cu mâinile murdare.</li>
                <li>Evitați contactul apropiat cu persoane care prezintă simptome respiratorii</li>
                <li>Distanțați-vă social de alte persoane, mai ales dacă COVID-19 se răspândește în comunitatea dumneavoastră. Acest lucru e în special important pentru persoane cu risc ridicat de îmbolnăvire gravă.</li>
            </ul>
            <p>Luați măsuri pentru a îi proteja pe alții:</p>
            <ul>
                <li>Stați acasă dacă sunteți bolnav.</li>
                <li>Dacă prezentați simptome specifice (tuse seacă repetată, febră, dificultăți în respirare),  contactați-vă medicul de familie pentru stabilirea posibilității infecției și pentru stabilirea testării pentru noul coronavirus la domiciliu. Pentru urgențe apelați numărul de urgență 112 și menționați simptomele dumneavoastră.</li>
                <li>Acoperiți-vă gura și nasul când strănutați sau tușiți cu un șervețel de unică folosință. Aruncați șervețelele folosite. Dacă nu aveți un șervețel la îndemână acoperiți-vă fața cu interiorul cotului.</li>
                <li>Spălați-vă imediat pe mâini cu apă și săpun pentru cel puțin 20 de secunde. Dacă nu vă puteți spăla folosiți dezinfectant cu cel puțin 60% alcool.</li>
                <li>Purtați mască dacă sunteți bolnav.</li>
                <li>Dacă sunteți bolnav cu simptome respiratorii purtați o mască în preajma altor persoane, inclusiv înainte de prezentarea într-un cabinet medical. Dacă nu puteți purta mască (de exemplu dacă aveți dificultăți de respirație) faceți tot posibilul pentru a vă acoperi tusea sau strănutul. Persoanele care vă îngrijesc trebuie să poarte o mască atunci când intră în camera în care vă aflați.</li>
                <li>Dacă nu sunteți bolnav nu este necesar să purtați mască, decât dacă aveți grijă de o persoană bolnavă (care nu poate purta mască). Măștile protectoare s-ar putea să fie în numere limitate și trebuiesc păstrate pentru personalul medical și persoanele ce îngrijesc persoanele bolnave.</li>
                <li>Dacă sunteți bolnav sau îngrijiți o persoană bolnavă, curățați și dezinfectați suprafețele atinse frecvent. Acestea includ mese, clanțe, comutatoare, blaturi mânere, birouri, telefoane, tastaturi, toalete, robineți și chiuvete.</li>
                <li>Curățați suprafețele murdare vizibil cu apă și săpun înainte de dezinfectare.</li>
            </ul>
            <p>Pentru a dezinfecta folosiți produse pe bază de clor, alcool peste 70% (de exemplu alcool sanitar) sau alte substanțe marcate ca fiind biocide sau virucide. Urmăriți instrucțiunile de pe produse pentru dozaj, aerisirea spațiului după dezinfectare sau perioada de dezinfectare.</p>
            <p>Fiți Pregătiți:</p>
            <ul>
                <li>Asigurați-vă că aveți un stoc din medicamentele pe care le luați în mod curent în caz că trebuie să stați acasă o perioadă mai îndelungată.</li>
                <li>Asigurați-vă că aveți medicamente fără rețetă pentru tratarea simptomelor afecțiunilor respiratorii. </li>
                <li>Faceți un mic stoc de produse esențiale neperisabile pentru a evita deplasările nenecesare.</li>
                <li>Consultați medicul de familie pentru mai multe detalii despre cum să vă monitorizați starea de sănătate pentru simptome.</li>
                <li>Țineți contactul cu prieteni sau membri familiei prin telefon sau internet - e posibil să aveți nevoie de ajutor cu cumpărături sau asistență medicală, mai ales dacă sunteți în grupele de risc ridicat.</li>
            </ul>
        `
  };

  return (
    <Accordion
      title={accordionData.title}
      content={
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: accordionData.content }}
        />
      }
    />
  );
};
