import {openModalAccount} from "./components/openModal";
import {openModal} from "./components/openModal";

function App() {
  
  function handleOpenModal1(){
    openModal();
  };
  function handleOpenModal2(){
    openModalAccount();
  }
  
  return (
    
        <div>
          <button onClick={handleOpenModal1}>Open Modal 1</button>
          <button onClick={handleOpenModal2}>Open Modal 2</button>
        </div>
    
  );
}

export default App;
