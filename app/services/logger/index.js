const colors = require('colors');
const moment = require('moment-timezone');

colors.enabled = true;

class Logger {
    constructor() {
        this.colors = {
            info: 'green',
            warn: 'yellow',
            error: 'red',
        };

        this.info = (...message) => this.log('info', ...message);
        this.warn = (...message) => this.log('warn', ...message);
        this.error = (...message) => this.log('error', ...message);
    }

    log(type, ...msg) {
        try {
            const typeUpperCase = `[${type.toUpperCase()}]`;
            const timezone = moment()
                .tz(process.env.TIMEZONE)
                .format('YYYY-MM-DD HH:mm:ss.SSSS');

            const information = colors[this.colors[type]](
                `${timezone} - ${typeUpperCase}`
            );

            // eslint-disable-next-line no-console
            console.log(`${information} -`, ...msg);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(error);

            // eslint-disable-next-line no-console
            console.log(`${colors.red('[ERROR]')}  - Log type not found`);
        }
    }
}

module.exports = new Logger();
