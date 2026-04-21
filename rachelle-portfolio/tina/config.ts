import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "artist",
        label: "Artist Information",
        path: "src/content/artist",
        format: "md",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Name",
            required: true,
          },
          {
            type: "string",
            name: "tagline",
            label: "Tagline",
          },
          {
            type: "rich-text",
            name: "bio",
            label: "Biography",
          },
          {
            type: "string",
            name: "location",
            label: "Location",
          },
          {
            type: "datetime",
            name: "activeSince",
            label: "Active Since",
          },
        ],
      },
      {
        name: "artworks",
        label: "Artworks",
        path: "src/content/artworks",
        format: "md",
        filename: "{{slug}}",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "string",
            name: "year",
            label: "Year",
          },
          {
            type: "string",
            name: "medium",
            label: "Medium",
          },
          {
            type: "image",
            name: "image",
            label: "Image",
          },
          {
            type: "string",
            name: "dimensions",
            label: "Dimensions",
          },
          {
            type: "rich-text",
            name: "description",
            label: "Description",
          },
        ],
      },
      {
        name: "exhibitions",
        label: "Exhibitions",
        path: "src/content/exhibitions",
        format: "md",
        filename: "{{slug}}",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Exhibition Title",
            required: true,
          },
          {
            type: "string",
            name: "venue",
            label: "Venue",
          },
          {
            type: "string",
            name: "location",
            label: "Location",
          },
          {
            type: "datetime",
            name: "startDate",
            label: "Start Date",
          },
          {
            type: "datetime",
            name: "endDate",
            label: "End Date",
          },
          {
            type: "rich-text",
            name: "description",
            label: "Description",
          },
        ],
      },
    ],
  },
});