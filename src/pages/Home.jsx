import css from "./PagesStyle.module.css"

const Home = () => {
    return (
        <div className={css.home_container}>
            <h1 className={css.home_title}>Welcome to contact book!</h1>
            <p className={css.home_text}>Please login to see you contacts 😀</p>
        </div>
    )
}

export default Home;