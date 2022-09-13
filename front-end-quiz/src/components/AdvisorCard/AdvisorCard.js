import "./AdvisorCard.scss";
import { v4 as uuidv4 } from 'uuid';

function AdvisorCard({
    name,
    phone,
    email,
    avt,
    status,
    categories,
    view = "hor" }) {
    if (avt === null) {
        avt = {};
        avt.url = "https://static.wikia.nocookie.net/otonari-no-tenshisama-tieng-viet/images/b/b4/No_image_available.jpg/revision/latest?cb=20220110095313&path-prefix=vi";
        avt.title = "noImage"
    }

    return (
        <div className={view === "hor" ? "advisorcard-wrapper hor" : "advisorcard-wrapper ver"}>
            <div className="info-container">
                <div className="avt">
                    {/* <img src={avt.url} alt={avt.title} /> */}
                    <img src={avt.url} alt={avt.title} />
                    <div className={status === "online" ? "status online" : "status"}></div>
                </div>
                <div className="info">
                    <div className="info-name">
                        {name}
                    </div>
                    <div className="info-phone">
                        {phone}
                    </div>
                    <div className="info-email">
                        {email}
                    </div>
                </div>
            </div>

            <div className="category">
                <div className="category-title">
                    CATEGORY
                </div>
                {categories.map(category => {
                    return <div className="category-tag" key={uuidv4()}>{category.displayName}</div>
                })}
            </div>
        </div>);
}

export default AdvisorCard;