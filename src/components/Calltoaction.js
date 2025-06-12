import chefImage from '../Images/restauranfood.jpg'

export default function Calltoaction() {
    return (
    <section className="hero">
        <div className="hero-text">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We serve traditional Mediterranean dishes with a modern twist.</p>
            <button>Reserve a Table</button>
        </div>
        <img src={chefImage} alt="Chef preparing food" />
    </section>
    );
}