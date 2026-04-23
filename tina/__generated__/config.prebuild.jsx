// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.CF_PAGES_BRANCH || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  clientId: process.env.PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public"
    }
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
            required: true
          },
          {
            type: "string",
            name: "tagline",
            label: "Tagline"
          },
          {
            type: "rich-text",
            name: "bio",
            label: "Biography"
          },
          {
            type: "string",
            name: "location",
            label: "Location"
          },
          {
            type: "string",
            name: "activeSince",
            label: "Making Art Since"
          },
          {
            type: "image",
            name: "heroImage",
            label: "Hero Image"
          }
        ]
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
            required: true
          },
          {
            type: "string",
            name: "year",
            label: "Year"
          },
          {
            type: "string",
            name: "medium",
            label: "Medium"
          },
          {
            type: "image",
            name: "image",
            label: "Image"
          },
          {
            type: "string",
            name: "dimensions",
            label: "Dimensions"
          },
          {
            type: "boolean",
            name: "featured",
            label: "Featured on Home"
          },
          {
            type: "rich-text",
            name: "description",
            label: "Description"
          }
        ]
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
            required: true
          },
          {
            type: "string",
            name: "venue",
            label: "Venue"
          },
          {
            type: "string",
            name: "location",
            label: "Location"
          },
          {
            type: "string",
            name: "startDate",
            label: "Start Date"
          },
          {
            type: "string",
            name: "endDate",
            label: "End Date"
          },
          {
            type: "boolean",
            name: "featured",
            label: "Featured"
          },
          {
            type: "rich-text",
            name: "description",
            label: "Description"
          }
        ]
      },
      {
        name: "workshops",
        label: "Workshops",
        path: "src/content/workshops",
        format: "md",
        filename: "{{slug}}",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Workshop Title",
            required: true
          },
          {
            type: "string",
            name: "organization",
            label: "Organization"
          },
          {
            type: "string",
            name: "location",
            label: "Location"
          },
          {
            type: "string",
            name: "date",
            label: "Date"
          },
          {
            type: "string",
            name: "time",
            label: "Time"
          },
          {
            type: "string",
            name: "registerUrl",
            label: "Registration URL"
          },
          {
            type: "boolean",
            name: "past",
            label: "Past Workshop"
          },
          {
            type: "rich-text",
            name: "description",
            label: "Description"
          }
        ]
      },
      {
        name: "comics",
        label: "Comics",
        path: "src/content/comics",
        format: "md",
        filename: "{{slug}}",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true
          },
          {
            type: "string",
            name: "year",
            label: "Year"
          },
          {
            type: "string",
            name: "format",
            label: "Format"
          },
          {
            type: "image",
            name: "image",
            label: "Image"
          },
          {
            type: "boolean",
            name: "featured",
            label: "Featured"
          },
          {
            type: "rich-text",
            name: "description",
            label: "Description"
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
