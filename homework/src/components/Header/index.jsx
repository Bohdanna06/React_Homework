import { ThemeContext } from '../../context';
import cx from 'classnames';
import styles from './Header.module.scss';
import CONSTANTS from '../../config';

function Header() {
    return (
        <ThemeContext.Consumer>
            {([theme, switchTheme]) => {
                const headerClasses = cx({
                    [styles.darkTheme]: theme === CONSTANTS.THEMES.DARK_THEME,
                    [styles.lightTheme]: theme === CONSTANTS.THEMES.LIGHT_THEME,
                });

                return (
                    <header className={headerClasses}>
                        <h1>My site</h1>
                        <button
                            onClick={() => {
                                const newTheme =
                                    theme === CONSTANTS.THEMES.DARK_THEME
                                        ? CONSTANTS.THEMES.LIGHT_THEME
                                        : CONSTANTS.THEMES.DARK_THEME;
                                switchTheme(newTheme);
                            }}
                        >
                            Change theme to{' '}
                            {theme === CONSTANTS.THEMES.DARK_THEME
                                ? CONSTANTS.THEMES.LIGHT_THEME
                                : CONSTANTS.THEMES.DARK_THEME}
                        </button>
                        <p>{theme}</p>
                    </header>
                );
            }}
        </ThemeContext.Consumer>
    );
}

export default Header;
