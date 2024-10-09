import { defineField, defineType } from "sanity";

export const contentBlockType = defineType({
  name: "contentBlock",
  title: "Content Block",
  type: "object",
  fields: [
    // Content Type Selection
    defineField({
      name: "contentType",
      title: "Content Type",
      type: "string",
      options: {
        list: [
          { title: "PDF", value: "pdf" },
          { title: "Video", value: "video" },
          { title: "DOCX", value: "docx" },
          { title: "Text", value: "text" },
        ],
        layout: "dropdown",
      },
    }),
    // PDF File Field
    defineField({
      name: "pdfFile",
      title: "PDF File",
      type: "file",
      hidden: ({ parent }) => parent?.contentType !== "pdf",
      options: {
        accept: ".pdf",
      },
    }),
    // Video URL Field
    defineField({
      name: "videoUrl",
      title: "Video URL",
      type: "url",
      hidden: ({ parent }) => parent?.contentType !== "video",
    }),
    // DOCX File Field
    defineField({
      name: "docxFile",
      title: "DOCX File",
      type: "file",
      hidden: ({ parent }) => parent?.contentType !== "docx",
      options: {
        accept: ".docx",
      },
    }),
    // Text Content Field
    defineField({
      name: "textContent",
      title: "Text Content",
      type: "array",
      of: [{ type: "block" }],
      hidden: ({ parent }) => parent?.contentType !== "text",
    }),
  ],
});
