import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import './global.css';

import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/LucasTropardi.png',
      name: 'Josivaldo Catatumba',
      role: 'Programador html'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz para treinar programação em HTML 🚀' },
      { type: 'link', content: 'github.com/josivaldo' },
    ],
    publishedAt: new Date('2024-10-28 22:00:58'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://images.unsplash.com/photo-1610177498573-78deaa4a797b?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Doronel Segisfredo',
      role: 'Formatador de pc'
    },
    content: [
      { type: 'paragraph', content: 'Salve 👋' },
      { type: 'paragraph', content: 'Precisando arrumar seu pc, liga pra mim. 18 989898989.' },
      { type: 'link', content: 'arrumapc.com/contato' },
    ],
    publishedAt: new Date('2024-10-27 21:05:15'),
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://plus.unsplash.com/premium_photo-1683129653857-8db3e20ad791?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Chico Pinico',
      role: 'Professor de TI'
    },
    content: [
      { type: 'paragraph', content: 'Olá 👋' },
      { type: 'paragraph', content: 'Vou apenas deixar uma mensagem de teste, para testar.' },
      { type: 'link', content: 'professordeti.com' },
    ],
    publishedAt: new Date('2024-10-26 20:45:45'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
          );
          })}
        </main>
      </div>
    </div>
  )
}

