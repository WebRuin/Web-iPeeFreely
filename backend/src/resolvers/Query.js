const { forwardTo } = require('prisma-binding')

const Query = {
  bathrooms: forwardTo('db')
  // async items(parent, args, ctx, info) {
  //   const items = await ctx.db.query.items();

  //   return items;
  // }
}

module.exports = Query
