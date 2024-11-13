"use client";

import { PageElementsProvider } from "@webiny/app-page-builder-elements";

import { createBlock } from "@webiny/app-page-builder-elements/renderers/block";
import { createButton } from "@webiny/app-page-builder-elements/renderers/button";
import { createCell } from "@webiny/app-page-builder-elements/renderers/cell";
import { createDocument } from "@webiny/app-page-builder-elements/renderers/document";
import { createGrid } from "@webiny/app-page-builder-elements/renderers/grid";
import { createHeading } from "@webiny/app-page-builder-elements/renderers/heading";
import { createImage } from "@webiny/app-page-builder-elements/renderers/image";
import { createParagraph } from "@webiny/app-page-builder-elements/renderers/paragraph";
import { createForm } from "@webiny/app-page-builder-elements/renderers/form";
import {
  createGetFormDataLoader,
  createLogFormViewDataLoader,
  createSubmitFormDataLoader,
} from "@webiny/app-page-builder-elements/renderers/form/dataLoaders";

// Elements.
import { createCodesandbox } from "@webiny/app-page-builder-elements/renderers/embeds/codesandbox";
import { createPinterest } from "@webiny/app-page-builder-elements/renderers/embeds/pinterest";
import { createSoundcloud } from "@webiny/app-page-builder-elements/renderers/embeds/soundcloud";
import { createTwitter } from "@webiny/app-page-builder-elements/renderers/embeds/twitter";
import { createVimeo } from "@webiny/app-page-builder-elements/renderers/embeds/vimeo";
import { createYoutube } from "@webiny/app-page-builder-elements/renderers/embeds/youtube";
import { createIcon } from "@webiny/app-page-builder-elements/renderers/icon";
import { createList } from "@webiny/app-page-builder-elements/renderers/list";
import { createPagesList } from "@webiny/app-page-builder-elements/renderers/pagesList";
import { createDefaultDataLoader } from "@webiny/app-page-builder-elements/renderers/pagesList/dataLoaders";
import { createDefaultPagesListComponent } from "@webiny/app-page-builder-elements/renderers/pagesList/pagesListComponents";
import { createQuote } from "@webiny/app-page-builder-elements/renderers/quote";

// Attributes modifiers.
import { createClassName } from "@webiny/app-page-builder-elements/modifiers/attributes/className";
import { createId } from "@webiny/app-page-builder-elements/modifiers/attributes/id";

// Styles modifiers.
import { createBackground } from "@webiny/app-page-builder-elements/modifiers/styles/background";
import { createBorder } from "@webiny/app-page-builder-elements/modifiers/styles/border";
import { createHeight } from "@webiny/app-page-builder-elements/modifiers/styles/height";
import { createHorizontalAlign } from "@webiny/app-page-builder-elements/modifiers/styles/horizontalAlign";
import { createMargin } from "@webiny/app-page-builder-elements/modifiers/styles/margin";
import { createPadding } from "@webiny/app-page-builder-elements/modifiers/styles/padding";
import { createShadow } from "@webiny/app-page-builder-elements/modifiers/styles/shadow";
import { createText } from "@webiny/app-page-builder-elements/modifiers/styles/text";
import { createTextAlign } from "@webiny/app-page-builder-elements/modifiers/styles/textAlign";
import { createVerticalAlign } from "@webiny/app-page-builder-elements/modifiers/styles/verticalAlign";
import { createVisibility } from "@webiny/app-page-builder-elements/modifiers/styles/visibility";
import { createWidth } from "@webiny/app-page-builder-elements/modifiers/styles/width";

// Theme
import { theme } from "../../themeWebiny";
import { SpaceX } from "@/lib/spacex-page-element/apps/theme/pageElements/spaceX/SpaceX";

const renderers = {
  block: createBlock(),
  button: createButton({
    clickHandlers: [
      {
        id: "simple-handler",
        name: "Simple handler 1",
        handler: () => {
          alert("Simple handler!");
        },
      },
    ],
  }),
  cell: createCell(),
  document: createDocument(),
  grid: createGrid(),
  heading: createHeading(),
  list: createList(),
  icon: createIcon(),
  image: createImage(),
  paragraph: createParagraph(),
  quote: createQuote(),
  twitter: createTwitter(),
  pinterest: createPinterest(),
  codesandbox: createCodesandbox(),
  soundcloud: createSoundcloud(),
  youtube: createYoutube(),
  vimeo: createVimeo(),
  "pages-list": createPagesList({
    dataLoader: createDefaultDataLoader({
      apiUrl: "https://d26f8gwtfedanq.cloudfront.net/graphql",
      includeHeaders: {
        "x-tenant": "root",
      },
    }),
    pagesListComponents: {
      default: createDefaultPagesListComponent(),
      default2: createDefaultPagesListComponent(),
      default3: createDefaultPagesListComponent(),
    },
  }),
  form: createForm({
    dataLoaders: {
      getForm: createGetFormDataLoader({
        apiUrl: "https://d26f8gwtfedanq.cloudfront.net/graphql",
      }),
      logFormView: createLogFormViewDataLoader({
        apiUrl: "https://d26f8gwtfedanq.cloudfront.net/graphql",
      }),
      submitForm: createSubmitFormDataLoader({
        apiUrl: "https://d26f8gwtfedanq.cloudfront.net/graphql",
      }),
    },
    formLayoutComponents: [],
  }),
  spaceX: <SpaceX />,
};

interface PbPageElementsProviderProps {
  children: React.ReactNode;
}

const PbPageElementsProvider = ({ children }: PbPageElementsProviderProps) => (
  <PageElementsProvider
    theme={theme}
    renderers={renderers}
    modifiers={{
      attributes: {
        id: createId(),
        className: createClassName(),
      },
      styles: {
        background: createBackground(),
        border: createBorder(),
        height: createHeight(),
        horizontalAlign: createHorizontalAlign(),
        margin: createMargin(),
        text: createText(),
        textAlign: createTextAlign(),
        padding: createPadding(),
        shadow: createShadow(),
        verticalAlign: createVerticalAlign(),
        visibility: createVisibility(),
        width: createWidth(),
      },
    }}
  >
    {children}
  </PageElementsProvider>
);

export default PbPageElementsProvider;
