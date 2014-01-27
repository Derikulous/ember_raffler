Raffler.ApplicationController = Ember.Controller.extend
entries: []

  addEntry: ->
    alert @get('newEntryName')
    @set('newEntryName', "")
