export default function Button({ sign, onBtnClick }) {
  return (
    <>
      <button onClick={onBtnClick}>{sign}</button>
    </>
  );
}
