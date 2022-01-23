import Image from "next/image";
import Link from "next/link";

export function AssignmentCard({ title, imgSrc, summary, url, category }) {
  const categoryColor = {
    "college 1": "bg-orange-200 text-orange-800",
    "college 2": "bg-red-200 text-red-800",
    "college 3": "bg-purple-200 text-purple-800",
    "college 4": "bg-green-200 text-green-800",
  };

  return (
    <div className="max-w-xs min-h-fit flex flex-col bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden transition-all duration-200 ease-in-out">
      <Link href={"/oefeningen/" + url}>
        <a className="group h-full">
          <div className="relative pb-48 overflow-hidden">
            <span className="absolute inset-0 h-full w-full">
              <Image
                src={imgSrc}
                alt=""
                width={600}
                height={400}
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </span>
          </div>
          <div className="p-4">
            <span
              className={`inline-block px-2 py-1 leading-none rounded-full font-semibold uppercase tracking-wide text-xs ${categoryColor[category]}`}
            >
              {category}
            </span>
            <h2 className="mt-2 mb-2 font-bold">{title}</h2>
            <p className="text-sm">{summary}</p>
          </div>
        </a>
      </Link>
    </div>
  );
}
