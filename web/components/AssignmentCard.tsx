import Image from "next/image";
import Link from "next/link";

export function AssignmentCard({ title, imgSrc, summary, url, tags }) {
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
            <div className="flex gap-2 flex-wrap">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-2 py-1 leading-none rounded-full font-semibold uppercase tracking-wide text-xs bg-gray-200 text-gray-800"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="mt-2 mb-2 font-bold">{title}</h2>
            <p className="text-sm">{summary}</p>
          </div>
        </a>
      </Link>
    </div>
  );
}
