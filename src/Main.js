import chefImage from '../src/Images/restauranfood.jpg';
import salad from '../src/Images/greek salad.jpg'
import bruschetta from '../src/Images/bruchetta.svg';
import dessert from '../src/Images/lemon dessert.jpg'
import chef2Image from '../src/Images/restaurant chef B.jpg';

export default function Main() {
    return (
        <main className="main-content">
            <section className="hero">
                <div className="hero-text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Lorem ipsum dolor sit amet...</p>
                    <button>Reserve a Table</button>
                </div>
                <div className="hero-image">
                    <img src={chefImage} alt="Chef preparing food" />
                </div>
            </section>
            <section className="specials">
                <h2>Specials</h2>
                <button style={{ backgroundColor: "#f4ce14", border: "none", padding: "0.5rem 1rem", cursor: "pointer" }}>
                Online Menu
                </button>
                <div className="specials-grid">
                    <div className="special-card">
                        <img src={salad} alt="Greek Salad" />
                        <h3>Greek salad <span>$12.99</span></h3>
                        <p>The famous greek salad of crispy lettuce...</p>
                        <p className="order">Order a delivery 🚚</p>
                    </div>
                    <div className="special-card">
                        <img src={bruschetta} alt="Bruschetta" />
                        <h3>Bruschetta <span>$5.99</span></h3>
                        <p>Our Bruschetta is made from grilled bread...</p>
                        <p className="order">Order a delivery 🚚</p>
                    </div>
                    <div className="special-card">
                        <img src={dessert} alt="Lemon Dessert" />
                        <h3>Lemon Dessert <span>$5.00</span></h3>
                        <p>This comes straight from grandma's recipe book...</p>
                        <p className="order">Order a delivery 🚚</p>
                    </div>
                </div>
            </section>

            <section className="testimonials">
                <h2>Testimonials</h2>
                <div className="testimonials-grid">
                    <div className="testimonial-card">
                        <p>Rating ⭐⭐⭐⭐</p>
                        <img alt="User" />
                        <p>Name</p>
                        <p>Review text</p>
                    </div>
                    <div className="testimonial-card">
                        <p>Rating ⭐⭐⭐⭐</p>
                        <img alt="User" />
                        <p>Name</p>
                        <p>Review text</p>
                    </div>
                    <div className="testimonial-card">
                        <p>Rating ⭐⭐⭐⭐</p>
                        <img alt="User" />
                        <p>Name</p>
                        <p>Review text</p>
                    </div>
                    <div className="testimonial-card">
                        <p>Rating ⭐⭐⭐⭐</p>
                        <img alt="User" />
                        <p>Name</p>
                        <p>Review text</p>
                    </div>
                </div>
            </section>
            <section className="about">
                <div className="about-text">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>Amet minim mollit non deserunt ullamco...</p>
                </div>
                <div className="about-images">
                    <img src={chef2Image} />
                </div>
            </section>
        </main>
    );
}
