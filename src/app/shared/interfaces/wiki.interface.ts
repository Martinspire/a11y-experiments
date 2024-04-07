export interface IWikiQuery {
  batchomplete: string;
  query: {
    normalized: IWikiNormalized[],
    pages: {
      [id: string]: IWikiResult,
    },
  };
}

export interface IWikiRestQuery {
  type: string;
  title: string;
  displaytitle: string;
  wikibase_item: string;
  pageid: number;
  thumbnail: {
    source: string,
    width: number,
    height: number,
  };
  originalimage: {
    source: string,
    width: number,
    height: number,
  };
  lang: string;
  dir: string;
  revision: string;
  tid: string;
  timestamp: string; // "2024-03-08T18:57:33Z",
  description: string;
  content_urls: {
    desktop: {
      page: string,
    },
    mobile: {
      page: string,
    },
  };
  extract: string;
  extract_html: string; // html as string
}

export interface IWikiNormalized {
  from: string;
  to: string;
}

export interface IWikiResult {
  pageid: number;
  ns: number;
  title: string;
  thumbnail?: IWikiThumb;
  pageImage?: string;
  extract?: string;
}

export interface IWikiThumb {
  source: string;
  width: number;
  height: number;
}
