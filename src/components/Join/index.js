
const JoinComponent = ({ deadline = new Date().toString() }) => {

  return (
    <div className="join-component-container">
      <a className="action-user-btn-container" href="https://forms.gle/zGHWps1t7heYbcrP7" target='_blank' rel="noreferrer">
        <button className="btn btn-primary action-user-btn">🍿 Register as a mentor</button>
      </a>
      <a className="action-user-btn-container" href="https://forms.gle/83ZKpF4S5VEqNG6P8" target='_blank' rel="noreferrer">
        <button className="btn btn-primary action-user-btn">🏄 Join as a participant</button>
      </a>
      <a className="action-user-btn-container" href="https://forms.gle/oQAFMDofBtjeawhp8" target='_blank' rel="noreferrer">
        <button className="btn btn-primary action-user-btn">🚀 Become a community partner</button>
      </a>
    </div>
  );
};

export default JoinComponent;