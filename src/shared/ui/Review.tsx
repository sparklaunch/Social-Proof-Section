import Testimonial from "@/src/domain/testimonial/Testimonial";
import Image from "next/image";
import styles from "./Review.module.css";

export default function Review({ testimonial }: { testimonial: Testimonial }) {
	const { name, avatar, content } = testimonial;
	return (
		<div className={styles.card}>
			<div className={styles.title}>
				<Image
					src={`/assets/images/${avatar}`}
					alt={name}
					width={50}
					height={50}
					className={styles.avatar}
				/>
				<div className={styles.reviewer}>
					<h3 className={styles.name}>{name}</h3>
					<p className={styles.status}>Verified Buyer</p>
				</div>
			</div>
			<p className={styles.content}>{content}</p>
		</div>
	);
}
