type myIdType = () => string;

const myId: myIdType = () => {
  const id1 = Math.random().toString();
  const id2 = Math.random().toString();
  const finalId = id1 + id2;
  return finalId;
};
export default myId;
