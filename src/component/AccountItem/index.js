import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/cf3783a73d39cd8eed8d026c7296f1f8.jpeg?lk3s=a5d48078&nonce=58757&refresh_token=bfdc14a62dc2a473704e22b6df6c41b4&x-expires=1725249600&x-signature=fxfkdMZ2F%2BBU4w%2Fh45Y29um%2FTqE%3D&shp=a5d48078&shcp=81f88b70"
                alt="Viet"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Hoang cong nhut viet</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>

                <span className={cx('username')}>hoangcongnhutviet</span>
            </div>
        </div>
    );
}

export default AccountItem;
