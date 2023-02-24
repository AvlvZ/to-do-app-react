import './App.css';
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import Task from "../task/task";
import TaskAddForm from "../task-add-form/task-add-form";

function App() {

  const data = [
    {id: 0, title: "Djamal", date: "12/1/2022 22:11", favorite: false},
    {id: 1, title: "Zalimkhan", date: "1/11/2022 12:14", favorite: true},
    {id: 2, title: "Djamal", date: "4/3/2022 7:19", favorite: false},
  ]

  return (
    <div className="App">
      <div className="app-modal">
        <AppInfo />
        <div className="search-panel-block">
          <SearchPanel />
          <AppFilter />
        </div>
        <Task data={data}/>
        <TaskAddForm />
      </div>
    </div>
  );
}

export default App;
