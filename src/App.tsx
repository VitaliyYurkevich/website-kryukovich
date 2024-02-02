import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {StyledBackgroundPhoto} from "./layout/backgroundPhoto/BackgroundPhoto";
import {Footer} from "./layout/footer/Footer";


function App() {
    console.log('');

    return (
        <div>

            <StyledBackgroundPhoto>
                <Header />
                <Main />
                <Footer />
            </StyledBackgroundPhoto>


        </div>
    );
}




export default App;
