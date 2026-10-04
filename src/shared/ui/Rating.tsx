import Rate from "@/src/domain/rating/Rate";
import Image from "next/image";
import star from "../assets/images/star.svg";
import styles from "./Rating.module.css";

export default function Rating({ rate }: { rate: Rate }) {
	const { numberOfStars, reviewer, id } = rate;
	return (
		<div
			className={styles.card}
			style={{
				top: +id * 10,
				left: +id * 50
			}}
		>
			<div className={styles.stars}>
				{[...Array(numberOfStars)].map((_, index) => (
					<Image src={star} alt="" key={index} />
				))}
			</div>
			<h2 className={styles.reviewer}>
				Rated {numberOfStars} Stars in {reviewer}
			</h2>
		</div>
	);
}
