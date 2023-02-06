import { useMDXComponent } from "next-contentlayer/hooks";
import components from "../../components/MDXComponents";
import AssignmentLayout from "../../layouts/Assignment";
import {
  allAssignments,
  Assignment as AssignmentType,
} from "../../.contentlayer/generated";

export default function Assignment({
  assignment,
}: {
  assignment: AssignmentType;
}) {
  const Component = useMDXComponent(assignment.body.code);

  return (
    <AssignmentLayout assignment={assignment}>
      <Component components={{ ...components } as any} />
    </AssignmentLayout>
  );
}

export async function getStaticPaths() {
  return {
    paths: allAssignments.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const assignment = allAssignments.find(
    (assignment) => assignment.slug === params.slug
  );

  return { props: { assignment } };
}
