import Templates from './templates'

export default {
  Query: {
    templates() {
      return Templates.find({}).fetch()
    }
  }
}
