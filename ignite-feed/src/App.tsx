import styles from './App.module.css'
import { Header, Sidebar, Post } from './components'
import './global.css'
import { PostType } from './components/Post'


const posts: PostType[] = [
  {
    id: 1,
    author: {
      name: 'Leandro Corrêa',
      avatarUrl: 'https://github.com/leandrocorreajau.png',
      role: 'CTO Web'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera!' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio, conferem lá!' },
      { type: 'link', content: 'test.dev' },
    ],
    publishedAt: new Date('2024-01-01 00:00:00')
  }, {
    id: 2,
    author: {
      name: 'Leandro Corrêa',
      avatarUrl: 'https://github.com/leandrocorreajau.png',
      role: 'CTO Web'
    },
    content: [
      { type: 'paragraph', content: 'Olá, tudo bom pessoal?' },
      { type: 'paragraph', content: 'Verifique nossas postagem novas.' },
      { type: 'link', content: 'test.dev' },
    ],
    publishedAt: new Date('2024-01-10 00:00:00')
  }, {
    id: 3,
    author: {
      name: 'Leandro Corrêa',
      avatarUrl: 'https://github.com/leandrocorreajau.png',
      role: 'CTO Web'
    },
    content: [
      { type: 'paragraph', content: 'Visite nosso site' },
    ],
    publishedAt: new Date('2023-12-10 00:00:00')
  }
]

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => (
            <Post
              key={post.id}
              post={post}
            />
          ))}
        </main>
      </div>
    </div>
  )
}

export default App
