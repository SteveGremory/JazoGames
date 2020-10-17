import React from "react";
import Countdown from "../Countdown/Countdown";
import "react-sticky-header/styles.css";
import "./HomeScreen.css";
import StickyHeader from "react-sticky-header";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <StickyHeader // This is the sticky part of the header.
        header={
          <div className="Header_root">
            <h1 className="Header_title">Jazo Studios.</h1>

            <ul className="headerMenu">
              <li className="Header_link"></li>
              <li className="Header_link"></li>
              <li className="Header_link"></li>
            </ul>
          </div>
        }
      >
        <section>
          <div>
            <main>
              <div>
                <Countdown />
              </div>
              <aside>
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  src="https://images.pexels.com/photos/3593983/pexels-photo-3593983.jpeg"
                  alt="JazoGames"
                />
              </aside>
              <span className="seeYouSoon" role="img">
                See You In 👆
              </span>
            </main>
          </div>
        </section>
      </StickyHeader>
    );
  }
}
