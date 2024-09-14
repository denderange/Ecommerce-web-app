import styles from "./FAQ.module.css";
import { faqData } from "./faqData";
import { useState } from "react";
import { FAQitem } from "./FAQitem";

export const FAQ = () => {
	const [isOpenId, setIsOpenId] = useState<number | null>(1);

	const handleToggle = (itemId: number) => {
		setIsOpenId((currentValue) => (currentValue !== itemId ? itemId : null));
	};

	return (
		<section className={styles.faq}>
			<div className={styles.faqContainer}>
				<h3 className={styles.faqTitle}>FAQ</h3>
				<ul>
					{faqData.map((item) => (
						<FAQitem
							question={item.question}
							answer={item.answer}
							isOpen={item.id === isOpenId}
							handleToggle={() => handleToggle(item.id)}
							key={item.id}
						/>
					))}
				</ul>
			</div>
		</section>
	);
};
