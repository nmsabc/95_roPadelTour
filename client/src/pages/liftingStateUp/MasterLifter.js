// https://beta.reactjs.org/learn/sharing-state-between-components

import React from "react";
import { useState } from "react";

function Panel({ title, children, isActive }) {
  //   const [isActive, setIsActive] = useState(false);
  const [isInActive, reActivate] = useState(false);
  return (
    <section className="master-lifter-panel">
      <div className="master-lifter-header">{title}</div>
      {isActive ?  (
        <p>{children}</p>
      ) : (
        <button onClick={() => reActivate(true)}>Show</button>
      )}
    </section>
  );
}

function MasterLifter() {
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel title="About" className="master-lifter-panel" isActive={true}>
        With a population of about 2 million, Almaty is Kazakhstan's largest
        city. From 1929 to 1997, it was its capital city.
      </Panel>

      <Panel title="Etymology" className="master-lifter-panel" isActive={true}>
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for
        "apple" and is often translated as "full of apples". In fact, the region
        surrounding Almaty is thought to be the ancestral home of the apple, and
        the wild <i lang="la">Malus sieversii</i> is considered a likely
        candidate for the ancestor of the modern domestic apple.
      </Panel>

      <Panel
        title="German translation"
        className="master-lifter-panel"
        isActive={true}
      >
        Mit rund 2 Millionen Einwohnern ist Almaty die größte Stadt Kasachstans.
        Stadt. Von 1929 bis 1997 war sie die Hauptstadt des Landes.
      </Panel>
    </>
  );
}

export default MasterLifter;
