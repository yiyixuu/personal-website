"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import "./nat.scss";

export default function NatPage() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const noBtnRef = useRef<HTMLButtonElement>(null);
  const [noStyle, setNoStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    el.classList.add("not-loaded");
    const c = setTimeout(() => {
      el.classList.remove("not-loaded");
    }, 1000);
    return () => {
      clearTimeout(c);
      el.classList.remove("not-loaded");
    };
  }, []);

  const [noEscaped, setNoEscaped] = useState(false);
  const [hoverEnabled, setHoverEnabled] = useState(false);

  // Enable hover only after the bloom-buttons animation finishes (~5.8s)
  useEffect(() => {
    const t = setTimeout(() => setHoverEnabled(true), 6000);
    return () => clearTimeout(t);
  }, []);

  const handleNoHover = useCallback(() => {
    if (!hoverEnabled) return;
    setNoEscaped(true);
    const btnWidth = 150;
    const btnHeight = 60;
    const margin = 20;
    const maxX = window.innerWidth - btnWidth - margin;
    const maxY = window.innerHeight - btnHeight - margin;
    const newX = margin + Math.random() * (maxX - margin);
    const newY = margin + Math.random() * (maxY - margin);
    setNoStyle({
      left: `${newX}px`,
      top: `${newY}px`,
    });
  }, [hoverEnabled]);

  const [yesClicked, setYesClicked] = useState(false);

  const handleYesClick = useCallback(() => {
    setYesClicked(true);
  }, []);

  const d = (val: string) => ({ "--d": val } as React.CSSProperties);

  return (
    <div ref={wrapperRef} className={`nat-page ${yesClicked ? "nat-page--yes" : ""}`}>
      <div className="night"></div>

      {/* White fade overlay + heart */}
      {yesClicked && (
        <div className="yes-overlay">
          <div className="yes-heart">
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" fill="currentColor"/>
            </svg>
          </div>
        </div>
      )}

      <div className="bloom-text">
        <h1>Natalie, Will You Be My Valentine?</h1>
      </div>
      <div className="bloom-buttons">
        <button className="bloom-btn bloom-btn--yes" onClick={handleYesClick}>Yes</button>
        <button
          className={`bloom-btn bloom-btn--no ${noEscaped ? "bloom-btn--hidden" : ""}`}
          onMouseEnter={handleNoHover}
        >
          No
        </button>
      </div>
      {noEscaped && (
        <button
          ref={noBtnRef}
          className="bloom-btn bloom-btn--no bloom-no-escaped"
          style={noStyle}
          onMouseEnter={handleNoHover}
        >
          No
        </button>
      )}
      <div className="flowers">
        {/* Flower 1 */}
        <div className="flower flower--1">
          <div className="flower__leafs flower__leafs--1">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__white-circle"></div>
            <div className="flower__light flower__light--1"></div>
            <div className="flower__light flower__light--2"></div>
            <div className="flower__light flower__light--3"></div>
            <div className="flower__light flower__light--4"></div>
            <div className="flower__light flower__light--5"></div>
            <div className="flower__light flower__light--6"></div>
            <div className="flower__light flower__light--7"></div>
            <div className="flower__light flower__light--8"></div>
          </div>
          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1"></div>
            <div className="flower__line__leaf flower__line__leaf--2"></div>
            <div className="flower__line__leaf flower__line__leaf--3"></div>
            <div className="flower__line__leaf flower__line__leaf--4"></div>
            <div className="flower__line__leaf flower__line__leaf--5"></div>
            <div className="flower__line__leaf flower__line__leaf--6"></div>
          </div>
        </div>

        {/* Flower 2 */}
        <div className="flower flower--2">
          <div className="flower__leafs flower__leafs--2">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__white-circle"></div>
            <div className="flower__light flower__light--1"></div>
            <div className="flower__light flower__light--2"></div>
            <div className="flower__light flower__light--3"></div>
            <div className="flower__light flower__light--4"></div>
            <div className="flower__light flower__light--5"></div>
            <div className="flower__light flower__light--6"></div>
            <div className="flower__light flower__light--7"></div>
            <div className="flower__light flower__light--8"></div>
          </div>
          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1"></div>
            <div className="flower__line__leaf flower__line__leaf--2"></div>
            <div className="flower__line__leaf flower__line__leaf--3"></div>
            <div className="flower__line__leaf flower__line__leaf--4"></div>
          </div>
        </div>

        {/* Flower 3 */}
        <div className="flower flower--3">
          <div className="flower__leafs flower__leafs--3">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__white-circle"></div>
            <div className="flower__light flower__light--1"></div>
            <div className="flower__light flower__light--2"></div>
            <div className="flower__light flower__light--3"></div>
            <div className="flower__light flower__light--4"></div>
            <div className="flower__light flower__light--5"></div>
            <div className="flower__light flower__light--6"></div>
            <div className="flower__light flower__light--7"></div>
            <div className="flower__light flower__light--8"></div>
          </div>
          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1"></div>
            <div className="flower__line__leaf flower__line__leaf--2"></div>
            <div className="flower__line__leaf flower__line__leaf--3"></div>
            <div className="flower__line__leaf flower__line__leaf--4"></div>
          </div>
        </div>

        {/* Long green stem */}
        <div className="grow-ans" style={d("1.2s")}>
          <div className="flower__g-long">
            <div className="flower__g-long__top"></div>
            <div className="flower__g-long__bottom"></div>
          </div>
        </div>

        {/* Grass 1 */}
        <div className="growing-grass">
          <div className="flower__grass flower__grass--1">
            <div className="flower__grass--top"></div>
            <div className="flower__grass--bottom"></div>
            <div className="flower__grass__leaf flower__grass__leaf--1"></div>
            <div className="flower__grass__leaf flower__grass__leaf--2"></div>
            <div className="flower__grass__leaf flower__grass__leaf--3"></div>
            <div className="flower__grass__leaf flower__grass__leaf--4"></div>
            <div className="flower__grass__leaf flower__grass__leaf--5"></div>
            <div className="flower__grass__leaf flower__grass__leaf--6"></div>
            <div className="flower__grass__leaf flower__grass__leaf--7"></div>
            <div className="flower__grass__leaf flower__grass__leaf--8"></div>
            <div className="flower__grass__overlay"></div>
          </div>
        </div>

        {/* Grass 2 */}
        <div className="growing-grass">
          <div className="flower__grass flower__grass--2">
            <div className="flower__grass--top"></div>
            <div className="flower__grass--bottom"></div>
            <div className="flower__grass__leaf flower__grass__leaf--1"></div>
            <div className="flower__grass__leaf flower__grass__leaf--2"></div>
            <div className="flower__grass__leaf flower__grass__leaf--3"></div>
            <div className="flower__grass__leaf flower__grass__leaf--4"></div>
            <div className="flower__grass__leaf flower__grass__leaf--5"></div>
            <div className="flower__grass__leaf flower__grass__leaf--6"></div>
            <div className="flower__grass__leaf flower__grass__leaf--7"></div>
            <div className="flower__grass__leaf flower__grass__leaf--8"></div>
            <div className="flower__grass__overlay"></div>
          </div>
        </div>

        {/* Right leaves */}
        <div className="grow-ans" style={d("2.4s")}>
          <div className="flower__g-right flower__g-right--1">
            <div className="leaf"></div>
          </div>
        </div>

        <div className="grow-ans" style={d("2.8s")}>
          <div className="flower__g-right flower__g-right--2">
            <div className="leaf"></div>
          </div>
        </div>

        {/* Front plant */}
        <div className="grow-ans" style={d("2.8s")}>
          <div className="flower__g-front">
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--1">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--2">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--3">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--4">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--5">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--6">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--7">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--8">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__line"></div>
          </div>
        </div>

        {/* Front right plant */}
        <div className="grow-ans" style={d("3.2s")}>
          <div className="flower__g-fr">
            <div className="leaf"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--1"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--2"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--3"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--4"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--5"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--6"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--7"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--8"></div>
          </div>
        </div>

        {/* Long grass groups */}
        <div className="long-g long-g--0">
          <div className="grow-ans" style={d("3s")}><div className="leaf leaf--0"></div></div>
          <div className="grow-ans" style={d("2.2s")}><div className="leaf leaf--1"></div></div>
          <div className="grow-ans" style={d("3.4s")}><div className="leaf leaf--2"></div></div>
          <div className="grow-ans" style={d("3.6s")}><div className="leaf leaf--3"></div></div>
        </div>

        <div className="long-g long-g--1">
          <div className="grow-ans" style={d("3.6s")}><div className="leaf leaf--0"></div></div>
          <div className="grow-ans" style={d("3.8s")}><div className="leaf leaf--1"></div></div>
          <div className="grow-ans" style={d("4s")}><div className="leaf leaf--2"></div></div>
          <div className="grow-ans" style={d("4.2s")}><div className="leaf leaf--3"></div></div>
        </div>

        <div className="long-g long-g--2">
          <div className="grow-ans" style={d("4s")}><div className="leaf leaf--0"></div></div>
          <div className="grow-ans" style={d("4.2s")}><div className="leaf leaf--1"></div></div>
          <div className="grow-ans" style={d("4.4s")}><div className="leaf leaf--2"></div></div>
          <div className="grow-ans" style={d("4.6s")}><div className="leaf leaf--3"></div></div>
        </div>

        <div className="long-g long-g--3">
          <div className="grow-ans" style={d("4s")}><div className="leaf leaf--0"></div></div>
          <div className="grow-ans" style={d("4.2s")}><div className="leaf leaf--1"></div></div>
          <div className="grow-ans" style={d("3s")}><div className="leaf leaf--2"></div></div>
          <div className="grow-ans" style={d("3.6s")}><div className="leaf leaf--3"></div></div>
        </div>

        <div className="long-g long-g--4">
          <div className="grow-ans" style={d("4s")}><div className="leaf leaf--0"></div></div>
          <div className="grow-ans" style={d("4.2s")}><div className="leaf leaf--1"></div></div>
          <div className="grow-ans" style={d("3s")}><div className="leaf leaf--2"></div></div>
          <div className="grow-ans" style={d("3.6s")}><div className="leaf leaf--3"></div></div>
        </div>

        <div className="long-g long-g--5">
          <div className="grow-ans" style={d("4s")}><div className="leaf leaf--0"></div></div>
          <div className="grow-ans" style={d("4.2s")}><div className="leaf leaf--1"></div></div>
          <div className="grow-ans" style={d("3s")}><div className="leaf leaf--2"></div></div>
          <div className="grow-ans" style={d("3.6s")}><div className="leaf leaf--3"></div></div>
        </div>

        <div className="long-g long-g--6">
          <div className="grow-ans" style={d("4.2s")}><div className="leaf leaf--0"></div></div>
          <div className="grow-ans" style={d("4.4s")}><div className="leaf leaf--1"></div></div>
          <div className="grow-ans" style={d("4.6s")}><div className="leaf leaf--2"></div></div>
          <div className="grow-ans" style={d("4.8s")}><div className="leaf leaf--3"></div></div>
        </div>

        <div className="long-g long-g--7">
          <div className="grow-ans" style={d("3s")}><div className="leaf leaf--0"></div></div>
          <div className="grow-ans" style={d("3.2s")}><div className="leaf leaf--1"></div></div>
          <div className="grow-ans" style={d("3.5s")}><div className="leaf leaf--2"></div></div>
          <div className="grow-ans" style={d("3.6s")}><div className="leaf leaf--3"></div></div>
        </div>
      </div>
    </div>
  );
}
