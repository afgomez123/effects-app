
// id	2
// email	"janet.weaver@reqres.in"
// first_name	"Janet"
// last_name	"Weaver"
// avatar	"https://reqres.in/img/faces/2-image.jpg"


export class Usuario {
  constructor(
    public id: number,
    public email: string,
    public first_name: string,
    public last_name: string,
    public avatar: string
  ) { }
}
