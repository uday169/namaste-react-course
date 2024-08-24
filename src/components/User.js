const User = (props) => {
  return (
    <div className="user-card">
      <h3>Name : {props.name}</h3>
      <h3>Location: {props.location}</h3>
      <h3>
        Contact: <a href={props.contact}>{props.contact}</a>
      </h3>
    </div>
  );
};
export default User;
