import { defineField, defineType } from "sanity";

export const stageType = defineType({
  name: "stage",
  title: "Stage",
  type: "document",
  fields: [
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "steps",
      title: "Steps",
      type: "array",
      of: [{ type: "reference", to: [{ type: "step" }] }],
    }),
  ],
});
