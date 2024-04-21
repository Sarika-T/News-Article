import { CupIcon, GlobalIcon, NotificationIcon, ProfileIcon, SettingIcon } from '../../assests/icon'
import SearchUser from '../searchuser/SearchUser'
import './Header.scss'


export default function Header() {
    return (
        <div className="header">
            <div className="header-main">
                <div className="header-main-left">
                    <img className="header-main-left-img" src = "https://www.pngarts.com/files/6/Vector-Black-Butterfly-PNG-Transparent-Image.png" alt="Logo" />
                    <span className='header-main-left-text'>msn</span>
                </div>
                <div className="header-main-middle">
                    <SearchUser />
                </div>
                <div className="header-main-right">
                    <CupIcon />
                    <ProfileIcon />
                    <NotificationIcon />
                    <SettingIcon />
                    <GlobalIcon />
                    <span className='header-main-right-text'>EN</span>
                </div>
            </div>
        </div>
    )
}