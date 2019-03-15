const Mutations = {
  async createBathroom(parent, args, ctx, info) {
    // TODO Check if the are logged in

    const bathroom = await ctx.db.mutation.createBathroom(
      {
        data: {
          ...args
        }
      },
      info
    );

    return bathroom;
  },
  // createDog(parent, args, ctx, info) {
  //   global.dogs = global.dogs || [];
  //   // Create a dog
  //   const newDog = { name: args.name};
  //   global.dogs.push(newDog);
  //   return newDog;
  // },
  async deleteBathroom(parent, args, ctx, info) {
    const where = { id: args.id };
    // 1. find the item
    const item = await ctx.db.query.bathroom({ where }, `{ id title}`);
    // 2. Check if they own that item, or have the permissions
    // TODO
    // 3. Delete it!
    return ctx.db.mutation.deleteBathroom({ where }, info);
  }
};

module.exports = Mutations;
