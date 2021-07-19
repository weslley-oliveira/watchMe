import { Button } from "./Button";
import '../styles/sidebar.scss';


type genres = {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
}

interface SideBarProps {
  genres: genres[];
  selectedGenreId: number;
  set: (id:number) => void;
}

export function SideBar({genres, selectedGenreId, set } :SideBarProps) {
  
  function handleClickButton(id: number) {
    set(id);
  }

  return(
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
  )
}