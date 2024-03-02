import Headshot from "../Content/Images/Headshot.jpeg";

function ProfilePicture() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={Headshot}
        alt="profile"
        style={{ borderRadius: "50%", width: "10%", height: "10%" }}
      />
    </div>
  );
}

export default ProfilePicture;
