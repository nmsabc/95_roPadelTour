// https://beta.reactjs.org/learn/sharing-state-between-components

import React from "react";
import { useState } from "react";

function Panel({ title, children, isActive, onShow }) {
  //   const [isActive, setIsActive] = useState(false);
  console.log(title, isActive);
  return (
    <section className="master-lifter-panel">
      <div className="master-lifter-header">{title}</div>
      {isActive ? <p>{children}</p> : <button onClick={onShow}>Show text</button>}
    </section>
  );
}

function MasterLifter() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel
        title="About"
        className="master-lifter-panel"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest
        city. From 1929 to 1997, it was its capital city.
      </Panel>

      <Panel
        title="Etymology"
        className="master-lifter-panel"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for
        "apple" and is often translated as "full of apples". In fact, the region
        surrounding Almaty is thought to be the ancestral home of the apple, and
        the wild <i lang="la">Malus sieversii</i> is considered a likely
        candidate for the ancestor of the modern domestic apple.
      </Panel>
    </>
  );
}

export default MasterLifter;
