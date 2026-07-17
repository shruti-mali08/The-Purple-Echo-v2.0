import './MemberCardHomePage.css'

function MemberCardHomePage({ member }) {
    return (
        <>
        <div className="memberCard">
            <h4>{member.name}</h4>
            <img src={member.image} alt={member.name}></img>
            <p>View Profile!</p>
        </div>
        </>
    );
}

export default MemberCardHomePage;