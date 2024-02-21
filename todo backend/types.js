const zod = require("zod");

var createTodo = zod.object({title:zod.string(),
description:zod.string(), completed:zod.string(),
})

var updateTodo = zod.object({
    id:zod.string()
})

module.exports = {
    createTodo,updateTodo
}