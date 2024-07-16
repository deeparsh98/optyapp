import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import database from "../../../firebase";

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    // const unsubscribe = database
    //   .collection("people")
    //   .onSnapshot((snapshot: any) =>
    //     setPeople(snapshot.docs.map((doc: any) => doc.data()))
    //   );

    // return () => {
    //   unsubscribe();
    // };
    setPeople([{
      name:"Arshdeep"
    }]);

  }, []);

  const onSwipe = (direction) => {
    console.log('You swiped: ' + direction)
  }
  
  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + ' left the screen')
  }
  
  return (
    <div>
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard  key={person.name} className="swipe" onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['right', 'left']}><div
          style={{ backgroundImage: `url(${person.url})` }}
          className="card"
        >
          <h3>{person.name}</h3>
        </div></TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
