import styles from "./UserGreeting.module.css";
import PropTypes from "prop-types";

// Conditional Rendering and Props

function UserGreeting(props) {
  const welcomeMessage = (
    <h2 className={styles.welcomeMessage}>Welcome {props.username}</h2>
  );

  const loginPrompt = (
    <h2 className={styles.loginPrompt}>Please Log in to Continue</h2>
  );

  // Method 2
  return props.isLoggedIn ? welcomeMessage : loginPrompt;

  //   // Method 1
  //   return props.isLoggedIn ? (
  //     <h2 className={styles.usergreeting}>Welcome {props.username}</h2>
  //   ) : (
  //     <h2>Please Log in to Continue</h2>
  //   );
}
UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};
UserGreeting.defaultProps = {
  username: "Guest",
  isLoggedIn: false,
};

export default UserGreeting;
