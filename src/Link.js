import React, {Component} from "react";
import "./Link.css";

import Image500px from "./images/500px.svg";
import ImageBandCamp from "./images/BandCamp.svg";
import ImageDribbble from "./images/Dribbble.svg";
import ImageGitHub from "./images/GitHub.svg";
import ImageInstagram from "./images/Instagram.svg";
import ImageNedium from "./images/Medium.svg";
import ImageTwitter from "./images/Twitter.svg";
import ImageKlukva from "./images/Klukva.svg";

function getImage(name) {
    switch (name) {
        case "500px":
            return Image500px;
        case "BandCamp":
            return ImageBandCamp;
        case "Dribbble":
            return ImageDribbble;
        case "GitHub":
            return ImageGitHub;
        case "Instagram":
            return ImageInstagram;
        case "Medium":
            return ImageNedium;
        case "Twitter":
            return ImageTwitter;
        case "Klükva":
            return ImageKlukva;
        default:
            return ImageInstagram;
    }
}

class Link extends Component {
    render() {
        return (
                <div className="Link">
                    <a href={this.props.link} target="_blank">
                    <img
                        className="Link-Image"
                        src={getImage(this.props.caption)}
                        alt={this.props.caption}
                    />
                    <div className="Link-Content">
                        <p className="Link-Content-Caption">
                            {this.props.caption}
                        </p>
                        <p className="Link-Content-Description">
                            {this.props.description}
                        </p>
                    </div>
                    </a>
                </div>
        );
    }
}

export default Link;
