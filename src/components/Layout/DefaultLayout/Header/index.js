import classNames from 'classnames/bind';
import styles from './Header.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('header-container')}>
            <div className={cx('header-content')}>
                <div className={cx('left-content')}>
                    <div className={cx('header-logo')}>
                        <a href="#"></a>
                    </div>
                </div>
                <div className={cx('center-content')}>
                    <div className={cx('search-are')}>
                        <i className={cx('search-icon fa-solid fa-magnifying-glass')}></i>
                        <input className={cx('search-input')} placeholder="Search for anything" />
                    </div>
                    {/* <div className={cx('child-content')}>
                        <a href="#">Coach Booking</a>
                    </div>
                    <div className={cx('child-content')}>
                        <a href="#">Mentor Booking</a>
                    </div> */}
                </div>
                <div className={cx('right-content')}>
                    <div>
                        Contact us: admin@worldkeys.pro or <span className={cx('chat')}>Online Chat</span>
                    </div>
                    {/* <button className={cx('btnLogin')}>Log in</button>
                    <button className={cx('btnSignup')}>Sign up</button> */}
                </div>
            </div>
        </div>
    );
}

export default Header;
