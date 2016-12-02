const mongoose = require('mongoose')
const Schema = mongoose.Schema
const initData = require('../init.json')

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/CNode')
const db = mongoose.connection

db.on('error',() => console.log('database is error'))
db.once('open',() => {

  console.log('database is start')
  initDataBase()
})

const articleSchema = new Schema({
  title: String,
  author: String
})

const Models = {
  Article: mongoose.model('article',articleSchema)
}

const initDataBase = function () {
  Models.Article.find((err,articles) => {

    if (err) return new Error('查找错误')

    if (!articles.length) {
      console.log('Database opens for the first time...')

      Promise.all(initData.map(article => new Models.Article(article).save()))
        .then(() => console.log('init success'))
        .catch(() => console.log('init error'))
    }
  })
}

module.exports = Models
