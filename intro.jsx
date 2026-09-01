function User() {
  const name = "Arjun";
  const age = 23;

  return (
    <div>
      <h1>Name: {name}</h1>
      <p>Age: {age}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <User />
    </div>
  );
}

export default App;
