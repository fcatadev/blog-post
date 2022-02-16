import React from "react";
import ReactDOM from "react-dom";
import SingleComment from "./SingleComment";
import pictureA from "./image/pic2.jpg";
import pictureJ from "./image/pic3.jpg";
import pictureS from "./image/pic1.jpg";
import UserCard from "./UserCard";

const App = () => {
  return (
    <div className="ui comments">
      <UserCard name="Alex Green">
        <SingleComment
          name="Alex"
          date="Today at 5:00PM"
          text="it is amazing!"
          picture={pictureA}
        />
      </UserCard>
      <UserCard name="Jack Wood">
        <SingleComment
          name="Jack"
          date="Today at 6:00PM"
          text="great job."
          picture={pictureJ}
        />
      </UserCard>
      <UserCard name="Sarah Queen">
        <SingleComment
          name="Sarah"
          date="Today at 7:00PM"
          text="thanks..."
          picture={pictureS}
        />
      </UserCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
