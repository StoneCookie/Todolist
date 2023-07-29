import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<header className="header">
			<NavLink className="header__item" to="/">Главная</NavLink>
			<NavLink className="header__item" to="/contacts">Контакты</NavLink>
		</header>
	);
}

export default Header;
