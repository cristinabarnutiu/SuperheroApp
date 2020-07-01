import { Photo } from "./photo";

export interface Superhero
{
  id: number;
  name: string;
  gender: string;
  superpower: string;
  studio: string;
  photoUrl: string;

  //reviews?: Review[];

  photos?: Photo[];
}


        //public int Id { get; set; }
        //public string Name { get; set; }
        //public string Gender { get; set; }
        //public string Superpower { get; set; }
        //public Studio Studio { get; set; }
        //public ICollection < Photo > Photos { get; set; }
        //public ICollection < Review > Reviews { get; set; }
        //public ICollection < UserSuperhero > UserSuperheroes { get; set; }
