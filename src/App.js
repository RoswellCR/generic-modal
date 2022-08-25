
import openModal from "./components/opdenModal";

function App() {
  
  function handleOpenModal(){
    openModal();
  }
  
  return (
    
        <div>
          <button onClick={handleOpenModal}>Open Modal</button>
        </div>
    
  );
}

export default App;
