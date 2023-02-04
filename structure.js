import Iframe from "sanity-plugin-iframe-pane";
import { DefaultDocumentNodeResolver } from "sanity/desk";

// Import this into the deskTool() plugin
export const getDefaultDocumentNode = (S, { schemaType }) => {
  // Only show preview pane on `post` schema type documents
  if (schemaType === "post") {
    return S.document().views([
      S.view.form(),
      S.view
        .component(Iframe)
        .options({
          url: `${
            process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000"
          }/api/preview`,
          // Optional: Set the default size
          defaultSize: `desktop`, // default `desktop`

          // Optional: Add a reload button, or reload on new document revisions
          reload: {
            button: true, // default `undefined`
          },

          // Optional: Pass attributes to the underlying `iframe` element:
          // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe
          attributes: {},
        })
        .title("Preview"),
    ]);
  }
};
