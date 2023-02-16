import Timer from "../Timer";

const MainComponent = () => {
  return (
    <div className="main-component col-12">
      <Timer deadline="February 20, 2023" />
      <div className="calling-out-participants-container">
        <h3>
          Calling out 📣 participants, mentors, and communities for an open source initiative—join us to make a difference. More details 📩 to follow!
        </h3>
      </div>
    </div>
  );
}

export default MainComponent;