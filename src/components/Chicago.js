import chefImage2 from '../Images/restaurant.jpg'

export default function Chicago() {
    return (
        <section className="about">
            <div className="about-text">
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes with a modern twist.</p>
            </div>
            <img src={chefImage2} alt="Restaurant in Chicago" />
        </section>
    );
}