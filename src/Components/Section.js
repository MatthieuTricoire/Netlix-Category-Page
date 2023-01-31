import data from "../data/movies_rnexgr.json";

const Section = (props) => {
  return (
    <section>
      {data.map((moviesByCategories, index) => {
        <div className="category" key={index}>
          {console.log(moviesByCategories.category)}
          <h2 key={index}>{moviesByCategories.category}</h2>
        </div>;
        <div className="thumbnails">
          {moviesByCategories.images.map((thumbnails, index) => {
            <div className="thumbnails">
              {console.log(thumbnails)}
              <img src={thumbnails} alt="" />
            </div>;
          })}
        </div>;
      })}
    </section>
  );
};

export default Section;
