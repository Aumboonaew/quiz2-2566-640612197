export const PostOwner = () => {
  const { userImagePath, username } = Profile(["mypic", "name"]);
  const { Stany } = Staus(["text"]);

  return (
    <div>
      {userImagePath?.mypic} has name: {username?.name}
      {Stany?.text}
    </div>
  );
};
