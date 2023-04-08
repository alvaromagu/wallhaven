export interface Wallpaper {
  data: Data
}

export interface Data {
  id: string
  url: string
  short_url: string
  uploader: User
  views: number
  favorites: number
  source: string
  purity: string
  category: string
  dimension_x: number
  dimension_y: number
  resolution: string
  ratio: string
  file_size: number
  file_type: string
  created_at: string
  colors: string[]
  path: string
  thumbs: Thumbs
  tags: Tag[]
}

export interface User {
  username: string
  group: string
  avatar: Avatar
}

export interface Avatar {
  "200px": string
  "128px": string
  "32px": string
  "20px": string
}

export interface Thumbs {
  large: string
  original: string
  small: string
}

export interface Tag {
  id: number
  name: string
  alias: string
  category_id: number
  category: string
  purity: string
  created_at: string
}
