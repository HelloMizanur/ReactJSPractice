export default function Button({ color, btnClick }) {
  return (
    <>
      <button onClick={btnClick}>{color}</button>
    </>
  );
}
