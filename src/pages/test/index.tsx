export default function Test() {
  const testValue: string | number = "testText";
  const testArray: Array<string | number> = ["a", 1];
  console.log(testValue);
  return (
    <div>
      {testValue}
      {testArray.map((v) => (
        <p key={v}>{v}</p>
      ))}
    </div>
  );
}
