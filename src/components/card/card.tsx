import OpireSocial from "../socials/social";
import OpireStats from "../stats/stats";
import OpireUser from "../user/user";
import "./style.css";

const user = {
    avatar:"https://cdn.pixabay.com/photo/2015/10/01/19/05/car-967470_960_720.png",
    name:"Mujtaba",
    title:"Mern Stack Developer",
    issues:1,
    Rewards:200,
    challenges:1

}

export default function OpireCard() {
    return (
        <div className="dev-card">
            <div className="avatar-container">
                <img 
                    src={user.avatar} 
                    alt="User Avatar" 
                    className="avatar"
                />
            </div>
            <div className="info-container" >
                <OpireUser name={user.name} title={user.title} className={"info"}/>
                <OpireSocial />
                <div className="stats">
                    <OpireStats issues={user.issues} Rewards={user.Rewards} challenges={user.challenges} />
                </div>
            </div>
        </div>
    );
}
