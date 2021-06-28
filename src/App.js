import "./App.css";
import Link from "./Link";
import data from "./data";

const header1 = "Alo!";
const header2 = "Menä zovut Nar...";

function generateLinks(data) {
    return data.map((group, i) => {
        return (
            <div className="Links-Group">
                <h1 className="Links-Group-Header">{group.caption}</h1>
                <div className="Links-Group-Content">
                    {
                        group.content.map((item, j) => {
                            return (
                                <Link
                                    caption={item.caption}
                                    description={item.description}
                                    link={item.link}
                                />
                            );
                        })
                    }
                </div>
            </div>
        )
    });
}


function App() {
    return (
        <div className="App">
            <div className="Container-Red">
                <div className="Caption">{header1}<br/>{header2}</div>
                <p className="Caption-Description">
                    Ne stesnäjsä sväzatjsä so mnoj v lüboj iz socialjnyx platform
                </p>
            </div>
            <div className="Container-Blue">
                <p className="Caption-Description-Extended">
                Ja opytnyj projektirovschik interfejsov (<a href="http://sberbank.ru" target="_blank">SberBank</a>, eks: <a href="http://ucraft.com" target="_blank">UCraft</a>, <a href="http://devexpress.com" target="_blank">DevExpress</a>) i diplomirovannyj inzhener-programmist.
                Zanimajusj vozrozhdenijem latinicy epoxi russkogo avangarda (<a href="http://narlewinsky.online/klukva-translator" target="_blank">Klükva</a>), vizionerskim iskusstvom, polevoj zapisü i eksperimentaljnoj muzykoj (<a href="https://narlewinsky.bandcamp.com/album/oda-m-rtvyx" target="_blank">Morok</a>, <a href="https://narlewinsky.bandcamp.com/album/znamenije" target="_blank">Dxruva Zvezda</a>).
                </p>
            </div>
            <div className="Container-Red">
                <div className="Links">{generateLinks(data)}</div>
            </div>
        </div>
    );
}

export default App;
