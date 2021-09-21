async create(ctx) {
  const res = await ctx.list.create(ctx.request.body);
  ctx.body = res;
}, async update(ctx) {
  const res = await ctx.list.updateOne({
    _id: ctx.params.id
  }, ctx.request.body);
  ctx.body = res;
}, async del(ctx) {
  const res = await ctx.list.deleteOne({
    _id: ctx.params.id
  });
  ctx.body = res;
},
