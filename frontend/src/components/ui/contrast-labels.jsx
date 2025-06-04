export default function ContarstLabel({
  anglePosition,
  children,
  color,
  position,
  rotation,
}) {
  return (
    <div
      className={`contrast-label ${anglePosition} ${color} top-[${position.top}px] bottom-[${position.bottom}px] rotate-[${rotation}deg]`}
    >
      {children}
    </div>
  );
}
