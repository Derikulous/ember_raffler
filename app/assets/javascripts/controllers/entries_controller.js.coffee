Raffler.EntriesController = Ember.Controller.extend
  addEntry: ->
    @pushObject Ember.Object.create(name: @get('newEntryName'))
    @set('newEntryName', "")

drawWinner: ->
  @setEach('highlight', false)
  pool = @rejectProperty('winner')
  if pool.length > 0
    entry = pool[Math.floor(Math.random()*pool.length)]
    entry.set('winner', true)
    entry.set('highlight', true)
