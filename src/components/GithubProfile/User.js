const User = ({ user }) => (
  <div className="github-user">
    <img className="github-profile-pic" src={user.avatar_url} />
    <h1 className="github-user-name">{user.name || user.login}</h1>
    <div className="github-user-intro">
      {user.bio || "This user has not bio yet."}
    </div>
    <div className="github-user-info">
      <div className="github-user-followers">{user.followers} Followers</div>
      <div className="github-user-following">{user.following} Following</div>
      <div className="github-user-repos">{user.public_repos} Repos</div>
    </div>
    <div className="github-recent-repos">
      {!user
        ? "Fetching User Data"
        : user.repos.map((repo) => {
            return (
              <span key={repo.id} className="github-repo">
                <a href={repo.html_url}>{repo.full_name}</a>
              </span>
            );
          })}
    </div>
  </div>
);

export default User;
