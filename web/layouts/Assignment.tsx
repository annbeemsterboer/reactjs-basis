import Image from "next/image";

import Container from "../components/Container";
import type { PropsWithChildren } from "react";
import type { Assignment } from ".contentlayer/types";

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
          <section className="w-full prose max-w-none">{children}</section>
        </div>
      </article>
    </Container>
  );
}
