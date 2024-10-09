import { type SchemaTypeDefinition } from "sanity";
import { contentBlockType } from "./contentBlockType";
import { moduleType } from "./moduleType";
import { stepType } from "./stepType";
import { stageType } from "./stageType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [contentBlockType, moduleType, stepType, stageType],
};
