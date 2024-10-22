import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      
      <img
        className={styles.cover} 
        src="https://plus.unsplash.com/premium_photo-1685086785636-2a1a0e5b591f?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      />

      <div className={styles.profile}>

        <Avatar src="https://media.licdn.com/dms/image/v2/D4D03AQGiqHvSJs-HXg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1729175256274?e=1735171200&v=beta&t=UkTTnw8M31Qtz3gGWrph-76CAZ17TZzAa0ZyiFtsfmQ" />
        
        <strong>Lucas Tropardi</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar perfil
        </a>
      </footer>
    </aside>
  );
}

