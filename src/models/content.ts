export interface Content {
  Pitch: string
  Introduction: string
  Imprint: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  OrderText: string
  ImprintAddress: string
  StackedPhotos: OrderBackgroundPicture
  PhotoBelowIntro: OrderBackgroundPicture
  OrderBackgroundPicture: OrderBackgroundPicture
}

export interface OrderBackgroundPicture {
  data: OrderBackgroundPictureData
}

export interface OrderBackgroundPictureData {
  id: number
  attributes: FluffyAttributes
}

export interface FluffyAttributes {
  name: string
  alternativeText: string
  caption: string
  width: number
  height: number
  formats: Formats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: null
  provider: string
  provider_metadata: ProviderMetadata
  createdAt: string
  updatedAt: string
}

export interface Formats {
  small: Medium
  medium: Medium
  thumbnail: Medium
}

export interface Medium {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: null
  size: number
  width: number
  height: number
  provider_metadata: ProviderMetadata
}

export interface ProviderMetadata {
  public_id: string
  resource_type: ResourceType
}

export enum ResourceType {
  Image = 'image',
}

export interface Meta {
}
