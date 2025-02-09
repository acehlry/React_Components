import { useEffect, useState } from 'react';
import styles from './CommonNav.module.scss';
import { Link } from 'react-router-dom';
import { NAV_LIST } from '@/constants/NAV_LIST';

interface Navigation {
    index: number;
    path: string;
    label: string;
    searchValue: string;
    isActive: boolean;
}

function CommonNav() {
    const [navigation, setNavigation] = useState<Navigation[]>(NAV_LIST);

    const navLinks = navigation.map((item: Navigation) => {
        return (
            <Link
                className={styles.navigation__menu}
                key={item.path}
                to={item.path}
            >
                <span className={styles.navigation__menu__label}>
                    {item.label}
                </span>
            </Link>
        );
    });

    return <div className={styles.navigation}>{navLinks}</div>;
}

export default CommonNav;
