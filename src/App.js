import data from "./data/movies_rnexgr.json";
import "./App.css";
function App() {
  return (
    <div className="App">
      <section>
        {data.map((moviesByCategories, index) => {
          return (
            <div className="category" key={index}>
              <h2 key={index}>{moviesByCategories.category}</h2>
            </div>
          );
          <div className="thumbnails">
          moviesByCategories.images.map((thumbnails, index) => {
            return (
              <div className="thumbnails">
                <img src="thumbnail" alt="" />
              </div>
            );
          });
          </div>
        })}
      </section>
    </div>
  );
}
export default App;
