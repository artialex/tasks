const faker = require('faker')

let userCount = 10
let postsPerUserCount = 10
let todosPerUserCount = 10

let users = [...Array(userCount)].map((_, ind) => ({
  id: ind + 1,
  ...faker.helpers.userCard(),
}))

let posts = users.flatMap((user) =>
  [...Array(postsPerUserCount)].map((_, ind) => ({
    id: (user.id - 1) * 10 + ind + 1,
    userId: user.id,
    title: faker.lorem.sentence(),
    body: faker.lorem.paragraph(),
  }))
)

let todos = users.flatMap((user) =>
  [...Array(todosPerUserCount)].map((_, ind) => ({
    id: (user.id - 1) * 10 + ind + 1,
    userId: user.id,
    title: faker.lorem.sentence(),
    isCompleted: faker.random.boolean(),
  }))
)

module.exports = () => ({
  users,
  posts,
  todos,
})
