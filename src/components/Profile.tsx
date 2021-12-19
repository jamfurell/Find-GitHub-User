interface ProfileProps{
    user: any;
}
export const Profile=(props: ProfileProps) =>{
    const {name, login, bio, email, avatar_url} = props.user
    return (
        <div className="section-container">
            <div className="section-header">
            <h1>
                <span className="category-title">Found user: </span>
                {login}
            </h1>
            </div>
            <div className="img-container">
            <img className="img" src={avatar_url} alt="avatar-img" />
            </div>
            <h1 className="article">
            <span className="category-title">Name: </span>
            {name}
            </h1>
            {email ? (
            <h1 className="article">
                <span className="category-title">Bio: </span>
                {email}
            </h1>
            ) : (
            <></>
            )}
            {email ? (
            <h1 className="article">
                <span className="category-title">Email: </span>
                {email}
            </h1>
            ) : (
            <></>
            )}
        </div>
    );
}
