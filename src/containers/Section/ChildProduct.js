import classNames from 'classnames/bind';
import styles from './Section.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const cx = classNames.bind(styles);

function ChildProduct() {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidestoscroll: 1,
    };
    return (
        <div className={cx('course-content')}>
            <div className={cx('courses-slider')}>
                <Slider {...settings}>
                    <div className={cx('course-item')}>
                        <div className={cx('course-img')}></div>
                        <div className={cx('course-title lg-text')}>
                            The Complete Python Bootcamp From Zero to Hero...
                        </div>
                        <div className={cx('course-coach sm-text')}>Keith Johnson</div>
                        <div className={cx('course-rate')}>
                            <span className={cx('lg-text')}>4.6</span>
                            <div className={cx('comment-rate sm-text')}>(470,430)</div>
                        </div>
                        <div className={cx('course-price')}>
                            <div className={cx('price lg-text')}>₫379,000</div>
                            <div className={cx('price-origin')}>₫2,199,000</div>
                        </div>
                    </div>
                    <div className={cx('course-item')}>
                        <img
                            src="https://img-c.udemycdn.com/course/240x135/543600_64d1_4.jpg"
                            className={cx('course-img')}
                        ></img>
                        <div className={cx('course-title lg-text')}>
                            Automate the Boring Stuff with Python Programming
                        </div>
                        <div className={cx('course-coach sm-text')}>AI Sweigart</div>
                        <div className={cx('course-rate')}>
                            <span className={cx('lg-text')}>4.6</span>
                            <div className={cx('comment-rate sm-text')}>(108,308)</div>
                        </div>
                        <div className={cx('course-price')}>
                            <div className={cx('price lg-text')}>₫279,000</div>
                            <div className={cx('price-origin')}>₫1,699,000</div>
                        </div>
                    </div>
                    <div className={cx('course-item')}>
                        <img
                            src="https://img-c.udemycdn.com/course/240x135/2485240_d405_7.jpg"
                            className={cx('course-img')}
                        ></img>
                        <div className={cx('course-title lg-text')}>
                            Python : Master Programming and Development with 15...
                        </div>
                        <div className={cx('course-coach sm-text')}>Kay Dev</div>
                        <div className={cx('course-rate')}>
                            <span className={cx('lg-text')}>4.3</span>
                            <div className={cx('comment-rate sm-text')}>(13,371)</div>
                        </div>
                        <div className={cx('course-price')}>
                            <div className={cx('price lg-text')}>₫379,000</div>
                            <div className={cx('price-origin')}>₫1,699,000</div>
                        </div>
                    </div>
                    <div className={cx('course-item')}>
                        <img
                            src="https://img-c.udemycdn.com/course/240x135/629302_8a2d_2.jpg"
                            className={cx('course-img')}
                        ></img>
                        <div className={cx('course-title lg-text')}>Learn Python Programming Masterclass</div>
                        <div className={cx('course-coach sm-text')}>Keith Johnson</div>
                        <div className={cx('course-rate')}>
                            <span className={cx('lg-text')}>4.6</span>
                            <div className={cx('comment-rate sm-text')}>(99,288)</div>
                        </div>
                        <div className={cx('course-price')}>
                            <div className={cx('price lg-text')}>₫399,000</div>
                            <div className={cx('price-origin')}>₫2,499,000</div>
                        </div>
                    </div>
                    <div className={cx('course-item')}>
                        <img
                            src="https://img-c.udemycdn.com/course/240x135/3434032_8b2b_2.jpg"
                            className={cx('course-img')}
                        ></img>
                        <div className={cx('course-title lg-text')}>Python Complete Course For Python Beginners</div>
                        <div className={cx('course-coach sm-text')}>Hoziron Tech</div>
                        <div className={cx('course-rate')}>
                            <span className={cx('lg-text')}>4.6</span>
                            <div className={cx('comment-rate sm-text')}>(3,434)</div>
                        </div>
                        <div className={cx('course-price')}>
                            <div className={cx('price lg-text')}>₫329,000</div>
                            <div className={cx('price-origin')}>₫1,099,000</div>
                        </div>
                    </div>
                    <div className={cx('course-item')}>
                        <img
                            src="https://img-c.udemycdn.com/course/240x135/567828_67d0.jpg"
                            className={cx('course-img')}
                        ></img>
                        <div className={cx('course-title lg-text')}>
                            The Complete Python Bootcamp From Zero to Hero...
                        </div>
                        <div className={cx('course-coach sm-text')}>Keith Johnson</div>
                        <div className={cx('course-rate')}>
                            <span className={cx('lg-text')}>4.6</span>
                            <div className={cx('comment-rate sm-text')}>(470,430)</div>
                        </div>
                        <div className={cx('course-price')}>
                            <div className={cx('price lg-text')}>₫379,000</div>
                            <div className={cx('price-origin')}>₫2,199,000</div>
                        </div>
                    </div>
                    <div className={cx('course-item')}>
                        <img
                            src="https://img-c.udemycdn.com/course/240x135/543600_64d1_4.jpg"
                            className={cx('course-img')}
                        ></img>
                        <div className={cx('course-title lg-text')}>
                            Automate the Boring Stuff with Python Programming
                        </div>
                        <div className={cx('course-coach sm-text')}>AI Sweigart</div>
                        <div className={cx('course-rate')}>
                            <span className={cx('lg-text')}>4.6</span>
                            <div className={cx('comment-rate sm-text')}>(108,308)</div>
                        </div>
                        <div className={cx('course-price')}>
                            <div className={cx('price lg-text')}>₫279,000</div>
                            <div className={cx('price-origin')}>₫1,699,000</div>
                        </div>
                    </div>
                    <div className={cx('course-item')}>
                        <img
                            src="https://img-c.udemycdn.com/course/240x135/2485240_d405_7.jpg"
                            className={cx('course-img')}
                        ></img>
                        <div className={cx('course-title lg-text')}>
                            Python : Master Programming and Development with 15...
                        </div>
                        <div className={cx('course-coach sm-text')}>Kay Dev</div>
                        <div className={cx('course-rate')}>
                            <span className={cx('lg-text')}>4.3</span>
                            <div className={cx('comment-rate sm-text')}>(13,371)</div>
                        </div>
                        <div className={cx('course-price')}>
                            <div className={cx('price lg-text')}>₫379,000</div>
                            <div className={cx('price-origin')}>₫1,699,000</div>
                        </div>
                    </div>
                    <div className={cx('course-item')}>
                        <img
                            src="https://img-c.udemycdn.com/course/240x135/629302_8a2d_2.jpg"
                            className={cx('course-img')}
                        ></img>
                        <div className={cx('course-title lg-text')}>Learn Python Programming Masterclass</div>
                        <div className={cx('course-coach sm-text')}>Keith Johnson</div>
                        <div className={cx('course-rate')}>
                            <span className={cx('lg-text')}>4.6</span>
                            <div className={cx('comment-rate sm-text')}>(99,288)</div>
                        </div>
                        <div className={cx('course-price')}>
                            <div className={cx('price lg-text')}>₫399,000</div>
                            <div className={cx('price-origin')}>₫2,499,000</div>
                        </div>
                    </div>
                    <div className={cx('course-item')}>
                        <img
                            src="https://img-c.udemycdn.com/course/240x135/3434032_8b2b_2.jpg"
                            className={cx('course-img')}
                        ></img>
                        <div className={cx('course-title lg-text')}>Python Complete Course For Python Beginners</div>
                        <div className={cx('course-coach sm-text')}>Hoziron Tech</div>
                        <div className={cx('course-rate')}>
                            <span className={cx('lg-text')}>4.6</span>
                            <div className={cx('comment-rate sm-text')}>(3,434)</div>
                        </div>
                        <div className={cx('course-price')}>
                            <div className={cx('price lg-text')}>₫329,000</div>
                            <div className={cx('price-origin')}>₫1,099,000</div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default ChildProduct;
