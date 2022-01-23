import Head from "next/head";
import { useRouter } from "next/router";

export default function Container(props) {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: "Basistraining React",
    description: "",
    image: "",
    type: "website",
    ...customMeta,
  };

  return (
    <div className="bg-gray-100">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://basistraining-react.vercel.app/${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://basistraining-react.vercel.app/${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Basistraining React" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vnglst" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <nav className="flex flex-col justify-center bg-gray-900 text-gray-100">
        <div className="max-w-5xl mx-auto w-full py-4">
          <a
            href=".."
            className="hover:bg-gray-100 hover:text-gray-900 rounded-full px-4 py-2 transition-all duration-300 ease-in-out"
          >
            Alle oefeningen
          </a>
        </div>
      </nav>
      <main
        id="content"
        className="flex flex-col bg-gradient-to-b from-white to-gray-100 min-h-screen"
      >
        {children}
      </main>
    </div>
  );
}
