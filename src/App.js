import './App.scss';


function App() {
    return (
        <section className={'section-hero'}>
            <div className={"bg"}>
                <img src={'/assets/images/bg.jpg'} alt={'Find Books'}/>
            </div>
            <div className={'container'}>
                <h1>Find Books</h1>
                <form>
                    <input placeholder={""}/>
                </form>
            </div>
        </section>
    );
}

export default App;
