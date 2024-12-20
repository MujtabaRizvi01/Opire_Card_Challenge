import "../card/style.css"

interface OpireStatsTypes {
    issues:number;
    Rewards:number;
    challenges:number;

}

export default function OpireStats({issues,Rewards,challenges}:OpireStatsTypes) {
    return (
        <>
            <div className="stat-item">
                <p className="stat-value">{issues}</p>
                <p className="stat-label">Issues Resolved</p>
            </div>
            <div className="stat-item">
                <p className="stat-value">${Rewards}</p>
                <p className="stat-label">Rewards</p>
            </div>
            <div className="stat-item">
                <p className="stat-value">{challenges}</p>
                <p className="stat-label">Challenges Won</p>
            </div>
        </>
    )
}