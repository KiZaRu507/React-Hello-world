import "./main.css"

function App() {
  return (
    <div class="App">

      <img className="imag" src="https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
      <h3>This is a image</h3>
      <button onClick={clicked}>Submit</button>
      
    </div>
  
  );
}
const clicked=()=>{
  console.log('clicked')
  alert("clicked");
}


export default App;
