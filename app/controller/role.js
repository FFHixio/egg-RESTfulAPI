const Controller = require('egg').Controller

class RoleController extends Controller {
  constructor(ctx) {
    super(ctx)

    this.createRule = {
      name: { type: 'string'}
    }

  }

  // 创建角色
  async create() {
    const { ctx, service } = this
    // 校验参数
    ctx.validate(this.createRule)
    // 组装参数
    const payload = ctx.request.body || {}
    // 调用 Service 进行业务处理
    const res = await service.role.create(payload)
    // 设置响应内容和响应状态码
    ctx.body = res
    ctx.status = 201
  }

  // 修改角色
  async update() {
    const { ctx, service } = this
    // 校验参数
    ctx.validate(this.createRule)
    // 组装参数
    const { id } = ctx.params
    const payload = ctx.request.body || {}
    // 调用 Service 进行业务处理
    await service.role.update(id, payload)
    // 设置响应内容和响应状态码
    ctx.status = 201
  }

  // 获取单个角色
  async show() {
    const { ctx, service } = this
    // 组装参数
    const { id } = ctx.params
    // 调用 Service 进行业务处理
    const res = await service.role.show(id)
    // 设置响应内容和响应状态码
    ctx.body = res
    ctx.status = 200
  }

  // 获取所有角色(分页/模糊)
  async index() {
    const { ctx, service } = this
    // 组装参数
    const payload = ctx.query
    // 调用 Service 进行业务处理
    const res = await service.role.index(payload)
    // 设置响应内容和响应状态码
    ctx.body = res
    ctx.status = 200
  }

  // 删除单个角色
  async destory() {
    const { ctx, service } = this
    // 校验参数
    const { id } = ctx.params
    // 调用 Service 进行业务处理
    await service.role.destory(id)
    // 设置响应内容和响应状态码
    ctx.status = 204
  }

  // 删除所选角色(条件id[])
  async removes() {
    const { ctx, service } = this
    // 组装参数
    // const payload = ctx.queries.id
    const payload = ctx.request.body.id
    // 调用 Service 进行业务处理
    const result = await service.role.removes(payload)
    // 设置响应内容和响应状态码
    ctx.status = 204
  }

}


module.exports = RoleController