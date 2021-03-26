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
            <div className="Caption">{header1}<br/>{header2}</div>
            <div className="Links">{generateLinks(data)}</div>
        </div>
    );
}

export default App;
