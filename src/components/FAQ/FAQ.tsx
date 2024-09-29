import styles from "./FAQ.module.css";
import { faqData } from "../../constants/faqData";
import { FAQitem } from "./FAQitem";

export const FAQ = () => {
	return (
		<section
			className={styles.faq}
			id='FAQ'>
			<div className={`container ${styles.faqContainer}`}>
				<h3 className={styles.faqTitle}>FAQ</h3>
				<ul>
					{faqData.map((item) => (
						<FAQitem
							question={item.question}
							answer={item.answer}
							itemId={item.id}
							key={item.id}
						/>
					))}
				</ul>
			</div>
		</section>
	);
};
