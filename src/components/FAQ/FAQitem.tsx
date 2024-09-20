import { useState, useRef, useEffect } from "react";
import IconClose from "../../assets/icons/icon-cross.svg?react";
import styles from "./FAQ.module.css";
import { getRefValue } from "../../lib/hooks/getRefValue";

type Props = {
	question: string;
	answer: string;
	itemId: number;
};

export const FAQitem = ({ question, answer, itemId }: Props) => {
	const [isOpen, setIsOpen] = useState<number | null>(1);

	const handleToggle = () => {
		setIsOpen(isOpen ? null : itemId);
	};
	const [height, setHeight] = useState(0);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!isOpen) {
			const contentAnswer = getRefValue(ref);
			setHeight(contentAnswer.scrollHeight);
		} else {
			setHeight(0);
		}
	}, [isOpen]);

	return (
		<li
			className={`${styles.faqItem} ${isOpen ? "" : "active"}`}
			onClick={handleToggle}>
			<button className={styles.buttonQuestion}>
				{question}
				<IconClose
					className={`${styles.iconClose} ${
						!isOpen ? styles.iconCloseActive : ""
					}`}
				/>
			</button>
			<div
				className={styles.answerContainer}
				style={{ height }}>
				<p
					ref={ref}
					className={styles.faqAnswer}>
					{answer}
				</p>
			</div>
		</li>
	);
};
