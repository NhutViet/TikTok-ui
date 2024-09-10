import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import Image from '../Image';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/cf3783a73d39cd8eed8d026c7296f1f8.jpeg?lk3s=a5d48078&nonce=29097&refresh_token=60bb3d83016fbf8bfeeea32834f0680f&x-expires=1726070400&x-signature=c87f9puDdrLXPoWzIHCeyNbd3p0%3D&shp=a5d48078&shcp=81f88b70"
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
