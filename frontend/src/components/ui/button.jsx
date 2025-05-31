"use client";

import Image from "next/image";

export function BorderButton({ onClick, children }) {
  return (
    <button className="border-button" onClick={onClick}>
      {children}
    </button>
  );
}

export function SmallBorderButton({ onClick, children }) {
  return (
    <button className="small-border-button" onClick={onClick}>
      {children}
    </button>
  );
}

export function AccentButton({ onClick, children }) {
  return (
    <button className="accent-button" onClick={onClick}>
      {children}
    </button>
  );
}

export function AccentAngleButton({ onClick, children }) {
  return (
    <button className="accent-angle-button" onClick={onClick}>
      {children}
    </button>
  );
}

export function MoveToButton({ onClick, children }) {
  return (
    <button className="move-to-button" onClick={onClick}>
      {children}
      <Image width={20} height={20} alt="arrow" src={"/angle-arrow.svg"} />
    </button>
  );
}
