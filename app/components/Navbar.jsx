import {
	GitHub,
	VideogameAssetOutlined,
} from "@mui/icons-material";
import ThemeSwitch from "./Theme/ThemeSwitcher";
const Navbar = () => {
	return (
		<div className="flex items-center justify-between p-6 border-b-2 border-slate-950 dark:border-neutral-300">
			<div className="flex items-center gap-2">
				<VideogameAssetOutlined />
				<h1>Memory Game</h1>
			</div>
			<div className="flex items-center gap-2 mr-12">
				<GitHub />
			</div>
			<div className="flex items-center gap-2" >
				<ThemeSwitch/>
			</div>
		</div>
	);
};
export default Navbar;