'use strict'

/**
 * guitarra controller
 */

const { createCoreController } = require('@strapi/strapi').factories

module.exports = createCoreController('api::guitarra.guitarra', ({ strapi }) => ({
    async findOne (ctx) {

        const { url } = ctx.params

        const entity = await strapi.db.query('api::guitarra.guitarra').findOne({
            where: { url }
        })

        return entity

    }
}))
