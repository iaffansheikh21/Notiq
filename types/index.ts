// export interface Note {
//     id: string
//     title: string
//     content: string
//     starred: boolean
//     createdAt: Date
//     updatedAt: Date
//     comments: Comment[]
//     shared: boolean
//   }
  
//   export interface Comment {
//     id: string
//     content: string
//     createdAt: Date
//   }
  
//   export interface User {
//     name: string
//     avatar: string
//   }
  

export interface Note {
  id: string
  title: string
  content: string
  starred: boolean
  createdAt: Date
  updatedAt: Date
  comments: Comment[]
  shared: boolean
  isHtml?: boolean
}

export interface Comment {
  id: string
  content: string
  createdAt: Date
}

export interface User {
  name: string
  avatar: string
}
