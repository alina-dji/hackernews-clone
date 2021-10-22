import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import classes from "./Home.module.css";

export default function Home() {
    return (
        <>
            <Header />
            <main className={classes.main}>
                <div>posts</div>
            </main>
            <Footer />
        </>
    );
}