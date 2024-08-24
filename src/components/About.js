import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <User
        name={"Uday Pratap (function)"}
        location={"Vaishali"}
        contact={"https://github.com/uday169"}
      />

      <UserClass
        name={"Uday Pratap (class)"}
        location={"Vaishali"}
        contact={"https://github.com/uday169"}
      />
    </div>
  );
};
export default About;
