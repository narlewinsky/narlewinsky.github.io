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
                Ja opytnyj projektirovsçik interfejsov (<a href="http://sberbank.ru">SberBank</a>, eks: <a href="http://ucraft.com">UCraft</a>, <a href="http://devexpress.com">DevExpress</a>) i diplomirovannyj inżener-programmist.
                Zanimajusj vozrożdenijem latinicy epoxi russkogo avangarda i vizionerskim iskusstvom.
                </p>
            </div>
            <div className="Container-Red">
                <div className="Links">{generateLinks(data)}</div>
            </div>
        </div>
    );
}

export default App;
