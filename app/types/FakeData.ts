export interface FakeData {
  source: string;
  type: string;
  categories: Category[];
  data: Data[];
}

export interface Category {
  id: string;
  type: string;
  title: string;
}

export interface Data {
  ref: string;
  info: {
    type: string;
    images: {
      type: string;
      data: MetaData[];
    };
  };
}

interface MetaData {
  url: string;
  width: number;
  height: number;
  mimeType: string;
  orientation: string;
  aspectRatio: number;
  type: string;
}
