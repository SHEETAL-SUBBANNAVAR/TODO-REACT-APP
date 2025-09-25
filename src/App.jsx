import AppName from "./component/AppName";

function App() {
  return (
    <center class="todo-container">
      <AppName/>    
      <div class="container text-center">
        <div class="row">
          <div class="col-6">
            <input type="Text" placeholder="Ener Todo Here" />
          </div>
          <div class="col-4">
            <input type="date" />
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-success">
              Add
            </button>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-6">Buy milk</div>
        <div class="col-4">04/09/2025</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>

      <div class="row">
        <div class="col-6">Buy car</div>
        <div class="col-4">11/06/2025</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
      
    </center>
  );
}

export default App;
