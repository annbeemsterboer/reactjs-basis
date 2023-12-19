import { useState } from "react";
import { Layout, Button, VisualComponent } from "./components";

const ComponentA = () => {
  const [counter, setCounter] = useState(0);
  return (
    <VisualComponent title="Component A">
      <Button onClick={() => setCounter(counter + 1)}>Update State</Button>
      <ComponentB />
    </VisualComponent>
  );
};

const ComponentB = () => {
  const [counter, setCounter] = useState(1);
  return (
    <VisualComponent title="Component B">
      <Button onClick={() => setCounter(counter + 1)}>Update State</Button>
      <div className="grid grid-rows-2 md:grid-cols-2 md:gap-4 md:grid-rows-1">
        <ComponentC />
        <ComponentD />
      </div>
    </VisualComponent>
  );
};

const ComponentC = () => {
  const [counter, setCounter] = useState(0);
  return (
    <VisualComponent title="Component C">
      <Button onClick={() => setCounter(counter + 1)}>Update State</Button>
      <ComponentE />
    </VisualComponent>
  );
};

const ComponentD = () => {
  const [counter, setCounter] = useState(0);
  return (
    <VisualComponent title="Component D">
      <Button onClick={() => setCounter(counter + 1)}>Update State</Button>
      <ComponentF />
    </VisualComponent>
  );
};

const ComponentE = () => {
  const [counter, setCounter] = useState(0);
  return (
    <VisualComponent title="Component E">
      <Button onClick={() => setCounter(counter + 1)}>Update State</Button>
    </VisualComponent>
  );
};

const ComponentF = () => {
  const [counter, setCounter] = useState(0);
  return (
    <VisualComponent title="Component F">
      <Button onClick={() => setCounter(counter + 1)}>Update State</Button>
    </VisualComponent>
  );
};

export default function Sandbox() {
  return (
    <Layout>
      <ComponentA />
    </Layout>
  );
}
