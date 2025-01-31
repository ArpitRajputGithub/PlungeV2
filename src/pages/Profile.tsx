const Profile = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    friends: ["Alice", "Bob", "Charlie"]
  };

  return (
    <div>
      <h1>{user.name}'s Profile</h1>
      <p>Email: {user.email}</p>
      <h2>Friends</h2>
      <ul>
        {user.friends.map((friend, index) => (
          <li key={index}>{friend}</li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
