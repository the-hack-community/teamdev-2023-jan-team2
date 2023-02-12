declare type MyProfileSection = {
  user: {
    icon: string
    name: string
    description: string
    posts: Post[]
  }
}

type Post = {
  url: string
  caption: string
  image: string
}
