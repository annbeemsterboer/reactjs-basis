export const VisualComponent = ({ title = "Component", children }) => {
  return (
    <div className="component bg-gray-900 rounded text-white p-4 border-2 border-gray-400 relative mt-4">
      <span
        key={Math.random()}
        className="rerender absolute left-3 top-2 text-xs uppercase font-bold text-red-500"
      >
        Render
      </span>
      <h2 className="mt-2 font-bold text-lg mb-4">{title}</h2>
      {children}
    </div>
  );
};

export const Button = (props) => {
  return (
    <button
      className="px-4 py-2 rounded bg-blue-800 hover:bg-blue-700 active:outline text-sm"
      {...props}
    />
  );
};

export const LabeledBox = ({ label, children }) => {
  return (
    <div>
      <div>{label}</div>
      {children}
    </div>
  );
};

export const Layout = ({ children }) => {
  return (
    <div className="p-6 bg-gray-800 min-h-screen text-white">
      <div className="max-w-2xl mx-auto">
        <header className="text-center">
          {/* <h1 className="text-center font-bold text-2xl mb-4 md:text-4xl md:mt-6">
            React Rendering Sandbox
          </h1>
          <p className="mb-8 leading-tight">
            Interactive add-on to a series of articles
            <a
              target="_blank"
              rel="noreferrer noopener"
              className="mt-2 block text-yellow-300 font-bold underline"
              href="https://alexsidorenko.com/blog/react-render-always-rerenders/"
            >
              A Visual Guide to React Rendering
            </a>
          </p> */}
        </header>
        {children}
      </div>
    </div>
  );
};
