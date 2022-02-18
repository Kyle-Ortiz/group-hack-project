import React, { useContext } from 'react'
import { AppContext } from '../../appState/appState';
import styles from '../../styles/navbar.module.css'
import CompanyLogo from '../company/CompanyLogo';

function NavBar () {
    const { globalState } = useContext(AppContext);
    const company = globalState.companyProfile;
    return (
        <div className={styles.navbar}>
            <div>
                <CompanyLogo imageUrl= {company.logo} />
            </div>
            <div className={styles.navTabsContainer}>
                <div>
                    Home
                </div>
                <div>
                    Transactions
                </div>
            </div>
        </div>
    )
}

export default NavBar;