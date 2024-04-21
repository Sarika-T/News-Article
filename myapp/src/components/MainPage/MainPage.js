import BreakingNews from "../Content/BreakingNews";
import Header from "../Header/Header";
import './MainPage.scss'

export default function MainPage() {
    return (
        <div className="mainpage">
            <div className="mainpage-content">
                <div className="mainpage-content-header">
                    <Header/>
                </div>
                <div className="mainpage-content-body">
                    <BreakingNews />
                </div>
            </div>
        </div>
    )
}