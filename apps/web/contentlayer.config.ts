import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from "contentlayer/source-files";

import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrismPlus from "rehype-prism-plus";

const computedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
  },
};

const Assignment = defineDocumentType(() => ({
  name: "Assignment",
  filePathPattern: "oefeningen/*.mdx",
  bodyType: "mdx",
  fields: {
    title: { type: "string", required: true },
    summary: { type: "string", required: true },
    imgSrc: { type: "string", required: true },
    order: { type: "number", required: true },
    tags: {
      type: "list",
      required: false,
      default: [],
      of: { type: "string" },
    },
  },
  computedFields,
}));

const contentLayerConfig = makeSource({
  contentDirPath: "content",
  documentTypes: [Assignment],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrismPlus,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["anchor"],
          },
        },
      ],
    ],
  },
});

export default contentLayerConfig;
