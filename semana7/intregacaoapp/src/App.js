import React from "react";
import FormPage from "./components/FormPage";
import UserListPage from "./components/Lista";
import './App.css';


class App extends React.Component {
state= {
  FormPage: true
}

changePage = (  ) => {
  this.setState({formPage: !this.state.formPage })
}

render() {
  const currentPage = this.state.formPage? <FormPage /> : <UserListPage />

  return (
    <div className="App">

{currentPage}
<br />
<button onClick={this.changePage}>Mudar de Página</button>
    </div>
    
  );
}
}

export default App;
