const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'ult13.falix.gg',
  port: 25980,
  username: 'lookAt_Bot'
})

function lookAtNearestPlayer () {
  const playerFilter = (entity) => entity.type === 'player'
  const playerEntity = bot.nearestEntity(playerFilter)
  
  if (!playerEntity) return
  
  const pos = playerEntity.position.offset(0, playerEntity.height, 0)
  bot.lookAt(pos)
}

bot.on('physicTick', lookAtNearestPlayer)