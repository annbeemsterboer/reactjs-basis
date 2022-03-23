import React from "react";
import ReactDOM from "react-dom";
import {
  WiredCard,
  WiredDivider,
  WiredIconButton,
  WiredImage,
  WiredLink,
} from "wired-elements-react";
import { Heart } from "./heart";
import "./styles.css";

function App() {
  return (
    <main>
      <WiredCard elevation={5}>
        <h1>Fuchs</h1>
        <WiredImage elevation={1} src="fuchs.png" />
        <WiredIconButton elevation={5}>
          <Heart />
        </WiredIconButton>
        <WiredDivider />
        <p>
          Downloaden deze foto op{" "}
          <WiredLink
            elevation={1}
            href="https://unsplash.com/photos/jZooolbmdho"
            target="_blank"
          >
            Unsplash
          </WiredLink>
          .
        </p>
      </WiredCard>
    </main>
  );
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
