export interface Poster {
  id: number
  attributes: PosterAttributes
}

export interface PosterAttributes {
  Title: string
  Description: string
  createdAt: string
  updatedAt: string
  Svg: SVG
  Thumbnail: SVG
  SvgBackgroundColorHex: string
}

export interface SVG {
  data: Data
}

export interface Data {
  id: number
  attributes: DataAttributes
}

export interface DataAttributes {
  name: string
  alternativeText: string
  caption: string
  width: number
  height: number
  formats: Formats | null
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: null
  provider: string
  provider_metadata: null
  createdAt: string
  updatedAt: string
}

export interface Formats {
  thumbnail: Thumbnail
}

export interface Thumbnail {
  name: string
  hash: string
  ext: string
  mime: string
  width: number
  height: number
  size: number
  path: null
  url: string
}
