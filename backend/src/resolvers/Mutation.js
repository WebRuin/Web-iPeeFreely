const Mutations = {
  async createBathroom (parent, args, ctx, info) {
    // TODO Check if the are logged in

    const bathroom = await ctx.db.mutation.createBathroom(
      {
        data: {
          ...args
        }
      },
      info
    )

    return bathroom
  }
  // createDog(parent, args, ctx, info) {
  //   global.dogs = global.dogs || [];
  //   // Create a dog
  //   const newDog = { name: args.name};
  //   global.dogs.push(newDog);
  //   return newDog;
  // },
}

module.exports = Mutations
