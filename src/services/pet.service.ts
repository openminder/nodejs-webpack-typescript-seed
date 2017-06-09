const sampleData: IPet = {
  tobi: { name: 'tobi', species: 'ferret' },
  loki: { name: 'loki', species: 'ferret' },
  jane: { name: 'jane', species: 'ferret' },
};

export default class PetService {
  public title: string;
  constructor() {
    // code here
    this.title = 'Sample';
  }

  public async list(ctx: any) {
    const names = Object.keys(sampleData);
    ctx.body = 'pets: ' + names.join(', ');
  }

  public async show(ctx: any, name: string) {
    const pet = sampleData[name];
    if (!pet) {
      return ctx.throw('cannot find that pet', 404);
    }
    ctx.body = pet.name + ' is a ' + pet.species;
  }

}

interface IPet {
  [key: string]: any;
}
