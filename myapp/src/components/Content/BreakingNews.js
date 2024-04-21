import StyleTabs from "../Tabs/Tabs";
import './BreakingNews.scss';
import Content from "./Content";

export default function BreakingNews() {
    return (
        <div className="breakingnews">
            <div className="breakingnews-page">
                <StyleTabs />
            </div>
            <div className="breakingnews-page-middle">
                <span className="breakingnews-page-middle-text">BREAKING NEWS: Home Minister Amit Shah Files Nomination From Gandhinagar Lok Sabha Seat</span>
                <button aria-label="Dismiss" className="breakingnews-page-middle-button">×</button>
            </div>
            <div className="breakingnews-page-end">
                <Content />
            </div>
        </div>
    )
}