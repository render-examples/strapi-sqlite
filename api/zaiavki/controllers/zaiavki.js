const emailTo = process.env.NEXT_PUBLIC_TOEMAIL;

const { parseMultipartData, sanitizeEntity } = require('strapi-utils');
module.exports = {
  async create(ctx) {
    let entity;
    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.zaiavki.create(data, { files });
    } else {
      entity = await strapi.services.zaiavki.create(ctx.request.body);
    }

    strapi.services.sendmail.send(emailTo, emailTo, 'New request', `
      Name: ${entity.name}
      Email: ${entity.email}
      Phone: ${entity.phone}
      Budget: ${entity.budget}
      Message: ${entity.message}
    `);
    return sanitizeEntity(entity, { model: strapi.models.product });
  },
};
