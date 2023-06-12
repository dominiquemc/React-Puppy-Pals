import { puppyList } from "./data.js";
import { useState } from "react";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  return (
    <div className="App">
      <h1>Puppy Pals</h1>
      {puppies.map((puppy) => {
        return (
          <p
            onClick={() => {
              setFeatPupId(puppy.id);
            }}
            key={puppy.id}
          >
            {puppy.name}
          </p>
        );
      })}
      {featPupId && (
        <div className="puppyDetails">
          <h2>{featuredPup.name}</h2>
          <img src={featuredPup.image} alt="dog" />
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;

// Notes

// null is used to conditionally render an element in JSX code.
// featPupID is a state variable: used to retain data between renders
// setFeatPupID is the setter function: used to update the variable + trigger react to render the component again
