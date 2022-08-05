import "./HomePage.scss";

import Header from "../../components/header/Header";
import LeftHome from "../../components/home/LeftHome/LeftHome";
import MiddleHome from "../../components/home/MiddleHome/MiddleHome";
import RightHome from "../../components/home/RightHome/RightHome";
import { useSelector } from "react-redux";

export default function HomePage() {
	const { user } = useSelector((user) => ({ ...user }));
	return (
		<div>
			<Header />
			<div className="homepage__wrapper">
				<LeftHome user={user} />
				<MiddleHome user={user} />
				<RightHome user={user} />
			</div>
		</div>
	);
}
