import Container from "../components/Container";
import { PropsWithChildren } from "react";
import { Assignment } from "../.contentlayer/generated";

export default function AssignmentLayout({
  children,
  assignment,
}: PropsWithChildren<{ assignment: Assignment }>) {
  return (
    <Container
      title={`${assignment.title} – Basistraining React`}
      description={assignment.summary}
      type="article"
    >
      <article className="w-full max-w-5xl px-4 mx-auto break-words">
        <div className="max-w-2xl mt-16 mb-16">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl">
            {assignment.title}
          </h1>
          <div className="flex gap-2 flex-wrap">
            {assignment.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block px-2 py-1 leading-none rounded-full font-semibold uppercase tracking-wide text-xs bg-gray-200 text-gray-800"
              >
                {tag}
              </span>
            ))}
          </div>
          <section className="w-full prose max-w-none">{children}</section>
        </div>
      </article>
    </Container>
  );
}
