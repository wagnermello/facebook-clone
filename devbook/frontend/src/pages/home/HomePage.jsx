import "./HomePage.scss";

import Header from "../../components/header/Header";
import LeftHome from "../../components/home/LeftHome";
import { useSelector } from "react-redux";

export default function HomePage() {
	const { user } = useSelector((user) => ({ ...user }));
	return (
		<div>
			<Header />
			<div className="homepage__wrapper">
				<LeftHome user={user} />
			</div>
		</div>
	);
}
