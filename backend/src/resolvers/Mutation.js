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
  updateBathroom(parent, args, ctx, info) {
    // First take a copy of the updates
    const updates = { ...args }
    // Remove the id of the updates
    delete updates.id;
    // Run the update methos
    return ctx.db.mutation.updateBathroom({
      data: updates,
      where: args.id,
    }, info)
  }
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
