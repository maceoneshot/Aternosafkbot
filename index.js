const mineflayer = require('mineflayer')

function createBot() {
  const bot = mineflayer.createBot({
    host: 'PrimezX.aternos.me', // Your server IP
    port: 63101,                 // Your server port
    username: 'ProAFKBOT',       // Bot username
    version: false               // Auto-detect
  })

  bot.on('spawn', () => {
    console.log('✅ Bot is online!')
    setInterval(() => {
      bot.setControlState('jump', true)
      setTimeout(() => bot.setControlState('jump', false), 500)
    }, 30000)
  })

  bot.on('end', () => {
    console.log('⚠ Bot disconnected! Reconnecting...')
    setTimeout(createBot, 5000)
  })

  bot.on('error', err => console.log('❌ Error:', err))
}

createBot()
