export type IBook = {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: {
    title: string;
    subtitle: string;
    authors?: string[];
    publisher: string;
    description?: string;
    publishedDate: string;
    readingModes: {
      text: boolean;
      image: boolean;
    };
    pageCount: number;
    printedPageCount: number;
    dimensions: {
      height: string;
    };
    printType: string;
    maturityRating: string;
    allowAnonLogging: boolean;
    contentVersion: string;
    panelizationSummary: {
      containsEpubBubbles: false;
      containsImageBubbles: false;
    };
    imageLinks?: {
      smallThumbnail: string;
      thumbnail: string;
      small: string;
      medium: string;
      large: string;
      extraLarge: string;
    };
    categories: string[]
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
  };
  saleInfo: {
    country: string;
    saleability: string;
    isEbook: boolean;
  };
  accessInfo: {
    country: string;
    viewability: string;
    embeddable: string;
    publicDomain: string;
    textToSpeechPermission: string;
    epub: {
      isAvailable: string;
    };
    pdf: {
      isAvailable: boolean;
    };
    webReaderLink: string;
    accessViewStatus: string;
    quoteSharingAllowed: boolean;
  };
};


export type IBooksData = {
  items: IBook[],
  totalItems: number,
  kind: string
}