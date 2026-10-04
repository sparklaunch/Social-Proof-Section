import Rate from "@/src/domain/rating/Rate";
import styles from "./Rating.module.css";

export default function Rating({ rate }: { rate: Rate }) {
	const { numberOfStars, reviewer } = rate;
	return <div className={styles.card}></div>;
}
