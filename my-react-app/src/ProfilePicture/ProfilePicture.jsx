import styles from "./ProfilePicture.module.css";

function ProfilePicture() {
  // Sample of Click Events
  const imgUrl = "../src/assets/profilePic.jpg";
  const handleClick = (e) => (e.target.style.display = "none");

  return (
    <img
      className={styles.img}
      onClick={(e) => handleClick(e)}
      src={imgUrl}
    ></img>
  );
}

export default ProfilePicture;
