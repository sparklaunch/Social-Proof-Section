import { ratings, testimonials } from "../../db.json";
import Rating from "../shared/ui/Rating";
import Review from "../shared/ui/Review";
import styles from "./Home.module.css";

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.top}>
				<header className={styles.header}>
					<h1 className={styles.heading}>
						10,000+ of our users love our products.
					</h1>
					<p className={styles.subtitle}>
						We only provide great products combined with excellent
						customer service. See what our satisfied customers are
						saying about our services.
					</p>
				</header>
				<section className={styles.ratings}>
					{ratings.map((rating) => (
						<Rating key={rating.id} rate={rating} />
					))}
				</section>
			</div>
			<div className={styles.bottom}>
				{testimonials.map((testimonial) => (
					<Review key={testimonial.id} testimonial={testimonial} />
				))}
			</div>
		</main>
	);
}
