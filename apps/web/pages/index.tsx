import { allAssignments } from "../.contentlayer/generated"
import { pick } from "contentlayer/client"
import { InferGetStaticPropsType } from "next"
import { AssignmentCard } from "../components/AssignmentCard"
import Container from "../components/Container"

export default function Web({
  assignments,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container title="Oefeningen - basistraining React">
      <article className="flex flex-col items-start justify-center max-w-5xl mx-auto px-4">
        <h1 className="mb-4 mt-16 text-3xl font-bold tracking-tight text-black md:text-5xl">
          Oefeningen
        </h1>
        <p className="mb-4 text-gray-600">
          {`Hieronder een verzameling oefeningen voor de basistraining van React.`}
        </p>
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 my-2 mt-4 mb-32">
          {assignments.map((assignment) => (
            <AssignmentCard
              key={assignment.slug}
              title={assignment.title}
              imgSrc={assignment.imgSrc}
              summary={assignment.summary}
              url={assignment.slug}
              tags={assignment.tags}
            />
          ))}
        </div>
      </article>
    </Container>
  )
}

export function getStaticProps() {
  const assignments = allAssignments.map((assignment) =>
    pick(assignment, ["slug", "title", "imgSrc", "summary", "order", "tags"])
  )

  const sorted = assignments.sort((a, b) => {
    return a.order - b.order
  })

  return { props: { assignments: sorted } }
}
