import { TypedObject } from "sanity";
import { client } from "./client";

export type Stage = {
  _id: string;
  title: string;
  order: number;
  steps: Step[];
};

export type Step = {
  _id: string;
  title: string;
  modules: Module[];
};

export type ContentBlock = {
  _type: string;
  _key: string;
  contentType: string;
  pdfFile: {
    asset: {
      url: string;
    };
  };
  videoUrl: string;
  docxFile: {
    asset: {
      url: string;
    };
  };
  textContent: TypedObject[];
};

export type Module = {
  _id: string;
  _type: string;
  title: string;
  description?: string;
  instructions?: string;
  contentBlocks?: ContentBlock[];
};

export async function getStages(): Promise<any> {
  const query = `*[_type == "stage"] | order(order asc) {
    title,
    order
  }`;

  return client.fetch(query);
}

export async function getStagesWithSteps(): Promise<Stage[]> {
  const query = `*[_type == "stage"] | order(order asc) {
    _id,
    title,
    order,
    "steps": steps[]-> {
      _id,
      name
    }
  }`;

  return client.fetch(query);
}

export async function getStagesWithStepsAndModules(): Promise<Stage[]> {
  const query = `*[_type == "stage"] | order(order asc) {
    _id,
    title,
    order,
    "steps": steps[]-> {
      _id,
      title,
      "modules": modules[]-> {
        _id,
        _type,
        title,
      }
    }
  }`;

  return client.fetch(query);
}

export async function getModule(id: string): Promise<Module> {
  const query = `*[_type == "module" && _id == $id][0] {
    _id,
    _type,
    title,
    description,
    instructions,
    contentBlocks[] {
      _key,
      _type,
      contentType,
      pdfFile {
        asset-> {
          url
        }
      },
      videoUrl,
      docxFile {
        asset-> {
          url
        }
      },
      textContent
    }
  }`;

  return client.fetch(query, { id });
}
