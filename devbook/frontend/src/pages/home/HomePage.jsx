import "./HomePage.scss";

import Header from "../../components/header/Header";
import useClickOutside from "../../helpers/clickOutside";
import { useRef, useState } from "react";

export default function HomePage() {
	const [visible, setVisible] = useState(true);
	const element = useRef(null);
	useClickOutside(element, () => {
		setVisible(false);
		console.log("you clicked outide");
	});
	return (
		<div>
			<Header />
			{visible && <div className="card" ref={element}></div>}
		</div>
	);
}
